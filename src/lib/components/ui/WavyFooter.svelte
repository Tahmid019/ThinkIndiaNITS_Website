<script lang="ts">
  import * as twgl from 'twgl.js';
  import { onMount, onDestroy } from 'svelte';

  let canvas: HTMLCanvasElement;
  let animationFrameId: number;
  let mouseX = 0;
  let mouseY = 0;

  const vertexShaderSource = `
    attribute vec4 position;
    void main() {
      gl_Position = vec4( position );
    }
  `;

  const fragmentShaderSource = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    
    //Taken from Book of Shaders
    //https://thebookofshaders.com/edit.php#11/2d-gnoise.frag
    vec2 random2(vec2 st){
      st = vec2( dot(st,vec2(127.1,311.7)),
                dot(st,vec2(269.5,183.3)) );
      return -1.0 + 2.0*fract(sin(st)*43758.5453123);
    }

    // Gradient Noise by Inigo Quilez - iq/2013
    // https://www.shadertoy.com/view/XdXGW8
    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        vec2 u = f*f*(3.0-2.0*f);

        return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                        dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                    mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                        dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      
      float waveOffset = 0.3;
      float waveCenter = 1.;
      float waveFocus = 0.25;
      float waveSpeed = 2.; //Lower faster.
      
      float wMin = waveCenter - waveFocus;
      float wMax = waveCenter + waveFocus;
      
      //Smoothly extend on the x axis without stretching the noise
      uv.x *= u_resolution.x/u_resolution.y;
      uv.x += 1787.74328; //random starting seed
      uv.y *= 2.;

      float rn = noise( vec2(uv.x, u_time / waveSpeed));
      float ry = uv.y - rn;
      float r = smoothstep(wMin, wMax, ry);
      
      float bn = noise( vec2(uv.x, u_time / waveSpeed - waveOffset));
      float by = uv.y - bn;
      float b = smoothstep(wMin, wMax, by);
      
      float gn = noise( vec2(uv.x, u_time / waveSpeed + waveOffset));
      float gy = uv.y - gn;
      float g = smoothstep(wMin, wMax, gy);
      
      //float a = (r + g + b) / 3.0;
      
      gl_FragColor = vec4(r, b, g, 1.0);
    }
  `;

  type GL = WebGLRenderingContext | WebGL2RenderingContext;
  let gl: GL;
  let programInfo: twgl.ProgramInfo;
  let bufferInfo: twgl.BufferInfo;

  // Mouse move handler
  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  /**
   * Rendering loop
   * @param time - High resolution time stamp
   */
  function render(time: number) {
    if (!gl || !programInfo || !bufferInfo) return;

    twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement, 0.5);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Uniforms object
    const uniforms = {
      u_time: (time) * 0.002,
      u_resolution: [gl.canvas.width, gl.canvas.height],
      u_mouse: [mouseX, mouseY],
    };

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, bufferInfo);

    animationFrameId = requestAnimationFrame(render);
  }

  onMount(() => {
    const context = canvas.getContext('webgl');
    if (!context) {
        console.error("WebGL not supported");
        return;
    }
    gl = context;

    try {
        programInfo = twgl.createProgramInfo(gl, [vertexShaderSource, fragmentShaderSource]);

        const arrays = {
            position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
        };
        bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
    } catch (e) {
        console.error("Error creating shader program or buffers:", e);
        return;
    }


    animationFrameId = requestAnimationFrame(render);

    canvas.addEventListener('mousemove', handleMouseMove);
  });

  onDestroy(() => {
    cancelAnimationFrame(animationFrameId);
    canvas?.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<style global>
  body {
    margin: 0;
    font-family: consolas;
    
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(calc(50vw - 50%), -50%);
  }

  canvas {
    position: absolute;
    bottom: 0;
    pointer-events: none;
    width: 100%;
    height: 50vh;
  }
</style>

<div id="main" class="mx-20  mt-20 sm:mx-5 sm:mt-5">
  <h1 class="text-3xl font-bold">Wavey Footer</h1>
  <p class="text-xl">A GLSL shader inspired by <a href="https://twitter.com/marioecg/status/1455744243423645696" class="text-blue-500 hover:underline">Mario Carrillo</a>.</p>
</div>

<canvas bind:this={canvas} id="canvas"></canvas>

<footer class="text-white text-2xl">
  Made by <a href="https://twitter.com/jhancock532" class="text-white hover:underline">@jhancock532</a>
</footer>
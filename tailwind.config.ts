import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				body: ['Roboto', 'sans-serif'],
			},
			fontSize: {
				display: [
				'clamp(3rem, 6vw, 5rem)', // 48px → 80px
				{ lineHeight: '1.1', fontWeight: '700' }
				],

				// Headings
				h1: [
				'clamp(2.25rem, 5vw, 3rem)', // 36px → 48px
				{ lineHeight: '1.2', fontWeight: '700' }
				],
				h2: [
				'clamp(1.75rem, 4vw, 2.5rem)', // 28px → 40px
				{ lineHeight: '1.3', fontWeight: '700' }
				],
				h3: [
				'clamp(1.5rem, 3vw, 2rem)', // 24px → 32px
				{ lineHeight: '1.3', fontWeight: '600' }
				],
				h4: [
				'clamp(1.25rem, 2.5vw, 1.5rem)', // 20px → 24px
				{ lineHeight: '1.4', fontWeight: '600' }
				],
				h5: [
				'clamp(1.125rem, 2vw, 1.25rem)', // 18px → 20px
				{ lineHeight: '1.4', fontWeight: '600' }
				],
				h6: [
				'clamp(1rem, 1.5vw, 1.125rem)', // 16px → 18px
				{ lineHeight: '1.5', fontWeight: '600' }
				],

				// Body text
				body: [
				'clamp(1rem, 1.5vw, 1.125rem)', // 16px → 18px
				{ lineHeight: '1.6', fontWeight: '400' }
				],
				small: [
				'clamp(0.875rem, 1vw, 1rem)', // 14px → 16px
				{ lineHeight: '1.5', fontWeight: '400' }
				],
				tiny: [
				'clamp(0.75rem, 0.8vw, 0.875rem)', // 12px → 14px
				{ lineHeight: '1.4', fontWeight: '400' }
				],
			},
			height: {
				logo: "clamp(1.25rem, 4vw, 5rem)" 
			},
			padding: {
				section: "clamp(1rem, 5vw, 4rem)",   // dynamic vertical/horizontal padding
				card: "clamp(0.5rem, 2vw, 2rem)"     // fluid card padding
			},
				margin: {
				section: "clamp(1rem, 5vw, 6rem)"
			},
				gap: {
				fluid: "clamp(0.5rem, 3vw, 3rem)"
			},
			animation: {
				'text-gradient': 'text-gradient 1.5s linear infinite',
				shine: 'shine 2s linear infinite',
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				aurora: 'aurora 60s linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
			},
			keyframes: {
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},

				shine: {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				orbit: {
					'0%': {
						transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
					}
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},
				aurora: {
					from: {
						backgroundPosition: '50% 50%, 50% 50%'
					},
					to: {
						backgroundPosition: '350% 50%, 350% 50%'
					}
				}
			}
		}
	},

	plugins: []
} satisfies Config;

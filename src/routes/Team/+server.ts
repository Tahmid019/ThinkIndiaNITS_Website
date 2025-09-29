import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.ts';
import { supabase } from '$lib/supabaseClient.js';

export const GET: RequestHandler = async () => {
	const { data, error } = await supabase.from('team').select('*').order('id');

	if (error) {
		console.error(error);
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}

	return json(data);
};

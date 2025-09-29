import type { PageServerLoad } from './$types.js';
import { supabase } from '$lib/supabaseClient.js';

export const load: PageServerLoad = async () => {
	const { data: Teams, error } = await supabase.from('Teams').select('*');
    
	if (error) {
		console.error('Error fetching team:', error);
		return { tdata: [] };
	}

	return { tdata: Teams };
};

import { getNotes } from '$lib/Database/database';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    const notes = await getNotes();

    return { notes };
}
import { clearNotes, createNote, deleteNote, getNotes, updateNote } from '$lib/Database/database';
import { fail, type Actions } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    const notes = await getNotes();

    return { notes };
}
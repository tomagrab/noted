import db, { deleteNote, updateNote } from '$lib/Database/database';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
    const note = db.note.findUnique({
        where: { id: Number(params.slug) },
    });

    return { note };
}

export const actions: Actions = {
    updateNote: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));
        const title = String(formData.get("title"));
        const content = String(formData.get("content"));

        if (!id) {
            return fail(400, {id, missing: true});
        }

        if (!title) {
            return fail(400, {title, missing: true});
        }

        if (!content) {
            return fail(400, {content, missing: true});
        }


        updateNote(id, title, content);

        return { success: true };
    },

    deleteNote: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));

        if (!id) {
            return fail(400, {id, missing: true});
        }

        deleteNote(id);

        return { success: true };
    },
}
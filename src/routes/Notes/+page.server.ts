import { clearNotes, createNote, deleteNote, getNotes, updateNote } from "$lib/Database/database";
import { fail, type Actions } from "@sveltejs/kit";


export const actions: Actions = {
    createNote: async ({ request }) => {
        const formData = await request.formData();
        const title = String(formData.get("title"));
        const content = String(formData.get("content"));
        const published: Boolean = true;

        if (!title) {
            return fail(400, {title, missing: true});
        }

        if (!content) {
            return fail(400, {content, missing: true});
        }

        createNote({title, content, published});

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


    clearNotes: async () => {
        clearNotes();

        return { success: true };
    }
}
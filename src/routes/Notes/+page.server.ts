import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    addNote: async ({request}) => {
        const formData = await request.formData();
        const note = String(formData.get("note"));

        if (!note) {
            return {
                status: 400,
                body: {
                    error: "Note is required"
                }
            }
        }

        addNote(note)
    },
    deleteNote: async ({request}) => {},
    updateNote: async ({request}) => {},
    clearNotes: async ({request}) => {},
};

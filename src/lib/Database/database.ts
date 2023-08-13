import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default db;

// get all notes
export const getNotes = async () => {
    return await db.note.findMany();
}

// get note by id
export const getNoteById = async (id: number) => {
    return await db.note.findUnique({
        where: { id: id },
    });
}

// create note
export const createNote = async (data: any) => {
    return await db.note.create({
        data: data,
    });
}

// update note
export const updateNote = async (id: number, title: string, content: string) => {
    return await db.note.update({
        where: { id: id },
        data: {
            title: title,
            content: content,
        },
    });
}

// delete note
export const deleteNote = async (id: number) => {
    return await db.note.delete({
        where: { id: id },
    });
}

// Clear all notes
export const clearNotes = async () => {
    return await db.note.deleteMany();
}


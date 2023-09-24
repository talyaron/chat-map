import { Message, MessageSchema } from "@/models/chats/messageModel";
import { DB } from "../config";
import { addDoc, collection, doc } from "firebase/firestore";

export async function addMessageToDB(message: Message) {
    try {
        MessageSchema.parse(message)
        const chatRef = collection(DB, "messages");
        const messageRef = await addDoc(chatRef, message);
        return { ok: true, messageId: messageRef.id }
    } catch (error: any) {
        console.error(error)
        return { ok: false, error: error.message }
    }
}
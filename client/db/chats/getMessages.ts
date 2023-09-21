import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { DB } from "../config";
import { MessageSchema } from "@/models/chats/messageModel";

export function listenToMessages(chatId: string) {
    try {
        if(!chatId) throw new Error("chatId is required");

        const chatRef = collection(DB, "messages");
        const q = query(chatRef, where("chatId", "==", chatId), orderBy("createdAt", "desc"), limit(10));
        return onSnapshot(chatRef, (messagesDB) => {
            messagesDB.forEach((messageDB) => {
                try {
                    MessageSchema.parse(messageDB.data())
                    console.log(messageDB.data());
                    // add to store (Zustand)

                    
                } catch (error) {
                    console.error(error)
                }
               
            })
        })
    } catch (error: any) {
        console.error(error)
       // we need it to
        return ()=>{}
    }
}
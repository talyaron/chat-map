import { doc, setDoc } from "firebase/firestore"
import { DB } from "../config"
import { User, UserSchema } from "@/models/users/userssModle"

//save user after login to db
export async function setUserToDB(user: User) {
    try {
        UserSchema.parse(user)
        
        const docRef = doc(DB, "users", user.uid)
        const docDB = await setDoc(docRef, user, { merge: true });
        return { ok: true, data: docDB }
    } catch (error: any) {
        console.error(error)
        return { ok: false, error: error.message }
    }
}
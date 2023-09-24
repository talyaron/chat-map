import { doc, getDoc } from "firebase/firestore"
import { DB } from "../config"
import { UserSchema } from "@/models/users/userssModle";

export async function getUserDB(uid: string):Promise<{ok:boolean, user?:any, error?:string}> {
    try {
        const userRef = doc(DB, "users", uid);
        const userDB = await getDoc(userRef);
        UserSchema.parse(userDB.data());
        
        if (userDB.exists()) {
            return { ok: true, user: userDB.data() }
        } else {
            return { ok: false, error: "No such user!" }
        }
    } catch (error: any) {
        console.error(error)
        return { ok: false, error: error.message }
    }
}

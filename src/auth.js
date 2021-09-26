import { app } from "./firebaseConfig.js";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

auth.useDeviceLanguage();

// * LOGIN FUNTION
export async function login() {
	try {
		const response = await signInWithPopup(auth, provider);
		return response.user;
	} catch (error) {
		console.error(error);
	} finally {
		console.log("XD");
	}
}
// * LOGOUT FUNCTION
export async function logout() {
	return await signOut(auth)
		.then(() => {
			return { result: true, message: null };
		})
		.catch((error) => {
			return { result: false, message: error };
		});
}

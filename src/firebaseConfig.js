import { initializeApp } from "firebase/app";

const config = {
	apiKey: "AIzaSyBf5YSKyfwgoh5e8i3PH7014XK_xDKMm-E",
	authDomain: "barberapp-e1eff.firebaseapp.com",
	databaseURL: "https://barberapp-e1eff-default-rtdb.firebaseio.com",
	projectId: "barberapp-e1eff",
	storageBucket: "barberapp-e1eff.appspot.com",
	messagingSenderId: "284217771531",
	appId: "1:284217771531:web:ef91ceb943a4ddbeea290e",
	measurementId: "G-M6MK0FRWC0",
};

function getFirebaseConfig() {
	if (config || config.apiKey) {
		return config;
	}
	return null;
}

const app = initializeApp(getFirebaseConfig());
export default app;

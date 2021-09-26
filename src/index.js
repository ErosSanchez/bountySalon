"use strict";
//* IMPORTS
import { login, logout, signedIn } from "./auth";

//* ELEMENTS
const btnLogin = document.querySelector("#btnLogin");
const btnLogout = document.querySelector("#btnLogout");

//*VARIABLES
let curretUser = null;

//*EVENTS LISTENERS
//$LOGiN
btnLogin.addEventListener("click", async (event) => {
	curretUser = await login();
	if (curretUser != null) {
		//document.querySelector("#txtUser").innerText = curretUser.displayName;
		btnLogout.classList.remove("hidden");
		btnLogin.classList.add("hidden");
	}
});
//$LOGOUT
btnLogout.addEventListener("click", async (event) => {
	let response = await logout();
	if (response.result) {
		//document.querySelector("#txtUser").innerText = "Anonimo";

		btnLogout.classList.add("hidden");
		btnLogin.classList.remove("hidden");
	} else {
		throw new Error(response.message);
	}
});

window.onload = () => {
	console.log("Pagina lista para su uso");
};

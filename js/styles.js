const yearElement = document.querySelector("#date");
yearElement.innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

/*last mood*/
/*unction toggleMenu() {
    // console.log(document.getElementById("primaryNav").class);
    document.getElementById("primaryNav").classList.toggle("hide");
}*/
/*function toggleMenu() {
	console.log(document.getElementById("menu").classList);
	document.getElementById("menu").classList.toggle("hide");
}*/
document.querySelector('#lastmod').textContent = document.lastModified;
// for current date in the footer
/*const yearElement = document.querySelector("#date");*/
/*yearElement.innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });*/


/**** LIST IMAGE + TEXTE ****/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/**** ARROW DOTS ****/
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")

/**** IMG TEXTE ****/
const image = document.querySelector(".banner-img")
const txt = document.querySelector("#banner p")


/**** VARIABLES ****/
let index = 0



arrowRight.addEventListener("click", () => {
	const slidesDots = document.querySelectorAll(".dots .dot")
	slidesDots[index].classList.remove("dot_selected")
	index++;
	if (index > slides.length - 1) {
		index = 0
	}
	slidesDots[index].classList.add ("dot_selected")
	image.src = `./assets/images/slideshow/${slides[index].image}`
	txt.innerHTML = slides[index].tagLine;
	console.log("J'ai cliqué sur la flèche de droite")
})

arrowLeft.addEventListener("click", () => {
	const slidesDots = document.querySelectorAll(".dots .dot");
	slidesDots[index].classList.remove("dot_selected")
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	slidesDots[index].classList.add ("dot_selected")
	image.src = `./assets/images/slideshow/${slides[index].image}`
	txt.innerHTML = slides[index].tagLine;
	console.log("J'ai cliqué sur la flèche de gauche")
})

createDots();

function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}
}
function changeMode(){
	changeClasses();
	changeText();
}

function changeClasses(){
	button.classList.toggle(darkmodeClass)
	h1.classList.toggle(darkmodeClass)
	body.classList.toggle(darkmodeClass)
	footer.classList.toggle(darkmodeClass)	

}

function changeText(){
	const lightmode = 'Light Mode'
	const darkmode = 'Dark Mode'
	if(button.classList.contains(darkmodeClass)){
		button.innerHTML = lightmode;
		h1.innerHTML = darkmode + " ON";
	}else{
		button.innerHTML = darkmode
		h1.innerHTML = lightmode + " ON";
	}
}
const darkmodeClass = "dark-mode";
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];



console.log(body)
button.addEventListener('click',changeMode);

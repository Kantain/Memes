

window.onload = function () {

};

/*function loadMeme(){
	for(var i =0; i < memes.lenght(); i++){
		console.log(memes.name);
	}
}*/

function grandir(element) {
    var plan = document.createElement("div");
    var img = document.createElement("img");

    plan.setAttribute("class","plan");
    plan.setAttribute("onclick","supprimerDiv(this)");
    img.setAttribute("src",element.getAttribute("src"));
    img.setAttribute("class","image-meme-big");

    plan.appendChild(img);

    document.body.appendChild(plan);
}

function reduire(element){
    element.setAttribute("class","image-meme");
    element.setAttribute("onclick","grandir(this)");
}

function supprimerDiv(div) {
    document.body.removeChild(div);
}
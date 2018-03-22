var memes =[
		{name:"Lit right now",src:"resources/lit_right_now.mp4"},
		{name:"Putin meme",src:"resources/putinmeme.jpg"},
		{name:"Jesus meme",src:"resources/jesus_meme.jpg"},
		{name:"Racist meme",src:"resources/racist_meme.jpg"},
		{name:"Kim Jon Hun meme",src:"resources/kim_jong_hun_meme.jpg"},
		{name:"Nigga meme",src:"resources/nigga_meme.jpg"},
		{name:"No God no",src:"resources/no_god_no_meme.jpg"},
		{name:"Gandalf meme",src:"resources/gandalf_meme.jpg"}
		];


window.onload = function () {
    //document.querySelector('background-video').playbackRate : 1.2;
    loadMeme();
};

function loadMeme(){
	var divMeme = document.getElementById("displayMeme");
	for(var i =0; i < memes.length; i++){
		var img= document.createElement("img");
		img.setAttribute("src",memes[i].src);
		img.setAttribute("class","imageMeme");
		divMeme.appendChild(img);
	}
}

var memes =[
    {name:"Putin meme",src:"resources/putinmeme",extension:"jpg"},
    {name:"Jesus meme",src:"resources/jesus_meme",extension:"jpg"},
    {name:"Racist meme",src:"resources/racist_meme",extension:"jpg"},
    {name:"Kim Jon Hun meme",src:"resources/kim_jong_hun_meme",extension:"jpg"},
    {name:"Nigga meme",src:"resources/nigga_meme",extension:"jpg"},
    {name:"No God no",src:"resources/no_god_no_meme",extension:"jpg"},
    {name:"Gandalf meme",src:"resources/gandalf_meme",extension:"jpg"},
    {name:"Oss117 meme",src:"resources/oss117_biscotte",extension:"mp4"},
    {name:"Plp meme",src:"resources/plp_meme",extension:"jpg"}
];
var plan = document.createElement("div");

window.onload = init;

function init() {
    loadMemeImg();
    loadVideoMeme();

    plan.setAttribute("class","plan ferme");
    document.body.appendChild(plan);
}

function loadMemeImg(){
    var divMeme = document.getElementById("display-img-meme");
    for(var i =0; i < memes.length; i++){
        var img = document.createElement("p");
        if(memes[i].extension === "jpg" || memes[i].extension === "png" ||memes[i].extension === "jpeg"){
            img= document.createElement("img");
            img.setAttribute("class","image-meme");
            var link = memes[i].src + '.' + memes[i].extension;
            img.setAttribute("src",link);
            //Permet de réaliser l'effet zoom
            img.setAttribute("onclick","grandir(this)");
            divMeme.appendChild(img);
        }
    }
}

function loadVideoMeme(){
    var divMeme = document.getElementById("display-video-meme");
    for(var i =0; i < memes.length; i++){
        var vid = document.createElement("p") ;
        if(memes[i].extension === "mp4"){
            vid= document.createElement("video");
            vid.setAttribute("class","video-meme");
            var link = memes[i].src + '.' + memes[i].extension;
            vid.setAttribute("src",link);
            vid.setAttribute("controls","true");

            //Permet de réaliser l'effet zoom
            divMeme.appendChild(vid);
        }
    }
}

function grandir(element) {
    console.log("hey");
    var img = document.createElement("img");
    plan.setAttribute("class","plan");
    plan.setAttribute("onclick","supprimerDiv(this)");
    img.setAttribute("src",element.getAttribute("src"));
    img.setAttribute("class","image-meme-big");
    img.setAttribute("id","image-gd");

    plan.appendChild(img);
}

function supprimerDiv(div) {
    var img = document.getElementById("image-gd");

    plan.setAttribute("class","plan ferme");
    plan.removeChild(img);
}
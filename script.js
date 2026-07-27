/* ============================================================
THE STORY I'D CHOOSE AGAIN — SOFIA ❤️
SCRIPT.JS PART 1/2
============================================================ */


/* ================= DATA ================= */

const SITE_PASSWORD = "01262026";

const RELATIONSHIP_START = new Date(2026, 1, 10, 0, 0, 0);


const PHOTOS = [

{
src:"photo1.jpg",
caption:"The first photo",
message:"Your smile is one of my favorite things. It makes everything feel lighter."
},

{
src:"photo2.jpg",
caption:"The second photo",
message:"I hope you always see yourself the way I see you — beautiful and special."
},

{
src:"photo3.jpg",
caption:"The third photo",
message:"Every little detail about you is something worth remembering."
},

{
src:"photo4.jpg",
caption:"The fourth photo",
message:"You don't need to try hard to be beautiful. You already are."
},

{
src:"photo5.jpg",
caption:"The fifth photo",
message:"Some pictures become memories, and this is one of them."
},

{
src:"photo6.jpg",
caption:"The sixth photo",
message:"I hope this reminds you how loved you are."
},

{
src:"photo7.jpg",
caption:"The seventh photo",
message:"You are one of the best chapters of my life."
},

{
src:"photo8.jpg",
caption:"The eighth photo",
message:"Even your simple moments are beautiful."
},

{
src:"photo9.jpg",
caption:"The ninth photo",
message:"I could have thousands of photos and still want one more."
},

{
src:"photo10.jpg",
caption:"The final photo",
message:"Out of every story life could give me, I would still choose ours."
}

];




const SONGS=[

{
title:"Nothing's Gonna Stop Us Now",
artist:"Starship",
cover:"photo1.jpg",
url:"https://open.spotify.com/track/3X7uFMzJrEE0sxn62qd8Ch"
},

{
title:"Photograph",
artist:"Ed Sheeran",
cover:"photo2.jpg",
url:"https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
},

{
title:"If Ever You're In My Arms Again",
artist:"Peabo Bryson",
cover:"photo3.jpg",
url:"https://open.spotify.com/track/6zWSB11sqCRMTAuWYkccCt"
}

];





const LETTERS=[

{
title:"Open when you're happy",

body:`If you're reading this while you're happy,
I hope you enjoy that moment.

Your happiness is something I will always celebrate.

Love always,
Xi ❤️`
},


{
title:"Open when you're sad",

body:`I know some days are heavy.

But please remember that you don't have to carry everything alone.

I'm always here for you.

Love always,
Xi ❤️`
},


{
title:"Open when you miss me",

body:`If you miss me right now,
remember that I miss you too.

Distance doesn't change what you mean to me.

Love always,
Xi ❤️`
}

];




const REASONS=[

"the way you make ordinary days special",

"your smile that changes my mood",

"how you care even when you're tired",

"the little things you do without noticing",

"the way you make me feel understood",

"your honesty",

"your kindness",

"your patience",

"your beautiful heart",

"the fact that you're you"

];




const FUTURE_CHAPTERS=[

"More memories together",

"More dates and adventures",

"Supporting each other's dreams",

"Traveling together",

"Building our future",

"Growing together",

"Looking back and saying we made it"

];






/* ================= PASSWORD + INTRO ================= */


document.addEventListener("DOMContentLoaded",()=>{


const passwordScreen=document.getElementById("password-screen");

const passwordInput=document.getElementById("pw-input");

const passwordButton=document.getElementById("pw-submit");

const passwordError=document.getElementById("pw-error");


const passwordBox=document.getElementById("pw-form-wrap");

const successBox=document.getElementById("pw-success");


const introScreen=document.getElementById("intro-screen");

const beginButton=document.getElementById("begin-btn");

const mainContent=document.getElementById("main-content");

const music=document.getElementById("bg-music");




passwordButton.onclick=checkPassword;



passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});





function checkPassword(){


if(passwordInput.value.trim()===SITE_PASSWORD){


passwordError.textContent="";


passwordBox.style.display="none";

successBox.style.display="flex";



setTimeout(()=>{


passwordScreen.classList.add("hidden");


startIntro();



},1200);



}

else{


passwordError.textContent="Wrong date. Try again ❤️";


passwordInput.classList.add("shake");


setTimeout(()=>{

passwordInput.classList.remove("shake");

},500);


}


}






function startIntro(){


const typing=document.getElementById("intro-typing");



const texts=[

"Initializing...",

"Searching memories...",

"Found: Sofia ❤️"

];



let i=0;



function next(){


if(i>=texts.length){

showIntro();

return;

}



typing.textContent=texts[i];

i++;


setTimeout(next,900);


}



next();


}






function showIntro(){


document.getElementById("intro-typing").style.display="none";



setTimeout(()=>{

document.getElementById("line1")
.classList.add("show");

},300);



setTimeout(()=>{


document.getElementById("line1")
.classList.remove("show");


document.getElementById("line2")
.classList.add("show");


},2500);




setTimeout(()=>{


document.getElementById("line2")
.classList.remove("show");


document.getElementById("line3")
.classList.add("show");


},5000);




setTimeout(()=>{


document.getElementById("line3")
.classList.remove("show");


document.getElementById("intro-title")
.classList.add("show");


beginButton.classList.add("show");


},7500);



}




beginButton.onclick=()=>{


introScreen.classList.add("hidden");


mainContent.style.display="block";


music.volume=0.6;


music.play().catch(()=>{});



};



});
/* ============================================================
THE STORY I'D CHOOSE AGAIN — SOFIA ❤️
SCRIPT.JS PART 2/2
============================================================ */


/* ================= COUNTER ================= */

function initCounter(){

function update(){

let now=new Date();

let diff=now-RELATIONSHIP_START;


if(diff<0) diff=0;


let days=Math.floor(diff/86400000);

let hours=Math.floor((diff%86400000)/3600000);

let mins=Math.floor((diff%3600000)/60000);

let secs=Math.floor((diff%60000)/1000);



document.getElementById("c-days").textContent=days;

document.getElementById("c-hours").textContent=hours;

document.getElementById("c-mins").textContent=mins;

document.getElementById("c-secs").textContent=secs;


}


update();

setInterval(update,1000);


}





/* ================= PHOTO ALBUM ================= */


let currentPhoto=0;



function initAlbum(){


const grid=document.getElementById("album-grid");



PHOTOS.forEach((photo,index)=>{


let card=document.createElement("div");


card.className="album-card";



card.innerHTML=`

<img src="${photo.src}">

<div class="num">
${index+1}
</div>

`;



card.onclick=()=>openPhoto(index);



grid.appendChild(card);



});




document.getElementById("viewer-close")
.onclick=closePhoto;



document.getElementById("viewer-prev")
.onclick=()=>{


let next=currentPhoto-1;


if(next<0)
next=PHOTOS.length-1;


openPhoto(next);


};




document.getElementById("viewer-next")
.onclick=()=>{


let next=currentPhoto+1;


if(next>=PHOTOS.length)
next=0;


openPhoto(next);


};


}




function openPhoto(index){


currentPhoto=index;


let photo=PHOTOS[index];



document.getElementById("viewer-img")
.src=photo.src;



document.getElementById("viewer-caption")
.textContent=photo.caption;



document.getElementById("viewer-message")
.textContent=photo.message;



document.getElementById("photo-viewer")
.classList.add("open");


}





function closePhoto(){


document.getElementById("photo-viewer")
.classList.remove("open");


}






/* ================= SOUNDTRACK ================= */


function initSongs(){


let playlist=document.getElementById("playlist");



SONGS.forEach(song=>{


let card=document.createElement("div");


card.className="song-card glass";



card.innerHTML=`

<img class="song-cover" src="${song.cover}">


<div class="song-meta">

<div class="t">
${song.title}
</div>


<div class="a">
${song.artist}
</div>

</div>



<div class="song-actions">

<button class="play-btn">
▶
</button>


<button class="heart-btn">
♡
</button>


</div>

`;





card.querySelector(".play-btn")
.onclick=()=>{


window.open(song.url,"_blank");


};




card.querySelector(".heart-btn")
.onclick=function(){


this.classList.toggle("liked");


this.textContent=
this.classList.contains("liked")
?"♥"
:"♡";


};




playlist.appendChild(card);



});


}







/* ================= LETTERS ================= */


function initLetters(){


let grid=document.getElementById("envelope-grid");



LETTERS.forEach(letter=>{


let card=document.createElement("div");


card.className="envelope glass";



card.innerHTML=`

<span class="icon">
💌
</span>


<span class="title">
${letter.title}
</span>

`;



card.onclick=()=>{


document.getElementById("letter-paper")
.textContent=letter.body;



document.getElementById("letter-viewer")
.classList.add("open");


};



grid.appendChild(card);



});





document.getElementById("letter-close")
.onclick=()=>{


document.getElementById("letter-viewer")
.classList.remove("open");


};



}







/* ================= 365 REASONS ================= */


function initReasons(){


let grid=document.getElementById("reasons-grid");

let opened=0;



for(let i=1;i<=365;i++){


let card=document.createElement("div");


card.className="reason-card";



card.innerHTML=`

<div class="reason-inner">


<div class="reason-face reason-front">

${i}

</div>



<div class="reason-face reason-back">

I choose you because 
${REASONS[(i-1)%REASONS.length]}.

</div>


</div>

`;




card.onclick=()=>{


if(card.classList.contains("flipped"))
return;



card.classList.add("flipped");


opened++;



document.getElementById("reasons-progress")
.textContent=

`${opened} / 365 Unlocked`;



};




grid.appendChild(card);


}



}







/* ================= FUTURE CHAPTERS ================= */


function initTimeline(){


let timeline=document.getElementById("future-timeline");



FUTURE_CHAPTERS.forEach(text=>{


let item=document.createElement("div");


item.className="timeline-item";



item.innerHTML=`

<p>
${text}
</p>

`;



timeline.appendChild(item);



});




let items=document.querySelectorAll(".timeline-item");



let observer=new IntersectionObserver(entries=>{


entries.forEach(e=>{


if(e.isIntersecting){

e.target.classList.add("show");

}


});


});



items.forEach(item=>observer.observe(item));


}







/* ================= FINAL SURPRISE ================= */


function initFinale(){


let section=document.getElementById("final-surprise");



let observer=new IntersectionObserver(entries=>{


if(entries[0].isIntersecting){


playFinal();


observer.disconnect();


}



},{threshold:.5});



observer.observe(section);


}





function playFinal(){


let box=document.getElementById("final-typing");



let lines=[


"One last thing...",


"Thank you for being part of my story.",


"Thank you for every memory.",


"If life gave me another chance...",


"I would still choose you again ❤️"


];



let delay=500;



lines.forEach(line=>{


setTimeout(()=>{


let p=document.createElement("p");


p.textContent=line;


p.classList.add("show");


box.appendChild(p);



},delay);



delay+=1800;



});





setTimeout(()=>{


let img=document.getElementById("final-photo");



img.src="photo10.jpg";


img.classList.add("show");




if(typeof confetti==="function"){


confetti({

particleCount:150,

spread:100

});


}




},delay);



}








/* ================= GUESTBOOK ================= */


function initGuestbook(){


let btn=document.getElementById("gb-submit");


let input=document.getElementById("gb-input");


let confirm=document.getElementById("gb-confirm");




btn.onclick=()=>{


if(input.value.trim()=="")
return;



localStorage.setItem(

"love_message",

input.value

);



input.value="";



confirm.classList.add("show");



setTimeout(()=>{


confirm.classList.remove("show");


},3000);



};


}







/* ================= START EVERYTHING ================= */


window.addEventListener("load",()=>{


initCounter();


initAlbum();


initSongs();


initLetters();


initReasons();


initTimeline();


initGuestbook();


initFinale();


});

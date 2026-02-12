const music = document.getElementById("music");
const finalText = document.getElementById("finalText");
const page4Text = document.getElementById("page4Text");

/* ========= WRITE YOUR LETTER HERE ========= */
const myLetter = `
My dear Tannu , I know this is not my style cause I've always preferred to write msgs in pages and booklets but this time 
, I was really destroyed by how much down I've fallen just because my childish and abnormal behaviour towards you , 
the boundary I always respected was broken by me , the control I had was gone for a sec and caused one of the biggest mistakes of my life 😔, 
the love I cherished so much cried in front of me 😞, the lady I promised to give utmost respect , was crying because my indecent acts 😔,
I can't explain with words how much I've fallen in my eyes too , I never wanted to things go this  way milady, I wanted your full consent and 
your interest in such intimate act but it was eagerness that destroyed our bond 😢, I can't ask for forgiveness anymore or any chances ,
I'm really not sure if you still want to be with me cause I really don't deserve any more if it , I can't even rely this msg properly to you
because the seed of breakup is in your mind growing because of me 😞, I don't have any more excuses now , your presence means a lot but your
self respect and character means more. This time , it's your choice , I'll be destroyed but at least I'll know how much value you have towards me 🥺🥺,
no more chances , stay with me if you want tanushka , it's not like that I don't want you to stay , I'm saying if you really want to be with me then stay girl
, I want you to be happy and if you're that much hurt them please dont think about this  shameless guy and have your freedom , even if I said I don't give you
any more chances to point my behaviour again , and I really won't because it destroyed my value in my eyes this time 😔, it was fucking disgusting from me ,
you are right girl , fuck these damn physical needs , all I can swear in us that I never had any indecent thoughts about you in our relationship and I can assure
that I'll never have them 🙂,All I ask for is some time and understanding from your side and trust that I will change , I'll definitely try baby girl but please
don't leave me like this 😞🥺, I'm now starting to understand love and it's really an hard but unique experience for me so please don't give up on me tannu 🙂,
I don't need any physical touches or kisses now , please give me your presence I beg you , I'm not trying to manipulate you with words now , it's right from my heart and
you'll definitely see it from my behaviour next time ✌️🙂.
`;

const page4Lines = `
Hey baby , if you're on this page and still reading the text , then I'm sure you gave me a chance to be with you again 🥹🥹, as I'm writing this text , while still on hold 
, it really tore my heart after listening to your voice calling me baby 🙂, the joy in your voice 🥹, thankyou for this time again baby 🫠🫠, the beauty you hold ,
the soft tone you unleased in our talk , the way I want to cherish and embrace your soul🥰, it's not physical touch but your presence , you will see from now 
on that how much it ruined my character that day , no change of words , just action for this sweet lady of mine 🥹✌️, take care of you my valentine ,
 I may not be able to meet you this time but next valentine's, I'll be doing the best fantasy of my mind with my noble mistress 🤭☺️😊, I love you baby girl 🥹.
`;
/* 💌 Dynamic NO button texts */
const noTexts = [
"please choose yes 🥺",
"please babe 🥺",
"nooo 😭",
"come on milady 💗",
"last chance 👀"
];

let noIndex = 0;
/* ========= PAGE SWITCHING ========= */

function nextPage(num){

document.querySelector(".page.active").classList.remove("active");
document.getElementById("page"+num).classList.add("active");

if(num === 4){
page4Text.innerHTML = page4Lines;
}

/* 💜 calm hearts on final page */
if(num === 6){
calmEndingHearts();
}

}
/* ========= START FLOW ========= */

function startFlow(){
music.volume = 0.35;   // 🌸 softer peaceful volume
music.play();
nextPage(2);
startHearts();
}
/* ========= SECOND CHANCE YES ========= */

function yesSecond(){
nextPage(3);
typeMessage(myLetter);
}

/* ========= FINAL YES ========= */
function finalYes(){
nextPage(6);   // now goes to the NEW page first
}
/* ========= MOVING NO BUTTON ========= */

function moveNo(btn){

/* 💬 dynamic text */
btn.innerText = noTexts[noIndex];
noIndex = (noIndex + 1) % noTexts.length;

/* 💗 playful shake */
btn.classList.add("shake");

setTimeout(()=>{

btn.classList.remove("shake");

/* 📍 get button position for heart trail */
const rect = btn.getBoundingClientRect();
createHeartTrail(rect.left + rect.width/2, rect.top);

/* 🏃 move away */
btn.style.position="absolute";
btn.style.left=Math.random()*80+"vw";
btn.style.top=Math.random()*80+"vh";

},300);
}
/* ========= TYPE EFFECT ========= */

function typeMessage(text){

finalText.innerHTML="";
finalText.classList.add("typingGlow");  // 🌸 start glow

let i=0;

function typing(){
if(i < text.length){
finalText.innerHTML += text.charAt(i);
i++;
setTimeout(typing,35);
}else{
finalText.classList.remove("typingGlow"); // ✨ stop glow when done
}
}
typing();
}

/* ========= HEART ANIMATION ========= */

const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts=[];

function startHearts(){
const MAX_HEARTS = 25;

setInterval(()=>{
if(hearts.length < MAX_HEARTS){
hearts.push({
x:Math.random()*canvas.width,
y:canvas.height,
size:10+Math.random()*6,
speed:1+Math.random()*2
});
}
},500);

animateHearts();
}

function animateHearts(){
ctx.clearRect(0,0,canvas.width,canvas.height);

hearts.forEach((h,index)=>{
drawHeart(h.x, h.y, h.size);
h.y -= h.speed;

if(h.y < -30){
hearts.splice(index,1);
}
});

requestAnimationFrame(animateHearts);
}

function drawHeart(x,y,size){
ctx.fillStyle="rgba(255,120,160,0.45)";
ctx.beginPath();
ctx.moveTo(x, y);

ctx.bezierCurveTo(x - size, y - size,
                  x - size*2, y + size/3,
                  x, y + size*2);

ctx.bezierCurveTo(x + size*2, y + size/3,
                  x + size, y - size,
                  x, y);

ctx.fill();
}
/* 💗 HEART TRAIL EFFECT */
function createHeartTrail(x,y){

const heart = document.createElement("div");
heart.innerText = "💗";

heart.style.position = "fixed";
heart.style.left = x + "px";
heart.style.top = y + "px";
heart.style.pointerEvents = "none";
heart.style.fontSize = "18px";
heart.style.opacity = "1";
heart.style.transition = "all 0.8s ease";

document.body.appendChild(heart);

/* animate upward + fade */
setTimeout(()=>{
heart.style.transform = "translateY(-40px)";
heart.style.opacity = "0";
},10);

/* remove after animation */
setTimeout(()=>{
heart.remove();
},800);

}
/* 🌸 Calm ending hearts */
function calmEndingHearts(){
hearts.forEach(h=>{
h.speed = 0.3;   // slower floating
});
}
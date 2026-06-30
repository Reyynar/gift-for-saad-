const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");

const gift = document.getElementById("gift");
const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const hugBtn = document.getElementById("hugBtn");

const response = document.getElementById("response");
const flowers = document.getElementById("flowers");
const hearts = document.getElementById("hearts");

// Gift opens
gift.onclick = () => {

    gift.innerHTML = "💥";

    createFlowers();

    setTimeout(() => {

        screen1.classList.add("hidden");
        screen2.classList.remove("hidden");

    }, 1000);

};

// Continue
continueBtn.onclick = () => {

    screen2.classList.add("hidden");
    screen3.classList.remove("hidden");

};

// YES
yesBtn.onclick = () => {

    response.innerHTML = "😊 I knew it! ❤️";

    surpriseBtn.classList.remove("hidden");

};

// NO
noBtn.onclick = () => {

    response.innerHTML = "😂 Nice try! I'm still counting that as a smile!";

    surpriseBtn.classList.remove("hidden");

};

// One More Surprise
surpriseBtn.onclick = () => {

    screen3.classList.add("hidden");
    screen4.classList.remove("hidden");

    createFlowers();

};

// Final Hug
hugBtn.onclick = () => {

    screen4.classList.add("hidden");
    screen5.classList.remove("hidden");

    createFlowers();

    createHearts();

};

// Flowers
function createFlowers(){

    for(let i=0;i<100;i++){

        const flower=document.createElement("div");

        flower.className="flower";

        const list=["🌸","🌹","🌺","🌷","🌼"];

        flower.innerHTML=list[Math.floor(Math.random()*list.length)];

        flower.style.left=Math.random()*100+"%";

        flower.style.animationDuration=(4+Math.random()*4)+"s";

        flower.style.fontSize=(20+Math.random()*25)+"px";

        flowers.appendChild(flower);

        setTimeout(()=>flower.remove(),8000);

    }

}

// Hearts
function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        const list=["❤️","💖","💕","💗","💓"];

        heart.innerHTML=list[Math.floor(Math.random()*list.length)];

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        hearts.appendChild(heart);

        setTimeout(()=>heart.remove(),8000);

    },150);

}

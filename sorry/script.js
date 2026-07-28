/*=========================================
        TYPEWRITER EFFECT
=========================================*/

const text = "Doraemon Says Sorry Bestoooo 🥺💙";
const typing = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

    }

}

window.onload = () => {

    typeWriter();

    createHearts();

    createBubbles();

    createSparkles();

};


/*=========================================
        FLOATING HEARTS
=========================================*/

function createHearts() {

    const container = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 350);

}


/*=========================================
        FLOATING BUBBLES
=========================================*/

function createBubbles() {

    const container = document.querySelector(".bubbles");

    setInterval(() => {

        const bubble = document.createElement("span");

        bubble.style.left =
            Math.random() * 100 + "%";

        bubble.style.width =
            bubble.style.height =
            (8 + Math.random() * 15) + "px";

        bubble.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        container.appendChild(bubble);

        setTimeout(() => {

            bubble.remove();

        }, 9000);

    }, 400);

}


/*=========================================
        SPARKLES
=========================================*/

function createSparkles() {

    const container = document.querySelector(".sparkles");

    setInterval(() => {

        const star = document.createElement("span");

        star.innerHTML = "✨";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        container.appendChild(star);

        setTimeout(() => {

            star.remove();

        }, 2000);

    }, 500);

}


/*=========================================
      OPEN BUTTON
=========================================*/

const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {

    overlay.style.display = "flex";

    setTimeout(() => {

        document.querySelector(".flap").style.transform =
            "rotateX(180deg)";

    }, 500);

    setTimeout(() => {

        document.querySelector(".paper").style.bottom =
            "80px";

    }, 900);

});
/*=========================================
        PAGE TRANSITION
=========================================*/

function nextPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

        page.style.display = "none";

    });

    const next = document.getElementById(pageId);

    if(next){

        next.style.display = "flex";

        setTimeout(()=>{

            next.classList.add("active");

        },100);

    }

}


/*=========================================
        ENVELOPE FINISH
=========================================*/

setTimeout(()=>{

    if(document.querySelector(".paper")){

        document.querySelector(".paper").style.transform =
        "translate(-50%,-140px)";

    }

},1500);


/*=========================================
        OPEN PAGE 2
=========================================*/

openBtn.addEventListener("click",()=>{

    overlay.style.display="flex";

    setTimeout(()=>{

        document.querySelector(".flap").style.transform =
        "rotateX(180deg)";

    },500);

    setTimeout(()=>{

        document.querySelector(".paper").style.transform =
        "translate(-50%,-140px)";

    },1200);

    setTimeout(()=>{

        overlay.style.opacity="0";

    },2200);

    setTimeout(()=>{

        overlay.style.display="none";

        nextPage("page2");
        startLetterAnimation();

    },2600);

});


/*=========================================
        FADE ANIMATION
=========================================*/

document.querySelectorAll(".page").forEach(page=>{

    page.style.transition="all .8s ease";

});


/*=========================================
        BUTTON CLICK EFFECT
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.94)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});


/*=========================================
        LITTLE HEART BURST
=========================================*/

function burstHearts(x,y){

    for(let i=0;i<12;i++){

        const heart=document.createElement("span");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=x+"px";

        heart.style.top=y+"px";

        heart.style.fontSize="22px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        let angle=(Math.PI*2/12)*i;

        let distance=80;

        heart.animate([

            {

                transform:"translate(0,0) scale(1)",

                opacity:1

            },

            {

                transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px) scale(.3)`,

                opacity:0

            }

        ],{

            duration:900,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },900);

    }

}


/*=========================================
        OPEN BUTTON BURST
=========================================*/

openBtn.addEventListener("click",(e)=>{

    burstHearts(

        e.clientX,

        e.clientY

    );

});


/*=========================================
        END
=========================================*/
/* ==========================================
           PAGE 2 PREMIUM JS - PART 1
========================================== */

// ===== Get Elements =====

const page2 = document.getElementById("page2");
const letterBox = document.getElementById("letterText");
const question = document.querySelector(".question");
const buttons = document.querySelector(".buttons");
const note = document.querySelector(".small-note");

// Hide everything except the letter
if (question) question.style.display = "none";
if (buttons) buttons.style.display = "none";
if (note) note.style.display = "none";

// ===== Paragraph by Paragraph Typewriter =====

function startLetterAnimation() {

    if (!letterBox) return;

    const paragraphs = [...letterBox.querySelectorAll("p")];

    paragraphs.forEach(p => {

        p.dataset.text = p.textContent.trim();

        p.textContent = "";

        p.style.opacity = "1";

    });

    let current = 0;

    function typeNextParagraph() {

        if (current >= paragraphs.length) {

            showQuestion();

            return;

        }

        const p = paragraphs[current];

        const text = p.dataset.text;

        let i = 0;

        function typing() {

            if (i < text.length) {

                p.textContent += text.charAt(i);

                i++;

                letterBox.scrollTop = letterBox.scrollHeight;

                setTimeout(typing, 28);

            } else {

                current++;

                setTimeout(typeNextParagraph, 500);

            }

        }

        typing();

    }

    typeNextParagraph();

}

// ===== Show Question =====

function showQuestion() {

    if (question) {

        question.style.display = "block";

        question.style.animation = "fadeIn .8s";

    }

    setTimeout(() => {

        if (buttons) {

            buttons.style.display = "flex";

            buttons.style.animation = "fadeIn .8s";

        }

    }, 500);

    setTimeout(() => {

        if (note) {

            note.style.display = "block";

            note.style.animation = "fadeIn .8s";

        }

    }, 900);

}
/*=========================================
        PAGE 2 JS - PART 2
=========================================*/

// ===== YES BUTTON =====

const yesBtn = document.querySelector(".yes-btn");

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        createHeartExplosion();

        setTimeout(() => {

            nextPage("page3");

        }, 1500);

    });

}


// ===== NO BUTTON =====

const noBtn = document.getElementById("noBtn");

if (noBtn) {

    let tries = 0;

    function moveNoButton() {

        tries++;

        const parent = document.querySelector(".buttons");

        const maxX = parent.offsetWidth - noBtn.offsetWidth;
        const maxY = 120;

        noBtn.style.position = "relative";

        noBtn.style.left =
            Math.random() * maxX - (maxX / 2) + "px";

        noBtn.style.top =
            Math.random() * maxY - (maxY / 2) + "px";

        if (tries == 3)
            noBtn.innerHTML = "Please 🥺";

        if (tries == 6)
            noBtn.innerHTML = "Don't Leave 😭";

        if (tries == 9)
            noBtn.innerHTML = "Forgive Me 💙";

    }

    noBtn.addEventListener("mouseenter", moveNoButton);

    noBtn.addEventListener("touchstart", function (e) {

        e.preventDefault();

        moveNoButton();

    });

}


// ===== HEART EXPLOSION =====

function createHeartExplosion() {

    const emojis = [

        "thankyou bestoo","💖","💕","💗","💙","❤️","💝","✨","🌸"

    ];

    for (let i = 0; i < 45; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize =
            (18 + Math.random() * 18) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "99999";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 220;

        heart.animate([

            {

                transform:
                    "translate(-50%,-50%) scale(1)",

                opacity: 1

            },

            {

                transform:
                    `translate(
                    calc(-50% + ${Math.cos(angle) * distance}px),
                    calc(-50% + ${Math.sin(angle) * distance}px)
                    ) scale(.3)`,

                opacity: 0

            }

        ], {

            duration: 1800,

            easing: "ease-out"

        });

        setTimeout(() => {

            heart.remove();

        }, 1800);

    }

}


// ===== BUTTON PRESS EFFECT =====

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform = "scale(.95)";

    });

    btn.addEventListener("mouseup", () => {

        btn.style.transform = "scale(1)";

    });

});


// ===== PAGE RESET =====

function resetPage2() {

    const paragraphs =
        letterBox.querySelectorAll("p");

    paragraphs.forEach(p => {

        p.textContent = p.dataset.text;

    });

}
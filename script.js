
//Changing Button Style When Clicked
const sectBtn = document.querySelectorAll('.control');

function pageTransitions(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
            //scroll into view when clicked
            const active_btn = document.querySelector('.active-btn');
            const data_value = active_btn.getAttribute("data");
            // console.log(data_value);
            const section = document.getElementById(data_value);
            if(section){
                section.scrollIntoView({behavior: "smooth", block: "start"});
            }
        })
    }
}
pageTransitions();


//toggle switch for darkmode
const toggleMode = document.querySelector("#toggleMode");
const body = document.querySelector("body");

toggleMode.addEventListener("change", ()=> {
    if (toggleMode.checked) {
        body.classList.add("darkmode"); // Enable dark mode
    } else {
        body.classList.remove("darkmode"); // Disable dark mode
    }
});

//set width of hr according to the percentage of the skill

const percentage = document.querySelectorAll(".percentage");
const hr = document.querySelectorAll(".skill-hr");
for(let i = 0; i < percentage.length; i++){
    hr[i].style.width = percentage[i].innerText;
}

//button function for show left bar
const left = document.querySelector('.left');
function showleft(){
    if(window.innerWidth <=769){
        left.style.left = 0;
    }

}

//button function for hide left bar
function hideleft(){
    if(window.innerWidth <=769){
        left.style.left = "-245px";
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 769) {
        left.style.left = "0";
    } else {
        left.style.left = "-245px";
    }
});

//skill circle count increasing when comes in viewport
//set observer
function myFunc(value, element){
    let counter = 0;
//increase counter
    setInterval(()=>{
    if(counter == value){
        clearInterval();
    }
    else{
        counter += 1;
        element.innerHTML = counter + "%"
    }   
},17)

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percent = entry.target;
            const value = percent.getAttribute("percent")
            myFunc(value, percent);
        }
    });
}, { threshold: 0.5 });



const numbs = document.querySelectorAll('.numb');
function loadSkillPercent (){
    for(let i=0; i<numbs.length; i++){
        observer.observe(numbs[i]);
    }
}
loadSkillPercent();

//increase circle

// function animateProgress(element, value) {
//     let totalLength = 472;
//     // Remove transition, reset stroke-dashoffset instantly
//     element.style.transition = "none";
//     element.style.strokeDashoffset = totalLength;

//     // Force a browser reflow (restarts the animation)
//     void circle.offsetWidth;
//     // Reapply transition and set new stroke-dashoffset
//     element.style.transition = "stroke-dashoffset 2s linear";
//     element.style.strokeDashoffset = totalLength - (totalLength * value / 100); // 80% progress
// }

// const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const element = entry.target;
//             const value = element.getAttribute("percent")

//             setTimeout(animateProgress(element,value), 100);
//         }
//     });
// }, { threshold: 0.5 });

// const circle = document.querySelectorAll(".circle");
// function loadCircle (){
//     for(let i=0; i<circle.length; i++){
//         observer2.observe(circle[i]);
//     }
// }
// loadCircle();

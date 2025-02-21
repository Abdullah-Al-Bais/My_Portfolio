
//Changing Button Style When Clicked
const sectBtn = document.querySelectorAll('.control');
function pageTransitions(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
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
    left.style.left = 0;
}

//button function for hide left bar
function hideleft(){
    left.style.left = "-245px";
}
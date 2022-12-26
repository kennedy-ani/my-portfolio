// nav functions
let darkModeSwitch = document.querySelector('.fa-moon');
let navBar = document.getElementById('navBar');
let paragraphs = document.getElementsByTagName('p');
let icons = document.getElementsByTagName('i');
let spans = document.getElementsByTagName('span');
let buttons = document.getElementsByTagName('a');
let headersI = document.getElementsByTagName('h1');
let headersII = document.getElementsByTagName('h2');
let listItems = document.getElementsByTagName('li'); 
let labels = document.getElementsByTagName('label');
let inputs = document.getElementsByTagName('input');
let textArea = document.getElementById('client-message');
let contactFormBtn = document.getElementById("submit-btn"); 
let iconsButtons = document.querySelectorAll('.button-icon');
let languageTags = document.querySelectorAll('.ltags');
let progressBars = document.querySelectorAll('.progress-bar');
let navLink = document.querySelector('.nav-links');
let navBarBorder = document.querySelector('.link-carrier  ul');


let pageBody = document.body;
darkModeSwitch.addEventListener('click', ()=>{
    // console.log('Dark mode working');
    pageBody.style.background = 'linear-gradient(to right, #000428, #004e92)';
    navBar.style.background = 'linear-gradient(to right, #000428, #004e92)';
    navBar.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.3)';
    textArea.style.backgroundColor = "#90FCF9";
    contactFormBtn.style.backgroundColor = 'transparent';
    contactFormBtn.style.color = '#FFFD77';

    for(let paragraph of paragraphs){
        paragraph.style.color = '#fff';
    }

    for(let icon of icons){
        icon.style.color = '#90FCF9';
        
    }

    for(let iconsButton of iconsButtons){
        iconsButton.style.backgroundColor = 'transparent';
    }

    for(let i = 0; i < spans.length; i++){
        spans[i].style.color = '#90FCF9';
    }

    for(let i=0; i < languageTags.length; i++){
        languageTags[i].style.color = "#004e92";
    }

    for(let i=0; i<progressBars.length; i++){
        progressBars[i].style.background = "#FFC000";
    }
    for(let button of buttons){
        button.style.backgroundColor = 'transparent'
        button.style.color = '#FFFD77';
    }

    for(let listItem of listItems){
        listItem.style.color = '#fff';
    }
    
    for (let headerI of headersI){
        headerI.style.color = '#90FCF9';
    }

    for (let headerII of headersII){
        headerII.style.color = '#90FCF9';
    }

    for (let label of labels){
        label.style.color = '#fff';
    }

    for(let input of inputs){
        input.style.backgroundColor = '#90FCF9';
    }

    navLink.style.background = 'linear-gradient(to right, #000428, #004e92)';
    navBarBorder.style.borderTop = '7px solid #FFFD77';
    
})


// animations with Interesection Observer

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px",


};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
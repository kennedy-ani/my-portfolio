// about me page
let paragraphAboutMe = document.querySelector('.more-details-aboutMe');
let darkModeSwitch2 = document.getElementById('darkMode');
let backtoHomeLink = document.getElementById('backtoIndexPageLink');
let socialMediaLinks = document.querySelectorAll('.socialmedia4me');
darkModeSwitch2.addEventListener('click', ()=>{
    darkModeSwitch2.style.backgroundColor = 'transparent';
    darkModeSwitch2.style.color = '#FFFD77';
    // change the moon to sun
    pageBody.style.background = 'linear-gradient(to right, #000428, #004e92)';
    paragraphAboutMe.style.color = '#fff'; 
    backtoHomeLink.style.color = '#90FCF9';

    for(let i= 0; i < socialMediaLinks.length; i++){
        socialMediaLinks[i].style.color = '#FFFD77';
        // console.log(socialMediaLinks[i]);
    }

    
});


const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Tougle Nav 
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');


    // animation links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                   link.style.animation = 'navLinkFade 0.5s ease forwards {index / 7 + 1.5}s' ; //this is not working
            }
    });
    //burger animation
    burger.classList.toggle('toggle') ;
  
        
   });

}

navSlide();
//video

function toggleMute() {

    var video=document.getElementById("video1");
  
    if(video.muted){
      video.muted = false;
    } else {
      debugger;
      video.muted = true;
      video.play()
    }
  
  }
  
  $(document).ready(function(){
    setTimeout(toggleMute,3000);
  })


//  <!--------------- more less buton ----------------->

function ShowHide(divId)
{
if(document.getElementById(divId).style.display == 'none')
{
document.getElementById(divId).style.display='block';
}
else
{
document.getElementById(divId).style.display = 'none';
}
}
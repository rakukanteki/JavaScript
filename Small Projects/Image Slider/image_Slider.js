//Getting all images in the slides class.
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0; //index of current slide.
let intervalID = null;

document.addEventListener("DOM Content Loaded", initializeSlider);
function initializeSlider() //this function populates web browser with 1st image
{
    // if images exists.
    if(slides.length > 0)
    {
        slides[slideIndex].classList.add("displaySlide");
        // call next image after 5 sec. returns id.
        intervalID = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) //index of the next slide we want to go to.
{
    if(index >= slides.length) //if we reach end of slide.
    {
        slideIndex = 0;
    }
    else if(index < 0) //if we go backwards.
    {
        slideIndex = slides.length - 1;
    }

    //after 5 sec, we dont want to see the current slide.
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    //Now go the the next slide.
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide()
{
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide()
{
    slideIndex++; //go to next slide.
    showSlide(slideIndex);
}
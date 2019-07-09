const sliderImages =  document.querySelectorAll('.slide');
const arrowLeft =  document.querySelector('#arrow-left');
const arrowRight =  document.querySelector('#arrow-right');
let curr = 0;

//function to clear all images
const reset = ()=>{
    for(let i= 0; i<sliderImages.length;i++){
        sliderImages[i].style.display = 'none';
    }
}

const startSlide = ()=>{
    reset();
    sliderImages[0].style.display = 'block';
}

//show previous

const slideLeft = ()=>{
    reset();
    sliderImages[curr-1].style.display = 'block';
    curr--;
}
// show next

const slideRight = ()=>{
    reset();
    sliderImages[curr+1].style.display = 'block';
    curr++;
}

//clicking the left arrow
arrowLeft.addEventListener('click',()=>{
    if(curr === 0){
        curr = sliderImages.length;
    }
    slideLeft();
});
arrowRight.addEventListener('click',()=>{
    if(curr === sliderImages.length-1){
        curr = -1;
    }
    slideRight();
});
startSlide();
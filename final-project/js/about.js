// Menu Hamburger
function toggleMenu(){
    document.getElementById('bar_nav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;



//IntersectionObserver for Images
const imagesToload = document.querySelectorAll('img[data-src]')

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
};

if("IntersectionObserver" in window){
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) =>{
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
              }
        });
    }, imgOptions);

    imagesToload.forEach((img) => {
        observer.observe(img);
    });
} else{
    imagesToload.forEach((img) => {
        loadImages(img)
    })
}


//Feedback
const feedbackElement = document.querySelector('#feedback');
const formElement = document.forms[0];

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    feedbackElement.innerHTML = `Hello ${formElement.fname.value} ! Thank you for your message. We will get back with you as soon as possible!`;

    feedbackElement.style.display = 'block';
})






// Last Modification
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`






    

// Hamburger Menu
const hamburger = document.querySelector(".button");
const navigation = document.querySelector(".container");
hamburger.addEventListener("click", ()=>{
    navigation.classList.toggle("open");
    hamburger.classList.toggle("rotate");
})



// Text animation
const textAnimation = new IntersectionObserver((items,observer)=>{
    items.forEach(item=>{
            item.target.classList.toggle("reposition", item.isIntersecting);
    })
},{
    threshold:.2,
})

const text = document.querySelector(".text");
textAnimation.observe(text);

const h2 = document.querySelectorAll(".heading");
h2.forEach(head=>{
    textAnimation.observe(head);
})

const para = document.querySelectorAll(".para");
para.forEach(pa=>{
    textAnimation.observe(pa);
})

const imagesAni = document.querySelectorAll(".image");
imagesAni.forEach(image=>{
    textAnimation.observe(image);
})



// Header Change on Scroll
const heroImg = document.querySelector(".hero");
const mainNavigation = document.querySelector(".main-container")
const headerObserver = new IntersectionObserver((items)=>{
    items.forEach((item)=>{
        if(!item.isIntersecting){
            mainNavigation.classList.add("scroll");
        }else{
            mainNavigation.classList.remove("scroll");
        }
    })
}, {
    rootMargin: "-100px 0px 0px 0px",
    threshold: .2,
})
headerObserver.observe(heroImg);



// Load Data From API
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let information = [];
let fruitName = [];
let nutritions = []
async function load(link){
    const name1 = await fetch(url);
    if(name1.ok){
        const converted = await name1.json();
        information = converted;

        information.forEach(fruit=>{
            fruitName = fruit.name;
        })

        information.forEach(info=>{
            nutritions = info.nutritions;
        })
    }
}
load(url);





// Lazy Load Images
const conversion = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"))
    image.onload=()=>{
        image.removeAttribute("data-src");
    }
}

const imageObserver = new IntersectionObserver((items, observer)=>{
    items.forEach(item=>{
        if(item.isIntersecting){
            conversion(item.target);
            observer.unobserve(item.target);
        }
    })
},{
    threshold:0,
});

const images = document.querySelectorAll(".image");
images.forEach(image=>{
    imageObserver.observe(image);
})


const year = document.querySelector("#year");
const new_year = new Date().getFullYear();
year.textContent = new_year;

const last_modified = document.querySelector("#last_modified");
const modified = document.lastModified;
last_modified.textContent = modified;
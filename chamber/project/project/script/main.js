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
textAnimation.observe(text)

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

const fresh = document.querySelector(".drink")
textAnimation.observe(fresh);

const weather_card = document.querySelector(".weather_card");
textAnimation.observe(weather_card);

const weather_table = document.querySelector(".weather_table");
textAnimation.observe(weather_table);

const order = document.querySelector(".order");
textAnimation.observe(order);

const ohead = document.querySelector(".ohead");
textAnimation.observe(ohead);

const obody = document.querySelector(".obody");
textAnimation.observe(obody);



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



// Weather API
const weatherUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=33.158092&lon=-117.350594&exclude=minutely,hourly&units=metric&appid=15b3c845efce804c56e0ccf9cfedc22f"
let weatherInformation = [];

async function weatherDataFetch(url){
    const data = await fetch(url);
    if(data.ok){
        const converted = await data.json();
        weatherInformation = converted;
        updateDetail(weatherInformation);
        console.log(weatherInformation);
    }
}

function updateDetail(data){
    const temperature = document.querySelector(".temp");
    temperature.textContent = data.current.temp;

    const description = document.querySelector(".description");
    const content_description = data.current.weather[0].description;
    description.textContent = content_description;

    const humidity = document.querySelector(".humidity");
    humidity.textContent = data.current.humidity;

    const weather_card = document.querySelector(".weather_card");
    const card_url = data.current.weather[0].icon;
    const id = data.current.weather[0].id;
    const url = `http://openweathermap.org/img/w/${card_url}.png`
    // 10d.png
    weather_card.setAttribute("src", url)
    weather_card.setAttribute("alt", content_description);

    const temp_day_one = document.querySelector(".temperature_day_one");
    const day_one_temp = data.daily[0].temp.max;
    temp_day_one.textContent = day_one_temp;

    const temp_day_two = document.querySelector(".temperature_day_two");
    const day_two_temp = data.daily[1].temp.max;
    temp_day_two.textContent = day_two_temp;

    const temp_day_three = document.querySelector(".temperature_day_three");
    const day_three_temp = data.daily[2].temp.max;
    temp_day_three.textContent = day_three_temp;
    
    const condition_day_one = document.querySelector(".condition_day_one");
    const day_one_condition = data.daily[0].weather[0].description;
    condition_day_one.textContent = day_one_condition;

    const condition_day_two = document.querySelector(".condition_day_two");
    const day_two_condition = data.daily[1].weather[0].description;
    condition_day_two.textContent = day_two_condition;

    const condition_day_three = document.querySelector(".condition_day_three");
    const day_three_condition = data.daily[2].weather[0].description;
    condition_day_three.textContent = day_three_condition;
};

weatherDataFetch(weatherUrl);



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



// Display Order Details in Home Page
const ordr_detail = document.querySelector(".order_detail");
const datam = localStorage.getItem("order_count");
ordr_detail.textContent = datam;
if(ordr_detail.textContent == "None"){
    order.style.display = "none";
}else{
    order.style.display = "block"
}


const year = document.querySelector("#year");
const new_year = new Date().getFullYear();
year.textContent = new_year;

const last_modified = document.querySelector("#last_modified");
const modified = document.lastModified;
last_modified.textContent = modified;
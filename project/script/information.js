const legend = document.querySelector("legend");
textAnimation.observe(legend)

const form_top = document.querySelector(".form_top");
textAnimation.observe(form_top);

const form_top_one = document.querySelector(".form_top_one");
textAnimation.observe(form_top_one);

const form_top_two = document.querySelector(".form_top_two");
textAnimation.observe(form_top_two);

const form_top_three = document.querySelector(".form_top_three");
textAnimation.observe(form_top_three);

const form_top_four = document.querySelector(".form_top_four");
textAnimation.observe(form_top_four);

const button = document.querySelector(".btn_form")
textAnimation.observe(button);

const fruitOne = document.querySelector("#first_fruit");
textAnimation.observe(fruitOne);

const fruitTwo = document.querySelector("#second_fruit");
textAnimation.observe(fruitTwo);

const fruitThree = document.querySelector("#third_fruit");
textAnimation.observe(fruitThree);

const output_main = document.querySelector(".output_main")
textAnimation.observe(output_main);



// Fruit API
const fruit_api = "https://brotherblazzard.github.io/canvas-content/fruit.json"
let fruits_details = [];

const first_name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const first_fruit = document.querySelector('#first_fruit');
const second_fruit = document.querySelector('#second_fruit');
const third_fruit = document.querySelector('#third_fruit');
const specification = document.querySelector(".preparation");

let order_count = localStorage.getItem("order_count");

async function call_fruits(url){
    const data = await fetch(url);
    if(data.ok){
        const convert = await data.json();
        fruits_details = convert;
        console.log(fruits_details);
        fruits_details.forEach(fruit => {
            displayOptions(fruit);
        });
    }
}

function displayOptions(fruitOption){
    let first = document.createElement('option');
    first.value = `${fruitOption.name}`;
    first.innerHTML = `${fruitOption.name}`;
    first_fruit.appendChild(first);

    let second = document.createElement('option');
    second.id = `${fruitOption.name}`;
    second.innerHTML = `${fruitOption.name}`;
    second_fruit.appendChild(second);

    let third = document.createElement('option');
    third.id = `${fruitOption.name}`;
    third.innerHTML = `${fruitOption.name}`;
    third_fruit.appendChild(third);

    const carb = fruitOption.nutritions.carbohydrates;
    const prot = fruitOption.nutritions.protein;
    const fatty = fruitOption.nutritions.fat;
    const sug = fruitOption.nutritions.sugar;
    const calo = fruitOption.nutritions.calories;
}

call_fruits(fruit_api);


const button_form = document.querySelector(".btn_form");
button_form.addEventListener("click", ()=>{
    if(first_fruit.value == "first"){
        alert("Please select a first fruit");
    }else if(second_fruit.value == "first"){
        alert("Please select a second fruit");
    }else if(third_fruit.value == "first"){
        alert("Please select a third Fruit");
    }else{
        const output = document.createElement("div");
        output.setAttribute("class", "output");
        output_main.appendChild(output);

        const doc_name = document.createElement("p");
        doc_name.textContent = `Name: ${first_name.value}`;
        first_name.value = "";
        output.appendChild(doc_name);

        const mail = document.createElement("p");
        mail.textContent = `Email: ${email.value}`;
        email.value = "";
        output.appendChild(mail);

        const phone_number = document.createElement("p");
        phone_number.textContent = `Phone Number: ${number.value}`;
        number.value = "";
        output.appendChild(phone_number);

        const fruit_one = document.createElement("p");
        fruit_one.textContent = `Fruit One: ${first_fruit.value}`
        first_fruit.value = "first";
        output.appendChild(fruit_one);


        const fruit_two = document.createElement("p");
        fruit_two.textContent = `Fruit Two: ${second_fruit.value}`
        second_fruit.value = "first";
        output.appendChild(fruit_two);
        
        const fruit_three = document.createElement("p");
        fruit_three.textContent = `Fruit Three: ${third_fruit.value}`
        third_fruit.value = "first"
        output.appendChild(fruit_three);


        const spec = document.createElement("p");
        if(specification.value != ""){
            spec.textContent = `Preparation specification: ${specification.value}`;
            specification.value = "";
            output.appendChild(spec);
        }else{
            spec.textContent = "No preparation specification";
            output.appendChild(spec);
        }

        const order_date = document.createElement("p");
        const options = {day:'numeric', month:"long", year:"numeric", hour:"numeric", minute:"numeric"};
        const date = new Date().toLocaleDateString("en-US", options)
        order_date.textContent = `Order Date: ${date}`
        output.appendChild(order_date);

        const carbohydrates = document.createElement("p");

        const proteins = document.createElement("p");

        const fat = document.createElement("p");

        const sugar = document.createElement("p");

        const calories = document.createElement("p");


        order_count++
        localStorage.setItem("order_count", order_count);
        console.log(order_count);
    }
})
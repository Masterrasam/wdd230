const request = "./json/fruits.json";
const first_fruit = document.querySelector('#first_fruit');
const second_fruit = document.querySelector('#second_fruit');
const third_fruit = document.querySelector('#third_fruit');
let list = ''

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject)
    const fruitslist = jsonObject['fruits']
    jsonObject.forEach(displayOptions)

  });


function displayOptions(fruitOption){

    let first = document.createElement('option')
    first.id = `${fruitOption.name}`
    first.innerHTML = `${fruitOption.name}`
    first_fruit.appendChild(first)

    let second = document.createElement('option')
    second.id = `${fruitOption.name}`
    second.innerHTML = `${fruitOption.name}`
    second_fruit.appendChild(second)

    let third = document.createElement('option')
    third.id = `${fruitOption.name}`
    third.innerHTML = `${fruitOption.name}`
    third_fruit.appendChild(third)  
}










// Others
function toggleMenu() {
  document.getElementById("bar_nav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

// Last Modification
document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

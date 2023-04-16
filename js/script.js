//Quetsion 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};
cat.complain();


//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
paragraphs[i].style.color = "red";

}

//Question 6 

const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7 
const cats = [
{
    name: "Blob",
    age: 10
},
{
    name: "Harold",
},
{
    name: "Blurt",
    age: 21
}
];

function myFuncion(list) {
for(let i = 0; i < list.length; i++)

console.log(list[i].name);
}

myFuncion(cats);

//Quetsion 8

function createCats(cats) {
for(let i = 0; i < cats.length; i++) {
    cats[i].innerHTML = "<div> "
}
}

createCats();
const reviews = [
    {
        id: 1,
        name: 'Franskeska Estevez',
        job: 'Science teacher',
        img: '#',
        text: 'Mariam was an outstanding student in my biology class who consistently demonstrated dedication and resposibility. Always thr first to arrive and on time, she set a positive example for her peers. Her respectful behavior and ability to work well with others made her a valued team player. She consistently put forth her best effort, completing all assignments with care and attention. Her work was consistently at an honors level, reflecting her strong academic skills and commitment to excellence. When faced with confusion or challenges, she was proactive in asking questions and seeking support, showing maturity and a genuine desire to learn.', 
    },
    {
        id: 2,
        name: 'Violeta Talavera',
        job: 'Math teacher',
        img: '#',
        text: 'Mariam has grown ever since I met her. She is good at math always raised her hand and always completed her work in class nad her homework. She was always on time in class and those are the things she is good at. She never acted out and she was one of the best students Ive ever had and teached.',
    },
    {
        id: 3,
        name: 'Mariama',
        job: 'Para',
        img: '#',
        text: 'Mariam has grown to be a very selfless resposible caring individual she is goal driven hardworking and a very smart individual. Having her by your side is definitely a bonus. She makes everyone around her feel comfortable, She is good at working as a team and individually and shes a good person overall.',
    },    
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem= 0;

//Load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}); 

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
} 


nextBtn.addEventListener('click', function (){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0){
        currentItem =reviews.length - 1;
    }
    showPerson(currentItem);
});










// console.log("Hello World!");

// //String has quotes/Number no quotes
// let myTest = "123";
// console.log(typeof myTest);

// console.log(10 + " eggs");
// console.log(10 + 8 + " eggs")
// console.log("eggs " + 10 + 8);

// //Both conditions need to be true
// console.log(7>3)&&(5>2);

// //Only one condition must be true
// console.log(10>3)||(10>12);

// //Logical not
// console.log(!5>3)

// function introduction(name,age){
//     console.log("Hello, my name is "+ name + " and I am "+ age + " years old.");
// }

// introduction("Mariam",14)

// const hour = new Date().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Goodmorning ☀️";
// }else if (hour<18){
//     greeting = "Good afternoon ☁️";
// }else{
//     greeting = "Good evening 🌙";
// }

// document.getElementById("greeting").innerText = greeting;
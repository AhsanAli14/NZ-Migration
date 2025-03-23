const ellipses = document.querySelectorAll('.ellipse');
const nextBtn = document.querySelector('.submit-btn');


let currentIndx = 1;

const nextEventHandle = ()=> {

    if(currentIndx < ellipses.length) {
        ellipses[currentIndx].classList.add('visible');
        currentIndx++;
    } else {
        ellipses.forEach((ellipse, index)=>{
            if (index !== 0) ellipse.classList.remove('visible');
        })
        currentIndx = 1;
    }

}

nextBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    nextEventHandle();
});



// const form = document.querySelector('.form-qs');
// const select = document.querySelector('.g-list');
// const errorMsg = document.querySelector('.error-msg');
// const textBox = document.querySelector('.textbox');



// select.addEventListener('change', (event)=> {
//     dropValue = event.target.value;
//     // dropValue = this.value;
//     console.log(dropValue);
//     console.log(event);
// });

// const validation = (event) => {
//     event.preventDefault(); // Prevents default form submission
//     console.log("form");
// }

// form.addEventListener("submit", validation);


// // // Let's create a 3x3 grid with javascript

const container = document.querySelector('.container');

// const itemCont = document.createElement("div");
// itemCont.classList.add('item-cont');
// itemCont.textContent = 'hi there';


// These two for cycles create a grid of 16x16 as the
// default for the page. Down there there is the function
// to edit the number of pixels


for (let i = 0; i < 16; i++) {
        const itemCont = document.createElement("div");
        itemCont.classList.add('item-cont');
        itemCont.textContent = '';
        container.appendChild(itemCont);
    for( let j = 0; j < 16; j++) {
        const item = document.createElement("div");
        item.classList.add('item');
        itemCont.appendChild(item);
    }
}

const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

/* When the button close to resolution is clicked
container.innerHTML = ""; resets the DOM and a new
grid with the custom number of pixel is created.
It also checks that the value provided is less or equal
than 100 
*/

btn.addEventListener('click', () => {
    if (res.value <= 100 ) {
        container.innerHTML = "";
        for (let i = 0; i < res.value ; i++) {
            const itemCont = document.createElement("div");
            itemCont.classList.add('item-cont');
            itemCont.textContent = '';
            container.appendChild(itemCont);
        for( let j = 0; j < res.value; j++) {
            const item = document.createElement("div");
            item.classList.add('item');
            itemCont.appendChild(item);
        }
        }} else {
            alert('Insert a value between 0 and 100');
        }
    });

container.addEventListener('mouseover', (e) => {
    e.target.classList.add('black');
    console.log(e.target);
});





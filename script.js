// // // Let's create a 3x3 grid with javascript

const container = document.querySelector('.container');

// const itemCont = document.createElement("div");
// itemCont.classList.add('item-cont');
// itemCont.textContent = 'hi there';



for (let i = 0; i < 4; i++) {
        const itemCont = document.createElement("div");
        itemCont.classList.add('item-cont');
        itemCont.textContent = '';
        container.appendChild(itemCont);
    for( let j = 0; j < 4; j++) {
        const item = document.createElement("div");
        item.classList.add('item');
        itemCont.appendChild(item);
    }
}



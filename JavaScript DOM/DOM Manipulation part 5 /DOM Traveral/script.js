// Event Hendling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// ---

// DOM Traversal Method

// - parentNode                = Node
// - parentElement             = Element
// - nextSibling               = Node
// - nextElementSibling        = Element
// - previousSibling           = Node
// - previousElementSibling    = Element 

// ---

//DOM Traversal
const close = document.querySelectorAll('.close');
// console.log(close);

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     }) 
// }

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
})


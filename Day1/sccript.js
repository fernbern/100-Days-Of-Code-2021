console.log('Hello World');
const btn = document.querySelector('.btn');

btn.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;

    document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
});
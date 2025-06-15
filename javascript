let bnt = document.querySelector('.trilho');
let body = document.querySelector('body');
let text = document.querySelector('h1');

bnt.addEventListener('click', () => {
  bnt.classList.toggle('dark');
  body.classList.toggle('dark');
  text.classList.toggle('dark');
})

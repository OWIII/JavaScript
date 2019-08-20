const  link = document.querySelector('.link');
const myList = document.querySelector('.myList');

link.addEventListener('click', (event) => {
    let li = document.createElement('li');
    li.textContent = 'Элемент списка';
    myList.appendChild(li);
});

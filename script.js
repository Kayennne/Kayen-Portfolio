function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '0'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '-250px'
}

// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll ('.slider .dots li');

// let active = 0;
// let lengthItems = items.length - 1;

// function reloadSlider(){
//     let checkLeft = items[active].offsetLeft;
//     list.style.left = -checkLeft + 'px';

//     let lastActiveDot = document.querySelector('.slider .dots li.active');
//     lastActiveDot.classList.remove('active');
//     dots[active].classList.add('active');
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', function(){
//         active = key;
//         reloadSlider();
//     })
// })


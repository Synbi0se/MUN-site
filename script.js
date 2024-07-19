function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
}

// const device_height = window.innerHeight;
// console.log(device_height);
// const frontpage = document.getElementById('frontpage');
// frontpage.style.top = -device_height;
const tiles = document.querySelectorAll('.tile');
Array.from(tiles).forEach(tile => {
tile.addEventListener('click', setColor)
});

function someFunction() {
this.style.backgroundColor == 'hotpink' ? this.style.backgroundColor = 'white' : this.style.backgroundColor ='hotpink';
}
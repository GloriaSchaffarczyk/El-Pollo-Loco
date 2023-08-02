let canvas;
let ctx; // Benennung ist Standard bei 2D-Canvas
let world = new World();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

console.log('My character is', world['character']);
}

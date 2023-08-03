let canvas;
let world;
// Variable ctx wurde gelöscht

function init() {
    canvas = document.getElementById('canvas'); // hier ist das HTML des Canvas gespeichert
    world = new World(canvas);

console.log('My character is', world['character']);
}

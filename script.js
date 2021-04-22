pic1 = document.getElementById('pic1');
pic2 = document.getElementById('pic2');
pseudoCanvas = document.getElementById('pic2');

pic1.addEventListener('click', (e) => {
    pseudoCanvas.src = '1051.jpg';
})

pic2.addEventListener('click', (e) => {
    pseudoCanvas.src = '631.jpg';
})
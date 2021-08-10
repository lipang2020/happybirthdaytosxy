var pic = document.getElementById('move');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    pic.style.left = x + 20 + 'px';
    pic.style.top = y + 20 + 'px';



});
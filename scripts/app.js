//Grab hidden block
const div = document.querySelector('.hover-img');

//hoverEffect positions the above div next to our mouse coordinates
function hoverEffect(e){
    div.style.top = e.pageY + 'px';
    div.style.left = e.pageX + 'px';
}

//cursorEffect ensures the correct project image is shown when we hover each title
function cursorEffect(e){
    const item = e.target;
    if(item.classList.contains('p1')){
        div.style.display = 'block';
        div.style.background = 'url(./img/forest.png)';
    }else if (item.classList.contains('p2')) {
        div.style.display = 'block';
        div.style.background = 'url(./img/hike.png)'
    } else if (item.classList.contains('p3')){
        div.style.display = 'block';
        div.style.background = 'url(./img/fashion.png)'
    } else {
        div.style.display = 'none';
    } 
}

window.addEventListener('mousemove', hoverEffect);
window.addEventListener('mousemove', cursorEffect);






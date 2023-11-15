let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let img = document.querySelector('img');

function openImg(picture){
    fullImgBox.style.display = "flex";
    fullImg.src = picture;
    img.classList.remove('hover');
    
}

function closeImg(){
    fullImgBox.style.display = "none";
}

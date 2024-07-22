let images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
let imagesIDs = ["img1", "img2", "img3", "img4"];
let curPos = 0;

function startSlider(amount) {
  curPos += amount;
  for (let i = 0; i < images.length; i++) {
    const imageID = imagesIDs[i];
    console.log(imageID);
    let image = document.getElementById(imageID);
    let oldTranslation = image.style.getPropertyValue("transform");
    let oldX = image.getBoundingClientRect().x;
    image.style = "transform: translateX(" + (i - curPos) * 100 + "%";
    console.log(oldX);
  }
}

function slideLeft() {
  startSlider(1);
}
function slideRight() {
  startSlider(-1);
}
//   setTimeout(function () {
//     document.getElementById("img1").style = "transform: translateX(-200%)";
//     document.getElementById("img2").style = "transform: translateX(-100%)";
//     document.getElementById("img3").style = "transform: translateX(0%)";
//   }, 6000);

//   setTimeout(function () {
//     document.getElementById("img1").style = "transform: translateX(0)";
//     document.getElementById("img2").style = "transform: translateX(100%)";
//     document.getElementById("img3").style = "transform: translateX(200%)";
//     startSlider();
//   }, 9000);

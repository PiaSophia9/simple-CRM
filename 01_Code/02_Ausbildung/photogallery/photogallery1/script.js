let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
];

function load() {
  for (let index = 0; index < images.length; index++) {
    document.getElementById("imagecontainer").innerHTML += generateImage(index);
  }
}

function generateImage(i) {
  let image = images[i];
  return `<img onclick="openPopup(${i})" class="image_in_imagebox" src="${images[i]}" alt="">`;
}

function openPopup(imageIndex) {
  document.getElementById("popUp").classList.remove("d_none");
  renderPopup(imageIndex);
}

function renderPopup(imageIndex) {
  document.getElementById("popUp").innerHTML = ` 
  <img onclick="exitPopup()" class="icon_exit" src="images/icons/exit.png" alt="">
  <img onclick="ShowPreviousImage(${imageIndex})" class="icon_previous_image" src="images/icons/previous_image.png" alt="">
  <img onclick="ShowPreviousImage(${imageIndex})" class="icon_up" src="images/icons/up.png" alt="">
  <div class="popup_div">
    <img class="popup_image" src="${images[imageIndex]}" alt="">
  </div>
  <img onclick="ShowNextImage(${imageIndex})" class="icon_next_image" src="images/icons/next_image.png" alt="">
  <img onclick="ShowNextImage(${imageIndex})" class="icon_down" src="images/icons/down.png" alt="">`;
}

function exitPopup() {
  document.getElementById("popUp").classList.add("d_none");
}

function ShowPreviousImage(arrayNumber) {
  let previousImage = arrayNumber - 1;
  if (previousImage < 0) {
    previousImage = images.length - 1;
    renderPopup(previousImage);
  } else {
    renderPopup(previousImage);
  }
}

function ShowNextImage(arrayNumber) {
  let nextImage = arrayNumber + 1;
  if (nextImage == images.length) {
    nextImage = 0;
    renderPopup(nextImage);
  } else {
    renderPopup(nextImage);
  }
}

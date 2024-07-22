let posts = [
  {
    author: "Sophia",
    image: "img/img1.jpg",
    description:
      "Text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolores temporibus iure nostrum quisquam tempora animi eligendi odio minus voluptatem non itaque suscipit laudantium expedita, voluptate vel eos numquam distinctio?",
    location: "",
    comment: ["Dort will ich auch hin!"],
    isLiked: false,
    likes: 10,
    isBookmarked: false,
  },
  {
    author: "Sophia",
    image: "img/img2.jpg",
    description:
      "Text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolores temporibus iure nostrum quisquam tempora animi eligendi odio minus voluptatem non itaque suscipit laudantium expedita, voluptate vel eos numquam distinctio?",
    location: "London",
    comment: [],
    isLiked: false,
    likes: 0,
    isBookmarked: true,
  },
  {
    author: "Sophia",
    image: "img/img3.jpg",
    description:
      "Text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolores temporibus iure nostrum quisquam tempora animi eligendi odio minus voluptatem non itaque suscipit laudantium expedita, voluptate vel eos numquam distinctio?",
    location: "Aachen",
    comment: ["Wunderschön!"],
    isLiked: false,
    likes: 0,
    isBookmarked: false,
  },
];

let savedPosts = [];
let renderedOnlyBookmarks = false;

function showPosts() {
  load();
  renderedOnlyBookmarks = false;
  document.getElementById("postcontainer").innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    document.getElementById("postcontainer").innerHTML += generatePost(i);
    showComment(i);
    showLikes(i);
  }
}

function generatePost(i) {
  let post = posts[i];
  return /*html*/ `
  <div class="post">
    <div class="post_top">
      <img class="author_image" src="img/profile.jpg">
      <div class="author_and_location">
        <b>${post["author"]}</b>
        ${post["location"]}
      </div>
    </div>
    <img class="post_image" src="${post["image"]}">
    <div class="icons_area">
      <img onclick="clickEmptyHeart(${i})" id="heartIcon${i}" class="heart_icon" src="img/icons/heart_empty.png">
      <img onclick="clickRedHeart(${i})" id="heartIconRed${i}" class=" heart_icon_red d_none" src="img/icons/heart_red.png">
      <img class="icon" src="img/icons/bubble.svg">
      <img onclick="saveToClipboard()" class="share_icon icon" src="img/icons/paper_plane.svg">
      <img onclick="bookmarkPost(${i})" id="bookmarkPost${i}" class="icon bookmark_icon" src=${getBookmarkIcon(posts[i].isBookmarked)}>
    </div>
    <div id="likeArea${i}" class="like_area">
    </div>
    <div class="description_area">
      <p><b>${post["author"]}</b> ${post["description"]}</p>
    </div>
    <div id="commentArea${i}" class="comment_area">
    </div>  
    <div class="input_comment_area">
    <textarea class="input_comment" id="textarea${i}" rows="2" placeholder="Kommentar hinzufügen..." required></textarea>
      <button onclick="pushAndShowComment(${i})" class="submit_comment_button" type="button">Posten</button>
    </div>
  </div>
`;
}

// Heart

// Das soll beim Laden passieren:

function turnHeartRedIfTrue(i) {
  if (posts[i]["isLiked"] == true) {
    document.getElementById(`heartIcon${i}`).classList.add("d_none");
    document.getElementById(`heartIconRed${i}`).classList.remove("d_none");
  }
}

function showLikes(i) {
  turnHeartRedIfTrue(i);
  document.getElementById(`likeArea${i}`).innerHTML = renderLikes(i);
}

function renderLikes(i) {
  return `<p><b>Gefällt ${posts[i]["likes"]} Mal</b></p>`;
}

// Das soll passieren, wenn ich auf ein volles Herz klicke:

function clickRedHeart(i) {
  // Herz wird weiß
  document.getElementById(`heartIcon${i}`).classList.remove("d_none");
  document.getElementById(`heartIconRed${i}`).classList.add("d_none");
  posts[i].likes--;
  posts[i].isLiked = false;
  save();
  showLikes(i);
}

// Das soll passieren, wenn ich auf ein leeres Herz klicke:

function clickEmptyHeart(i) {
  // Herz wird rot
  document.getElementById(`heartIcon${i}`).classList.add("d_none");
  document.getElementById(`heartIconRed${i}`).classList.remove("d_none");
  posts[i].likes++;
  posts[i].isLiked = true;
  save();
  showLikes(i);
}

// Comments

function pushAndShowComment(i) {
  pushCommentIntoArrayComments(i);
  showComment(i);
  emptyTextarea(i);
}

function pushCommentIntoArrayComments(param) {
  let commentValue = document.getElementById(`textarea${param}`).value;
  if (commentValue == "") {
    alert("Bitte geben Sie einen Kommentar ein.");
  } else {
    posts[param].comment.push(commentValue);
    save();
  }
}

function showComment(i) {
  document.getElementById(`commentArea${i}`).innerHTML = "";
  for (let j = 0; j < posts[i]["comment"].length; j++) {
    document.getElementById(`commentArea${i}`).innerHTML += generateComment(i, j);
  }
}

function generateComment(i, j) {
  return `
  <p>
    <b>Mona </b>${posts[i]["comment"][j]}
  </p>
  `;
}

function emptyTextarea(i) {
  document.getElementById(`textarea${i}`).value = "";
}

// Local storage

function save() {
  let postsAsText = JSON.stringify(posts);
  localStorage.setItem("posts", postsAsText);
}

function load() {
  let postsAsText = localStorage.getItem("posts");
  if (postsAsText) {
    posts = JSON.parse(postsAsText);
  }
}

// suggestions

function changeInnerHTMLButton1() {
  if (document.getElementById("abbonieren_button1").innerHTML == "Abonnieren") {
    document.getElementById("abbonieren_button1").innerHTML = "Abonniert";
  } else {
    document.getElementById("abbonieren_button1").innerHTML = "Abonnieren";
  }
}
function changeInnerHTMLButton2() {
  if (document.getElementById("abbonieren_button2").innerHTML == "Abonnieren") {
    document.getElementById("abbonieren_button2").innerHTML = "Abonniert";
  } else {
    document.getElementById("abbonieren_button2").innerHTML = "Abonnieren";
  }
}
function changeInnerHTMLButton3() {
  if (document.getElementById("abbonieren_button3").innerHTML == "Abonnieren") {
    document.getElementById("abbonieren_button3").innerHTML = "Abonniert";
  } else {
    document.getElementById("abbonieren_button3").innerHTML = "Abonnieren";
  }
}
function changeInnerHTMLButton4() {
  if (document.getElementById("abbonieren_button4").innerHTML == "Abonnieren") {
    document.getElementById("abbonieren_button4").innerHTML = "Abonniert";
  } else {
    document.getElementById("abbonieren_button4").innerHTML = "Abonnieren";
  }
}
function changeInnerHTMLButton5() {
  if (document.getElementById("abbonieren_button5").innerHTML == "Abonnieren") {
    document.getElementById("abbonieren_button5").innerHTML = "Abonniert";
  } else {
    document.getElementById("abbonieren_button5").innerHTML = "Abonnieren";
  }
}

// Bookmarks/ Saved Posts

function bookmarkPost(i) {
  // Wenn der post bookmarked war
  if (posts[i].isBookmarked) {
    // set icon to empty
    document.getElementById(`bookmarkPost${i}`).src = "img/icons/bookmark_empty.png";
    posts[i].isBookmarked = false;
  } else {
    // soll das Icon schwarz werden....
    document.getElementById(`bookmarkPost${i}`).src = "img/icons/bookmark_black.png";
    posts[i].isBookmarked = true;
    // uns isBookmarked soll auf true gesetzt werden...
  }
  let postsAsText = JSON.stringify(posts);
  localStorage.setItem("posts", postsAsText);
  if (renderedOnlyBookmarks) {
    showBookmarkedPosts();
  } else {
    showPosts();
  }
}

function superComplicatedStuff(i) {
  return i + 1;
}

function squared(input) {
  let result = input * input;
  return result;
}

function x() {
  let i = 1;
  let b = superComplicatedStuff(i); // b=i+2 = 2

  let c = squared(b); // c = b*b = 4
  console.log(c);
}

function showBookmarkedPosts() {
  load();
  x();
  renderedOnlyBookmarks = true;
  document.getElementById("postcontainer").innerHTML = "<h1>Gespeicherte Posts</h1>";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (post.isBookmarked) {
      document.getElementById("postcontainer").innerHTML += generatePost(i);
      showComment(i);
      showLikes(i);
    }
  }
}

function getBookmarkIcon(isBookmarked) {
  if (isBookmarked) return "img/icons/bookmark_black.png";
  else return "img/icons/bookmark_empty.png";
}

// Paper-plane

function saveToClipboard() {
  alert("Fotogram zum Teilen in die Zwischenablage kopiert.");
  let text = "https://pia-brouwers.developerakademie.net/instagram/";
  navigator.clipboard.writeText(text);
}

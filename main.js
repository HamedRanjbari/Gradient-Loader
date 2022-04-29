const $ = document;
const header = $.getElementById("header");
const title = $.getElementById("title");
const ex = $.getElementById("ex");
const profile_img = $.getElementById("profile_img");
const name = $.getElementById("name");
const date = $.getElementById("date");
const animate_bgs = $.querySelectorAll(".animate-bg");
const animate_bg_texts = $.querySelectorAll(".animate-bg-text");

setTimeout(data, 3000);

function data() {
  header.innerHTML = '<img src="img/Shopping/1.jpg" alt="image" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  ex.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML = '<img src="img/profile/profile.jpg" alt="image-3" />';
  name.innerHTML = "Hamed Ranjbari";
  date.innerHTML = "Oct 08, 2020";
  animate_bgs.forEach((bg) => bg.classList.remove("animate-bg"));
  animate_bg_texts.forEach((bg) => bg.classList.remove("animate-bg-text"));
}

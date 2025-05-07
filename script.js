const navLink = document.querySelectorAll(".app__nav-link");
const mainItem = document.querySelectorAll(".app__main-item");

navLink.forEach((link, linkIndex) => {
  link.addEventListener("click", (e) => {
    changeCurrentLink(e);
    changeContent(linkIndex);
  });
});

function changeCurrentLink(e) {
  navLink.forEach((link) => {
    link.classList.remove("current")
  });
  
  e.target.classList.add("current");
}

function changeContent(linkIndex) {
  mainItem.forEach((item, itemIndex) => {
    if (linkIndex == itemIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
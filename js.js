// accordion tabs

let accordion = document.querySelector(".accordion-list");
let items = accordion.querySelectorAll("li");
let questions = accordion.querySelectorAll(".accordion-title");

questions.forEach((question) =>
  question.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  thisItem = this.parentNode;
  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("open");
      return;
    }
    item.classList.remove("open");
  });
}



// scroll to top
var mybutton = document.getElementById("scrolltotop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

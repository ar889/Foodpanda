let card = document.querySelectorAll(".card1");
card.forEach((item) => {
  item.addEventListener("mouseover", block);
  item.addEventListener("mouseout", none);
  function block() {
    item.children[1].style.display = "block";
  }
  function none() {
    item.children[1].style.display = "none";
  }
});
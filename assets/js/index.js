const d = document,
  $cards = d.querySelectorAll(".card:not(.viewed)"),
  $notification = d.querySelector("#notification");

document.addEventListener("click", ({ target }) => {
  if (target.matches("#btn-readall")) {
    $cards.forEach((card) => card.classList.add("viewed"));
    $notification.textContent = "0";
  }
});

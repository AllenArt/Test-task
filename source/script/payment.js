const items = document.querySelectorAll(".payment__item");

items[0].classList.add("payment__checked");
const firstItem = items[0].querySelector("input");

firstItem.checked = true;

items.forEach(function(element) {
  element.addEventListener("change", function() {
    const checkedItem = document.querySelector(".payment__checked");
    checkedItem.classList.remove("payment__checked");
    element.classList.add("payment__checked");
  }
  )
})

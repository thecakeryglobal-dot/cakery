(function () {
  "use strict";

  var hatUrl = "/seasonal/assets/santa-hat.png";

  function addHats() {
    document.querySelectorAll(".product-card, .best-card, .wishlist-card").forEach(function (card) {
      if (card.querySelector(":scope > .cakery-santa-hat")) return;

      var hat = document.createElement("img");
      hat.className = "cakery-santa-hat";
      hat.src = hatUrl;
      hat.alt = "";
      hat.setAttribute("aria-hidden", "true");
      card.appendChild(hat);
    });
  }

  addHats();

  var observer = new MutationObserver(addHats);
  observer.observe(document.body, { childList: true, subtree: true });
})();

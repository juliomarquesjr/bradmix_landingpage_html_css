var btn = document.querySelector(".whats-balao");

btn.addEventListener("click", function () {
  var div = document.querySelector(".card-whats");

  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
});

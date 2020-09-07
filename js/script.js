var modalbtn = document.querySelector(".intresting-button");
modalbtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    var modal = document.querySelector(".page-modal");
    if (modal.classList.contains("modal--show")) {
        modal.classList.remove("modal--show");
    } else {
        modal.classList.add("modal--show");
    }
})
// ===================================================================================
// Eta hocche dropdown e click and hover korle zate dropdown show kore setar jonno
// ===================================================================================


document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        let menu = dropdown.querySelector(".dropdown-menu");
        let toggle = dropdown.querySelector(".dropdown-toggle");

        // Hover start in big screen
        dropdown.addEventListener("mouseover", function () {
            if (window.innerWidth >= 992) { 
                let menu = this.querySelector(".dropdown-menu");
                menu.classList.add("show");
            }
        });

        // Stay hover some time 
        dropdown.addEventListener("mouseleave", function () {
            if (window.innerWidth >= 992) {
                let menu = this.querySelector(".dropdown-menu");
                setTimeout(() => {
                    if (!menu.matches(":hover")) {
                        menu.classList.remove("show");
                    }
                }, 200);
            }
        });
    });
});

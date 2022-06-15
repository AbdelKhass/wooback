
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var icon_plus = this.children[1];
        var icon_minus = this.children[0];
        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon_plus.style.display = "block";
            icon_minus.style.display = "none";
        } else {
            panel.style.display = "block";
            icon_plus.style.display = "none";
            icon_minus.style.display = "block";
        }
    });
}
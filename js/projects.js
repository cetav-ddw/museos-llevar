let content = document.querySelectorAll(".content");
let arrows = document.querySelectorAll(".arrow");

for(let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("change", () => {
        for(let m = 0; m < content.length; m++) {
            if (arrows[i].checked) {
                content[i].style.display = "block";
            } else {
                content[i].style.display = "none";
            }
        }
    })
}

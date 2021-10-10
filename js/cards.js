let content = document.querySelectorAll(".js-content");
let arrows = document.querySelectorAll(".js-arrow");

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("change", () => {
        for (let i = 0; i < content.length; i++) {
            if (arrows[i].checked) {
                content[i].style.display = "block";
                console.log(content[i], arrows[i])
            } else {
                content[i].style.display = "none";
            }
        }
    });
};




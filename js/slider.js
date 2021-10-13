const slidesInfo = [
    {
    "image": "./img/img1.jpeg",
    "title": "Nombre",
    "description": "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    "alt":"Esta es una imagen"
    },

    {
        "image": "./img/img2.jpeg",
        "title": "Nombre",
        "description": "Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "alt":"Esta es una imagen"
    },

    {
        "image": "./img/img3.jpeg",
        "title": "Nombre",
        "description": "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
        "alt":"Esta es una imagen"
    },

    {
        "image": "./img/img4.jpeg",
        "title": "Nombre",
        "description": "Is simplytext of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
        "alt":"Esta es una imagen"
        },

    {
        "image": "./img/img5.jpeg",
        "title": "Nombre",
        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
        "alt":"Esta es una imagen"
        }
]

console.log(slidesInfo);


function contentSlider(data){
    let content = '';
    const slider = document.getElementById('slider-container');
    content = `
        <div class="slider__item swiper--slide">
                    <div class="slider__item--img">
                        <img src="${data.image}"  alt= "${data.alt}">
                    </div>
                    <div class="slider__content">
                        <h2>${data.title}</h2>
                        <p>${data.description}</p>
                    </div>
        </div>
    `;

    slider.innerHTML += content;
    }

function sliderData(data){
    data.forEach(element => {
        contentSlider(element);
    });
}

sliderData(slidesInfo);





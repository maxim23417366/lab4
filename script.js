document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function changeColors(element) {
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
    }
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');

    elements.forEach((element, index) => {
        const elementIndex = index + 1; 

        if (elementIndex === 2) {
            element.addEventListener('click', () => {
                changeColors(element);
            });
        } else if (elementIndex === 3) {
            element.addEventListener('click', () => {
                changeColors(element);
            });
        }
    });

    const STEP = 50;

    const existingImage = document.querySelector('img');
    let imageContainer = null;

    if (existingImage) {
        existingImage.id = 'image-main'; 
        if (existingImage.parentElement) {
            existingImage.parentElement.id = 'image-container'; 
            imageContainer = existingImage.parentElement;
        }
    } else {
        imageContainer = document.querySelector('figure > a');
        if (imageContainer) {
            imageContainer.id = 'image-container';
        }
    }

    const getCurrentImage = () => document.getElementById('image-main');
    const getImageContainer = () => document.getElementById('image-container');
    function addImage() {
        const img = getCurrentImage();
        const container = getImageContainer();

        if (!img && container) { 
            const newImg = document.createElement('img');
            newImg.id = 'image-main';
            newImg.src = 'city.jpg';
            newImg.alt = 'Фото Риму';
            newImg.width = 500;
            container.appendChild(newImg);
        } else if (img) { 
            img.width = 500;
        }
    }
    function deleteImage() {
        const img = getCurrentImage();
        if (img) {
            img.remove();
        }
    }
    function increaseImageSize() {
        const img = getCurrentImage();
        if (img) {
            img.width += STEP;
        }
    }
    function decreaseImageSize() {
        const img = getCurrentImage();
        if (img) {
            img.width -= STEP;
        }
    }
    document.getElementById('add-image').addEventListener('click', addImage);
    document.getElementById('remove-image').addEventListener('click', deleteImage);
    document.getElementById('increase-image').addEventListener('click', increaseImageSize);
    document.getElementById('decrease-image').addEventListener('click', decreaseImageSize);

});
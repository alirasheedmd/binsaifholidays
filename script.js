const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const closeButton = document.createElement('span');
closeButton.innerHTML = '&times;';
closeButton.id = 'lightbox-close';
lightbox.appendChild(closeButton);

const budgetImages = document.querySelectorAll('.Budget-Images img');
budgetImages.forEach(image => {
    image.addEventListener('click', () => {
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        lightbox.appendChild(closeButton);

        lightbox.classList.add('active');
    });
});

closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

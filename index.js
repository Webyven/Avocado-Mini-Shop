/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API_BASE_URL = 'https://platzi-avo.vercel.app/';
const API_DEFAULT_URL = API_BASE_URL + 'api/avo';
const API_IMAGE = (image) => { return API_BASE_URL + image };

function formatPrice(price){
    return new window.Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

fetch(API_DEFAULT_URL)
    .then(res => res.json())
    .then(jsonRes => {
        const toAdd = [];
        const container = document.querySelector('#avocado-images-container');

        jsonRes.data.forEach(entry => {
            const avocadoContainer = document.createElement('div');
            avocadoContainer.classList = "main-avocado-container m-4 border-solid border-2 border-sky-100 rounded";
            avocadoContainer.style.display = "inline-block";

            const avocadoName = document.createElement('h3');
            avocadoName.classList.add('font-semibold');
            avocadoName.innerText = entry.name;

            const avocadoPrice = document.createElement('p');
            avocadoPrice.innerText = formatPrice(entry.price);

            const detailsContainer = document.createElement('div');
            detailsContainer.classList = "details-container text-center p-2"
            detailsContainer.style.borderTop = "2px solid rgba(229, 231, 235)"
            detailsContainer.append(avocadoName, avocadoPrice);

            const img = document.createElement('img');
            img.src = API_IMAGE(entry.image);
            img.width = 250;

            avocadoContainer.append(img, detailsContainer);
            toAdd.push(avocadoContainer);
        });

        container.append(...toAdd);
    });

    


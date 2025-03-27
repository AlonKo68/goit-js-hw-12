import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImgCard, clearGallery } from './js/render-functions';

const form = document.querySelector('.form');
const spinner = document.querySelector('.loader');
const btnLoad = document.querySelector('.btn-load');

btnLoad.style.display = 'none';

let page;
let queryValue = '';

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    clearGallery();
    btnLoad.style.display = 'none';
    spinner.style.display = 'flex';
    page = 1;

    queryValue = evt.currentTarget.elements.query.value.trim();
    if (!queryValue) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term!',
            position: 'topRight'
        });
        spinner.style.display = 'none';
        return;
    }

    try {
        const { hits, totalHits } = await fetchImages(queryValue, page);

        if (hits.length === 0) {
            iziToast.warning({
                message: 'No images found. Try again!!',
                position: 'topRight'
            });
        } else {
            renderImgCard(hits);
            if (totalHits > 15) btnLoad.style.display = 'flex';
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Try again later!',
            position: 'topRight'
        });
    } finally {
        spinner.style.display = 'none';
        form.reset();
    }
});

btnLoad.addEventListener('click', async () => {
    page += 1;
    try {
        const { hits, totalHits } = await fetchImages(queryValue, page);
        renderImgCard(hits);
        smoothScroll();

        if (page * 15 >= totalHits) {
            btnLoad.style.display = 'none';
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Try again later!',
            position: 'topRight'
        });
    }
});

function smoothScroll() {
    const cardHeight = document.querySelector('.gallery-item')?.getBoundingClientRect().height || 0;
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}
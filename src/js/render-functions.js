import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
});

export function renderImgCard(images) {
    const markup = images
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) =>
                `<li class="gallery-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="200"/>
                        <ul class="gallery-text-list">
                            <li class="gallery-text-item"><h3>Likes</h3><p>${likes}</p></li>
                            <li class="gallery-text-item"><h3>Views</h3><p>${views}</p></li>
                            <li class="gallery-text-item"><h3>Comments</h3><p>${comments}</p></li>
                            <li class="gallery-text-item"><h3>Downloads</h3><p>${downloads}</p></li>
                        </ul>
                    </a>
                </li>`
        )
        .join('');

    gallery.insertAdjacentHTML('beforeend', markup)
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}
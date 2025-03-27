import axios from 'axios';

const API_KEY = '49502034-df263a01178fc9ef1a0cdcc0b';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 15,
                page,
            }
        });

        return { hits: data.hits, totalHits: data.totalHits };

    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
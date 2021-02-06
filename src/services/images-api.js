import PropTypes from 'prop-types'

function fetchImages(query, page = 1) {
    const KEY = '19267719-9b47d05d33b3fa392544db2d5';
    const BASE_URL = 'https://pixabay.com/api/'
    
    return fetch(`${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => {
                    if (res.ok) { return res.json() }
                    return Promise.reject(new Error(`По запросу ${query} ничего не найдено`))
                })
}

const api = { fetchImages }

export default api;

fetchImages.propTypes = {
    query: PropTypes.string,
    page: PropTypes.number,
}
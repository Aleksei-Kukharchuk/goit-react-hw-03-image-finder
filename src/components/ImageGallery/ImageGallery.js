import { Component } from 'react'
import PropTypes from 'prop-types'
import s from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'
import Loader from '../Loader'
import imagesAPI from '../../services/images-api'
import Button from '../Button'

export default class ImageGallery extends Component {

    state = {
        images: null,
        error: null, 
        status: 'idle',
        page: 1,
    }

    componentDidUpdate(prevProps, prevState ) {
        const prevQuery = prevProps.query;
        const nextQuery = this.props.query;
         
        if (prevQuery !== nextQuery) {
            this.setState({ status: 'pending', page: 2 })
            
            imagesAPI.fetchImages(nextQuery)
                .then(images => this.setState({ images: images.hits, status: 'resolved' }))
                .catch(error => this.setState({error, status: 'rejected'}))
        }
    }

    loadNextPage = () => {
        this.setState((prevState) => ({ status: 'resolved', page: prevState.page + 1 }))

        let scrollHeight = document.documentElement.scrollHeight - 90;
        
        imagesAPI.fetchImages(this.props.query, this.state.page)
            .then(images => this.setState((prevState) => ({ images: [...prevState.images, ...images.hits], status: 'resolved' })))
            .then(() => {
                window.scrollTo({
                    top: scrollHeight,
                    behavior: 'smooth',
                });
                scrollHeight = document.documentElement.scrollHeight;
            })
            .catch(error => this.setState({ error, status: 'rejected' }))
            
    }
    
    render() {
        const { status, error } = this.state;

        if (status === 'idle') {
            return (<div></div>)
        }

        if (status === 'pending') {
            return(<Loader/>)
        }

        if (status === 'rejected') {
            return(<h1>{error.message}</h1>)
        }

        if (status === 'resolved') {
            return (
                <>
                    <ul className={s.ImageGallery}>
                        <ImageGalleryItem images={this.state.images} />
                    </ul>
                    <Button loadNextPage={this.loadNextPage}/>
                </>
            )
        }
}
}

ImageGallery.propTypes = {
    query: PropTypes.string,
}

/* Список карточек изображений. Создает DOM-элемент следующей структуры. */
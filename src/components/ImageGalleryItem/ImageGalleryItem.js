import { Component } from 'react'
import PropTypes from 'prop-types'
import s from './ImageGalleryItem.module.css'
import Modal from '../Modal'

export default class ImageGalleryItem extends Component {

     state = {
         showModal: false, 
         modalImg: '',
         modalAlt: ''
    }
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal}))
    }

    handleModalImg = (e) => {
        this.setState({ modalImg: e.target.currentSrc, modalAlt: e.target.alt })
        this.toggleModal();
    }

    render() {
        return (
                <>
                    {this.props.images.map(image => (
                        <li key={image.id} onClick={this.handleModalImg}>
                            <img src={image.largeImageURL} alt={image.tags} className={s.ImageGalleryItemImage} />
                        </li>
                    ))}
                {this.state.showModal && <Modal onClose={this.toggleModal} image={this.state}/>}
                </>
        )
    }
}

ImageGalleryItem.propTypes = {
    images: PropTypes.array,
}

/* Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.

<li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li> */
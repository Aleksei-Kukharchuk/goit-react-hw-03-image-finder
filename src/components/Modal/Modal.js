import React,{Component} from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }

    render() {
        const { modalImg, modalAlt } = this.props.image;
        
        return createPortal(
        <div className={s.Overlay} onClick={this.handleBackdropClick}>
            <div className={s.Modal}>
                    <img src={modalImg} alt={modalAlt} className={s.Img}/>
            </div>
        </div>,
        modalRoot)
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,
}

/* При клике по элементу галереи должно открываться модальное окно с темным оверлеем
и отображаться большая версия изображения. Модальное окно должно закрываться 
по нажатию клавиши ESC или по клику на оверлее.

Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого 
модального окна рендерится изображение (в примере нажми Run). Анимацию делать не нужно! */
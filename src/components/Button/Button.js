import PropTypes from 'prop-types'
import s from './Button.module.css'

export default function Button({ loadNextPage }) {
    return (
        <button type="button" className={s.Button} onClick={loadNextPage}>Load more</button> 
    )
}

Button.propTypes = {
  loadNextPage: PropTypes.func,
}

/* При нажатии на кнопку Load more должна догружаться следующая порция изображений 
и рендериться вместе с предыдущими. После загрузки и рендера новой партии изображений 
страница должна плавно скролиться. Для скрола используй следующий код.

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. 
Если массив изображений пуст, кнопка не рендерится. */
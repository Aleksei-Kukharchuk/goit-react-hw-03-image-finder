import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css'

const searchbarRoot = document.querySelector('#searchbar-root');

export default class Searchbar extends Component {

    state = {
        query: '',
    }

    handleQueryChange = e => {
        this.setState({query: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e =>{
        e.preventDefault()

        if (this.state.query.trim() === '') {
            toast("Введите запрос!");
            return;
        }

        this.props.onSubmit(this.state.query)
        this.setState({query: ''})
    }

    render() {
        return createPortal(
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleQueryChange}
                    />
                </form>
            </header>,
            searchbarRoot
        )
    }
}

/* Описание компонента Searchbar
Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. Создает DOM-элемент следующей структуры.
 */
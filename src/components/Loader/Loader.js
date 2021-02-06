import React from 'react'
import Loader from "react-loader-spinner";
import s from './Loader.module.css'

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className={s.Loader}>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
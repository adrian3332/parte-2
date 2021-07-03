import React from 'react'
//import foto from '../../images/foto.jpg'

const Cards = ({user}) => {
    const {name,login,picture}=user
    console.log(user)
    return (
        <div className="card">
                <img src={picture.large} className="card-img-top" alt={login.username}/>
                <div className="card-body">
                      <h5 className="card-title">{name.last}</h5>
                      <a href="#" className="btn btn-primary">Seguir</a>
                 </div>
      className</div>
    )

}
export default Cards

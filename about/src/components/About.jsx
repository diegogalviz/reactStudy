import React from "react";
import '../stylesheets/About.css'

const About = (props) => {
    return (<div className='container-about'>
            <img className='img-profile'
                src={require(`../assets/img/profile${props.image}.jpg`)}
                alt="profile1"
            />

            <div className='content-about'>
                <p className='name-profile'>
                    <strong>{props.name} </strong>
                    en <strong>{props.country}</strong></p>
                <p className='profession-profile'>{props.profession}</p>
                <p className='description-profile'>"{props.description}"</p>
            </div>

        </div>)
}

export {About}
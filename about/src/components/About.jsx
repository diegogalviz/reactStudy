import React from "react";

const About = () =>  {
    return(
        <div className='container-about'>
            <img
                src={require('../assets/img/profile1.jpg')}
                alt="profile1"
                />

            <div className='content-about'>
                <p className='name-profile'></p>
                <p className='profession-profile'></p>
                <p className='description-profile'></p>
            </div>

        </div>
    )
}
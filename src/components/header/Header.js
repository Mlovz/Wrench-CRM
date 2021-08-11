import React from 'react'
import Logo from '../../assets/Vector (1).png'
import Auth from '../../assets/ic_person.png'

const Header = () => {
    return (
        <div className='flex_between_center header'>
            <div className="flex_vertical_center header__logo">
                <img src={Logo} alt="" />
                <h3 className='header__logo__title'>Wrench CRM</h3>
            </div>
            <div className="flex_vertical_center header__auth">
                <img src={Auth} alt="" />
                <h3 className='header__auth__name'>Яхья Местоев</h3>
            </div>
        </div>
    )
}

export default Header

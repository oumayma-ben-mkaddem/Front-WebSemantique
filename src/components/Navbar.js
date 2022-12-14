import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Button from "./Button";
import './Navbar.css'
import './Button.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    useEffect(() => {
        showButton()
    }, [])

    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
            setClick(false)
        }
    }

    window.addEventListener('resize', showButton)

    return(
        <>
            <nav className={'navbar'}>
                <div className={'navbar-container'}>
                    <Link to={'/'} className={'navbar-logo'} onClick={closeMobileMenu}>
                        TRVL <i className={'fab fa-typo3'}/>
                    </Link>
                    <div className={'menu-icon'} onClick={handleClick}>
                        <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link to={'/'} className={'nav-links'} onClick={closeMobileMenu}>
                                Companies
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/Products'} className={'nav-links'} onClick={closeMobileMenu}>
                                Clients
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/Hebergement'} className={'nav-links'} onClick={closeMobileMenu}>
                                Hebergement
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/Hotels'} className={'nav-links'} onClick={closeMobileMenu}>
                                Hotels
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
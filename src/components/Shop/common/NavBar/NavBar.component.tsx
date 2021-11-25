import React, {Component} from 'react'
import './navbar.scss'


export default class NavBar extends Component {


    render() {
        //todo very ugly fix this
        let pathname = new URL(window.location.href).pathname;
        if (pathname.indexOf('/', 1) !== -1) {
            pathname = pathname.substring(0, pathname.indexOf('/', 1))
        }
        let active_dict = {
            "/": "",
            "/business-cards": "",
            "/reviews": "",
            "/payment-plans": "",
            "/contact": "",
            "/method": ""
        }
        active_dict[pathname] = "selectedNavbarItem"
        return (
            <div className="navbarContainer">
                <div className="navbarItems">

                    <a className="navbarItem" href={'/'}>
                        <span className={active_dict['/']}>Home</span>
                    </a>
                    <a className="navbarItem" href={'/business-cards'}>
                        <span className={active_dict['/business-cards']}>Visitekaartjes</span>
                    </a>
                    <a className="navbarItem" href={'/reviews'}>
                        <span className={active_dict['/reviews']}>Recenties</span></a>
                    <a className="navbarItem" href={'/method'}>
                        <span className={active_dict['/method']}>Werkwijze</span>
                    </a>
                    <a className="navbarItem" href={'/payment-plans'}>
                        <span className={active_dict['/payment-plans']}>Prijzen</span>
                    </a>
                    <a className="navbarItem" href={'/contact'}>
                        <span className={active_dict['/contact']}>Contact</span>
                    </a>
                </div>
            </div>
        )
    }

}

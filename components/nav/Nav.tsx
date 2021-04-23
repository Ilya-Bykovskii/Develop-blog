// types
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// system files

// components
import NavLink from './../nav-link/NavLink'

// styles
import Style from './Style.module.scss'

// export function getServerSideProps(req: )

export default function Nav() {
    const pages: Readonly<Array<keyof stdNS.Pages>> = ["Home", "Topics", "Scroll", "About"];
    return (
        <nav
            className={Style.nav}
        >
            <ul
                className={Style.nav__wrapper}
            >
                {pages.map((elem, index) => <li 
                    key={index}
                    className={Style.nav__item}    
                >
                    <NavLink 
                        page={elem}
                    />
                </li>
                )}
            </ul>
        </nav>
    )
}
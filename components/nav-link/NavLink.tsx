// types
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// system files
import Link from 'next/link';

// components

// styles
import Style from './Style.module.scss'

interface props {
    page: keyof stdNS.Pages
}

export default function NavLink(props: props) {
    const pageLinks: Readonly<stdNS.Pages> = {
        "Home": '/',
        "About": '/about',
        "Posts": '/posts',
        "Scroll": '/scroll'
    }

    return(
            <Link
                href={pageLinks[props.page]}
            >
                <a className={Style.link}>{props.page}</a>
            </Link>
    )
}
// types
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// system files
import Link from 'next/link';

// components

// styles
import Style from './Style.module.scss'

interface props {
    page: keyof stdNS.Pages,
    id?: number,
}

export default function NavLink(props: props) {
    const pageLinks: Readonly<stdNS.Pages> = {
        "Home": '/',
        "About": '/about',
        "Topics": '/topic',
        "Scroll": '/scroll'
    }

    return(
            <Link
                href={props.id ? 
                    `${pageLinks[props.page]}/${props.id}`
                :
                    pageLinks[props.page]
                }
            >
                <a className={Style.link}>{props.page}</a>
            </Link>
    )
}
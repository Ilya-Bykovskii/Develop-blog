// system files:
import Head from 'next/head'

// Types:
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// components:
import Nav from './../../components/nav/Nav';
import LMbtn from './../../components/lern-more-btn/LMbtn'

// styles:
import Style from './Style.module.scss'


export default function BaseL(props: stdNS.LayoutProps) {
    return(
        <>
            <Head>
                <title>{props.title + ' | Next TS App'}</title>
            </Head>
            <header className={Style.header}>
                <div className={Style.header__wrapper}
                >
                    <p className={Style.title}>
                        Next APP
                    </p>

                    <Nav/>
                </div>
            </header>
            <main className={Style.main}>
                {props.children}
            </main>
        </>
    )
}
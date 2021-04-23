// system files:
import Head from 'next/head'

// Types:
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// components:
import Nav from './../../components/nav/Nav';
import LMbtn from './../../components/lern-more-btn/LMbtn';
import Pyromid from './../../components/pyromid/Pyromid';

// styles:
import Style from './Style.module.scss'


export default function HomeL(props: stdNS.LayoutProps) {
    return(
        <>
            <Head>
                <title>{props.title + ' | Next TS App'}</title>
            </Head>
            <header className={Style.header}>
                <div className={Style.header__wrapper}>
                    <p className={Style.title}>
                        Next APP
                    </p>

                    <Nav/>

                    <div className={Style.intro}>
                        <h1 className={Style.intro__slogan}>
                            Next.JS blog
                        </h1>
                        <p className={Style.intro__description}>
                            Blog about develop on next.js and web-design
                            <br/>
                            More articles, topics and lectures
                        </p>
                        <LMbtn
                            link={'posts'}
                            content={'View posts'}
                        />
                    </div>
                </div>
            </header>
            <main className={Style.main}>
                {props.children}
            </main>
        </>
    )
}

// types
/// <reference path="./../../../namespace/std.tsx" />
import {reqNS} from './../../../namespace/req';

// system files
import { useEffect } from 'react';
import Route from 'next/router'

// componets
import NavLink from './../../nav-link/NavLink'

// styles:
import Style from './TopicPrev.module.scss';

export default function TopicPrev(data: Partial<reqNS.ArticlePrev>) {

    if (!data.status) return (
        <div className={Style.item}>
            <div className={Style.item__titleW}></div>
            <div className={Style.item__prevW}></div>
        </div>
    )

    return (
        <div 
            className={`${Style.item} ${Style.active}`}
            onClick={() => Route.push(`http://localhost:3000/topic/${data.id}`)}
        >
            <h4 className={Style.item__title}>{data.title}</h4>
            <p className={Style.item__prev}>{data.preview}</p>
        </div>
    )
}
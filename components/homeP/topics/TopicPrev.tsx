/// <reference path="./../../../namespace/std.tsx" />
import { useEffect } from 'react';
import {reqNS} from './../../../namespace/req';

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
            className={Style.item}
        >
            <h4 className={Style.item__title}>{data.title}</h4>
            <p className={Style.item__prev}>{data.preview}</p>
            <NavLink
                page={`Topics`}
                id={data.id}
            />
        </div>
    )
}
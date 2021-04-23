/// <reference path="./../../../namespace/std.tsx" />
import { useEffect } from 'react';
import {reqNS} from './../../../namespace/req';

// styles:
import Style from './TopicPrev.module.scss';

export default function TopicPrev(data: Partial<reqNS.ArticlePrev>) {
    console.log(data);
    

    if (!data.status) return (
        <div className={Style.item}>
            <div className={Style.item__titleW}></div>
            <div className={Style.item__descW}></div>
        </div>
    )

    return (
        <div>
            <h4 className={Style.item__title}>{data.title}</h4>
            <p className={Style.item__prev}>{data.preview}</p>
        </div>
    )
}
// Types:
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// style
import Style from './Style.module.scss'

export default function LMbtn(props: stdNS.BTNprops) {
    return (
        <div className={Style.btn}>
            <a 
                href={`#${props.link}`}
                className={Style.btn__link}
            >
                {props.content}
            </a>
        </div>
    )
} 
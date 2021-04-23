// types
/// <reference path="./../../namespace/std.tsx" />
import {stdNS} from './../../namespace/std';

// components
import BaseL from './../../layouts/baseL/BaseL'

// styles
import Style from './Style.module.scss'


export default function About() {
    return (
        <BaseL
            title={'About'}
        >
            <h1>About</h1>
        </BaseL>
    )
}
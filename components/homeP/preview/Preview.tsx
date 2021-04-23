// Types:
// /// <reference path="./../namespace/std.tsx" />
// import {stdNS} from './../namespace/std';

// components:

// styles:
import Style from './Preview.module.scss';
import Desc from './Description.module.scss'

export default function Preview() {
    return (
        <section className={Style.preview}>
            <div className={Style.preview__wrapper}>
                <img 
                    className={Style.preview__pic} 
                    src="https://images.unsplash.com/photo-1542392213-7d72edb05f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80" alt="preview pichure"
                    loading="lazy"
                />

                <div className={Desc.description}>
                    <h2 className={Desc.description__lable}>
                        What we have?
                    </h2>
                    <p className={Desc.description__vision}>
                        <strong>Nisl</strong> omittam complectitur pro an, quem omnes munere id vix. Oratio accumsan et mea. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui. 
                    </p>
                    <p className={Desc.description__overview}>
                        <strong>Eu</strong> cum iuvaret debitis voluptatibus, esse perfecto reformidans id has.
                    </p>
                </div>
            </div>
        </section>
    )
}
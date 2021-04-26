// system files
import { useEffect } from 'react';

// components
import LinkNavTopic from './Link';

// style
import Style from './nav.module.scss';

export default function Nav(prop: {id: number}) {
    return (
        <section className={Style.nav}>
            <ul>
                <li key={1}>
                    {(prop.id - 1 > 0) ? 
                        <LinkNavTopic
                            id={prop.id - 1}
                        /> : ''
                    }
                </li>
                <li  key={2}>
                    <LinkNavTopic
                        id={prop.id + 1}
                    />
                </li>
            </ul>
        </section>
    )
}
// system files
import { useEffect, useState } from 'react';

// styles
import Style from './Style.module.scss';

interface Props {
    handler: Function,
    className?: string,
}

export default function CreateNewTopicAside(props: Props) {
    return (
        <aside className={`${Style['create-topic']} ${props.className}`}>
            <div className={Style['create-topic__wrapper']}>
                <p className={Style['create-topic__description']}>
                    Also you can create new topic and show world how you smart!
                </p>
                <button
                    onClick={() => props.handler()} 
                    className={Style['create-topic__btn']}
                >
                    Create new topic
                </button>
            </div>
        </aside>
    )
}
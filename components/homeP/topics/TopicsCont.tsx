// types
/// <reference path="./../../../namespace/req.tsx" />
import { reqNS } from './../../../namespace/req';

// system files
import {useEffect, useState} from 'react';

// components
import TopicPrev from './TopicPrev';

// styles:
import Style from './TopicPrev.module.scss';

export default function TopicCont() {
    const [topics, setTopics] = useState([]); 
    const [load, setLoad] = useState(false);
    const topicReq = `http://localhost:3000/api/topic/gen`;

    function genEmptyTopic() {
        console.log('empty');
        
        let result = []

        for (let i = 0; i < 6; i++) {
            result.push(<li key={i}>
                <TopicPrev status={false}/>
            </li>)
        }
        return result
    }

    console.log(topics)

    useEffect(() => {
        fetch(topicReq)
        .then(req => req.json())
        .then(json => setTopics(json))
        .catch(err => console.error(err))
        .finally(() => setLoad(true));
        }, [])

    return (
        <section className={Style.topics}>
            <div className={Style.topics__wrapper}>
                <ul className={Style.topics__spinner}>
                    {!load ? 
                        genEmptyTopic()
                    :
                        topics.map(elem => <li key={elem.id}>
                            <TopicPrev
                                id={elem.id}
                                title={elem.title}
                                preview={elem.preview}
                                createID={elem.createID}
                                status={true}
                            />
                        </li>)
                    }
                </ul>
            </div>
        </section>
    )
}
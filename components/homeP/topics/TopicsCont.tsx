// types
/// <reference path="./../../../namespace/req.tsx" />
import { reqNS } from './../../../namespace/req';
import {CaretLeft, CaretRight} from 'phosphor-react';

// system files
import {useEffect, useState} from 'react';

// components
import TopicPrev from './TopicPrev';

// styles:
import Style from './TopicCont.module.scss';

export default function TopicCont() {
    const [topics, setTopics] = useState([]); 
    const [load, setLoad] = useState(false);
    const [translate, setTranslate] = useState(0);

    const topicReq = `http://localhost:3000/api/topic/gen`;
    const step = 87;

    function move(derection: 'left' | 'right') {
        console.log(translate);
        
        if (derection === 'left' && translate === 0) {
            setTranslate(prev => prev - step)
            return;
        }
        
        if (translate === -87)  setTranslate(prev => prev + step)
    }

    function genEmptyTopic() {        
        let result = []

        for (let i = 0; i < 6; i++) {
            result.push(<li key={i}>
                <TopicPrev status={false}/>
            </li>)
        }
        return result
    }

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
                <CaretLeft 
                    size={32} 
                    className={`${Style.caret} ${Style.caret__left}`}
                    onClick={() => move('left')}
                />
                <CaretRight 
                    size={32} 
                    className={`${Style.caret} ${Style.caret__right}`}
                    onClick={() => move('right')}
                />

                <ul 
                    className={Style.topics__spinner}
                    style={{
                        transform: `translateX(${translate}vw)`,
                    }}
                >
                    {!load ? 
                        genEmptyTopic()
                    :
                        topics.map(elem => <li 
                            key={elem.id}
                            className={Style.topics__item}
                        >
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

                <div className={Style.indicator}>
                    <div className={`
                        ${Style.indicator__item} 
                        ${translate != (-87) ? Style.ebale : Style.enebale}`
                    }></div>
                    <div className={`
                        ${Style.indicator__item} 
                        ${translate == 0 ? Style.enebale : Style.ebale}`
                    }></div>
                </div>
            </div>
        </section>
    )
}
// types
/// <reference path="./../../../namespace/req.tsx" />
import { reqNS } from './../../../namespace/req';
import {CaretLeft, CaretRight, Spinner} from 'phosphor-react';

// system files
import {useEffect, useState, useRef} from 'react';

// components
import TopicPrev from '../../topic-preview/TopicPrev';

// styles:
import Style from './TopicCont.module.scss';

export default function TopicCont() {
    const [topics, setTopics] = useState([]); 
    const [load, setLoad] = useState(false);
    const [translate, setTranslate] = useState(0);

    const spinner = useRef<HTMLHeadingElement>();

    const topicReq = `http://localhost:3000/api/topic/get/6`;
    let step = 87;

    function move(derection: 'left' | 'right') {        
        if (derection === 'left' && translate === 0) {
            setTranslate(prev => prev - step)
            return;
        }
        
        if (derection === 'right' && translate === -87)  setTranslate(prev => prev + step)
    }

    function genEmptyTopic() {        
        let result = []

        for (let i = 0; i < 6; i++) {
            result.push(<li key={i}>
                <TopicPrev status={false}/>
            </li>)
        }
        return result;
    }

    useEffect(() => {
        console.log('start request');
        
        fetch(topicReq)
        .then(req => req.json())
        .then(json => setTopics(json))
        .catch(err => console.error(err))
        .finally(() => setLoad(true))
        .finally(() => console.log('end request'));
        }, [])


    return (
        <section className={Style.topics}>
            <div className={Style.topics__wrapper}>
                <CaretLeft 
                    size={32} 
                    className={`
                        ${Style.caret} 
                        ${Style.caret__left}
                        ${topics.length * step === (-translate) ? Style.disable : Style.enable}
                    `}
                    onClick={() => move('left')}
                />
                <CaretRight 
                    size={32} 
                    className={`
                        ${Style.caret} 
                        ${Style.caret__right}
                        ${translate === 0 ? Style.disable : Style.enable}
                    `}
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
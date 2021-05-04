// types
/// <reference path="./../../namespace/req.tsx" />
import {reqNS} from '../../namespace/req';

// system files
import { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";

// layout
import BaseL from '../../layouts/baseL/BaseL'

// components
import TopicPrev from '../../components/topic-preview/TopicPrev'
import CreateNewTopic from './../../components/create-new-topic-aside/CreateNewTopicAside';
import CreateNewTopicPopApp from './../../components/create-new-topic-pop-app/CreateNewTopic'

// styles
import Style from './../../styles/posts-list.module.scss';
import { Check } from 'phosphor-react';

export async function getServerSideProps<getServerSideProps>() {
    const link = 'http://localhost:3000/api/topic/get/9';

    const data = await fetch(link);
    const json = await data.json();

    return {
        props: {json}
    }
}

export default function About(props: {json: reqNS.ArticlePrev[]}) {
    const [topics, setTopics] = useState<reqNS.ArticlePrev[]>([]);
    const [reqStatus, setStatus] = useState<boolean>();
    const [loaded, setLoaded] = useState<boolean>(true);
    const [popAppHidden, setPopAppHedden] = useState<boolean>(true);

    let check: boolean = true;
    let count: number = 9;

    useEffect(() => {
        setTopics(props.json)
    }, [props])

    useEffect(() => {
        document.addEventListener('scroll',  () => {
            if (topics.length == count && checkScroll()) {
                count += 9;
                setTimeout(async () => await unloadNewTopics(), 0);
            }
        })
    })

    function checkScroll(): boolean {
        const scroll: boolean = document.body.clientHeight - (window.scrollY + document.documentElement.clientHeight) < 300;
                
        return scroll;
    }

    async function unloadNewTopics() {
        console.log('load');

        setLoaded(false);
        
        await fetch('http://localhost:3000/api/topic/get/9')
        .then(req => {
            if (req.ok) return req;
            throw Error('can not get new topics')
        })
        .then(req => req.json())
        .then(json => setTopics(prev => [...prev, ...json]))
        .then(() => setStatus(true))
        .catch(err => console.error(err))
        .catch(() => setStatus(false))
        .finally(() => setLoaded(true))
        .finally(() => check = true)
    }

    return (
        <BaseL
            title={'Posts'}
        >
            <section className={Style['topic-list']}>
                <div className={Style['topic-list__wrapper']}>
                    {topics ? 
                    topics.map(elem => <TopicPrev
                        id={elem.id}
                        title={elem.title}
                        preview={elem.preview}
                        status={true}
                        createID={elem.createID}
                        classNames={Style.nav__item}
                    />)
                    :
                    props.json.map(elem => <TopicPrev
                        id={elem.id}
                        title={elem.title}
                        preview={elem.preview}
                        status={true}
                        classNames={Style.nav__item}
                        createID={elem.createID}
                    />)
                    }
                </div>
            </section>
            <CreateNewTopic
                handler={() => setPopAppHedden(prev => !prev)}
            />
            {popAppHidden ? '' : 
                <CreateNewTopicPopApp 
                    handler={() => setPopAppHedden(prev => !prev)}
                />}
        </BaseL>
    )
}
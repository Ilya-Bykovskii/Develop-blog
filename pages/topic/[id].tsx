// types
/// <reference path="./../../namespace/std.tsx" />
import {reqNS} from './../../namespace/req';

// system files
import {useRouter} from 'next/router';

// layouts
import BaseL from './../../layouts/baseL/BaseL';

// components
import Nav from './../../components/topic-itemP/nav/Nav';

// style
import Style from './../../styles/post.module.scss';

const link = 'http://localhost:4000/topic-full/'

export async function getServerSideProps<GetServerSideProps>(ctx) {
    const ID = ctx.query.id;

    const res = await fetch(link + ID);
    const json = await res.json();

    console.log('render server side props');
    
    return {
        props: {json}
    }
}

export default function TopicsFull(topic: {json: reqNS.ArticleFull}) {
    const route = useRouter();
    const data = topic.json

    console.log('new render');
    

    return (
        <BaseL
            title={`${data.title}`}
        >
            <section className={Style.topic}>
                <h2 className={Style.title}>
                    {data.title}
                </h2>
                {data.body.map(elem => <p>{elem}</p>)}
            </section>
            <Nav
                id={+route.query.id}
            />
        </BaseL>
    )
}
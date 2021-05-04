// types
/// <reference path="./../../namespace/req.tsx" />
import {reqNS} from '../../namespace/req';

// system files
import { useEffect, useState} from 'react';
import {X} from 'phosphor-react';

// styles
import Style from './Style.module.scss';

// validation
import validData from './../../functions/validation/checkNewTask';

export default function CreateNewTopicPopApp(props: {handler: Function}) {
    const [title, setTitle] = useState<string>();
    const [prev, setPrev] = useState<string>();
    const [body, setBody] = useState<string>();

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") props.handler();
        })

        return document.removeEventListener('keydown', (e) => {
            if (e.key === "Escape") props.handler();
        }) 
    }, [])

    function fetchData(): void {
        if (!(title && prev && body)) return;

        const [status, ...props] = validData({
            title,
            body,
            prev
        });

        if (!status) return;

        fetch('http://localhost:4000/topic-prev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, 
                preview: prev, 
                creteID: 1,
            })
        })
    
        fetch('http://localhost:4000/topic-full', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, 
                body: [body], 
                creteID: 1,
            })
        })
    }

    return (
        <section className={Style['create-topic']}>
            <form 
                className={Style['create-topic__form']}
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    fetchData();
                    props.handler();
                }}
                method={'Post'}
            >
                <X 
                    size={28} 
                    className={Style['create-topic__close-ic']}
                    onClick={() => props.handler()}
                />

                <label className={Style['cerate-topic__lable--title']}>
                    <span className={Style['cerate-topic__text--title']}>
                        Enter title
                    </span>
                    <input 
                        type={'text'}
                        className={Style['cerate-topic__input--title']}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={'No more 10 words'}
                        name={'title'}
                        required
                    />
                </label>
                
                <label className={Style['cerate-topic__lable--prev']}>
                    <span className={Style['cerate-topic__text--prev']}>
                        Enter prev
                    </span>
                    <textarea 
                        className={Style['cerate-topic__input--prev']}
                        onChange={(e) => setPrev(e.target.value)}
                        placeholder={'No more 50 words'}
                        name={'preview'}
                        required
                    />
                </label>
                
                <label className={Style['cerate-topic__lable--body']}>
                    <span className={Style['cerate-topic__text--body']}>
                        Enter body
                    </span>
                    <textarea 
                        className={Style['cerate-topic__input--body']}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder={'No more 200 words'}
                        name={'body'}
                        required
                    />
                </label>

                <button
                    className={Style['create-topic__submit']}
                >
                    Submit
                </button>
            </form>
        </section>
    )
}
// types:
/// <reference path="./../../../namespace/std.tsx" />
import {stdNS} from './../../../namespace/std';

// system files
import Link from 'next/link';
import {useEffect, useState} from 'react';

// style
import LinkStyle from './link.module.scss';

export default function LinkNavTopic(prop: {id: number}) {
    const link = `http://localhost:3000/api/topic/`;
    const [title, setTitle] = useState<string | boolean>(false);
    const [status, setStatus] = useState<boolean>(true);

    function loadTitle(id: number) {        
        const linkActule = `${link}(${id})title`;
        console.log(linkActule);

        fetch(linkActule)
        .then(req => {
            if (!req.ok) throw new Error('Props not found')
            return req;
        })
        .then(data => data.json())
        .then(json => setTitle(json))
        .then(() => setStatus(true))
        .catch(err => console.error(err))
        .catch(() => setStatus(false))
        .finally(() => console.log('requst sended'));        
    }

    useEffect(() => {
        loadTitle(prop.id);
    }, [prop])

    return (
        <div className={LinkStyle.btn}>
            <Link
                href={'/topic/[id]'}
                as={`/topic/${prop.id}`}
            >
                <a>
                    {title}
                </a>
            </Link>
        </div>
    )
}

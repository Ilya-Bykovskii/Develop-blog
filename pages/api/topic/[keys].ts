// types:
/// <reference path="./../../../namespace/req.tsx" />
import {reqNS} from '../../../namespace/req';

type Prop = keyof reqNS.ArticleFull | keyof reqNS.ArticlePrev;

export default async function getOnceProp(req, res) {
    const reqStr: string = req.query.keys;
    const ID = reqStr.match(/[0-9]+/);
    
    const keys = reqStr.slice(`${ID}`.length + 2).split('-');

    const link = 'body' in keys ? 
        `http://localhost:4000/topic-full/${ID}` :
        `http://localhost:4000/topic-prev/${ID}`;

    const data = await fetch(link);
    const json = await data.json();

    if (typeof json != 'object') res.end(JSON.stringify(false))
    
    const result = keys.map(elem => {
        if (json[elem]) return json[elem]
        throw new Error(`key - ${elem} is undefined`)
    });

    res.end(JSON.stringify(result));
}
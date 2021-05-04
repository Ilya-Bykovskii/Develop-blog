// types
/// <reference path="./../../namespace/req.tsx" />
import {reqNS} from '../../namespace/req';

type StringsTamplate = [Array<string>, number]

interface DataStrings {
    title: StringsTamplate,
    prev: StringsTamplate,
    body: StringsTamplate,
}

function checkString([str, length]: [string, number]): boolean {
    if (!Array.isArray(str)) return true;
    if (str.length > length) return false;
    return true;
}

export default function validData(data: reqNS.PostArticle): [boolean, string[]?] {
    const dataStrings: DataStrings = {
        title: [data.title.match(/\s[a-z]+\s/gi), 10],
        prev: [data.prev.match(/\s[a-z]+\s/gi), 50],
        body: [data.body.match(/\s[a-z]+\s/gi), 200],
    }

    let errors: string[] = [];

    for (let key in dataStrings) {
        if (!checkString(dataStrings[key])) errors.push(key);
    }

    return errors.length ? [true] : [false, errors];
}
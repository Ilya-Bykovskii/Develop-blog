/// <reference path="./../namespace/std.tsx" />
import {stdNS} from './../namespace/std';

// layouts:
import HomeL from './../layouts/homeL/HomeL'

// components:
import Preview from './../components/homeP/preview/Preview'
import TopicCont from './../components/homeP/topics/TopicsCont';

// styles:

export default function Home() {
  const elem = <li>Hello</li>;
  return(
    <HomeL
      title={'Home'}
    >
      <Preview/>
      <TopicCont/>
    </HomeL>
  )
}
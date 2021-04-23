// system files:
import Head from 'next/head'

// Types:
/// <reference path="./../namespace/std.tsx" />
import {stdNS} from './../namespace/std';

// layouts:
import BaseL from './../layouts/homeL/HomeL'

// components:

// styles:

export default function Home() {
  const elem = <li>Hello</li>;
  return(
    <BaseL
      title={'Home'}
    >
      <h2>Hello my name is...</h2>
    </BaseL>
  )
}
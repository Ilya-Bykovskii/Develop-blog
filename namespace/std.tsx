import { ReactNode } from "react";

export namespace stdNS {
    export interface Pages {
        'Home': '/',
        'About': '/about',
        "Posts": '/posts',
        "Scroll": '/scroll',
    } 

    export interface LayoutProps {
        title: string,
        children: ReactNode,
    }

    export interface BTNprops {
        link: string,
        content: string,
    }
}
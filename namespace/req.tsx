export namespace reqNS {
    interface Article {
        id: number,
        title: string,
        createID: number,
        status?: boolean,
    }

    export interface ArticlePrev extends Article {
        preview: string,
    }

    export interface ArticleFull extends Article {
        body: Array<string>,
    }

    export type  RequestStatus = 'prepair' | 'send' | 'good' | 'err';
}

export default {};
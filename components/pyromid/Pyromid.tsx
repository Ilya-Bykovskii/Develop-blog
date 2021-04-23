// system files
import Route from 'next/router'

// styles
import Style from './style.module.scss'

export default function Pyromide() {
    return (
        <div className="container">
            <div 
                className={`${Style.side} ${Style.left}`}
                onClick={() => Route.push('/')}
            ></div>
            <div 
                className={`${Style.side} ${Style.front}`}
                onClick={() => Route.push('/posts')}
            ></div>
            <div 
                className={`${Style.side} ${Style.right}`}
                onClick={() => Route.push('/scroll')}
            ></div>
            <div 
                className={`${Style.side} ${Style.back}`}
            ></div>
            <div className="shadow"></div>
        </div>
    )
}
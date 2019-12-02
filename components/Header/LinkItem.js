import Link from 'next/link';
import {Icon} from 'antd';
const LinkItem = ({path,icon,text,isActive})=>(
    <li className="links-item">
        <Link href={path}>
            <a className={isActive?"active":""}><span className={`icon`}><Icon type={icon} /></span> {text}</a>
        </Link>
        <style jsx>{`
        li {
            float:left;
            list-style: none;
            margin: 0 5px;
        }

        a {
            text-decoration: none;
            line-height:14px;
            font-size:14px;
            vertical-align:center;
            align-self: center;
            box-shadow: none;
            border: none;
            color: #fff;
            opacity: 0.6;
            transition: color .1s ease;
            border-radius: .28571429rem;
            padding:11px 13px;
            margin:0 5px;
        }
        .active{
            background: rgba(255,255,255,.15);
            opacity: 1;
        }
        a:hover {
            opacity: 1;
        }
        .icon{
            font-size:14px;
            vertical-align: text-bottom;
        }
    `}</style>
    </li>
);
export default LinkItem;
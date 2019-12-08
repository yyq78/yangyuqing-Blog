import Link from 'next/link';
const Intro = ()=>(
    <div className="intro">
        <Link href="/p/1">
            <a>三道题彻底搞定，套路解决递归问题</a>
        </Link>
        <style>
            {`
            .intro{
                padding:14px;
                font-size:14px;
            }
            .intro a{
                color:rgba(0,0,0,0.65);
                text-decoration: none;
                font-weight:300;
            }
            `}
        </style>
    </div>
)
export default Intro;
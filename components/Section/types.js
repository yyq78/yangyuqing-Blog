import Link from 'next/link';
const Types = ()=>(
    <div className="sectionUl">
        <Link><div><a>数据结构与算法</a><div className="label">1</div></div></Link>
        <Link><div><a>小项目</a><div className="label">1</div></div></Link>
        <Link><div><a>Leetcode</a><div className="label">1</div></div></Link>
        <Link><div><a>操作系统</a><div className="label">1</div></div></Link>
        <Link><div><a>计算机网络</a><div className="label">1</div></div></Link>
        <Link><div><a>数据库</a><div className="label">1</div></div></Link>
        <style jsx>{`
            .sectionUl{
                margin:14px;
                border:1px solid rgba(34,36,38,.15);
                border-radius:4px;
                box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
                color:rgba(0,0,0,0.87);
            }
            .sectionUl div{
                padding:13px 16px;
                border-bottom:1px solid rgba(34,36,38,.15);
                display:flex;
                justify-content:space-between;
                align-items:center;
            }
            .sectionUl div .label{
                text-align:center;
                padding: .2em .78571429em;
                color: #00B5AD;
                border-color: #00B5AD;
                position:relative;
                border: 1px solid #00B5AD;
                border-radius:4px;
            }
            .label:before{
                content:"";
                width:6px;
                height:6px;
                transform:rotate(-45deg);
                position:absolute;
                border-top: 1px solid #00B5AD;
                border-left: 1px solid #00B5AD;
                background-color:white;
                top:8px;
                left:-4px;
            }
        `}</style>
    </div>
)
export default Types;
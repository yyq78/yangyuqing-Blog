import Link from 'next/link';
import Popver from '../popver';
const Types = ()=>(
    <div className="sectionUl">
        <Link href="/types/1"><div className="li"><a>数据结构与算法</a><Popver><span>1</span></Popver></div></Link>
        <Link href="/types/2"><div className="li"><a>小项目</a><Popver><span>1</span></Popver></div></Link>
        <Link href="/types/3"><div className="li"><a>Leetcode</a><Popver><span>1</span></Popver></div></Link>
        <Link href="/types/4"><div className="li"><a>操作系统</a><Popver><span>1</span></Popver></div></Link>
        <Link href="/types/5"><div className="li"><a>计算机网络</a><Popver><span>1</span></Popver></div></Link>
        <Link href="/types/6"><div className="li"><a>数据库</a><Popver><span>1</span></Popver></div></Link>
        <style jsx>{`
            .sectionUl{
                margin:14px;
                border:1px solid rgba(34,36,38,.15);
                border-radius:4px;
                box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
                color:rgba(0,0,0,0.87);
            }
            .sectionUl .li{
                padding:13px 16px;
                border-bottom:1px solid rgba(34,36,38,.15);
                display:flex;
                justify-content:space-between;
                align-items:center;
            }
            .sectionUl .li:hover{
                cursor: pointer;
                background: rgba(0,0,0,.03);
                color: rgba(0,0,0,.95);
            }
            .sectionUl span{
                padding: .2em .78571429em;
            }
        `}</style>
    </div>
)
export default Types;
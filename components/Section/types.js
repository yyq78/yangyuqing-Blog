import Link from 'next/link';
import Popver from '../popver';
import list from '../static/typesApi';
const Types = ()=>(
    <div className="sectionUl">
        {
            list.map((item)=>{
                return (
                    <Link href={`/types/${item.id}`}>
                        <div className="li">
                            <a>{item.name}</a>
                            <Popver radius="4px" size="4px" color="#00B5AD"><span className="count">{item.articleCount}</span></Popver>
                        </div>
                    </Link>
                )
            })
        }
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
            .sectionUl .li .count{
                color:#00B5AD;
            }
        `}</style>
    </div>
)
export default Types;
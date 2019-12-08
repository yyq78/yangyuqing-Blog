import Popver from '../popver';
import Link from 'next/link';
import list from '../static/tagsApi';
const Tags = ()=>(
    <div className="wrap">
        {list.map((item)=>{
            return (
            <Popver>
                <Link href={`/tags/${item.id}`}>
                    <div>
                        {item.name}
                        <span>{item.articleCount}</span>
                    </div>
                </Link>
            </Popver>
            )
        })}
        <style jsx>
            {`
                .wrap{
                    display:flex;
                    flex-wrap:wrap;
                    padding:14px;
                }
                .wrap div{
                    padding:5px 10px;
                }
                .wrap span{
                    padding:8px;
                }
            `}
        </style>
    </div>
)
export default Tags;
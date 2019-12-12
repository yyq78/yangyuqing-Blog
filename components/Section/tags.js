import Popver from '../popver';
import Link from 'next/link';
import list from '../static/tagsApi';
const Tags = ()=>(
    <div className="wrap">
        {list.map((item)=>{
            return (
                <div className="tag-item">
                    <Popver radius="4px" size="3px" color="#00B5AD">
                        <Link href={`/tags/${item.id}`}>
                            <div className="text">
                                <span>{item.name}</span>
                                <span className="count">{item.articleCount}</span>
                            </div>
                        </Link>
                    </Popver>
                </div>
            
            )
        })}
        <style jsx>
            {`
                .wrap{
                    display:flex;
                    flex-wrap:wrap;
                    padding:14px;
                }
                .tag-item{
                    margin:6px;
                }
                .text{
                    color:#00B5AD;
                }
                .count{
                    padding:6px;
                }
            `}
        </style>
    </div>
)
export default Tags;
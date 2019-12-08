import Popver from '../popver';
import Link from 'next/link';
const Tags = ()=>(
    <div className="wrap">
        <Popver>
        <Link href="/tags/1"><div>java<span>1</span></div></Link>
        </Popver>
        <Popver>
        <Link href="/tags/2"><div>python<span>1</span></div></Link>
        </Popver>
        <Popver>
        <Link href="/tags/3"><div>后端开发<span>1</span></div></Link>
        </Popver>
        <Popver>
        <Link href="/tags/4"><div>算法<span>1</span></div></Link>
        </Popver>
        <Popver>
        <Link href="/tags/5"><div>基础知识<span>1</span></div></Link>
        </Popver>
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
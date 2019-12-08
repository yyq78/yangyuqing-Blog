import Popver from '../popver' 
const Tags = ()=>(
    <div className="wrap">
        <Popver>
            <div>java<span>1</span></div>
        </Popver>
        <Popver>
            <div>python<span>1</span></div>
        </Popver>
        <Popver>
            <div>后端开发<span>1</span></div>
        </Popver>
        <Popver>
            <div>算法<span>1</span></div>
        </Popver>
        <Popver>
            <div>基础知识<span>1</span></div>
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
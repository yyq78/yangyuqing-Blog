import { Icon } from 'antd';
import {useRouter} from 'next/router'
import Link from 'next/link';
const BlogItem = ({item,index}) => {
  const router = useRouter();
  function toPage(){
    router.push(`/p/${item.id}`);
  }
  return (
    <li className="blog-item" key={index}>
      <div className="left">
        <div className="header">
          <Link href="/p/[id]" as={`/p/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </div>
        <p className="text">{item.description}</p>
        <ul className="ul horizontal">
          <li>
              <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="img"/>
          </li>
          <li><a className="weight author">{item.author}</a></li>
          <li><Icon type="calendar" className="icon"/> {item.date}</li>
          <li><Icon type="eye" className="icon"/> {item.watch}</li>
          <li><span className="tag">{item.type}</span></li>
        </ul>
      </div>
      <div className="right">
        <img src={item.img} className="img" onClick={toPage}/>
      </div>
      <style jsx>{`
        a{
          text-decoration:none;
          color:#333;
          display:inline-block;
        }
        .blog-item{
          display:flex;
          align-items:center;
          padding:28px 21px;
        }
        .left{
          flex:1;
        }
        .left .ul.horizontal{
          display:flex;
          padding:0!important;
          list-style:none;
          font-size:12px;
          align-items:center;
          color:rgb(0,0,0,0.4);
        }
        .left .ul li{
          margin-right:12px;
        }
        .left .ul li:nth-child(1){
          margin-right:0;
        }
        .left .ul li:last-child{
          flex:1;
          text-align:right;
          margin-right:0;
          
        }
        .left .ul li:last-child .tag{
          display:inline-block;
          border:1px solid #00B5AD;
          color:#00B5AD;
          padding:2.7px;
          border-radius:4px;
        }
        .left .ul li .img{
          width:24px;
          height:24px;
          border-radius:12px;
          vertical-align: center;
        }
        .left .ul li .weight.author{
          font-weight:bold;
          color:#4183C4;
        }
        .left .header{
          font-weight:bold;
          color:#333;
          line-height: 1.2857em;
        }
        .left .text{
          font-weight: 300 !important;
          letter-spacing: 1px !important;
          line-height: 1.8;
          font-size: 14px;    
        }
        .right{
          width:173px;
          height:120px;
          padding:14px;
        }
        .right .img{
          width:100%;
          height:100%;
        }
        .icon{
          vertical-align:text-bottom;
        }
      `}</style>
    </li>
  )
}
  export default BlogItem;
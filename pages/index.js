
import Layout from '../components/Layout'
import {Icon} from 'antd'
/*前端模拟数据*/
import list from '../components/static/blogsApi';
const BlogItem = ({item,index}) => (
  <li className="blog-item" key={index}>
    <div className="left">
      <div>{item.title}</div>
      <p>{item.description}</p>
      <ul className="ul horizontal">
        <li>{item.author}</li>
        <li><Icon type="calendar" className="icon"/> {item.date}</li>
        <li><Icon type="eye" className="icon"/> {item.watch}</li>
        <li>{item.type}</li>
      </ul>
    </div>
    <div className="right">
      <img src={item.img} className="img"/>
    </div>
    <style jsx>{`
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
      }
      .left .ul li{
        margin-right:12px;
      }
      .left .ul li:last-child{
        flex:1;
        text-align:right;
        margin-right:0;
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
const Index = (props) => (
  <Layout>
    <div className="container">
      <div className="main-wrap">
        <div className="blogs">
          <div className="top">
            <div className="left">博客</div>
            <div className="right">共 <span>{list.total}</span> 篇</div>
          </div>
          <ul className="ul vertical">
            {
              /*前端模拟数据,后端写好后应替换为props属性下的值*/
              list.lists.map((item, index) => {
                return (
                <BlogItem item={item} index={index}/>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="right-wrap">
        <ul className="ul type"></ul>
        <ul className="ul tag"></ul>
        <ul className="ul new"></ul>
      </div>
      
    </div>
    <style jsx>{`
      *{
        margin:0;
        padding:0;
      }
      .container{
        width:75%;
        margin:0 auto;
        padding:42px 0;
        display:flex;
      }
      .main-wrap,.right-wrap{
        padding:14px;
      }
      .main-wrap .blogs{
        border:1px solid silver;
        border-radius:4px;
      }
      .blogs .top{
        padding:14px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid silver;
      }
      .top .left{
        color: #00B5AD;
        font-size: 1.2em;
        font-weight: bold;
      }
      .top .right span{
        color:#F2711C;
        font-size: 1.7em;
        word-space:1em;
      }
      .blogs .ul{
        padding:14px;
      }
      .right-wrap ul{
        width:324px;
        height:640px;
        border:1px solid silver;
        border-radius:4px;
      }
      `}</style>
  </Layout>
);

//后端数据，暂时还没写好
// Index.getInitialProps = async function(){
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const show = await res.json();
//   console.log(show);
//   return {show};
// }
export default Index;
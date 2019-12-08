
import Layout from '../components/Layout'
/*前端模拟数据*/
import list from '../components/static/blogsApi';
import BlogItem from '../components/Bolgs/BlogItem';
import Section from '../components/Section/Section';
import Types from '../components/Section/types';
import Tags from '../components/Section/tags';
import Intro from '../components/Section/intro';
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
                <BlogItem item={item} key={index}/>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="right-wrap">
        <Section title="分类" icon="bulb" link="types">
          <Types></Types>
        </Section>
        <Section title="标签" icon="tags" link="tags">
          <Tags></Tags>
        </Section>
        <Section title="最新推荐" icon="book">
          <Intro></Intro>
        </Section>
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
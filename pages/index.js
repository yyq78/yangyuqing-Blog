//公用组件
import Layout from '../components/Layout'
import Panel from '../components/panel'
/*前端模拟数据*/
import list from '../components/static/blogsApi';
import BlogItem from '../components/Bolgs/BlogItem';
//侧边栏组件
import Section from '../components/Section/Section';
import Types from '../components/Section/types';
import Tags from '../components/Section/tags';
import Intro from '../components/Section/intro';

const Index = (props) => (
  <Layout>
    <div className="container">
      <div className="main-wrap">
        <Panel title="博客" subtitle={list.total}>
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
        </Panel>
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
      .ul{
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
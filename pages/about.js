import Layout from '../components/Layout';
import Panel from '../components/panel';
import Popver from '../components/popver';
export default function About() {
    return (
      <Layout>
        <div className="wrap">
          <div className="pic">
              123
          </div>
          <div className="section">
            <Panel title="关于我">
              <div className="list-item intro">
                本科就读于西南石油大学，修读物联网工程专业，机缘巧合与前端结下渊源，从此天真可爱的我，渐渐少了头发...
              </div>
              <div className="list-item hobby">
                  <div className="tags">
                    <Popver color="#F2711C" size="4px" radius="4px">旅游</Popver>
                  </div>
                  <div className="tags">
                    <Popver color="#F2711C" size="4px" radius="4px">学习</Popver>
                  </div>
                  <div className="tags">
                    <Popver color="#F2711C" size="4px" radius="4px">看剧</Popver>
                  </div>
              </div>
              <div className="list-item lang">
                  <div className="tags">
                    <Popver color="#00B5AD" size="4px" radius="4px">js</Popver>
                  </div>
                  <div className="tags">
                    <Popver color="#00B5AD" size="4px" radius="4px">vue</Popver>
                  </div>
                  <div className="tags">
                    <Popver color="#00B5AD" size="4px" radius="4px">react</Popver>
                  </div>
              </div>
              <div className="list-item contact">
                <span>github</span>
                <span>wechat</span>
                <span>email</span>
              </div>
            </Panel>
          </div>
        </div>
        <style jsx>{`
          @keyframes silde-in{
            0%{
              opacity:0;
              transform: translate3d(-100%, 0, 0);
            }
            100%{
              opacity:1;
              transformt:none;
            }
          }
          .wrap{
            width:80%;
            margin:0 auto;
            padding:24px;
            display:flow-root;
            animation-duration: 1s;
            animation-fill-mode: both;        
            animation:3s silde-in;
          }
          .pic{
            float:left;
            margin:14px;
            width:660px;
            height:520px;
            border: 1px solid #D4D4D5;
            border-radius:4px;
            box-shadow: 0 1px 2px 0 rgba(34,36,38,.35);
          }
          .section{
            float:right;
            width:300px;
            margin:14px;
            border-radius:4px;
          }
          .tags{
            margin:4px;
          }
          .list-item{
            display:flex;
            padding:12px;
            font-size:12px;
          }
          .intro{
            font-size:14px;
            color:rgba(0,0,0,.85);
          }
          .hobby .tags{
            color:#F2711C;
          }
          .lang .tags{
            color:#00B5AD
          }
          .list-item+.list-item{
            border-top:1px solid #D4D4D5;
          }
        `}</style>
      </Layout>
    );
  }
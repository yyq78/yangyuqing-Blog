import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Panel from '../../components/panel';
import Popver from '../../components/popver';
import Link from 'next/link';
import list from '../../components/static/tagsApi';
export default function Tags() {
    const router = useRouter();
    const id = router.query.id;
    return (
      <Layout>
        <div className="wrap">
          <Panel title="标签" subtitle="6">
            <div className="popverList">
              {list.map((item,index)=>{
                  return (
                  <Link href={`/tags/${item.id}`}>
                    <div className={`tag-item${item.id==id?" active":""}`} key={index}>
                      <Popver radius="4px" size="8px" color={`${item.id==id?"#00B5AD":"rgba(34,36,38,.15)"}`}>
                        <a className={`tag-name${item.id==id?" active":""}`}>{item.name}</a>
                        <span className="tag-count">{item.articleCount}</span>
                      </Popver>
                    </div>
                  </Link>
                  )
              })}
            </div>
          </Panel>
          <div className="section">
            <ul>
              {
               /*差后端数据 */
              }
            </ul>
          </div>
        </div>
        <style jsx>
          {`
          .wrap{
            width:65%;
            margin:0 auto;
            padding:42px 0;
          }
          .popverList{
            display:flex;
            flex-wrap:wrap;
            padding:14px;
          }
          .tag-item{
            display:flex;
            align-items:center;
            margin:4px;
            color: rgba(0,0,0,.6);
            font-size:14px;
            font-weight:bold;
            vertical-align: baseline;
            margin: 4px 9px;
          }
          .tag-item.active{
            color:#00B5AD;
            border-color:#00B5AD;
          }
          .tag-item:hover{
            color: #1e70bf;
            cursor:pointer;
          }
          .tag-name{
           margin-right:1em;
          }
          .section{
            border:1px solid #D4D4D5;
            border-top: 2px solid #00B5AD;
            margin-top: 1rem;
            border-radius: .28571429rem .28571429rem 0 0;
            height:200px;
          }
          `}
        </style>
      </Layout>
    );
}
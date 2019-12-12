import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Panel from '../../components/panel';
import Popver from '../../components/popver';
import Link from 'next/link';
import list from '../../components/static/typesApi';
export default function Types() {
    const router = useRouter();
    const id = router.query.id;
    return (
      <Layout>
        <div className="wrap">
          <Panel title="分类" subtitle="10">
            <div className="popverList">
              {list.map((item,index)=>{
                  return (
                  <Link href={`/types/${item.id}`}>
                    <div className={`tag-item${item.id==id?" active":""}`} key={index}>
                      <a className={`tag-name${item.id==id?" active":""}`}>{item.name}</a>
                      <Popver radius="0px 4px 4px 0" size="12px" color={`${item.id==id?"#00B5AD":"rgba(34,36,38,.15)"}`}>
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
            font-size:12px;
            font-weight:400;
          }
          .tag-item.active{
            color:#00B5AD;
          }
          .tag-name{
            border: 1px solid rgba(34,36,38,.15);
            border-radius:4px 0px 0px 4px;
            border-right:none;
            padding:11px 21px; 
          }
          .tag-name:hover{
            background: #FFF;
            color: rgba(0,0,0,.8)
            border: 1px solid rgba(34,36,38,.35);
            border-right:none;
            cursor:pointer;
          }
          .tag-name.active{
            color:#00B5AD;
            border-color:#00B5AD;
          }
          .tag-name.active:hover{
            color:#00B5AD;
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
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Panel from '../../components/panel';
import Popver from '../../components/popver';
import Link from 'next/link';
import list from '../../components/static/typesApi'
export default function Types() {
    const router = useRouter();
    const id = router.query.id;
    return (
      <Layout>
        <div className="wrap">
          <Panel title="分类" subtitle="60">
            <div className="popverList">
              {list.map((item)=>{
                  return (
                  <Popver>
                      <Link href={`/tags/${item.id}`}>
                          <div>
                              {item.name}
                              <span>{item.articleCount}</span>
                          </div>
                      </Link>
                  </Popver>
                  )
              })}
            </div>
          </Panel>
        </div>
        <style jsx>
          {`
          .wrap{
            width:65%;
            margin:0 auto;
            padding:42px 0;
            display:flex;
          }
          .popverList{
            display:flex;
            flex-wrap:wrap;
            padding:14px;
          }
          .popverList div{
              padding:5px 10px;
          }
          .popverList span{
              padding:8px;
          }
          `}
        </style>
      </Layout>
    );
}
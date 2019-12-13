import Layout from '../components/Layout';
import Panel from '../components/panel';
import archieves from '../components/static/archives';
import Popver from '../components/popver';
import Link from 'next/link';
export default function Archives() {
    return (
      <Layout>
        <div className="wrap">
          <Panel title="归档" subtitle="2">
          </Panel>
          <h3 className="header">2019</h3>
          <ul className="list">
            {
              archieves.map((item,index)=>{
                return (
                  <Link path={`p/${item.id}`}>
                    <li key={index}>
                      <div>♥ {item.title}</div>
                      <div className="right"><Popver color="#F2711C" size="2px" radius="4px">{item.flag}</Popver></div>
                    </li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
        <style jsx>
          {`
          .wrap{
            width:65%;
            margin:0 auto;
            padding:42px 0;
          }
          .header{
            font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
            text-align:center;
            line-height: 1.2857em;
            color: rgba(0,0,0,.85);
          }
          .list{
            width:100%;
            padding:0px !important;
            font-size:14px;
            color:rgba(0,0,0,.85);
            list-style-type:disc;
           
          }
          .list li{
            border:1px solid #d5d5d5;
            border-radius: 4px 4px 0px 0px;
            padding:13px 16px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            
          }
          .list li:hover{
            background: rgba(0,0,0,.03);
          }
          .list li .right{
            color:#F2711C;
            font-size:12px;
          }
          .list li+li{
            border-top:none;
            border-radius:0px;
          }
          .list li:last-child{
            border-radius:0px 0px 4px 4px!important;
            box-shadow: 0 1px 2px 0 rgba(34,36,38,.35);
          }
          
          `}
        </style>
      </Layout>
    );
  }
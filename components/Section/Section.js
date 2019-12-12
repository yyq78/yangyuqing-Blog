import {Icon} from 'antd';
import Link from 'next/link';
const Section = (props)=>(
    <div className="wrap">
        <div className="top">
            <div>
                <span className="align"><Icon type={props.icon} /></span>
                <span> {props.title}</span>
            </div>
            {props.link?(
                <div>
                <Link href={`/${props.link}`}>
                    <a className="link">more <span className="align"><Icon type="double-right" /></span></a>
                </Link>
            </div>
            ): null}
            
        </div>
        <style jsx>
            {`
                .wrap{
                    width:324px;
                    border:1px solid #D4D4D5;
                    box-shadow: none;
                    border-radius:4px;
                    font-size:14px;
                    margin-bottom:2rem;
                }
                .top{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding:14px;
                    color:rgba(0,0,0,0.65);
                    border-bottom:2px solid #00B5AD;
                }
                .top .align{
                    vertical-align:middle;
                    height:14px;
                    overflow:hidden;
                }
                .top a {
                    background: 0 0;
                    color: #4183C4;
                    text-decoration: none;
                }
            `}
        </style>
        {props.children}
    </div>
)
export default Section;
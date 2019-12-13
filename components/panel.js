const Panel = (props)=>{
    return (
        <div className="panel">
            <div className="panel-head">
                <div className="left">{props.title}</div>
                {props.subtitle?<div className="right">共 <span>{props.subtitle}</span> 篇</div>:null}
            </div>
            {props.children}
            <style jsx>
                {`
                .panel{
                    border:1px solid #D4D4D5;
                    box-shadow: 0 1px 2px 0 rgba(34,36,38,.35);
                    border-radius:4px;
                    width:100%;
                }
                .panel-head{
                    padding:14px;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    border-bottom:1px solid #D4D4D5;
                  }
                  .panel-head .left{
                    color: #00B5AD;
                    font-size: 1.2em;
                    font-weight: bold;
                  }
                  .panel-head .right span{
                    color:#F2711C;
                    font-size: 1.7em;
                    word-space:1em;
                  }`}
            </style>
        </div>
    )
}
export default Panel;
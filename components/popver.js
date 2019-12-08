const Popver = (props)=> (
    <div className="label">
        {props.children}
        <style jsx>
            {`
            .label{
                display:flex;
                justify-content:space-between;
                text-align:center;
                color: #00B5AD;
                border-color: #00B5AD;
                position:relative;
                border: 1px solid #00B5AD;
                border-radius:4px;
                margin:4px;
                font-size:12px;
                font-weight:bold;
            }
            .label:before{
                content:"";
                width:7px;
                height:7px;
                transform:rotate(-45deg);
                position:absolute;
                border-top: 1px solid #00B5AD;
                border-left: 1px solid #00B5AD;
                background-color:white;
                top:5.5px;
                left:-5px;
            }
            `}
        </style>
    </div>
)
export default Popver;

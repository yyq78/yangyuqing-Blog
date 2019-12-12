const Popver = (props)=> {
    const sizeNum = props.size.split("px")[0];
    const triangleLeft= Math.ceil(props.size.split("px")[0]/2)+1;
    return (
    <div className="label">
        {props.children}
        <style jsx>
            {`
            .label{
                display:flex;
                justify-content:space-between;
                align-items: center;
                text-align:center;
                padding:${props.size} ${sizeNum>8?props.size:`8px`};
                border-color: ${props.color};
                position:relative;
                border: 1px solid ${props.color};
                border-radius:${props.radius};
                font-weight:bold;
            }
            .label:before{
                content:"";
                width:${props.size};
                height:${props.size};
                transform:rotate(-45deg);
                position:absolute;
                border-top: 1px solid ${props.color};
                border-left: 1px solid ${props.color};
                background-color:white;
                top: 35%;
                left:-${triangleLeft}px;
            }
            `}
        </style>
    </div>
    );
}
export default Popver;

import Link from 'next/link';
import {Icon} from 'antd';

const SearchBar = ()=>{
    return (
    <div>
        <form name="search" action="/search" method="get">
            <div className="input">
                <input type="text" name="query" placeholder="Search...."/>
                <Link href="/search">
                    <i className="icon" onClick={()=>{document.forms['search'].submit()}}><Icon type="search" /></i>
                </Link>
            </div> 
        </form>
        
        <style jsx>{`
        .input{
            position:relative;
        }
        .input input{
            border-color:transparent;
            background-color: transparent!important;
            padding:0;
            margin:0;
            outline:none;
            color:white;
            border-radius:2px;
        }
        .input>i.icon{
            position:absolute;
            top:0;
            right:0
        }
        `}</style>
    </div>
    )
}
export default SearchBar;
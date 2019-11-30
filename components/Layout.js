import Link from 'next/link';
const Layout = (props)=>(
    <div>
        <div className="header">
            <h1 className="title">IT.Lab</h1>
            <ul className="links">
                <li>
                    <Link href="/">
                        <a>首页</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>关于</a>
                    </Link>
                </li>     
            </ul>
        </div>
        {props.children}
        <style jsx>{`
        h1,a {
            font-family: 'Arial';
        }

        ul {
            padding: 0;
            overflow:hidden;
        }

        li {
            float:left;
            list-style: none;
            margin: 0 5px;
        }

        a {
            text-decoration: none;
            color: blue;
        }

        a:hover {
            opacity: 0.6;
        }
    `}</style>
    </div>
    
)
export default Layout;


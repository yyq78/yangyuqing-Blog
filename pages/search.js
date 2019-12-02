import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
function Search() {
    return (
      <Layout>
        <p>search</p>
      </Layout>
    );
}
Search.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  };
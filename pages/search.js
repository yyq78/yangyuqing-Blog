import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
function Search(props) {
    return (
      <Layout>
        <h1>{props.show.name}</h1>
      </Layout>
    );
}
Search.getInitialProps = async function(context) {
  const { query } = context.query;
  console.log(query);
  // const res = await fetch(`https://api.tvmaze.com/shows/${query}`);
  // const show = await res.json();
  // console.log(`Fetched show: ${show.name}`);
  return {
    show:{
      name:`${query}`
    }
  }
  // return { show };
  };

export default Search;


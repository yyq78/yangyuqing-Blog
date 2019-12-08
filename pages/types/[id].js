import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
export default function Types() {
    const router = useRouter();
    return (
      <Layout>
        <p>分类</p>
        <p>{router.query.id}</p>
      </Layout>
    );
}
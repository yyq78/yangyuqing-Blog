import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
export default function Tags() {
    const router = useRouter();
    return (
      <Layout>
        <p>{router.query.id}</p>
      </Layout>
    );
}
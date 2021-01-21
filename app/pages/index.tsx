import { BlitzPage } from 'blitz';
import Layout from 'app/layouts/Layout';

const Home: BlitzPage = () => {
  return (
    <div className='text-9xl font-caveat text-white text-center mt-20'>
      Brian &amp; Karina
    </div>
  );
};

Home.getLayout = (page) => <Layout title='Brian &amp; Karina'>{page}</Layout>;

export default Home;

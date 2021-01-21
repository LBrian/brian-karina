import { BlitzPage } from 'blitz';
import Layout from 'app/layouts/Layout';

const Home: BlitzPage = () => {
  return (
    <div className='font-caveat text-center mt-20'>
      <div className='text-6xl md:text-9xl text-center'>Brian &amp; Karina</div>
      <div className='text-3xl md:text-5xl'>Coming soon...</div>
    </div>
  );
};

Home.getLayout = (page) => <Layout title='Brian &amp; Karina'>{page}</Layout>;

export default Home;

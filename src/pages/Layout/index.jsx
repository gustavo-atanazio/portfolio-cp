import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout() {
  return (
    <>
      <Header/>

      <main className='h-[70vh] md:content-center'>
        <Outlet/>
      </main>

      <Footer/>
    </>
  );
}

export default Layout;
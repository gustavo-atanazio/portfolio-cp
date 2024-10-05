import { Copyright, Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className='fixed bottom-0 w-full h-[7vh] bg-[#151826] flex items-center justify-between px-6'>
      <div className='flex gap-4 md:gap-8'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <Facebook/>
        </a>

        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <Instagram/>
        </a>
      </div>

      <div className='flex gap-4'>
        <Copyright/> 2024
      </div>
    </footer>
  );
}

export default Footer;
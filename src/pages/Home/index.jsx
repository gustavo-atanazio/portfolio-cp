import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

function Home() {
  return (
    <section className='h-full flex flex-col justify-center gap-6 md:gap-8 px-6'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-6 items-center'>
          <h1 className='text-4xl font-bold'>
            Olá, sou o Gustavo
          </h1>
          <h2 className='text-xl font-semibold'>
            Desenvolvedor Front-End
          </h2>
        </div>

        <p className='text-justify md:max-w-[50%] md:self-center'>
          Iniciei na programação em meados de 2022, quando tive o primeiro contato com o core do Front-End (HTML, CSS e JavaScript). De lá pra cá, o interesse e o conhecimento foram só aumentando, até o momento em que faço este projeto. Minha maior vontade atualmente é continuar aprendendo e masterizar os principais conceitos da web.
        </p>
      </div>

      <div className='flex gap-4 md:self-center'>
        <a href='https://github.com/gustavo-atanazio' target='_blank' rel='noreferrer'>
          <Github/>
        </a>

        <a href='https://br.linkedin.com/in/gustavo-atanazio' target='_blank' rel='noreferrer'>
          <Linkedin/>
        </a>
      </div>

      <Link
        to='/projetos'
        className='flex gap-2 self-center border rounded-lg p-3'
      >
        Ver projetos
        <ArrowRight/>
      </Link>
    </section>
  );
}

export default Home;
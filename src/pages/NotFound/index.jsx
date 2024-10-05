import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className='text-center px-6 h-full flex flex-col justify-center items-center gap-12'>
      <h1 className='text-4xl'>
        404
      </h1>

      <h2 className='text-xl'>
        Página não encontrada
      </h2>

      <button
        className='border p-2 rounded-lg w-1/2'
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </section>
  );
}

export default NotFound;
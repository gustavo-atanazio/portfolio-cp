import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log('Nome: ', name);
    console.log('Email: ', email);
    console.log('Mensagem: ', message);

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className='px-6'>
      <h2 className='text-2xl font-medium text-center mb-4'>
        Me mande um email
      </h2>

      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Nome</label>
          <input
            className='outline-0 p-2 text-[#151826] rounded-md'
            type='text'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            className='outline-0 p-2 text-[#151826] rounded-md'
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='message'>Mensagem</label>
          <textarea
            className='outline-0 p-2 text-[#151826] rounded-md'
            type='text'
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button
          className='border rounded-lg p-2 w-1/2 self-center mt-4'
          type='submit'
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
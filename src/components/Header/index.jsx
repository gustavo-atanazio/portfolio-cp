import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='h-24 md:h-32 w-full px-4 md:px-10 flex items-center justify-between'>
      <Link to='/'>
        <strong>Gustavo Atanazio</strong>
      </Link>

      <nav>
        <ul className='flex gap-6 md:gap-12'>
          <NavLink
            to='/projetos'
          >
            Projetos
          </NavLink>

          <NavLink
            to='/contato'
          >
            Contato
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
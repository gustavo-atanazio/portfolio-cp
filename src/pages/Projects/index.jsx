import { projects } from '@/content';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

function Projects() {
  return (
    <section className='h-full md:h-auto grid grid-cols-2 md:grid-cols-3 gap-2 px-6 md:px-24'>
      {projects.map(({ name, description, stack, sourceCode, livePreview }, index) => (
        <div
          className='flex flex-col justify-between md:gap-4 border rounded-lg p-2 md:p-4'
          key={index}
        >
          <h4>{name}</h4>
          <p className='text-sm'>
            {description}
          </p>

          <ul className='flex gap-2'>
            {stack.map((item, index) => (
              <li
                className='text-xs'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className='flex gap-2'>
            <a href={sourceCode} target='_blank' rel='noreferrer'>
              <Github/>
            </a>

            <a href={livePreview} target='_blank' rel='noreferrer'>
              <SquareArrowOutUpRight/>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
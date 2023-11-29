import React, { useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import Classroom from "@/types/ServerClassroom";
//import Contributors from "@/types/ServerContributors";
import Contributor from "@/types/ServerContributor";
import Author from '@/components/Author';
import Link from 'next/link'

const ClassroomBar: React.FC<Classroom> = ({id, title,
    description,
    imgUrl,
    date,
    authors
     }) => {
      const [id_prop, setId] = useState<number>(id);
    const [title_prop, setTitle] = useState<string>(title || 'has no title...');
    const [description_prop, setDescription] = useState<string>(description || 'has no description...');
    const [img_url_prop, setImg] = useState<string>(imgUrl|| 'https://avatars.githubusercontent.com/u/139821735?v=4');
    const [date_prop, setDate] = useState<string>(date || '');
    const [autor_prop, setAutor] = useState<Contributor[]>(authors || []);
    const dynamicBackgroundColor = getRandomColor();
   
    const componentClasses = classNames(      
        'shadow-lg',
        'sha',
        'text-white',
        'gap-2',
        'w-full',
        'h-[200px]',
        'rounded-xl',
        'px-5',
        'py-2',
        'flex',
        'h-full',
        'flex-col',
        'bg-opacity-50',
        'transition-transform', 
        'transform' ,
        'hover:scale-105',
        'hover:bg-opacity-90',
        dynamicBackgroundColor
      );
    
    return (

        <Link href={`/classroom/${title_prop}`} className={componentClasses} key={id_prop}>
          <header className='flex items-center gap-'>
            <h1 className='text-xl'> <b>{title_prop}</b></h1> 
          </header>
    
        <section className='w-full  flex-1 flex flex-col'>
          <div className='text-sm'>
            <p className='whitespace-nowrap w-full text-ellipsis overflow-hidden py-5'>{description_prop}</p>
          </div>
       
        </section>
      
        <footer className='w-full flex-1 flex text-sm items-center'>
        <div className='w-1/2 flex items-start relative h-[30px]'>
  {autor_prop.map((contributor, index) => (
    <Author
      key={contributor.id}
      id={contributor.id}
      avatar_url={contributor.avatar_url}
      login={contributor.login}
      className={index >= 1 ? 'ml-4' : ''}
    />
  ))}
        </div>

          <div className='w-1/2 flex items-center justify-end'>
            <p>{moment(date_prop).format('MM/DD/YYYY')}</p>
          </div>
        
        </footer>
      </Link>
      


    );
};

export default ClassroomBar;

const getRandomColor = () => {
    const colors = ['bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-indigo-600'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
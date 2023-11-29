'use client';
import HamburguerIcon from '@/components/HamburguerIcon';
import Navbtn from '@/components/Menu/Navbtn';
import MenuButton from '@/components/MenuButton';
import MenuIndicator from '@/components/MenuIndicator';
import Paragraph from '@/components/Paragraph';
import SideBar from '@/components/SideBar';

import TextContent from '@/components/TextContent';
import { appContext } from '@/context/AppContext';
import { useContext, useState } from 'react';

import { SiApachekafka } from "react-icons/si";

export default function Home() {

  return (
    <>
      <MenuButton/>
      <section className='w-full h-full'>
        <TextContent>
          <div className='mt-10 mb-8 text-zinc-200 text-2xl flex w-full gap-3 items-center justify-center'><h1 className='font-bold text-center'> Bem-Vindo ao evento sobre Apache Kafka </h1><SiApachekafka/></div>
          <Paragraph>
            O evento será dirigido por Pedro Pietro durante um evento na comunidade do Chorume no dia 21 de Novembro de 2023 no Discord. Para acompanhar e ter como
            referência futura, a equipe de moderadores e administradores do chorume estão disponibilizando esse material auxiliar. O material original pode ser encontrado clicando
            <a className='underline ml-1 text-yellow-500 cursor-pointer' href='https://data--flair-training.cdn.ampproject.org/c/s/data-flair.training/blogs/kafka-tutorials-home/' target='_blank'>aqui</a>.
          </Paragraph>
          <div className='mt-4'>
            <Paragraph>
              Todo o conteúdo é organizado no menu lateral e você pode acessá-los livremente. Contudo, caso você esteja entrando pela primeira vez ou esteja entrando enquanto o evento está acontecendo, recomendamos seguir
              a sequência de links ou acompanhar o Pedro. Por fim, sinta-se livre para seguir o fluxo que lhe bem caber e ajudar no seu momento de estudos.
            </Paragraph>
          </div>          
        </TextContent>
      </section>
    </>

  );
}

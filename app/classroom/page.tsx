'use client';
import ClassroomService from "@/services/ClassroomService";
import ClassroomBar from '@/components/ClassroomBar';
import ServerClassrooms from "@/types/ServerClassrooms";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "@/context/AppContext";

const classroomService = new ClassroomService();
export default function Classroom() {
  const [classrooms, setClassrooms] = useState<ServerClassrooms>({ classrooms: [] });
  const {toggleLoading} = useContext(appContext);
  useEffect(() => {
    const fetched = async () => {
      const classReponse = await classroomService.availableClassrooms();
      setClassrooms(classReponse);
    };
    toggleLoading(true);
    fetched()
    .then(() => {
      toggleLoading(false);
    })
  }, []);
  return (
    <div className='bg-slate-900 flex justify-center items-center px-2'>
      <div className='p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full sm:max-w-[1200px]'>
        {classrooms.classrooms.map((classroom) => (
          <ClassroomBar
            id={classroom.id}
            key={classroom.id}
            title={classroom.title}
            description={classroom.description}
            authors={classroom.authors}
            imgUrl={classroom.imgUrl}
            date={classroom.date}
            lessons={[]}
          />
        ))
        }
      </div>
    </div>
  );
}

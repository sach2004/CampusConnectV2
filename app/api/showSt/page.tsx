"use client";
import { NextAuthOptions } from 'next-auth';
import Sidebar from '@/components/Sidebar';
import GradientComp from '@/components/GradientComp';
import Head from '@/components/Head';
import Tables from '@/components/Tables';
import { useSession } from 'next-auth/react';
import ShowTable from '@/components/ShowstTable';

const ShowSt: React.FC = () => {
  const { data: session } = useSession(); 
  console.log(session);
  console.log(session?.user?.email);
  
  return (
    <div className='relative'>
      <div className='flex absolute top-0 left-[95px] bg-white border-b-2 h-20 w-[calc(100%-95px)] z-30'>
        <Head text="Students Applied" />
      </div>
      
      
      <div className='absolute w-[calc(100%-120px)] left-[115px] top-[100px] flex-1'>
        
        
        
        <div className='mt-8'> 
          <ShowTable />
        </div>
      </div>
      
      
      <div className='fixed top-0 left-0 h-screen w-[120px] z-20'>
      <Sidebar url1="/api/adminHome" url2="/api/adminWork" url3="/api/adminProjects" url4="/api/showSt"/>
      </div>
    </div>
  );
};

export default ShowSt;

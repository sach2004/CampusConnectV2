"use client";
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import GradientComp from '@/components/GradientComp';
import Head from '@/components/Head';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home: React.FC = () => {
  const { data: session } = useSession();
  const emailSession = session?.user?.email
  interface workItem {
    id: number;
    studentId : number
    internshipId : number
    student: {
      id: number;
      name: string;
      email: string;
      image: string;
    };
    internship: {
     id : number
     title : string
     description : string
     minSal : number
     maxSal : number
     alumniId : number
    };
  }

  interface ProjectItems {
    id: number;
    studentId : number
    projectId : number
    student: {
      id: number;
      name: string;
      email: string;
      image: string;
    };
    project: {
     id : number
     title : string
     description : string
     alumniId : number
    };
  }

  const [proj, setProj] = useState<ProjectItems[]>([]);
  const [Internship, setInternship] = useState<workItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projData = await axios.get("/api/auth/stappliedP");
        const workData = await axios.get("/api/auth/stappliedI");
        setProj(projData.data);
        console.log(projData.data)
        setInternship(workData.data);
      } catch (error) {
        console.log("couldn't get the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='relative h-screen overflow-x-hidden'>
      <div className='flex absolute top-0 left-[95px] bg-white border-b-2 h-20 w-[calc(100%-90px)] z-30'>
        <Head text="Home" />
      </div>
      <div className='absolute w-[calc(100%-85px)] left-[80px] top-[100px] flex-1'>
        <GradientComp session={session} />
      </div>
      <div className='fixed top-0 left-0 h-screen w-[120px] z-20'>
        <Sidebar url1="/api/home" url2="/api/work" url3="/api/project" url4='/api/project' />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className='absolute top-[370px] left-[calc(130px+5px)] w-[calc(100%-165px)] pb-5'>
          <h1 className='text-2xl font-medium'>Current job applications</h1>
          <h4 className='mt-2 mb-4 text-sm text-[#7F8496]'>Here are the jobs you’ve applied to</h4>

          {Internship.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-lg text-gray-500">No jobs applied to</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-6">
              {Internship.map((workItem, index) => {
               let isApplied = false
               if( emailSession === workItem.student.email){
                isApplied = true
               }
                return isApplied ? (
                  <div key={index} className="flex-shrink-0 w-[calc(50%-1.5rem)]">
  <Card className="w-full h-full flex flex-col">
    {/* <div className="flex items-center mt-5 ml-8">
      <div className="rounded-full h-6 w-6 bg-black"></div>
      <div className="text-sm ml-2">{workItem.alumni.name}</div>
    </div> */}
    <CardHeader>
      <CardTitle>{workItem.internship.title}</CardTitle>
      <br />
      <CardDescription className="overflow-hidden whitespace-normal min-h-20">
        {workItem.internship.description}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-[#BBF0BB] bg-[#E9FBE9] text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          id="wallet"
          className="h-6 w-6 text-gray-500"
        >
          <path
            fill="#5CBE43"
            d="M16 6H3.5v-.5l11-.88v.88H16V4c0-1.1-.891-1.872-1.979-1.717L3.98 3.717C2.891 3.873 2 4.9 2 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z"
          />
        </svg>{" "}
        ₹{workItem.internship.minSal} - ₹{workItem.internship.maxSal}/year
      </div>
      <br />
    </CardContent>
    
    <div className="flex justify-center items-start mb-5">
      <hr className="w-3/4 border-t border-gray-300" />
    </div>
    <CardFooter className="mt-auto flex justify-center items-center">
      <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-[#BBF0BB] bg-[#E9FBE9] text-gray-800">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          className="shrink-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
        APPLIED
      </div>
    </CardFooter>
  </Card>
</div>

                ) : null;
              })}
            </div>
          )}

          <div className="mt-10 flex justify-center items-start mb-5">
            <hr className="w-[calc(100%-45px)] border-t border-gray-300" />
          </div>

          <div className='mt-8 left-[calc(130px+25px)]'>
            <h1 className='text-2xl font-medium'>Current projects applications</h1>
            <h4 className='mt-2 mb-4 text-sm text-[#7F8496]'>Here are the projects you’ve applied to</h4>

            {proj.length === 0 ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-lg text-gray-500">No projects applied to</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-6">
                {proj.map((projectItem, index) => {
                  let isApplied = false

                  if(emailSession === projectItem.student.email ){
                    isApplied = true
                  }

                  return isApplied ? (
                    <div key={index} className="flex-shrink-0 w-[calc(50%-1.5rem)]">
                      <Card className="w-full h-full">
                        {/* <div className="flex items-center mt-5 ml-8">
                          <div className="rounded-full h-6 w-6 bg-black"></div>
                          <div className="text-sm ml-2">{projectItem..name}</div>
                        </div> */}
                        <CardHeader>
                          <CardTitle>{projectItem.project.title}</CardTitle>
                          <br />
                          <CardDescription className="overflow-hidden whitespace-normal max-h-20">
                            {projectItem.project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          
                          <br />
                        </CardContent>
                        <div className="flex justify-center items-start mb-5">
                          <hr className="w-3/4 border-t border-gray-300" />
                        </div>
                        <CardFooter className="flex justify-center items-center">
                          <div className="cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-2xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 truncate border border-[#BBF0BB] bg-[#E9FBE9] text-gray-800">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                            </svg>
                            APPLIED
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

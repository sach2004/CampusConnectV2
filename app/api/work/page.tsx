"use client"
import Sidebar from "@/components/Sidebar";
import Head from "@/components/Head";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface workItem {
  id: number;
  title: string;
  description: string;
  minSal: number;
  maxSal: number;
  alumni: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
  appliedInternships: {
    studentId: number;
    internshipId: number;
  }[];
}

const Work: React.FC = () => {
  const { data: session } = useSession();
  const [work, setWork] = useState<workItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

 
  const handleApply = async (alumnId: number, workId: number) => {
    try {
      const response = await axios.post("/api/auth/applyWork", {
        alumniId: alumnId,
        workId: workId,
        sessionEmail: session?.user?.email,
      });
      console.log("response Posted to the backend", response);
    } catch (error) {
      console.log("error posting into the backend ", error);
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/stWorkRoute");
        setWork(response.data);
      } catch (error) {
        console.error("error fetching the data", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  return (
    <div className='relative h-screen overflow-x-hidden'>
      <div className='flex absolute top-0 left-[95px] bg-white border-b-2 h-20 w-[calc(100%-90px)] z-30'>
        <Head text="Work" />
      </div>
      
      <div className='fixed top-0 left-0 h-screen w-[120px] z-20'>
      <Sidebar url1="/api/home" url2="/api/work" url3="/api/project" url4='/api/project' />
      </div>

      <div className="absolute top-[120px] left-[calc(120px+2px)] w-[calc(100%-136px)] px-4 z-10">
        <h2 className="text-md font-semibold mb-4">Explore gigs</h2>
        <div className="mb-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-[calc(100%-25px)] h-12 pl-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5169F6]"
            />
            <svg
              className="absolute right-9 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M18.36 10.36A7.5 7.5 0 1 1 10.36 18.36A7.5 7.5 0 0 1 18.36 10.36z"
              />
            </svg>
          </div>
        </div>

        {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="spinner"></div>
        </div>
      ) : work.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-semibold">No jobs posted</p>
        </div>
      ) : (
          <div className="flex flex-wrap gap-6">
            {work.map((workItem, index) => {
              const isApplied = workItem.appliedInternships.some(
                (project) => project.internshipId === workItem.id
              );

              return !isApplied ? (
                <div key={index} className="flex-shrink-0 w-[calc(50%-1.5rem)]">
  <Card className="w-full h-full flex flex-col justify-between"> 
    <div>
      <div className="flex items-center mt-5 ml-8">
        <div className="rounded-full h-6 w-6 bg-black"></div>
        <div className="text-sm ml-2">{workItem.alumni.name}</div>
      </div>
      <CardHeader>
        <CardTitle>{workItem.title}</CardTitle>
        <br />
        <CardDescription className="overflow-hidden whitespace-normal min-h-20">
          {workItem.description}
        </CardDescription>
      </CardHeader>
    </div>
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
        ₹{workItem.minSal} - ₹{workItem.maxSal}/year
      </div>
    </CardContent>
    <div className="flex justify-center items-start mb-5">
      <hr className="w-3/4 border-t border-gray-300" />
    </div>
    <CardFooter className="flex justify-center items-center">
      <button
        onClick={() => handleApply(workItem.alumni.id, workItem.id)}
        className="bg-[#5169F6] px-5 py-2 rounded-lg text-white"
      >
        Apply
      </button>
    </CardFooter>
  </Card>
</div>

              ) : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;

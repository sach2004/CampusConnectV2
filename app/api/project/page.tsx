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

const Project: React.FC = () => {
  const { data: session } = useSession();
  const id = session?.user.id
  interface ProjectItems {
    id: number;
    title: string;
    description: string;
    technologies?: string;
    alumni: {
      id: number;
      name: string;
      email: string;
      image: string;
    };
    appliedProjects: {
      projectId: number;
      studentId: number;
    }[];
  }

  const [proj, setProj] = useState<ProjectItems[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const handleAppply = (alumniId: number, projId: number) => {
    try {
      const response = axios.post("/api/auth/applyProject", {
        alumniId: alumniId,
        projId: projId,
        sessionEmail: session?.user?.email,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/auth/stProjectRoute");
        setProj(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className="flex absolute top-0 left-[95px] bg-white border-b-2 h-20 w-[calc(100%-90px)] z-30">
        <Head text="Project" />
      </div>

      <div className="fixed top-0 left-0 h-screen w-[120px] z-20">
        <Sidebar url1="/api/home" url2="/api/work" url3="/api/project" url4="/api/project" />
      </div>

      <div className="absolute top-[120px] left-[calc(120px+2px)] w-[calc(100%-136px)] px-4 z-10">
        <h2 className="text-md font-semibold mb-4">Explore Projects</h2>
        <div className="mb-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full h-12 pl-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5169F6]"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-500"
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
        ) : (
          <div className="flex flex-wrap gap-6">
            {proj.map((item, index) => {
              const isApplied = item.appliedProjects.some(
                (project) => project.studentId === Number(id)
              );

              return !isApplied ? (
                <div key={index} className="flex-shrink-0 w-[calc(33.333%-1.5rem)]">
                  <Card className="w-full h-full flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="text-center">{item.title}</CardTitle>
                      <br />
                      <CardDescription className="text-center">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow"></CardContent>
                    <div className="flex justify-center items-start mb-5">
                      <hr className="w-3/4 border-t border-gray-300" />
                    </div>
                    <CardFooter className="flex justify-center items-center">
                      <button
                        onClick={() => handleAppply(item.alumni.id, item.id)}
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

export default Project;

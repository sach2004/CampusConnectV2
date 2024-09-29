import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";


interface InternApply {
  id: number;
  studentId: number;
  internshipId: number;
  appliedAt: string;
  student: {
    id: number;
    email: string;
    name: string;
    image: string | null;
    role: "STUDENT";
    createdAt: string;
    updatedAt: string;
  };
  internship: {
    id: number;
    title: string;
    description: string;
    minSal: number;
    maxSal: number;
    alumniId: number;
  };
}

interface ProjectApply {
  id: number;
  studentId: number;
  projectId: number;
  appliedAt: string;
  student: {
    id: number;
    email: string;
    name: string;
    image: string | null;
    role: "STUDENT";
    createdAt: string;
    updatedAt: string;
  };
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string | null;
    alumniId: number;
  };
}

interface AlumniData {
  id: number;
  email: string;
  name: string;
  image: string | null;
  role: "ALUMNI";
  createdAt: string;
  updatedAt: string;
  internships: {
    id: number;
    title: string;
    description: string;
    minSal: number;
    maxSal: number;
    alumniId: number;
  }[];
  projects: {
    id: number;
    title: string;
    description: string;
    technologies: string | null;
    alumniId: number;
  }[];
}


const ShowTable: React.FC = () => {
  const { data: session } = useSession();
  const sessionEmail = session?.user?.email;
  const [internApplies, setInternApplies] = useState<InternApply[]>([]);
  const [projectApplies, setProjectApplies] = useState<ProjectApply[]>([]);
  const [alumniData, setAlumniData] = useState<AlumniData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [responseAlumni, responseIntern, responseProj] = await Promise.all([
          axios.get<AlumniData[]>("http://localhost:3000/api/auth/getInternship"),
          axios.get<InternApply[]>("http://localhost:3000/api/auth/callallI"),
          axios.get<ProjectApply[]>("http://localhost:3000/api/auth/callallP"),
        ]);

        
        const alumni = responseAlumni.data.find(alumnus => alumnus.email === sessionEmail);
        setAlumniData(alumni || null);
        
        setInternApplies(responseIntern.data);
        setProjectApplies(responseProj.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sessionEmail]);

  const getAppliedInternships = () => {
    if (!alumniData) return [];
    const internshipIds = new Set(alumniData.internships.map(intern => intern.id));
    return internApplies
      .filter((apply) => internshipIds.has(apply.internshipId))
      .map((apply) => ({
        id: apply.id,
        name: apply.student.name,
        email: apply.student.email,
        workTitle: apply.internship.title,
      }));
  };

  const getAppliedProjects = () => {
    if (!alumniData) return [];
    const projectIds = new Set(alumniData.projects.map(project => project.id));
    return projectApplies
      .filter((apply) => projectIds.has(apply.projectId))
      .map((apply) => ({
        id: apply.id,
        name: apply.student.name,
        email: apply.student.email,
        workTitle: apply.project.title,
      }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div style={loaderStyle}></div>
      </div>
    );
  }

  const internships = getAppliedInternships();
  const projects = getAppliedProjects();

  return (
    <div>
      <div className="font-semibold mb-4">
        <h3 className="mb-5">Applied Students for Internships</h3>
        {internships.length > 0 ? (
          <Table isStriped aria-label="Internships Table" className="w-full">
            <TableHeader>
              <TableColumn className="text-center">S.No</TableColumn>
              <TableColumn className="text-center">Name</TableColumn>
              <TableColumn className="text-center">Email</TableColumn>
              <TableColumn className="text-center">Title</TableColumn>
            </TableHeader>
            <TableBody>
              {internships.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-center">{item.name}</TableCell>
                  <TableCell className="text-center">{item.email}</TableCell>
                  <TableCell className="text-center">{item.workTitle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table isStriped aria-label="Projects Table" className="w-full">
            <TableHeader>
              <TableColumn className="text-center">S.No</TableColumn>
              <TableColumn className="text-center">Name</TableColumn>
              <TableColumn className="text-center">Email</TableColumn>
              <TableColumn className="text-center">Title</TableColumn>
            </TableHeader>
            <TableBody>
              
                <TableRow>
                  <TableCell className="text-center">No Data to display </TableCell>
                  <TableCell className="text-center">No Data to display</TableCell>
                  <TableCell className="text-center">No Data to display</TableCell>
                  <TableCell className="text-center">No Data to display</TableCell>
                </TableRow>
             
            </TableBody>
          </Table>
        )}
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-4">Applied Students for Projects</h3>
        {projects.length > 0 ? (
          <Table isStriped aria-label="Projects Table" className="w-full">
            <TableHeader>
              <TableColumn className="text-center">S.No</TableColumn>
              <TableColumn className="text-center">Name</TableColumn>
              <TableColumn className="text-center">Email</TableColumn>
              <TableColumn className="text-center">Title</TableColumn>
            </TableHeader>
            <TableBody>
              {projects.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-center">{item.name}</TableCell>
                  <TableCell className="text-center">{item.email}</TableCell>
                  <TableCell className="text-center">{item.workTitle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
            <Table isStriped aria-label="Projects Table" className="w-full">
            <TableHeader>
              <TableColumn className="text-center">S.No</TableColumn>
              <TableColumn className="text-center">Name</TableColumn>
              <TableColumn className="text-center">Email</TableColumn>
              <TableColumn className="text-center">Title</TableColumn>
            </TableHeader>
            <TableBody>
              
                <TableRow>
                  <TableCell className="text-center">No Data to display </TableCell>
                  <TableCell className="text-center">No Data to display</TableCell>
                  <TableCell className="text-center">No Data to display</TableCell>
                  <TableCell className="text-center">No Data to display</TableCell>
                </TableRow>
             
            </TableBody>
          </Table>
          
        )}
      </div>
    </div>
  );
};


const loaderStyle: React.CSSProperties = {
  border: '8px solid #f3f3f3', 
  borderTop: '8px solid #3498db', 
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 1s linear infinite',
};

export default ShowTable;

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import axios from "axios";
import { useSession } from "next-auth/react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const loaderStyle: React.CSSProperties = {
  border: '8px solid #f3f3f3', 
  borderTop: '8px solid #3498db', 
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 1s linear infinite',
};

interface Data {
  id: number;
  email: string;
  name: string;
  image: string;
  internships: {
    id: number;
    title: string;
    alumniId: number;
  }[];
  projects: {
    id: number;
    title: string;
    alumniId: number;
  }[];
}

export default function Tables() {
  const { data: session } = useSession();
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/getInternship");
        const filteredData = response.data.filter((item: Data) => item.email === session?.user?.email);
        setData(filteredData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  const handleDelete = (id: number) => {
    console.log(`Delete item with id: ${id}`);
  };

  const renderInternships = (internships: { id: number; title: string; alumniId: number; }[]) => (
    <Table isStriped aria-label="Internships table">
      <TableHeader columns={[{ name: "Title", uid: "title" }, { name: "Actions", uid: "actions" }]}>
        {(column) => (
          <TableColumn
            key={column.uid}
            className={`text-left ${column.uid === 'actions' ? 'w-24' : 'flex-1'}`}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {internships.map((internship) => (
          <TableRow key={internship.id}>
            <TableCell className="text-left">{internship.title}</TableCell>
            <TableCell className="text-center">
              <Tooltip color="danger" content="Delete">
                <span
                  className="text-lg text-danger text-center cursor-pointer"
                  onClick={() => handleDelete(internship.id)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderProjects = (projects: { id: number; title: string; alumniId: number; }[]) => (
    <Table isStriped aria-label="Projects table">
      <TableHeader columns={[{ name: "Title", uid: "title" }, { name: "Actions", uid: "actions" }]}>
        {(column) => (
          <TableColumn
            key={column.uid}
            className={`text-left ${column.uid === 'actions' ? 'w-24' : 'flex-1'}`}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="text-left">{project.title}</TableCell>
            <TableCell className="text-left">
              <Tooltip color="danger" content="Delete" className="text-center">
                <span
                  className="text-lg text-danger cursor-pointer"
                  onClick={() => handleDelete(project.id)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div style={loaderStyle}></div>
        </div>
      ) : (
        data.map((user) => (
          <div key={user.id} className="mb-8">
            <div className="font-semibold mb-4">
              <h3 className="mb-5">Posted Internships</h3>
              {renderInternships(user.internships)}
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-5">Posted Projects</h3>
              {renderProjects(user.projects)}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

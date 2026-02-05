import React from "react";
import { useQuery } from "@tanstack/react-query";
import AllClientsTable from "./Table/AllClientsTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllClients = () => {
  //const axios = useAxios();
  const axiosSecure = useAxiosSecure();

  const { data: clients = [], isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    }
  });

  if (isLoading) return <p className="text-center">Loading clients...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>

      <AllClientsTable clients={clients} />
    </div>
  );
};

export default AllClients;

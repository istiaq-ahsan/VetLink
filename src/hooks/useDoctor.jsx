import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDoctor = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isDoctor, isLoading: isDoctorLoading } = useQuery({
    queryKey: [user?.email, "isDoctor"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-doctor/${user.email}`);
      return res.data?.doctor; // assuming API returns { doctor: true/false }
    },
  });

  return [isDoctor, isDoctorLoading];
};

export default useDoctor;
import { useEffect, useState } from "react";
import { AdminDashboard } from "../components/Admin/AdminDashBoard";
import { useAuth } from "../hooks/Auth";
import axios from "axios";

export function AdminSettingsPage() {
  const [userRole, setUserRole] = useState<string>("user");
  const { authUser } = useAuth();
  const userId = authUser?.id;
  console.log(authUser);
  useEffect(() => {
    async function fetchUserRole() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/viewoneuser/${userId}`,
        );
        console.log(response.data.data.role);
        const role = response.data.data.role;
        setUserRole(role);
      } catch (error) {}
    }
    fetchUserRole();
  }, []);
  console.log(authUser);
  return <div>{userRole == "user" ? "" : <AdminDashboard />}</div>;
}

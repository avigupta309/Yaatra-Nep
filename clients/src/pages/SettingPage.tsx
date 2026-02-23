import { AdminDashboard } from "../components/Admin/AdminDashBoard";
import { useAuth } from "../hooks/Auth";

export function AdminSettingsPage() {
  const { authUser } = useAuth();
  return <div>{authUser?.role == "user" ? "" : <AdminDashboard />}</div>;
}

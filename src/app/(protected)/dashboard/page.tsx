import { currentUser } from "@/lib/auth";

const Dashboard = async () => {
  const user = await currentUser();

  if (!(user?.role === "ADMIN")) {
    return (
      <div>
        <span>Access not allowed !!</span>
      </div>
    );
  }
  return (
    <div>
      Hello Dashboard
      <span></span>
    </div>
  );
};

export default Dashboard;

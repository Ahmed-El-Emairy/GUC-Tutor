import { ActionButton } from "@/components/auth/action-buuton";
import { currentUser } from "@/lib/auth";

const Home = async () => {
  const user = await currentUser();
  return (
    <main className="flex flex-col justify-center items-center py-6">
      <h1 className="text-5xl text-slate-200 text-center">
        Hello {user ? user.name : "GUCian"} 👋
      </h1>
      <p className="py-8 px-8 text-lg text-center text-slate-50">
        GUC Tutor is tailor made for you, first year students, to make the start
        of your journey of becoming an Engineer as smooth as possible.
      </p>
      <ActionButton
        variant={"action"}
        text="Let's get started !"
        url="/material"
      />
    </main>
  );
};

export default Home;

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center py-6">
      <h1 className="text-5xl text-slate-200">Hello GUCian 👋</h1>
      <p className="py-8 px-8 text-lg text-center text-slate-50">
        GUC Tutor is tailor made for you, first year students, to make the start
        of your journey of becoming an Engineer as smooth as possible.
      </p>
      <Button variant="action" className="cursor-pointer">
        Let Get Started
      </Button>
    </main>
  );
};

export default Home;

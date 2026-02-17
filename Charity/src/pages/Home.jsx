import Graph from "../component/Home/Graph";
import Support from "../component/Home/Support";
import About from "../component/Home/About";
import Team from "../component/Home/Team";
import Kamal from "../component/Home/Kamal";
import Donate from "../component/Home/Donate";

const Home = () => {
  return (
    <div className="bg-[#F8F4EB]">
      <Graph />
      <Support />
      <About />
      <Team />
      <Kamal />
      <Donate />
    </div>
  );
};
export default Home;

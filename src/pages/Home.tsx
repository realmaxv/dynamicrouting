import CarCard from "../components/CarCard";
import data from "../data/data.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">SuperCarlist</h1>

      <div className=" grid ">
        {data.map((item) => (
          <CarCard key={item.id} carName={item.carModel} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router";

type CarCardProps = {
  carName: string;
  id: number;
};

const CarCard = ({ carName, id }: CarCardProps) => {
  return (
    <div className=" p-1 flex flex-col items-center gap-6 outline">
      <h2 className="text-2xl font-bold"> {carName}</h2>
      <Link className="text-amber-600" to={"/cars/" + id}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;

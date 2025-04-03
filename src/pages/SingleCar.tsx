import { useParams } from "react-router";
import data from "../data/data.json";

const SingleCar = () => {
  const param = useParams();
  console.log(param.id);

  return (
    <div className=" p-8 border flex flex-col items-center justify-center gap-6">
      <h2>{data[Number(param.id)].CarMake}</h2>
      <p>{data[Number(param.id)].CarYear}</p>
    </div>
  );
};

export default SingleCar;

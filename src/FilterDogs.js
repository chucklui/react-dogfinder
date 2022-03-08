import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

function FilterDogs({ dogs }) {
  const params = useParams();
  const dogName = params.name;
  const dog = dogs.find(d => d.name === dogName);

  return (
    <div className="FilterDogs">
      <DogDetails dog={dog} />
    </div>
  )
}
export default FilterDogs;


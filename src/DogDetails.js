import { Redirect } from "react-router-dom";

/**
 * Display details of a dog
 *
 * Props: List of dog data as array of objects
 *
 * State: None
 *
 * App -> DogDetails
 */
function DogDetails({ dog }) {

  // const params = useParams();
  // const dogName = params.name;

  // const dogInfo = dogs.find(function (d) {
  //   return d.name === dogName;
  // });
  if (!dog) return <Redirect to="/dogs" />

  return (
    <div className="DogDetails">
      <h1 className="DogDetails-name">{dog.name}</h1>
      <img
        className="DogDetails-img"
        src={`/${dog.src}.jpg`}
        alt="dog pic"
      ></img>
      <p className="DogDetails-age">{dog.age}</p>
      {dog.facts.map((f, i) => {
        return <p key={i} className="DogDetails-fact">{f}</p>;
      })}
    </div>
  );
}
export default DogDetails;

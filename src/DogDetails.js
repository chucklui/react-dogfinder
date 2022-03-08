import { useParams, Redirect } from "react-router-dom";

/**
 * Display details of a dog
 *
 * Props: List of dog data as array of objects
 *
 * State: None
 *
 * App -> DogDetails
 */
function DogDetails({ dogs }) {

  const params = useParams();
  const dogName = params.name;

  const dogInfo = dogs.find(function (d) {
    return d.name === dogName;
  });
  if (!dogInfo) return <Redirect to="/dogs" />

  return (
    <div className="DogDetails">
      <h1 className="DogDetails-name">{dogInfo.name}</h1>
      <img
        className="DogDetails-img"
        src={`/${dogInfo.src}.jpg`}
        alt="dog pic"
      ></img>
      <p className="DogDetails-age">{dogInfo.age}</p>
      {dogInfo.facts.map((f, i) => {
        return <p key={i} className="DogDetails-fact">{f}</p>;
      })}
    </div>
  );
}
export default DogDetails;

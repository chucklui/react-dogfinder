import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const params = useParams(); 
  const dogName = params.name;

  const dogInfo = dogs.filter(d => {
    return d.name === dogName;
  })

  return(
    <div className="DogDetails">
      <h1 className="DogDetails-name">{dogInfo[0].name}</h1>
      <img className="DogDetails-img" src={`./public/${dogInfo[0].src}.jpg`} alt='dog pic'></img>
      <p className="DogDetails-age">{dogInfo[0].age}</p>
      {dogInfo[0].facts.map(f => {
        return <p className="DogDetails-fact">{f}</p>
      })}
    </div>
  )
}
export default DogDetails;

import { useParams } from "react-router-dom";
// import whiskey from '/public/whiskey.jpg' 
// import duke from '/public/duke.jpg' 
// import perry from '/public/perry.jpg' 

function DogDetails({ dogs }) {
  const params = useParams(); 
  const dogName = params.name;
  let dogInfo;
  if(dogs.length > 0){
    dogInfo = dogs.filter(d => {
        return d.name === dogName;
      });
  }
  
  
  console.log("dogInfo in dogdetails", dogs);

  return(
    <div className="DogDetails">

    
      <h1 className="DogDetails-name">{dogInfo[0].name}</h1>
      <img className="DogDetails-img" src={`/${dogInfo[0].src}.jpg`} alt='dog pic'></img>
      <p className="DogDetails-age">{dogInfo[0].age}</p>
      {dogInfo[0].facts.map(f => {
        return <p className="DogDetails-fact">{f}</p>
      })}
    </div>
  )
}
export default DogDetails;

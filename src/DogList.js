/**DogList displays all dog info for all dogs
 *
 * Props: list of dog data as array of objects
 *
 * State: None
 *
 * App-> DogList
 *
 */
function DogList({ dogs }) {
  return (
    <div className="DogList">
      {dogs.map((d, i) => {
        return (
          <div key={i} className="DogList-info">
            <h1 className="DogList-name">{d.name}</h1>
            <img
              className="DogList-img"
              src={`/${d.src}.jpg`}
              alt="dog pic"
            ></img>
            <p className="DogList-age">{d.age}</p>
            {d.facts.map((f) => {
              return <p className="DogList-fact">{f}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DogList;

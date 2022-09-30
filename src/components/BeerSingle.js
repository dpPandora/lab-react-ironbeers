import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerSingle() {
  const { beerId } = useParams();
  
  const [beerData, updateBeerData] = useState(undefined);
  
  useEffect(() => {
    console.log('beerId',beerId);

    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        updateBeerData(data);
      })
      .catch(err => console.log('error at useEffect in beer single', err));
  }, [beerId]);

  return (
    <div className="beerSingle basic">
      {beerData ? (
        <div>
          <img src={beerData.image_url} alt="beer" height={256} />
          <h1>name: {beerData.name}</h1>
          <h2>tagline: {beerData.tagline}</h2>
          <p>description: {beerData.description}</p>
          <h4>first brewed: {beerData.first_brewed}</h4>
          <h4>attenuation level: {beerData.attenuation_level}</h4>
          <h4>contributed by: {beerData.contributed_by}</h4>
        </div>
      ) : (
        <div>
          <p>loading... if this is taking a while something might be broken</p>
        </div>
      )}
    </div>
  )
}

export default BeerSingle;
import { useState, useEffect } from "react";

function BeerRandom() {
  const [beerData, updateBeerData] = useState({});
  
  useEffect(() => {

    fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        updateBeerData(data);
      })
      .catch(err => console.log('error at useEffect in beer random', err));
  }, []);

  return (
    <div className="beerRandom basic">
      <img src={beerData.image_url} alt="beer" height={256} />
      <h1>name: {beerData.name}</h1>
      <h2>tagline: {beerData.tagline}</h2>
      <p>description: {beerData.description}</p>
      <h4>first brewed: {beerData.first_brewed}</h4>
      <h4>attenuation level: {beerData.attenuation_level}</h4>
      <h4>contributed by: {beerData.contributed_by}</h4>
    </div>
  )
}

export default BeerRandom;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BeerList() {
  const [listOfBeers, updateList] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(beerData => {
        console.log(beerData);
        updateList(beerData);
      })
      .catch(err => console.log('error at useEffect in beer list', err));
  }, [])

  return (
    <div className="beerList basic">
      {listOfBeers.map(beer => {
        return (
          <div className="beerDataCard" key={beer._id}>
            <Link to={`/beer/${beer._id}`} >
              <img src={beer.image_url} alt="beer" height={256}/>
              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p><b>Contributed by:</b> {beer.contributed_by}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BeerList;
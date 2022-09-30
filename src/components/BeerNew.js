import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BeerNew() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [desc, setDesc] = useState('');
  const [brewDate, setBrewDate] = useState('');
  const [brewTips, setBrewTips] = useState('');
  const [attLvl, setAttLvl] = useState('');
  const [contribBy, setContribBy] = useState('');

  const submit = (e) => {
    e.preventDefault();

    const bodyObj = {
      name: name,
      tagline: tagline,
      description: desc,
      first_brewed: brewDate,
      brewers_tips: brewTips,
      attenuation_level: Number(attLvl),
      contributed_by: contribBy
    }

    console.log(bodyObj);

    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    })
      .then(res => {
        console.log(res);
        navigate('/beer-list')
      })
      .catch(err => console.log('error at fetch in beer new', err));
  }

  return (
    <div className="beerNew basic">
      <form onSubmit={submit}>
        <div>
          <label>name</label>
          <br/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>

        <div>
          <label>tagline</label>
          <br/>
          <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} required/>
        </div>

        <div>
          <label>description</label>
          <br/>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} required/>
        </div>

        <div>
          <label>firsted brewed</label>
          <br/>
          <input type="text" value={brewDate} onChange={(e) => setBrewDate(e.target.value)} required/>
        </div>

        <div>
          <label>brewing tips</label>
          <br/>
          <input type="text" value={brewTips} onChange={(e) => setBrewTips(e.target.value)} required/>
        </div>

        <div>
          <label>attenuation level</label>
          <br/>
          <input type="text" value={attLvl} onChange={(e) => setAttLvl(e.target.value)} required/>
        </div>

        <div>
          <label>contributed by</label>
          <br/>
          <input type="text" value={contribBy} onChange={(e) => setContribBy(e.target.value)} required/>
        </div>

        <br/>

        <button>submit</button>
      </form>
    </div>
  )
}

export default BeerNew;
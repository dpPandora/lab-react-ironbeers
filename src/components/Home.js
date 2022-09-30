import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage basic">
    <h1>Home Page</h1>
{/*----------------------------------------------*/}
      <div className="linkCard">
        <Link to='/beer-list'>beer list</Link>
      </div>
{/*----------------------------------------------*/}
      <div className="linkCard">
        <Link to='/beer-random'>random beer</Link>
      </div>
{/*----------------------------------------------*/}
      <div className="linkCard">
        <Link to='/beer-new'>new beer</Link>
      </div>
    </div>
  )
}

export default Home;
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
        this is home page

        <h1>
            <Link to={'/about'} >Go to About page</Link>
        </h1>
    </div>
  )
}

export default Home
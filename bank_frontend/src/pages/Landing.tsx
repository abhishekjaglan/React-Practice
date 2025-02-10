import { Link } from "react-router-dom"

function Landing() {
  return (
    <div>
       <h1> Join Our Bank Today</h1>
        <div>
            <Link to={"/login"}>
                <button type="button">
                    Sign In
                </button>
            </Link>
            <Link to={"/signup"}>
                <button>
                    Sign Up
                </button>
            </Link>
        </div>
        <p>...to stay at top</p> 
    </div>
  )
}

export default Landing
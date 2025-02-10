import LoginAuth from "../components/LoginAuth"

function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <LoginAuth/>
        </div>
        <div className="hidden lg:block">

        </div>
    </div>
  )
}

export default Login
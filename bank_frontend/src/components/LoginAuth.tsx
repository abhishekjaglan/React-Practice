import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";

// TODO write ZOD validation for this
interface loginInput {
    username: string,
    password: string
}

function LoginAuth() {
    const navigate = useNavigate();

    const [ inputBoxInput, setInputBoxInput ] = useState<loginInput>({
        username:"",
        password:""
    });

    async function sendLoginRequest(){}

  return (
    <div>
        <div>
            <div>
                <div>
                    {"Log into your account"}
                </div>
                <div>
                    {"Don't have an account?"}
                    <Link to={"/signup"}>
                        {"Sign Up"}
                    </Link>
                </div>
                <InputBox label="Username" placeholder="user@example.com" onChange={(e) => {
                    console.log(e.target.value)
                    setInputBoxInput({
                        ...inputBoxInput,
                        username: e.target.value
                    })
                }}/>
                {/* onChange={(e) => {
                    setInputBoxInput( inputBoxInput => ({
                        ...inputBoxInput,
                        password: e.target.value
                    }))
                }} */}
                <InputBox label="Password" placeholder="********" onChange={(e) => {
                    console.log(e.target.value)
                    setInputBoxInput({
                        ...inputBoxInput,
                        password: e.target.value
                    })
                }}/>
                {/* TODO // A button component to send request */}
            </div>
        </div>
    </div>
  )
}

export default LoginAuth
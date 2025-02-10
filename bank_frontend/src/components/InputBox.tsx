import { InputBoxType } from "../types/componentsTypes"

function InputBox({ label, placeholder, onChange, type }:InputBoxType) {
  return (
    <div>
        <label>{label}</label>
        <input onChange={onChange} type={type || ""} placeholder={placeholder} required></input>
    </div>
  )
}

export default InputBox
import { useNavigate } from "react-router-dom"
import "../Styles.css"

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
        <form action="">
            <h1>Login</h1>
            <input 
            type="email" 
            name="email"
            placeholder="E-mail" />
            <input 
            type="password" 
            name="password" 
            placeholder="Password"/>
            <button 
            type="button">
              Entrar
            </button>
            <p onClick={() => {
              navigate("/cadastro")
            }}>
              Cadastre-se
            </p>
        </form>
    </div>
  )
}

export default Login
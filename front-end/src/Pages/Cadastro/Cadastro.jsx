import { useEffect, useRef, useState } from "react";
import "../Styles.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api"

const Cadastro = () => {

    const [users, setUsers] = useState([])
    
    const inputNmae = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()

    async function getUsers () {
        const userAPI = await api.get("/usuarios")
        setUsers(userAPI.data)
    }

    async function createUsers() {
        console.log(inputNmae)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const navigate = useNavigate()

    const cadastrar = () => {

    }

  return (
    <div className="container">

        <form action="">
            <h1>Cadastro</h1>
            <input 
            type="text" 
            name="name" 
            placeholder="name" 
            ref={inputNmae}/>
            <input 
            type="number" 
            name="age" 
            placeholder="Age"
            ref={inputAge}/>
            <input 
            type="email" 
            name="email" 
            placeholder="E-mail"
            ref={inputEmail}/>
            <input 
            type="password" 
            name="password" 
            placeholder="Password"
            ref={inputPassword}/>
            <button 
            type="button"
            onClick={createUsers}>
                Cadastrar
            </button>
            <button 
            type="button"
            onClick={() => {
                navigate("/")
            }}>
                Voltar
            </button>
        </form>

        {users.map(user => (
            <div key={user.id} className="card">
                <div>
                    <p>Name: <span>{user.name}</span></p>
                    <p>Age: <span>{user.age}</span></p>
                    <p>Email: <span>{user.email}</span></p>
                </div>
                <button><FaRegTrashAlt /></button>
            </div>
        ))}

    </div>
  )
}

export default Cadastro
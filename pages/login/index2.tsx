import { useEffect, useState} from 'react'
import Axios from 'axios';
export default function LoginPage () {
    
    const [token, setToken] = useState('');
    const [inicio, setInicio] = useState(0);
    useEffect(()=>{
        alert('Hola Mundo');
    },[inicio])

    function sumar(){
        setInicio(inicio+1); 
    };

    function login(){
        Axios.post('http://192.200.2.207:8000/api/login', { "username":"ludo",
    "password":"asd123" },{headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',                    
    }})
        .then(res => {
          console.log(res);
          console.log(res.data);
          setToken(res.data.token);

        })
        
    };

    function getRankig(){
        Axios.post('http://192.200.2.207:8000/api/reports/ranking-efficiency', 
        {
            "from":"",
            "to":"",
            "perPage":"1"
        },{headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Bearer': token                    
    }})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        
    };

    return (
    <div>
    <h1>{inicio} </h1>
    <button onClick={sumar}>Aceptar</button>
    <button onClick={login}>Login</button>
    <button onClick={getRankig}>Ranking</button>
    </div>);
}

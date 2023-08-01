import { useEffect, useState} from 'react'
import Axios from 'axios';
import { error } from 'console';
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
        Axios.post('http://192.200.2.184:8000/api/login', { "username":"ludo",
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

    function getMission(){
        Axios.post('http://192.200.2.184:8000/api/missions/', 
        {
                    "title": "pruebas1",
                    "description": "pruebas1",
                    "mission_points": "10",
                    "capture_points": "1",
                    "start_date": "2023-08-01",
                    "end_date": "2023-08-02",
                    "regions": "[14]"
        },{headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization':"Bearer "+token                    
    }})
        .then(res => {
          console.log(res);
          console.log(res.status);
        }).catch(function(error){
            console.error(error.message)
        })
        
    };

    return (
    <div>
        {token}
    <h1>{inicio} </h1>
    <button onClick={sumar}>Aceptar</button>
    <button onClick={login}>Login</button>
    <button onClick={getRankig}>Ranking</button>
    <button onClick={getMission}>Mission</button>
    </div>);
}

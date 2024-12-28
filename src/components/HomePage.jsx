import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const[inputdata,setInputData]=useState('');
    const navigate = useNavigate();

    const routehandler = ()=>{
        navigate(`/room/${inputdata}`)
    }
  return (
    <div>
        <div className="container" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            flexDirection:'column'
        }}>
        <h1>Hello User Welocme to Our video calling site  </h1>
        <input
        style={{
            padding:'10px',
            width:'300px',
            fontSize:'20px',
            border:'1px solid #ccc',
            borderRadius:'5px',
            outline:'none'
        }}
        type="text" value={inputdata} onChange={(e)=>setInputData(e.target.value)} placeholder="Enter Your name" />
    <button
    style={{
        padding:'10px',
        width:'300px',
        fontSize:'20px',
        border:'none',
        borderRadius:'5px',
        outline:'none',
        marginTop:'10px',
        cursor:'pointer',
        backgroundColor:'Orange',
    }}  
    onClick={routehandler}>Join the call</button>

        </div>
        
    </div>
  )
}

export default HomePage
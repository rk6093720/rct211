import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Auth/action';
import styled from 'styled-components';
import {  useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]= useState("");
  const [password, setPassword]= useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const location= useLocation();
  const comingfrom= location?.state?.data || "/";
  const handlelogin=(e)=>{
    e.preventDefault();
    if(email && password){
     dispatch(login({email, password}))
     .then((r)=>{
        // console.log(r)
        navigate(comingfrom,{replace:true})// this navigate is used to only function
     })
    }
   
  }
  return (
    <FormWrapper>
      <form  onSubmit={handlelogin}> 
        <div>
          <label>User Email</label>
          <input type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <input type="password"
          value={password}
          placeholder="enter your password"
          onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <button type='submit'>LOGIN</button>
        </div>
      </form>
    </FormWrapper>
  )
}

export default Login;
const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:300px;
  align-items:center;
  margin:auto;

`

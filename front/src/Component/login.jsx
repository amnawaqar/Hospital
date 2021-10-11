import React, { useState, useEffect } from 'react';
import { getUsers} from '../Service/api';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
const initialValue = {
  
  email: '',
  password:''
}
const Login = () => {
  let history = useHistory();

  var a="ddddff";
  const [user, setUser] = useState(initialValue);
  const [data, setdata] = useState([]);
  const { email,password} = user;
  useEffect(() => {
      getAllUsers();
  }, []);
  
  
  const getAllUsers = async () => {
    let response = await getUsers();
    setdata(response.data);
}

  const register =  () => {

    history.push('./add')
  }
const onValueChange = (e) => {
  console.log(e.target.value);
  setUser({...user, [e.target.name]: e.target.value})
}
function emailexist () { 
  data.filter((curElem) => {
   if (curElem.email === email) {

         if(password === curElem.password && curElem.st==="true")
         {
          
          <Dashboard Data={a}/>
        
          
   
         }
         else{
         
           alert("password is wrong,OR Please Activate Your Account")
   
   
         }
     
         }
        
    
     
   });
 }

 const match =  () => {
      
  if(password.trim()==="" || email.trim() ==""  ){
    alert("All field required ")
  }
else{
emailexist();
}
  }



    return ( 

        <div>
<section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

     

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: "23rem"}}>

                    <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Log In</h3>

            <div class="form-outline mb-4">
              <input type="email" id="form2Example17" class="form-control form-control-lg"  onChange={(e) => onValueChange(e)} name='email' value={email} required />
              <label class="form-label" for="form2Example17">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form2Example27" class="form-control form-control-lg"  onChange={(e) => onValueChange(e)} name='password' value={password} required/>
              <label class="form-label" for="form2Example27">Password</label>
            </div>

            <div class="pt-1 mb-4">
             
              
            <button type="button" size="5" class="btn btn-dark btn-lg" onClick={() => match()}>Login</button> <br/>
          
            </div>
            <div class="pt-1 mb-4">
           
            <button type="button" size="5" class="btn btn-dark btn-lg" onClick={() => register()}>Register</button>
            </div>

          </form>

        </div>

      </div>
      <div class="col-md-10 col-lg-6  d-flex align-items-center ">
      
      <img src="https://www.health.qld.gov.au/__data/assets/image/0022/672052/1-Medicine-labels.jpg" class="img-fluid" alt="Sample"/>

    </div>
    </div>
  </div>
</section>
      </div>

    


    )
}
export default Login;

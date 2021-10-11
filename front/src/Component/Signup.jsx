import React, { useState ,useEffect} from 'react';

import { getUsers} from '../Service/api';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    password: '',
    role:'',
    st :'false',
    code:''
}


const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    var check="false";
    const [data, setdata] = useState([]);
    const { name, email, password,role,st,code } = user;
    
    let history = useHistory();
    useEffect(() => {
      getAllUsers();
  }, []);
    
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    const getAllUsers = async () => {
      let response = await getUsers();
      setdata(response.data);
  }

  
  const emailexist =  (ema) => { 
    let Data= data.filter((curElem) => {
      if (curElem.email === ema) {
        check="true";
       
        return curElem;
      }
    });
  }
  
    const addUserDetails = async() => {
emailexist(email)



      if(name.trim()==="" || email.trim() ==""  || password.trim() ==""  || role.trim() ==""  ){
        alert("All field required ")
      }
    
      else if(check==="true"){
        alert("Email already existed")


      }
      else if(role.trim() ==="Doctor"||role.trim() ==="Patient"||role.trim() ==="Admin"){

        
        await addUser(user);
        history.push('./code');

      }
      else {
         
        alert("Enter role as Doctor,Patient or Admin")
      }
    }

    return (
        <section class="vh-100" style={{backgroundColor: "#eee"}}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{borderRadius:" 25px"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form class="mx-1 mx-md-4">
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control" onChange={(e) => onValueChange(e)} name='name' value={name} required />
                            <label class="form-label" for="form3Example1c">User Name</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" onChange={(e) => onValueChange(e)} name='email' value={email} required />
                            <label class="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" onChange={(e) => onValueChange(e)} name='password' value={password}  required/>
                            <label class="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
                
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example4cd" class="form-control" onChange={(e) => onValueChange(e)} name='role' value={role} required />
                            <label class="form-label" for="form3Example4cd">Role</label>
                          </div>
                        </div>
      
                       
      
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-dark btn-lg" onClick={() => addUserDetails()}>Register</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://www.health.qld.gov.au/__data/assets/image/0022/672052/1-Medicine-labels.jpg" class="img-fluid" alt="Sample"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}

export default AddUser;
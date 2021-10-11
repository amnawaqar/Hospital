import React, { useState, useEffect } from 'react';
import { getUsers,editUser } from '../Service/api';
import { useHistory} from 'react-router-dom';
import Countdown from 'react-countdown';
const initialValue = {
  
    email: '',
    code:''
}
const Activationcode = () => {
    var check="false";
    let history = useHistory();
    const [user, setUser] = useState(initialValue);
    const [data, setdata] = useState([]);
  
    const { email,code } = user;
    useEffect(() => {
        getAllUsers();
    }, []);   
    
    const Completionist = () => {history.push('./limit');}    
const getAllUsers = async () => {
        let response = await getUsers();
        setdata(response.data);
    }
    

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    function emailexist () { 
        data.filter((curElem) => {
         if (curElem.email === email) {

               if(code === curElem.code)
               {
                curElem.st="true";
                check=curElem._id;
                alert("code matched")
                editUserDetails(curElem)
   
         
               }
               else{
               
                 alert("code not  matched")
         
         
               }
           
               }
          
           
         });
       }
       
 
           const editUserDetails = async(daa) => {
               
            
                 const response = await editUser(check, daa);
           
           }
      
      const matchCode =  () => {
      
      if(code.trim()==="" || email.trim() ==""  ){
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

                    <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Please Enter Code Recieved At Your Email</h3>

            <div class="form-outline mb-4">
              <input type="email" id="form2Example17" class="form-control form-control-lg"  onChange={(e) => onValueChange(e)} name='email' value={email} required />
              <label class="form-label" for="form2Example17">Email</label>
            </div>

            <div class="form-outline mb-4">
            <input type="text" id="form2Example17" class="form-control form-control-lg" onChange={(e) => onValueChange(e)} name='code' value={code} required  />
              <label class="form-label" for="form2Example17">Code</label>
            </div>

            <div class="pt-1 mb-4">
            <Countdown date={Date.now() + 30000}>
      <Completionist />
    </Countdown>
             
 
            </div>

            <button type="button" class="btn btn-dark btn-lg" onClick={() => matchCode()}>Submit</button>
           

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
export default Activationcode;

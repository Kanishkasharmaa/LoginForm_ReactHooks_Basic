
import React, { useState } from 'react';
const App = () =>{
  const [fullName,setfullName]= useState({
    fName: "",
    lName:"",
    email:"",
  });
  
  const inputEvent=(event)=>{
     console.log(event.target.value);
     console.log(event.target.name);
   const value = event.target.value;
   const name = event.target.name;
   setfullName((preValue)=>{
     if(name==='fName'){
     return{
       fName: value,
       lName: preValue.lName,
       email: preValue.email,

     };
    }else if(name==='lName'){
      return{
        fName: preValue.fName,
        lName: value,
        ememail: preValue.email,
      }
    }else if(name==='email'){
      return{
        fName: preValue.fName,
        lName: preValue.lName,
        email: value,
      }
    }
    });
  };
  const onSubmit=(event)=>{
    event.preventDefault();
    alert("Form Submitted");

  };
 
  return (<>
  <form onSubmit={onSubmit}>
  <div>
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <p>{fullName.email}</p>
    <input type='text' placeholder="Enter Your Name" name='fName' onChange={inputEvent} value={fullName.fName} />
    <br/>
    <input type='text' placeholder="Enter Your Last Name" name='lName' onChange={inputEvent} value={fullName.lName} />
    <br/>
    <input type='text' placeholder="Enter Your Email ID" name='email' onChange={inputEvent} value={fullName.email} />
    <button type="submit">Click Me</button>
  </div>
  </form>
  </>);
};

export default App;

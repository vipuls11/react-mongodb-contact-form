import React, { useState } from 'react'

const App = () => {
  const [successMessage, setSuccessMessage] = useState()
  const[user, setUser] = useState({
    name:'',
    lastname:'',
    email:'',
    phone:'',
    address:''
  });

  const ChangeHandler = (e) =>{
     let name=e.target.name;
     let value=e.target.value;

     setUser({
      ...user,
      [name]:value
     })
  }

  
  const submitHandler = async (e) =>{
    e.preventDefault(); 
// alert("Hello")
  try {
    const url = "http://localhost:5000/contactus";
    console.log(url,"xdcdfvfgbhnjmk,")
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    if (response.ok) { // Check if the response status code is 200-299
      console.log("Data saved successfully!");

      // setSuccessMessage('Data saved successfully!');
      alert("successfully data enter"); // or display the success message however you like
      setUser({
    name:'',
    lastname:'',
    email:'',
    phone:'',
    address:''
  });

    // Clear the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('Data saved successfully!');
    }, 3000);
    } else {
      console.error("Error saving data:", response.status, response.statusText);
      // Handle the error case, e.g., display an error message
      setSuccessMessage("Error saving data:", response.status, response.statusText);
    }
  } catch (error) {
    console.error(error.message);
  }
}

  return (
    <div>
      <form onClick={submitHandler}>
        <div>
        <label htmlFor="">name</label>
        <input type="text" name="name"  value={user.name} onChange={ChangeHandler} />
        </div>
        <div>
          <label htmlFor="">last name</label>
          <input type="text" name="lastname" value={user.lastname} onChange={ChangeHandler}/>
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="text" name="email" value={user.email} onChange={ChangeHandler}/>
        </div>
        <div>
          <label htmlFor="">phone</label>
          <input type="number" name="phone" value={user.phone} onChange={ChangeHandler}/>
        </div>
        <div>
          <label htmlFor="">address</label>
          <input type="text" name="address" value={user.address} onChange={ChangeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {
        successMessage &&  <p style={{ color: 'green' }}>{successMessage}</p>
      }
    </div>
  )
}

export default App
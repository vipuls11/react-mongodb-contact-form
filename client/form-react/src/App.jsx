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
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center '>
     <div className='bg-white lg:md:w-[30%] p-5 rounded-lg'>
      <h2 className='text-center text-2xl font-extrabold mb-5'>Conatct Us!</h2>
      <hr />
      <hr />
     <form onClick={submitHandler}>
        <div className='my-3'>
        <label htmlFor="">Name :</label> <br />
        <input type="text" name="name"  value={user.name} onChange={ChangeHandler}  className='border rounded-lg focus:outline-none px-2 w-full py-1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="">Last Name :</label> <br />
          <input type="text" name="lastname" value={user.lastname} onChange={ChangeHandler} className='border rounded-lg focus:outline-none px-2 w-full py-1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="">Email:</label> <br />
          <input type="text" name="email" value={user.email} onChange={ChangeHandler} className='border rounded-lg focus:outline-none px-2 w-full py-1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="">Phone :</label><br />
          <input type="number" name="phone" value={user.phone} onChange={ChangeHandler} className='border rounded-lg focus:outline-none px-2 w-full py-1'/>
        </div>
        <div className='mb-3'>
          <label htmlFor="">Address :</label><br />
          <input type="text" name="address" value={user.address} onChange={ChangeHandler} className='border rounded-lg focus:outline-none px-2 w-full py-1'/>
        </div>
        <button type="submit" className='bg-blue-300 w-full py-2.5 font-extrabold text-white rounded-lg'>Submit</button>
      </form>
      {
        successMessage &&  <p className='text-black bg-green-200 text-center my-5 py-3 shadow rounded-xl '>{successMessage}</p>
      }
     </div>
    </div>
  )
}

export default App
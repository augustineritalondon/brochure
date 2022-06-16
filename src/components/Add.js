import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add = () => {
  const [formData, setFormData] = useState({});

  let {name,email,phone} = formData || "";

  const formValue = (e) => {

    let key = e.target.name;
    let value = e.target.value;
    console.log({key, value})
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const contact = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contact.find((contact) => contact.email === email && email)
    const checkNumber = contact.find((contact) => contact.phone === parseInt(phone))

    if(!email || !name || !phone){
      console.log("fill in all fields")
      return toast.warning("please fill in all fields!")
    }

    if(checkEmail){
      return toast.error("Email already exists!")
    }

    if(checkNumber){
      return toast.error("Number already exists!")
    }

    
    const data = {
      id: contact[contact.length -1].id + 1,
      name,
      email,
      phone
    }
    
    console.log(data)

    dispatch({type: "ADD_CONTACT", payload: data});
    toast.success("Student Added Successfully!");
    navigate("/")
  }

  return (
    <>
      <div className="container">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-sky-900 py-8">Add Student</h1>
          </div>
          <div className="p-5 shadow-lg w-3/5 mx-auto">
            <form action="" className="" onSubmit={handleSubmit}>
              <input type="text" className='p-2 w-full block border rounded my-5' name="name" placeholder='Name' onChange={e=> formValue(e)}/>
              <input type="text" className='p-2 w-full block border rounded my-5' name="email" placeholder='Email' onChange={e=> formValue(e)}/>
              <input type="text" className='p-2 w-full block border rounded my-5' name="phone" placeholder='Phone Number' onChange={e=> formValue(e)}/>

              <input type="submit" className='bg-sky-900 p-2 w-full text-center text-white font-bold mt-6 cursor-pointer' value='Add Student'/>
            </form>
          </div>
        </div>
      </div>
    </>  
  )
}

export default Add
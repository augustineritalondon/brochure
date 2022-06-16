import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const [formData, setFormData] = useState({});

  let {name, email, phone} = formData || ""


  const formValue = (e) => {
    let key = e.target.name;
    let value = e.target.value
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {id} = useParams();

  const contacts = useSelector(state=>state);
  
  const currentContact = contacts.find(contact=> contact.id === parseInt(id))

  useEffect(()=>{
    if(currentContact){
      // console.log(contacts)
      let dbData = {}
      Object.entries(currentContact).map(([k,v]) => {
        dbData[k] = v;
        delete dbData.id
      })
      setFormData({
        ...formData,
        ...dbData
      })
      
    }

  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email)
    const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.phone === parseInt(phone))

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
      id: parseInt(id),
      name,
      email,
      phone
    }
    
    console.log(data)

    dispatch({type: "UPDATE_CONTACT", payload: data});
    toast.success("Student Updated Successfully!");
    navigate("/")
  }

  return (
    <>
      {currentContact? (
        <div className="container">
          <div className="">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-sky-900 py-8">Edit Student {id}</h1>
            </div>
            <div className="p-5 shadow-lg w-3/5 mx-auto">
              <form action="" className="" onSubmit={handleSubmit}> 
                <input type="text" className='p-2 w-full block border rounded my-5' name='name' value={name} onChange={(e)=>formValue(e)} placeholder='Name'/>
                <input type="text" className='p-2 w-full block border rounded my-5' name='email' value={email} onChange={(e)=>formValue(e)} placeholder='Email'/>
                <input type="text" className='p-2 w-full block border rounded my-5' name='phone' value={phone} onChange={(e)=>formValue(e)} placeholder='Phone Number'/>

                <div className="">
                  <input type="submit" className='bg-sky-900 p-2 px-6 text-center text-white font-bold mt-6 mr-5 cursor-pointer' value='Update Student'/>
                  <Link to="/" className='bg-red-500 p-2 px-6 inline-block text-center text-white font-bold mt-6'> Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1 className='text-6xl text-center py-20'>Student with contact id {id} does not exist</h1>
      ) }
    </>
  )
}

export default Edit
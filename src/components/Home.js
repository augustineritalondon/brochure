import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

  const contacts = useSelector((state)=>state)


  console.log(contacts)

  const dispatch = useDispatch();



  const deleteContact = (id) => {
    console.log(id)
    dispatch({type: "DELETE_CONTACT", payload:id});
    toast.success("Contact deleted succesffully!")
  }

  return (
    <>
      <div className="container">
        <div className=''>
          <div className="flex justify-end pt-10">
            <Link to="/add" className='border-sky-500 border-2 font-bold text-sky-500 p-3 px-6 rounded-3xl hover:bg-sky-500 hover:text-white transition ease-out duration-500'>Add Contact</Link>
          </div>

          <div className="flex justify-center pt-10">
            <table className="min-w-full divide-y divide-sky-400">
              <thead className="bg-sky-900 text-white">
                <tr>
                  <th scope='col' className='px-6 py-3 w-16 text-left text-xs font-medium uppercase tracking-wider'>#</th>
                  <th scope='col' className='px-6 py-3 w-80 text-left text-xs font-medium uppercase tracking-wider'>Name</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Email</th>
                  <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Phone</th>
                  <th scope='col' className='px-6 py-3 w-20 text-left text-xs font-medium uppercase tracking-wider'>Action</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-sky-200'>
                {
                  contacts.map((item, id)=>(
                    <tr key={id}>
                      <td className='px-6 py-4 whitespace-nowrap'>{id + 1}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.email}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>{item.phone}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <Link to={`/edit/${item.id}`} className="mr-3 bg-sky-700 p-2 px-3 text-white font-medium rounded-xl">Edit</Link>
                        <button type='button' onClick={()=>deleteContact(item.id)} className="bg-red-500 p-2 px-3 text-white font-medium rounded-xl">Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Home
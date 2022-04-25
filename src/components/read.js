import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Read = () => {
  useEffect(() => {
    // dataFetched();
  }, [])
  // const [post, setPost] = useState({});
  const [post, setPost] = useState([]);

  // const dataFetched = async()=>{
  //   const response = await fetch("https://62658f35dbee37aff9a6b7a7.mockapi.io/fakeData")
  //   console.log(response);
  //   const jasonData = await response.json();
  //   setPost(jasonData)

  // }
  // dataFetched();

  // const setData = (data) => {
  //   let { id, firstName, lastName, checkbox } = data;
  //   localStorage.setItem('ID', id);
  //   localStorage.setItem('First Name', firstName);
  //   localStorage.setItem('Last Name', lastName);
  //   localStorage.setItem('Checkbox Value', checkbox);
  //   console.log(data)
  // }

  useEffect(() => {

    axios.get(`https://62658f35dbee37aff9a6b7a7.mockapi.io/fakeData`).then((response) => {
      setPost(response.data);

      console.log(response.data)


    })
    // fakeStore()
  }, [])
  return (
    <div className='mt-5 w-11/12'>
      <table className='w-full border-2 border-gray-300 text-white '>
        <thead className='w-full border-2 border-white flex font-semibold bg-red-600 overflow-hidden'>
          <tr className='border-2 border-white p-2 w-1/6'>ID</tr>
          <tr className='border-2 border-white p-2 w-full'>First Name</tr>
          <tr className='border-2 border-white p-2 w-full' >Last Name</tr>
          <tr className='border-2 border-white p-2 w-full' >Actions</tr>
        </thead>
        {
          post.map((res) => {
            return (
              <tbody className='flex w-full text-left'>
                <tr className='border-2 border-white p-2 w-1/6 overflow-hidden ' key={res.id}>{res?.id}</tr>
                <tr className='border-2 text-left border-white p-2 w-full overflow-hidden '>{res?.firstName}</tr>
                <tr className='border-2 border-white p-2 w-full overflow-hidden '>{res?.lastName}</tr>
                <tr className='border-2 border-white p-2 w-full overflow-hidden text-center justify-self-center'>
                  <Link to={`/${res.id}`} >
                    <button className='w-20 h-9 bg-slate-500 rounded-sm border-black ' >Update &#8634;</button>
                    </Link></tr>
              </tbody>
               
              
            )
          })
        }
      </table>
    </div>
  );
}

export default Read;
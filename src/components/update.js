import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Update = () => {

  

  const { id } = useParams();
  // console.log(id)

  const [post, setPost] = useState([])
  // useEffect(() => {
  //   fetchFromId();
  // }, []);

  useEffect(() => {

    axios.get(`https://62658f35dbee37aff9a6b7a7.mockapi.io/fakeData/${id}`).then((response) => {
      setPost(response.data);

      
        // setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setCheckbox(localStorage.getItem('Checkbox'))



    })
    // fakeStore()
  }, [])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const updateAPIData = () => {
    axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
        firstName,
         lastName,
         checkbox
	})
}
  updateAPIData();
  const setData = () => {
    // console.log(post)

    let {  firstName, lastName, checkbox } = post;
    // localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
}

  return (

    
      <div className='mt-5  flex justify-center w-full'>
      {/* <table className='w-full border-2 border-gray-300 text-white '>
        <thead className='w-full border-2 border-white flex font-semibold bg-red-600 overflow-hidden'>
          <tr className='border-2 border-white p-2 w-1/6'>ID</tr>
          <tr className='border-2 border-white p-2 w-full'>First Name</tr>
          <tr className='border-2 border-white p-2 w-full' >Last Name</tr>
          <tr className='border-2 border-white p-2 w-full' >Actions</tr>
        </thead>
      <tbody className='flex w-full text-left'>
        <tr className='border-2 border-white p-2 w-1/6 overflow-hidden ' key={post.id}>{post.id}</tr>
        <tr className='border-2 text-left border-white p-2 w-full overflow-hidden '>{post.firstName}</tr>
        <tr className='border-2 border-white p-2 w-full overflow-hidden '>{post.lastName}</tr>
        <tr className='border-2 border-white p-2 w-full overflow-hidden text-center justify-self-center'> */}
          <form className="flex flex-col m-4 " >
                <label className="text-white lg:text-2xl hover:underline">
                    First Name
                </label>
                <input
                    type="text"
                    className="lg:w-96 lg:h-12 p-2 placeholder:text-base placeholder:lg:text-2xl outline-none text-2xl text-gray-600"
                    placeholder={post.firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                ></input>
                <label className="text-white lg:text-2xl hover:underline mt-3">
                    Last Name
                </label>
                <input
                    type="text"
                    className="lg:w-96 lg:h-12 p-2 placeholder:text-base placeholder:lg:text-2xl outline-none text-2xl text-gray-600"
                    placeholder={post.lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                ></input>

                <div className="mt-2">
                    <input type="checkbox" className="mt-2 focus:ring-0"
                    onChange={(e)=>setCheckbox(e.target.value)} />
                    <span className="ml-3 text-white">I accept terms and policies</span>
                </div>
                <button
                    type="submit"
                    className="w-16  h-6 rounded-sm font-semibold text-sm bg-white text-gray-700 mt-3"
                onClick={()=>{setData();updateAPIData()}}
                >
                    Update
                </button>
            </form>
          {/* <button className='w-20 h-9 bg-slate-500 rounded-sm border-black '  >Update &#8634;</button> */}
        {/* </tr>
      </tbody>
      </table> */}


    </div>
  );
}

export default Update;
import React ,{useState} from "react";
import "./index.css";
import axios from "axios";

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData =()=>{
        axios.post(`https://62658f35dbee37aff9a6b7a7.mockapi.io/fakeData`,{

            firstName,
            lastName,
            checkbox
        })
    }
    const handler=(e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <form className="flex flex-col m-4 " onSubmit={handler}>
                <label className="text-white lg:text-2xl hover:underline">
                    First Name
                </label>
                <input
                    type="text"
                    className="lg:w-96 lg:h-12 p-2 placeholder:text-base placeholder:lg:text-2xl outline-none text-2xl text-gray-600"
                    placeholder="First Name..."
                    onChange={(e)=>setFirstName(e.target.value)}
                ></input>
                <label className="text-white lg:text-2xl hover:underline mt-3">
                    Last Name
                </label>
                <input
                    type="text"
                    className="lg:w-96 lg:h-12 p-2 placeholder:text-base placeholder:lg:text-2xl outline-none text-2xl text-gray-600"
                    placeholder="Last Name..."
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
                onClick={postData}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;

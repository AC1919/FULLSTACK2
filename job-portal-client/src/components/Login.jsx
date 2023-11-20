/*import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  

  
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <button className='bg-blue px-8 py-2 text-white'>Login</button>

    </div>
  )
  }

export default Login */

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';
import Home from '../Pages/Home';
const Login = () => {
    const [selectedOption,setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => { 
        //data.skills = selectedOption;
        //console.log(data)
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then((result) =>{
            console.log(result);
            if(result.acknowledged === true){
                alert("Logged In Successfully!!!")
                
                
            }
            <a href="/">Home</a>
            reset()
        })
    };
    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* form */}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/* 1st row */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>ENTER YOUR NAME</label>
                    <input type="text" placeholder='Ex: Smith Jones'
                     {...register("name")} className='create-job-input' />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>EMAIL_ID</label>
                    <input type="email" placeholder='Ex: youremail@mail.com '
                     {...register("email")} className='create-job-input' />
                </div>
            </div>
            {/* 2nd row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Address</label>
                    <input type="text" placeholder='local//address'
                     {...register("add")} className='create-job-input' />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Phone Number</label>
                    <input type="text" placeholder='+91-'
                     {...register("no")} className='create-job-input' />
                </div>
            </div>
                 {/* 3rd row */}
                 <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Role</label>
                    <select {...register("role")} className='create-job-input'>
                   
                    <option value="Candidate">Candidate</option>
                    <option value="HR">HR</option>
                    
                    </select>
                </div>
           
           
      <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm 
      cursor-pointer' />
    </form>
        </div>
    </div>
  )
}

export default Login





import React from 'react'
import { useForm } from "react-hook-form";


function RegisterForm() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
   
      <input {...register("titel")} className='p-2 border' />
      <input {...register("content", { required: true })}  className='p-2 border'/>
      {errors.exampleRequired && <span className='text-red-300'>please enter again </span>}
      <input type="submit"  className='bg-teal-500 text-white'/>
    </form>
     
    </div>
  )
}

export default RegisterForm

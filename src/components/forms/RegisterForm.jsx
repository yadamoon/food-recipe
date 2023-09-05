import React from 'react'
import { useForm } from "react-hook-form";


function RegisterForm() {
    const { register, handleSubmit,  ormState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
   
      <input {...register("titel")} />
      <input {...register("content", { required: true })} />
      {errors.exampleRequired && <span className='text-red-300'>please enter again </span>}
      <input type="submit" />
    </form>
     
    </div>
  )
}

export default RegisterForm

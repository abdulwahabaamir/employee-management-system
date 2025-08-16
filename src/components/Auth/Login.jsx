import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is",email,"password is ", password );

        setemail("")
        setpassword("")
    }
    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-200'>
            <div className='flex flex-col bg-white rounded p-8 gap-4'>
                <h1 className=' text-2xl text-emerald-600 font-semibold'>EMS</h1>
                <h1 className='text-2xl font-semibold'>Login to your account</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col justify-center gap-4'>
                    <div className='flex flex-col'>
                                        <label className='flex items-center gap-2'>Email Address <span className='text-red-700 text-xl'>*</span></label>

                        <input
                        className='border p-2 rounded w-[350px] border-gray-400'
                        value={email}
                        type="email"
                        onChange={(e)=>{setemail(e.target.value)}}
                        required />
                    </div>

                <div className='flex flex-col'>
                    <label className='flex items-center gap-2'>Password <span className='text-red-700 text-xl'>*</span></label>
                    <input
                        className='border p-2 rounded w-[350px] border-gray-400'
                        value={password}
                        type="password"
                        onChange={(e)=>{setpassword(e.target.value)}}
                        required />
                        </div>
                   <div className='flex justify-between items-center'>
                     <button
                        className='bg-emerald-600 py-2 px-6 font-bold rounded text-white cursor-pointer hover:bg-emerald-700 w-[100px]'>Login
                    </button>
                    <p className='text-emerald-600 font-normal cursor-pointer'>forget password ?</p>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Login
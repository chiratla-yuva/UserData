import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', gender: '', age: '', birthday: '', terms: false });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://userdata-backend.onrender.com/api/auth/register', { ...formData,role:'User'});
            console.log('Response:', response);
            navigate('/home');
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <div className='sm:w-1/2 sm:bg-grey-900 sm:bg-opacity-0 md:w-4/5 p-6 md:bg-white md:bg-opacity-10 md:rounded-3xl flex flex-col justify-center'>
            <h1 className='text-center text-green-500 text-2xl font-bold mb-6'>UserVista</h1>
            <form className='md:flex md:flex-wrap justify-between gap-0.5' onSubmit={handleSubmit} id='form'>
                {/* Name */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <label htmlFor="name" className="block font-bold mb-0.5">Name</label>
                    <div className="flex items-center bg-white border-2 border-black rounded-lg">
                        <i className="fa-solid fa-user px-2 text-black"></i>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full px-3 py-2 text-md text-black outline-none rounded-lg"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <label htmlFor="email" className="block font-bold mb-0.5">Email</label>
                    <div className="flex items-center bg-white border-2 border-black rounded-lg">
                        <i className="fa-solid fa-envelope px-2 text-black"></i>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-3 py-2 text-md text-black outline-none rounded-lg"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                {/* Phone Number */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <label htmlFor="phone" className="block font-bold mb-0.5">Phone Number</label>
                    <div className="flex items-center bg-white border-2 border-black rounded-lg">
                        <i className="fa-solid fa-phone px-2 text-black"></i>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full px-3 py-2 text-md text-black outline-none rounded-lg"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                {/* Gender */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <label className="block font-bold mb-0.5">Gender</label>
                    <div className="flex items-center space-x-4 my-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                className="mr-2"
                                autoComplete="off"
                                required
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                className="mr-2"
                                autoComplete="off"
                                required
                            />
                            Female
                        </label>
                    </div>
                </div>
                {/* Age */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <label htmlFor="age" className="block font-bold mb-0.5">Age</label>
                    <div className="flex items-center bg-white border-2 border-black rounded-lg">
                        <i className="fa-solid fa-user-clock px-2 text-black"></i>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Age"
                            className="w-full px-3 py-2 text-md text-black outline-none rounded-lg"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                {/* Birthday */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <label htmlFor="birthday" className="block font-bold mb-0.5">Birthday</label>
                    <div className="flex items-center bg-white border-2 border-black rounded-lg">
                        <i className="fa-solid fa-calendar-days px-2 text-black"></i>
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-md text-black outline-none rounded-lg"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                {/* Terms and Conditions */}
                <div className="mb-2 w-full md:w-80 lg:w-96">
                    <div className="flex items-center px-2 py-2 lg:pt-8">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="terms" className="text-white">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>
                {/* Register Button */}
                <button id="btn" type="submit" className="w-full bg-green-500 text-black font-bold py-2 mb-2 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Register

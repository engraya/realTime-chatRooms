import axios from 'axios'
import React from 'react'
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'
import RightColComponent from './RightColComponent'


export default function MainComponent(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
          .post("http://localhost:3001/authenticate", { username : value })
          .then((r) => props.onAuth({...r.data, secret : value }))
          .catch((error) => console.log("Authentication Error", error))
        props.onAuth({ username: value, secret: value });
      };
  return (
    <div className="h-full">
       <NavbarComponent/>
 
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
           <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Main
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Hero Message
            </span>
            to sell yourself!
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            Sub-hero message, not too long and not too short. Make it just right!
          </p>
   
          <form onSubmit={onSubmit} className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
                Signup for our newsletter
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your Username"
              />
            </div>
          
            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="submit"
              >
                Start Chating
              </button>
            </div>
          </form>
              
        
        </div>
   
    
    </div>
         <RightColComponent/>
    <FooterComponent/>
 </div>
  )
}

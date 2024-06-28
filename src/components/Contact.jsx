import React, { useState } from "react";
import form from "react";
// import emailjs from "@emailjs/browser";


import { BsChatRightText } from 'react-icons/bs'

import { useForm, ValidationError } from '@formspree/react';




const Contact = () => {
   
        const [state, handleSubmit] = useForm("mnqyzkrv");
        // if (state.succeeded) {
        //     return <p>Thanks, Your Message is received!</p>;
        // }
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_jfhqpkg",
//         "template_h39tzzr",
//         form.current,
//         "0bfnlgWvbNaJVO5uf"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//     showResult(true);
//   };

  return (
    // <section
    //   style={{
        
    //     backgroundImage:{blurBG},
    //     backgroundSize: "20px 20px",
    //     backgroundPosition: "0 0,10px 10px",
    //   }}
    //   id="contact"
    //   className="min-h-[80vh] p-6 bg-white/10 flex items-center justify-center"
    // >
    //  <section
    //   style={{
    //     backgroundColor: "#e5e5f7",
    //     opacity: "0.8",
    //     backgroundImage:
    //       "radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
    //     backgroundSize: "20px 20px",
    //     backgroundPosition: "0 0,10px 10px",
    //   }}
    // <section
    
    // style={{
    //   backgroundImage:`url(${meshBGContact})`
    // }}
//       id="contact"
//       className="min-h-fit p-6 bg-no-repeat bg-cover bg-white/10 flex items-center justify-center"
//     >
//       <div className="container mx-auto bg-white border rounded flex flex-col items-stretch flex-wrap md:flex-row pb-4">
//         <div className="mt-5 ml-5 mx-auto">
//         <h2 className="text-black text-4xl font-bold leading-tight">Have a question?</h2>
//         <h3 className="text-black text-2xl font-semibold leading-relaxed">Contact us</h3>
//         <img className="h-[500px] hidden md:block" src={chat} />
//         </div>
//         <div className=" w-4/5 md:w-2/5 items-center my-auto mx-auto ">
//         <form ref={form} onSubmit={sendEmail}>
//           <label>Name: </label>
//           <br></br>
//           <input
//             required
//             type="text"
//             name="user_name"
//             placeholder="name surname"
//             className="placeholder:italic placeholder:text-slate-400 mb-5 h-10 w-full border rounded px-4 bg-gray-50"
//           />
//           <br></br>
//           <label>Email: </label>
//           <br></br>

//           <input
//             required
//             className="placeholder:italic placeholder:text-slate-400 mb-5 h-10 w-full border rounded px-4 bg-gray-50"
//             type="email"
//             name="user_email"
//             placeholder="email@domain.com"
//           />
//           <br></br>

//           <label>Message:</label>
//           <br></br>

//           <textarea
//             maxLength={1000}
//             required
            
//             rows={20}
//             className="placeholder:italic resize-none placeholder:text-slate-400 w-full h-[125px] border rounded px-4 bg-gray-50"
//             name="message"
//             placeholder="any queries"
//           />
//           <br></br>
//           <div className="items-end float-right">
//           <input
//             className="bg-blue-500 hover:bg-blue-700  mt-2 space-x-reverse text-white  font-bold py-2 px-4 rounded"
//             type="submit"
//             value="Send"
//           />
// </div>
//           <div>{result ? <Result /> : null}</div>
//         </form>
//         </div>
//       </div>
//     </section>






<section 
id="contact"
class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Chat to our friendly team</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span class=" h-[44px] inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">info@siteswala.com</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg> */}
                        <BsChatRightText size={20}/>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <a href="https://wa.me/918087502308?text=I%20want%20a%20website%20for%20my%20business"><p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p></a>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office.</p>
                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Pune.</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Direct messages only.</p>

                    <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+91 8087502308</p>
                </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form  ref={form} onSubmit={handleSubmit}>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label htmlFor="" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input autoComplete="off" required type="text" placeholder="John " name="first_name" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input autoComplete="off" required type="text" placeholder="Doe" name="last_name" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input autoComplete="off" required type="email" placeholder="johndoe@example.com" name="email" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea autoComplete="off" required  placeholder="Message" name="message" class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                    </div>

                    <button type="submit" disabled={state.submitting} class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                  {state.succeeded ? <p className="text-gray-500 font-semibold">Your message has been received!</p> : null}
                </form>
            </div>
        </div>
    </div>
</section>
  );
};

export default Contact;

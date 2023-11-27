import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

  // Email JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brjmjv7', 'template_002rt6f', form.current, 'qnRUp2xbFgwWnBw4D')
      .then((result) => {
          if(result){
            toast.success('Email sent successfully')
            form.current.reset();
          }
      }, (error) => {
          if(error){
            toast.error('Something went wrong')
          }
      });
  };


  return (
    <div id='contact' className="w-auto xl:w-[1200px] mx-3 xl:mx-auto mb-40">

      <div className='w-full md:flex md:justify-center'>
        <form  ref={form} onSubmit={sendEmail} className="md:w-[600px]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor=""  className='text-white text-lg font-semibold'>First Name</label>
              <input
                className="border rounded-md p-3 mt-2 bg-[#ffffff2c] text-white"
                placeholder="First Name"
                type="text"
                name="first_name"
                required
              />
            </div>
            <div className="flex flex-col mt-3 md:w-1/2">
              <label htmlFor=""  className='text-white text-lg font-semibold'>Last Name</label>
              <input
                className="border rounded-md p-3 mt-2 bg-[#ffffff2c] text-white"
                placeholder="Last Name"
                type="text"
                name="last_name"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mt-3 ">
            <label htmlFor=""  className='text-white text-lg font-semibold'>Email</label>
            <input
              className="border rounded-md p-3 mt-2 bg-[#ffffff2c] text-white"
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor=" " className='text-white text-lg font-semibold'>Message</label>
            <textarea
              rows="5"
              cols="100"
              className="border rounded-md p-3 mt-2 bg-[#ffffff2c] text-white"
              placeholder="Your message here..."
              type="text"
              name="message"
              required
            />
          </div>

          <input
            className="text-md uppercase bg-purple-500 py-2 px-7 rounded-md text-white font-bold mt-7 shadow-lg cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Contact;

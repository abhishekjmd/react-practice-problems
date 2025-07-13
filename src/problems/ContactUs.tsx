import React, { useState } from "react";

export default function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errors, setErros] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!fullName) newErrors.fullName = "fullName is required";
    if (!email) newErrors.email = "email is required";
    if (!msg) newErrors.msg = "msg is required";
    
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(email)) newErrors.email = "Email is not valid";
    }
    setErros(newErrors);
    if(Object.keys(errors).length > 0 ){
      alert(Object.values(errors))
    }
    if(fullName || email || msg ){
      alert('form submitted successfully')
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 w-90 h-auto  rounded-xl shadow-xl p-10 "
    >
      <div className="space-y-2">
        <p className="text-[10px] text-gray-600">Full Name</p>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-[95%] rounded-md text-sm border-gray-400 border-1 p-1.5 px-2 outline-none"
        />
        {errors.fullName && (
          <p className="text-[10px] text-gray-600">{errors?.fullName}</p>
        )}
      </div>
      <div className="space-y-2.5">
        <p className="text-[10px] text-gray-600">Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[95%] rounded-md text-sm border-gray-400 border-1 p-1.5 px-2 outline-none"
        />
        {errors.email && (
          <p className="text-[10px] text-gray-600">{errors.email}</p>
        )}
      </div>
      <div className="space-y-2.5">
        <p className="text-[10px] text-gray-600">Message</p>
        <input
          onChange={(e) => setMsg(e.target.value)}
          className="w-[95%]  rounded-md text-sm border-gray-400 border-1 py-5 px-2 outline-none"
        />
        {errors.msg && (
          <p className="text-[10px] text-gray-600">{errors.msg}</p>
        )}
      </div>
      <div className="w-[100%] justify-center mt-3 items-center">
        <button
          className="w-[95%] py-1.5 rounded-md bg-amber-300 cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

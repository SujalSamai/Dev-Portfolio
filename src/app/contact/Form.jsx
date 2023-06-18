import React from 'react'

const Form = () => {
  return (
    <form
      action="https://formspree.io/f/mdobvqal"
      method="POST"
      className="lg:w-6/12 lg:pr-10 lg:py-5"
    >
      <div className="flex flex-col">
        <input
          type="text"
          name="fullname"
          placeholder="Name"
          className="my-5 p-5 bg-transparent border border-teal-300 rounded-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="my-5 p-5 bg-transparent border border-teal-300 rounded-sm"
        />
        <textarea
          rows="7"
          cols="26"
          placeholder="Message"
          name="message"
          className="my-5 p-5 bg-transparent border border-teal-300 rounded-sm"
        ></textarea>
      </div>
      <div className="flex justify-start items-start">
        <button
          className="bg-transparent border-teal-300 border p-4 hover:bg-black hover:shadow-lg rounded-md text-teal-300"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default Form
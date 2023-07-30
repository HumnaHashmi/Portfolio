import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924244.0619641689!2d66.59499551729773!3d25.192146526892635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1690205629087!5m2!1sen!2s" 

             />
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
  <div className="lg:w-1/2 px-6">
    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
      ADDRESS
    </h2>
    <p className="mt-1 text-white font-light">
      Karachi,
      Pakistan
    </p>
  </div>
  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
    <div className="flex flex-col">
      <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
        EMAIL
      </h2>
      <a href="mailto:hashmihumna57@gmail.com" className="text-indigo-400 leading-relaxed truncate">
        hashmihumna57@gmail.com
      </a>
    </div>
    <div className="flex flex-col mt-5 lg:mt-0">
      <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2 mt-4">
        PHONE
      </h2>
      <a href="tel:03101043687"  className="leading-relaxed text-white font-light">+92 310 1043687</a>
    </div>
  </div>
</div>




        </div>
        <form
  netlify  netlify-honeypot="bot-field"
  name="contact"
  onSubmit={handleSubmit}
  className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
>
  <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-gray-900 text-center hireMe">
  Hire Me
</h2>
<p className="text-gray-600 mb-4 text-center">
  Let's turn your ideas into reality! I'm a passionate web developer, committed to delivering top-notch solutions tailored to your needs.
</p>
  <div className="mb-4">
    <label
      htmlFor="name"
      className="block text-sm font-medium text-gray-800"
    >
      Your Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 text-gray-900"
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-800"
    >
      Your Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 text-gray-900"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="mb-6">
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-800"
    >
      Your Message <span className="text-red-500">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      className="w-full h-32 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 text-gray-900 resize-none"
      onChange={(e) => setMessage(e.target.value)}
      required
    />
  </div>
  
  <button
    type="submit"
    className="w-full py-3 text-white  rounded-lg font-bold text-lg transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
    style={{ backgroundColor: "#00A196" }}
  >
    Submit
  </button>
</form>     </div>
    </section>
  );
}
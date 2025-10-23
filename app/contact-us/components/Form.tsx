export default function Form() {
  return (
    <div className="p-4 lg:p-8 md:py-12">
      <h2>Contact Us</h2>
      <p className="mt-2">
        Please contact us if you want to any information regrading Education.
        Thank You.
      </p>
      <div className="flex flex-col gap-2 md:gap-4 items-center my-2 md:my-8">
        <span className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-xs md:text-base">
            Name*
          </label>
          <input
            id="name"
            placeholder="Please Enter Your Name"
            className="border border-[#d6d6d6] p-2 rounded-md bg-white text-xs md:text-base"
          />
        </span>
        <span className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-xs md:text-base">
            Email*
          </label>
          <input
            id="email"
            placeholder="Please Enter Your Email"
            className="border border-[#d6d6d6] p-2 rounded-md bg-white text-xs md:text-base"
          />
        </span>
        <span className="w-full flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs md:text-base">
            Subject
          </label>
          <input
            id="subject"
            placeholder="Please Enter Subject"
            className="border border-[#d6d6d6] p-2 rounded-md bg-white text-xs md:text-base"
          />
        </span>
        <span className="w-full flex flex-col gap-2">
          <label htmlFor="message" className="text-xs md:text-base">
            Message*
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Please Enter Your Message"
            className="border border-[#d6d6d6] p-2 rounded-md bg-white text-xs md:text-base"
          />
        </span>
        <span className="w-full flex justify-start">
          <button className="bg-gray-800 text-white text-sm md:text-base md:font-semibold px-8 py-2 rounded-md transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:text-gray-100 hover:shadow-2xl hover:bg-black">
            Send
          </button>
        </span>
      </div>
    </div>
  );
}

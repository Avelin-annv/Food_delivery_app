import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { PUBLIC_LINKS } from "../utils/constants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const handleChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: process.env.REACT_APP_TO_EMAIL,
          message: form.message,
        },
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          alert("Thank you for dropping a message!");
        },
        (err) => {
          setLoading(false);
          console.error(err);
          alert("Something went wrong!.Please try again");
        }
      );
  };
  return (
    <div>
      <div className="xl:mt-12 md:w-[70%]  text-black mx-auto">
        <div className="mb-4 text-center">
          <h3 className="text-3xl font-bold ">Get in touch</h3>
        </div>
        <div className="flex-[0.5] bg-black-100 p-8 moon-bg rounded-xl bg-red-100">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="gap-8 mt-10 flex-col w-[90%] mx-auto text-black"
          >
            <label className="flex flex-col text-xl ">
              <span className="my-6 sm:text-xl font-semibold">Name</span>
              <input
                type="text"
                name="name"
                placeholder="What's your name"
                value={form.name}
                onChange={(e) => handleChange(e.target)}
                className="rounded-xl outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <label className="flex flex-col text-xl">
              <span className="my-6 sm:text-xl font-semibold">Email</span>
              <input
                type="email"
                name="email"
                placeholder="What's your email"
                value={form.email}
                onChange={(e) => handleChange(e.target)}
                className=" rounded-xl outlined-none py-4 border-none shadow-md shadow-primary"
              />
            </label>
            <label className="flex flex-col sm:text-xl font-semibold">
              <span className="my-6 sm:text-xl">Drop in a message</span>
              <textarea
                type="text"
                rows={7}
                name="message"
                placeholder="Drop in a message"
                value={form.message}
                onChange={(e) => handleChange(e.target)}
                className=" rounded-xl outlined-none py-4 border-none shadow-md shadow-primary "
              />
            </label>
            <button
              type="submit"
              className="p-4 text-xl bg-black text-white m-4 rounded-xl outline-none font-bold shadow-md shadow-primary mx-auto flex"
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <div className="text-center font-semibold">
            <p>Feel free to connect</p>
            <div className="my-4">
              {PUBLIC_LINKS.map((item) => (
                <Link to={item.link} key={item.id} className="m-2 p-2">
                  <button className="rounded-full w-9 mx-1 hover:shadow-2xl hover:shadow-white shadow-inner">
                    <img src={item.imgHref} className="w-9 h-9 " />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

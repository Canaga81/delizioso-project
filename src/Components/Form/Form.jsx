// import { data } from "autoprefixer";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const getdata = async (e) => {
    const { firstName, lastName, email, subject, message } = user;

    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    };

    const res = await fetch(
      "https://reactfirebasedelisozo-default-rtdb.firebaseio.com/UserData.json",
      options
    );

    if (res) {
      alert("Message Send !");
    } else {
      alert("Error Occured !");
    }
  };

  return (
    <div className="w-full h-full mt-9">
      <div className="container mx-auto">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-7 items-center">
            <h1 className="lg:text-[70px] text-[35px] tracking-[1.5px] font-primary text-[#311F09] text-center">
              Contact us
            </h1>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] text-[#5C4529] tracking-[1.5px] text-center">
              We love hearing from our customers. Feel free to share your
              experience or ask any questions you may have.
            </p>
          </div>
          <div className="w-full">
            <form method="POST" className="flex flex-col gap-6">
              <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between gap-5">
                <input
                  value={user.firstName}
                  name="firstName"
                  className="rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none"
                  type="text"
                  placeholder="First name"
                  autoComplete="off"
                  required
                  onChange={data}
                />
                <input
                  value={user.lastName}
                  name="lastName"
                  className="rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none"
                  type="text"
                  placeholder="Last name"
                  autoComplete="off"
                  required
                  onChange={data}
                />
              </div>

              <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between gap-5">
                <input
                  value={user.email}
                  name="email"
                  className="rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none"
                  type="email"
                  placeholder="Email address"
                  autoComplete="off"
                  required
                  onChange={data}
                />
                <input
                  value={user.subject}
                  name="subject"
                  className="rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none"
                  type="text"
                  placeholder="Subject"
                  autoComplete="off"
                  required
                  onChange={data}
                />
              </div>

              <textarea
                value={user.message}
                name="message"
                className="rounded-[20px] resize-none w-full h-[320px] bg-[#D0CCC7] pl-6 pt-9 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none"
                placeholder="Message"
                autoComplete="off"
                required
                onChange={data}
              ></textarea>

              <button
                onClick={getdata}
                className="lg:h-[60px] md:h-[50px] h-[40px] lg:w-[300px] md:w-[250px] w-[230px] tracking-[2.5px] bg-[#FF8A00] lg:text-[20px] md:text-[16px] text-[14px] text-white rounded-[20px] mx-auto mt-14 hover:bg-opacity-75 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

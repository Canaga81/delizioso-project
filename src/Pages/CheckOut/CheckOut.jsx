import { FaCircleChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CheckOut = () => {

  const alertFunc = (e) => {
    e.preventDefault();
    alert('Your order has been sent !');
  }

  const checkedFunc = (e) => {
    e.preventDefault();
    alert("Adress Changed !");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="w-full h-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-32 mt-32">
            <Link to={"/"}>
              <FaCircleChevronLeft className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] transition duration-200 hover:opacity-80" />
            </Link>
            <h1 className="mx-auto lg:text-[70px] md:text-[45px] text-[30px] font-primary tracking-[1.5px]">
              Checkout
            </h1>
          </div>
          <div>
            <form className="flex flex-col gap-12">
              <div className="flex flex-col gap-7">
                <p className="lg:text-[25px] md:text-[20px] text-[16px] tracking-[1.5px] font-primary text-black">
                  Shipping address
                </p>
                <div className="flex flex-col sm:flex-row gap-y-6 sm:items-center gap-6">
                  <input
                    className="lg:h-[70px] md:h-[50px] h-[40px] lg:w-[800px] md:w-[500px] w-[200px] bg-[#D0CCC7] bg-opacity-20 lg:pl-10 pl-5 text-[#311F09] border-none outline-none rounded-[6px]"
                    type="text"
                    placeholder="Address"
                  />
                  <button onClick={checkedFunc} className="lg:w-[180px] md:w-[140px] w-[100px] lg:h-[70px] md:h-[50px] h-[40px] bg-[#749FE0] text-white rounded-[20px] lg:text-[20px] md:text-[16px] text-[14px] tracking-[1.5px] hover:bg-opacity-75 transition duration-200">
                    Change
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <p className="lg:text-[25px] md:text-[20px] text-[16px] tracking-[1.5px] font-primary text-black">
                  Order data
                </p>
                <div className="flex flex-col sm:flex-row gap-y-6 sm:items-center gap-6">
                  <input
                    className="lg:h-[70px] md:h-[50px] h-[40px] lg:w-[600px] sm:w-[400px] w-[270px] bg-[#D0CCC7] bg-opacity-20 lg:pl-10 pl-5 text-[#311F09] border-none outline-none rounded-[6px]"
                    type="text"
                    placeholder="First name"
                    required
                  />
                  <input
                    className="lg:h-[70px] md:h-[50px] h-[40px] lg:w-[600px] sm:w-[400px] w-[270px] bg-[#D0CCC7] bg-opacity-20 lg:pl-10 pl-5 text-[#311F09] border-none outline-none rounded-[6px]"
                    type="text"
                    placeholder="Last name"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-y-6 sm:items-center gap-6">
                  <div className="flex items-center gap-5 lg:h-[70px] md:h-[50px] h-[40px] lg:w-[600px] sm:w-[400px] w-[270px] bg-[#D0CCC7] bg-opacity-20 lg:pl-10 pl-5 text-[#311F09] border-none outline-none rounded-[6px]">
                    <select className="bg-transparent border-none outline-none">
                      <option>AZ</option>
                      <option>GE</option>
                      <option>TR</option>
                    </select>
                    <input
                      className="bg-transparent border-none outline-none"
                      type="text"
                      placeholder="Phone number"
                      required
                    />
                  </div>

                  <input
                    className="lg:h-[70px] md:h-[50px] h-[40px] lg:w-[600px] sm:w-[400px] w-[270px] bg-[#D0CCC7] bg-opacity-20 lg:pl-10 pl-5 text-[#311F09] border-none outline-none rounded-[6px]"
                    type="email"
                    placeholder="Email address"
                    required
                  />
                </div>

                <div>
                  <textarea
                    className="resize-none pt-9 lg:h-[220px] md:h-[200px] sm:h-[180px] h-[160px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-[270px] bg-[#D0CCC7] bg-opacity-20 lg:pl-10 pl-5 text-[#311F09] border-none outline-none rounded-[6px]"
                    placeholder="Note"
                    required
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div>
            <form className="flex flex-col gap-12 mt-12">
              <div className="flex flex-col gap-7">
                <p className="lg:text-[25px] md:text-[20px] text-[16px] tracking-[1.5px] font-primary text-black">
                  Order time
                </p>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      className="rounded-full w-[20px] h-[20px]"
                      type="checkbox"
                    />
                    <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                      Order now
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="rounded-full w-[20px] h-[20px]"
                      type="checkbox"
                    />
                    <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                      Order later
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <p className="lg:text-[25px] md:text-[20px] text-[16px] tracking-[1.5px] font-primary text-black">
                  Order method
                </p>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      className="rounded-full w-[20px] h-[20px]"
                      type="checkbox"
                    />
                    <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                      Delivery
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="rounded-full w-[20px] h-[20px]"
                      type="checkbox"
                    />
                    <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                      Take a way
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <p className="lg:text-[25px] md:text-[20px] text-[16px] tracking-[1.5px] font-primary text-black">
                  Payment method
                </p>
                <div className="flex flex-col sm:flex-row gap-y-12 sm:items-center md:gap-64 sm:gap-32 gap-24">
                  <div className="flex flex-col gap-y-12">
                    <div className="flex items-center gap-2">
                      <input
                        className="rounded-full w-[20px] h-[20px]"
                        type="checkbox"
                      />
                      <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                        Cash On Delivery
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        className="rounded-full w-[20px] h-[20px]"
                        type="checkbox"
                      />
                      <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                        Credit Card
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-12">
                    <div className="flex items-center gap-2">
                      <input
                        className="rounded-full w-[20px] h-[20px]"
                        type="checkbox"
                      />
                      <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                        BCA Virtual Account
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        className="rounded-full w-[20px] h-[20px]"
                        type="checkbox"
                      />
                      <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                        Transfer Bank
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <input
                    className="rounded-full w-[20px] h-[20px]"
                    type="checkbox"
                  />
                  <p className="text-[#311F09] tracking-[1.5px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                    Choose to indicate that you have read and agree to our Terms
                    of use & Privacy Policy.
                  </p>
                </div>
                <div className="mx-auto">
                  <button onClick={alertFunc} className="lg:h-[60px] md:h-[50px] h-[40px] lg:w-[300px] md:w-[250px] w-[230px] tracking-[2.5px] bg-[#FF8A00] lg:text-[20px] md:text-[16px] text-[14px] text-white rounded-[20px] mx-auto mt-14 hover:bg-opacity-75 transition duration-300">
                    Order now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckOut;
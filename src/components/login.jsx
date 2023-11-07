import IMG from "../assets/Logo.png";
import GIMG from "../assets/GLogo.png";
import FIMG from "../assets/FLogo.png";
import HIMG from "../assets/Hide.svg";

export default function Login() {
    return (
        <>
            <div className="flex-2 md:h-screen flex flex-col justify-center items-center">
                <div className="m-5">
                    <img src={IMG} alt="logo" className="w-16 h-16" />
                </div>
                <div className="">
                    <p className="text-xl font-bold text-center">Log in</p>
                </div>
                <div className="mt-5 flex">
                    <button className="flex justify-center items-center bg-[#F7F7F8] hover:bg-blue-700 text-[#030229] hover:text-gray-100 font-bold py-2 px-4 mx-4 rounded w-1/2">
                        <img src={GIMG} alt="google" className="w-4 mx-3"></img> Google
                    </button>
                    <button className="flex justify-center items-center bg-[#F7F7F8] hover:bg-blue-700 text-[#030229] hover:text-gray-100 font-bold py-2 px-4 mx-4 rounded w-1/2">
                        <img src={FIMG} alt="google" className="w-2 mx-3"></img> Facebook
                    </button>
                </div>
                <div className="flex justify-center items-center w-3/4">
                    <hr className="w-full border-1 border-gray-300" />
                    <p className="text-center text-[#030229] m-3 font-bold">Or</p>
                    <hr className="w-full border-1 border-gray-300" />
                </div>
                <div className="m-4 flex flex-col justify-center items-center">
                    <form className="flex flex-col justify-center items-center m-3">
                        <label className="text-[#030229] font-bold ps-2 w-full">Email Address</label>
                        <input type="text" placeholder="exmple@gmail.com" className="border-none bg-[#F7F7F8] rounded-xl w-80 placeholder:font-bold  h-10 p-3 my-2 ms-2" />
                        <label className="text-[#030229] font-bold ps-2 w-full">Password</label>
                        <div className="border-none bg-[#F7F7F8] rounded-xl w-80 h-10 p-3 my-2 ms-2 flex justify-between items-center">
                            <input type="password" placeholder="........" className="border-none bg-[#F7F7F8] placeholder:font-bold placeholder:text-3xl" />
                            <p className="text-[#030229] font-bold">
                                <img src={HIMG} alt="hide" className="w-4"></img>
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-3 mb-5">
                            <div className="flex items-center">
                                <input type="checkbox" className="m-2" />
                                <label className="text-[#030229] font-semibold">Remember me</label>
                            </div>
                            <p className="text-[#605BFF] font-semibold">Reset Password?</p>
                        </div>
                        <button className="bg-[#605BFF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-72 h-10 m-2">Log in</button>
                    </form>
                </div>
                <div className="">
                    <p className="text-[#030229] font-semibold">Don&apos;t have an account? <span className="text-[#605BFF]">New Account</span></p>
                </div>
            </div>
        </>
    )
}
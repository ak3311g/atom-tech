import Login from "../components/login";
import IMG from "../assets/Illustration.png";

export default function Home() {
    return (
        <>
        <div className="flex justify-center items-center">
            <Login/>
            <div className="hidden lg:flex flex-2 justify-center items-center">
                <img src={IMG} alt="image" className="w-1/2 h-1/2 object-cover" />
            </div>
        </div>
        </>
    )
}
import { Link } from "react-router-dom";


const Header = () => {

    const logo = 'https://ibb.co/DCVH6FJ';

    return (
        <div className="bg-[#372727] p-5 ">
            <img src={logo} alt="" className="w-full"/>
            <h2 className="text-5xl font-rancho text-white text-center">Coffee Corner</h2>
            <div className="space-x-5 text-[#a3a3a3] font-inter font-semibold text-center mt-5">
                <Link to="/">Home</Link>
                <Link to="/addCoffee">Add a Coffee</Link>
                <Link to="/updateCoffee">Update a Coffee</Link>
            </div>
        </div>
    );
};

export default Header;
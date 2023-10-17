

const AddCoffee = () => {

    const handleCoffeeAdd = e => {
        e.preventDefault()
        const form = e.target;
        const coffeeName = form.name.value;
        const chefName = form.chefName.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        console.log({coffeeName, chefName, supplier, details, taste, photo});
    }



    return (
        <div className="container mx-auto p-5">
            <h2 className="text-5xl font-rancho text-center mt-[100px]">Add a New Coffee</h2>

            <form onSubmit={handleCoffeeAdd}
            className="flex flex-col justify-center items-center mt-14 gap-10">

                <div className="flex justify-between items-center gap-[80px] w-2/3">
                    <input type="text" name="name" id="name" placeholder="Enter coffee name" className="border-[1px] border-[lightgray] px-5 py-2 rounded w-1/2 focus:outline-none focus:border-[1px] focus:border-black" />
                    <input type="text" name="chefName" id="chefName" placeholder="Enter coffee chef name" className="border-[1px] border-[lightgray] px-5 py-2 rounded w-1/2 focus:outline-none focus:border-[1px] focus:border-black" />
                </div>

                <div className="flex justify-between items-center gap-[80px] w-2/3">
                    <input type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" className="border-[1px] border-[lightgray] px-5 py-2 rounded w-1/2 focus:outline-none focus:border-[1px] focus:border-black" />
                    <input type="text" name="taste" id="taste" placeholder="Enter coffee taste" className="border-[1px] border-[lightgray] px-5 py-2 rounded w-1/2 focus:outline-none focus:border-[1px] focus:border-black" />
                </div>

                <div className="flex justify-between items-center gap-[80px] w-2/3">
                    <input type="text" name="details" id="details" placeholder="Enter coffee details" className="border-[1px] border-[lightgray] px-5 py-2 rounded w-1/2 focus:outline-none focus:border-[1px] focus:border-black" />
                    <input type="text" name="photo" id="photo" placeholder="Enter coffee photo URL" className="border-[1px] border-[lightgray] px-5 py-2 rounded w-1/2 focus:outline-none focus:border-[1px] focus:border-black" />
                </div>

                <input type="submit" value="Add Coffee" className="border-2 border-[#331A15] bg-[#D2B48C] text-center w-2/3 font-rancho text-2xl py-1 rounded hover:text-white hover:bg-[#331A15] duration-500"/>

            </form>
        </div>
    );
};

export default AddCoffee;
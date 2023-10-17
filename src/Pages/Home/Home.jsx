

const Home = () => {

    const bannerBg = 'https://ibb.co/ZSFW2VR';

    return (
        <div className="h-[600px] w-full"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${bannerBg}})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div className="container mx-auto p-5 flex flex-col justify-center items-center h-full gap-8">
                <h2 className="font-rancho text-5xl font-medium text-[white]">Would you like a Cup of Delicious Coffee?</h2>
                <p className="font-inter text-[gray] w-[50%] text-center">{'It\'s'} coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            </div>
        </div>
    );
};

export default Home;
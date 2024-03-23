import Banner from "../Banner/Banner";
import wave from '../../assets/wave.svg';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-290px)]">
            <Banner></Banner>
            <img className=" bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;
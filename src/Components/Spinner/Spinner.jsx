import { ScaleLoader } from "react-spinners";
const Spinner = () => {
    return (
        <div className="flex justify-center items-center  min-h-[calc(100vh-290px)]">
            <ScaleLoader size={100} color="#F92FD3" ></ScaleLoader>
        </div>
    );
};

export default Spinner;
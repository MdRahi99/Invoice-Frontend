import Loader from "../../components/Shared/Loader";
import useCars from "../../hooks/useCars";

const Reservation = () => {

    const {cars, loading, error} = useCars();

    console.log(cars);

    if(loading){
        return <Loader />
    }

    if(error){
        return <h1>Error</h1>
    }

    return (
        <div className="">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-bold">Reservation</h1>
                <button className="px-4 py-2 bg-[#5D5CFF] text-white text-[14px] font-semibold rounded-md">Print / Download</button>
            </div>
        </div>
    );
};

export default Reservation;
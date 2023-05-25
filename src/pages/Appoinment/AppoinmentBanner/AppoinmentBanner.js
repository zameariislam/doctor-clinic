
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppoinmentBanner = ({ selected, setSelected }) => {


    return (
        <header>
            <div className="hero ">
                <div className="hero-content flex-col   lg:flex-row-reverse">
                    <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt='dentist-chair' />
                    <div>

                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}


                        />
                    </div>
                   
                </div>
            </div>

        </header>
    );
};

export default AppoinmentBanner;
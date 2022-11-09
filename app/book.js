import trailer from './images/trailer.svg';
import motorcycle from './images/motorcycle.svg';
import car from './images/car.svg';
import pickup from './images/pickup.svg';
import van from './images/van.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {} from '@fortawesome/free-brands-svg-icons';
import { faCarSide, faMotorcycle, faTrailer, faTruckPickup, faVanShuttle } from "@fortawesome/free-solid-svg-icons";

export default function book() {
    return (
        <div id="book">
            <section className="pageHeader">
                <h1>BOOK</h1>
            </section>
            <div className="bookContainer">
                <div>
                    <h1 className="part">1/3</h1>
                </div>
                <div className="bookTitle">
                    <h1>Vehicle type</h1>
                    <h2>Select the vehicle type below</h2>
                </div>
                <div></div>{/* empty div for grid */}
                <div className="bookContent">
                    <div className="bookOptionsVehicle">
                        <a className="vehicleOption"><img className='vehicleIcon' src={trailer}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon' src={motorcycle}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon' src={car}/></a>
                        
                        <a className="vehicleOption"><img className='vehicleIcon' src={pickup}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon van' src={van}/></a>
                    </div>
                </div>

                <div>
                    <h1 className="part">2/3</h1>
                </div>
                <div className="bookTitle">
                    <h1>Services Menu</h1>
                    <h2>Select what kind of service you want below</h2>
                </div>
                <div></div>{/* empty div for grid */}
                <div className="bookContent">
                    <div className="bookOptionsVehicle">
                        <a className="vehicleOption"><img className='vehicleIcon' src={trailer}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon' src={motorcycle}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon' src={car}/></a>
                        
                        <a className="vehicleOption"><img className='vehicleIcon' src={pickup}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon van' src={van}/></a>
                    </div>
                </div>

                <div>
                    <h1 className="part">3/3</h1>
                </div>
                <div className="bookTitle">
                    <h1>Select date and time</h1>
                    <h2>Select the time and date you want below</h2>
                </div>
                <div></div>{/* empty div for grid */}
                <div className="bookContent">
                    <div className="bookOptionsVehicle">
                        <a className="vehicleOption"><img className='vehicleIcon' src={trailer}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon' src={motorcycle}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon' src={car}/></a>
                        
                        <a className="vehicleOption"><img className='vehicleIcon' src={pickup}/></a>

                        <a className="vehicleOption"><img className='vehicleIcon van' src={van}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
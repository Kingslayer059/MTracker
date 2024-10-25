import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MedicationContainer = ({ medication_ID }) => {
    // change bg color based on taken status
    const getBackgroundColor = () => {
        if (takenToday && requiredToday) return 'bg-green-700';
        if (!takenToday && requiredToday) return 'bg-red-700';
        return 'bg-zinc-700';
    };

    // change content based on taken status
    const getTakenStatus = () => {
        if (takenToday) {
            return <p className='text-white'>Taken today</p>;
        } else {
            return <button className='text-white text-left underline' onClick={() => setTakenToday(true)}>Mark as taken</button>;
        }
    }

    // hamburger menu for more options
    const [showMenu, setShowMenu] = useState(false);

    const [takenToday, setTakenToday] = useState(false);
    const [requiredToday, setRequiredToday] = useState(true);

    return (
        <div className={`relative flex flex-col justify-between p-4 rounded-lg shadow-md w-fit text-left justify-self-center ${getBackgroundColor()}`}>
            <div className='flex justify-between'>
                <p className="text-sm font-light">2 pills (20 mg)</p>
                <button onClick={() => setShowMenu(!showMenu)}>
                    <svg className='w-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" /></svg>
                </button>
            </div>
            <p className="text-xl font-medium">
                Medication Title
            </p>
            <hr className="my-2 border-t border-gray-300 w-full" />
            {getTakenStatus()}
            <div className='absolute right-0 top-0'>
                {showMenu && <div className='absolute left-full bg-zinc-700 bg-opacity-80 backdrop-blur-sm p-2 px-4 rounded-lg text-left text-sm z-10 text-nowrap flex flex-col items-start'>
                    <button className='hover:text-gray-300 transition-all' onClick={() => setTakenToday(!takenToday)}>{takenToday ? 'Mark not taken' : 'Mark taken'}</button>
                    <hr className="my-1 border-t border-gray-500 w-full" />
                    <button className='hover:text-gray-300 transition-all' onClick={() => setRequiredToday(!requiredToday)}>{requiredToday ? 'Not required today' : 'Required today'}</button>
                    <hr className="my-1 border-t border-gray-500 w-full" />
                    <button className='text-red-500 hover:text-red-300 transition-all' onClick={() => setShowMenu(false)}>Close</button>
                </div>}
            </div>
        </div>
    );
};

MedicationContainer.propTypes = {
    medication_ID: PropTypes.number.isRequired,
};

export default MedicationContainer;
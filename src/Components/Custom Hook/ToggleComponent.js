import React from 'react';
import useToggle from './useToggle'; // make sure path matches where you save the hook

function ToggleComponent() {
    const [isToggled, toggle] = useToggle(true); // initial value is true that we need to write it in front of The Situation.

    return (
        <div className='my-40 text-center font-bold text-3xl'>
            <p className='mb-8 text-neutral-800'>The Situation: <span className='text-red-700'> {isToggled ? 'True' : 'False'}</span></p> {/* isToggle is False by default as we defined and specified in useToggle.js. */}
            <button className='border border-green-600 border-4 bg-green-300 text-green-900 py-2 px-4 rounded-lg' onClick={toggle}>Change</button>
        </div>
    );
}

export default ToggleComponent;
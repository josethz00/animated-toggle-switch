import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as ListIcon } from '../../assets/listicon.svg';
import { ReactComponent as GridIcon } from '../../assets/gridicon.svg';

export default function FancyToggleSwitch({ isOn, setIsOn }) {
    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className='switch' onClick={toggleSwitch} data-isOn={isOn}>
            <motion.div
                className='handle'
                id={isOn && 'semicircle-handle'}
                layout
                transition={spring}
                data-isOn={isOn}
            >
                <motion.div className='bg' layout transition={spring} id = {isOn && 'semicircle-bg'} data-isOn={isOn}/>
            </motion.div>
            {isOn ? (
                <GridIcon
                    width={67}
                    height={67}
                    className='icon'
                    data-isOn={isOn}
                />
                ) : (
                <ListIcon
                    width={67}
                    height={67}
                    className='icon'
                    data-isOn={isOn}
                />
            )}
        </div>
    )
}

const spring = {
    type: 'spring',
    stiffness: 190,
    damping: 30,
};
          
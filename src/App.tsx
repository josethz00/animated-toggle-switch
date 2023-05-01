import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { ReactComponent as ListIcon } from './assets/listicon.svg';
import { ReactComponent as GridIcon } from './assets/gridicon.svg';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <div className='switch' onClick={toggleSwitch} data-isOn={isOn}>
        <motion.div
          className='handle'
          layout
          transition={spring}
          data-isOn={isOn}
        >
          <motion.div className='bg' layout transition={spring} />
        </motion.div>
        <ListIcon
          width={67}
          height={67}
          className='icon'
          data-isOn={isOn}
        />
      </div>
    </>
  );
}

const spring = {
  type: 'spring',
  stiffness: 190,
  damping: 30,
};

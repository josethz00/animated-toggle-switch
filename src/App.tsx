import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { ReactComponent as ListIcon } from './assets/listicon.svg';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
    <div className='switch' onClick={toggleSwitch}>
      {isOn ? (
        <>
          <motion.div className='handle' layout transition={spring}>
            <motion.div className='bg' layout transition={spring} />
          </motion.div>
          <ListIcon width={80} height={80} />
        </>
      ): (
        <>
          <ListIcon width={80} height={80} />
          <motion.div className='handle' layout transition={spring}>
            <motion.div className='bg' layout transition={spring} />
          </motion.div>
        </>
      )}
    </div>
    </>
  )
}

const spring = {
  type: 'spring',
  stiffness: 190,
  damping: 30
}
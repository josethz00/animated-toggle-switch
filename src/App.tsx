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
    <div className='switch' onClick={toggleSwitch}>
      {isOn ? (
        <>
          <motion.div className='handle' layout transition={spring}>
            <motion.div className='bg' layout transition={spring} />
          </motion.div>
          <ListIcon width={67} height={67} />
        </>
      ): (
        <>
          <GridIcon width={67} height={67} />
          <motion.div className='handle' id='semicircle-handle' layout transition={spring}>
            <motion.div className='bg' id='semicircle-bg' layout transition={spring} />
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
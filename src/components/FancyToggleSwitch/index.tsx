import { motion } from 'framer-motion';
import { ReactComponent as ListIcon } from '../../assets/listicon.svg';
import { ReactComponent as GridIcon } from '../../assets/gridicon.svg';

interface FancyToggleSwitchProps {
    isOn: boolean;
    setIsOn: (isOn: boolean) => void;
    disabled?: boolean;
    color?: string;
}

export default function FancyToggleSwitch({ isOn, setIsOn, disabled, color = 'blue' }: FancyToggleSwitchProps): JSX.Element {
    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className='switch' onClick={toggleSwitch} data-isOn={isOn} style={{
            pointerEvents: disabled ? 'none' : 'all',
        }}>
            <motion.div
                className={`handle ${color === 'red' ? 'handle-red' : ''}`}
                id={isOn && 'semicircle-handle'}
                layout
                transition={spring}
                data-isOn={isOn}
            >
                <motion.div 
                    className={`bg ${color === 'red' ? 'bg-red' : ''}`}
                    layout
                    transition={spring}
                    id = {isOn && 'semicircle-bg'}
                    data-isOn={isOn}
                />
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
          
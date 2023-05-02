import { motion } from 'framer-motion';
import { ReactComponent as ListIcon } from '../../assets/listicon.svg';
import { ReactComponent as GridIcon } from '../../assets/gridicon.svg';

interface FancyToggleSwitchProps {
    isOn: boolean;
    setIsOn: (isOn: boolean) => void;
    disabled?: boolean;
    color?: string;
    theme?: 'dark' | 'light';
}

export default function FancyToggleSwitch({ isOn, setIsOn, disabled, color = 'blue', theme }: FancyToggleSwitchProps): JSX.Element {
    const toggleSwitch = () => setIsOn(!isOn);

    const getHandleElementClassnames = () => {
        console.log(color)
        const classNames = ['handle'];
        if (color === 'red') {
            classNames.push('handle-red');
        }
        if (isOn) {
            if (color === 'red') {
                classNames.push('semicircle-handle-red');
            }
            classNames.push('semicircle-handle');
        }
        return classNames.join(' ');
    }

    const getBgElementClassnames = () => {
        const classNames = ['bg'];
        if (color === 'red') {
            classNames.push('bg-red');
        }
        if (isOn) {
            classNames.push('semicircle-bg');
        }
        return classNames.join(' ');
    }

    return (
        <div className='switch' onClick={toggleSwitch} data-isOn={isOn} style={{
            pointerEvents: disabled ? 'none' : 'all',
        }}>
            <motion.div
                className={getHandleElementClassnames()}
                layout
                transition={spring}
                data-isOn={isOn}
            >
                <motion.div 
                    className={getBgElementClassnames()}
                    layout
                    transition={spring}
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
          
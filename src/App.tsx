import { useState } from 'react';
import './App.css';
import CustomSelect from './components/CustomSelect/index';
import FancyToggleSwitch from './components/FancyToggleSwitch';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');

  return (
    <div className='main'>
      <CustomSelect selectedOption={selectedColor} setSelectedOption={setSelectedColor}>
        <option value='' disabled>Select a color</option>
        <option value='blue'>Blue</option>
        <option value='red'>Red</option>
      </CustomSelect>
      <CustomSelect selectedOption={selectedTheme} setSelectedOption={setSelectedTheme}>
        <option value='' disabled>Select a theme</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </CustomSelect>
      <FancyToggleSwitch isOn={isOn} setIsOn={setIsOn} disabled={false} color={selectedColor} theme={selectedTheme} />
    </div>
  );
}


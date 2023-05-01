import { useState } from 'react';
import './App.css';
import FancyToggleSwitch from './components/FancyToggleSwitch';

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return (
      <FancyToggleSwitch isOn={isOn} setIsOn={setIsOn} />
  );
}


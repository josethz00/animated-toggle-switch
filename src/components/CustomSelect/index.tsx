import * as React from "react";

interface CustomSelectProps {
  selectedOption?: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export default function CustomSelect({ selectedOption, setSelectedOption, children }: CustomSelectProps): JSX.Element {
  return (
    <select
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
      defaultValue='blue'
      className='custom-select'
    >
        {children}
    </select>
  )
}

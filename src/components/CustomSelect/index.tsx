export default function CustomSelect({ selectedOption, setSelectedOption, children }): JSX.Element {
    return (
        <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            defaultValue='blue'
            className='custom-select'
            placeholder="Select a color"
        >
            {children}
        </select>
    )
}
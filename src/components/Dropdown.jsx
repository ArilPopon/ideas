function Dropdown({ label, options, value, onChange }) {
    return (
        <div>
            <label className="mr-2">{label}</label>
            <select value={value} onChange={onChange} className="border px-2 py-1 rounded">
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;

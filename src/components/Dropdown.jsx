import { FiChevronDown } from "react-icons/fi";

function Dropdown({ label, options, value, onChange }) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
            <label className="text-sm text-gray-700">{label}</label>
            <div className="relative inline-block">
                <select
                    value={value}
                    onChange={onChange}
                    className="appearance-none border border-gray-300 rounded-full px-4 py-1 pr-12 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
}

export default Dropdown;

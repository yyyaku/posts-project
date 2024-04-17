import React from "react";

const MySelect = ({ options, defoultValue, value, onChange }) => {
    return (
        <select
            value={value}
            // передаем не сам event, а значение, который выбрал пользователь-onChange(e.target.value)
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value=''>
                {defoultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default MySelect;

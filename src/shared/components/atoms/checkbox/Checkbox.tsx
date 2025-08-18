import React, { type FC, useState } from 'react';

interface CheckBoxProps {
  label: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckBoxProps> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={isChecked} onChange={handleChange} className="w-4 h-4" />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;

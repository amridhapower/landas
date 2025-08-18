import { type FC, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { type Control, Controller, type FieldError } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'password';
  control: Control<any>;
  error?: FieldError | undefined;
};

const Input: FC<InputProps> = ({ name, label, placeholder, type = 'text', control, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center gap-4 w-150">
      <label className="w-30">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div className="relative w-full">
            <input
              {...field}
              type={type === 'password' && !showPassword ? 'password' : 'text'}
              className={`relative z-10 w-full h-14 bg-transparent border rounded-[10px] p-2 font-mono 
  ${error ? 'border-red-500' : 'border-gray-300'} 
  text-black focus:border-amber-200 focus:outline-none focus:ring-0`}
              style={{ caretColor: 'black' }}
            />
            <div className="absolute top-0 left-0 flex items-center w-full h-full pointer-events-none p-2 text-gray-400 font-mono bg-gray-50 focus:bg-white">
              <span className="text-transparent">{field.value}</span>
              <span>{placeholder.slice(field.value.length)}</span>
            </div>
            {type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="cursor-pointer z-50 absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            )}
          </div>
        )}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Input;

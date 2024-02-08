import { ChangeEventHandler } from 'react';

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}
export const Input = ({ onChange }: InputProps) => {
  return (
    <input
      type='number'
      className='w-full outline-none focus:ring focus:border-blue-400 border-gray-300 rounded-md p-2'
      placeholder='Ingrese el termino n de la serie'
      onChange={onChange}
    />
  );
};

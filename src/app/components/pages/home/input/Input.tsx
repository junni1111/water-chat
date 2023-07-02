import { ChangeEvent } from 'react';
import * as style from './Input.style';

interface InputProps {
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ input, onChange }: InputProps) => (
  <style.Wraper value={input} onChange={onChange} />
);

export default Input;

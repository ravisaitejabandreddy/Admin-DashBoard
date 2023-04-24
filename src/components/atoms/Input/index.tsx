import { OutlinedInput } from "@mui/material";

interface InputProps {
  label?: string;
  helperText?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  sx?: React.CSSProperties;
  type?: string;
  required?: boolean;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  InputProps?: {};
  defaultValue?: string;
  autoFocus?: boolean;
  name?: string;
  id?: string;
  ref?: any;
  inputRef?: any;
}

const Input = ({ ...props }: InputProps) => {
  return <OutlinedInput {...props} />;
};

export default Input;

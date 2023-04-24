import { Checkbox, FormControlLabel, styled } from "@mui/material";
import { ReactElement } from "react";

interface CheckBoxProps {
  control?: ReactElement<any, any>;
  label: React.ReactNode;
  value?: string;
  sx?: {};
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = styled(FormControlLabel)`
  & .MuiCheckbox-root {
    color: #e5e7ed;
  }
`;

const CheckBox = ({ control, onChange, ...props }: CheckBoxProps) => {
  return (
    <StyledCheckbox
      control={<Checkbox disableRipple={true} onChange={onChange} />}
      {...props}
    />
  );
};

export default CheckBox;

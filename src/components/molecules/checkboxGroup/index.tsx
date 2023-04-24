import { Checkbox, FormGroup } from "@mui/material";
import CheckBox from "../../atoms/Checkbox";
import { TypographyComponent } from "../../atoms/typography";
interface CheckboxGroupProps {
  items: {
    label: string;
    value: string;
  }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: {};
  typographyStyle?: React.CSSProperties;
  id?: string;
}
export const CheckboxGroup = ({
  items,
  onChange,
  sx,
  typographyStyle,
  id,
}: CheckboxGroupProps) => {
  return (
    <div data-testid="checkboxes">
      <div>
        <FormGroup sx={sx} id={id}>
          {items.map((item) => (
            <div key={item.label}>
              <CheckBox
                control={<Checkbox />}
                label={
                  <TypographyComponent variant="caption2" sx={typographyStyle}>
                    {item.label}
                  </TypographyComponent>
                }
                value={item.value}
                sx={{ height: "36px" }}
                onChange={onChange}
              />
            </div>
          ))}
        </FormGroup>
      </div>
    </div>
  );
};

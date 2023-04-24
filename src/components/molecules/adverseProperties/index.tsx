import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
interface AdversePropertiesProps {
  property: string;
  value: string | null;
}
export const AdverseProperties = ({
  property,
  value,
}: AdversePropertiesProps) => {
  return (
    <div data-testid="property">
      <TypographyComponent
        variant="caption"
        sx={{ color: theme.palette.textColor.highEmphasis }}
      >
        {property + ": "}
      </TypographyComponent>
      <TypographyComponent
        variant="caption"
        sx={{ color: theme.palette.textColor.mediumEmphasis }}
      >
        {value}
      </TypographyComponent>
    </div>
  );
};

import { styled } from "@mui/material";
import attachment from "../../../../public/images/attachment.svg";
import { theme } from "../../../themes/theme";
import Icon from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/typography";
export const StyledTypography = styled(TypographyComponent)({
  color: theme.palette.textColor.mediumEmphasis,
});
interface NoticeAttachment {
  value: string;
}
export const NoticeAttachment = ({ value }: NoticeAttachment) => {
  return (
    <div data-testid="attachment">
      <Icon alt="attachment Icon" src={attachment} /> &nbsp;
      <StyledTypography variant="caption2">{value}</StyledTypography>
    </div>
  );
};

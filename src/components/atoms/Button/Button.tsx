import { ButtonSized, ButtonTyped } from "./Button.styled";
import { ButtonTypes, ButtonSizes } from "./Button.types";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: ButtonTypes;
  // primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: ButtonSizes;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default function Button({
  type = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const ButtonTypeApplied = ButtonTyped[type];
  const ButtonSizeApplied = ButtonSized[size](ButtonTypeApplied);
  return (
    <ButtonSizeApplied type="button" style={{ backgroundColor }} {...props}>
      {label}
    </ButtonSizeApplied>
  );
}

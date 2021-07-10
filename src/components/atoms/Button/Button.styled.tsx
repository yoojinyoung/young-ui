import styled, { StyledComponent } from "styled-components";
import { ButtonSizes, ButtonTypes } from "./Button.types";

/**
 * Default Button style
 */
const Button = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

/**
 * ButtonTyped
 */
const ButtonPrimary = styled(Button)`
  color: white;
  background-color: #1ea7fd;
`;

const ButtonSecondary = styled(Button)`
  color: white;
  background-color: #ccc;
`;

export const ButtonTyped: Record<
  ButtonTypes,
  StyledComponent<"button", any, {}, never>
> = {
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};

/**
 * ButtonSized
 */
const ButtonSmall = (ButtonType: StyledComponent<"button", any, {}, never>) =>
  styled(ButtonType)`
    font-size: 12px;
    padding: 10px 16px;
  `;

const ButtonMedium = (ButtonType: StyledComponent<"button", any, {}, never>) =>
  styled(ButtonType)`
    font-size: 14px;
    padding: 11px 20px;
  `;

const ButtonLarge = (ButtonType: StyledComponent<"button", any, {}, never>) =>
  styled(ButtonType)`
    font-size: 16px;
    padding: 12px 24px;
  `;

export const ButtonSized: Record<
  ButtonSizes,
  (
    ButtonType: StyledComponent<"button", any, {}, never>
  ) => StyledComponent<"button", any, {}, never>
> = {
  small: ButtonSmall,
  medium: ButtonMedium,
  large: ButtonLarge,
};

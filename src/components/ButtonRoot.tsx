import { css } from "@kuma-ui/core";

export interface ButtonRootProps {
  ripple?: boolean;
}

const styles = css`
  
`;

export const ButtonRoot = ({
  ripple = true,
}: ButtonRootProps) => {
  return (
    <button>Click me</button>
  );
};

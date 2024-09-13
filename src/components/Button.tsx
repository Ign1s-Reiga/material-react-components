export interface ButtonProps {
  /**
   * Specifies the variant of the button.
   */
  variant?: 'text' | 'outlined' | 'contained';
}


export const Button = ({
  variant = 'text',
}: ButtonProps) => {
  return (
    <button>Click me</button>
  )
};

export interface ButtonProps {
  /**
   * Specifies the variant of the button.
   */
  variant?: 'text' | 'outlined' | 'contained';
}

const styles = {
  
}

export const Button = ({
  variant = 'text',
}: ButtonProps) => {
  return (
    <button>Click me</button>
  )
};

export interface ButtonProps {
  type?: 'button' | 'submit';
  color?: 'primary';
  handleClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

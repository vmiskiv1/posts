export interface InputTextProps {
  title?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name?: string;
  id?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
}

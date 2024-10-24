export interface MCEditorProps {
  name: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
  error?: string;
}

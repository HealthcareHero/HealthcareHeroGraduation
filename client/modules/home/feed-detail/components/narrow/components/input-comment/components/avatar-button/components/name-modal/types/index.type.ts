export interface NameModalProps {
  name: string | null;
  show: boolean;
  onSave: (name: string) => any;
  onCancel: () => void;
}

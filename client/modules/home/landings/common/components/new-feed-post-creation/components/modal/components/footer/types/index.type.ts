export interface FooterProps {
  onReset: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  disabled: boolean;
}
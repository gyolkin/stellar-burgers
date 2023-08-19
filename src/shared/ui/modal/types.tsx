export interface ModalProps extends React.PropsWithChildren {
  heading?: string;
  className?: string;
  onClose: () => void;
}

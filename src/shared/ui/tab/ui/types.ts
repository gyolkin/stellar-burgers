export interface TabProps extends React.PropsWithChildren {
  active: boolean;
  value: string;
  onClick: (value: string) => void;
}

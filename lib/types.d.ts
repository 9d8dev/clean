type NavProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

type AlaCarteStateObject = {
  engine?: boolean;
  leather?: boolean;
  fabric?: boolean;
  odor?: boolean;
  waxing?: boolean;
  [key: string]: boolean;
};

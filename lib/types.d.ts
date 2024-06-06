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

type AlaCarteServiceValues = {
  engine: string;
  leather: string;
  fabric: string;
  odor: string;
  waxing: string;
};

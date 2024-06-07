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

type ItemizedAlaCarteType = {
  item: keyof AlaCarteStateObject;
  min: number;
  max: number;
};

type ItemizedListType = {
  package: {
    name: PackageType;
    price: number;
  };
  alacarte: ItemizedAlaCarteType[];
};

type TotalCostEstimateType = {
  minPrice: number;
  maxPrice: number;
  itemizedList: ItemizedListType;
};

type PackagePrices = {
  [key: string]: number;
};

type AlaCartePrices = {
  [key: string]: {
    min: number;
    max: number;
  };
};

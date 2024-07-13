const packagePrices: PackagePrices = {
  "Interior & Exterior": 450,
  Interior: 225,
  Exterior: 275,
  "Maintenance cleaning": 150,
};

const alacartePrices: AlaCartePrices = {
  engine: {
    min: 65,
    max: 180,
  },
  leather: {
    min: 75,
    max: 150,
  },
  fabric: {
    min: 100,
    max: 150,
  },
  odor: {
    min: 75,
    max: 75,
  },
  waxing: {
    min: 100,
    max: 175,
  },
};

export function calculateTotalCostEstimate(
  selectedPackage: string | null,
  alacarte: AlaCarteStateObject
): TotalCostEstimateType | undefined {
  if (!selectedPackage) return undefined;

  const packagePrice = packagePrices[selectedPackage as keyof PackagePrices];

  let minPrice = packagePrice;
  let maxPrice = packagePrice;

  const itemizedList: ItemizedListType = {
    package: {
      name: selectedPackage,
      price: packagePrice,
    },
    alacarte: [],
  };

  Object.keys(alacarte).forEach((item) => {
    if (alacarte[item]) {
      const itemPrice = alacartePrices[item];
      minPrice += itemPrice.min;
      maxPrice += itemPrice.max;
      itemizedList.alacarte.push({
        item: item as keyof AlaCarteStateObject,
        min: itemPrice.min,
        max: itemPrice.max,
      });
    }
  });

  return {
    minPrice,
    maxPrice,
    itemizedList,
  };
}

type StreetType = {
  title: string;
}

type AddressHouseType = {
  number: number;
  street: StreetType;
}

type AddressGovernmentType = {
  street: StreetType;
}

export type GovernmentBuildingsType = {
  type: 'Hospital' | 'Fire-Station';
  budget: number;
  staffCount: number;
  address: AddressGovernmentType;
}

export type HouseType = {
  buildedAt: number;
  repaired: boolean;
  address: AddressHouseType;
}

export type CityType = {
  title: string;
  houses: Array<HouseType>;
  governmentBuildings: Array<GovernmentBuildingsType>;
  citizensNumber: number;
}
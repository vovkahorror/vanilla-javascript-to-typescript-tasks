type StreetType = {
  title: string;
}

type AddressType = {
  number: number;
  street: StreetType;
}

type GovernmentBuildingsType = {
  type: 'Hospital' | 'Fire-Station';
  budget: number;
  staffCount: number;
  address: AddressType;
}

type HouseType = {
  buildedAt: number;
  repaired: boolean;
  address: AddressType;
}

export type CityType = {
  title: string;
  houses: Array<HouseType>;
  governmentBuildings: Array<GovernmentBuildingsType>;
  citizensNumber: number;
}
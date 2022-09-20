type LocalCityType = {
  title: string;
  country: string;
}
type AddressType = {
  streetTittle: string;
  city: LocalCityType;
}
type TechType = {
  id: number;
  title: string;
}
export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: Array<TechType>;
}

const student: StudentType = {
  id: 1,
  name: 'Volodymyr',
  age: 30,
  isActive: false,
  address: {
    streetTittle: 'Komkova, 73',
    city: {
      title: 'Kherson',
      country: 'Ukraine',
    }
  },
  technologies: [
    {
      id: 1,
      title: 'HTML'
    },
    {
      id: 2,
      title: 'CSS'
    },
    {
      id: 3,
      title: 'JS'
    },
    {
      id: 4,
      title: 'TS'
    },
    {
      id: 5,
      title: 'React'
    },
  ]
}
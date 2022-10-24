export type UserType = {
    name: string;
    hair: number;
    address: {
        city: string;
        house?: number;
    }
}

export type LaptopType = {
    title: string;
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType;
}

export type UserWithBooksType = UserType & {
    books: string[];
}

type CompanyType = {
    id: number;
    title: string;
}

export type UserWithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    };

    return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city,
        },
    };
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop,
        },
    };
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {
        ...u,
        books: [...u.books, ...newBooks],
    };
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(el => el === oldBook ? newBook : el),
    };
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter(el => el !== bookForDelete),
    };
}

export function updateCompanyTitle(u: UserWithLaptopType & UserWithCompaniesType, companyID: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(el => el.id === companyID ? {...el, title: newTitle} : el),
    };
}

export function updateCompanyTitle2(
    companies: any,
    userName: string,
    companyID: number,
    newTitle: string,
) {
    const companyCopy = {...companies};
    companyCopy[userName] = companyCopy[userName].map((c: CompanyType) => c.id === companyID ? {
        ...c,
        title: newTitle,
    } : c);
    return companyCopy;
}
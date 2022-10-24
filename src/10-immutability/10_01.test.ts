import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType,
} from "./10_01";

test('reference type test', () => {
    const user: UserType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
        },
    };

    const prettyUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(20);
    expect(prettyUser.hair).toBe(10);
    expect(prettyUser.address).toBe(user.address);
});

test('change address', () => {
    const user: UserWithLaptopType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
            house: 10,
        },
        laptop: {
            title: 'Hewlett-Packard',
        },
    };

    const movedUser = moveUser(user, 'Khmelnytskyi');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Khmelnytskyi');
});

test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
            house: 10,
        },
        laptop: {
            title: 'Hewlett-Packard',
        },
    };

    const userCopy = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).not.toBe(userCopy.laptop);
    expect(userCopy.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Hewlett-Packard');
});

test('add new books to user', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
            house: 10,
        },
        laptop: {
            title: 'Hewlett-Packard',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books[5]).toBe('rest api');
    expect(user.books.length).toBe(4);
    expect(userCopy.books.length).toBe(6);
});

test('update js to ts', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
            house: 10,
        },
        laptop: {
            title: 'Hewlett-Packard',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('ts');
    expect(user.books.length).toBe(4);
    expect(userCopy.books.length).toBe(4);
});

test('remove js book', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
            house: 10,
        },
        laptop: {
            title: 'Hewlett-Packard',
        },
        books: ['css', 'html', 'js', 'react'],
    };

    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('react');
    expect(user.books.length).toBe(4);
    expect(userCopy.books.length).toBe(3);
});

test('update company', () => {
    const user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Vova',
        hair: 20,
        address: {
            city: 'Kherson',
            house: 10,
        },
        laptop: {
            title: 'Hewlett-Packard',
        },
        companies: [{id: 1, title: 'Foxtrot'}, {id: 2, title: 'DeLonghi'}],
    };

    const userCopy = updateCompanyTitle(user, 1, 'Allo');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies[0].title).toBe('Allo');
});

test('update company 2', () => {
    const companies = {
        Vova: [{id: 1, title: 'Foxtrot'}, {id: 2, title: 'DeLonghi'}],
        Nastya: [{id: 1, title: 'Paritet'}, {id: 2, title: 'Electric bros.'}],
    };

    const copy = updateCompanyTitle2(companies, 'Vova', 1, 'Eldorado');

    expect(copy['Vova']).not.toBe(companies['Vova']);
    expect(copy['Nastya']).toBe(companies['Nastya']);
    expect(copy['Vova'][0].title).toBe('Eldorado');
});
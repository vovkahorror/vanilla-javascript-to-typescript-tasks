function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string;
    age: number;
}

test('big reference type test', () => {
    const user = {
        name: 'Volodymyr',
        age: 30,
    };

    increaseAge(user);

    expect(user.age).toBe(31);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
});

test('array reference test', () => {
    const users = [
        {
            name: 'Volodymyr',
            age: 30,
        },
        {
            name: 'Anastasiia',
            age: 29,
        },
    ];

    const admins = users;

    admins.push({name: 'Pavlik', age: 39});

    expect(users[2]).toEqual({name: 'Pavlik', age: 39});

});

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
});

test('reference type test', () => {
    const address = {
        title: 'Kherson',
    };

    const user = {
        name: 'Volodymyr',
        age: 30,
        address: address,
    };

    const user2 = {
        name: 'Anastasiia',
        age: 29,
        address: user.address,
    };

    address.title = 'Khmelnytsky';

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe('Khmelnytsky');
    expect(user2.address.title).toBe('Khmelnytsky');
});

test('reference type array test', () => {
    const address = {
        title: 'Kherson',
    };

    const user = {
        name: 'Volodymyr',
        age: 30,
        address: address,
    };

    const user2 = {
        name: 'Anastasiia',
        age: 29,
        address: address,
    };

    const users = [user, user2, {name: 'Pavlik', age: 39, address: address}];
    const admins = [user, user2];

    admins[0].name = 'Vova';

    expect(admins[0].name).toBe('Vova');
    expect(users[0].name).toBe('Vova');
    expect(user.name).toBe('Vova');
});
export {};

type UsersType = {
    [key: string]: { id: number, name: string };
}

let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Vova'},
        '3232312': {id: 3232312, name: 'Nastya'},
        '1212': {id: 1212, name: 'Sasha'},
        '1': {id: 1, name: 'Pavlik'},
    };
});

test('should update corresponding user', () => {
    users['1'].name = 'Pavlo';

    expect(users['1'].name).toBe('Pavlo');
    expect(users['1']).toEqual({id: 1, name: 'Pavlo'});
});

test('should delete corresponding user', () => {
    delete users['1'];

    expect(users['1']).toBeUndefined();
});
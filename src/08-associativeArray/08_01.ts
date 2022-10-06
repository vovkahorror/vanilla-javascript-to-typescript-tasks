export const userObj = {
    '0': 'Vova',
    '1': 'Nastya',
    '2': 'Sasha',
    '3': 'Pavlik',
};

type UsersType = {
    [key: string]: { id: number, name: string };
}

export const users: UsersType = {
    '101': {id: 101, name: 'Vova'},
    '3232312': {id: 3232312, name: 'Nastya'},
    '1212': {id: 1212, name: 'Sasha'},
    '1': {id: 1, name: 'Pavlik'},
};

let user = {id: 100500, name: 'Nila'};
users[user.id] = user;
delete users[user.id];

export const usersArray = [
    {id: 101, name: 'Vova'},
    {id: 3232312, name: 'Nastya'},
    {id: 1212, name: 'Sasha'},
    {id: 1, name: 'Pavlik'},
];

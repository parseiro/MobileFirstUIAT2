import {createAvatar} from '@dicebear/core';
import {lorelei} from '@dicebear/collection';

/* This is a user service. Every user has an ID and a name. */

export interface User {
    id: number;
    name: string;
}

// This function returns a random user avatar url
export function getUserAvatarUrl(user: User): string {
    const avatar = createAvatar(lorelei, {
        seed: user.name,
        flip: Math.random() > 0.5,
        // ... other options
    });
    return avatar.toString();
}

// This is a list of users.
const users: User[] = [
    {id: 1, name: "Pedro Vieira"},
    {id: 2, name: "João Silva"},
    {id: 3, name: "Maria Santos"},
    {id: 4, name: "Ana Sousa"},
    {id: 5, name: "Rui Costa"},
    {id: 6, name: "Sofia Carvalho"},
    {id: 7, name: "Miguel Almeida"},
    {id: 8, name: "Joana Pereira"},
    {id: 9, name: "Ricardo Gomes"},
    {id: 10, name: "Catarina Martins"},
];

const friends: number[][] = [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 8],
    [1, 9],
    [1, 10],
    [2, 3],
    [2, 10],
    [3, 4],
    [3, 5],
    [3, 6],
    [4, 8],
    [4, 9],
    [4, 10],
    [5, 6],
    [5, 7],
    [5, 9],
    [5, 10],
    [6, 7],
    [6, 8],
    [6, 10],
    [7, 8],
    [7, 9],
    [7, 10],
    [8, 9],
    [9, 10],
];

export function getAllUsers(): User[] {
    return [...users];
}

export function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}

export function getFriendsOfUser(userId: number): User[] {
    const friendsOfUser = friends
        .filter(friend => friend[0] === userId || friend[1] === userId)
        .map(friend => friend[0] === userId ? friend[1] : friend[0]);
    return users.filter(user => friendsOfUser.includes(user.id));
}

export function commonFriends(userId1: number, userId2: number): User[] {
    const friendsOfUser1 = getFriendsOfUser(userId1);
    const friendsOfUser2 = getFriendsOfUser(userId2);
    return friendsOfUser1.filter(user => friendsOfUser2.includes(user));
}

// Returns other users who are not friends but who have common friends in common with the user
export function getPotentialFriends(userId: number): User[] {
    const friendsOfUser = getFriendsOfUser(userId);
    const potentialFriends = users.filter(user => !friendsOfUser.includes(user) && user.id !== userId);
    return potentialFriends.filter(user => commonFriends(userId, user.id).length > 0);
}

// Returns the friend in common between two users which has the most friends in common with the user
export function getBestFriendBetweenTwoUsers(userId: number, userId2: number): User | null {
    const commonFriendsOfUser = commonFriends(userId, userId2);
    if (commonFriendsOfUser.length === 0) return null;
    return commonFriendsOfUser.reduce((bestFriend, currentFriend) => {
        const commonFriendsOfCurrentFriend = commonFriends(userId, currentFriend.id);
        return commonFriendsOfCurrentFriend.length > commonFriendsOfUser.length ? currentFriend : bestFriend;
    });
}

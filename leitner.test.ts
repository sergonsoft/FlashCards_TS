import { expect, test } from 'vitest'
import {
    Pair,
    User,
    Deck,
    getNextTermine
} from './leitner'



test('Pair type', () => {
    var pair:Pair = { termine: "termine", definition: "definition"};
    expect(pair.termine === 'termine' && pair.definition === 'definition').toBeTruthy
})

test('Get word', () => {
    var user: User = getTestUser();
    let currentDeckSize = user.currentDeck.length
    var termine = getNextTermine(user)!; // if an undefined here, than getTestUser() failed
    expect(termine == user.currentPair!.termine
        && user.currentDeck.length == currentDeckSize - 1
    ).toBeTruthy
})

test("Check deck generation", () => {
    let n = 10;
    var deck: Deck = generateDeckOf(n);
    expect(deck.length).toBe(n);
})

function generateDeckOf(n:number):Deck {
    var deck: Deck = [];
    for (let i:number = 0; i<n; i++) {
        deck.push({
            termine: generateRandomString(10),
            definition: generateRandomString(10)
        })
    }
    return deck;
}

function getTestUser(): User {
    let user:User = {
        id: 0,
        currentPair: null,
        currentDeck: generateDeckOf(15),
        boxes: [
            [], [], [], [], [], [],
            [], [], [], [], [], [],
        ],
        retiredDeck: []
    }

    console.log(user)

    return user;
}

function generateRandomString(length:number, charset:string | null = null):string {
    const defaultCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const characters = charset || defaultCharset;
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;    
}
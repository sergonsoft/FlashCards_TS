export type Pair = {
    termine: string,
    definition: string
}

export type Deck = Pair[]

export type User = {
    id: 0,
    currentPair: Pair | null,
    currentDeck: Deck,
    boxes: Array<Deck>[],
    retiredDeck: Deck
}

export function getNextTermine(user: User): string | null {
    var pair = user.currentDeck.shift();
    user.currentPair = pair != undefined ? pair : null;
    return pair != undefined ? pair.termine : null;
}
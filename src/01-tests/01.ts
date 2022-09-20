export function sum(a: number, b: number) {
    return a + b;
}

export function multi(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ');
    return words.filter(word => word !== '' && word !== '-').map(word => word
        .replace('!', '')
        .replace('.', '')
        .replace(',', ''));
}
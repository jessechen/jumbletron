function jumbletron() {
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, pre, span, a');

    for (let textElement of textElements) {
        const result = [];
        const words = textElement.innerText.trim().split(' ');
        for (let word of words) {
            result.push(jumble(word));
        }
        textElement.innerText = result.join(' ');
    }
}

function jumble(word) {
    if (word.length <= 3) {
        return word;
    }

    let swap = '';
    let trailingChar = '';
    const chars = word.split('');
    if ([',', '.', ';', ':'].includes(chars[chars.length - 1])) {
        trailingChar = chars[chars.length - 1];
        chars.length -= 1;
    }
    for (let i = 1; i <= chars.length - 2; i++) {
        const swapIndex = Math.floor(Math.random() * (chars.length - i - 1) + i);
        swap = chars[swapIndex];
        chars[swapIndex] = chars[i];
        chars[i] = swap;
    }
    return chars.join('') + trailingChar;
}

jumbletron();
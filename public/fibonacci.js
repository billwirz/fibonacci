function createSequence(length) {
    lengthNumber = Number(length);
    if (lengthNumber <= 0)
        return '';

    let sequence = [];

    for (let n = 0; n < lengthNumber; n++) {
        if (n < 2)
            sequence.push(n);
        else {
            sequence.push(sequence[n - 1] + sequence[n - 2]);
        }
    }

    return sequence.toString();
}
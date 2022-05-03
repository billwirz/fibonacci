function createSequence(length) {
    if (typeof length !== Number)
        return '';

    let sequence = [];

    for (let n = 0; n < length; n++) {
        if (n < 2)
            sequence.push(n);
        else {
            sequence.push(sequence[n - 1] + sequence[n - 2]);
        }
    }

    console.log('sequence', sequence);

    return sequence.toString();
}
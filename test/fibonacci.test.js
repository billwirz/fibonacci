import createSequence from "../public/fibonacci.js";

describe('fibonacci sequence generator', () => {
    it('should print out empty string if n === undefined', () => {
        expect(createSequence(undefined)).toBe('');
    });

    it('should print out empty string if n === NaN', () => {
        expect(createSequence(NaN)).toBe('');
    });

    it('should print out empty string if n is non-numeric string', () => {
        expect(createSequence('a')).toBe('');
    });

    it('should print out empty string if n === 0', () => {
        expect(createSequence(0)).toBe('');
    });

    it('should print out empty string if n < 0', () => {
        expect(createSequence(-1)).toBe('');
    });

    it('should print out 0 if n === 1', () => {
        expect(createSequence(1)).toBe('0');
    });

    it('should print out 0, 1 if n === 2', () => {
        expect(createSequence(2)).toBe('0, 1');
    });

    it('should print out 0, 1, 1 if n === 3', () => {
        expect(createSequence(3)).toBe('0, 1, 1');
    });

    it('should print out 0, 1, 1, 2 if n === 4', () => {
        expect(createSequence(4)).toBe('0, 1, 1, 2');
    });

    it('should print out 100 comma-separated values if n === 100', () => {
        const sequence = createSequence(100).split(',');

        expect(sequence.length).toBe(100);
    });

    it('should print out max. of 1000 comma-separated values if n > 1000', () => {
        const sequence = createSequence(1001).split(',');

        expect(sequence.length).toBe(1000);
    });
});
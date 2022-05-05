import createSequence from "../public/fibonacci.js";

describe('fibonacci sequence generator', () => {
    it('should print out 0 if n===1', () => {
        expect(createSequence(1)).toBe('0');
    });
});
import { describe, expect, it } from 'vitest';
import { quadratic, isCorrect, parseProgress } from './bookar';
describe('MAT-FQ demonstration', () => {
  it('has roots at x = 1 and x = 3', () => { expect(quadratic(1)).toBe(0); expect(quadratic(3)).toBe(0); });
  it('has its vertex at (2, −1)', () => { expect(quadratic(2)).toBe(-1); expect(quadratic(1.9)).toBeGreaterThan(-1); expect(quadratic(2.1)).toBeGreaterThan(-1); });
  it('is symmetric about x = 2', () => { expect(quadratic(0)).toBe(quadratic(4)); expect(quadratic(1)).toBe(quadratic(3)); });
  it('accepts only −1 as the response to f(2)', () => { expect(isCorrect(-1)).toBe(true); for (const value of [3, 1, -3]) expect(isCorrect(value)).toBe(false); });
});
describe('Local demonstration progress', () => {
  it('restores the last practice activity and response', () => {
    const saved = { version: 1, activity: 'practice', lessonVisited: true, answer: -1, checked: true };
    expect(parseProgress(JSON.stringify(saved))).toEqual(saved);
  });
  it('rejects invalid records without breaking the prototype', () => {
    for (const raw of [null, '{bad', '{}', JSON.stringify({ version: 1, activity: 'practice', lessonVisited: true, answer: 900, checked: true }), JSON.stringify({ version: 1, activity: 'practice', lessonVisited: true, answer: null, checked: true })]) expect(parseProgress(raw)).toBeNull();
  });
});
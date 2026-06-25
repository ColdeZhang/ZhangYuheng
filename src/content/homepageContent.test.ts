import { describe, expect, it } from 'vitest';
import { getYearsOfExperience, homepageContent } from './homepageContent';

describe('homepageContent', () => {
  it('uses the same keyword ids in both languages', () => {
    const zhIds = homepageContent.zh.segments
      .filter((segment) => segment.kind === 'keyword')
      .map((segment) => segment.keywordId);
    const enIds = homepageContent.en.segments
      .filter((segment) => segment.kind === 'keyword')
      .map((segment) => segment.keywordId);

    expect(enIds).toEqual(zhIds);
  });

  it('defines expansion content for every keyword', () => {
    const keywordIds = homepageContent.zh.segments
      .filter((segment) => segment.kind === 'keyword')
      .map((segment) => segment.keywordId);

    for (const id of keywordIds) {
      expect(homepageContent.keywords[id]).toBeDefined();
      expect(homepageContent.keywords[id].mode).toMatch(/inline|crossSection/);
      expect(homepageContent.keywords[id].content.zh.length).toBeGreaterThan(0);
      expect(homepageContent.keywords[id].content.en.length).toBeGreaterThan(0);
    }
  });

  it('calculates work experience from March 2022 with two decimal places', () => {
    expect(getYearsOfExperience(new Date('2026-06-25T00:00:00+08:00'))).toBe('4.32');
  });
});

import { ISociety, SOCIETIES_ALL, SOCIETIES, checkForSocErrors } from './societies';

describe('Societies Data', () => {
  describe('ISociety Interface', () => {
    it('should have the correct structure for a society', () => {
      const sampleSociety: ISociety = {
        symbol: 'Ar',
        name: 'Aerial Robotics Kharagpur',
        year: 2013,
        size: 'M',
        tsg_recognized: true,
        description: 'Sample description',
        block: 'T',
        links: {
          website: 'https://example.com',
          fb: 'https://facebook.com/example'
        }
      };

      expect(sampleSociety).toHaveProperty('symbol');
      expect(sampleSociety).toHaveProperty('name');
      expect(sampleSociety).toHaveProperty('year');
      expect(sampleSociety).toHaveProperty('size');
      expect(sampleSociety).toHaveProperty('tsg_recognized');
      expect(sampleSociety).toHaveProperty('links');
      expect(sampleSociety).toHaveProperty('description');
      expect(sampleSociety).toHaveProperty('block');
    });
  });

  describe('SOCIETIES_ALL', () => {
    it('should be an array of societies', () => {
      expect(Array.isArray(SOCIETIES_ALL)).toBe(true);
      expect(SOCIETIES_ALL.length).toBeGreaterThan(0);
    });

    it('should have valid society objects', () => {
      for (const society of SOCIETIES_ALL) {
        expect(society).toHaveProperty('symbol');
        expect(typeof society.symbol).toBe('string');
        expect(society.symbol.length).toBeGreaterThan(0);

        expect(society).toHaveProperty('name');
        expect(typeof society.name).toBe('string');
        expect(society.name.length).toBeGreaterThan(0);

        expect(society).toHaveProperty('year');
        expect(typeof society.year).toBe('number');
        expect(society.year).toBeGreaterThan(0);

        expect(society).toHaveProperty('size');
        expect(['S', 'M', 'L', 'XL', 'NA']).toContain(society.size);

        expect(society).toHaveProperty('tsg_recognized');
        expect(typeof society.tsg_recognized).toBe('boolean');

        expect(society).toHaveProperty('links');
        expect(typeof society.links).toBe('object');
        
        expect(society).toHaveProperty('description');
        expect(typeof society.description).toBe('string');
        expect(society.description.length).toBeGreaterThan(0);

        expect(society).toHaveProperty('block');
        expect(['T', 'TO', 'O', 'W', 'C', 'CC', 'U']).toContain(society.block);

        // Check if inactive property exists, it should be boolean
        if ('inactive' in society) {
          expect(typeof society.inactive).toBe('boolean');
        }
      }
    });

    it('should have unique symbols', () => {
      const symbols = SOCIETIES_ALL.map(soc => soc.symbol);
      const uniqueSymbols = new Set(symbols);
      expect(symbols.length).toBe(uniqueSymbols.size);
    });

    it('should have valid social links', () => {
      const validSocials = ['fb', 'insta', 'metawiki', 'linkedin', 'website', 'slack', 'twitter', 'email', 'youtube'];
      
      for (const society of SOCIETIES_ALL) {
        for (const social in society.links) {
          expect(validSocials).toContain(social);
          expect(typeof society.links[social as keyof typeof society.links]).toBe('string');
        }
      }
    });

    it('should have valid block values', () => {
      const validBlocks = ['T', 'TO', 'O', 'W', 'C', 'CC', 'U'];
      
      for (const society of SOCIETIES_ALL) {
        expect(validBlocks).toContain(society.block);
      }
    });
  });

  describe('checkForSocErrors', () => {
    it('should not throw an error for the valid SOCIETIES_ALL array', () => {
      expect(() => checkForSocErrors(SOCIETIES_ALL)).not.toThrow();
    });

    it('should throw an error for a society with an empty symbol', () => {
      const invalidSocieties: ISociety[] = [
        {
          symbol: '',
          name: 'Test Society',
          year: 2020,
          size: 'S',
          tsg_recognized: true,
          description: 'Test description',
          block: 'T',
          links: { fb: 'https://facebook.com/test' }
        }
      ];

      expect(() => checkForSocErrors(invalidSocieties)).toThrow();
    });

    it('should throw an error for duplicate symbols', () => {
      const invalidSocieties: ISociety[] = [
        {
          symbol: 'TS',
          name: 'Test Society 1',
          year: 2020,
          size: 'S',
          tsg_recognized: true,
          description: 'Test description 1',
          block: 'T',
          links: { fb: 'https://facebook.com/test1' }
        },
        {
          symbol: 'TS',
          name: 'Test Society 2',
          year: 2021,
          size: 'S',
          tsg_recognized: true,
          description: 'Test description 2',
          block: 'T',
          links: { fb: 'https://facebook.com/test2' }
        }
      ];

      expect(() => checkForSocErrors(invalidSocieties)).toThrow();
    });

    it('should throw an error for a society with no links (if not inactive)', () => {
      const invalidSocieties: ISociety[] = [
        {
          symbol: 'NS',
          name: 'No Links Society',
          year: 2020,
          size: 'S',
          tsg_recognized: true,
          description: 'Test description',
          block: 'T',
          links: {}
        }
      ];

      expect(() => checkForSocErrors(invalidSocieties)).toThrow();
    });

    it('should not throw an error for an inactive society with no links', () => {
      const validSocieties: ISociety[] = [
        {
          symbol: 'NS',
          name: 'No Links Society',
          year: 2020,
          size: 'S',
          tsg_recognized: true,
          description: 'Test description',
          block: 'T',
          links: {},
          inactive: true
        }
      ];

      expect(() => checkForSocErrors(validSocieties)).not.toThrow();
    });

    it('should not throw an error for a society with at least one link', () => {
      const validSocieties: ISociety[] = [
        {
          symbol: 'SL',
          name: 'Single Link Society',
          year: 2020,
          size: 'S',
          tsg_recognized: true,
          description: 'Test description',
          block: 'T',
          links: { fb: 'https://facebook.com/test' }
        }
      ];

      expect(() => checkForSocErrors(validSocieties)).not.toThrow();
    });
  });

  describe('SOCIETIES (active societies)', () => {
    it('should be an array', () => {
      expect(Array.isArray(SOCIETIES)).toBe(true);
    });

    it('should be a subset of SOCIETIES_ALL', () => {
      expect(SOCIETIES.length).toBeLessThanOrEqual(SOCIETIES_ALL.length);
    });

    it('should not contain inactive societies', () => {
      for (const society of SOCIETIES) {
        expect(society.inactive).not.toBe(true);
      }
    });

    it('should be sorted by year', () => {
      for (let i = 0; i < SOCIETIES.length - 1; i++) {
        expect(SOCIETIES[i].year).toBeLessThanOrEqual(SOCIETIES[i + 1].year);
      }
    });

    it('should contain all non-inactive societies from SOCIETIES_ALL', () => {
      const inactiveSocieties = SOCIETIES_ALL.filter(soc => soc.inactive === true);
      const activeSocieties = SOCIETIES_ALL.filter(soc => !soc.inactive);
      
      expect(SOCIETIES.length).toBe(activeSocieties.length);
      
      // Check that all active societies from SOCIETIES_ALL are in SOCIETIES
      for (const activeSoc of activeSocieties) {
        expect(SOCIETIES).toContainEqual(activeSoc);
      }
      
      // Check that no inactive society is in SOCIETIES
      for (const inactiveSoc of inactiveSocieties) {
        expect(SOCIETIES).not.toContainEqual(inactiveSoc);
      }
    });
  });
});
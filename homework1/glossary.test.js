import { describe, it, expect } from 'vitest';
import { filterGlossaryEntries, glossaryEntries } from './glossary.js';

describe('filterGlossaryEntries', () => {
    it('should return all entries when query is empty', () => {
        const result = filterGlossaryEntries(glossaryEntries, '');
        expect(result).toEqual(glossaryEntries);
        expect(result.length).toBe(8);
    });

    it('should filter by term (case-insensitive)', () => {
        // "api" matches multiple entries (term "API" and descriptions containing "api")
        const result = filterGlossaryEntries(glossaryEntries, 'api');
        expect(result.length).toBeGreaterThan(0);
        expect(result.map(e => e.term)).toContain('API');
        
        // "rest" should match only the REST entry (case-insensitive)
        const result2 = filterGlossaryEntries(glossaryEntries, 'REST');
        expect(result2.length).toBe(1);
        expect(result2[0].term).toBe('REST');
        
        // "graphql" should match only the GraphQL entry (case-insensitive)
        const result3 = filterGlossaryEntries(glossaryEntries, 'graphql');
        expect(result3.length).toBe(1);
        expect(result3[0].term).toBe('GraphQL');
    });

    it('should filter by description keywords', () => {
        const result = filterGlossaryEntries(glossaryEntries, 'containerization');
        expect(result.length).toBe(1);
        expect(result[0].term).toBe('Docker');
    });

    it('should filter by tags', () => {
        const result = filterGlossaryEntries(glossaryEntries, 'devops');
        expect(result.length).toBe(2);
        expect(result.map(e => e.term)).toContain('Docker');
        expect(result.map(e => e.term)).toContain('CI/CD');
    });

    it('should return empty array when no matches found', () => {
        const result = filterGlossaryEntries(glossaryEntries, 'nonexistentterm');
        expect(result).toEqual([]);
        expect(result.length).toBe(0);
    });

    it('should handle whitespace in query', () => {
        const result1 = filterGlossaryEntries(glossaryEntries, '  docker  ');
        const result2 = filterGlossaryEntries(glossaryEntries, 'docker');
        expect(result1).toEqual(result2);
    });

    it('should match partial terms', () => {
        const result = filterGlossaryEntries(glossaryEntries, 'script');
        expect(result.length).toBe(2);
        expect(result.map(e => e.term)).toContain('JavaScript');
        expect(result.map(e => e.term)).toContain('TypeScript');
    });
});


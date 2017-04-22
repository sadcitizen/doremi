import { expect } from 'chai';
import extract from '.';

describe('string/extract()', () => {
    it('Extracts values', () => {
        const result = {
            user: 'bill',
            host: 'gates',
            domain: 'com'
        };

        expect(extract('bill@gates.com', '${user}@${host}.${domain}')).to.deep.equal(result);
    });

    it('Works with nested values', () => {
        const post = {
            slug: 'hello-world',
            date: {
                year: '2015',
                month: '08',
                day: '21'
            }
        };
        const target = '/2015/08/21/hello-world.html';
        const pattern = '/${date.year}/${date.month}/${date.day}/${slug}.html';

        expect(extract(target, pattern)).to.deep.equal(post);
    });

    it('Works with custom separators', () => {
        const result = {
            user: 'bill',
            host: 'gates',
            domain: 'com'
        };

        expect(extract('bill@gates.com', '{user}@{host}.{domain}', ['{', '}'])).to.deep.equal(result);
        expect(extract('bill@gates.com', '$user$@$host$.$domain$', ['$', '$'])).to.deep.equal(result);
        expect(extract('bill@gates.com', '{%user%}@{%host%}.{%domain%}', ['{%', '%}'])).to.deep.equal(result);
    });
});

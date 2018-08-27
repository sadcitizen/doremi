import extract from '.';

describe('string/extract()', () => {
    test('extracts values', () => {
        const result = {
            user: 'bill',
            host: 'gates',
            domain: 'com'
        };

        expect(extract('bill@gates.com', '${user}@${host}.${domain}')).toEqual(result); // eslint-disable-line no-_template-curly-in-string
    });

    test('works with nested values', () => {
        const post = {
            slug: 'hello-world',
            date: {
                year: '2015',
                month: '08',
                day: '21'
            }
        };
        const target = '/2015/08/21/hello-world.html';
        const pattern = '/${date.year}/${date.month}/${date.day}/${slug}.html'; // eslint-disable-line no-_template-curly-in-string

        expect(extract(target, pattern)).toEqual(post);
    });

    test('works with custom separators', () => {
        const result = {
            user: 'bill',
            host: 'gates',
            domain: 'com'
        };

        expect(extract('bill@gates.com', '{user}@{host}.{domain}', ['{', '}'])).toEqual(result);
        expect(extract('bill@gates.com', '$user$@$host$.$domain$', ['$', '$'])).toEqual(result);
        expect(extract('bill@gates.com', '{%user%}@{%host%}.{%domain%}', ['{%', '%}'])).toEqual(result);
    });
});

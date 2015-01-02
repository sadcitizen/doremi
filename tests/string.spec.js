var string = require('../src/string');
var expect = require('chai').expect;

describe('string.camelize()', function () {
    it('Should convert string to camel case', function () {
        expect(string.camelize('lorem ipsum dolor')).to.equal('loremIpsumDolor');
        expect(string.camelize('    lorem   ipsum   dolor   ')).to.equal('loremIpsumDolor');
        expect(string.camelize('--lorem--ipsum--dolor--')).to.equal('loremIpsumDolor');
        expect(string.camelize('__lorem__ipsum__dolor__')).to.equal('loremIpsumDolor');
        expect(string.camelize(123456)).to.equal('123456');
    });

    it('Should work with blank strings', function () {
        expect(string.camelize('')).to.equal('');
        expect(string.camelize('       ')).to.equal('');
        expect(string.camelize('    \n   ')).to.equal('');
    });

    it('Should treat null and undefined as blank string', function () {
        expect(string.camelize()).to.equal('');
        expect(string.camelize(void 0)).to.equal('');
        expect(string.camelize(null)).to.equal('');
    });
});

describe('string.capitalize()', function () {
    it('Should capitalize a string', function () {
        expect(string.capitalize('lorem ipsum')).to.equal('Lorem ipsum');
    });

    it('Should change only first letter of a string', function () {
        expect(string.capitalize('lorem IPSUM')).to.equal('Lorem IPSUM');
    });

    it('Should work with empty strings', function () {
        expect(string.capitalize('')).to.equal('');
        expect(string.capitalize()).to.equal('');
        expect(string.capitalize(void 0)).to.equal('');
        expect(string.capitalize(null)).to.equal('');
    });
});

describe('string.chop()', function () {
    it('Should return a string chopped into pieces', function () {
        expect(string.chop('lorem ipsum', 5)).to.deep.equal(['lorem', ' ipsu', 'm']);
        expect(string.chop('lorem ipsum', 4)).to.deep.equal(['lore', 'm ip', 'sum']);
        expect(string.chop('lorem ipsum', 3)).to.deep.equal(['lor', 'em ', 'ips', 'um']);
        expect(string.chop('lorem ipsum', 2)).to.deep.equal(['lo', 're', 'm ', 'ip', 'su', 'm']);
        expect(string.chop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    it('Should work with null and undefined', function () {
        expect(string.chop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
        expect(string.chop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    it('Should treat negative step as zero', function () {
        expect(string.chop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(string.chop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });
});

describe('string.clean()', function () {
    it('Should remove all spaces', function () {
        expect(string.clean('           Hello,      World!             ')).to.equal('Hello, World!');
        expect(string.clean('                        ')).to.equal('');
    });

    it('Should remove all whitespace', function () {
        expect(string.clean('\n Hello,   \t   World!        \r     ')).to.equal('Hello, World!');
        expect(string.clean('\0 \b \t \n \v \f \r')).to.equal('');
    });
});

describe('string.contains()', function () {
    it('Should return true if string contains substring', function () {
        expect(string.contains('lorem ipsum', 'rem')).to.equal(true);
        expect(string.contains('lorem ipsum', 'i')).to.equal(true);
        expect(string.contains('lorem ipsum', 'or')).to.equal(true);
        expect(string.contains('lorem ipsum', 'sum')).to.equal(true);
    });

    it('Should return false if string does not contain substring', function () {
        expect(string.contains('lorem ipsum', '!')).to.equal(false);
        expect(string.contains('lorem ipsum', 'foo')).to.equal(false);
        expect(string.contains('lorem ipsum', 'bar')).to.equal(false);
    });

    it('Should work with empty strings', function () {
        expect(string.contains('', '')).to.equal(true);
        expect(string.contains('lorem ipsum', '')).to.equal(true);
    });

    it('Should treat null as empty string', function () {
        expect(string.contains(null, 'lorem ipsum')).to.equal(false);
        expect(string.contains(null, '')).to.equal(true);
        expect(string.contains('lorem ipsum', null)).to.equal(true);
        expect(string.contains('', null)).to.equal(true);
    });

    it('Should treat undefined as empty string', function () {
        expect(string.contains(void 0, 'lorem ipsum')).to.equal(false);
        expect(string.contains(void 0, '')).to.equal(true);
        expect(string.contains('lorem ipsum', void 0)).to.equal(true);
        expect(string.contains('', void 0)).to.equal(true);
    });

    it('Should start search at given index', function () {
        expect(string.contains('lorem ipsum', 'l', 0)).to.equal(true);
        expect(string.contains('lorem ipsum', 'i', 1)).to.equal(true);
        expect(string.contains('lorem ipsum', 'r', 3)).to.equal(false);
        expect(string.contains('lorem ipsum', 's', 300)).to.equal(false);
    });

    it('Should treat negative index as zero', function () {
        expect(string.contains('lorem ipsum', 'o', -1)).to.equal(true);
        expect(string.contains('lorem ipsum', 'o', -9)).to.equal(true);
        expect(string.contains('lorem ipsum', 'o', -10)).to.equal(true);
        expect(string.contains('lorem ipsum', 'o', -11)).to.equal(true);
    });
});

describe('string.count()', function () {
    it('Should find a substring', function () {
        expect(string.count('Hello, World!', 'l')).to.equal(3);
        expect(string.count('Hello, World!', 'll')).to.equal(1);
        expect(string.count(12345, 1)).to.equal(1);
        expect(string.count(99999, 9)).to.equal(5);
        expect(string.count(99999, 99)).to.equal(4);
    });

    it('Should not find a substring', function () {
        expect(string.count('Hello, World!', 'world')).to.equal(0);
        expect(string.count('Hello, World!', '! ')).to.equal(0);
    });

    it('Should work with null, undefined and empty strings', function () {
        expect(string.count('', 'x')).to.equal(0);
        expect(string.count('', '')).to.equal(0);
        expect(string.count(null, 'x')).to.equal(0);
        expect(string.count(void 0, 'x')).to.equal(0);
    });
});

describe('string.decapitalize()', function () {
    it('Should decapitalize a string', function () {
        expect(string.decapitalize('Lorem ipsum')).to.equal('lorem ipsum');
    });

    it('Should change only first letter of a string', function () {
        expect(string.decapitalize('Lorem IPSUM')).to.equal('lorem IPSUM');
    });

    it('Should work with empty strings', function () {
        expect(string.decapitalize('')).to.equal('');
        expect(string.decapitalize()).to.equal('');
        expect(string.decapitalize(void 0)).to.equal('');
        expect(string.decapitalize(null)).to.equal('');
    });
});

describe('string.endsWith()', function () {
    it('Should return true if string ends with another string', function () {
        expect(string.endsWith('lorem ipsum', 'ipsum')).to.equal(true);
        expect(string.endsWith('foo bar', 'bar')).to.equal(true);
        expect(string.endsWith(12345, 45)).to.equal(true);
    });

    it('Should return false if string does not ends with another string', function () {
        expect(string.endsWith('lorem ipsum', 'lorem')).to.equal(false);
        expect(string.endsWith('foo bar', 'foo')).to.equal(false);
    });

    it('Should return true if string for search is empty', function () {
        expect(string.endsWith('', '')).to.equal(true);
        expect(string.endsWith('lorem', '')).to.equal(true);
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.endsWith(void 0, 'ipsum')).to.equal(false);
        expect(string.endsWith('lorem', void 0)).to.equal(true);
        expect(string.endsWith(null, '')).to.equal(true);
        expect(string.endsWith('lorem', null)).to.equal(true);
    });
});

describe('string.escape()', function () {
    it('Should escape a string', function () {
        expect(string.escape('<p>hi!</p>')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
        expect(string.escape('<p>lorem & ipsum</p>')).to.equal('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;');
        expect(string.escape('"hi!"')).to.equal('&quot;hi!&quot;');
        /* jshint -W109 */
        expect(string.escape("'hi!'")).to.equal('&#x27;hi!&#x27;');
        /* jshint +W109 */
    });

    it('Should not escape an escaped string', function () {
        expect(string.escape('lorem &amp; ipsum')).to.equal('lorem &amp; ipsum');
        expect(string.escape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
        expect(string.escape('&#x27;hi!&#x27; & bye!')).to.equal('&#x27;hi!&#x27; &amp; bye!');
    });

    it('Should work with empty strings', function () {
        expect(string.escape('')).to.equal('');
        expect(string.escape()).to.equal('');
        expect(string.escape(void 0)).to.equal('');
        expect(string.escape(null)).to.equal('');
    });
});

describe('string.insert()', function () {
    it('Should insert a substring in a string', function () {
        expect(string.insert(', World!', 'Hello', 0)).to.equal('Hello, World!');
        expect(string.insert(', World!', 'Hello', null)).to.equal('Hello, World!');
        expect(string.insert('Hello, ', 'World!', 10)).to.equal('Hello, World!');
        expect(string.insert('Hello, Worl', 'd!', 12)).to.equal('Hello, World!');
        expect(string.insert('Hello, Worl', 'd!', '12')).to.equal('Hello, World!');
    });

    it('Should treat undefined index as zero', function () {
        expect(string.insert(', World!', 'Hello')).to.equal('Hello, World!');
        expect(string.insert(', World!', 'Hello', void 0)).to.equal('Hello, World!');
    });

    it('Should accept negative indexes', function () {
        expect(string.insert('Hello, Worl!', 'd', -1)).to.equal('Hello, World!');
        expect(string.insert('o, World!', 'Hell', -10)).to.equal('Hello, World!');
        expect(string.insert('o, World!', 'Hell', '-10')).to.equal('Hello, World!');
    });

    it('Should accept indexes large than the length of a string', function () {
        expect(string.insert('Hello, ', 'World!', 100)).to.equal('Hello, World!');
    });
});

describe('string.join()', function () {
    it('Should join strings', function () {
        expect(string.join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).to.equal('lorem ipsum dolor sit amet');
        expect(string.join('', 'h', 'e', 'l', 'lo')).to.equal('hello');
        expect(string.join('+', 1, 2, 3)).to.equal('1+2+3');
    });

    it('Should ignore null, undefined and empty strings', function () {
        expect(string.join()).to.equal('');
        expect(string.join('', '', '')).to.equal('');
        expect(string.join(' ', null, null)).to.equal('');
        expect(string.join(' ', void 0, void 0)).to.equal('');
        expect(string.join(' ', 'lorem', void 0, void 0)).to.equal('lorem');
    });
});

describe('string.lines()', function () {
    it('Should return an array of lines', function () {
        expect(string.lines('lorem\r\nipsum')).to.deep.equal(['lorem', 'ipsum']);
        expect(string.lines('lorem ipsum')).to.deep.equal(['lorem ipsum']);
        expect(string.lines('lorem\ripsum')).to.deep.equal(['lorem\ripsum']);
    });

    it('Should work with empty strings', function () {
        expect(string.lines('')).to.deep.equal(['']);
        expect(string.lines('            ')).to.deep.equal(['            ']);
        expect(string.lines(' \t ')).to.deep.equal([' \t ']);
        expect(string.lines(' \n ')).to.deep.equal([' ', ' ']);
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.lines()).to.deep.equal(['']);
        expect(string.lines(void 0)).to.deep.equal(['']);
        expect(string.lines(null)).to.deep.equal(['']);
    });
});

describe('string.ltrim()', function () {
    it('Should remove leading whitespaces', function () {
        expect(string.ltrim('           Hello, World! ')).to.equal('Hello, World! ');
        expect(string.ltrim('                        ')).to.equal('');
        expect(string.ltrim('\n Hello,   \t   World!')).to.equal('Hello,   \t   World!');
        expect(string.ltrim('\0 \b \t \nHello, World!')).to.equal('Hello, World!');
    });

    it('Should remove leading given characters', function () {
        expect(string.ltrim('/* Hello, World!*/', '/ ', '*')).to.equal('Hello, World!*/');
        expect(string.ltrim('~~~****Hello, World!', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.ltrim()).to.equal('');
        expect(string.ltrim(void 0)).to.equal('');
        expect(string.ltrim(null)).to.equal('');
    });
});

describe('string.remove()', function () {
    it('Should remove a substring from a string', function () {
        var hello = 'Hello, World!';

        expect(string.remove(hello, 0, 2)).to.equal('llo, World!');
        expect(string.remove(hello, 0, 100)).to.equal('');
        expect(string.remove(hello, 0, hello.length)).to.equal('');
        expect(string.remove(hello, 90, 100)).to.equal('Hello, World!');
    });

    it('Should treat undefined index as zero', function () {
        var hello = 'Hello, World!';

        expect(string.remove(hello)).to.equal(hello);
        expect(string.remove(hello, void 0)).to.equal(hello);
        expect(string.remove(hello, void 0, void 0)).to.equal(hello);
        expect(string.remove(hello, null)).to.equal(hello);
        expect(string.remove(hello, null, null)).to.equal(hello);
    });

    it('Should accept negative indexes', function () {
        var hello = 'Hello, World!';

        expect(string.remove(hello, 0, -3)).to.equal('ld!');
        expect(string.remove(hello, 5, -1)).to.equal('Hello!');
        expect(string.remove(hello, 2, -2)).to.equal('Hed!');
        expect(string.remove(hello, -2, -1)).to.equal('Hello, Worl!');
        expect(string.remove(hello, -100, -90)).to.equal('Hello, World!');
    });
});

describe('string.repeat()', function () {
    it('Should repeat a string n times', function () {
        expect(string.repeat('*', 3)).to.equal('***');
        expect(string.repeat(123, 2)).to.equal('123123');
        expect(string.repeat('lorem', 2)).to.equal('loremlorem');
        expect(string.repeat(' ', 5)).to.equal('     ');
        expect(string.repeat(' ', 0)).to.equal('');
        expect(string.repeat('lorem ipsum', 0)).to.equal('');
    });

    it('Should treat null and undefined as zero', function () {
        expect(string.repeat('lorem ipsum')).to.equal('');
        expect(string.repeat('lorem ipsum', void 0)).to.equal('');
        expect(string.repeat('lorem ipsum', null)).to.equal('');
    });

    it('Should treat a string as zero', function () {
        expect(string.repeat('lorem ipsum', 'null')).to.equal('');
        expect(string.repeat('lorem ipsum', '')).to.equal('');
    });

    it('Should work with negative counts', function () {
        expect(string.repeat('*', -3)).to.equal('');
        expect(string.repeat('lorem', -2)).to.equal('');
        expect(string.repeat(' ', -5)).to.equal('');
    });
});

describe('string.reverse()', function () {
    it('Should reverse a substring', function () {
        expect(string.reverse('Hello, World!')).to.equal('!dlroW ,olleH');
        expect(string.reverse('')).to.equal('');
        expect(string.reverse(12345)).to.equal('54321');
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.reverse()).to.equal('');
        expect(string.reverse(void 0)).to.equal('');
        expect(string.reverse(null)).to.equal('');
    });
});

describe('string.rtrim()', function () {
    it('Should remove trailing whitespaces', function () {
        expect(string.rtrim(' Hello, World!             ')).to.equal(' Hello, World!');
        expect(string.rtrim('        ')).to.equal('');
        expect(string.rtrim('\tHello,   \t   World!        \r     ')).to.equal('\tHello,   \t   World!');
        expect(string.rtrim('Hello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Should remove trailing given characters', function () {
        expect(string.rtrim('/Hello, World! */', '/ ', '*')).to.equal('/Hello, World!');
        expect(string.rtrim('Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.rtrim()).to.equal('');
        expect(string.rtrim(void 0)).to.equal('');
        expect(string.rtrim(null)).to.equal('');
    });
});

describe('string.startsWith()', function () {
    it('Should return true if string starts with another string', function () {
        expect(string.startsWith('lorem ipsum', 'lorem')).to.equal(true);
        expect(string.startsWith('foo bar', 'foo')).to.equal(true);
        expect(string.startsWith(12345, 12)).to.equal(true);
    });

    it('Should return false if string does not starts with another string', function () {
        expect(string.startsWith('lorem ipsum', 'ipsum')).to.equal(false);
        expect(string.startsWith('foo bar', 'bar')).to.equal(false);
    });

    it('Should return true if string for search is empty', function () {
        expect(string.startsWith('', '')).to.equal(true);
        expect(string.startsWith('lorem', '')).to.equal(true);
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.startsWith(void 0, 'ipsum')).to.equal(false);
        expect(string.startsWith('lorem', void 0)).to.equal(true);
        expect(string.startsWith(null, '')).to.equal(true);
        expect(string.startsWith('lorem', null)).to.equal(true);
    });
});

describe('string.swap()', function () {
    it('Should swap case of characters', function () {
        expect(string.swap('lorem ipsum')).to.equal('LOREM IPSUM');
        expect(string.swap('lOREM iPSUM')).to.equal('Lorem Ipsum');
        expect(string.swap('')).to.equal('');
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.swap()).to.equal('');
        expect(string.swap(void 0)).to.equal('');
        expect(string.swap(null)).to.equal('');
    });
});

describe('string.template()', function () {
    it('Should return the string replaced with template values', function () {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(string.template('${a} ${b} ${c}', lorem)).to.equal('lorem ipsum dolor');
        expect(string.template('${a} ipsum ${c} sit', lorem)).to.equal('lorem ipsum dolor sit');
    });

    it('Should work with nested values', function () {
        var lorem = {
            ipsum: {
                dolor: 'sit'
            },
            sit: {
                amet: 'consectetur'
            },
            foo: ['foo', 'bar']
        };
        expect(string.template('${ ipsum.dolor } ${ sit.amet }', lorem)).to.equal('sit consectetur');
        expect(string.template('${ ipsum.dolor } ${ foo.0 }', lorem)).to.equal('sit foo');
    });

    it('Should work with arrays', function () {
        var lorem = ['lorem', 'ipsum', 'dolor'];
        expect(string.template('${0} ${1} ${2}', lorem)).to.equal('lorem ipsum dolor');
        expect(string.template('${0} ipsum ${2} sit', lorem)).to.equal('lorem ipsum dolor sit');
    });

    it('Should treat null and undefined target as empty string', function () {
        expect(string.template(null, { lorem: 'lorem' })).to.equal('');
        expect(string.template(undefined, { lorem: 'lorem' })).to.equal('');
    });

    it('Should not replace undefined values', function () {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(string.template('${a} ${b} ${c} ${d}', lorem)).to.equal('lorem ipsum dolor ${d}');
    });

    it('Should treat null values as empty string', function () {
        expect(string.template('${lorem}', { lorem: null })).to.equal('');
    });

    it('Should work with mustache syntax', function () {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(string.template('{{a}} {{b}} {{c}}', lorem, /\{\{([^\}]+)\}\}/g)).to.equal('lorem ipsum dolor');
    });

    it('Should work with underscore syntax', function () {
        var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
        expect(string.template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g)).to.equal('lorem ipsum dolor');
    });
});

describe('string.trim()', function () {
    it('Should remove leading and trailing whitespaces', function () {
        expect(string.trim('           Hello, World!             ')).to.equal('Hello, World!');
        expect(string.trim('                        ')).to.equal('');
        expect(string.trim('\n Hello,   \t   World!        \r     ')).to.equal('Hello,   \t   World!');
        expect(string.trim('\0 \b \t \nHello, World!\v \f \r')).to.equal('Hello, World!');
    });

    it('Should remove leading and trailing given characters', function () {
        expect(string.trim('/* Hello, World! */', '/ ', '*')).to.equal('Hello, World!');
        expect(string.trim('~~~****Hello, World!****~~~', '*~')).to.equal('Hello, World!');
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.trim()).to.equal('');
        expect(string.trim(void 0)).to.equal('');
        expect(string.trim(null)).to.equal('');
    });
});

describe('string.truncate()', function () {
    var str = 'lorem ipsum dolor sit amet';

    it('Should limit number of chars', function () {
        expect(string.truncate(str, 10)).to.have.length.below(11);
        expect(string.truncate(str, 10)).to.equal('lorem i...');

        expect(string.truncate(str, 14)).to.have.length.below(15);
        expect(string.truncate(str, 14)).to.equal('lorem ipsum...');
    });

    it('Should append string param', function () {
        var truncated = string.truncate(str, 10, '--');
        expect(truncated).to.have.length.below(11);
        expect(truncated).to.equal('lorem ip--');
    });

    it('Should allow cropping at full words', function () {
        expect(string.truncate(str, 10, '*', true)).to.have.length.below(11);
        expect(string.truncate(str, 10, '*', true)).to.equal('lorem*');

        expect(string.truncate(str, 14, null, true)).to.have.length.below(15);
        expect(string.truncate(str, 14, null, true)).to.equal('lorem ipsum...');
    });
});

describe('string.unescape()', function () {
    it('Should escape a string', function () {
        expect(string.unescape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('<p>hi!</p>');
        expect(string.unescape('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;')).to.equal('<p>lorem & ipsum</p>');
        expect(string.unescape('&quot;hi!&quot;')).to.equal('"hi!"');
        /* jshint -W109 */
        expect(string.unescape('&#x27;hi!&#x27;')).to.equal("'hi!'");
        /* jshint +W109 */
    });

    it('Should work with empty strings', function () {
        expect(string.unescape('')).to.equal('');
        expect(string.unescape()).to.equal('');
        expect(string.unescape(void 0)).to.equal('');
        expect(string.unescape(null)).to.equal('');
    });
});

describe('string.words()', function () {
    it('Should return an array of words', function () {
        expect(string.words('lorem ipsum dolor sit')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(string.words('      lorem        ipsum         dolor        sit     ')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(string.words('lorem-ipsum-dolor-sit', '-')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(string.words('lorem_ipsum_dolor_sit', '_')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
        expect(string.words(123)).to.deep.equal(['123']);
    });

    it('Should work with blank strings', function () {
        expect(string.words('')).to.deep.equal([]);
        expect(string.words('                ')).to.deep.equal([]);
    });

    it('Should treat null and undefined as empty string', function () {
        expect(string.words()).to.deep.equal([]);
        expect(string.words(void 0)).to.deep.equal([]);
        expect(string.words(null)).to.deep.equal([]);
    });
});
var st = require('../build/string.min');
var expect = require('chai').expect;

describe('st', function () {
    describe('st.camelize()', function () {
        it('Should convert st to camel case', function () {
            expect(st.camelize('lorem ipsum dolor')).to.equal('loremIpsumDolor');
            expect(st.camelize('    lorem   ipsum   dolor   ')).to.equal('loremIpsumDolor');
            expect(st.camelize('--lorem--ipsum--dolor--')).to.equal('loremIpsumDolor');
            expect(st.camelize('__lorem__ipsum__dolor__')).to.equal('loremIpsumDolor');
            expect(st.camelize(123456)).to.equal('123456');
        });

        it('Should work with blank sts', function () {
            expect(st.camelize('')).to.equal('');
            expect(st.camelize('       ')).to.equal('');
            expect(st.camelize('    \n   ')).to.equal('');
        });

        it('Should treat null and undefined as blank st', function () {
            expect(st.camelize()).to.equal('');
            expect(st.camelize(void 0)).to.equal('');
            expect(st.camelize(null)).to.equal('');
        });
    });

    describe('st.capitalize()', function () {
        it('Should capitalize a st', function () {
            expect(st.capitalize('lorem ipsum')).to.equal('Lorem ipsum');
        });

        it('Should change only first letter of a st', function () {
            expect(st.capitalize('lorem IPSUM')).to.equal('Lorem IPSUM');
        });

        it('Should work with empty sts', function () {
            expect(st.capitalize('')).to.equal('');
            expect(st.capitalize()).to.equal('');
            expect(st.capitalize(void 0)).to.equal('');
            expect(st.capitalize(null)).to.equal('');
        });
    });

    describe('st.clean()', function () {
        it('Should remove all spaces', function () {
            expect(st.clean('           Hello,      World!             ')).to.equal('Hello, World!');
            expect(st.clean('                        ')).to.equal('');
        });

        it('Should remove all whitespace', function () {
            expect(st.clean('\n Hello,   \t   World!        \r     ')).to.equal('Hello, World!');
            expect(st.clean('\0 \b \t \n \v \f \r')).to.equal('');
        });
    });

    describe('st.contains()', function () {
        it('Should return true if st contains subst', function () {
            expect(st.contains('lorem ipsum', 'rem')).to.equal(true);
            expect(st.contains('lorem ipsum', 'i')).to.equal(true);
            expect(st.contains('lorem ipsum', 'or')).to.equal(true);
            expect(st.contains('lorem ipsum', 'sum')).to.equal(true);
        });

        it('Should return false if st does not contain subst', function () {
            expect(st.contains('lorem ipsum', '!')).to.equal(false);
            expect(st.contains('lorem ipsum', 'foo')).to.equal(false);
            expect(st.contains('lorem ipsum', 'bar')).to.equal(false);
        });

        it('Should work with empty sts', function () {
            expect(st.contains('', '')).to.equal(true);
            expect(st.contains('lorem ipsum', '')).to.equal(true);
        });

        it('Should treat null as empty st', function () {
            expect(st.contains(null, 'lorem ipsum')).to.equal(false);
            expect(st.contains(null, '')).to.equal(true);
            expect(st.contains('lorem ipsum', null)).to.equal(true);
            expect(st.contains('', null)).to.equal(true);
        });

        it('Should treat undefined as empty st', function () {
            expect(st.contains(void 0, 'lorem ipsum')).to.equal(false);
            expect(st.contains(void 0, '')).to.equal(true);
            expect(st.contains('lorem ipsum', void 0)).to.equal(true);
            expect(st.contains('', void 0)).to.equal(true);
        });

        it('Should start search at given index', function () {
            expect(st.contains('lorem ipsum', 'l', 0)).to.equal(true);
            expect(st.contains('lorem ipsum', 'i', 1)).to.equal(true);
            expect(st.contains('lorem ipsum', 'r', 3)).to.equal(false);
            expect(st.contains('lorem ipsum', 's', 300)).to.equal(false);
        });

        it('Should treat negative index as zero', function () {
            expect(st.contains('lorem ipsum', 'o', -1)).to.equal(true);
            expect(st.contains('lorem ipsum', 'o', -9)).to.equal(true);
            expect(st.contains('lorem ipsum', 'o', -10)).to.equal(true);
            expect(st.contains('lorem ipsum', 'o', -11)).to.equal(true);
        });
    });

    describe('st.count()', function () {
        it('Should find a subst', function () {
            expect(st.count('Hello, World!', 'l')).to.equal(3);
            expect(st.count('Hello, World!', 'll')).to.equal(1);
            expect(st.count(12345, 1)).to.equal(1);
            expect(st.count(99999, 9)).to.equal(5);
            expect(st.count(99999, 99)).to.equal(4);
        });

        it('Should not find a subst', function () {
            expect(st.count('Hello, World!', 'world')).to.equal(0);
            expect(st.count('Hello, World!', '! ')).to.equal(0);
        });

        it('Should work with null, undefined and empty sts', function () {
            expect(st.count('', 'x')).to.equal(0);
            expect(st.count('', '')).to.equal(0);
            expect(st.count(null, 'x')).to.equal(0);
            expect(st.count(void 0, 'x')).to.equal(0);
        });
    });

    describe('st.decapitalize()', function () {
        it('Should decapitalize a st', function () {
            expect(st.decapitalize('Lorem ipsum')).to.equal('lorem ipsum');
        });

        it('Should change only first letter of a st', function () {
            expect(st.decapitalize('Lorem IPSUM')).to.equal('lorem IPSUM');
        });

        it('Should work with empty sts', function () {
            expect(st.decapitalize('')).to.equal('');
            expect(st.decapitalize()).to.equal('');
            expect(st.decapitalize(void 0)).to.equal('');
            expect(st.decapitalize(null)).to.equal('');
        });
    });

    describe('st.endsWith()', function () {
        it('Should return true if st ends with another st', function () {
            expect(st.endsWith('lorem ipsum', 'ipsum')).to.equal(true);
            expect(st.endsWith('foo bar', 'bar')).to.equal(true);
            expect(st.endsWith(12345, 45)).to.equal(true);
        });

        it('Should return false if st does not ends with another st', function () {
            expect(st.endsWith('lorem ipsum', 'lorem')).to.equal(false);
            expect(st.endsWith('foo bar', 'foo')).to.equal(false);
        });

        it('Should return true if st for search is empty', function () {
            expect(st.endsWith('', '')).to.equal(true);
            expect(st.endsWith('lorem', '')).to.equal(true);
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.endsWith(void 0, 'ipsum')).to.equal(false);
            expect(st.endsWith('lorem', void 0)).to.equal(true);
            expect(st.endsWith(null, '')).to.equal(true);
            expect(st.endsWith('lorem', null)).to.equal(true);
        });
    });

    describe('st.escape()', function () {
        it('Should escape a st', function () {
            expect(st.escape('<p>hi!</p>')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
            expect(st.escape('<p>lorem & ipsum</p>')).to.equal('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;');
            expect(st.escape('"hi!"')).to.equal('&quot;hi!&quot;');
            /* jshint -W109 */
            expect(st.escape("'hi!'")).to.equal('&#x27;hi!&#x27;');
            /* jshint +W109 */
        });

        it('Should not escape an escaped st', function () {
            expect(st.escape('lorem &amp; ipsum')).to.equal('lorem &amp; ipsum');
            expect(st.escape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
            expect(st.escape('&#x27;hi!&#x27; & bye!')).to.equal('&#x27;hi!&#x27; &amp; bye!');
        });

        it('Should work with empty sts', function () {
            expect(st.escape('')).to.equal('');
            expect(st.escape()).to.equal('');
            expect(st.escape(void 0)).to.equal('');
            expect(st.escape(null)).to.equal('');
        });
    });

    describe('st.insert()', function () {
        it('Should insert a subst in a st', function () {
            expect(st.insert(', World!', 'Hello', 0)).to.equal('Hello, World!');
            expect(st.insert(', World!', 'Hello', null)).to.equal('Hello, World!');
            expect(st.insert('Hello, ', 'World!', 10)).to.equal('Hello, World!');
            expect(st.insert('Hello, Worl', 'd!', 12)).to.equal('Hello, World!');
            expect(st.insert('Hello, Worl', 'd!', '12')).to.equal('Hello, World!');
        });

        it('Should treat undefined index as zero', function () {
            expect(st.insert(', World!', 'Hello')).to.equal('Hello, World!');
            expect(st.insert(', World!', 'Hello', void 0)).to.equal('Hello, World!');
        });

        it('Should accept negative indexes', function () {
            expect(st.insert('Hello, Worl!', 'd', -1)).to.equal('Hello, World!');
            expect(st.insert('o, World!', 'Hell', -10)).to.equal('Hello, World!');
            expect(st.insert('o, World!', 'Hell', '-10')).to.equal('Hello, World!');
        });

        it('Should accept indexes large than the length of a st', function () {
            expect(st.insert('Hello, ', 'World!', 100)).to.equal('Hello, World!');
        });
    });

    describe('st.join()', function () {
        it('Should join sts', function () {
            expect(st.join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).to.equal('lorem ipsum dolor sit amet');
            expect(st.join('', 'h', 'e', 'l', 'lo')).to.equal('hello');
            expect(st.join('+', 1, 2, 3)).to.equal('1+2+3');
        });

        it('Should ignore null, undefined and empty sts', function () {
            expect(st.join()).to.equal('');
            expect(st.join('', '', '')).to.equal('');
            expect(st.join(' ', null, null)).to.equal('');
            expect(st.join(' ', void 0, void 0)).to.equal('');
            expect(st.join(' ', 'lorem', void 0, void 0)).to.equal('lorem');
        });
    });

    describe('st.lchop()', function () {
        it('Should return a st chopped into pieces', function () {
            expect(st.lchop('lorem ipsum', 5)).to.deep.equal(['lorem', ' ipsu', 'm']);
            expect(st.lchop('lorem ipsum', 4)).to.deep.equal(['lore', 'm ip', 'sum']);
            expect(st.lchop('lorem ipsum', 3)).to.deep.equal(['lor', 'em ', 'ips', 'um']);
            expect(st.lchop('lorem ipsum', 2)).to.deep.equal(['lo', 're', 'm ', 'ip', 'su', 'm']);
            expect(st.lchop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.lchop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should work with null and undefined', function () {
            expect(st.lchop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
            expect(st.lchop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.lchop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.lchop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should treat negative step as zero', function () {
            expect(st.lchop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.lchop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.lchop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });
    });

    describe('st.lines()', function () {
        it('Should return an array of lines', function () {
            expect(st.lines('lorem\r\nipsum')).to.deep.equal(['lorem', 'ipsum']);
            expect(st.lines('lorem ipsum')).to.deep.equal(['lorem ipsum']);
            expect(st.lines('lorem\ripsum')).to.deep.equal(['lorem\ripsum']);
        });

        it('Should work with empty sts', function () {
            expect(st.lines('')).to.deep.equal(['']);
            expect(st.lines('            ')).to.deep.equal(['            ']);
            expect(st.lines(' \t ')).to.deep.equal([' \t ']);
            expect(st.lines(' \n ')).to.deep.equal([' ', ' ']);
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.lines()).to.deep.equal(['']);
            expect(st.lines(void 0)).to.deep.equal(['']);
            expect(st.lines(null)).to.deep.equal(['']);
        });
    });

    describe('st.lpad()', function () {
        it('Should add characters to the left', function () {
            expect(st.lpad('lorem', 4, '^')).to.equal('lorem');
            expect(st.lpad('lorem', 5, '^')).to.equal('lorem');
            expect(st.lpad('lorem', 6, '^')).to.equal('^lorem');
            expect(st.lpad('lorem', 7, '^')).to.equal('^^lorem');
            expect(st.lpad('lorem', 8, '^')).to.equal('^^^lorem');
        });

        it('Should take only first character of padding st', function () {
            expect(st.lpad('lorem', 6, '#')).to.equal('#lorem');
            expect(st.lpad('lorem', 6, '%#')).to.equal('%lorem');
            expect(st.lpad('lorem', 6, '&%#')).to.equal('&lorem');
            expect(st.lpad('lorem', 6, '$&%#')).to.equal('$lorem');
        });

        it('Should treat null and undefined padding st as space', function () {
            expect(st.lpad(void 0, 5, '*')).to.equal('*****');
            expect(st.lpad(null, 5, '*')).to.equal('*****');
        });

        it('Should treat null and undefined padding st as space', function () {
            expect(st.lpad('lorem')).to.equal('lorem');
            expect(st.lpad('lorem', 10, void 0)).to.equal('     lorem');
            expect(st.lpad('lorem', 10, null)).to.equal('     lorem');
        });
    });

    describe('st.ltrim()', function () {
        it('Should remove leading whitespaces', function () {
            expect(st.ltrim('           Hello, World! ')).to.equal('Hello, World! ');
            expect(st.ltrim('                        ')).to.equal('');
            expect(st.ltrim('\n Hello,   \t   World!')).to.equal('Hello,   \t   World!');
            expect(st.ltrim('\0 \b \t \nHello, World!')).to.equal('Hello, World!');
        });

        it('Should remove leading given characters', function () {
            expect(st.ltrim('/* Hello, World!*/', '/ ', '*')).to.equal('Hello, World!*/');
            expect(st.ltrim('~~~****Hello, World!', '*~')).to.equal('Hello, World!');
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.ltrim()).to.equal('');
            expect(st.ltrim(void 0)).to.equal('');
            expect(st.ltrim(null)).to.equal('');
        });
    });

    describe('st.pad()', function () {
        it('Should add characters to the right', function () {
            expect(st.pad('sit', 4, '^')).to.equal('^sit');
            expect(st.pad('sit', 5, '^')).to.equal('^sit^');
            expect(st.pad('sit', 6, '^')).to.equal('^^sit^');
            expect(st.pad('sit', 7, '^')).to.equal('^^sit^^');
            expect(st.pad('sit', 8, '^')).to.equal('^^^sit^^');
        });

        it('Should take only first character of padding st', function () {
            expect(st.pad('sit', 6, '#')).to.equal('##sit#');
            expect(st.pad('sit', 7, '%#')).to.equal('%%sit%%');
            expect(st.pad('sit', 8, '&%#')).to.equal('&&&sit&&');
            expect(st.pad('sit', 9, '$&%#')).to.equal('$$$sit$$$');
        });

        it('Should treat null and undefined padding st as space', function () {
            expect(st.pad('', 5, '@')).to.equal('@@@@@');
            expect(st.pad(void 0, 5, '@')).to.equal('@@@@@');
            expect(st.pad(null, 5, '@')).to.equal('@@@@@');
        });

        it('Should treat null and undefined padding st as space', function () {
            expect(st.pad('sit')).to.equal('sit');
            expect(st.pad('sit', 9, void 0)).to.equal('   sit   ');
            expect(st.pad('sit', 9, null)).to.equal('   sit   ');
        });
    });

    describe('st.rchop()', function () {
        it('Should return a st chopped into pieces', function () {
            expect(st.rchop('lorem ipsum', 5)).to.deep.equal(['l', 'orem ', 'ipsum']);
            expect(st.rchop('lorem ipsum', 4)).to.deep.equal(['lor', 'em i', 'psum']);
            expect(st.rchop('lorem ipsum', 3)).to.deep.equal(['lo', 'rem', ' ip', 'sum']);
            expect(st.rchop('lorem ipsum', 2)).to.deep.equal(['l', 'or', 'em', ' i', 'ps', 'um']);
            expect(st.rchop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.rchop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should work with null and undefined', function () {
            expect(st.rchop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
            expect(st.rchop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.rchop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.rchop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should treat negative step as zero', function () {
            expect(st.rchop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.rchop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(st.rchop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });
    });

    describe('st.remove()', function () {
        it('Should remove a subst from a st', function () {
            var hello = 'Hello, World!';

            expect(st.remove(hello, 0, 2)).to.equal('llo, World!');
            expect(st.remove(hello, 0, 100)).to.equal('');
            expect(st.remove(hello, 0, hello.length)).to.equal('');
            expect(st.remove(hello, 90, 100)).to.equal('Hello, World!');
        });

        it('Should treat undefined index as zero', function () {
            var hello = 'Hello, World!';

            expect(st.remove(hello)).to.equal(hello);
            expect(st.remove(hello, void 0)).to.equal(hello);
            expect(st.remove(hello, void 0, void 0)).to.equal(hello);
            expect(st.remove(hello, null)).to.equal(hello);
            expect(st.remove(hello, null, null)).to.equal(hello);
        });

        it('Should accept negative indexes', function () {
            var hello = 'Hello, World!';

            expect(st.remove(hello, 0, -3)).to.equal('ld!');
            expect(st.remove(hello, 5, -1)).to.equal('Hello!');
            expect(st.remove(hello, 2, -2)).to.equal('Hed!');
            expect(st.remove(hello, -2, -1)).to.equal('Hello, Worl!');
            expect(st.remove(hello, -100, -90)).to.equal('Hello, World!');
        });
    });

    describe('st.repeat()', function () {
        it('Should repeat a st n times', function () {
            expect(st.repeat('*', 3)).to.equal('***');
            expect(st.repeat(123, 2)).to.equal('123123');
            expect(st.repeat('lorem', 2)).to.equal('loremlorem');
            expect(st.repeat(' ', 5)).to.equal('     ');
            expect(st.repeat(' ', 0)).to.equal('');
            expect(st.repeat('lorem ipsum', 0)).to.equal('');
        });

        it('Should treat null and undefined as zero', function () {
            expect(st.repeat('lorem ipsum')).to.equal('');
            expect(st.repeat('lorem ipsum', void 0)).to.equal('');
            expect(st.repeat('lorem ipsum', null)).to.equal('');
        });

        it('Should treat a st as zero', function () {
            expect(st.repeat('lorem ipsum', 'null')).to.equal('');
            expect(st.repeat('lorem ipsum', '')).to.equal('');
        });

        it('Should work with negative counts', function () {
            expect(st.repeat('*', -3)).to.equal('');
            expect(st.repeat('lorem', -2)).to.equal('');
            expect(st.repeat(' ', -5)).to.equal('');
        });
    });

    describe('st.reverse()', function () {
        it('Should reverse a subst', function () {
            expect(st.reverse('Hello, World!')).to.equal('!dlroW ,olleH');
            expect(st.reverse('')).to.equal('');
            expect(st.reverse(12345)).to.equal('54321');
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.reverse()).to.equal('');
            expect(st.reverse(void 0)).to.equal('');
            expect(st.reverse(null)).to.equal('');
        });
    });

    describe('st.rpad()', function () {
        it('Should add characters to the right', function () {
            expect(st.rpad('lorem', 4, '^')).to.equal('lorem');
            expect(st.rpad('lorem', 5, '^')).to.equal('lorem');
            expect(st.rpad('lorem', 6, '^')).to.equal('lorem^');
            expect(st.rpad('lorem', 7, '^')).to.equal('lorem^^');
            expect(st.rpad('lorem', 8, '^')).to.equal('lorem^^^');
        });

        it('Should take only first character of padding st', function () {
            expect(st.rpad('lorem', 6, '#')).to.equal('lorem#');
            expect(st.rpad('lorem', 6, '%#')).to.equal('lorem%');
            expect(st.rpad('lorem', 6, '&%#')).to.equal('lorem&');
            expect(st.rpad('lorem', 6, '$&%#')).to.equal('lorem$');
        });

        it('Should treat null and undefined padding st as space', function () {
            expect(st.rpad(void 0, 5, '*')).to.equal('*****');
            expect(st.rpad(null, 5, '*')).to.equal('*****');
        });

        it('Should treat null and undefined padding st as space', function () {
            expect(st.rpad('lorem')).to.equal('lorem');
            expect(st.rpad('lorem', 10, void 0)).to.equal('lorem     ');
            expect(st.rpad('lorem', 10, null)).to.equal('lorem     ');
        });
    });

    describe('st.rtrim()', function () {
        it('Should remove trailing whitespaces', function () {
            expect(st.rtrim(' Hello, World!             ')).to.equal(' Hello, World!');
            expect(st.rtrim('        ')).to.equal('');
            expect(st.rtrim('\tHello,   \t   World!        \r     ')).to.equal('\tHello,   \t   World!');
            expect(st.rtrim('Hello, World!\v \f \r')).to.equal('Hello, World!');
        });

        it('Should remove trailing given characters', function () {
            expect(st.rtrim('/Hello, World! */', '/ ', '*')).to.equal('/Hello, World!');
            expect(st.rtrim('Hello, World!****~~~', '*~')).to.equal('Hello, World!');
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.rtrim()).to.equal('');
            expect(st.rtrim(void 0)).to.equal('');
            expect(st.rtrim(null)).to.equal('');
        });
    });

    describe('st.splice()', function () {

    });

    describe('st.startsWith()', function () {
        it('Should return true if st starts with another st', function () {
            expect(st.startsWith('lorem ipsum', 'lorem')).to.equal(true);
            expect(st.startsWith('foo bar', 'foo')).to.equal(true);
            expect(st.startsWith(12345, 12)).to.equal(true);
        });

        it('Should return false if st does not starts with another st', function () {
            expect(st.startsWith('lorem ipsum', 'ipsum')).to.equal(false);
            expect(st.startsWith('foo bar', 'bar')).to.equal(false);
        });

        it('Should return true if st for search is empty', function () {
            expect(st.startsWith('', '')).to.equal(true);
            expect(st.startsWith('lorem', '')).to.equal(true);
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.startsWith(void 0, 'ipsum')).to.equal(false);
            expect(st.startsWith('lorem', void 0)).to.equal(true);
            expect(st.startsWith(null, '')).to.equal(true);
            expect(st.startsWith('lorem', null)).to.equal(true);
        });
    });

    describe('st.swap()', function () {
        it('Should swap case of characters', function () {
            expect(st.swap('lorem ipsum')).to.equal('LOREM IPSUM');
            expect(st.swap('lOREM iPSUM')).to.equal('Lorem Ipsum');
            expect(st.swap('')).to.equal('');
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.swap()).to.equal('');
            expect(st.swap(void 0)).to.equal('');
            expect(st.swap(null)).to.equal('');
        });
    });

    describe('st.template()', function () {
        it('Should return the st replaced with template values', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(st.template('${a} ${b} ${c}', lorem)).to.equal('lorem ipsum dolor');
            expect(st.template('${a} ipsum ${c} sit', lorem)).to.equal('lorem ipsum dolor sit');
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
            expect(st.template('${ ipsum.dolor } ${ sit.amet }', lorem)).to.equal('sit consectetur');
            expect(st.template('${ ipsum.dolor } ${ foo.0 }', lorem)).to.equal('sit foo');
        });

        it('Should work with arrays', function () {
            var lorem = ['lorem', 'ipsum', 'dolor'];
            expect(st.template('${0} ${1} ${2}', lorem)).to.equal('lorem ipsum dolor');
            expect(st.template('${0} ipsum ${2} sit', lorem)).to.equal('lorem ipsum dolor sit');
        });

        it('Should treat null and undefined target as empty st', function () {
            expect(st.template(null, { lorem: 'lorem' })).to.equal('');
            expect(st.template(undefined, { lorem: 'lorem' })).to.equal('');
        });

        it('Should not replace undefined values', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(st.template('${a} ${b} ${c} ${d}', lorem)).to.equal('lorem ipsum dolor ${d}');
        });

        it('Should treat null values as empty st', function () {
            expect(st.template('${lorem}', { lorem: null })).to.equal('');
        });

        it('Should work with mustache syntax', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(st.template('{{a}} {{b}} {{c}}', lorem, /\{\{([^\}]+)\}\}/g)).to.equal('lorem ipsum dolor');
        });

        it('Should work with underscore syntax', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(st.template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g)).to.equal('lorem ipsum dolor');
        });
    });

    describe('st.trim()', function () {
        it('Should remove leading and trailing whitespaces', function () {
            expect(st.trim('           Hello, World!             ')).to.equal('Hello, World!');
            expect(st.trim('                        ')).to.equal('');
            expect(st.trim('\n Hello,   \t   World!        \r     ')).to.equal('Hello,   \t   World!');
            expect(st.trim('\0 \b \t \nHello, World!\v \f \r')).to.equal('Hello, World!');
        });

        it('Should remove leading and trailing given characters', function () {
            expect(st.trim('/* Hello, World! */', '/ ', '*')).to.equal('Hello, World!');
            expect(st.trim('~~~****Hello, World!****~~~', '*~')).to.equal('Hello, World!');
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.trim()).to.equal('');
            expect(st.trim(void 0)).to.equal('');
            expect(st.trim(null)).to.equal('');
        });
    });

    describe('st.truncate()', function () {
        var str = 'lorem ipsum dolor sit amet';

        it('Should limit number of chars', function () {
            expect(st.truncate(str, 10)).to.have.length.below(11);
            expect(st.truncate(str, 10)).to.equal('lorem i...');

            expect(st.truncate(str, 14)).to.have.length.below(15);
            expect(st.truncate(str, 14)).to.equal('lorem ipsum...');
        });

        it('Should append st param', function () {
            var truncated = st.truncate(str, 10, '--');
            expect(truncated).to.have.length.below(11);
            expect(truncated).to.equal('lorem ip--');
        });

        it('Should allow cropping at full words', function () {
            expect(st.truncate(str, 10, '*', true)).to.have.length.below(11);
            expect(st.truncate(str, 10, '*', true)).to.equal('lorem*');

            expect(st.truncate(str, 14, null, true)).to.have.length.below(15);
            expect(st.truncate(str, 14, null, true)).to.equal('lorem ipsum...');
        });
    });

    describe('st.unescape()', function () {
        it('Should escape a st', function () {
            expect(st.unescape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('<p>hi!</p>');
            expect(st.unescape('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;')).to.equal('<p>lorem & ipsum</p>');
            expect(st.unescape('&quot;hi!&quot;')).to.equal('"hi!"');
            /* jshint -W109 */
            expect(st.unescape('&#x27;hi!&#x27;')).to.equal("'hi!'");
            /* jshint +W109 */
        });

        it('Should work with empty sts', function () {
            expect(st.unescape('')).to.equal('');
            expect(st.unescape()).to.equal('');
            expect(st.unescape(void 0)).to.equal('');
            expect(st.unescape(null)).to.equal('');
        });
    });

    describe('st.words()', function () {
        it('Should return an array of words', function () {
            expect(st.words('lorem ipsum dolor sit')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(st.words('      lorem        ipsum         dolor        sit     ')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(st.words('lorem-ipsum-dolor-sit', '-')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(st.words('lorem_ipsum_dolor_sit', '_')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(st.words(123)).to.deep.equal(['123']);
        });

        it('Should work with blank sts', function () {
            expect(st.words('')).to.deep.equal([]);
            expect(st.words('                ')).to.deep.equal([]);
        });

        it('Should treat null and undefined as empty st', function () {
            expect(st.words()).to.deep.equal([]);
            expect(st.words(void 0)).to.deep.equal([]);
            expect(st.words(null)).to.deep.equal([]);
        });
    });
});
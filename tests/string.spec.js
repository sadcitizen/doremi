var str = require('../build/string.min');
var expect = require('chai').expect;

describe('String', function () {
    describe('.camelize()', function () {
        it('Should convert str to camel case', function () {
            expect(str.camelize('lorem ipsum dolor')).to.equal('loremIpsumDolor');
            expect(str.camelize('    lorem   ipsum   dolor   ')).to.equal('loremIpsumDolor');
            expect(str.camelize('--lorem--ipsum--dolor--')).to.equal('loremIpsumDolor');
            expect(str.camelize('__lorem__ipsum__dolor__')).to.equal('loremIpsumDolor');
            expect(str.camelize(123456)).to.equal('123456');
        });

        it('Should work with blank sts', function () {
            expect(str.camelize('')).to.equal('');
            expect(str.camelize('       ')).to.equal('');
            expect(str.camelize('    \n   ')).to.equal('');
        });

        it('Should treat null and undefined as blank str', function () {
            expect(str.camelize()).to.equal('');
            expect(str.camelize(void 0)).to.equal('');
            expect(str.camelize(null)).to.equal('');
        });
    });

    describe('.capitalize()', function () {
        it('Should capitalize a str', function () {
            expect(str.capitalize('lorem ipsum')).to.equal('Lorem ipsum');
        });

        it('Should change only first letter of a str', function () {
            expect(str.capitalize('lorem IPSUM')).to.equal('Lorem IPSUM');
        });

        it('Should work with empty sts', function () {
            expect(str.capitalize('')).to.equal('');
            expect(str.capitalize()).to.equal('');
            expect(str.capitalize(void 0)).to.equal('');
            expect(str.capitalize(null)).to.equal('');
        });
    });

    describe('.clean()', function () {
        it('Should remove all spaces', function () {
            expect(str.clean('           Hello,      World!             ')).to.equal('Hello, World!');
            expect(str.clean('                        ')).to.equal('');
        });

        it('Should remove all whitespace', function () {
            expect(str.clean('\n Hello,   \t   World!        \r     ')).to.equal('Hello, World!');
            expect(str.clean('\0 \b \t \n \v \f \r')).to.equal('');
        });
    });

    describe('.contains()', function () {
        it('Should return true if str contains subst', function () {
            expect(str.contains('lorem ipsum', 'rem')).to.equal(true);
            expect(str.contains('lorem ipsum', 'i')).to.equal(true);
            expect(str.contains('lorem ipsum', 'or')).to.equal(true);
            expect(str.contains('lorem ipsum', 'sum')).to.equal(true);
        });

        it('Should return false if str does not contain subst', function () {
            expect(str.contains('lorem ipsum', '!')).to.equal(false);
            expect(str.contains('lorem ipsum', 'foo')).to.equal(false);
            expect(str.contains('lorem ipsum', 'bar')).to.equal(false);
        });

        it('Should work with empty sts', function () {
            expect(str.contains('', '')).to.equal(true);
            expect(str.contains('lorem ipsum', '')).to.equal(true);
        });

        it('Should treat null as empty str', function () {
            expect(str.contains(null, 'lorem ipsum')).to.equal(false);
            expect(str.contains(null, '')).to.equal(true);
            expect(str.contains('lorem ipsum', null)).to.equal(true);
            expect(str.contains('', null)).to.equal(true);
        });

        it('Should treat undefined as empty str', function () {
            expect(str.contains(void 0, 'lorem ipsum')).to.equal(false);
            expect(str.contains(void 0, '')).to.equal(true);
            expect(str.contains('lorem ipsum', void 0)).to.equal(true);
            expect(str.contains('', void 0)).to.equal(true);
        });

        it('Should start search at given index', function () {
            expect(str.contains('lorem ipsum', 'l', 0)).to.equal(true);
            expect(str.contains('lorem ipsum', 'i', 1)).to.equal(true);
            expect(str.contains('lorem ipsum', 'r', 3)).to.equal(false);
            expect(str.contains('lorem ipsum', 's', 300)).to.equal(false);
        });

        it('Should treat negative index as zero', function () {
            expect(str.contains('lorem ipsum', 'o', -1)).to.equal(true);
            expect(str.contains('lorem ipsum', 'o', -9)).to.equal(true);
            expect(str.contains('lorem ipsum', 'o', -10)).to.equal(true);
            expect(str.contains('lorem ipsum', 'o', -11)).to.equal(true);
        });
    });

    describe('.count()', function () {
        it('Should find a subst', function () {
            expect(str.count('Hello, World!', 'l')).to.equal(3);
            expect(str.count('Hello, World!', 'll')).to.equal(1);
            expect(str.count(12345, 1)).to.equal(1);
            expect(str.count(99999, 9)).to.equal(5);
            expect(str.count(99999, 99)).to.equal(4);
        });

        it('Should not find a subst', function () {
            expect(str.count('Hello, World!', 'world')).to.equal(0);
            expect(str.count('Hello, World!', '! ')).to.equal(0);
        });

        it('Should work with null, undefined and empty sts', function () {
            expect(str.count('', 'x')).to.equal(0);
            expect(str.count('', '')).to.equal(0);
            expect(str.count(null, 'x')).to.equal(0);
            expect(str.count(void 0, 'x')).to.equal(0);
        });
    });

    describe('.decapitalize()', function () {
        it('Should decapitalize a str', function () {
            expect(str.decapitalize('Lorem ipsum')).to.equal('lorem ipsum');
        });

        it('Should change only first letter of a str', function () {
            expect(str.decapitalize('Lorem IPSUM')).to.equal('lorem IPSUM');
        });

        it('Should work with empty sts', function () {
            expect(str.decapitalize('')).to.equal('');
            expect(str.decapitalize()).to.equal('');
            expect(str.decapitalize(void 0)).to.equal('');
            expect(str.decapitalize(null)).to.equal('');
        });
    });

    describe('.endsWith()', function () {
        it('Should return true if str ends with another str', function () {
            expect(str.endsWith('lorem ipsum', 'ipsum')).to.equal(true);
            expect(str.endsWith('foo bar', 'bar')).to.equal(true);
            expect(str.endsWith(12345, 45)).to.equal(true);
        });

        it('Should return false if str does not ends with another str', function () {
            expect(str.endsWith('lorem ipsum', 'lorem')).to.equal(false);
            expect(str.endsWith('foo bar', 'foo')).to.equal(false);
        });

        it('Should return true if str for search is empty', function () {
            expect(str.endsWith('', '')).to.equal(true);
            expect(str.endsWith('lorem', '')).to.equal(true);
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.endsWith(void 0, 'ipsum')).to.equal(false);
            expect(str.endsWith('lorem', void 0)).to.equal(true);
            expect(str.endsWith(null, '')).to.equal(true);
            expect(str.endsWith('lorem', null)).to.equal(true);
        });
    });

    describe('.escape()', function () {
        it('Should escape a str', function () {
            expect(str.escape('<p>hi!</p>')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
            expect(str.escape('<p>lorem & ipsum</p>')).to.equal('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;');
            expect(str.escape('"hi!"')).to.equal('&quot;hi!&quot;');
            /* jshint -W109 */
            expect(str.escape("'hi!'")).to.equal('&#x27;hi!&#x27;');
            /* jshint +W109 */
        });

        it('Should not escape an escaped str', function () {
            expect(str.escape('lorem &amp; ipsum')).to.equal('lorem &amp; ipsum');
            expect(str.escape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('&lt;p&gt;hi!&lt;/p&gt;');
            expect(str.escape('&#x27;hi!&#x27; & bye!')).to.equal('&#x27;hi!&#x27; &amp; bye!');
        });

        it('Should work with empty sts', function () {
            expect(str.escape('')).to.equal('');
            expect(str.escape()).to.equal('');
            expect(str.escape(void 0)).to.equal('');
            expect(str.escape(null)).to.equal('');
        });
    });

    describe('.insert()', function () {
        it('Should insert a subst in a str', function () {
            expect(str.insert(', World!', 'Hello', 0)).to.equal('Hello, World!');
            expect(str.insert(', World!', 'Hello', null)).to.equal('Hello, World!');
            expect(str.insert('Hello, ', 'World!', 10)).to.equal('Hello, World!');
            expect(str.insert('Hello, Worl', 'd!', 12)).to.equal('Hello, World!');
            expect(str.insert('Hello, Worl', 'd!', '12')).to.equal('Hello, World!');
        });

        it('Should treat undefined index as zero', function () {
            expect(str.insert(', World!', 'Hello')).to.equal('Hello, World!');
            expect(str.insert(', World!', 'Hello', void 0)).to.equal('Hello, World!');
        });

        it('Should accept negative indexes', function () {
            expect(str.insert('Hello, Worl!', 'd', -1)).to.equal('Hello, World!');
            expect(str.insert('o, World!', 'Hell', -10)).to.equal('Hello, World!');
            expect(str.insert('o, World!', 'Hell', '-10')).to.equal('Hello, World!');
        });

        it('Should accept indexes large than the length of a str', function () {
            expect(str.insert('Hello, ', 'World!', 100)).to.equal('Hello, World!');
        });
    });

    describe('.join()', function () {
        it('Should join sts', function () {
            expect(str.join(' ', 'lorem', 'ipsum', 'dolor', 'sit', 'amet')).to.equal('lorem ipsum dolor sit amet');
            expect(str.join('', 'h', 'e', 'l', 'lo')).to.equal('hello');
            expect(str.join('+', 1, 2, 3)).to.equal('1+2+3');
        });

        it('Should ignore null, undefined and empty sts', function () {
            expect(str.join()).to.equal('');
            expect(str.join('', '', '')).to.equal('');
            expect(str.join(' ', null, null)).to.equal('');
            expect(str.join(' ', void 0, void 0)).to.equal('');
            expect(str.join(' ', 'lorem', void 0, void 0)).to.equal('lorem');
        });
    });

    describe('.lchop()', function () {
        it('Should return a str chopped into pieces', function () {
            expect(str.lchop('lorem ipsum', 5)).to.deep.equal(['lorem', ' ipsu', 'm']);
            expect(str.lchop('lorem ipsum', 4)).to.deep.equal(['lore', 'm ip', 'sum']);
            expect(str.lchop('lorem ipsum', 3)).to.deep.equal(['lor', 'em ', 'ips', 'um']);
            expect(str.lchop('lorem ipsum', 2)).to.deep.equal(['lo', 're', 'm ', 'ip', 'su', 'm']);
            expect(str.lchop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.lchop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should work with null and undefined', function () {
            expect(str.lchop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
            expect(str.lchop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.lchop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.lchop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should treat negative step as zero', function () {
            expect(str.lchop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.lchop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.lchop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });
    });

    describe('.lines()', function () {
        it('Should return an array of lines', function () {
            expect(str.lines('lorem\r\nipsum')).to.deep.equal(['lorem', 'ipsum']);
            expect(str.lines('lorem ipsum')).to.deep.equal(['lorem ipsum']);
            expect(str.lines('lorem\ripsum')).to.deep.equal(['lorem\ripsum']);
        });

        it('Should work with empty sts', function () {
            expect(str.lines('')).to.deep.equal(['']);
            expect(str.lines('            ')).to.deep.equal(['            ']);
            expect(str.lines(' \t ')).to.deep.equal([' \t ']);
            expect(str.lines(' \n ')).to.deep.equal([' ', ' ']);
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.lines()).to.deep.equal(['']);
            expect(str.lines(void 0)).to.deep.equal(['']);
            expect(str.lines(null)).to.deep.equal(['']);
        });
    });

    describe('.lpad()', function () {
        it('Should add characters to the left', function () {
            expect(str.lpad('lorem', 4, '^')).to.equal('lorem');
            expect(str.lpad('lorem', 5, '^')).to.equal('lorem');
            expect(str.lpad('lorem', 6, '^')).to.equal('^lorem');
            expect(str.lpad('lorem', 7, '^')).to.equal('^^lorem');
            expect(str.lpad('lorem', 8, '^')).to.equal('^^^lorem');
        });

        it('Should take only first character of padding str', function () {
            expect(str.lpad('lorem', 6, '#')).to.equal('#lorem');
            expect(str.lpad('lorem', 6, '%#')).to.equal('%lorem');
            expect(str.lpad('lorem', 6, '&%#')).to.equal('&lorem');
            expect(str.lpad('lorem', 6, '$&%#')).to.equal('$lorem');
        });

        it('Should treat null and undefined padding str as space', function () {
            expect(str.lpad(void 0, 5, '*')).to.equal('*****');
            expect(str.lpad(null, 5, '*')).to.equal('*****');
        });

        it('Should treat null and undefined padding str as space', function () {
            expect(str.lpad('lorem')).to.equal('lorem');
            expect(str.lpad('lorem', 10, void 0)).to.equal('     lorem');
            expect(str.lpad('lorem', 10, null)).to.equal('     lorem');
        });
    });

    describe('.ltrim()', function () {
        it('Should remove leading whitespaces', function () {
            expect(str.ltrim('           Hello, World! ')).to.equal('Hello, World! ');
            expect(str.ltrim('                        ')).to.equal('');
            expect(str.ltrim('\n Hello,   \t   World!')).to.equal('Hello,   \t   World!');
            expect(str.ltrim('\0 \b \t \nHello, World!')).to.equal('Hello, World!');
        });

        it('Should remove leading given characters', function () {
            expect(str.ltrim('/* Hello, World!*/', '/ ', '*')).to.equal('Hello, World!*/');
            expect(str.ltrim('~~~****Hello, World!', '*~')).to.equal('Hello, World!');
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.ltrim()).to.equal('');
            expect(str.ltrim(void 0)).to.equal('');
            expect(str.ltrim(null)).to.equal('');
        });
    });

    describe('.pad()', function () {
        it('Should add characters to the right', function () {
            expect(str.pad('sit', 4, '^')).to.equal('^sit');
            expect(str.pad('sit', 5, '^')).to.equal('^sit^');
            expect(str.pad('sit', 6, '^')).to.equal('^^sit^');
            expect(str.pad('sit', 7, '^')).to.equal('^^sit^^');
            expect(str.pad('sit', 8, '^')).to.equal('^^^sit^^');
        });

        it('Should take only first character of padding str', function () {
            expect(str.pad('sit', 6, '#')).to.equal('##sit#');
            expect(str.pad('sit', 7, '%#')).to.equal('%%sit%%');
            expect(str.pad('sit', 8, '&%#')).to.equal('&&&sit&&');
            expect(str.pad('sit', 9, '$&%#')).to.equal('$$$sit$$$');
        });

        it('Should treat null and undefined padding str as space', function () {
            expect(str.pad('', 5, '@')).to.equal('@@@@@');
            expect(str.pad(void 0, 5, '@')).to.equal('@@@@@');
            expect(str.pad(null, 5, '@')).to.equal('@@@@@');
        });

        it('Should treat null and undefined padding str as space', function () {
            expect(str.pad('sit')).to.equal('sit');
            expect(str.pad('sit', 9, void 0)).to.equal('   sit   ');
            expect(str.pad('sit', 9, null)).to.equal('   sit   ');
        });
    });

    describe('.rchop()', function () {
        it('Should return a str chopped into pieces', function () {
            expect(str.rchop('lorem ipsum', 5)).to.deep.equal(['l', 'orem ', 'ipsum']);
            expect(str.rchop('lorem ipsum', 4)).to.deep.equal(['lor', 'em i', 'psum']);
            expect(str.rchop('lorem ipsum', 3)).to.deep.equal(['lo', 'rem', ' ip', 'sum']);
            expect(str.rchop('lorem ipsum', 2)).to.deep.equal(['l', 'or', 'em', ' i', 'ps', 'um']);
            expect(str.rchop('lorem ipsum', 1)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.rchop('lorem ipsum', 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should work with null and undefined', function () {
            expect(str.rchop(1234567890)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
            expect(str.rchop('lorem ipsum')).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.rchop('lorem ipsum', void 0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.rchop('lorem ipsum', null)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });

        it('Should treat negative step as zero', function () {
            expect(str.rchop('lorem ipsum', -0)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.rchop('lorem ipsum', -10)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
            expect(str.rchop('lorem ipsum', -1000)).to.deep.equal(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        });
    });

    describe('.remove()', function () {
        it('Should remove a subst from a str', function () {
            var hello = 'Hello, World!';

            expect(str.remove(hello, 0, 2)).to.equal('llo, World!');
            expect(str.remove(hello, 0, 100)).to.equal('');
            expect(str.remove(hello, 0, hello.length)).to.equal('');
            expect(str.remove(hello, 90, 100)).to.equal('Hello, World!');
        });

        it('Should treat undefined index as zero', function () {
            var hello = 'Hello, World!';

            expect(str.remove(hello)).to.equal(hello);
            expect(str.remove(hello, void 0)).to.equal(hello);
            expect(str.remove(hello, void 0, void 0)).to.equal(hello);
            expect(str.remove(hello, null)).to.equal(hello);
            expect(str.remove(hello, null, null)).to.equal(hello);
        });

        it('Should accept negative indexes', function () {
            var hello = 'Hello, World!';

            expect(str.remove(hello, 0, -3)).to.equal('ld!');
            expect(str.remove(hello, 5, -1)).to.equal('Hello!');
            expect(str.remove(hello, 2, -2)).to.equal('Hed!');
            expect(str.remove(hello, -2, -1)).to.equal('Hello, Worl!');
            expect(str.remove(hello, -100, -90)).to.equal('Hello, World!');
        });
    });

    describe('.repeat()', function () {
        it('Should repeat a str n times', function () {
            expect(str.repeat('*', 3)).to.equal('***');
            expect(str.repeat(123, 2)).to.equal('123123');
            expect(str.repeat('lorem', 2)).to.equal('loremlorem');
            expect(str.repeat(' ', 5)).to.equal('     ');
            expect(str.repeat(' ', 0)).to.equal('');
            expect(str.repeat('lorem ipsum', 0)).to.equal('');
        });

        it('Should treat null and undefined as zero', function () {
            expect(str.repeat('lorem ipsum')).to.equal('');
            expect(str.repeat('lorem ipsum', void 0)).to.equal('');
            expect(str.repeat('lorem ipsum', null)).to.equal('');
        });

        it('Should treat a str as zero', function () {
            expect(str.repeat('lorem ipsum', 'null')).to.equal('');
            expect(str.repeat('lorem ipsum', '')).to.equal('');
        });

        it('Should work with negative counts', function () {
            expect(str.repeat('*', -3)).to.equal('');
            expect(str.repeat('lorem', -2)).to.equal('');
            expect(str.repeat(' ', -5)).to.equal('');
        });
    });

    describe('.reverse()', function () {
        it('Should reverse a subst', function () {
            expect(str.reverse('Hello, World!')).to.equal('!dlroW ,olleH');
            expect(str.reverse('')).to.equal('');
            expect(str.reverse(12345)).to.equal('54321');
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.reverse()).to.equal('');
            expect(str.reverse(void 0)).to.equal('');
            expect(str.reverse(null)).to.equal('');
        });
    });

    describe('.rpad()', function () {
        it('Should add characters to the right', function () {
            expect(str.rpad('lorem', 4, '^')).to.equal('lorem');
            expect(str.rpad('lorem', 5, '^')).to.equal('lorem');
            expect(str.rpad('lorem', 6, '^')).to.equal('lorem^');
            expect(str.rpad('lorem', 7, '^')).to.equal('lorem^^');
            expect(str.rpad('lorem', 8, '^')).to.equal('lorem^^^');
        });

        it('Should take only first character of padding str', function () {
            expect(str.rpad('lorem', 6, '#')).to.equal('lorem#');
            expect(str.rpad('lorem', 6, '%#')).to.equal('lorem%');
            expect(str.rpad('lorem', 6, '&%#')).to.equal('lorem&');
            expect(str.rpad('lorem', 6, '$&%#')).to.equal('lorem$');
        });

        it('Should treat null and undefined padding str as space', function () {
            expect(str.rpad(void 0, 5, '*')).to.equal('*****');
            expect(str.rpad(null, 5, '*')).to.equal('*****');
        });

        it('Should treat null and undefined padding str as space', function () {
            expect(str.rpad('lorem')).to.equal('lorem');
            expect(str.rpad('lorem', 10, void 0)).to.equal('lorem     ');
            expect(str.rpad('lorem', 10, null)).to.equal('lorem     ');
        });
    });

    describe('.rtrim()', function () {
        it('Should remove trailing whitespaces', function () {
            expect(str.rtrim(' Hello, World!             ')).to.equal(' Hello, World!');
            expect(str.rtrim('        ')).to.equal('');
            expect(str.rtrim('\tHello,   \t   World!        \r     ')).to.equal('\tHello,   \t   World!');
            expect(str.rtrim('Hello, World!\v \f \r')).to.equal('Hello, World!');
        });

        it('Should remove trailing given characters', function () {
            expect(str.rtrim('/Hello, World! */', '/ ', '*')).to.equal('/Hello, World!');
            expect(str.rtrim('Hello, World!****~~~', '*~')).to.equal('Hello, World!');
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.rtrim()).to.equal('');
            expect(str.rtrim(void 0)).to.equal('');
            expect(str.rtrim(null)).to.equal('');
        });
    });

    describe('.splice()', function () {

    });

    describe('.startsWith()', function () {
        it('Should return true if str starts with another str', function () {
            expect(str.startsWith('lorem ipsum', 'lorem')).to.equal(true);
            expect(str.startsWith('foo bar', 'foo')).to.equal(true);
            expect(str.startsWith(12345, 12)).to.equal(true);
        });

        it('Should return false if str does not starts with another str', function () {
            expect(str.startsWith('lorem ipsum', 'ipsum')).to.equal(false);
            expect(str.startsWith('foo bar', 'bar')).to.equal(false);
        });

        it('Should return true if str for search is empty', function () {
            expect(str.startsWith('', '')).to.equal(true);
            expect(str.startsWith('lorem', '')).to.equal(true);
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.startsWith(void 0, 'ipsum')).to.equal(false);
            expect(str.startsWith('lorem', void 0)).to.equal(true);
            expect(str.startsWith(null, '')).to.equal(true);
            expect(str.startsWith('lorem', null)).to.equal(true);
        });
    });

    describe('.swap()', function () {
        it('Should swap case of characters', function () {
            expect(str.swap('lorem ipsum')).to.equal('LOREM IPSUM');
            expect(str.swap('lOREM iPSUM')).to.equal('Lorem Ipsum');
            expect(str.swap('')).to.equal('');
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.swap()).to.equal('');
            expect(str.swap(void 0)).to.equal('');
            expect(str.swap(null)).to.equal('');
        });
    });

    describe('.template()', function () {
        it('Should return the string replaced with template values', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(str.template('${a} ${b} ${c}', lorem)).to.equal('lorem ipsum dolor');
            expect(str.template('${a} ipsum ${c} sit', lorem)).to.equal('lorem ipsum dolor sit');
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
            expect(str.template('${ ipsum.dolor } ${ sit.amet }', lorem)).to.equal('sit consectetur');
            expect(str.template('${ ipsum.dolor } ${ foo.0 }', lorem)).to.equal('sit foo');
        });

        it('Should work with arrays', function () {
            var lorem = ['lorem', 'ipsum', 'dolor'];
            expect(str.template('${0} ${1} ${2}', lorem)).to.equal('lorem ipsum dolor');
            expect(str.template('${0} ipsum ${2} sit', lorem)).to.equal('lorem ipsum dolor sit');
        });

        it('Should treat null and undefined target as empty string', function () {
            expect(str.template(null, { lorem: 'lorem' })).to.equal('');
            expect(str.template(undefined, { lorem: 'lorem' })).to.equal('');
        });

        it('Should not replace undefined values', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(str.template('${a} ${b} ${c} ${d}', lorem)).to.equal('lorem ipsum dolor ${d}');
        });

        it('Should treat null values as empty string', function () {
            expect(str.template('${lorem}', { lorem: null })).to.equal('');
        });

        it('Should work with mustache syntax', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(str.template('{{a}} {{b}} {{c}}', lorem, /\{\{([^\}]+)\}\}/g)).to.equal('lorem ipsum dolor');
        });

        it('Should work with underscore syntax', function () {
            var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
            expect(str.template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g)).to.equal('lorem ipsum dolor');
        });
    });

    describe('.trim()', function () {
        it('Should remove leading and trailing whitespaces', function () {
            expect(str.trim('           Hello, World!             ')).to.equal('Hello, World!');
            expect(str.trim('                        ')).to.equal('');
            expect(str.trim('\n Hello,   \t   World!        \r     ')).to.equal('Hello,   \t   World!');
            expect(str.trim('\0 \b \t \nHello, World!\v \f \r')).to.equal('Hello, World!');
        });

        it('Should remove leading and trailing given characters', function () {
            expect(str.trim('/* Hello, World! */', '/ ', '*')).to.equal('Hello, World!');
            expect(str.trim('~~~****Hello, World!****~~~', '*~')).to.equal('Hello, World!');
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.trim()).to.equal('');
            expect(str.trim(void 0)).to.equal('');
            expect(str.trim(null)).to.equal('');
        });
    });

    describe('.truncate()', function () {
        var string = 'lorem ipsum dolor sit amet';

        it('Should limit number of chars', function () {
            expect(str.truncate(string, 10)).to.have.length.below(11);
            expect(str.truncate(string, 10)).to.equal('lorem i...');

            expect(str.truncate(string, 14)).to.have.length.below(15);
            expect(str.truncate(string, 14)).to.equal('lorem ipsum...');
        });

        it('Should append str param', function () {
            var truncated = str.truncate(string, 10, '--');
            expect(truncated).to.have.length.below(11);
            expect(truncated).to.equal('lorem ip--');
        });

        it('Should allow cropping at full words', function () {
            expect(str.truncate(string, 10, '*', true)).to.have.length.below(11);
            expect(str.truncate(string, 10, '*', true)).to.equal('lorem*');

            expect(str.truncate(string, 14, null, true)).to.have.length.below(15);
            expect(str.truncate(string, 14, null, true)).to.equal('lorem ipsum...');
        });
    });

    describe('.unescape()', function () {
        it('Should escape a str', function () {
            expect(str.unescape('&lt;p&gt;hi!&lt;/p&gt;')).to.equal('<p>hi!</p>');
            expect(str.unescape('&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;')).to.equal('<p>lorem & ipsum</p>');
            expect(str.unescape('&quot;hi!&quot;')).to.equal('"hi!"');
            /* jshint -W109 */
            expect(str.unescape('&#x27;hi!&#x27;')).to.equal("'hi!'");
            /* jshint +W109 */
        });

        it('Should work with empty sts', function () {
            expect(str.unescape('')).to.equal('');
            expect(str.unescape()).to.equal('');
            expect(str.unescape(void 0)).to.equal('');
            expect(str.unescape(null)).to.equal('');
        });
    });

    describe('.words()', function () {
        it('Should return an array of words', function () {
            expect(str.words('lorem ipsum dolor sit')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(str.words('      lorem        ipsum         dolor        sit     ')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(str.words('lorem-ipsum-dolor-sit', '-')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(str.words('lorem_ipsum_dolor_sit', '_')).to.deep.equal(['lorem', 'ipsum', 'dolor', 'sit']);
            expect(str.words(123)).to.deep.equal(['123']);
        });

        it('Should work with blank sts', function () {
            expect(str.words('')).to.deep.equal([]);
            expect(str.words('                ')).to.deep.equal([]);
        });

        it('Should treat null and undefined as empty str', function () {
            expect(str.words()).to.deep.equal([]);
            expect(str.words(void 0)).to.deep.equal([]);
            expect(str.words(null)).to.deep.equal([]);
        });
    });
});
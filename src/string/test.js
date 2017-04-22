import { expect } from 'chai';
import string, { camelize, capitalize, chop, chopRight, clean, count, decapitalize, escape, extract, insert, isBlank, isChar, isEmpty, isString, join, lines, pad, padLeft, padRight, remove, repeat, reverse, swap, template, trim, trimLeft, trimRight, truncate, unescape } from '.';

describe('doremi/string', () => {
    it('Imports doremi/string as object', () => {
        expect(string).to.be.an('object');
    });

    it('doremi/string has correct properies', () => {
        expect(string.camelize).to.equal(camelize);
        expect(string.capitalize).to.equal(capitalize);
        expect(string.chop).to.equal(chop);
        expect(string.chopRight).to.equal(chopRight);
        expect(string.clean).to.equal(clean);
        expect(string.count).to.equal(count);
        expect(string.decapitalize).to.equal(decapitalize);
        expect(string.escape).to.equal(escape);
        expect(string.extract).to.equal(extract);
        expect(string.insert).to.equal(insert);
        expect(string.isBlank).to.equal(isBlank);
        expect(string.isChar).to.equal(isChar);
        expect(string.isEmpty).to.equal(isEmpty);
        expect(string.isString).to.equal(isString);
        expect(string.join).to.equal(join);
        expect(string.lines).to.equal(lines);
        expect(string.pad).to.equal(pad);
        expect(string.padLeft).to.equal(padLeft);
        expect(string.padRight).to.equal(padRight);
        expect(string.remove).to.equal(remove);
        expect(string.repeat).to.equal(repeat);
        expect(string.reverse).to.equal(reverse);
        expect(string.swap).to.equal(swap);
        expect(string.template).to.equal(template);
        expect(string.trim).to.equal(trim);
        expect(string.trimLeft).to.equal(trimLeft);
        expect(string.trimRight).to.equal(trimRight);
        expect(string.truncate).to.equal(truncate);
        expect(string.unescape).to.equal(unescape);
    });
});

'use strict';

import { expect } from 'chai';
import plural from '../../src/string/plural';

describe('string/plural()', () => {
    describe('check locale', () => {
        it('Should return forms for EN locale', () => {
            expect(plural(2, ['apple', 'apples'])).to.equal('apples');
            expect(plural(5, ['apple', 'apples'])).to.equal('apples');
            expect(plural(5, ['яблоко', 'яблока', 'яблок'])).to.equal('яблока');
        });

        it('Should return forms for RU locale', () => {
            expect(plural(2, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблока');
            expect(plural(5, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблок');
            expect(plural(5, ['яблоко', 'яблока', 'яблок'], 'ru')).to.not.equal('яблока');
        });
    });

    describe('EN locale', () => {
        it('Should return singular form', () => {
            expect(plural(1, ['apple', 'apples'])).to.equal('apple');
        });

        it('Should return plural form', () => {
            expect(plural(2, ['apple', 'apples'])).to.equal('apples');
            expect(plural(5, ['apple', 'apples'])).to.equal('apples');
            expect(plural(11, ['apple', 'apples'])).to.equal('apples');
            expect(plural(100, ['apple', 'apples'])).to.equal('apples');
            expect(plural(1001, ['apple', 'apples'])).to.equal('apples');
        });
    });

    describe('RU locale', () => {
        it('Should return singular form', () => {
            expect(plural(1, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблоко');
        });

        it('Should return plural form', () => {
            expect(plural(2, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблока');
            expect(plural(5, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблок');
            expect(plural(11, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблок');
            expect(plural(21, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблоко');
            expect(plural(102, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблока');
            expect(plural(101, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблоко');
            expect(plural(1001, ['яблоко', 'яблока', 'яблок'], 'ru')).to.equal('яблоко');
        });
    });
});
import { expect } from 'chai';
import round from '.';

describe('number/round()', () => {
    it('Rounds down value', () => {
        expect(round(42.4)).to.equal(42);
        expect(round(42.5)).to.equal(43);
        expect(round(42.6)).to.equal(43);
        expect(round(0.4)).to.equal(0);
        expect(round(0.5)).to.equal(1);
        expect(round(0.6)).to.equal(1);
    });

    it('Works with negative values', () => {
        expect(round(-42.4)).to.equal(-42);
        expect(round(-42.5)).to.equal(-42);
        expect(round(-42.6)).to.equal(-43);
        expect(round(-0.4)).to.equal(0);
        expect(round(-0.5)).to.equal(-0);
        expect(round(-0.6)).to.equal(-1);
    });

    it('Allows custom precision', function () {
        expect(round(5.4321, 3)).to.equal(5.432);
        expect(round(5.4326, 3)).to.equal(5.433);

        expect(round(5.4321, 2)).to.equal(5.43);
        expect(round(5.4361, 2)).to.equal(5.44);

        expect(round(5.4321, 1)).to.equal(5.4);
        expect(round(5.4621, 1)).to.equal(5.5);

        expect(round(5.4321, 0)).to.equal(5);
        expect(round(5.6321, 0)).to.equal(6);

        expect(round(-5.4321, 3)).to.equal(-5.432);
        expect(round(-5.4326, 3)).to.equal(-5.433);

        expect(round(-5.4321, 2)).to.equal(-5.43);
        expect(round(-5.4361, 2)).to.equal(-5.44);

        expect(round(-5.4321, 1)).to.equal(-5.4);
        expect(round(-5.4621, 1)).to.equal(-5.5);

        expect(round(-5.4321, 0)).to.equal(-5);
        expect(round(-5.6321, 0)).to.equal(-6);
    });

    it('Allows custom negative precision', () => {
        expect(round(54321, -3)).to.equal(54000);
        expect(round(54621, -3)).to.equal(55000);

        expect(round(54321, -2)).to.equal(54300);
        expect(round(54361, -2)).to.equal(54400);

        expect(round(54321, -1)).to.equal(54320);
        expect(round(54326, -1)).to.equal(54330);

        expect(round(-54321, -3)).to.equal(-54000);
        expect(round(-54621, -3)).to.equal(-55000);

        expect(round(-54321, -2)).to.equal(-54300);
        expect(round(-54361, -2)).to.equal(-54400);

        expect(round(-54321, -1)).to.equal(-54320);
        expect(round(-54326, -1)).to.equal(-54330);
    });

    it('Returns NaN for non-numeric value', () => {
        expect(round('')).to.deep.equal(NaN);
        expect(round('42')).to.deep.equal(NaN);
        expect(round('42.42')).to.deep.equal(NaN);
        expect(round(void 0)).to.deep.equal(NaN);
        expect(round(null)).to.deep.equal(NaN);
        expect(round({})).to.deep.equal(NaN);
        expect(round([])).to.deep.equal(NaN);
        expect(round(true)).to.deep.equal(NaN);
    });
});

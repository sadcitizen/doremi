'use strict';

import { expect } from 'chai';
import sinon from 'sinon';
import delay from '../../src/func/delay';

describe('function/delay()', () => {
    it('Should return new function', () => {
        expect(delay(sinon.spy(), 100)).to.be.a('function');
    });
});
const { JSDOM } = require('jsdom');

import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

copyProps(window, global);

chai.use(chaiImmutable);

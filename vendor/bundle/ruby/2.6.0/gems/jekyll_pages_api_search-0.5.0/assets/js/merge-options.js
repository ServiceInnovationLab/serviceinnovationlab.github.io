/* eslint-env node */

'use strict';

module.exports = function(defaults, options, result) {
  var unknownNames;

  unknownNames = Object.keys(options).filter(function(propertyName) {
    return !defaults.hasOwnProperty(propertyName);
  });

  if (unknownNames.length !== 0) {
    throw new Error('options object contains unknown properties:\n  ' +
      unknownNames.join('\n  '));
  }

  Object.keys(defaults).forEach(function(propertyName) {
    var opt = options[propertyName];
    result[propertyName] = opt !== undefined ? opt : defaults[propertyName];
  });
  return result;
};

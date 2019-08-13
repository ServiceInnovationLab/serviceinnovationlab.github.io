/* eslint-env browser, node */

'use strict';

var mergeOptions = require('./merge-options');
var lunr = require('lunr');
var querystring = require('querystring');
var url = require('url');

module.exports = SearchEngine;

function SearchEngine(options) {
  mergeOptions(SearchEngine.DEFAULTS, options || {}, this);
}

SearchEngine.DEFAULTS = {
  queryParam: 'q'
};

SearchEngine.prototype.fetchIndex = function(indexUrl) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();

    req.addEventListener('load', function() {
      var rawJson;

      try {
        rawJson = JSON.parse(this.responseText);
        resolve({
          urlToDoc: rawJson.urlToDoc,
          index: lunr.Index.load(rawJson.index)
        });
      } catch (err) {
        reject(new Error('failed to parse ' + indexUrl));
      }
    });
    req.addEventListener('error', function() {
      reject(new Error('failed to make XMLHttpRequest; ' +
        'see console for details'));
    });
    req.open('GET', indexUrl);
    req.send();
  });
};

SearchEngine.prototype.parseSearchQuery = function(queryUrl) {
  return querystring.parse(url.parse(queryUrl).query)[this.queryParam];
};

SearchEngine.prototype.getResults = function(query, searchIndex) {
  var results = searchIndex.index.search(query);

  results.forEach(function(result) {
    var urlAndTitle = searchIndex.urlToDoc[result.ref];

    Object.keys(urlAndTitle).forEach(function(key) {
      result[key] = urlAndTitle[key];
    });
  });
  return results;
};

SearchEngine.prototype.executeSearch = function(baseUrl, queryUrl) {
  var searchEngine = this;
  return searchEngine.fetchIndex(baseUrl)
    .then(function(searchIndex) {
      var query = searchEngine.parseSearchQuery(queryUrl),
          results = searchEngine.getResults(query, searchIndex);
      return Promise.resolve({ query: query, results: results });
    });
};

/*!
selectivizr v1.0.3b - (c) Keith Clark, freely distributable under the terms
of the MIT license.

selectivizr.com
*/
(function (M) {
  var N = navigator.userAgent.match(/MSIE (\d+)/);
  if (!N) {
    return false;
  }
  var m = document;
  var y = m.documentElement;
  var Y = t();
  var x = N[1];
  if (m.compatMode != 'CSS1Compat' || x < 6 || x > 8 || !Y) {
    return;
  }
  var B = {
    NW: '*.Dom.select',
    MooTools: '$$',
    DOMAssistant: '*.$',
    Prototype: '$$',
    YAHOO: '*.util.Selector.query',
    Sizzle: '*',
    jQuery: '*',
    dojo: '*.query'
  };
  var w;
  var X = [];
  var z = [];
  var C = 0;
  var d = true;
  var L = 'slvzr';
  var b = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g;
  var q = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g;
  var E = /(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g;
  var F = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
  var V = /:(:first-(?:line|letter))/g;
  var G = /((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g;
  var D = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;
  var K = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
  var aa = /[^\w-]/g;
  var r = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
  var p = /^(checkbox|radio)$/;
  var v = x > 6 ? /[\$\^*]=(['"])\1/ : null;
  var e = /([(\[+~])\s+/g;
  var O = /\s+([)\]+~])/g;
  var s = /\s+/g;
  var c = /^\s*((?:[\S\s]*\S)?)\s*$/;
  var u = '';
  var o = ' ';
  var Z = '$1';
  function W(ab) {
    return ab.replace(V, Z).replace(G, function (ad, ai, ah) {
      var ae = ah.split(',');
      for (var aj = 0, ag = ae.length; aj < ag; aj++) {
        var ac = i(ae[aj]) + o;
        var af = [];
        ae[aj] = ac.replace(D, function (al, an, ao, am, ak) {
          if (an) {
            if (af.length > 0) {
              z.push({ selector: ac.substring(0, ak), patches: af });
              af = [];
            }
            return an;
          } else {
            var ap = ao ? A(ao) : U(am);
            if (ap) {
              af.push(ap);
              return '.' + ap.className;
            }
            return al;
          }
        });
      }
      return ai + ae.join(',');
    });
  }
  function U(ab) {
    return !v || v.test(ab) ? { className: H(ab), applyClass: true } : null;
  }
  function A(ag) {
    var af = true;
    var ae = H(ag.slice(1));
    var ad = ag.substring(0, 5) == ':not(';
    var ac;
    var ah;
    if (ad) {
      ag = ag.slice(5, -1);
    }
    var ab = ag.indexOf('(');
    if (ab > -1) {
      ag = ag.substring(0, ab);
    }
    if (ag.charAt(0) == ':') {
      switch (ag.slice(1)) {
        case 'root':
          af = function (ai) {
            return ad ? ai != y : ai == y;
          };
          break;
        case 'target':
          if (x == 8) {
            af = function (aj) {
              var ai = function () {
                var al = location.hash;
                var ak = al.slice(1);
                return ad ? al == u || aj.id != ak : al != u && aj.id == ak;
              };
              n(M, 'hashchange', function () {
                I(aj, ae, ai());
              });
              return ai();
            };
            break;
          }
          return false;
        case 'checked':
          af = function (ai) {
            if (p.test(ai.type)) {
              n(ai, 'propertychange', function () {
                if (event.propertyName == 'checked') {
                  I(ai, ae, ai.checked !== ad);
                }
              });
            }
            return ai.checked !== ad;
          };
          break;
        case 'disabled':
          ad = !ad;
        case 'enabled':
          af = function (ai) {
            if (r.test(ai.tagName)) {
              n(ai, 'propertychange', function () {
                if (event.propertyName == '$disabled') {
                  I(ai, ae, ai.$disabled === ad);
                }
              });
              X.push(ai);
              ai.$disabled = ai.disabled;
              return ai.disabled === ad;
            }
            return ag == ':enabled' ? ad : !ad;
          };
          break;
        case 'focus':
          ac = 'focus';
          ah = 'blur';
        case 'hover':
          if (!ac) {
            ac = 'mouseenter';
            ah = 'mouseleave';
          }
          af = function (ai) {
            n(ai, ad ? ah : ac, function () {
              I(ai, ae, true);
            });
            n(ai, ad ? ac : ah, function () {
              I(ai, ae, false);
            });
            return ad;
          };
          break;
        default:
          if (!F.test(ag)) {
            return false;
          }
          break;
      }
    }
    return { className: ae, applyClass: af };
  }
  function R() {
    var ae, ab, ac, aj;
    for (var am = 0; am < z.length; am++) {
      ab = z[am].selector;
      ac = z[am].patches;
      aj = ab.replace(K, u);
      if (aj == u || aj.charAt(aj.length - 1) == o) {
        aj += '*';
      }
      try {
        ae = w(aj);
      } catch (al) {}
      if (ae) {
        for (var ak = 0, af = ae.length; ak < af; ak++) {
          var ai = ae[ak];
          var ah = ai.className;
          for (var ag = 0, an = ac.length; ag < an; ag++) {
            var ad = ac[ag];
            if (!P(ai, ad)) {
              if (ad.applyClass && (ad.applyClass === true || ad.applyClass(ai) === true)) {
                ah = g(ah, ad.className, true);
              }
            }
          }
          ai.className = ah;
        }
      }
    }
  }
  function P(ac, ab) {
    return new RegExp('(^|\\s)' + ab.className + '(\\s|$)').test(ac.className);
  }
  function H(ab) {
    return (
      L +
      '-' +
      (x == 6 && d
        ? C++
        : ab.replace(aa, function (ac) {
            return ac.charCodeAt(0);
          }))
    );
  }
  function a(ab) {
    return ab.replace(c, Z);
  }
  function l(ab) {
    return a(ab).replace(s, o);
  }
  function i(ab) {
    return l(ab.replace(e, Z).replace(O, Z));
  }
  function I(af, ae, ab) {
    var ad = af.className;
    var ac = g(ad, ae, ab);
    if (ac != ad) {
      af.className = ac;
      af.parentNode.className += u;
    }
  }
  function g(ae, ad, ab) {
    var ac = RegExp('(^|\\s)' + ad + '(\\s|$)');
    var af = ac.test(ae);
    if (ab) {
      return af ? ae : ae + o + ad;
    } else {
      return af ? a(ae.replace(ac, Z)) : ae;
    }
  }
  function n(ad, ab, ac) {
    ad.attachEvent('on' + ab, ac);
  }
  function t() {
    if (M.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (ab) {
      return null;
    }
  }
  function k(ab) {
    Y.open('GET', ab, false);
    Y.send();
    return Y.status == 200 ? Y.responseText : u;
  }
  function J(ad, ac, af) {
    function ae(ah) {
      return ah.substring(0, ah.indexOf('//'));
    }
    function ag(ah) {
      return ah.substring(0, ah.indexOf('/', 8));
    }
    if (!ac) {
      ac = j;
    }
    if (ad.substring(0, 2) == '//') {
      ad = ae(ac) + ad;
    }
    if (/^https?:\/\//i.test(ad)) {
      return !af && ag(ac) != ag(ad) ? null : ad;
    }
    if (ad.charAt(0) == '/') {
      return ag(ac) + ad;
    }
    var ab = ac.split(/[?#]/)[0];
    if (ad.charAt(0) != '?' && ab.charAt(ab.length - 1) != '/') {
      ab = ab.substring(0, ab.lastIndexOf('/') + 1);
    }
    return ab + ad;
  }
  function Q(ab) {
    if (ab) {
      return k(ab)
        .replace(b, u)
        .replace(q, function (af, ag, ac, ae, ad, ai) {
          var ah = Q(J(ac || ad, ab));
          return ai ? '@media ' + ai + ' {' + ah + '}' : ah;
        })
        .replace(E, function (ad, af, ae, ac) {
          ae = ae || u;
          return af ? ad : ' url(' + ae + J(ac, ab, true) + ae + ') ';
        });
    }
    return u;
  }
  function h() {
    var ab, ac;
    for (var ad = 0; ad < m.styleSheets.length; ad++) {
      ac = m.styleSheets[ad];
      if (ac.href != u) {
        ab = J(ac.href);
        if (ab) {
          ac.cssText = ac.rawCssText = W(Q(ab));
        }
      }
    }
  }
  function S() {
    R();
    if (X.length > 0) {
      setInterval(function () {
        for (var ad = 0, ab = X.length; ad < ab; ad++) {
          var ac = X[ad];
          if (ac.disabled !== ac.$disabled) {
            if (ac.disabled) {
              ac.disabled = false;
              ac.$disabled = true;
              ac.disabled = true;
            } else {
              ac.$disabled = ac.disabled;
            }
          }
        }
      }, 250);
    }
  }
  var f = m.getElementsByTagName('BASE');
  var j = f.length > 0 ? f[0].href : m.location.href;
  h();
  T(M, function () {
    for (var ad in B) {
      var ab,
        ae,
        ac = M;
      if (M[ad]) {
        ab = B[ad].replace('*', ad).split('.');
        while ((ae = ab.shift()) && (ac = ac[ae])) {}
        if (typeof ac == 'function') {
          w = ac;
          S();
          return;
        }
      }
    }
  });
  /*!
   * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */
  function T(af, ac) {
    var ab = false,
      ae = true,
      ah = function (ai) {
        if (ai.type == 'readystatechange' && m.readyState != 'complete') {
          return;
        }
        (ai.type == 'load' ? af : m).detachEvent('on' + ai.type, ah, false);
        if (!ab && (ab = true)) {
          ac.call(af, ai.type || ai);
        }
      },
      ag = function () {
        try {
          y.doScroll('left');
        } catch (ai) {
          setTimeout(ag, 50);
          return;
        }
        ah('poll');
      };
    if (m.readyState == 'complete') {
      ac.call(af, u);
    } else {
      if (m.createEventObject && y.doScroll) {
        try {
          ae = !af.frameElement;
        } catch (ad) {}
        if (ae) {
          ag();
        }
      }
      n(m, 'readystatechange', ah);
      n(af, 'load', ah);
    }
  }
})(this);

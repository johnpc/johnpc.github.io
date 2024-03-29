!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? "http" : "https";
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "twitter-wjs");
window.lightwidget ||
  (window.lightwidget = (function () {
    "use strict";
    var t = [],
      i = 0,
      n = !1,
      e = !1,
      o = function (t) {
        return (e = t);
      },
      d = function (t, i) {
        t.contentWindow &&
          t.contentWindow.postMessage(
            "sizing:" + i,
            window.location.protocol + "//lightwidget.com",
          );
      },
      c = function (i) {
        if (
          i.origin == window.location.protocol + "//lightwidget.com" ||
          i.origin == window.location.protocol + "//instansive.com"
        ) {
          var n = i.data.split(":");
          try {
            "sizing" == n[0] &&
              void 0 != t[parseInt(n[2])] &&
              (t[parseInt(n[2])].style.height = n[1] + "px");
          } catch (e) {}
        }
      },
      s = function (t) {
        e && console.log(t);
        var i = t.origin.replace(/^https?\:\/\//i, "");
        if ("lightwidget.com" == i || "instansive.com" == i) {
          var n = t.data.split(":");
          e && console.log(n);
          try {
            if ("sizing_iid" == n[0]) {
              var o = n[2];
              void 0 != document.getElementById(o)
                ? (document.getElementById(o).style.height = n[1] + "px")
                : ((o = o.replace("instansive", "lightwidget")),
                  void 0 != document.getElementById(o) &&
                    (document.getElementById(o).style.height = n[1] + "px"));
            }
          } catch (d) {
            e && console.log(d);
          }
        }
      },
      g = function () {
        window.addEventListener
          ? (window.addEventListener("message", c, !1),
            window.addEventListener("message", s, !1))
          : (window.attachEvent("onmessage", c),
            window.attachEvent("onmessage", s));
      };
    return (
      g(),
      {
        refresh: function () {
          if (n) for (var e = 0; i > e; e++) d(t[e], e);
        },
        reload: function () {
          g();
        },
        debug: function (t) {
          return o(t);
        },
      }
    );
  })()),
  window.lightwidget.refresh();

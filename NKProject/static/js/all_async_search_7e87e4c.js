function addEV(t, e, i) {
  window.attachEvent ? t.attachEvent("on" + e, i) : window.addEventListener && t.addEventListener(e, i, !1)
}

function _aMC(t) {
  for (var e = t, i = -1; e = e.parentNode;) if (i = parseInt(e.getAttribute("id")), i > 0) return i
}

function al_c(t) {
  for (; "TABLE" != t.tagName;) t = t.parentNode;
  return t.getAttribute("id")
}

function al_c2(t, e) {
  for (; e--;) for (; "TABLE" != (t = t.parentNode).tagName;) ;
  return t.getAttribute("id")
}

function c(t) {
  var e = t.p1;
  if (!("alop" != t.fm || "rsv_xpath" in t || e && "6677" == G(e).getAttribute("srcid"))) return !0;
  !e || "p5" in t || (t.p5 = e);
  var i = window.document.location.href, n = "", o = "", s = "",
    a = window["BD_PS_C" + (new Date).getTime()] = new Image;
  for (v in t) {
    switch (v) {
      case"title":
        o = t[v].replace(/<[^<>]+>/g, ""), o && o.length > 100 && (o = o.substring(0, 100)), o = encodeURIComponent(o);
        break;
      case"mu":
      case"url":
        o = escape(t[v]);
        break;
      default:
        o = t[v]
    }
    n += "&" + v + "=" + o
  }
  if (!("mu" in t)) try {
    "p2" in t && G(t.p1).getAttribute("mu") && "pl" != t.fm && (s = "&mu=" + escape(G(t.p1).getAttribute("mu")))
  } catch (r) {
  }
  if (window.bds && bds.comm) {
    var c = bds.comm.ubsurl + "?q=" + bds.comm.queryEnc + n + s + "&rsv_sid=" + bds.comm.sid + "&cid=" + bds.comm.cid + "&qid=" + bds.comm.queryId + "&t=" + (new Date).getTime();
    if (bds.comm.inter && (c = c + "&rsv_inter=" + bds.comm.inter), bds.comm.seinfo && bds.comm.seinfo.rsv_pstg && (c = c + "&rsv_pstg=" + bds.comm.seinfo.rsv_pstg), bds.comm.cftime && 0 != bds.comm.cftime && (c = c + "&rsv_cftime=" + bds.comm.cftime), c += bds.comm.resultPage ? "&rsv_iorr=1" : "&rsv_iorr=0", bds.comm.tn && (c = c + "&rsv_tn=" + bds.comm.tn), bds.comm.indexSid && (c += "&rsv_isid=" + bds.comm.indexSid), bds.comm.lastVoiceQuery && (c += "&rsv_lavo=" + encodeURIComponent(bds.comm.lastVoiceQuery)), Cookie.get("ispeed") && (c += "&rsv_ispeed=" + Cookie.get("ispeed")), /ssl_sample/.test(location.href)) {
      var d = location.href.match(/ssl_sample=[^=&]+/i);
      c += "&rsv_" + d[0]
    }
    if (/ssl_s=/.test(location.href)) {
      var d = location.href.match(/ssl_s=[^=&]+/i);
      c += "&rsv_" + d[0]
    }
    c += "&rsv_ssl=" + ("https:" === location.protocol ? 1 : 0), c += "&path=" + encodeURIComponent(i), c += "&rsv_did=" + (bds.comm.did ? bds.comm.did : ""), a.src = c
  }
  return !0
}

function TagQ(t, e) {
  return e.getElementsByTagName(t)
}

function h(t) {
  t.style.behavior = "url(#default#homepage)", t.setHomePage(bds.comm.domain);
  var e = window["BD_PS_C" + (new Date).getTime()] = new Image;
  e.src = bds.comm.ubsurl + "?fm=hp&tn=" + bds.comm.tn + "&t=" + (new Date).getTime()
}

function G(t) {
  return document.getElementById(t)
}

function ns_c_pj(t, e) {
  var i = encodeURIComponent(window.document.location.href), n = "", o = "", s = "",
    a = bds && bds.comm && bds.comm.did ? bds.comm.did : "";
  wd = bds.comm.queryEnc, nsclickDomain = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com", img = window["BD_PS_C" + (new Date).getTime()] = new Image, src = "";
  for (v in t) {
    switch (v) {
      case"title":
        o = encodeURIComponent(t[v].replace(/<[^<>]+>/g, ""));
        break;
      case"url":
        o = encodeURIComponent(t[v]);
        break;
      default:
        o = t[v]
    }
    n += v + "=" + o + "&"
  }
  if (s = "&mu=" + i, src = nsclickDomain + "/v.gif?pid=201&" + (e || "") + n + "path=" + i + "&wd=" + wd + "&rsv_sid=" + (bds.comm.ishome && bds.comm.indexSid ? bds.comm.indexSid : bds.comm.sid) + "&rsv_did=" + a + "&t=" + (new Date).getTime(), "undefined" != typeof Cookie && "undefined" != typeof Cookie.get) Cookie.get("H_PS_SKIN") && "0" != Cookie.get("H_PS_SKIN") && (src += "&rsv_skin=1"); else {
    var r = "";
    try {
      r = parseInt(document.cookie.match(new RegExp("(^| )H_PS_SKIN=([^;]*)(;|$)"))[2])
    } catch (c) {
    }
    r && "0" != r && (src += "&rsv_skin=1")
  }
  return img.src = src, !0
}

function ns_c(t, e) {
  return e === !0 ? ns_c_pj(t, "pj=www&rsv_sample=1&") : ns_c_pj(t, "pj=www&")
}

function escapeHTML(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/"/g, "&#34;").replace(/'/g, "&#39;")
}

function initPreload(t) {
  function e() {
    Cookie.set("ISSW", "1", null, null, new Date((new Date).getTime() + 3e5))
  }

  function i(t, e) {
    e = e || 3, Cookie.set("ISWR", t, null, null, new Date((new Date).getTime() + 1e3 * e))
  }

  function n(t) {
    t && "string" == typeof t && (t = $.parseJSON(t)), t && t.length && $.each(t, function (t, e) {
      if (0 === e.indexOf(le.protocol)) {
        var i = new Image;
        i.src = e
      }
    })
  }

  function o(t) {
    return $.trim(t).replace(/\s+/g, " ")
  }

  function s(t) {
    if ("string" == typeof t) {
      var e, i = 0;
      for (e = 0; e < t.length; e++) i += t.charCodeAt(e);
      return i
    }
    return 0
  }

  function a(t) {
    var e, i, n, o, s = {};
    t.indexOf("?") > -1 ? (n = t.split("?"), o = n[1]) : o = t, e = o.indexOf("&") > -1 ? o.split("&") : new Array(o);
    for (var a = 0; a < e.length; a++) try {
      e[a] = e[a].indexOf("=") > -1 ? e[a] : e[a] + "=", i = e[a].split("="), s[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " "))
    } catch (r) {
    }
    return s
  }

  function r(t) {
    function e(t) {
      if (document.all) $("style[data-for='result']").get(0).styleSheet.cssText += t;
      else {
        var e = document.createElement("style");
        e.type = "text/css", e.appendChild(document.createTextNode(t)), e.setAttribute("data-for", "result"), document.getElementsByTagName("HEAD")[0].appendChild(e)
      }
    }

    function i() {
      G.css({
        filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)",
        opacity: .95
      }), V || (e(".slowmsg{z-index:301;background-color:#fff;border:1px solid #f0f0f0;position:fixed;_position:absolute;top:144px;left:212px;height:95px;width:360px;box-shadow:0 0 5px rgba(0,0,0,0.05)}.slowmsg .ball{width:40px;margin:41px auto 0;position:relative;}.slowmsg .b{left:20px;position:absolute;width:10px;height:10px;-moz-border-radius: 50%;-webkit-border-radius: 50%;border-radius: 50%;}"), V = $('<div class="slowmsg"><div class="ball"><div class="b"/><div class="b"/><div class="b"/></div></div>'), V.find(".b").each(function (t, e) {
        var i = [[0, 40], [20, 20], [40, 0]][t], n = ["rgb(55,137,250)", "rgb(99,99,99)", "rgb(235,67,70)"], o = 0;
        $(e).css({"background-color": n[t]}), function s() {
          return J ? ($(e).animate({left: i[o % 2]}, {
            duration: 800, easing: "swing", progress: function (i, s) {
              s >= .5 && $(e).css({"background-color": n[(o + t) % 3]})
            }, complete: function () {
              s()
            }
          }), void o++) : void setTimeout(s, 400)
        }()
      })), V.appendTo(ri), ns_c({pj_name: "loading_msg"})
    }

    function n() {
      var t, e = (new Date).getTime();
      Cookie.set("rsv_jmp_slow", e), Cookie.set("WWW_ST", e, null, null, new Date(e + 3e4)), t = le.href + (le.href.indexOf("?") > 0 ? "&" : "?") + "rsv_jmp=slow", le.replace(t)
    }

    if (!Z) {
      var t = $.extend({top: 93, "z-index": 300}, t), o = $(window).height();
      G || (G = $("<div id='_mask'/>")), G.css({
        filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
        opacity: .3,
        position: "absolute",
        background: "#fff",
        "z-index": t["z-index"],
        top: t.top + "px",
        left: "0"
      }), Z = !0, G.width(ri.width()), G.height(Math.max(o, ri.height()) - t.top), G.appendTo(ri), $(window).scrollTop(), J = setTimeout(i, 3e3), K = setTimeout(n, 7e3), Y = function () {
        J && (clearTimeout(J), J = setTimeout(i, 3e3)), K && (clearTimeout(K), K = setTimeout(n, 7e3))
      }
    }
  }

  function d() {
    G && Z && (Z = !1, G.remove(), V && V.remove(), J && (clearTimeout(J), J = !1), X && X.remove(), K && (clearTimeout(K), K = !1))
  }

  function l(t, e, i) {
    i || (i = 0);
    var n = t.length;
    for (0 > i && (i = n + i); n > i; i++) if (t[i] === e) return i;
    return -1
  }

  function u(t, e, i) {
    var n = e.find("script:not([src])"), o = 0, s = $.globalEval;
    $.globalEval = function (t) {
      window.currentScriptElem = n[o], o++;
      try {
        s.apply($, arguments)
      } catch (e) {
        window.console && console.debug && (console.debug(t), console.debug(e))
      }
    }, "insertBefore" == i ? e.insertBefore(t) : t.append(e), window.currentScriptElem = void 0, $.globalEval = s
  }

  function m(t) {
    try {
      t()
    } catch (e) {
      window.console && console.debug && console.debug(e), te(e.toString())
    }
  }

  function p(t, e) {
    function i(t) {
      if ("object" == typeof t) {
        var e = {};
        for (r in t) t.hasOwnProperty(r) && (e[r] = t[r])
      } else e = t;
      return e
    }

    if (!p.__init) {
      p.__init = !0;
      var n = ["wd", "pn", "nojc", "cl", "cq", "srcid", "gpc", "tfflag", "si", "sl_lang", "rsv_srlang", "rqlang"],
        o = ["wd", "cl", "ct", "tn", "rn", "ie", "f", "lm", "si", "gpc", "tfflag", "usm", "z", "ch", "sts", "vit", "dsp", "trh", "trb", "tre", "la", "lo", "st", "nojc", "haobd", "rtt", "bsst", "gvideo", "__eis", "__eist", "oq", "fenlei", "sid", "rsv_idx", "rsv_stat", "rsv_bp", "rqlang"],
        s = ["w", "word"];
      p.prototype.clone = function (t) {
        var e = new p(i(this.params));
        if ("object" == typeof t) for (var n in t) t.hasOwnProperty(n) && l(o, n) >= 0 && e.p(n, t[n]);
        return e
      }, p.prototype.h = function (t) {
        this.header_params = this.header_params || {};
        for (var e in t) this.header_params[e] = t[e];
        return this
      }, p.prototype.buildHeaders = function (t) {
        t && this.setHeader(t);
        var e = {};
        for (var i in this.header_params) if ("object" == typeof this.header_params[i]) {
          var n = [];
          for (var o in this.header_params[i]) {
            var s = this.header_params[i][o];
            s instanceof Array && (s = s.join("|")), n.push(o + "=" + s)
          }
          e[i] = n.join("&")
        } else e[i] = this.header_params[i];
        return e
      }, p.prototype.buildSearchUrl = function (t) {
        return le.protocol + "//" + le.host + le.pathname + le.search + "#" + this.buildQueryString(t)
      }, p.prototype.buildSyncSearchUrl = function (t) {
        return le.protocol + "//" + le.host + "/s?" + this.buildQueryString(t)
      }, p.prototype.buildQueryString = function (t) {
        var e = i(this.params);
        if ("object" == typeof t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        var o = "";
        e.wd = $.limitWd(e.wd);
        for (param in e) param && e.hasOwnProperty(param) && "" !== e[param] && (o += param + "=" + encodeURIComponent(e[param]).replace(/'/g, "%27") + "&");
        return o.substr(0, o.length - 1)
      }, p.prototype.equals = function (t) {
        if (!t || !t.p) return !1;
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          if ("pn" == i) {
            var o = this.p(i) ? this.p(i) : "0", s = t.p(i) ? t.p(i) : "0";
            if (o != s) return !1
          } else if (this.p(i) != t.p(i)) return !1
        }
        return !0
      }, p.prototype.p = function (t, e) {
        return l(s, t) >= 0 && (t = "wd"), void 0 === e ? this.params[t] : (this.params[t] = e, this)
      }, p.prototype.hashCode = function () {
        var t = [];
        if (!this.p("wd")) return "";
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          t.push("pn" != i || this.p(i) ? this.p(i) : "0")
        }
        return t.join("	")
      }, p.prototype.filterOtherParams = function () {
        for (var t in this.params) this.params.hasOwnProperty(t) && l(o, t) < 0 && delete this.params[t]
      }, p.prototype.wdSameName = function () {
        var t;
        for (t = 0; t < s.length; t++) this.params && this.params[s[t]] && (this.params.wd = this.params[s[t]], delete this.params[s[t]])
      }
    }
    if (this.params = {}, !e) {
      ze = Ce.serializeArray();
      for (var a = 0; a < ze.length; a++) this.p(ze[a].name) || this.p(ze[a].name, ze[a].value)
    }
    if ("object" == typeof t) for (var r in t) t.hasOwnProperty(r) && this.p(r, t[r]);
    this.wdSameName()
  }

  function f(t) {
    function e(t) {
      "string" == typeof t && (_[t] = Date.now ? Date.now() : +new Date)
    }

    function i(t, e) {
      "string" == typeof t && (w[t] = e)
    }

    function n() {
      w.cus_net = _.net > _.st && _.net - _.st - w.cus_srv > 0 ? _.net - _.st - w.cus_srv : 1, w.cus_tti2 = _.dom > _.st ? _.dom - _.st : 1, w.cus_frdom = _.dom - _.pt, w.cus_fs = _.fs > _.st ? _.fs - _.st : w.cus_tti2, w.cus_frext = w.cus_fs - w.cus_tti2
    }

    function o(t) {
      var e = "";
      for (var i in t) i && t.hasOwnProperty(i) && "" !== t[i] && (e += "&" + i + "=" + encodeURIComponent(t[i]));
      return e
    }

    function s(t) {
      var t = [];
      for (var e in k) t.push(k[e]);
      var i = T = $.when.apply($, t);
      T.always(function () {
        i === T && m()
      })
    }

    function a() {
      var t = Array.apply(null, arguments);
      if (!(!t.length > 0)) for (var e = 0; e < t.length; e++) k[t[e]] = $.Deferred()
    }

    function r() {
      i("qid", t.qid), i("cus_q", t.real_wd || t.env.p("wd")), i("sid", bds.comm.sid), i("cus_newindex", bds.comm.newindex), i("supportis", bds.comm.supportis)
    }

    function c() {
      t = null, S = null
    }

    function d(t) {
      k[t].resolve(), "swap_end" == t && setTimeout(function () {
        d("swap_end_5s")
      }, 5e3)
    }

    function l() {
      a("swap_end", "swap_end_5s"), a("confirm"), s()
    }

    function u() {
      l(), _.st = 0, _.fs = 0, _.dom = 0
    }

    function m() {
      var t = Math.random(), e = /28230|28231/, s = t > .51 && .52 > t;
      C = C || bds.comm.bfe_sample;
      var a = C && t > .6 && .9 > t;
      if (t > .51 && .52 > t || e.test(bds.comm.sid) && t > 0 && .2 > t || bds.comm.intrSid || a) {
        e.test(bds.comm.sid) && (s ? i("issam", 2) : i("issam", 1)), a && (i("issam", 3), i("bfesam", bds.comm.bfe_sample)), n(), h(S), b(S), i("srvInfo", f()), i("sysv", navigator.appMinorVersion), r(), x.fire();
        var c = "//www.baidu.com/nocache/fesplg/s.gif?log_type=sp", d = "";
        d += o(v) + o(w);
        var l = c + d, u = new Image, m = "_LOG_" + (new Date).getTime();
        u.onload = function () {
          delete window[m]
        }, window[m] = u, u.src = l
      }
    }

    function p(t) {
      S = t, t.find("img").one("load", function () {
        var t = $(this).offset(), n = t.top, o = t.left, s = "";
        if (I > n && n > 0) {
          e("fs");
          var a = _.fs - _.dom;
          y.push(n + "_" + o + "_" + a), s = $(this).attr("data-src") || /^http/.test($(this).attr("src")) ? $(this).attr("data-src") || $(this).attr("src") : "base64", i("ic_lis", s)
        }
      })
    }

    function f() {
      var t, e, i = $.parseJSON(bds.comm.speedInfo), n = [];
      for (var o in i) {
        if (t = i[o], e = t.ModuleId + "_" + t.TimeCost + "_" + t.TimeSelf + "_" + t.Idc, t.hasOwnProperty("SubProcess")) for (var s in t.SubProcess) e += "," + t.SubProcess[s].ProcessId + "_" + t.SubProcess[s].TimeCost + "_" + t.SubProcess[s].isHitCache + "_" + t.SubProcess[s].Idc;
        n.push(e)
      }
      return encodeURIComponent(n.join("|"))
    }

    function h(t) {
      for (var e = 0, n = t.find("img"), o = t.find("#content_left").find("img"), s = 0, a = 0, r = 0; r < n.length; r++) a = n.eq(r).offset().top, I > a && a > 0 && e++;
      i("cus_ic", n.length), i("cus_extic", e), i("cus_extlic", s), i("cus_icl", o.length), i("cus_icr", t.find("#content_right").find("img").length), i("img_info", y.join(",")), i("psize", t.html().length)
    }

    function b(t) {
      var e = {}, n = [], o = t.find("#content_left,#con-ar").children("*[tpl]"), s = "";
      if (o.length > 0) for (var a = 0; a < o.length; a++) s = o.eq(a).attr("tpl"), e.hasOwnProperty(s) || (e[s] = 1, n.push(s));
      n.length > 0 && i("tplp", n.join("|"))
    }

    function g(t) {
      x.add(t)
    }

    var v = {product_id: 45, page_id: 317, page_type: 0}, w = {}, _ = {st: 0, pt: 0, net: 0, dom: 0, fs: 0}, y = [],
      x = $.Callbacks(), k = {}, T = null, S = null, C = null, I = 600;
    return l(), {trigger: d, mark: e, setParam: i, onSendlog: g, bindImgLoad: p, destroy: c, init: u}
  }

  function h(t, e) {
    t ? ei.done(function () {
      e(Be, Fe, We)
    }) : $.when(ii).done(function (t) {
      e(t)
    })
  }

  function b(t, e) {
    var i, n;
    if (!(window.__sam_his_nopredict && window.bds && bds.comm && 0 == bds.comm.supportis)) {
      if (i || (i = Re.val()), S(""), F(), clearTimeout(ti), clearTimeout(fi), 0 == pageState && window.__disable_index_predict || pe || he || Ze.isSlow()) return void t.setMaxNum(10);
      t.setMaxNum(ce);
      var o = new p({pn: "", wd: e.value});
      if (bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && o.p("rsv_slog", "ipt_change"), 0 == pageState && bds.comm.supportis && $.trim(Re.val())) {
        B(o);
        var s = $("<div id='ent_sug'>请按“回车”键发起检索</div>").insertBefore(".s_form");
        $(window).one("swap_begin", function () {
          s.remove()
        })
      }
      if (Ge) return void (Ge = !1);
      if (window.__restart_confirm_timeout && E(), Ye = "input", Ee = (new Date).getTime(), n && (clearTimeout(n), n = !1), "" == $.trim(e.value)) return void I();
      if (Qe = e.checkStore(), !/^[a-zA-Z0-9~!@#$%^&*()_+=-]$/.test(e.value)) {
        var a = Re.val(), r = e.imt.getLog();
        r.length > 0 && r[r.length - 1].type.indexOf("link") > -1 && o.p("_sglink", "1");
        var c = e.imt.diffLog();
        c && c.length > 1 && (c = c.slice(-15).join("."), o.h({is_params: {imes: encodeURIComponent(c)}})), !window.__disable_is2 && i.length > a.length && 0 === i.indexOf(a) ? n = setTimeout(function () {
          q({env: o, use_cache: !0, force: !1, pstg: 5, shouldShow: bds.comm.supportis}), n = !1
        }, 250) : q({env: o, use_cache: !0, force: !1, pstg: 5, shouldShow: bds.comm.supportis})
      }
      i = a
    }
  }

  function g(t, e, i, n) {
    if (S(""), clearTimeout(ti), !(0 == pageState && window.__disable_index_predict || pe || he || Ze.isSlow())) if (-1 == e) {
      Je && t.setVisibleSug(Je.real_wd);
      var o = new p({pn: "", wd: n.value});
      bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && o.p("rsv_slog", "sug_select"), q({
        env: o,
        use_cache: !0,
        force: !1,
        shouldShow: bds.comm.supportis,
        pstg: 3
      })
    } else {
      t.setVisibleSug(), S("");
      var o = new p({pn: "", wd: i});
      bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && o.p("rsv_slog", "sug_select");
      var s = n.stopRefresh ? !1 : bds.comm.supportis;
      q({env: o, force: !1, use_cache: !0, no_predict: !0, shouldShow: s, pstg: 3})
    }
  }

  function v(t, e) {
    var i = getCursortPosition(this);
    (9 == e.keyCode || 39 == e.keyCode && i == (this.value && this.value.length)) && bds.comm.supportis && Je && Ae.text() && (e.preventDefault(), Je.real_wd != this.value && (Re.val(Je.real_wd), t.check()), t.show(), S(""), j(Je, Ke, 22)({tipConfirm: !0}))
  }

  function w(t) {
    Re.keydown(function (e) {
      v(t, e)
    }), t.on("start", function () {
      Ye = "focus"
    }), $(window).on("blur", function () {
      t.hide()
    }), $(document).on("click", function (e) {
      return 2 == e.isTrigger || 3 == e.isTrigger ? !1 : void t.hide()
    }), t.on("inputChange", function (e, i) {
      b(t, i)
    }), t.on("selectSug", function (e, i, n, o) {
      g(t, n, o, i)
    }), t.on("render", function () {
      Je && t.setVisibleSug(Je.real_wd)
    }), t.on("dataReady", function (t, e) {
      var i = e && e.queryValue && e.dataCached && e.dataCached[e.queryValue];
      if (i && i.gl) for (var n in i.gl) if (1 * i.gl[n] > 0) {
        var o = new p({pn: "", wd: i.s[n]});
        q({env: o, force: !1, use_cache: !0, no_predict: !0, shouldShow: !1, pstg: 7})
      }
    }), 0 == pageState && t.start()
  }

  function _(t, e) {
    t && (e = $.extend(t.log, e))
  }

  function y() {
    if (bds.comm.seinfo) {
      bds.comm.seinfo.rsv_pre = encodeURIComponent(x()), bds.comm.seinfo.rsv_reh = reh_rec(), bds.comm.seinfo.rsv_scr = scr_rec();
      var t = null;
      if (bds && bds.comm && bds.comm.personalData) try {
        "string" == typeof bds.comm.personalData && (bds.comm.personalData = $.parseJSON(bds.comm.personalData)), t = bds.comm.personalData ? bds.comm.personalData.fullSkinName && bds.comm.personalData.fullSkinName.value : null
      } catch (e) {
        t = null
      }
      if (t && (bds.comm.seinfo.rsv_skin = t), bds.comm.seinfo.rsv_psid = $.getCookie("BIDUPSID"), bds.comm.seinfo.rsv_pstm = $.getCookie("PSTM"), bds.comm.seinfo.rsv_idc = function () {
        var t = bds.comm.speedInfo || [];
        try {
          t = $.parseJSON(t)
        } catch (e) {
          t = []
        }
        for (var i = 0, n = t.length; n > i; i++) if (9540 == t[i].ModuleId) return t[i].Idc || "";
        return ""
      }(), c(bds.comm.seinfo), "ON" === bds.comm._se_click_track_flag) {
        var i = new Image, n = "//www.baidu.com/s?wd=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&lts=91";
        i.src = n
      }
    }
    !function () {
      var t = Math.random(), e = function () {
        function t() {
          var t = [], n = [], o = {};
          for (var s in i) !function (e) {
            var s = "_SSL_LOG_" + e + "_" + +new Date, a = new Image, r = new Date;
            o[e] = $.Deferred(), n.push(o[e]), a.onload = function () {
              t.push(e + "_success=" + (new Date - r)), o[e].resolve(), delete window[s]
            }, a.onerror = function () {
              t.push(e + "_error=" + (new Date - r)), o[e].resolve(), delete window[s]
            }, a.src = i[e]
          }(s);
          var a = $.when.apply($, n);
          a.always(function () {
            var i = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=ssl&", n = t.join("&"), o = new Image,
              s = "_HM_LOG_" + (new Date).getTime();
            o.onload = function () {
              delete window[s]
            }, window[s] = o, o.src = i + n + "&_tt=" + e
          })
        }

        var e = +new Date, i = {
          gt1: "https://gt1.baidu.com/nocache/imgdata/sp613.gif?t=" + e,
          gt2: "https://gt2.baidu.com/nocache/imgdata/sp613.gif?t=" + e
        };
        setTimeout(t, 1e3)
      };
      t > .1 && .11 > t && e()
    }()
  }

  function x() {
    return Ue.length
  }

  function k(t) {
    $(document).delegate("a", "mousedown", function () {
      return function () {
        var e = $(this);
        T(e, t)
      }
    }())
  }

  function T(t, e) {
    var i, n = e.prefix, o = t.attr("href");
    if (n && o && 0 == o.indexOf(n) && (o = o.substring(n.length)), !n && o) {
      var s = o.match(/^http:\/\/[^\/]+/);
      if (!s) return;
      n = s[0], o = o.replace(/^http:\/\/[^\/]+/, "")
    }
    if (o && (i = o.match(/^\/*(link|baidu.php)\?(.*)$/), i = o.match(e.regex)), !(i && i[2] && i[2].match(/&(wd|word)=/))) {
      if (o && i) {
        e.convertTable && e.convertTable[i[1]] && (i[1] = e.convertTable[i[1]]);
        var a = me.getLinkParams(o);
        a && ("https:" === le.protocol && /Chrome|Safari/.test(navigator.userAgent) && (n = n.replace(/^http:\/\/www\.baidu\.com/, "https://www.baidu.com")), o = n + "/" + i[1] + "?" + i[2] + "&" + a, t.attr("href", n + "/" + i[1] + "?" + i[2] + "&" + a), t.click(function () {
          window.PDC_ASYNC.setLinkData("click_t", (new Date).getTime()), window.PDC_ASYNC.setLinkData("linkpreload", $(this).attr("linkpreload"))
        }))
      }
      return o
    }
  }

  function S(t) {
    if (!window.__disable_is2 || $.trim(t) != $.trim(Re.val())) {
      if (ci || !bds.comm.supportis) return void (Ae && Ae.html(""));
      if (0 != pageState && !window.__disable_kw_tip) if (Ae || (Ae = $('<div id="kw_tip" style="width:initial" unselectable="on" onselectstart="return false;" class="s_ipt_tip"/>').insertBefore(Re), Ae.parent().click(function (t) {
        var e = Re.get(0);
        if (t.target === e) return !0;
        e.focus();
        var i = e.value.length;
        if (document.selection) {
          var n = e.createTextRange();
          n.moveStart("character", i), n.collapse(), n.select()
        } else "number" == typeof e.selectionStart && "number" == typeof e.selectionEnd && (e.selectionStart = e.selectionEnd = i);
        return !1
      }), Ae.get(0).onselectstart = function () {
        return !1
      }), Ae.text(t), "" != t) {
        var e = Re.textWidth();
        Ae.css({
          "margin-left": e + 10 + "px",
          "max-width": Ae.parent().width() - e - 14 + "px"
        }).text(t), window.__disable_is2 && Ae.css("z-index", 1), Ae.show()
      } else Ae.hide()
    }
  }

  function C() {
    ci = !1
  }

  function I() {
    ci = !0, Je && Je.real_wd && $.trim(Re.val()) ? (S(Je.real_wd), D(Je)) : (S(""), D())
  }

  function D(t) {
    var e = o(Re.val());
    t && e == t.real_wd && $("#super_se_tip").remove()
  }

  function L(t, e) {
    var i = (new Date).getTime();
    if (e.force || _(e, {utime: (new Date).getTime() - He}), !e || !e.loaded) return !1;
    "string" == typeof e.html && (e.html = $(e.html)), $(e).trigger("swap_begin"), m(function () {
      e.pdc.mark("pt"), $(window).trigger("swap_begin", [e, t]);
      var i = Ze && Ze.getData();
      i && (setTimeout(function () {
        e.pdc.setParam("ispeed", Ze.monitor(i))
      }, 3e3), e.pdc.setParam("upm", i.join(",")))
    }), m(function () {
      e.base64.restart();
      try {
        if (!e.base64_loaded) {
          var t = $.parseJSON(e.html.find("#img_list").text());
          e.base64.loadImg(t.right, t.left)
        }
      } catch (i) {
      }
      e.base64.end()
    });
    var n = [$(window).scrollLeft(), $(window).scrollTop()];
    Ne.hide(), oldEnv = Ve, Ve = t, Ke = Je, Je = e, bds.comm.cur_disp_query = t.p("wd"), A(), bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []), 0 == pageState && B(t), m(function () {
      $e()
    }), bds.clearReady(), Ne.empty();
    var o = e.html;
    if (oe.use_cache_repeatedly && (o = o.clone()), m(function () {
      o.find("#head_style").children().removeAttr("data-for").appendTo("head")
    }), m(function () {
      $.globalEval(o.find("#head_script").html())
    }), bds.comm && bds.comm.jsversion && "006" != bds.comm.jsversion) {
      var s = Ve.buildSyncSearchUrl({jmp: "jsver", _vr: Math.random()});
      return void le.replace(s)
    }
    m(function () {
      o.find("#content_script script").each(function (t, e) {
        $.globalEval($(e).html())
      })
    }), m(function () {
      var t = o.find("#s_tab");
      if (t.size()) {
        var e = $("#s_tab");
        e.size() ? e.replaceWith(t) : t.insertBefore(Ne)
      }
    });
    var a = !1;
    !function () {
      var t = o.find("#con-at"), i = $("#con-at"), n = i.children().children();
      if (n.size()) if (t.children().size()) {
        var s = t.children().children();
        n.attr("cq") != s.attr("cq") || n.attr("srcid") != s.attr("srcid") || e.force && oldEnv && oldEnv.equals(Ve) || !Ve.p("cq") || !Ve.p("srcid") || 1 == Ve.p("_trf") ? (i.remove(), $(window).trigger("top_result_removed"), u(Ne, t, "insertBefore")) : a = !0
      } else i.remove(), $(window).trigger("top_result_removed"); else t.children().size() && u(Ne, t, "insertBefore")
    }();
    var r = o.find("#container");
    if (e.pdc.bindImgLoad(r), u(Ne, r), !$("#footer").size()) {
      var c = o.find("#footer").children();
      u(Ne, c)
    }
    m(function () {
      var t = (new Date).getTime();
      o && $.globalEval(o.find("#jsMerge").html()), _(e, {jsmergetime: (new Date).getTime() - t})
    }), bds && bds.comm && bds.comm.templateName == bds.comm.resTemplateName ? bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 0) : bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 1), 0 != pageState && bds && bds.util && bds.util.setContainerWidth && bds.util.setContainerWidth(), document.title = t.p("wd") + "_百度搜索", Ne.show(), d(), _(e, {domtime: (new Date).getTime() - i}), _(e, {waittime: (new Date).getTime() - Ee}), e.pdc.mark("dom"), $(window).trigger("swap_dom_ready", [e, t]), window.__lazy_foot_js ? setTimeout(function () {
      R(t, e, i)
    }, 0) : R(t, e, i), a ? window.scrollTo(n[0], n[1]) : window.scrollTo(0, 0), $(window).trigger("scroll"), swap_wait = !1
  }

  function R(t, e, i) {
    var n;
    i || (i = 0), e && (n = e.html), m(function () {
      Ie.get(0).f.value = 8
    }), m(function () {
      var t = (new Date).getTime();
      e && e.base64 && (e.base64.setDomLoad("left"), e.base64.setDomLoad("right")), _(e, {base64time: (new Date).getTime() - t})
    }), $("#search").find("form").submit(function () {
      var t = Re;
      Re = $(this).find("[name='wd']");
      var e = O.call(this);
      return Re = t, e
    }), m(function () {
      var t = (new Date).getTime();
      bds.doReady(), _(e, {bdstime: (new Date).getTime() - t})
    }), m(function () {
      var t = (new Date).getTime();
      n && $.globalEval(n.find("#ecomScript").html()), _(e, {ecomtime: (new Date).getTime() - t})
    }), m(function () {
      var t = (new Date).getTime();
      bds.se.tools && (qe && clearTimeout(qe), qe = setTimeout(function () {
        bds.se.tools()
      }, 600)), bds && bds.se && bds.se.certification && bds.se.certification.build && (Oe && clearTimeout(Oe), Oe = setTimeout(function () {
        $(".certification").size() > 0 && bds.se.certification.build.init()
      }, 1e3)), bds && bds.se && bds.se.safeTip && (je && clearTimeout(je), je = setTimeout(function () {
        $(".unsafe_ico_new").size() > 0 && bds.se.safeTip.init()
      }, 1200)), _(e, {tiptime: (new Date).getTime() - t})
    }), m(function () {
      var t = (new Date).getTime();
      window.initResultClickLog(), _(e, {clicktime: (new Date).getTime() - t})
    }), m(function () {
      _(e, {rtime: (new Date).getTime() - i, used: 1}), bds.comm.seinfo && e && (bds.comm.seinfo.rsv_pstg = e.type)
    }), m(function () {
      $(window).trigger("swap_end", [e, t]), z(), He = (new Date).getTime(), e && e.pdc && (e.pdc.mark("js"), e.pdc.trigger("swap_end"))
    })
  }

  function A() {
    m(function () {
      $.each(bds.comm.tips, function (t, e) {
        e && e.destroy && e.destroy()
      }), $("#c-tips-container").empty(), bds.comm.tips = []
    }), m(function () {
      window.app && window.app.dispose && window.app.dispose()
    }), m(function () {
      bds.comm.resolveUnloadHandler()
    }), bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []), bds && bds.se && bds.se.userAction && bds.se.userAction.destroy()
  }

  function E() {
    Me && Pe && (clearTimeout(Me), Me = setTimeout(Pe, re))
  }

  function j(t, e, i) {
    return function (e) {
      var n = $.extend({}, e);
      if (t && !t.confirm) {
        bds.comm.cur_query = t.real_wd, !bds.comm.supportis && t && (i = t.pstg || 0), t.confirm = !0, Me = !1, Pe = null;
        var o = {};
        o.is_referer = ue, o.is_xhr = "1";
        var s = new p(a(me.getQueryString()), !0);
        t.env.equals(s) || t.env.clone({wd: t.prw}).equals(s) || me.setUrl(t.env), ue = le.protocol + "//" + le.host + le.pathname + le.search, t.seq ? t.seq++ : t.seq = 1, t.pdc && (20 != i && bds.comm.supportis && t.pdc.mark("st"), t.pdc && t.pdc.setParam && t.pdc.setParam("cus_pstg", i), t.force && t.pdc.setParam("f4s", 1), t.pdc.trigger("confirm"), window.PRE_CONN.startTimer()), m(function () {
          $(window).trigger("confirm", [t, i])
        });
        var r = "/s?ie=utf-8&csq=" + t.seq + "&pstg=" + i + (n.tipConfirm ? "&_cktip=1" : "") + "&mod=2" + (bds.comm.supportis ? "&isbd=1" : "") + "&cqid=" + t.qid + "&istc=" + ((new Date).getTime() - t.startTime) + "&ver=" + bds.comm.baiduis_verify + "&chk=" + t.chk + "&isid=" + Se + "&" + t.env.buildQueryString() + (t.force ? "&f4s=1" : "") + ("function" == typeof ai ? "&_ck=" + ai(t.env.p("wd")) : "");
        if (bds.comm.indexSid && (/9998_/.test(bds.comm.indexSid) && "https:" === le.protocol && (bds.comm.indexSid = bds.comm.indexSid.replace("9998", "8499")), r += "&rsv_isid=" + bds.comm.indexSid), t.no_predict && (r += "&isnop=" + (1 >= xe ? 0 : 1)), t && t.pstg && (r += "&isctg=" + t.pstg), xe = 0, h(ne, function (e) {
          if (Be && e.getRsvStatus) try {
            r += "&rsv_stat=" + e.getRsvStatus(t.env.p("wd"))
          } catch (i) {
          }
          e.getStat("rsv_sug6") && (r += "&rsv_sug6=" + e.getStat("rsv_sug6"), bds.comm.seinfo && (bds.comm.seinfo.rsv_sug6 = e.getStat("rsv_sug6"))), e.getStat("rsv_sug7") && (r += "&rsv_sug7=" + e.getStat("rsv_sug7")), e.getStat("rsv_sug9") && (r += "&rsv_sug9=" + e.getStat("rsv_sug9")), e.getStat("rsv_bp") && (r += "&rsv_bp=" + e.getStat("rsv_bp"))
        }), $.ajax({headers: o, url: r}).done(function (t) {
          $('#form input[name="rqlang"]').val(bds.comm.search_tool.actualResultLang || "cn"), $('#form input[name="rsv_bp"]').val(1), $(t)
        }).fail(function () {
        }), bds.comm.seinfo) {
          bds.comm.seinfo.rsv_prw = encodeURIComponent(Re.val()), bds.comm.seinfo.rsv_pstg = i, bds.comm.seinfo.rsv_svoice = window.__supportvoice ? "1" : "0", t.cftime += 1, bds.comm.cftime = t.cftime + "";
          var c = t.env.p("rsv_bak");
          c && (bds.comm.seinfo.rsv_bak = c)
        }
        bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, y(), Se = t.qid, h(ne, function (t) {
          20 == i ? t.updateInitData() : 22 == i || bds.comm.supportis || i >= 0 && 5 >= i && t.updateInitData(), t.clearStat()
        }), window.cfpromise.resolve()
      }
    }
  }

  function O(t) {
    if (!me.support()) return !0;
    if (ui) return !1;
    if (ui = !0, Re.blur(), S(""), $(this).attr("target")) return !0;
    li = !0, di = setTimeout(function () {
      li = !1
    }, 1e3);
    try {
      var e = $("#kw").attr("placeholder") || $(".kw-placeholder").text();
      if (!$.trim(Re.val()) && !e) return le.href = "/", !1;
      var i, n = new p, o = $(this).serializeArray();
      for (i = 0; i < o.length; i++) n.p(o[i].name, o[i].value);
      if (e && !$.trim(Re.val()) ? (n.p("wd", e), n.p("rsv_dq", 1)) : $.trim(Re.val()) && n.p("wd", Re.val()), n.p("nojc") && n.p("nojc", ""), Je) {
        if (n.equals(Je.env.clone({wd: Je.real_wd})) && !Je.force) return j(Je, Ke, 22)(), Je.force = !0, S(""), D(Je), !1;
        Je.env.p("rsv_spt") && n.p("rsv_spt", Je.env.p("rsv_spt"))
      }
      me.submit(n, !!t)
    } catch (s) {
    }
    return !1
  }

  function q(t) {
    var e = {force: !1, no_predict: !1, use_cache: !1, shouldShow: !0, pstg: -1};
    t && $.extend(e, t);
    var i, n = e.env, o = e.force, s = e.no_predict, a = e.shouldShow, c = e.use_cache;
    if (n && n.p("wd") && n.hashCode() && (!pe && 1 != Cookie.get("ISSW") || o || !s) && (!he && 1 != Cookie.get("ISSW") || o || s)) {
      if (c && (i = de.hasCache(n, {loaded: !0}))) return void (a && (Je && i.env.clone({wd: i.real_wd}).equals(Je.env.clone({wd: Je.real_wd})) || (i.force = e.force, i.no_predict = e.no_predict, i.pdc.init(), i.force && (i.pdc.mark("st"), window.bds && bds.comm && !bds.comm.supportis && (i.pdc.mark("net"), i.pdc.setParam("cus_hitpreload", 1))), L(n, i)), S(e.no_predict && 6 != e.pstg ? "" : i.real_wd), D(i)));
      o && a && s && r(), i = {
        env: n,
        cftime: 0,
        no_predict: s,
        shouldShow: a,
        loaded: !1,
        force: o,
        startTime: (new Date).getTime(),
        log: {
          ctime: (new Date).getTime() - He,
          wd: n.p("wd"),
          ntime: 0,
          stat: 0,
          used: 0,
          rtime: 0,
          utime: o ? (new Date).getTime() - He : 0,
          res: 0
        }
      }, i.pdc = f(i), e.pstg > 0 && (i.pstg = e.pstg), i.force && i.pdc.mark("st"), i.base64 = isbase64(i.pdc), Ue.push(i.log), ye++, xe++, U(i)
    }
  }

  function M() {
    var t = [];
    return Qe && (t = $.map(Qe.slice(0, 2), function (t) {
      return t.value
    })), t.join("	")
  }

  function P(t) {
    e(), le.replace(t.buildSyncSearchUrl())
  }

  function N(t, e) {
    e ? (he = !0, pi && (clearTimeout(pi), pi = !1), pi = setTimeout(function () {
      he = be
    }, t)) : (pe = !0, mi && (clearTimeout(mi), mi = !1), mi = setTimeout(function () {
      pe = fe
    }, t))
  }

  function U(t) {
    var e, a, r = t.env, c = {};
    c.is_referer = Je && Je.env ? Je.env.buildSyncSearchUrl() : Xe.replace(/\#.*$/, ""), $.extend(c, r.buildHeaders()), c.is_xhr = "1", window.bds && bds.comm && bds.comm.cur_query ? r.p("bs", bds.comm.cur_query) : r.p("bs", ""), window.bds && bds.comm && bds.comm.cur_disp_query && (c.is_pbs = encodeURIComponent(bds.comm.cur_disp_query));
    var d = t.no_predict || !bds.comm.supportis ? 1 : 11, l = t.pstg;
    if (!(1 == d && 1 == l || 11 == d && 3 == l || 11 == d && 6 == l || 1 == d && 4 == l)) {
      var u = "ie=utf-8" + (bds.comm.newindex ? "&newi=1" : "") + (ke.sid ? "&sid=" + encodeURIComponent(ke.sid) : "") + (ke.tnp ? "&tnp=" + encodeURIComponent(ke.tnp) : "") + "&mod=" + (t.no_predict || !bds.comm.supportis ? "1" : "11") + (bds.comm.supportis ? "&isbd=1" : "") + "&isid=" + Se + "&" + r.buildQueryString() + "&rsv_sid=" + bds.comm.indexSid + "&_ss=1&clist=" + encodeURIComponent(de.getCacheList()) + "&hsug=" + encodeURIComponent(M()) + (t.force ? "&f4s=1" : "") + "&csor=" + getCursortPosition(Re.get(0));
      t.pstg && (u += "&pstg=" + t.pstg);
      var m = "/s?" + u;
      if (m += "&_cr1=" + s(m), !t.no_predict) for (a = de.find(function (t) {
        return t.loaded || t.no_predict ? void 0 : !0
      }), e = 0; e < a.length; e++) de.deleteCache(a[e]);
      if (!(t.no_predict && !t.force && (a = de.find(function (t) {
        return t.force && r.equals(t.env) ? !0 : void 0
      }), a.length > 0))) {
        if (t.force && t.shouldShow) {
          var p = !1, f = (new Date).getTime();
          if (a = de.find(function (e) {
            var i = r.equals(e.env);
            return e.loaded || e.no_predict || !i || e === t || (e.shouldShow = !1), !e.loaded && e.no_predict && e.force && i && e !== t && (e.shouldShow = e.shouldShow || t.shouldShow, e.startTime && f - e.startTime < 2e3 && (p = !0), window.__sam_backup_request || (p = !0)), e.loaded || i ? void e.pdc.mark("st") : !0
          }), p) return;
          for (e = 0; e < a.length; e++) de.deleteCache(a[e])
        }
        var h, b = function (e, i, n) {
          if (0 == i) g(e, n), t.pdc && (t.pdc.setParam("cus_srv", bds.se.mon.srvt), t.pdc.setParam("bsi", Cookie.get("__bsi"))); else if (1 == i) try {
            var o = 1 * new Date;
            t.b64ildata = $.parseJSON(e), t.base64.ilparseTime = 1 * new Date - o, t === Je && (t.base64.inline(t.b64ildata), t.base64.ilrenderTime = 1 * new Date - o), $(t).one("swap_begin", function () {
              this.base64.inline(this.b64ildata, this.html.get(0))
            })
          } catch (s) {
          } else 2 == i && t.base64 && (t.base64.ilsum = e)
        }, g = function (e, s) {
          if (s && "302" == s.status || e && $.trim(e).indexOf("<div>") > 10) return void (t.force ? (i(11), P(r)) : de.deleteCache(t));
          _(t, {ntime: (new Date).getTime() - t.startTime, res: 1});
          var a, c = "<!--data-->", d = e.indexOf(c);
          if (-1 != d) {
            a = $(e.substr(0, d)), t.html = e.substr(d + c.length), window.__dom_pre_parse && "1" == a.find("#__need_parse_dom").html() && (t.html = $(t.html));
            try {
              var l = $.parseJSON(a.find("#img_list").text());
              t.base64.loadImg(l.right, l.left), t.base64_loaded = !0
            } catch (u) {
            }
            try {
              n(a.find("#limg_list").text())
            } catch (u) {
            }
          } else a = t.html = $(e);
          var m = parseInt(a.find("#__status").eq(0).html()), p = parseInt(a.find("#__switchtime").eq(0).html()),
            f = parseInt(a.find("#__redirect").eq(0).html()), h = {};
          try {
            h = $.parseJSON(a.find("#__sugPreInfo:eq(0)").html() || "{}") || {}
          } catch (u) {
          }
          t.real_wd = a.find("#__real_wd").eq(0).text(), t.real_wd_org = a.find("#__real_wd_org").eq(0).text(), t.real_wd_nosynx = a.find("#__real_wd_nosynx").eq(0).text(), t.env && t.env.p("nojc") && t.real_wd_nosynx && (t.real_wd = t.real_wd_nosynx);
          var b = !1;
          (r.p("wd") == o(Re.val()) || t.force) && t.shouldShow && (b = !0), t.real_wd && (t.prw = r.p("wd"), r.p("wd", t.real_wd));
          var g = a.find("#__queryId").html(), v = a.find("#__querySign").html();
          t.querySign = v, _(t, {stat: m ? m : 0}), bds.comm.isDebug && $("#isDebugInfo").html(a.find("#__isDebugInfo").html()), g && (t.qid = g);
          var w = a.find("#__chk").html();
          if (t.chk = w ? w : 0, !e || !g && !p && !f && !m || !v && t.force) return t.force ? (r.p("__eis", 1), r.p("__eist", e ? e.length : 0), r.p("real_wd", t.real_wd), i(13), void P(r)) : void de.deleteCache(t);
          if (p > 0 && N(1e3 * p, !t.no_predict), -11 == m) {
            var y = de.getCacheBySign(v);
            if (!y) return q({
              env: t.env.clone({wd: t.real_wd}),
              force: t.force,
              use_cache: !1,
              no_predict: !0
            }), void de.deleteCache(t);
            y.force = t.force, C(), S(y.real_wd), D(y), de.deleteCache(t), t = y, Je && t.real_wd == Je.real_wd || (b = !0)
          } else {
            if (0 > m) {
              if (1 == f && t.force) return _(t, {redirect: 1}), i(14), void P(r);
              if (I(), -12 == m && h && h.wait_time > 0) {
                var x = t.env.clone();
                ti = setTimeout(function () {
                  q({env: x, force: !1, use_cache: !0, no_predict: !0, shouldShow: !1, pstg: 6})
                }, h.wait_time)
              }
              return void de.deleteCache(t)
            }
            if (m > 0) return void de.deleteCache(t)
          }
          for (var k = de.find(function (e) {
            return !e.loaded && e !== t && e.no_predict && r.equals(e.env) ? (e.shouldShow && (b = !0), e.force && (t.force = !0, t.no_predict = !0), !0) : void 0
          }), T = 0; T < k.length; T++) de.deleteCache(k[T]);
          return t.backup_request_timeout && clearTimeout(t.backup_request_timeout), t.loaded = !0, bds.comm.supportis || b ? void ((b && t !== Je || t.force) && (C(), t.shouldShow = !1, -11 == m ? t.pdc.init() : t.pdc.mark("net"), L(r, t))) : !0
        };
        h = $.ajax({dataType: "parts", url: m, headers: c, delimiter: "</*3*/>"}), h.parts(function (t, e) {
          b(t, e, h)
        }), h.fail(function (e, n) {
          t.force && t.shouldShow && "abort" != n && t.env && (i(12), le.replace(t.env.buildSyncSearchUrl() + "&rsv_jmp=fail")), de.deleteCache(t)
        }), t.xhr = h, de.addCache(t)
      }
    }
  }

  function z() {
    Ue = [], ye = 0, li = !1, clearTimeout(di)
  }

  function H() {
    window.index_off && window.index_off(), Le[0] !== De[0] && Le.val(""), Re = De, pageState = 1, bds.comm.ishome = 0, bds.comm.cur_query = bds.comm.query, Ve = new p, Je = {
      env: Ve,
      real_wd: bds.comm.query,
      force: !0,
      confirm: !0
    }, h(ne, function (t, e, i) {
      return function () {
        var t = i ? i : We;
        t.start()
      }
    }()), $(window).trigger("index_off"), bds.util.setContainerWidth(), m(function () {
      $(window).trigger("swap_dom_ready")
    }), window.__lazy_foot_js ? setTimeout(function () {
      R()
    }, 0) : R()
  }

  function B(t) {
    window.index_off && window.index_off(), Le.get(0) !== De.get(0) && (Le.val(""), De.val(t.p("wd"))), Re = De, pageState = 1, bds.comm.ishome = 0, h(ne, function (e, i, n) {
      i !== n && (i.stop(), n.hide(), n.setKey(t.p("wd")), n.start())
    }), bds.util.setContainerWidth(), $(window).trigger("index_off", t)
  }

  function F() {
    hi = !1, bi = !1, vi = [], clearTimeout(wi), wi = !1
  }

  function W(t) {
    hi || (hi = {x: t.pageX, y: t.pageY}), gi = {
      x: t.pageX,
      y: t.pageY
    }, bi || hi.x == t.pageX || hi.y == t.pageY || (bi = !0, vi = [hi], Q())
  }

  function Q() {
    vi.push(gi);
    var t = vi.length;
    if (Math.pow(gi.x - hi.x, 2) + Math.pow(gi.y - hi.y, 2) >= Math.pow(_e, 2) || t * we >= ve) {
      var e = Be, i = bds.comm.supportis ? 1 : 2;
      if (i && e && e.data() && e.data()[0] && e.visible()) {
        var n = (new p).clone({wd: e.data()[0].value});
        q({env: n, force: !1, no_predict: !0, use_cache: !0, shouldShow: !1, pstg: 1}), i--
      }
      if (i && e && e.data() && e.data()[1] && e.visible()) {
        var n = (new p).clone({wd: e.data()[1].value});
        q({env: n, force: !1, no_predict: !0, use_cache: !0, shouldShow: !1, pstg: 1}), i--
      }
      if (!bds.comm.supportis && i && $.trim(Re.val()) && (!Je || Je.env.p("wd") != $.trim(Re.val()))) {
        var n = (new p).clone({wd: $.trim(Re.val())});
        q({env: n, force: !1, no_predict: !0, use_cache: !0, shouldShow: !1, pstg: 1}), i--
      }
    } else wi = setTimeout(function () {
      Q()
    }, we)
  }

  document.write = document.writeln = function () {
  }, bds && bds.comm && "clearissw" == bds.comm.query && Cookie.clear("ISSW"), function () {
    var t = $.Deferred();
    bds.comm.registerUnloadHandler = function (e) {
      t.done(e)
    }, bds.comm.resolveUnloadHandler = function () {
      t.resolve(), t = $.Deferred()
    }
  }(), window.b_rec = function (t) {
    var e;
    if (t) e = navigator.userAgent; else try {
      e = window.external && window.external.twGetRunPath ? window.external.twGetRunPath() : ""
    } catch (i) {
      e = ""
    }
    return e = e.replace(/:/, "~").replace(/\t/, "`")
  }, window.scr_rec = function () {
    var t = "";
    try {
      t += [document.body.clientWidth, document.body.clientHeight, window.screenTop, window.screenLeft, window.screen.height, window.screen.width].join("_")
    } catch (e) {
    }
    return t
  }, window.reh_rec = function () {
    var t = [], e = [];
    try {
      $("#content_left").children(".result,.result-op").each(function (e, i) {
        t.push($(i).height())
      })
    } catch (i) {
    }
    try {
      $("#con-ar").children(".result,.result-op").each(function (t, i) {
        e.push($(i).height())
      })
    } catch (i) {
    }
    return t.join("_") + "|" + e.join("_")
  }, window.onerror = function () {
    window.console && console.debug && console.debug(arguments), bds.comm.jserror = Array.prototype.slice.call(arguments).join("	"), te(bds.comm.jserror)
  }, window.hash = function (t, e) {
    return t ? t && !e && Ve ? Ve.p(t) : void (t && e && Ve && (Ve.p(t, e), le.href = Ve.buildSearchUrl())) : void 0
  };
  var G, V, J, X, K, Y, Z = !1;
  !function () {
    var t = $.globalEval;
    $.globalEval = function () {
      var e = (new Date).getTime();
      try {
        t.apply($, arguments)
      } catch (i) {
      }
      (new Date).getTime() - e > 500
    }
  }(), bds.comm.isDebug && ($('<style data-for="debug">#debug{display:none!important;}</style>').appendTo("head"), $('<div id="debug" style="display:block;position:absolute;top:30px;right:30px;border:1px solid;padding:5px 10px;z-index:10000"></div>').appendTo("#wrapper"), $(window).on("swap_end", function (t, e) {
    if (e) {
      var i = $("#isDebugInfo");
      i.size() || (i = $('<div id="isDebugInfo"></div>').appendTo("#debug")), i.html(e.html.find("#__isDebugInfo").html());
      var n = "<table>";
      for (var o in e.log) e.log.hasOwnProperty(o) && (n += "<tr><td>" + o + "</td><td>" + encodeURIComponent(e.log[o]) + "</td></tr>");
      n += "</table>", $("#debug").html(n)
    }
  }));
  var te = function () {
    var t;
    return function (e) {
      bds.comm.isDebug && alert(e), bds && bds.comm && bds.comm.js_error_monitor && (t = new Image, t.src = bds.comm.js_error_monitor + "?" + $.param({
        url: le.href,
        time: bds.comm.serverTime,
        explore: navigator.userAgent,
        info: e,
        info_type: 1
      }))
    }
  }();
  if (window.setSugKey = function (t) {
    Re && t && (We && We.setKey ? We.setKey(t) : Re.val(t))
  }, window.getCursortPosition = function (t) {
    var e = 0;
    try {
      if (document.selection) {
        var i = document.selection.createRange(), n = 0;
        t && t.value && (n = t.value.length), i.moveStart("character", -n), e = i.text.length
      } else (t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart)
    } catch (o) {
      e = t.value.length
    }
    return e
  }, bds.comm.flagTranslateResult && ($("#wrapper_wrapper").delegate(".result", "mouseenter", function () {
    $(".c-fanyi", $(this)).show()
  }), $("#wrapper_wrapper").delegate(".result", "mouseleave", function () {
    $(".c-fanyi", $(this)).hide()
  }), $("#wrapper_wrapper").delegate(".result .c-fanyi", "click", function () {
    var t = $(this).closest(".result"), e = $("h3 a:first", t), i = $(".c-abstract:first", t),
      n = $(".c-fanyi-abstract", t).val(0).html(), o = $(".c-fanyi-title", t).val(0).html();
    $(".c-fanyi-abstract", t).val(0).html(i.html()), $(".c-fanyi-title", t).val(0).html(e.html()), e.html(o), i.html(n)
  })), bds && bds.comm && bds.comm.indexSid) {
    var ee = ("" + bds.comm.indexSid).split("_");
    $.inArray("28883", ee) >= 0 && (window.__disable_preload = 1, window.__disable_predict = 1)
  }
  if (bds && bds.comm && bds.comm.sid) {
    var ie = ("" + bds.comm.sid).split("_");
    $.inArray("28883", ie) >= 0 && (window.__disable_preload = 1, window.__disable_predict = 1)
  }
  var ne = 0;
  bds && bds.comm && bds.comm.sampleval && $.inArray("sam_ecom_sug", bds.comm.sampleval) > -1 && (ne = "1");
  var oe = {use_cache_repeatedly: !0, index_form: "#form", kw: "#kw", result_form: "#form"};
  t && $.extend(oe, t);
  var se = 15, ae = 6e4, re = window.__confirm_timeout ? window.__confirm_timeout : 1e4,
    ce = bds.comm.supportis ? 4 : 10, de = function () {
      function t(t) {
        "object" == typeof t && null != t && (t.xhr && t.xhr.abort && t.xhr.abort(), t.base64 && t.base64.destroy(), t.pdc && t.pdc.destroy(), t.backspace_preload_timeout_id && clearTimeout(t.backspace_preload_timeout_id), delete t.xhr, delete t.html)
      }

      var e = [];
      return {
        find: function (t) {
          return $.grep(e, t)
        }, getCacheList: function () {
          var t = $.map(e, function (t) {
            return t && (new Date).getTime() - t.startTime > ae ? !1 : t.querySign
          });
          return t = $.grep(t, function (t) {
            return !!t
          }), t.join("	")
        }, hasCache: function (t, i) {
          function n(t) {
            var n, o;
            return (o = t.p("wd")) ? ($.grep(e, function (e) {
              return i.loaded && !e.loaded ? !1 : void (t.equals(e.real_wd ? e.env.clone({wd: e.real_wd}) : e.env) && (n = e))
            }), n ? n : null) : !1
          }

          i || (i = {});
          var o = n(t);
          return o && (new Date).getTime() - o.startTime > ae && (this.deleteCache(o), o = null), o
        }, shouldShow: function (t) {
          if (t.force) return !0;
          if (!t.shouldShow && !t.force && t.no_predict) return !1;
          var e = o(Re.val());
          return !e || Je && t.env.equals(Je.env) ? !1 : 0 == t.env.p("wd").indexOf(e) ? !0 : 0 == t.real_wd.indexOf(e) ? !0 : !1
        }, getCacheBySign: function (t) {
          var i = !1;
          return $.each(e, function (e, n) {
            i || !n.loaded || n.querySign != t || n.env.p("pn") && 0 != n.env.p("pn") || (i = n)
          }), i
        }, addCache: function (i) {
          if (-1 == l(e, i) && !i.env.p("srcid") && !i.env.p("cq")) for (e.unshift(i); e.length > se;) t(e.pop())
        }, deleteCache: function (i) {
          t(i), e = $.grep(e, function (t) {
            return t !== i
          })
        }, deleteCacheByEnv: function () {
          e = $.grep(e, function (e) {
            var i = e.env.equals(e.env);
            return i && t(e), !i
          })
        }, clearCache: function () {
          e = $.grep(e, function (e, i) {
            return i !== Je ? (t(i), !1) : !0
          }), e = []
        }
      }
    }(), le = document.location, ue = le.protocol + "//" + le.host + le.pathname + le.search, me = {
      onurlchange: function () {
      }
    };
  !function () {
    function t() {
      var t = le.href.match(/#+(.*)$/);
      return t ? t[1].replace(/\+/g, "%2B") : ""
    }

    function i() {
      var t = le.href.match(/\?([^#]+)/);
      return t ? t[1].replace(/\?/g, "&") : ""
    }

    function n(t, e) {
      var i = "";
      if ("1" === window._thirdLinkSpeed && (i = "&qid=" + bds.comm.queryId), window._bdlksmp > 0 && (i = "&bdlksmp=" + window._bdlksmp), "1" === window._eclipse && /^\/link\?/.test(e)) return "wd=&eqid=" + bds.comm.eqid + o(["pn", "rn", "ie"], t) + i;
      var n = new p(a(t));
      return n.p("wd") ? n.buildQueryString().replace(/&rsv[^=]*=[^&]*/g, "").replace(/[^a-zA-Z0-9]url=/g, "") + i : void 0
    }

    function o(t, e) {
      var i = "", n = a(e);
      for (var o in t) n.hasOwnProperty(o) && (i += "&" + encodeURIComponent(n[o]));
      return i
    }

    function s(t) {
      var e = new p(a(me.getQueryString()), !0);
      e.hashCode() ? 0 == pageState && B(e) : 0 != pageState ? le.replace(le.pathname + le.search.replace(/([?&])isidx=[^&*]&?/, "$1")) : le.search != le.search.replace(/([?&])isidx=[^&*]&?/, "$1") && le.replace(le.pathname + le.search.replace(/([?&])isidx=[^&*]&?/, "$1")), me.onurlchange(e, t)
    }

    var r = "onhashchange" in window, c = "onpopstate" in window;
    window.__disable_popstate && (c = !1);
    var l = le.pathname.length > 1 ? le.pathname : "/s";
    (navigator.userAgent.match(/MSIE (6|7)/) || document.documentMode < 8) && (r = !1, c = !1), oe.disable_popstate && (c = !1), r || c || e();
    var u = function () {
      var e = "";
      return function (i, n) {
        n && (e = n.buildQueryString(), le.hash = e), (i || e != t()) && (s(i), e = t())
      }
    }();
    me.setUrl = function (t) {
      c ? m(!1, t) : r && u(!1, t)
    };
    var m = function () {
      var t = i();
      return function (e, n) {
        n && (t = n.buildQueryString(), window.history.pushState(n, "", n.buildSyncSearchUrl())), e || t != i() ? (s(e), t = i()) : d()
      }
    }();
    me.getQueryString = function () {
      return c ? i() : /wd=/.test(t()) ? t() : i()
    }, me.init = function () {
      c ? !function () {
        var e = le.href, i = !1;
        $(window).on("swap_begin", function () {
          i = !0
        }), $(window).bind("popstate", function () {
          (i || !e || e != le.href) && m(), e = null
        }), $(window).bind("hashchange", function () {
          var e = t();
          /wd=/.test(e) && le.replace(l + "?" + e)
        })
      }() : r && ($(window).bind("hashchange", function () {
        u()
      }), $(function () {
        u()
      }));
      var e = t();
      /wd=/.test(e) && (c ? (window.history.replaceState(null, "", l + "?" + e), m()) : r ? u() : le.replace(l + "?" + e))
    }, me.support = function () {
      return (c || r) && 1 != Cookie.get("ISSW") && !window.__disable_preload
    }, me.getLinkParams = function (e) {
      if (!c) {
        var o = t();
        return "" == o && (o = i()), n(o, e)
      }
      if ("https:" === le.protocol || "1" === window._eclipse) {
        var s = i();
        return s || (s = t()), n(s, e)
      }
      return !1
    }, me.clickResultLink = function (t, e, i) {
      return c ? (window.history.pushState(null, "", new p(i, !0).buildSyncSearchUrl()), m(), !1) : void t.attr("href", e.buildSearchUrl(i)).attr("target", "_self")
    }, me.submit = function (t, e) {
      setTimeout(function () {
        c ? (window.history.pushState(t, "", t.buildSyncSearchUrl()), m(e)) : r ? (le.href = t.buildSearchUrl(), u(e)) : le.href = t.buildSyncSearchUrl()
      }, 0)
    }, window.changeUrl = function (t) {
      var e = new p(a(t));
      me.submit(e, !0)
    }
  }(), me.onurlchange = function (t, e) {
    h(ne, function (e) {
      e.setKey(t.p("wd")), e.hide()
    }), Ee = (new Date).getTime(), Re.val(t.p("wd")), S("");
    var i = !0;
    e && Je && Je.env && Je.env.equals(t) && (i = !1), q({env: t, force: !0, use_cache: i, no_predict: !0})
  };
  var pe = oe.disable ? oe.disable : !1;
  window.__disable_preload && (pe = !0);
  var fe = pe, he = !1;
  window.__disable_predict && (he = !0);
  var be = he, ge = bds.comm.switchAddMask ? bds.comm.switchAddMask : !1;
  ge || (ge = window.__switch_add_mask ? window.__switch_add_mask : !1), ge = !0;
  var ve = (bds.comm.preloadMouseMoveDistance ? bds.comm.preloadMouseMoveDistance : 5, 300), we = 50, _e = 80, ye = 0,
    xe = 0, $e = function () {
    }, ke = a(le.search);
  me.support() || (!function () {
    function t() {
      le.hash && le.hash.match(/[^a-zA-Z0-9](wd|word)=/) && le.replace("//www.baidu.com/s?" + le.href.match(/#(.*)$/)[1])
    }

    le.hash.match(/[^a-zA-Z0-9](wd|word)=/) ? (le.replace("//www.baidu.com/s?" + le.href.match(/#(.*)$/)[1]), function () {
      throw new Error("redirect to sync")
    }()) : (document.getElementById("wrapper").style.display = "block", "onhashchange" in window ? window.onhashchange = t : setInterval(t, 200))
  }(), fe = pe = !0);
  for (var Te = Cookie.get("BAIDUID", "nobdid").split(":")[0], Se = Te.substr(0, 6) + Te.substr(Te.length - 5, 5) + parseInt(99999 * Math.random()); Se.length < 16;) Se += "0";
  Se = encodeURIComponent(Se);
  var Ce, Ie, De, Le, Re, Ae;
  De = Le = Re = $(oe.kw);
  var Ee, je, Oe, qe, Me, Pe, Ne = $("#wrapper_wrapper"), Ue = [];
  window.__async_strategy, Ce = $(oe.index_form), "_blank" == Ce.attr("target") && (window.__disable_index_predict = !0, fe = pe = !0);
  var ze = Ce.serializeArray();
  Ie = $(oe.result_form);
  var He = (new Date).getTime();
  window.pageState = 0;
  var Be, Fe, We, Qe, Ge, Ve = null, Je = null, Xe = document.location.href, Ke = !1, Ye = "focus";
  !function () {
    window.PDC_ASYNC = {
      setParam: function (t, e) {
        Je && Je.pdc && Je.pdc.setParam(t, e)
      }, setLinkData: function (e, i) {
        t[e] = i
      }, sendLinkLog: function () {
        var e = "//www.baidu.com/nocache/fesplg/s.gif?log_type=linksp", i = "";
        i += "&link_t=" + ((new Date).getTime() - t.click_t) + "&query=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&linkpreload=" + t.linkpreload;
        var n = Math.random();
        if (.01 > n) {
          var o = new Image, s = "LINK_IMG_" + new Date;
          window[s] = o, o.onload = function () {
            delete window[s]
          }, o.src = e + i
        }
      }
    };
    var t = (window.PDC_ASYNC.log = {}, {});
    window.bds && (bds.pdc = window.PDC_ASYNC)
  }();
  var Ze = function (t) {
    function e() {
      if (c = 1, i(), 1 == c) {
        var e = new Date, o = !1, s = function () {
          var i = new Date, l = i - e - t, u = n();
          0 > l && (l = 0), u || o || (a[r] = l, r = (r + 1) % 20), o = u, 1 == c && (e = i, d = setTimeout(s, t))
        };
        d = setTimeout(s, t)
      }
    }

    function i() {
      window.clearTimeout(d)
    }

    function n() {
      var t = ["webkit", "moz", "ms", "o"];
      if ("hidden" in document) return document.hidden;
      for (var e = 0; e < t.length; e++) if (t[e] + "Hidden" in document) return document[t[e] + "Hidden"];
      return !1
    }

    function o(t) {
      try {
        var e = 0, i = Math.max.apply(null, t), n = 10, o = 60, s = 4, a = 40, r = Cookie.get("ispeed_lsm"), c = 0,
          d = new Date, l = 0;
        d.setTime(d.getTime() + 2592e6);
        for (var u = 0; u < t.length; u++) {
          var m = t[u];
          e += m
        }
        return e = Math.round(e / t.length), i > 1e3 || e > 150 ? (c = r ? parseInt(r) : 0, c >= a - n && a > c && (l = 1, Cookie.set("ispeed", 2, document.domain, "/", d)), o > c && (c = c + n > o ? o : c + n, Cookie.set("ispeed_lsm", c, document.domain, "/", d))) : (r && parseInt(r) > a && (s = 5), r && parseInt(r) >= s && (parseInt(r) <= a + s && parseInt(r) > a && (l = 2, Cookie.set("ispeed", 1, document.domain, "/", d)), c = parseInt(r) - s, Cookie.set("ispeed_lsm", c, document.domain, "/", d))), l
      } catch (p) {
      }
      return 0
    }

    function s() {
      return Cookie.get("ispeed") && 1 == UPS.get("isSwitch") && 2 == parseInt(Cookie.get("ispeed")) ? !0 : !1
    }

    var a = [], r = 0, c = 0, d = !1, t = t || 250;
    return {
      start: e, stop: function () {
        window.clearTimeout(d), c = 0
      }, getData: function () {
        return a.slice(r).concat(a.slice(0, r))
      }, isSlow: s, monitor: o
    }
  }();
  bds.comm.supportis && 1 == UPS.get("isSwitch") && Ze.start();
  var ti;
  if ("1" === ne) {
    var ei = $.ajax({
      dataType: "script",
      cache: !0,
      url: 1 === bds.comm.logFlagSug ? "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_sam_sug_efdbf72.js" : "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_125a126.js"
    });
    ei.done(function () {
      Be = Fe = We = bds.se.sug({
        maxNum: 10,
        withoutRich: bds.comm.supportis,
        withoutZhixin: !0,
        form: Ie[0],
        ipt: Re[0],
        cbname: "bdsugresultcb",
        submission: O
      })
    })
  } else var ii = function () {
    var t = $.Deferred();
    return require(["@baidu/search-sug"], function (e) {
      Be = Fe = We = e({
        bds: bds,
        maxNum: 10,
        withoutRich: bds.comm.supportis,
        withoutZhixin: !0,
        form: Ie[0],
        ipt: Re[0],
        cbname: "bdsugresultcb",
        submission: O
      }), t.resolve(Be)
    }), t.promise()
  }();
  h(ne, w);
  var ni, oi, si, ai;
  !function () {
    var t, e = -1, i = 0, n = -1, o = -1, a = -1, r = -1, c = 0;
    ni = function (e) {
      if (e) {
        a = e.pageX, r = e.pageY, t = e.target;
        var s = $(e.target);
        "submit" == s.attr("type") && (c = 1);
        var d = s.offset();
        n = a - d.left, o = r - d.top, i = (new Date).getTime()
      }
    }, oi = function (n) {
      n && n.target == t && (e = (new Date).getTime() - i)
    }, ai = function (t) {
      bds && bds.comm && bds.comm.query && (t = bds.comm.query);
      var i = c + "." + e + "." + n + "." + o + "." + a + "." + r;
      return i = s(i + t) + "." + i
    }, si = function () {
      e = -1, i = 0, n = -1, o = -1, a = -1, r = -1, c = 0
    }, $(window).on("confirm", function () {
      setTimeout(si, 0)
    })
  }(), $(function () {
    $("#head").delegate(".index_tab_top>a,.index_tab_bottom>a,#u1>a,#u>a", "mousedown", function () {
      return $(this).attr("name") ? ns_c({
        fm: "behs",
        tab: $(this).attr("name"),
        query: "",
        un: encodeURIComponent(bds.comm.user || "")
      }) : void 0
    })
  }), $(document).delegate("a", "mousedown", function () {
    j(Je, Ke, 22)()
  }), k({prefix: "http://www.baidu.com", regex: /^\/*(link)\?(.*)$/}), k({
    prefix: "//www.baidu.com",
    regex: /^\/*(link)\?(.*)$/
  }), k({
    prefix: "http://www.baidu.com",
    convertTable: {
      "baidu.php": "baidu.php",
      "aladdin.php": "aladdin.php",
      "siva.php": "siva.php",
      "adrc.php": "adrc.php",
      "zhixin.php": "zhixin.php"
    },
    regex: /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
  }), "www.baidu.com" != le.host && k({
    prefix: "",
    convertTable: {
      "baidu.php": "baidu.php",
      "aladdin.php": "aladdin.php",
      "siva.php": "siva.php",
      "adrc.php": "adrc.php",
      "zhixin.php": "zhixin.php"
    },
    regex: /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
  }), k({
    prefix: "http://bzclk.baidu.com",
    regex: /^\/*(adrc\.php)\?(.*)$/
  }), k({
    prefix: "https://sp0.baidu.com/9q9JcDHa2gU2pMbgoY3K",
    regex: /^\/*(adrc\.php)\?(.*)$/
  }), "https:" == le.protocol && bds.comm.ishome && !/Chrome/.test(navigator.userAgent) && $(document).delegate("a", "mousedown", function () {
    var t = $(this), e = t.attr("href"), i = {"http://v.baidu.com": "/?fr=bd"};
    i && i.hasOwnProperty(e) && t.attr("href", e + i[e])
  }), $(document).delegate("a", "mousedown", function () {
    var t = $(this), e = t.attr("href"), i = new Image, n = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm",
      o = Math.random();
    if (.01 > o && !/www\.baidu\.com\//.test(e) && /^http/.test(e)) {
      var s = n + "&c_url=" + encodeURIComponent(e), i = new Image, a = "_LOG_" + (new Date).getTime();
      i.onload = function () {
        delete window[a]
      }, window[a] = i, i.src = s
    }
  }), me.support() && $(document).delegate("a", "click", function () {
    var t = le.protocol + "//" + le.host;
    return function () {
      var e = $(this);
      if (!(e.attr("target") && "_self" != e.attr("target") || e.attr("sync") && "true" == e.attr("sync"))) {
        var i = $.trim(e.attr("href"));
        if (i && 0 == i.indexOf(t) && (i = i.substring(t.length)), i && (matched = i.match(/^\/*s\?(.*)/)), i && matched) {
          var n = a(matched[0]);
          if (n.pn || (n.pn = ""), l(["baidurt", "baiduwb", "baidufir", "SE_baiduxueshu_c1gjeupa"], n.tn) < 0) {
            var o = e.parents("#con-at");
            o.size() > 0 && r({top: o.offset().top + o.height()});
            var s = me.clickResultLink(e, Ve, n)
          }
          return s
        }
      }
    }
  }()), $(document).delegate("a", "mousedown", function (t) {
    ni(t)
  }), $(document).delegate("a", "mouseup", function (t) {
    oi(t)
  }), $(document).delegate("#su,#su1", "mouseup", function (t) {
    oi(t)
  }), $(document).delegate("#su,#su1", "mousedown", function (t) {
    ni(t)
  }), !function () {
    var t;
    window._bdlkc >= 1 && ($(document).delegate(".c-container", "mouseenter", function () {
      return function () {
        var e = $(this), i = 300;
        2 == window._bdlkc && (i = 100), t = setTimeout(function () {
          var t = e.find(".t>a"), i = T(t, {prefix: "http://www.baidu.com", regex: /^\/*(link)\?(.*)$/}),
            n = e.attr("mu") || e.find(".f13 .g").text(), o = /^(http[s]?:\/\/)?([^\/]+)(.*)/, s = n.match(o);
          i && i.match(le.protocol) && /www\.baidu\.com\/link/.test(i) && !/bdlkc=1/.test(i) && (s[2] && (n = "http://" + s[2], e.append('<link rel="dns-prefetch" href="' + n + '" />')), $.ajax({
            url: i + "&bdlkc=1",
            type: "GET",
            contentType: "text/html",
            success: function () {
              t.attr("linkpreload", "1")
            }
          }), t.attr("href", i + "&bdlkc=1"))
        }, 300)
      }
    }()), $(document).delegate(".c-container", "mouseleave", function () {
      return function () {
        clearTimeout(t)
      }
    }()))
  }();
  var ri = $("body");
  document.title, !function (t) {
    var e;
    t.fn.textWidth = function () {
      e || (e = t('<div data-for="result" style="clear:both;display:block;visibility:hidden;position:absolute;top:0;"><span style="width;inherit;margin:0;font:16px/22px arial;"></span></div>').appendTo("body").find("span")), e.html(escapeHTML(t(this).val()));
      var i = e.width();
      return i
    }
  }(jQuery);
  var ci = !1;
  $(window).on("swap_dom_ready", function (t, e) {
    var i = "";
    !e || !e.real_wd || e.no_predict && 6 != e.pstg || (i = e.real_wd), S(i), D(e)
  }), $(window).on("swap_end", function (t, e) {
    e && (window.cfpromise = new $.Deferred, Me && (clearTimeout(Me), Me = !1, Pe = null), e.confirm = !1, e.force ? j(e, Ke, 20)() : (Pe = j(e, Ke, 21), Me = setTimeout(Pe, re)))
  }), $(window).on("indexOff", function (t, e) {
    h(ne, function () {
      S(e.p("wd"))
    })
  }), me.support() && "_blank" != Ce.attr("target") && h(ne, function (t) {
    t.setMaxNum(ce)
  });
  var di, li = !1, ui = !1;
  Ie.mousedown(function () {
    ui = !1
  }).delegate("a,input", "focus", function () {
    ui = !1
  });
  var mi, pi, fi;
  $(window).on("swap_end", function (t, e) {
    e || (bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, y()), fi = setTimeout(function () {
      0 == $("#content_left,.result,.content_none").length && i(15, 86400)
    }, 1e4)
  }), me.init(), $(function () {
    var t = $("script").last(), e = $("head");
    $e = function () {
      t.nextAll().not("[data-for]").not("#passport-login-pop").remove(), e.find("*").not("[data-for]").not("meta").not("title").not("script[async]").not('link[href*="passport"]').not('link[rel*="icon"]').not('link[rel*="shortcut icon"]').remove()
    }
  }), bds.comm.resultPage && H(), Ne.delegate("#page strong+a,#page a.n", "mouseover", function () {
    q({env: new p(a($(this).attr("href"))), force: !1, use_cache: !0, no_predict: !0, shouldShow: !1, pstg: 4})
  });
  var hi, bi, gi, vi, wi;
  h(ne, function () {
    $(document).mousemove(W)
  }), $("#u .back_org").click(function () {
    var t = new Date;
    t.setTime((new Date).getTime() + 110376e7), Cookie.set("ORIGIN", 2, document.domain, "/", t), Ve ? le.replace(Ve.buildSyncSearchUrl({_r: Math.random()})) : le.href = "/"
  }), $(window).scroll(function () {
    var t, e = $("#head"), i = $(window), n = 40, o = e.offset().top, s = function () {
      t && (clearTimeout(t), t = !1), t = setTimeout(function () {
        var s = i.scrollTop();
        s > n + o ? t = setTimeout(function () {
          e.addClass("s_down"), h(ne, function () {
            We.hide()
          })
        }, 0) : n + o >= s && (t = setTimeout(function () {
          e.removeClass("s_down")
        }, 0))
      }, 50)
    };
    return s(), s
  }()), Re.bind("paste", function () {
    if (!(window.__disable_index_predict && 0 == pageState || pe || he)) {
      var t = this, e = this.value;
      Ge = !0, setTimeout(function () {
        t.value && t.value != e && q({
          env: (new p).clone({wd: $.trim(t.value)}),
          force: !1,
          use_cache: !0,
          no_predict: !0,
          shouldShow: bds.comm.supportis,
          pstg: 2
        })
      }, 0)
    }
  })
}

function addEV(t, e, i) {
  window.attachEvent ? t.attachEvent("on" + e, i) : window.addEventListener && t.addEventListener(e, i, !1)
}

function user_c(t) {
  var e = "", i = "", n = "", o = "", s = encodeURIComponent(window.document.location.href),
    a = window["BD_PS_C" + (new Date).getTime()] = new Image,
    r = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
  for (v in t) {
    switch (v) {
      case"title":
        n = encodeURIComponent(t[v].replace(/<[^<>]+>/g, ""));
        break;
      case"url":
        n = encodeURIComponent(t[v]);
        break;
      default:
        n = t[v]
    }
    e += v + "=" + n + "&"
  }
  return o = "&mu=" + s, a.src = r + "/v.gif?pid=201&pj=psuser&" + e + "path=" + s + "&wd=" + i + "&t=" + (new Date).getTime(), !0
}

function initPassV3() {
  var t = bds.comm.passnew ? 3 : 2, e = bds.comm.ishome ? -1 : 5;
  bds.se.passv3 = passport.pop.init({
    apiOpt: {
      loginType: 1,
      product: "mn",
      u: window.document.location.href,
      safeFlag: 0,
      qrcode: t,
      staticPage: location.protocol + "//www.baidu.com/cache/user/html/v3Jump.html",
      sms: e
    }, cache: !1, tangram: !0, authsite: ["qzone", "tsina"], authsiteCfg: {
      act: "implicit",
      display: "popup",
      jumpUrl: location.protocol + "//www.baidu.com/cache/user/html/xd.html",
      onBindSuccess: function (t, e) {
        var i = decodeURIComponent(e.passport_uname || e.displayname);
        return bds.se.login.success(i), !1
      }
    }, onLoginSuccess: function (t) {
      t.returnValue = !1;
      var e = t.rsp.data.userName || t.rsp.data.mail || t.rsp.data.phoneNumber;
      bds.se.login.success(e)
    }, onSubmitStart: function () {
    }, onSubmitedErr: function () {
    }, onSystemErr: function () {
    }, onShow: function () {
    }, onHide: function () {
      bds.se.login.setSubpro(""), bds.se.login.setMakeText("")
    }, onDestroy: function () {
    }
  })
}

function isp_hijack(t) {
  var e, i, n, o = document.getElementById("wrapper"), s = !1;
  bds.comm.query || (s = !0), 1 == t.stat && (e = document.createElement("div"), e.innerHTML = '<div style="zoom:1;_margin-left:1024px;"><div style="position:relative;_float:left;_margin-left:-1024px;"><div style="width:100%;min-width:1024px;"><div style="border:2px solid #fd9162;zoom:1;overflow:hidden;padding:0 0 6px 12px;"><div style="position:relative;width:100%;*overflow:auto;padding-top:10px;"><div style="height:18px;margin-bottom:6px;"><i class="c-icon" style="width:18px;height:18px;background-position:-168px -72px;"></i><strong style="display:inline-block;margin-left:8px;font-size:14px;color:#666;">百度提示您：</strong></div><span style="display:block;color:#333;text-indent:26px;font-size:13px;">我们发现当前您可能受到异常广告弹窗的影响，通常这是受第三方恶意劫持导致。使用 <a href="http://shadu.baidu.com/landingpage/competing.html?from=10064" target="_blank" style="color:#0000D0;text-decoration:underline">防恶意广告专版杀毒软件</a>，可有效改善您的上网体验，免受恶意广告的困扰。</span><a id="isp-close-btn" style="display:inline-block;width:9px;height:9px;position:absolute;top:6px;right:6px;background:url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/wsCloseBtn2_0047ae2.png) no-repeat;" href="javascript:void(0);"></a></div></div></div></div></div>', s ? o.insertBefore(e, o.children[0]) : (o.style.position = "relative", document.getElementById("u").style.top = 0, e.style.margin = "-6px 0 8px 0", document.body.insertBefore(e, o)), i = document.getElementById("isp-close-btn"), n = i.parentNode.getElementsByTagName("a")[0], i.onclick = function () {
    s ? o.removeChild(e) : (document.body.removeChild(e), o.style.position = "", document.getElementById("u").style.top = "4px")
  }, i.onmousedown = function () {
    ns_c({fm: "behs", tab: "tj_notice", cont: "jcbro", action: "close", area: "topbar"})
  }, n.onmousedown = function () {
    ns_c({fm: "behs", tab: "tj_notice", cont: "jcbro", action: "click", area: "topbar"})
  }, ns_c({fm: "behs", tab: "tj_notice", cont: "jcbro", action: "show", area: "topbar"}))
}

function isbase64(t) {
  function e() {
    p = {left: $.Deferred(), right: $.Deferred()}
  }

  function i(t, e) {
    b++;
    var t = t || [], e = e || [];
    if (t = $.grep(t, function (t) {
      return f.right.hasOwnProperty(t) ? !1 : (f.right[t] = !1, !0)
    }), e = $.grep(e, function (t) {
      return f.left.hasOwnProperty(t) ? !1 : (f.left[t] = !1, !0)
    }), 2 == c.b64Exp && e.length > 0 && (h = !0, s(e, "left", "reql")), t.length > 0) if (t.length > 12) {
      var i = Math.round(t.length / 2), n = [], o = [];
      $.each(t, function (t, e) {
        i > t ? n.push(e) : o.push(e)
      }), s(n, "right", "reqr2"), s(o, "right", "reqr1")
    } else s(t, "right", "reqr")
  }

  function n(t) {
    for (var e = t, i = 0; __callback_names.hasOwnProperty(t) || window[t];) t = e + "_" + i, i++;
    return __callback_names[t] = 1, t
  }

  function o(t) {
    if ("string" == typeof t) {
      var e, i = 0, n = 0;
      for (e = 0; e < t.length; e++) n = e % 20 + 1, i += t.charCodeAt(e) << n;
      return Math.abs(i)
    }
    return 0
  }

  function s(t, e, i) {
    var s = l + "image?imglist=" + t.join(","), a = o(t.join(""));
    a = "cb_" + (a + "").substr(Math.max(0, a.length - 8), 8) + "_" + v.length, a = n(a), s += "&cb=" + a;
    var r = 1 * new Date, c = $.ajax({
      url: s,
      cache: !0,
      dataType: "jsonp",
      jsonp: !1,
      timeout: 1500,
      jsonpCallback: a,
      success: function (t) {
        u[i] = 1 * new Date - r, "right" == e ? C(t) : "left" == e && I(t)
      }
    });
    c.always(function () {
      delete __callback_names[a]
    }), v.push(c)
  }

  function a() {
    var t = v.concat(p.left, p.right), e = g = $.when.apply($, t);
    g.always(function () {
      +new Date, e === g && (2 == c.b64Exp && _("left"), _("right"))
    })
  }

  function r(t, e) {
    try {
      t.onerror = function () {
        S(this)
      }, m.push({obj: t, loaded: !1}), t.onload = function () {
        for (var t = 0; t < m.length; t++) {
          var e = m[t];
          e.obj == this && (e.loaded = !0)
        }
      }, t.src = "data:image/jpeg;base64," + e
    } catch (i) {
      S(t)
    }
  }

  var c;
  bds && bds._base64 ? c = bds._base64 : (c = {
    domain: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://b1.bdstatic.com/") : "http://b1.bdstatic.com/",
    b64Exp: -1,
    pdc: !1,
    sep: 16
  }, bds._base64 = c);
  var d = {left: "content_left", right: "container"}, l = c.domain, u = {}, m = [],
    p = {left: $.Deferred(), right: $.Deferred()}, f = {left: {}, right: {}}, h = !1, b = 0, g = null;
  c.inline = !1;
  var v = [];
  t.onSendlog(function () {
    var e = [];
    u && $.each(u, function (t, i) {
      e.push(t + "_" + i)
    }), t.setParam("cus_cusval", e.join("|")), A.isinline() && (t.setParam("cus_b64il", A.ilsum), A.ilparseTime && t.setParam("cus_b64ilpt", A.ilparseTime), A.ilrenderTime && t.setParam("cus_b64ilrt", A.ilrenderTime))
  });
  var w = function (t, e, i, n) {
    if (n = n ? $(n).find("#" + d[e])[0] : document.getElementById(d[e])) for (var o = n.getElementsByTagName("IMG"), s = 0; s < o.length; s++) {
      var a = o[s].getAttribute(i);
      a && (t.hasOwnProperty(a) && t[a] ? r(o[s], t[a]) : S(o[s]))
    }
  }, _ = function (t) {
    w(f[t], t, "data-b64-id")
  }, y = !1, x = !1, k = function (t, e) {
    y || w(t, "right", "data-b64il-id", e), e && (y = !0), x = !0
  }, T = 0, S = function (e) {
    (e.getAttribute("data-b64-id") || e.getAttribute("data-b64il-id")) && null != e.getAttribute("data-src") && (e.src = e.getAttribute("data-src"), t.setParam("cus_b64fails", ++T))
  }, C = function (t) {
    D(t, "right")
  }, I = function (t) {
    D(t, "left")
  }, D = function (t, e) {
    for (var i in t) t.hasOwnProperty(i) && (f[e][i] = t[i])
  }, L = function (t) {
    p[t].resolve()
  }, R = function () {
    f = null, m = null, p = null, $.each(v, function () {
      this.abort()
    })
  }, A = {
    loadImg: i, setDomLoad: L, end: a, isinline: function () {
      return x
    }, restart: e, destroy: R, reqT: u, inline: k
  };
  return A
}

function formatDate(t, e) {
  var i = function (t) {
    return t > 9 ? t : "0" + t
  };
  return ("number" == typeof t || "string" == typeof t) && (t = new Date(t)), [t.getFullYear(), i(t.getMonth() + 1), i(t.getDate())].join(e || "")
}

function baseChangeUrl(t) {
  bds.comm.search_tool.st && bds.comm.search_tool.et && bds.comm.search_tool.stftype && t.indexOf("&gpc=") < 0 && (t += "&gpc=" + encodeURIComponent("stf=" + bds.comm.search_tool.st + "," + bds.comm.search_tool.et + "|stftype=" + bds.comm.search_tool.stftype)), bds.comm.search_tool.si && t.indexOf("&si=") < 0 && (t += "&si=" + encodeURIComponent(bds.comm.search_tool.si) + "&ct=2097152"), bds.comm.search_tool.sl_lang && t.indexOf("&sl_lang=") < 0 && (t += "&rsv_srlang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), t += "&sl_lang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), t += "&rsv_rq=" + encodeURIComponent(bds.comm.search_tool.sl_lang)), changeUrl(t)
}

function langChangeUrl(t, e, i) {
  ns_c({
    fm: "advTool",
    qid: bds.comm.qid,
    title: encodeURI(i),
    rsv_advTool_lang: e
  }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + t + "=" + encodeURIComponent(e) + "&rsv_srlang=" + encodeURIComponent(e) + "&rsv_rq=" + encodeURIComponent(e))
}

function advChangeUrl(t, e, i, n) {
  if (-1 != e.indexOf("=")) var o = 1; else var o = 0;
  ns_c({
    fm: "advTool",
    qid: bds.comm.qid,
    title: encodeURI(i),
    rsv_advTool_time: n,
    rsv_advTool_stet: e.substr(4).replace(",", "_")
  }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + t + "=" + encodeURIComponent(e) + "&tfflag=" + o)
}

function fileChangeUrl(t, e, i) {
  ns_c({
    fm: "advTool",
    qid: bds.comm.qid,
    title: encodeURI(e),
    rsv_advTool_ft: i
  }), baseChangeUrl("wd=" + encodeURIComponent(queryReplace("filetype", t)))
}

function queryReplace(t, e) {
  if (!t || "filetype" != t && "site" != t) return n;
  var i = new RegExp("(" + t + "):[^\\s]*[ ]?"), n = $("#kw").val();
  return " " == e || null == e ? n.replace(i, "") : n.match(i) ? n.replace(i, "$1:" + e + " ") : t + ":" + e + " " + n
}

function extChangeUrl(t) {
  t ? (ns_c({
    fm: "advTool",
    qid: bds.comm.qid,
    title: encodeURI("精确匹配"),
    rsv_advTool_ext: 1
  }), baseChangeUrl('wd="' + encodeURIComponent($("#kw").val()) + '"')) : (ns_c({
    fm: "advTool",
    qid: bds.comm.qid,
    title: encodeURI("智能匹配"),
    rsv_advTool_ext: 0
  }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/^\"(.*)\"$/, "$1"))))
}

!function () {
  function getUA() {
    var t, e = {}, i = navigator.userAgent.toLowerCase();
    return e.mac = navigator.platform.toUpperCase().indexOf("MAC") >= 0, (t = i.match(/rv:([\d.]+)\) like gecko/)) ? e.ie = t[1] : (t = i.match(/(msie\s|trident.*rv:)([\w.]+)/)) ? e.ie = t[2] : (t = i.match(/firefox\/([\d.]+)/)) ? e.firefox = t[1] : (t = i.match(/chrome\/([\d.]+)/)) ? e.chrome = t[1] : (t = i.match(/opera.([\d.]+)/)) ? e.opera = t[1] : (t = i.match(/version\/([\d.]+).*safari/)) ? e.safari = t[1] : 0, e
  }

  function getDefaultQueryHis() {
    try {
      return JSON.parse(localStorage.getItem("index_ls_default_query"))
    } catch (t) {
      return {}
    }
  }

  function detectPlaceholder(t) {
    var e = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
    return t.ie ? !1 : "placeholder" in document.createElement("input") && !e
  }

  function createPlaceHolder(t, e, i) {
    if (e) t.attr("placeholder", i); else {
      var n = "<div class=kw-placeholder>" + i + "</div>";
      t.before(n), $(".kw-placeholder").on("click", function (e) {
        t.focus(), e.target = t.get(0), t.trigger(e)
      }), $(document).ready(function () {
        $(".kw-placeholder").toggleClass("placeholders-hidden", t.val().length > 0)
      }), t.on("keydown keyup cut paste setValue input", checkInputValue)
    }
  }

  function checkInputValue() {
    var t = $input.val();
    setTimeout(function () {
      var e = $input.val();
      (e !== t || e.length > 0) && $(".kw-placeholder").toggleClass("placeholders-hidden", e.length > 0)
    }, 0)
  }

  function removePlaceHolder(t, e) {
    e ? t.removeAttr("placeholder") : $(".kw-placeholder").remove()
  }

  function testLocalStorage() {
    var t = "test";
    try {
      return localStorage.setItem(t, t), localStorage.removeItem(t), !0
    } catch (e) {
      return !1
    }
  }

  function getShowCount(t, e) {
    var i = 0;
    return e && e.query && e.query === t && e.count && (i = e.count), i
  }

  function recordDefaultQuery(t, e) {
    var i = {query: t, time: (new Date).getTime(), count: 1};
    e && e.query && t === e.query && e.count && (i.count = e.count + 1), setTimeout(function () {
      try {
        localStorage.removeItem("index_ls_default_query"), localStorage.setItem("index_ls_default_query", JSON.stringify(i))
      } catch (t) {
        return !1
      }
    }, 0)
  }

  function jsonPolyfill() {
    var json = {
      parse: function (sJSON) {
        return eval("(" + sJSON + ")")
      }, stringify: function () {
        var t = Object.prototype.toString, e = Object.prototype.hasOwnProperty, i = Array.isArray || function (e) {
            return "[object Array]" === t.call(e)
          }, n = {'"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t"},
          o = function (t) {
            return n[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
          }, s = /[\\"\u0000-\u001F\u2028\u2029]/g;
        return function a(n) {
          if (null == n) return "null";
          if ("number" == typeof n) return isFinite(n) ? n.toString() : "null";
          if ("boolean" == typeof n) return n.toString();
          if ("object" == typeof n) {
            if ("function" == typeof n.toJSON) return a(n.toJSON());
            if (i(n)) {
              for (var r = "[", c = 0; c < n.length; c++) r += (c ? ", " : "") + a(n[c]);
              return r + "]"
            }
            if ("[object Object]" === t.call(n)) {
              var d = [];
              for (var l in n) e.call(n, l) && d.push(a(l) + ": " + a(n[l]));
              return "{" + d.join(", ") + "}"
            }
          }
          return '"' + n.toString().replace(s, o) + '"'
        }
      }()
    };
    return json
  }

  var defaultQuery = window.bds && bds.comm && bds.comm.dpquery;
  window.JSON || (window.JSON = jsonPolyfill());
  var isSupportLocalStorage = testLocalStorage(), defaultQueryHis = isSupportLocalStorage ? getDefaultQueryHis() : {},
    $input = $("#kw");
  if (getShowCount(defaultQuery, defaultQueryHis) > 9 && (defaultQuery = ""), defaultQuery) {
    var UA = getUA(), isPlaceHolderSupported = detectPlaceholder(UA);
    createPlaceHolder($input, isPlaceHolderSupported, defaultQuery, UA), isSupportLocalStorage && recordDefaultQuery(defaultQuery, defaultQueryHis), $(window).one("index_off", function () {
      removePlaceHolder($input, isPlaceHolderSupported), bds.comm.dpquery = ""
    })
  }
}();
var define, require, esl;
!function (t) {
  function e(t) {
    m(t, U) || (z[t] = 1)
  }

  function i(t, e) {
    function i(t) {
      0 === t.indexOf(".") && o.push(t)
    }

    var o = [];
    if ("string" == typeof t ? i(t) : R(t, function (t) {
      i(t)
    }), o.length > 0) throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + o.join(", "));
    var s = F.waitSeconds;
    return s && t instanceof Array && (O && clearTimeout(O), O = setTimeout(n, 1e3 * s)), B(t, e)
  }

  function n() {
    function t(a, r) {
      if (!s[a] && !m(a, U)) {
        s[a] = 1;
        var c = q[a];
        c ? (r || !m(a, N) || c.hang) && (n[a] || (n[a] = 1, e.push(a)), R(c.depMs, function (e) {
          t(e.absId, e.hard)
        })) : o[a] || (o[a] = 1, i.push(a))
      }
    }

    var e = [], i = [], n = {}, o = {}, s = {};
    for (var a in z) t(a, 1);
    if (e.length || i.length) throw new Error("[MODULE_TIMEOUT]Hang(" + (e.join(", ") || "none") + ") Miss(" + (i.join(", ") || "none") + ")")
  }

  function o(t) {
    R(W, function (e) {
      r(t, e.deps, e.factory)
    }), W.length = 0
  }

  function s(t, e, i) {
    if (null == i && (null == e ? (i = t, t = null) : (i = e, e = null, t instanceof Array && (e = t, t = null))), null != i) {
      var n = window.opera;
      if (!t && document.attachEvent && (!n || "[object Opera]" !== n.toString())) {
        var o = E();
        t = o && o.getAttribute("data-require-id")
      }
      t ? r(t, e, i) : W[0] = {deps: e, factory: i}
    }
  }

  function a() {
    var t = F.config[this.id];
    return t && "object" == typeof t ? t : {}
  }

  function r(t, e, i) {
    q[t] || (q[t] = {
      id: t,
      depsDec: e,
      deps: e || ["require", "exports", "module"],
      factoryDeps: [],
      factory: i,
      exports: {},
      config: a,
      state: M,
      require: k(t),
      depMs: [],
      depMkv: {},
      depRs: [],
      hang: 0
    })
  }

  function c(t) {
    var e = q[t];
    if (e && !m(t, P)) {
      var i = e.deps, n = e.factory, o = 0;
      "function" == typeof n && (o = Math.min(n.length, i.length), !e.depsDec && n.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g, function (t, e, n) {
        i.push(n)
      }));
      var s = [], a = [];
      R(i, function (i, n) {
        var r, c, d = I(i), l = T(d.mod, t);
        l && !H[l] ? (d.res && (c = {
          id: i,
          mod: l,
          res: d.res
        }, a.push(i), e.depRs.push(c)), r = e.depMkv[l], r || (r = {
          id: d.mod,
          absId: l,
          hard: o > n
        }, e.depMs.push(r), e.depMkv[l] = r, s.push(l))) : r = {absId: l}, o > n && e.factoryDeps.push(c || r)
      }), e.state = P, u(t), g(s), a.length && e.require(a, function () {
        R(e.depRs, function (e) {
          e.absId || (e.absId = T(e.id, t))
        }), d()
      })
    }
  }

  function d() {
    for (var t in z) c(t), l(t), p(t)
  }

  function l(t) {
    function e(t) {
      if (c(t), !m(t, P)) return !1;
      if (m(t, N) || i[t]) return !0;
      i[t] = 1;
      var n = q[t], o = !0;
      return R(n.depMs, function (t) {
        o = e(t.absId) && o
      }), o && R(n.depRs, function (t) {
        return o = !!t.absId
      }), o && !m(t, N) && (n.state = N), i[t] = 0, o
    }

    var i = {};
    e(t)
  }

  function u(e) {
    function i() {
      if (!n && o.state === N) {
        n = 1;
        var i = 1;
        if (R(o.factoryDeps, function (t) {
          var e = t.absId;
          return H[e] ? void 0 : (p(e), i = m(e, U))
        }), i) {
          try {
            var s = o.factory, a = "function" == typeof s ? s.apply(t, f(o.factoryDeps, {
              require: o.require,
              exports: o.exports,
              module: o
            })) : s;
            null != a && (o.exports = a), o.invokeFactory = null
          } catch (r) {
            throw o.hang = 1, r
          }
          b(e)
        }
      }
    }

    var n, o = q[e];
    o.invokeFactory = i
  }

  function m(t, e) {
    return q[t] && q[t].state >= e
  }

  function p(t) {
    var e = q[t];
    e && e.invokeFactory && e.invokeFactory()
  }

  function f(t, e) {
    var i = [];
    return R(t, function (t, n) {
      "object" == typeof t && (t = t.absId), i[n] = e[t] || q[t].exports
    }), i
  }

  function h(t, e) {
    if (m(t, U)) return void e();
    var i = Q[t];
    i || (i = Q[t] = []), i.push(e)
  }

  function b(t) {
    var e = q[t];
    e.state = U, delete z[t];
    for (var i = Q[t] || [], n = i.length; n--;) i[n]();
    i.length = 0, Q[t] = null
  }

  function g(e, i, n) {
    function o() {
      if ("function" == typeof i && !s) {
        var n = 1;
        R(e, function (t) {
          return H[t] ? void 0 : n = !!m(t, U)
        }), n && (s = 1, i.apply(t, f(e, H)))
      }
    }

    var s = 0;
    R(e, function (t) {
      H[t] || m(t, U) || (h(t, o), (t.indexOf("!") > 0 ? w : v)(t, n))
    }), o()
  }

  function v(e) {
    function i() {
      var t = K[e];
      j(t || e, n)
    }

    function n() {
      if (a) {
        var i;
        "function" == typeof a.init && (i = a.init.apply(t, f(r, H))), null == i && a.exports && (i = t, R(a.exports.split("."), function (t) {
          return i = i[t], !!i
        })), s(e, r, function () {
          return i || {}
        })
      } else o(e);
      d()
    }

    if (!G[e] && !q[e]) {
      G[e] = 1;
      var a = F.shim[e];
      a instanceof Array && (F.shim[e] = a = {deps: a});
      var r = a && (a.deps || []);
      r ? (R(r, function (t) {
        F.shim[t] || (F.shim[t] = {})
      }), B(r, i)) : i()
    }
  }

  function w(t, e) {
    function i(e) {
      c.exports = e || !0, b(t)
    }

    function n(n) {
      var o = e ? q[e].require : B;
      n.load(r.res, o, i, a.call({id: t}))
    }

    if (!q[t]) {
      var s = K[t];
      if (s) return void v(s);
      var r = I(t), c = {id: t, state: P};
      q[t] = c, i.fromText = function (t, e) {
        new Function(e)(), o(t)
      }, n(B(r.mod))
    }
  }

  function _(t, e) {
    var i = D(t, 1, e);
    return i.sort(A), i
  }

  function y() {
    function t(t) {
      K[S(t)] = i
    }

    F.baseUrl = F.baseUrl.replace(/\/$/, "") + "/", V = _(F.paths), X = _(F.map, 1), R(X, function (t) {
      t.v = _(t.v)
    });
    var e = X[X.length - 1];
    e && "*" === e.k && R(X, function (t) {
      t != e && (t.v = t.v.concat(e.v))
    }), J = [], R(F.packages, function (t) {
      var e = t;
      "string" == typeof t && (e = {
        name: t.split("/")[0],
        location: t,
        main: "main"
      }), e.location = e.location || e.name, e.main = (e.main || "main").replace(/\.js$/i, ""), e.reg = L(e.name), J.push(e)
    }), J.sort(A), Y = _(F.urlArgs, 1), K = {};
    for (var i in F.bundles) R(F.bundles[i], t)
  }

  function x(t, e, i) {
    R(e, function (e) {
      return e.reg.test(t) ? (i(e.v, e.k, e), !1) : void 0
    })
  }

  function $(t, e) {
    var i = /(\.[a-z0-9]+)$/i, n = /(\?[^#]*)$/, o = "", s = t, a = "";
    n.test(t) && (a = RegExp.$1, t = t.replace(n, "")), i.test(t) && (o = RegExp.$1, s = t.replace(i, "")), null != e && (s = T(s, e));
    var r, c = s;
    return x(s, V, function (t, e) {
      c = c.replace(e, t), r = 1
    }), r || x(s, J, function (t, e, i) {
      c = c.replace(i.name, i.location)
    }), /^([a-z]{2,10}:\/)?\//i.test(c) || (c = F.baseUrl + c), c += o + a, x(s, Y, function (t) {
      c += (c.indexOf("?") > 0 ? "&" : "?") + t
    }), c
  }

  function k(t) {
    function i(i, o) {
      if ("string" == typeof i) {
        if (!n[i]) {
          var s = T(i, t);
          if (p(s), !m(s, U)) throw new Error('[MODULE_MISS]"' + s + '" is not exists!');
          n[i] = q[s].exports
        }
        return n[i]
      }
      if (i instanceof Array) {
        var a = [], r = [];
        R(i, function (i, n) {
          var o = I(i), s = T(o.mod, t), c = o.res, d = s;
          if (c) {
            var l = s + "!" + c;
            0 !== c.indexOf(".") && K[l] ? s = d = l : d = null
          }
          r[n] = d, e(s), a.push(s)
        }), g(a, function () {
          R(r, function (n, o) {
            null == n && (n = r[o] = T(i[o], t), e(n))
          }), g(r, o, t), d()
        }, t), d()
      }
    }

    var n = {};
    return i.toUrl = function (e) {
      return $(e, t || "")
    }, i
  }

  function T(t, e) {
    if (!t) return "";
    e = e || "";
    var i = I(t);
    if (!i) return t;
    var n = i.res, o = C(i.mod, e);
    if (x(e, X, function (t) {
      x(o, t, function (t, e) {
        o = o.replace(e, t)
      })
    }), o = S(o), n) {
      var s = m(o, U) && B(o);
      n = s && s.normalize ? s.normalize(n, function (t) {
        return T(t, e)
      }) : T(n, e), o += "!" + n
    }
    return o
  }

  function S(t) {
    return R(J, function (e) {
      var i = e.name;
      return i === t ? (t = i + "/" + e.main, !1) : void 0
    }), t
  }

  function C(t, e) {
    if (0 !== t.indexOf(".")) return t;
    for (var i = e.split("/").slice(0, -1).concat(t.split("/")), n = [], o = 0; o < i.length; o++) {
      var s = i[o];
      switch (s) {
        case".":
          break;
        case"..":
          n.length && ".." !== n[n.length - 1] ? n.pop() : n.push(s);
          break;
        default:
          s && n.push(s)
      }
    }
    return n.join("/")
  }

  function I(t) {
    var e = t.split("!");
    return e[0] ? {mod: e[0], res: e[1]} : void 0
  }

  function D(t, e, i) {
    var n = [];
    for (var o in t) if (t.hasOwnProperty(o)) {
      var s = {k: o, v: t[o]};
      n.push(s), e && (s.reg = "*" === o && i ? /^/ : L(o))
    }
    return n
  }

  function L(t) {
    return new RegExp("^" + t + "(/|$)")
  }

  function R(t, e) {
    if (t instanceof Array) for (var i = 0, n = t.length; n > i && e(t[i], i) !== !1; i++) ;
  }

  function A(t, e) {
    var i = t.k || t.name, n = e.k || e.name;
    return "*" === n ? -1 : "*" === i ? 1 : n.length - i.length
  }

  function E() {
    if (Z) return Z;
    if (te && "interactive" === te.readyState) return te;
    for (var t = document.getElementsByTagName("script"), e = t.length; e--;) {
      var i = t[e];
      if ("interactive" === i.readyState) return te = i, i
    }
  }

  function j(t, e) {
    function i() {
      var t = n.readyState;
      ("undefined" == typeof t || /^(loaded|complete)$/.test(t)) && (n.onload = n.onreadystatechange = null, n = null, e())
    }

    var n = document.createElement("script");
    n.setAttribute("data-require-id", t), n.src = $(t + ".js"), n.async = !0, n.readyState ? n.onreadystatechange = i : n.onload = i, Z = n, ie ? ee.insertBefore(n, ie) : ee.appendChild(n), Z = null
  }

  var O, q = {}, M = 1, P = 2, N = 3, U = 4, z = {}, H = {require: i, exports: 1, module: 1}, B = k(), F = {
    baseUrl: "./",
    paths: {},
    config: {},
    map: {},
    packages: [],
    shim: {},
    waitSeconds: 0,
    bundles: {},
    urlArgs: {}
  };
  i.version = "2.1.4", i.loader = "esl", i.toUrl = B.toUrl;
  var W = [];
  s.amd = {};
  var Q = {}, G = {};
  i.config = function (t) {
    if (t) {
      for (var e in F) {
        var i = t[e], n = F[e];
        if (i) if ("urlArgs" === e && "string" == typeof i) F.urlArgs["*"] = i; else if (n instanceof Array) n.push.apply(n, i); else if ("object" == typeof n) for (var o in i) n[o] = i[o]; else F[e] = i
      }
      y()
    }
  }, y();
  var V, J, X, K, Y, Z, te, ee = document.getElementsByTagName("head")[0],
    ie = document.getElementsByTagName("base")[0];
  ie && (ee = ie.parentNode), define || (define = s, require || (require = i), esl = i);
  var ne;
  !function () {
    for (var t = document.getElementsByTagName("script"), e = t.length; e--;) {
      var i = t[e];
      if (ne = i.getAttribute("data-main")) break
    }
  }(), ne && setTimeout(function () {
    i([ne])
  }, 4)
}(this);
var bds = window.bds || {};
bds.amd = {
  keys: {}, addPaths: function (t) {
    "object" == typeof t && (require.config({paths: t}), $.extend(bds.amd.keys, t))
  }, deletePath: function (t) {
    var e = "string" == typeof t ? [t] : t;
    for (var i in e) e.hasOwnProperty(i) && delete bds.amd.keys[i]
  }, addConfig: function (t) {
    if ("object" == typeof t) {
      require.config(t);
      for (var e in t) if (t.hasOwnProperty(e)) {
        bds.amd[e] || (bds.amd[e] = {});
        for (var i in t[e]) t[e].hasOwnProperty(i) && t[e][i] && (bds.amd[e][i] = t[e][i])
      }
    }
  }, getPath: function (t) {
    return t && "string" == typeof t ? bds.amd.keys[t] || bds.amd.paths[t] || "" : void 0
  }, getBundle: function (t) {
    if (t && "string" == typeof t) {
      var e = bds.amd.bundles, i = "", n = "";
      if (e && "object" == typeof e) for (var o in e) if (e.hasOwnProperty(o) && e[o].indexOf(t) > -1) {
        i = o, n = bds.amd.getPath(o);
        break
      }
      return {name: i, path: n}
    }
  }, exist: function (t) {
    return t && "undefined" != typeof bds.amd.keys[t] ? !0 : !1
  }
}, function () {
  var t = bds.util && bds.util.domain ? bds.util.domain.get("http://s1.bdstatic.com") : "http://s1.bdstatic.com",
    e = bds.util && bds.util.domain ? bds.util.domain.get("http://ecmb.bdimg.com") : "http://ecmb.bdimg.com";
  require.config({
    baseUrl: t + "/r/www/cache/biz",
    packages: [{name: "ecma", location: e + "/public01"}, {name: "ecmb", location: e + "/public01"}],
    paths: {
      aladdin: t + "/r/www/aladdin",
      ui: t + "/r/www/cache/amd/ui",
      "ui/config": t + "/r/www/cache/amd/ui/Control",
      "ui/lib": t + "/r/www/cache/amd/ui/Control",
      "ui/Control": t + "/r/www/cache/amd/ui/Control"
    },
    urlArgs: {
      "ui/ImgZoomHover": "20141104",
      "ui/ImgZoomHover1": "20141104",
      "ui/ImgZoomHover2": "20141104",
      "ui/ImgZoomHover3": "20141104"
    }
  })
}(), bds.amd.addConfig({bundles: {"@baidu/ala-util": ["@baidu/ala-util", "@baidu/ala-util/env", "@baidu/ala-util/es6-promise", "@baidu/ala-util/fetch-jsonp", "@baidu/ala-util/fetch", "@baidu/ala-util/index", "@baidu/ala-util/lodash", "@baidu/ala-util/ala", "@baidu/ala-util/update"]}}), bds.amd.addPaths({
  Atom: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/bundles/atom_aa06f6b",
  "voice/js/voice": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/voice/js/voice_1672ed3",
  "plugins/swfobject": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/swfobject_0178953",
  "soutu/js/tu": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/js/tu_77547af",
  "lib/get_ua": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/lib/get_ua_5600c75",
  "lib/get_zoom": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/lib/get_zoom_40318e9",
  "plugins/zoom_prompt": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/zoom_prompt_d72a9cd",
  "plugins/pcToWise": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/pcToWise_946ec60",
  "plugins/qrcodegen": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/qrcodegen_3297c28",
  "plugins/https_useable_sample": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/https_useable_sample_8f5c5a9",
  "plugins/feedback_suggest": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_suggest_f73e42e",
  "webb/instance": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/webb/instance_5d88cac",
  "atom-logger": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/webb/atom-logger_098581c",
  "plugins/hotWord": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/hotWord_cc828cc"
}), bds.amd.addPaths({
  "@baidu/ala-util": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util_b8e7a51",
  "@baidu/atom-web-runtime": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/atom-web-runtime_f8cc03e",
  "@baidu/better-scroll": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/better-scroll_3ca1fd1",
  "@baidu/pmd": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/pmd_9fac2fd",
  "@baidu/search-sug": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/search-sug_b3528ce",
  "@baidu/web-animations-js": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/web-animations-js_6166288",
  "@baidu/webb": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/webb_f69c914",
  "@searchfe/assert": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/assert_8f1a1ad",
  "@searchfe/promise": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/promise_33d6467",
  "@searchfe/user-agent": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/user-agent_165a7ee",
  "promise-polyfill": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/promise-polyfill_eb6da34",
  "versions-compare": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/versions-compare_a4b1c27",
  "whatwg-fetch": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/whatwg-fetch_435bd8d"
}), bds.amd.addPaths({
  "@baidu/ala-util": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/bundles/ala-util_e489543",
  "@baidu/webb": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/webb/webb2.min_62df7c4",
  "@baidu/module-version": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/module-version/index_/static/amd_modules/@baidu/module-version/index.js"
}), bds.amd.addPaths({
  "@baidu/ala-util/env": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util/env_c8c79df",
  "@baidu/ala-util/es6-promise": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util/es6-promise_5db0418",
  "@baidu/ala-util/fetch": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util/fetch_b79917d",
  "@baidu/ala-util/fetch-jsonp": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util/fetch-jsonp_2e624b8",
  "@baidu/ala-util/index": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util/index_6acb491",
  "@baidu/ala-util/lodash": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/ala-util/lodash_e153b58",
  "@baidu/atom-web-runtime/dist/atom.min": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/atom-web-runtime/dist/atom.min_960c107",
  "@baidu/better-scroll/better-scroll": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/better-scroll/better-scroll_f35e74a",
  "@baidu/pmd/dist/pmd": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/pmd/dist/pmd_abc3d9e",
  "@baidu/search-sug/sug/index": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/search-sug/sug/index_f71ff63",
  "@baidu/web-animations-js/web-animations.min": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/web-animations-js/web-animations.min_5987b41",
  "@baidu/webb/webb2.min": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@baidu/webb/webb2.min_62df7c4",
  "@searchfe/assert/index": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/assert/index_93ef523",
  "@searchfe/promise/src/promise": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/promise/src/promise_c5de809",
  "@searchfe/promise/src/set-immediate": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/promise/src/set-immediate_099c916",
  "@searchfe/user-agent/src/index": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/@searchfe/user-agent/src/index_107eeda",
  "promise-polyfill/lib/index": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/promise-polyfill/lib/index_18c4599",
  "versions-compare/src/index": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/versions-compare/src/index_bf82f5e",
  "versions-compare/src/util": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/amd_modules/versions-compare/src/util_294470f"
}), bds && bds.comm && (bds.comm.did = function () {
  for (var t = "", e = 0; 32 > e; e++) t += Math.floor(16 * Math.random()).toString(16);
  return t
}(), bds.comm.isAsync = function () {
  var t = "onhashchange" in window, e = "onpopstate" in window;
  return (e || t) && 1 != Cookie.get("ISSW") && !window.__disable_preload
}());
try {
  window.MutationObserver = window.WebKitMutationObserver = window.MozMutationObserver = null
} catch (e) {
}
jQuery && jQuery.extend({
  stringify: function (t) {
    function e(t) {
      return /["\\\x00-\x1f]/.test(t) && (t = t.replace(/["\\\x00-\x1f]/g, function (t) {
        var e = o[t];
        return e ? e : (e = t.charCodeAt(), "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16))
      })), '"' + t + '"'
    }

    function i(t) {
      var e, i, n, o = ["["], s = t.length;
      for (i = 0; s > i; i++) switch (n = t[i], typeof n) {
        case"undefined":
        case"function":
        case"unknown":
          break;
        default:
          e && o.push(","), o.push($.stringify(n)), e = 1
      }
      return o.push("]"), o.join("")
    }

    if ("JSON" in window) return JSON.stringify(t);
    var n = typeof t;
    if ("object" != n || null === t) return "string" == n && (t = '"' + t + '"'), String(t);
    var o = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
    switch (typeof t) {
      case"undefined":
        return "undefined";
      case"number":
        return isFinite(t) ? String(t) : "null";
      case"string":
        return e(t);
      case"boolean":
        return String(t);
      default:
        if (null === t) return "null";
        if ("[object Array]" === Object.prototype.toString.call(t)) return i(t);
        var s, a, r = ["{"], c = $.stringify;
        for (var d in t) if (Object.prototype.hasOwnProperty.call(t, d)) switch (a = t[d], typeof a) {
          case"undefined":
          case"unknown":
          case"function":
            break;
          default:
            s && r.push(","), s = 1, r.push(c(d) + ":" + c(a))
        }
        return r.push("}"), r.join("")
    }
  }, format: function (t, e) {
    t = String(t);
    var i = Array.prototype.slice.call(arguments, 1), n = Object.prototype.toString;
    return i.length ? (i = 1 == i.length && null !== e && /\[object Array\]|\[object Object\]/.test(n.call(e)) ? e : i, t.replace(/#\{(.+?)\}/g, function (t, e) {
      var o = i[e];
      return "[object Function]" == n.call(o) && (o = o(e)), "undefined" == typeof o ? "" : o
    })) : t
  }, subByte: function (t, e, i) {
    var n = [], o = t.split("");
    i = i || "…";
    for (var s = 0, a = o.length; a > s; s++) o[s].charCodeAt(0) > 255 && n.push("*"), n.push(o[s]);
    return e && e > 0 && n.length > e ? o = n.join("").substring(0, e - 1).replace(/\*/g, "") + i : t
  }, getByteLength: function (t) {
    for (var e = [], i = t.split(""), n = 0, o = i.length; o > n; n++) i[n].charCodeAt(0) > 255 && e.push("*"), e.push(i[n]);
    return e.length
  }, _isValidKey: function (t) {
    return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)
  }, setCookie: function (t, e, i) {
    if (e = encodeURIComponent(e), jQuery._isValidKey(t)) {
      i = i || {};
      var n = i.expires;
      "number" == typeof i.expires && (n = new Date, n.setTime(n.getTime() + i.expires)), document.cookie = t + "=" + e + (i.path ? "; path=" + i.path : "") + (n ? "; expires=" + n.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "")
    }
  }, getCookie: function (t) {
    var e = "";
    if (jQuery._isValidKey(t)) {
      var i = new RegExp("(^| )" + t + "=([^;]*)(;|$)"), n = i.exec(document.cookie);
      if (n && (e = n[2] || null, "string" == typeof e)) return e = decodeURIComponent(e)
    }
    return null
  }, removeCookie: function (t, e) {
    e = e || {}, e.expires = new Date(0), jQuery.setCookie(t, "", e)
  }, limitWd: function (t, e) {
    if ("" === t) return "";
    t += "";
    var i = t.split(""), n = i.length, o = 0, s = e || 255;
    if (n <= parseInt(s / 2)) return t;
    for (var a = 0; n > a; a++) {
      if (o += i[a].charCodeAt(0) > 255 ? 2 : 1, o === s) return i = t.substring(0, a + 1);
      if (o > s) return i = t.substring(0, a)
    }
    return t
  }
}), $(window).on("resize", function () {
  "pageState" in window && 0 != pageState && (bds.util.setContainerWidth(), bds.event.trigger("se.window_resize"))
}), bds.util.addStyle = function (t) {
  if (isIE) {
    var e = document.createStyleSheet();
    e.cssText = t
  } else {
    var i = document.createElement("style");
    i.type = "text/css", i.appendChild(document.createTextNode(t)), document.getElementsByTagName("HEAD")[0].appendChild(i)
  }
}, bds.util.getContentRightHeight = function () {
  return $("#content_right").get(0) ? $("#content_right").get(0).offsetHeight : 0
}, bds.util.getContentLeftHeight = function () {
  return $("#content_left").get(0) ? $("#content_left").get(0).offsetHeight : 0
}, window.A || (window.bds = window.bds || {}, bds.util = bds.util || {}, bds.util.getWinWidth = function () {
  return window.document.documentElement.clientWidth
}, bds.util.setContainerWidth = function () {
  var t = G("container"), e = G("wrapper"), i = function (t, e) {
    e.className = e.className.replace(t, "")
  }, n = function (t, e) {
    e.className = (e.className + " " + t).replace(/^\s+/g, "")
  }, o = function (t, e) {
    return t.test(e.className)
  };
  bds.util.getWinWidth() < 1207 ? (t && (i(/\bcontainer_l\b/g, t), o(/\bcontainer_s\b/, t) || n("container_s", t)), e && (i(/\bwrapper_l\b/g, e), o(/\bwrapper_s\b/, e) || n("wrapper_s", e)), bds.comm.containerSize = "s") : (t && (i(/\bcontainer_s\b/g, t), o(/\bcontainer_l\b/, t) || n("container_l", t)), e && (i(/\bwrapper_s\b/g, e), o(/\bwrapper_l\b/, e) || n("wrapper_l", e)), bds.comm.containerSize = "l")
}, function () {
  var t = [], e = !1, i = function (t, e) {
    try {
      t.call(e)
    } catch (i) {
    }
  }, n = function () {
    this.ids = [], this.has = !0, this.list = [], this.logs = [], this.loadTimes = [], this.groupData = [], this.mergeFns = [], this._currentContainer = null
  };
  window.A = bds.aladdin = {}, i(n, window.A), bds.ready = function (n) {
    "function" == typeof n && (e ? i(n) : t.push(n))
  }, bds.doReady = function () {
    for (e = !0; t.length;) i(t.shift())
  }, bds.clearReady = function () {
    e = !1, t = []
  }, A.__reset = n;
  var o = function () {
    var t = document.getElementsByTagName("script");
    return function () {
      var e = t[t.length - 1];
      window.currentScriptElem && (e = window.currentScriptElem);
      for (var i = e; i;) {
        if (i.className && /(?:^|\s)result(?:-op)?(?:$|\s)/.test(i.className) && (tplname = i.getAttribute("tpl"))) return i;
        i = i.parentNode
      }
    }
  }(), s = function (t, e, i) {
    var n;
    if (t.initIndex ? n = A.groupData[t.initIndex - 1] : (n = {
      container: t,
      data: {},
      handlers: []
    }, t.initIndex = A.groupData.length + 1, A.groupData.push(n)), "function" == typeof e) n.handlers.push(e); else if ("object" == typeof e) for (var o in e) e.hasOwnProperty(o) && (n.data[o] = e[o]); else n.data[e] = i
  };
  A.init = A.setup = function (t, e) {
    if (void 0 !== t && null !== t) {
      var i = A._currentContainer || o();
      i && s(i, t, e)
    }
  }, A.merge = function (t, e) {
    A.mergeFns.push({tplName: t, fn: e})
  }
}()), A.uiPrefix = "//www.baidu.com/cache/aladdin/ui/", function () {
  var t = window.bds.aladdin, e = [], i = {}, n = 0, o = function (t, e) {
    try {
      t.call(e)
    } catch (i) {
    }
  }, s = function (t) {
    t.ajaxId = ++n, i[t.ajaxId] = t
  }, a = function (t) {
    delete i[t.ajaxId]
  }, r = function (t) {
    return t.ajaxId ? i.hasOwnProperty(t.ajaxId) : !1
  }, c = function (t) {
    var e = {};
    if (t) try {
      var i = new Function("return " + t)();
      i && (e = i)
    } catch (n) {
    }
    return e
  }, d = function () {
    for (var t, e, i = $(".result-op").get().concat($(".result").get()), n = {}, o = 0; e = i[o]; o++) (t = e.getAttribute("tpl")) && (n[t] ? n[t].push(e) : n[t] = [e]);
    return n
  }, l = [], u = [];
  t.addDisposeHandler = function (t) {
    u.push(t)
  }, t.dispose = function () {
    for (; l.length;) {
      var t = l.shift();
      o(t.fn, t.obj)
    }
    for (var e = u, i = 0; i < e.length; i++) {
      var t = e[i];
      o(t.fn, t.obj)
    }
  }, t.__clearDispose = function () {
    l = [], u = []
  }, t.addDisposeHandler({
    obj: i, fn: function () {
      for (var t in i) i.hasOwnProperty(t) && delete i[t]
    }
  }), t._Aladdin = function () {
    this.p1 = 0, this.mu = null
  }, $.extend(t._Aladdin.prototype, {
    _init: function () {
      var t = this, e = t.container, i = c(t.container.getAttribute("data-click"));
      t.p1 = i.p1 || e.id, t.mu = i.mu || e.getAttribute("mu"), t.srcid = i.rsv_srcid || e.getAttribute("srcid")
    }, q: function (t, e) {
      return e = e || "", $(this.container).find(e + "." + t).get()
    }, qq: function (t, e) {
      return this.q(t, e)[0]
    }, find: function (t) {
      return window.jQuery(t, this.container)
    }, ready: function () {
      $(document).ready.apply(this, arguments)
    }, ajax: function (e, i, n) {
      var o = t.AJAX, c = +new Date, d = n.params || {}, l = {query: e, co: n.co || "", resource_id: i, t: c};
      $.extend(l, o.PARAMS), $.extend(l, d);
      var e = $.param(l), u = o.API_URL + "?" + e, m = function () {
        var e = new Image;
        e.src = $.format(o.ERR_URL, {url: u}), t.logs.push(e)
      }, p = (new Date).getTime(), f = function (t) {
        var e = (new Date).getTime() - p, n = {fm: "opendataajax", srcid: i, time: e, status: t};
        ns_c(n)
      }, h = function (t) {
        r(h) && (g(), 0 == t.status ? n.success(t.data) : (n.error && n.error(t.status), m()), f(0))
      }, b = function () {
        r(b) && (g(), n.timeout && n.timeout(), m(), f(1))
      }, g = function () {
        a(h), a(b)
      };
      s(h), s(b), $.ajax({
        url: u,
        scriptCharset: o.PARAMS.oe,
        timeout: o.TIMEOUT,
        dataType: "jsonp",
        jsonp: "cb",
        success: h,
        error: b
      })
    }
  }), t.AJAX = {
    API_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://opendata.baidu.com/api.php") : "http://opendata.baidu.com/api.php",
    ERR_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}") : "http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}",
    PARAMS: {ie: "utf8", oe: "gbk", cb: "op_aladdin_callback", format: "json", tn: "baidu"},
    TIMEOUT: 6e3
  }, e.push(function (t) {
    var e = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
    if (e) {
      var i = document.charset;
      $.each(t.container.getElementsByTagName("form"), function (t, e) {
        var n = function () {
          var t = e.acceptCharset;
          t && "UNKNOWN" != t.toString().toUpperCase() && t != document.charset && (document.charset = t, setTimeout(function () {
            document.charset = i
          }, 1e3))
        };
        $(e).on("submit", n);
        var o = e.submit;
        e.submit = function () {
          n();
          try {
            o.call(e)
          } catch (t) {
            o()
          }
        }
      })
    }
  }), t.__runAla = function () {
    var i = d();
    $.each(t.mergeFns, function (e, n) {
      var o = i[n.tplName];
      o && $.each(o, function (e, i) {
        t._currentContainer = i, n.fn(), t._currentContainer = null
      })
    }), $.each(t.groupData, function (i, n) {
      var s, a, r, c = new t._Aladdin;
      c.container = n.container, c.data = n.data, c._init(), t.list.push(c);
      var d = n.handlers;
      for (s = new Date; d.length;) o(d.shift(), c);
      "function" == typeof c.dispose && (l.push({
        obj: c,
        fn: c.dispose
      }), c.dispose = null), a = new Date, r = {srcid: c.srcid}, r.tpl = c.container.getAttribute("tpl"), r.time = a - s, t.loadTimes.push(r), $.each(e, function (t, e) {
        e.call(c, c)
      })
    })
  }
}(), function () {
  function t(s, a) {
    var r = "string" == typeof s ? s.split(/\s*,\s*/) : s;
    if (r.length > 1) if (a) t(r.shift(), function () {
      r.length > 0 && t(r, a)
    }); else for (; r.length;) t(r.shift()); else {
      if (s = r[0], "jquery" === s && window.jQuery) return !o.ui.jquery && (o.ui.jquery = window.jQuery), void (a && a());
      var c = s.replace(/\./g, "/"), d = s.replace(/^[\s\S]*\./, ""), l = o.uiPrefix + c + "/" + d;
      0 == c.search("style/") ? e(l + ".css", a) : (l += ".js", m.hasOwnProperty(s) ? "function" == typeof m[s] ? l = m[s](s, l) : "string" == typeof m[s] && (l = m[s]) : m.hasOwnProperty("*") && (l = m["*"](s, l)), a ? n(l, a) : i(l))
    }
  }

  function e(t, e) {
    if (e = e || u, t in s) return void e();
    var i = c.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = t, i.setAttribute("data-for", "A.ui"), d.appendChild(i), s[t] = 1, e()
  }

  function i(t) {
    return l ? void n(t, u) : void (t in s || (c.write('<script charset="gb2312" type="text/javascript" src="' + t + '"></script>'), s[t] = 1))
  }

  function n(t, e) {
    if (e = e || u, t in s) return void e();
    if (t in a) return void r[t].push(e);
    a[t] = 1;
    var i = r[t] = [e], n = c.createElement("script");
    n.type = "text/javascript", n.charset = "gb2312", n.onload = n.onreadystatechange = function () {
      if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
        for (; i.length;) i.shift()();
        delete a[t], s[t] = 1, n.onload = n.onreadystatechange = null
      }
    }, n.src = t, n.setAttribute("data-for", "A.ui"), d.insertBefore(n, d.firstChild)
  }

  var o = window.A, s = {}, a = {}, r = {}, c = document, d = c.getElementsByTagName("head")[0], l = !1,
    u = (o.baidu, function () {
    }), m = {
      "*": function (t, e) {
        return e + "?v=20170208"
      }, scrollbarv: function (t, e) {
        return e + "?v=20170208"
      }, likeshare4: function (t, e) {
        return e + "?v=20170208"
      }, mboxsingleton: function (t, e) {
        return e + "?v=20170208"
      }, sms: function (t, e) {
        return e + "?v=20170208"
      }, tab: function (t, e) {
        return e + "?v=20170208"
      }, tabs: function (t, e) {
        return e + "?v=20170208"
      }, musicplayer: function (t, e) {
        return e + "?v=20170208"
      }, slider: function (t, e) {
        return e + "?v=20170208"
      }, suggestion: function (t, e) {
        return e + "?v=20170208"
      }, tabs5: function (t, e) {
        return e + "?v=20170208"
      }, tabx: function (t, e) {
        return e + "?v=20170208"
      }, dropdown1: function (t, e) {
        return e + "?v=20170208"
      }, dropdown21: function (t, e) {
        return e + "?v=20170208"
      }, advert: function (t, e) {
        return e + "?v=20170208"
      }, advert2: function (t, e) {
        return e + "?v=20170208"
      }, honourCard: function (t, e) {
        return e + "?v=20170208"
      }, honourCard3: function (t, e) {
        return e + "?v=20170208"
      }, honourCard4: function (t, e) {
        return e + "?v=20190828"
      }, share: function (t, e) {
        return e + "?v=20170208"
      }, qHotCity: function (t, e) {
        return e + "?v=20170208"
      }, mapapi: function (t, e) {
        return e + "?v=20170208"
      }, qunarfilters: function (t, e) {
        return e + "?v=20170208"
      }, renderIframe3: function (t, e) {
        return e + "?v=20170208"
      }, share2: function (t, e) {
        return e + "?v=20170208"
      }, ALD_feedback: function (t, e) {
        return e + "?v=20170208"
      }, addtohome: function (t, e) {
        return e + "?v=20170208"
      }, addtohome2: function (t, e) {
        return e + "?v=20170208"
      }, gpsApi: function (t, e) {
        return e + "?v=20170208"
      }, simGps: function (t, e) {
        return e + "?v=20170208"
      }
    };
  $(document).ready(function () {
    l = !0
  }), o.addDisposeHandler({
    obj: o, fn: function () {
      for (var t in r) if (r.hasOwnProperty(t)) for (var e = r[t]; e.length;) e.pop()
    }
  }), t.cache = s, o.uicss = function (t) {
    e(o.uiPrefix + t)
  }, o.uijs = function (t, e) {
    n(o.uiPrefix + t, e)
  }, o.uijsPathMap = function (t) {
    $.extend(m, t)
  }, o.use = t, o.ui = o.ui || {}, o.addCssText = function (t) {
    var e = "opui-style-tag-id", i = "data-for", n = "A.ui", o = document.getElementById(e);
    o || (o = document.createElement("style"), o.setAttribute("type", "text/css"), o.setAttribute(i, n), o.id = e, document.getElementsByTagName("head")[0].appendChild(o));
    try {
      var s = document.createTextNode(t);
      o.appendChild(s)
    } catch (a) {
      o.styleSheet && (o.styleSheet.cssText += t)
    }
  }, $(window).on("swap_end", function () {
    var t = /MSIE\s?6/.test(window.navigator.userAgent), e = function (t, e, i) {
      $(t).each(function (t, n) {
        var o = $(n), s = new Image, a = o.attr("src");
        s.onload = function () {
          var t = e, n = i, a = this.width, r = this.height, c = a / r / (t / n);
          c > 1 ? (a = a > t ? t : "auto", r = "auto") : (r = r > n ? n : "auto", a = "auto"), o.css({
            height: r,
            width: a
          }), s.onload = null, s = null
        }, s.src = a
      })
    };
    t && e("img.result-left-img", 98, 121), $(".c-feedback").bind("click", function () {
      var t = this;
      o.use("ALD_feedback", function () {
        var e, i, n = "right", s = $(t);
        s.parents("#content_left").length ? (n = "left", i = s.parents(".result-op"), e = i.attr("srcid")) : s.parents("#content_right").length && (i = s.parents("#con-ar"));
        var a = {query: bds.comm.query, srcid: e, target: i, username: bds.comm.username, flag: n},
          r = o.ui.ALD_feedback(a);
        o.addDisposeHandler({obj: r, fn: r.dispose})
      })
    })
  })
}(), $(window).on("swap_begin", function () {
  A.dispose(), A.__reset(), A.__clearDispose()
}), $(window).on("swap_dom_ready", function () {
  bds.ready(A.__runAla), bds.doReady()
}), bds.event = new function () {
  function t(t, e) {
    if ("function" == typeof e || e instanceof Function) {
      var i = o(t);
      s[i.name] = s[i.name] || [], s[i.name].push({prod: i.prod, callback: e})
    }
  }

  function e(t, e) {
    for (var i = o(t), a = s[i.name] || [], r = 0; r < a.length;) {
      var c = a[r];
      e === c.callback && n(i.prod, c.prod) ? a.splice(r, 1) : r++
    }
  }

  function i(t, e) {
    for (var i = o(t), a = s[i.name] || [], r = {data: e, eventId: t}, c = 0, d = a.length; d > c; c++) {
      var l = a[c];
      try {
        n(l.prod, i.prod) && l.callback.call(this, r)
      } catch (u) {
      }
    }
  }

  function n(t, e) {
    return new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".+") + "$").test(e)
  }

  function o(t) {
    var e = t.match(/(.+)\.(.+)/);
    return e && e[2] ? {prod: e[1], name: e[2]} : {}
  }

  var s = {};
  this.on = t, this.off = e, this.trigger = i, this.events = s
}, bds.se.link = function () {
  function t(t, e) {
    var i = "/s?", n = {tn: bds.comm.tn}, o = "wd=" + encodeURIComponent(t);
    e && (n = $.extend(n, e));
    for (var s in n) n.hasOwnProperty(s) && (o += "&" + s + "=" + encodeURIComponent(n[s]));
    return i + o
  }

  return {getSearchUrl: t}
}(), !function (A) {
  function clickDebug() {
  }

  function bindP5() {
    var item, index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1,
      leftItems = contentLeft && contentLeft.children || [], rightItems = contentRight && contentRight.children || [],
      topItems = contentTop && contentTop.children || [], isResult = function (t) {
        return 1 == t.nodeType && t.className && /\bresult(\-op)?\b/.test(t.className)
      }, isFrame = function (t) {
        return 1 == t.nodeType && t.className && /\bc\-frame\b/.test(t.className)
      }, setClickData = function (wrap, data) {
        var sData = wrap.getAttribute("data-click") || "{}";
        try {
          var oData = eval("(" + sData + ")");
          sData = $.stringify($.extend(oData, data)), wrap.setAttribute("data-click", sData)
        } catch (e) {
          clickDebug(e)
        }
      }, bindP5ClickData = function (t) {
        for (var e = 0, i = t.length; i > e; e++) if (item = t[e], isResult(item)) setClickData(item, {p5: index++}); else if (isFrame(item)) try {
          for (var n = item.children[0].children, o = 0, s = n.length; s > o; o++) {
            var a = n[o];
            isResult(a) && setClickData(a, {p5: index++})
          }
        } catch (r) {
          clickDebug(r)
        }
        index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1
      };
    bindP5ClickData(leftItems), bindP5ClickData(rightItems), bindP5ClickData(topItems)
  }

  function getXPath(t, e, i) {
    if (i = i || [], e = e || document, t === e) return i;
    if (t.parentNode !== e && (i = getXPath(t.parentNode, e, i)), t.previousSibling) {
      var n = 1, o = t.previousSibling;
      do 1 == o.nodeType && o.nodeName == t.nodeName && n++, o = o.previousSibling; while (o)
    }
    return 1 == t.nodeType && i.push(t.nodeName.toLowerCase() + (n > 1 ? n : "")), i
  }

  function bindLogEvent() {
    $body = $("body"), $body.on("mousedown", function (t) {
      var t = window.event || t, e = t.srcElement || t.target, i = $(e);
      try {
        for (var n, o, s = i; s.length && !(s.hasClass("result") || s.hasClass("result-op") || s.hasClass("xpath-log"));) s = s.parent();
        if (!s.length) return;
        s.hasClass("result-op") ? n = "alop" : s.hasClass("result") && (n = "as"), o = s.get(0);
        var a = getXPath(e, o);
        check(a, e, o) && log(a, e, o, n)
      } catch (t) {
        clickDebug(t)
      }
    })
  }

  function getType(t, e, i) {
    fixPcTypeNode(e, i);
    for (var n = e, o = Object.getOwnPropertyNames(LOG_CLASS).map(function (t) {
      return LOG_CLASS[t]
    }), s = o.length, a = C_LOG_CLASS, r = a.length, c = t.join(" "), d = 0; n !== i;) {
      for (d = 0; s > d; d++) if ($(n).hasClass("OP_LOG_" + o[d])) return o[d].toLowerCase();
      for (d = 0; r > d; d++) if ($(n).hasClass("c-" + a[d])) return a[d];
      n = n.parentNode
    }
    return /\bh3\d*\b/.test(c) ? "title" : /\ba\d*\b/.test(c) ? /\bimg\d*\b/.test(c) ? "img" : "link" : /\b(input|select|button|textarea|datalist)\d*\b/.test(c) ? "input" : /\blabel\d*\b/.test(c) && e.getElementsByTagName("input").length > 0 ? "input" : ""
  }

  function fixPcTypeNode(t, e) {
    for (var i = null, n = "", o = ""; t !== e && null === i;) n = $(t).attr("class") || "", n.replace(new RegExp(".*(" + wiseClassPrefix + "\\w+).*"), function (t, e) {
      o = e
    }), o && (i = t), t = t.parentNode;
    var s = n.replace(o, ""), a = "", r = "";
    if (o && n !== o) {
      switch (a = o.replace(wiseClassPrefix, "")) {
        case WISE_LOG_CLASS.TAB:
          r = LOG_CLASS.BTN;
          break;
        case WISE_LOG_CLASS.BTN:
          r = LOG_CLASS.BTN;
          break;
        case WISE_LOG_CLASS.SF:
          r = LOG_CLASS.LINK;
          break;
        case WISE_LOG_CLASS.MSC:
          r = LOG_CLASS.BTN;
          break;
        case WISE_LOG_CLASS.VD:
          r = LOG_CLASS.BTN;
          break;
        case WISE_LOG_CLASS.OTHER:
          r = LOG_CLASS.OTHERS;
          break;
        default:
          r = LOG_CLASS.OTHERS
      }
      $(i).attr("class", s + " " + classPrefix + r)
    }
  }

  function check(t, e, i) {
    return A.LOGTOOL ? (A.LOGTOOL.call(e, t, e, i), !1) : !0
  }

  function log(t, e, i, n) {
    if (null == e.getAttribute("data-nolog")) {
      var o = getType(t, e, i);
      if (!o) return !1;
      if ("title" == o && !/\ba\d*\b/.test(t)) return !1;
      var s = "http://nourl.ubs.baidu.com", a = i.getAttribute("mu") || s;
      if (a == s) {
        var r = i.getElementsByTagName("h3");
        if (r && r[0]) {
          var c = r[0].getElementsByTagName("a");
          a = c && c[0] ? c[0].href : a
        }
      }
      var d, l = t.length, u = e, m = i.getAttribute("srcid"), p = "",
        f = 1 == e.nodeType ? e.tagName.toLowerCase() : "";
      if ("input" == o) if (/input|textarea/.test(f)) p = e.value, e.type && "password" == e.type.toLowerCase() && (p = "");
      else if (/select|datalist/.test(f)) {
        if (e.children.length > 0) {
          var h = e.selectedIndex || 0;
          p = e.children[h > -1 ? h : 0].innerHTML
        }
      } else p = e.innerHTML || e.value || ""; else if ("img" == f && (p = e.title), !p) for (; l > 0;) {
        if (l--, /^a\d*\b/.test(t[l])) {
          if (d = u.href, p = u.innerHTML, null != u.getAttribute("data-nolog")) return;
          break
        }
        if (u.className && /OP_LOG_/.test(u.className)) {
          p = u.innerHTML;
          break
        }
        u = u.parentNode
      }
      p = $.trim(p), d && "#" !== d.slice(-1) && /^http/.test(d) || (d = a);
      var b = {
        rsv_xpath: t.join("-") + "(" + o + ")",
        title: p,
        url: d,
        rsv_height: i.offsetHeight,
        rsv_width: i.offsetWidth,
        rsv_tpl: i.getAttribute("tpl")
      }, g = {url: 1, title: 1};
      i.id && i.id.match(/^\d+$/) && (b.p1 = i.id), m && (b.rsv_srcid = m);
      var v, w, _;
      u = e;
      do {
        if (null != u.getAttribute("data-nolog")) return;
        if (v = u.getAttribute("data-click")) try {
          v = new Function("return " + v)();
          for (w in v) "fm" == w && null === v.fm && (_ = !0), v.hasOwnProperty(w) && ("undefined" == typeof b[w] || g[w]) && (b[w] = v[w])
        } catch (y) {
          clickDebug(y)
        }
        u = u.parentNode
      } while (u && u !== i.parentNode);
      for (var x in b) null === b[x] && delete b[x];
      if ("title" == o ? "mu" in b && delete b.mu : b.mu || (b.mu = a), _) "fm" in b && delete b.fm; else if ("input" == o && (b.fm = "beha", b.url = s), b.fm || (b.fm = n), !b.fm) return;
      window.c(b)
    }
  }

  var baidu = window.baidu, classPrefix = "OP_LOG_", wiseClassPrefix = "WA_LOG_",
    LOG_CLASS = {TITLE: "TITLE", LINK: "LINK", IMG: "IMG", BTN: "BTN", INPUT: "INPUT", OTHERS: "OTHERS"},
    WISE_LOG_CLASS = {TAB: "TAB", BTN: "BTN", SF: "SF", MSC: "MSC", VD: "VD", OTHER: "OTHER"}, C_LOG_CLASS = ["btn"],
    contentLeft, contentRight, contentTop;
  window.initResultClickLog = function () {
    if (contentLeft = $("#content_left").get(0), contentRight = $("#con-ar").get(0), contentTop = $("#con-at").get(0), A.has) {
      var t, e = $(".result-op").get();
      $.each(e, function (e, i) {
        (t = i.getAttribute("srcid")) && A.ids.push([i.id, t])
      })
    }
    bindP5()
  }, $(document).ready(function () {
    bindLogEvent()
  })
}(window.bds.aladdin);
for (ai in al_arr) al_arr[ai]();
$(document).ready(function () {
  var t;
  $(document).on("click", ".t>a,.op-se-listen-recommend", function (e) {
    e = window.event || e;
    var i = $("#wrapper_wrapper"), n = $(this).closest(".c-container"),
      o = n.length ? n.find(".c-recommend").eq(0) : [], s = n.length ? n.find(".wnor-fanli-wrap") : [];
    !e.ctrlKey && (o.length && "none" === o.css("display") || s.length && "none" === s.css("display")) && (t = setTimeout(function () {
      i.find(".c-recommend").hide(), o.show(), i.find(".wnor-fanli-wrap").hide(), s.show()
    }, 150))
  }), $(window).on("swap_begin", function () {
    this.clearTimeout(t)
  })
}), window.onunload = function () {
}, bds.se.openime = function (t) {
  window.bdime ? openIme.set("py", !0) : $.ajax({
    cache: !0,
    dataType: "script",
    url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/ime_c5abb66.js",
    success: function () {
      t && openIme.set("py", !0)
    }
  })
}, function () {
  /\bbdime=[12]/.test(document.cookie) || $(window).one("swap_end", function () {
  })
}(), bds && bds.comm && !bds.comm.containerSize && (bds.comm.containerSize = "s"), bds.util.setContainerWidth = function () {
  var t = $("#container"), e = $("#wrapper"), i = bds.util.getWinWidth(), n = bds.comm.containerSize;
  if (1217 > i) t.removeClass("container_l container_xl").addClass("container_s"), e.removeClass("wrapper_l").addClass("wrapper_s"), bds.comm.containerSize = "s"; else {
    if (!(i >= 1217)) return;
    t.removeClass("container_s container_xl").addClass("container_l"), e.removeClass("wrapper_s").addClass("wrapper_l"), bds.comm.containerSize = "l"
  }
  n != bds.comm.containerSize && $(window).trigger("container_resize", bds.comm.containerSize)
}, bds.util.setFootStyle = function () {
  this.init(), this.bindEvent()
}, $.extend(bds.util.setFootStyle.prototype, {
  ie6: bds.comm.upn && "msie" === bds.comm.upn.browser && 6 == bds.comm.upn.ie, init: function () {
    var t = $("#foot");
    if (t.addClass("foot_fixed_bottom"), this.ie6) {
      var e = $(window).height() + $(window).scrollTop() - t.outerHeight(!0);
      t.css("top", e + "px")
    }
  }, setFixedIe6: function () {
    var t = $("#foot"), e = $(window).height() + $(window).scrollTop() - t.outerHeight(!0);
    t.css("top", e + "px")
  }, bindEvent: function () {
    var t = this;
    t.ie6 && $(window).on("resize.setFootStyle, scroll.setFootStyle", function () {
      t.setFixedIe6()
    })
  }
});
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tip = bds.se.tip || {}, bds.comm.tipZIndex = 220, bds.comm.tips = [], bds.se.tip = function (t) {
  this.init = function () {
    this.op = {
      target: t.target || {},
      mode: t.mode || "over",
      title: t.title || null,
      content: t.content || null,
      uncontrolled: t.uncontrolled ? !0 : !1,
      arrow: {has: 1, offset: 10, r: !1, c: !1},
      close: t.close || 0,
      align: t.align || "left",
      offset: {x: 10, y: 20},
      arrowSize: 16
    }, t.arrow && (this.op.arrow.has = 0 == t.arrow.has ? 0 : 1, this.op.arrow.offset = t.arrow.offset >= 0 ? t.arrow.offset : 10, this.op.arrow.r = t.arrow.r, this.op.arrow.c = t.arrow.c), t.offset && (this.op.offset.x = t.offset.x || 0 == t.offset.x ? t.offset.x : 10, this.op.offset.y = t.offset.y || 0 == t.offset.y ? t.offset.y : 20), this.ext = t.ext || {}, this.dom = $("<div>", {"class": "c-tip-con"}), this.visible = !1, this.rendered = !1, this.isAuto = "auto" === this.op.align ? !0 : !1, this.bindEvent()
  }, this.render = function () {
    this.op.close && this.enableCloseIcon(), this.op.title && this.setTitle(this.op.title), this.op.content && this.setContent(this.op.content), this.op.arrow.has && this.enableArrow(), $("#c-tips-container").append(this.dom)
  }, this.bindEvent = function () {
    if (this.delay = {overIcon: null, outIcon: null, overDom: null, outDom: null}, "over" == this.op.mode) {
      var t = this;
      $(t.op.target).on("mouseenter", function () {
        window.clearTimeout(t.delay.outIcon), window.clearTimeout(t.delay.outDom), t.delay.overIcon = setTimeout(function () {
          t.show()
        }, 200)
      }), t.dom.on("mouseenter", function () {
        window.clearTimeout(t.delay.outIcon), window.clearTimeout(t.delay.outDom), t.delay.overDom = setTimeout(function () {
          t.show()
        }, 200)
      }), $(t.op.target).on("mouseleave", function () {
        window.clearTimeout(t.delay.overIcon), window.clearTimeout(t.delay.overDom), t.delay.outIcon = setTimeout(function () {
          t.hide()
        }, 200)
      }), t.dom.on("mouseleave", function () {
        window.clearTimeout(t.delay.overIcon), window.clearTimeout(t.delay.overDom), t.delay.outIcon = setTimeout(function () {
          t.hide()
        }, 200)
      })
    } else if ("none" == this.op.mode) {
      var t = this;
      t.show()
    }
  }, this.enableArrow = function () {
    if (this.op.arrow.r) var t = $("<div>", {"class": "c-tip-arrow"}).html("<em></em><ins class='c-tip-arrow-r'></ins>").appendTo(this.dom); else if (this.op.arrow.c) var t = $("<div>", {"class": "c-tip-arrow"}).html("<em></em><ins class='c-tip-arrow-c'></ins>").appendTo(this.dom); else var t = $("<div>", {"class": "c-tip-arrow"}).html("<em></em><ins></ins>").appendTo(this.dom);
    this.arrow = t
  }, this.enableCloseIcon = function () {
    var t = this,
      e = $("<div>", {"class": "c-tip-close"}).html("<i class='c-icon c-icon-close'></i>").appendTo(this.dom).click(function () {
        t.hide()
      });
    this.close = e
  }, this.setTitle = function (t) {
    if (t.nodeType) var e = $("<h3>", {"class": "c-tip-title"}).append(t).appendTo(this.dom); else var e = $("<h3>", {"class": "c-tip-title"}).html(t).appendTo(this.dom);
    this.title = e
  }, this.setContent = function (t) {
    var e = $("<div>").html(t).appendTo(this.dom);
    this.content = e
  }, this.setArrow = function (t) {
    if (t && t.offset >= 0 && (this.op.arrow.offset = t.offset), this.op.arrow.has && this.arrow) switch (this.op.align) {
      case"left":
        this.arrow.css({left: this.op.arrow.offset + "px"});
        break;
      case"right":
        this.arrow.css({right: this.op.arrow.offset + 16 + "px"})
    }
  }, this.setOffset = function (t) {
    switch (t && (this.op.offset.x = t.x || 0 == t.x ? t.x : this.op.offset.x, this.op.offset.y = t.y || 0 == t.y ? t.y : this.op.offset.y), this.op.align) {
      case"left":
        var e = $(this.getTarget()).offset();
        this.getDom().css({top: e.top + this.op.offset.y + "px", left: e.left - this.op.offset.x + "px"});
        break;
      case"right":
        var e = $(this.getTarget()).offset();
        this.getDom().css({
          top: e.top + this.op.offset.y + "px",
          left: e.left + this.op.offset.x + $(this.getTarget()).width() - this.getDom().width() + "px"
        })
    }
  }, this.autoOffset = function () {
    var t, e = {w: this.dom.outerWidth(), h: this.dom.outerHeight()}, i = $(this.getTarget()), n = i.offset(),
      o = {w: i.outerWidth(), h: i.outerHeight()}, s = $(window), a = s.scrollTop(), r = {w: s.width(), h: s.height()},
      c = {left: 0, top: 0}, d = {};
    r.h + a - o.h - n.top > e.h ? (c.top = o.h + n.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")) : n.top - a > e.h ? (c.top = n.top - e.h - this.op.arrowSize / 2, this.arrow && this.arrow.addClass("c-tip-arrow-down")) : (c.top = o.h + n.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")), t = n.left + o.w / 2 - this.op.arrow.offset - this.op.arrowSize / 2, c.left = t, c.left > 0 && c.left + e.w > r.w ? (c.left = n.left + o.w / 2 - e.w + this.op.arrow.offset + this.op.arrowSize / 2, d.right = this.op.arrow.offset + this.op.arrowSize, d.left = "auto", c.left < 0 && (c.left = t, d.left = this.op.arrow.offset, d.right = "auto")) : (d.left = this.op.arrow.offset, d.right = "auto"), this.dom.css(c), this.arrow && this.arrow.css(d)
  }, this.enable = function () {
  }, this.disable = function () {
  }, this.destroy = function () {
  }, this.show = function () {
    this.visible || (this.onShow(), this.rendered || (bds.comm.tips.push(this), this.render(), this.rendered = !0), this.isAuto ? this.autoOffset() : (this.setOffset(), this.setArrow()), this.dom.css({"z-index": bds.comm.tipZIndex}), bds.comm.tipZIndex++, this.dom.css({display: "block"}), this.visible = !0)
  }, this.hide = function () {
    this.visible && (this.dom.css({display: "none"}), this.onHide(), this.visible = !1)
  }, this.onShow = t.onShow || function () {
  }, this.onHide = t.onHide || function () {
  }, this.getTarget = function () {
    return this.op.target
  }, this.getDom = function () {
    return this.dom
  }, this.init()
}, bds.event.trigger("se.api_tip_ready"), $(document).mousedown(function (t) {
  t = t || window.event;
  for (var e = t.target || t.srcElement; e && e.tagName && e != document.body && "html" != e.tagName.toLowerCase() && "c-tip-con" != e.className;) e = e.parentNode;
  e && "c-tip-con" != e.className && $(bds.comm.tips).each(function () {
    this.op.uncontrolled || this.op.close && this.hide()
  })
});
var sethfPos = sethfPos || 0;
!function () {
  function t(t) {
    if (t) {
      var e = t.parentNode;
      e && (e.style.marginBottom = "20px", e.style.marginTop = "2px")
    }
  }

  var e = "//www.baidu.com/", i = -1 != navigator.userAgent.indexOf("MSIE") && !window.opera,
    n = (100 * Math.random(), "百度一下，你就知道"), o = "";
  if (window.fa = function (t) {
    try {
      window.sidebar ? window.sidebar.addPanel(n, e, "") : window.opera && window.print ? (t.setAttribute("rel", "sidebar"), t.setAttribute("href", e), t.setAttribute("title", n), t.click()) : window.external.AddFavorite(e, n)
    } catch (i) {
    }
  }, i) try {
    var s = /se /gi.test(navigator.userAgent),
      a = /AppleWebKit/gi.test(navigator.userAgent) && /theworld/gi.test(navigator.userAgent),
      r = /theworld/gi.test(navigator.userAgent), c = /360se/gi.test(navigator.userAgent),
      d = /360chrome/gi.test(navigator.userAgent), l = /greenbrowser/gi.test(navigator.userAgent),
      u = /qqbrowser/gi.test(navigator.userAgent), m = /tencenttraveler/gi.test(navigator.userAgent),
      p = /maxthon/gi.test(navigator.userAgent), f = /krbrowser/gi.test(navigator.userAgent), h = !1;
    try {
      h = +external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g, "") > 1013
    } catch (b) {
    }
    if (s || h || a || r || c || d || l || u || m || p || f) {
      var g = document.getElementById(sethfPos ? "set_f" : "setf");
      g && sethfPos && (t(g), o = "favorites")
    } else {
      var v = document.getElementById(sethfPos ? "set_f" : "setf");
      v && sethfPos && (t(v), o = "home"), v.setAttribute("onClick", "h(this)"), v.setAttribute("onmousedown", "return ns_c({'fm':'behs','tab':'homepage','pos':0})"), v.href = "/", v.target = "_self", v.id = "seth"
    }
  } catch (b) {
  } else {
    var g = document.getElementById(sethfPos ? "set_f" : "setf");
    sethfPos && (t(g), o = "favorites")
  }
  o && sethfPos && ns_c({fm: "sethf_show", tab: o})
}(), bds.se.loginCallbackFunc = null, bds.se.login = function () {
  var t = "", e = !1, i = "", n = function (t) {
    var e = t || bds.comm.user;
    e && $("#lb").replaceWith('<a href="http://i.baidu.com" class="username">' + escapeHTML(bds.comm.username) + '<i class="c-icon"></i></a>')
  }, o = function (n) {
    e ? (bds.se.passv3.setSubpro(t), bds.se.passv3.setMakeText(i), bds.se.loginCallbackFunc = n || function () {
      window.document.location.reload(!0)
    }, bds.se.passv3.show()) : $.getScript(location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + (new Date).getTime(), function () {
      initPassV3(), e = !0, bds.se.passv3.setSubpro(t), bds.se.passv3.setMakeText(i), bds.se.loginCallbackFunc = n || function () {
        window.document.location.reload(!0)
      }, bds.se.passv3.show()
    })
  }, s = function (t) {
    if (bds.comm) {
      bds.comm.user = t, bds.comm.username = t, window.bdUser = t, bds.se.passv3.hide(), bds.se.loginCallbackFunc.call(window, 1, t);
      for (var e = 0; e < bds.comm.loginAction.length; e++) bds.comm.loginAction[e].call(window, 1, t)
    }
  }, a = function (e) {
    t = e
  }, r = function (t) {
    i = t
  };
  return {setUserInfo: n, open: o, success: s, setSubpro: a, setMakeText: r}
}(), window._invoke_login = function (t, e) {
  bds.se.login.open(t, e)
}, !function () {
  function t() {
    var t, e = "http://isphijack.baidu.com/index.php?cb=isp_hijack", i = [];
    if (top.location != self.location) {
      try {
        for (var n = top.document.getElementsByTagName("frame"), o = top.document.getElementsByTagName("iframe"), s = 0; s < n.length; s++) i.push(n[s].getAttribute("src"));
        for (var s = 0; s < o.length; s++) i.push(o[s].getAttribute("src"))
      } catch (a) {
      }
      ns_c({
        fm: "frm",
        top: encodeURIComponent(top.location.href),
        furls: encodeURIComponent(i.join("|"))
      }), i && (t = document.createElement("script"), t.src = e + "&urls=" + encodeURIComponent(i.join("|")) + "&t=" + +new Date, document.body.appendChild(t))
    }
  }

  $(t)
}();
try {
  window.console &&
  window.console.log && (
    console.log("你在电脑前看这段文字，\n写文字的人在百度等你。\nN年前你来到了这个世界，\nN年后你想改变世界。\n\n期待你脚踏祥云，\n与百度一起改变世界。\n"),
      console.log("%c百度2020校园招聘简历提交：http://dwz.cn/XpoFdepe", "color:red")
  )
} catch (e) {
}
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tool = bds.se.tool || {}, bds.comm.host = {
  bfe: "//www.baidu.com/tools",
  favo: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://i.baidu.com") : "http://i.baidu.com",
  share: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js") : "http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js",
  report: "http://jubao.baidu.com",
  koubei: "http://koubei.baidu.com"
}, bds.se.tool = function (item) {
  this.init = function () {
    this.render()
  }, this.render = function () {
    var ops = eval("(" + item.getAttribute("data-tools") + ")"), toolsDom = $("<div>", {"class": "c-tip-menu"}),
      toolsList = $("<ul>"), toolsFavo = $("<li>"), toolsFavoLink = $("<a>").html("收藏");
    toolsFavoLink.on("mousedown", function () {
      bds.se.tool.favo(ops, item.getAttribute("id")), ns_c({fm: "tools", tab: "favo"})
    }), toolsFavoLink.on("mouseover", function () {
      $(this).css("background-color", "#ebebeb")
    }), toolsFavoLink.on("mouseout", function () {
      $(this).css("background-color", "#fff")
    }), toolsFavo.append(toolsFavoLink), toolsList.append(toolsFavo);
    var toolsShare = $("<li>"), toolsShareLink = $("<a>").html("分享");
    toolsShareLink.on("mousedown", function () {
      bds.se.tool.share(ops, item), ns_c({fm: "tools", tab: "share"})
    }), toolsShareLink.on("mouseover", function () {
      $(this).css("background-color", "#ebebeb")
    }), toolsShareLink.on("mouseout", function () {
      $(this).css("background-color", "#fff")
    }), toolsShare.append(toolsShareLink), toolsList.append(toolsShare);
    var officalLogo = $($(item).closest(".c-container").find("h3.t").children()[1]),
      vLogo = $(item).parent().find(".vstar"), baoFlag = $(item).parent().find(".c-trust-as.c-icon-baozhang-new"),
      isOffical = 0, vLevel = 0;
    officalLogo && "官方" == officalLogo.html() && (isOffical = 1), vLogo && vLogo.attr("hint-data") && (vLevel = $.parseJSON(vLogo.attr("hint-data")).hint[0].vlevel), baoFlag.length > 0 && (vLevel = 8);
    var toolsReport = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'report'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.report + "/jubao/accu/?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query) + "&has_gw=" + isOffical + "&has_v=" + vLevel) + '&key=surl">举报</a>');
    toolsList.append(toolsReport), toolsDom.append(toolsList);
    var tTip = new bds.se.tip({
      target: $(".c-icon", item)[0],
      mode: "none",
      align: "left",
      offset: {x: 33},
      arrow: {has: 1, offset: 30},
      content: toolsDom,
      ext: {category: "tools"}
    });
    tTip.onShow = function () {
      ns_c({fm: "tools", tab: "show"})
    }
  }, this.init()
}, bds.se.tool.share = function (t, e) {
  this.op = t || {}, this.init = function (t, e) {
    $.getScript(bds.comm.host.share, function () {
      $(bds.comm.tips).each(function () {
        this.op.uncontrolled || this.hide()
      });
      var i = new bds.se.tip({
        target: $(".c-icon", e)[0],
        mode: "none",
        offset: {x: 33},
        arrow: {has: 0},
        close: 1,
        content: '<div class="c-tools-share" style="width:200px;"></div>'
      }), n = $(".c-tools-share", i.dom.get(0))[0];
      __bdshare.render({boxEle: n, url: t.url, txt: t.title + " -- 分享自百度搜索"})
    })
  }(this.op, e)
}, bds.se.tool.favo = function (t, e) {
  if (this.op = t || {}, this.init = function (t, e) {
    if (t) {
      var i = document.createElement("script"), n = bds.comm.host.bfe, o = bds.comm.host.favo;
      i.src = n + "?url=" + encodeURIComponent(t.url) + "&jump=" + encodeURIComponent(o + "/myfavorite/set?irt=1&t=" + encodeURIComponent(t.title) + "&id=" + encodeURIComponent(e) + "&c=bds.se.tool.favo.succ") + "&key=url", document.body.appendChild(i)
    }
  }, bds.comm.user) this.init(this.op, e); else if (bds.se.login && bds.se.login.open) {
    var i = this;
    bds.se.login.open(function (t) {
      1 == t && i.init(i.op, e)
    })
  }
}, bds.se.tool.favo.succ = function (json) {
  if (json.suc) {
    if (json.status) switch (json.status) {
      case 302:
        bds.se.login && bds.se.login.open && bds.se.login.open(function (stat, user) {
          1 == stat && bds.se.tool.favo(eval("(" + $("#" + json.id)[0].getAttribute("data-tools") + ")"), json.id)
        });
        break;
      case 5:
        var succContent = '<div class="c-tip-notice">';
        succContent += '<h3 class="c-tip-notice-fail">收藏失败，请稍后再试</h3>', succContent += "</div>"
    }
  } else if (json.status) {
    var succContent = '<div class="c-tip-notice">';
    switch (succContent += '<h3 class="c-tip-notice-succ">已收藏至：</h3>', succContent += "<ul>", json.status) {
      case 2:
        succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>', succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
        break;
      case 3:
        succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>', succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
        break;
      case 4:
        succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>', succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>'
    }
    succContent += "</ul>", succContent += "</div>"
  }
  $(bds.comm.tips).each(function () {
    this.op.uncontrolled || this.hide()
  }), succContent && new bds.se.tip({
    target: $(".c-icon", document.getElementById(json.id))[0],
    offset: {x: 33},
    arrow: {has: 0},
    mode: "none",
    arrow: {has: 0},
    close: 1,
    content: succContent
  })
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tools = bds.se.tools || {}, bds.se.tools = function () {
  var t = delayHideOnIcon = delayShowOnTip = delayHideOnTip = {};
  $("#container").delegate(".c-tools", "mouseover", function () {
    var e = this;
    window.clearTimeout(delayHideOnIcon), window.clearTimeout(delayHideOnTip), t = setTimeout(function () {
      var t = 1;
      $(bds.comm.tips).each(function () {
        return this.getTarget() == $(".c-icon", e)[0] ? (t = 0, this.show(), !1) : void 0
      }), t && (tools = new bds.se.tool(e))
    }, 200)
  }).delegate(".c-tools", "mouseout", function () {
    window.clearTimeout(t), window.clearTimeout(delayShowOnTip);
    var e = this;
    delayHideOnIcon = setTimeout(function () {
      $(bds.comm.tips).each(function () {
        return this.getTarget() == $(".c-icon", e)[0] ? (this.hide(), !1) : void 0
      })
    }, 200)
  }), $("#c-tips-container").delegate(".c-tip-con", "mouseover", function () {
    var t = this;
    window.clearTimeout(delayHideOnIcon), window.clearTimeout(delayHideOnTip), delayShowOnTip = setTimeout(function () {
      $(bds.comm.tips).each(function () {
        return this.getDom().get(0) == t && this.ext.category && "tools" == this.ext.category ? (this.show(), !1) : void 0
      })
    }, 200)
  }).delegate(".c-tip-con", "mouseout", function () {
    window.clearTimeout(t), window.clearTimeout(delayShowOnTip);
    var e = this;
    delayHideOnTip = setTimeout(function () {
      $(bds.comm.tips).each(function () {
        return this.getDom().get(0) == e && this.ext.category && "tools" == this.ext.category ? (this.hide(), !1) : void 0
      })
    }, 200)
  })
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.slide = function (t) {
  var e, i, n, o, s, a = this, r = {}, d = [], l = 0, u = null;
  this._default = {
    target: $("#lg"),
    src: "",
    width: 270,
    height: 129,
    offsetLeft: 0,
    isPad: !1,
    isRetina: !1,
    frames: 103,
    animations: [{
      isAutoPlay: !0,
      frame_start: 1,
      frame_end: 30,
      delay: 0,
      duration: 100,
      repeats: 0,
      process_before: function () {
      },
      event_loop: 0,
      process_after: function () {
      }
    }, {
      trigger_type: "click", trigger_duration: 100, trigger_frame: 31, trigger_fn: function () {
      }, frame_start: 32, frame_end: 103, process_before: function () {
      }, process_after: function () {
      }, delay: 0, duration: 100, repeats: 1, event_loop: 0
    }]
  }, this.timer = [], this.otherTimer = [], this.op = $.extend({}, a._default, t), this.init = function () {
    return a.op.src ? (a.createDom(), void (bds.comm.ishome && a.op.target.length && a.initAnimate())) : void a.createPlayer()
  }, this.createPlayer = function () {
    var t = a.op.target.find("map"), e = t.length ? t.find("area").eq(0) : "", n = a.op.play;
    n && (i = $('<img class="logo_player" src="' + n.src + '" style="width:' + n.width + "px; height:" + n.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + n.width / 2 + "px; margin-top: -" + n.height / 2 + "px; cursor:pointer;\" onmousedown=\"return c({'tab':'logo_button_click'})\" />").appendTo(a.op.target), e.length ? (i.wrap('<a style="position:absolute;top:0;left:50%;width:' + a.op.width + "px;height:" + a.op.height + "px;margin-left:-" + a.op.width / 2 + 'px;" href="' + e.attr("href") + '" target="' + e.attr("target") + '"></a>'), e.attr("title") && i.attr("title", e.attr("title"))) : i.wrap('<div style="position:absolute;top:0;left:50%;width:' + a.op.width + "px;height:" + a.op.height + "px;margin-left:-" + a.op.width / 2 + 'px;"></div>'), i.on(n.trigger_type, function () {
      return n.trigger_duration ? a.timer.push(window.setTimeout(function () {
        n.trigger_fn.call(a.op)
      }, n.trigger_duration)) : n.trigger_fn.call(a.op), !1
    }))
  }, this.createDom = function () {
    var t = '<div style="position:absolute;top:0;left:50%;background:url(#{0}) no-repeat #{1};cursor:#{2};width:#{3}px;height:#{4}px;margin-left:-#{5}px;display:none;"></div>',
      l = a.op.offsetLeft + "px 0", u = a.op.target.find("map"), m = u.length ? u.find("area").eq(0) : "",
      p = m ? "pointer" : p, f = a.op.animations instanceof Array ? a.op.animations : [a.op.animations], h = a.op.width,
      b = a.op.height;
    d = f, o = h, s = b, t = $.format(t, a.op.src, l, p, a.op.width, a.op.height, a.op.width / 2), "static" === a.op.target.css("position") && a.op.target.css({
      position: "relative",
      width: "100%"
    }), a.op.target.append(t), e = n = a.op.target.find("div").eq(0), a.op.play && (i = $('<img src="' + a.op.play.src + '" style="width:' + a.op.play.width + "px; height:" + a.op.play.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + a.op.play.width / 2 + "px; margin-top: -" + a.op.play.height / 2 + "px; \" onmousedown=\"return c({'tab':'logo_button_click'})\" />").insertAfter(e), n = i), a.op.isPad && e.css("background-size", a.op.width * a.op.frames / 2 + "px " + a.op.height + "px"), window.devicePixelRatio && window.devicePixelRatio > 1 && a.op.isRetina && e.css("background-size", a.op.width * a.op.frames + "px " + a.op.height + "px"), m.length ? (e.wrap('<a href="' + m.attr("href") + '" target="' + m.attr("target") + '"></a>'), m.attr("title") && e.attr("title", m.attr("title"))) : e.on("mousedown", function () {
      c({tab: "logo_button_click"})
    });
    for (var g = 0, v = d.length; v > g; g++) {
      var w = d[g], _ = w.frame_start;
      l = -((_ - 1) * h) + "px 0", r[g] = {"background-position": l, cursor: p}
    }
  }, this.initAnimate = function () {
    function t() {
      e.show(), a.play()
    }

    if (!(l >= d.length)) {
      var i = d[l], o = i.isAutoPlay, s = i.trigger_type, r = i.trigger_fn, c = i.trigger_duration, m = i.trigger_frame,
        p = $("#lg area");
      p.length && p.attr("onmousedown") && e.on("mousedown", function () {
        return new Function(p.attr("onmousedown"))()
      }), u = new Image, u.src = a.op.src, e.bind("first_animate", function () {
        u.complete ? t() : u.onload = t
      }), o ? e.trigger("first_animate") : s && (a.enablePointer(), n.show().on(s, function () {
        r && (m && a.toPos(m), r.call(a.op), c ? a.timer.push(setTimeout(function () {
          e.trigger("first_animate")
        }, c)) : e.trigger("first_animate"))
      }))
    }
  }, this.enablePointer = function () {
    bds.comm.upn && "msie" === bds.comm.upn.browser && "6" === bds.comm.upn.ie ? alert("pointer") : e.css("cursor", "pointer")
  }, this.disablePointer = function () {
    e.css("cursor", "default")
  }, this.play = function () {
    if (l >= d.length) return void a.dispose();
    var t = d[l], e = t.process_before;
    a.dispose(), e && e.call(a), a.animation()
  }, this.toPos = function (t) {
    var i = -((t - 1) * o) + "px 0";
    e.css("background-position", i)
  }, this.animation = function () {
    var t, i = d[l], s = i.duration, r = i.frame_start, c = i.frame_end, u = i.delay, m = i.repeats,
      p = i.process_after, f = i.trigger_type, h = r - 1 > 0 ? r - 1 : 0, b = i.event_loop || 0, g = 0;
    if (t = b ? d[l] : l + 1 >= d.length ? d[l] : d[l + 1]) {
      var v = t.trigger_type, w = t.trigger_fn, _ = t.trigger_duration, y = t.trigger_frame;
      v && (f && n.off(f), l < d.length - 1 || b ? (a.enablePointer(), n.on(v, function () {
        b || l++, p && p.call(a), w && w.call(a), y && a.toPos(y), _ ? (a.dispose(), a.timer.push(setTimeout(function () {
          a.play()
        }, _))) : a.play()
      })) : a.disablePointer())
    }
    !function () {
      arguments.callee, a.timer.push(setTimeout(function () {
        e.css("background-position", -(o * h) + "px 0"), h++, h >= c ? (a.dispose(), g++, 0 !== m && g >= m ? (h = null, g = null, p && p.call(a), l++, l < d.length && a.play(), b && l--) : (h = r - 1 > 0 ? r - 1 : 0, a.timer.push(setTimeout(arguments.callee, s)))) : a.timer.push(setTimeout(arguments.callee, s))
      }, u))
    }()
  }, this.dispose = function (t) {
    t = t || a.timer;
    for (var e = 0, i = t.length; i > e; e++) window.clearTimeout(t[e]);
    t.length = 0
  }, this.disposeOther = function (t) {
    t = t || a.otherTimer;
    for (var e = 0, i = t.length; i > e; e++) window.clearTimeout(t[e]);
    t.length = 0
  }, this.clear = function () {
    a.dispose(), a.disposeOther(), n.off("click").off("hover")
  }, this.reset = function (t) {
    t = t || 0, e.css(r[t])
  }, this.init()
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.banner = function (t, e, i) {
  this.init = function () {
    i = i || {}, this.$dom_panel = $(t), this.hintText = e, this.hintIcon = i.iconClass || "", this.downUrl = i.downUrl || "", this.hintCookie = i.cookie || "", this.showNum = this.hintCookie && $.getCookie(this.hintCookie) ? Number($.getCookie(this.hintCookie)) : 0, this.nscTab = i.nscTab || "", this.ishome = bds.comm && 1 == bds.comm.ishome ? 1 : 0, this.bannerType = i.bannerType || "", t && e && this.showNum < 5 && !$(".baiduapp_banner")[0] && !$(".res_top_banner")[0] && !$(".res_top_banner_for_win")[0] && this.show()
  }, this.show = function () {
    this.render(), this.showNum += 1, $.setCookie(this.hintCookie, this.showNum, {expires: 2592e6}), this.$dom_panel.prepend(this.bannerHtml), 1 != this.ishome && this.headFloat(), this.bindEvent(), ns_c({
      fm: "behs",
      qid: bds.comm.qid,
      tab: (1 == this.ishome ? "tj_" : "") + "baidu_" + (this.nscTab ? this.nscTab : "topbanner") + "show"
    })
  }, this.render = function () {
    var t = [];
    t = t.concat("WIN" !== this.bannerType ? ['<div class="res_top_banner">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>"] : ['<div class="res_top_banner_for_win">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>"]), this.bannerHtml = t.join("")
  }, this.headFloat = function () {
    var t = $("#head"), e = $(window), i = $(".res_top_banner");
    t.css("position"), $(window).scroll(function () {
      var n = i.height() || 0, o = e.scrollTop();
      n >= o ? t.attr("style", "position:absolute;") : t.attr("style", "top:0px;_top:" + n + "px;")
    })
  }, this.bindEvent = function () {
    if ("WIN" !== this.bannerType) {
      var t = $(".res_top_banner"), e = this;
      $(".res_top_banner_download", t).on("mousedown", function () {
        e.hintCookie && $.setCookie(e.hintCookie, 5, {expires: 2592e6}), ns_c({
          fm: "behs",
          qid: bds.comm.qid,
          tab: (1 == e.ishome ? "tj_" : "") + "baidu_" + (e.nscTab ? e.nscTab : "topbanner") + "down"
        })
      }), $(".res_top_banner_close", t).on("mousedown", function () {
        t.detach(), e.hintCookie && $.setCookie(e.hintCookie, 5, {expires: 2592e6}), ns_c({
          fm: "behs",
          qid: bds.comm.qid,
          tab: (1 == e.ishome ? "tj_" : "") + "baidu_" + (e.nscTab ? e.nscTab : "topbanner") + "close"
        })
      }), $(window).on("swap_begin", function () {
        t.detach()
      })
    } else {
      var t = $(".res_top_banner_for_win"), e = this;
      $(".res_top_banner_download", t).on("mousedown", function () {
        e.hintCookie && $.setCookie(e.hintCookie, 5, {expires: 2592e6}), ns_c({
          fm: "behs",
          qid: bds.comm.qid,
          tab: (1 == e.ishome ? "tj_" : "") + "baidu_" + (e.nscTab ? e.nscTab : "topbanner") + "down"
        })
      }), $(".res_top_banner_close", t).on("mousedown", function () {
        t.detach(), e.hintCookie && $.setCookie(e.hintCookie, 5, {expires: 2592e6}), ns_c({
          fm: "behs",
          qid: bds.comm.qid,
          tab: (1 == e.ishome ? "tj_" : "") + "baidu_" + (e.nscTab ? e.nscTab : "topbanner") + "close"
        })
      }), $(window).on("swap_begin", function () {
        t.detach()
      })
    }
  }, this.init()
}, function () {
  $(window).on("swap_end", function () {
    var t = ["union", "union2baidu", "union_cpro", "union_nosearch", "redbull", "hao123"], e = bds.comm.upn,
      i = navigator.userAgent.toLowerCase().search(/msie [6-7]/);
    if (winFilter = /NT 6.1|NT 6.2|NT 6.3/i.test(navigator.userAgent), bds.comm.topHijack) for (var n = 0; n < bds.comm.topHijack.length; n++) if ("hint_topHijack" == bds.comm.topHijack[n].templateName) {
      var o = bds.comm.topHijack[n].hintData.hintText;
      bds.se.banner($("body")[0], o)
    }
    if (bds.comm.tng && -1 == $.inArray(bds.comm.tng, t) && e && e.browser && "msie" == e.browser && e.ie && ("6" == e.ie || "7" == e.ie) && i > 0) {
      var o = "6" == e.ie ? "您的浏览器采用的IE6内核已停止维护，推荐升级到更快更安全的百度浏览器！" : "您的IE浏览器版本较低，即将停止更新维护，建议升级到更快、更安全的百度浏览器。";
      bds.se.banner($("body")[0], o, {
        downUrl: "http://j.br.baidu.com/v1/t/ui/p/browser/tn/10105001/ch_dl_url",
        cookie: "H_PS_BBANNER",
        nscTab: "browser"
      })
    }
  })
}(), bds.se.safeTip = function () {
  function t() {
    var t = 0, e = ["bd"], i = "", n = [];
    $(".unsafe_ico_new").each(function (e, o) {
      n.push(o.getAttribute("data-id")), i = o.getAttribute("data-tpl");
      var s = $(o).attr("data-href"), a = $(o).attr("href"), r = s ? s : a;
      $("h3 a", $(o).parents(".result")).attr("href", r), t++
    }), t > 0 && ns_c({tab: "safetip", num_unsafe: t, prd: e.join("|"), hintId: n, hintTpl: i})
  }

  return {init: t}
}();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.trust = bds.se.trust || {}, bds.se.trust = function () {
  function t() {
    l = [], m = [], u = [], $(".c-trust").each(function () {
      var t = $(this), e = this.getAttribute("data_key"), i = this.getAttribute("hint-type");
      0 == t.parent(".c-icons-inner").length && t.wrap("<span class='c-icons-outer'><span class='c-icons-inner'></span></span>"), "baozhang-v" === i ? -1 == $.inArray(e, u) && u.push(this.getAttribute("data_key")) : -1 == $.inArray(e, l) && l.push(this.getAttribute("data_key")), -1 == $.inArray(this, m) && m.push(this)
    }), $(".c-trust-as").each(function () {
      h = $.parseJSON($(this).attr("hint-data")), h && !$(this).attr("render") && (f = $(this), r(h, $(this).attr("hint-type"), this), $(this).attr("render", "render"))
    }), l.length < 1 && u.length < 1 || (b && v < l.length + u.length && (b = !1, g && g.abort()), e(), v = l.length + u.length)
  }

  function e() {
    b || (l.length > 0 && (g = $.getJSON(p + "/?urls=" + l.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + "&v=" + d + "&callback=?", i)), u.length > 0 && (g = $.getJSON(p + "/?urls=" + u.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + " &tag=asyncZ&v=" + d + "&callback=?", i)), b = !0)
  }

  function i(t) {
    b = !1, 0 == t.code && $(m).each(function () {
      var e = this.getAttribute("data_key"), i = this.getAttribute("hint-type");
      h = t.data[e], h && (f = $(this), !i && h.vstar && h.vstar.hint && h.vstar.hint.length > 0 && (f.html(""), n(h.vstar.hint[0].vlevel, h.vstar.url)), h.medical && (f.html(""), s()), "baozhang-v" == i && h.brand && (f.html(""), o(h.brand.url)), h.aviation && (f.html(""), a()))
    })
  }

  function n(t, e) {
    var i = $("<span>", {"class": "c-vline"}), n = $("<a>", {
      "class": "vstar c-icon c-icon-v" + t,
      target: "_blank",
      onclick: "return false",
      href: "#",
      "hint-data": '{"hint": [{"vlevel": ' + t + "}]}"
    });
    e && n.attr({href: e, onclick: ""}), f.append(i), f.append(n), r(h.vstar, "vstar")
  }

  function o(t) {
    var e = $("<span>", {"class": "c-vline"}),
      i = $("<a>", {"class": "c-icon c-icon-R", target: "_blank", onclick: "return false", href: "#"});
    t && i.attr({href: t, onclick: ""}), f.append(e), f.append(i), r(h.brand, "baozhang-v")
  }

  function s() {
    var t = $("<span>", {"class": "c-vline"}),
      e = $("<a>", {"class": "c-icon c-icon-med", target: "_blank", onclick: "return false", href: "#"});
    f.append(t), f.append(e), r(h.medical, "medical")
  }

  function a() {
    var t = $("<span>", {"class": "c-vline"}),
      e = $("<a>", {"class": "c-icon c-icon-air", target: "_blank", onclick: "return false", href: "#"});
    f.append(t), f.append(e), r(h.aviation, "aviation")
  }

  function r(t, e, i) {
    var n = t.hint, o = "over", s = t.url, a = t.webIMUrl;
    if (t && n) {
      if (-1 !== e.indexOf("newBao")) {
        var r = "<h3 class='opui-honourCard4-new-bao-title'>" + t.label + "</h3>";
        r += $.format('<div class="c-tip-info opui-honourCard4-new-bao-style">#{0}', t.text)
      } else if ("vstar" == e || "baozhang" == e || "baozhang-v" == e || "chengqi" == e || "baozhang-v-auth" == e) var r = "<div class='c-tip-cer hitcon'>";
      else var r = "<div class='c-tip-info hitcon'>";
      if (n.length > 0) {
        r += "<ul>";
        for (var d = 0; d < n.length; d++) "" != n[d] ? (r += "<li ", r += n[d].icon ? "class='c-tip-item-i'><img src='" + n[d].icon + "' class='c-customicon c-gap-icon-right-small c-tip-item-icon' />" : ">", r += c(n[d].txt), r += "</li>") : o = "none";
        r += "</ul>"
      }
      r += "</div>";
      var l = !1, u = !1;
      "baozhang-v" == e || "baozhang-v-auth" == e ? l = !0 : "chengqi" == e && (u = !0);
      var m = new bds.se.tip({
        target: f,
        mode: o,
        align: "auto",
        content: r,
        arrow: {has: 1, offset: 35, r: l, c: u},
        offset: {x: 0, y: 25}
      });
      m.onShow = function () {
        if (A.use("honourCard4", function () {
        }), -1 !== e.indexOf("newBao")) i && $(i).attr("hint-type") && (e = $(i).attr("hint-type")), ns_c({
          hintUrl: f.attr("data_key"),
          hintTpl: e,
          hintId: "safe:1"
        });
        else {
          var o = n[0].vlevel, c = n[0].unfixedInfo;
          ns_c({
            hintUrl: f.attr("data_key"),
            hintTpl: e,
            hintId: o
          }), -1 != r.indexOf("ecard") && setTimeout(function () {
            A.use("honourCard4", function () {
              var i = $(m.getDom()).find(".c-trust-ecard4"), r = 0;
              "baozhang" == e && (r = n[0].bzAppliCounts);
              var d = {compName: t.label, vLevel: o, centerPageUrl: s};
              c && (d.unfixedInfo = c), a && (d.webIMUrl = a), e && (d.type = e), r && (d.bzAppliCounts = r), t.brandName && (d.brandName = t.brandName), t.brandLogo && (d.brandLogo = t.brandLogo), t.brandScope && (d.brandScope = t.brandScope), t.brandRelation && (d.brandRelation = t.brandRelation), t.authBrandName && (d.authBrandName = t.authBrandName), t.authBizScope && (d.authBizScope = t.authBizScope), t.authBizType && (d.authBizType = t.authBizType), A.ui.honourCard4(i, d)
            })
          }, 0)
        }
        setTimeout(function () {
          -1 !== e.indexOf("newBao") ? $(".opui-honourCard4-new-bao-style", this.dom).each(function () {
            $("a", this).each(function (t) {
              this.onmousedown = function () {
                ns_c({hintUrl: s, hintTpl: e, title: this.innerHTML, pos: t})
              }
            })
          }) : $("li", this.dom).each(function () {
            $("a", this).each(function (t) {
              this.onmousedown = function () {
                ns_c({hintUrl: s, hintTpl: e, title: this.innerHTML, pos: t})
              }
            })
          })
        }, 0)
      }
    }
  }

  function c(t) {
    var e = t;
    return e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;"), e = e.replace("[/url]", "</a>").replace(/\[url ([^\s]*)\]/, "<a href='$1' target='_blank'>"), e = e.replace(/\[img ([^\s]*)\]/, "<img src='$1' />"), e = e.replace(/\[ecard (-?[\d]{0,3})\]/, "<div class='c-trust-ecard4' value='$1'></div>")
  }

  var d = 4, l = [], u = [], m = [];
  if (bds.util && bds.util.domain && bds.util.domain.get) var p = bds.util.domain.get("http://tag.baidu.com"); else var p = "http://tag.baidu.com";
  var f = null, h = null, b = !1, g = null, v = 0;
  return t(), {init: t, render: i}
}();
var __callback_names = {};
$(function () {
  bds.comm.user && "" != bds.comm.user && setTimeout(function () {
    $.ajax({
      dataType: "script",
      cache: !0,
      url: (bds.su && bds.su.urStatic ? bds.su.urStatic : "http://ss.bdimg.com") + "/static/message/js/mt_show_1.8.js",
      success: function () {
        function t() {
          $("#imsg")[0] && $("#u")[0] && $("#user")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
            button: $("#imsg"),
            refer: $("#u")
          }), $("#user").on("mouseover", function () {
            $("#s_mod_msg").hide()
          })), $("#imsg1")[0] && $("#u1")[0] && $("#user1")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
            button: $("#imsg1"),
            refer: $("#u1")
          }), $("#user1").on("mouseover", function () {
            $("#s_mod_msg").hide()
          }))
        }

        function e() {
          bds.se.message && bds.se.message.addStyle && bds.se.message.addStyle()
        }

        bds.comm.loginAction.push(function (i) {
          1 == i && (t(), e())
        }), bds.comm.newindex ? $(window).on("index_off", function () {
          setTimeout(function () {
            t(), e()
          }, 0)
        }) : (t(), e()), $(window).on("swap_end", e)
      }
    })
  }, 0)
}), $(window).on("swap_end", function () {
  var t = '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div>',
    e = "//www.baidu.com/cache/fpid/ielib_0108.js", i = "//www.baidu.com/cache/fpid/chromelib_0108.js",
    n = document.title, o = {flashDomId: "_FP_userDataDiv", comDomId: "_FP_comDiv", IEStoreDomId: "_FP_userDataDiv"},
    s = navigator.userAgent.toLowerCase(), a = !1;
  (s.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(s)) && (a = !0);
  var r, c = !1, d = new RegExp("chrome/(\\d+)"), l = s.match(d);
  if (l && (c = !0, r = l[1]), !(c && r >= 39)) {
    $("body").append(t);
    var u = function (t) {
      a && window.setTimeout(function () {
        document.title = n
      }, 0), window._FPID_CACHE = t, $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove();
      var e = bds.comm.qid, i = "_WWW_BR_API_" + (new Date).getTime(), o = window[i] = new Image;
      o.onload = function () {
        window[i] = null
      };
      var s = $.getCookie("BAIDUID"), r = $.getCookie("BIDUPSID"),
        c = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://eclick.baidu.com/ps_fp.htm?") : "http://eclick.baidu.com/ps_fp.htm?",
        d = c + "pid=ps&fp=" + t.data.fp + "&im=" + t.data.im + "&wf=" + t.data.wf + "&br=" + t.data.br + "&qid=" + e + "&bi=" + s + "&psid=" + r;
      o.src = d
    };
    return window._FPID_CACHE ? void (window._FPIDTimer = window.setTimeout(function () {
      u(window._FPID_CACHE)
    }, 2500)) : void (window._FPIDTimer = window.setTimeout(function () {
      var t = "";
      t = a ? e : i, $.ajax({
        url: t, cache: !0, dataType: "script", success: function () {
          fpLib.getFp(u, o)
        }
      })
    }, 2500))
  }
}), $(window).on("swap_begin", function () {
  window._FPIDTimer && (window.clearTimeout(window._FPIDTimer), $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove())
});
var bds = bds || {};
bds.se = bds.se || {}, bds.se.upn = {
  regexp: /BD_UPN=([\w|\d]*)/, cookieset: [], write: function (t) {
    document.cookie = "BD_UPN=" + t + "; expires=" + new Date((new Date).getTime() + 864e6).toGMTString()
  }, set: function (t) {
    var e = this;
    try {
      $.isArray(t) && (e.cookieset = e.cookieset.concat(t))
    } catch (i) {
    }
  }, run: function () {
    var t = this;
    try {
      for (var e = "", i = 0; i < t.cookieset.length; i++) if (t.cookieset[i] && t.cookieset[i].k && t.cookieset[i].v) {
        var n = t.cookieset[i].k + "", o = t.cookieset[i].v + "";
        if (n.length == o.length == 1) {
          var s = {};
          s[n] = o, e = e + n + o
        }
      }
      t.write(e)
    } catch (a) {
    }
  }
}, bds.se.upn.set(function () {
  function t() {
    return n.indexOf("lbbrowser") > 0 ? n.match(/lbbrowser/gi) : n.indexOf("maxthon") > 0 ? n.match(/maxthon\/[\d.]+/gi) : n.indexOf("bidubrowser") > 0 ? n.match(/bidubrowser/gi) : n.indexOf("baiduclient") > 0 ? n.match(/baiduclient/gi) : n.indexOf("metasr") > 0 ? n.match(/metasr/gi) : n.indexOf("qqbrowser") > 0 ? n.match(/qqbrowser/gi) : !function () {
      if (navigator.mimeTypes.length > 0) {
        var t;
        for (t in navigator.mimeTypes) if ("application/vnd.chromium.remoting-viewer" == navigator.mimeTypes[t].type) return !0
      }
      return !1
    }() && "track" in document.createElement("track") && !("scoped" in document.createElement("style")) && !("v8Locale" in window) && /Gecko\)\s+Chrome/.test(navigator.appVersion) && "track" in document.createElement("track") && "scoped" in document.createElement("style") && "v8Locale" in window ? "qihu" : n.indexOf("msie") > 0 ? n.match(/msie [\d.]+;/gi) : window.document.documentMode ? "msie" : n.indexOf("edge") > 0 ? n.match(/edge\/[\d.]+/gi) : n.indexOf("firefox") > 0 ? n.match(/firefox\/[\d.]+/gi) : n.indexOf("opr") > 0 ? n.match(/opr\/[\d.]+/gi) : n.indexOf("chrome") > 0 ? n.match(/chrome\/[\d.]+/gi) : n.indexOf("safari") > 0 && n.indexOf("chrome") < 0 ? n.match(/safari\/[\d.]+/gi) : ""
  }

  function e() {
    var t = "Win32" == navigator.platform || "Windows" == navigator.platform,
      e = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
    if (e) return "mac";
    var i = "X11" == navigator.platform && !t && !e;
    if (i) return "unix";
    var n = String(navigator.platform).indexOf("Linux") > -1;
    return n ? "linux" : t ? "windows" : "other"
  }

  var i = navigator.userAgent, n = i.toLowerCase();
  browser = (t() + "").replace(/[0-9.\/|;|\s]/gi, ""), browserversion = function () {
    return "msie" == browser ? i.search(/MSIE [2-5]/) > 0 ? "ie5" : i.indexOf("MSIE 6") > 0 ? "ie6" : i.indexOf("MSIE 7") > 0 ? "ie7" : i.indexOf("MSIE 8") > 0 ? "ie8" : i.indexOf("MSIE 9") > 0 ? "ie9" : i.indexOf("MSIE 10") > 0 ? "ie10" : "11" == window.document.documentMode ? "ie11" : "other" : ""
  }(), browsertype = function () {
    return n.indexOf("msie") > 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(n) ? "ie" : n.indexOf("firefox") > 0 ? "firefox" : n.indexOf("chrome") > 0 ? "chrome" : n.indexOf("safari") > 0 && n.indexOf("chrome") < 0 ? "safari" : "other"
  }(), os = e(), osversion = function () {
    return "windows" == os ? i.indexOf("Windows NT 5.1") > -1 || i.indexOf("Windows XP") > -1 ? "xp" : (isWinVista = i.indexOf("Windows NT 6.0") > -1 || i.indexOf("Windows Vista") > -1) ? "vista" : i.indexOf("Windows NT 6.1") > -1 || i.indexOf("Windows 7") > -1 ? "win7" : i.indexOf("Windows NT 6.2") > -1 || i.indexOf("Windows 8") > -1 ? "win8" : i.indexOf("Windows NT 6.3") > -1 || i.indexOf("Windows 8.1") > -1 ? "win8.1" : i.indexOf("Windows NT 10") > -1 ? "win10" : "other" : void 0
  }();
  var o = function (t) {
    var e = 0;
    switch (t) {
      case"msie":
        e = 1;
        break;
      case"chrome":
        e = 2;
        break;
      case"firefox":
        e = 3;
        break;
      case"safari":
        e = 4;
        break;
      case"opr":
        e = 5;
        break;
      case"lbbrowser":
        e = 6;
        break;
      case"maxthon":
        e = 7;
        break;
      case"bidubrowser":
        e = 8;
        break;
      case"metasr":
        e = 9;
        break;
      case"qqbrowser":
        e = "a";
        break;
      case"qihu":
        e = "b";
        break;
      case"baiduclient":
        e = "c";
        break;
      case"edge":
        e = "d"
    }
    return e
  }(browser), s = function (t) {
    var e = 0;
    switch (t) {
      case"ie6":
        e = 1;
        break;
      case"ie7":
        e = 2;
        break;
      case"ie8":
        e = 3;
        break;
      case"ie9":
        e = 4;
        break;
      case"ie10":
        e = 5;
        break;
      case"ie11":
        e = 6;
        break;
      case"other":
        e = 7;
        break;
      case"ie5":
        e = 8
    }
    return e
  }(browserversion), a = function (t) {
    var e = 0;
    switch (t) {
      case"windows":
        e = 1;
        break;
      case"mac":
        e = 2;
        break;
      case"linux":
        e = 3;
        break;
      case"unix":
        e = 4
    }
    return e
  }(os), r = function (t) {
    var e = 0;
    switch (t) {
      case"xp":
        e = 1;
        break;
      case"vista":
        e = 2;
        break;
      case"win7":
        e = 3;
        break;
      case"win8":
        e = 4;
        break;
      case"win8.1":
        e = 5;
        break;
      case"other":
        e = 6;
        break;
      case"win10":
        e = 7
    }
    return e
  }(osversion), c = function (t) {
    var e = 0;
    switch (t) {
      case"ie":
        e = 1;
        break;
      case"firefox":
        e = 2;
        break;
      case"chrome":
        e = 3;
        break;
      case"safari":
        e = 4
    }
    return e
  }(browsertype);
  return [{k: 1, v: o}, {k: 2, v: s}, {k: 3, v: a}, {k: 4, v: r}, {k: 5, v: c}]
}()), bds.se.upn.run(), bds.se.heightControl = {
  check: function () {
    return $("#content_right").height() > $("#content_left").height()
  }, cleanEC: function () {
    var t = $(".ec_bdtg"), e = $("#ec_im_container").children("div"), i = e.length, n = i - 1;
    for (bds.se.heightControl.check() && t && t.length && t.css("display", "none"); bds.se.heightControl.check() && n >= 0;) {
      var o = e[n];
      $(o).css("display", "none"), n--
    }
  }, cleanRes: function () {
    var t = $("#content_right").find(".result-op"), e = t.length, i = e - 1;
    if (0 == i) {
      var n = $(t[0]).parent();
      $("#content_right").height() + t.height() < $("#content_left").height() && n.css({position: "static"})
    } else {
      for (var o = null, s = null, a = i; a >= 0; a--) {
        var r = t[a];
        null === o && $(r).find(".FYB_RD").length > 0 ? o = a : null === s && $(r).find(".FYB_BD").length > 0 && (s = a)
      }
      if (null !== o && null !== s) {
        var c = t[o];
        t[o] = t[s], t[s] = c
      }
      for (; bds.se.heightControl.check() && i > 0;) {
        var d = t[i];
        $(d).css("display", "none"), ns_c($.extend($(d).data("click"), {
          rsv_tpl: $(d).attr("tpl"),
          fm: "hide",
          qid: bds.comm.qid,
          tab: "baidu_rightheightadjust"
        })), i--
      }
    }
  }, init: function () {
    bds.se.heightControl.cleanEC(), bds.se.heightControl.cleanRes()
  }
}, !function () {
  function t() {
    this.start = null, this.mouse = [], this.mouseTime = null, this.mouseSpeed = 500, this.key = [], this.scroll = [], this.scrollTime = null, this.scrollSpeed = 500, this.debug = !1, this.dataStore = {}, this.t = null, this.cycle = null, this.MIN_SPEED = 2e3, this.MAX_SPEED = 1e4, this.curSpeed = 5e3, this.stayTime = 0, this.heartTime = [], this.heartT = null, this.MAX_LEN = 2e3, this.storeLen = -1, this.MAX_SEND = 100, this.hostEnum = {
      SCLICK: 0,
      NSCLICK: 1,
      SESTAT: 2
    }, this.keyMap = {
      new_input: 2,
      new_disp: 2,
      new_view: 2,
      new_user: 2,
      new_heart: 2,
      flow_monitor: 2
    }, this.hostAddr = [bds && bds.comm && bds.comm.ubsurl ? bds.comm.ubsurl + "?" : "", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com") + "/v.gif?", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://sestat.baidu.com") : "http://sestat.baidu.com") + "/wb.gif?"], this.commLog = {}, this.isFirst = !0, this.sendNum = {}, this.init()
  }

  t.prototype = {
    setCommLog: function (t, e, i) {
      if (!bds || !bds.comm) return !1;
      if (!(t in this.commLog)) {
        var n = {};
        e && i ? (n.log = e, n.len = i) : (n.log = "&q=" + bds.comm.queryEnc + "&qid=" + bds.comm.qid + "&rsv_did=" + bds.comm.did + "&rsv_tn=" + bds.comm.tn + "&rsv_sid=" + bds.comm.sid, n.len = (n.log + "&t=" + (new Date).getTime()).length), this.commLog[t] = n
      }
      return !0
    }, fb: function () {
      var t, e = this.heartTime.length;
      return t = 0 === e || 1 === e ? 3e3 : this.heartTime[e - 1] + this.heartTime[e - 2], this.heartTime.push(t), t
    }, sendHeart: function (t) {
      var e = 0 === t ? this.stayTime : (new Date).getTime() - this.start, i = bds && bds.comm && bds.comm.qid;
      if (i && i in this.commLog && i in this.sendNum) {
        var n = [{stay_time: e, send_num: this.sendNum[i]}];
        this.send({type: t, fm: "new_heart", data: n}, this.keyMap.new_heart)
      }
    }, startHeart: function () {
      var t = this, e = t.fb();
      t.stayTime += e, t.heartT = setTimeout(function () {
        t.sendHeart(0), t.startHeart()
      }, e)
    }, preInit: function () {
      this.start = (new Date).getTime(), this.mouse = [], null !== this.mouseTime && clearTimeout(this.mouseTime), this.mouseTime = null, this.key = [], this.scroll = [], null !== this.scrollTime && clearTimeout(this.scrollTime), this.scrollTime = null, this.cycle = null, null !== this.t && clearTimeout(this.t), this.t = null, this.storeLen = -1;
      var t = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
      t && (this.setCommLog(t), this.sendNum[t] = 0), bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && 0 === bds.comm.ishome && (null !== this.heartT && clearTimeout(this.heartT), this.heartT = null, this.stayTime = 0, this.heartTime = [], this.startHeart())
    }, collectPoint: function (t, e) {
      function i(t, e) {
        var i = [];
        if ("mouse" === t) i[0] = e.pageX, i[1] = e.pageY; else if ("scroll" === t) {
          var n = $(window);
          i[0] = n.scrollLeft(), i[1] = n.scrollTop()
        }
        return i
      }

      var n = t + "Time", o = this[t + "Speed"], s = this;
      if (0 === s[t].length) {
        var a = i(t, e);
        if (a.length < 2) return;
        return void s[t].push([(new Date).getTime() - s.start, a[0], a[1]])
      }
      null === s[n] && (s[n] = setTimeout(function () {
        var o = i(t, e);
        return o.length < 2 ? void (s[n] = null) : (s[t].push([(new Date).getTime() - s.start, o[0], o[1]]), void (s[n] = null))
      }, o))
    }, singleInit: function () {
      var t = this;
      $("body").on("mousemove", function (e) {
        t.collectPoint("mouse", e)
      }).on("keydown", function (e) {
        t.key.push([(new Date).getTime() - t.start, e.keyCode])
      }), $(window).on("scroll", function (e) {
        t.collectPoint("scroll", e)
      }), t.singleInit = function () {
      }
    }, flushData: function (t) {
      null !== this.t && (clearTimeout(this.t), this.t = null), this.startSend(this.fetchData(t, !0), !0), this.startSend(this.fetchData(t, !0)), bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && (null !== this.heartT && (clearTimeout(this.heartT), this.heartT = null), this.sendHeart(t))
    }, init: function () {
      var t = this;
      t.preInit(), $(window).on("swap_begin", function () {
        null !== t.t && (clearTimeout(t.t), t.t = null), bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlag || 1 === bds.comm.globalLogFlag) && t.isFirst === !1 && t.sendHeart(1)
      }).on("unload", function () {
        bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && t.flushData(2)
      }).on("swap_end", function () {
        t.preInit(), t.isFirst === !0 && (t.isFirst = !1), !t.hostAddr[0] && bds && bds.comm && bds.comm.ubsurl && (t.hostAddr[0] = bds.comm.ubsurl + "?")
      })
    }, getData: function (t, e, i) {
      if (null === this.start || 0 === t.length) return {startTime: this.start, record: []};
      var n = {startTime: this.start, record: []}, o = e, s = i;
      void 0 === o ? (o = 0, s = t[t.length - 1][0]) : void 0 !== o && "number" == typeof o && void 0 === s ? (o -= this.start, s = t[t.length - 1][0]) : void 0 !== o && "number" == typeof o && void 0 !== s && "number" == typeof s ? (o -= this.start, s -= this.start) : (o = 0, s = 0);
      for (var a in t) if (!(t[a][0] < o) && (t[a][0] < s && n.record.push(t[a]), t[a][0] >= s)) break;
      return n
    }, send: function (t, e, i) {
      if (!t) return !1;
      if (this.debug, 0 === e && !this.hostAddr[0]) {
        if (!(bds && bds.comm && bds.comm.ubsurl)) return !1;
        this.hostAddr[0] = bds.comm.ubsurl + "?"
      }
      var n = "", o = "", s = "";
      if ("object" == typeof t) {
        for (var a in t) n = t[a], "object" == typeof n && (n = $.stringify(n)), o += a + "=" + encodeURIComponent(n) + "&";
        o = o.substring(0, o.length - 1)
      } else "string" == typeof t && (o = t);
      if (!i && bds && bds.comm && bds.comm.qid && (i = bds.comm.qid), !(i && i in this.commLog)) return !1;
      if (o += this.commLog[i].log, o += "&t=" + (new Date).getTime(), ("number" != typeof e || 0 > e || e >= this.hostAddr.length) && (e = 0), s = this.hostAddr[e] + o, s.length > this.MAX_LEN) return !1;
      var r = window["BD_PS_C" + (new Date).getTime()] = new Image;
      return r.src = this.hostAddr[e] + o, !0
    }, sendNow: function (t, e, i) {
      if (t && "string" == typeof t && t in this.keyMap && e) {
        var n = "type=3&fm=" + t + "&data=" + encodeURIComponent($.stringify([e]));
        i && i.qid && i.log && i.len ? (this.setCommLog(i.qid, i.log, i), this.send(n, this.keyMap[t], i.qid)) : send(n, this.keyMap[t])
      }
    }, pushData: function (t, e, i) {
      var n = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
      if (!n) return !1;
      i && i.qid && i.log && i.len ? (this.setCommLog(i.qid, i.log, i.len), n = i.qid) : this.setCommLog(n), n in this.dataStore || (this.dataStore[n] = {});
      var o = this.dataStore[n];
      t in o || (o[t] = [[], []]), i && i.level === !0 ? o[t][0].push(encodeURIComponent($.stringify(e))) : o[t][1].push(encodeURIComponent($.stringify(e)))
    }, fetchData: function (t, e) {
      function i() {
        for (var e, i = 0, n = [], s = !1, d = this.commLog[l].len, m = this.hostAddr[r].length, p = m + ("type=" + t + "&fm=" + u + "&data=").length + d, f = p + 6, h = f; 0 !== o.length && i < this.MAX_SEND;) c === !1 && 0 === t && i++, e = o.shift(), n.push(e), h = f + e.length + 3, (f >= this.MAX_LEN || h >= this.MAX_LEN) && (n.length >= 2 && (n.pop(), s = !0), a.push({
          qid: l,
          key: u,
          type: t,
          data: "%5B" + n.join("%2C") + "%5D",
          host: r
        }), n = [], s && (n[0] = e, s = !1), h = n.length > 0 ? p + 3 + e.length + 3 : p + 6), f = h;
        n.length > 0 && a.push({qid: l, key: u, type: t, data: "%5B" + n.join("%2C") + "%5D", host: r})
      }

      var n, o, s = this.dataStore, a = [], r = 0, c = !1, d = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
      if (!d) return [];
      for (var l in s) {
        c = l !== d ? !0 : !1, n = s[l];
        for (var u in n) u in this.keyMap && (r = this.keyMap[u], "number" == typeof r && void 0 !== this.hostAddr[r] && (o = n[u][0].length > 0 ? n[u][0] : n[u][1], i.call(this), (c === !0 || e !== !0) && 0 === o.length && n[u][1].length > 0 && (o = n[u][1], i.call(this)), c === !0 && delete this.dataStore[l]))
      }
      return a
    }, startSend: function (t, e) {
      var i, n, o = this, s = e === !0 ? 0 : 100, a = setInterval(function () {
        return t.length <= 0 ? void clearInterval(a) : (i = t.shift(), void (i && i.qid && i.qid in o.commLog && (n = "type=" + i.type + "&fm=" + i.key + "&data=" + i.data, o.send(n, i.host, i.qid), i.qid in o.sendNum && (o.sendNum[i.qid] += 1))))
      }, s)
    }, startCycle: function () {
      var t = this;
      null === t.cycle && (t.cycle = 1), t.t = setTimeout(function () {
        var e = t.fetchData(0), i = e.length;
        -1 === t.storeLen && (t.storeLen = i), 0 !== t.storeLen && i / t.storeLen >= 2 && t.curSpeed > t.MIN_SPEED && (t.curSpeed -= 1e3), (0 === i || t.storeLen / i >= 2) && t.curSpeed < t.MAX_SPEED && (t.curSpeed += 1e3), t.startSend(e, 0), t.startCycle()
      }, t.curSpeed)
    }, outInterface: function () {
      var t = this;
      return {
        hostEnum: t.hostEnum, api: {
          getMouseLocus: function (e, i) {
            return t.getData(t.mouse, e, i)
          }, getKeyRecord: function (e, i) {
            return t.getData(t.key, e, i)
          }, getScrollRecord: function (e, i) {
            return t.getData(t.scroll, e, i)
          }, startAPI: function () {
            t.singleInit()
          }
        }, send: {
          debug: function () {
            t.debug = !0
          }, send: function (e, i) {
            return t.send(e, i)
          }, sendNow: function (e, i, n) {
            return t.sendNow(e, i, n)
          }, sendPack: function (e, i, n) {
            e && "string" == typeof e && e in t.keyMap && i && (t.pushData(e, i, n), null === t.cycle && t.startCycle())
          }
        }
      }
    }
  }, bds.log = (new t).outInterface()
}(), $(window).on("swap_end", function () {
  function t() {
    return !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 9)
  }

  bds.comm.encTn && $.setCookie("H_PS_645EC", bds.comm.encTn, {expires: 2592e3}), bds.se.trust && bds.se.trust.init(), bds.se.heightControl.init(), bds.util.setContainerWidth(), $(".content_none").length > 0 && new bds.util.setFootStyle, bds.comm.feedback = 1, bds.comm.feedback ? t() ? $(document).delegate(".feedback", "click", function () {
    var t = this;
    $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_67607cd.js", function () {
      var e = t.getAttribute("data-feedbackid") || 1, i = {product_id: 18, entrance_id: e},
        n = {username: bds.comm.username, query: bds.comm.query, fb_qid: bds.comm.qid};
      bds.qa.ShortCut.initRightBar(i, n)
    })
  }) : $(".feedback").on("click", function () {
    bds.se.ShortCut.initRightBar()
  }) : $(document).delegate(".feedback", "click", function () {
    var t = this;
    $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_67607cd.js", function () {
      var e = t.getAttribute("data-feedbackid") || 1, i = {product_id: 18, entrance_id: e},
        n = {username: bds.comm.username, query: bds.comm.query, fb_qid: bds.comm.qid};
      bds.qa.ShortCut.initRightBar(i, n)
    })
  });
  var e = $("#form").find('input[type="hidden"][name=rsv_t]');
  e.length ? $(e).val(bds.comm.encTn) : $("#form").append('<input type="hidden" name="rsv_t" value="' + bds.comm.encTn + '"/>'), bds.comm.did = function () {
    for (var t = "", e = 0; 32 > e; e++) t += Math.floor(16 * Math.random()).toString(16);
    return t
  }()
}), !function () {
  $(window).one("swap_end", function () {
    $("body").on("mousedown", ".se_common_hint a", function () {
      var t = $(this), e = t.parents(".se_common_hint"), i = e.attr("data-id") || "", n = e.attr("data-tpl") || "",
        o = e.find("a").index(t);
      ns_c_pj({hintId: i, hintTpl: n, title: t.html(), pos: o, qid: bds.comm.qid || ""}, "pj=hint&")
    })
  })
}(), $(function () {
  $("#u,#u1").delegate(".lb", "click", function () {
    var t = $(this).attr("data-subpro");
    t && bds.se.login.setSubpro(t);
    try {
      bds.se.login.open()
    } catch (e) {
    }
  })
}), $.ajax({
  dataType: "script",
  cache: !0,
  url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/js/nu_instant_search_baaa58d.js"
}), window.PRE_CONN = function () {
  var t, e = function (t, e) {
    var i = 1 * new Date;
    t = bds.util.domain && bds.util.domain.get ? bds.util.domain.get(t) : t;
    var o = /^(http[s]?:\/\/)?([^\/]+)(.*)/, s = t.match(o);
    if (s[2] && !n[s[2]]) {
      n.push(s[2]);
      var a = new Image;
      a.src = t + "?_t=" + (e ? e : i), a.onload = a.onerror = function () {
        a = null
      }
    }
  }, i = 0, n = [], o = function () {
    try {
      window.pageState && 0 != window.pageState && 1 != i || ($("#kw1,#kw").one("keydown", function () {
        "https:" === location.protocol ? (e("https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), e("https://ss1.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), e("https://ss2.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), e("https://ss3.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif")) : (e("http://b1.bdstatic.com/img/pc.gif", parseInt(1e3 * Math.random())), e("http://ecmb.bdimg.com/public03/pc.gif"), $.each(["i7", "i8", "i9", "t10", "t11", "t12"], function (t, i) {
          e("http://" + i + ".baidu.com/ps_default.gif")
        }))
      }), 1 == i && $("#kw1,#kw").one("focus", function () {
        "https:" === location.protocol && e("https://www.baidu.com/con?from=self")
      }))
    } catch (t) {
    }
  }, s = function () {
    i = 1, o(), r()
  }, a = function () {
    r(), t = setTimeout(s, 55e3)
  }, r = function () {
    clearTimeout(t), i = 0
  };
  return o(), {init: o, startTimer: a}
}(), !function () {
  $.ajaxPrefilter("parts", function (t, e, i) {
    t.__partsCallback = [], t.__partsIndex = 0, i.parts = function (e) {
      t.__partsCallback.push(e)
    }, t.parts && i.parts(t.parts), t.converters["* parts"] = function (t) {
      return t
    }
  }), $.ajaxTransport("parts", function (t) {
    if (!t.crossDomain || support.cors) {
      var e;
      return {
        send: function (i, n) {
          var o, s = t.xhr();
          if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) s[o] = t.xhrFields[o];
          t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
          s.send(t.hasContent && t.data || null), e = function (i, o) {
            var a, r, c;
            if (3 !== s.readyState && 4 !== s.readyState || o || !function () {
              var e = t.delimiter, i = "";
              try {
                i = s.responseText
              } catch (n) {
              }
              if ("" != i) {
                var o, a, r = -1, c = 0;
                if (e) for (; ;) {
                  for (; c <= t.__partsIndex && (o = -1 == r ? 0 : r + e.length, r = i.indexOf(e, o), -1 != r); c++) ;
                  if (-1 == r && 4 !== s.readyState) return;
                  for (a = 0; a < t.__partsCallback.length; a++) t.__partsCallback[a].call(s, i.substring(o, -1 == r ? i.length : r), t.__partsIndex, i);
                  if (t.__partsIndex++, -1 == r) return
                } else for (c = 0; c < t.__partsCallback.length; c++) t.__partsCallback[c].call(s, i)
              }
            }(), e && (o || 4 === s.readyState)) if (e = void 0, s.onreadystatechange = jQuery.noop, o) 4 !== s.readyState && s.abort(); else {
              c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
              try {
                r = s.statusText
              } catch (d) {
                r = ""
              }
              a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
            }
            c && n(a, r, c, s.getAllResponseHeaders())
          }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = e : e()
        }, abort: function () {
          e && e(void 0, !0)
        }
      }
    }
  })
}(), !function () {
  function save(t) {
    var e = [];
    for (tmpName in options) options.hasOwnProperty(tmpName) && "duRobotState" !== tmpName && e.push('"' + tmpName + '":"' + options[tmpName] + '"');
    var i = "{" + e.join(",") + "}";
    bds.comm.personalData ? $.ajax({
      url: "//www.baidu.com/ups/submit/addtips/?product=ps&tips=" + encodeURIComponent(i) + "&_r=" + (new Date).getTime(),
      success: function () {
        writeCookie(), "function" == typeof t && t()
      }
    }) : (writeCookie(), "function" == typeof t && setTimeout(t, 0))
  }

  function set(t, e) {
    options[t] = e
  }

  function get(t) {
    return options[t]
  }

  function writeCookie() {
    if (options.hasOwnProperty("sugSet")) {
      var t = "0" == options.sugSet ? "0" : "3";
      clearCookie("sug"), Cookie.set("sug", t, document.domain, "/", expire30y)
    }
    if (options.hasOwnProperty("sugStoreSet")) {
      var t = 0 == options.sugStoreSet ? "0" : "1";
      clearCookie("sugstore"), Cookie.set("sugstore", t, document.domain, "/", expire30y)
    }
    if (options.hasOwnProperty("isSwitch")) {
      var e = {0: "2", 1: "0", 2: "1"}, t = e[options.isSwitch];
      clearCookie("ORIGIN"), Cookie.set("ORIGIN", t, document.domain, "/", expire30y)
    }
    if (options.hasOwnProperty("imeSwitch")) {
      var t = options.imeSwitch;
      clearCookie("bdime"), Cookie.set("bdime", t, document.domain, "/", expire30y)
    }
  }

  function writeBAIDUID() {
    var t, e, i, n = Cookie.get("BAIDUID");
    /FG=(\d+)/.test(n) && (e = RegExp.$1), /SL=(\d+)/.test(n) && (i = RegExp.$1), /NR=(\d+)/.test(n) && (t = RegExp.$1), options.hasOwnProperty("resultNum") && (t = options.resultNum), options.hasOwnProperty("resultLang") && (i = options.resultLang), Cookie.set("BAIDUID", n.replace(/:.*$/, "") + ("undefined" != typeof i ? ":SL=" + i : "") + ("undefined" != typeof t ? ":NR=" + t : "") + ("undefined" != typeof e ? ":FG=" + e : ""), ".baidu.com", "/", expire30y, !0)
  }

  function clearCookie(t) {
    Cookie.clear(t, "/"), Cookie.clear(t, "/", document.domain), Cookie.clear(t, "/", "." + document.domain), Cookie.clear(t, "/", ".baidu.com")
  }

  function reset(t) {
    options = defaultOptions, save(t)
  }

  var defaultOptions = {
    sugSet: 1,
    sugStoreSet: 1,
    isSwitch: 1,
    isJumpHttps: 1,
    imeSwitch: 0,
    resultNum: 10,
    skinOpen: 1,
    resultLang: 0,
    duRobotState: "000"
  }, options = {}, tmpName, expire30y = new Date;
  expire30y.setTime(expire30y.getTime() + 94608e7);
  try {
    if (bds && bds.comm && bds.comm.personalData) {
      if ("string" == typeof bds.comm.personalData && (bds.comm.personalData = eval("(" + bds.comm.personalData + ")")), !bds.comm.personalData) return;
      for (tmpName in bds.comm.personalData) defaultOptions.hasOwnProperty(tmpName) && bds.comm.personalData.hasOwnProperty(tmpName) && "SUCCESS" == bds.comm.personalData[tmpName].ErrMsg && (options[tmpName] = bds.comm.personalData[tmpName].value)
    }
    try {
      parseInt(options.resultNum) || delete options.resultNum, parseInt(options.resultLang) || "0" == options.resultLang || delete options.resultLang
    } catch (e) {
    }
    writeCookie(), "sugSet" in options || (options.sugSet = 3 != Cookie.get("sug", 3) ? 0 : 1), "sugStoreSet" in options || (options.sugStoreSet = Cookie.get("sugstore", 0));
    var BAIDUID = Cookie.get("BAIDUID");
    "resultNum" in options || (options.resultNum = /NR=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 10), "resultLang" in options || (options.resultLang = /SL=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 0), "isSwitch" in options || (options.isSwitch = 2 == Cookie.get("ORIGIN", 0) ? 0 : 1 == Cookie.get("ORIGIN", 0) ? 2 : 1), "imeSwitch" in options || (options.imeSwitch = Cookie.get("bdime", 0))
  } catch (e) {
  }
  window.UPS = {writeBAIDUID: writeBAIDUID, reset: reset, get: get, set: set, save: save}
}();
var ie = navigator.userAgent.toLowerCase().match(/msie\s+(\d*)/), ie6 = ie && 6 == ie[1];
if (window._is_skin_sam && !ie6) {
  var url = "";
  "1" == window._is_skin_sam ? url = "../../skin/js/skin_1.js" : "2" == window._is_skin_sam ? url = "../../skin/js/skin_2.js" : "3" == window._is_skin_sam && (url = "../../skin/js/skin_3.js");
  var skinDefer = null;
  if (url) var skinDefer = $.ajax({dataType: "script", cache: !0, url: url});
  skinDefer && skinDefer.done(function () {
    $(window).on("swap_end", function () {
      bds.se.skin && new bds.se.skin
    }), $(window).on("swap_begin", function () {
      bds.se.skin && bds.se.skin.prototype.dispose()
    })
  })
}
!function () {
  var t = {}, e = function (t) {
    var e = n(t);
    o(e)
  }, i = function (i, n) {
    var o = Math.random();
    o > .2 && .201 > o && "http:" == location.protocol && (t.url = i, t.headers = n, $.ajax({
      url: i,
      headers: n,
      success: e
    }))
  }, n = function (e) {
    if ("string" == typeof e && "object" == typeof t.headers) {
      if (t.headers.hasOwnProperty("content_syni") && 12495 !== e.length) return e;
      if (t.headers.hasOwnProperty("content_syns") && 19295 !== e.length) return e
    }
    return "normal"
  }, o = function (t) {
    $.ajax({url: "//www.baidu.com/r/plog", type: "post", data: {page_html: t}})
  };
  window.ctwin = {sendRequest: i}
}();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.speedTester = function () {
  function t() {
  }

  function e(t, e, o) {
    o = o || 19558, i(t, function (t) {
      return function (e, i, o) {
        n(t, i, o)
      }
    }(e), function (t) {
      return function () {
        n(t)
      }
    }(e), o)
  }

  function i(e, i, n, o) {
    i = i || t, n = n || t;
    var s = new Image;
    s.onload = function () {
      this.onload = this.onerror = null, o = this.fileSize || o;
      var t = new Date, e = t - a, n = o / e;
      i(this, e, n)
    }, s.onerror = function () {
      this.onload = this.onerror = null, n(this)
    };
    var a = new Date;
    s.src = e
  }

  function n(t, e, i) {
    var n = new Image;
    n.onload = n.onerror = function () {
      this.onload = this.onerror = null
    }, n.src = t + (e ? "&t=" + e + "&v=" + i : "&t=-1&v=-1") + "&r=" + Math.random()
  }

  return {start: e}
}(), bds.se.speedMonitor = function (t) {
  function e() {
    var t = d.pop();
    t && i(t), r && (c = window.setTimeout(e, a))
  }

  function i(t) {
    var e = t.url, i = t.size || -1, n = [];
    n.push("id=" + encodeURIComponent(t.id)), n.push("name=" + encodeURIComponent(t.name)), n.push("url=" + encodeURIComponent(t.url)), n.push("size=" + encodeURIComponent(t.id));
    for (key in t.logData) n.push(key + "=" + encodeURIComponent(t.logData[key]));
    bds.se.speedTester.start(e, l + "&" + n.join("&"), i)
  }

  function n() {
    return !0
  }

  var o = t.logPath || "", s = t.flag || "default", a = t.sleep || "1000", r = !1, c = null, d = [],
    l = o + "?flag=" + s;
  this.start = function () {
    this.stop(), r = !0, e()
  }, this.stop = function () {
    r = !1, window.clearInterval(c)
  }, this.addTask = function (t) {
    n(t) && d.push(t)
  }, this.clear = function () {
    d = []
  }
}, setTimeout(function () {
  var t = Math.random(), e = "http://velocity.baidu.com/sp";
  if ("https:" == location.protocol && (e = "https://sp0.baidu.com/6r1_czmhAB63otqbppnN2DJv/sp"), .01 > t) {
    var i = document.createElement("script");
    i.src = e, document.body.appendChild(i)
  }
}, 1e3), !function (t) {
  var t = t || {};
  t.se = t.se || {}, t.se.QuickDelete = function (t, e) {
    this.form = t, this.options = e, this._init()
  }, t.se.QuickDelete.prototype = {
    constructor: t.se.QuickDelete, _init: function () {
      this._create_elem(), this._bind_event()
    }, _create_elem: function () {
      var t = this.form, e = this.options, i = e.top || 0, n = e.right || 0, o = $.trim(t.val()) ? "block" : "none",
        s = "quickdelete", a = t.parent(),
        r = $('<a href="javascript:;"></a>').attr("id", s).attr("title", "清空").addClass("quickdelete");
      a.addClass("quickdelete-wrap").append(r), r.css({
        top: i + "px",
        right: n + "px",
        display: o
      }), e.wrapElem = a, e.elem = r
    }, _show: function () {
      0 === t.comm.ishome && this.options.elem.show()
    }, _hide: function () {
      this.options.elem.hide()
    }, _bind_event: function () {
      var e = this.form, i = this.options.elem, n = this;
      e.on("focus", function () {
        $.trim(e.val()) ? n._show() : n._hide()
      }).on("keyup input propertychange", function () {
        $.trim(e.val()) ? n._show() : n._hide()
      }), i.on("click", function () {
        var i = t.comm.supportis ? 2 : 0;
        return ns_c({
          input_clear: t.comm.ishome + i,
          delete_query: encodeURIComponent(e.val())
        }), e.val("").focus(), n._hide(), !1
      }), $(window).on("swap_end index_off", function () {
        $.trim(e.val()) ? n._show() : n._hide()
      })
    }
  }, new t.se.QuickDelete($("#kw"), {top: 0, right: 0})
}(bds), window.bds && bds.comm && bds.comm.ishome && $(window).on("load", function () {
  if (window.ctwin && window.ctwin.sendRequest("//www.baidu.com/?tn=baidu", {content_syni: 1}), window.performance && performance.timing) {
    var t = function () {
      var t = i("navigation"), e = i("domainLookup"), n = i("connect"), o = i("secureConnection"),
        s = (i("redirect"), i("request")), a = i("response"),
        r = {start: performance.timing.domLoading, end: performance.timing.domComplete}, c = i("loadEvent");
      return {
        navigation: n.start - t.start,
        dns: e.value,
        tcp: n.value,
        ssl: o.start > 0 ? n.end - o.start : 0,
        request: a.start - s.start,
        response: a.value,
        dom: r.end - r.start,
        loadEvent: c.end - t.start
      }
    }, e = Cookie.get("__bsi"), i = function (t) {
      var e = performance.timing, i = e[t + "Start"] ? e[t + "Start"] : 0, n = e[t + "End"] ? e[t + "End"] : 0;
      return {start: i, end: n, value: n - i > 0 ? n - i : 0}
    }, n = function () {
      var i = [], n = t();
      for (var o in n) i.push(o + "=" + n[o]);
      i.push("protocol=" + encodeURIComponent(location.protocol));
      var s = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=timing&", a = "";
      a += i.join("&"), a += "&newindex=" + (window.bds && bds.comm ? bds.comm.newindex : -1), e && (a += "&bsi=" + e);
      var r = s + a, c = new Image, d = "_LOG_" + (new Date).getTime();
      c.onload = function () {
        delete window[d]
      }, window[d] = c, c.src = r
    }, o = Math.random();
    /8498/.test(bds.comm.indexSid) && .01 > o && setTimeout(n, 500)
  }
}), $(window).on("swap_end", function () {
  bds.comm.search_tool && (bds.comm.search_tool.init = !1)
}), $(window).on("swap_begin", function () {
  $(document).off("click.searchTool")
});
var langfilterTip, timefilterTip, fileTypeTip, insideSearchTip;
$(document).delegate(".head_nums_cont_outer", "mousedown", function () {
  if ("undefined" != typeof bds.comm.search_tool) {
    if (bds.comm.search_tool.init) return;
    bds.comm.search_tool.init = !0;
    var t = $(this), e = t.find(".search_tool").eq(0), i = t.find(".search_tool_close").eq(0),
      n = t.find(".head_nums_cont_inner").eq(0);
    e.on("click", function () {
      n.animate({top: 0}, 250), ns_c({fm: "advTool", qid: bds.comm.qid, title: encodeURI("搜索工具"), rsv_advTool: 0})
    }), i.on("click", function () {
      n.animate({top: -42}, 250, function () {
        "en" == bds.comm.search_tool.sl_lang || bds.comm.search_tool.st || bds.comm.search_tool.et || bds.comm.search_tool.si || bds.comm.search_tool.ft || bds.comm.search_tool.exact ? (ns_c({
          fm: "advTool",
          qid: bds.comm.qid,
          title: encodeURI("清除"),
          rsv_advTool: 2
        }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/(filetype:[^\s]* )|(site:[^\s]*)/g, "").replace(/^\"+(.+)\"+$/, "$1")) + "&sl_lang=cn&rsv_srlang=cn&rsv_rq=cn&ct=0&si=&tfflag=0&gpc=" + encodeURIComponent("stf=")), $("input[name='gpc'],input[name='si'],input[name='ct']", "form").val("")) : ns_c({
          fm: "advTool",
          qid: bds.comm.qid,
          title: encodeURI("收起工具"),
          rsv_advTool: 1
        })
      })
    });
    var o = t.find(".search_tool_la").eq(0);
    if (o.length > 0) {
      var s = "<div class='c-tip-menu c-tip-langfilter'><ul>";
      "en" == bds.comm.search_tool.sl_lang ? (s += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"cn\",this.innerHTML)'>所有网页</a></li>", s += "<li><span>英文网页</span></li>") : "cn" == bds.comm.search_tool.sl_lang && (s += "<li><span>所有网页</span></li>", s += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"en\",this.innerHTML)'>英文网页</a></li>"), s += "</li></ul></div>", langfilterTip = new bds.se.tip({
        target: o,
        mode: "none",
        content: $(s),
        arrow: {has: 0, offset: 0},
        offset: {x: 15, y: 21}
      }), langfilterTip.hide()
    }
    var a = t.find(".search_tool_tf").eq(0);
    if (a.length > 0) {
      var r = "<div class='c-tip-menu c-tip-timerfilter'><ul>";
      r += bds.comm.search_tool.st || bds.comm.search_tool.et ? " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf\",this.innerHTML,0)'>时间不限</a></li>" : " <li><span>时间不限</span></li>", r += bds.comm.search_tool.st >= bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>一天内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneDay + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,1)'>一天内</a></li>", r += bds.comm.search_tool.st >= bds.comm.search_tool.thisWeek && bds.comm.search_tool.st < bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>一周内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneWeek + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,2)'>一周内</a></li>", r += bds.comm.search_tool.st >= bds.comm.search_tool.thisMonth && bds.comm.search_tool.st < bds.comm.search_tool.thisWeek && "1" == bds.comm.search_tool.stftype ? " <li><span>一月内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneMonth + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,3)'>一月内</a></li>", r += bds.comm.search_tool.st >= bds.comm.search_tool.thisYear && bds.comm.search_tool.st < bds.comm.search_tool.thisMonth && "1" == bds.comm.search_tool.stftype ? " <li><span>一年内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneYear + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,4)'>一年内</a></li>", r += " <li class='c-tip-custom'>", r += " <hr />自定义", r += " <p class='c-tip-custom-st'>从<input name='st' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ", r += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.st, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.st + "' class='c-tip-custom-input'/></p>" : "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>", r += "  <p class='c-tip-custom-et'>至<input name='et' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ", r += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.et, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.et + "' class='c-tip-custom-input'/></p>" : "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>", r += "<div class='c-tip-timerfilter-custom-error'>自定义时间错误！</div>", r += "<a href='javascript:;' class='c-tip-custom-submit'>确认</a>", r += "</li></ul></div>", timefilterTip = new bds.se.tip({
        target: a,
        mode: "none",
        content: $(r),
        arrow: {has: 0, offset: 0},
        offset: {x: 15, y: 21},
        onShow: function () {
          $(this.getTarget()).width() > 95 && $("ul", this.getDom()).width($(this.getTarget()).width() + 20), $(".c-tip-custom-input").on("click", function (t) {
            var e = this, i = null, n = new Date, o = $(e).parents(".c-tip-custom"), s = o.find("input[name='st']"),
              a = o.find("input[name='et']");
            $(e).attr("data-value") && n.setTime($(e).attr("data-value")), $(e).parents(".c-tip-custom").find(".c-tip-custom-input").removeClass("c-tip-custom-input-focus"), $(e).addClass("c-tip-custom-input-focus"), 0 == $("#c-tip-custom-calenderCont").length && $(e).parents(".c-tip-custom").append("<div id='c-tip-custom-calenderCont'></div>"), $("#c-tip-custom-calenderCont").html("");
            var r = {
              element: "c-tip-custom-calenderCont",
              date: formatDate(n),
              between: [$(e).attr("date-min") - 0, $(e).attr("date-max") - 0],
              onSelectDay: function (t) {
                if (t += "", "st" == e.name) {
                  var i = new Date(t.substr(0, 4), t.substr(4, 2) - 1, t.substr(6, 2), 0, 0, 0);
                  a.attr("date-min", t)
                } else {
                  var i = new Date(t.substr(0, 4), t.substr(4, 2) - 1, t.substr(6, 2), 23, 59, 59);
                  s.attr("date-max", t)
                }
                $(e).val(formatDate(i, "-")), $(e).attr("data-value", i.getTime()), $("#c-tip-custom-calenderCont").hide(), $(e).removeClass("c-tip-custom-input-focus").removeClass("c-tip-custom-input-init")
              }
            };
            "undefined" == typeof WCal ? $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/new_wcal_3426010.js", function () {
              i = new WCal(r), n && i.setDay(formatDate(n), function (t) {
                t.className += " op_mon_day_selected"
              })
            }) : (i = new WCal(r), n && i.setDay(formatDate(n), function (t) {
              t.className += " op_mon_day_selected"
            })), $("#c-tip-custom-calenderCont").css({
              top: $(this).position().top - 2,
              left: $(this).position().left + $(this).width() + 15,
              display: "block"
            }), t.stopPropagation()
          }), $(".c-tip-custom-input").on("focus", function () {
            $(this).removeClass("c-tip-custom-input-init")
          }), $(".c-tip-custom-input").on("blur", function () {
            function t(t) {
              var e, i = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/, n = new Date(0 / 0), o = i.exec(t);
              return o && (e = +o[2], n.setFullYear(o[1], e - 1, o[3]), e != n.getMonth() + 1 && n.setTime(0 / 0)), n
            }

            var e = this, i = t($(e).val());
            i instanceof Date && i.getTime() ? ($(e).attr("data-value", i.getTime()), $(".c-tip-timerfilter-custom-error").hide()) : "" == $(e).val() ? ($(e).attr("data-value", "0"), $(".c-tip-timerfilter-custom-error").hide()) : ($(e).attr("data-value", ""), $(".c-tip-timerfilter-custom-error").show())
          });
          try {
            $(".c-tip-custom-submit").off("click.searchTool").on("click.searchTool", function (t) {
              var e = this, i = $(e).parents(".c-tip-custom"),
                n = parseInt($(".c-tip-custom-input", i)[0].getAttribute("data-value") / 1e3),
                o = parseInt($(".c-tip-custom-input", i)[1].getAttribute("data-value") / 1e3);
              return $("#c-tip-custom-calenderCont").hide(), "" != n && n || (n = 0), "" != o && o || !n || "" == n || (o = parseInt((new Date).setHours(23, 59, 58) / 1e3)), o > bds.comm.serverTime && (0 >= n ? (n = "", o = "") : o = parseInt((new Date).setHours(23, 59, 58) / 1e3)), n > o || n > bds.comm.serverTime ? ($(".c-tip-timerfilter-custom-error").show(), void t.stopPropagation()) : (0 == n && 0 == o && (n = "", o = ""), $(".c-tip-timerfilter-custom-error").hide(), void advChangeUrl("gpc", "stf=" + n + "," + o + "|stftype=2", "自定义时间:" + n + "|" + o, 5))
            })
          } catch (t) {
          }
        }
      }), timefilterTip.hide()
    }
    var c = t.find(".search_tool_ft").eq(0);
    if (c.length > 0) {
      var d = "<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-ft'><ul>";
      d += bds.comm.search_tool.ft ? " <li><a href='javascript:;' onClick='fileChangeUrl(null,this.innerHTML,0)'>所有网页和文件(不限格式)</a></li>" : " <li><span>所有网页和文件(不限格式)</span></li>", d += "pdf" == bds.comm.search_tool.ft ? " <li><span>Adobe Acrobat PDF(.pdf)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"pdf\",this.innerHTML,1)'>Adobe Acrobat PDF(.pdf)</a></li>", d += "doc" == bds.comm.search_tool.ft ? " <li><span>微软 Word(.doc)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"doc\",this.innerHTML,2)'>微软 Word(.doc)</a></li>", d += "xls" == bds.comm.search_tool.ft ? " <li><span>微软 Excel(.xls)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"xls\",this.innerHTML,3)'>微软 Excel(.xls)</a></li>", d += "ppt" == bds.comm.search_tool.ft ? " <li><span>微软 PowerPoint(.ppt)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"ppt\",this.innerHTML,4)'>微软 PowerPoint(.ppt)</a></li>", d += "rtf" == bds.comm.search_tool.ft ? " <li><span>RTF 文件(.rtf)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"rtf\",this.innerHTML,5)'>RTF 文件(.rtf)</a></li>", d += "</ul></div>";
      var l = new bds.se.tip({
        target: c,
        mode: "none",
        content: $(d),
        arrow: {has: 0, offset: 0},
        offset: {x: 15, y: 21}
      });
      l.hide()
    }
    var u = t.find(".search_tool_si").eq(0);
    u.length > 0 && (insideSearchTip = new bds.se.tip({
      target: u,
      mode: "none",
      content: $("<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-si'><ul> <li><input name='si' type='txt' class='c-tip-si-input c-gap-bottom-small c-gap-right-small' autocomplete='off' value='" + bds.comm.search_tool.si + "' placeholder='例如:baidu.com' /><a href='javascript:;' class='c-tip-timerfilter-si-submit'>确认</a></li> <li><p class='c-tip-timerfilter-si-error'>无法识别，正确格式：baidu.com</p></li></ul></div>"),
      arrow: {has: 0, offset: 0},
      offset: {x: 15, y: 21},
      onShow: function () {
        $(".c-tip-si-input").on("focus", function () {
          $(this).addClass("c-tip-si-input-focus")
        }), $(".c-tip-si-input").on("blur", function () {
          $(this).removeClass("c-tip-si-input-focus")
        });
        try {
          $(".c-tip-timerfilter-si-submit").off("click.searchTool").on("click.searchTool", function (t) {
            var e = this, i = $(e).parents(".c-tip-timerfilter-si"), n = $("input", i).val(), o = queryReplace("site");
            if ("" == n) ns_c({
              fm: "advTool",
              qid: bds.comm.qid,
              title: encodeURI("站内检索:" + n),
              rsv_advTool_si: encodeURI(n)
            }), baseChangeUrl("wd=" + encodeURIComponent(o) + "&si=&ct=0"); else {
              if (!n.match(/^[\w\-_]+(\.[\w\-_]+)+$/)) return $(".c-tip-timerfilter-si-error").show(), t.stopPropagation(), t.preventDefault(), !1;
              $(".c-tip-timerfilter-si-error").hide(), ns_c({
                fm: "advTool",
                qid: bds.comm.qid,
                title: encodeURI("站内检索:" + n),
                rsv_advTool_si: encodeURI(n)
              }), baseChangeUrl("wd=" + encodeURIComponent(o) + "&si=" + encodeURIComponent(n) + "&ct=2097152")
            }
          })
        } catch (t) {
        }
      }
    }), insideSearchTip.hide());
    var m = !0;
    o.on("click", function (t) {
      m ? (langfilterTip && langfilterTip.show(), m = !1, timefilterTip && timefilterTip.hide(), p = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("语言筛选浮层展现"),
        rsv_advTool_tip: 1
      }), $(document).on("click.searchTool", function (t) {
        0 == $(t.target).parents(".c-tip-langfilter").length && langfilterTip && (langfilterTip.hide(), m = !0, $(document).off("click.searchTool"))
      })) : (langfilterTip && langfilterTip.hide(), m = !0, $(document).off("click.searchTool")), t.stopPropagation()
    });
    var p = !0;
    a.on("click", function (t) {
      p ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.show(), p = !1, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("时间筛选浮层展现"),
        rsv_advTool_tip: 0
      }), $(document).on("click.searchTool", function (t) {
        0 == $(t.target).parents(".c-tips-container,#c-tip-custom-calenderCont").length && timefilterTip && (timefilterTip.hide(), $("#c-tip-custom-calenderCont").hide(), timefilterTip.getDom().find(".c-tip-custom-input-focus").removeClass("c-tip-custom-input-focus"), p = !0, $(document).off("click.searchTool"))
      })) : (timefilterTip && timefilterTip.hide(), p = !0, $(document).off("click.searchTool")), t.stopPropagation()
    });
    var f = !0;
    c.on("click", function (t) {
      f ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.hide(), p = !0, l && l.show(), f = !1, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("网页格式浮层展现"),
        rsv_advTool_tip: 2
      }), $(document).on("click.searchTool", function (t) {
        0 == $(t.target).parents(".c-tip-timerfilter-ft").length && l && (l.hide(), f = !0, $(document).off("click.searchTool"))
      })) : (l && l.hide(), f = !0, $(document).off("click.searchTool")), t.stopPropagation()
    });
    var h = !0;
    u.on("click", function (t) {
      h ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.hide(), p = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.show(), h = !1, ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("站内搜索浮层展现"),
        rsv_advTool_tip: 3
      }), $(document).on("click.searchTool", function (t) {
        0 == $(t.target).parents(".c-tip-timerfilter-si").length && insideSearchTip && (insideSearchTip.hide(), h = !0, $(document).off("click.searchTool"))
      })) : (insideSearchTip && insideSearchTip.hide(), h = !0, $(document).off("click.searchTool")), t.stopPropagation()
    })
  }
}), !function () {
  function t() {
    function t(t, e) {
      var i = {top: e.offset().top, left: e.offset().left}, n = {width: e.width(), height: e.height()},
        o = function () {
          var t = e.attr("data-click");
          if (t) try {
            return $.parseJSON(t)
          } catch (i) {
          }
        }() || {}, s = t + (o.p5 || "");
      return {id: s, pos: i, size: n, dataClick: o, dom: e}
    }

    var e = {}, i = {}, n = $("#wrapper");
    return e.topResult = n.find("#con-at").find(".result-op"), e.rightResult = n.find("#con-ar").find(".result-op"), e.leftResult = n.find("#content_left").find(".result, .result-op"), e.topResult.length && (i.T = [], e.topResult.each(function () {
      i.T.push(t("T", $(this)))
    })), e.rightResult.length && (i.R = [], e.rightResult.each(function () {
      i.R.push(t("R", $(this)))
    })), e.leftResult.length && (i.L = [], e.leftResult.each(function () {
      i.L.push(t("L", $(this)))
    })), i
  }

  bds.se.skeleton = function () {
    var e;
    return function () {
      return e || (e = t(), $(window).one("swap_begin", function () {
        e = null
      })), e
    }
  }()
}(), !function () {
  $(window).on("swap_end", function () {
    var t = function () {
      var t = [], e = bds.se.skeleton(), i = e.L;
      return i ? ($.each(i, function (e, i) {
        var n = {};
        n.dom = i.dom, n.id = i.id, n.itime = 0, n.time = 0, t.push(n)
      }), t) : null
    };
    bds.comm.orderplay = t()
  })
}(), !function () {
  function t() {
    var t = this;
    t.display = {}, t.expand = {}, t.dom = {}, t.init()
  }

  bds.se.display = function () {
    new t
  }, t.prototype = {
    init: function () {
      var t = this;
      t.dom = bds.se.skeleton();
      var e = $("#wrapper");
      t.dom.rsResult = e.find("#rs a"), t.dom.hintResult = e.find(".se_common_hint"), t.rs = t.dom.rsResult.length || 0, t.hint = t.dom.hintResult.length || 0, t.display.base = t.getBase(), t.dom.L && t.getResult(t.dom.L), t.dom.R && t.getResult(t.dom.R), t.dom.T && t.getResult(t.dom.T), t.rs && (t.display.rs = t.getRS()), t.hint && (t.display.hint = t.getHint()), t.send()
    }, send: function () {
      var t = this;
      for (var e in t.display) {
        var i = {};
        i[e] = t.display[e], bds.log.send.sendPack("new_disp", i)
      }
      for (var n in t.expand) if (n && t.expand[n]) for (var o in t.expand[n]) if (o && t.expand[n][o] && t.expand[n][o].length) for (var s = t.expand[n][o], a = 0; a < s.length; a++) {
        var r = {};
        r[n] = {expand: {}}, r[n].expand[o] = {}, r[n].expand[o][a] = s[a], bds.log.send.sendPack("new_disp", r)
      }
    }, getBase: function () {
      var t = this, e = {};
      return e.qid = bds.comm.qid || "", e.tpl = bds.comm.resTemplateName || "", e.async = bds.comm.supportis ? 1 : 0, e.page = bds.comm.pageNum || 1, e.upn = $.getCookie("BD_UPN") || "", t.dom.L && (e.left = t.dom.L.length), t.dom.R && (e.right = t.dom.R.length), t.dom.T && (e.top = t.dom.T.length), e.size = {}, e.size.doc = {
        w: $(document).width(),
        h: $(document).height()
      }, e.size.wind = {w: $(window).width(), h: $(window).height()}, e.size.scr = {
        w: screen.width,
        h: screen.height
      }, e
    }, getRS: function () {
      var t = this, e = {};
      return e.num = t.rs, e.query = [], t.dom.rsResult.each(function () {
        var t = this.textContent || this.innerText;
        e.query.push(t)
      }), e
    }, getHint: function () {
      var t = this, e = {};
      return e.result = [], t.dom.hintResult.each(function () {
        var t = {};
        t.id = this.getAttribute("data-id") || 0, t.tpl = this.getAttribute("data-tpl") || "", e.result.push(t)
      }), e
    }, getResult: function (t) {
      for (var e = this, i = t, n = 0, o = Math.min(i.length, 10); o > n; n++) {
        var s = i[n].id, a = e.getResultDisplay(i[n]);
        e.expand[s] = a.expand, delete a.expand, e.display[s] = a
      }
    }, getResultDisplay: function (t) {
      function e() {
        var e = t.size;
        return {w: e.width || 0, h: e.height || 0}
      }

      function i() {
        var e = t.pos;
        return {t: e.top || 0, l: e.left || 0}
      }

      function n() {
        return d.rsv_bdr && 0 != d.rsv_bdr ? d.rsv_bdr : c.hasClass(".c-border") || c.find(".c-border").length ? 5 : 0
      }

      function o() {
        function t(t) {
          var e;
          return t && (e = c.find(t)), e && e.length ? !0 : !1
        }

        var e = {};
        return t(".favurl") && (e.fi = 1), t(".c-text-public.c-text-mult") && (e.gwi = 1), t(".icon-unsafe-icon") && (e.fxi = 1), t(".c-icon-v") && (e.vi = 1), t(".c-icon-med") && (e.yjji = 1), t(".c-icon-air") && (e.hxi = 1), t(".c-recommend") && (e.cr = 1), e
      }

      function s() {
        var t = c.find("a").not(":hidden").not("h3 a, .m"), e = [],
          i = /^((https?:)?\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*(:\d+)*(\/.*)*/, n = /^(\/s\?)/;
        return t.each(function () {
          var t = this.getAttribute("href");
          if (t && i.test(t)) {
            var o = t && t.match(/.*\/link\?url=([^&]*).*/);
            e.push(o && o.length && o.length > 0 && o[1] ? o[1] : t)
          } else t && n.test(t) && e.push(t)
        }), e.length ? e : !1
      }

      function a() {
        var t = [], e = c.find("img").not(":hidden").not("[data-nolog]");
        return e.length ? (e.each(function () {
          var e = {w: this.width, h: this.height};
          t.push({size: e})
        }), t) : !1
      }

      function r() {
        var t = [], e = c.find("object, video, audio");
        return e.length ? (e.each(function () {
          var e = $(this), i = {};
          i.type = e.is("object") && e.attr("type") && e.attr("type").indexOf("flash") >= 0 ? 1 : e.is("video") ? 2 : e.is("audio") ? 3 : 0, i.size = {
            w: e.width(),
            h: e.height()
          }, t.push(i)
        }), t) : !1
      }

      var c = t.dom, d = t.dataClick, l = {};
      if (l.id = d.p5 || "", l.srcid = d.rsv_srcid || c.attr("srcid") || 0, l.tpl = c.attr("tpl") || "", l.mu = d.mu || c.attr("mu") || "", l.fm = d.fm || "as", c.is(":hidden") && (l.show = 0), 0 == l.show) return l;
      l.size = e(), l.pos = i(), n() && (l.bdr = n()), l.com = o();
      var u = s(), m = a(), p = r();
      return (u || m || p) && (l.expand = {}, u && (l.link = u.length, l.expand.links = u), m && (l.img = m.length, l.expand.imgs = m), p && (l.app = p.length, l.expand.apps = p)), l
    }
  }
}(), !function () {
  function t() {
    this.pageElementsList = [], this.scrollTime = null, this.scrollChange = !1, this.resizeTime = null, this.resizeChange = !1, this.scrollTop = $(document).scrollTop(), this.scrollLeft = $(document).scrollLeft(), this.windowHeight = $(window).height(), this.windowWidth = $(window).width()
  }

  t.prototype = {
    init: function () {
      var t = bds.se.skeleton(), e = this;
      $.each(["L", "R", "T"], function (i, n) {
        t[n] && ($.merge(e.pageElementsList, e.getDom(t[n])), e.bindEvent(t[n]))
      })
    }, getDom: function (t) {
      var e = [];
      return $.each(t, function (t, i) {
        var n = {};
        n.top = i.pos.top, n.height = i.size.height, n.id = i.id, n.visible = 0, e.push(n)
      }), e
    }, sendLog: function (t, e) {
      bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && bds.log.send.sendPack(t, e)
    }, bindEvent: function (t) {
      var e = this;
      $.each(t, function (t, i) {
        var n = 200, o = !1, s = null;
        i.dom.bind("mouseenter.useraction", function () {
          null !== s && clearTimeout(s), s = setTimeout(function () {
            e.sendLog("new_view", {type: "mouseIn", id: i.id, t: (new Date).getTime()}), o = !0, s = null
          }, n)
        }).bind("mouseleave.useraction", function () {
          null !== s && (clearTimeout(s), s = null), o && (e.sendLog("new_view", {
            type: "mouseOut",
            id: i.id,
            t: (new Date).getTime()
          }), o = !1)
        })
      })
    }, destroy: function () {
      $(window).unbind(".useraction"), this.pageElementsList.splice(0, this.pageElementsList.length)
    }, sight: function () {
      var t = this;
      $.each(this.pageElementsList, function (e, i) {
        var n = t.scrollTop < i.top + i.height && t.scrollTop + t.windowHeight > i.top;
        if (1 !== i.visible || n) {
          if (0 === i.visible && n) {
            if (t.sendLog("new_view", {
              type: "sight",
              resid: i.id,
              action: "in",
              t: (new Date).getTime()
            }), bds.comm.orderplay && bds.comm.orderplay.length && "L" == i.id.substr(0, 1) && bds.comm.pageSize) {
              var o = (parseInt(i.id.substr(1)) - 1) % bds.comm.pageSize, s = bds.comm.orderplay[o];
              s && !s.itime && (s.itime = (new Date).getTime())
            }
            i.visible = 1
          }
        } else {
          if (t.sendLog("new_view", {
            type: "sight",
            resid: i.id,
            action: "out",
            t: (new Date).getTime()
          }), bds.comm.orderplay && bds.comm.orderplay.length && "L" == i.id.substr(0, 1) && bds.comm.pageSize) {
            var o = (parseInt(i.id.substr(1)) - 1) % bds.comm.pageSize, s = bds.comm.orderplay[o];
            s && (s.time += (new Date).getTime() - s.itime, s.itime = (new Date).getTime())
          }
          i.visible = 0
        }
      })
    }, collectPoint: function (t) {
      function e() {
        s[n] = setTimeout(function () {
          s.sendLog("new_view", i(t)), s[o] = !1, s.sight(), s[o] ? e() : s[n] = null
        }, 1e3)
      }

      function i(t) {
        if ("resize" === t) {
          var e = $(window);
          return s.windowHeight = e.height(), s.windowWidth = e.width(), {
            type: "resize",
            t: (new Date).getTime(),
            height: s.windowHeight,
            width: s.windowWidth
          }
        }
        if ("scroll" === t) {
          var i = $(document);
          return s.scrollTop = i.scrollTop(), s.scrollLeft = i.scrollLeft(), {
            type: "scroll",
            t: (new Date).getTime(),
            offsetX: s.scrollTop,
            offsetY: s.scrollLeft
          }
        }
      }

      var n = t + "Time", o = t + "Change", s = this;
      null === s[n] && e()
    }, collect: function () {
      this.init();
      var t = this;
      null !== this.resizeTime && clearTimeout(this.resizeTime), this.resizeTime = null, null !== this.scrollTime && clearTimeout(this.scrollTime), this.scrollTime = null, $(window).bind("focus.useraction", function () {
        t.sendLog("new_view", {type: "focus", t: (new Date).getTime()})
      }).bind("blur.useraction", function () {
        t.sendLog("new_view", {type: "blur", t: (new Date).getTime()})
      }).bind("resize.useraction", function (e) {
        t.resizeChange = !0, t.collectPoint("resize", e)
      }).bind("scroll.useraction", function (e) {
        t.scrollChange = !0, t.collectPoint("scroll", e)
      }), this.sight()
    }, outInterface: function () {
      var t = this;
      return {
        collect: function () {
          t.collect()
        }, destroy: function () {
          t.destroy()
        }
      }
    }
  }, bds.se.userAction = (new t).outInterface()
}(), bds.comm.recommends = {}, bds.comm.recommends.recommWidth = 0, bds.se.recommend = function (t) {
  var e = this;
  e.op = $.extend({}, e._default, t), e.id = e.op.target.attr("id"), e.init()
}, bds.se.recommend.prototype = {
  constructor: bds.se.recommend,
  __init__: !1,
  currInstance: null,
  recommDom: null,
  arrowDom: null,
  cssDom: null,
  loadDom: null,
  global: {},
  _default: {
    target: "",
    arrowOffset_s: -54,
    arrowOffset_l: -151,
    container_s: 276,
    container_l: 368,
    startOpacity: .3,
    endOpacity: 1
  },
  init: function () {
    var t = this;
    t.currInstance && t.currInstance.id == t.id || (t.delay = {
      overIcon: null,
      loader: null,
      overArrow: null
    }, t.doWhat(function () {
      t.__init__ || (bds.se.recommend.prototype.__init__ = !0, t.createRecommDom()), t.createArrowDom(), t.delay.overArrow = setTimeout(function () {
        var e = t.op.arrowDom.find(".rrecom-btn");
        "none" == e.css("display") && e.show(), t.moveArrow(function () {
          e.addClass("rrecom-btn-hover"), t.showRecommDom()
        })
      }, 100)
    }))
  },
  dispose: function () {
    bds.se.recommend.prototype.currInstance = null, bds.se.recommend.prototype.recommDom && bds.se.recommend.prototype.recommDom.remove(), bds.se.recommend.prototype.cssDom && bds.se.recommend.prototype.cssDom.remove(), bds.comm.recommends = {}, bds.se.recommend.prototype.__init__ = !1, $(window).off("resize.recommend container_resize.recommend scroll.recommend")
  },
  createArrowDom: function () {
    var t = this, e = t.op.target.find(".rrecom-btn-parent");
    if (e.length) t.op.arrowDom = e; else {
      var i = ['<span class="rrecom-btn-parent rrecom-btn-s">', '<span class="rrecom-btn">', "<span></span>", "</span>", "</span>"].join("");
      t.op.arrowDom = $(i), t.op.arrowDom.on("click", ".rrecom-btn", function () {
        t.hideRecommDom()
      }), t.op.target.css({position: "relative"}).append(t.op.arrowDom)
    }
  },
  resetArrow: function () {
    var t = this;
    t.op.arrowDom.css({right: t.op.arrowOffset_s}).removeClass("rrecom-btn-click rrecom-btn-moving").find(".rrecom-btn").stop().hide().removeClass("rrecom-btn-hover")
  },
  setArrowPos: function () {
    var t = this;
    t.currInstance && ("l" === bds.comm.containerSize ? t.currInstance.op.arrowDom.css("right", t.op.arrowOffset_l) : t.currInstance.op.arrowDom.css("right", t.op.arrowOffset_s))
  },
  moveArrow: function (t) {
    var e = this, i = {opacity: e.op.endOpacity};
    i.right = "l" === bds.comm.containerSize ? e.op.arrowOffset_l : e.op.arrowOffset_s, e.op.arrowDom.stop().addClass("rrecom-btn-moving rrecom-btn-click").animate(i, 0, function () {
      e.currInstance && e.currInstance !== e && e.currInstance.resetArrow(), t()
    })
  },
  log: function (t) {
    var e = {}, i = this.op.target.attr("data-click"), n = this.op.target.attr("srcid"), o = this.op.target.attr("tpl"),
      s = this.op.target.attr("mu");
    if (n && (e.rsv_srcid = n), o && (e.rsv_tpl = o), s && (e.mu = s), i && $.extend(e, $.parseJSON(i)), e.p1 && !e.p5 && (e.p5 = e.p1), e.p5 && !e.p1 && (e.p1 = e.p5), !e.p1 && !e.p5) for (var a = $("#content_left").get(0), r = a.children, d = 1, l = 0, u = r.length; u > l; l++) if (1 == r[l].nodeType && r[l].className && /\bresult(\-op)?\b/.test(r[l].className)) {
      if (r[l] === this.op.target.get(0)) {
        e.p1 = d, e.p5 = d;
        break
      }
      d++
    }
    e.fm = "beha";
    var m = this.op.target.find(".t>a").eq(0);
    return e.rsv_re_fcurl = m.length ? m.attr("href") : s, e.rsv_re_fcurl = e.rsv_re_fcurl || "", e.rsv_re_fcurl = encodeURIComponent(e.rsv_re_fcurl), c($.extend(e, t))
  },
  getLeftP: function () {
    var t = this.op.target.attr("data-click");
    return t = $.parseJSON(t) || {}, t.p1 && !t.p5 && (t.p5 = t.p1), t.p5 && !t.p1 && (t.p1 = t.p5), t.p5 || t.p1 || (t.p1 = 1, t.p5 = 1), {
      p1: t.p1,
      p5: t.p5
    }
  },
  s_log: function () {
    this.log({rsv_re_fc: 2})
  },
  setCacheData: function (t) {
    bds.comm.recommends[this.id] = t
  },
  getCacheData: function () {
    return bds.comm.recommends[this.id]
  },
  doWhat: function (t) {
    var e = this.getCacheData();
    "[NO DATA]" !== e && (e ? t() : this.getRemoteData(t))
  },
  getJsonp: function (t) {
    var e = this.op.target.find(".t>a").eq(0), i = (e.length ? e.attr("href") : this.op.target.attr("mu")) || "",
      n = i && i.match(/.*url=([^&]*).*/), o = bds.comm.query;
    if (n && n.length && n.length > 0 && n[1]) {
      i = n[1];
      var s = "http://lcr.open.baidu.com/link?url=" + encodeURIComponent(i) + "&query=" + encodeURIComponent(o),
        a = window.bds && bds.util && bds.util.domain && bds.util.domain.get(s);
      return $.ajax({
        url: a,
        dataType: "jsonp",
        jsonp: "cb",
        data: {data_name: t, ie: "utf-8", oe: "utf-8", format: "json", t: Date.parse(new Date)}
      })
    }
  },
  getRemoteData: function (t) {
    var e = this, i = "recommend_common_merger_online";
    $.when(this.getJsonp(i)).then(function (i) {
      i && i.data && i.data.length && i.data[0] ? (i.data[0].hintData && e.asynClkRcmd(i.data[0].hintData), (i.data[0].extData || i.data[0].tplData) && (e.setCacheData(i.data), t())) : e.setCacheData("[NO DATA]")
    }, function () {
    })
  },
  asynClkRcmd: function (t) {
    var e = this, t = t[0] || {}, i = $("#wrapper_wrapper");
    if (t && t.linkInfo) {
      var n = e.op.target.find(".c-recommend"), o = n.find("a"), s = t.tip || "为您推荐：";
      if (t.defaultHide, o && o.length && (o.remove(), n.append(e.buildRcmdDom(t))), !n || !n.length) {
        var a = $('<div class="c-gap-top c-recommend"><i class="c-icon c-icon-bear-circle c-gap-right-small"></i><span class="c-gray">' + s + "</span></div>");
        i.find(".c-recommend").hide(), a.append(e.buildRcmdDom(t)), e.op.target.append(a)
      }
    }
  },
  buildRcmdDom: function (t) {
    for (var e = this, i = "", n = t.linkInfo, o = t.linkInfo2, s = encodeURIComponent(bds.comm.query), a = 0, r = n.length; r > a; a++) {
      var c = n[a].txt, d = n[a].wd, l = n[a].sa, u = "c-gap-left-large";
      0 == a && (u = "");
      var m = "wd=" + d + "&rsv_crq=" + l + "&bs=" + s, p = e.buildURL(m);
      i += '<a class="' + u + '" href="' + p + '" title="' + escapeHTML(c) + '" target=_blank>' + escapeHTML(c) + "</a>"
    }
    if (o) {
      i += '<a style="height:0;display:inline-block;"></a>';
      for (var a = 0, r = o.length; r > a; a++) {
        var c = o[a].txt, d = o[a].wd, l = o[a].sa, u = "c-gap-left-large", f = "";
        0 == a && (f = "margin-left:88px;");
        var m = "wd=" + d + "&rsv_crq=" + l + "&bs=" + s, p = e.buildURL(m);
        i += '<a class="' + u + '" href="' + p + '" title="' + escapeHTML(c) + '" target=_blank style="' + f + '">' + escapeHTML(c) + "</a>"
      }
    }
    return i
  },
  buildURL: function (t) {
    var e = "/s?", i = {tn: bds.comm.tn}, n = $("#form"), o = n.find("input[name=rsv_idx]"), s = "";
    i.rsv_idx = o.length ? o.val() : "";
    for (var a in i) i.hasOwnProperty(a) && i[a] && (s += a + "=" + encodeURIComponent(i[a]) + "&");
    return e + s + t
  },
  renderTpl: function (t, e) {
    var i = this;
    if (t && e) {
      var n = {};
      return n.right_recommends_merge = function (t) {
        function n(e, n) {
          var o,
            s = '<div class="cr-content" data-click=\'#{2}\'><div class="cr-title c-clearfix"><span title="#{0}">#{1}</span></div>',
            a = '<div class="c-row c-gap-top">',
            r = '<div class="c-span4#{5} rrecom-item" data-click=\'#{6}\'><div class="rrecom-p"><a target="_blank" href="#{0}"><img class="c-img c-img4 rrecom-img" src="#{1}"></a></div><div class="c-gap-top-small"><a target="_blank" title="#{2}" href="#{3}">#{4}</a></div>',
            c = "</div>", d = "", l = (e.showrow, e.shownums), u = {rsv_srcid: t.StdStg || 0};
          e.list && !e.list.length && (e.list = [e.list]), d += $.format(s, e.subtitle, e.subtitle, $.stringify(u)), d += '<div class="rrecom-panel">';
          for (var m = i.op.target.find(".t>a").eq(0), p = m.length ? m.attr("href") : i.op.target.attr("mu"), f = 0, h = e.list.length; h > f; f++) {
            o = e.list[f];
            var b = {rsv_re_ename: o.name, rsv_re_uri: o.uri, rsv_re_fcpoi: n + "-" + (f + 1), rsv_clk_url: p},
              g = i.buildURL(o.params + "&euri=" + (o.uri || ""));
            if (f == l) break;
            f % 4 === 0 && (d += a), bds.util && bds.util.domain && bds.util.domain.get && (o.img = bds.util.domain.get(o.img)), d += $.format(r, g, o.img, o.name, g, $.subByte(o.name, 20), (f + 1) % 4 === 0 ? " c-span-last rrecom-item-rowLast" : (f + 1) % 4 === 3 ? " rrecom-item-s" : "", $.stringify(b), o.attrpic), d += c, ((f + 1) % 4 === 0 || f == h - 1) && (d += c)
          }
          return d += c, d += c
        }

        var t = t || e, o = "", s = 12, a = 0;
        t.card && !t.card.length && (t.card = [t.card]);
        for (var r = 0, c = t.card.length; c > r; r++) {
          var d = t.card[r];
          if (a += parseInt(d.shownums || 0), a > s) break;
          o += n(d, r + 1)
        }
        return o
      }, n[t] ? n[t]() : void 0
    }
  },
  render: function (t) {
    for (var e = "", i = 0; i < t.length; i++) e += this.renderTpl(t[i].extData.tplt, t[i].tplData);
    var n = this.getLeftP();
    n.fm = "alxr", this.recommDom.attr("data-click", $.stringify(n)).find(".rrecom-content").eq(0).empty().append(e), this.setRecommPosition()
  },
  createRecommDom: function () {
    var t = ['<div style="position:fixed;left:-1px;background:#fff;border:1px solid #eee;z-index:103" class="result-op xpath-log" data-click=\'{"fm":"alxr","p1":1,"p5":1}\'>', '<div class="rrecom-ajax-loading c-loading"></div>', '<div class="rrecom-container">', '<a href="javascript:;" class="rrecom-btn-close" data-click=\'{"rsv_re_fc":4,"fm":"beha"}\'></a>', '<div class="rrecom-content"></div>', "</div>", "</div>"].join(""),
      e = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/rrecom_icon_e34d796.png",
      i = ["<style>", ".rrecom-btn-close,.rrecom-btn span{background:url(" + e + ") no-repeat;}", ".rrecom-btn-close{display:inline-block;width:13px;height:13px;position:absolute;top:26px;right:10px;background-position:0 -20px;}", ".rrecom-btn-parent{z-index:104;position:absolute;right:-37px;top:50%;margin-top:-50px;height:59px;width:40px;cursor:default;padding:20px 0px;}", ".rrecom-btn{display:none;background-color:#fff;padding:20px 5px;position:absolute;right:10px;width:20px;height:19px;border:1px solid transparent;}", ".rrecom-btn-hover{right:-1px;border:1px solid #eee;border-right:1px solid #fff;z-index:104;box-shadow:0px 2px 0px rgba(0,0,0,0.072);-webkit-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-moz-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-o-box-shadow:0px 2px 0px rgba(0,0,0,0.072);}", ".rrecom-btn span{cursor:pointer;background-position:0 0;width:20px;height:19px;position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px;}", ".rrecom-container{width:368px;padding-top:43px;overflow:hidden;background-color:#fff;}", ".rrecom-ajax-loading{position:absolute;left:50%;margin-left:-25px;top:50px;display:none;}", ".rrecom-content{margin-left:17px;}", ".rrecom-content .cr-content{width:100%;margin-bottom:28px;}", ".rrecom_content_s{padding-left:0px;width:276px;}", ".rrecom_content_s .rrecom-item-rowLast{display:none}", ".rrecom_content_s .rrecom-item-s{margin-right:0;}", ".rrecom-panel{text-align:center;}", "</style>"].join("");
    bds.se.recommend.prototype.recommDom = $(t), bds.se.recommend.prototype.cssDom = $(i), bds.se.recommend.prototype.loadDom = this.recommDom.find(".rrecom-ajax-loading"), this.setRecommSize(), $("body").append(this.cssDom).append(this.recommDom.hide()), this.bindRecommEvent(), $(window).trigger("container_resize.recommend", bds.comm.containerSize);
    var n = $("#foot");
    "static" === n.css("position") && n.css({position: "relative", "z-index": 104})
  },
  setRecommSize: function () {
    var t = $("#content_right"), e = $("#wrapper_wrapper"), i = $("body"), n = $(window), o = t.offset(),
      s = {w: i.width()}, a = {h: n.height()}, r = n.scrollTop();
    e.prevAll().each(function () {
      var t;
      return "div" === this.nodeName.toLowerCase() ? (t = parseInt($(this).css("margin-bottom")), bds.se.recommend.prototype.global.topGap = isNaN(t) ? 0 : t, !1) : void 0
    }), bds.se.recommend.prototype.global.topDom = e, bds.se.recommend.prototype.global.headDom = $("#head");
    var c = {top: this.global.topDom.offset().top - this.global.topGap}, d = this.global.headDom.offset().top - r + 56;
    this.recommDom.height(a.h), bds.comm.recommends.recommWidth = s.w - o.left - 2, this.recommDom.css({
      width: s.w - o.left - 2,
      top: r <= c.top - d ? c.top : d,
      position: r <= c.top - d ? "absolute" : "fixed",
      left: o.left
    })
  },
  setRecommPosition: function () {
    this.setRecommTop(), this.setRecommLeft()
  },
  setRecommTop: function () {
    var t = $(window).scrollTop(), e = {top: this.global.topDom.offset().top - this.global.topGap},
      i = this.global.headDom.offset().top - t + 56;
    this.recommDom.css({
      top: t <= e.top - i ? e.top : i,
      position: t <= e.top - i ? "absolute" : "fixed"
    }).find(".rrecom-container").css({"margin-top": "0px"}), bds.se.recommend.prototype.global.originalTop = t < e.top - i ? e.top - i : t
  },
  setRecommLeft: function () {
    var t, e;
    "fixed" === this.recommDom.css("position") && (t = $("#content_right").offset().left, e = $(window).scrollLeft(), this.recommDom.css("left", parseInt(t) - e))
  },
  bindRecommEvent: function () {
    var t = this;
    this.recommDom.find(".rrecom-btn-close").eq(0).on("click", function () {
      t.hideRecommDom()
    }), $(window).on("scroll.recommend", function () {
      var e, i, n, o = {top: t.global.topDom.offset().top - t.global.topGap},
        s = t.global.headDom.offset().top + t.global.headDom.outerHeight(), a = $(this);
      if (t.recommDom && "none" !== t.recommDom.css("display")) {
        e = a.scrollTop(), i = a.scrollLeft(), s -= e, e <= o.top - s ? "fixed" === t.recommDom.css("position") && (t.recommDom.css("position", "absolute"), t.recommDom.css("top", o.top)) : "absolute" === t.recommDom.css("position") && (t.recommDom.css("position", "fixed"), t.recommDom.css("top", s));
        var r = t.recommDom.find(".rrecom-container");
        t.global.originalTop < e ? (maxMargin = Math.min(t.recommDom.height() - r.height() - 82 - 75, 0), r.css({"margin-top": Math.max(t.global.originalTop - e, maxMargin)})) : r.css({"margin-top": "0px"}), i && (n = $("#content_right").offset().left, "fixed" === t.recommDom.css("position") ? t.recommDom.css("left", parseInt(n) - i) : t.recommDom.css("left", parseInt(n)))
      }
    }).on("resize.recommend", function () {
      t.setRecommSize(), t.setArrowPos()
    }).on("container_resize.recommend", function (e, i) {
      var n = t.recommDom.find(".rrecom-container");
      "s" !== i || n.hasClass("rrecom_content_s") ? "l" === i && (n.removeClass("rrecom_content_s"), n.find(".rrecom-content").css("width", t.op.container_l - 17 + "px")) : (n.addClass("rrecom_content_s"), n.find(".rrecom-content").css("width", t.op.container_s - 17 + "px"))
    })
  },
  hideRecommDom: function () {
    var t = this;
    t.recommDom.find(".rrecom-container").animate({width: "0px"}, 200, function () {
      t.recommDom.hide()
    }), t.currInstance && window.clearTimeout(t.currInstance.delay.overArrow), t.currInstance && t.currInstance.resetArrow(), bds.se.recommend.prototype.currInstance = null
  },
  showRecommDom: function () {
    var t = this;
    if (t.currInstance !== t, "none" === t.recommDom.css("display")) {
      t.recommDom.css({opacity: .3}).show().animate({opacity: 1}, 100);
      var e = t.recommDom.find(".rrecom-container"), i = bds.comm.recommends.recommWidth;
      e.css({width: 0}).animate({width: i + "px"}, 200)
    }
    t.recommDom.find(".rrecom_content_s").length > 0 ? t.recommDom.find(".rrecom-content").css("width", t.op.container_s - 17 + "px") : t.recommDom.find(".rrecom-content").css("width", t.op.container_l - 17 + "px"), bds.se.recommend.prototype.currInstance = t, t.render(t.getCacheData())
  },
  showLoading: function () {
    this.loadDom.show()
  },
  hideLoading: function () {
    this.loadDom.hide()
  }
}, $(window).one("swap_end", function () {
  bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("click", "#content_left .result .t>a, #content_left .result-op .t>a, .op-se-listen-recommend", function (t) {
    if (!t.ctrlKey && "0" == bds.comm.urlRecFlag) {
      var e = $(this).closest(".result, .result-op");
      new bds.se.recommend({target: e})
    }
  })
}), $(window).on("swap_begin", function () {
  bds.se.recommend.prototype.currInstance && bds.se.recommend.prototype.hideRecommDom(), bds.se.recommend.prototype.currInstance = null, bds.se.recommend.prototype.__init__ = !1, bds.comm.recommends = {}
}), bds.se.asynAds = function (t) {
  var e = t.dom || "", i = t.id || "", n = t.tnp || "", o = t.wd || "",
    s = t.cb && "function" == typeof t.cb ? t.cb : null;
  if (e && n && o && i) {
    c({fm: "inlo", rsv_ad: "ad_asyn_start"});
    for (var a = ["wd", "tnp", "tn", "pn", "bs", "fenlei", "adext"], r = "ie=utf-8&oe=utf-8&dsp=pc", d = 0; d < a.length; d++) {
      var l = a[d];
      t[l] && (r += "&" + l + "=" + t[l])
    }
    var u = bds.comm.orderplay, m = "", p = function (t) {
      if (bds && bds.comm && bds.comm.upn && bds.comm.upn.browser && "firefox" == bds.comm.upn.browser) var e = t.textContent; else var e = t.innerText;
      var i = e.indexOf("\n"), n = e.substr(0, i);
      return encodeURIComponent(n)
    }, f = function (t) {
      var e = $(".c-showurl", t).text().split(/\s+/)[0];
      return e = e.replace(/(\.\.\.$)/g, "")
    };
    $.each(u, function (t, e) {
      e.t = p(e.dom[0]) || "", e.u = f(e.dom[0]) || "", e.u && !new RegExp("baidu.com").test(e.u) && (m += e.u + ":"), e.itime && (e.time = (new Date).getTime() - e.itime)
    }), u.sort(function (t, e) {
      return t.time > e.time ? -1 : t.time < e.time ? 1 : (t.time = e.time) && t.id < e.id ? -1 : 0
    });
    var h = u[0], b = u[1], g = "";
    h.time && (g += h.t + "@" + h.time, b.time && (g += "," + b.t + "@" + b.time)), g && (r += "&rlist=" + encodeURIComponent(g)), m && (r += "&furl=" + encodeURIComponent(m.substring(0, m.length - 1))), $.ajax({
      url: "/s", dataType: "json", data: r, success: function (t) {
        var n = $(e);
        if (t && t.results && t.results.length && n.length) {
          var o = "";
          $.each(t.results, function (t, e) {
            if (e.id == i) {
              var n = e;
              o += "<style>" + n.css + "</style>", o += n.html, o += "<script>" + n.js + "</script>"
            }
          }), n.html(o), $(document).scrollTop() < n.position().top + n.height() && $(document).scrollTop() + $(window).height() > n.position().top && c({
            fm: "inlo",
            rsv_ad: "ad_asyn_shake"
          }), s && s()
        } else c({fm: "inlo", rsv_ad: "ad_asyn_net_error"})
      }, error: function () {
        c({fm: "inlo", rsv_ad: "ad_asyn_net_error"})
      }
    })
  } else c({fm: "inlo", rsv_ad: "ad_asyn_param_error"})
}, !function () {
  function t() {
    c = Math.random()
  }

  function e() {
    d = 1e3 * (new Date).getTime() + Math.round(1e3 * Math.random()) - 149e13, c >= .005 && .0051 > c && (n(), o(), s(), a())
  }

  function i() {
    var t = Math.round(1e3 * Math.random()) % u.length, e = new Image, i = new Image, n = u[t];
    e.onload = function () {
      i.src = "//www.baidu.com/nocache/fesplg/s.gif?lid=" + d + "&url=" + encodeURIComponent(n) + "&time=" + ((new Date).getTime() - o) + "&suc=1&type=aboard&dev=pc&protocol=" + encodeURIComponent(location.protocol) + "&ran=" + (new Date).getTime()
    }, e.onerror = function () {
      i.src = "//www.baidu.com/nocache/fesplg/s.gif?lid=" + d + "&url=" + encodeURIComponent(n) + "&time=&suc=0&type=aboard&dev=pc&protocol=" + encodeURIComponent(location.protocol) + "&ran=" + (new Date).getTime()
    };
    var o = (new Date).getTime();
    e.src = n + "?ran=" + (new Date).getTime()
  }

  function n() {
    var t = new Image;
    t.onload = function () {
      r("cndtestsuc")
    }, t.onerror = function () {
      r("cndtesterr")
    }, t.src = "//ss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
  }

  function o() {
    var t = new Image;
    t.onload = function () {
      r("cndgsstestsuc")
    }, t.onerror = function () {
      r("cndgsstesterr")
    }, t.src = "//gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
  }

  function s() {
    var t = new Image;
    t.onload = function () {
      r("cndidctestsuc")
    }, t.onerror = function () {
      r("cndidctesterr")
    }, t.src = "//m.baidu.com/logo.gif"
  }

  function a() {
    var t = new Image;
    t.onload = function () {
      r("cndss0bdtestsuc")
    }, t.onerror = function () {
      r("cndss0bdtesterr")
    }, t.src = "//ss0.baidu.com/5bd1bjqh_Q23odCf/static/wiseindex/img/w_icon2.png?ran"
  }

  function r(t, e) {
    if (t) {
      e = e || {}, e.st = t, e.fm = "inlo";
      var i = "&terminal=pc";
      for (var n in e) i += "&" + n + "=" + e[n];
      var o = new Image;
      o.src = bds.util.domain.get(l + i)
    }
  }

  var c, d = "", l = "http://sestat.baidu.com/cm.gif?type=cdnmonitor",
    u = ["https://sptidchk.baidu.com/s.gif", "https://sptidcsfo.baidu.com/s.gif", "https://sptidcjp.baidu.com/s.gif", "https://sptidcsin.baidu.com/s.gif"];
  location.protocol.indexOf("https") > -1 && $(window).on("swap_dom_ready", function () {
    t()
  }).on("swap_end", function () {
    e()
  }), "70" == bds.comm.bfe_sample && $(window).on("swap_end", function () {
    d = 1e3 * (new Date).getTime() + Math.round(1e3 * Math.random()) - 149e13, i()
  })
}(), !function () {
  var t, e,
    i = bds && bds.util && bds.util.domain && bds.util.domain.get("http://sensearch.baidu.com/sensearch/selecttext");
  $(window).one("swap_end", function () {
    bds.comm.upn && bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("mousedown", function (i) {
      t && 0 == $(i.target).closest(t.getDom()).length && (t.getDom().hide(), e && e.abort())
    }).on("mouseup", function (n) {
      var o, s, a, r, c;
      if (!t || !$(n.target).closest(t.getDom()).length) try {
        setTimeout(function () {
          if (window.getSelection) {
            if (o = window.getSelection(), 0 == o.rangeCount) return;
            s = o.getRangeAt(0), a = s.getBoundingClientRect(), r = $.trim(o.toString()), c = $("#text" == s.commonAncestorContainer.nodeName ? s.commonAncestorContainer.parentNode : s.commonAncestorContainer)
          } else document.selection && (o = document.selection.createRange(), s = o, a = s.getBoundingClientRect(), r = $.trim(o.text.toString()), c = $(s.parentElement()));
          if (r && r.length > 1 && c.closest("#content_left .result .c-abstract,#content_left .result .t").length) {
            e && e.abort();
            var n = /[^(\u4E00-\u9FA5)]+/i;
            if (!n.test(r)) return;
            e = $.ajax({
              url: i, dataType: "jsonp", jsonp: "cb", timeout: 5e3, data: {q: r}, success: function (e) {
                var i = "";
                if (e && e.data && e.data.type && e.data.to && "zh" == e.data.to && e.data.result && e.data.result.length && e.data.result != r) if (1 == e.data.type) for (var n = e.data.result, o = 0, s = Math.min(n.length, 2); s > o; o++) i += (0 == o ? "" : "<br/>") + (n[o].pre ? n[o].pre + "&nbsp;" : ""), i += n[o].cont ? $.subByte(n[o].cont, 46 * (1 == s ? 2 : 1) + 1) : "";
                else if (2 == e.data.type) {
                  var c = e.data.result.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
                  i = '<span style="color:#999">译：</span>' + c
                }
                if (i) {
                  t = t || new bds.se.tip({
                    target: $("body"),
                    mode: "none",
                    content: '<div class="translateContent"></div>',
                    align: "left",
                    arrow: {has: 1, offset: 10}
                  });
                  var d = t.getDom();
                  d.find(".translateContent").html('<p style="margin:0 8px">' + i + "</p>"), d.css({
                    top: a.bottom + $(window).scrollTop() + 8,
                    left: (a.left + a.right) / 2 + $(window).scrollLeft() - 20
                  }).show(), ns_c({
                    rsv_trans_type: "showresult",
                    rsv_trans_st: encodeURIComponent(r),
                    rsv_qid: bds.comm.qid || ""
                  })
                }
              }
            })
          }
        }, 0)
      } catch (n) {
      }
    })
  }), $(window).on("swap_begin", function () {
    t = null, e && e.abort()
  })
}(), !function () {
  function t(t) {
    return t = o(t), t.attr("id") || t.attr("data-click") && $.parseJSON(t.attr("data-click")).rsv_srcid || t.attr("class") || "-1"
  }

  function e(t) {
    var e = o(t), i = e.clone();
    i.unbind(), i.children(".fb-list-container").remove(), i.children(".fb-list-container-first").remove(), i.children(".fb-hint-tip").remove(), i.removeAttr("style"), i.css("margin", "0"), t.append(i), t.addClass("fb-list-container-hover")
  }

  function i(t) {
    t.empty(), t.removeClass("fb-list-container-hover")
  }

  function n() {
    $(".fb-hint-tip").remove(), $(".fb-list-container-first").remove(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(), bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.destory(), bds.se.ShortCut.ldialog = 0, bds.se.ShortCut.rdialog = 0, $(".fb-mask").remove(), $(".fb-list-container").remove()
  }

  function o(t) {
    return t.closest(t.closest("#rs").length ? "#rs" : t.closest("#con-ar").length ? ".result-op" : "#content_left > div")
  }

  function s() {
    var t = $("#content_left > div");
    t.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), $("#content_left > div").css("overflow", "visible"), $(".leftBlock .fb-list-container").remove(), $(".hit_top_new .fb-list-container").remove(), t.each(function () {
      $(this).find(".fb-list-container").css("width", $(this).width() + 20), $(this).find(".fb-list-container").css("height", $(this).height() + 10)
    }), $(".c-container").first().append("<div class='fb-list-container-first' data-html2canvas-ignore='true'></div>"), $(".c-container").first().find(".fb-list-container-first").css("width", $(".c-container").first().width() + 20), $(".c-container").first().find(".fb-list-container-first").css("height", $(".c-container").first().height() + 10), $(".c-container").first().append('<div class="fb-hint-tip" data-html2canvas-ignore="true"><span>鼠标点击，可对单条结果进行反馈</span></div>');
    var e = $("#rs");
    e.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), e.find(".fb-list-container").css("width", e.width() + 20), e.find(".fb-list-container").css("height", e.height() + 10);
    var i = $("#con-ar .result-op");
    i.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), i.each(function () {
      $(this).find(".fb-list-container").css("width", $(this).width() + 20), $(this).find(".fb-list-container").css("height", $(this).height() + 10)
    })
  }

  function a(t) {
    var e = "";
    e = e + '<input type="hidden" class="fb-select-value"  name="type" value="' + t[0].key + '">', e = e + '<div class="fb-select"><div class="fb-select-shorter"><div class="fb-type-selected">' + t[0].value + '<div class="fb-select-icon"></div></div><div class="fb-type-container">';
    for (var i = 0; i < t.length; i++) e = e + "<div class='fb-type-item' value='" + t[i].key + "'>" + t[i].value + "</div>";
    return e += "</div></div></div>"
  }

  function r(t, e, i, o) {
    this.init = function () {
      var i = new Date;
      return this.title = t, this.query = decodeURIComponent(bds.comm.query), this.srcid = e && e.attr("srcid") || "-1", this.tpl = e && e.attr("tpl") || "", this.url = window.location.href || "", this.time = i.getFullYear() + "/" + (i.getMonth() + 1) + "/" + i.getDate() + " " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds(), this.username = bds.comm.username || "", this.order = e && e.attr("id") || "", this.entry = "1", this.build(), this.bindEvent(), this.render(), this
    }, this.build = function () {
      var t = "";
      if ("sug" === o) {
        var e = "<div class='fb-list-wrapper'>";
        i.forEach(function (t) {
          e += "<div class='fb-checkbox'><div style='font-size: 13px;color:#333;float: left'>" + t + "</div><span style='position: absolute;right:0;width: 11px;height: 11px;border: 1px solid #ccc;top:10px;'><i class='fb-selected'></i></span></div>"
        }), e += "</div>";
        var n = e,
          s = '<div class="fb-textarea fb-content-block fb-textarea-sug"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="请详细说明，以便于我们定位和解决问题，如：内容有误/定位地点不准确等（字数限制在300字以内）"></textarea></div>'
      } else var r = [{key: "27642", value: "申请删除提示词"}, {key: "27464", value: "内容或图片陈旧"}, {
          key: "27465",
          value: "变形、错乱、乱码等问题"
        }, {key: "27469", value: "页面结果与搜索词无关"}, {key: "27467", value: "其他问题及建议"}], n = a(r),
        s = '<div class="fb-textarea fb-content-block"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="请详细说明，以便于我们定位和解决问题，如：内容有误/定位地点不准确等（字数限制在300字以内）"></textarea></div>';
      var c = "", d = "";
      bds.se.ShortCut.uploadImg && "sug" !== o && (c = '<div class="fb-block fb-cut-block" ><div class="fb-cut-input c-icon c-icon-success"  ></div><span class="fb-shangchuan">包含屏幕截图</span></div>', d = '<div class="fb-block fb-canvas-block"><img src=""/><input type="hidden" name="img_base64" class="fb-img"></div>');
      var l = '<div class="fb-block fb-email-block"><input type="text" class="fb-email"  name="email" maxlength="100" placeholder="联系邮箱（留下联系邮箱，以便我们快速反馈）"></div>',
        u = "搜索结果反馈";
      "sug" === o && (u = "搜索联想词反馈"), t = '<div class="fb-modal "><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">' + u + '</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-action"><form id="fb_right_post_form" enctype="multipart/form-data" onsubmit = "return false;">' + n + s + c + d + l + '</form> </div><div class="fb-hint fb-hint-no-content"><span>请填写描述反馈</span></div><div class="fb-hint fb-hint-no-email"><span>请留下您的联系方式</span></div><div class="fb-hint fb-hint-error-email"><span>邮箱格式不正确</span></div><div class="fb-footer"><div class="fb-btn fb-btn-primary" id="fb_right_post_save">提交反馈</div></div><div class="fb-guide fb-guide-block"><span><a style="text-decoration:underline;" href="http://ufo.baidu.com/listen/myhistory?product_line=20018&appid=215622&type=commonQA" target="_blank">常见解决办法</a></span><span><a style="text-decoration:underline;float:right;margin-right: -5px;" href="http://ufo.baidu.com/listen/myhistory?type=myhistory&product_line=20018&appid=215622" target="_blank">我的反馈</a></span></div></div></div><div class="fb-mask" style="display:none"  data-html2canvas-ignore="true"></div><div class="fb-vertify" style="display:none"><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">安全验证</h3></div><div id="fb_vertify"></div></div><div class="fb-success" style="display:none" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">非常感谢</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-success-text fb-success-text-title"><i class="c-icon c-icon-right-empty"></i>提交成功</div><div class="fb-success-text">感谢您的宝贵意见</div></div></div>';
      var m = document.createElement("div");
      m.id = "fb_baidu_right_dialog", m.className = "fb-feedback-right-dialog", m.className = "fb-feedback-right-dialog", m.setAttribute("data-html2canvas-ignore", "true"), m.innerHTML = t, this.dom = m
    }, this.bindEvent = function () {
      var t = this;
      $(this.dom).find(".fb-close").on("click", function () {
        n()
      }), $(this.dom).find("#fb_right_post_save").on("click", function () {
        $(t.dom).find(".fb-textarea textarea").val() ? -1 == [27642].indexOf(Number($(t.dom).find(".fb-select-value").val())) || $(t.dom).find(".fb-email").val() ? $(t.dom).find(".fb-email").val() && !/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test($(t.dom).find(".fb-email").val()) ? ($(t.dom).find(".fb-hint-error-email").css("display", "block"), setTimeout(function () {
          $(t.dom).find(".fb-hint-error-email").css("opacity", "1"), setTimeout(function () {
            $(t.dom).find(".fb-hint-error-email").removeAttr("style")
          }, 1500)
        }, 50)) : ($(t.dom).find(".fb-modal ").css("display", "none"), $(t.dom).find(".fb-vertify").css("display", "block"), $.getScript("https://wappass.baidu.com/static/machine/js/api/mkd.js", function () {
          var e;
          if (window.PassMachine && window.PassMachine.mkd) {
            var i = window.PassMachine.mkd;
            e = new i({
              type: "spin",
              id: "fb_vertify",
              ak: "dabac7bfca28a1c17b092fc071d0f56c",
              verifySuccessFn: function (e) {
                t.post(e.ds, e.tk)
              }
            }), e.initVcode()
          }
        })) : ($(t.dom).find(".fb-hint-no-email").css("display", "block"), setTimeout(function () {
          $(t.dom).find(".fb-hint-no-email").css("opacity", "1"), setTimeout(function () {
            $(t.dom).find(".fb-hint-no-email").removeAttr("style")
          }, 1500)
        }, 50)) : ($(t.dom).find(".fb-hint-no-content").css("display", "block"), setTimeout(function () {
          $(t.dom).find(".fb-hint-no-content").css("opacity", "1"), setTimeout(function () {
            $(t.dom).find(".fb-hint-no-content").removeAttr("style")
          }, 1500)
        }, 50))
      }), $(this.dom).find(".fb-cut-input").on("click", function () {
        $(t.dom).find(".fb-cut-input").hasClass("c-icon") ? ($(t.dom).find(".fb-cut-input").removeClass("c-icon"), $(t.dom).find(".fb-cut-input").removeClass("c-icon-success"), $(t.dom).find(".fb-canvas-block").css("display", "none")) : ($(t.dom).find(".fb-cut-input").addClass("c-icon"), $(t.dom).find(".fb-cut-input").addClass("c-icon-success"), $(t.dom).find(".fb-canvas-block").css("display", "block"))
      }), $(this.dom).find(".fb-type-selected").on("click", function () {
        "block" == $(t.dom).find(".fb-type-container").css("display") ? $(t.dom).find(".fb-type-container").hide() : $(t.dom).find(".fb-type-container").show()
      }), $(this.dom).find(".fb-checkbox").on("click", function (t) {
        "block" == $(t.currentTarget).find(".fb-selected").css("display") ? ($(t.currentTarget).find(".fb-selected").css("display", "none"), $(t.currentTarget).removeClass("fb-checkbox-selected")) : ($(t.currentTarget).find(".fb-selected").css("display", "block"), $(t.currentTarget).addClass("fb-checkbox-selected"))
      }), $(this.dom).find(".fb-type-item").on("click", function (e) {
        $(t.dom).find(".fb-type-container").hide(), $(t.dom).find(".fb-type-selected").html($(e.currentTarget).text() + "<div class='fb-select-icon'></div>"), $(t.dom).find(".fb-select-value").val($(e.currentTarget).attr("value"))
      }), $(this.dom).find(".fb-des-content").on("click", function () {
        $(".c-container").first().children(".fb-hint-tip").remove(), $(".c-container").first().children(".fb-list-container-first").remove()
      })
    }, this.render = function () {
      $("body").append(this.dom)
    }, this.grayed = function (t) {
      t ? $(this.dom).css("visibility", "hidden") : $(this.dom).removeAttr("style")
    }, this.destory = function () {
      $(this.dom).remove(), $(document).off("scroll.feedback")
    }, this.post = function (t, e) {
      var i = this;
      this.content = $(this.dom).find(".fb-des-content").val(), this.type = $(this.dom).find(".fb-select-value").val(), this.email = $(this.dom).find(".fb-email").val();
      var s = $(this.dom).find(".fb-checkbox.fb-checkbox-selected");
      sugText = [], s.each(function (t, e) {
        sugText.push($(e).find("div").text())
      }), this.sugText = sugText.join("&");
      var a = 26138, r = i.type;
      ("27642" == this.type || "27643" == this.type || "33081" == this.type) && (a = this.type, r = 0), data = "sug" === o ? {
        product_type: "27642",
        sug_text: i.sugText,
        content: this.content,
        query: this.query,
        time: this.time,
        srcid: this.srcid,
        url: this.url,
        entry: "3",
        platform: "pc",
        ds: t,
        token: e
      } : {
        product_type: a,
        content: this.content,
        type: r,
        img_base64: bds.se.ShortCut.img_base64,
        email: this.email,
        query: this.query,
        srcid: this.srcid,
        tpl: this.tpl,
        url: this.url,
        time: this.time,
        username: this.username,
        order: this.order,
        entry: this.entry,
        platform: "pc",
        ds: t,
        token: e
      }, bds.se.ShortCut.uploadImg ? $.post(bds.se.ShortCut.domain, data).success(function (t) {
        "Success" == jQuery.parseJSON(t).status
      }).error(function () {
      }) : $.ajax({url: bds.se.ShortCut.domain, dataType: "jsonp", data: data, jsonp: "cb1"}).success(function (t) {
        "Success" == t.status
      }).error(function () {
      }), $(this.dom).find(".fb-vertify").remove(), $(this.dom).find(".fb-mask").remove(), $(this.dom).find(".fb-success").css("display", "block"), setTimeout(function () {
        n()
      }, 1e3)
    }, this.init()
  }

  function c(t, e) {
    this.init = function () {
      var e = new Date;
      if (this.query = decodeURIComponent(bds.comm.query), this.srcid = t && t.attr("srcid") || "-1", this.tpl = t && t.attr("tpl") || "", this.cururl = t && t.find("a").eq(0).attr("href") || "", this.url = window.location.href || "", this.time = e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds(), this.username = bds.comm.username || "", t) if (t.closest("#con-ar").length) {
        this.order = "con-ar";
        var i = [{key: "27642", value: "申请删除提示词"}, {key: "33081", value: "侵犯个人隐私与权益"}, {
          key: "27464",
          value: "内容或图片陈旧"
        }, {key: "27465", value: "变形、错乱、乱码等问题"}, {key: "27469", value: "页面结果与搜索词无关"}, {key: "27467", value: "其他问题及建议"}];
        this.content_tips_div = a(i)
      } else if (t.attr("id") && "rs" == t.attr("id")) {
        this.order = "rs";
        var i = [{key: "27642", value: "申请删除提示词"}, {key: "33081", value: "侵犯个人隐私与权益"}];
        this.content_tips_div = a(i)
      } else if (t.attr("tpl") && "se_com_default" != t.attr("tpl")) {
        this.order = t.attr("id") || "-1";
        var i = [{key: "27464", value: "内容或图片陈旧"}, {key: "33081", value: "侵犯个人隐私与权益"}, {
          key: "27465",
          value: "变形、错乱、乱码等问题"
        }, {key: "27466", value: "这条结果与搜索词无关"}, {key: "27467", value: "其他问题及建议"}];
        this.content_tips_div = a(i)
      } else if (t.attr("tpl")) {
        this.order = t.attr("id") || "-1";
        var i = [{key: "27643", value: "申请删除或更新这条信息"}, {key: "33081", value: "侵犯个人隐私与权益"}, {
          key: "27464",
          value: "内容或图片陈旧"
        }, {key: "27465", value: "变形、错乱、乱码等问题"}, {key: "27466", value: "这条结果与搜索词无关"}, {key: "27467", value: "其他问题及建议"}];
        this.content_tips_div = a(i)
      } else {
        this.order = "ec";
        var i = [{key: "27470", value: "推广信息侵权"}, {key: "33081", value: "侵犯个人隐私与权益"}, {
          key: "27471",
          value: "推广信息质量差"
        }, {key: "27472", value: "推广信息与搜索词无关"}, {key: "27473", value: "其他问题及产品建议"}];
        this.content_tips_div = a(i)
      }
      return this.entry = "2", this.top = t.offset().top - 4, this.left = t.closest("#content_right").length ? t.offset().left - 390 - 23 : t.offset().left + t.width() + 30, this.build(), this.bindEvent(), this.render(), this
    }, this.build = function () {
      var t = "",
        e = '<div class="fb-textarea fb-content-block"><textarea maxlength="400" class ="fb-des-content" name="content" placeholder="请详细说明，以便于我们定位和解决问题，如：内容有误/定位地点不准确等（字数限制在300字以内）"></textarea></div>',
        i = '<div class="fb-block fb-email-block"><input type="text" class="fb-email" maxlength="100" name="email" placeholder="联系邮箱（留下联系邮箱，以便我们快速反馈）"></div>',
        n = '<div class="fb-block fb-photo-block" upload_num=0><p class="fb-photo-block-title">请上传照片及身份证照片<span class="fb-photo-block-title-ex"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_icon_show_6016362.png">示例<span></p><div class="fb-photo-sub-block"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_up_56db4dd.png" class="fb-photo-block-upinfo"></div><div class="fb-block fb-photo-update-block fb-photo-update-hide"><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><div class="fb-photo-update-item-block"><img src="" class="fb-photo-update-item-show-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt="" class="fb-photo-update-item-close"></div><input type="file"  name="img_base64_1" accept="image/*;capture=camera"><input type="file"  name="img_base64_2" accept="image/*;capture=camera"><input type="file"  name="img_base64_3" accept="image/*;capture=camera"><input type="file"  name="img_base64_4" accept="image/*;capture=camera"></div></div>',
        o = '<div class="fb-photo-block-example"><div class="fb-photo-block-example-header"><p>示例</p><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_close_icon_682280b.png" alt=""></div> <div class="fb-photo-block-example-title"><p class="fb-photo-block-example-title-big">身份证正反面照示例</p><p class="fb-photo-block-example-title-small">身份证照片需要信息清晰,仅仅用于审核，百度会保证隐私安全</p></div><div class="fb-photo-block-example-img"><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_sfz_29991ea.png" alt=""><img src="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/feedback_sfz1_6f3f07a.png" alt=""></div></div>';
      t = '<div class="fb-modal" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">意见反馈</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-action"><form id="fb_right_post_form" enctype="multipart/form-data" method="post" onsubmit = "return false;">' + this.content_tips_div + e + i + n + '</form> </div><div class="fb-hint fb-hint-no-content"><span>请填写描述反馈</span></div><div class="fb-hint fb-hint-error-photo"><span>请提交图片</span></div><div class="fb-hint fb-hint-no-email"><span>请留下您的联系方式</span></div><div class="fb-hint fb-hint-error-email"><span>邮箱格式不正确</span></div><div class="fb-footer"><div class="fb-btn fb-btn-primary" id="fb_list_post_save">提交反馈</div></div><div class="fb-guide fb-guide-block"><span><a style="text-decoration:underline;" href="http://ufo.baidu.com/listen/myhistory?product_line=20018&appid=215622&type=commonQA" target="_blank">常见解决办法</a></span><span><a style="text-decoration:underline;float:right;margin-right: -5px;" href="http://ufo.baidu.com/listen/myhistory?type=myhistory&product_line=20018&appid=215622" target="_blank">我的反馈</a></span></div></div></div><div class="fb-vertify" style="display:none"><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">安全验证</h3></div><div id="fb_vertify_list"></div></div><div class="fb-success" style="display:none" ><div class="fb-header" id="fb_dialog_header" unselectable="on" onselectstart="return false;"><a class="fb-close" id="fb_close_x">×</a><h3  class="fb-header-tips">非常感谢</h3></div><div class="fb-body" id="fb_qa_feedback_body"><div class="fb-success-text fb-success-text-title"><i class="c-icon c-icon-right-empty"></i>提交成功</div><div class="fb-success-text">感谢您的宝贵意见</div></div></div>' + o;
      var s = document.createElement("div");
      s.id = "fb_baidu_list_dialog", s.className = "fb-feedback-list-dialog", s.setAttribute("data-html2canvas-ignore", "true"), s.innerHTML = t, this.dom = s, $(this.dom).css("top", this.top), $(this.dom).css("left", this.left), "con-ar" == this.order && $(this.dom).attr("class", "fb-feedback-list-dialog-left")
    }, this.bindEvent = function () {
      var t = this;
      $(this.dom).find(".fb-close").on("click", function () {
        t.destory(), i($(".fb-list-container")), bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0), bds.se.ShortCut.rdialog || n()
      }), $(this.dom).find("#fb_list_post_save").on("click", function () {
        $(t.dom).find(".fb-textarea textarea").val() ? -1 == [27642, 27643].indexOf(Number($(t.dom).find(".fb-select-value").val())) || $(t.dom).find(".fb-email").val() ? $(t.dom).find(".fb-email").val() && !/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test($(t.dom).find(".fb-email").val()) ? ($(t.dom).find(".fb-hint-error-email").css("display", "block"), setTimeout(function () {
          $(t.dom).find(".fb-hint-error-email").css("opacity", "1"), setTimeout(function () {
            $(t.dom).find(".fb-hint-error-email").removeAttr("style")
          }, 1500)
        }, 50)) : ($(t.dom).find(".fb-modal ").css("display", "none"), $(t.dom).find(".fb-vertify").css("display", "block"), $.getScript("https://wappass.baidu.com/static/machine/js/api/mkd.js", function () {
          var e;
          if (window.PassMachine && window.PassMachine.mkd) {
            var i = window.PassMachine.mkd;
            e = new i({
              type: "spin",
              id: "fb_vertify_list",
              ak: "dabac7bfca28a1c17b092fc071d0f56c",
              verifySuccessFn: function (e) {
                t.post(e.ds, e.tk)
              }
            }), e.initVcode()
          }
        })) : ($(t.dom).find(".fb-hint-no-email").css("display", "block"), setTimeout(function () {
          $(t.dom).find(".fb-hint-no-email").css("opacity", "1"), setTimeout(function () {
            $(t.dom).find(".fb-hint-no-email").removeAttr("style")
          }, 1500)
        }, 50)) : ($(t.dom).find(".fb-hint-no-content").css("display", "block"), setTimeout(function () {
          $(t.dom).find(".fb-hint-no-content").css("opacity", "1"), setTimeout(function () {
            $(t.dom).find(".fb-hint-no-content").removeAttr("style")
          }, 1500)
        }, 50))
      }), $(this.dom).find(".fb-type-selected").on("click", function () {
        "block" == $(t.dom).find(".fb-type-container").css("display") ? $(t.dom).find(".fb-type-container").hide() : $(t.dom).find(".fb-type-container").show()
      }), $(this.dom).find(".fb-type-item").on("click", function (e) {
        $(t.dom).find(".fb-type-container").hide(), $(t.dom).find(".fb-type-selected").html($(e.currentTarget).text() + "<div class='fb-select-icon'></div>"), $(t.dom).find(".fb-select-value").val($(e.currentTarget).attr("value")), 33081 == $(e.currentTarget).attr("value") ? $(t.dom).find(".fb-photo-block").css("display", "block") : $(t.dom).find(".fb-photo-block").css("display", "none")
      }), $(this.dom).find(".fb-photo-sub-block").on("click", function () {
        $(this).addClass("fb-photo-sub-block-hide"), $(t.dom).find(".fb-photo-update-hide").removeClass("fb-photo-update-hide"), $(t.dom).find(".fb-photo-update-hide").removeClass("fb-photo-update-hide")
      }), $(this.dom).find(".fb-photo-update-item-block").on("click", function () {
        var e = $(t.dom), i = $(this), n = $(this).index(),
          o = $(t.dom).find(".fb-photo-update-block").find("input").get(n);
        o.click(), $(o).on("change", function (t) {
          var n = o.files[0], s = n.type;
          if (s && ("image/png" == s || "image/jpg" == s || "image/jpeg" == s || "image/jpeg" == s) && $(t.currentTarget).val() && n.size < 2097152) {
            var a = new FileReader;
            a.addEventListener("load", function () {
              i.find(".fb-photo-update-item-show-img").attr("src", a.result), i.find(".fb-photo-update-item-close").css("display", "block"), i.find(".fb-photo-update-item-show-img").css("display", "block");
              var t = e.find(".fb-photo-block"), n = t.attr("upload_num");
              t.attr("upload_num", Number(n) + 1)
            }, !1), a.readAsDataURL(n)
          }
        })
      }), $(this.dom).find(".fb-photo-update-item-close").on("click", function (e) {
        var i = $(t);
        e.stopPropagation();
        var n = $(this).parent(".fb-photo-update-item-block").index();
        $(this).siblings("img").attr("src", ""), $(".fb-photo-update-block").find("input").eq(n).val(""), $(this).css("display", "none"), $(this).siblings("img").css("display", "none");
        var o = i.find(".fb-photo-block"), s = o.attr("upload_num");
        o.attr("upload_num", Number(s) + 1)
      }), $(this.dom).find(".fb-photo-block-title-ex").on("click", function (e) {
        e.stopPropagation(), $(t.dom).find(".fb-modal").css("display", "none"), $(t.dom).find(".fb-photo-block-example").css("display", "block")
      }), $(this.dom).find(".fb-photo-block-example-header img").on("click", function (e) {
        e.stopPropagation(), $(t.dom).find(".fb-modal").css("display", "block"), $(t.dom).find(".fb-photo-block-example").css("display", "none")
      })
    }, this.render = function () {
      $("body").append(this.dom)
    }, this.destory = function () {
      $(this.dom).remove()
    }, this.post = function (t, i) {
      var o = this;
      this.content = $(this.dom).find(".fb-des-content").val(), this.type = $(this.dom).find(".fb-select-value").val(), this.email = $(this.dom).find(".fb-email").val();
      var s = $(this.dom).find(".fb-photo-block").find(".fb-photo-update-item-show-img");
      bds.se.ShortCut.get_Snapshot_list(-bds.se.ShortCut.curListDom.offset().left, -bds.se.ShortCut.curListDom.offset().top, bds.se.ShortCut.curListDom.width() + 20, bds.se.ShortCut.curListDom.height() + 12, function () {
        var n = 26138, a = o.type;
        ("27642" == o.type || "27643" == o.type || "33081" == o.type) && (n = o.type, a = 0), data = {
          product_type: n,
          content: o.content,
          type: a,
          img_base64: bds.se.ShortCut.img_base64_list,
          email: o.email,
          query: o.query,
          srcid: o.srcid,
          tpl: o.tpl,
          url: o.url,
          time: o.time,
          username: o.username,
          order: o.order,
          entry: o.entry,
          platform: "pc",
          cururl: o.cururl,
          img_base64_1: s.eq(0).attr("src"),
          img_base64_2: s.eq(1).attr("src"),
          img_base64_3: s.eq(2).attr("src"),
          img_base64_4: s.eq(3).attr("src"),
          ds: t,
          token: i
        }, e && (data.ala = 1), bds.se.ShortCut.uploadImg ? $.post(bds.se.ShortCut.domain, data).success(function (t) {
          "Success" == jQuery.parseJSON(t).status
        }).error(function () {
        }) : $.ajax({url: bds.se.ShortCut.domain, dataType: "jsonp", data: data, jsonp: "cb1"}).success(function (t) {
          "Success" == t.status
        }).error(function () {
        })
      }), $(this.dom).find(".fb-vertify").remove(), $(this.dom).find(".fb-mask").remove(), $(this.dom).find(".fb-success").css("display", "block"), setTimeout(function () {
        n()
      }, 1e3)
    }, this.init()
  }

  bds && bds.se && (bds.se.ShortCut = {
    base_url_path: "http://f3.baidu.com",
    up_file: !1,
    is_feedbacking: !1,
    product_id: 0,
    entrance_id: 0,
    send_img: !1,
    img_data: "",
    onlyUpFile: !1,
    pro_data: "",
    scrollTop: 0,
    ldiaInf: {},
    rdiaInf: {},
    canvas_block_height: 0,
    key: 0,
    domain: bds.util.domain.get("api.open.baidu.com") + "/pae/common/api/feedback",
    img_base64: "",
    img_base64_list: "",
    initRightBar: function () {
      this.html2canvas(), this._getCss(), this._identifyCanvas() && this._identifyCors() ? (bds.se.ShortCut.uploadImg = !0, this.get_Snapshot()) : bds.se.ShortCut.uploadImg = !1
    },
    initSugBar: function (t) {
      $(window).scrollTop(0), $(".fb-mask").length > 0 && n(), bds.se.ShortCut.rdialog = new r("", "", t, "sug"), $("#container").append("<div class='fb-mask'></div>"), $(".fb-mask").width($("body").width()), $(".fb-mask").height($("#wrapper_wrapper").height() > $(window).height ? $("#wrapper_wrapper").height() : $(window).height()), $(".fb-mask").on("click", function () {
        n(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory()
      })
    },
    _getCss: function () {
      bds.util.addStyle("#content_left > div,#rs,#con-ar .result-op{position: relative;}")
    },
    _identifyCanvas: function () {
      try {
        var t = document.createElement("canvas").getContext("2d");
        return t = null, !0
      } catch (e) {
        return !1
      }
    },
    _identifyCors: function () {
      var t = new XMLHttpRequest;
      return "withCredentials" in t
    },
    init_ala: function (t) {
      this.html2canvas(), bds.se.ShortCut.uploadImg = this._identifyCanvas() && this._identifyCors() ? !0 : !1, $("#container").append("<div class='fb-mask' data-html2canvas-ignore='true'></div>"), t.append("<div class='fb-list-container' data-html2canvas-ignore='true'></div>"), t.find(".fb-list-container").css("width", t.width() + 20), t.find(".fb-list-container").css("height", t.height() + 10), e(t.find(".fb-list-container")), bds.se.ShortCut.ldialog = new c(t, 1), bds.se.ShortCut.curListDom = t.find(".fb-list-container"), $(".fb-mask").on("click", function () {
        n(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory()
      })
    },
    init_shade: function () {
      $("#container").append("<div class='fb-mask' data-html2canvas-ignore='true'></div>"), $(".fb-mask").width($("body").width()), $(".fb-mask").height($("#wrapper_wrapper").height() > $(window).height ? $("#wrapper_wrapper").height() : $(window).height()), s(), $(".fb-list-container").hover(function (t) {
        o($(t.currentTarget)), $(t.currentTarget).children().length || e($(t.currentTarget))
      }, function (e) {
        t($(e.currentTarget)) != bds.se.ShortCut.key && i($(e.currentTarget))
      }), $(".fb-list-container").on("click", function (n) {
        $(".c-container").first().children(".fb-hint-tip").remove(), $(".c-container").first().children(".fb-list-container-first").remove(), bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(), i($(".fb-list-container")), t($(n.currentTarget)) == bds.se.ShortCut.key ? (bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0)) : (bds.se.ShortCut.key = t($(n.currentTarget)), bds.se.ShortCut.curListDom = $(n.currentTarget), bds.se.ShortCut.ldialog = new c(o($(n.currentTarget))), bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(1), e($(n.currentTarget))), n.stopPropagation(), n.preventDefault()
      }), $(".fb-mask").on("click", function () {
        bds.se.ShortCut.ldialog && bds.se.ShortCut.ldialog.destory(), bds.se.ShortCut.key = 0, bds.se.ShortCut.rdialog && bds.se.ShortCut.rdialog.grayed(0), i($(".fb-list-container"))
      })
    },
    get_Snapshot: function () {
      $(window).scrollTop(0);
      var t = this;
      bds.se.ShortCut.rdialog = new r, t.init_shade(), $(".fb-canvas-block").addClass("c-loading"), html2canvas(document.body, {
        proxy: bds.util.domain.get("f3.baidu.com") + "/getProxyImage.php", onrendered: function (e) {
          $(".fb-canvas-block").removeClass("c-loading");
          var i = document.createElement("canvas");
          i.width = e.width, i.height = $("body").height();
          var n = i.getContext("2d");
          n.drawImage(e, 0, 0), bds.se.ShortCut.img_base64 = i.toDataURL("image/png"), $(".fb-canvas-block img").attr("src", i.toDataURL("image/png")), setTimeout(function () {
            t.canvas_block_height = $(".fb-canvas-block img").height()
          }, 50), $(document).on("scroll.feedback", function () {
            var e = $(window).scrollTop(), i = $(document).height(), n = $(window).height();
            scrollPercent = e / (i - n), $(".fb-canvas-block img").css("top", -(t.canvas_block_height - 172) * scrollPercent)
          })
        }
      })
    },
    get_Snapshot_list: function (t, e, i, n, o) {
      html2canvas(document.body, {
        proxy: bds.util.domain.get("f3.baidu.com") + "/getProxyImage.php",
        onrendered: function (s) {
          var a = document.createElement("canvas");
          a.width = i, a.height = n;
          var r = a.getContext("2d");
          r.drawImage(s, t, e), bds.se.ShortCut.img_base64_list = a.toDataURL("image/png"), o()
        }
      })
    },
    html2canvas: function () {
      !function (t, e, i) {
        "use strict";

        function n(e) {
          d.logging && t.console && t.console.log && t.console.log(e)
        }

        function o(t, e, i, n, o, s) {
          var a, r, c, l, u = d.Util.getCSS(e, t, o);
          if (1 === u.length && (l = u[0], u = [], u[0] = l, u[1] = l), -1 !== u[0].toString().indexOf("%")) c = parseFloat(u[0]) / 100, r = i.width * c, "backgroundSize" !== t && (r -= (s || n).width * c); else if ("backgroundSize" === t) if ("auto" === u[0]) r = n.width; else if (u[0].match(/contain|cover/)) {
            var m = d.Util.resizeBounds(n.width, n.height, i.width, i.height, u[0]);
            r = m.width, a = m.height
          } else r = parseInt(u[0], 10); else r = parseInt(u[0], 10);
          return "auto" === u[1] ? a = r / n.width * n.height : -1 !== u[1].toString().indexOf("%") ? (c = parseFloat(u[1]) / 100, a = i.height * c, "backgroundSize" !== t && (a -= (s || n).height * c)) : a = parseInt(u[1], 10), [r, a]
        }

        function s(t, e) {
          var i = [];
          return {
            storage: i, width: t, height: e, clip: function () {
              i.push({type: "function", name: "clip", arguments: arguments})
            }, translate: function () {
              i.push({type: "function", name: "translate", arguments: arguments})
            }, fill: function () {
              i.push({type: "function", name: "fill", arguments: arguments})
            }, save: function () {
              i.push({type: "function", name: "save", arguments: arguments})
            }, restore: function () {
              i.push({type: "function", name: "restore", arguments: arguments})
            }, fillRect: function () {
              i.push({type: "function", name: "fillRect", arguments: arguments})
            }, createPattern: function () {
              i.push({type: "function", name: "createPattern", arguments: arguments})
            }, drawShape: function () {
              var t = [];
              return i.push({type: "function", name: "drawShape", arguments: t}), {
                moveTo: function () {
                  t.push({name: "moveTo", arguments: arguments})
                }, lineTo: function () {
                  t.push({name: "lineTo", arguments: arguments})
                }, arcTo: function () {
                  t.push({name: "arcTo", arguments: arguments})
                }, bezierCurveTo: function () {
                  t.push({name: "bezierCurveTo", arguments: arguments})
                }, quadraticCurveTo: function () {
                  t.push({name: "quadraticCurveTo", arguments: arguments})
                }
              }
            }, drawImage: function () {
              i.push({type: "function", name: "drawImage", arguments: arguments})
            }, fillText: function () {
              i.push({type: "function", name: "fillText", arguments: arguments})
            }, setVariable: function (t, e) {
              i.push({type: "variable", name: t, arguments: e})
            }
          }
        }

        function a(t) {
          return {zindex: t, children: []}
        }

        var r, c, d = {};
        d.Util = {}, d.Util.trimText = function (t) {
          return function (e) {
            return t ? t.apply(e) : ((e || "") + "").replace(/^\s+|\s+$/g, "")
          }
        }(String.prototype.trim), d.Util.parseBackgroundImage = function (t) {
          var e, i, n, o, s, a, r, c, d = " \r\n	", l = [], u = 0, m = 0, p = function () {
            e && ('"' === i.substr(0, 1) && (i = i.substr(1, i.length - 2)), i && c.push(i), "-" === e.substr(0, 1) && (o = e.indexOf("-", 1) + 1) > 0 && (n = e.substr(0, o), e = e.substr(o)), l.push({
              prefix: n,
              method: e.toLowerCase(),
              value: s,
              args: c
            })), c = [], e = n = i = s = ""
          };
          p();
          for (var f = 0, h = t.length; h > f; f++) if (a = t[f], !(0 === u && d.indexOf(a) > -1)) {
            switch (a) {
              case'"':
                r ? r === a && (r = null) : r = a;
                break;
              case"(":
                if (r) break;
                if (0 === u) {
                  u = 1, s += a;
                  continue
                }
                m++;
                break;
              case")":
                if (r) break;
                if (1 === u) {
                  if (0 === m) {
                    u = 0, s += a, p();
                    continue
                  }
                  m--
                }
                break;
              case",":
                if (r) break;
                if (0 === u) {
                  p();
                  continue
                }
                if (1 === u && 0 === m && !e.match(/^url$/i)) {
                  c.push(i), i = "", s += a;
                  continue
                }
            }
            s += a, 0 === u ? e += a : i += a
          }
          return p(), l
        }, d.Util.Bounds = function (t) {
          var e, i = {};
          return t.getBoundingClientRect ? (e = t.getBoundingClientRect(), i.top = e.top, i.bottom = e.bottom || e.top + e.height, i.left = e.left, i.width = e.width || e.right - e.left, i.height = e.height || e.bottom - e.top, i) : void 0
        }, d.Util.getCSS = function (t, n, o) {
          function s(e, i) {
            var n, o = t.runtimeStyle && t.runtimeStyle[e], s = t.style;
            return !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(i) && /^-?\d/.test(i) && (n = s.left, o && (t.runtimeStyle.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : i || 0, i = s.pixelLeft + "px", s.left = n, o && (t.runtimeStyle.left = o)), /^(thin|medium|thick)$/i.test(i) ? i : Math.round(parseFloat(i)) + "px"
          }

          var a, l = n.match(/^background(Size|Position)$/);
          if (r !== t && (c = e.defaultView.getComputedStyle(t, null)), a = c[n], l) {
            if (a = (a || "").split(","), a = a[o || 0] || a[0] || "auto", a = d.Util.trimText(a).split(" "), "backgroundSize" !== n || a[0] && !a[0].match(/cover|contain|auto/)) {
              if (a[0] = -1 === a[0].indexOf("%") ? s(n + "X", a[0]) : a[0], a[1] === i) {
                if ("backgroundSize" === n) return a[1] = "auto", a;
                a[1] = a[0]
              }
              a[1] = -1 === a[1].indexOf("%") ? s(n + "Y", a[1]) : a[1]
            }
          } else if (/border(Top|Bottom)(Left|Right)Radius/.test(n)) {
            var u = a.split(" ");
            u.length <= 1 && (u[1] = u[0]), u[0] = parseInt(u[0], 10), u[1] = parseInt(u[1], 10), a = u
          }
          return a
        }, d.Util.resizeBounds = function (t, e, i, n, o) {
          var s, a, r = i / n, c = t / e;
          return o && "auto" !== o ? c > r ^ "contain" === o ? (a = n, s = n * c) : (s = i, a = i / c) : (s = i, a = n), {
            width: s,
            height: a
          }
        }, d.Util.BackgroundPosition = function (t, e, i, n, s) {
          var a = o("backgroundPosition", t, e, i, n, s);
          return {left: a[0], top: a[1]}
        }, d.Util.BackgroundSize = function (t, e, i, n) {
          var s = o("backgroundSize", t, e, i, n);
          return {width: s[0], height: s[1]}
        }, d.Util.Extend = function (t, e) {
          for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
          return e
        }, d.Util.Children = function (t) {
          var e;
          try {
            e = t.nodeName && "IFRAME" === t.nodeName.toUpperCase() ? t.contentDocument || t.contentWindow.document : function (t) {
              var e = [];
              return null !== t && !function (t, e) {
                var n = t.length, o = 0;
                if ("number" == typeof e.length) for (var s = e.length; s > o; o++) t[n++] = e[o]; else for (; e[o] !== i;) t[n++] = e[o++];
                return t.length = n, t
              }(e, t), e
            }(t.childNodes)
          } catch (o) {
            n("html2canvas.Util.Children failed with exception: " + o.message), e = []
          }
          return e
        }, d.Util.Font = function () {
          var t = {};
          return function (e, n, o) {
            if (t[e + "-" + n] !== i) return t[e + "-" + n];
            var s, a, r, c = o.createElement("div"), d = o.createElement("img"), l = o.createElement("span"),
              u = "Hidden Text";
            return c.style.visibility = "hidden", c.style.fontFamily = e, c.style.fontSize = n, c.style.margin = 0, c.style.padding = 0, o.body.appendChild(c), d.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=", d.width = 1, d.height = 1, d.style.margin = 0, d.style.padding = 0, d.style.verticalAlign = "baseline", l.style.fontFamily = e, l.style.fontSize = n, l.style.margin = 0, l.style.padding = 0, l.appendChild(o.createTextNode(u)), c.appendChild(l), c.appendChild(d), s = d.offsetTop - l.offsetTop + 1, c.removeChild(l), c.appendChild(o.createTextNode(u)), c.style.lineHeight = "normal", d.style.verticalAlign = "super", a = d.offsetTop - c.offsetTop + 1, r = {
              baseline: s,
              lineWidth: 1,
              middle: a
            }, t[e + "-" + n] = r, o.body.removeChild(c), r
          }
        }(), function () {
          d.Generate = {};
          var t = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];
          d.Generate.parseGradient = function (e, i) {
            var n, o, s, a, r, c, d, l, u, m, p, f, h = t.length;
            for (o = 0; h > o && !(s = e.match(t[o])); o += 1) ;
            if (s) switch (s[1]) {
              case"-webkit-linear-gradient":
              case"-o-linear-gradient":
                if (n = {
                  type: "linear",
                  x0: null,
                  y0: null,
                  x1: null,
                  y1: null,
                  colorStops: []
                }, r = s[2].match(/\w+/g)) for (c = r.length, o = 0; c > o; o += 1) switch (r[o]) {
                  case"top":
                    n.y0 = 0, n.y1 = i.height;
                    break;
                  case"right":
                    n.x0 = i.width, n.x1 = 0;
                    break;
                  case"bottom":
                    n.y0 = i.height, n.y1 = 0;
                    break;
                  case"left":
                    n.x0 = 0, n.x1 = i.width
                }
                if (null === n.x0 && null === n.x1 && (n.x0 = n.x1 = i.width / 2), null === n.y0 && null === n.y1 && (n.y0 = n.y1 = i.height / 2), r = s[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (c = r.length, d = 1 / Math.max(c - 1, 1), o = 0; c > o; o += 1) l = r[o].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), l[2] ? (a = parseFloat(l[2]), a /= "%" === l[3] ? 100 : i.width) : a = o * d, n.colorStops.push({
                  color: l[1],
                  stop: a
                });
                break;
              case"-webkit-gradient":
                if (n = {
                  type: "radial" === s[2] ? "circle" : s[2],
                  x0: 0,
                  y0: 0,
                  x1: 0,
                  y1: 0,
                  colorStops: []
                }, r = s[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/), r && (n.x0 = r[1] * i.width / 100, n.y0 = r[2] * i.height / 100, n.x1 = r[3] * i.width / 100, n.y1 = r[4] * i.height / 100), r = s[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)) for (c = r.length, o = 0; c > o; o += 1) l = r[o].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/), a = parseFloat(l[2]), "from" === l[1] && (a = 0), "to" === l[1] && (a = 1), n.colorStops.push({
                  color: l[3],
                  stop: a
                });
                break;
              case"-moz-linear-gradient":
                if (n = {
                  type: "linear",
                  x0: 0,
                  y0: 0,
                  x1: 0,
                  y1: 0,
                  colorStops: []
                }, r = s[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), r && (n.x0 = r[1] * i.width / 100, n.y0 = r[2] * i.height / 100, n.x1 = i.width - n.x0, n.y1 = i.height - n.y0), r = s[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)) for (c = r.length, d = 1 / Math.max(c - 1, 1), o = 0; c > o; o += 1) l = r[o].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/), l[2] ? (a = parseFloat(l[2]), l[3] && (a /= 100)) : a = o * d, n.colorStops.push({
                  color: l[1],
                  stop: a
                });
                break;
              case"-webkit-radial-gradient":
              case"-moz-radial-gradient":
              case"-o-radial-gradient":
                if (n = {
                  type: "circle",
                  x0: 0,
                  y0: 0,
                  x1: i.width,
                  y1: i.height,
                  cx: 0,
                  cy: 0,
                  rx: 0,
                  ry: 0,
                  colorStops: []
                }, r = s[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), r && (n.cx = r[1] * i.width / 100, n.cy = r[2] * i.height / 100), r = s[3].match(/\w+/), l = s[4].match(/[a-z\-]*/), r && l) switch (l[0]) {
                  case"farthest-corner":
                  case"cover":
                  case"":
                    u = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.cy, 2)), m = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), p = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), f = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.cy, 2)), n.rx = n.ry = Math.max(u, m, p, f);
                    break;
                  case"closest-corner":
                    u = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.cy, 2)), m = Math.sqrt(Math.pow(n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), p = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.y1 - n.cy, 2)), f = Math.sqrt(Math.pow(n.x1 - n.cx, 2) + Math.pow(n.cy, 2)), n.rx = n.ry = Math.min(u, m, p, f);
                    break;
                  case"farthest-side":
                    "circle" === r[0] ? n.rx = n.ry = Math.max(n.cx, n.cy, n.x1 - n.cx, n.y1 - n.cy) : (n.type = r[0], n.rx = Math.max(n.cx, n.x1 - n.cx), n.ry = Math.max(n.cy, n.y1 - n.cy));
                    break;
                  case"closest-side":
                  case"contain":
                    "circle" === r[0] ? n.rx = n.ry = Math.min(n.cx, n.cy, n.x1 - n.cx, n.y1 - n.cy) : (n.type = r[0], n.rx = Math.min(n.cx, n.x1 - n.cx), n.ry = Math.min(n.cy, n.y1 - n.cy))
                }
                if (r = s[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (c = r.length, d = 1 / Math.max(c - 1, 1), o = 0; c > o; o += 1) l = r[o].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), l[2] ? (a = parseFloat(l[2]), a /= "%" === l[3] ? 100 : i.width) : a = o * d, n.colorStops.push({
                  color: l[1],
                  stop: a
                })
            }
            return n
          }, d.Generate.Gradient = function (t, i) {
            if (0 !== i.width && 0 !== i.height) {
              var o, s, a, r, c = e.createElement("canvas"), l = c.getContext("2d");
              if (c.width = i.width, c.height = i.height, o = d.Generate.parseGradient(t, i)) if ("linear" === o.type) {
                for (s = l.createLinearGradient(o.x0, o.y0, o.x1, o.y1), a = 0, r = o.colorStops.length; r > a; a += 1) try {
                  s.addColorStop(o.colorStops[a].stop, o.colorStops[a].color)
                } catch (u) {
                  n(["failed to add color stop: ", u, "; tried to add: ", o.colorStops[a], "; stop: ", a, "; in: ", t])
                }
                l.fillStyle = s, l.fillRect(0, 0, i.width, i.height)
              } else if ("circle" === o.type) {
                for (s = l.createRadialGradient(o.cx, o.cy, 0, o.cx, o.cy, o.rx), a = 0, r = o.colorStops.length; r > a; a += 1) try {
                  s.addColorStop(o.colorStops[a].stop, o.colorStops[a].color)
                } catch (u) {
                  n(["failed to add color stop: ", u, "; tried to add: ", o.colorStops[a], "; stop: ", a, "; in: ", t])
                }
                l.fillStyle = s, l.fillRect(0, 0, i.width, i.height)
              } else if ("ellipse" === o.type) {
                var m = e.createElement("canvas"), p = m.getContext("2d"), f = Math.max(o.rx, o.ry), h = 2 * f;
                for (m.width = m.height = h, s = p.createRadialGradient(o.rx, o.ry, 0, o.rx, o.ry, f), a = 0, r = o.colorStops.length; r > a; a += 1) try {
                  s.addColorStop(o.colorStops[a].stop, o.colorStops[a].color)
                } catch (u) {
                  n(["failed to add color stop: ", u, "; tried to add: ", o.colorStops[a], "; stop: ", a, "; in: ", t])
                }
                p.fillStyle = s, p.fillRect(0, 0, h, h), l.fillStyle = o.colorStops[a - 1].color, l.fillRect(0, 0, c.width, c.height), l.drawImage(m, o.cx - o.rx, o.cy - o.ry, 2 * o.rx, 2 * o.ry)
              }
              return c
            }
          }, d.Generate.ListAlpha = function (t) {
            var e, i = "";
            do e = t % 26, i = String.fromCharCode(e + 64) + i, t /= 26;
            while (26 * t > 26);
            return i
          }, d.Generate.ListRoman = function (t) {
            var e, i = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
              n = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], o = "", s = i.length;
            if (0 >= t || t >= 4e3) return t;
            for (e = 0; s > e; e += 1) for (; t >= n[e];) t -= n[e], o += i[e];
            return o
          }
        }(), d.Parse = function (o, r) {
          function c() {
            return Math.max(Math.max(re.body.scrollWidth, re.documentElement.scrollWidth), Math.max(re.body.offsetWidth, re.documentElement.offsetWidth), Math.max(re.body.clientWidth, re.documentElement.clientWidth))
          }

          function l() {
            return Math.max(Math.max(re.body.scrollHeight, re.documentElement.scrollHeight), Math.max(re.body.offsetHeight, re.documentElement.offsetHeight), Math.max(re.body.clientHeight, re.documentElement.clientHeight))
          }

          function u(t, e) {
            var i = parseInt(ue(t, e), 10);
            return isNaN(i) ? 0 : i
          }

          function m(t, e, i, n, o, s) {
            "transparent" !== s && (t.setVariable("fillStyle", s), t.fillRect(e, i, n, o), ae += 1)
          }

          function p(t, e) {
            switch (e) {
              case"lowercase":
                return t.toLowerCase();
              case"capitalize":
                return t.replace(/(^|\s|:|-|\(|\))([a-z])/g, function (t, e, i) {
                  return t.length > 0 ? e + i.toUpperCase() : void 0
                });
              case"uppercase":
                return t.toUpperCase();
              default:
                return t
            }
          }

          function f(t) {
            return /^(normal|none|0px)$/.test(t)
          }

          function h(t, e, i, n) {
            null !== t && d.Util.trimText(t).length > 0 && (n.fillText(t, e, i), ae += 1)
          }

          function b(t, e, i, n) {
            var o = !1, s = ue(e, "fontWeight"), a = ue(e, "fontFamily"), r = ue(e, "fontSize");
            switch (parseInt(s, 10)) {
              case 401:
                s = "bold";
                break;
              case 400:
                s = "normal"
            }
            return t.setVariable("fillStyle", n), t.setVariable("font", [ue(e, "fontStyle"), ue(e, "fontVariant"), s, r, a].join(" ")), t.setVariable("textAlign", o ? "right" : "left"), "none" !== i ? d.Util.Font(a, r, re) : void 0
          }

          function g(t, e, i, n, o) {
            switch (e) {
              case"underline":
                m(t, i.left, Math.round(i.top + n.baseline + n.lineWidth), i.width, 1, o);
                break;
              case"overline":
                m(t, i.left, Math.round(i.top), i.width, 1, o);
                break;
              case"line-through":
                m(t, i.left, Math.ceil(i.top + n.middle + n.lineWidth), i.width, 1, o)
            }
          }

          function v(t, e, i, n) {
            var o;
            if (ce.rangeBounds) ("none" !== i || 0 !== d.Util.trimText(e).length) && (o = w(e, t.node, t.textOffset)), t.textOffset += e.length; else if (t.node && "string" == typeof t.node.nodeValue) {
              var s = n ? t.node.splitText(e.length) : null;
              o = _(t.node), t.node = s
            }
            return o
          }

          function w(t, e, i) {
            var n = re.createRange();
            return n.setStart(e, i), n.setEnd(e, i + t.length), n.getBoundingClientRect()
          }

          function _(t) {
            var e = t.parentNode, i = re.createElement("wrapper"), n = t.cloneNode(!0);
            i.appendChild(t.cloneNode(!0)), e.replaceChild(i, t);
            var o = d.Util.Bounds(i);
            return e.replaceChild(n, i), o
          }

          function y(t, e, i) {
            var n, o, s = i.ctx, a = ue(t, "color"), c = ue(t, "textDecoration"), l = ue(t, "textAlign"),
              u = {node: e, textOffset: 0};
            d.Util.trimText(e.nodeValue).length > 0 && (e.nodeValue = p(e.nodeValue, ue(t, "textTransform")), l = l.replace(["-webkit-auto"], ["auto"]), o = e.nodeValue.split(!r.letterRendering && /^(left|right|justify|auto)$/.test(l) && f(ue(t, "letterSpacing")) ? /(\b| )/ : ""), n = b(s, t, c, a), r.chinese && o.forEach(function (t, e) {
              /.*[\u4E00-\u9FA5].*$/.test(t) && (t = t.split(""), t.unshift(e, 1), o.splice.apply(o, t))
            }), o.forEach(function (t, e) {
              var i = v(u, t, c, e < o.length - 1);
              i && (h(t, i.left, i.bottom, s), g(s, c, i, n, a))
            }))
          }

          function x(t, e) {
            var i, n, o = re.createElement("boundelement");
            return o.style.display = "inline", i = t.style.listStyleType, t.style.listStyleType = "none", o.appendChild(re.createTextNode(e)), t.insertBefore(o, t.firstChild), n = d.Util.Bounds(o), t.removeChild(o), t.style.listStyleType = i, n
          }

          function $(t) {
            var e = -1, i = 1, n = t.parentNode.childNodes;
            if (t.parentNode) {
              for (; n[++e] !== t;) 1 === n[e].nodeType && i++;
              return i
            }
            return -1
          }

          function k(t, e) {
            var i, n = $(t);
            switch (e) {
              case"decimal":
                i = n;
                break;
              case"decimal-leading-zero":
                i = 1 === n.toString().length ? n = "0" + n.toString() : n.toString();
                break;
              case"upper-roman":
                i = d.Generate.ListRoman(n);
                break;
              case"lower-roman":
                i = d.Generate.ListRoman(n).toLowerCase();
                break;
              case"lower-alpha":
                i = d.Generate.ListAlpha(n).toLowerCase();
                break;
              case"upper-alpha":
                i = d.Generate.ListAlpha(n)
            }
            return i += ". "
          }

          function T(t, e, i) {
            var n, o, s, a = e.ctx, r = ue(t, "listStyleType");
            if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(r)) {
              if (o = k(t, r), s = x(t, o), b(a, t, "none", ue(t, "color")), "inside" !== ue(t, "listStylePosition")) return;
              a.setVariable("textAlign", "left"), n = i.left, h(o, n, s.bottom, a)
            }
          }

          function S(t) {
            var e = o[t];
            return e && e.succeeded === !0 ? e.img : !1
          }

          function C(t, e) {
            var i = Math.max(t.left, e.left), n = Math.max(t.top, e.top),
              o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height);
            return {left: i, top: n, width: o - i, height: s - n}
          }

          function I(t, e) {
            var i;
            return e ? "auto" !== t ? (i = a(t), e.children.push(i), i) : e : i = a(0)
          }

          function D(t, e, i, n, o) {
            var s = u(e, "paddingLeft"), a = u(e, "paddingTop"), r = u(e, "paddingRight"), c = u(e, "paddingBottom");
            z(t, i, 0, 0, i.width, i.height, n.left + s + o[3].width, n.top + a + o[0].width, n.width - (o[1].width + o[3].width + s + r), n.height - (o[0].width + o[2].width + a + c))
          }

          function L(t) {
            return ["Top", "Right", "Bottom", "Left"].map(function (e) {
              return {width: u(t, "border" + e + "Width"), color: ue(t, "border" + e + "Color")}
            })
          }

          function R(t) {
            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (e) {
              return ue(t, "border" + e + "Radius")
            })
          }

          function A(t, e, i, n) {
            var o = function (t, e, i) {
              return {x: t.x + (e.x - t.x) * i, y: t.y + (e.y - t.y) * i}
            };
            return {
              start: t, startControl: e, endControl: i, end: n, subdivide: function (s) {
                var a = o(t, e, s), r = o(e, i, s), c = o(i, n, s), d = o(a, r, s), l = o(r, c, s), u = o(d, l, s);
                return [A(t, a, d, u), A(u, l, c, n)]
              }, curveTo: function (t) {
                t.push(["bezierCurve", e.x, e.y, i.x, i.y, n.x, n.y])
              }, curveToReversed: function (n) {
                n.push(["bezierCurve", i.x, i.y, e.x, e.y, t.x, t.y])
              }
            }
          }

          function E(t, e, i, n, o, s, a) {
            e[0] > 0 || e[1] > 0 ? (t.push(["line", n[0].start.x, n[0].start.y]), n[0].curveTo(t), n[1].curveTo(t)) : t.push(["line", s, a]), (i[0] > 0 || i[1] > 0) && t.push(["line", o[0].start.x, o[0].start.y])
          }

          function j(t, e, i, n, o, s, a) {
            var r = [];
            return e[0] > 0 || e[1] > 0 ? (r.push(["line", n[1].start.x, n[1].start.y]), n[1].curveTo(r)) : r.push(["line", t.c1[0], t.c1[1]]), i[0] > 0 || i[1] > 0 ? (r.push(["line", s[0].start.x, s[0].start.y]), s[0].curveTo(r), r.push(["line", a[0].end.x, a[0].end.y]), a[0].curveToReversed(r)) : (r.push(["line", t.c2[0], t.c2[1]]), r.push(["line", t.c3[0], t.c3[1]])), e[0] > 0 || e[1] > 0 ? (r.push(["line", o[1].end.x, o[1].end.y]), o[1].curveToReversed(r)) : r.push(["line", t.c4[0], t.c4[1]]), r
          }

          function O(t, e, i) {
            var n = t.left, o = t.top, s = t.width, a = t.height, r = e[0][0], c = e[0][1], d = e[1][0], l = e[1][1],
              u = e[2][0], m = e[2][1], p = e[3][0], f = e[3][1], h = s - d, b = a - u, g = s - m, v = a - f;
            return {
              topLeftOuter: fe(n, o, r, c).topLeft.subdivide(.5),
              topLeftInner: fe(n + i[3].width, o + i[0].width, Math.max(0, r - i[3].width), Math.max(0, c - i[0].width)).topLeft.subdivide(.5),
              topRightOuter: fe(n + h, o, d, l).topRight.subdivide(.5),
              topRightInner: fe(n + Math.min(h, s + i[3].width), o + i[0].width, h > s + i[3].width ? 0 : d - i[3].width, l - i[0].width).topRight.subdivide(.5),
              bottomRightOuter: fe(n + g, o + b, m, u).bottomRight.subdivide(.5),
              bottomRightInner: fe(n + Math.min(g, s + i[3].width), o + Math.min(b, a + i[0].width), Math.max(0, m - i[1].width), Math.max(0, u - i[2].width)).bottomRight.subdivide(.5),
              bottomLeftOuter: fe(n, o + v, p, f).bottomLeft.subdivide(.5),
              bottomLeftInner: fe(n + i[3].width, o + v, Math.max(0, p - i[3].width), Math.max(0, f - i[2].width)).bottomLeft.subdivide(.5)
            }
          }

          function q(t, e, i, n, o) {
            var s = ue(t, "backgroundClip"), a = [];
            switch (s) {
              case"content-box":
              case"padding-box":
                E(a, n[0], n[1], e.topLeftInner, e.topRightInner, o.left + i[3].width, o.top + i[0].width), E(a, n[1], n[2], e.topRightInner, e.bottomRightInner, o.left + o.width - i[1].width, o.top + i[0].width), E(a, n[2], n[3], e.bottomRightInner, e.bottomLeftInner, o.left + o.width - i[1].width, o.top + o.height - i[2].width), E(a, n[3], n[0], e.bottomLeftInner, e.topLeftInner, o.left + i[3].width, o.top + o.height - i[2].width);
                break;
              default:
                E(a, n[0], n[1], e.topLeftOuter, e.topRightOuter, o.left, o.top), E(a, n[1], n[2], e.topRightOuter, e.bottomRightOuter, o.left + o.width, o.top), E(a, n[2], n[3], e.bottomRightOuter, e.bottomLeftOuter, o.left + o.width, o.top + o.height), E(a, n[3], n[0], e.bottomLeftOuter, e.topLeftOuter, o.left, o.top + o.height)
            }
            return a
          }

          function M(t, e, i) {
            var n, o, s, a, r, c, d = e.left, l = e.top, u = e.width, m = e.height, p = R(t), f = O(e, p, i),
              h = {clip: q(t, f, i, p, e), borders: []};
            for (n = 0; 4 > n; n++) if (i[n].width > 0) {
              switch (o = d, s = l, a = u, r = m - i[2].width, n) {
                case 0:
                  r = i[0].width, c = j({
                    c1: [o, s],
                    c2: [o + a, s],
                    c3: [o + a - i[1].width, s + r],
                    c4: [o + i[3].width, s + r]
                  }, p[0], p[1], f.topLeftOuter, f.topLeftInner, f.topRightOuter, f.topRightInner);
                  break;
                case 1:
                  o = d + u - i[1].width, a = i[1].width, c = j({
                    c1: [o + a, s],
                    c2: [o + a, s + r + i[2].width],
                    c3: [o, s + r],
                    c4: [o, s + i[0].width]
                  }, p[1], p[2], f.topRightOuter, f.topRightInner, f.bottomRightOuter, f.bottomRightInner);
                  break;
                case 2:
                  s = s + m - i[2].width, r = i[2].width, c = j({
                    c1: [o + a, s + r],
                    c2: [o, s + r],
                    c3: [o + i[3].width, s],
                    c4: [o + a - i[2].width, s]
                  }, p[2], p[3], f.bottomRightOuter, f.bottomRightInner, f.bottomLeftOuter, f.bottomLeftInner);
                  break;
                case 3:
                  a = i[3].width, c = j({
                    c1: [o, s + r + i[2].width],
                    c2: [o, s],
                    c3: [o + a, s + i[0].width],
                    c4: [o + a, s + r]
                  }, p[3], p[0], f.bottomLeftOuter, f.bottomLeftInner, f.topLeftOuter, f.topLeftInner)
              }
              h.borders.push({args: c, color: i[n].color})
            }
            return h
          }

          function P(t, e) {
            var i = t.drawShape();
            return e.forEach(function (t, e) {
              i[0 === e ? "moveTo" : t[0] + "To"].apply(null, t.slice(1))
            }), i
          }

          function N(t, e, i) {
            "transparent" !== i && (t.setVariable("fillStyle", i), P(t, e), t.fill(), ae += 1)
          }

          function U(t, e, i) {
            var o, s, a = re.createElement("valuewrap"),
              r = ["lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth"];
            r.forEach(function (e) {
              try {
                a.style[e] = ue(t, e)
              } catch (i) {
                n("html2canvas: Parse: Exception caught in renderFormValue: " + i.message)
              }
            }), a.style.borderColor = "black", a.style.borderStyle = "solid", a.style.display = "block", a.style.position = "absolute", (/^(submit|reset|button|text|password)$/.test(t.type) || "SELECT" === t.nodeName) && (a.style.lineHeight = ue(t, "height")), a.style.top = e.top + "px", a.style.left = e.left + "px", o = "SELECT" === t.nodeName ? (t.options[t.selectedIndex] || 0).text : t.value, o || (o = t.placeholder), s = re.createTextNode(o), a.appendChild(s), le.appendChild(a), y(t, s, i), le.removeChild(a)
          }

          function z(t) {
            t.drawImage.apply(t, Array.prototype.slice.call(arguments, 1)), ae += 1
          }

          function H(i, o) {
            var s = t.getComputedStyle(i, o);
            if (s && s.content && "none" !== s.content && "-moz-alt-content" !== s.content) {
              var a = s.content + "", r = a.substr(0, 1);
              r === a.substr(a.length - 1) && r.match(/'|"/) && (a = a.substr(1, a.length - 2));
              var c = "url" === a.substr(0, 3), l = e.createElement(c ? "img" : "span");
              return l.className = me + "-before " + me + "-after", Object.keys(s).filter(B).forEach(function (t) {
                try {
                  l.style[t] = s[t]
                } catch (e) {
                  n(["Tried to assign readonly property ", t, "Error:", e])
                }
              }), c ? l.src = d.Util.parseBackgroundImage(a)[0].args[0] : l.innerHTML = a, l
            }
          }

          function B(e) {
            return isNaN(t.parseInt(e, 10))
          }

          function F(t, e) {
            var i = H(t, ":before"), n = H(t, ":after");
            (i || n) && (i && (t.className += " " + me + "-before", t.parentNode.insertBefore(i, t), ie(i, e, !0), t.parentNode.removeChild(i), t.className = t.className.replace(me + "-before", "").trim()), n && (t.className += " " + me + "-after", t.appendChild(n), ie(n, e, !0), t.removeChild(n), t.className = t.className.replace(me + "-after", "").trim()))
          }

          function W(t, e, i, n) {
            var o = Math.round(n.left + i.left), s = Math.round(n.top + i.top);
            t.createPattern(e), t.translate(o, s), t.fill(), t.translate(-o, -s)
          }

          function Q(t, e, i, n, o, s, a, r) {
            var c = [];
            c.push(["line", Math.round(o), Math.round(s)]), c.push(["line", Math.round(o + a), Math.round(s)]), c.push(["line", Math.round(o + a), Math.round(r + s)]), c.push(["line", Math.round(o), Math.round(r + s)]), P(t, c), t.save(), t.clip(), W(t, e, i, n), t.restore()
          }

          function G(t, e, i) {
            m(t, e.left, e.top, e.width, e.height, i)
          }

          function V(t, e, i, n, o) {
            var s = d.Util.BackgroundSize(t, e, n, o), a = d.Util.BackgroundPosition(t, e, n, o, s),
              r = ue(t, "backgroundRepeat").split(",").map(function (t) {
                return t.trim()
              });
            switch (n = X(n, s), r = r[o] || r[0]) {
              case"repeat-x":
                Q(i, n, a, e, e.left, e.top + a.top, 99999, n.height);
                break;
              case"repeat-y":
                Q(i, n, a, e, e.left + a.left, e.top, n.width, 99999);
                break;
              case"no-repeat":
                Q(i, n, a, e, e.left + a.left, e.top + a.top, n.width, n.height);
                break;
              default:
                W(i, n, a, {top: e.top, left: e.left, width: n.width, height: n.height})
            }
          }

          function J(t, e, i) {
            for (var o, s = ue(t, "backgroundImage"), a = d.Util.parseBackgroundImage(s), r = a.length; r--;) if (s = a[r], s.args && 0 !== s.args.length) {
              var c = "url" === s.method ? s.args[0] : s.value;
              o = S(c), o ? V(t, e, i, o, r) : n("html2canvas: Error loading background:", s)
            }
          }

          function X(t, e) {
            if (t.width === e.width && t.height === e.height) return t;
            var i, n = re.createElement("canvas");
            return n.width = e.width, n.height = e.height, i = n.getContext("2d"), z(i, t, 0, 0, t.width, t.height, 0, 0, e.width, e.height), n
          }

          function K(t, e, i) {
            var n = ue(e, "opacity") * (i ? i.opacity : 1);
            return t.setVariable("globalAlpha", n), n
          }

          function Y(t, e, i) {
            var n = s(e ? i.width : c(), e ? i.height : l()), o = {
              ctx: n,
              zIndex: I(ue(t, "zIndex"), e ? e.zIndex : null),
              opacity: K(n, t, e),
              cssPosition: ue(t, "position"),
              borders: L(t),
              clip: e && e.clip ? d.Util.Extend({}, e.clip) : null
            };
            return r.useOverflow === !0 && /(hidden|scroll|auto)/.test(ue(t, "overflow")) === !0 && /(BODY)/i.test(t.nodeName) === !1 && (o.clip = o.clip ? C(o.clip, i) : i), o.zIndex.children.push(o), o
          }

          function Z(t, e, i) {
            var n = {
              left: e.left + t[3].width,
              top: e.top + t[0].width,
              width: e.width - (t[1].width + t[3].width),
              height: e.height - (t[0].width + t[2].width)
            };
            return i && (n = C(n, i)), n
          }

          function te(t, e, i) {
            var o, s = d.Util.Bounds(t), a = de.test(t.nodeName) ? "#efefef" : ue(t, "backgroundColor"), r = Y(t, e, s),
              c = r.borders, l = r.ctx, u = Z(c, s, r.clip), m = M(t, s, c);
            switch (P(l, m.clip), l.save(), l.clip(), u.height > 0 && u.width > 0 && (G(l, s, a), J(t, u, l)), l.restore(), m.borders.forEach(function (t) {
              N(l, t.args, t.color)
            }), i || F(t, r), t.nodeName) {
              case"IMG":
                (o = S(t.getAttribute("src"))) ? D(l, t, o, s, c) : n("html2canvas: Error loading <img>:" + t.getAttribute("src"));
                break;
              case"INPUT":
                /^(text|url|email|submit|button|reset)$/.test(t.type) && (t.value || t.placeholder).length > 0 && U(t, s, r);
                break;
              case"TEXTAREA":
                (t.value || t.placeholder || "").length > 0 && U(t, s, r);
                break;
              case"SELECT":
                (t.options || t.placeholder || "").length > 0 && U(t, s, r);
                break;
              case"LI":
                T(t, r, u);
                break;
              case"CANVAS":
                D(l, t, t, s, c)
            }
            return r
          }

          function ee(t) {
            return "none" !== ue(t, "display") && "hidden" !== ue(t, "visibility") && !t.hasAttribute("data-html2canvas-ignore")
          }

          function ie(t, e, i) {
            ee(t) && (e = te(t, e, i) || e, de.test(t.nodeName) || d.Util.Children(t).forEach(function (n) {
              1 === n.nodeType ? ie(n, e, i) : 3 === n.nodeType && y(t, n, e)
            }))
          }

          function ne(t, e) {
            function i(t) {
              var e, n, o, s, r, c = d.Util.Children(t), l = c.length;
              for (r = 0; l > r; r += 1) if (s = c[r], 3 === s.nodeType) a += s.nodeValue.replace(/</g, "&lt;").replace(/>/g, "&gt;"); else if (1 === s.nodeType && !/^(script|meta|title)$/.test(s.nodeName.toLowerCase())) {
                if (a += "<" + s.nodeName.toLowerCase(), s.hasAttributes()) for (e = s.attributes, o = e.length, n = 0; o > n; n += 1) a += " " + e[n].name + '="' + e[n].value + '"';
                a += ">", i(s), a += "</" + s.nodeName.toLowerCase() + ">"
              }
            }

            var n = new Image, o = c(), s = l(), a = "";
            i(t), n.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + o + "' height='" + s + "'>", "<foreignObject width='" + o + "' height='" + s + "'>", "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>", a.replace(/\#/g, "%23"), "</html>", "</foreignObject>", "</svg>"].join(""), n.onload = function () {
              e.svgRender = n
            }
          }

          function oe() {
            var t = te(se, null);
            return ce.svgRendering && ne(e.documentElement, t), Array.prototype.slice.call(se.children, 0).forEach(function (e) {
              ie(e, t)
            }), t.backgroundColor = ue(e.documentElement, "backgroundColor"), le.removeChild(pe), t
          }

          bds.se.ShortCut.scrollTop = t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop, t.scroll(0, 0);
          var se = r.elements === i ? e.body : r.elements[0], ae = 0, re = se.ownerDocument, ce = d.Util.Support(r, re),
            de = new RegExp("(" + r.ignoreElements + ")"), le = re.body, ue = d.Util.getCSS,
            me = "___html2canvas___pseudoelement", pe = re.createElement("style");
          pe.innerHTML = "." + me + '-before:before { content: "" !important; display: none !important; }.' + me + '-after:after { content: "" !important; display: none !important; }', le.appendChild(pe), o = o || {};
          var fe = function (t) {
            return function (e, i, n, o) {
              var s = n * t, a = o * t, r = e + n, c = i + o;
              return {
                topLeft: A({x: e, y: c}, {x: e, y: c - a}, {x: r - s, y: i}, {x: r, y: i}),
                topRight: A({x: e, y: i}, {x: e + s, y: i}, {x: r, y: c - a}, {x: r, y: c}),
                bottomRight: A({x: r, y: i}, {x: r, y: i + a}, {x: e + s, y: c}, {x: e, y: c}),
                bottomLeft: A({x: r, y: c}, {x: r - s, y: c}, {x: e, y: i + a}, {x: e, y: i})
              }
            }
          }(4 * ((Math.sqrt(2) - 1) / 3));
          return oe()
        }, d.Preload = function (o) {
          function s(t) {
            S.href = t, S.href = S.href;
            var e = S.protocol + S.host;
            return e === b
          }

          function a() {
            n("html2canvas: start: images: " + _.numLoaded + " / " + _.numTotal + " (failed: " + _.numFailed + ")"), !_.firstRun && _.numLoaded >= _.numTotal && (n("Finished loading images: # " + _.numTotal + " (failed: " + _.numFailed + ")"), "function" == typeof o.complete && o.complete(_))
          }

          function r(e, n, s) {
            var r, c, d = o.proxy;
            S.href = e, e = S.href, r = "html2canvas_" + y++, s.callbackname = r, d += d.indexOf("?") > -1 ? "&" : "?", d += "url=" + encodeURIComponent(e) + "&callback=" + r, c = $.createElement("script"), t[r] = function (e) {
              "error:" === e.substring(0, 6) ? (s.succeeded = !1, _.numLoaded++, _.numFailed++, a()) : (h(n, s), n.src = e), t[r] = i;
              try {
                delete t[r]
              } catch (o) {
              }
              c.parentNode.removeChild(c), c = null, delete s.script, delete s.callbackname
            }, c.setAttribute("type", "text/javascript"), c.setAttribute("src", d), s.script = c, t.document.body.appendChild(c)
          }

          function c(e, i) {
            var n = t.getComputedStyle(e, i), o = n.content;
            "url" === o.substr(0, 3) && g.loadImage(d.Util.parseBackgroundImage(o)[0].args[0]), p(n.backgroundImage, e)
          }

          function l(t) {
            c(t, ":before"), c(t, ":after")
          }

          function u(t, e) {
            var n = d.Generate.Gradient(t, e);
            n !== i && (_[t] = {img: n, succeeded: !0}, _.numTotal++, _.numLoaded++, a())
          }

          function m(t) {
            return t && t.method && t.args && t.args.length > 0
          }

          function p(t, e) {
            var n;
            d.Util.parseBackgroundImage(t).filter(m).forEach(function (t) {
              "url" === t.method ? g.loadImage(t.args[0]) : t.method.match(/\-?gradient$/) && (n === i && (n = d.Util.Bounds(e)), u(t.value, n))
            })
          }

          function f(t) {
            var e = !1;
            try {
              d.Util.Children(t).forEach(function (t) {
                f(t)
              })
            } catch (o) {
            }
            try {
              e = t.nodeType
            } catch (s) {
              e = !1, n("html2canvas: failed to access some element's nodeType - Exception: " + s.message)
            }
            if (1 === e || e === i) {
              l(t);
              try {
                p(d.Util.getCSS(t, "backgroundImage"), t)
              } catch (o) {
                n("html2canvas: failed to get background-image - Exception: " + o.message)
              }
              p(t)
            }
          }

          function h(e, n) {
            e.onload = function () {
              n.timer !== i && t.clearTimeout(n.timer), _.numLoaded++, n.succeeded = !0, e.onerror = e.onload = null, a()
            }, e.onerror = function () {
              if ("anonymous" === e.crossOrigin && (t.clearTimeout(n.timer), o.proxy)) {
                var i = e.src;
                return e = new Image, n.img = e, e.src = i, void r(e.src, e, n)
              }
              _.numLoaded++, _.numFailed++, n.succeeded = !1, e.onerror = e.onload = null, a()
            }
          }

          var b, g, v, w, _ = {numLoaded: 0, numFailed: 0, numTotal: 0, cleanupDone: !1}, y = 0,
            x = o.elements[0] || e.body, $ = x.ownerDocument, k = $.images, T = k.length, S = $.createElement("a"),
            C = function (t) {
              return t.crossOrigin !== i
            }(new Image);
          for (S.href = t.location.href, b = S.protocol + S.host, g = {
            loadImage: function (e) {
              var n, a;
              e && _[e] === i && (n = new Image, e.match(/data:image\/.*;base64,/i) ? (n.src = e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), a = _[e] = {img: n}, _.numTotal++, h(n, a)) : s(e) || o.allowTaint === !0 ? (a = _[e] = {img: n}, _.numTotal++, h(n, a), n.src = e) : C && !o.allowTaint && o.useCORS ? (n.crossOrigin = "anonymous", a = _[e] = {img: n}, _.numTotal++, h(n, a), n.src = e, n.customComplete = function () {
                this.img.complete ? this.img.onerror() : this.timer = t.setTimeout(this.img.customComplete, 100)
              }.bind(a), n.customComplete()) : o.proxy && (a = _[e] = {img: n}, _.numTotal++, r(e, n, a)))
            }, cleanupDOM: function (s) {
              var r, c;
              if (!_.cleanupDone) {
                n(s && "string" == typeof s ? "html2canvas: Cleanup because: " + s : "html2canvas: Cleanup after timeout: " + o.timeout + " ms.");
                for (c in _) if (_.hasOwnProperty(c) && (r = _[c], "object" == typeof r && r.callbackname && r.succeeded === i)) {
                  t[r.callbackname] = i;
                  try {
                    delete t[r.callbackname]
                  } catch (d) {
                  }
                  r.script && r.script.parentNode && (r.script.setAttribute("src", "about:blank"), r.script.parentNode.removeChild(r.script)), _.numLoaded++, _.numFailed++, n("html2canvas: Cleaned up failed img: '" + c + "' Steps: " + _.numLoaded + " / " + _.numTotal)
                }
                t.stop !== i ? t.stop() : e.execCommand !== i && e.execCommand("Stop", !1), e.close !== i && e.close(), _.cleanupDone = !0, s && "string" == typeof s || a()
              }
            }, renderingDone: function () {
              w && t.clearTimeout(w)
            }
          }, o.timeout > 0 && (w = t.setTimeout(g.cleanupDOM, o.timeout)), n("html2canvas: Preload starts: finding background-images"), _.firstRun = !0, f(x), n("html2canvas: Preload: Finding images"), v = 0; T > v; v += 1) g.loadImage(k[v].getAttribute("src"));
          return _.firstRun = !1, n("html2canvas: Preload: Done."), _.numTotal === _.numLoaded && a(), g
        }, d.Renderer = function (t, n) {
          function o(t) {
            var e = [], i = function (t) {
              var n = [], o = [];
              t.children.forEach(function (t) {
                t.children && t.children.length > 0 ? (n.push(t), o.push(t.zindex)) : e.push(t)
              }), o.sort(function (t, e) {
                return t - e
              }), o.forEach(function (t) {
                var e;
                n.some(function (i, n) {
                  return e = n, i.zindex === t
                }), i(n.splice(e, 1)[0])
              })
            };
            return t && t.zIndex && i(t.zIndex), e
          }

          function s(t) {
            var e;
            if ("string" == typeof n.renderer && d.Renderer[t] !== i) e = d.Renderer[t](n); else {
              if ("function" != typeof t) throw new Error("Unknown renderer");
              e = t(n)
            }
            if ("function" != typeof e) throw new Error("Invalid renderer defined");
            return e
          }

          return s(n.renderer)(t, n, e, o(t), d)
        }, d.Util.Support = function (t, e) {
          function o() {
            var t = new Image, o = e.createElement("canvas"), s = o.getContext === i ? !1 : o.getContext("2d");
            if (s === !1) return !1;
            o.width = o.height = 10, t.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>"].join("");
            try {
              s.drawImage(t, 0, 0), o.toDataURL()
            } catch (a) {
              return !1
            }
            return n("html2canvas: Parse: SVG powered rendering available"), !0
          }

          function s() {
            var t, i, n, o, s = !1;
            return e.createRange && (t = e.createRange(), t.getBoundingClientRect && (i = e.createElement("boundtest"), i.style.height = "123px", i.style.display = "block", e.body.appendChild(i), t.selectNode(i), n = t.getBoundingClientRect(), o = n.height, 123 === o && (s = !0), e.body.removeChild(i))), s
          }

          return {rangeBounds: s(), svgRendering: t.svgRendering && o()}
        }, t.html2canvas = function (e, i) {
          e = e.length ? e : [e];
          var o, s, a = {
            logging: !1,
            elements: e,
            background: "#fff",
            proxy: null,
            timeout: 0,
            useCORS: !1,
            allowTaint: !1,
            svgRendering: !1,
            ignoreElements: "IFRAME|OBJECT|PARAM",
            useOverflow: !0,
            letterRendering: !1,
            chinese: !1,
            width: null,
            height: null,
            taintTest: !0,
            renderer: "Canvas"
          };
          return a = d.Util.Extend(i, a), d.logging = a.logging, a.complete = function (t) {
            ("function" != typeof a.onpreloaded || a.onpreloaded(t) !== !1) && (o = d.Parse(t, a), ("function" != typeof a.onparsed || a.onparsed(o) !== !1) && (s = d.Renderer(o, a), "function" == typeof a.onrendered && a.onrendered(s)))
          }, t.setTimeout(function () {
            d.Preload(a)
          }, 0), {
            render: function (t, e) {
              return d.Renderer(t, d.Util.Extend(e, a))
            }, parse: function (t, e) {
              return d.Parse(t, d.Util.Extend(e, a))
            }, preload: function (t) {
              return d.Preload(d.Util.Extend(t, a))
            }, log: n
          }
        }, t.html2canvas.log = n, t.html2canvas.Renderer = {Canvas: i}, d.Renderer.Canvas = function (t) {
          function o(t, e) {
            t.beginPath(), e.forEach(function (e) {
              t[e.name].apply(t, e.arguments)
            }), t.closePath()
          }

          function s(t) {
            if (-1 === d.indexOf(t.arguments[0].src)) {
              u.drawImage(t.arguments[0], 0, 0);
              try {
                u.getImageData(0, 0, 1, 1)
              } catch (e) {
                return l = c.createElement("canvas"), u = l.getContext("2d"), !1
              }
              d.push(t.arguments[0].src)
            }
            return !0
          }

          function a(t) {
            return "transparent" === t || "rgba(0, 0, 0, 0)" === t
          }

          function r(e, i) {
            switch (i.type) {
              case"variable":
                e[i.name] = i.arguments;
                break;
              case"function":
                if ("createPattern" === i.name) {
                  if (i.arguments[0].width > 0 && i.arguments[0].height > 0) try {
                    e.fillStyle = e.createPattern(i.arguments[0], "repeat")
                  } catch (a) {
                    n("html2canvas: Renderer: Error creating pattern", a.message)
                  }
                } else "drawShape" === i.name ? o(e, i.arguments) : "drawImage" === i.name ? i.arguments[8] > 0 && i.arguments[7] > 0 && (!t.taintTest || t.taintTest && s(i)) && e.drawImage.apply(e, i.arguments) : e[i.name].apply(e, i.arguments)
            }
          }

          t = t || {};
          var c = e, d = [], l = e.createElement("canvas"), u = l.getContext("2d"),
            m = t.canvas || c.createElement("canvas");
          return function (t, e, o, s, c) {
            var d, l, u, p, f, h, b = m.getContext("2d");
            if (m.width = m.style.width = e.width || t.ctx.width, m.height = m.style.height = e.height || t.ctx.height, h = b.fillStyle, b.fillStyle = a(t.backgroundColor) && e.background !== i ? e.background : t.backgroundColor, b.fillRect(0, 0, m.width, m.height), b.fillStyle = h, e.svgRendering && t.svgRender !== i) b.drawImage(t.svgRender, 0, 0);
            else for (l = 0, u = s.length; u > l; l += 1) d = s.splice(0, 1)[0], d.canvasPosition = d.canvasPosition || {}, b.textBaseline = "bottom", d.clip && (b.save(), b.beginPath(), b.rect(d.clip.left, d.clip.top, d.clip.width, d.clip.height), b.clip()), d.ctx.storage && d.ctx.storage.forEach(r.bind(null, b)), d.clip && b.restore();
            return n("html2canvas: Renderer: Canvas renderer done - returning canvas obj"), u = e.elements.length, 1 === u && "object" == typeof e.elements[0] && "BODY" !== e.elements[0].nodeName ? (f = c.Util.Bounds(e.elements[0]), p = o.createElement("canvas"), p.width = f.width, p.height = f.height, b = p.getContext("2d"), b.drawImage(m, f.left, f.top, f.width, f.height, 0, 0, f.width, f.height), m = null, p) : m
          }
        }
      }(window, document)
    }
  })
}(), define("plugins/safeIcon", ["require"], function () {
  function t() {
    e(), $(document).on("scroll.safeIcon", e)
  }

  function e() {
    u.clear();
    var t = $(".result .c-icon-baozhang-new");
    t.length && t.each(function (t, e) {
      n(e) && s(e)
    })
  }

  function i() {
    var t = new Date;
    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
  }

  function n(t) {
    if (!t) return !1;
    if (!t.getBoundingClientRect) return !0;
    var e = t.getBoundingClientRect();
    return e.top < window.innerHeight && e.bottom > 0 && e.left < window.innerWidth && e.right > 0 ? !0 : !1
  }

  function o(t) {
    if (window.localStorage) {
      var e = u.get(), n = !!$(t).attr("data-safe-icon-run");
      return (e.split(",").length < 2 || -1 !== e.indexOf(i())) && !n
    }
    return !0
  }

  function s(t) {
    if (!o(t)) return !1;
    $(t).attr("data-safe-icon-run", !0), $(t).attr("hint-type", "anim-newBao");
    var e = $(t), n = $($(t).parents("div.result.c-container")), s = n.attr("data-click"),
      a = s ? s.replace("safe", "ani-safe") : "";
    setTimeout(function () {
      e.addClass("animate"), n.attr("data-click", a), e.one("animationend", function () {
        e.removeClass("animate"), setTimeout(function () {
          e.addClass("animate"), $(t).attr("hint-type", "newBao"), e.one("animationend", function () {
            n.attr("data-click", s)
          })
        }, 1e3)
      })
    }, 1e3), ns_c_pj({qid: bds.comm.qid || ""}, "pj=animaBao&"), u.set(i() + "~" + +new Date)
  }

  function a(t) {
    var e = function () {
      return window.localStorage && window.localStorage.getItem(t) ? window.localStorage.getItem(t) : ""
    }, i = function (i) {
      if (window.localStorage) {
        var n = e();
        return "" === i ? (window.localStorage.setItem(t, i), !0) : 2 === n.split(",").length || -1 !== n.indexOf(i.split("~")[0]) ? !1 : (i = n ? n + "," + String(i) : String(i), window.localStorage.setItem(t, i), !0)
      }
      return !0
    }, n = function () {
      var t = e();
      +new Date - +t.split(",")[0].split("~").pop() >= l && i("")
    };
    return {get: e, set: i, clear: n}
  }

  function r() {
    $(document).off("scroll.safeIcon", e)
  }

  function c() {
    try {
      t()
    } catch (e) {
      console.log(e)
    }
  }

  var d = "safeIconHis", l = 1296e6, u = a(d);
  return {init: c, destroy: r}
}), define("plugins/frontend_sample", ["require"], function () {
  var t = {};
  return function (e, i) {
    if (location.search.indexOf("s_" + e + "=hit") >= 0) return !0;
    t[e] || (t[e] = Math.random());
    var n = t[e];
    return i > n
  }
}), define("webb/instance", ["require", "@baidu/webb", "webb/instance-config"], function (t) {
  function e() {
    return bds && bds.comm && bds.comm.lid ? bds.comm.lid : ""
  }

  function i(t) {
    if (!r[t]) {
      var i = {pid: t, lid: e()}, s = o[t];
      if (!s) return null;
      for (var a in s) s.hasOwnProperty(a) && (i[a] = s[a]);
      r[t] = new n(i)
    }
    return r[t]
  }

  var n = t("@baidu/webb"), o = t("webb/instance-config").config;
  if (-1 !== document.cookie.indexOf("webbtest=1")) for (var s in o) if (o.hasOwnProperty(s)) for (var a in o[s]) o[s].hasOwnProperty(a) && (o[s][a].sample = 1);
  var r = {};
  return {getInstance: i}
}), define("webb/instance-config", ["require"], function () {
  var t = {"1_3": {et_js: {sample: .1}, et_comm: {sample: .1}, pf_comm: {sample: .01}}};
  return {config: t}
}), !function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("@baidu/webb", [], e) : "object" == typeof exports ? exports.webb2 = e() : t.webb2 = e()
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(n) {
      if (i[n]) return i[n].exports;
      var o = i[n] = {i: n, l: !1, exports: {}};
      return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    var i = {};
    return e.m = t, e.c = i, e.d = function (t, i, n) {
      e.o(t, i) || Object.defineProperty(t, i, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
      var i = t && t.__esModule ? function () {
        return t["default"]
      } : function () {
        return t
      };
      return e.d(i, "a", i), i
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 7)
  }([function (t, e) {
    "use strict";

    function i(t, e) {
      var i = new Image, o = n();
      window[o] = i, i.onload = function () {
        e && e(), delete window[o]
      }, i.onerror = function (t) {
        e && e(t), delete window[o]
      }, i.src = t
    }

    function n() {
      var t = function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      };
      return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }

    function o(t, e) {
      if (!e || "object" !== (void 0 === e ? "undefined" : b(e))) return t;
      for (var i = Object.keys(e), n = i.length; n--;) t[i[n]] = e[i[n]];
      return t
    }

    function s(t) {
      return Object.keys(t).map(function (e) {
        var i = t[e];
        return void 0 === i ? i = "" : "string" != typeof i && (i = JSON.stringify(i)), encodeURIComponent(e) + "=" + encodeURIComponent(i)
      }).join("&")
    }

    function a(t, e) {
      var i = ["webkit", "moz", "ms", "o"];
      if (e in t) return e;
      for (var n = 0; n < i.length; n++) {
        var o = "" + i[n] + e;
        if (o in t) return o
      }
      return ""
    }

    function r() {
      return {
        x: document.body.scrollLeft || document.documentElement.scrollLeft,
        y: document.body.scrollTop || document.documentElement.scrollTop
      }
    }

    function c(t) {
      g && (document.addEventListener(v, t), document.addEventListener(w, t))
    }

    function d(t) {
      document.removeEventListener(v, t), document.removeEventListener(w, t)
    }

    function l(t) {
      return t && "hidden" in t ? t.hidden : document[g]
    }

    function u() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Object.keys(e).forEach(function (i) {
        t[i] = e[i]
      }), t
    }

    function m() {
      if (Element && !Element.prototype.matches) {
        var t = Element.prototype;
        t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
      }
    }

    function p(t) {
      var e = window.getComputedStyle(t)["background-image"];
      return e && "none" !== e && /^url\(/i.test(e) ? e.replace(/^url\(['"]?([^'"]+)['"]?\)/i, "$1") : ""
    }

    function f(t) {
      return t && "string" == typeof t && /^\s?(http:|https:)?\/\//.test(t)
    }

    function h(t, e) {
      /complete|loaded|interactive/.test(document.readyState) && document.body ? t() : document.addEventListener("DOMContentLoaded", function () {
        return e ? void t() : void setTimeout(function () {
          t()
        }, 0)
      })
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.sendLog = i, e.guid = n, e.extend = o, e.stringify = s, e.getProp = a, e.getScrollInfo = r, e.bindVisibilityChangeEvent = c, e.disposeVisibilityChangeEvent = d, e.getPageHiddenValue = l, e.assign = u, e.matchesPolyfill = m, e.getUrlFromStyle = p, e.isUrl = f, e.afterReady = h;
    var g = a(document, "hidden"), v = g.replace(/hidden/i, "visibilitychange"), w = "baiduboxappvisibilitychange"
  }, function (t, e, i) {
    "use strict";

    function n(t) {
      var e = this, i = t.colno || window.event && window.event.errorCharacter || 0, n = t.error || {},
        s = o.assign({msg: t.message, ln: t.lineno, file: t.filename, col: i, stack: n.stack}, this.exceptionInfo);
      setTimeout(function () {
        e.send("et_js", s, e.exceptionDim)
      }, 0)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = i(0);
    e["default"] = {
      initException: function () {
        this.exceptionDim = null, this.exceptionInfo = {}, this.onerrorCb = n.bind(this)
      }, startJsExceptionLog: function (t, e) {
        this.exceptionInfo = o.assign({}, t), this.exceptionDim = o.assign({}, e), window.removeEventListener("error", this.onerrorCb), window.addEventListener("error", this.onerrorCb)
      }, startResExceptionLog: function () {
      }, stopJsExceptionLog: function () {
        window.removeEventListener("error", this.onerrorCb)
      }, stopResExceptionLog: function () {
      }, sendExceptionLog: function (t, e) {
        this.send("et_comm", t, e)
      }, destroyJsException: function () {
        this.stopJsExceptionLog(), this.exceptionDim = null, this.exceptionInfo = null, this.onerrorCb = null
      }
    }, t.exports = e["default"]
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = i(0);
    e["default"] = {
      sendBaseDispLog: function (t, e, i) {
        var o = document.documentElement, s = {
          size: {
            doc: {w: o.scrollWidth, h: o.scrollHeight},
            wind: {w: o.clientWidth, h: o.clientHeight},
            scr: {w: screen.width, h: screen.height}
          }, dpr: window.devicePixelRatio || 1
        };
        t && (s = n.assign(s, t)), this.send("disp_comm", s, e, null, i)
      }, sendDispLog: function (t, e, i) {
        var o = void 0;
        o = t instanceof Array ? t : n.assign({}, t), this.send("disp_content", o, e, null, i)
      }
    }, t.exports = e["default"]
  }, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = i(0);
    e["default"] = {
      sendBasePfLog: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1], i = arguments[2],
          o = window.performance && performance.timing || {}, s = o.navigationStart, a = o.requestStart,
          r = o.responseStart, c = o.responseEnd, d = o.domComplete, l = o.domLoading, u = o.domainLookupStart,
          m = o.domainLookupEnd, p = o.connectStart, f = o.connectEnd, h = o.loadEventStart, b = o.loadEventEnd,
          g = {dns: m - u, tcp: f - p, req: r - a, res: c - r, dct: d - l, ld: b - h}, v = window.__webbbrige__ || {},
          w = v.whiteScreenTime, _ = v.firstScreenTime;
        w && (g = n.assign(g, {wst: w - s})), _ && (g = n.assign(g, {fst: _ - s})), g = n.assign(g, t), this.send("pf_comm", g, e, null, i)
      }, sendPfLog: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1], i = arguments[2],
          o = n.assign({}, t);
        this.send("pf_comm", o, e, null, i)
      }
    }, t.exports = e["default"]
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
      sendCountLog: function (t, e) {
        this.send("count_comm", t, e)
      }
    }, t.exports = e["default"]
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e["default"] = {
      sendDistributeLog: function (t, e) {
        this.send("dist_comm", t, e)
      }
    }, t.exports = e["default"]
  }, function (t, e, i) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }

      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(), a = i(0), r = "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/webb.gif";
    "http:" === location.protocol && (r = "http://sestat.baidu.com/webb.gif");
    var c = "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/mwb2.gif";
    "http:" === location.protocol && (c = "http://sestat.baidu.com/mwb2.gif");
    var d = {time: 1, ia: 1, disp_comm: 1, disp_content: 1, et_js: 2, count_comm: 2, dist_comm: 2, pf_comm: 2},
      l = function () {
        function t(e) {
          n(this, t);
          var i = {sample: 0};
          this.validateOptions(e), this.options = a.extend(i, e), this.random = Math.random(), this.options.sample && (this.options.curSample = Math.random() < this.options.sample ? 1 : 0), this.updateCurSample(), this.initException(), this.options.ia && this.initIa && this.initIa()
        }

        return s(t, [{
          key: "updateCurSample", value: function () {
            var t = this;
            Object.keys(this.options).forEach(function (e) {
              var i = t.options[e];
              i && i.sample && !i.curSample && (t.options[e].curSample = Math.random() < i.sample ? 1 : 0)
            })
          }
        }, {
          key: "validateOptions", value: function (t) {
            var e = ["pid", "lid"];
            if ("object" !== (void 0 === t ? "undefined" : o(t))) throw new Error("Options must be an object!");
            if (!e.every(function (e) {
              return e in t
            })) throw new Error("Options " + e.join(", ") + " required")
          }
        }, {
          key: "updateOption", value: function (t) {
            this.options = a.extend(this.options, t), this.updateCurSample()
          }
        }, {
          key: "wrapCommonParam", value: function (t, e, i) {
            var n = {
              pid: this.options.pid,
              lid: this.options.lid,
              ts: Date.now(),
              type: t,
              info: e,
              ext: this.options.ext ? this.options.ext : {}
            };
            return i && (n.dim = i), n
          }
        }, {
          key: "hitSample", value: function (t) {
            var e = this.options[t];
            return e ? "sample" in e ? "eachreq" === e.sampleType ? e.sample && Math.random() <= e.sample ? 1 : 0 : e.curSample : "eachreq" === this.options.sampleType ? this.options.sample && Math.random() <= this.options.sample ? 1 : 0 : this.options.curSample : 0
          }
        }, {
          key: "getLogHost", value: function (t) {
            var e = this.options;
            return e[t] && e[t].logHost || e.logHost ? e[t] && e[t].logHost ? e[t].logHost : e.logHost : 2 === d[t] ? c : r
          }
        }, {
          key: "send", value: function (t, e, i, n, o) {
            if (this.hitSample(t)) {
              "function" == typeof i && (o = n, n = i, i = null);
              var s = this.wrapCommonParam(t, e, i);
              a.extend(s, o), s && s.ext ? s.ext.path = location.pathname : s && !s.ext && (s.ext = {path: location.pathname});
              var r = a.guid(), c = window[r] = new Image;
              c.onload = function (t) {
                n && ("function" == typeof n ? n(t) : n.successCb && "function" == typeof n.successCb && n.successCb(t)), delete window[r]
              }, c.onerror = function (t) {
                n && n.errorCb && "function" == typeof n.errorCb && n.errorCb(t), delete window[r]
              }, c.src = this.getLogHost(t) + "?" + a.stringify(s)
            }
          }
        }, {
          key: "sendBeacon", value: function (t, e, i, n) {
            if (this.hitSample(t)) {
              var o = this.wrapCommonParam(t, e, i);
              a.extend(o, n), o && o.ext ? o.ext.path = location.pathname : o && !o.ext && (o.ext = {path: location.pathname}), navigator.sendBeacon ? navigator.sendBeacon(this.getLogHost(t) + "?" + a.stringify(o)) || this.send(t, e, i) : this.send(t, e, i)
            }
          }
        }, {
          key: "destroy", value: function () {
            this.destroyJsException(), this.destroyIaMonitor(), this.destroyMediaTime()
          }
        }]), t
      }();
    e["default"] = l, t.exports = e["default"]
  }, function (t, e, i) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {"default": t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = i(8), s = n(o), a = i(1), r = n(a), c = i(9), d = n(c), l = i(2), u = n(l), m = i(3), p = n(m), f = i(4),
      h = n(f), b = i(5), g = n(b), v = i(6), w = n(v), _ = i(0);
    _.extend(w["default"].prototype, s["default"]), _.extend(w["default"].prototype, r["default"]), _.extend(w["default"].prototype, d["default"]), _.extend(w["default"].prototype, u["default"]), _.extend(w["default"].prototype, p["default"]), _.extend(w["default"].prototype, h["default"]), _.extend(w["default"].prototype, g["default"]), e["default"] = w["default"], t.exports = e["default"]
  }, function (t, e, i) {
    "use strict";

    function n(t, e) {
      return -1 !== t.indexOf(e)
    }

    function o(t) {
      s.getPageHiddenValue(t) ? this.iaHideCb(t) : this.iaShowCb(t)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var s = i(0), a = ["bf", "scroll", "resize"];
    e["default"] = {
      initIa: function () {
        this.iaTimer = null, this.curSpeed = 4e3, this.iaQueue = [], this.lastQueueLen = -1, this.iaDim = {}, this.iaSendSwitch = !1, this.scrollCb = this.sendScrollLog.bind(this), this.resizeCb = this.sendResizeLog.bind(this), this.iaVisibilityCb = o.bind(this), this.iaHideCb = this.iaHideCb.bind(this), this.iaShowCb = this.iaShowCb.bind(this)
      }, flushIaQueue: function () {
        var t = [].concat(this.iaQueue);
        for (this.iaQueue = []; t.length;) {
          var e = t.splice(0, 6);
          this.sendBeacon("ia", e, this.iaDim)
        }
        clearTimeout(this.iaTimer), this.startCycle()
      }, startCycle: function () {
        var t = this;
        this.iaTimer = setTimeout(function () {
          var e = t.iaQueue.length;
          -1 === t.lastQueueLen ? t.lastQueueLen = e : t.lastQueueLen && e / t.lastQueueLen >= 2 && t.curSpeed > 2e3 ? t.curSpeed -= 1e3 : e && t.lastQueueLen / e >= 2 && t.curSpeed < 6e3 ? t.curSpeed += 1e3 : !e && t.curSpeed < 6e3 ? t.curSpeed += 1e3 : e && !t.lastQueueLen && t.curSpeed > 2e3 ? t.curSpeed -= 1e3 : !e && t.curSpeed < 6e3 && (t.curSpeed += 1e3), t.lastQueueLen = e, t.flushIaQueue(), clearTimeout(t.iaTimer), t.startCycle()
        }, this.curSpeed)
      }, startIaMonitor: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.options && this.options.ia) {
          this.iaDim = s.assign(this.iaDim, t), this.resetIaSwitch(), this.iaShowCb(null, !0), this.removeMonitorEvents(), clearTimeout(this.iaTimer), this.startCycle(), this.monitorItems = a;
          var e = [];
          this.options && this.options.ia && this.options.ia.iaMonitorItems ? e = this.options.ia.iaMonitorItems : this.options && this.options.iaMonitorItems && (e = this.options.iaMonitorItems), e && Array.isArray(e) && e.length && (this.monitorItems = e.filter(function (t) {
            return n(a, t)
          }), this.monitorItems.length || (this.monitorItems = a)), this.bindMonitorEvents()
        }
      }, stopIaMonitor: function () {
        this.options && this.options.ia && (this.iaHideCb(null, !0), this.flushIaQueue(), this.removeMonitorEvents(), clearTimeout(this.iaTimer))
      }, sendScrollLog: function () {
        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.scrollLogLock || (this.scrollLogLock = !0, setTimeout(function () {
          t.scrollLogLock = !1
        }, 500), e.x >= 0 && e.y >= 0 || (e = s.getScrollInfo()), this.iaQueue.push({
          k: "scroll",
          x: e.x,
          y: e.y,
          t: (new Date).getTime(),
          ele: e.scrollEle || "window"
        }))
      }, sendResizeLog: function () {
        var t = this;
        this.resizeLogLock || (this.resizeLogLock = !0, setTimeout(function () {
          t.resizeLogLock = !1
        }, 500), setTimeout(function () {
          t.iaQueue.push({
            k: "resize",
            w: window.innerWidth || document.documentElement.clientWidth,
            h: window.innerHeight || document.documentElement.clientHeight,
            t: (new Date).getTime()
          })
        }, 50))
      }, bindMonitorEvents: function () {
        var t = this.monitorItems;
        n(t, "bf") && (s.getProp(document, "hidden") && s.bindVisibilityChangeEvent(this.iaVisibilityCb), window.addEventListener("beforeunload", this.iaHideCb, !1), window.addEventListener("unload", this.iaHideCb, !1), window.addEventListener("pagehide", this.iaHideCb, !1), window.addEventListener("pageshow", this.iaShowCb, !1)), n(t, "scroll") && window.addEventListener("scroll", this.scrollCb), n(t, "resize") && window.addEventListener("resize", this.resizeCb)
      }, removeMonitorEvents: function () {
        window.removeEventListener("scroll", this.scrollCb), window.removeEventListener("resize", this.resizeCb), s.disposeVisibilityChangeEvent(this.iaVisibilityCb), window.removeEventListener("beforeunload", this.iaHideCb, !1), window.removeEventListener("unload", this.iaHideCb, !1), window.removeEventListener("pagehide", this.iaHideCb, !1), window.removeEventListener("pageshow", this.iaShowCb, !1)
      }, updateIaDim: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.iaDim = t
      }, resetIaSwitch: function () {
        this.iaSendSwitch = !1
      }, convertIaSwitch: function () {
        this.iaSendSwitch = !this.iaSendSwitch
      }, iaHideCb: function (t, e) {
        if (this.iaSendSwitch || e) {
          var i = t ? t.type : "";
          e && (i = "manual"), this.convertIaSwitch(), this.iaQueue.push({
            k: "blur",
            trigger: i,
            t: (new Date).getTime()
          }), this.flushIaQueue()
        }
      }, iaShowCb: function (t, e) {
        if (!this.iaSendSwitch || e) {
          var i = t ? t.type : "";
          e && (i = "manual"), this.convertIaSwitch(), this.iaQueue.push({
            k: "focus",
            trigger: i,
            t: (new Date).getTime()
          }), this.flushIaQueue()
        }
      }, destroyIaMonitor: function () {
        this.removeMonitorEvents(), clearTimeout(this.iaTimer), this.iaTimer = null, this.curSpeed = null, this.iaQueue = null, this.lastQueueLen = null, this.iaDim = null, this.scrollCb = null, this.resizeCb = null, this.pageActiveStatusChangeCb = null
      }
    }, t.exports = e["default"]
  }, function (t, e, i) {
    "use strict";

    function n() {
      var t = this.__media__;
      t.sendSwitch = !0, t.continueSwitch = !1
    }

    function o() {
      var t = this.__media__;
      t.sendSwitch = !t.sendSwitch, t.continueSwitch = !t.continueSwitch
    }

    function s(t) {
      c.getPageHiddenValue(t) ? this.mediaHideCb(t) : this.mediaShowCb(t)
    }

    function a() {
      var t = this.__media__ || {};
      t.continueSwitch && (this.convertMediaSwitch(), t.count += 1, t.startTime = Date.now())
    }

    function r(t, e) {
      var i = this.__media__;
      if (i.sendSwitch || e) {
        var n = t ? t.type : "";
        e && (n = "manual"), i.endTime = Date.now(), this.convertMediaSwitch();
        var o = {t1: i.startTime, t2: i.endTime, count: i.count, trigger: n};
        this.sendBeacon(d, o, i.dim)
      }
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var c = i(0), d = "time";
    e["default"] = {
      initMediaTime: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = this.__media__ = {dim: e, startTime: 0, endTime: 0, count: 1, sendSwitch: !0, continueSwitch: !1};
        t ? i.startTime = t : window.__webbbrige__ && window.__webbbrige__.startTime ? (i.startTime = window.__webbbrige__.startTime, window.__webbbrige__.startTime = null) : i.startTime = Date.now(), this.hasMediaInit = !0, this.mediaHideCb = r.bind(this), this.mediaShowCb = a.bind(this), this.mediaVisibilityCb = s.bind(this), this.resetMediaSwitch = n.bind(this), this.convertMediaSwitch = o.bind(this), this.destroyMediaEvent(), this.bindMediaEvent()
      }, reStartMediaTime: function (t) {
        if (!this.hasMediaInit) return void this.initMediaTime();
        var e = this.__media__;
        e.count = t ? 1 : e.count + 1, e.startTime = Date.now(), this.resetMediaSwitch(), this.destroyMediaEvent(), this.bindMediaEvent()
      }, stopMediaTime: function () {
        !this.__media__ || this.__media__ && !this.__media__.startTime || (this.mediaHideCb(null, !0), this.destroyMediaEvent(), this.__media__.startTime = null)
      }, updateMediaDim: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.__media__.dim = t
      }, bindMediaEvent: function () {
        c.getProp(document, "hidden") && c.bindVisibilityChangeEvent(this.mediaVisibilityCb), window.addEventListener("beforeunload", this.mediaHideCb, !1), window.addEventListener("unload", this.mediaHideCb, !1), window.addEventListener("pagehide", this.mediaHideCb, !1), window.addEventListener("pageshow", this.mediaShowCb, !1)
      }, destroyMediaEvent: function () {
        c.disposeVisibilityChangeEvent(this.mediaVisibilityCb), window.removeEventListener("beforeunload", this.mediaHideCb, !1), window.removeEventListener("unload", this.mediaHideCb, !1), window.removeEventListener("pagehide", this.mediaHideCb, !1), window.removeEventListener("pageshow", this.mediaShowCb, !1)
      }, destroyMediaTime: function () {
        this.destroyMediaEvent(), this.__media__ = null, this.hasMediaInit = !1, this.mediaHideCb = null, this.mediaShowCb = null, this.mediaVisibilityCb = null, this.resetMediaSwitch = null, this.convertMediaSwitch = null
      }
    }, t.exports = e["default"]
  }])
}), $(window).on("swap_begin", function () {
  bds && bds.se && void 0 !== bds.se.displayTime && null !== bds.se.displayTime && (clearTimeout(bds.se.displayTime), bds.se.displayTime = null)
}).on("confirm", function () {
  bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function () {
    bds && bds.se && bds.se.display(), bds.se.displayTime = null
  }, 5e3))), bds && bds.se.userAction.collect()
}).on("swap_end", function (t, e) {
  !e && bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function () {
    bds && bds.se && bds.se.display(), bds.se.displayTime = null
  }, 5e3))), !e && bds && bds.se.userAction.collect(), bds.log.send.sendNow("flow_monitor", {}, {
    qid: bds.comm.qid,
    log: {},
    len: 1
  })
}), $(window).on("swap_end", function () {
  bds.comm.__rdNum && bds.comm.__rdNum > 9e3 && setTimeout(function () {
    $.ajax({
      dataType: "script",
      cache: !0,
      url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/clean_7973b0f.js",
      success: function () {
        bds.se.cleanCookie.init()
      }
    })
  }, 0)
}), window.icodetest = 12, $(window).on("swap_end", function () {
  bds && bds.comm && bds.comm.sampleval && $.inArray("ZOOM_TEST", bds.comm.sampleval) > -1 ? require(["plugins/zoom_prompt"], function (t) {
    t()
  }) : bds && bds.comm && bds.comm.sampleval && $.inArray("ZOOM_COMP", bds.comm.sampleval) > -1 && require(["lib/get_zoom"], function (t) {
    var e = t();
    e && 1 != e && ns_c({fm: "behs", qid: bds.comm.qid, tab: "baidu_zoomshow"})
  })
}), $(window).on("swap_end", function () {
  if (bds && bds.comm && bds.comm.sampleval && $.inArray("qrcode", bds.comm.sampleval) > -1) {
    var t = encodeURIComponent(bds.comm.query);
    t.length <= 150 && require(["plugins/pcToWise"], function (e) {
      e(t)
    })
  }
}), $(document).ready(function () {
  require(["plugins/frontend_sample"], function (t) {
    t("op_https_cert_usable", .001) && require(["plugins/https_useable_sample"], function (t) {
      t(document, $)
    })
  }), require(["plugins/safeIcon"], function (t) {
    t.init()
  })
}), !function () {
  var t = navigator.userAgent, e = t.match(/MSIE\s*(\d+)/), i = e && e[1] && +e[1] <= 9;
  i || require(["plugins/swfobject", "soutu/js/tu"], function (t, e) {
    if (/^\/imgsearch/.test(location.pathname)) {
      var i = $("#content_left").find(".result-op"), n = [];
      i.each(function () {
        var t = $(this), e = t.attr("tpl");
        "tu_relate_site" === e && (e += "@" + t.find(".op-tu-relate-site-result").length), n.push(e)
      }), e.log({rsv_imageshow: n.join(":")}), $("#page").hide(), $("#wrapper").outerHeight() < $(document).outerHeight() && $("#foot").addClass("foot_fixed_bottom")
    }
  })
}(), !function () {
  function t(t) {
    var e = ["voice_beha=1"],
      i = window.bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
    for (var n in t) t.hasOwnProperty(n) && e.push(n + "=" + t[n]);
    var o = window["nsIMG" + +new Date] = new Image;
    return o.src = i + "/v.gif?pid=201&" + e.join("&"), !0
  }

  (location.href.match(/voice=1/) || navigator.userAgent.match(/mac os x/i)) && require(["plugins/swfobject", "voice/js/voice"], function (e, i) {
    if (i.log = t, i && i.support()) {
      i.addStyle(), window.__supportvoice = !0;
      var n = $("#form .ipt_rec");
      n.css("display", "block"), n.click(function () {
        var t = i.init({url: bds.util.domain.get("http://vse.baidu.com") + "/echo.fcgi"});
        t.done(function (t) {
          t.openUI(), t.onfinish(function (t) {
            var e = t.content.item[0], i = t && t.result ? t.result.corpus_no : "";
            changeUrl("wd=" + encodeURIComponent(e) + "&rsv_voice=1&hsug_mtype=2&rsv_vcorpus=" + encodeURIComponent(i)), bds.comm.lastVoiceQuery = e
          }), i.log({q: "resolve"})
        }).fail(function () {
          i.log({q: "reject"}), alert("不能获得麦克风的权限")
        }), i.log({q: "start"})
      })
    }
  })
}(), $(document).ready(function () {
  bds.comm && bds.comm.ishome && !$(".s_tab .s_tab_inner").get(0) && $(".s_tab").wrapInner("<div class='s_tab_inner'></div>")
}), $(document).ready(function () {
  require(["plugins/hotWord"], function (t) {
    t.init()
  })
}), $(window).on("index_off", function () {
  require(["plugins/hotWord"], function (t) {
    t.destroy()
  })
});

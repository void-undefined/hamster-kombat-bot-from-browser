(() => {
    "use strict";
    var e = {
            63878: (e, t, r) => {
                var n = r(87363),
                    a = r.n(n);
                const s = ReactRouterDOM;
                r(75139);
                var i = r(73271),
                    o = r(53949),
                    c = (r(78599), r(74165)),
                    l = r(15861),
                    u = r(70885),
                    d = r(46541),
                    _ = r(1677),
                    m = r(2627),
                    p = r(45929),
                    h = r(8786),
                    f = () => {
                        var e, t, r = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user,
                            n = {
                                en: "en_US",
                                "zh-hans": "zh_CN",
                                "zh-hant": "zh_TW"
                            } [(null === r || void 0 === r ? void 0 : r.language_code) || "en"] || "en_US";
                        return h.Z.set("locale", n), window._okGlobal && (window._okGlobal.locale = n), {
                            project: "okx_web_growth",
                            site: "okx",
                            locale: n
                        }
                    };
                const x = "App_container__p+0qT",
                    v = "App_navbar__zvxzr",
                    g = "App_content__Jjurs";
                var k = r(28683);
                const j = "NoPaddingLayout_no-padding-layout__6LAKV";
                var b = r(45263),
                    w = e => t => (0, b.jsx)("div", {
                        className: j,
                        children: (0, b.jsx)(e, (0, k.Z)({}, t))
                    });
                const N = "ComPaddingLayout_common-padding-layout__0gGbM";
                var C = e => t => (0, b.jsx)("div", {
                        className: N,
                        children: (0, b.jsx)(e, (0, k.Z)({}, t))
                    }),
                    y = r(44925),
                    O = r(95640),
                    Z = r.n(O),
                    E = r(14300),
                    P = r(72106),
                    S = "/mini-app/racer",
                    I = "/mini-app/racer/referrals",
                    B = "/mini-app/racer/tasks",
                    R = "/mini-app/racer/leaderboard",
                    T = "/mini-app/racer/rewards";
                const L = "Navbar_navbar__LF3-M",
                    A = "Navbar_link__qX0Sf",
                    M = "Navbar_active__TCbF8",
                    U = "Navbar_linkIcon__GtH54",
                    F = "Navbar_linkText__Szxi-";
                var D = ["iconName", "label"],
                    G = e => {
                        var t = e.iconName,
                            r = e.label,
                            n = (0, y.Z)(e, D),
                            a = (0, s.useRouteMatch)({
                                path: n.to,
                                exact: !0
                            });
                        return (0, b.jsxs)(s.Link, {
                            className: Z()(A, a && M),
                            to: n.to,
                            children: [(0, b.jsx)(P.Z, {
                                iconName: t,
                                className: U
                            }), (0, b.jsx)("span", {
                                className: F,
                                children: r
                            })]
                        })
                    },
                    V = () => (0, b.jsxs)("div", {
                        className: L,
                        children: [(0, b.jsx)(G, {
                            iconName: "okx-growth-home",
                            to: S,
                            label: (0, E.O4)("ok_game_okxracer_home")
                        }), (0, b.jsx)(G, {
                            iconName: "okx-growth-leaderboard",
                            to: R,
                            label: (0, E.O4)("ok_game_okxracer_leaderboard")
                        }), (0, b.jsx)(G, {
                            iconName: "okx-growth-task",
                            to: B,
                            label: (0, E.O4)("ok_game_okxracer_tasks")
                        }), (0, b.jsx)(G, {
                            iconName: "okx-growth-friends",
                            to: I,
                            label: (0, E.O4)("ok_game_okxracer_friends")
                        }), (0, b.jsx)(G, {
                            iconName: "okx-growth-surprises",
                            to: T,
                            label: (0, E.O4)("ok_game_okxracer_surprises")
                        })]
                    });

                function W(e) {
                    return "TelegramWebviewProxy" in e && function(e) {
                        return "object" === typeof e && null !== e && !Array.isArray(e)
                    }(e.TelegramWebviewProxy) && "postEvent" in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
                }
                var H = () => ((0, n.useEffect)((() => {
                        var e, t, r, n, a, s, i, o, c, l, u, d;
                        null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (r = (n = window.Telegram.WebApp).ready) || void 0 === r || r.call(n), null === (a = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === a || a.call(s, "#0D0D0D"), null === (i = (o = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(o, "#0D0D0D"), null === (c = (l = window.Telegram.WebApp).expand) || void 0 === c || c.call(l), null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d))
                    }), []), {
                        hasWebviewProxy: W(window)
                    }),
                    Y = r(4860),
                    z = r(72202),
                    K = {
                        uid: "",
                        username: "",
                        lastName: "",
                        firstName: "",
                        startParam: "",
                        gameId: 1
                    },
                    Q = (0, n.createContext)(K),
                    q = () => (0, n.useContext)(Q),
                    X = e => {
                        var t = e.children,
                            r = (0, n.useMemo)((() => {
                                var e, t, r = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                                        user: {}
                                    },
                                    n = r.user,
                                    a = r.start_param;
                                if (n) {
                                    var s = n.id,
                                        i = n.username,
                                        o = n.first_name,
                                        c = n.last_name,
                                        l = i;
                                    if (o || c) {
                                        var u = o && o ? " " : "";
                                        l = "".concat(o).concat(u).concat(c)
                                    }
                                    return {
                                        uid: null === s || void 0 === s ? void 0 : s.toString(),
                                        username: l,
                                        lastName: c,
                                        firstName: o,
                                        startParam: a,
                                        gameId: 1
                                    }
                                }
                                return K
                            }), []),
                            a = (0, n.useState)(r),
                            s = (0, u.Z)(a, 1)[0];
                        return (0, b.jsx)(Q.Provider, {
                            value: s,
                            children: t
                        })
                    },
                    J = (e, t) => {
                        e ? p.Z.success({
                            title: t || (0, E.O4)("ok_game_okxracer_success"),
                            placement: p.Z.DIRECTION.topRight,
                            showClose: !1
                        }) : p.Z.error({
                            title: t || (0, E.O4)("ok_game_okxracer_failed"),
                            placement: p.Z.DIRECTION.topRight,
                            showClose: !1
                        })
                    },
                    $ = e => {
                        var t = null === e || void 0 === e ? void 0 : e.error_message;
                        J(!1, t || (0, E.O4)("ok_game_okxracer_error_high_traffic"))
                    },
                    ee = r(60378),
                    te = r(4422);
                const re = utils.ont;
                var ne = r.n(re),
                    ae = e => {
                        var t = (e || {}).data;
                        return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
                    },
                    se = e => t => ((0, ee.y)() || te.k.warn("Request error, url=".concat(e), t), Promise.reject(t)),
                    ie = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t, r) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", ne().get(t, r).then(ae, se(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    oe = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t, r) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", ne().getWithCache(t, r).then(ae, se(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ce = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t, r, n) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", ne().post(t, r, n).then(ae, se(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    le = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t, r, n) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", ne().put(t, r, n).then(ae, se(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ue = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t, r) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", ne().delete(t, r).then(ae, se(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    de = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t, r, n) {
                            var a;
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = new FormData, Object.entries(null !== r && void 0 !== r ? r : {}).forEach((e => {
                                            var t = (0, u.Z)(e, 2),
                                                r = t[0],
                                                n = t[1];
                                            n instanceof Blob ? a.append(r, n) : a.append(r, String(n))
                                        })), e.abrupt("return", ce(t, a, n));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }();
                const _e = {
                    get: ie,
                    getWithCache: oe,
                    post: ce,
                    put: le,
                    postForm: de,
                    delete: ue
                };
                var me = "/priapi/v1/affiliate",
                    pe = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", _e.post("".concat(me, "/game/racer/info"), t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    he = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", _e.post("".concat(me, "/game/racer/assess"), t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    fe = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            var r, n;
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, _e.get("".concat(me, "/game/racer/invitee-list"), {
                                            params: t
                                        });
                                    case 3:
                                        if (r = e.sent, !(n = r.data)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", n);
                                    case 7:
                                        return e.abrupt("return", null);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(0), e.t0, e.abrupt("return", null);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    xe = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            var r, n;
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, _e.get("".concat(me, "/game/racer/leaderboard/friends"), {
                                            params: t
                                        });
                                    case 3:
                                        if (r = e.sent, !(n = r.data)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", n);
                                    case 7:
                                        return e.abrupt("return", null);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(0), $(e.t0), e.abrupt("return", null);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ve = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            var r, n;
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, _e.get("".concat(me, "/game/racer/leaderboard/global"), {
                                            params: t
                                        });
                                    case 3:
                                        if (r = e.sent, !(n = r.data)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", n);
                                    case 7:
                                        return e.abrupt("return", null);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(0), $(e.t0), e.abrupt("return", null);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ge = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", _e.get("".concat(me, "/game/racer/boosts"), {
                                            params: t
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ke = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", _e.post("".concat(me, "/game/racer/boost"), t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    je = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", _e.get("".concat(me, "/game/racer/tasks"), {
                                            params: t
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    be = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", _e.post("".concat(me, "/game/racer/task"), t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    we = function() {
                        var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                            var r, n, a;
                            return (0, c.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, _e.post("".concat(me, "/game/racer/account-binding"), t);
                                    case 2:
                                        if (r = e.sent, n = r.code, a = r.data, 0 !== n || !a) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            isConnectTelegram: 1 === a.tgBindingStatus,
                                            isKyc: 1 === a.kycVerifyStatus,
                                            signupLink: a.signupLink,
                                            downloadLink: a.downloadLink,
                                            bindTgLink: a.bindTgLink,
                                            verifyKycLink: a.verifyKycLink
                                        });
                                    case 7:
                                        return e.abrupt("return", null);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Ne = (0, n.createContext)({
                        points: 0,
                        numChances: 0,
                        numChancesTotal: 0,
                        countdownDisplay: "",
                        isLoading: !0,
                        linkCode: "",
                        updateGameInfo: () => {},
                        updateGameInfoFromServer: () => {}
                    }),
                    Ce = () => (0, n.useContext)(Ne),
                    ye = e => {
                        var t, r = e.children,
                            a = (0, n.useState)(0),
                            s = (0, u.Z)(a, 2),
                            i = s[0],
                            o = s[1],
                            d = (0, n.useState)(0),
                            _ = (0, u.Z)(d, 2),
                            m = _[0],
                            p = _[1],
                            h = (0, n.useState)(0),
                            f = (0, u.Z)(h, 2),
                            x = f[0],
                            v = f[1],
                            g = (0, n.useState)(0),
                            k = (0, u.Z)(g, 2),
                            j = k[0],
                            w = k[1],
                            N = (0, n.useState)(""),
                            C = (0, u.Z)(N, 2),
                            y = C[0],
                            O = C[1],
                            Z = (0, n.useState)(!0),
                            P = (0, u.Z)(Z, 2),
                            S = P[0],
                            I = P[1],
                            B = q(),
                            R = B.uid,
                            T = B.gameId,
                            L = B.username,
                            A = B.startParam,
                            M = (0, n.useState)(""),
                            U = (0, u.Z)(M, 2),
                            F = U[0],
                            D = U[1],
                            G = null !== (t = new Y.Z((A || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "",
                            V = (0, n.useCallback)((0, l.Z)((0, c.Z)().mark((function e() {
                                var t, r;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, pe({
                                                extUserId: R,
                                                extUserName: L,
                                                gameId: T,
                                                linkCode: G
                                            });
                                        case 3:
                                            t = e.sent, (r = t.data) && (o(Math.max(r.balancePoints, 0)), O(r.linkCode), p(r.numChances), w(r.secondToRefresh), v(r.numChancesTotal), I(!1)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), J(!1, (0, E.O4)("ok_game_okxracer_error_high_traffic"));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            }))), [T, G, R, L]);
                        (0, n.useEffect)((() => {
                            V()
                        }), [V]), (0, n.useEffect)((() => {
                            var e = new z.Z(j);
                            return j > 0 ? (e.start(), e.addEventListener(z.Z.Event.UPDATE, (e => {
                                D("".concat(e.minute, ":").concat(e.second))
                            })), e.addEventListener(z.Z.Event.FINISH, (() => {
                                D(""), V()
                            }))) : (null === e || void 0 === e || e.end(), D("")), () => {
                                null === e || void 0 === e || e.end()
                            }
                        }), [j, V]), (0, n.useEffect)((() => {
                            function e() {
                                document.hidden || V()
                            }
                            return document.addEventListener("visibilitychange", e), () => {
                                document.removeEventListener("visibilitychange", e)
                            }
                        }), [V]);
                        var W = (0, n.useCallback)((e => {
                                o(Math.max(e.points, 0)), p(e.numChances), w(e.secondToRefresh)
                            }), []),
                            H = (0, n.useCallback)((0, l.Z)((0, c.Z)().mark((function e() {
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, V();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), [V]),
                            K = (0, n.useMemo)((() => ({
                                isLoading: S,
                                points: i,
                                numChances: m,
                                numChancesTotal: x,
                                countdownDisplay: F,
                                updateGameInfo: W,
                                linkCode: y,
                                updateGameInfoFromServer: H
                            })), [S, i, m, x, F, y, W, H]);
                        return (0, b.jsx)(Ne.Provider, {
                            value: K,
                            children: r
                        })
                    },
                    Oe = r(8031);
                var Ze = new class {
                        constructor() {
                            this.instId = "BTC-USDT", this.channel = "tickers", this.channelSubscribe = {
                                op: "subscribe",
                                args: [{
                                    channel: this.channel,
                                    instId: this.instId
                                }]
                            }, this.handleList = [], this.connection = void 0, this.initConnect = () => {
                                this.connection.onSocketConnected((() => {
                                    this.onConnected()
                                })), this.connection.connect(), this.addPageHideEvent()
                            }, this.onConnected = () => {
                                this.connection.sendChannel(JSON.stringify(this.channelSubscribe)), this.connection.setPushDataResolver(this.onResolve)
                            }, this.onResolve = e => {
                                var t = e.arg,
                                    r = e.data;
                                if (t.channel === this.channel && t.instId === this.instId) {
                                    var n = ((null === r || void 0 === r ? void 0 : r[0]) || {}).last;
                                    n && this.handleList.forEach((e => {
                                        e(Number(n))
                                    }))
                                }
                            }, this.disconnect = () => {
                                this.connection.disconnect()
                            }, this.addCallback = e => {
                                this.handleList.push(e)
                            }, this.connection = new Oe.Z({
                                connectUrl: "wss://wspri.okx.com:8443/ws/v5/ipublic"
                            }), this.initConnect()
                        }
                        addPageHideEvent() {
                            window.addEventListener("visibilitychange", (() => {
                                document.hidden ? this.disconnect() : (this.connection.onSocketConnected(this.onConnected), this.connection.connect())
                            }))
                        }
                    },
                    Ee = (0, n.createContext)(Ze),
                    Pe = e => {
                        var t = e.children;
                        return (0, b.jsx)(Ee.Provider, {
                            value: Ze,
                            children: t
                        })
                    },
                    Se = (0, n.createContext)(null),
                    Ie = () => (0, n.useContext)(Se),
                    Be = e => {
                        var t = e.children,
                            r = (0, n.useState)(null),
                            a = (0, u.Z)(r, 2),
                            s = a[0],
                            i = a[1],
                            o = (0, n.useContext)(Ee);
                        return (0, n.useEffect)((() => {
                            o.addCallback((e => {
                                i(Number(e))
                            }))
                        }), [o]), (0, b.jsx)(Se.Provider, {
                            value: s,
                            children: t
                        })
                    },
                    Re = r(46430),
                    Te = "racer",
                    Le = () => {
                        var e;
                        if (!(0, ee.y)()) return Re.Z.getInstance(Te) || Re.Z.init({
                            project: Te
                        }), null !== (e = Re.Z.getInstance(Te)) && void 0 !== e ? e : Re.Z
                    },
                    Ae = "guessRecords_new";

                function Me(e) {
                    var t = Le().get(Ae) || [];
                    t.unshift(e), Le().set(Ae, t.slice(0, 5))
                }
                var Ue = function(e) {
                        return e.UP = "up", e.DOWN = "down", e.NONE = "none", e
                    }({}),
                    Fe = {
                        countdown: 5,
                        onButtonClick: () => {},
                        result: null,
                        isPending: !1,
                        currentTrend: Ue.NONE,
                        multiplier: 1,
                        basePoints: 10,
                        predict: Ue.NONE,
                        changeRate: null,
                        prevPrice: null,
                        currentPrice: null
                    },
                    De = (0, n.createContext)(Fe),
                    Ge = () => (0, n.useContext)(De),
                    Ve = e => {
                        var t = e.children,
                            r = (0, n.useState)(!1),
                            a = (0, u.Z)(r, 2),
                            s = a[0],
                            i = a[1],
                            o = (0, n.useState)(5),
                            d = (0, u.Z)(o, 2),
                            _ = d[0],
                            m = d[1],
                            p = (0, n.useState)(null),
                            h = (0, u.Z)(p, 2),
                            f = h[0],
                            x = h[1],
                            v = (0, n.useState)(null),
                            g = (0, u.Z)(v, 2),
                            k = g[0],
                            j = g[1],
                            w = (0, n.useState)(Ue.NONE),
                            N = (0, u.Z)(w, 2),
                            C = N[0],
                            y = N[1],
                            O = Ie(),
                            Z = q(),
                            P = Z.uid,
                            S = Z.gameId,
                            I = Ce().updateGameInfo,
                            B = (0, n.useRef)(Ue.NONE),
                            R = (0, n.useRef)(1),
                            T = (0, n.useRef)(10),
                            L = (0, n.useRef)(null),
                            A = (0, n.useRef)(null),
                            M = (0, n.useRef)(null),
                            U = (0, n.useCallback)((0, l.Z)((0, c.Z)().mark((function e() {
                                var t, r, n;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = B.current === Ue.UP ? 1 : 0, e.next = 4, he({
                                                extUserId: P,
                                                predict: t,
                                                gameId: S
                                            });
                                        case 4:
                                            r = e.sent, (n = r.data) && (j(n.won), I({
                                                points: n.balancePoints,
                                                numChances: n.numChance,
                                                secondToRefresh: n.secondToRefresh
                                            }), R.current = n.multiplier, T.current = n.basePoint, L.current = Number(n.changeRate), A.current = n.prevPrice, M.current = n.currentPrice, Me({
                                                curCombo: n.curCombo,
                                                won: n.won,
                                                predict: t,
                                                date: (new Date).valueOf()
                                            })), e.next = 14;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), j(null), L.current = null, J(!1, (0, E.O4)("ok_game_okxracer_error_high_traffic"));
                                        case 14:
                                            return e.prev = 14, B.current = Ue.NONE, i(!1), e.finish(14);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9, 14, 18]
                                ])
                            }))), [S, P, I]);
                        (0, n.useEffect)((() => {
                            var e = null;
                            if (s) {
                                var t = 5;
                                m(t), e = setInterval((() => {
                                    m(t -= 1), 0 === t && (e && clearInterval(e), x(null), U())
                                }), 1e3)
                            }
                            return () => {
                                e && clearTimeout(e)
                            }
                        }), [U, s]), (0, n.useEffect)((() => {
                            if (s && O)
                                if (f) {
                                    var e = O > f;
                                    y(O === f ? Ue.NONE : e ? Ue.UP : Ue.DOWN)
                                } else x(O)
                        }), [f, s, O]);
                        var F = (0, n.useCallback)((e => {
                                j(null), i(!0), B.current = e, L.current = null
                            }), []),
                            D = (0, n.useMemo)((() => ({
                                countdown: _,
                                onButtonClick: F,
                                result: k,
                                isPending: s,
                                currentTrend: C,
                                multiplier: R.current,
                                basePoints: T.current,
                                predict: B.current,
                                changeRate: L.current,
                                prevPrice: A.current,
                                currentPrice: M.current
                            })), [_, C, s, R, F, k]);
                        return (0, b.jsx)(De.Provider, {
                            value: D,
                            children: t
                        })
                    },
                    We = r(94595),
                    He = r(79459),
                    Ye = 2e3,
                    ze = 500;

                function Ke(e) {
                    return (Math.abs(e) < 1e-4 ? He.yx.ceilTruncate : He.yx.floorTruncate)(e, 4)
                }
                const Qe = "GuessResult_container__ECdpL",
                    qe = "GuessResult_title__fzYxg",
                    Xe = "GuessResult_multiplier__yRHWm",
                    Je = "GuessResult_description__R2fup",
                    $e = "GuessResult_detailsIcon__ZE7Ry",
                    et = "GuessResult_changeRateContainer__a5-N7",
                    tt = "GuessResult_label__+b5Nz",
                    rt = "GuessResult_changeRate__yhVz3",
                    nt = "GuessResult_up__5vYDR",
                    at = "GuessResult_down__fa-oP",
                    st = "GuessResult_priceChange__xr6e8",
                    it = "GuessResult_price__Vk+bY";

                function ot(e) {
                    return (0, We.xG)((0, We.uf)(He.yx.truncate(e, 1, !0)), {
                        code: "USD",
                        currencyDisplay: "narrowSymbol"
                    })
                }
                var ct = e => {
                    var t = e.className,
                        r = Ge(),
                        a = r.result,
                        s = r.multiplier,
                        i = r.changeRate,
                        o = r.prevPrice,
                        c = r.currentPrice,
                        l = (0, n.useState)(!1),
                        d = (0, u.Z)(l, 2),
                        _ = d[0],
                        m = d[1];
                    return (0, n.useEffect)((() => {
                        var e, t;
                        if (null !== a) {
                            var r, n, s, i;
                            if (null !== (r = window) && void 0 !== r && null !== (n = r.Telegram) && void 0 !== n && n.WebApp) null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, a ? "success" : "error");
                            e = setTimeout((() => {
                                m(!0), t = setTimeout((() => {
                                    m(!1)
                                }), Ye)
                            }), ze)
                        }
                        return () => {
                            clearTimeout(e), clearTimeout(t)
                        }
                    }), [a]), (0, b.jsx)(b.Fragment, {
                        children: _ && (0, b.jsxs)("div", {
                            className: Z()(t, Qe),
                            children: [(0, b.jsx)("p", {
                                className: Xe,
                                children: a ? (0, b.jsxs)("span", {
                                    className: $e,
                                    children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                                }) : (0, b.jsx)("span", {
                                    className: $e,
                                    children: "\ud83e\udd72"
                                })
                            }), (0, b.jsx)("h2", {
                                className: qe,
                                children: (0, E.O4)(a ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                            }), (0, b.jsxs)("div", {
                                className: Je,
                                children: [null !== i && (0, b.jsxs)("p", {
                                    className: et,
                                    children: [(0, b.jsx)("span", {
                                        className: tt,
                                        children: (0, E.O4)("ok_game_okxracer_btc_price")
                                    }), (0, b.jsx)("span", {
                                        className: Z()(rt, {
                                            [nt]: i > 0,
                                            [at]: i < 0
                                        }),
                                        children: (0, We.uf)(Ke(i), {
                                            style: "percent",
                                            signDisplay: !0
                                        })
                                    })]
                                }), o && c && (0, b.jsx)("p", {
                                    className: st,
                                    children: (0, E.Lg)("ok_game_okxracer_price_change", {
                                        previousPrice: (0, b.jsx)("span", {
                                            className: it,
                                            children: ot(o)
                                        }),
                                        currentPrice: (0, b.jsx)("span", {
                                            className: it,
                                            children: ot(c)
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                };
                var lt = {
                        BOT_NAME: "OKX_official_bot",
                        MINI_APP_NAME: "OKX_Racer"
                    },
                    ut = function(e) {
                        return e[e.unfinished = 0] = "unfinished", e[e.finished = 1] = "finished", e
                    }({}),
                    dt = function(e) {
                        return e[e.task = 0] = "task", e[e.boost = 1] = "boost", e[e.DailyTask = 2] = "DailyTask", e[e.DailyBoost = 3] = "DailyBoost", e
                    }({}),
                    _t = "/help/okx-racer-terms-and-conditions",
                    mt = r(76983),
                    pt = r(59896);
                const ht = "BackgroundVideo_container__J5sO2",
                    ft = "BackgroundVideo_muteButton__04Huj",
                    xt = "BackgroundVideo_muteButtonIcon__jW8Xs",
                    vt = "BackgroundVideo_staticImage__EpRTb",
                    gt = "BackgroundVideo_hide__ZXYN9";
                var kt, jt, bt, wt, Nt, Ct, yt = "backgroundVideoSoundOn",
                    Ot = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png",
                    Zt = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"],
                    Et = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"],
                    Pt = {
                        playsInline: !0,
                        controls: !1,
                        preload: "auto",
                        poster: "".concat(o.Z.cdnBaseUrl).concat(Ot)
                    },
                    St = () => {
                        var e = Ge().isPending,
                            t = (0, n.useRef)(null),
                            r = (0, n.useRef)(null),
                            a = (0, n.useState)(!1),
                            s = (0, u.Z)(a, 2),
                            i = s[0],
                            c = s[1],
                            l = (0, n.useState)(!1),
                            d = (0, u.Z)(l, 2),
                            _ = d[0],
                            m = d[1],
                            p = (0, n.useState)(!1),
                            h = (0, u.Z)(p, 2),
                            f = h[0],
                            x = h[1],
                            v = Le(),
                            g = (0, n.useState)((() => {
                                var e = v.get(yt);
                                return Boolean(!e)
                            })),
                            j = (0, u.Z)(g, 2),
                            w = j[0],
                            N = j[1];
                        (0, n.useEffect)((() => {
                            t.current && (e && (x(!1), t.current.currentTime = 0, t.current.play().then((() => {
                                c(!0)
                            })).catch((() => {
                                c(!1)
                            }))), t.current.onended = () => {
                                var e;
                                x(!0), null === (e = r.current) || void 0 === e || e.play().then((() => {
                                    m(!0)
                                })).catch((() => {
                                    m(!1)
                                }))
                            })
                        }), [e]);
                        var C = !i && !_,
                            y = i && f && _,
                            O = i && (!f || !_);
                        return (0, b.jsxs)("div", {
                            className: ht,
                            children: [(0, b.jsx)(mt.default, {
                                category: mt.default.CATEGORY.fill,
                                type: mt.default.TYPE.quaternary,
                                size: mt.default.SIZE.md,
                                className: ft,
                                strictCircle: !0,
                                onClick: () => {
                                    N((e => (v.set(yt, e), !e)))
                                },
                                children: (0, b.jsx)(P.Z, {
                                    iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                                    className: xt
                                })
                            }), (0, b.jsx)(pt.Z, {
                                className: Z()(vt, {
                                    [gt]: !C
                                }),
                                src: "".concat(o.Z.cdnBaseUrl).concat(Ot)
                            }), (0, b.jsx)("video", (0, k.Z)((0, k.Z)({}, Pt), {}, {
                                className: Z()({
                                    [gt]: !y
                                }),
                                ref: r,
                                loop: !0,
                                muted: !0,
                                children: Zt.map((e => (0, b.jsx)("source", {
                                    src: "".concat(o.Z.cdnBaseUrl).concat(e)
                                }, e)))
                            })), (0, b.jsx)("video", (0, k.Z)((0, k.Z)({}, Pt), {}, {
                                className: Z()({
                                    [gt]: !O
                                }),
                                ref: t,
                                muted: w,
                                children: Et.map((e => (0, b.jsx)("source", {
                                    src: "".concat(o.Z.cdnBaseUrl).concat(e)
                                }, e)))
                            }))]
                        })
                    },
                    It = ["title", "titleId"];

                function Bt() {
                    return Bt = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, Bt.apply(this, arguments)
                }

                function Rt(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function Tt(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = Rt(e, It);
                    return n.createElement("svg", Bt({
                        width: 166,
                        height: 60,
                        viewBox: "0 0 166 60",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, kt || (kt = n.createElement("path", {
                        d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                        fill: "#A60014"
                    })), jt || (jt = n.createElement("path", {
                        d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                        stroke: "white",
                        strokeWidth: 3
                    })), bt || (bt = n.createElement("g", {
                        filter: "url(#filter0_i_738_19404)"
                    }, n.createElement("path", {
                        className: "default",
                        d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                        fill: "#F5384F"
                    }))), wt || (wt = n.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                        fill: "url(#paint0_linear_738_19404)"
                    })), Nt || (Nt = n.createElement("path", {
                        className: "pressed",
                        transform: "translate(2 4)",
                        d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                        fill: "url(#paint0_linear_738_19552)"
                    })), Ct || (Ct = n.createElement("defs", null, n.createElement("filter", {
                        id: "filter0_i_738_19404",
                        x: 3,
                        y: .342773,
                        width: 160,
                        height: 50,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB"
                    }, n.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                    }), n.createElement("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                    }), n.createElement("feOffset", {
                        dy: 2
                    }), n.createElement("feGaussianBlur", {
                        stdDeviation: 2
                    }), n.createElement("feComposite", {
                        in2: "hardAlpha",
                        operator: "arithmetic",
                        k2: -1,
                        k3: 1
                    }), n.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in2: "shape",
                        result: "effect1_innerShadow_738_19404"
                    })), n.createElement("linearGradient", {
                        id: "paint0_linear_738_19404",
                        x1: 3,
                        y1: 43.343,
                        x2: 163,
                        y2: 43.343,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", {
                        stopColor: "#F5384F"
                    }), n.createElement("stop", {
                        offset: .48,
                        stopColor: "#F87989"
                    }), n.createElement("stop", {
                        offset: 1,
                        stopColor: "#F5384F"
                    })), n.createElement("linearGradient", {
                        id: "paint0_linear_738_19552",
                        x1: 62.6289,
                        y1: 48.4995,
                        x2: 62.6289,
                        y2: .499511,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", {
                        stopColor: "#F5384F"
                    }), n.createElement("stop", {
                        offset: .995,
                        stopColor: "#A60014"
                    })))))
                }
                var Lt = n.forwardRef(Tt);
                r.p;
                var At, Mt, Ut, Ft, Dt, Gt, Vt = ["title", "titleId"];

                function Wt() {
                    return Wt = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, Wt.apply(this, arguments)
                }

                function Ht(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function Yt(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = Ht(e, Vt);
                    return n.createElement("svg", Wt({
                        width: 166,
                        height: 60,
                        viewBox: "0 0 166 60",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, At || (At = n.createElement("path", {
                        d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                        fill: "#01933B"
                    })), Mt || (Mt = n.createElement("path", {
                        d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                        stroke: "white",
                        strokeWidth: 3
                    })), Ut || (Ut = n.createElement("g", {
                        filter: "url(#filter0_i_738_19392)"
                    }, n.createElement("path", {
                        className: "default",
                        d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                        fill: "#00BC4B"
                    }))), Ft || (Ft = n.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                        fill: "url(#paint0_linear_738_19392)"
                    })), Dt || (Dt = n.createElement("path", {
                        className: "pressed",
                        transform: "translate(2 4)",
                        d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                        fill: "url(#paint0_linear_738_19488)"
                    })), Gt || (Gt = n.createElement("defs", null, n.createElement("filter", {
                        id: "filter0_i_738_19392",
                        x: 3,
                        y: .342773,
                        width: 160,
                        height: 50,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB"
                    }, n.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                    }), n.createElement("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                    }), n.createElement("feOffset", {
                        dy: 2
                    }), n.createElement("feGaussianBlur", {
                        stdDeviation: 2
                    }), n.createElement("feComposite", {
                        in2: "hardAlpha",
                        operator: "arithmetic",
                        k2: -1,
                        k3: 1
                    }), n.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in2: "shape",
                        result: "effect1_innerShadow_738_19392"
                    })), n.createElement("linearGradient", {
                        id: "paint0_linear_738_19392",
                        x1: 3,
                        y1: 43.343,
                        x2: 163,
                        y2: 43.343,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", {
                        stopColor: "#54EA90",
                        stopOpacity: 0
                    }), n.createElement("stop", {
                        offset: .48,
                        stopColor: "#54E88F"
                    }), n.createElement("stop", {
                        offset: 1,
                        stopColor: "#53E68E",
                        stopOpacity: 0
                    })), n.createElement("defs", null, n.createElement("linearGradient", {
                        id: "paint0_linear_738_19488",
                        x1: 72.4467,
                        y1: 48.4995,
                        x2: 72.4467,
                        y2: .499511,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", {
                        stopColor: "#00BC4B"
                    }), n.createElement("stop", {
                        offset: 1,
                        stopColor: "#01933B"
                    }))))))
                }
                var zt = n.forwardRef(Yt);
                r.p;
                const Kt = {
                    instructions: "ButtonContainer_instructions__PczCp",
                    hide: "ButtonContainer_hide__sU3Rh",
                    btnContainer: "ButtonContainer_btnContainer__Nnclb",
                    btn: "ButtonContainer_btn__AmQTp",
                    pressed: "ButtonContainer_pressed__UDboU",
                    btnText: "ButtonContainer_btnText__9wXPy",
                    btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                    arrow: "ButtonContainer_arrow__Q5suA"
                };
                var Qt, qt = e => {
                        var t = e.className,
                            r = Ge(),
                            a = r.onButtonClick,
                            s = r.isPending,
                            i = r.predict,
                            o = Ce().numChances,
                            c = (0, n.useState)(),
                            l = (0, u.Z)(c, 2),
                            d = l[0],
                            _ = l[1];
                        (0, n.useEffect)((() => {
                            var e;
                            return s || (e = setTimeout((() => {
                                _(void 0)
                            }), 2500)), () => {
                                clearTimeout(e)
                            }
                        }), [s]);
                        var m = e => {
                                var t, r, n;
                                s || d || (_(e === Ue.UP ? Ue.DOWN : Ue.UP), null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (n = r.WebApp) && void 0 !== n && n.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"), a(e))
                            },
                            p = o <= 0;
                        return (0, b.jsxs)("div", {
                            className: t,
                            children: [(0, b.jsx)("p", {
                                className: Z()(Kt.instructions, s && Kt.hide),
                                children: (0, E.O4)("ok_game_okxracer_prompt_start_guess", {
                                    countDown: 5
                                })
                            }), (0, b.jsxs)("div", {
                                className: Kt.btnContainer,
                                children: [(0, b.jsxs)("button", {
                                    disabled: p || d === Ue.UP,
                                    onClick: () => m(Ue.UP),
                                    type: "button",
                                    className: Z()(Kt.btn, Kt.upBtn, {
                                        [Kt.pressed]: i === Ue.UP
                                    }),
                                    children: [(0, b.jsx)(zt, {
                                        className: Z()(Kt.btnGraphic, Kt.upBtnGraphic)
                                    }), (0, b.jsxs)("span", {
                                        className: Kt.btnText,
                                        children: [(0, E.O4)("ok_game_okxracer_prompt_price_up"), (0, b.jsx)(P.Z, {
                                            iconName: "okx-growth-up-new",
                                            className: Kt.arrow
                                        })]
                                    })]
                                }), (0, b.jsxs)("button", {
                                    disabled: p || d === Ue.DOWN,
                                    onClick: () => m(Ue.DOWN),
                                    type: "button",
                                    className: Z()(Kt.btn, Kt.downBtn, {
                                        [Kt.pressed]: i === Ue.DOWN
                                    }),
                                    children: [(0, b.jsx)(Lt, {
                                        className: Z()(Kt.btnGraphic, Kt.downBtnGraphic)
                                    }), (0, b.jsxs)("span", {
                                        className: Kt.btnText,
                                        children: [(0, E.O4)("ok_game_okxracer_prompt_price_down"), (0, b.jsx)(P.Z, {
                                            iconName: "okx-growth-down-new",
                                            className: Kt.arrow
                                        })]
                                    })]
                                })]
                            })]
                        })
                    },
                    Xt = ["title", "titleId"];

                function Jt() {
                    return Jt = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, Jt.apply(this, arguments)
                }

                function $t(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function er(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = $t(e, Xt);
                    return n.createElement("svg", Jt({
                        viewBox: "0 0 375 183",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, Qt || (Qt = n.createElement("g", {
                        transform: "translate(24 12)"
                    }, n.createElement("rect", {
                        className: "track",
                        x: 2.5,
                        y: 2.5,
                        width: 322,
                        height: 155,
                        rx: 77.5,
                        fill: "#030303",
                        stroke: "#909090",
                        strokeWidth: 5
                    }), n.createElement("path", {
                        d: "M81.4976 21.5C82.326 21.5 82.9976 20.8284 82.9976 20C82.9976 19.1716 82.326 18.5 81.4976 18.5V21.5ZM81.4976 138.5C49.1889 138.5 22.9976 112.309 22.9976 80H19.9976C19.9976 113.966 47.532 141.5 81.4976 141.5V138.5ZM22.9976 80C22.9976 47.6913 49.1889 21.5 81.4976 21.5V18.5C47.532 18.5 19.9976 46.0345 19.9976 80H22.9976Z",
                        fill: "url(#paint1_linear_263_6211)"
                    }), n.createElement("path", {
                        d: "M247 138.5C246.172 138.5 245.5 139.172 245.5 140C245.5 140.828 246.172 141.5 247 141.5L247 138.5ZM247 21.5C279.309 21.5 305.5 47.6913 305.5 80L308.5 80C308.5 46.0345 280.966 18.5 247 18.5L247 21.5ZM305.5 80C305.5 112.309 279.309 138.5 247 138.5L247 141.5C280.966 141.5 308.5 113.966 308.5 80L305.5 80Z",
                        fill: "url(#paint2_linear_263_6211)"
                    }), n.createElement("defs", null, n.createElement("linearGradient", {
                        id: "paint1_linear_263_6211",
                        x1: 51.4976,
                        y1: 20,
                        x2: 51.4976,
                        y2: 140,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", {
                        stopColor: "white",
                        stopOpacity: 0
                    }), n.createElement("stop", {
                        offset: .479411,
                        stopColor: "white"
                    }), n.createElement("stop", {
                        offset: 1,
                        stopColor: "white",
                        stopOpacity: 0
                    })), n.createElement("linearGradient", {
                        id: "paint2_linear_263_6211",
                        x1: 277,
                        y1: 140,
                        x2: 277,
                        y2: 20,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", {
                        stopColor: "white",
                        stopOpacity: 0
                    }), n.createElement("stop", {
                        offset: .479411,
                        stopColor: "white"
                    }), n.createElement("stop", {
                        offset: 1,
                        stopColor: "white",
                        stopOpacity: 0
                    }))))))
                }
                var tr = n.forwardRef(er);
                r.p;
                var rr = r(48275);
                const nr = "FuelIndicator_fuelContainer__QIskL",
                    ar = "FuelIndicator_toTasksIcon__Y7exC",
                    sr = "FuelIndicator_line__tWBfm",
                    ir = "FuelIndicator_description__EaUsa",
                    or = "FuelIndicator_fuelIcon__I38Ss",
                    cr = "FuelIndicator_maxChances__OMSHl",
                    lr = "FuelIndicator_earnPtsMsg__PjtcT";
                var ur, dr, _r = e => {
                        var t = e.className,
                            r = Ce(),
                            n = r.numChances,
                            a = r.numChancesTotal;
                        return (0, b.jsxs)("div", {
                            className: Z()(t, nr),
                            children: [(0, b.jsx)("span", {
                                className: or,
                                children: "\u26fd\ufe0f"
                            }), n > 0 ? (0, b.jsx)(rr.Z.Line, {
                                className: sr,
                                markColor: "#fff",
                                trackColor: "#272727",
                                percent: n / a * 100
                            }, a) : (0, b.jsx)("span", {
                                className: lr,
                                children: (0, E.O4)("ok_game_okxracer_earn_pts_desc")
                            }), (0, b.jsxs)("p", {
                                className: ir,
                                children: [n, "\xa0", void 0 !== a && 0 !== a && (0, b.jsxs)(b.Fragment, {
                                    children: ["/\xa0", (0, b.jsx)("span", {
                                        className: cr,
                                        children: a
                                    })]
                                })]
                            }), (0, b.jsx)(s.Link, {
                                to: B,
                                children: (0, b.jsx)(P.Z, {
                                    iconName: "okx-growth-chevrons-right",
                                    className: ar
                                })
                            })]
                        })
                    },
                    mr = ["title", "titleId"];

                function pr() {
                    return pr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, pr.apply(this, arguments)
                }

                function hr(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function fr(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = hr(e, mr);
                    return n.createElement("svg", pr({
                        width: 170,
                        height: 37,
                        viewBox: "0 0 170 37",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, ur || (ur = n.createElement("rect", {
                        x: 2.5,
                        y: -2.5,
                        width: 164,
                        height: 31,
                        rx: 15.5,
                        transform: "matrix(1 0 0 -1 0.5 31.3428)",
                        stroke: "url(#paint0_linear_563_49992)",
                        strokeWidth: 5
                    })), dr || (dr = n.createElement("defs", null, n.createElement("linearGradient", {
                        id: "paint0_linear_563_49992",
                        x1: 84,
                        y1: 28.5652,
                        x2: 84,
                        y2: 5.44528e-7,
                        gradientUnits: "userSpaceOnUse"
                    }, n.createElement("stop", null), n.createElement("stop", {
                        offset: 1,
                        stopColor: "#909090"
                    })))))
                }
                var xr = n.forwardRef(fr);
                r.p;
                const vr = "RefuelTimer_container__wtALO",
                    gr = "RefuelTimer_description__sD+HM",
                    kr = "RefuelTimer_timer__LL1+c";
                var jr = e => {
                    var t = e.className,
                        r = Ce().countdownDisplay;
                    return (0, b.jsxs)("div", {
                        className: Z()(t, vr),
                        children: [(0, b.jsx)(xr, {}), (0, b.jsx)("p", {
                            className: gr,
                            children: (0, E.Lg)("ok_game_okxracer_nx_refill_time", {
                                countDown: (0, b.jsx)("span", {
                                    className: kr,
                                    children: r
                                })
                            })
                        })]
                    })
                };
                const br = "CoinPrice_raceTrack__NZO2t",
                    wr = "CoinPrice_run__f0UIF",
                    Nr = "CoinPrice_coinPriceContainer__YbeUE",
                    Cr = "CoinPrice_content__a-5Jl",
                    yr = "CoinPrice_fuelIndicator__p+f1I",
                    Or = "CoinPrice_refuelTimer__tbWMw",
                    Zr = "CoinPrice_hide__bHhxJ",
                    Er = "CoinPrice_label__yTNy0",
                    Pr = "CoinPrice_value__ZjRZz",
                    Sr = "CoinPrice_slotMachine__hUQKt",
                    Ir = "SlotMachine_row__a4TO0",
                    Br = "SlotMachine_animate__-G4TR",
                    Rr = "SlotMachine_column__aR0VE",
                    Tr = "SlotMachine_arrows__m1dhv",
                    Lr = "SlotMachine_columnContainer__a76pd",
                    Ar = "SlotMachine_background__b9TMg",
                    Mr = "SlotMachine_slot__jwCvC",
                    Ur = "SlotMachine_staticColumn__O5zfB",
                    Fr = "SlotMachine_sm__ZRCig",
                    Dr = "SlotMachine_arrow__qOYmf",
                    Gr = "SlotMachine_wentUp__z48TO",
                    Vr = "SlotMachine_down__aYC8C",
                    Wr = "SlotMachine_stable__CDMLP",
                    Hr = "SlotMachine_wentDown__1fYUS",
                    Yr = "SlotMachine_up__IuiYV";
                var zr = e => {
                        var t = e.animate,
                            r = e.result,
                            n = void 0 === r ? 0 : r,
                            a = e.columnStyle;
                        return (0, b.jsxs)("div", {
                            className: Lr,
                            children: [(0, b.jsx)("div", {
                                className: Ar
                            }), (0, b.jsxs)("div", {
                                className: Rr,
                                style: a,
                                children: [(0, b.jsx)("p", {
                                    className: Mr,
                                    children: n
                                }), t && (0, b.jsxs)(b.Fragment, {
                                    children: [(0, b.jsx)("p", {
                                        className: Mr,
                                        children: "1"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "2"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "3"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "4"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "5"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "6"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "7"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "8"
                                    }), (0, b.jsx)("p", {
                                        className: Mr,
                                        children: "9"
                                    })]
                                })]
                            })]
                        })
                    },
                    Kr = () => {
                        var e = Ge(),
                            t = e.changeRate,
                            r = e.isPending,
                            a = (0, n.useState)([]),
                            s = (0, u.Z)(a, 2),
                            i = s[0],
                            o = s[1],
                            c = (0, n.useState)(null),
                            l = (0, u.Z)(c, 2),
                            d = l[0],
                            _ = l[1],
                            m = (0, n.useState)(!1),
                            p = (0, u.Z)(m, 2),
                            h = p[0],
                            f = p[1];
                        return (0, n.useEffect)((() => {
                            r && f(!0)
                        }), [r]), (0, n.useEffect)((() => {
                            var e;
                            null !== t ? (_(null === (e = t) ? null : e > 0 ? Ue.UP : 0 === e ? Ue.NONE : Ue.DOWN), o(String(Math.abs(Number(Ke(t)))).split("").filter((e => "." !== e)).map((e => parseInt(e, 10)))), f(!1)) : _(null)
                        }), [t]), (0, b.jsxs)("div", {
                            className: Z()(Ir, h && Br),
                            children: [(0, b.jsx)("div", {
                                className: Lr,
                                children: (0, b.jsxs)("div", {
                                    className: Z()(Tr, {
                                        [Gr]: d === Ue.UP,
                                        [Hr]: d === Ue.DOWN,
                                        [Wr]: d === Ue.NONE
                                    }),
                                    children: [(0, b.jsx)(P.Z, {
                                        iconName: "okds-arrow-pointer-up-sm",
                                        className: Z()(Dr, Yr)
                                    }), (0, b.jsx)(P.Z, {
                                        iconName: "okds-arrow-pointer-right-sm",
                                        className: Z()(Dr, Wr)
                                    }), (0, b.jsx)(P.Z, {
                                        iconName: "okds-arrow-pointer-down-sm",
                                        className: Z()(Dr, Vr)
                                    })]
                                })
                            }), (0, b.jsx)(zr, {
                                animate: h,
                                result: i[0],
                                columnStyle: {
                                    animationDelay: "500ms"
                                }
                            }), (0, b.jsx)("span", {
                                className: Ur,
                                children: "."
                            }), (0, b.jsx)(zr, {
                                animate: h,
                                result: i[1],
                                columnStyle: {
                                    animationDelay: "200ms"
                                }
                            }), (0, b.jsx)(zr, {
                                animate: h,
                                result: i[2],
                                columnStyle: {
                                    animationDelay: "300ms"
                                }
                            }), (0, b.jsx)(zr, {
                                animate: h,
                                result: i[3],
                                columnStyle: {
                                    animationDelay: "200ms"
                                }
                            }), (0, b.jsx)(zr, {
                                animate: h,
                                result: i[4],
                                columnStyle: {
                                    animationDelay: "400ms"
                                }
                            }), (0, b.jsx)("span", {
                                className: Z()(Ur, Fr),
                                children: "%"
                            })]
                        })
                    },
                    Qr = () => {
                        var e = Ie(),
                            t = Ge(),
                            r = t.isPending,
                            a = t.changeRate,
                            s = Ce().countdownDisplay,
                            i = (0, n.useState)(!1),
                            o = (0, u.Z)(i, 2),
                            c = o[0],
                            l = o[1];
                        (0, n.useEffect)((() => {
                            r && l(!0)
                        }), [r]), (0, n.useEffect)((() => {
                            var e, t = () => {
                                e && clearTimeout(e)
                            };
                            return r || (null === a ? l(!1) : e = setTimeout((() => {
                                l(!1)
                            }), ze)), t
                        }), [a, r]);
                        var d = e ? "$".concat((0, We.uf)(He.yx.truncate(e, 1, !0))) : "--",
                            _ = s && !r;
                        return (0, b.jsxs)("div", {
                            className: Nr,
                            children: [(0, b.jsx)(tr, {
                                className: Z()(br, r && wr)
                            }), (0, b.jsxs)("div", {
                                className: Z()(Cr, c && Zr),
                                children: [(0, b.jsx)("p", {
                                    className: Er,
                                    children: (0, E.O4)("ok_game_okxracer_btc_price")
                                }), (0, b.jsx)("p", {
                                    className: Pr,
                                    children: d
                                })]
                            }), (0, b.jsxs)("div", {
                                className: Z()(Cr, !c && Zr),
                                children: [(0, b.jsxs)("p", {
                                    className: Er,
                                    children: [(0, E.O4)("ok_game_okxracer_btc_price"), " ", d]
                                }), (0, b.jsx)("div", {
                                    className: Sr,
                                    children: (0, b.jsx)(Kr, {})
                                })]
                            }), (0, b.jsx)(_r, {
                                className: yr
                            }), (0, b.jsx)("div", {
                                className: Z()(Or, !_ && Zr),
                                children: (0, b.jsx)(jr, {})
                            })]
                        })
                    };
                const qr = "LandingPage_container__pU2cC",
                    Xr = "LandingPage_resultOverlay__WSYZb",
                    Jr = "LandingPage_disclaimer__pVRHC",
                    $r = "LandingPage_recordsBtnContainer__Anr4Y",
                    en = "LandingPage_backgroundVideo__flTkH",
                    tn = "LandingPage_content__D0ZLW",
                    rn = "LandingPage_points__Ruq4j",
                    nn = "LandingPage_coinPrice__nJ0nj",
                    an = "LandingPage_btnContainer__IEll8",
                    sn = "LandingPage_termsAndConditions__MdClU";
                var on = r(22387);
                const cn = "UserPointCounter_pointCounter__-QAj8",
                    ln = "UserPointCounter_hide__o4qTQ",
                    un = "UserPointCounter_points__d3HeG",
                    dn = "UserPointCounter_countdown__Z7xGo",
                    _n = "UserPointCounter_title__B-gN-",
                    mn = "UserPointCounter_value__2a23E";
                var pn = () => {
                        var e = Ce().points,
                            t = (0, on.Z)(e),
                            r = Ge(),
                            a = r.isPending,
                            s = r.countdown,
                            i = (0, n.useRef)(null),
                            o = (0, n.useState)(!1),
                            c = (0, u.Z)(o, 2),
                            l = c[0],
                            d = c[1];
                        (0, n.useEffect)((() => {
                            var e;
                            return a ? d(!0) : e = setTimeout((() => {
                                d(!1)
                            }), 2500), () => {
                                clearTimeout(e)
                            }
                        }), [a]);
                        var _ = (0, n.useCallback)(((e, t, r) => {
                            e <= t && (r((0, We.uf)(String(e))), requestAnimationFrame((() => {
                                var n = function(e, t) {
                                    var r = t - e;
                                    return Math.max(1, Math.floor(r / 10))
                                }(e, t);
                                _(e + n, t, r)
                            })))
                        }), []);
                        return (0, n.useEffect)((() => {
                            var r;
                            if (t === e) return () => {};

                            function n(e) {
                                i.current && (i.current.innerText = e)
                            }
                            if ("0" === (null === (r = i.current) || void 0 === r ? void 0 : r.innerText) || !t) return _(0, e, n), () => {};
                            var a = setTimeout((() => {
                                _(t || 0, e, n)
                            }), 2500);
                            return () => {
                                clearTimeout(a)
                            }
                        }), [_, e, t]), (0, b.jsxs)("div", {
                            className: cn,
                            children: [(0, b.jsxs)("p", {
                                className: Z()(_n, l && ln),
                                children: ["\ud83c\udfc6 ", (0, E.O4)("ok_game_okxracer_available_pts")]
                            }), (0, b.jsx)("p", {
                                ref: i,
                                className: Z()(un, l && ln),
                                children: "0"
                            }), (0, b.jsxs)("p", {
                                className: Z()(dn, !l && ln),
                                children: ["00:0", (0, b.jsx)("span", {
                                    className: mn,
                                    children: s
                                })]
                            })]
                        })
                    },
                    hn = r(2663);
                const fn = {
                    "top-padding": "BottomSheet_top-padding__r99dG",
                    topPadding: "BottomSheet_top-padding__r99dG",
                    closeIcon: "BottomSheet_closeIcon__pR0b-"
                };
                var xn = {
                        noMargin: !0,
                        alignBottom: !0,
                        maskClosable: !0,
                        closeClassName: fn.closeBtn,
                        closeIconClassName: fn.closeIcon
                    },
                    vn = e => (0, b.jsx)(hn.Z, (0, k.Z)((0, k.Z)({}, xn), {}, {
                        topContent: e.title ? void 0 : (0, b.jsx)("div", {
                            className: fn.topPadding
                        })
                    }, e));
                const gn = "ViewRecordsButton_button__MRo78",
                    kn = "ViewRecordsButton_btnIcon__prKlS",
                    jn = "ViewRecordsButton_title__obA3r",
                    bn = "ViewRecordsButton_container__N3Rrb",
                    wn = "ViewRecordsButton_recordContainer__ruZVu",
                    Nn = "ViewRecordsButton_recordField__dACwq",
                    Cn = "ViewRecordsButton_label__xt3Hw",
                    yn = "ViewRecordsButton_value__lTHA5",
                    On = "ViewRecordsButton_trendIcon__3RV6P",
                    Zn = "ViewRecordsButton_up__EC1B6",
                    En = "ViewRecordsButton_down__4PWTz",
                    Pn = "ViewRecordsButton_timestamp__P0JEp",
                    Sn = "ViewRecordsButton_emptyMessageContainer__6fmRI",
                    In = "ViewRecordsButton_description__F22UB";
                var Bn = e => {
                        var t = e.label,
                            r = e.value;
                        return (0, b.jsxs)("div", {
                            className: Nn,
                            children: [(0, b.jsx)("p", {
                                className: Cn,
                                children: t
                            }), (0, b.jsx)("div", {
                                className: yn,
                                children: r
                            })]
                        })
                    },
                    Rn = () => (0, b.jsxs)("button", {
                        className: gn,
                        type: "button",
                        onClick: () => {
                            var e = Le().get(Ae) || [],
                                t = (0, b.jsx)(b.Fragment, {
                                    children: e.length > 0 ? e.map(((e, t) => {
                                        var r = 1 === e.predict,
                                            n = "ok_game_okxracer_moon",
                                            a = Zn,
                                            s = "okx-growth-trending-up";
                                        return r || (n = "ok_game_okxracer_doom", a = En, s = "okx-growth-trending-down"), (0, b.jsxs)("div", {
                                            className: wn,
                                            children: [(0, b.jsx)(Bn, {
                                                label: (0, E.O4)("ok_game_okxracer_your_guess"),
                                                value: (0, b.jsxs)(b.Fragment, {
                                                    children: [(0, E.O4)(n), (0, b.jsx)(P.Z, {
                                                        className: Z()(On, a),
                                                        iconName: s
                                                    })]
                                                })
                                            }), (0, b.jsx)(Bn, {
                                                label: "Result",
                                                value: (0, E.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                            }), (0, b.jsx)(Bn, {
                                                label: (0, E.O4)("ok_game_okxracer_consecutive_wins"),
                                                value: e.curCombo
                                            }), (0, b.jsx)("p", {
                                                className: Pn,
                                                children: (0, We.o0)(new Date(e.date), {
                                                    format: "yyyyMMMdhhmmss"
                                                })
                                            })]
                                        }, t)
                                    })) : (0, b.jsxs)("div", {
                                        className: Sn,
                                        children: [(0, b.jsx)("p", {
                                            className: jn,
                                            children: (0, E.O4)("ok_game_okxracer_no_racing_record")
                                        }), (0, b.jsx)("p", {
                                            className: In,
                                            children: (0, E.O4)("ok_game_okxracer_no_past_activity")
                                        })]
                                    })
                                });
                            (e => {
                                var t = hn.Z.show((0, k.Z)((0, k.Z)({}, xn), {}, {
                                    topContent: e.title ? void 0 : (0, b.jsx)("div", {
                                        className: fn.topPadding
                                    }),
                                    onClose: () => {
                                        t.destroy()
                                    }
                                }, e))
                            })({
                                title: (0, b.jsx)("span", {
                                    className: jn,
                                    children: (0, E.O4)("ok_game_okxracer_racing_records")
                                }),
                                titleCenter: !0,
                                containerClassName: bn,
                                children: t
                            })
                        },
                        children: [(0, E.O4)("ok_game_okxracer_my_records"), (0, b.jsx)(P.Z, {
                            iconName: "okx-growth-chevrons",
                            className: kn
                        })]
                    }),
                    Tn = () => (0, b.jsxs)("div", {
                        className: qr,
                        children: [(0, b.jsx)("div", {
                            className: $r,
                            children: (0, b.jsx)(Rn, {})
                        }), (0, b.jsx)("div", {
                            className: en,
                            children: (0, b.jsx)(St, {})
                        }), (0, b.jsxs)("div", {
                            className: tn,
                            children: [(0, b.jsx)("div", {
                                className: rn,
                                children: (0, b.jsx)(pn, {})
                            }), (0, b.jsx)("div", {
                                className: nn,
                                children: (0, b.jsx)(Qr, {})
                            }), (0, b.jsx)(qt, {
                                className: an
                            })]
                        }), (0, b.jsx)("button", {
                            className: sn,
                            onClick: () => {
                                var e, t;
                                null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(_t)
                            },
                            type: "button",
                            children: (0, E.O4)("ok_game_okxracer_tnc")
                        }), (0, b.jsx)("p", {
                            className: Jr,
                            children: (0, E.O4)("ok_game_okxracer_disclaimer")
                        }), (0, b.jsx)(ct, {
                            className: Xr
                        })]
                    }),
                    Ln = () => (0, b.jsx)(Ve, {
                        children: (0, b.jsx)(Tn, {})
                    }),
                    An = r(24084);
                const Mn = "LeaderBoard_container__0DJSO",
                    Un = "LeaderBoard_title__jnBkh",
                    Fn = "LeaderBoard_titleMark__t4fQw",
                    Dn = "LeaderBoard_desc__MFxC+",
                    Gn = "LeaderBoard_inviteList__mV9a7",
                    Vn = "LeaderBoard_tabActiveClassName__7Xv4B",
                    Wn = "LeaderBoard_tabsContent__KCGtW";
                const Hn = "InviteButton_invite-btn__aAMio",
                    Yn = "InviteButton_btn-a__At-wO",
                    zn = "InviteButton_btn-container__sYDy5",
                    Kn = "InviteButton_btn-text__PhM48",
                    Qn = "InviteButton_copyButton__znucI",
                    qn = "InviteButton_copyIcon__QZgE9";
                var Xn = e => {
                    var t = e.text,
                        r = void 0 === t ? (0, E.O4)("ok_game_okxracer_invite_friends") : t,
                        n = e.className,
                        a = (e => {
                            var t = new Y.Z,
                                r = (0, E.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us",
                                n = "https://t.me/".concat(lt.BOT_NAME, "/").concat(lt.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                                    linkCode: e
                                }) || "").replace("=", "_"));
                            return {
                                appUrl: n,
                                shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(n), "&text=").concat(r)
                            }
                        })(Ce().linkCode),
                        s = a.shareUrl,
                        i = a.appUrl;
                    return (0, b.jsxs)("div", {
                        className: Z()(n, zn),
                        children: [(0, b.jsx)("a", {
                            className: Yn,
                            href: s,
                            children: (0, b.jsx)(mt.default, {
                                category: mt.default.CATEGORY.fill,
                                type: mt.default.TYPE.tertiary,
                                size: mt.default.SIZE.lg,
                                className: Hn,
                                children: (0, b.jsx)("div", {
                                    className: Kn,
                                    children: r
                                })
                            })
                        }), (0, b.jsx)(mt.default, {
                            strictCircle: !0,
                            category: mt.default.CATEGORY.fill,
                            type: mt.default.TYPE.tertiary,
                            size: mt.default.SIZE.lg,
                            onClick: () => {
                                try {
                                    navigator.clipboard.writeText(i), J(!0, (0, E.O4)("ok_game_okxracer_copied_url"))
                                } catch (e) {
                                    J(!1, "Copy Invite URL failed")
                                }
                            },
                            className: Qn,
                            children: (0, b.jsx)(P.Z, {
                                iconName: "okx-growth-copy",
                                className: qn
                            })
                        })]
                    })
                };
                const Jn = "RankList_loader__5ZGNn",
                    $n = "RankList_listItem__qJvXJ",
                    ea = "RankList_name__sxTWa",
                    ta = "RankList_mask__ldBi8",
                    ra = "RankList_hightLightRow__xYkeg",
                    na = "RankList_listHeader__KVGnw",
                    aa = "RankList_rank__k2m5R",
                    sa = "RankList_icon__1-SRV",
                    ia = "RankList_point__D5mVw",
                    oa = "RankList_pointIcon__k80Wy",
                    ca = "RankList_InviteButton__D6ute",
                    la = "RankList_noFirendsNote__Ckkil",
                    ua = "RankList_under__MJ5We";
                var da = {
                        1: "\ud83e\udd47",
                        2: "\ud83e\udd48",
                        3: "\ud83e\udd49",
                        4: "\ud83c\udfc1"
                    },
                    _a = 1,
                    ma = 2,
                    pa = e => {
                        var t = e.total;
                        return (0, b.jsxs)("div", {
                            className: na,
                            children: [(0, b.jsx)("span", {
                                children: (0, E.O4)("ok_game_okxracer_racers_num", {
                                    num: (0, We.uf)(t)
                                })
                            }), (0, b.jsx)("span", {
                                children: (0, E.O4)("ok_game_okxracer_all_time_pts")
                            })]
                        })
                    },
                    ha = e => {
                        var t = e.item,
                            r = e.isHighlight;
                        return (0, b.jsxs)("div", {
                            className: Z()($n, r && ra),
                            children: [(0, b.jsx)("div", {
                                className: ta
                            }), t.rank <= 3 ? (0, b.jsx)("span", {
                                className: Z()(aa, sa),
                                children: da[t.rank]
                            }) : (0, b.jsx)("span", {
                                className: aa,
                                children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                            }), (0, b.jsx)("div", {
                                className: ea,
                                children: t.extUserName
                            }), (0, b.jsxs)("div", {
                                className: ia,
                                children: [(0, b.jsx)("span", {
                                    className: oa,
                                    children: da[4]
                                }), (0, E.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0, We.uf)(t.totalPoints)
                                })]
                            })]
                        }, t.extUserId)
                    },
                    fa = e => {
                        var t = e.pageType,
                            r = void 0 === t ? _a : t,
                            a = q(),
                            s = a.uid,
                            i = a.gameId,
                            o = (0, n.useState)(!0),
                            d = (0, u.Z)(o, 2),
                            _ = d[0],
                            m = d[1],
                            p = (0, n.useState)([]),
                            h = (0, u.Z)(p, 2),
                            f = h[0],
                            x = h[1],
                            v = (0, n.useState)(0),
                            g = (0, u.Z)(v, 2),
                            k = g[0],
                            j = g[1],
                            w = (0, n.useState)(),
                            N = (0, u.Z)(w, 2),
                            C = N[0],
                            y = N[1],
                            O = (0, n.useCallback)(function() {
                                var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                                    var n, a;
                                    return (0, c.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.prev = 0, n = {
                                                        extUserId: s,
                                                        gameId: i,
                                                        pageNo: t
                                                    }, r !== _a) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.next = 5, xe(n);
                                            case 5:
                                                e.t0 = e.sent, e.next = 11;
                                                break;
                                            case 8:
                                                return e.next = 10, ve(n);
                                            case 10:
                                                e.t0 = e.sent;
                                            case 11:
                                                (a = e.t0) && a.rows && (x(a.rows), j(a.total), y(a.userRanking)), e.next = 18;
                                                break;
                                            case 15:
                                                e.prev = 15, e.t1 = e.catch(0), e.t1;
                                            case 18:
                                                m(!1);
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 15]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(), [i, r, s]),
                            Z = C && ((null === C || void 0 === C ? void 0 : C.rank) > 3 || -1 === (null === C || void 0 === C ? void 0 : C.rank));
                        return (0, n.useEffect)((() => {
                            O(1)
                        }), [O]), _ ? (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(pa, {
                                total: k
                            }), (0, b.jsx)("div", {
                                className: Jn,
                                children: (0, b.jsx)(rr.Z, {})
                            })]
                        }) : (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(pa, {
                                total: k
                            }), Z && (0, b.jsx)(ha, {
                                item: C,
                                isHighlight: !0
                            }), f.map((e => (0, b.jsx)(ha, {
                                item: e,
                                isHighlight: e.extUserId === s
                            }, e.extUserId))), (0, b.jsx)("div", {
                                className: ua
                            }), r === _a && (0, b.jsxs)(b.Fragment, {
                                children: [1 === f.length && (0, b.jsx)("div", {
                                    className: la,
                                    children: (0, E.O4)("ok_game_okxracer_invite_desc")
                                }), 1 === f.length && (0, b.jsx)(Xn, {
                                    className: ca,
                                    text: (0, E.O4)("ok_game_okxracer_invite_contacts")
                                })]
                            })]
                        })
                    },
                    xa = () => (0, b.jsxs)("div", {
                        className: Mn,
                        children: [(0, b.jsx)("div", {
                            className: Un,
                            children: (0, E.O4)("ok_game_okxracer_race_to_top", {
                                top: (0, b.jsx)("span", {
                                    className: Fn,
                                    children: (0, E.O4)("ok_game_okxracer_top")
                                })
                            })
                        }), (0, b.jsx)("div", {
                            className: Dn,
                            children: (0, E.O4)("ok_game_okxracer_leaderboard_guide")
                        }), (0, b.jsxs)(An.Z, {
                            activeClassName: Vn,
                            noPadding: !0,
                            size: An.Z.SIZE.xl,
                            destroyOnHide: !0,
                            children: [(0, b.jsx)(An.Z.TabPane, {
                                tab: (0, E.O4)("ok_game_okxracer_friends2"),
                                id: _a,
                                className: Wn,
                                children: (0, b.jsx)("div", {
                                    className: Gn,
                                    children: (0, b.jsx)(fa, {
                                        pageType: _a
                                    })
                                })
                            }), (0, b.jsx)(An.Z.TabPane, {
                                className: Wn,
                                tab: (0, E.O4)("ok_game_okxracer_global"),
                                id: ma,
                                children: (0, b.jsx)("div", {
                                    className: Gn,
                                    children: (0, b.jsx)(fa, {
                                        pageType: ma
                                    })
                                })
                            })]
                        })]
                    });
                const va = "QrCode_container__r4Fu7",
                    ga = "QrCode_qrCode__16PWa",
                    ka = "QrCode_message__eaOzW";
                var ja = () => (0, b.jsxs)("div", {
                        className: va,
                        children: [(0, b.jsx)(pt.Z, {
                            className: ga,
                            src: "".concat(o.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                        }), (0, b.jsx)("p", {
                            className: ka,
                            children: (0, E.O4)("ok_game_okxracer_browser_msg")
                        })]
                    }),
                    ba = r(90534);
                const wa = "PullupList_loading__+51Dh";
                var Na = e => {
                    var t = e.loadData,
                        r = e.children,
                        a = (0, n.useState)([]),
                        s = (0, u.Z)(a, 2),
                        i = s[0],
                        o = s[1],
                        d = (0, n.useState)(!0),
                        _ = (0, u.Z)(d, 2),
                        m = _[0],
                        p = _[1],
                        h = (0, n.useRef)({
                            total: -1,
                            page: 1,
                            stop: !1
                        }),
                        f = (0, n.useRef)(null),
                        x = (0, n.useState)(!1),
                        v = (0, u.Z)(x, 2),
                        g = v[0],
                        k = v[1],
                        j = function() {
                            var e = (0, l.Z)((0, c.Z)().mark((function e() {
                                var r;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (-1 === h.current.total || !(i.length >= h.current.total || !0 === h.current.stop)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return p(!0), e.prev = 3, e.next = 6, t(h.current.page, h.current.total);
                                        case 6:
                                            (r = e.sent) && r.rows ? (h.current.page += 1, o((e => [...e, ...r.rows])), h.current.total = 0 === r.rows.length ? i.length : r.total) : h.current.stop = !0, e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(3), h.current.stop = !0;
                                        case 13:
                                            p(!1);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 10]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        w = (0, ba.Z)(j, {
                            wait: 500,
                            leading: !0
                        }).run,
                        N = e => {
                            e[0].isIntersecting && !m && !1 === h.current.stop && k(!g)
                        };
                    return (0, n.useEffect)((() => {
                        var e = new IntersectionObserver(N, {
                            root: null,
                            rootMargin: "0px",
                            threshold: 1
                        });
                        return f.current && e.observe(f.current), () => {
                            f.current && e.unobserve(f.current)
                        }
                    }), [m]), (0, n.useEffect)((() => {
                        w()
                    }), [g]), (0, b.jsxs)(b.Fragment, {
                        children: [i.map(((e, t) => r(e, t))), (0, b.jsx)("div", {
                            className: wa,
                            ref: f,
                            children: m && (0, b.jsx)(rr.Z, {})
                        })]
                    })
                };
                const Ca = "InviteList_listItem__q4jhG",
                    ya = "InviteList_name__LLQgt",
                    Oa = "InviteList_point__kXtCn",
                    Za = "InviteList_earnedPrice__4vAfw",
                    Ea = "InviteList_pointNumber__v4P1H";
                var Pa = () => {
                    var e = q(),
                        t = e.uid,
                        r = e.gameId,
                        a = (0, n.useState)(0),
                        s = (0, u.Z)(a, 2),
                        i = s[0],
                        o = s[1],
                        d = function() {
                            var e = (0, l.Z)((0, c.Z)().mark((function e(n, a) {
                                var s, i;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = {
                                                extUserId: t,
                                                gameId: r,
                                                pageNo: n
                                            }, a && a >= 0 && (s.total = a), e.next = 4, fe(s);
                                        case 4:
                                            return (i = e.sent) && o(i.accumPoints), e.abrupt("return", i);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)("div", {
                            className: Za,
                            children: (0, E.O4)("ok_game_okxracer_refer_points", {
                                points: (0, b.jsx)("span", {
                                    className: Ea,
                                    children: (0, E.O4)("ok_game_okxracer_points_wo_plus2", {
                                        points: (0, We.uf)(i)
                                    })
                                })
                            })
                        }), (0, b.jsx)(Na, {
                            loadData: d,
                            children: e => (0, b.jsxs)("div", {
                                className: Ca,
                                children: [(0, b.jsx)("div", {
                                    className: ya,
                                    children: e.extInviteeName
                                }), (0, b.jsx)("div", {
                                    className: Oa,
                                    children: (0, E.O4)("ok_game_okxracer_points_with_plus", {
                                        points: (0, We.uf)(e.contributedPoints)
                                    })
                                })]
                            }, e.extUserId)
                        })]
                    })
                };
                const Sa = "ReferralsPage_container__V48m1",
                    Ia = "ReferralsPage_title__nvv+x",
                    Ba = "ReferralsPage_titleMark__FCOdJ",
                    Ra = "ReferralsPage_inviteDetail__L1MhM",
                    Ta = "ReferralsPage_detailItem__ujOp+",
                    La = "ReferralsPage_dot__zKW7L",
                    Aa = "ReferralsPage_detailTitle__OE657",
                    Ma = "ReferralsPage_detailInfo__YC+Y9",
                    Ua = "ReferralsPage_inviteList__Jksx8";
                var Fa, Da, Ga, Va, Wa, Ha, Ya, za, Ka = () => {
                        var e = [{
                            title: (0, E.O4)("ok_game_okxracer_refer_your_friends"),
                            detailInfo: (0, E.O4)("ok_game_okxracer_refer_rewards")
                        }, {
                            title: (0, E.O4)("ok_game_okxracer_get_bonus"),
                            detailInfo: (0, E.O4)("ok_game_okxracer_refer_hint")
                        }];
                        return (0, b.jsxs)("div", {
                            className: Sa,
                            children: [(0, b.jsxs)("div", {
                                className: Ia,
                                children: [(0, E.O4)("ok_game_okxracer_friends_hint"), " ", (0, b.jsx)("span", {
                                    className: Ba,
                                    children: (0, E.O4)("ok_game_okxracer_friends_hint2")
                                })]
                            }), (0, b.jsx)("div", {
                                className: Ra,
                                children: e.map((e => (0, b.jsxs)("div", {
                                    className: Ta,
                                    children: [(0, b.jsx)("div", {
                                        className: La
                                    }), (0, b.jsx)("div", {
                                        className: Aa,
                                        children: e.title
                                    }), (0, b.jsx)("div", {
                                        className: Ma,
                                        children: e.detailInfo
                                    })]
                                }, e.title)))
                            }), (0, b.jsx)("div", {
                                className: Ua,
                                children: (0, b.jsx)(Pa, {})
                            }), (0, b.jsx)(Xn, {})]
                        })
                    },
                    Qa = ["title", "titleId"];

                function qa() {
                    return qa = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, qa.apply(this, arguments)
                }

                function Xa(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function Ja(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = Xa(e, Qa);
                    return n.createElement("svg", qa({
                        width: 89,
                        height: 88,
                        viewBox: "0 0 89 88",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, Fa || (Fa = n.createElement("ellipse", {
                        cx: 28.0697,
                        cy: 28.0697,
                        rx: 28.0697,
                        ry: 28.0697,
                        transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                        stroke: "white",
                        strokeWidth: .34375,
                        strokeLinecap: "round"
                    })), Da || (Da = n.createElement("path", {
                        d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                        stroke: "white",
                        strokeWidth: .34375,
                        strokeLinecap: "round"
                    })), Ga || (Ga = n.createElement("path", {
                        d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                        stroke: "white",
                        strokeWidth: .34375,
                        strokeLinecap: "round"
                    })), Va || (Va = n.createElement("g", {
                        filter: "url(#filter0_dd_888_7961)"
                    }, n.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                        fill: "#BCFF23"
                    }))), Wa || (Wa = n.createElement("circle", {
                        cx: 30.4617,
                        cy: 19.8699,
                        r: 1.47735,
                        fill: "white",
                        stroke: "white",
                        strokeWidth: .438378,
                        strokeLinecap: "round"
                    })), Ha || (Ha = n.createElement("circle", {
                        cx: 72.3192,
                        cy: 44.0001,
                        r: 1.47735,
                        fill: "white",
                        stroke: "white",
                        strokeWidth: .438378,
                        strokeLinecap: "round"
                    })), Ya || (Ya = n.createElement("circle", {
                        cx: 28.9852,
                        cy: 67.6376,
                        r: 1.47735,
                        fill: "white",
                        stroke: "white",
                        strokeWidth: .438378,
                        strokeLinecap: "round"
                    })), za || (za = n.createElement("defs", null, n.createElement("filter", {
                        id: "filter0_dd_888_7961",
                        x: 22.7336,
                        y: 26.6704,
                        width: 43.0309,
                        height: 34.1671,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB"
                    }, n.createElement("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix"
                    }), n.createElement("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                    }), n.createElement("feOffset", null), n.createElement("feGaussianBlur", {
                        stdDeviation: 2.75
                    }), n.createElement("feComposite", {
                        in2: "hardAlpha",
                        operator: "out"
                    }), n.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_888_7961"
                    }), n.createElement("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha"
                    }), n.createElement("feOffset", null), n.createElement("feGaussianBlur", {
                        stdDeviation: 3.76406
                    }), n.createElement("feComposite", {
                        in2: "hardAlpha",
                        operator: "out"
                    }), n.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in2: "effect1_dropShadow_888_7961",
                        result: "effect2_dropShadow_888_7961"
                    }), n.createElement("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect2_dropShadow_888_7961",
                        result: "shape"
                    })))))
                }
                var $a = n.forwardRef(Ja);
                r.p;
                const es = "index_container__DxcAz",
                    ts = "index_logo__h1T0A",
                    rs = "index_tlt__dqJHn",
                    ns = "index_subtlt__m3p5l";
                var as = () => (0, b.jsxs)("div", {
                    className: es,
                    children: [(0, b.jsx)($a, {
                        className: ts
                    }), (0, b.jsx)("div", {
                        className: rs,
                        children: (0, E.O4)("ok_game_okxracer_congratulations")
                    }), (0, b.jsx)("div", {
                        className: ns,
                        children: (0, E.O4)("ok_game_okxracer_congratulations_msg")
                    })]
                });
                const ss = a().memo(as);
                var is, os = ["title", "titleId"];

                function cs() {
                    return cs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, cs.apply(this, arguments)
                }

                function ls(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function us(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = ls(e, os);
                    return n.createElement("svg", cs({
                        width: 7,
                        height: 12,
                        viewBox: "0 0 7 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, is || (is = n.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                        fill: "white"
                    })))
                }
                var ds = n.forwardRef(us);
                r.p;
                var _s, ms = ["title", "titleId"];

                function ps() {
                    return ps = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, ps.apply(this, arguments)
                }

                function hs(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function fs(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = hs(e, ms);
                    return n.createElement("svg", ps({
                        width: 6,
                        height: 6,
                        viewBox: "0 0 6 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, _s || (_s = n.createElement("circle", {
                        cx: 3,
                        cy: 3,
                        r: 3,
                        fill: "#BCFF2F"
                    })))
                }
                var xs = n.forwardRef(fs);
                r.p;
                var vs, gs = ["title", "titleId"];

                function ks() {
                    return ks = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, ks.apply(this, arguments)
                }

                function js(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function bs(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = js(e, gs);
                    return n.createElement("svg", ks({
                        width: 12,
                        height: 10,
                        viewBox: "0 0 12 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, vs || (vs = n.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                        fill: "white"
                    })))
                }
                var ws = n.forwardRef(bs);
                r.p;
                var Ns = r(41072),
                    Cs = function(e) {
                        return e.SIGNUP = "signup", e.INSTALL = "install", e.CONNECT = "connect", e.KYC = "kyc", e
                    }({}),
                    ys = e => {
                        var t, r;
                        return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
                    };

                function Os(e) {
                    var t = [{
                        title: (0, E.O4)("ok_game_okxracer_surprises_sign_up"),
                        subTitle: (0, E.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                        type: Cs.SIGNUP,
                        status: ys(Cs.SIGNUP),
                        url: e.signupLink
                    }, {
                        title: (0, E.O4)("ok_game_okxracer_surprises_install"),
                        type: Cs.INSTALL,
                        status: ys(Cs.INSTALL),
                        url: e.downloadLink
                    }, {
                        title: (0, E.O4)("ok_game_okxracer_surprises_connect_tg"),
                        subTitle: (0, E.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                        type: Cs.CONNECT,
                        status: e.isConnectTelegram,
                        url: e.bindTgLink
                    }, {
                        title: (0, E.O4)("ok_game_okxracer_surprises_kyc"),
                        subTitle: (0, E.O4)("ok_game_okxracer_surprises_kyc_desc"),
                        type: Cs.KYC,
                        status: e.isKyc,
                        url: e.verifyKycLink
                    }];
                    return e.isConnectTelegram ? [t[3]] : t
                }
                var Zs = e => {
                    var t = (0, n.useState)(Os(e)),
                        r = (0, u.Z)(t, 2),
                        a = r[0],
                        s = r[1];
                    (0, n.useEffect)((() => {
                        s(Os(e))
                    }), [e]);
                    var i = (0, n.useCallback)((t => {
                        var r, n = a.find((e => e.type === t));
                        if (n) switch ((0, Ns.k)(n.url), t) {
                            case Cs.SIGNUP:
                            case Cs.INSTALL:
                                r = t, window.localStorage && window.localStorage.setItem(r, "1"), s(Os(e))
                        }
                    }), [a, e]);
                    return {
                        list: a,
                        handleClick: i
                    }
                };
                const Es = "index_container__ZAgXf",
                    Ps = "index_container_avatar__HvLrA",
                    Ss = "index_container_task__OmqjX",
                    Is = "index_task_tlt__pIkV2",
                    Bs = "index_tlt_sub__2aRiA",
                    Rs = "index_tlt_arrow__kdbln",
                    Ts = "index_task_subtlt__mzIaE";
                var Ls = e => {
                        var t = e.status,
                            r = void 0 !== t && t;
                        return (0, b.jsx)("div", {
                            className: Ps,
                            children: r ? (0, b.jsx)(ws, {}) : (0, b.jsx)(xs, {})
                        })
                    },
                    As = e => {
                        var t = e.title,
                            r = e.subTitle,
                            n = e.type,
                            a = e.onClick,
                            s = e.status;
                        return (0, b.jsxs)("div", {
                            className: Ss,
                            onClick: () => {
                                a(n)
                            },
                            children: [(0, b.jsxs)("div", {
                                className: Is,
                                children: [(0, b.jsx)(Ls, {
                                    status: s
                                }), " ", (0, b.jsx)("div", {
                                    className: Bs,
                                    children: t
                                }), (0, b.jsx)(ds, {
                                    className: Rs
                                })]
                            }), (0, b.jsx)("div", {
                                className: Ts,
                                children: r
                            })]
                        })
                    };
                const Ms = e => {
                    var t = Zs(e),
                        r = t.list,
                        n = t.handleClick;
                    return (0, b.jsx)("div", {
                        className: Es,
                        children: r.map((e => (0, b.jsx)(As, (0, k.Z)((0, k.Z)({}, e), {}, {
                            onClick: n
                        }), e.type)))
                    })
                };
                var Us, Fs, Ds, Gs = ["title", "titleId"];

                function Vs() {
                    return Vs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, Vs.apply(this, arguments)
                }

                function Ws(e, t) {
                    if (null == e) return {};
                    var r, n, a = function(e, t) {
                        if (null == e) return {};
                        var r, n, a = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                    return a
                }

                function Hs(e, t) {
                    var r = e.title,
                        a = e.titleId,
                        s = Ws(e, Gs);
                    return n.createElement("svg", Vs({
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ref: t,
                        "aria-labelledby": a
                    }, s), r ? n.createElement("title", {
                        id: a
                    }, r) : null, Us || (Us = n.createElement("path", {
                        d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                        fill: "#E6E6E6"
                    })), Fs || (Fs = n.createElement("path", {
                        d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                        fill: "#E6E6E6"
                    })), Ds || (Ds = n.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                        fill: "#E6E6E6"
                    })))
                }
                var Ys = n.forwardRef(Hs);
                r.p;
                const zs = "index_loader__kDy+9",
                    Ks = "index_container__X8xX8",
                    Qs = "index_container_tlt__+XAOL",
                    qs = "index_container_tlt_highlight__uMjOB",
                    Xs = "index_container_subtlt__LyYby",
                    Js = "index_container_info__c9KQP",
                    $s = "index_info_icon__i5uhI",
                    ei = "index_container_btn__rWex7",
                    ti = "index_buttonText__1fWA+",
                    ri = "index_tncContainer__McO06",
                    ni = "index_termsAndConditions__Gifk+";
                var ai = () => (0, b.jsx)(ss, {}),
                    si = e => (0, b.jsxs)("div", {
                        className: Ks,
                        children: [(0, b.jsxs)("div", {
                            className: Qs,
                            children: [(0, E.O4)("ok_game_okxracer_surprises_title2"), "\xa0", (0, b.jsx)("div", {
                                className: qs,
                                children: (0, E.O4)("ok_game_okxracer_surprises")
                            })]
                        }), (0, b.jsx)("div", {
                            className: Xs,
                            children: (0, E.O4)("ok_game_okxracer_surprises_sub_text")
                        }), (0, b.jsx)(Ms, (0, k.Z)({}, e)), (0, b.jsxs)("div", {
                            className: Js,
                            children: [(0, b.jsx)(Ys, {
                                className: $s,
                                height: 16
                            }), (0, E.O4)("ok_game_okxracer_surprises_verify_desc")]
                        }), (0, b.jsx)(mt.default, {
                            category: mt.default.CATEGORY.fill,
                            type: mt.default.TYPE.tertiary,
                            size: mt.default.SIZE.lg,
                            onClick: e.onClick,
                            className: ei,
                            children: (0, b.jsx)("div", {
                                className: ti,
                                children: (0, E.O4)("ok_game_okxracer_surprises_verify")
                            })
                        }), (0, b.jsx)("div", {
                            className: ri,
                            children: (0, b.jsx)("button", {
                                className: ni,
                                onClick: () => {
                                    var e, t;
                                    null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(_t)
                                },
                                type: "button",
                                children: (0, E.O4)("ok_game_okxracer_tnc")
                            })
                        })]
                    }),
                    ii = () => {
                        var e = q(),
                            t = e.uid,
                            r = e.gameId,
                            a = (0, n.useState)(!0),
                            s = (0, u.Z)(a, 2),
                            i = s[0],
                            o = s[1],
                            d = (0, n.useState)({
                                isConnectTelegram: !1,
                                isKyc: !1,
                                signupLink: "/join",
                                downloadLink: "/download?redirectAppStore=true",
                                bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                                verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP"
                            }),
                            _ = (0, u.Z)(d, 2),
                            m = _[0],
                            p = _[1],
                            h = (0, n.useCallback)((0, l.Z)((0, c.Z)().mark((function e() {
                                var n, a, s = arguments;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = s.length > 0 && void 0 !== s[0] && s[0], e.prev = 1, e.next = 4, we({
                                                extUserId: t,
                                                gameId: r
                                            });
                                        case 4:
                                            a = e.sent, o(!1), a && p(a), !n || null !== a && void 0 !== a && a.isKyc && a.isConnectTelegram || J(!1, (0, E.O4)("ok_game_okxracer_verify_failed_msg")), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(1), J(!1, (0, E.O4)("ok_game_okxracer_error_high_traffic"));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 10]
                                ])
                            }))), [r, t]);
                        return (0, n.useEffect)((() => {
                            function e() {
                                document.hidden || h()
                            }
                            return h(), document.addEventListener("visibilitychange", e), () => {
                                document.removeEventListener("visibilitychange", e)
                            }
                        }), [h]), i ? (0, b.jsx)("div", {
                            className: zs,
                            children: (0, b.jsx)(rr.Z, {})
                        }) : m.isConnectTelegram && m.isKyc ? (0, b.jsx)(ai, {}) : (0, b.jsx)(si, (0, k.Z)((0, k.Z)({}, m), {}, {
                            onClick: () => h(!0)
                        }))
                    },
                    oi = (0, n.createContext)({
                        boosts: [],
                        tasks: [],
                        upgradeBoost: function() {
                            var e = (0, l.Z)((0, c.Z)().mark((function e() {
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", !1);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        doTask: function() {
                            var e = (0, l.Z)((0, c.Z)().mark((function e() {
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", !1);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }),
                    ci = () => (0, n.useContext)(oi),
                    li = e => {
                        var t = e.children,
                            r = (0, n.useState)([]),
                            a = (0, u.Z)(r, 2),
                            s = a[0],
                            i = a[1],
                            o = (0, n.useState)([]),
                            d = (0, u.Z)(o, 2),
                            _ = d[0],
                            m = d[1],
                            p = q().uid,
                            h = Ce().updateGameInfoFromServer,
                            f = (0, n.useCallback)((0, l.Z)((0, c.Z)().mark((function e() {
                                var t;
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Promise.allSettled([ge({
                                                extUserId: p
                                            }), je({
                                                extUserId: p
                                            })]);
                                        case 2:
                                            "fulfilled" === (t = e.sent)[0].status && i(t[0].value.data || []), "fulfilled" === t[1].status && m(t[1].value.data || []);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), [p]),
                            x = function() {
                                var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                                    var r;
                                    return (0, c.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, ke({
                                                    extUserId: p,
                                                    id: t
                                                });
                                            case 3:
                                                return e.next = 5, Promise.allSettled([ge({
                                                    extUserId: p
                                                }), h()]);
                                            case 5:
                                                return "fulfilled" === (r = e.sent)[0].status && i(r[0].value.data || []), e.abrupt("return", !0);
                                            case 10:
                                                e.prev = 10, e.t0 = e.catch(0), $(e.t0);
                                            case 13:
                                                return e.abrupt("return", !1);
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 10]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            v = function() {
                                var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                                    var r;
                                    return (0, c.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, be({
                                                    extUserId: p,
                                                    id: t
                                                });
                                            case 3:
                                                return e.next = 5, Promise.allSettled([je({
                                                    extUserId: p
                                                }), h()]);
                                            case 5:
                                                return "fulfilled" === (r = e.sent)[0].status && m(r[0].value.data || []), e.abrupt("return", !0);
                                            case 10:
                                                e.prev = 10, e.t0 = e.catch(0), $(e.t0);
                                            case 13:
                                                return e.abrupt("return", !1);
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 10]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return (0, n.useEffect)((() => {
                            f()
                        }), [f]), (0, b.jsx)(oi.Provider, {
                            value: {
                                boosts: s,
                                tasks: _,
                                upgradeBoost: x,
                                doTask: v
                            },
                            children: t
                        })
                    };
                const ui = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
                var di = e => {
                    var t = e.className;
                    return (0, b.jsx)("div", {
                        className: Z()(ui, t)
                    })
                };
                const _i = "BoostArea_container__qLJSQ",
                    mi = "BoostArea_boost-item-container__YOXum",
                    pi = "BoostArea_boost-item__DNNqs",
                    hi = "BoostArea_boost-item-padding__oEq50",
                    fi = "BoostArea_boost-icon__QNzuc",
                    xi = "BoostArea_boost-title__AkQjB",
                    vi = "BoostArea_boost-desc__ao1CF",
                    gi = "BoostArea_boost-data__ZHjQc",
                    ki = "BoostArea_boost-data-split-point__vPwdk",
                    ji = "BoostArea_boost-data-stage__vN56W",
                    bi = "BoostArea_sheet__yqb00",
                    wi = "BoostArea_sheet-icon__BeFAi",
                    Ni = "BoostArea_sheet-title__iwAxt",
                    Ci = "BoostArea_sheet-desc__shobA",
                    yi = "BoostArea_sheet-data__sT-mb",
                    Oi = "BoostArea_sheet-point__DEkj1",
                    Zi = "BoostArea_sheet-lvl__ybAg3",
                    Ei = "BoostArea_btn__sDOPz",
                    Pi = "BoostArea_btn-txt__3KRt0",
                    Si = "BoostArea_boostItemPlaceholder__+rOxt";
                var Ii = () => (0, b.jsxs)("div", {
                        className: Z()(pi, Si),
                        children: [(0, b.jsx)(di, {
                            className: fi
                        }), (0, b.jsx)(di, {
                            className: xi
                        }), (0, b.jsx)(di, {
                            className: vi
                        }), (0, b.jsx)(di, {
                            className: gi
                        })]
                    }),
                    Bi = () => {
                        var e = ci(),
                            t = e.boosts,
                            r = e.upgradeBoost,
                            a = (0, n.useState)(),
                            s = (0, u.Z)(a, 2),
                            i = s[0],
                            o = s[1],
                            d = (0, n.useState)(!1),
                            _ = (0, u.Z)(d, 2),
                            m = _[0],
                            p = _[1],
                            h = Ce().points,
                            f = function() {
                                var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                                    var n, a, s;
                                    return (0, c.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = t.pointCost, a = t.curStage, s = t.totalStage, !(Number(s) <= Number(a))) {
                                                    e.next = 5;
                                                    break
                                                }
                                                J(!1, (0, E.O4)("ok_game_okxracer_max_lvl_msg")), e.next = 13;
                                                break;
                                            case 5:
                                                if (!(h - Number(n) < 0)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                J(!1, (0, E.O4)("ok_game_okxracer_insufficient_pts_msg")), e.next = 13;
                                                break;
                                            case 9:
                                                return e.next = 11, r(t.id);
                                            case 11:
                                                e.sent && J(!0);
                                            case 13:
                                                p(!1);
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            x = e => (null === e || void 0 === e ? void 0 : e.type) === dt.DailyBoost,
                            v = e => {
                                var t = e.pointCost,
                                    r = e.curStage,
                                    n = e.totalStage;
                                return !x(e) && r >= n ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0, E.O4)("ok_game_okxracer_free") : "".concat((0, We.uf)(-t, {
                                    zeroSign: "-"
                                }), " pts"))
                            },
                            g = e => {
                                var r = e.id,
                                    n = e.context,
                                    a = e.curStage,
                                    s = e.totalStage,
                                    i = n.icon,
                                    c = n.name,
                                    l = n.desc;
                                return (0, b.jsxs)("div", {
                                    className: pi,
                                    onClick: () => {
                                        (e => {
                                            if (t.length > 0) {
                                                var r = t.find((t => t.id === e));
                                                p(!0), o(r)
                                            }
                                        })(r)
                                    },
                                    children: [(0, b.jsx)("div", {
                                        className: fi,
                                        children: i
                                    }), (0, b.jsx)("div", {
                                        className: xi,
                                        children: c
                                    }), (0, b.jsx)("div", {
                                        className: vi,
                                        children: l
                                    }), (0, b.jsxs)("div", {
                                        className: gi,
                                        children: [(0, b.jsx)("span", {
                                            children: v(e)
                                        }), (x(e) || a < s) && (0, b.jsx)("span", {
                                            className: ki
                                        }), (0, b.jsx)("span", {
                                            className: ji,
                                            children: x(e) ? "".concat(s - a, "/").concat(s) : "Lvl ".concat(a)
                                        })]
                                    })]
                                }, r)
                            };
                        return (0, b.jsxs)("div", {
                            className: _i,
                            children: [(0, b.jsxs)("div", {
                                className: mi,
                                children: [(0, b.jsx)("div", {
                                    className: hi
                                }), t.length > 0 ? (0, b.jsx)(b.Fragment, {
                                    children: t.map((e => g(e)))
                                }) : (0, b.jsxs)(b.Fragment, {
                                    children: [(0, b.jsx)(Ii, {}), (0, b.jsx)(Ii, {}), (0, b.jsx)(Ii, {})]
                                }), (0, b.jsx)("div", {
                                    className: hi
                                })]
                            }), (0, b.jsx)(vn, {
                                visible: m,
                                onClose: () => {
                                    p(!1)
                                },
                                children: (() => {
                                    if (i) {
                                        var e = i,
                                            t = e.context,
                                            r = e.curStage,
                                            n = e.totalStage,
                                            a = t.icon,
                                            s = t.name,
                                            o = t.desc;
                                        return (0, b.jsxs)("div", {
                                            className: bi,
                                            children: [(0, b.jsx)("div", {
                                                className: wi,
                                                children: a
                                            }), (0, b.jsx)("div", {
                                                className: Ni,
                                                children: s
                                            }), (0, b.jsx)("div", {
                                                className: Ci,
                                                children: o
                                            }), (0, b.jsxs)("div", {
                                                className: yi,
                                                children: [(0, b.jsx)("span", {
                                                    className: Oi,
                                                    children: v(i)
                                                }), (x(i) || r < n) && (0, b.jsx)("span", {
                                                    className: ki
                                                }), (0, b.jsx)("span", {
                                                    className: Zi,
                                                    children: x(i) ? "".concat(n - r, "/").concat(n) : "Lvl ".concat(r)
                                                })]
                                            }), (0, b.jsx)(mt.default, {
                                                category: mt.default.CATEGORY.fill,
                                                type: mt.default.TYPE.primary,
                                                size: mt.default.SIZE.lg,
                                                className: Ei,
                                                onClick: () => f(i),
                                                children: (0, b.jsx)("div", {
                                                    className: Pi,
                                                    children: (0, E.O4)("ok_game_okxracer_boost_now")
                                                })
                                            })]
                                        })
                                    }
                                    return (0, b.jsx)(b.Fragment, {})
                                })()
                            })]
                        })
                    },
                    Ri = r(58338);
                const Ti = "TaskArea_container__Iz7a-",
                    Li = "TaskArea_loader__7eAnB",
                    Ai = "TaskArea_task-item__w79wY",
                    Mi = "TaskArea_item-left__1r6mY",
                    Ui = "TaskArea_item-right__lk7YG",
                    Fi = "TaskArea_icon__RfKa0",
                    Di = "TaskArea_title__OyXme",
                    Gi = "TaskArea_state__d9FdX",
                    Vi = "TaskArea_sheet-container__lottt",
                    Wi = "TaskArea_sheet-name__CibLI",
                    Hi = "TaskArea_sheet-desc__aaGRQ",
                    Yi = "TaskArea_btn__HU6oE",
                    zi = "TaskArea_btn-txt__l+NXi",
                    Ki = "TaskArea_done__fmgjd";
                var Qi = () => {
                    var e = ci(),
                        t = e.tasks,
                        r = e.doTask,
                        a = (0, n.useState)(),
                        s = (0, u.Z)(a, 2),
                        i = s[0],
                        o = s[1],
                        d = (0, n.useState)(!1),
                        _ = (0, u.Z)(d, 2),
                        m = _[0],
                        p = _[1],
                        h = (0, ba.Z)((e => {
                            if (t.length > 0) {
                                var r = t.find((t => (null === t || void 0 === t ? void 0 : t.id) === e));
                                if ((null === r || void 0 === r ? void 0 : r.state) == ut.finished) return;
                                o(r), p(!0)
                            }
                        }), {
                            wait: 500
                        }).run,
                        f = function() {
                            var e = (0, l.Z)((0, c.Z)().mark((function e(t) {
                                return (0, c.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r(t.id);
                                        case 2:
                                            e.sent && J(!0, (0, E.O4)("ok_game_okxracer_task_completion_msg")), p(!1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, b.jsxs)("div", {
                        className: Ti,
                        children: [t.length > 0 ? t.map((e => e && (e => {
                            var t = e.id,
                                r = e.points,
                                n = e.state,
                                a = e.context;
                            return (0, b.jsxs)("div", {
                                className: Ai,
                                onClick: () => {
                                    h(t)
                                },
                                children: [(0, b.jsxs)("div", {
                                    className: Mi,
                                    children: [(0, b.jsx)("div", {
                                        className: Di,
                                        children: a.name
                                    }), (0, b.jsx)("div", {
                                        className: Gi,
                                        children: " ".concat(n === ut.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0, We.uf)(r, {
                                            signDisplay: !0
                                        }), " pts")
                                    })]
                                }), (0, b.jsx)("div", {
                                    className: Ui,
                                    children: n === ut.finished ? (0, b.jsx)("div", {
                                        className: Ki,
                                        children: (0, E.O4)("ok_game_okxracer_done")
                                    }) : (0, b.jsx)(P.Z, {
                                        className: Z()("okx-growth-chevrons-right", Fi)
                                    })
                                })]
                            }, t)
                        })(e))) : (0, b.jsx)("div", {
                            className: Li,
                            children: (0, b.jsx)(rr.Z, {})
                        }), i && (0, b.jsx)(vn, {
                            noContentPadding: !0,
                            visible: m,
                            onClose: () => {
                                p(!1)
                            },
                            children: (() => {
                                var e = i.context,
                                    t = e.desc,
                                    r = e.btnText;
                                return (0, b.jsxs)("div", {
                                    className: Vi,
                                    children: [(0, b.jsx)("div", {
                                        className: Wi,
                                        children: e.name
                                    }), (0, b.jsx)("div", {
                                        className: Hi,
                                        dangerouslySetInnerHTML: {
                                            __html: (0, Ri.dU)(t)
                                        }
                                    }), (0, b.jsx)(mt.default, {
                                        category: mt.default.CATEGORY.fill,
                                        type: mt.default.TYPE.primary,
                                        size: mt.default.SIZE.lg,
                                        className: Yi,
                                        onClick: () => f(i),
                                        children: (0, b.jsx)("div", {
                                            className: zi,
                                            children: r
                                        })
                                    })]
                                })
                            })()
                        })]
                    })
                };
                const qi = "TaskPage_container__5KfIM",
                    Xi = "TaskPage_block__kt8oo",
                    Ji = "TaskPage_block-boost__QYQXL",
                    $i = "TaskPage_points-title__4hW9Y",
                    eo = "TaskPage_points-content__+yK3g",
                    to = "TaskPage_tasks-title__qw7Rz",
                    ro = "TaskPage_boosts-title__PhFSP",
                    no = "TaskPage_boost-area__Qpbhq";
                var ao = () => {
                        var e = Ce().points;
                        return (0, b.jsxs)("div", {
                            className: qi,
                            children: [(0, b.jsx)("div", {
                                className: Xi,
                                children: (0, b.jsxs)(b.Fragment, {
                                    children: [(0, b.jsxs)("div", {
                                        className: $i,
                                        children: ["\ud83c\udfc6 ", (0, E.O4)("ok_game_okxracer_available_pts")]
                                    }), (0, b.jsx)("div", {
                                        className: eo,
                                        children: He.yx.thousandFormat(e || 0)
                                    })]
                                })
                            }), (0, b.jsxs)("div", {
                                className: Ji,
                                children: [(0, b.jsx)("div", {
                                    className: ro,
                                    children: (0, E.O4)("ok_game_okxracer_upgrade")
                                }), (0, b.jsx)("div", {
                                    className: no,
                                    children: (0, b.jsx)(Bi, {})
                                })]
                            }), (0, b.jsxs)("div", {
                                className: Xi,
                                children: [(0, b.jsx)("div", {
                                    className: to,
                                    children: (0, E.O4)("ok_game_okxracer_tasks")
                                }), (0, b.jsx)(Qi, {})]
                            })]
                        })
                    },
                    so = () => (0, b.jsx)(li, {
                        children: (0, b.jsx)(ao, {})
                    }),
                    io = () => {
                        var e = (0, n.useState)(),
                            t = (0, u.Z)(e, 2),
                            r = t[0],
                            a = t[1],
                            i = q().uid,
                            o = (0, n.useMemo)(f, []);
                        (0, n.useMemo)((() => {
                            m.Z.setConfig({
                                popupClassName: "theme-dark"
                            }), p.Z.config({
                                bottom: 74,
                                duration: 2
                            })
                        }), []);
                        var h = H().hasWebviewProxy;
                        (0, n.useEffect)((() => {
                            (function() {
                                var e = (0, l.Z)((0, c.Z)().mark((function e() {
                                    var t;
                                    return (0, c.Z)().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, (0, d.d)(o);
                                            case 2:
                                                t = e.sent, a(t);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            })()()
                        }), [o]);
                        var k = true;
                        return (0, b.jsx)("article", {
                            className: x,
                            children: (0, b.jsx)(_.Z, {
                                localeData: r,
                                fetchConfig: o,
                                children: k ? (0, b.jsxs)(b.Fragment, {
                                    children: [(0, b.jsx)(Pe, {
                                        children: (0, b.jsx)(ye, {
                                            children: (0, b.jsx)(Be, {
                                                children: (0, b.jsx)("main", {
                                                    className: g,
                                                    children: (0, b.jsxs)(s.Switch, {
                                                        children: [(0, b.jsx)(s.Route, {
                                                            path: S,
                                                            component: w(Ln),
                                                            exact: !0
                                                        }), (0, b.jsx)(s.Route, {
                                                            path: R,
                                                            component: C(xa),
                                                            exact: !0
                                                        }), (0, b.jsx)(s.Route, {
                                                            path: B,
                                                            component: w(so),
                                                            exact: !0
                                                        }), (0, b.jsx)(s.Route, {
                                                            path: I,
                                                            component: C(Ka),
                                                            exact: !0
                                                        }), (0, b.jsx)(s.Route, {
                                                            path: T,
                                                            component: C(ii),
                                                            exact: !0
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, b.jsx)("div", {
                                        className: v,
                                        children: (0, b.jsx)(V, {})
                                    })]
                            }) : ''
                            })
                        })
                    },
                    oo = document.getElementById("root");
                if (oo) {
                    var co = (0, b.jsx)(s.BrowserRouter, {
                        basename: o.Z.langPath,
                        children: (0, b.jsx)(X, {
                            children: (0, b.jsx)(io, {})
                        })
                    });
                    (0, i.createRoot)(oo).render(co)
                }
            },
            87363: e => {
                e.exports = React
            },
            61533: e => {
                e.exports = ReactDOM
            }
        },
        t = {};

    function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, r), s.exports
    }
    r.m = e, (() => {
        var e = [];
        r.O = (t, n, a, s) => {
            if (!n) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, a, s] = e[u], o = !0, c = 0; c < n.length; c++)(!1 & s || i >= s) && Object.keys(r.O).every((e => r.O[e](n[c]))) ? n.splice(c--, 1) : (o = !1, s < i && (i = s));
                    if (o) {
                        e.splice(u--, 1);
                        var l = a();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
            e[u] = [n, a, s]
        }
    })(), r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var a = n.length - 1; a > -1 && !e;) e = n[a--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e + "../"
    })(), (() => {
        try {
            if (r.miniCssF) {
                var e = r.miniCssF;
                r.miniCssF = function(t) {
                    var r = e(t);
                    if ("string" !== typeof r) return r;
                    var n = window._okGlobal || window.okGlobal;
                    return n && n.isRTL && /\.css$/.test(r) ? r.replace(/\.css$/, ".rtl.css") : r
                }
            }
        } catch (t) {}
    })(), (() => {
        var e = {
            6554: 0,
            9824: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var a, s, [i, o, c] = n,
                    l = 0;
                if (i.some((t => 0 !== e[t]))) {
                    for (a in o) r.o(o, a) && (r.m[a] = o[a]);
                    if (c) var u = c(r)
                }
                for (t && t(n); l < i.length; l++) s = i[l], r.o(e, s) && e[s] && e[s][0](), e[s] = 0;
                return r.O(u)
            },
            n = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var n = r.O(void 0, [3013, 5825, 9824, 6970, 7569, 3599, 4084, 2889, 2606, 9050], (() => r(63878)));
    n = r.O(n)
})();
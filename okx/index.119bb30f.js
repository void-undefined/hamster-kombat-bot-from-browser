(()=>{
    "use strict";
    var e = {
        96563: (e,t,r)=>{
            var a = r(87363)
              , n = r.n(a);
            const s = ReactRouterDOM;
            r(75139);
            var i = r(73271)
              , c = r(53949)
              , o = (r(78599),
            r(74165))
              , l = r(15861)
              , u = r(70885)
              , d = r(46541)
              , _ = r(1677)
              , p = r(2627)
              , m = r(45929)
              , h = r(8786)
              , f = ()=>{
                var e, t, r = ((null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {}).user, a = {
                    en: "en_US",
                    "zh-hans": "zh_CN",
                    "zh-hant": "zh_TW"
                }[(null === r || void 0 === r ? void 0 : r.language_code) || "en"] || "en_US";
                return h.Z.set("locale", a),
                window._okGlobal && (window._okGlobal.locale = a),
                {
                    project: "okx_web_growth",
                    site: "okx",
                    locale: a
                }
            }
            ;
            const x = "App_container__p+0qT"
              , v = "App_navbar__zvxzr"
              , g = "App_content__Jjurs";
            var k = r(28683);
            const j = "NoPaddingLayout_no-padding-layout__6LAKV";
            var b = r(45263)
              , w = e=>t=>(0,
            b.jsx)("div", {
                className: j,
                children: (0,
                b.jsx)(e, (0,
                k.Z)({}, t))
            });
            const C = "ComPaddingLayout_common-padding-layout__0gGbM";
            var y = e=>t=>(0,
            b.jsx)("div", {
                className: C,
                children: (0,
                b.jsx)(e, (0,
                k.Z)({}, t))
            })
              , N = r(44925)
              , O = r(95640)
              , P = r.n(O)
              , Z = r(14300)
              , E = r(72106)
              , S = {
                act: function() {}
            };
            "undefined" !== typeof window && (S = window.utils.monitor.newInstance({
                product: "growth_tools",
                commonParams: {}
            }));
            var T = S
              , R = ()=>{
                T.act({
                    action: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Leaderboard_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , I = ()=>{
                T.act({
                    action: "OkxRacerLandingPage_NavigationBar_Task_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Task_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , L = ()=>{
                T.act({
                    action: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                    anchor: "OkxRacerLandingPage_NavigationBar_Friends_Click",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
              , B = "/mini-app/racer"
              , A = "/mini-app/racer/referrals"
              , M = "/mini-app/racer/tasks"
              , F = "/mini-app/racer/leaderboard"
              , U = "/mini-app/racer/rewards";
            const D = "Navbar_navbar__LF3-M"
              , V = "Navbar_link__qX0Sf"
              , G = "Navbar_active__TCbF8"
              , W = "Navbar_linkIcon__GtH54"
              , H = "Navbar_linkText__Szxi-";
            var K = ["iconName", "label", "onClick"]
              , X = e=>{
                var t = e.iconName
                  , r = e.label
                  , a = e.onClick
                  , n = (0,
                N.Z)(e, K)
                  , i = (0,
                s.useRouteMatch)({
                    path: n.to,
                    exact: !0
                });
                return (0,
                b.jsxs)(s.Link, {
                    className: P()(V, i && G),
                    to: n.to,
                    onClick: a,
                    children: [(0,
                    b.jsx)(E.Z, {
                        iconName: t,
                        className: W
                    }), (0,
                    b.jsx)("span", {
                        className: H,
                        children: r
                    })]
                })
            }
              , Y = ()=>(0,
            b.jsxs)("div", {
                className: D,
                children: [(0,
                b.jsx)(X, {
                    iconName: "okx-growth-home",
                    to: B,
                    label: (0,
                    Z.O4)("ok_game_okxracer_home")
                }), (0,
                b.jsx)(X, {
                    iconName: "okx-growth-leaderboard",
                    to: F,
                    label: (0,
                    Z.O4)("ok_game_okxracer_leaderboard"),
                    onClick: R
                }), (0,
                b.jsx)(X, {
                    iconName: "okx-growth-task",
                    to: M,
                    label: (0,
                    Z.O4)("ok_game_okxracer_tasks"),
                    onClick: I
                }), (0,
                b.jsx)(X, {
                    iconName: "okx-growth-friends",
                    to: A,
                    label: (0,
                    Z.O4)("ok_game_okxracer_friends"),
                    onClick: L
                }), (0,
                b.jsx)(X, {
                    iconName: "okx-growth-surprises",
                    to: U,
                    label: (0,
                    Z.O4)("ok_game_okxracer_surprises")
                })]
            });
            function z(e) {
                return "TelegramWebviewProxy"in e && function(e) {
                    return "object" === typeof e && null !== e && !Array.isArray(e)
                }(e.TelegramWebviewProxy) && "postEvent"in e.TelegramWebviewProxy && "function" === typeof e.TelegramWebviewProxy.postEvent
            }
            var Q = ()=>((0,
            a.useEffect)((()=>{
                var e, t, r, a, n, s, i, c, o, l, u, d;
                null !== (e = window) && void 0 !== e && null !== (t = e.Telegram) && void 0 !== t && t.WebApp && (null === (r = (a = window.Telegram.WebApp).ready) || void 0 === r || r.call(a),
                null === (n = (s = window.Telegram.WebApp).setHeaderColor) || void 0 === n || n.call(s, "#0D0D0D"),
                null === (i = (c = window.Telegram.WebApp).setBackgroundColor) || void 0 === i || i.call(c, "#0D0D0D"),
                null === (o = (l = window.Telegram.WebApp).expand) || void 0 === o || o.call(l),
                null === (u = (d = window.Telegram.WebApp).disableVerticalSwipes) || void 0 === u || u.call(d));
                document.addEventListener("contextmenu", (e=>e.preventDefault()))
            }
            ), []),
            {
                hasWebviewProxy: z(window)
            })
              , q = r(4860)
              , J = r(72202)
              , $ = {
                uid: "",
                username: "",
                lastName: "",
                firstName: "",
                startParam: "",
                gameId: 1
            }
              , ee = (0,
            a.createContext)($)
              , te = ()=>(0,
            a.useContext)(ee)
              , re = e=>{
                var t = e.children
                  , r = (0,
                a.useMemo)((()=>{
                    var e, t, r = (null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.initDataUnsafe) || {
                        user: {}
                    }, a = r.user, n = r.start_param;
                    if (a) {
                        var s = a.id
                          , i = a.username
                          , c = a.first_name
                          , o = a.last_name
                          , l = i;
                        if (c || o) {
                            var u = c && c ? " " : "";
                            l = "".concat(c).concat(u).concat(o)
                        }
                        return {
                            uid: null === s || void 0 === s ? void 0 : s.toString(),
                            username: l,
                            lastName: o,
                            firstName: c,
                            startParam: n,
                            gameId: 1
                        }
                    }
                    return $
                }
                ), [])
                  , n = (0,
                a.useState)(r)
                  , s = (0,
                u.Z)(n, 1)[0];
                return (0,
                b.jsx)(ee.Provider, {
                    value: s,
                    children: t
                })
            }
              , ae = (e,t)=>{
                e ? m.Z.success({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_success"),
                    placement: m.Z.DIRECTION.topRight,
                    showClose: !1
                }) : m.Z.error({
                    title: t || (0,
                    Z.O4)("ok_game_okxracer_failed"),
                    placement: m.Z.DIRECTION.topRight,
                    showClose: !1
                })
            }
              , ne = e=>{
                var t = null === e || void 0 === e ? void 0 : e.error_message;
                ae(!1, t || (0,
                Z.O4)("ok_game_okxracer_error_high_traffic"))
            }
              , se = r(60378)
              , ie = r(4422);
            const ce = utils.ont;
            var oe = r.n(ce)
              , le = e=>{
                var t = (e || {}).data;
                return 0 === Number(t.code) && t ? Promise.resolve(t) : Promise.reject(t)
            }
              , ue = e=>t=>{
                if (!(0,
                se.y)()) {
                    var r = t || {}
                      , a = r.status
                      , n = r.data || {}
                      , s = n.msg
                      , i = n.code;
                    ie.k.warn("Request error, url=".concat(e, " status=").concat(a, " msg=").concat(s, " code=").concat(i), t)
                }
                return Promise.reject(t)
            }
              , de = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().get(t, r).then(le, ue(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , _e = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().getWithCache(t, r).then(le, ue(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , pe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().post(t, r, a).then(le, ue(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, a) {
                    return e.apply(this, arguments)
                }
            }()
              , me = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r, a) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().put(t, r, a).then(le, ue(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, a) {
                    return e.apply(this, arguments)
                }
            }()
              , he = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", oe().delete(t, r).then(le, ue(t)));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }()
              , fe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t, r, a) {
                    var n;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = new FormData,
                                Object.entries(null !== r && void 0 !== r ? r : {}).forEach((e=>{
                                    var t = (0,
                                    u.Z)(e, 2)
                                      , r = t[0]
                                      , a = t[1];
                                    a instanceof Blob ? n.append(r, a) : n.append(r, String(a))
                                }
                                )),
                                e.abrupt("return", pe(t, n, a));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r, a) {
                    return e.apply(this, arguments)
                }
            }();
            const xe = {
                get: de,
                getWithCache: _e,
                post: pe,
                put: me,
                postForm: fe,
                delete: he
            };
            function ve(e, t) {
                var r, a;
                return xe.get(e, (0,
                k.Z)((0,
                k.Z)({}, t || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": null === (r = window.Telegram) || void 0 === r || null === (a = r.WebApp) || void 0 === a ? void 0 : a.initData
                    }
                }))
            }
            function ge(e, t, r) {
                var a, n;
                return xe.post(e, t, (0,
                k.Z)((0,
                k.Z)({}, r || {}), {}, {
                    headers: {
                        "X-Telegram-Init-Data": null === (a = window.Telegram) || void 0 === a || null === (n = a.WebApp) || void 0 === n ? void 0 : n.initData
                    }
                }))
            }
            var ke = "/priapi/v1/affiliate"
              , je = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ge("".concat(ke, "/game/racer/info"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , be = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ge("".concat(ke, "/game/racer/assess"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , we = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(ke, "/game/racer/invitee-list"), {
                                    params: t
                                });
                            case 3:
                                if (r = e.sent,
                                !(a = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", a);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                e.t0,
                                e.abrupt("return", null);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 10]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ce = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(ke, "/game/racer/leaderboard/friends"), {
                                    params: t
                                });
                            case 3:
                                if (r = e.sent,
                                !(a = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", a);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                ne(e.t0),
                                e.abrupt("return", null);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 10]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , ye = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                ve("".concat(ke, "/game/racer/leaderboard/global"), {
                                    params: t
                                });
                            case 3:
                                if (r = e.sent,
                                !(a = r.data)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", a);
                            case 7:
                                return e.abrupt("return", null);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(0),
                                ne(e.t0),
                                e.abrupt("return", null);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 10]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ne = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(ke, "/game/racer/boosts"), {
                                    params: t
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Oe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ge("".concat(ke, "/game/racer/boost"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Pe = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ve("".concat(ke, "/game/racer/tasks"), {
                                    params: t
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ze = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", ge("".concat(ke, "/game/racer/task"), t));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Ee = function() {
                var e = (0,
                l.Z)((0,
                o.Z)().mark((function e(t) {
                    var r, a, n;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ge("".concat(ke, "/game/racer/account-binding"), t);
                            case 2:
                                if (r = e.sent,
                                a = r.code,
                                n = r.data,
                                0 !== a || !n) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", {
                                    isConnectTelegram: 1 === n.tgBindingStatus,
                                    isKyc: 1 === n.kycVerifyStatus,
                                    signupLink: n.signupLink,
                                    downloadLink: n.downloadLink,
                                    bindTgLink: n.bindTgLink,
                                    verifyKycLink: n.verifyKycLink
                                });
                            case 7:
                                return e.abrupt("return", null);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Se = (0,
            a.createContext)({
                points: 0,
                numChances: 0,
                numChancesTotal: 0,
                countdownDisplay: "",
                isLoading: !0,
                linkCode: "",
                updateGameInfo: ()=>{}
                ,
                updateGameInfoFromServer: ()=>{}
            })
              , Te = ()=>(0,
            a.useContext)(Se)
              , Re = e=>{
                var t, r = e.children, n = (0,
                a.useState)(0), s = (0,
                u.Z)(n, 2), i = s[0], c = s[1], d = (0,
                a.useState)(0), _ = (0,
                u.Z)(d, 2), p = _[0], m = _[1], h = (0,
                a.useState)(0), f = (0,
                u.Z)(h, 2), x = f[0], v = f[1], g = (0,
                a.useState)(0), k = (0,
                u.Z)(g, 2), j = k[0], w = k[1], C = (0,
                a.useState)(""), y = (0,
                u.Z)(C, 2), N = y[0], O = y[1], P = (0,
                a.useState)(!0), E = (0,
                u.Z)(P, 2), S = E[0], T = E[1], R = te(), I = R.uid, L = R.gameId, B = R.username, A = R.startParam, M = (0,
                a.useState)(""), F = (0,
                u.Z)(M, 2), U = F[0], D = F[1], V = null !== (t = new q.Z((A || "").replace("_", "=")).get("linkCode")) && void 0 !== t ? t : "", G = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                je({
                                    extUserId: I,
                                    extUserName: B,
                                    gameId: L,
                                    linkCode: V
                                });
                            case 3:
                                t = e.sent,
                                (r = t.data) && (c(Math.max(r.balancePoints, 0)),
                                O(r.linkCode),
                                m(r.numChances),
                                w(r.secondToRefresh),
                                v(r.numChancesTotal),
                                T(!1)),
                                e.next = 11;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                ae(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))), [L, V, I, B]);
                (0,
                a.useEffect)((()=>{
                    G()
                }
                ), [G]),
                (0,
                a.useEffect)((()=>{
                    var e = new J.Z(j);
                    return j > 0 ? (e.start(),
                    e.addEventListener(J.Z.Event.UPDATE, (e=>{
                        D("".concat(e.minute, ":").concat(e.second))
                    }
                    )),
                    e.addEventListener(J.Z.Event.FINISH, (()=>{
                        D(""),
                        G()
                    }
                    ))) : (null === e || void 0 === e || e.end(),
                    D("")),
                    ()=>{
                        null === e || void 0 === e || e.end()
                    }
                }
                ), [j, G]),
                (0,
                a.useEffect)((()=>{
                    function e() {
                        document.hidden || G()
                    }
                    return document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [G]);
                var W = (0,
                a.useCallback)((e=>{
                    c(Math.max(e.points, 0)),
                    m(e.numChances),
                    w(e.secondToRefresh)
                }
                ), [])
                  , H = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                G();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [G])
                  , K = (0,
                a.useMemo)((()=>({
                    isLoading: S,
                    points: i,
                    numChances: p,
                    numChancesTotal: x,
                    countdownDisplay: U,
                    updateGameInfo: W,
                    linkCode: N,
                    updateGameInfoFromServer: H
                })), [S, i, p, x, U, N, W, H]);
                return (0,
                b.jsx)(Se.Provider, {
                    value: K,
                    children: r
                })
            }
              , Ie = r(8031);
            var Le = new class {
                constructor() {
                    this.instId = "BTC-USDT",
                    this.channel = "tickers",
                    this.channelSubscribe = {
                        op: "subscribe",
                        args: [{
                            channel: this.channel,
                            instId: this.instId
                        }]
                    },
                    this.handleList = [],
                    this.connection = void 0,
                    this.initConnect = ()=>{
                        this.connection.onSocketConnected((()=>{
                            this.onConnected()
                        }
                        )),
                        this.connection.connect(),
                        this.addPageHideEvent()
                    }
                    ,
                    this.onConnected = ()=>{
                        this.connection.sendChannel(JSON.stringify(this.channelSubscribe)),
                        this.connection.setPushDataResolver(this.onResolve)
                    }
                    ,
                    this.onResolve = e=>{
                        var t = e.arg
                          , r = e.data;
                        if (t.channel === this.channel && t.instId === this.instId) {
                            var a = ((null === r || void 0 === r ? void 0 : r[0]) || {}).last;
                            a && this.handleList.forEach((e=>{
                                e(Number(a))
                            }
                            ))
                        }
                    }
                    ,
                    this.disconnect = ()=>{
                        this.connection.disconnect()
                    }
                    ,
                    this.addCallback = e=>{
                        this.handleList.push(e)
                    }
                    ,
                    this.connection = new Ie.Z({
                        connectUrl: "wss://wspri.okx.com:8443/ws/v5/ipublic"
                    }),
                    this.initConnect()
                }
                addPageHideEvent() {
                    window.addEventListener("visibilitychange", (()=>{
                        document.hidden ? this.disconnect() : (this.connection.onSocketConnected(this.onConnected),
                        this.connection.connect())
                    }
                    ))
                }
            }
              , Be = (0,
            a.createContext)(Le)
              , Ae = e=>{
                var t = e.children;
                return (0,
                b.jsx)(Be.Provider, {
                    value: Le,
                    children: t
                })
            }
              , Me = (0,
            a.createContext)(null)
              , Fe = ()=>(0,
            a.useContext)(Me)
              , Ue = e=>{
                var t = e.children
                  , r = (0,
                a.useState)(null)
                  , n = (0,
                u.Z)(r, 2)
                  , s = n[0]
                  , i = n[1]
                  , c = (0,
                a.useContext)(Be);
                return (0,
                a.useEffect)((()=>{
                    c.addCallback((e=>{
                        i(Number(e))
                    }
                    ))
                }
                ), [c]),
                (0,
                b.jsx)(Me.Provider, {
                    value: s,
                    children: t
                })
            }
              , De = r(46430)
              , Ve = "racer"
              , Ge = ()=>{
                var e;
                if (!(0,
                se.y)())
                    return De.Z.getInstance(Ve) || De.Z.init({
                        project: Ve
                    }),
                    null !== (e = De.Z.getInstance(Ve)) && void 0 !== e ? e : De.Z
            }
              , We = "guessRecords_new";
            function He(e) {
                var t = Ge().get(We) || [];
                t.unshift(e),
                Ge().set(We, t.slice(0, 5))
            }
            var Ke = function(e) {
                return e.UP = "up",
                e.DOWN = "down",
                e.NONE = "none",
                e
            }({})
              , Xe = {
                countdown: 5,
                onButtonClick: ()=>{}
                ,
                result: null,
                isPending: !1,
                currentTrend: Ke.NONE,
                multiplier: 1,
                basePoints: 10,
                predict: Ke.NONE,
                changeRate: null,
                prevPrice: null,
                currentPrice: null
            }
              , Ye = (0,
            a.createContext)(Xe)
              , ze = ()=>(0,
            a.useContext)(Ye)
              , Qe = e=>{
                var t = e.children
                  , r = (0,
                a.useState)(!1)
                  , n = (0,
                u.Z)(r, 2)
                  , s = n[0]
                  , i = n[1]
                  , c = (0,
                a.useState)(5)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)(null)
                  , h = (0,
                u.Z)(m, 2)
                  , f = h[0]
                  , x = h[1]
                  , v = (0,
                a.useState)(null)
                  , g = (0,
                u.Z)(v, 2)
                  , k = g[0]
                  , j = g[1]
                  , w = (0,
                a.useState)(Ke.NONE)
                  , C = (0,
                u.Z)(w, 2)
                  , y = C[0]
                  , N = C[1]
                  , O = Fe()
                  , P = te()
                  , E = P.uid
                  , S = P.gameId
                  , R = Te().updateGameInfo
                  , I = (0,
                a.useRef)(Ke.NONE)
                  , L = (0,
                a.useRef)(1)
                  , B = (0,
                a.useRef)(10)
                  , A = (0,
                a.useRef)(null)
                  , M = (0,
                a.useRef)(null)
                  , F = (0,
                a.useRef)(null)
                  , U = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t, r, a;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                t = I.current === Ke.UP ? 1 : 0,
                                e.next = 4,
                                be({
                                    extUserId: E,
                                    predict: t,
                                    gameId: S
                                });
                            case 4:
                                r = e.sent,
                                (a = r.data) && (j(a.won),
                                R({
                                    points: a.balancePoints,
                                    numChances: a.numChance,
                                    secondToRefresh: a.secondToRefresh
                                }),
                                L.current = a.multiplier,
                                B.current = a.basePoint,
                                A.current = Number(a.changeRate),
                                M.current = a.prevPrice,
                                F.current = a.currentPrice,
                                He({
                                    curCombo: a.curCombo,
                                    won: a.won,
                                    predict: t,
                                    date: (new Date).valueOf()
                                })),
                                e.next = 14;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(0),
                                j(null),
                                A.current = null,
                                ae(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 14:
                                return e.prev = 14,
                                I.current = Ke.NONE,
                                i(!1),
                                e.finish(14);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 9, 14, 18]])
                }
                ))), [S, E, R]);
                (0,
                a.useEffect)((()=>{
                    var e = null;
                    if (s) {
                        var t = 5;
                        p(t),
                        e = setInterval((()=>{
                            p(t -= 1),
                            0 === t && (e && clearInterval(e),
                            x(null),
                            U())
                        }
                        ), 1e3)
                    }
                    return ()=>{
                        e && clearTimeout(e)
                    }
                }
                ), [U, s]),
                (0,
                a.useEffect)((()=>{
                    if (s && O)
                        if (f) {
                            var e = O > f;
                            N(O === f ? Ke.NONE : e ? Ke.UP : Ke.DOWN)
                        } else
                            x(O)
                }
                ), [f, s, O]);
                var D = (0,
                a.useCallback)((e=>{
                    j(null),
                    i(!0),
                    I.current = e,
                    A.current = null,
                    e === Ke.UP && T.act({
                        action: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                        anchor: "OkxRacerLandingPage_PricePrediction_Moon_Click",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    }),
                    e === Ke.DOWN && T.act({
                        action: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                        anchor: "OkxRacerLandingPage_PricePrediction_Doom_Click",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), [])
                  , V = (0,
                a.useMemo)((()=>({
                    countdown: _,
                    onButtonClick: D,
                    result: k,
                    isPending: s,
                    currentTrend: y,
                    multiplier: L.current,
                    basePoints: B.current,
                    predict: I.current,
                    changeRate: A.current,
                    prevPrice: M.current,
                    currentPrice: F.current
                })), [_, y, s, L, D, k]);
                return (0,
                b.jsx)(Ye.Provider, {
                    value: V,
                    children: t
                })
            }
              , qe = r(94595)
              , Je = r(79459)
              , $e = 2e3
              , et = 500;
            function tt(e) {
                return (Math.abs(e) < 1e-4 ? Je.yx.ceilTruncate : Je.yx.floorTruncate)(e, 4)
            }
            const rt = "GuessResult_container__ECdpL"
              , at = "GuessResult_title__fzYxg"
              , nt = "GuessResult_multiplier__yRHWm"
              , st = "GuessResult_description__R2fup"
              , it = "GuessResult_detailsIcon__ZE7Ry"
              , ct = "GuessResult_changeRateContainer__a5-N7"
              , ot = "GuessResult_label__+b5Nz"
              , lt = "GuessResult_changeRate__yhVz3"
              , ut = "GuessResult_up__5vYDR"
              , dt = "GuessResult_down__fa-oP"
              , _t = "GuessResult_priceChange__xr6e8"
              , pt = "GuessResult_price__Vk+bY";
            function mt(e) {
                return (0,
                qe.xG)((0,
                qe.uf)(Je.yx.truncate(e, 1, !0)), {
                    code: "USD",
                    currencyDisplay: "narrowSymbol"
                })
            }
            var ht = e=>{
                var t = e.className
                  , r = ze()
                  , n = r.result
                  , s = r.multiplier
                  , i = r.changeRate
                  , c = r.prevPrice
                  , o = r.currentPrice
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , p = d[1];
                return (0,
                a.useEffect)((()=>{
                    var e, t;
                    if (null !== n) {
                        var r, a, s, i;
                        if (null !== (r = window) && void 0 !== r && null !== (a = r.Telegram) && void 0 !== a && a.WebApp)
                            null === (s = window.Telegram.WebApp.HapticFeedback) || void 0 === s || null === (i = s.notificationOccurred) || void 0 === i || i.call(s, n ? "success" : "error");
                        e = setTimeout((()=>{
                            p(!0),
                            t = setTimeout((()=>{
                                p(!1)
                            }
                            ), $e)
                        }
                        ), et)
                    }
                    return ()=>{
                        clearTimeout(e),
                        clearTimeout(t)
                    }
                }
                ), [n]),
                (0,
                b.jsx)(b.Fragment, {
                    children: _ && (0,
                    b.jsxs)("div", {
                        className: P()(t, rt),
                        children: [(0,
                        b.jsx)("p", {
                            className: nt,
                            children: n ? (0,
                            b.jsxs)("span", {
                                className: it,
                                children: ["\ud83d\udd25".repeat(Math.min(s, 4)), s > 1 ? "x".concat(s) : ""]
                            }) : (0,
                            b.jsx)("span", {
                                className: it,
                                children: "\ud83e\udd72"
                            })
                        }), (0,
                        b.jsx)("h2", {
                            className: at,
                            children: (0,
                            Z.O4)(n ? "ok_game_okxracer_win" : "ok_game_okxracer_lose")
                        }), (0,
                        b.jsxs)("div", {
                            className: st,
                            children: [null !== i && (0,
                            b.jsxs)("p", {
                                className: ct,
                                children: [(0,
                                b.jsx)("span", {
                                    className: ot,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_btc_price")
                                }), (0,
                                b.jsx)("span", {
                                    className: P()(lt, {
                                        [ut]: i > 0,
                                        [dt]: i < 0
                                    }),
                                    children: (0,
                                    qe.uf)(tt(i), {
                                        style: "percent",
                                        signDisplay: !0
                                    })
                                })]
                            }), c && o && (0,
                            b.jsx)("p", {
                                className: _t,
                                children: (0,
                                Z.Lg)("ok_game_okxracer_price_change", {
                                    previousPrice: (0,
                                    b.jsx)("span", {
                                        className: pt,
                                        children: mt(c)
                                    }),
                                    currentPrice: (0,
                                    b.jsx)("span", {
                                        className: pt,
                                        children: mt(o)
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
            ;
            var ft = {
                BOT_NAME: "OKX_official_bot",
                MINI_APP_NAME: "OKX_Racer"
            }
              , xt = function(e) {
                return e[e.unfinished = 0] = "unfinished",
                e[e.finished = 1] = "finished",
                e
            }({})
              , vt = function(e) {
                return e[e.task = 0] = "task",
                e[e.boost = 1] = "boost",
                e[e.DailyTask = 2] = "DailyTask",
                e[e.DailyBoost = 3] = "DailyBoost",
                e
            }({})
              , gt = "/help/okx-racer-terms-and-conditions"
              , kt = r(76983)
              , jt = r(59896);
            const bt = "BackgroundVideo_container__J5sO2"
              , wt = "BackgroundVideo_muteButton__04Huj"
              , Ct = "BackgroundVideo_muteButtonIcon__jW8Xs"
              , yt = "BackgroundVideo_staticImage__EpRTb"
              , Nt = "BackgroundVideo_hide__ZXYN9";
            var Ot, Pt, Zt, Et, St, Tt, Rt = "backgroundVideoSoundOn", It = "/cdn/assets/imgs/247/8C3F56E142FF9E9B.png", Lt = ["/cdn/assets/files/247/1CD8CBA05FC5A0A5.mp4", "/cdn/assets/files/247/766B45A8C0029E3D.webm"], Bt = ["/cdn/assets/files/247/FD71D56636980B09.mp4", "/cdn/assets/files/247/C524742B60C368EB.webm"], At = {
                playsInline: !0,
                controls: !1,
                preload: "auto",
                poster: "".concat(c.Z.cdnBaseUrl).concat(It)
            }, Mt = ()=>{
                var e = ze().isPending
                  , t = (0,
                a.useRef)(null)
                  , r = (0,
                a.useRef)(null)
                  , n = (0,
                a.useState)(!1)
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , o = s[1]
                  , l = (0,
                a.useState)(!1)
                  , d = (0,
                u.Z)(l, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)(!1)
                  , h = (0,
                u.Z)(m, 2)
                  , f = h[0]
                  , x = h[1]
                  , v = Ge()
                  , g = (0,
                a.useState)((()=>{
                    var e = v.get(Rt);
                    return Boolean(!e)
                }
                ))
                  , j = (0,
                u.Z)(g, 2)
                  , w = j[0]
                  , C = j[1];
                (0,
                a.useEffect)((()=>{
                    t.current && (e && (x(!1),
                    t.current.currentTime = 0,
                    t.current.play().then((()=>{
                        o(!0)
                    }
                    )).catch((()=>{
                        o(!1)
                    }
                    ))),
                    t.current.onended = ()=>{
                        var e;
                        x(!0),
                        null === (e = r.current) || void 0 === e || e.play().then((()=>{
                            p(!0)
                        }
                        )).catch((()=>{
                            p(!1)
                        }
                        ))
                    }
                    )
                }
                ), [e]);
                var y = !i && !_
                  , N = i && f && _
                  , O = i && (!f || !_);
                return (0,
                b.jsxs)("div", {
                    className: bt,
                    children: [(0,
                    b.jsx)(kt.default, {
                        category: kt.default.CATEGORY.fill,
                        type: kt.default.TYPE.quaternary,
                        size: kt.default.SIZE.md,
                        className: wt,
                        strictCircle: !0,
                        onClick: ()=>{
                            C((e=>(v.set(Rt, e),
                            !e)))
                        }
                        ,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: w ? "okx-growth-music-off" : "okx-growth-music-on",
                            className: Ct
                        })
                    }), (0,
                    b.jsx)(jt.Z, {
                        className: P()(yt, {
                            [Nt]: !y
                        }),
                        src: "".concat(c.Z.cdnBaseUrl).concat(It)
                    }), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, At), {}, {
                        className: P()({
                            [Nt]: !N
                        }),
                        ref: r,
                        loop: !0,
                        muted: !0,
                        children: Lt.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(c.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    })), (0,
                    b.jsx)("video", (0,
                    k.Z)((0,
                    k.Z)({}, At), {}, {
                        className: P()({
                            [Nt]: !O
                        }),
                        ref: t,
                        muted: w,
                        children: Bt.map((e=>(0,
                        b.jsx)("source", {
                            src: "".concat(c.Z.cdnBaseUrl).concat(e)
                        }, e)))
                    }))]
                })
            }
            , Ft = ["title", "titleId"];
            function Ut() {
                return Ut = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Ut.apply(this, arguments)
            }
            function Dt(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Vt(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Dt(e, Ft);
                return a.createElement("svg", Ut({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Ot || (Ot = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#A60014"
                })), Pt || (Pt = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Zt || (Zt = a.createElement("g", {
                    filter: "url(#filter0_i_738_19404)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#F5384F"
                }))), Et || (Et = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19404)"
                })), St || (St = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19552)"
                })), Tt || (Tt = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_i_738_19404",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", {
                    dy: 2
                }), a.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19404"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19404",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#F5384F"
                }), a.createElement("stop", {
                    offset: .48,
                    stopColor: "#F87989"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#F5384F"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19552",
                    x1: 62.6289,
                    y1: 48.4995,
                    x2: 62.6289,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#F5384F"
                }), a.createElement("stop", {
                    offset: .995,
                    stopColor: "#A60014"
                })))))
            }
            var Gt = a.forwardRef(Vt);
            r.p;
            var Wt, Ht, Kt, Xt, Yt, zt, Qt = ["title", "titleId"];
            function qt() {
                return qt = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                qt.apply(this, arguments)
            }
            function Jt(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function $t(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Jt(e, Qt);
                return a.createElement("svg", qt({
                    width: 166,
                    height: 60,
                    viewBox: "0 0 166 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Wt || (Wt = a.createElement("path", {
                    d: "M3 16.3433C3 11.925 6.58172 8.34326 11 8.34326H155C159.418 8.34326 163 11.925 163 16.3433V44.3433C163 50.9707 157.627 56.3433 151 56.3433H15C8.37258 56.3433 3 50.9707 3 44.3433V16.3433Z",
                    fill: "#01933B"
                })), Ht || (Ht = a.createElement("path", {
                    d: "M11 6.84326C5.75329 6.84326 1.5 11.0966 1.5 16.3433V44.3433C1.5 51.7991 7.54415 57.8433 15 57.8433H151C158.456 57.8433 164.5 51.7991 164.5 44.3433V16.3433C164.5 11.0966 160.247 6.84326 155 6.84326H11Z",
                    stroke: "white",
                    strokeWidth: 3
                })), Kt || (Kt = a.createElement("g", {
                    filter: "url(#filter0_i_738_19392)"
                }, a.createElement("path", {
                    className: "default",
                    d: "M3 8.34277C3 3.9245 6.58172 0.342773 11 0.342773H155C159.418 0.342773 163 3.9245 163 8.34277V40.3428C163 44.7611 159.418 48.3428 155 48.3428H11C6.58172 48.3428 3 44.7611 3 40.3428V8.34277Z",
                    fill: "#00BC4B"
                }))), Xt || (Xt = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 38.3428V40.3432C3 44.7615 6.58172 48.3432 11 48.3432H155C159.418 48.3432 163 44.7615 163 40.3432V38.3428C163 42.7611 159.418 46.3428 155 46.3428H11C6.58172 46.3428 3 42.7611 3 38.3428Z",
                    fill: "url(#paint0_linear_738_19392)"
                })), Yt || (Yt = a.createElement("path", {
                    className: "pressed",
                    transform: "translate(2 4)",
                    d: "M0 8.49951C0 4.08123 3.58172 0.499512 8 0.499512H152C156.418 0.499512 160 4.08123 160 8.49951V40.4995C160 44.9178 156.418 48.4995 152 48.4995H8C3.58172 48.4995 0 44.9178 0 40.4995V8.49951Z",
                    fill: "url(#paint0_linear_738_19488)"
                })), zt || (zt = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_i_738_19392",
                    x: 3,
                    y: .342773,
                    width: 160,
                    height: 50,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", {
                    dy: 2
                }), a.createElement("feGaussianBlur", {
                    stdDeviation: 2
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "arithmetic",
                    k2: -1,
                    k3: 1
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "shape",
                    result: "effect1_innerShadow_738_19392"
                })), a.createElement("linearGradient", {
                    id: "paint0_linear_738_19392",
                    x1: 3,
                    y1: 43.343,
                    x2: 163,
                    y2: 43.343,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#54EA90",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .48,
                    stopColor: "#54E88F"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#53E68E",
                    stopOpacity: 0
                })), a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint0_linear_738_19488",
                    x1: 72.4467,
                    y1: 48.4995,
                    x2: 72.4467,
                    y2: .499511,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "#00BC4B"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#01933B"
                }))))))
            }
            var er = a.forwardRef($t);
            r.p;
            const tr = {
                instructions: "ButtonContainer_instructions__PczCp",
                hide: "ButtonContainer_hide__sU3Rh",
                btnContainer: "ButtonContainer_btnContainer__Nnclb",
                btn: "ButtonContainer_btn__AmQTp",
                pressed: "ButtonContainer_pressed__UDboU",
                btnText: "ButtonContainer_btnText__9wXPy",
                btnGraphic: "ButtonContainer_btnGraphic__LFUin",
                arrow: "ButtonContainer_arrow__Q5suA"
            };
            var rr, ar = e=>{
                var t = e.className
                  , r = ze()
                  , n = r.onButtonClick
                  , s = r.isPending
                  , i = r.predict
                  , c = Te().numChances
                  , o = (0,
                a.useState)()
                  , l = (0,
                u.Z)(o, 2)
                  , d = l[0]
                  , _ = l[1];
                (0,
                a.useEffect)((()=>{
                    var e;
                    return s || (e = setTimeout((()=>{
                        _(void 0)
                    }
                    ), 2500)),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [s]);
                var p = e=>{
                    var t, r, a;
                    s || d || (_(e === Ke.UP ? Ke.DOWN : Ke.UP),
                    null !== (t = window) && void 0 !== t && null !== (r = t.Telegram) && void 0 !== r && null !== (a = r.WebApp) && void 0 !== a && a.HapticFeedback && window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),
                    n(e))
                }
                  , m = c <= 0;
                return (0,
                b.jsxs)("div", {
                    className: t,
                    children: [(0,
                    b.jsx)("p", {
                        className: P()(tr.instructions, s && tr.hide),
                        children: (0,
                        Z.O4)("ok_game_okxracer_prompt_start_guess", {
                            countDown: 5
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: tr.btnContainer,
                        children: [(0,
                        b.jsxs)("button", {
                            disabled: m || d === Ke.UP,
                            onClick: ()=>p(Ke.UP),
                            type: "button",
                            className: P()(tr.btn, tr.upBtn, {
                                [tr.pressed]: i === Ke.UP
                            }),
                            children: [(0,
                            b.jsx)(er, {
                                className: P()(tr.btnGraphic, tr.upBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: tr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_up"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-up-new",
                                    className: tr.arrow
                                })]
                            })]
                        }), (0,
                        b.jsxs)("button", {
                            disabled: m || d === Ke.DOWN,
                            onClick: ()=>p(Ke.DOWN),
                            type: "button",
                            className: P()(tr.btn, tr.downBtn, {
                                [tr.pressed]: i === Ke.DOWN
                            }),
                            children: [(0,
                            b.jsx)(Gt, {
                                className: P()(tr.btnGraphic, tr.downBtnGraphic)
                            }), (0,
                            b.jsxs)("span", {
                                className: tr.btnText,
                                children: [(0,
                                Z.O4)("ok_game_okxracer_prompt_price_down"), (0,
                                b.jsx)(E.Z, {
                                    iconName: "okx-growth-down-new",
                                    className: tr.arrow
                                })]
                            })]
                        })]
                    })]
                })
            }
            , nr = ["title", "titleId"];
            function sr() {
                return sr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                sr.apply(this, arguments)
            }
            function ir(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function cr(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = ir(e, nr);
                return a.createElement("svg", sr({
                    viewBox: "0 0 375 183",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, rr || (rr = a.createElement("g", {
                    transform: "translate(24 12)"
                }, a.createElement("rect", {
                    className: "track",
                    x: 2.5,
                    y: 2.5,
                    width: 322,
                    height: 155,
                    rx: 77.5,
                    fill: "#030303",
                    stroke: "#909090",
                    strokeWidth: 5
                }), a.createElement("path", {
                    d: "M81.4976 21.5C82.326 21.5 82.9976 20.8284 82.9976 20C82.9976 19.1716 82.326 18.5 81.4976 18.5V21.5ZM81.4976 138.5C49.1889 138.5 22.9976 112.309 22.9976 80H19.9976C19.9976 113.966 47.532 141.5 81.4976 141.5V138.5ZM22.9976 80C22.9976 47.6913 49.1889 21.5 81.4976 21.5V18.5C47.532 18.5 19.9976 46.0345 19.9976 80H22.9976Z",
                    fill: "url(#paint1_linear_263_6211)"
                }), a.createElement("path", {
                    d: "M247 138.5C246.172 138.5 245.5 139.172 245.5 140C245.5 140.828 246.172 141.5 247 141.5L247 138.5ZM247 21.5C279.309 21.5 305.5 47.6913 305.5 80L308.5 80C308.5 46.0345 280.966 18.5 247 18.5L247 21.5ZM305.5 80C305.5 112.309 279.309 138.5 247 138.5L247 141.5C280.966 141.5 308.5 113.966 308.5 80L305.5 80Z",
                    fill: "url(#paint2_linear_263_6211)"
                }), a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint1_linear_263_6211",
                    x1: 51.4976,
                    y1: 20,
                    x2: 51.4976,
                    y2: 140,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                })), a.createElement("linearGradient", {
                    id: "paint2_linear_263_6211",
                    x1: 277,
                    y1: 140,
                    x2: 277,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", {
                    stopColor: "white",
                    stopOpacity: 0
                }), a.createElement("stop", {
                    offset: .479411,
                    stopColor: "white"
                }), a.createElement("stop", {
                    offset: 1,
                    stopColor: "white",
                    stopOpacity: 0
                }))))))
            }
            var or = a.forwardRef(cr);
            r.p;
            var lr = r(48275);
            const ur = "FuelIndicator_fuelContainer__QIskL"
              , dr = "FuelIndicator_toTasksIcon__Y7exC"
              , _r = "FuelIndicator_line__tWBfm"
              , pr = "FuelIndicator_description__EaUsa"
              , mr = "FuelIndicator_fuelIcon__I38Ss"
              , hr = "FuelIndicator_maxChances__OMSHl"
              , fr = "FuelIndicator_earnPtsMsg__PjtcT";
            var xr, vr, gr = e=>{
                var t = e.className
                  , r = Te()
                  , a = r.numChances
                  , n = r.numChancesTotal;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, ur),
                    children: [(0,
                    b.jsx)("span", {
                        className: mr,
                        children: "\u26fd\ufe0f"
                    }), a > 0 ? (0,
                    b.jsx)(lr.Z.Line, {
                        className: _r,
                        markColor: "#fff",
                        trackColor: "#272727",
                        percent: a / n * 100
                    }, n) : (0,
                    b.jsx)(s.Link, {
                        to: M,
                        className: fr,
                        children: (0,
                        Z.O4)("ok_game_okxracer_earn_pts_desc")
                    }), (0,
                    b.jsxs)("p", {
                        className: pr,
                        children: [a, "\xa0", void 0 !== n && 0 !== n && (0,
                        b.jsxs)(b.Fragment, {
                            children: ["/\xa0", (0,
                            b.jsx)("span", {
                                className: hr,
                                children: n
                            })]
                        })]
                    }), (0,
                    b.jsx)(s.Link, {
                        to: M,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-chevrons-right",
                            className: dr
                        })
                    })]
                })
            }
            , kr = ["title", "titleId"];
            function jr() {
                return jr = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                jr.apply(this, arguments)
            }
            function br(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function wr(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = br(e, kr);
                return a.createElement("svg", jr({
                    width: 170,
                    height: 37,
                    viewBox: "0 0 170 37",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, xr || (xr = a.createElement("rect", {
                    x: 2.5,
                    y: -2.5,
                    width: 164,
                    height: 31,
                    rx: 15.5,
                    transform: "matrix(1 0 0 -1 0.5 31.3428)",
                    stroke: "url(#paint0_linear_563_49992)",
                    strokeWidth: 5
                })), vr || (vr = a.createElement("defs", null, a.createElement("linearGradient", {
                    id: "paint0_linear_563_49992",
                    x1: 84,
                    y1: 28.5652,
                    x2: 84,
                    y2: 5.44528e-7,
                    gradientUnits: "userSpaceOnUse"
                }, a.createElement("stop", null), a.createElement("stop", {
                    offset: 1,
                    stopColor: "#909090"
                })))))
            }
            var Cr = a.forwardRef(wr);
            r.p;
            const yr = "RefuelTimer_container__wtALO"
              , Nr = "RefuelTimer_description__sD+HM"
              , Or = "RefuelTimer_timer__LL1+c";
            var Pr = e=>{
                var t = e.className
                  , r = Te().countdownDisplay;
                return (0,
                b.jsxs)("div", {
                    className: P()(t, yr),
                    children: [(0,
                    b.jsx)(Cr, {}), (0,
                    b.jsx)("p", {
                        className: Nr,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_nx_refill_time", {
                            countDown: (0,
                            b.jsx)("span", {
                                className: Or,
                                children: r
                            })
                        })
                    })]
                })
            }
            ;
            const Zr = "CoinPrice_raceTrack__NZO2t"
              , Er = "CoinPrice_run__f0UIF"
              , Sr = "CoinPrice_coinPriceContainer__YbeUE"
              , Tr = "CoinPrice_content__a-5Jl"
              , Rr = "CoinPrice_fuelIndicator__p+f1I"
              , Ir = "CoinPrice_refuelTimer__tbWMw"
              , Lr = "CoinPrice_hide__bHhxJ"
              , Br = "CoinPrice_label__yTNy0"
              , Ar = "CoinPrice_value__ZjRZz"
              , Mr = "CoinPrice_slotMachine__hUQKt"
              , Fr = "SlotMachine_row__a4TO0"
              , Ur = "SlotMachine_animate__-G4TR"
              , Dr = "SlotMachine_column__aR0VE"
              , Vr = "SlotMachine_arrows__m1dhv"
              , Gr = "SlotMachine_columnContainer__a76pd"
              , Wr = "SlotMachine_background__b9TMg"
              , Hr = "SlotMachine_slot__jwCvC"
              , Kr = "SlotMachine_staticColumn__O5zfB"
              , Xr = "SlotMachine_sm__ZRCig"
              , Yr = "SlotMachine_arrow__qOYmf"
              , zr = "SlotMachine_wentUp__z48TO"
              , Qr = "SlotMachine_down__aYC8C"
              , qr = "SlotMachine_stable__CDMLP"
              , Jr = "SlotMachine_wentDown__1fYUS"
              , $r = "SlotMachine_up__IuiYV";
            var ea = e=>{
                var t = e.animate
                  , r = e.result
                  , a = void 0 === r ? 0 : r
                  , n = e.columnStyle;
                return (0,
                b.jsxs)("div", {
                    className: Gr,
                    children: [(0,
                    b.jsx)("div", {
                        className: Wr
                    }), (0,
                    b.jsxs)("div", {
                        className: Dr,
                        style: n,
                        children: [(0,
                        b.jsx)("p", {
                            className: Hr,
                            children: a
                        }), t && (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "1"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "2"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "3"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "4"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "5"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "6"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "7"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "8"
                            }), (0,
                            b.jsx)("p", {
                                className: Hr,
                                children: "9"
                            })]
                        })]
                    })]
                })
            }
              , ta = ()=>{
                var e = ze()
                  , t = e.changeRate
                  , r = e.isPending
                  , n = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , o = (0,
                a.useState)(null)
                  , l = (0,
                u.Z)(o, 2)
                  , d = l[0]
                  , _ = l[1]
                  , p = (0,
                a.useState)(!1)
                  , m = (0,
                u.Z)(p, 2)
                  , h = m[0]
                  , f = m[1];
                return (0,
                a.useEffect)((()=>{
                    r && f(!0)
                }
                ), [r]),
                (0,
                a.useEffect)((()=>{
                    var e;
                    null !== t ? (_(null === (e = t) ? null : e > 0 ? Ke.UP : 0 === e ? Ke.NONE : Ke.DOWN),
                    c(String(Math.abs(Number(tt(t)))).split("").filter((e=>"." !== e)).map((e=>parseInt(e, 10)))),
                    f(!1)) : _(null)
                }
                ), [t]),
                (0,
                b.jsxs)("div", {
                    className: P()(Fr, h && Ur),
                    children: [(0,
                    b.jsx)("div", {
                        className: Gr,
                        children: (0,
                        b.jsxs)("div", {
                            className: P()(Vr, {
                                [zr]: d === Ke.UP,
                                [Jr]: d === Ke.DOWN,
                                [qr]: d === Ke.NONE
                            }),
                            children: [(0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-up-sm",
                                className: P()(Yr, $r)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-right-sm",
                                className: P()(Yr, qr)
                            }), (0,
                            b.jsx)(E.Z, {
                                iconName: "okds-arrow-pointer-down-sm",
                                className: P()(Yr, Qr)
                            })]
                        })
                    }), (0,
                    b.jsx)(ea, {
                        animate: h,
                        result: i[0],
                        columnStyle: {
                            animationDelay: "500ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: Kr,
                        children: "."
                    }), (0,
                    b.jsx)(ea, {
                        animate: h,
                        result: i[1],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(ea, {
                        animate: h,
                        result: i[2],
                        columnStyle: {
                            animationDelay: "300ms"
                        }
                    }), (0,
                    b.jsx)(ea, {
                        animate: h,
                        result: i[3],
                        columnStyle: {
                            animationDelay: "200ms"
                        }
                    }), (0,
                    b.jsx)(ea, {
                        animate: h,
                        result: i[4],
                        columnStyle: {
                            animationDelay: "400ms"
                        }
                    }), (0,
                    b.jsx)("span", {
                        className: P()(Kr, Xr),
                        children: "%"
                    })]
                })
            }
              , ra = ()=>{
                var e = Fe()
                  , t = ze()
                  , r = t.isPending
                  , n = t.changeRate
                  , s = Te().countdownDisplay
                  , i = (0,
                a.useState)(!1)
                  , c = (0,
                u.Z)(i, 2)
                  , o = c[0]
                  , l = c[1];
                (0,
                a.useEffect)((()=>{
                    r && l(!0)
                }
                ), [r]),
                (0,
                a.useEffect)((()=>{
                    var e, t = ()=>{
                        e && clearTimeout(e)
                    }
                    ;
                    return r || (null === n ? l(!1) : e = setTimeout((()=>{
                        l(!1)
                    }
                    ), et)),
                    t
                }
                ), [n, r]);
                var d = e ? "$".concat((0,
                qe.uf)(Je.yx.truncate(e, 1, !0))) : "--"
                  , _ = s && !r;
                return (0,
                b.jsxs)("div", {
                    className: Sr,
                    children: [(0,
                    b.jsx)(or, {
                        className: P()(Zr, r && Er)
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Tr, o && Lr),
                        children: [(0,
                        b.jsx)("p", {
                            className: Br,
                            children: (0,
                            Z.O4)("ok_game_okxracer_btc_price")
                        }), (0,
                        b.jsx)("p", {
                            className: Ar,
                            children: d
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: P()(Tr, !o && Lr),
                        children: [(0,
                        b.jsxs)("p", {
                            className: Br,
                            children: [(0,
                            Z.O4)("ok_game_okxracer_btc_price"), " ", d]
                        }), (0,
                        b.jsx)("div", {
                            className: Mr,
                            children: (0,
                            b.jsx)(ta, {})
                        })]
                    }), (0,
                    b.jsx)(gr, {
                        className: Rr
                    }), (0,
                    b.jsx)("div", {
                        className: P()(Ir, !_ && Lr),
                        children: (0,
                        b.jsx)(Pr, {})
                    })]
                })
            }
            ;
            const aa = "LandingPage_container__pU2cC"
              , na = "LandingPage_resultOverlay__WSYZb"
              , sa = "LandingPage_disclaimer__pVRHC"
              , ia = "LandingPage_recordsBtnContainer__Anr4Y"
              , ca = "LandingPage_backgroundVideo__flTkH"
              , oa = "LandingPage_content__D0ZLW"
              , la = "LandingPage_points__Ruq4j"
              , ua = "LandingPage_coinPrice__nJ0nj"
              , da = "LandingPage_btnContainer__IEll8"
              , _a = "LandingPage_termsAndConditions__MdClU";
            var pa = r(22387);
            const ma = "UserPointCounter_pointCounter__-QAj8"
              , ha = "UserPointCounter_hide__o4qTQ"
              , fa = "UserPointCounter_points__d3HeG"
              , xa = "UserPointCounter_countdown__Z7xGo"
              , va = "UserPointCounter_title__B-gN-"
              , ga = "UserPointCounter_value__2a23E";
            var ka = ()=>{
                var e = Te().points
                  , t = (0,
                pa.Z)(e)
                  , r = ze()
                  , n = r.isPending
                  , s = r.countdown
                  , i = (0,
                a.useRef)(null)
                  , c = (0,
                a.useState)(!1)
                  , o = (0,
                u.Z)(c, 2)
                  , l = o[0]
                  , d = o[1];
                (0,
                a.useEffect)((()=>{
                    var e;
                    return n ? d(!0) : e = setTimeout((()=>{
                        d(!1)
                    }
                    ), 2500),
                    ()=>{
                        clearTimeout(e)
                    }
                }
                ), [n]);
                var _ = (0,
                a.useCallback)(((e,t,r)=>{
                    e <= t && (r((0,
                    qe.uf)(String(e))),
                    requestAnimationFrame((()=>{
                        var a = function(e, t) {
                            var r = t - e;
                            return Math.max(1, Math.floor(r / 10))
                        }(e, t);
                        _(e + a, t, r)
                    }
                    )))
                }
                ), []);
                return (0,
                a.useEffect)((()=>{
                    var r;
                    if (t === e)
                        return ()=>{}
                        ;
                    function a(e) {
                        i.current && (i.current.innerText = e)
                    }
                    if ("0" === (null === (r = i.current) || void 0 === r ? void 0 : r.innerText) || !t)
                        return _(0, e, a),
                        ()=>{}
                        ;
                    var n = setTimeout((()=>{
                        _(t || 0, e, a)
                    }
                    ), 2500);
                    return ()=>{
                        clearTimeout(n)
                    }
                }
                ), [_, e, t]),
                (0,
                b.jsxs)("div", {
                    className: ma,
                    children: [(0,
                    b.jsxs)("p", {
                        className: P()(va, l && ha),
                        children: ["\ud83c\udfc6 ", (0,
                        Z.O4)("ok_game_okxracer_available_pts")]
                    }), (0,
                    b.jsx)("p", {
                        ref: i,
                        className: P()(fa, l && ha),
                        children: "0"
                    }), (0,
                    b.jsxs)("p", {
                        className: P()(xa, !l && ha),
                        children: ["00:0", (0,
                        b.jsx)("span", {
                            className: ga,
                            children: s
                        })]
                    })]
                })
            }
              , ja = r(2663);
            const ba = {
                "top-padding": "BottomSheet_top-padding__r99dG",
                topPadding: "BottomSheet_top-padding__r99dG",
                closeIcon: "BottomSheet_closeIcon__pR0b-"
            };
            var wa = {
                noMargin: !0,
                alignBottom: !0,
                maskClosable: !0,
                closeClassName: ba.closeBtn,
                closeIconClassName: ba.closeIcon
            }
              , Ca = e=>(0,
            b.jsx)(ja.Z, (0,
            k.Z)((0,
            k.Z)({}, wa), {}, {
                topContent: e.title ? void 0 : (0,
                b.jsx)("div", {
                    className: ba.topPadding
                })
            }, e));
            const ya = "ViewRecordsButton_button__MRo78"
              , Na = "ViewRecordsButton_btnIcon__prKlS"
              , Oa = "ViewRecordsButton_title__obA3r"
              , Pa = "ViewRecordsButton_container__N3Rrb"
              , Za = "ViewRecordsButton_recordContainer__ruZVu"
              , Ea = "ViewRecordsButton_recordField__dACwq"
              , Sa = "ViewRecordsButton_label__xt3Hw"
              , Ta = "ViewRecordsButton_value__lTHA5"
              , Ra = "ViewRecordsButton_trendIcon__3RV6P"
              , Ia = "ViewRecordsButton_up__EC1B6"
              , La = "ViewRecordsButton_down__4PWTz"
              , Ba = "ViewRecordsButton_timestamp__P0JEp"
              , Aa = "ViewRecordsButton_emptyMessageContainer__6fmRI"
              , Ma = "ViewRecordsButton_description__F22UB";
            var Fa = e=>{
                var t = e.label
                  , r = e.value;
                return (0,
                b.jsxs)("div", {
                    className: Ea,
                    children: [(0,
                    b.jsx)("p", {
                        className: Sa,
                        children: t
                    }), (0,
                    b.jsx)("div", {
                        className: Ta,
                        children: r
                    })]
                })
            }
              , Ua = ()=>(0,
            b.jsxs)("button", {
                className: ya,
                type: "button",
                onClick: ()=>{
                    var e = Ge().get(We) || []
                      , t = (0,
                    b.jsx)(b.Fragment, {
                        children: e.length > 0 ? e.map((e=>{
                            var t = 1 === e.predict
                              , r = "ok_game_okxracer_moon"
                              , a = Ia
                              , n = "okx-growth-trending-up";
                            return t || (r = "ok_game_okxracer_doom",
                            a = La,
                            n = "okx-growth-trending-down"),
                            (0,
                            b.jsxs)("div", {
                                className: Za,
                                children: [(0,
                                b.jsx)(Fa, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_your_guess"),
                                    value: (0,
                                    b.jsxs)(b.Fragment, {
                                        children: [(0,
                                        Z.O4)(r), (0,
                                        b.jsx)(E.Z, {
                                            className: P()(Ra, a),
                                            iconName: n
                                        })]
                                    })
                                }), (0,
                                b.jsx)(Fa, {
                                    label: "Result",
                                    value: (0,
                                    Z.O4)(e.won ? "ok_game_okxracer_win_small" : "ok_game_okxracer_miss_small")
                                }), (0,
                                b.jsx)(Fa, {
                                    label: (0,
                                    Z.O4)("ok_game_okxracer_consecutive_wins"),
                                    value: e.curCombo
                                }), (0,
                                b.jsx)("p", {
                                    className: Ba,
                                    children: (0,
                                    qe.o0)(new Date(e.date), {
                                        format: "yyyyMMMdhhmmss"
                                    })
                                })]
                            }, e.date)
                        }
                        )) : (0,
                        b.jsxs)("div", {
                            className: Aa,
                            children: [(0,
                            b.jsx)("p", {
                                className: Oa,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_racing_record")
                            }), (0,
                            b.jsx)("p", {
                                className: Ma,
                                children: (0,
                                Z.O4)("ok_game_okxracer_no_past_activity")
                            })]
                        })
                    });
                    (e=>{
                        var t = ja.Z.show((0,
                        k.Z)((0,
                        k.Z)({}, wa), {}, {
                            topContent: e.title ? void 0 : (0,
                            b.jsx)("div", {
                                className: ba.topPadding
                            }),
                            onClose: ()=>{
                                t.destroy()
                            }
                        }, e))
                    }
                    )({
                        title: (0,
                        b.jsx)("span", {
                            className: Oa,
                            children: (0,
                            Z.O4)("ok_game_okxracer_racing_records")
                        }),
                        titleCenter: !0,
                        containerClassName: Pa,
                        children: t
                    })
                }
                ,
                children: [(0,
                Z.O4)("ok_game_okxracer_my_records"), (0,
                b.jsx)(E.Z, {
                    iconName: "okx-growth-chevrons",
                    className: Na
                })]
            })
              , Da = ()=>((0,
            a.useEffect)((()=>{
                T.act({
                    action: "OkxRacerLandingPage_Page_FullPage_View",
                    anchor: "OkxRacerLandingPage_Page_FullPage_View",
                    params: {},
                    actionType: "",
                    elementType: "",
                    ampProject: "okx"
                })
            }
            ), []),
            (0,
            b.jsxs)("div", {
                className: aa,
                children: [(0,
                b.jsx)("div", {
                    className: ia,
                    children: (0,
                    b.jsx)(Ua, {})
                }), (0,
                b.jsx)("div", {
                    className: ca,
                    children: (0,
                    b.jsx)(Mt, {})
                }), (0,
                b.jsxs)("div", {
                    className: oa,
                    children: [(0,
                    b.jsx)("div", {
                        className: la,
                        children: (0,
                        b.jsx)(ka, {})
                    }), (0,
                    b.jsx)("div", {
                        className: ua,
                        children: (0,
                        b.jsx)(ra, {})
                    }), (0,
                    b.jsx)(ar, {
                        className: da
                    })]
                }), (0,
                b.jsx)("button", {
                    className: _a,
                    onClick: ()=>{
                        var e, t;
                        null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(gt)
                    }
                    ,
                    type: "button",
                    children: (0,
                    Z.O4)("ok_game_okxracer_tnc")
                }), (0,
                b.jsx)("p", {
                    className: sa,
                    children: (0,
                    Z.O4)("ok_game_okxracer_disclaimer")
                }), (0,
                b.jsx)(ht, {
                    className: na
                })]
            }))
              , Va = ()=>(0,
            b.jsx)(Qe, {
                children: (0,
                b.jsx)(Da, {})
            })
              , Ga = r(24084);
            const Wa = "LeaderBoard_container__0DJSO"
              , Ha = "LeaderBoard_title__jnBkh"
              , Ka = "LeaderBoard_titleMark__t4fQw"
              , Xa = "LeaderBoard_desc__MFxC+"
              , Ya = "LeaderBoard_inviteList__mV9a7"
              , za = "LeaderBoard_tabActiveClassName__7Xv4B"
              , Qa = "LeaderBoard_tabsContent__KCGtW"
              , qa = "LoadingPlaceholder_loadingPlaceholder__e5Mgs";
            var Ja = e=>{
                var t = e.className;
                return (0,
                b.jsx)("div", {
                    className: P()(qa, t)
                })
            }
            ;
            const $a = "InviteButton_invite-btn__aAMio"
              , en = "InviteButton_btn-a__At-wO"
              , tn = "InviteButton_btn-container__sYDy5"
              , rn = "InviteButton_btn-text__PhM48"
              , an = "InviteButton_copyButton__znucI"
              , nn = "InviteButton_copyIcon__QZgE9";
            var sn = e=>{
                var t = e.text
                  , r = void 0 === t ? (0,
                Z.O4)("ok_game_okxracer_invite_friends") : t
                  , a = e.className
                  , n = (e=>{
                    var t = new q.Z
                      , r = (0,
                    Z.O4)("ok_game_okxracer_invitation_message") || "Welcome to join us"
                      , a = "https://t.me/".concat(ft.BOT_NAME, "/").concat(ft.MINI_APP_NAME, "?startapp=").concat((t.stringify({
                        linkCode: e
                    }) || "").replace("=", "_"));
                    return {
                        appUrl: a,
                        shareUrl: "".concat("https://t.me/share/url", "?url=").concat(encodeURIComponent(a), "&text=").concat(r)
                    }
                }
                )(Te().linkCode)
                  , s = n.shareUrl
                  , i = n.appUrl;
                return (0,
                b.jsxs)("div", {
                    className: P()(a, tn),
                    children: [(0,
                    b.jsx)("a", {
                        className: en,
                        href: s,
                        children: (0,
                        b.jsx)(kt.default, {
                            category: kt.default.CATEGORY.fill,
                            type: kt.default.TYPE.tertiary,
                            size: kt.default.SIZE.lg,
                            className: $a,
                            onClick: ()=>{
                                T.act({
                                    action: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                    anchor: "OkxRacerFriendsPage_Share_InviteButton_Click",
                                    params: {},
                                    actionType: "",
                                    elementType: "",
                                    ampProject: "okx"
                                })
                            }
                            ,
                            children: (0,
                            b.jsx)("div", {
                                className: rn,
                                children: r
                            })
                        })
                    }), (0,
                    b.jsx)(kt.default, {
                        strictCircle: !0,
                        category: kt.default.CATEGORY.fill,
                        type: kt.default.TYPE.tertiary,
                        size: kt.default.SIZE.lg,
                        onClick: ()=>{
                            try {
                                navigator.clipboard.writeText(i),
                                ae(!0, (0,
                                Z.O4)("ok_game_okxracer_copied_url"))
                            } catch (e) {
                                ae(!1, "Copy Invite URL failed")
                            }
                        }
                        ,
                        className: an,
                        children: (0,
                        b.jsx)(E.Z, {
                            iconName: "okx-growth-copy",
                            className: nn
                        })
                    })]
                })
            }
            ;
            const cn = "RankList_listItem__qJvXJ"
              , on = "RankList_name__sxTWa"
              , ln = "RankList_mask__ldBi8"
              , un = "RankList_hightLightRow__xYkeg"
              , dn = "RankList_listHeader__KVGnw"
              , _n = "RankList_rank__k2m5R"
              , pn = "RankList_icon__1-SRV"
              , mn = "RankList_point__D5mVw"
              , hn = "RankList_pointIcon__k80Wy"
              , fn = "RankList_InviteButton__D6ute"
              , xn = "RankList_noFirendsNote__Ckkil"
              , vn = "RankList_under__MJ5We"
              , gn = "RankList_rankItemPlaceholder__z-upW"
              , kn = "RankList_rank-name__YEqnc"
              , jn = "RankList_rank-score__gtI+m";
            var bn = {
                1: "\ud83e\udd47",
                2: "\ud83e\udd48",
                3: "\ud83e\udd49",
                4: "\ud83c\udfc1"
            }
              , wn = 1
              , Cn = 2
              , yn = e=>{
                var t = e.total;
                return (0,
                b.jsxs)("div", {
                    className: dn,
                    children: [(0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_racers_num", {
                            num: (0,
                            qe.uf)(t)
                        })
                    }), (0,
                    b.jsx)("span", {
                        children: (0,
                        Z.O4)("ok_game_okxracer_all_time_pts")
                    })]
                })
            }
              , Nn = ()=>(0,
            b.jsx)("div", {
                children: Array.from({
                    length: 3
                }).map(((e,t)=>(0,
                b.jsxs)("div", {
                    className: gn,
                    children: [(0,
                    b.jsx)(Ja, {
                        className: kn
                    }), (0,
                    b.jsx)(Ja, {
                        className: jn
                    })]
                }, t)))
            })
              , On = e=>{
                var t = e.item
                  , r = e.isHighlight;
                return (0,
                b.jsxs)("div", {
                    className: P()(cn, r && un),
                    children: [(0,
                    b.jsx)("div", {
                        className: ln
                    }), t.rank <= 3 ? (0,
                    b.jsx)("span", {
                        className: P()(_n, pn),
                        children: bn[t.rank]
                    }) : (0,
                    b.jsx)("span", {
                        className: _n,
                        children: t.rank > 100 ? "100+" : "#".concat(t.rank)
                    }), (0,
                    b.jsx)("div", {
                        className: on,
                        children: t.extUserName
                    }), (0,
                    b.jsxs)("div", {
                        className: mn,
                        children: [(0,
                        b.jsx)("span", {
                            className: hn,
                            children: bn[4]
                        }), (0,
                        Z.O4)("ok_game_okxracer_points_wo_plus2", {
                            points: (0,
                            qe.uf)(t.totalPoints)
                        })]
                    })]
                })
            }
              , Pn = e=>{
                var t = e.pageType
                  , r = void 0 === t ? wn : t
                  , n = te()
                  , s = n.uid
                  , i = n.gameId
                  , c = (0,
                a.useState)(!0)
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = (0,
                a.useState)([])
                  , h = (0,
                u.Z)(m, 2)
                  , f = h[0]
                  , x = h[1]
                  , v = (0,
                a.useState)(0)
                  , g = (0,
                u.Z)(v, 2)
                  , k = g[0]
                  , j = g[1]
                  , w = (0,
                a.useState)()
                  , C = (0,
                u.Z)(w, 2)
                  , y = C[0]
                  , N = C[1]
                  , O = (0,
                a.useCallback)(function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var a, n;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0,
                                    a = {
                                        extUserId: s,
                                        gameId: i,
                                        pageNo: t
                                    },
                                    r !== wn) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5,
                                    Ce(a);
                                case 5:
                                    e.t0 = e.sent,
                                    e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    ye(a);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    (n = e.t0) && n.rows && (x(n.rows),
                                    j(n.total),
                                    N(n.userRanking)),
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t1 = e.catch(0),
                                    e.t1;
                                case 18:
                                    p(!1);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 15]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [i, r, s])
                  , P = y && ((null === y || void 0 === y ? void 0 : y.rank) > 3 || -1 === (null === y || void 0 === y ? void 0 : y.rank));
                return (0,
                a.useEffect)((()=>{
                    O(1)
                }
                ), [O]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(yn, {
                        total: k
                    }), _ ? (0,
                    b.jsx)(Nn, {}) : (0,
                    b.jsxs)(b.Fragment, {
                        children: [P && (0,
                        b.jsx)(On, {
                            item: y,
                            isHighlight: !0
                        }), f.map(((e,t)=>(0,
                        b.jsx)(On, {
                            item: e
                        }, "".concat(e.extUserName, "-").concat(t))))]
                    }), (0,
                    b.jsx)("div", {
                        className: vn
                    }), r === wn && (0,
                    b.jsxs)(b.Fragment, {
                        children: [1 === f.length && (0,
                        b.jsx)("div", {
                            className: xn,
                            children: (0,
                            Z.O4)("ok_game_okxracer_invite_desc")
                        }), 1 === f.length && (0,
                        b.jsx)(sn, {
                            className: fn,
                            text: (0,
                            Z.O4)("ok_game_okxracer_invite_contacts")
                        })]
                    })]
                })
            }
              , Zn = ()=>(0,
            b.jsxs)("div", {
                className: Wa,
                children: [(0,
                b.jsx)("div", {
                    className: Ha,
                    children: (0,
                    Z.Lg)("ok_game_okxracer_race_to_top", {
                        top: (0,
                        b.jsx)("span", {
                            className: Ka,
                            children: (0,
                            Z.O4)("ok_game_okxracer_top")
                        })
                    })
                }), (0,
                b.jsx)("div", {
                    className: Xa,
                    children: (0,
                    Z.O4)("ok_game_okxracer_leaderboard_guide")
                }), (0,
                b.jsxs)(Ga.Z, {
                    activeClassName: za,
                    noPadding: !0,
                    size: Ga.Z.SIZE.xl,
                    destroyOnHide: !0,
                    children: [(0,
                    b.jsx)(Ga.Z.TabPane, {
                        tab: (0,
                        Z.O4)("ok_game_okxracer_friends2"),
                        id: wn,
                        className: Qa,
                        children: (0,
                        b.jsx)("div", {
                            className: Ya,
                            children: (0,
                            b.jsx)(Pn, {
                                pageType: wn
                            })
                        })
                    }), (0,
                    b.jsx)(Ga.Z.TabPane, {
                        className: Qa,
                        tab: (0,
                        Z.O4)("ok_game_okxracer_global"),
                        id: Cn,
                        children: (0,
                        b.jsx)("div", {
                            className: Ya,
                            children: (0,
                            b.jsx)(Pn, {
                                pageType: Cn
                            })
                        })
                    })]
                })]
            });
            const En = "QrCode_container__r4Fu7"
              , Sn = "QrCode_qrCode__16PWa"
              , Tn = "QrCode_title__+cibb"
              , Rn = "QrCode_message__eaOzW";
            var In = ()=>(0,
            b.jsxs)("div", {
                className: En,
                children: [(0,
                b.jsx)(jt.Z, {
                    className: Sn,
                    src: "".concat(c.Z.cdnBaseUrl, "/cdn/assets/imgs/247/9BC4664BE2754582.svg")
                }), (0,
                b.jsxs)("p", {
                    className: Tn,
                    children: ["Scan to play", (0,
                    b.jsx)("br", {}), (0,
                    b.jsx)("em", {
                        children: "OKX Racer"
                    })]
                }), (0,
                b.jsx)("p", {
                    className: Rn,
                    children: (0,
                    Z.O4)("ok_game_okxracer_browser_msg")
                })]
            })
              , Ln = r(90534);
            const Bn = "PullupList_loading__+51Dh"
              , An = "PullupList_listLoadItem__XcvkH"
              , Mn = "PullupList_listLeft__4eGh6"
              , Fn = "PullupList_listRight__w7Ely"
              , Un = "PullupList_listLoading__whJeg";
            var Dn = ()=>(0,
            b.jsxs)("div", {
                className: P()(An),
                children: [(0,
                b.jsx)(Ja, {
                    className: Mn
                }), (0,
                b.jsx)(Ja, {
                    className: Fn
                })]
            })
              , Vn = ()=>(0,
            b.jsx)("div", {
                className: Un,
                children: Array(3).fill(null).map(((e,t)=>(0,
                b.jsx)(Dn, {}, t)))
            })
              , Gn = e=>{
                var t = e.loadData
                  , r = e.children
                  , n = (0,
                a.useState)([])
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!0)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                a.useRef)({
                    total: -1,
                    page: 1,
                    stop: !1
                })
                  , f = (0,
                a.useRef)(null)
                  , x = (0,
                a.useState)(!1)
                  , v = (0,
                u.Z)(x, 2)
                  , g = v[0]
                  , k = v[1]
                  , j = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (-1 === h.current.total || !(i.length >= h.current.total || !0 === h.current.stop)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return m(!0),
                                    e.prev = 3,
                                    e.next = 6,
                                    t(h.current.page, h.current.total);
                                case 6:
                                    (r = e.sent) && r.rows ? (h.current.page += 1,
                                    c((e=>[...e, ...r.rows])),
                                    h.current.total = 0 === r.rows.length ? i.length : r.total) : h.current.stop = !0,
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(3),
                                    h.current.stop = !0;
                                case 13:
                                    m(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[3, 10]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , w = (0,
                Ln.Z)(j, {
                    wait: 500,
                    leading: !0
                }).run
                  , C = e=>{
                    e[0].isIntersecting && !p && !1 === h.current.stop && k(!g)
                }
                ;
                return (0,
                a.useEffect)((()=>{
                    var e = new IntersectionObserver(C,{
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    });
                    return f.current && e.observe(f.current),
                    ()=>{
                        f.current && e.unobserve(f.current)
                    }
                }
                ), [p]),
                (0,
                a.useEffect)((()=>{
                    w()
                }
                ), [g]),
                (0,
                b.jsxs)(b.Fragment, {
                    children: [i.map(((e,t)=>r(e, t))), (0,
                    b.jsx)("div", {
                        className: Bn,
                        ref: f,
                        children: p && (0,
                        b.jsx)(Vn, {})
                    })]
                })
            }
            ;
            const Wn = "InviteList_listItem__q4jhG"
              , Hn = "InviteList_name__LLQgt"
              , Kn = "InviteList_point__kXtCn"
              , Xn = "InviteList_earnedPrice__4vAfw"
              , Yn = "InviteList_pointNumber__v4P1H";
            var zn = ()=>{
                var e = te()
                  , t = e.uid
                  , r = e.gameId
                  , n = (0,
                a.useState)(0)
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(a, n) {
                        var s, i;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = {
                                        extUserId: t,
                                        gameId: r,
                                        pageNo: a
                                    },
                                    n && n >= 0 && (s.total = n),
                                    e.next = 4,
                                    we(s);
                                case 4:
                                    return (i = e.sent) && c(i.accumPoints),
                                    e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)("div", {
                        className: Xn,
                        children: (0,
                        Z.Lg)("ok_game_okxracer_refer_points", {
                            points: (0,
                            b.jsx)("span", {
                                className: Yn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_wo_plus2", {
                                    points: (0,
                                    qe.uf)(i)
                                })
                            })
                        })
                    }), (0,
                    b.jsx)(Gn, {
                        loadData: d,
                        children: (e,t)=>(0,
                        b.jsxs)("div", {
                            className: Wn,
                            children: [(0,
                            b.jsx)("div", {
                                className: Hn,
                                children: e.extInviteeName
                            }), (0,
                            b.jsx)("div", {
                                className: Kn,
                                children: (0,
                                Z.O4)("ok_game_okxracer_points_with_plus", {
                                    points: (0,
                                    qe.uf)(e.contributedPoints)
                                })
                            })]
                        }, "".concat(e.extInviteeName, "-").concat(t))
                    })]
                })
            }
            ;
            const Qn = "ReferralsPage_container__V48m1"
              , qn = "ReferralsPage_title__nvv+x"
              , Jn = "ReferralsPage_titleMark__FCOdJ"
              , $n = "ReferralsPage_inviteDetail__L1MhM"
              , es = "ReferralsPage_detailItem__ujOp+"
              , ts = "ReferralsPage_dot__zKW7L"
              , rs = "ReferralsPage_detailTitle__OE657"
              , as = "ReferralsPage_detailInfo__YC+Y9"
              , ns = "ReferralsPage_inviteList__Jksx8";
            var ss, is, cs, os, ls, us, ds, _s, ps = ()=>{
                var e = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_refer_your_friends"),
                    detailInfo: (0,
                    Z.O4)("ok_game_okxracer_refer_rewards")
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_get_bonus"),
                    detailInfo: (0,
                    Z.O4)("ok_game_okxracer_refer_hint")
                }];
                return (0,
                a.useEffect)((()=>{
                    T.act({
                        action: "OkxRacerFriendsPage_Page_FullPage_View",
                        anchor: "OkxRacerFriendsPage_Page_FullPage_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), []),
                (0,
                b.jsxs)("div", {
                    className: Qn,
                    children: [(0,
                    b.jsxs)("div", {
                        className: qn,
                        children: [(0,
                        Z.O4)("ok_game_okxracer_friends_hint"), " ", (0,
                        b.jsx)("span", {
                            className: Jn,
                            children: (0,
                            Z.O4)("ok_game_okxracer_friends_hint2")
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: $n,
                        children: e.map((e=>(0,
                        b.jsxs)("div", {
                            className: es,
                            children: [(0,
                            b.jsx)("div", {
                                className: ts
                            }), (0,
                            b.jsx)("div", {
                                className: rs,
                                children: e.title
                            }), (0,
                            b.jsx)("div", {
                                className: as,
                                children: e.detailInfo
                            })]
                        }, e.title)))
                    }), (0,
                    b.jsx)("div", {
                        className: ns,
                        children: (0,
                        b.jsx)(zn, {})
                    }), (0,
                    b.jsx)(sn, {})]
                })
            }
            , ms = ["title", "titleId"];
            function hs() {
                return hs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                hs.apply(this, arguments)
            }
            function fs(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function xs(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = fs(e, ms);
                return a.createElement("svg", hs({
                    width: 89,
                    height: 88,
                    viewBox: "0 0 89 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, ss || (ss = a.createElement("ellipse", {
                    cx: 28.0697,
                    cy: 28.0697,
                    rx: 28.0697,
                    ry: 28.0697,
                    transform: "matrix(-1 0 0 1 72.3203 15.9304)",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), is || (is = a.createElement("path", {
                    d: "M85.6133 58.5275C84.2804 62.3228 82.4399 65.8791 80.1733 69.1152",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), cs || (cs = a.createElement("path", {
                    d: "M0.421877 44.0001C0.421877 57.1575 6.21962 68.9607 15.3997 76.9943C23.1083 83.7402 33.2017 87.8282 44.25 87.8282C55.2983 87.8282 65.3917 83.7402 73.1003 76.9943M88.0781 44.0001C88.0781 25.0708 76.0778 8.94427 59.2698 2.81327M44.25 0.171997C30.9555 0.171997 19.0436 6.09123 11.0058 15.438C7.54321 19.4645 4.79959 24.1271 2.97417 29.2266",
                    stroke: "white",
                    strokeWidth: .34375,
                    strokeLinecap: "round"
                })), os || (os = a.createElement("g", {
                    filter: "url(#filter0_dd_888_7961)"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.9676 34.4787C58.3306 34.8479 58.3256 35.4415 57.9564 35.8045L40.4252 53.0403C40.2499 53.2127 40.0139 53.3093 39.768 53.3093C39.5164 53.3093 39.3332 53.203 39.3331 53.203C39.2842 53.1777 39.2474 53.1532 39.2306 53.1418C39.1941 53.117 39.1641 53.0932 39.1485 53.0805C39.1132 53.0522 39.0756 53.0194 39.0417 52.9893C38.9708 52.9264 38.8766 52.8396 38.7657 52.7358C38.5423 52.5268 38.231 52.23 37.8615 51.8746C37.1213 51.1629 36.1364 50.2061 35.1282 49.223C33.204 47.347 31.1893 45.3702 30.6155 44.8072L30.5427 44.7357C30.1731 44.3731 30.1674 43.7795 30.53 43.4099C30.8926 43.0403 31.4862 43.0347 31.8558 43.3973L31.9289 43.4691C32.5031 44.0324 34.5155 46.007 36.4371 47.8805C37.4447 48.8629 38.4258 49.816 39.161 50.523C39.3798 50.7334 39.5759 50.9211 39.7439 51.0807L56.6419 34.4675C57.0111 34.1045 57.6046 34.1095 57.9676 34.4787Z",
                    fill: "#BCFF23"
                }))), ls || (ls = a.createElement("circle", {
                    cx: 30.4617,
                    cy: 19.8699,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), us || (us = a.createElement("circle", {
                    cx: 72.3192,
                    cy: 44.0001,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), ds || (ds = a.createElement("circle", {
                    cx: 28.9852,
                    cy: 67.6376,
                    r: 1.47735,
                    fill: "white",
                    stroke: "white",
                    strokeWidth: .438378,
                    strokeLinecap: "round"
                })), _s || (_s = a.createElement("defs", null, a.createElement("filter", {
                    id: "filter0_dd_888_7961",
                    x: 22.7336,
                    y: 26.6704,
                    width: 43.0309,
                    height: 34.1671,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB"
                }, a.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", null), a.createElement("feGaussianBlur", {
                    stdDeviation: 2.75
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_888_7961"
                }), a.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                }), a.createElement("feOffset", null), a.createElement("feGaussianBlur", {
                    stdDeviation: 3.76406
                }), a.createElement("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                }), a.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0.027451 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect1_dropShadow_888_7961",
                    result: "effect2_dropShadow_888_7961"
                }), a.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect2_dropShadow_888_7961",
                    result: "shape"
                })))))
            }
            var vs = a.forwardRef(xs);
            r.p;
            const gs = "index_container__DxcAz"
              , ks = "index_logo__h1T0A"
              , js = "index_tlt__dqJHn"
              , bs = "index_subtlt__m3p5l";
            var ws = ()=>(0,
            b.jsxs)("div", {
                className: gs,
                children: [(0,
                b.jsx)(vs, {
                    className: ks
                }), (0,
                b.jsx)("div", {
                    className: js,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations")
                }), (0,
                b.jsx)("div", {
                    className: bs,
                    children: (0,
                    Z.O4)("ok_game_okxracer_congratulations_msg")
                })]
            });
            const Cs = n().memo(ws);
            var ys, Ns = ["title", "titleId"];
            function Os() {
                return Os = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Os.apply(this, arguments)
            }
            function Ps(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Zs(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Ps(e, Ns);
                return a.createElement("svg", Os({
                    width: 7,
                    height: 12,
                    viewBox: "0 0 7 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, ys || (ys = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.646447 0.979821C0.841709 0.784559 1.15829 0.784559 1.35355 0.979821L6.02022 5.64649C6.21548 5.84175 6.21548 6.15833 6.02022 6.35359L1.35355 11.0203C1.15829 11.2155 0.841707 11.2155 0.646445 11.0203C0.451183 10.825 0.451183 10.5084 0.646445 10.3132L4.95956 6.00004L0.646446 1.68693C0.451184 1.49167 0.451184 1.17508 0.646447 0.979821Z",
                    fill: "white"
                })))
            }
            var Es = a.forwardRef(Zs);
            r.p;
            var Ss, Ts = ["title", "titleId"];
            function Rs() {
                return Rs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Rs.apply(this, arguments)
            }
            function Is(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Ls(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Is(e, Ts);
                return a.createElement("svg", Rs({
                    width: 6,
                    height: 6,
                    viewBox: "0 0 6 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, Ss || (Ss = a.createElement("circle", {
                    cx: 3,
                    cy: 3,
                    r: 3,
                    fill: "#BCFF2F"
                })))
            }
            var Bs = a.forwardRef(Ls);
            r.p;
            var As, Ms = ["title", "titleId"];
            function Fs() {
                return Fs = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                Fs.apply(this, arguments)
            }
            function Us(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function Ds(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = Us(e, Ms);
                return a.createElement("svg", Fs({
                    width: 12,
                    height: 10,
                    viewBox: "0 0 12 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, As || (As = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.1872 0.923345C11.2535 0.97305 11.2669 1.06707 11.2172 1.13334L4.86171 9.60738C4.80728 9.67997 4.70137 9.68798 4.63663 9.62442L0.880472 5.93656C0.821359 5.87852 0.820487 5.78355 0.878526 5.72443L1.78929 4.7968C1.84733 4.73769 1.9423 4.73682 2.00142 4.79486L4.57559 7.32222L9.93724 0.173345C9.98695 0.107071 10.081 0.0936392 10.1472 0.143345L11.1872 0.923345Z",
                    fill: "white"
                })))
            }
            var Vs = a.forwardRef(Ds);
            r.p;
            var Gs = r(41072)
              , Ws = function(e) {
                return e.SIGNUP = "signup",
                e.INSTALL = "install",
                e.CONNECT = "connect",
                e.KYC = "kyc",
                e
            }({})
              , Hs = e=>{
                var t, r;
                return Boolean(Number(null === (t = window) || void 0 === t || null === (r = t.localStorage) || void 0 === r ? void 0 : r.getItem(e)))
            }
            ;
            function Ks(e) {
                var t = [{
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_sign_up_desc"),
                    type: Ws.SIGNUP,
                    status: Hs(Ws.SIGNUP),
                    url: e.signupLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_install"),
                    type: Ws.INSTALL,
                    status: Hs(Ws.INSTALL),
                    url: e.downloadLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_connect_tg_desc"),
                    type: Ws.CONNECT,
                    status: e.isConnectTelegram,
                    url: e.bindTgLink
                }, {
                    title: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc"),
                    subTitle: (0,
                    Z.O4)("ok_game_okxracer_surprises_kyc_desc"),
                    type: Ws.KYC,
                    status: e.isKyc,
                    url: e.verifyKycLink
                }];
                return e.isConnectTelegram ? [t[3]] : t
            }
            var Xs = e=>{
                var t = (0,
                a.useState)(Ks(e))
                  , r = (0,
                u.Z)(t, 2)
                  , n = r[0]
                  , s = r[1];
                (0,
                a.useEffect)((()=>{
                    s(Ks(e))
                }
                ), [e]);
                var i = (0,
                a.useCallback)((t=>{
                    var r = n.find((e=>e.type === t));
                    if (r) {
                        switch ((0,
                        Gs.k)(r.url),
                        t) {
                        case Ws.SIGNUP:
                        case Ws.INSTALL:
                            a = t,
                            window.localStorage && window.localStorage.setItem(a, "1"),
                            s(Ks(e))
                        }
                        var a;
                        switch (t) {
                        case Ws.SIGNUP:
                            T.act({
                                action: "OKXRacerSurprisesPage_Page_Signup_View",
                                anchor: "OKXRacerSurprisesPage_Page_Signup_View",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case Ws.INSTALL:
                            T.act({
                                action: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                anchor: "OKXRacerSurprisesPage_Page_InstallOKXApp_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case Ws.CONNECT:
                            T.act({
                                action: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                anchor: "OKXRacerSurprisesPage_Page_ConnectToTelegram_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            });
                            break;
                        case Ws.KYC:
                            T.act({
                                action: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                anchor: "OKXRacerSurprisesPage_Page_KycVerify_Click",
                                params: {},
                                actionType: "",
                                elementType: "",
                                ampProject: "okx"
                            })
                        }
                    }
                }
                ), [n, e]);
                return {
                    list: n,
                    handleClick: i
                }
            }
            ;
            const Ys = "index_container__ZAgXf"
              , zs = "index_container_avatar__HvLrA"
              , Qs = "index_container_task__OmqjX"
              , qs = "index_task_tlt__pIkV2"
              , Js = "index_tlt_sub__2aRiA"
              , $s = "index_tlt_arrow__kdbln"
              , ei = "index_task_subtlt__mzIaE";
            var ti = e=>{
                var t = e.status
                  , r = void 0 !== t && t;
                return (0,
                b.jsx)("div", {
                    className: zs,
                    children: r ? (0,
                    b.jsx)(Vs, {}) : (0,
                    b.jsx)(Bs, {})
                })
            }
              , ri = e=>{
                var t = e.title
                  , r = e.subTitle
                  , a = e.type
                  , n = e.onClick
                  , s = e.status;
                return (0,
                b.jsxs)("div", {
                    className: Qs,
                    onClick: ()=>{
                        n(a)
                    }
                    ,
                    children: [(0,
                    b.jsxs)("div", {
                        className: qs,
                        children: [(0,
                        b.jsx)(ti, {
                            status: s
                        }), " ", (0,
                        b.jsx)("div", {
                            className: Js,
                            children: t
                        }), (0,
                        b.jsx)(Es, {
                            className: $s
                        })]
                    }), (0,
                    b.jsx)("div", {
                        className: ei,
                        children: r
                    })]
                })
            }
            ;
            const ai = e=>{
                var t = Xs(e)
                  , r = t.list
                  , a = t.handleClick;
                return (0,
                b.jsx)("div", {
                    className: Ys,
                    children: r.map((e=>(0,
                    b.jsx)(ri, (0,
                    k.Z)((0,
                    k.Z)({}, e), {}, {
                        onClick: a
                    }), e.type)))
                })
            }
            ;
            var ni, si, ii, ci = ["title", "titleId"];
            function oi() {
                return oi = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var a in r)
                            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }
                ,
                oi.apply(this, arguments)
            }
            function li(e, t) {
                if (null == e)
                    return {};
                var r, a, n = function(e, t) {
                    if (null == e)
                        return {};
                    var r, a, n = {}, s = Object.keys(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < s.length; a++)
                        r = s[a],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            function ui(e, t) {
                var r = e.title
                  , n = e.titleId
                  , s = li(e, ci);
                return a.createElement("svg", oi({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": n
                }, s), r ? a.createElement("title", {
                    id: n
                }, r) : null, ni || (ni = a.createElement("path", {
                    d: "M8.00619 5.83337C8.28233 5.83337 8.50619 5.60952 8.50619 5.33337C8.50619 5.05723 8.28233 4.83337 8.00619 4.83337H7.99952C7.72338 4.83337 7.49952 5.05723 7.49952 5.33337C7.49952 5.60952 7.72338 5.83337 7.99952 5.83337H8.00619Z",
                    fill: "#E6E6E6"
                })), si || (si = a.createElement("path", {
                    d: "M7.50619 10.6667C7.50619 10.9429 7.73004 11.1667 8.00619 11.1667C8.28233 11.1667 8.50619 10.9429 8.50619 10.6667V7.33337C8.50619 7.05723 8.28233 6.83337 8.00619 6.83337L8.00293 6.83338L7.99967 6.83337H6.99967C6.72353 6.83337 6.49967 7.05723 6.49967 7.33337C6.49967 7.60952 6.72353 7.83337 6.99967 7.83337H7.50619V10.6667Z",
                    fill: "#E6E6E6"
                })), ii || (ii = a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004ZM7.99967 2.33337C4.87006 2.33337 2.33301 4.87043 2.33301 8.00004C2.33301 11.1297 4.87006 13.6667 7.99967 13.6667C11.1293 13.6667 13.6663 11.1297 13.6663 8.00004C13.6663 4.87043 11.1293 2.33337 7.99967 2.33337Z",
                    fill: "#E6E6E6"
                })))
            }
            var di = a.forwardRef(ui);
            r.p;
            const _i = "index_loader__kDy+9"
              , pi = "index_container__X8xX8"
              , mi = "index_container_tlt__+XAOL"
              , hi = "index_container_tlt_highlight__uMjOB"
              , fi = "index_container_subtlt__LyYby"
              , xi = "index_container_info__c9KQP"
              , vi = "index_info_icon__i5uhI"
              , gi = "index_container_btn__rWex7"
              , ki = "index_buttonText__1fWA+"
              , ji = "index_tncContainer__McO06"
              , bi = "index_termsAndConditions__Gifk+";
            var wi = ()=>(0,
            b.jsx)(Cs, {})
              , Ci = e=>(0,
            b.jsxs)("div", {
                className: pi,
                children: [(0,
                b.jsxs)("div", {
                    className: mi,
                    children: [(0,
                    Z.O4)("ok_game_okxracer_surprises_title2"), "\xa0", (0,
                    b.jsx)("div", {
                        className: hi,
                        children: (0,
                        Z.O4)("ok_game_okxracer_surprises")
                    })]
                }), (0,
                b.jsx)("div", {
                    className: fi,
                    children: (0,
                    Z.O4)("ok_game_okxracer_surprises_sub_text")
                }), (0,
                b.jsx)(ai, (0,
                k.Z)({}, e)), (0,
                b.jsxs)("div", {
                    className: xi,
                    children: [(0,
                    b.jsx)(di, {
                        className: vi,
                        height: 16
                    }), (0,
                    Z.O4)("ok_game_okxracer_surprises_verify_desc")]
                }), (0,
                b.jsx)(kt.default, {
                    category: kt.default.CATEGORY.fill,
                    type: kt.default.TYPE.tertiary,
                    size: kt.default.SIZE.lg,
                    onClick: e.onClick,
                    className: gi,
                    children: (0,
                    b.jsx)("div", {
                        className: ki,
                        children: (0,
                        Z.O4)("ok_game_okxracer_surprises_verify")
                    })
                }), (0,
                b.jsx)("div", {
                    className: ji,
                    children: (0,
                    b.jsx)("button", {
                        className: bi,
                        onClick: ()=>{
                            var e, t;
                            null === (e = window) || void 0 === e || null === (t = e.Telegram) || void 0 === t || t.WebApp.openLink(gt)
                        }
                        ,
                        type: "button",
                        children: (0,
                        Z.O4)("ok_game_okxracer_tnc")
                    })
                })]
            })
              , yi = ()=>{
                var e = te()
                  , t = e.uid
                  , r = e.gameId
                  , n = (0,
                a.useState)(!0)
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)({
                    isConnectTelegram: !1,
                    isKyc: !1,
                    signupLink: "/join",
                    downloadLink: "/download?redirectAppStore=true",
                    bindTgLink: "https://www.ouxyi.link/ul/3h87sZ",
                    verifyKycLink: "https://www.ouxyi.link/ul/3W2uzP"
                })
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var a, n, s = arguments;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a = s.length > 0 && void 0 !== s[0] && s[0],
                                e.prev = 1,
                                e.next = 4,
                                Ee({
                                    extUserId: t,
                                    gameId: r
                                });
                            case 4:
                                n = e.sent,
                                c(!1),
                                n && m(n),
                                !a || null !== n && void 0 !== n && n.isKyc && n.isConnectTelegram || ae(!1, (0,
                                Z.O4)("ok_game_okxracer_verify_failed_msg")),
                                e.next = 13;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(1),
                                ae(!1, (0,
                                Z.O4)("ok_game_okxracer_error_high_traffic"));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 10]])
                }
                ))), [r, t]);
                return (0,
                a.useEffect)((()=>{
                    function e() {
                        document.hidden || h()
                    }
                    return h(),
                    document.addEventListener("visibilitychange", e),
                    ()=>{
                        document.removeEventListener("visibilitychange", e)
                    }
                }
                ), [h]),
                (0,
                a.useEffect)((()=>{
                    T.act({
                        action: "OKXRacerSurprisesPage_Page_FullPage_View",
                        anchor: "OKXRacerSurprisesPage_Page_FullPage_View",
                        params: {},
                        actionType: "",
                        elementType: "",
                        ampProject: "okx"
                    })
                }
                ), []),
                i ? (0,
                b.jsx)("div", {
                    className: _i,
                    children: (0,
                    b.jsx)(lr.Z, {})
                }) : p.isConnectTelegram && p.isKyc ? (0,
                b.jsx)(wi, {}) : (0,
                b.jsx)(Ci, (0,
                k.Z)((0,
                k.Z)({}, p), {}, {
                    onClick: ()=>{
                        h(!0),
                        T.act({
                            action: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                            anchor: "OKXRacerSurprisesPage_Page_VerifyNow_Click",
                            params: {},
                            actionType: "",
                            elementType: "",
                            ampProject: "okx"
                        })
                    }
                }))
            }
              , Ni = (0,
            a.createContext)({
                boosts: [],
                tasks: [],
                upgradeBoost: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                doTask: function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", !1);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            })
              , Oi = ()=>(0,
            a.useContext)(Ni)
              , Pi = e=>{
                var t = e.children
                  , r = (0,
                a.useState)([])
                  , n = (0,
                u.Z)(r, 2)
                  , s = n[0]
                  , i = n[1]
                  , c = (0,
                a.useState)([])
                  , d = (0,
                u.Z)(c, 2)
                  , _ = d[0]
                  , p = d[1]
                  , m = te().uid
                  , h = Te().updateGameInfoFromServer
                  , f = (0,
                a.useCallback)((0,
                l.Z)((0,
                o.Z)().mark((function e() {
                    var t;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.allSettled([Ne({
                                    extUserId: m
                                }), Pe({
                                    extUserId: m
                                })]);
                            case 2:
                                "fulfilled" === (t = e.sent)[0].status && i(t[0].value.data || []),
                                "fulfilled" === t[1].status && p(t[1].value.data || []);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), [m])
                  , x = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Oe({
                                        extUserId: m,
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Ne({
                                        extUserId: m
                                    }), h()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && i(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ne(e.t0);
                                case 13:
                                    return e.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 10]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , v = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Ze({
                                        extUserId: m,
                                        id: t
                                    });
                                case 3:
                                    return e.next = 5,
                                    Promise.allSettled([Pe({
                                        extUserId: m
                                    }), h()]);
                                case 5:
                                    return "fulfilled" === (r = e.sent)[0].status && p(r[0].value.data || []),
                                    e.abrupt("return", !0);
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    ne(e.t0);
                                case 13:
                                    return e.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 10]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                a.useEffect)((()=>{
                    f()
                }
                ), [f]),
                (0,
                b.jsx)(Ni.Provider, {
                    value: {
                        boosts: s,
                        tasks: _,
                        upgradeBoost: x,
                        doTask: v
                    },
                    children: t
                })
            }
            ;
            const Zi = "BoostArea_container__qLJSQ"
              , Ei = "BoostArea_boost-item-container__YOXum"
              , Si = "BoostArea_boost-item__DNNqs"
              , Ti = "BoostArea_boost-item-padding__oEq50"
              , Ri = "BoostArea_boost-icon__QNzuc"
              , Ii = "BoostArea_boost-title__AkQjB"
              , Li = "BoostArea_boost-desc__ao1CF"
              , Bi = "BoostArea_boost-data__ZHjQc"
              , Ai = "BoostArea_boost-data-split-point__vPwdk"
              , Mi = "BoostArea_boost-data-stage__vN56W"
              , Fi = "BoostArea_sheet__yqb00"
              , Ui = "BoostArea_sheet-icon__BeFAi"
              , Di = "BoostArea_sheet-title__iwAxt"
              , Vi = "BoostArea_sheet-desc__shobA"
              , Gi = "BoostArea_sheet-data__sT-mb"
              , Wi = "BoostArea_sheet-point__DEkj1"
              , Hi = "BoostArea_sheet-lvl__ybAg3"
              , Ki = "BoostArea_btn__sDOPz"
              , Xi = "BoostArea_btn-txt__3KRt0"
              , Yi = "BoostArea_boostItemPlaceholder__+rOxt";
            var zi = ()=>(0,
            b.jsxs)("div", {
                className: P()(Si, Yi),
                children: [(0,
                b.jsx)(Ja, {
                    className: Ri
                }), (0,
                b.jsx)(Ja, {
                    className: Ii
                }), (0,
                b.jsx)(Ja, {
                    className: Li
                }), (0,
                b.jsx)(Ja, {
                    className: Bi
                })]
            })
              , Qi = ()=>{
                var e = Oi()
                  , t = e.boosts
                  , r = e.upgradeBoost
                  , n = (0,
                a.useState)()
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = Te().points
                  , f = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        var a, n, s;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.pointCost,
                                    n = t.curStage,
                                    s = t.totalStage,
                                    !(Number(s) <= Number(n))) {
                                        e.next = 5;
                                        break
                                    }
                                    ae(!1, (0,
                                    Z.O4)("ok_game_okxracer_max_lvl_msg")),
                                    e.next = 13;
                                    break;
                                case 5:
                                    if (!(h - Number(a) < 0)) {
                                        e.next = 9;
                                        break
                                    }
                                    ae(!1, (0,
                                    Z.O4)("ok_game_okxracer_insufficient_pts_msg")),
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.next = 11,
                                    r(t.id);
                                case 11:
                                    e.sent && ae(!0);
                                case 13:
                                    m(!1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , x = e=>(null === e || void 0 === e ? void 0 : e.type) === vt.DailyBoost
                  , v = e=>{
                    var t = e.pointCost
                      , r = e.curStage
                      , a = e.totalStage;
                    return !x(e) && r >= a ? "" : " \ud83c\udfc1 ".concat(0 == t ? (0,
                    Z.O4)("ok_game_okxracer_free") : "".concat((0,
                    qe.uf)(-t, {
                        zeroSign: "-"
                    }), " pts"))
                }
                  , g = e=>{
                    var r = e.id
                      , a = e.context
                      , n = e.curStage
                      , s = e.totalStage
                      , i = a.icon
                      , o = a.name
                      , l = a.desc;
                    return (0,
                    b.jsxs)("div", {
                        className: Si,
                        onClick: ()=>{
                            (e=>{
                                if (t.length > 0) {
                                    var r = t.find((t=>t.id === e));
                                    m(!0),
                                    c(r)
                                }
                            }
                            )(r)
                        }
                        ,
                        children: [(0,
                        b.jsx)("div", {
                            className: Ri,
                            children: i
                        }), (0,
                        b.jsx)("div", {
                            className: Ii,
                            children: o
                        }), (0,
                        b.jsx)("div", {
                            className: Li,
                            children: l
                        }), (0,
                        b.jsxs)("div", {
                            className: Bi,
                            children: [(0,
                            b.jsx)("span", {
                                children: v(e)
                            }), (x(e) || n < s) && (0,
                            b.jsx)("span", {
                                className: Ai
                            }), (0,
                            b.jsx)("span", {
                                className: Mi,
                                children: x(e) ? "".concat(s - n, "/").concat(s) : "Lvl ".concat(n)
                            })]
                        })]
                    }, r)
                }
                ;
                return (0,
                b.jsxs)("div", {
                    className: Zi,
                    children: [(0,
                    b.jsxs)("div", {
                        className: Ei,
                        children: [(0,
                        b.jsx)("div", {
                            className: Ti
                        }), t.length > 0 ? (0,
                        b.jsx)(b.Fragment, {
                            children: t.map((e=>g(e)))
                        }) : (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(zi, {}), (0,
                            b.jsx)(zi, {}), (0,
                            b.jsx)(zi, {})]
                        }), (0,
                        b.jsx)("div", {
                            className: Ti
                        })]
                    }), (0,
                    b.jsx)(Ca, {
                        visible: p,
                        onClose: ()=>{
                            m(!1)
                        }
                        ,
                        children: (()=>{
                            if (i) {
                                var e = i
                                  , t = e.context
                                  , r = e.curStage
                                  , a = e.totalStage
                                  , n = t.icon
                                  , s = t.name
                                  , c = t.desc;
                                return (0,
                                b.jsxs)("div", {
                                    className: Fi,
                                    children: [(0,
                                    b.jsx)("div", {
                                        className: Ui,
                                        children: n
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Di,
                                        children: s
                                    }), (0,
                                    b.jsx)("div", {
                                        className: Vi,
                                        children: c
                                    }), (0,
                                    b.jsxs)("div", {
                                        className: Gi,
                                        children: [(0,
                                        b.jsx)("span", {
                                            className: Wi,
                                            children: v(i)
                                        }), (x(i) || r < a) && (0,
                                        b.jsx)("span", {
                                            className: Ai
                                        }), (0,
                                        b.jsx)("span", {
                                            className: Hi,
                                            children: x(i) ? "".concat(a - r, "/").concat(a) : "Lvl ".concat(r)
                                        })]
                                    }), (0,
                                    b.jsx)(kt.default, {
                                        category: kt.default.CATEGORY.fill,
                                        type: kt.default.TYPE.primary,
                                        size: kt.default.SIZE.lg,
                                        className: Ki,
                                        onClick: ()=>f(i),
                                        children: (0,
                                        b.jsx)("div", {
                                            className: Xi,
                                            children: (0,
                                            Z.O4)("ok_game_okxracer_boost_now")
                                        })
                                    })]
                                })
                            }
                            return (0,
                            b.jsx)(b.Fragment, {})
                        }
                        )()
                    })]
                })
            }
              , qi = r(58338);
            const Ji = "TaskArea_container__Iz7a-"
              , $i = "TaskArea_task-item__w79wY"
              , ec = "TaskArea_item-left__1r6mY"
              , tc = "TaskArea_item-right__lk7YG"
              , rc = "TaskArea_icon__RfKa0"
              , ac = "TaskArea_title__OyXme"
              , nc = "TaskArea_state__d9FdX"
              , sc = "TaskArea_sheet-container__lottt"
              , ic = "TaskArea_sheet-name__CibLI"
              , cc = "TaskArea_sheet-desc__aaGRQ"
              , oc = "TaskArea_btn__HU6oE"
              , lc = "TaskArea_btn-txt__l+NXi"
              , uc = "TaskArea_done__fmgjd"
              , dc = "TaskArea_taskItemPlaceholder__JXSdR"
              , _c = "TaskArea_task__cxfzp";
            var pc = ()=>{
                var e = Oi()
                  , t = e.tasks
                  , r = e.doTask
                  , n = (0,
                a.useState)()
                  , s = (0,
                u.Z)(n, 2)
                  , i = s[0]
                  , c = s[1]
                  , d = (0,
                a.useState)(!1)
                  , _ = (0,
                u.Z)(d, 2)
                  , p = _[0]
                  , m = _[1]
                  , h = (0,
                Ln.Z)((e=>{
                    if (t.length > 0) {
                        var r = t.find((t=>(null === t || void 0 === t ? void 0 : t.id) === e));
                        if ((null === r || void 0 === r ? void 0 : r.state) == xt.finished)
                            return;
                        c(r),
                        m(!0)
                    }
                }
                ), {
                    wait: 500
                }).run
                  , f = function() {
                    var e = (0,
                    l.Z)((0,
                    o.Z)().mark((function e(t) {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    r(t.id);
                                case 2:
                                    e.sent && ae(!0, (0,
                                    Z.O4)("ok_game_okxracer_task_completion_msg")),
                                    m(!1);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
                  , x = ()=>(0,
                b.jsx)("div", {
                    children: Array.from({
                        length: 2
                    }).map(((e,t)=>(0,
                    b.jsx)("div", {
                        className: P()(dc),
                        children: (0,
                        b.jsx)(Ja, {
                            className: _c
                        })
                    }, t)))
                });
                return (0,
                b.jsxs)("div", {
                    className: Ji,
                    children: [t.length > 0 ? t.map((e=>e && (e=>{
                        var t = e.id
                          , r = e.points
                          , a = e.state
                          , n = e.context;
                        return (0,
                        b.jsxs)("div", {
                            className: $i,
                            onClick: ()=>{
                                h(t)
                            }
                            ,
                            children: [(0,
                            b.jsxs)("div", {
                                className: ec,
                                children: [(0,
                                b.jsx)("div", {
                                    className: ac,
                                    children: n.name
                                }), (0,
                                b.jsx)("div", {
                                    className: nc,
                                    children: " ".concat(a === xt.finished ? "\u2705" : "\ud83c\udfc1", " ").concat((0,
                                    qe.uf)(r, {
                                        signDisplay: !0
                                    }), " pts")
                                })]
                            }), (0,
                            b.jsx)("div", {
                                className: tc,
                                children: a === xt.finished ? (0,
                                b.jsx)("div", {
                                    className: uc,
                                    children: (0,
                                    Z.O4)("ok_game_okxracer_done")
                                }) : (0,
                                b.jsx)(E.Z, {
                                    className: P()("okx-growth-chevrons-right", rc)
                                })
                            })]
                        }, t)
                    }
                    )(e))) : (0,
                    b.jsx)(x, {}), i && (0,
                    b.jsx)(Ca, {
                        noContentPadding: !0,
                        visible: p,
                        onClose: ()=>{
                            m(!1)
                        }
                        ,
                        children: (()=>{
                            var e = i.context
                              , t = e.desc
                              , r = e.btnText;
                            return (0,
                            b.jsxs)("div", {
                                className: sc,
                                children: [(0,
                                b.jsx)("div", {
                                    className: ic,
                                    children: e.name
                                }), (0,
                                b.jsx)("div", {
                                    className: cc,
                                    dangerouslySetInnerHTML: {
                                        __html: (0,
                                        qi.dU)(t)
                                    }
                                }), (0,
                                b.jsx)(kt.default, {
                                    category: kt.default.CATEGORY.fill,
                                    type: kt.default.TYPE.primary,
                                    size: kt.default.SIZE.lg,
                                    className: oc,
                                    onClick: ()=>f(i),
                                    children: (0,
                                    b.jsx)("div", {
                                        className: lc,
                                        children: r
                                    })
                                })]
                            })
                        }
                        )()
                    })]
                })
            }
            ;
            const mc = "TaskPage_container__5KfIM"
              , hc = "TaskPage_block__kt8oo"
              , fc = "TaskPage_block-boost__QYQXL"
              , xc = "TaskPage_points-title__4hW9Y"
              , vc = "TaskPage_points-content__+yK3g"
              , gc = "TaskPage_tasks-title__qw7Rz"
              , kc = "TaskPage_boosts-title__PhFSP"
              , jc = "TaskPage_boost-area__Qpbhq";
            var bc = ()=>{
                var e = Te().points;
                return (0,
                b.jsxs)("div", {
                    className: mc,
                    children: [(0,
                    b.jsx)("div", {
                        className: hc,
                        children: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsxs)("div", {
                                className: xc,
                                children: ["\ud83c\udfc6 ", (0,
                                Z.O4)("ok_game_okxracer_available_pts")]
                            }), (0,
                            b.jsx)("div", {
                                className: vc,
                                children: Je.yx.thousandFormat(e || 0)
                            })]
                        })
                    }), (0,
                    b.jsxs)("div", {
                        className: fc,
                        children: [(0,
                        b.jsx)("div", {
                            className: kc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_upgrade")
                        }), (0,
                        b.jsx)("div", {
                            className: jc,
                            children: (0,
                            b.jsx)(Qi, {})
                        })]
                    }), (0,
                    b.jsxs)("div", {
                        className: hc,
                        children: [(0,
                        b.jsx)("div", {
                            className: gc,
                            children: (0,
                            Z.O4)("ok_game_okxracer_tasks")
                        }), (0,
                        b.jsx)(pc, {})]
                    })]
                })
            }
              , wc = ()=>(0,
            b.jsx)(Pi, {
                children: (0,
                b.jsx)(bc, {})
            })
              , Cc = ()=>{
                var e = (0,
                a.useState)()
                  , t = (0,
                u.Z)(e, 2)
                  , r = t[0]
                  , n = t[1]
                  , i = te().uid
                  , c = (0,
                a.useMemo)(f, []);
                (0,
                a.useMemo)((()=>{
                    p.Z.setConfig({
                        popupClassName: "theme-dark"
                    }),
                    m.Z.config({
                        bottom: 74,
                        duration: 2
                    })
                }
                ), []);
                var h = Q().hasWebviewProxy;
                (0,
                a.useEffect)((()=>{
                    (function() {
                        var e = (0,
                        l.Z)((0,
                        o.Z)().mark((function e() {
                            var t;
                            return (0,
                            o.Z)().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        d.d)(c);
                                    case 2:
                                        t = e.sent,
                                        n(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }
                    )()()
                }
                ), [c]);
                var k = true;
                return (0,
                b.jsx)("article", {
                    className: x,
                    children: (0,
                    b.jsx)(_.Z, {
                        localeData: r,
                        fetchConfig: c,
                        children: k ? (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            b.jsx)(Ae, {
                                children: (0,
                                b.jsx)(Re, {
                                    children: (0,
                                    b.jsx)(Ue, {
                                        children: (0,
                                        b.jsx)("main", {
                                            className: g,
                                            children: (0,
                                            b.jsxs)(s.Switch, {
                                                children: [(0,
                                                b.jsx)(s.Route, {
                                                    path: B,
                                                    component: w(Va),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: F,
                                                    component: y(Zn),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: M,
                                                    component: w(wc),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: A,
                                                    component: y(ps),
                                                    exact: !0
                                                }), (0,
                                                b.jsx)(s.Route, {
                                                    path: U,
                                                    component: y(yi),
                                                    exact: !0
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            b.jsx)("div", {
                                className: v,
                                children: (0,
                                b.jsx)(Y, {})
                            })]
                        }) : (0,
                        b.jsx)(In, {})
                    })
                })
            }
              , yc = document.getElementById("root");
            if (yc) {
                var Nc = (0,
                b.jsx)(s.BrowserRouter, {
                    basename: c.Z.langPath,
                    children: (0,
                    b.jsx)(re, {
                        children: (0,
                        b.jsx)(Cc, {})
                    })
                });
                (0,
                i.createRoot)(yc).render(Nc)
            }
        }
        ,
        87363: e=>{
            e.exports = React
        }
        ,
        61533: e=>{
            e.exports = ReactDOM
        }
    }
      , t = {};
    function r(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var s = t[a] = {
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, r),
        s.exports
    }
    r.m = e,
    (()=>{
        var e = [];
        r.O = (t,a,n,s)=>{
            if (!a) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [a,n,s] = e[u], c = !0, o = 0; o < a.length; o++)
                        (!1 & s || i >= s) && Object.keys(r.O).every((e=>r.O[e](a[o]))) ? a.splice(o--, 1) : (c = !1,
                        s < i && (i = s));
                    if (c) {
                        e.splice(u--, 1);
                        var l = n();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                e[u] = e[u - 1];
            e[u] = [a, n, s]
        }
    }
    )(),
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var a in t)
            r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    r.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
                for (var n = a.length - 1; n > -1 && !e; )
                    e = a[n--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        r.p = e + "../"
    }
    )(),
    (()=>{
        try {
            if (r.miniCssF) {
                var e = r.miniCssF;
                r.miniCssF = function(t) {
                    var r = e(t);
                    if ("string" !== typeof r)
                        return r;
                    var a = window._okGlobal || window.okGlobal;
                    return a && a.isRTL && /\.css$/.test(r) ? r.replace(/\.css$/, ".rtl.css") : r
                }
            }
        } catch (t) {}
    }
    )(),
    (()=>{
        var e = {
            6554: 0,
            9824: 0
        };
        r.O.j = t=>0 === e[t];
        var t = (t,a)=>{
            var n, s, [i,c,o] = a, l = 0;
            if (i.some((t=>0 !== e[t]))) {
                for (n in c)
                    r.o(c, n) && (r.m[n] = c[n]);
                if (o)
                    var u = o(r)
            }
            for (t && t(a); l < i.length; l++)
                s = i[l],
                r.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return r.O(u)
        }
          , a = self.webpackChunkgrowth = self.webpackChunkgrowth || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )();
    var a = r.O(void 0, [2951, 5825, 9824, 4128, 7569, 3599, 4084, 2889, 2606, 9214], (()=>r(96563)));
    a = r.O(a)
}
)();
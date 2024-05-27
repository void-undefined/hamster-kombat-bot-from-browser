import {
  a as A,
  _ as U
} from "https://hamsterkombat.io/_nuxt/Price.vue.BCNWdlWJ.js";
import {
  d as S,
  i as w,
  j as k,
  E as D,
  l as R,
  o as v,
  c as h,
  a as e,
  q as t,
  b,
  x as Z,
  U as B,
  t as C,
  m as H,
  A as x,
  z as O,
  r as Y,
  w as P,
  B as $,
  h as F,
  n as G,
  a4 as N,
  _ as I,
  C as V,
  ak as z,
  a1 as j,
  F as q,
  e as J,
  a3 as W,
  J as K,
  W as Q,
  I as tt
} from "https://hamsterkombat.io/_nuxt/entry.B9rEuBGC.js";
import {
  u as et
} from "https://hamsterkombat.io/_nuxt/settings.cSFbbKuc.js";
import {
  f as st
} from "https://hamsterkombat.io/_nuxt/index.es.CRTIByZE.js";
const ot = "" + globalThis.__publicAssetsURL("images/rocket.png"),
  nt = {
      class: "bs-content"
  },
  at = e("div", {
      class: "bs-content-image is-boost"
  }, [e("img", {
      src: ot
  })], -1),
  rt = ["innerHTML"],
  it = ["innerHTML"],
  ct = {
      class: "boost-profit-target"
  },
  lt = ["innerHTML"],
  ut = ["innerHTML"],
  pt = S({
      __name: "BoostProfit",
      setup(y) {
          const {
              $event: a
          } = C();
          w();
          const T = k(),
              r = D(),
              u = R();

          function p() {
              a("bs:close"), Z(u(B.GAME_MINE))
          }
          return (n, i) => {
              const d = A;
              return v(), h("div", nt, [at, e("div", {
                  class: "bs-content-title has-top-gap",
                  innerHTML: n.$t("boost.profit_title")
              }, null, 8, rt), e("div", {
                  class: "bs-content-description",
                  innerHTML: n.$t("boost.profit_description")
              }, null, 8, it), e("div", ct, [e("span", {
                  innerHTML: n.$t("boost.profit_text", {
                      h: t(T).secondsToHours(t(r).maxPassiveDtSeconds)
                  })
              }, null, 8, lt)]), e("button", {
                  class: "bottom-sheet-button button button-primary button-large",
                  onClick: p
              }, [e("span", {
                  innerHTML: n.$t("boost.profit_button")
              }, null, 8, ut), b(d, {
                  class: "is-28"
              })])])
          }
      }
  }),
  _t = {
      class: "user-stats"
  },
  mt = {
      class: "user-stats-item"
  },
  dt = ["innerHTML"],
  ft = {
      key: 0,
      class: "user-stats-item"
  },
  vt = ["innerHTML"],
  ht = {
      class: "user-stats-item"
  },
  bt = ["innerHTML"],
  Tt = {
      class: "user-stats-profit"
  },
  xt = S({
      __name: "Stats",
      setup(y) {
          const a = H(!1),
              {
                  $event: T,
                  $listen: r,
                  $stopListen: u
              } = C(),
              p = k(),
              n = w();
          n.earnPassivePerHour;

          function i() {
              T("bs:open", {
                  component: V(pt)
              })
          }
          const d = () => {
                  a.value = !0
              },
              L = () => {
                  a.value = !1
              };
          x(() => {
              r("balance-animate-passive:start", d), r("balance-animate-passive:stop", L)
          }), O(() => {
              u("balance-animate-passive:start", d), u("balance-animate-passive:stop", L)
          });
          const M = l => ({
              content: l,
              triggers: ["click"],
              delay: 0,
              distance: 4,
              theme: "hk-tooltip",
              placement: "top",
              container: ".user-stats",
              html: !0
          });
          return (l, E) => {
              const g = U,
                  s = I,
                  o = Y("tooltip");
              return v(), h("ul", _t, [e("li", null, [e("div", mt, [e("p", {
                  class: "text-orange",
                  innerHTML: l.$t("user.earn_per_tap")
              }, null, 8, dt), b(g, {
                  price: t(n).earnPerTap,
                  prefix: "+"
              }, null, 8, ["price"])]), t(n).level < t(n).getMaxUserLevel ? P((v(), h("div", ft, [e("p", {
                  class: "text-blue",
                  innerHTML: l.$t("user.coins_to_level_up")
              }, null, 8, vt), e("span", null, $(t(p).numberFormat(t(n).coinsToLevelUp)), 1)], 512)), [
                  [o, M(t(p).numberFormat(t(n).coinsToLevelUp, !1))]
              ]) : F("", !0), P(e("div", ht, [e("p", {
                  class: "text-green",
                  innerHTML: l.$t("user.profit")
              }, null, 8, bt), e("div", Tt, [b(g, {
                  price: t(n).earnPassivePerHour ?? 0,
                  prefix: t(n).earnPassivePerHour ? "+" : "",
                  class: G({
                      "pulse-balance": t(a)
                  })
              }, null, 8, ["price", "prefix", "class"]), b(s, {
                  class: "icon-info",
                  name: "info",
                  onClick: N(i, ["stop"])
              })])], 512), [
                  [o, M(t(p).numberFormat(t(n).earnPassivePerHour, !1))]
              ])])])
          }
      }
  }),
  gt = {
      class: "user-tap"
  },
  $t = ["disabled"],
  Lt = {
      class: "user-tap-button-circle"
  },
  Mt = ["src"],
  Ht = {
      class: "user-tap-animate"
  },
  Pt = ["id", "initial", "enter"],
  St = {
      class: "user-tap-row"
  },
  wt = {
      class: "user-tap-energy"
  },
  yt = ["src", "alt"],
  Ot = S({
      __name: "Earn",
      setup(y) {
          const a = w(),
              T = et(),
              r = H(null),
              u = H([]);

          function p(s) {
              5(T.settings.haptic && st().impactOccurred("medium"), a.earn(), L(s), d(s))
          }
          const n = {
                  scale: 1,
                  translateZ: 0,
                  rotateX: 0,
                  rotateY: 0
              },
              i = z({
                  ...n
              });

          function d(s) {
              if (r.value) {
                  const o = r.value.getBoundingClientRect(),
                      c = o.left + o.width / 2,
                      f = o.top + o.height / 2,
                      _ = s.clientX - c,
                      m = (f - s.clientY) * .1,
                      X = _ * .1;
                  i.translateZ = -5, i.rotateX = m, i.rotateY = X, setTimeout(() => {
                      i.rotateY = n.rotateY, i.rotateX = n.rotateX, i.scale = n.scale, i.translateZ = n.translateZ
                  }, 150)
              }
          }

          function L(s) {
              let o = 0,
                  c = 0,
                  f = 0;
              if (r.value) {
                  const _ = r.value.getBoundingClientRect();
                  o = s.clientX - _.left - 50 + E(), c = s.clientY - _.bottom - 25, f = _.width / 2 - 25
              }
              M(o, c, f)
          }
          const M = (s = 0, o = 0, c = 0) => {
              u.value.push({
                  x: s,
                  y: o,
                  center: c,
                  date: Date.now()
              }), setTimeout(() => {
                  u.value.shift()
              }, 2e3)
          };

          function l(s) {
              s.preventDefault()
          }

          function E() {
              const o = Math.random() * 20 - 10;
              return Math.round(o)
          }
          const g = () => {
              window.pageYOffset || document.documentElement.scrollTop || window.scrollTo(0, 1)
          };
          return O(() => {
              var s, o;
              (s = r.value) == null || s.removeEventListener("touchmove", l), (o = r.value) == null || o.removeEventListener("touchstart", l), document.removeEventListener("scroll", g)
          }), x(() => {
              var o, c;
              window.pageYOffset || document.documentElement.scrollTop || setTimeout(() => {
                  window.scrollTo(0, 1)
              }, 10), (o = r.value) == null || o.addEventListener("touchmove", l, {
                  passive: !1
              }), (c = r.value) == null || c.addEventListener("touchstart", l, {
                  passive: !1
              }), document.addEventListener("scroll", g)
          }), (s, o) => {
              const c = I,
                  f = K,
                  _ = Y("motion");
              return v(), h("div", gt, [e("button", {
                  class: "user-tap-button button",
                  onPointerup: N(p, ["prevent"]),
                  disabled: false,
                  ref_key: "earnButton",
                  ref: r
              }, [e("div", {
                  class: "user-tap-button-inner",
                  style: j({
                      transform: `scale(${t(i).scale}) translateZ(${t(i).translateZ}px) rotateX(${t(i).rotateX}deg) rotateY(${t(i).rotateY}deg)`
                  })
              }, [e("div", Lt, [e("img", {
                  class: "img-responsive",
                  src: t(a).getHamsterImage
              }, null, 8, Mt)])], 4)], 40, $t), e("div", Ht, [(v(!0), h(q, null, J(t(u), m => P((v(), h("div", {
                  id: m.date,
                  key: m.date,
                  initial: {
                      y: m.y,
                      x: m.x,
                      opacity: 1
                  },
                  enter: {
                      y: m.y - 140,
                      opacity: 0,
                      transition: {
                          type: "spring",
                          stiffness: "30"
                      }
                  }
              }, [Q("+" + $(t(a).earnPerTap), 1)], 8, Pt)), [
                  [_]
              ])), 128))]), e("div", St, [e("div", wt, [b(c, {
                  name: "energy"
              }), e("p", null, $(t(a).availableTaps) + " / " + $(t(a).maxTaps), 1)]), b(f, {
                  class: "user-tap-boost",
                  to: t(B).GAME_BOOST
              }, {
                  default: W(() => [e("img", {
                      src: "IMAGE_BOOST" in s ? s.IMAGE_BOOST : t(tt),
                      alt: s.$t("buttons.boost")
                  }, null, 8, yt), e("p", null, $(s.$t("buttons.boost")), 1)]),
                  _: 1
              }, 8, ["to"])])])
          }
      }
  });
export {
  xt as _, Ot as a
};
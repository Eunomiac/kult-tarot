/*!
 * Flip 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
// !(function (t, e) {
// 	"object" == typeof exports && "undefined" != typeof module
// 		? e(exports)
// 		: "function" == typeof define && define.amd
// 		? define(["exports"], e)
// 		: e(((t = t || self).window = t.window || {}));
// })(this, function (e) {
	// "use strict";

	function p(t) {
		var e = t.ownerDocument || t;
		!(w in t.style) && "msTransform" in t.style && (S = (w = "msTransform") + "Origin");
		for (; e.parentNode && (e = e.parentNode); );
		if (((y = window), (d = new _()), e)) {
			(r = (g = e).documentElement),
				(b = e.body),
				((a = g.createElementNS(
					"http://www.w3.org/2000/svg",
					"g"
				)).style.transform = "none");
			var i = e.createElement("div"),
				n = e.createElement("div");
			b.appendChild(i),
				i.appendChild(n),
				(i.style.position = "static"),
				(i.style[w] = "translate3d(0,0,1px)"),
				(m = n.offsetParent !== i),
				b.removeChild(i);
		}
		return e;
	}

	function t() {
		return y.pageYOffset || g.scrollTop || r.scrollTop || b.scrollTop || 0;
	}

	function u() {
		return y.pageXOffset || g.scrollLeft || r.scrollLeft || b.scrollLeft || 0;
	}

	function v(t) {
		return (
			t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
		);
	}

	function x(t, e) {
		if (t.parentNode && (g || p(t))) {
			var i = v(t),
				n = i
					? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
					: "http://www.w3.org/1999/xhtml",
				r = i ? (e ? "rect" : "g") : "div",
				a = 2 !== e ? 0 : 100,
				s = 3 === e ? 100 : 0,
				o =
					"position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
				l = g.createElementNS
					? g.createElementNS(n.replace(/^https/, "http"), r)
					: g.createElement(r);
			return (
				e &&
					(i
						? ((f = f || x(t)),
						  l.setAttribute("width", 0.01),
						  l.setAttribute("height", 0.01),
						  l.setAttribute("transform", "translate(" + a + "," + s + ")"),
						  f.appendChild(l))
						: (c || ((c = x(t)).style.cssText = o),
						  (l.style.cssText =
								o +
								"width:0.1px;height:0.1px;top:" +
								s +
								"px;left:" +
								a +
								"px"),
						  c.appendChild(l))),
				l
			);
		}
		throw "Need document and parent.";
	}

	function z(t) {
		var e,
			i = t.getCTM();
		return (
			i ||
				((e = t.style[w]),
				(t.style[w] = "none"),
				t.appendChild(a),
				(i = a.getCTM()),
				t.removeChild(a),
				e
					? (t.style[w] = e)
					: t.style.removeProperty(w.replace(/([A-Z])/g, "-$1").toLowerCase())),
			i || d.clone()
		);
	}

	function A(t, e) {
		var i,
			n,
			r,
			a,
			s,
			o,
			l = v(t),
			u = t === l,
			h = l ? C : k,
			p = t.parentNode;
		if (t === y) return t;
		if ((h.length || h.push(x(t, 1), x(t, 2), x(t, 3)), (i = l ? f : c), l))
			u
				? ((a = -(r = z(t)).e / r.a), (s = -r.f / r.d), (n = d))
				: ((r = t.getBBox()),
				  (a =
						(n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems
							? 1 < n.numberOfItems
								? (function _consolidate(t) {
										for (var e = new _(), i = 0; i < t.numberOfItems; i++)
											e.multiply(t.getItem(i).matrix);
										return e;
								  })(n)
								: n.getItem(0).matrix
							: d).a *
							r.x +
						n.c * r.y),
				  (s = n.b * r.x + n.d * r.y)),
				e && "g" === t.tagName.toLowerCase() && (a = s = 0),
				(u ? l : p).appendChild(i),
				i.setAttribute(
					"transform",
					"matrix(" +
						n.a +
						"," +
						n.b +
						"," +
						n.c +
						"," +
						n.d +
						"," +
						(n.e + a) +
						"," +
						(n.f + s) +
						")"
				);
		else {
			if (((a = s = 0), m))
				for (
					n = t.offsetParent, r = t;
					(r = r && r.parentNode) && r !== n && r.parentNode;

				)
					4 < (y.getComputedStyle(r)[w] + "").length &&
						((a = r.offsetLeft), (s = r.offsetTop), (r = 0));
			if (
				"absolute" !== (o = y.getComputedStyle(t)).position &&
				"fixed" !== o.position
			)
				for (n = t.offsetParent; p && p !== n; )
					(a += p.scrollLeft || 0), (s += p.scrollTop || 0), (p = p.parentNode);
			((r = i.style).top = t.offsetTop - s + "px"),
				(r.left = t.offsetLeft - a + "px"),
				(r[w] = o[w]),
				(r[S] = o[S]),
				(r.position = "fixed" === o.position ? "fixed" : "absolute"),
				t.parentNode.appendChild(i);
		}
		return i;
	}

	function B(t, e, i, n, r, a, s) {
		return (t.a = e), (t.b = i), (t.c = n), (t.d = r), (t.e = a), (t.f = s), t;
	}
	var g,
		y,
		r,
		b,
		c,
		f,
		d,
		a,
		m,
		i,
		w = "transform",
		S = w + "Origin",
		C = [],
		k = [],
		_ =
			(((i = Matrix2D.prototype).inverse = function inverse() {
				var t = this.a,
					e = this.b,
					i = this.c,
					n = this.d,
					r = this.e,
					a = this.f,
					s = t * n - e * i || 1e-10;
				return B(
					this,
					n / s,
					-e / s,
					-i / s,
					t / s,
					(i * a - n * r) / s,
					-(t * a - e * r) / s
				);
			}),
			(i.multiply = function multiply(t) {
				var e = this.a,
					i = this.b,
					n = this.c,
					r = this.d,
					a = this.e,
					s = this.f,
					o = t.a,
					l = t.c,
					u = t.b,
					h = t.d,
					p = t.e,
					c = t.f;
				return B(
					this,
					o * e + u * n,
					o * i + u * r,
					l * e + h * n,
					l * i + h * r,
					a + p * e + c * n,
					s + p * i + c * r
				);
			}),
			(i.clone = function clone() {
				return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
			}),
			(i.equals = function equals(t) {
				var e = this.a,
					i = this.b,
					n = this.c,
					r = this.d,
					a = this.e,
					s = this.f;
				return (
					e === t.a &&
					i === t.b &&
					n === t.c &&
					r === t.d &&
					a === t.e &&
					s === t.f
				);
			}),
			(i.apply = function apply(t, e) {
				void 0 === e && (e = {});
				var i = t.x,
					n = t.y,
					r = this.a,
					a = this.b,
					s = this.c,
					o = this.d,
					l = this.e,
					u = this.f;
				return (
					(e.x = i * r + n * s + l || 0), (e.y = i * a + n * o + u || 0), e
				);
			}),
			Matrix2D);

	function Matrix2D(t, e, i, n, r, a) {
		void 0 === t && (t = 1),
			void 0 === e && (e = 0),
			void 0 === i && (i = 0),
			void 0 === n && (n = 1),
			void 0 === r && (r = 0),
			void 0 === a && (a = 0),
			B(this, t, e, i, n, r, a);
	}

	function getGlobalMatrix(e, i, n, r) {
		if (!e || !e.parentNode || (g || p(e)).documentElement === e)
			return new _();
		var a = (function _forceNonZeroScale(t) {
				for (var e, i; t && t !== b; )
					(i = t._gsap) && i.uncache && i.get(t, "x"),
						i &&
							!i.scaleX &&
							!i.scaleY &&
							i.renderTransform &&
							((i.scaleX = i.scaleY = 1e-4),
							i.renderTransform(1, i),
							e ? e.push(i) : (e = [i])),
						(t = t.parentNode);
				return e;
			})(e),
			s = v(e) ? C : k,
			o = A(e, n),
			l = s[0].getBoundingClientRect(),
			h = s[1].getBoundingClientRect(),
			c = s[2].getBoundingClientRect(),
			f = o.parentNode,
			d =
				!r &&
				(function _isFixed(t) {
					return (
						"fixed" === y.getComputedStyle(t).position ||
						((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0)
					);
				})(e),
			m = new _(
				(h.left - l.left) / 100,
				(h.top - l.top) / 100,
				(c.left - l.left) / 100,
				(c.top - l.top) / 100,
				l.left + (d ? 0 : u()),
				l.top + (d ? 0 : t())
			);
		if ((f.removeChild(o), a))
			for (l = a.length; l--; )
				((h = a[l]).scaleX = h.scaleY = 0), h.renderTransform(1, h);
		return i ? m.inverse() : m;
	}

	function K(t, e) {
		return t.actions.forEach(function (t) {
			return t.vars[e] && t.vars[e](t);
		});
	}

	function R(t) {
		return "string" == typeof t ? t.split(" ").join("").split(",") : t;
	}

	function U(t) {
		return T(t)[0] || console.warn("Element not found:", t);
	}

	function V(t) {
		return Math.round(1e4 * t) / 1e4 || 0;
	}

	function W(t, e, i) {
		return t.forEach(function (t) {
			return t.classList[i](e);
		});
	}

	function Z(t) {
		return t.replace(/([A-Z])/g, "-$1").toLowerCase();
	}

	function $(t, e) {
		var i,
			n = {};
		for (i in t) e[i] || (n[i] = t[i]);
		return n;
	}

	function aa(t) {
		var e = (at[t] = R(t));
		return (tt[t] = e.concat(it)), e;
	}

	function da(t, e, i) {
		return (
			t.forEach(function (t) {
				return (t.d = (function _getDOMDepth(t, e, i) {
					void 0 === i && (i = 0);
					for (
						var n = t.parentNode,
							r = 1e3 * Math.pow(10, i) * (e ? -1 : 1),
							a = e ? 900 * -r : 0;
						t;

					)
						(a += r), (t = t.previousSibling);
					return n ? a + _getDOMDepth(n, e, i + 1) : a;
				})(i ? t.element : t.t, e));
			}),
			t.sort(function (t, e) {
				return t.d - e.d;
			}),
			t
		);
	}

	function ea(t, e) {
		for (
			var i, n, r = t.element.style, a = (t.css = t.css || []), s = e.length;
			s--;

		)
			(n = r[(i = e[s])] || r.getPropertyValue(i)),
				a.push(n ? i : F[i] || (F[i] = Z(i)), n);
		return r;
	}

	function fa(t) {
		var e = t.css,
			i = t.element.style,
			n = 0;
		for (t.cache.uncache = 1; n < e.length; n += 2)
			e[n + 1] ? (i[e[n]] = e[n + 1]) : i.removeProperty(e[n]);
	}

	function ga(t, e) {
		t.forEach(function (t) {
			return (t.a.cache.uncache = 1);
		}),
			e || t.finalStates.forEach(fa);
	}

	function ia(e, i, n) {
		var r,
			a,
			s,
			o = e.element,
			l = e.width,
			h = e.height,
			p = e.uncache,
			c = e.getProp,
			f = o.style,
			d = 4;
		if (("object" != typeof i && (i = e), Q && 1 !== n))
			return (
				Q._abs.push({
					t: o,
					b: e,
					a: e,
					sd: 0
				}),
				Q._final.push(function () {
					return (e.cache.uncache = 1) && fa(e);
				}),
				o
			);
		for (
			a = "none" === c("display"),
				(e.isVisible && !a) ||
					(a && (ea(e, ["display"]).display = i.display),
					(e.matrix = i.matrix),
					(e.width = l = e.width || i.width),
					(e.height = h = e.height || i.height)),
				ea(e, I),
				s = window.getComputedStyle(o);
			d--;

		)
			f[I[d]] = s[I[d]];
		if (
			((f.gridArea = "1 / 1 / 1 / 1"),
			(f.transition = "none"),
			(f.position = "absolute"),
			(f.width = l + "px"),
			(f.height = h + "px"),
			f.top || (f.top = "0px"),
			f.left || (f.left = "0px"),
			p)
		)
			r = new lt(o);
		else if ((((r = $(e, M)).position = "absolute"), e.simple)) {
			var m = o.getBoundingClientRect();
			r.matrix = new _(1, 0, 0, 1, m.left + u(), m.top + t());
		} else r.matrix = getGlobalMatrix(o, !1, !1, !0);
		return (r = st(r, e, !0)), (e.x = N(r.x, 0.01)), (e.y = N(r.y, 0.01)), o;
	}

	function ja(t, e) {
		return (
			!0 !== e &&
				((e = T(e)),
				(t = t.filter(function (t) {
					if (-1 !== e.indexOf((t.sd < 0 ? t.b : t.a).element)) return !0;
					t.t._gsap.renderTransform(1),
						(t.t.style.width = t.b.width + "px"),
						(t.t.style.height = t.b.height + "px");
				}))),
			t
		);
	}

	function ka(t) {
		return da(t, !0).forEach(function (t) {
			return (
				(t.a.isVisible || t.b.isVisible) && ia(t.sd < 0 ? t.b : t.a, t.b, 1)
			);
		});
	}

	function oa(t, e) {
		var i,
			n = t.style || t;
		for (i in e) n[i] = e[i];
	}

	function qa(t) {
		return t.map(function (t) {
			return t.element;
		});
	}

	function ra(t, e, i) {
		return t && e.length && i.add(t(qa(e), i, new ot(e, 0, !0)), 0);
	}

	function ta(t, e) {
		return t instanceof ot ? t : new ot(t, e);
	}

	function ua(t, e, i) {
		var n = t.idLookup[i],
			r = t.alt[i];
		return !r.isVisible ||
			((e.getElementState(r.element) || r).isVisible && n.isVisible)
			? n
			: r;
	}

	function ya(t) {
		if (t !== l) {
			var e = o.style,
				i = o.clientWidth === window.outerWidth,
				n = o.clientHeight === window.outerHeight,
				r = 4;
			if (t && (i || n)) {
				for (; r--; ) X[r] = e[D[r]];
				i && ((e.width = o.clientWidth + "px"), (e.overflowY = "hidden")),
					n && ((e.height = o.clientHeight + "px"), (e.overflowX = "hidden")),
					(l = t);
			} else if (l) {
				for (; r--; ) X[r] ? (e[D[r]] = X[r]) : e.removeProperty(Z(D[r]));
				l = t;
			}
		}
	}

	function za(t, e, r, i) {
		(t instanceof ot && e instanceof ot) ||
			console.warn("Not a valid state object.");
		var a,
			s,
			o,
			l,
			u,
			h,
			p,
			c,
			f,
			n,
			d,
			m,
			g,
			y,
			x,
			v = (r = r || {}).clearProps,
			b = r.onEnter,
			w = r.onLeave,
			S = r.absolute,
			C = r.absoluteOnLeave,
			k = r.custom,
			V = r.delay,
			_ = r.paused,
			E = r.repeat,
			B = r.repeatDelay,
			M = r.yoyo,
			F = r.toggleClass,
			I = r.nested,
			L = r.zIndex,
			T = r.scale,
			N = r.fade,
			O = r.stagger,
			P = r.spin,
			A = r.prune,
			X = ("props" in r ? r : t).props,
			z = $(r, nt),
			D = J.timeline({
				delay: V,
				paused: _,
				repeat: E,
				repeatDelay: B,
				yoyo: M
			}),
			R = z,
			Y = [],
			G = [],
			j = [],
			q = [],
			U = !0 === P ? 1 : P || 0,
			H =
				"function" == typeof P
					? P
					: function () {
							return U;
					  },
			Z = t.interrupted || e.interrupted,
			K = D[1 !== i ? "to" : "from"];
		for (s in e.idLookup)
			(d = e.alt[s] ? ua(e, t, s) : e.idLookup[s]),
				(u = d.element),
				(n = t.idLookup[s]),
				!t.alt[s] ||
					u !== n.element ||
					(!t.alt[s].isVisible && d.isVisible) ||
					(n = t.alt[s]),
				n
					? ((h = {
							t: u,
							b: n,
							a: d,
							sd: n.element === u ? 0 : d.isVisible ? 1 : -1
					  }),
					  j.push(h),
					  h.sd &&
							(h.sd < 0 && ((h.b = d), (h.a = n)),
							Z && ea(h.b, X ? tt[X] : it),
							N &&
								j.push(
									(h.swap = {
										t: n.element,
										b: h.b,
										a: h.a,
										sd: -h.sd,
										swap: h
									})
								)),
					  (u._flip = n.element._flip = Q ? Q.timeline : D))
					: d.isVisible &&
					  (j.push({
							t: u,
							b: $(d, {
								isVisible: 1
							}),
							a: d,
							sd: 0
					  }),
					  (u._flip = Q ? Q.timeline : D));
		return (
			X &&
				(at[X] || aa(X)).forEach(function (e) {
					return (z[e] = function (t) {
						return j[t].a.props[e];
					});
				}),
			(j.finalStates = f = []),
			(m = function run() {
				for (da(j), ya(!0), l = 0; l < j.length; l++)
					(h = j[l]),
						(g = h.a),
						(y = h.b),
						A && !g.isDifferent(y)
							? j.splice(l--, 1)
							: ((u = h.t),
							  !I ||
									h.sd < 0 ||
									!l ||
									(g.matrix = getGlobalMatrix(u, !1, !1, !0)),
							  h.sd || (y.isVisible && g.isVisible)
									? (h.sd < 0
											? ((p = new lt(u, X, t.simple)),
											  st(p, g, T, 0, 0, p),
											  (p.matrix = getGlobalMatrix(u, !1, !1, !0)),
											  (p.css = h.b.css),
											  (h.a = g = p),
											  N && (u.style.opacity = Z ? y.opacity : g.opacity),
											  O && q.push(u))
											: 0 < h.sd &&
											  N &&
											  (u.style.opacity = Z ? g.opacity - y.opacity : "0"),
									  st(g, y, T, X))
									: y.isVisible !== g.isVisible &&
									  (y.isVisible
											? g.isVisible ||
											  ((y.css = g.css),
											  G.push(y),
											  j.splice(l--, 1),
											  S && I && st(g, y, T, X))
											: (g.isVisible && Y.push(g), j.splice(l--, 1))),
							  T ||
									((u.style.maxWidth = Math.max(g.width, y.width) + "px"),
									(u.style.maxHeight = Math.max(g.height, y.height) + "px"),
									(u.style.minWidth = Math.min(g.width, y.width) + "px"),
									(u.style.minHeight = Math.min(g.height, y.height) + "px")),
							  I && F && u.classList.add(F)),
						f.push(g);
				var e;
				if (
					(F &&
						((e = f.map(function (t) {
							return t.element;
						})),
						I &&
							e.forEach(function (t) {
								return t.classList.remove(F);
							})),
					ya(!1),
					T
						? ((z.scaleX = function (t) {
								return j[t].a.scaleX;
						  }),
						  (z.scaleY = function (t) {
								return j[t].a.scaleY;
						  }))
						: ((z.width = function (t) {
								return j[t].a.width + "px";
						  }),
						  (z.height = function (t) {
								return j[t].a.height + "px";
						  }),
						  (z.autoRound = r.autoRound || !1)),
					(z.x = function (t) {
						return j[t].a.x + "px";
					}),
					(z.y = function (t) {
						return j[t].a.y + "px";
					}),
					(z.rotation = function (t) {
						return j[t].a.rotation + (P ? 360 * H(t, c[t], c) : 0);
					}),
					(z.skewX = function (t) {
						return j[t].a.skewX;
					}),
					(c = j.map(function (t) {
						return t.t;
					})),
					(!L && 0 !== L) ||
						((z.modifiers = {
							zIndex: function zIndex() {
								return L;
							}
						}),
						(z.zIndex = L),
						(z.immediateRender = !1 !== r.immediateRender)),
					N &&
						(z.opacity = function (t) {
							return j[t].sd < 0 ? 0 : 0 < j[t].sd ? j[t].a.opacity : "+=0";
						}),
					q.length)
				) {
					O = J.utils.distribute(O);
					var i = c.slice(q.length);
					z.stagger = function (t, e) {
						return O(~q.indexOf(e) ? c.indexOf(j[t].swap.t) : t, e, i);
					};
				}
				if (
					(et.forEach(function (t) {
						return r[t] && D.eventCallback(t, r[t], r[t + "Params"]);
					}),
					k && c.length)
				)
					for (s in ((R = $(z, nt)),
					"scale" in k && ((k.scaleX = k.scaleY = k.scale), delete k.scale),
					k))
						((a = $(k[s], rt))[s] = z[s]),
							!("duration" in a) &&
								"duration" in z &&
								(a.duration = z.duration),
							(a.stagger = z.stagger),
							K.call(D, c, a, 0),
							delete R[s];
				(c.length || G.length || Y.length) &&
					(F &&
						D.add(function () {
							return W(e, F, D._zTime < 0 ? "remove" : "add");
						}, 0) &&
						!_ &&
						W(e, F, "add"),
					c.length && K.call(D, c, R, 0)),
					ra(b, Y, D),
					ra(w, G, D);
				var n = Q && Q.timeline;
				n &&
					(n.add(D, 0),
					Q._final.push(function () {
						return ga(j, !v);
					})),
					(o = D.duration()),
					D.call(function () {
						var t = D.time() >= o;
						t && !n && ga(j, !v), F && W(e, F, t ? "remove" : "add");
					});
			}),
			C &&
				(S = j
					.filter(function (t) {
						return !t.sd && !t.a.isVisible && t.b.isVisible;
					})
					.map(function (t) {
						return t.a.element;
					})),
			Q
				? (S && (x = Q._abs).push.apply(x, ja(j, S)), Q._run.push(m))
				: (S && ka(ja(j, S)), m()),
			Q ? Q.timeline : D
		);
	}

	function Ba(t, e) {
		if (t && t.progress() < 1 && !t.paused())
			return (
				e &&
					((function _interrupt(t) {
						t.vars.onInterrupt &&
							t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []),
							t.getChildren(!0, !1, !0).forEach(_interrupt);
					})(t),
					e < 2 && t.progress(1),
					t.kill()),
				!0
			);
	}

	function Ca(t) {
		for (
			var e,
				i = (t.idLookup = {}),
				n = (t.alt = {}),
				r = t.elementStates,
				a = r.length;
			a--;

		)
			i[(e = r[a]).id] ? (n[e.id] = e) : (i[e.id] = e);
	}
	var T,
		J,
		Q,
		s,
		o,
		N,
		l,
		n,
		E = 1,
		h = {},
		O = 180 / Math.PI,
		P = Math.PI / 180,
		M = {},
		F = {},
		tt = {},
		et = R("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
		it = R(
			"transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
		),
		nt = {
			zIndex: 1,
			kill: 1,
			simple: 1,
			spin: 1,
			clearProps: 1,
			targets: 1,
			toggleClass: 1,
			onComplete: 1,
			onUpdate: 1,
			onInterrupt: 1,
			onStart: 1,
			delay: 1,
			repeat: 1,
			repeatDelay: 1,
			yoyo: 1,
			scale: 1,
			fade: 1,
			absolute: 1,
			props: 1,
			onEnter: 1,
			onLeave: 1,
			custom: 1,
			paused: 1,
			nested: 1,
			prune: 1,
			absoluteOnLeave: 1
		},
		rt = {
			zIndex: 1,
			simple: 1,
			clearProps: 1,
			scale: 1,
			absolute: 1,
			fitChild: 1,
			getVars: 1,
			props: 1
		},
		at = {},
		I = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
			","
		),
		L = function _parseElementState(t, e, i, n) {
			return t instanceof lt
				? t
				: t instanceof ot
				? (function _findElStateInState(t, e) {
						return (e && t.idLookup[L(e).id]) || t.elementStates[0];
				  })(t, n)
				: new lt(
						"string" == typeof t ? U(t) || console.warn(t + " not found") : t,
						e,
						i
				  );
		},
		st = function _fit(t, e, i, n, r, a) {
			var s,
				o,
				l,
				u,
				h,
				p,
				c,
				f = t.element,
				d = t.cache,
				m = t.parent,
				g = t.x,
				y = t.y,
				x = e.width,
				v = e.height,
				b = e.scaleX,
				w = e.scaleY,
				S = e.rotation,
				C = e.bounds,
				k = a && f.style.cssText,
				_ = a && f.getBBox && f.getAttribute("transform"),
				E = t,
				B = e.matrix,
				M = B.e,
				F = B.f,
				I =
					t.bounds.width !== C.width ||
					t.bounds.height !== C.height ||
					t.scaleX !== b ||
					t.scaleY !== w ||
					t.rotation !== S,
				L = !I && t.simple && e.simple && !r;
			return (
				L
					? ((b = w = 1), (S = s = 0))
					: ((p = (h = (function _getInverseGlobalMatrix(t) {
							var e = t._gsap || J.core.getCache(t);
							return e.gmCache === J.ticker.frame
								? e.gMatrix
								: ((e.gmCache = J.ticker.frame),
								  (e.gMatrix = getGlobalMatrix(t, !0, !1, !0)));
					  })(m))
							.clone()
							.multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix)),
					  (S = V(Math.atan2(p.b, p.a) * O)),
					  (s = V(Math.atan2(p.c, p.d) * O + S) % 360),
					  (b = Math.sqrt(Math.pow(p.a, 2) + Math.pow(p.b, 2))),
					  (w =
							Math.sqrt(Math.pow(p.c, 2) + Math.pow(p.d, 2)) * Math.cos(s * P)),
					  r &&
							((r = T(r)[0]),
							(u = J.getProperty(r)),
							(c = r.getBBox && "function" == typeof r.getBBox && r.getBBox()),
							(E = {
								scaleX: u("scaleX"),
								scaleY: u("scaleY"),
								width: c ? c.width : Math.ceil(parseFloat(u("width", "px"))),
								height: c ? c.height : parseFloat(u("height", "px"))
							})),
					  (d.rotation = S + "deg"),
					  (d.skewX = s + "deg")),
				i
					? ((b *= x !== E.width && E.width ? x / E.width : 1),
					  (w *= v !== E.height && E.height ? v / E.height : 1),
					  (d.scaleX = b),
					  (d.scaleY = w))
					: ((x = N((x * b) / E.scaleX, 0)),
					  (v = N((v * w) / E.scaleY, 0)),
					  (f.style.width = x + "px"),
					  (f.style.height = v + "px")),
				n && oa(f, e.props),
				L
					? ((g += M - t.matrix.e), (y += F - t.matrix.f))
					: I || m !== e.parent
					? (d.renderTransform(1, d),
					  (p = getGlobalMatrix(r || f, !1, !1, !0)),
					  (o = h.apply({
							x: p.e,
							y: p.f
					  })),
					  (g +=
							(l = h.apply({
								x: M,
								y: F
							})).x - o.x),
					  (y += l.y - o.y))
					: ((h.e = h.f = 0),
					  (g += (l = h.apply({
							x: M - t.matrix.e,
							y: F - t.matrix.f
					  })).x),
					  (y += l.y)),
				(g = N(g, 0.02)),
				(y = N(y, 0.02)),
				!a || a instanceof lt
					? ((d.x = g + "px"), (d.y = y + "px"), d.renderTransform(1, d))
					: ((f.style.cssText = k),
					  f.getBBox && f.setAttribute("transform", _ || ""),
					  (d.uncache = 1)),
				a &&
					((a.x = g),
					(a.y = y),
					(a.rotation = S),
					(a.skewX = s),
					i
						? ((a.scaleX = b), (a.scaleY = w))
						: ((a.width = x), (a.height = v))),
				a || d
			);
		},
		X = [],
		D = "width,height,overflowX,overflowY".split(","),
		ot =
			(((n = FlipState.prototype).update = function update(t) {
				var e = this;
				return (
					(this.elementStates = this.targets.map(function (t) {
						return new lt(t, e.props, e.simple);
					})),
					Ca(this),
					this.interrupt(t),
					this.recordInlineStyles(),
					this
				);
			}),
			(n.clear = function clear() {
				return (
					(this.targets.length = this.elementStates.length = 0), Ca(this), this
				);
			}),
			(n.fit = function fit(t, e, i) {
				for (
					var n,
						r,
						a = da(this.elementStates.slice(0), !1, !0),
						s = (t || this).idLookup,
						o = 0;
					o < a.length;
					o++
				)
					(n = a[o]),
						i && (n.matrix = getGlobalMatrix(n.element, !1, !1, !0)),
						(r = s[n.id]) && st(n, r, e, !0, 0, n),
						(n.matrix = getGlobalMatrix(n.element, !1, !1, !0));
				return this;
			}),
			(n.getProperty = function getProperty(t, e) {
				var i = this.getElementState(t) || M;
				return (e in i ? i : i.props || M)[e];
			}),
			(n.add = function add(t) {
				for (
					var e, i, n, r = t.targets.length, a = this.idLookup, s = this.alt;
					r--;

				)
					(n = a[(i = t.elementStates[r]).id]) &&
					(i.element === n.element ||
						(s[i.id] && s[i.id].element === i.element))
						? ((e = this.elementStates.indexOf(
								i.element === n.element ? n : s[i.id]
						  )),
						  this.targets.splice(e, 1, t.targets[r]),
						  this.elementStates.splice(e, 1, i))
						: (this.targets.push(t.targets[r]), this.elementStates.push(i));
				return (
					t.interrupted && (this.interrupted = !0),
					t.simple || (this.simple = !1),
					Ca(this),
					this
				);
			}),
			(n.compare = function compare(t) {
				function hh(t, e, i) {
					return (
						(t.isVisible !== e.isVisible
							? t.isVisible
								? f
								: d
							: t.isVisible
							? c
							: p
						).push(i) && m.push(i)
					);
				}

				function ih(t, e, i) {
					return m.indexOf(i) < 0 && hh(t, e, i);
				}
				var e,
					i,
					n,
					r,
					a,
					s,
					o,
					l,
					u = t.idLookup,
					h = this.idLookup,
					p = [],
					c = [],
					f = [],
					d = [],
					m = [],
					g = t.alt,
					y = this.alt;
				for (n in u)
					(a = g[n]),
						(s = y[n]),
						(r = (e = a ? ua(t, this, n) : u[n]).element),
						(i = h[n]),
						s
							? ((l = i.isVisible || (!s.isVisible && r === i.element) ? i : s),
							  (o =
									!a || e.isVisible || a.isVisible || l.element !== a.element
										? e
										: a).isVisible &&
							  l.isVisible &&
							  o.element !== l.element
									? ((o.isDifferent(l) ? c : p).push(o.element, l.element),
									  m.push(o.element, l.element))
									: hh(o, l, o.element),
							  a && o.element === a.element && (a = u[n]),
							  ih(o.element !== i.element && a ? a : o, i, i.element),
							  ih(a && a.element === s.element ? a : o, s, s.element),
							  a && ih(a, s.element === a.element ? s : i, a.element))
							: (i ? (i.isDifferent(e) ? hh(e, i, r) : p.push(r)) : f.push(r),
							  a && ih(a, i, a.element));
				for (n in h)
					u[n] || (d.push(h[n].element), y[n] && d.push(y[n].element));
				return {
					changed: c,
					unchanged: p,
					enter: f,
					leave: d
				};
			}),
			(n.recordInlineStyles = function recordInlineStyles() {
				for (var t = tt[this.props] || it, e = this.elementStates.length; e--; )
					ea(this.elementStates[e], t);
			}),
			(n.interrupt = function interrupt(n) {
				var r = this,
					a = [];
				this.targets.forEach(function (t) {
					var e = t._flip,
						i = Ba(e, n ? 0 : 1);
					n &&
						i &&
						a.indexOf(e) < 0 &&
						e.add(function () {
							return r.updateVisibility();
						}),
						i && a.push(e);
				}),
					!n && a.length && this.updateVisibility(),
					this.interrupted || (this.interrupted = !!a.length);
			}),
			(n.updateVisibility = function updateVisibility() {
				this.elementStates.forEach(function (t) {
					var e = t.element.getBoundingClientRect();
					(t.isVisible = !!(e.width || e.height || e.top || e.left)),
						(t.uncache = 1);
				});
			}),
			(n.getElementState = function getElementState(t) {
				return this.elementStates[this.targets.indexOf(U(t))];
			}),
			(n.makeAbsolute = function makeAbsolute() {
				return da(this.elementStates.slice(0), !0, !0).map(ia);
			}),
			FlipState);

	function FlipState(t, e, i) {
		if (((this.props = e && e.props), (this.simple = !(!e || !e.simple)), i))
			(this.targets = qa(t)), (this.elementStates = t), Ca(this);
		else {
			this.targets = T(t);
			var n = e && (!1 === e.kill || (e.batch && !e.kill));
			Q && !n && Q._kill.push(this), this.update(n || !!Q);
		}
	}
	var Y,
		lt =
			(((Y = ElementState.prototype).isDifferent = function isDifferent(t) {
				var e = this.bounds,
					i = t.bounds;
				return (
					e.top !== i.top ||
					e.left !== i.left ||
					e.width !== i.width ||
					e.height !== i.height ||
					!this.matrix.equals(t.matrix) ||
					this.opacity !== t.opacity ||
					(this.props &&
						t.props &&
						JSON.stringify(this.props) !== JSON.stringify(t.props))
				);
			}),
			(Y.update = function update(e, i) {
				var n = this,
					r = n.element,
					a = J.getProperty(r),
					s = J.core.getCache(r),
					o = r.getBoundingClientRect(),
					l =
						r.getBBox &&
						"function" == typeof r.getBBox &&
						"svg" !== r.nodeName.toLowerCase() &&
						r.getBBox(),
					h = i
						? new _(1, 0, 0, 1, o.left + u(), o.top + t())
						: getGlobalMatrix(r, !1, !1, !0);
				(n.getProp = a),
					(n.element = r),
					(n.id = (function _getID(t) {
						var e = t.getAttribute("data-flip-id");
						return e || t.setAttribute("data-flip-id", (e = "auto-" + E++)), e;
					})(r)),
					(n.matrix = h),
					(n.cache = s),
					(n.bounds = o),
					(n.isVisible = !!(o.width || o.height || o.left || o.top)),
					(n.display = a("display")),
					(n.position = a("position")),
					(n.parent = r.parentNode),
					(n.x = a("x")),
					(n.y = a("y")),
					(n.scaleX = s.scaleX),
					(n.scaleY = s.scaleY),
					(n.rotation = a("rotation")),
					(n.skewX = a("skewX")),
					(n.opacity = a("opacity")),
					(n.width = l ? l.width : N(a("width", "px"), 0.04)),
					(n.height = l ? l.height : N(a("height", "px"), 0.04)),
					e &&
						(function _recordProps(t, e) {
							for (
								var i = J.getProperty(t.element, null, "native"),
									n = (t.props = {}),
									r = e.length;
								r--;

							)
								n[e[r]] = (i(e[r]) + "").trim();
							n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
						})(n, at[e] || aa(e)),
					(n.ctm =
						r.getCTM && "svg" === r.nodeName.toLowerCase() && z(r).inverse()),
					(n.simple =
						i || (1 === V(h.a) && !V(h.b) && !V(h.c) && 1 === V(h.d))),
					(n.uncache = 0);
			}),
			ElementState);

	function ElementState(t, e, i) {
		(this.element = t), this.update(e, i);
	}
	var G,
		j =
			(((G = FlipAction.prototype).getStateById = function getStateById(t) {
				for (var e = this.states.length; e--; )
					if (this.states[e].idLookup[t]) return this.states[e];
			}),
			(G.kill = function kill() {
				this.batch.remove(this);
			}),
			FlipAction);

	function FlipAction(t, e) {
		(this.vars = t),
			(this.batch = e),
			(this.states = []),
			(this.timeline = e.timeline);
	}
	var q,
		H =
			(((q = FlipBatch.prototype).add = function add(e) {
				var t = this.actions.filter(function (t) {
					return t.vars === e;
				});
				return t.length
					? t[0]
					: ((t = new j(
							"function" == typeof e
								? {
										animate: e
								  }
								: e,
							this
					  )),
					  this.actions.push(t),
					  t);
			}),
			(q.remove = function remove(t) {
				var e = this.actions.indexOf(t);
				return 0 <= e && this.actions.splice(e, 1), this;
			}),
			(q.getState = function getState(e) {
				var i = this,
					t = Q,
					n = s;
				return (
					(Q = this).state.clear(),
					(this._kill.length = 0),
					this.actions.forEach(function (t) {
						t.vars.getState &&
							((t.states.length = 0), ((s = t).state = t.vars.getState(t))),
							e &&
								t.states.forEach(function (t) {
									return i.state.add(t);
								});
					}),
					(s = n),
					(Q = t),
					this.killConflicts(),
					this
				);
			}),
			(q.animate = function animate() {
				var t,
					e,
					i = this,
					n = Q,
					r = this.timeline,
					a = this.actions.length;
				for (
					Q = this,
						r.clear(),
						this._abs.length = this._final.length = this._run.length = 0,
						this.actions.forEach(function (t) {
							t.vars.animate && t.vars.animate(t);
							var e,
								i,
								n = t.vars.onEnter,
								r = t.vars.onLeave,
								a = t.targets;
							a &&
								a.length &&
								(n || r) &&
								((e = new ot()),
								t.states.forEach(function (t) {
									return e.add(t);
								}),
								(i = e.compare(ut.getState(a))).enter.length && n && n(i.enter),
								i.leave.length && r && r(i.leave));
						}),
						ka(this._abs),
						this._run.forEach(function (t) {
							return t();
						}),
						e = r.duration(),
						t = this._final.slice(0),
						r.add(function () {
							e <= r.time() &&
								(t.forEach(function (t) {
									return t();
								}),
								K(i, "onComplete"));
						}),
						Q = n;
					a--;

				)
					this.actions[a].vars.once && this.actions[a].kill();
				return K(this, "onStart"), r.restart(), this;
			}),
			(q.loadState = function loadState(n) {
				n =
					n ||
					function done() {
						return 0;
					};
				var r = [];
				return (
					this.actions.forEach(function (e) {
						if (e.vars.loadState) {
							var i,
								t = function f(t) {
									t && (e.targets = t),
										~(i = r.indexOf(f)) && (r.splice(i, 1), r.length || n());
								};
							r.push(t), e.vars.loadState(t);
						}
					}),
					r.length || n(),
					this
				);
			}),
			(q.setState = function setState() {
				return (
					this.actions.forEach(function (t) {
						return (t.targets = t.vars.setState && t.vars.setState(t));
					}),
					this
				);
			}),
			(q.killConflicts = function killConflicts(e) {
				return (
					this.state.interrupt(e),
					this._kill.forEach(function (t) {
						return t.interrupt(e);
					}),
					this
				);
			}),
			(q.run = function run(t, e) {
				var i = this;
				return (
					this !== Q &&
						(t || this.getState(e),
						this.loadState(function () {
							i._killed || (i.setState(), i.animate());
						})),
					this
				);
			}),
			(q.clear = function clear(t) {
				this.state.clear(), t || (this.actions.length = 0);
			}),
			(q.getStateById = function getStateById(t) {
				for (var e, i = this.actions.length; i--; )
					if ((e = this.actions[i].getStateById(t))) return e;
				return this.state.idLookup[t] && this.state;
			}),
			(q.kill = function kill() {
				(this._killed = 1), this.clear(), delete h[this.id];
			}),
			FlipBatch);

	function FlipBatch(t) {
		(this.id = t),
			(this.actions = []),
			(this._kill = []),
			(this._final = []),
			(this._abs = []),
			(this._run = []),
			(this.data = {}),
			(this.state = new ot()),
			(this.timeline = J.timeline());
	}
	var ut =
		((Flip.getState = function getState(t, e) {
			var i = ta(t, e);
			return (
				s && s.states.push(i),
				e && e.batch && Flip.batch(e.batch).state.add(i),
				i
			);
		}),
		(Flip.from = function from(t, e) {
			return (
				"clearProps" in (e = e || {}) || (e.clearProps = !0),
				za(
					t,
					ta(e.targets || t.targets, {
						props: e.props || t.props,
						simple: e.simple,
						kill: !!e.kill
					}),
					e,
					-1
				)
			);
		}),
		(Flip.to = function to(t, e) {
			return za(
				t,
				ta(e.targets || t.targets, {
					props: e.props || t.props,
					simple: e.simple,
					kill: !!e.kill
				}),
				e,
				1
			);
		}),
		(Flip.fromTo = function fromTo(t, e, i) {
			return za(t, e, i);
		}),
		(Flip.fit = function fit(t, e, i) {
			var n = i ? $(i, rt) : {},
				r = i || n,
				a = r.absolute,
				s = r.scale,
				o = r.getVars,
				l = r.props,
				u = r.runBackwards,
				h = r.onComplete,
				p = r.simple,
				c = i && i.fitChild && U(i.fitChild),
				f = L(e, l, p, t),
				d = L(t, 0, p, f),
				m = l ? tt[l] : it;
			return (
				l && oa(n, f.props),
				u &&
					(ea(d, m),
					"immediateRender" in n || (n.immediateRender = !0),
					(n.onComplete = function () {
						fa(d), h && h.apply(this, arguments);
					})),
				a && ia(d, f),
				(n = st(d, f, s || c, l, c, n.duration || o ? n : 0)),
				o ? n : n.duration ? J.to(d.element, n) : null
			);
		}),
		(Flip.makeAbsolute = function makeAbsolute(t, e) {
			return (t instanceof ot ? t : new ot(t, e)).makeAbsolute();
		}),
		(Flip.batch = function batch(t) {
			return h[(t = t || "default")] || (h[t] = new H(t));
		}),
		(Flip.killFlipsOf = function killFlipsOf(t, e) {
			(t instanceof ot ? t.targets : T(t)).forEach(function (t) {
				return t && Ba(t._flip, !1 !== e ? 1 : 2);
			});
		}),
		(Flip.isFlipping = function isFlipping(t) {
			var e = Flip.getByTarget(t);
			return !!e && e.isActive();
		}),
		(Flip.getByTarget = function getByTarget(t) {
			return (U(t) || M)._flip;
		}),
		(Flip.getElementState = function getElementState(t, e) {
			return new lt(U(t), e);
		}),
		(Flip.convertCoordinates = function convertCoordinates(t, e, i) {
			var n = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
			return i ? n.apply(i) : n;
		}),
		(Flip.register = function register(t) {
			if ((o = "undefined" != typeof document && document.body)) {
				(J = t), p(o), (T = J.utils.toArray);
				var i = J.utils.snap(0.1);
				N = function _closestTenth(t, e) {
					return i(parseFloat(t) + e);
				};
			}
		}),
		Flip);

	function Flip() {}

	export {ut as default, ut as Flip};
	// export default ut;
	// export ut as Flip;
	// (ut.version = "3.9.1"),
	// 	"undefined" != typeof window &&
	// 		window.gsap &&
	// 		window.gsap.registerPlugin(ut),
	// 	(e.Flip = ut),
	// 	(e.default = ut);
	
	// if (typeof window === "undefined" || window !== e) {
	// 	Object.defineProperty(e, "__esModule", {value: !0});
	// } else {
	// 	delete e.default;
	// }
// });

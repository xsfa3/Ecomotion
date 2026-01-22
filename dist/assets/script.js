function V0(n, r) {
    for (var s = 0; s < r.length; s++) {
        const i = r[s];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const l in i)
                if (l !== "default" && !(l in n)) {
                    const c = Object.getOwnPropertyDescriptor(i, l);
                    c && Object.defineProperty(n, l, c.get ? c : {
                        enumerable: !0,
                        get: () => i[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        i(l);
    new MutationObserver(l => {
        for (const c of l)
            if (c.type === "childList")
                for (const f of c.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && i(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(l) {
        const c = {};
        return l.integrity && (c.integrity = l.integrity),
        l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function i(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const c = s(l);
        fetch(l.href, c)
    }
}
)();
/* Default */
.color-normal {
  filter: none;
}

/* Red-blind */
.color-protanopia {
  filter: url('#protanopia');
}

/* Green-blind */
.color-deuteranopia {
  filter: url('#deuteranopia');
}

/* Blue-blind */
.color-tritanopia {
  filter: url('#tritanopia');
}

function Sh(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var du = {
    exports: {}
}
  , Yo = {}
  , fu = {
    exports: {}
}
  , Se = {};
var fp;
function W0() {
    if (fp)
        return Se;
    fp = 1;
    var n = Symbol.for("react.element")
      , r = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , l = Symbol.for("react.profiler")
      , c = Symbol.for("react.provider")
      , f = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , v = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , x = Symbol.for("react.lazy")
      , w = Symbol.iterator;
    function E(T) {
        return T === null || typeof T != "object" ? null : (T = w && T[w] || T["@@iterator"],
        typeof T == "function" ? T : null)
    }
    var b = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , N = Object.assign
      , S = {};
    function C(T, F, Y) {
        this.props = T,
        this.context = F,
        this.refs = S,
        this.updater = Y || b
    }
    C.prototype.isReactComponent = {},
    C.prototype.setState = function(T, F) {
        if (typeof T != "object" && typeof T != "function" && T != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, F, "setState")
    }
    ,
    C.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    }
    ;
    function R() {}
    R.prototype = C.prototype;
    function M(T, F, Y) {
        this.props = T,
        this.context = F,
        this.refs = S,
        this.updater = Y || b
    }
    var _ = M.prototype = new R;
    _.constructor = M,
    N(_, C.prototype),
    _.isPureReactComponent = !0;
    var L = Array.isArray
      , $ = Object.prototype.hasOwnProperty
      , W = {
        current: null
    }
      , G = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Z(T, F, Y) {
        var J, de = {}, ve = null, te = null;
        if (F != null)
            for (J in F.ref !== void 0 && (te = F.ref),
            F.key !== void 0 && (ve = "" + F.key),
            F)
                $.call(F, J) && !G.hasOwnProperty(J) && (de[J] = F[J]);
        var be = arguments.length - 2;
        if (be === 1)
            de.children = Y;
        else if (1 < be) {
            for (var Ee = Array(be), Ve = 0; Ve < be; Ve++)
                Ee[Ve] = arguments[Ve + 2];
            de.children = Ee
        }
        if (T && T.defaultProps)
            for (J in be = T.defaultProps,
            be)
                de[J] === void 0 && (de[J] = be[J]);
        return {
            $$typeof: n,
            type: T,
            key: ve,
            ref: te,
            props: de,
            _owner: W.current
        }
    }
    function ce(T, F) {
        return {
            $$typeof: n,
            type: T.type,
            key: F,
            ref: T.ref,
            props: T.props,
            _owner: T._owner
        }
    }
    function le(T) {
        return typeof T == "object" && T !== null && T.$$typeof === n
    }
    function he(T) {
        var F = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(Y) {
            return F[Y]
        })
    }
    var X = /\/+/g;
    function me(T, F) {
        return typeof T == "object" && T !== null && T.key != null ? he("" + T.key) : F.toString(36)
    }
    function q(T, F, Y, J, de) {
        var ve = typeof T;
        (ve === "undefined" || ve === "boolean") && (T = null);
        var te = !1;
        if (T === null)
            te = !0;
        else
            switch (ve) {
            case "string":
            case "number":
                te = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                case n:
                case r:
                    te = !0
                }
            }
        if (te)
            return te = T,
            de = de(te),
            T = J === "" ? "." + me(te, 0) : J,
            L(de) ? (Y = "",
            T != null && (Y = T.replace(X, "$&/") + "/"),
            q(de, F, Y, "", function(Ve) {
                return Ve
            })) : de != null && (le(de) && (de = ce(de, Y + (!de.key || te && te.key === de.key ? "" : ("" + de.key).replace(X, "$&/") + "/") + T)),
            F.push(de)),
            1;
        if (te = 0,
        J = J === "" ? "." : J + ":",
        L(T))
            for (var be = 0; be < T.length; be++) {
                ve = T[be];
                var Ee = J + me(ve, be);
                te += q(ve, F, Y, Ee, de)
            }
        else if (Ee = E(T),
        typeof Ee == "function")
            for (T = Ee.call(T),
            be = 0; !(ve = T.next()).done; )
                ve = ve.value,
                Ee = J + me(ve, be++),
                te += q(ve, F, Y, Ee, de);
        else if (ve === "object")
            throw F = String(T),
            Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
        return te
    }
    function ye(T, F, Y) {
        if (T == null)
            return T;
        var J = []
          , de = 0;
        return q(T, J, "", "", function(ve) {
            return F.call(Y, ve, de++)
        }),
        J
    }
    function ne(T) {
        if (T._status === -1) {
            var F = T._result;
            F = F(),
            F.then(function(Y) {
                (T._status === 0 || T._status === -1) && (T._status = 1,
                T._result = Y)
            }, function(Y) {
                (T._status === 0 || T._status === -1) && (T._status = 2,
                T._result = Y)
            }),
            T._status === -1 && (T._status = 0,
            T._result = F)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var se = {
        current: null
    }
      , z = {
        transition: null
    }
      , I = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: z,
        ReactCurrentOwner: W
    };
    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: ye,
        forEach: function(T, F, Y) {
            ye(T, function() {
                F.apply(this, arguments)
            }, Y)
        },
        count: function(T) {
            var F = 0;
            return ye(T, function() {
                F++
            }),
            F
        },
        toArray: function(T) {
            return ye(T, function(F) {
                return F
            }) || []
        },
        only: function(T) {
            if (!le(T))
                throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    },
    Se.Component = C,
    Se.Fragment = s,
    Se.Profiler = l,
    Se.PureComponent = M,
    Se.StrictMode = i,
    Se.Suspense = v,
    Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I,
    Se.act = U,
    Se.cloneElement = function(T, F, Y) {
        if (T == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
        var J = N({}, T.props)
          , de = T.key
          , ve = T.ref
          , te = T._owner;
        if (F != null) {
            if (F.ref !== void 0 && (ve = F.ref,
            te = W.current),
            F.key !== void 0 && (de = "" + F.key),
            T.type && T.type.defaultProps)
                var be = T.type.defaultProps;
            for (Ee in F)
                $.call(F, Ee) && !G.hasOwnProperty(Ee) && (J[Ee] = F[Ee] === void 0 && be !== void 0 ? be[Ee] : F[Ee])
        }
        var Ee = arguments.length - 2;
        if (Ee === 1)
            J.children = Y;
        else if (1 < Ee) {
            be = Array(Ee);
            for (var Ve = 0; Ve < Ee; Ve++)
                be[Ve] = arguments[Ve + 2];
            J.children = be
        }
        return {
            $$typeof: n,
            type: T.type,
            key: de,
            ref: ve,
            props: J,
            _owner: te
        }
    }
    ,
    Se.createContext = function(T) {
        return T = {
            $$typeof: f,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        T.Provider = {
            $$typeof: c,
            _context: T
        },
        T.Consumer = T
    }
    ,
    Se.createElement = Z,
    Se.createFactory = function(T) {
        var F = Z.bind(null, T);
        return F.type = T,
        F
    }
    ,
    Se.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Se.forwardRef = function(T) {
        return {
            $$typeof: p,
            render: T
        }
    }
    ,
    Se.isValidElement = le,
    Se.lazy = function(T) {
        return {
            $$typeof: x,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: ne
        }
    }
    ,
    Se.memo = function(T, F) {
        return {
            $$typeof: g,
            type: T,
            compare: F === void 0 ? null : F
        }
    }
    ,
    Se.startTransition = function(T) {
        var F = z.transition;
        z.transition = {};
        try {
            T()
        } finally {
            z.transition = F
        }
    }
    ,
    Se.unstable_act = U,
    Se.useCallback = function(T, F) {
        return se.current.useCallback(T, F)
    }
    ,
    Se.useContext = function(T) {
        return se.current.useContext(T)
    }
    ,
    Se.useDebugValue = function() {}
    ,
    Se.useDeferredValue = function(T) {
        return se.current.useDeferredValue(T)
    }
    ,
    Se.useEffect = function(T, F) {
        return se.current.useEffect(T, F)
    }
    ,
    Se.useId = function() {
        return se.current.useId()
    }
    ,
    Se.useImperativeHandle = function(T, F, Y) {
        return se.current.useImperativeHandle(T, F, Y)
    }
    ,
    Se.useInsertionEffect = function(T, F) {
        return se.current.useInsertionEffect(T, F)
    }
    ,
    Se.useLayoutEffect = function(T, F) {
        return se.current.useLayoutEffect(T, F)
    }
    ,
    Se.useMemo = function(T, F) {
        return se.current.useMemo(T, F)
    }
    ,
    Se.useReducer = function(T, F, Y) {
        return se.current.useReducer(T, F, Y)
    }
    ,
    Se.useRef = function(T) {
        return se.current.useRef(T)
    }
    ,
    Se.useState = function(T) {
        return se.current.useState(T)
    }
    ,
    Se.useSyncExternalStore = function(T, F, Y) {
        return se.current.useSyncExternalStore(T, F, Y)
    }
    ,
    Se.useTransition = function() {
        return se.current.useTransition()
    }
    ,
    Se.version = "18.3.1",
    Se
}
var pp;
function Ju() {
    return pp || (pp = 1,
    fu.exports = W0()),
    fu.exports
}
var hp;
function H0() {
    if (hp)
        return Yo;
    hp = 1;
    var n = Ju()
      , r = Symbol.for("react.element")
      , s = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , c = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function f(p, v, g) {
        var x, w = {}, E = null, b = null;
        g !== void 0 && (E = "" + g),
        v.key !== void 0 && (E = "" + v.key),
        v.ref !== void 0 && (b = v.ref);
        for (x in v)
            i.call(v, x) && !c.hasOwnProperty(x) && (w[x] = v[x]);
        if (p && p.defaultProps)
            for (x in v = p.defaultProps,
            v)
                w[x] === void 0 && (w[x] = v[x]);
        return {
            $$typeof: r,
            type: p,
            key: E,
            ref: b,
            props: w,
            _owner: l.current
        }
    }
    return Yo.Fragment = s,
    Yo.jsx = f,
    Yo.jsxs = f,
    Yo
}
var mp;
function K0() {
    return mp || (mp = 1,
    du.exports = H0()),
    du.exports
}
var h = K0()
  , Pi = {}
  , pu = {
    exports: {}
}
  , vt = {}
  , hu = {
    exports: {}
}
  , mu = {};
var vp;
function G0() {
    return vp || (vp = 1,
    (function(n) {
        function r(z, I) {
            var U = z.length;
            z.push(I);
            e: for (; 0 < U; ) {
                var T = U - 1 >>> 1
                  , F = z[T];
                if (0 < l(F, I))
                    z[T] = I,
                    z[U] = F,
                    U = T;
                else
                    break e
            }
        }
        function s(z) {
            return z.length === 0 ? null : z[0]
        }
        function i(z) {
            if (z.length === 0)
                return null;
            var I = z[0]
              , U = z.pop();
            if (U !== I) {
                z[0] = U;
                e: for (var T = 0, F = z.length, Y = F >>> 1; T < Y; ) {
                    var J = 2 * (T + 1) - 1
                      , de = z[J]
                      , ve = J + 1
                      , te = z[ve];
                    if (0 > l(de, U))
                        ve < F && 0 > l(te, de) ? (z[T] = te,
                        z[ve] = U,
                        T = ve) : (z[T] = de,
                        z[J] = U,
                        T = J);
                    else if (ve < F && 0 > l(te, U))
                        z[T] = te,
                        z[ve] = U,
                        T = ve;
                    else
                        break e
                }
            }
            return I
        }
        function l(z, I) {
            var U = z.sortIndex - I.sortIndex;
            return U !== 0 ? U : z.id - I.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            n.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date
              , p = f.now();
            n.unstable_now = function() {
                return f.now() - p
            }
        }
        var v = []
          , g = []
          , x = 1
          , w = null
          , E = 3
          , b = !1
          , N = !1
          , S = !1
          , C = typeof setTimeout == "function" ? setTimeout : null
          , R = typeof clearTimeout == "function" ? clearTimeout : null
          , M = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function _(z) {
            for (var I = s(g); I !== null; ) {
                if (I.callback === null)
                    i(g);
                else if (I.startTime <= z)
                    i(g),
                    I.sortIndex = I.expirationTime,
                    r(v, I);
                else
                    break;
                I = s(g)
            }
        }
        function L(z) {
            if (S = !1,
            _(z),
            !N)
                if (s(v) !== null)
                    N = !0,
                    ne($);
                else {
                    var I = s(g);
                    I !== null && se(L, I.startTime - z)
                }
        }
        function $(z, I) {
            N = !1,
            S && (S = !1,
            R(Z),
            Z = -1),
            b = !0;
            var U = E;
            try {
                for (_(I),
                w = s(v); w !== null && (!(w.expirationTime > I) || z && !he()); ) {
                    var T = w.callback;
                    if (typeof T == "function") {
                        w.callback = null,
                        E = w.priorityLevel;
                        var F = T(w.expirationTime <= I);
                        I = n.unstable_now(),
                        typeof F == "function" ? w.callback = F : w === s(v) && i(v),
                        _(I)
                    } else
                        i(v);
                    w = s(v)
                }
                if (w !== null)
                    var Y = !0;
                else {
                    var J = s(g);
                    J !== null && se(L, J.startTime - I),
                    Y = !1
                }
                return Y
            } finally {
                w = null,
                E = U,
                b = !1
            }
        }
        var W = !1
          , G = null
          , Z = -1
          , ce = 5
          , le = -1;
        function he() {
            return !(n.unstable_now() - le < ce)
        }
        function X() {
            if (G !== null) {
                var z = n.unstable_now();
                le = z;
                var I = !0;
                try {
                    I = G(!0, z)
                } finally {
                    I ? me() : (W = !1,
                    G = null)
                }
            } else
                W = !1
        }
        var me;
        if (typeof M == "function")
            me = function() {
                M(X)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var q = new MessageChannel
              , ye = q.port2;
            q.port1.onmessage = X,
            me = function() {
                ye.postMessage(null)
            }
        } else
            me = function() {
                C(X, 0)
            }
            ;
        function ne(z) {
            G = z,
            W || (W = !0,
            me())
        }
        function se(z, I) {
            Z = C(function() {
                z(n.unstable_now())
            }, I)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(z) {
            z.callback = null
        }
        ,
        n.unstable_continueExecution = function() {
            N || b || (N = !0,
            ne($))
        }
        ,
        n.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ce = 0 < z ? Math.floor(1e3 / z) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return E
        }
        ,
        n.unstable_getFirstCallbackNode = function() {
            return s(v)
        }
        ,
        n.unstable_next = function(z) {
            switch (E) {
            case 1:
            case 2:
            case 3:
                var I = 3;
                break;
            default:
                I = E
            }
            var U = E;
            E = I;
            try {
                return z()
            } finally {
                E = U
            }
        }
        ,
        n.unstable_pauseExecution = function() {}
        ,
        n.unstable_requestPaint = function() {}
        ,
        n.unstable_runWithPriority = function(z, I) {
            switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
            }
            var U = E;
            E = z;
            try {
                return I()
            } finally {
                E = U
            }
        }
        ,
        n.unstable_scheduleCallback = function(z, I, U) {
            var T = n.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay,
            U = typeof U == "number" && 0 < U ? T + U : T) : U = T,
            z) {
            case 1:
                var F = -1;
                break;
            case 2:
                F = 250;
                break;
            case 5:
                F = 1073741823;
                break;
            case 4:
                F = 1e4;
                break;
            default:
                F = 5e3
            }
            return F = U + F,
            z = {
                id: x++,
                callback: I,
                priorityLevel: z,
                startTime: U,
                expirationTime: F,
                sortIndex: -1
            },
            U > T ? (z.sortIndex = U,
            r(g, z),
            s(v) === null && z === s(g) && (S ? (R(Z),
            Z = -1) : S = !0,
            se(L, U - T))) : (z.sortIndex = F,
            r(v, z),
            N || b || (N = !0,
            ne($))),
            z
        }
        ,
        n.unstable_shouldYield = he,
        n.unstable_wrapCallback = function(z) {
            var I = E;
            return function() {
                var U = E;
                E = I;
                try {
                    return z.apply(this, arguments)
                } finally {
                    E = U
                }
            }
        }
    }
    )(mu)),
    mu
}
var gp;
function Q0() {
    return gp || (gp = 1,
    hu.exports = G0()),
    hu.exports
}
var yp;
function q0() {
    if (yp)
        return vt;
    yp = 1;
    var n = Ju()
      , r = Q0();
    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++)
            t += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , l = {};
    function c(e, t) {
        f(e, t),
        f(e + "Capture", t)
    }
    function f(e, t) {
        for (l[e] = t,
        e = 0; e < t.length; e++)
            i.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , v = Object.prototype.hasOwnProperty
      , g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , x = {}
      , w = {};
    function E(e) {
        return v.call(w, e) ? !0 : v.call(x, e) ? !1 : g.test(e) ? w[e] = !0 : (x[e] = !0,
        !1)
    }
    function b(e, t, o, a) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return a ? !1 : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function N(e, t, o, a) {
        if (t === null || typeof t > "u" || b(e, t, o, a))
            return !0;
        if (a)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function S(e, t, o, a, u, d, y) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = a,
        this.attributeNamespace = u,
        this.mustUseProperty = o,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = d,
        this.removeEmptyString = y
    }
    var C = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        C[e] = new S(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        C[t] = new S(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        C[e] = new S(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        C[e] = new S(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        C[e] = new S(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        C[e] = new S(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        C[e] = new S(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        C[e] = new S(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        C[e] = new S(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var R = /[\-:]([a-z])/g;
    function M(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(R, M);
        C[t] = new S(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(R, M);
        C[t] = new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(R, M);
        C[t] = new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        C[e] = new S(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    C.xlinkHref = new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        C[e] = new S(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function _(e, t, o, a) {
        var u = C.hasOwnProperty(t) ? C[t] : null;
        (u !== null ? u.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (N(t, o, u, a) && (o = null),
        a || u === null ? E(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : u.mustUseProperty ? e[u.propertyName] = o === null ? u.type === 3 ? !1 : "" : o : (t = u.attributeName,
        a = u.attributeNamespace,
        o === null ? e.removeAttribute(t) : (u = u.type,
        o = u === 3 || u === 4 && o === !0 ? "" : "" + o,
        a ? e.setAttributeNS(a, t, o) : e.setAttribute(t, o))))
    }
    var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , $ = Symbol.for("react.element")
      , W = Symbol.for("react.portal")
      , G = Symbol.for("react.fragment")
      , Z = Symbol.for("react.strict_mode")
      , ce = Symbol.for("react.profiler")
      , le = Symbol.for("react.provider")
      , he = Symbol.for("react.context")
      , X = Symbol.for("react.forward_ref")
      , me = Symbol.for("react.suspense")
      , q = Symbol.for("react.suspense_list")
      , ye = Symbol.for("react.memo")
      , ne = Symbol.for("react.lazy")
      , se = Symbol.for("react.offscreen")
      , z = Symbol.iterator;
    function I(e) {
        return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var U = Object.assign, T;
    function F(e) {
        if (T === void 0)
            try {
                throw Error()
            } catch (o) {
                var t = o.stack.trim().match(/\n( *(at )?)/);
                T = t && t[1] || ""
            }
        return `
` + T + e
    }
    var Y = !1;
    function J(e, t) {
        if (!e || Y)
            return "";
        Y = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (D) {
                        var a = D
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (D) {
                        a = D
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (D) {
                    a = D
                }
                e()
            }
        } catch (D) {
            if (D && a && typeof D.stack == "string") {
                for (var u = D.stack.split(`
`), d = a.stack.split(`
`), y = u.length - 1, k = d.length - 1; 1 <= y && 0 <= k && u[y] !== d[k]; )
                    k--;
                for (; 1 <= y && 0 <= k; y--,
                k--)
                    if (u[y] !== d[k]) {
                        if (y !== 1 || k !== 1)
                            do
                                if (y--,
                                k--,
                                0 > k || u[y] !== d[k]) {
                                    var P = `
` + u[y].replace(" at new ", " at ");
                                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)),
                                    P
                                }
                            while (1 <= y && 0 <= k);
                        break
                    }
            }
        } finally {
            Y = !1,
            Error.prepareStackTrace = o
        }
        return (e = e ? e.displayName || e.name : "") ? F(e) : ""
    }
    function de(e) {
        switch (e.tag) {
        case 5:
            return F(e.type);
        case 16:
            return F("Lazy");
        case 13:
            return F("Suspense");
        case 19:
            return F("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = J(e.type, !1),
            e;
        case 11:
            return e = J(e.type.render, !1),
            e;
        case 1:
            return e = J(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function ve(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case G:
            return "Fragment";
        case W:
            return "Portal";
        case ce:
            return "Profiler";
        case Z:
            return "StrictMode";
        case me:
            return "Suspense";
        case q:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case he:
                return (e.displayName || "Context") + ".Consumer";
            case le:
                return (e._context.displayName || "Context") + ".Provider";
            case X:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case ye:
                return t = e.displayName || null,
                t !== null ? t : ve(e.type) || "Memo";
            case ne:
                t = e._payload,
                e = e._init;
                try {
                    return ve(e(t))
                } catch {}
            }
        return null
    }
    function te(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ve(t);
        case 8:
            return t === Z ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function be(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ee(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Ve(e) {
        var t = Ee(e) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var u = o.get
              , d = o.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(y) {
                    a = "" + y,
                    d.call(this, y)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(y) {
                    a = "" + y
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Pt(e) {
        e._valueTracker || (e._valueTracker = Ve(e))
    }
    function Tn(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var o = t.getValue()
          , a = "";
        return e && (a = Ee(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== o ? (t.setValue(e),
        !0) : !1
    }
    function Rt(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function uo(e, t) {
        var o = t.checked;
        return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? e._wrapperState.initialChecked
        })
    }
    function ps(e, t) {
        var o = t.defaultValue == null ? "" : t.defaultValue
          , a = t.checked != null ? t.checked : t.defaultChecked;
        o = be(t.value != null ? t.value : o),
        e._wrapperState = {
            initialChecked: a,
            initialValue: o,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function co(e, t) {
        t = t.checked,
        t != null && _(e, "checked", t, !1)
    }
    function fo(e, t) {
        co(e, t);
        var o = be(t.value)
          , a = t.type;
        if (o != null)
            a === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
        else if (a === "submit" || a === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? po(e, t.type, o) : t.hasOwnProperty("defaultValue") && po(e, t.type, be(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function Cr(e, t, o) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            o || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        o = e.name,
        o !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        o !== "" && (e.name = o)
    }
    function po(e, t, o) {
        (t !== "number" || Rt(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o))
    }
    var jn = Array.isArray;
    function Tt(e, t, o, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var u = 0; u < o.length; u++)
                t["$" + o[u]] = !0;
            for (o = 0; o < e.length; o++)
                u = t.hasOwnProperty("$" + e[o].value),
                e[o].selected !== u && (e[o].selected = u),
                u && a && (e[o].defaultSelected = !0)
        } else {
            for (o = "" + be(o),
            t = null,
            u = 0; u < e.length; u++) {
                if (e[u].value === o) {
                    e[u].selected = !0,
                    a && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Er(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(s(91));
        return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Xt(e, t) {
        var o = t.value;
        if (o == null) {
            if (o = t.children,
            t = t.defaultValue,
            o != null) {
                if (t != null)
                    throw Error(s(92));
                if (jn(o)) {
                    if (1 < o.length)
                        throw Error(s(93));
                    o = o[0]
                }
                t = o
            }
            t == null && (t = ""),
            o = t
        }
        e._wrapperState = {
            initialValue: be(o)
        }
    }
    function hs(e, t) {
        var o = be(t.value)
          , a = be(t.defaultValue);
        o != null && (o = "" + o,
        o !== e.value && (e.value = o),
        t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
        a != null && (e.defaultValue = "" + a)
    }
    function ms(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function rt(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Zt(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? rt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var kr, vs = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, a, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, o, a, u)
            })
        }
        : e
    }
    )(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kr.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Jt(e, t) {
        if (t) {
            var o = e.firstChild;
            if (o && o === e.lastChild && o.nodeType === 3) {
                o.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var or = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , gs = ["Webkit", "ms", "Moz", "O"];
    Object.keys(or).forEach(function(e) {
        gs.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            or[t] = or[e]
        })
    });
    function Nr(e, t, o) {
        return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || or.hasOwnProperty(e) && or[e] ? ("" + t).trim() : t + "px"
    }
    function gn(e, t) {
        e = e.style;
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                var a = o.indexOf("--") === 0
                  , u = Nr(o, t[o], a);
                o === "float" && (o = "cssFloat"),
                a ? e.setProperty(o, u) : e[o] = u
            }
    }
    var ys = U({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function en(e, t) {
        if (t) {
            if (ys[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(s(62))
        }
    }
    function ho(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var mo = null;
    function Pr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Rr = null
      , Mn = null
      , tn = null;
    function Lt(e) {
        if (e = Io(e)) {
            if (typeof Rr != "function")
                throw Error(s(280));
            var t = e.stateNode;
            t && (t = Us(t),
            Rr(e.stateNode, e.type, t))
        }
    }
    function xs(e) {
        Mn ? tn ? tn.push(e) : tn = [e] : Mn = e
    }
    function xe() {
        if (Mn) {
            var e = Mn
              , t = tn;
            if (tn = Mn = null,
            Lt(e),
            t)
                for (e = 0; e < t.length; e++)
                    Lt(t[e])
        }
    }
    function Ne(e, t) {
        return e(t)
    }
    function je() {}
    var ot = !1;
    function ut(e, t, o) {
        if (ot)
            return e(t, o);
        ot = !0;
        try {
            return Ne(e, t, o)
        } finally {
            ot = !1,
            (Mn !== null || tn !== null) && (je(),
            xe())
        }
    }
    function ct(e, t) {
        var o = e.stateNode;
        if (o === null)
            return null;
        var a = Us(o);
        if (a === null)
            return null;
        o = a[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (o && typeof o != "function")
            throw Error(s(231, t, typeof o));
        return o
    }
    var Ft = !1;
    if (p)
        try {
            var Ye = {};
            Object.defineProperty(Ye, "passive", {
                get: function() {
                    Ft = !0
                }
            }),
            window.addEventListener("test", Ye, Ye),
            window.removeEventListener("test", Ye, Ye)
        } catch {
            Ft = !1
        }
    function nn(e, t, o, a, u, d, y, k, P) {
        var D = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(o, D)
        } catch (V) {
            this.onError(V)
        }
    }
    var vo = !1
      , ws = null
      , bs = !1
      , ja = null
      , Yg = {
        onError: function(e) {
            vo = !0,
            ws = e
        }
    };
    function Xg(e, t, o, a, u, d, y, k, P) {
        vo = !1,
        ws = null,
        nn.apply(Yg, arguments)
    }
    function Zg(e, t, o, a, u, d, y, k, P) {
        if (Xg.apply(this, arguments),
        vo) {
            if (vo) {
                var D = ws;
                vo = !1,
                ws = null
            } else
                throw Error(s(198));
            bs || (bs = !0,
            ja = D)
        }
    }
    function sr(e) {
        var t = e
          , o = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (o = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? o : null
    }
    function Oc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Ic(e) {
        if (sr(e) !== e)
            throw Error(s(188))
    }
    function Jg(e) {
        var t = e.alternate;
        if (!t) {
            if (t = sr(e),
            t === null)
                throw Error(s(188));
            return t !== e ? null : e
        }
        for (var o = e, a = t; ; ) {
            var u = o.return;
            if (u === null)
                break;
            var d = u.alternate;
            if (d === null) {
                if (a = u.return,
                a !== null) {
                    o = a;
                    continue
                }
                break
            }
            if (u.child === d.child) {
                for (d = u.child; d; ) {
                    if (d === o)
                        return Ic(u),
                        e;
                    if (d === a)
                        return Ic(u),
                        t;
                    d = d.sibling
                }
                throw Error(s(188))
            }
            if (o.return !== a.return)
                o = u,
                a = d;
            else {
                for (var y = !1, k = u.child; k; ) {
                    if (k === o) {
                        y = !0,
                        o = u,
                        a = d;
                        break
                    }
                    if (k === a) {
                        y = !0,
                        a = u,
                        o = d;
                        break
                    }
                    k = k.sibling
                }
                if (!y) {
                    for (k = d.child; k; ) {
                        if (k === o) {
                            y = !0,
                            o = d,
                            a = u;
                            break
                        }
                        if (k === a) {
                            y = !0,
                            a = d,
                            o = u;
                            break
                        }
                        k = k.sibling
                    }
                    if (!y)
                        throw Error(s(189))
                }
            }
            if (o.alternate !== a)
                throw Error(s(190))
        }
        if (o.tag !== 3)
            throw Error(s(188));
        return o.stateNode.current === o ? e : t
    }
    function Dc(e) {
        return e = Jg(e),
        e !== null ? Lc(e) : null
    }
    function Lc(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Lc(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Fc = r.unstable_scheduleCallback
      , zc = r.unstable_cancelCallback
      , ey = r.unstable_shouldYield
      , ty = r.unstable_requestPaint
      , Be = r.unstable_now
      , ny = r.unstable_getCurrentPriorityLevel
      , Ma = r.unstable_ImmediatePriority
      , $c = r.unstable_UserBlockingPriority
      , Ss = r.unstable_NormalPriority
      , ry = r.unstable_LowPriority
      , Bc = r.unstable_IdlePriority
      , Cs = null
      , rn = null;
    function oy(e) {
        if (rn && typeof rn.onCommitFiberRoot == "function")
            try {
                rn.onCommitFiberRoot(Cs, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var zt = Math.clz32 ? Math.clz32 : ay
      , sy = Math.log
      , iy = Math.LN2;
    function ay(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (sy(e) / iy | 0) | 0
    }
    var Es = 64
      , ks = 4194304;
    function go(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function Ns(e, t) {
        var o = e.pendingLanes;
        if (o === 0)
            return 0;
        var a = 0
          , u = e.suspendedLanes
          , d = e.pingedLanes
          , y = o & 268435455;
        if (y !== 0) {
            var k = y & ~u;
            k !== 0 ? a = go(k) : (d &= y,
            d !== 0 && (a = go(d)))
        } else
            y = o & ~u,
            y !== 0 ? a = go(y) : d !== 0 && (a = go(d));
        if (a === 0)
            return 0;
        if (t !== 0 && t !== a && (t & u) === 0 && (u = a & -a,
        d = t & -t,
        u >= d || u === 16 && (d & 4194240) !== 0))
            return t;
        if ((a & 4) !== 0 && (a |= o & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= a; 0 < t; )
                o = 31 - zt(t),
                u = 1 << o,
                a |= e[o],
                t &= ~u;
        return a
    }
    function ly(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function uy(e, t) {
        for (var o = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
            var y = 31 - zt(d)
              , k = 1 << y
              , P = u[y];
            P === -1 ? ((k & o) === 0 || (k & a) !== 0) && (u[y] = ly(k, t)) : P <= t && (e.expiredLanes |= k),
            d &= ~k
        }
    }
    function _a(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Uc() {
        var e = Es;
        return Es <<= 1,
        (Es & 4194240) === 0 && (Es = 64),
        e
    }
    function Aa(e) {
        for (var t = [], o = 0; 31 > o; o++)
            t.push(e);
        return t
    }
    function yo(e, t, o) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - zt(t),
        e[t] = o
    }
    function cy(e, t) {
        var o = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var a = e.eventTimes;
        for (e = e.expirationTimes; 0 < o; ) {
            var u = 31 - zt(o)
              , d = 1 << u;
            t[u] = 0,
            a[u] = -1,
            e[u] = -1,
            o &= ~d
        }
    }
    function Oa(e, t) {
        var o = e.entangledLanes |= t;
        for (e = e.entanglements; o; ) {
            var a = 31 - zt(o)
              , u = 1 << a;
            u & t | e[a] & t && (e[a] |= t),
            o &= ~u
        }
    }
    var Re = 0;
    function Vc(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Wc, Ia, Hc, Kc, Gc, Da = !1, Ps = [], _n = null, An = null, On = null, xo = new Map, wo = new Map, In = [], dy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Qc(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            _n = null;
            break;
        case "dragenter":
        case "dragleave":
            An = null;
            break;
        case "mouseover":
        case "mouseout":
            On = null;
            break;
        case "pointerover":
        case "pointerout":
            xo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            wo.delete(t.pointerId)
        }
    }
    function bo(e, t, o, a, u, d) {
        return e === null || e.nativeEvent !== d ? (e = {
            blockedOn: t,
            domEventName: o,
            eventSystemFlags: a,
            nativeEvent: d,
            targetContainers: [u]
        },
        t !== null && (t = Io(t),
        t !== null && Ia(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e)
    }
    function fy(e, t, o, a, u) {
        switch (t) {
        case "focusin":
            return _n = bo(_n, e, t, o, a, u),
            !0;
        case "dragenter":
            return An = bo(An, e, t, o, a, u),
            !0;
        case "mouseover":
            return On = bo(On, e, t, o, a, u),
            !0;
        case "pointerover":
            var d = u.pointerId;
            return xo.set(d, bo(xo.get(d) || null, e, t, o, a, u)),
            !0;
        case "gotpointercapture":
            return d = u.pointerId,
            wo.set(d, bo(wo.get(d) || null, e, t, o, a, u)),
            !0
        }
        return !1
    }
    function qc(e) {
        var t = ir(e.target);
        if (t !== null) {
            var o = sr(t);
            if (o !== null) {
                if (t = o.tag,
                t === 13) {
                    if (t = Oc(o),
                    t !== null) {
                        e.blockedOn = t,
                        Gc(e.priority, function() {
                            Hc(o)
                        });
                        return
                    }
                } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Rs(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var o = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (o === null) {
                o = e.nativeEvent;
                var a = new o.constructor(o.type,o);
                mo = a,
                o.target.dispatchEvent(a),
                mo = null
            } else
                return t = Io(o),
                t !== null && Ia(t),
                e.blockedOn = o,
                !1;
            t.shift()
        }
        return !0
    }
    function Yc(e, t, o) {
        Rs(e) && o.delete(t)
    }
    function py() {
        Da = !1,
        _n !== null && Rs(_n) && (_n = null),
        An !== null && Rs(An) && (An = null),
        On !== null && Rs(On) && (On = null),
        xo.forEach(Yc),
        wo.forEach(Yc)
    }
    function So(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Da || (Da = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, py)))
    }
    function Co(e) {
        function t(u) {
            return So(u, e)
        }
        if (0 < Ps.length) {
            So(Ps[0], e);
            for (var o = 1; o < Ps.length; o++) {
                var a = Ps[o];
                a.blockedOn === e && (a.blockedOn = null)
            }
        }
        for (_n !== null && So(_n, e),
        An !== null && So(An, e),
        On !== null && So(On, e),
        xo.forEach(t),
        wo.forEach(t),
        o = 0; o < In.length; o++)
            a = In[o],
            a.blockedOn === e && (a.blockedOn = null);
        for (; 0 < In.length && (o = In[0],
        o.blockedOn === null); )
            qc(o),
            o.blockedOn === null && In.shift()
    }
    var Tr = L.ReactCurrentBatchConfig
      , Ts = !0;
    function hy(e, t, o, a) {
        var u = Re
          , d = Tr.transition;
        Tr.transition = null;
        try {
            Re = 1,
            La(e, t, o, a)
        } finally {
            Re = u,
            Tr.transition = d
        }
    }
    function my(e, t, o, a) {
        var u = Re
          , d = Tr.transition;
        Tr.transition = null;
        try {
            Re = 4,
            La(e, t, o, a)
        } finally {
            Re = u,
            Tr.transition = d
        }
    }
    function La(e, t, o, a) {
        if (Ts) {
            var u = Fa(e, t, o, a);
            if (u === null)
                tl(e, t, a, js, o),
                Qc(e, a);
            else if (fy(u, e, t, o, a))
                a.stopPropagation();
            else if (Qc(e, a),
            t & 4 && -1 < dy.indexOf(e)) {
                for (; u !== null; ) {
                    var d = Io(u);
                    if (d !== null && Wc(d),
                    d = Fa(e, t, o, a),
                    d === null && tl(e, t, a, js, o),
                    d === u)
                        break;
                    u = d
                }
                u !== null && a.stopPropagation()
            } else
                tl(e, t, a, null, o)
        }
    }
    var js = null;
    function Fa(e, t, o, a) {
        if (js = null,
        e = Pr(a),
        e = ir(e),
        e !== null)
            if (t = sr(e),
            t === null)
                e = null;
            else if (o = t.tag,
            o === 13) {
                if (e = Oc(t),
                e !== null)
                    return e;
                e = null
            } else if (o === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return js = e,
        null
    }
    function Xc(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (ny()) {
            case Ma:
                return 1;
            case $c:
                return 4;
            case Ss:
            case ry:
                return 16;
            case Bc:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Dn = null
      , za = null
      , Ms = null;
    function Zc() {
        if (Ms)
            return Ms;
        var e, t = za, o = t.length, a, u = "value"in Dn ? Dn.value : Dn.textContent, d = u.length;
        for (e = 0; e < o && t[e] === u[e]; e++)
            ;
        var y = o - e;
        for (a = 1; a <= y && t[o - a] === u[d - a]; a++)
            ;
        return Ms = u.slice(e, 1 < a ? 1 - a : void 0)
    }
    function _s(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function As() {
        return !0
    }
    function Jc() {
        return !1
    }
    function xt(e) {
        function t(o, a, u, d, y) {
            this._reactName = o,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = d,
            this.target = y,
            this.currentTarget = null;
            for (var k in e)
                e.hasOwnProperty(k) && (o = e[k],
                this[k] = o ? o(d) : d[k]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? As : Jc,
            this.isPropagationStopped = Jc,
            this
        }
        return U(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = As)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = As)
            },
            persist: function() {},
            isPersistent: As
        }),
        t
    }
    var jr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, $a = xt(jr), Eo = U({}, jr, {
        view: 0,
        detail: 0
    }), vy = xt(Eo), Ba, Ua, ko, Os = U({}, Eo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wa,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== ko && (ko && e.type === "mousemove" ? (Ba = e.screenX - ko.screenX,
            Ua = e.screenY - ko.screenY) : Ua = Ba = 0,
            ko = e),
            Ba)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Ua
        }
    }), ed = xt(Os), gy = U({}, Os, {
        dataTransfer: 0
    }), yy = xt(gy), xy = U({}, Eo, {
        relatedTarget: 0
    }), Va = xt(xy), wy = U({}, jr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), by = xt(wy), Sy = U({}, jr, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Cy = xt(Sy), Ey = U({}, jr, {
        data: 0
    }), td = xt(Ey), ky = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Ny = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Py = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ry(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Py[e]) ? !!t[e] : !1
    }
    function Wa() {
        return Ry
    }
    var Ty = U({}, Eo, {
        key: function(e) {
            if (e.key) {
                var t = ky[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = _s(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ny[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wa,
        charCode: function(e) {
            return e.type === "keypress" ? _s(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _s(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , jy = xt(Ty)
      , My = U({}, Os, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , nd = xt(My)
      , _y = U({}, Eo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wa
    })
      , Ay = xt(_y)
      , Oy = U({}, jr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Iy = xt(Oy)
      , Dy = U({}, Os, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Ly = xt(Dy)
      , Fy = [9, 13, 27, 32]
      , Ha = p && "CompositionEvent"in window
      , No = null;
    p && "documentMode"in document && (No = document.documentMode);
    var zy = p && "TextEvent"in window && !No
      , rd = p && (!Ha || No && 8 < No && 11 >= No)
      , od = " "
      , sd = !1;
    function id(e, t) {
        switch (e) {
        case "keyup":
            return Fy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function ad(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Mr = !1;
    function $y(e, t) {
        switch (e) {
        case "compositionend":
            return ad(t);
        case "keypress":
            return t.which !== 32 ? null : (sd = !0,
            od);
        case "textInput":
            return e = t.data,
            e === od && sd ? null : e;
        default:
            return null
        }
    }
    function By(e, t) {
        if (Mr)
            return e === "compositionend" || !Ha && id(e, t) ? (e = Zc(),
            Ms = za = Dn = null,
            Mr = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return rd && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Uy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function ld(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Uy[e.type] : t === "textarea"
    }
    function ud(e, t, o, a) {
        xs(a),
        t = zs(t, "onChange"),
        0 < t.length && (o = new $a("onChange","change",null,o,a),
        e.push({
            event: o,
            listeners: t
        }))
    }
    var Po = null
      , Ro = null;
    function Vy(e) {
        Pd(e, 0)
    }
    function Is(e) {
        var t = Dr(e);
        if (Tn(t))
            return e
    }
    function Wy(e, t) {
        if (e === "change")
            return t
    }
    var cd = !1;
    if (p) {
        var Ka;
        if (p) {
            var Ga = "oninput"in document;
            if (!Ga) {
                var dd = document.createElement("div");
                dd.setAttribute("oninput", "return;"),
                Ga = typeof dd.oninput == "function"
            }
            Ka = Ga
        } else
            Ka = !1;
        cd = Ka && (!document.documentMode || 9 < document.documentMode)
    }
    function fd() {
        Po && (Po.detachEvent("onpropertychange", pd),
        Ro = Po = null)
    }
    function pd(e) {
        if (e.propertyName === "value" && Is(Ro)) {
            var t = [];
            ud(t, Ro, e, Pr(e)),
            ut(Vy, t)
        }
    }
    function Hy(e, t, o) {
        e === "focusin" ? (fd(),
        Po = t,
        Ro = o,
        Po.attachEvent("onpropertychange", pd)) : e === "focusout" && fd()
    }
    function Ky(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Is(Ro)
    }
    function Gy(e, t) {
        if (e === "click")
            return Is(t)
    }
    function Qy(e, t) {
        if (e === "input" || e === "change")
            return Is(t)
    }
    function qy(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var $t = typeof Object.is == "function" ? Object.is : qy;
    function To(e, t) {
        if ($t(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var o = Object.keys(e)
          , a = Object.keys(t);
        if (o.length !== a.length)
            return !1;
        for (a = 0; a < o.length; a++) {
            var u = o[a];
            if (!v.call(t, u) || !$t(e[u], t[u]))
                return !1
        }
        return !0
    }
    function hd(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function md(e, t) {
        var o = hd(e);
        e = 0;
        for (var a; o; ) {
            if (o.nodeType === 3) {
                if (a = e + o.textContent.length,
                e <= t && a >= t)
                    return {
                        node: o,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = hd(o)
        }
    }
    function vd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function gd() {
        for (var e = window, t = Rt(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var o = typeof t.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                e = t.contentWindow;
            else
                break;
            t = Rt(e.document)
        }
        return t
    }
    function Qa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Yy(e) {
        var t = gd()
          , o = e.focusedElem
          , a = e.selectionRange;
        if (t !== o && o && o.ownerDocument && vd(o.ownerDocument.documentElement, o)) {
            if (a !== null && Qa(o)) {
                if (t = a.start,
                e = a.end,
                e === void 0 && (e = t),
                "selectionStart"in o)
                    o.selectionStart = t,
                    o.selectionEnd = Math.min(e, o.value.length);
                else if (e = (t = o.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var u = o.textContent.length
                      , d = Math.min(a.start, u);
                    a = a.end === void 0 ? d : Math.min(a.end, u),
                    !e.extend && d > a && (u = a,
                    a = d,
                    d = u),
                    u = md(o, d);
                    var y = md(o, a);
                    u && y && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(),
                    t.setStart(u.node, u.offset),
                    e.removeAllRanges(),
                    d > a ? (e.addRange(t),
                    e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = o; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < t.length; o++)
                e = t[o],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Xy = p && "documentMode"in document && 11 >= document.documentMode
      , _r = null
      , qa = null
      , jo = null
      , Ya = !1;
    function yd(e, t, o) {
        var a = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Ya || _r == null || _r !== Rt(a) || (a = _r,
        "selectionStart"in a && Qa(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        jo && To(jo, a) || (jo = a,
        a = zs(qa, "onSelect"),
        0 < a.length && (t = new $a("onSelect","select",null,t,o),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = _r)))
    }
    function Ds(e, t) {
        var o = {};
        return o[e.toLowerCase()] = t.toLowerCase(),
        o["Webkit" + e] = "webkit" + t,
        o["Moz" + e] = "moz" + t,
        o
    }
    var Ar = {
        animationend: Ds("Animation", "AnimationEnd"),
        animationiteration: Ds("Animation", "AnimationIteration"),
        animationstart: Ds("Animation", "AnimationStart"),
        transitionend: Ds("Transition", "TransitionEnd")
    }
      , Xa = {}
      , xd = {};
    p && (xd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
    "TransitionEvent"in window || delete Ar.transitionend.transition);
    function Ls(e) {
        if (Xa[e])
            return Xa[e];
        if (!Ar[e])
            return e;
        var t = Ar[e], o;
        for (o in t)
            if (t.hasOwnProperty(o) && o in xd)
                return Xa[e] = t[o];
        return e
    }
    var wd = Ls("animationend")
      , bd = Ls("animationiteration")
      , Sd = Ls("animationstart")
      , Cd = Ls("transitionend")
      , Ed = new Map
      , kd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Ln(e, t) {
        Ed.set(e, t),
        c(t, [e])
    }
    for (var Za = 0; Za < kd.length; Za++) {
        var Ja = kd[Za]
          , Zy = Ja.toLowerCase()
          , Jy = Ja[0].toUpperCase() + Ja.slice(1);
        Ln(Zy, "on" + Jy)
    }
    Ln(wd, "onAnimationEnd"),
    Ln(bd, "onAnimationIteration"),
    Ln(Sd, "onAnimationStart"),
    Ln("dblclick", "onDoubleClick"),
    Ln("focusin", "onFocus"),
    Ln("focusout", "onBlur"),
    Ln(Cd, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , e0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
    function Nd(e, t, o) {
        var a = e.type || "unknown-event";
        e.currentTarget = o,
        Zg(a, t, void 0, e),
        e.currentTarget = null
    }
    function Pd(e, t) {
        t = (t & 4) !== 0;
        for (var o = 0; o < e.length; o++) {
            var a = e[o]
              , u = a.event;
            a = a.listeners;
            e: {
                var d = void 0;
                if (t)
                    for (var y = a.length - 1; 0 <= y; y--) {
                        var k = a[y]
                          , P = k.instance
                          , D = k.currentTarget;
                        if (k = k.listener,
                        P !== d && u.isPropagationStopped())
                            break e;
                        Nd(u, k, D),
                        d = P
                    }
                else
                    for (y = 0; y < a.length; y++) {
                        if (k = a[y],
                        P = k.instance,
                        D = k.currentTarget,
                        k = k.listener,
                        P !== d && u.isPropagationStopped())
                            break e;
                        Nd(u, k, D),
                        d = P
                    }
            }
        }
        if (bs)
            throw e = ja,
            bs = !1,
            ja = null,
            e
    }
    function _e(e, t) {
        var o = t[al];
        o === void 0 && (o = t[al] = new Set);
        var a = e + "__bubble";
        o.has(a) || (Rd(t, e, 2, !1),
        o.add(a))
    }
    function el(e, t, o) {
        var a = 0;
        t && (a |= 4),
        Rd(o, e, a, t)
    }
    var Fs = "_reactListening" + Math.random().toString(36).slice(2);
    function _o(e) {
        if (!e[Fs]) {
            e[Fs] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (e0.has(o) || el(o, !1, e),
                el(o, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Fs] || (t[Fs] = !0,
            el("selectionchange", !1, t))
        }
    }
    function Rd(e, t, o, a) {
        switch (Xc(t)) {
        case 1:
            var u = hy;
            break;
        case 4:
            u = my;
            break;
        default:
            u = La
        }
        o = u.bind(null, t, o, e),
        u = void 0,
        !Ft || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        a ? u !== void 0 ? e.addEventListener(t, o, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, o, !0) : u !== void 0 ? e.addEventListener(t, o, {
            passive: u
        }) : e.addEventListener(t, o, !1)
    }
    function tl(e, t, o, a, u) {
        var d = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var y = a.tag;
                if (y === 3 || y === 4) {
                    var k = a.stateNode.containerInfo;
                    if (k === u || k.nodeType === 8 && k.parentNode === u)
                        break;
                    if (y === 4)
                        for (y = a.return; y !== null; ) {
                            var P = y.tag;
                            if ((P === 3 || P === 4) && (P = y.stateNode.containerInfo,
                            P === u || P.nodeType === 8 && P.parentNode === u))
                                return;
                            y = y.return
                        }
                    for (; k !== null; ) {
                        if (y = ir(k),
                        y === null)
                            return;
                        if (P = y.tag,
                        P === 5 || P === 6) {
                            a = d = y;
                            continue e
                        }
                        k = k.parentNode
                    }
                }
                a = a.return
            }
        ut(function() {
            var D = d
              , V = Pr(o)
              , K = [];
            e: {
                var B = Ed.get(e);
                if (B !== void 0) {
                    var ee = $a
                      , oe = e;
                    switch (e) {
                    case "keypress":
                        if (_s(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        ee = jy;
                        break;
                    case "focusin":
                        oe = "focus",
                        ee = Va;
                        break;
                    case "focusout":
                        oe = "blur",
                        ee = Va;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        ee = Va;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        ee = ed;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        ee = yy;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        ee = Ay;
                        break;
                    case wd:
                    case bd:
                    case Sd:
                        ee = by;
                        break;
                    case Cd:
                        ee = Iy;
                        break;
                    case "scroll":
                        ee = vy;
                        break;
                    case "wheel":
                        ee = Ly;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        ee = Cy;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        ee = nd
                    }
                    var ie = (t & 4) !== 0
                      , Ue = !ie && e === "scroll"
                      , A = ie ? B !== null ? B + "Capture" : null : B;
                    ie = [];
                    for (var j = D, O; j !== null; ) {
                        O = j;
                        var Q = O.stateNode;
                        if (O.tag === 5 && Q !== null && (O = Q,
                        A !== null && (Q = ct(j, A),
                        Q != null && ie.push(Ao(j, Q, O)))),
                        Ue)
                            break;
                        j = j.return
                    }
                    0 < ie.length && (B = new ee(B,oe,null,o,V),
                    K.push({
                        event: B,
                        listeners: ie
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (B = e === "mouseover" || e === "pointerover",
                    ee = e === "mouseout" || e === "pointerout",
                    B && o !== mo && (oe = o.relatedTarget || o.fromElement) && (ir(oe) || oe[yn]))
                        break e;
                    if ((ee || B) && (B = V.window === V ? V : (B = V.ownerDocument) ? B.defaultView || B.parentWindow : window,
                    ee ? (oe = o.relatedTarget || o.toElement,
                    ee = D,
                    oe = oe ? ir(oe) : null,
                    oe !== null && (Ue = sr(oe),
                    oe !== Ue || oe.tag !== 5 && oe.tag !== 6) && (oe = null)) : (ee = null,
                    oe = D),
                    ee !== oe)) {
                        if (ie = ed,
                        Q = "onMouseLeave",
                        A = "onMouseEnter",
                        j = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ie = nd,
                        Q = "onPointerLeave",
                        A = "onPointerEnter",
                        j = "pointer"),
                        Ue = ee == null ? B : Dr(ee),
                        O = oe == null ? B : Dr(oe),
                        B = new ie(Q,j + "leave",ee,o,V),
                        B.target = Ue,
                        B.relatedTarget = O,
                        Q = null,
                        ir(V) === D && (ie = new ie(A,j + "enter",oe,o,V),
                        ie.target = O,
                        ie.relatedTarget = Ue,
                        Q = ie),
                        Ue = Q,
                        ee && oe)
                            t: {
                                for (ie = ee,
                                A = oe,
                                j = 0,
                                O = ie; O; O = Or(O))
                                    j++;
                                for (O = 0,
                                Q = A; Q; Q = Or(Q))
                                    O++;
                                for (; 0 < j - O; )
                                    ie = Or(ie),
                                    j--;
                                for (; 0 < O - j; )
                                    A = Or(A),
                                    O--;
                                for (; j--; ) {
                                    if (ie === A || A !== null && ie === A.alternate)
                                        break t;
                                    ie = Or(ie),
                                    A = Or(A)
                                }
                                ie = null
                            }
                        else
                            ie = null;
                        ee !== null && Td(K, B, ee, ie, !1),
                        oe !== null && Ue !== null && Td(K, Ue, oe, ie, !0)
                    }
                }
                e: {
                    if (B = D ? Dr(D) : window,
                    ee = B.nodeName && B.nodeName.toLowerCase(),
                    ee === "select" || ee === "input" && B.type === "file")
                        var ae = Wy;
                    else if (ld(B))
                        if (cd)
                            ae = Qy;
                        else {
                            ae = Ky;
                            var fe = Hy
                        }
                    else
                        (ee = B.nodeName) && ee.toLowerCase() === "input" && (B.type === "checkbox" || B.type === "radio") && (ae = Gy);
                    if (ae && (ae = ae(e, D))) {
                        ud(K, ae, o, V);
                        break e
                    }
                    fe && fe(e, B, D),
                    e === "focusout" && (fe = B._wrapperState) && fe.controlled && B.type === "number" && po(B, "number", B.value)
                }
                switch (fe = D ? Dr(D) : window,
                e) {
                case "focusin":
                    (ld(fe) || fe.contentEditable === "true") && (_r = fe,
                    qa = D,
                    jo = null);
                    break;
                case "focusout":
                    jo = qa = _r = null;
                    break;
                case "mousedown":
                    Ya = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ya = !1,
                    yd(K, o, V);
                    break;
                case "selectionchange":
                    if (Xy)
                        break;
                case "keydown":
                case "keyup":
                    yd(K, o, V)
                }
                var pe;
                if (Ha)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    Mr ? id(e, o) && (ge = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (ge = "onCompositionStart");
                ge && (rd && o.locale !== "ko" && (Mr || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Mr && (pe = Zc()) : (Dn = V,
                za = "value"in Dn ? Dn.value : Dn.textContent,
                Mr = !0)),
                fe = zs(D, ge),
                0 < fe.length && (ge = new td(ge,e,null,o,V),
                K.push({
                    event: ge,
                    listeners: fe
                }),
                pe ? ge.data = pe : (pe = ad(o),
                pe !== null && (ge.data = pe)))),
                (pe = zy ? $y(e, o) : By(e, o)) && (D = zs(D, "onBeforeInput"),
                0 < D.length && (V = new td("onBeforeInput","beforeinput",null,o,V),
                K.push({
                    event: V,
                    listeners: D
                }),
                V.data = pe))
            }
            Pd(K, t)
        })
    }
    function Ao(e, t, o) {
        return {
            instance: e,
            listener: t,
            currentTarget: o
        }
    }
    function zs(e, t) {
        for (var o = t + "Capture", a = []; e !== null; ) {
            var u = e
              , d = u.stateNode;
            u.tag === 5 && d !== null && (u = d,
            d = ct(e, o),
            d != null && a.unshift(Ao(e, d, u)),
            d = ct(e, t),
            d != null && a.push(Ao(e, d, u))),
            e = e.return
        }
        return a
    }
    function Or(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Td(e, t, o, a, u) {
        for (var d = t._reactName, y = []; o !== null && o !== a; ) {
            var k = o
              , P = k.alternate
              , D = k.stateNode;
            if (P !== null && P === a)
                break;
            k.tag === 5 && D !== null && (k = D,
            u ? (P = ct(o, d),
            P != null && y.unshift(Ao(o, P, k))) : u || (P = ct(o, d),
            P != null && y.push(Ao(o, P, k)))),
            o = o.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var t0 = /\r\n?/g
      , n0 = /\u0000|\uFFFD/g;
    function jd(e) {
        return (typeof e == "string" ? e : "" + e).replace(t0, `
`).replace(n0, "")
    }
    function $s(e, t, o) {
        if (t = jd(t),
        jd(e) !== t && o)
            throw Error(s(425))
    }
    function Bs() {}
    var nl = null
      , rl = null;
    function ol(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var sl = typeof setTimeout == "function" ? setTimeout : void 0
      , r0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Md = typeof Promise == "function" ? Promise : void 0
      , o0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Md < "u" ? function(e) {
        return Md.resolve(null).then(e).catch(s0)
    }
    : sl;
    function s0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function il(e, t) {
        var o = t
          , a = 0;
        do {
            var u = o.nextSibling;
            if (e.removeChild(o),
            u && u.nodeType === 8)
                if (o = u.data,
                o === "/$") {
                    if (a === 0) {
                        e.removeChild(u),
                        Co(t);
                        return
                    }
                    a--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || a++;
            o = u
        } while (o);
        Co(t)
    }
    function Fn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function _d(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var o = e.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    o === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Ir = Math.random().toString(36).slice(2)
      , on = "__reactFiber$" + Ir
      , Oo = "__reactProps$" + Ir
      , yn = "__reactContainer$" + Ir
      , al = "__reactEvents$" + Ir
      , i0 = "__reactListeners$" + Ir
      , a0 = "__reactHandles$" + Ir;
    function ir(e) {
        var t = e[on];
        if (t)
            return t;
        for (var o = e.parentNode; o; ) {
            if (t = o[yn] || o[on]) {
                if (o = t.alternate,
                t.child !== null || o !== null && o.child !== null)
                    for (e = _d(e); e !== null; ) {
                        if (o = e[on])
                            return o;
                        e = _d(e)
                    }
                return t
            }
            e = o,
            o = e.parentNode
        }
        return null
    }
    function Io(e) {
        return e = e[on] || e[yn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function Dr(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(s(33))
    }
    function Us(e) {
        return e[Oo] || null
    }
    var ll = []
      , Lr = -1;
    function zn(e) {
        return {
            current: e
        }
    }
    function Ae(e) {
        0 > Lr || (e.current = ll[Lr],
        ll[Lr] = null,
        Lr--)
    }
    function Me(e, t) {
        Lr++,
        ll[Lr] = e.current,
        e.current = t
    }
    var $n = {}
      , Je = zn($n)
      , dt = zn(!1)
      , ar = $n;
    function Fr(e, t) {
        var o = e.type.contextTypes;
        if (!o)
            return $n;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
            return a.__reactInternalMemoizedMaskedChildContext;
        var u = {}, d;
        for (d in o)
            u[d] = t[d];
        return a && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = u),
        u
    }
    function ft(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Vs() {
        Ae(dt),
        Ae(Je)
    }
    function Ad(e, t, o) {
        if (Je.current !== $n)
            throw Error(s(168));
        Me(Je, t),
        Me(dt, o)
    }
    function Od(e, t, o) {
        var a = e.stateNode;
        if (t = t.childContextTypes,
        typeof a.getChildContext != "function")
            return o;
        a = a.getChildContext();
        for (var u in a)
            if (!(u in t))
                throw Error(s(108, te(e) || "Unknown", u));
        return U({}, o, a)
    }
    function Ws(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $n,
        ar = Je.current,
        Me(Je, e),
        Me(dt, dt.current),
        !0
    }
    function Id(e, t, o) {
        var a = e.stateNode;
        if (!a)
            throw Error(s(169));
        o ? (e = Od(e, t, ar),
        a.__reactInternalMemoizedMergedChildContext = e,
        Ae(dt),
        Ae(Je),
        Me(Je, e)) : Ae(dt),
        Me(dt, o)
    }
    var xn = null
      , Hs = !1
      , ul = !1;
    function Dd(e) {
        xn === null ? xn = [e] : xn.push(e)
    }
    function l0(e) {
        Hs = !0,
        Dd(e)
    }
    function Bn() {
        if (!ul && xn !== null) {
            ul = !0;
            var e = 0
              , t = Re;
            try {
                var o = xn;
                for (Re = 1; e < o.length; e++) {
                    var a = o[e];
                    do
                        a = a(!0);
                    while (a !== null)
                }
                xn = null,
                Hs = !1
            } catch (u) {
                throw xn !== null && (xn = xn.slice(e + 1)),
                Fc(Ma, Bn),
                u
            } finally {
                Re = t,
                ul = !1
            }
        }
        return null
    }
    var zr = []
      , $r = 0
      , Ks = null
      , Gs = 0
      , jt = []
      , Mt = 0
      , lr = null
      , wn = 1
      , bn = "";
    function ur(e, t) {
        zr[$r++] = Gs,
        zr[$r++] = Ks,
        Ks = e,
        Gs = t
    }
    function Ld(e, t, o) {
        jt[Mt++] = wn,
        jt[Mt++] = bn,
        jt[Mt++] = lr,
        lr = e;
        var a = wn;
        e = bn;
        var u = 32 - zt(a) - 1;
        a &= ~(1 << u),
        o += 1;
        var d = 32 - zt(t) + u;
        if (30 < d) {
            var y = u - u % 5;
            d = (a & (1 << y) - 1).toString(32),
            a >>= y,
            u -= y,
            wn = 1 << 32 - zt(t) + u | o << u | a,
            bn = d + e
        } else
            wn = 1 << d | o << u | a,
            bn = e
    }
    function cl(e) {
        e.return !== null && (ur(e, 1),
        Ld(e, 1, 0))
    }
    function dl(e) {
        for (; e === Ks; )
            Ks = zr[--$r],
            zr[$r] = null,
            Gs = zr[--$r],
            zr[$r] = null;
        for (; e === lr; )
            lr = jt[--Mt],
            jt[Mt] = null,
            bn = jt[--Mt],
            jt[Mt] = null,
            wn = jt[--Mt],
            jt[Mt] = null
    }
    var wt = null
      , bt = null
      , Ie = !1
      , Bt = null;
    function Fd(e, t) {
        var o = It(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = t,
        o.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [o],
        e.flags |= 16) : t.push(o)
    }
    function zd(e, t) {
        switch (e.tag) {
        case 5:
            var o = e.type;
            return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            wt = e,
            bt = Fn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            wt = e,
            bt = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (o = lr !== null ? {
                id: wn,
                overflow: bn
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: o,
                retryLane: 1073741824
            },
            o = It(18, null, null, 0),
            o.stateNode = t,
            o.return = e,
            e.child = o,
            wt = e,
            bt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function fl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function pl(e) {
        if (Ie) {
            var t = bt;
            if (t) {
                var o = t;
                if (!zd(e, t)) {
                    if (fl(e))
                        throw Error(s(418));
                    t = Fn(o.nextSibling);
                    var a = wt;
                    t && zd(e, t) ? Fd(a, o) : (e.flags = e.flags & -4097 | 2,
                    Ie = !1,
                    wt = e)
                }
            } else {
                if (fl(e))
                    throw Error(s(418));
                e.flags = e.flags & -4097 | 2,
                Ie = !1,
                wt = e
            }
        }
    }
    function $d(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        wt = e
    }
    function Qs(e) {
        if (e !== wt)
            return !1;
        if (!Ie)
            return $d(e),
            Ie = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ol(e.type, e.memoizedProps)),
        t && (t = bt)) {
            if (fl(e))
                throw Bd(),
                Error(s(418));
            for (; t; )
                Fd(e, t),
                t = Fn(t.nextSibling)
        }
        if ($d(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(s(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var o = e.data;
                        if (o === "/$") {
                            if (t === 0) {
                                bt = Fn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                bt = null
            }
        } else
            bt = wt ? Fn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Bd() {
        for (var e = bt; e; )
            e = Fn(e.nextSibling)
    }
    function Br() {
        bt = wt = null,
        Ie = !1
    }
    function hl(e) {
        Bt === null ? Bt = [e] : Bt.push(e)
    }
    var u0 = L.ReactCurrentBatchConfig;
    function Do(e, t, o) {
        if (e = o.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(s(309));
                    var a = o.stateNode
                }
                if (!a)
                    throw Error(s(147, e));
                var u = a
                  , d = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(y) {
                    var k = u.refs;
                    y === null ? delete k[d] : k[d] = y
                }
                ,
                t._stringRef = d,
                t)
            }
            if (typeof e != "string")
                throw Error(s(284));
            if (!o._owner)
                throw Error(s(290, e))
        }
        return e
    }
    function qs(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Ud(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Vd(e) {
        function t(A, j) {
            if (e) {
                var O = A.deletions;
                O === null ? (A.deletions = [j],
                A.flags |= 16) : O.push(j)
            }
        }
        function o(A, j) {
            if (!e)
                return null;
            for (; j !== null; )
                t(A, j),
                j = j.sibling;
            return null
        }
        function a(A, j) {
            for (A = new Map; j !== null; )
                j.key !== null ? A.set(j.key, j) : A.set(j.index, j),
                j = j.sibling;
            return A
        }
        function u(A, j) {
            return A = qn(A, j),
            A.index = 0,
            A.sibling = null,
            A
        }
        function d(A, j, O) {
            return A.index = O,
            e ? (O = A.alternate,
            O !== null ? (O = O.index,
            O < j ? (A.flags |= 2,
            j) : O) : (A.flags |= 2,
            j)) : (A.flags |= 1048576,
            j)
        }
        function y(A) {
            return e && A.alternate === null && (A.flags |= 2),
            A
        }
        function k(A, j, O, Q) {
            return j === null || j.tag !== 6 ? (j = su(O, A.mode, Q),
            j.return = A,
            j) : (j = u(j, O),
            j.return = A,
            j)
        }
        function P(A, j, O, Q) {
            var ae = O.type;
            return ae === G ? V(A, j, O.props.children, Q, O.key) : j !== null && (j.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === ne && Ud(ae) === j.type) ? (Q = u(j, O.props),
            Q.ref = Do(A, j, O),
            Q.return = A,
            Q) : (Q = xi(O.type, O.key, O.props, null, A.mode, Q),
            Q.ref = Do(A, j, O),
            Q.return = A,
            Q)
        }
        function D(A, j, O, Q) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== O.containerInfo || j.stateNode.implementation !== O.implementation ? (j = iu(O, A.mode, Q),
            j.return = A,
            j) : (j = u(j, O.children || []),
            j.return = A,
            j)
        }
        function V(A, j, O, Q, ae) {
            return j === null || j.tag !== 7 ? (j = gr(O, A.mode, Q, ae),
            j.return = A,
            j) : (j = u(j, O),
            j.return = A,
            j)
        }
        function K(A, j, O) {
            if (typeof j == "string" && j !== "" || typeof j == "number")
                return j = su("" + j, A.mode, O),
                j.return = A,
                j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case $:
                    return O = xi(j.type, j.key, j.props, null, A.mode, O),
                    O.ref = Do(A, null, j),
                    O.return = A,
                    O;
                case W:
                    return j = iu(j, A.mode, O),
                    j.return = A,
                    j;
                case ne:
                    var Q = j._init;
                    return K(A, Q(j._payload), O)
                }
                if (jn(j) || I(j))
                    return j = gr(j, A.mode, O, null),
                    j.return = A,
                    j;
                qs(A, j)
            }
            return null
        }
        function B(A, j, O, Q) {
            var ae = j !== null ? j.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number")
                return ae !== null ? null : k(A, j, "" + O, Q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case $:
                    return O.key === ae ? P(A, j, O, Q) : null;
                case W:
                    return O.key === ae ? D(A, j, O, Q) : null;
                case ne:
                    return ae = O._init,
                    B(A, j, ae(O._payload), Q)
                }
                if (jn(O) || I(O))
                    return ae !== null ? null : V(A, j, O, Q, null);
                qs(A, O)
            }
            return null
        }
        function ee(A, j, O, Q, ae) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number")
                return A = A.get(O) || null,
                k(j, A, "" + Q, ae);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                case $:
                    return A = A.get(Q.key === null ? O : Q.key) || null,
                    P(j, A, Q, ae);
                case W:
                    return A = A.get(Q.key === null ? O : Q.key) || null,
                    D(j, A, Q, ae);
                case ne:
                    var fe = Q._init;
                    return ee(A, j, O, fe(Q._payload), ae)
                }
                if (jn(Q) || I(Q))
                    return A = A.get(O) || null,
                    V(j, A, Q, ae, null);
                qs(j, Q)
            }
            return null
        }
        function oe(A, j, O, Q) {
            for (var ae = null, fe = null, pe = j, ge = j = 0, qe = null; pe !== null && ge < O.length; ge++) {
                pe.index > ge ? (qe = pe,
                pe = null) : qe = pe.sibling;
                var ke = B(A, pe, O[ge], Q);
                if (ke === null) {
                    pe === null && (pe = qe);
                    break
                }
                e && pe && ke.alternate === null && t(A, pe),
                j = d(ke, j, ge),
                fe === null ? ae = ke : fe.sibling = ke,
                fe = ke,
                pe = qe
            }
            if (ge === O.length)
                return o(A, pe),
                Ie && ur(A, ge),
                ae;
            if (pe === null) {
                for (; ge < O.length; ge++)
                    pe = K(A, O[ge], Q),
                    pe !== null && (j = d(pe, j, ge),
                    fe === null ? ae = pe : fe.sibling = pe,
                    fe = pe);
                return Ie && ur(A, ge),
                ae
            }
            for (pe = a(A, pe); ge < O.length; ge++)
                qe = ee(pe, A, ge, O[ge], Q),
                qe !== null && (e && qe.alternate !== null && pe.delete(qe.key === null ? ge : qe.key),
                j = d(qe, j, ge),
                fe === null ? ae = qe : fe.sibling = qe,
                fe = qe);
            return e && pe.forEach(function(Yn) {
                return t(A, Yn)
            }),
            Ie && ur(A, ge),
            ae
        }
        function ie(A, j, O, Q) {
            var ae = I(O);
            if (typeof ae != "function")
                throw Error(s(150));
            if (O = ae.call(O),
            O == null)
                throw Error(s(151));
            for (var fe = ae = null, pe = j, ge = j = 0, qe = null, ke = O.next(); pe !== null && !ke.done; ge++,
            ke = O.next()) {
                pe.index > ge ? (qe = pe,
                pe = null) : qe = pe.sibling;
                var Yn = B(A, pe, ke.value, Q);
                if (Yn === null) {
                    pe === null && (pe = qe);
                    break
                }
                e && pe && Yn.alternate === null && t(A, pe),
                j = d(Yn, j, ge),
                fe === null ? ae = Yn : fe.sibling = Yn,
                fe = Yn,
                pe = qe
            }
            if (ke.done)
                return o(A, pe),
                Ie && ur(A, ge),
                ae;
            if (pe === null) {
                for (; !ke.done; ge++,
                ke = O.next())
                    ke = K(A, ke.value, Q),
                    ke !== null && (j = d(ke, j, ge),
                    fe === null ? ae = ke : fe.sibling = ke,
                    fe = ke);
                return Ie && ur(A, ge),
                ae
            }
            for (pe = a(A, pe); !ke.done; ge++,
            ke = O.next())
                ke = ee(pe, A, ge, ke.value, Q),
                ke !== null && (e && ke.alternate !== null && pe.delete(ke.key === null ? ge : ke.key),
                j = d(ke, j, ge),
                fe === null ? ae = ke : fe.sibling = ke,
                fe = ke);
            return e && pe.forEach(function(U0) {
                return t(A, U0)
            }),
            Ie && ur(A, ge),
            ae
        }
        function Ue(A, j, O, Q) {
            if (typeof O == "object" && O !== null && O.type === G && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case $:
                    e: {
                        for (var ae = O.key, fe = j; fe !== null; ) {
                            if (fe.key === ae) {
                                if (ae = O.type,
                                ae === G) {
                                    if (fe.tag === 7) {
                                        o(A, fe.sibling),
                                        j = u(fe, O.props.children),
                                        j.return = A,
                                        A = j;
                                        break e
                                    }
                                } else if (fe.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === ne && Ud(ae) === fe.type) {
                                    o(A, fe.sibling),
                                    j = u(fe, O.props),
                                    j.ref = Do(A, fe, O),
                                    j.return = A,
                                    A = j;
                                    break e
                                }
                                o(A, fe);
                                break
                            } else
                                t(A, fe);
                            fe = fe.sibling
                        }
                        O.type === G ? (j = gr(O.props.children, A.mode, Q, O.key),
                        j.return = A,
                        A = j) : (Q = xi(O.type, O.key, O.props, null, A.mode, Q),
                        Q.ref = Do(A, j, O),
                        Q.return = A,
                        A = Q)
                    }
                    return y(A);
                case W:
                    e: {
                        for (fe = O.key; j !== null; ) {
                            if (j.key === fe)
                                if (j.tag === 4 && j.stateNode.containerInfo === O.containerInfo && j.stateNode.implementation === O.implementation) {
                                    o(A, j.sibling),
                                    j = u(j, O.children || []),
                                    j.return = A,
                                    A = j;
                                    break e
                                } else {
                                    o(A, j);
                                    break
                                }
                            else
                                t(A, j);
                            j = j.sibling
                        }
                        j = iu(O, A.mode, Q),
                        j.return = A,
                        A = j
                    }
                    return y(A);
                case ne:
                    return fe = O._init,
                    Ue(A, j, fe(O._payload), Q)
                }
                if (jn(O))
                    return oe(A, j, O, Q);
                if (I(O))
                    return ie(A, j, O, Q);
                qs(A, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O,
            j !== null && j.tag === 6 ? (o(A, j.sibling),
            j = u(j, O),
            j.return = A,
            A = j) : (o(A, j),
            j = su(O, A.mode, Q),
            j.return = A,
            A = j),
            y(A)) : o(A, j)
        }
        return Ue
    }
    var Ur = Vd(!0)
      , Wd = Vd(!1)
      , Ys = zn(null)
      , Xs = null
      , Vr = null
      , ml = null;
    function vl() {
        ml = Vr = Xs = null
    }
    function gl(e) {
        var t = Ys.current;
        Ae(Ys),
        e._currentValue = t
    }
    function yl(e, t, o) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === o)
                break;
            e = e.return
        }
    }
    function Wr(e, t) {
        Xs = e,
        ml = Vr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (pt = !0),
        e.firstContext = null)
    }
    function _t(e) {
        var t = e._currentValue;
        if (ml !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            Vr === null) {
                if (Xs === null)
                    throw Error(s(308));
                Vr = e,
                Xs.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                Vr = Vr.next = e;
        return t
    }
    var cr = null;
    function xl(e) {
        cr === null ? cr = [e] : cr.push(e)
    }
    function Hd(e, t, o, a) {
        var u = t.interleaved;
        return u === null ? (o.next = o,
        xl(t)) : (o.next = u.next,
        u.next = o),
        t.interleaved = o,
        Sn(e, a)
    }
    function Sn(e, t) {
        e.lanes |= t;
        var o = e.alternate;
        for (o !== null && (o.lanes |= t),
        o = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            o = e.alternate,
            o !== null && (o.childLanes |= t),
            o = e,
            e = e.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var Un = !1;
    function wl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Kd(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Cn(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Vn(e, t, o) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (Ce & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            a.pending = t,
            Sn(e, o)
        }
        return u = a.interleaved,
        u === null ? (t.next = t,
        xl(a)) : (t.next = u.next,
        u.next = t),
        a.interleaved = t,
        Sn(e, o)
    }
    function Zs(e, t, o) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (o & 4194240) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            o |= a,
            t.lanes = o,
            Oa(e, o)
        }
    }
    function Gd(e, t) {
        var o = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        o === a)) {
            var u = null
              , d = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var y = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    d === null ? u = d = y : d = d.next = y,
                    o = o.next
                } while (o !== null);
                d === null ? u = d = t : d = d.next = t
            } else
                u = d = t;
            o = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: d,
                shared: a.shared,
                effects: a.effects
            },
            e.updateQueue = o;
            return
        }
        e = o.lastBaseUpdate,
        e === null ? o.firstBaseUpdate = t : e.next = t,
        o.lastBaseUpdate = t
    }
    function Js(e, t, o, a) {
        var u = e.updateQueue;
        Un = !1;
        var d = u.firstBaseUpdate
          , y = u.lastBaseUpdate
          , k = u.shared.pending;
        if (k !== null) {
            u.shared.pending = null;
            var P = k
              , D = P.next;
            P.next = null,
            y === null ? d = D : y.next = D,
            y = P;
            var V = e.alternate;
            V !== null && (V = V.updateQueue,
            k = V.lastBaseUpdate,
            k !== y && (k === null ? V.firstBaseUpdate = D : k.next = D,
            V.lastBaseUpdate = P))
        }
        if (d !== null) {
            var K = u.baseState;
            y = 0,
            V = D = P = null,
            k = d;
            do {
                var B = k.lane
                  , ee = k.eventTime;
                if ((a & B) === B) {
                    V !== null && (V = V.next = {
                        eventTime: ee,
                        lane: 0,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    });
                    e: {
                        var oe = e
                          , ie = k;
                        switch (B = t,
                        ee = o,
                        ie.tag) {
                        case 1:
                            if (oe = ie.payload,
                            typeof oe == "function") {
                                K = oe.call(ee, K, B);
                                break e
                            }
                            K = oe;
                            break e;
                        case 3:
                            oe.flags = oe.flags & -65537 | 128;
                        case 0:
                            if (oe = ie.payload,
                            B = typeof oe == "function" ? oe.call(ee, K, B) : oe,
                            B == null)
                                break e;
                            K = U({}, K, B);
                            break e;
                        case 2:
                            Un = !0
                        }
                    }
                    k.callback !== null && k.lane !== 0 && (e.flags |= 64,
                    B = u.effects,
                    B === null ? u.effects = [k] : B.push(k))
                } else
                    ee = {
                        eventTime: ee,
                        lane: B,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    },
                    V === null ? (D = V = ee,
                    P = K) : V = V.next = ee,
                    y |= B;
                if (k = k.next,
                k === null) {
                    if (k = u.shared.pending,
                    k === null)
                        break;
                    B = k,
                    k = B.next,
                    B.next = null,
                    u.lastBaseUpdate = B,
                    u.shared.pending = null
                }
            } while (!0);
            if (V === null && (P = K),
            u.baseState = P,
            u.firstBaseUpdate = D,
            u.lastBaseUpdate = V,
            t = u.shared.interleaved,
            t !== null) {
                u = t;
                do
                    y |= u.lane,
                    u = u.next;
                while (u !== t)
            } else
                d === null && (u.shared.lanes = 0);
            pr |= y,
            e.lanes = y,
            e.memoizedState = K
        }
    }
    function Qd(e, t, o) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var a = e[t]
                  , u = a.callback;
                if (u !== null) {
                    if (a.callback = null,
                    a = o,
                    typeof u != "function")
                        throw Error(s(191, u));
                    u.call(a)
                }
            }
    }
    var Lo = {}
      , sn = zn(Lo)
      , Fo = zn(Lo)
      , zo = zn(Lo);
    function dr(e) {
        if (e === Lo)
            throw Error(s(174));
        return e
    }
    function bl(e, t) {
        switch (Me(zo, t),
        Me(Fo, e),
        Me(sn, Lo),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Zt(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = Zt(t, e)
        }
        Ae(sn),
        Me(sn, t)
    }
    function Hr() {
        Ae(sn),
        Ae(Fo),
        Ae(zo)
    }
    function qd(e) {
        dr(zo.current);
        var t = dr(sn.current)
          , o = Zt(t, e.type);
        t !== o && (Me(Fo, e),
        Me(sn, o))
    }
    function Sl(e) {
        Fo.current === e && (Ae(sn),
        Ae(Fo))
    }
    var De = zn(0);
    function ei(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var o = t.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Cl = [];
    function El() {
        for (var e = 0; e < Cl.length; e++)
            Cl[e]._workInProgressVersionPrimary = null;
        Cl.length = 0
    }
    var ti = L.ReactCurrentDispatcher
      , kl = L.ReactCurrentBatchConfig
      , fr = 0
      , Le = null
      , He = null
      , Ge = null
      , ni = !1
      , $o = !1
      , Bo = 0
      , c0 = 0;
    function et() {
        throw Error(s(321))
    }
    function Nl(e, t) {
        if (t === null)
            return !1;
        for (var o = 0; o < t.length && o < e.length; o++)
            if (!$t(e[o], t[o]))
                return !1;
        return !0
    }
    function Pl(e, t, o, a, u, d) {
        if (fr = d,
        Le = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        ti.current = e === null || e.memoizedState === null ? h0 : m0,
        e = o(a, u),
        $o) {
            d = 0;
            do {
                if ($o = !1,
                Bo = 0,
                25 <= d)
                    throw Error(s(301));
                d += 1,
                Ge = He = null,
                t.updateQueue = null,
                ti.current = v0,
                e = o(a, u)
            } while ($o)
        }
        if (ti.current = si,
        t = He !== null && He.next !== null,
        fr = 0,
        Ge = He = Le = null,
        ni = !1,
        t)
            throw Error(s(300));
        return e
    }
    function Rl() {
        var e = Bo !== 0;
        return Bo = 0,
        e
    }
    function an() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ge === null ? Le.memoizedState = Ge = e : Ge = Ge.next = e,
        Ge
    }
    function At() {
        if (He === null) {
            var e = Le.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = He.next;
        var t = Ge === null ? Le.memoizedState : Ge.next;
        if (t !== null)
            Ge = t,
            He = e;
        else {
            if (e === null)
                throw Error(s(310));
            He = e,
            e = {
                memoizedState: He.memoizedState,
                baseState: He.baseState,
                baseQueue: He.baseQueue,
                queue: He.queue,
                next: null
            },
            Ge === null ? Le.memoizedState = Ge = e : Ge = Ge.next = e
        }
        return Ge
    }
    function Uo(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Tl(e) {
        var t = At()
          , o = t.queue;
        if (o === null)
            throw Error(s(311));
        o.lastRenderedReducer = e;
        var a = He
          , u = a.baseQueue
          , d = o.pending;
        if (d !== null) {
            if (u !== null) {
                var y = u.next;
                u.next = d.next,
                d.next = y
            }
            a.baseQueue = u = d,
            o.pending = null
        }
        if (u !== null) {
            d = u.next,
            a = a.baseState;
            var k = y = null
              , P = null
              , D = d;
            do {
                var V = D.lane;
                if ((fr & V) === V)
                    P !== null && (P = P.next = {
                        lane: 0,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    }),
                    a = D.hasEagerState ? D.eagerState : e(a, D.action);
                else {
                    var K = {
                        lane: V,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    };
                    P === null ? (k = P = K,
                    y = a) : P = P.next = K,
                    Le.lanes |= V,
                    pr |= V
                }
                D = D.next
            } while (D !== null && D !== d);
            P === null ? y = a : P.next = k,
            $t(a, t.memoizedState) || (pt = !0),
            t.memoizedState = a,
            t.baseState = y,
            t.baseQueue = P,
            o.lastRenderedState = a
        }
        if (e = o.interleaved,
        e !== null) {
            u = e;
            do
                d = u.lane,
                Le.lanes |= d,
                pr |= d,
                u = u.next;
            while (u !== e)
        } else
            u === null && (o.lanes = 0);
        return [t.memoizedState, o.dispatch]
    }
    function jl(e) {
        var t = At()
          , o = t.queue;
        if (o === null)
            throw Error(s(311));
        o.lastRenderedReducer = e;
        var a = o.dispatch
          , u = o.pending
          , d = t.memoizedState;
        if (u !== null) {
            o.pending = null;
            var y = u = u.next;
            do
                d = e(d, y.action),
                y = y.next;
            while (y !== u);
            $t(d, t.memoizedState) || (pt = !0),
            t.memoizedState = d,
            t.baseQueue === null && (t.baseState = d),
            o.lastRenderedState = d
        }
        return [d, a]
    }
    function Yd() {}
    function Xd(e, t) {
        var o = Le
          , a = At()
          , u = t()
          , d = !$t(a.memoizedState, u);
        if (d && (a.memoizedState = u,
        pt = !0),
        a = a.queue,
        Ml(ef.bind(null, o, a, e), [e]),
        a.getSnapshot !== t || d || Ge !== null && Ge.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            Vo(9, Jd.bind(null, o, a, u, t), void 0, null),
            Qe === null)
                throw Error(s(349));
            (fr & 30) !== 0 || Zd(o, t, u)
        }
        return u
    }
    function Zd(e, t, o) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: o
        },
        t = Le.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Le.updateQueue = t,
        t.stores = [e]) : (o = t.stores,
        o === null ? t.stores = [e] : o.push(e))
    }
    function Jd(e, t, o, a) {
        t.value = o,
        t.getSnapshot = a,
        tf(t) && nf(e)
    }
    function ef(e, t, o) {
        return o(function() {
            tf(t) && nf(e)
        })
    }
    function tf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var o = t();
            return !$t(e, o)
        } catch {
            return !0
        }
    }
    function nf(e) {
        var t = Sn(e, 1);
        t !== null && Ht(t, e, 1, -1)
    }
    function rf(e) {
        var t = an();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Uo,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = p0.bind(null, Le, e),
        [t.memoizedState, e]
    }
    function Vo(e, t, o, a) {
        return e = {
            tag: e,
            create: t,
            destroy: o,
            deps: a,
            next: null
        },
        t = Le.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Le.updateQueue = t,
        t.lastEffect = e.next = e) : (o = t.lastEffect,
        o === null ? t.lastEffect = e.next = e : (a = o.next,
        o.next = e,
        e.next = a,
        t.lastEffect = e)),
        e
    }
    function of() {
        return At().memoizedState
    }
    function ri(e, t, o, a) {
        var u = an();
        Le.flags |= e,
        u.memoizedState = Vo(1 | t, o, void 0, a === void 0 ? null : a)
    }
    function oi(e, t, o, a) {
        var u = At();
        a = a === void 0 ? null : a;
        var d = void 0;
        if (He !== null) {
            var y = He.memoizedState;
            if (d = y.destroy,
            a !== null && Nl(a, y.deps)) {
                u.memoizedState = Vo(t, o, d, a);
                return
            }
        }
        Le.flags |= e,
        u.memoizedState = Vo(1 | t, o, d, a)
    }
    function sf(e, t) {
        return ri(8390656, 8, e, t)
    }
    function Ml(e, t) {
        return oi(2048, 8, e, t)
    }
    function af(e, t) {
        return oi(4, 2, e, t)
    }
    function lf(e, t) {
        return oi(4, 4, e, t)
    }
    function uf(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function cf(e, t, o) {
        return o = o != null ? o.concat([e]) : null,
        oi(4, 4, uf.bind(null, t, e), o)
    }
    function _l() {}
    function df(e, t) {
        var o = At();
        t = t === void 0 ? null : t;
        var a = o.memoizedState;
        return a !== null && t !== null && Nl(t, a[1]) ? a[0] : (o.memoizedState = [e, t],
        e)
    }
    function ff(e, t) {
        var o = At();
        t = t === void 0 ? null : t;
        var a = o.memoizedState;
        return a !== null && t !== null && Nl(t, a[1]) ? a[0] : (e = e(),
        o.memoizedState = [e, t],
        e)
    }
    function pf(e, t, o) {
        return (fr & 21) === 0 ? (e.baseState && (e.baseState = !1,
        pt = !0),
        e.memoizedState = o) : ($t(o, t) || (o = Uc(),
        Le.lanes |= o,
        pr |= o,
        e.baseState = !0),
        t)
    }
    function d0(e, t) {
        var o = Re;
        Re = o !== 0 && 4 > o ? o : 4,
        e(!0);
        var a = kl.transition;
        kl.transition = {};
        try {
            e(!1),
            t()
        } finally {
            Re = o,
            kl.transition = a
        }
    }
    function hf() {
        return At().memoizedState
    }
    function f0(e, t, o) {
        var a = Gn(e);
        if (o = {
            lane: a,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        mf(e))
            vf(t, o);
        else if (o = Hd(e, t, o, a),
        o !== null) {
            var u = it();
            Ht(o, e, a, u),
            gf(o, t, a)
        }
    }
    function p0(e, t, o) {
        var a = Gn(e)
          , u = {
            lane: a,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (mf(e))
            vf(t, u);
        else {
            var d = e.alternate;
            if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer,
            d !== null))
                try {
                    var y = t.lastRenderedState
                      , k = d(y, o);
                    if (u.hasEagerState = !0,
                    u.eagerState = k,
                    $t(k, y)) {
                        var P = t.interleaved;
                        P === null ? (u.next = u,
                        xl(t)) : (u.next = P.next,
                        P.next = u),
                        t.interleaved = u;
                        return
                    }
                } catch {} finally {}
            o = Hd(e, t, u, a),
            o !== null && (u = it(),
            Ht(o, e, a, u),
            gf(o, t, a))
        }
    }
    function mf(e) {
        var t = e.alternate;
        return e === Le || t !== null && t === Le
    }
    function vf(e, t) {
        $o = ni = !0;
        var o = e.pending;
        o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        e.pending = t
    }
    function gf(e, t, o) {
        if ((o & 4194240) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            o |= a,
            t.lanes = o,
            Oa(e, o)
        }
    }
    var si = {
        readContext: _t,
        useCallback: et,
        useContext: et,
        useEffect: et,
        useImperativeHandle: et,
        useInsertionEffect: et,
        useLayoutEffect: et,
        useMemo: et,
        useReducer: et,
        useRef: et,
        useState: et,
        useDebugValue: et,
        useDeferredValue: et,
        useTransition: et,
        useMutableSource: et,
        useSyncExternalStore: et,
        useId: et,
        unstable_isNewReconciler: !1
    }
      , h0 = {
        readContext: _t,
        useCallback: function(e, t) {
            return an().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: _t,
        useEffect: sf,
        useImperativeHandle: function(e, t, o) {
            return o = o != null ? o.concat([e]) : null,
            ri(4194308, 4, uf.bind(null, t, e), o)
        },
        useLayoutEffect: function(e, t) {
            return ri(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return ri(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var o = an();
            return t = t === void 0 ? null : t,
            e = e(),
            o.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, o) {
            var a = an();
            return t = o !== void 0 ? o(t) : t,
            a.memoizedState = a.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            a.queue = e,
            e = e.dispatch = f0.bind(null, Le, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = an();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: rf,
        useDebugValue: _l,
        useDeferredValue: function(e) {
            return an().memoizedState = e
        },
        useTransition: function() {
            var e = rf(!1)
              , t = e[0];
            return e = d0.bind(null, e[1]),
            an().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, o) {
            var a = Le
              , u = an();
            if (Ie) {
                if (o === void 0)
                    throw Error(s(407));
                o = o()
            } else {
                if (o = t(),
                Qe === null)
                    throw Error(s(349));
                (fr & 30) !== 0 || Zd(a, t, o)
            }
            u.memoizedState = o;
            var d = {
                value: o,
                getSnapshot: t
            };
            return u.queue = d,
            sf(ef.bind(null, a, d, e), [e]),
            a.flags |= 2048,
            Vo(9, Jd.bind(null, a, d, o, t), void 0, null),
            o
        },
        useId: function() {
            var e = an()
              , t = Qe.identifierPrefix;
            if (Ie) {
                var o = bn
                  , a = wn;
                o = (a & ~(1 << 32 - zt(a) - 1)).toString(32) + o,
                t = ":" + t + "R" + o,
                o = Bo++,
                0 < o && (t += "H" + o.toString(32)),
                t += ":"
            } else
                o = c0++,
                t = ":" + t + "r" + o.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , m0 = {
        readContext: _t,
        useCallback: df,
        useContext: _t,
        useEffect: Ml,
        useImperativeHandle: cf,
        useInsertionEffect: af,
        useLayoutEffect: lf,
        useMemo: ff,
        useReducer: Tl,
        useRef: of,
        useState: function() {
            return Tl(Uo)
        },
        useDebugValue: _l,
        useDeferredValue: function(e) {
            var t = At();
            return pf(t, He.memoizedState, e)
        },
        useTransition: function() {
            var e = Tl(Uo)[0]
              , t = At().memoizedState;
            return [e, t]
        },
        useMutableSource: Yd,
        useSyncExternalStore: Xd,
        useId: hf,
        unstable_isNewReconciler: !1
    }
      , v0 = {
        readContext: _t,
        useCallback: df,
        useContext: _t,
        useEffect: Ml,
        useImperativeHandle: cf,
        useInsertionEffect: af,
        useLayoutEffect: lf,
        useMemo: ff,
        useReducer: jl,
        useRef: of,
        useState: function() {
            return jl(Uo)
        },
        useDebugValue: _l,
        useDeferredValue: function(e) {
            var t = At();
            return He === null ? t.memoizedState = e : pf(t, He.memoizedState, e)
        },
        useTransition: function() {
            var e = jl(Uo)[0]
              , t = At().memoizedState;
            return [e, t]
        },
        useMutableSource: Yd,
        useSyncExternalStore: Xd,
        useId: hf,
        unstable_isNewReconciler: !1
    };
    function Ut(e, t) {
        if (e && e.defaultProps) {
            t = U({}, t),
            e = e.defaultProps;
            for (var o in e)
                t[o] === void 0 && (t[o] = e[o]);
            return t
        }
        return t
    }
    function Al(e, t, o, a) {
        t = e.memoizedState,
        o = o(a, t),
        o = o == null ? t : U({}, t, o),
        e.memoizedState = o,
        e.lanes === 0 && (e.updateQueue.baseState = o)
    }
    var ii = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? sr(e) === e : !1
        },
        enqueueSetState: function(e, t, o) {
            e = e._reactInternals;
            var a = it()
              , u = Gn(e)
              , d = Cn(a, u);
            d.payload = t,
            o != null && (d.callback = o),
            t = Vn(e, d, u),
            t !== null && (Ht(t, e, u, a),
            Zs(t, e, u))
        },
        enqueueReplaceState: function(e, t, o) {
            e = e._reactInternals;
            var a = it()
              , u = Gn(e)
              , d = Cn(a, u);
            d.tag = 1,
            d.payload = t,
            o != null && (d.callback = o),
            t = Vn(e, d, u),
            t !== null && (Ht(t, e, u, a),
            Zs(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var o = it()
              , a = Gn(e)
              , u = Cn(o, a);
            u.tag = 2,
            t != null && (u.callback = t),
            t = Vn(e, u, a),
            t !== null && (Ht(t, e, a, o),
            Zs(t, e, a))
        }
    };
    function yf(e, t, o, a, u, d, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, d, y) : t.prototype && t.prototype.isPureReactComponent ? !To(o, a) || !To(u, d) : !0
    }
    function xf(e, t, o) {
        var a = !1
          , u = $n
          , d = t.contextType;
        return typeof d == "object" && d !== null ? d = _t(d) : (u = ft(t) ? ar : Je.current,
        a = t.contextTypes,
        d = (a = a != null) ? Fr(e, u) : $n),
        t = new t(o,d),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = ii,
        e.stateNode = t,
        t._reactInternals = e,
        a && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = u,
        e.__reactInternalMemoizedMaskedChildContext = d),
        t
    }
    function wf(e, t, o, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, a),
        t.state !== e && ii.enqueueReplaceState(t, t.state, null)
    }
    function Ol(e, t, o, a) {
        var u = e.stateNode;
        u.props = o,
        u.state = e.memoizedState,
        u.refs = {},
        wl(e);
        var d = t.contextType;
        typeof d == "object" && d !== null ? u.context = _t(d) : (d = ft(t) ? ar : Je.current,
        u.context = Fr(e, d)),
        u.state = e.memoizedState,
        d = t.getDerivedStateFromProps,
        typeof d == "function" && (Al(e, t, d, o),
        u.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state,
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && ii.enqueueReplaceState(u, u.state, null),
        Js(e, o, u, a),
        u.state = e.memoizedState),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function Kr(e, t) {
        try {
            var o = ""
              , a = t;
            do
                o += de(a),
                a = a.return;
            while (a);
            var u = o
        } catch (d) {
            u = `
Error generating stack: ` + d.message + `
` + d.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }
    function Il(e, t, o) {
        return {
            value: e,
            source: null,
            stack: o ?? null,
            digest: t ?? null
        }
    }
    function Dl(e, t) {
        try {
            console.error(t.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var g0 = typeof WeakMap == "function" ? WeakMap : Map;
    function bf(e, t, o) {
        o = Cn(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var a = t.value;
        return o.callback = function() {
            pi || (pi = !0,
            Xl = a),
            Dl(e, t)
        }
        ,
        o
    }
    function Sf(e, t, o) {
        o = Cn(-1, o),
        o.tag = 3;
        var a = e.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var u = t.value;
            o.payload = function() {
                return a(u)
            }
            ,
            o.callback = function() {
                Dl(e, t)
            }
        }
        var d = e.stateNode;
        return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
            Dl(e, t),
            typeof a != "function" && (Hn === null ? Hn = new Set([this]) : Hn.add(this));
            var y = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: y !== null ? y : ""
            })
        }
        ),
        o
    }
    function Cf(e, t, o) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new g0;
            var u = new Set;
            a.set(t, u)
        } else
            u = a.get(t),
            u === void 0 && (u = new Set,
            a.set(t, u));
        u.has(o) || (u.add(o),
        e = M0.bind(null, e, t, o),
        t.then(e, e))
    }
    function Ef(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function kf(e, t, o, a, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = Cn(-1, 1),
        t.tag = 2,
        Vn(o, t, 1))),
        o.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = u,
        e)
    }
    var y0 = L.ReactCurrentOwner
      , pt = !1;
    function st(e, t, o, a) {
        t.child = e === null ? Wd(t, null, o, a) : Ur(t, e.child, o, a)
    }
    function Nf(e, t, o, a, u) {
        o = o.render;
        var d = t.ref;
        return Wr(t, u),
        a = Pl(e, t, o, a, d, u),
        o = Rl(),
        e !== null && !pt ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        En(e, t, u)) : (Ie && o && cl(t),
        t.flags |= 1,
        st(e, t, a, u),
        t.child)
    }
    function Pf(e, t, o, a, u) {
        if (e === null) {
            var d = o.type;
            return typeof d == "function" && !ou(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15,
            t.type = d,
            Rf(e, t, d, a, u)) : (e = xi(o.type, null, a, t, t.mode, u),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (d = e.child,
        (e.lanes & u) === 0) {
            var y = d.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : To,
            o(y, a) && e.ref === t.ref)
                return En(e, t, u)
        }
        return t.flags |= 1,
        e = qn(d, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Rf(e, t, o, a, u) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (To(d, a) && e.ref === t.ref)
                if (pt = !1,
                t.pendingProps = a = d,
                (e.lanes & u) !== 0)
                    (e.flags & 131072) !== 0 && (pt = !0);
                else
                    return t.lanes = e.lanes,
                    En(e, t, u)
        }
        return Ll(e, t, o, a, u)
    }
    function Tf(e, t, o) {
        var a = t.pendingProps
          , u = a.children
          , d = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Me(Qr, St),
                St |= o;
            else {
                if ((o & 1073741824) === 0)
                    return e = d !== null ? d.baseLanes | o : o,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Me(Qr, St),
                    St |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                a = d !== null ? d.baseLanes : o,
                Me(Qr, St),
                St |= a
            }
        else
            d !== null ? (a = d.baseLanes | o,
            t.memoizedState = null) : a = o,
            Me(Qr, St),
            St |= a;
        return st(e, t, u, o),
        t.child
    }
    function jf(e, t) {
        var o = t.ref;
        (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Ll(e, t, o, a, u) {
        var d = ft(o) ? ar : Je.current;
        return d = Fr(t, d),
        Wr(t, u),
        o = Pl(e, t, o, a, d, u),
        a = Rl(),
        e !== null && !pt ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        En(e, t, u)) : (Ie && a && cl(t),
        t.flags |= 1,
        st(e, t, o, u),
        t.child)
    }
    function Mf(e, t, o, a, u) {
        if (ft(o)) {
            var d = !0;
            Ws(t)
        } else
            d = !1;
        if (Wr(t, u),
        t.stateNode === null)
            li(e, t),
            xf(t, o, a),
            Ol(t, o, a, u),
            a = !0;
        else if (e === null) {
            var y = t.stateNode
              , k = t.memoizedProps;
            y.props = k;
            var P = y.context
              , D = o.contextType;
            typeof D == "object" && D !== null ? D = _t(D) : (D = ft(o) ? ar : Je.current,
            D = Fr(t, D));
            var V = o.getDerivedStateFromProps
              , K = typeof V == "function" || typeof y.getSnapshotBeforeUpdate == "function";
            K || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (k !== a || P !== D) && wf(t, y, a, D),
            Un = !1;
            var B = t.memoizedState;
            y.state = B,
            Js(t, a, y, u),
            P = t.memoizedState,
            k !== a || B !== P || dt.current || Un ? (typeof V == "function" && (Al(t, o, V, a),
            P = t.memoizedState),
            (k = Un || yf(t, o, k, a, B, P, D)) ? (K || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(),
            typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()),
            typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = P),
            y.props = a,
            y.state = P,
            y.context = D,
            a = k) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            y = t.stateNode,
            Kd(e, t),
            k = t.memoizedProps,
            D = t.type === t.elementType ? k : Ut(t.type, k),
            y.props = D,
            K = t.pendingProps,
            B = y.context,
            P = o.contextType,
            typeof P == "object" && P !== null ? P = _t(P) : (P = ft(o) ? ar : Je.current,
            P = Fr(t, P));
            var ee = o.getDerivedStateFromProps;
            (V = typeof ee == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (k !== K || B !== P) && wf(t, y, a, P),
            Un = !1,
            B = t.memoizedState,
            y.state = B,
            Js(t, a, y, u);
            var oe = t.memoizedState;
            k !== K || B !== oe || dt.current || Un ? (typeof ee == "function" && (Al(t, o, ee, a),
            oe = t.memoizedState),
            (D = Un || yf(t, o, D, a, B, oe, P) || !1) ? (V || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(a, oe, P),
            typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(a, oe, P)),
            typeof y.componentDidUpdate == "function" && (t.flags |= 4),
            typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || k === e.memoizedProps && B === e.memoizedState || (t.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = oe),
            y.props = a,
            y.state = oe,
            y.context = P,
            a = D) : (typeof y.componentDidUpdate != "function" || k === e.memoizedProps && B === e.memoizedState || (t.flags |= 4),
            typeof y.getSnapshotBeforeUpdate != "function" || k === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return Fl(e, t, o, a, d, u)
    }
    function Fl(e, t, o, a, u, d) {
        jf(e, t);
        var y = (t.flags & 128) !== 0;
        if (!a && !y)
            return u && Id(t, o, !1),
            En(e, t, d);
        a = t.stateNode,
        y0.current = t;
        var k = y && typeof o.getDerivedStateFromError != "function" ? null : a.render();
        return t.flags |= 1,
        e !== null && y ? (t.child = Ur(t, e.child, null, d),
        t.child = Ur(t, null, k, d)) : st(e, t, k, d),
        t.memoizedState = a.state,
        u && Id(t, o, !0),
        t.child
    }
    function _f(e) {
        var t = e.stateNode;
        t.pendingContext ? Ad(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ad(e, t.context, !1),
        bl(e, t.containerInfo)
    }
    function Af(e, t, o, a, u) {
        return Br(),
        hl(u),
        t.flags |= 256,
        st(e, t, o, a),
        t.child
    }
    var zl = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function $l(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Of(e, t, o) {
        var a = t.pendingProps, u = De.current, d = !1, y = (t.flags & 128) !== 0, k;
        if ((k = y) || (k = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
        k ? (d = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1),
        Me(De, u & 1),
        e === null)
            return pl(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (y = a.children,
            e = a.fallback,
            d ? (a = t.mode,
            d = t.child,
            y = {
                mode: "hidden",
                children: y
            },
            (a & 1) === 0 && d !== null ? (d.childLanes = 0,
            d.pendingProps = y) : d = wi(y, a, 0, null),
            e = gr(e, a, o, null),
            d.return = t,
            e.return = t,
            d.sibling = e,
            t.child = d,
            t.child.memoizedState = $l(o),
            t.memoizedState = zl,
            e) : Bl(t, y));
        if (u = e.memoizedState,
        u !== null && (k = u.dehydrated,
        k !== null))
            return x0(e, t, y, a, k, u, o);
        if (d) {
            d = a.fallback,
            y = t.mode,
            u = e.child,
            k = u.sibling;
            var P = {
                mode: "hidden",
                children: a.children
            };
            return (y & 1) === 0 && t.child !== u ? (a = t.child,
            a.childLanes = 0,
            a.pendingProps = P,
            t.deletions = null) : (a = qn(u, P),
            a.subtreeFlags = u.subtreeFlags & 14680064),
            k !== null ? d = qn(k, d) : (d = gr(d, y, o, null),
            d.flags |= 2),
            d.return = t,
            a.return = t,
            a.sibling = d,
            t.child = a,
            a = d,
            d = t.child,
            y = e.child.memoizedState,
            y = y === null ? $l(o) : {
                baseLanes: y.baseLanes | o,
                cachePool: null,
                transitions: y.transitions
            },
            d.memoizedState = y,
            d.childLanes = e.childLanes & ~o,
            t.memoizedState = zl,
            a
        }
        return d = e.child,
        e = d.sibling,
        a = qn(d, {
            mode: "visible",
            children: a.children
        }),
        (t.mode & 1) === 0 && (a.lanes = o),
        a.return = t,
        a.sibling = null,
        e !== null && (o = t.deletions,
        o === null ? (t.deletions = [e],
        t.flags |= 16) : o.push(e)),
        t.child = a,
        t.memoizedState = null,
        a
    }
    function Bl(e, t) {
        return t = wi({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function ai(e, t, o, a) {
        return a !== null && hl(a),
        Ur(t, e.child, null, o),
        e = Bl(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function x0(e, t, o, a, u, d, y) {
        if (o)
            return t.flags & 256 ? (t.flags &= -257,
            a = Il(Error(s(422))),
            ai(e, t, y, a)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (d = a.fallback,
            u = t.mode,
            a = wi({
                mode: "visible",
                children: a.children
            }, u, 0, null),
            d = gr(d, u, y, null),
            d.flags |= 2,
            a.return = t,
            d.return = t,
            a.sibling = d,
            t.child = a,
            (t.mode & 1) !== 0 && Ur(t, e.child, null, y),
            t.child.memoizedState = $l(y),
            t.memoizedState = zl,
            d);
        if ((t.mode & 1) === 0)
            return ai(e, t, y, null);
        if (u.data === "$!") {
            if (a = u.nextSibling && u.nextSibling.dataset,
            a)
                var k = a.dgst;
            return a = k,
            d = Error(s(419)),
            a = Il(d, a, void 0),
            ai(e, t, y, a)
        }
        if (k = (y & e.childLanes) !== 0,
        pt || k) {
            if (a = Qe,
            a !== null) {
                switch (y & -y) {
                case 4:
                    u = 2;
                    break;
                case 16:
                    u = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    u = 32;
                    break;
                case 536870912:
                    u = 268435456;
                    break;
                default:
                    u = 0
                }
                u = (u & (a.suspendedLanes | y)) !== 0 ? 0 : u,
                u !== 0 && u !== d.retryLane && (d.retryLane = u,
                Sn(e, u),
                Ht(a, e, u, -1))
            }
            return ru(),
            a = Il(Error(s(421))),
            ai(e, t, y, a)
        }
        return u.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = _0.bind(null, e),
        u._reactRetry = t,
        null) : (e = d.treeContext,
        bt = Fn(u.nextSibling),
        wt = t,
        Ie = !0,
        Bt = null,
        e !== null && (jt[Mt++] = wn,
        jt[Mt++] = bn,
        jt[Mt++] = lr,
        wn = e.id,
        bn = e.overflow,
        lr = t),
        t = Bl(t, a.children),
        t.flags |= 4096,
        t)
    }
    function If(e, t, o) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        yl(e.return, t, o)
    }
    function Ul(e, t, o, a, u) {
        var d = e.memoizedState;
        d === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: o,
            tailMode: u
        } : (d.isBackwards = t,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = a,
        d.tail = o,
        d.tailMode = u)
    }
    function Df(e, t, o) {
        var a = t.pendingProps
          , u = a.revealOrder
          , d = a.tail;
        if (st(e, t, a.children, o),
        a = De.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && If(e, o, t);
                    else if (e.tag === 19)
                        If(e, o, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a &= 1
        }
        if (Me(De, a),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (u) {
            case "forwards":
                for (o = t.child,
                u = null; o !== null; )
                    e = o.alternate,
                    e !== null && ei(e) === null && (u = o),
                    o = o.sibling;
                o = u,
                o === null ? (u = t.child,
                t.child = null) : (u = o.sibling,
                o.sibling = null),
                Ul(t, !1, u, o, d);
                break;
            case "backwards":
                for (o = null,
                u = t.child,
                t.child = null; u !== null; ) {
                    if (e = u.alternate,
                    e !== null && ei(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling,
                    u.sibling = o,
                    o = u,
                    u = e
                }
                Ul(t, !0, o, null, d);
                break;
            case "together":
                Ul(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function li(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function En(e, t, o) {
        if (e !== null && (t.dependencies = e.dependencies),
        pr |= t.lanes,
        (o & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child,
            o = qn(e, e.pendingProps),
            t.child = o,
            o.return = t; e.sibling !== null; )
                e = e.sibling,
                o = o.sibling = qn(e, e.pendingProps),
                o.return = t;
            o.sibling = null
        }
        return t.child
    }
    function w0(e, t, o) {
        switch (t.tag) {
        case 3:
            _f(t),
            Br();
            break;
        case 5:
            qd(t);
            break;
        case 1:
            ft(t.type) && Ws(t);
            break;
        case 4:
            bl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var a = t.type._context
              , u = t.memoizedProps.value;
            Me(Ys, a._currentValue),
            a._currentValue = u;
            break;
        case 13:
            if (a = t.memoizedState,
            a !== null)
                return a.dehydrated !== null ? (Me(De, De.current & 1),
                t.flags |= 128,
                null) : (o & t.child.childLanes) !== 0 ? Of(e, t, o) : (Me(De, De.current & 1),
                e = En(e, t, o),
                e !== null ? e.sibling : null);
            Me(De, De.current & 1);
            break;
        case 19:
            if (a = (o & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (a)
                    return Df(e, t, o);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            Me(De, De.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Tf(e, t, o)
        }
        return En(e, t, o)
    }
    var Lf, Vl, Ff, zf;
    Lf = function(e, t) {
        for (var o = t.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                e.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === t)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === t)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    Vl = function() {}
    ,
    Ff = function(e, t, o, a) {
        var u = e.memoizedProps;
        if (u !== a) {
            e = t.stateNode,
            dr(sn.current);
            var d = null;
            switch (o) {
            case "input":
                u = uo(e, u),
                a = uo(e, a),
                d = [];
                break;
            case "select":
                u = U({}, u, {
                    value: void 0
                }),
                a = U({}, a, {
                    value: void 0
                }),
                d = [];
                break;
            case "textarea":
                u = Er(e, u),
                a = Er(e, a),
                d = [];
                break;
            default:
                typeof u.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Bs)
            }
            en(o, a);
            var y;
            o = null;
            for (D in u)
                if (!a.hasOwnProperty(D) && u.hasOwnProperty(D) && u[D] != null)
                    if (D === "style") {
                        var k = u[D];
                        for (y in k)
                            k.hasOwnProperty(y) && (o || (o = {}),
                            o[y] = "")
                    } else
                        D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (l.hasOwnProperty(D) ? d || (d = []) : (d = d || []).push(D, null));
            for (D in a) {
                var P = a[D];
                if (k = u?.[D],
                a.hasOwnProperty(D) && P !== k && (P != null || k != null))
                    if (D === "style")
                        if (k) {
                            for (y in k)
                                !k.hasOwnProperty(y) || P && P.hasOwnProperty(y) || (o || (o = {}),
                                o[y] = "");
                            for (y in P)
                                P.hasOwnProperty(y) && k[y] !== P[y] && (o || (o = {}),
                                o[y] = P[y])
                        } else
                            o || (d || (d = []),
                            d.push(D, o)),
                            o = P;
                    else
                        D === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0,
                        k = k ? k.__html : void 0,
                        P != null && k !== P && (d = d || []).push(D, P)) : D === "children" ? typeof P != "string" && typeof P != "number" || (d = d || []).push(D, "" + P) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (l.hasOwnProperty(D) ? (P != null && D === "onScroll" && _e("scroll", e),
                        d || k === P || (d = [])) : (d = d || []).push(D, P))
            }
            o && (d = d || []).push("style", o);
            var D = d;
            (t.updateQueue = D) && (t.flags |= 4)
        }
    }
    ,
    zf = function(e, t, o, a) {
        o !== a && (t.flags |= 4)
    }
    ;
    function Wo(e, t) {
        if (!Ie)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var o = null; t !== null; )
                    t.alternate !== null && (o = t),
                    t = t.sibling;
                o === null ? e.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = e.tail;
                for (var a = null; o !== null; )
                    o.alternate !== null && (a = o),
                    o = o.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function tt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , o = 0
          , a = 0;
        if (t)
            for (var u = e.child; u !== null; )
                o |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 14680064,
                a |= u.flags & 14680064,
                u.return = e,
                u = u.sibling;
        else
            for (u = e.child; u !== null; )
                o |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = e,
                u = u.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = o,
        t
    }
    function b0(e, t, o) {
        var a = t.pendingProps;
        switch (dl(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return tt(t),
            null;
        case 1:
            return ft(t.type) && Vs(),
            tt(t),
            null;
        case 3:
            return a = t.stateNode,
            Hr(),
            Ae(dt),
            Ae(Je),
            El(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (Qs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Bt !== null && (eu(Bt),
            Bt = null))),
            Vl(e, t),
            tt(t),
            null;
        case 5:
            Sl(t);
            var u = dr(zo.current);
            if (o = t.type,
            e !== null && t.stateNode != null)
                Ff(e, t, o, a, u),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(s(166));
                    return tt(t),
                    null
                }
                if (e = dr(sn.current),
                Qs(t)) {
                    a = t.stateNode,
                    o = t.type;
                    var d = t.memoizedProps;
                    switch (a[on] = t,
                    a[Oo] = d,
                    e = (t.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        _e("cancel", a),
                        _e("close", a);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        _e("load", a);
                        break;
                    case "video":
                    case "audio":
                        for (u = 0; u < Mo.length; u++)
                            _e(Mo[u], a);
                        break;
                    case "source":
                        _e("error", a);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        _e("error", a),
                        _e("load", a);
                        break;
                    case "details":
                        _e("toggle", a);
                        break;
                    case "input":
                        ps(a, d),
                        _e("invalid", a);
                        break;
                    case "select":
                        a._wrapperState = {
                            wasMultiple: !!d.multiple
                        },
                        _e("invalid", a);
                        break;
                    case "textarea":
                        Xt(a, d),
                        _e("invalid", a)
                    }
                    en(o, d),
                    u = null;
                    for (var y in d)
                        if (d.hasOwnProperty(y)) {
                            var k = d[y];
                            y === "children" ? typeof k == "string" ? a.textContent !== k && (d.suppressHydrationWarning !== !0 && $s(a.textContent, k, e),
                            u = ["children", k]) : typeof k == "number" && a.textContent !== "" + k && (d.suppressHydrationWarning !== !0 && $s(a.textContent, k, e),
                            u = ["children", "" + k]) : l.hasOwnProperty(y) && k != null && y === "onScroll" && _e("scroll", a)
                        }
                    switch (o) {
                    case "input":
                        Pt(a),
                        Cr(a, d, !0);
                        break;
                    case "textarea":
                        Pt(a),
                        ms(a);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof d.onClick == "function" && (a.onclick = Bs)
                    }
                    a = u,
                    t.updateQueue = a,
                    a !== null && (t.flags |= 4)
                } else {
                    y = u.nodeType === 9 ? u : u.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = rt(o)),
                    e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = y.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = y.createElement(o, {
                        is: a.is
                    }) : (e = y.createElement(o),
                    o === "select" && (y = e,
                    a.multiple ? y.multiple = !0 : a.size && (y.size = a.size))) : e = y.createElementNS(e, o),
                    e[on] = t,
                    e[Oo] = a,
                    Lf(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (y = ho(o, a),
                        o) {
                        case "dialog":
                            _e("cancel", e),
                            _e("close", e),
                            u = a;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            _e("load", e),
                            u = a;
                            break;
                        case "video":
                        case "audio":
                            for (u = 0; u < Mo.length; u++)
                                _e(Mo[u], e);
                            u = a;
                            break;
                        case "source":
                            _e("error", e),
                            u = a;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            _e("error", e),
                            _e("load", e),
                            u = a;
                            break;
                        case "details":
                            _e("toggle", e),
                            u = a;
                            break;
                        case "input":
                            ps(e, a),
                            u = uo(e, a),
                            _e("invalid", e);
                            break;
                        case "option":
                            u = a;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!a.multiple
                            },
                            u = U({}, a, {
                                value: void 0
                            }),
                            _e("invalid", e);
                            break;
                        case "textarea":
                            Xt(e, a),
                            u = Er(e, a),
                            _e("invalid", e);
                            break;
                        default:
                            u = a
                        }
                        en(o, u),
                        k = u;
                        for (d in k)
                            if (k.hasOwnProperty(d)) {
                                var P = k[d];
                                d === "style" ? gn(e, P) : d === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0,
                                P != null && vs(e, P)) : d === "children" ? typeof P == "string" ? (o !== "textarea" || P !== "") && Jt(e, P) : typeof P == "number" && Jt(e, "" + P) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (l.hasOwnProperty(d) ? P != null && d === "onScroll" && _e("scroll", e) : P != null && _(e, d, P, y))
                            }
                        switch (o) {
                        case "input":
                            Pt(e),
                            Cr(e, a, !1);
                            break;
                        case "textarea":
                            Pt(e),
                            ms(e);
                            break;
                        case "option":
                            a.value != null && e.setAttribute("value", "" + be(a.value));
                            break;
                        case "select":
                            e.multiple = !!a.multiple,
                            d = a.value,
                            d != null ? Tt(e, !!a.multiple, d, !1) : a.defaultValue != null && Tt(e, !!a.multiple, a.defaultValue, !0);
                            break;
                        default:
                            typeof u.onClick == "function" && (e.onclick = Bs)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            a = !!a.autoFocus;
                            break e;
                        case "img":
                            a = !0;
                            break e;
                        default:
                            a = !1
                        }
                    }
                    a && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return tt(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                zf(e, t, e.memoizedProps, a);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(s(166));
                if (o = dr(zo.current),
                dr(sn.current),
                Qs(t)) {
                    if (a = t.stateNode,
                    o = t.memoizedProps,
                    a[on] = t,
                    (d = a.nodeValue !== o) && (e = wt,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            $s(a.nodeValue, o, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && $s(a.nodeValue, o, (e.mode & 1) !== 0)
                        }
                    d && (t.flags |= 4)
                } else
                    a = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(a),
                    a[on] = t,
                    t.stateNode = a
            }
            return tt(t),
            null;
        case 13:
            if (Ae(De),
            a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ie && bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Bd(),
                    Br(),
                    t.flags |= 98560,
                    d = !1;
                else if (d = Qs(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!d)
                            throw Error(s(318));
                        if (d = t.memoizedState,
                        d = d !== null ? d.dehydrated : null,
                        !d)
                            throw Error(s(317));
                        d[on] = t
                    } else
                        Br(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    tt(t),
                    d = !1
                } else
                    Bt !== null && (eu(Bt),
                    Bt = null),
                    d = !0;
                if (!d)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = o,
            t) : (a = a !== null,
            a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (De.current & 1) !== 0 ? Ke === 0 && (Ke = 3) : ru())),
            t.updateQueue !== null && (t.flags |= 4),
            tt(t),
            null);
        case 4:
            return Hr(),
            Vl(e, t),
            e === null && _o(t.stateNode.containerInfo),
            tt(t),
            null;
        case 10:
            return gl(t.type._context),
            tt(t),
            null;
        case 17:
            return ft(t.type) && Vs(),
            tt(t),
            null;
        case 19:
            if (Ae(De),
            d = t.memoizedState,
            d === null)
                return tt(t),
                null;
            if (a = (t.flags & 128) !== 0,
            y = d.rendering,
            y === null)
                if (a)
                    Wo(d, !1);
                else {
                    if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (y = ei(e),
                            y !== null) {
                                for (t.flags |= 128,
                                Wo(d, !1),
                                a = y.updateQueue,
                                a !== null && (t.updateQueue = a,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                a = o,
                                o = t.child; o !== null; )
                                    d = o,
                                    e = a,
                                    d.flags &= 14680066,
                                    y = d.alternate,
                                    y === null ? (d.childLanes = 0,
                                    d.lanes = e,
                                    d.child = null,
                                    d.subtreeFlags = 0,
                                    d.memoizedProps = null,
                                    d.memoizedState = null,
                                    d.updateQueue = null,
                                    d.dependencies = null,
                                    d.stateNode = null) : (d.childLanes = y.childLanes,
                                    d.lanes = y.lanes,
                                    d.child = y.child,
                                    d.subtreeFlags = 0,
                                    d.deletions = null,
                                    d.memoizedProps = y.memoizedProps,
                                    d.memoizedState = y.memoizedState,
                                    d.updateQueue = y.updateQueue,
                                    d.type = y.type,
                                    e = y.dependencies,
                                    d.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    o = o.sibling;
                                return Me(De, De.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    d.tail !== null && Be() > qr && (t.flags |= 128,
                    a = !0,
                    Wo(d, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = ei(y),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        o = e.updateQueue,
                        o !== null && (t.updateQueue = o,
                        t.flags |= 4),
                        Wo(d, !0),
                        d.tail === null && d.tailMode === "hidden" && !y.alternate && !Ie)
                            return tt(t),
                            null
                    } else
                        2 * Be() - d.renderingStartTime > qr && o !== 1073741824 && (t.flags |= 128,
                        a = !0,
                        Wo(d, !1),
                        t.lanes = 4194304);
                d.isBackwards ? (y.sibling = t.child,
                t.child = y) : (o = d.last,
                o !== null ? o.sibling = y : t.child = y,
                d.last = y)
            }
            return d.tail !== null ? (t = d.tail,
            d.rendering = t,
            d.tail = t.sibling,
            d.renderingStartTime = Be(),
            t.sibling = null,
            o = De.current,
            Me(De, a ? o & 1 | 2 : o & 1),
            t) : (tt(t),
            null);
        case 22:
        case 23:
            return nu(),
            a = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== a && (t.flags |= 8192),
            a && (t.mode & 1) !== 0 ? (St & 1073741824) !== 0 && (tt(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(s(156, t.tag))
    }
    function S0(e, t) {
        switch (dl(t),
        t.tag) {
        case 1:
            return ft(t.type) && Vs(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Hr(),
            Ae(dt),
            Ae(Je),
            El(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Sl(t),
            null;
        case 13:
            if (Ae(De),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(s(340));
                Br()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Ae(De),
            null;
        case 4:
            return Hr(),
            null;
        case 10:
            return gl(t.type._context),
            null;
        case 22:
        case 23:
            return nu(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var ui = !1
      , nt = !1
      , C0 = typeof WeakSet == "function" ? WeakSet : Set
      , re = null;
    function Gr(e, t) {
        var o = e.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (a) {
                    ze(e, t, a)
                }
            else
                o.current = null
    }
    function Wl(e, t, o) {
        try {
            o()
        } catch (a) {
            ze(e, t, a)
        }
    }
    var $f = !1;
    function E0(e, t) {
        if (nl = Ts,
        e = gd(),
        Qa(e)) {
            if ("selectionStart"in e)
                var o = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    o = (o = e.ownerDocument) && o.defaultView || window;
                    var a = o.getSelection && o.getSelection();
                    if (a && a.rangeCount !== 0) {
                        o = a.anchorNode;
                        var u = a.anchorOffset
                          , d = a.focusNode;
                        a = a.focusOffset;
                        try {
                            o.nodeType,
                            d.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var y = 0
                          , k = -1
                          , P = -1
                          , D = 0
                          , V = 0
                          , K = e
                          , B = null;
                        t: for (; ; ) {
                            for (var ee; K !== o || u !== 0 && K.nodeType !== 3 || (k = y + u),
                            K !== d || a !== 0 && K.nodeType !== 3 || (P = y + a),
                            K.nodeType === 3 && (y += K.nodeValue.length),
                            (ee = K.firstChild) !== null; )
                                B = K,
                                K = ee;
                            for (; ; ) {
                                if (K === e)
                                    break t;
                                if (B === o && ++D === u && (k = y),
                                B === d && ++V === a && (P = y),
                                (ee = K.nextSibling) !== null)
                                    break;
                                K = B,
                                B = K.parentNode
                            }
                            K = ee
                        }
                        o = k === -1 || P === -1 ? null : {
                            start: k,
                            end: P
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (rl = {
            focusedElem: e,
            selectionRange: o
        },
        Ts = !1,
        re = t; re !== null; )
            if (t = re,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                re = e;
            else
                for (; re !== null; ) {
                    t = re;
                    try {
                        var oe = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (oe !== null) {
                                    var ie = oe.memoizedProps
                                      , Ue = oe.memoizedState
                                      , A = t.stateNode
                                      , j = A.getSnapshotBeforeUpdate(t.elementType === t.type ? ie : Ut(t.type, ie), Ue);
                                    A.__reactInternalSnapshotBeforeUpdate = j
                                }
                                break;
                            case 3:
                                var O = t.stateNode.containerInfo;
                                O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                            }
                    } catch (Q) {
                        ze(t, t.return, Q)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        re = e;
                        break
                    }
                    re = t.return
                }
        return oe = $f,
        $f = !1,
        oe
    }
    function Ho(e, t, o) {
        var a = t.updateQueue;
        if (a = a !== null ? a.lastEffect : null,
        a !== null) {
            var u = a = a.next;
            do {
                if ((u.tag & e) === e) {
                    var d = u.destroy;
                    u.destroy = void 0,
                    d !== void 0 && Wl(t, o, d)
                }
                u = u.next
            } while (u !== a)
        }
    }
    function ci(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var o = t = t.next;
            do {
                if ((o.tag & e) === e) {
                    var a = o.create;
                    o.destroy = a()
                }
                o = o.next
            } while (o !== t)
        }
    }
    function Hl(e) {
        var t = e.ref;
        if (t !== null) {
            var o = e.stateNode;
            switch (e.tag) {
            case 5:
                e = o;
                break;
            default:
                e = o
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Bf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Bf(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[on],
        delete t[Oo],
        delete t[al],
        delete t[i0],
        delete t[a0])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Uf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Vf(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Uf(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Kl(e, t, o) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode,
            t.insertBefore(e, o)) : (t = o,
            t.appendChild(e)),
            o = o._reactRootContainer,
            o != null || t.onclick !== null || (t.onclick = Bs));
        else if (a !== 4 && (e = e.child,
        e !== null))
            for (Kl(e, t, o),
            e = e.sibling; e !== null; )
                Kl(e, t, o),
                e = e.sibling
    }
    function Gl(e, t, o) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? o.insertBefore(e, t) : o.appendChild(e);
        else if (a !== 4 && (e = e.child,
        e !== null))
            for (Gl(e, t, o),
            e = e.sibling; e !== null; )
                Gl(e, t, o),
                e = e.sibling
    }
    var Xe = null
      , Vt = !1;
    function Wn(e, t, o) {
        for (o = o.child; o !== null; )
            Wf(e, t, o),
            o = o.sibling
    }
    function Wf(e, t, o) {
        if (rn && typeof rn.onCommitFiberUnmount == "function")
            try {
                rn.onCommitFiberUnmount(Cs, o)
            } catch {}
        switch (o.tag) {
        case 5:
            nt || Gr(o, t);
        case 6:
            var a = Xe
              , u = Vt;
            Xe = null,
            Wn(e, t, o),
            Xe = a,
            Vt = u,
            Xe !== null && (Vt ? (e = Xe,
            o = o.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : Xe.removeChild(o.stateNode));
            break;
        case 18:
            Xe !== null && (Vt ? (e = Xe,
            o = o.stateNode,
            e.nodeType === 8 ? il(e.parentNode, o) : e.nodeType === 1 && il(e, o),
            Co(e)) : il(Xe, o.stateNode));
            break;
        case 4:
            a = Xe,
            u = Vt,
            Xe = o.stateNode.containerInfo,
            Vt = !0,
            Wn(e, t, o),
            Xe = a,
            Vt = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!nt && (a = o.updateQueue,
            a !== null && (a = a.lastEffect,
            a !== null))) {
                u = a = a.next;
                do {
                    var d = u
                      , y = d.destroy;
                    d = d.tag,
                    y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Wl(o, t, y),
                    u = u.next
                } while (u !== a)
            }
            Wn(e, t, o);
            break;
        case 1:
            if (!nt && (Gr(o, t),
            a = o.stateNode,
            typeof a.componentWillUnmount == "function"))
                try {
                    a.props = o.memoizedProps,
                    a.state = o.memoizedState,
                    a.componentWillUnmount()
                } catch (k) {
                    ze(o, t, k)
                }
            Wn(e, t, o);
            break;
        case 21:
            Wn(e, t, o);
            break;
        case 22:
            o.mode & 1 ? (nt = (a = nt) || o.memoizedState !== null,
            Wn(e, t, o),
            nt = a) : Wn(e, t, o);
            break;
        default:
            Wn(e, t, o)
        }
    }
    function Hf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var o = e.stateNode;
            o === null && (o = e.stateNode = new C0),
            t.forEach(function(a) {
                var u = A0.bind(null, e, a);
                o.has(a) || (o.add(a),
                a.then(u, u))
            })
        }
    }
    function Wt(e, t) {
        var o = t.deletions;
        if (o !== null)
            for (var a = 0; a < o.length; a++) {
                var u = o[a];
                try {
                    var d = e
                      , y = t
                      , k = y;
                    e: for (; k !== null; ) {
                        switch (k.tag) {
                        case 5:
                            Xe = k.stateNode,
                            Vt = !1;
                            break e;
                        case 3:
                            Xe = k.stateNode.containerInfo,
                            Vt = !0;
                            break e;
                        case 4:
                            Xe = k.stateNode.containerInfo,
                            Vt = !0;
                            break e
                        }
                        k = k.return
                    }
                    if (Xe === null)
                        throw Error(s(160));
                    Wf(d, y, u),
                    Xe = null,
                    Vt = !1;
                    var P = u.alternate;
                    P !== null && (P.return = null),
                    u.return = null
                } catch (D) {
                    ze(u, t, D)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                Kf(t, e),
                t = t.sibling
    }
    function Kf(e, t) {
        var o = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Wt(t, e),
            ln(e),
            a & 4) {
                try {
                    Ho(3, e, e.return),
                    ci(3, e)
                } catch (ie) {
                    ze(e, e.return, ie)
                }
                try {
                    Ho(5, e, e.return)
                } catch (ie) {
                    ze(e, e.return, ie)
                }
            }
            break;
        case 1:
            Wt(t, e),
            ln(e),
            a & 512 && o !== null && Gr(o, o.return);
            break;
        case 5:
            if (Wt(t, e),
            ln(e),
            a & 512 && o !== null && Gr(o, o.return),
            e.flags & 32) {
                var u = e.stateNode;
                try {
                    Jt(u, "")
                } catch (ie) {
                    ze(e, e.return, ie)
                }
            }
            if (a & 4 && (u = e.stateNode,
            u != null)) {
                var d = e.memoizedProps
                  , y = o !== null ? o.memoizedProps : d
                  , k = e.type
                  , P = e.updateQueue;
                if (e.updateQueue = null,
                P !== null)
                    try {
                        k === "input" && d.type === "radio" && d.name != null && co(u, d),
                        ho(k, y);
                        var D = ho(k, d);
                        for (y = 0; y < P.length; y += 2) {
                            var V = P[y]
                              , K = P[y + 1];
                            V === "style" ? gn(u, K) : V === "dangerouslySetInnerHTML" ? vs(u, K) : V === "children" ? Jt(u, K) : _(u, V, K, D)
                        }
                        switch (k) {
                        case "input":
                            fo(u, d);
                            break;
                        case "textarea":
                            hs(u, d);
                            break;
                        case "select":
                            var B = u._wrapperState.wasMultiple;
                            u._wrapperState.wasMultiple = !!d.multiple;
                            var ee = d.value;
                            ee != null ? Tt(u, !!d.multiple, ee, !1) : B !== !!d.multiple && (d.defaultValue != null ? Tt(u, !!d.multiple, d.defaultValue, !0) : Tt(u, !!d.multiple, d.multiple ? [] : "", !1))
                        }
                        u[Oo] = d
                    } catch (ie) {
                        ze(e, e.return, ie)
                    }
            }
            break;
        case 6:
            if (Wt(t, e),
            ln(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(s(162));
                u = e.stateNode,
                d = e.memoizedProps;
                try {
                    u.nodeValue = d
                } catch (ie) {
                    ze(e, e.return, ie)
                }
            }
            break;
        case 3:
            if (Wt(t, e),
            ln(e),
            a & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Co(t.containerInfo)
                } catch (ie) {
                    ze(e, e.return, ie)
                }
            break;
        case 4:
            Wt(t, e),
            ln(e);
            break;
        case 13:
            Wt(t, e),
            ln(e),
            u = e.child,
            u.flags & 8192 && (d = u.memoizedState !== null,
            u.stateNode.isHidden = d,
            !d || u.alternate !== null && u.alternate.memoizedState !== null || (Yl = Be())),
            a & 4 && Hf(e);
            break;
        case 22:
            if (V = o !== null && o.memoizedState !== null,
            e.mode & 1 ? (nt = (D = nt) || V,
            Wt(t, e),
            nt = D) : Wt(t, e),
            ln(e),
            a & 8192) {
                if (D = e.memoizedState !== null,
                (e.stateNode.isHidden = D) && !V && (e.mode & 1) !== 0)
                    for (re = e,
                    V = e.child; V !== null; ) {
                        for (K = re = V; re !== null; ) {
                            switch (B = re,
                            ee = B.child,
                            B.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Ho(4, B, B.return);
                                break;
                            case 1:
                                Gr(B, B.return);
                                var oe = B.stateNode;
                                if (typeof oe.componentWillUnmount == "function") {
                                    a = B,
                                    o = B.return;
                                    try {
                                        t = a,
                                        oe.props = t.memoizedProps,
                                        oe.state = t.memoizedState,
                                        oe.componentWillUnmount()
                                    } catch (ie) {
                                        ze(a, o, ie)
                                    }
                                }
                                break;
                            case 5:
                                Gr(B, B.return);
                                break;
                            case 22:
                                if (B.memoizedState !== null) {
                                    qf(K);
                                    continue
                                }
                            }
                            ee !== null ? (ee.return = B,
                            re = ee) : qf(K)
                        }
                        V = V.sibling
                    }
                e: for (V = null,
                K = e; ; ) {
                    if (K.tag === 5) {
                        if (V === null) {
                            V = K;
                            try {
                                u = K.stateNode,
                                D ? (d = u.style,
                                typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (k = K.stateNode,
                                P = K.memoizedProps.style,
                                y = P != null && P.hasOwnProperty("display") ? P.display : null,
                                k.style.display = Nr("display", y))
                            } catch (ie) {
                                ze(e, e.return, ie)
                            }
                        }
                    } else if (K.tag === 6) {
                        if (V === null)
                            try {
                                K.stateNode.nodeValue = D ? "" : K.memoizedProps
                            } catch (ie) {
                                ze(e, e.return, ie)
                            }
                    } else if ((K.tag !== 22 && K.tag !== 23 || K.memoizedState === null || K === e) && K.child !== null) {
                        K.child.return = K,
                        K = K.child;
                        continue
                    }
                    if (K === e)
                        break e;
                    for (; K.sibling === null; ) {
                        if (K.return === null || K.return === e)
                            break e;
                        V === K && (V = null),
                        K = K.return
                    }
                    V === K && (V = null),
                    K.sibling.return = K.return,
                    K = K.sibling
                }
            }
            break;
        case 19:
            Wt(t, e),
            ln(e),
            a & 4 && Hf(e);
            break;
        case 21:
            break;
        default:
            Wt(t, e),
            ln(e)
        }
    }
    function ln(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var o = e.return; o !== null; ) {
                        if (Uf(o)) {
                            var a = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(s(160))
                }
                switch (a.tag) {
                case 5:
                    var u = a.stateNode;
                    a.flags & 32 && (Jt(u, ""),
                    a.flags &= -33);
                    var d = Vf(e);
                    Gl(e, d, u);
                    break;
                case 3:
                case 4:
                    var y = a.stateNode.containerInfo
                      , k = Vf(e);
                    Kl(e, k, y);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (P) {
                ze(e, e.return, P)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function k0(e, t, o) {
        re = e,
        Gf(e)
    }
    function Gf(e, t, o) {
        for (var a = (e.mode & 1) !== 0; re !== null; ) {
            var u = re
              , d = u.child;
            if (u.tag === 22 && a) {
                var y = u.memoizedState !== null || ui;
                if (!y) {
                    var k = u.alternate
                      , P = k !== null && k.memoizedState !== null || nt;
                    k = ui;
                    var D = nt;
                    if (ui = y,
                    (nt = P) && !D)
                        for (re = u; re !== null; )
                            y = re,
                            P = y.child,
                            y.tag === 22 && y.memoizedState !== null ? Yf(u) : P !== null ? (P.return = y,
                            re = P) : Yf(u);
                    for (; d !== null; )
                        re = d,
                        Gf(d),
                        d = d.sibling;
                    re = u,
                    ui = k,
                    nt = D
                }
                Qf(e)
            } else
                (u.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = u,
                re = d) : Qf(e)
        }
    }
    function Qf(e) {
        for (; re !== null; ) {
            var t = re;
            if ((t.flags & 8772) !== 0) {
                var o = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            nt || ci(5, t);
                            break;
                        case 1:
                            var a = t.stateNode;
                            if (t.flags & 4 && !nt)
                                if (o === null)
                                    a.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? o.memoizedProps : Ut(t.type, o.memoizedProps);
                                    a.componentDidUpdate(u, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                                }
                            var d = t.updateQueue;
                            d !== null && Qd(t, d, a);
                            break;
                        case 3:
                            var y = t.updateQueue;
                            if (y !== null) {
                                if (o = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        o = t.child.stateNode;
                                        break;
                                    case 1:
                                        o = t.child.stateNode
                                    }
                                Qd(t, y, o)
                            }
                            break;
                        case 5:
                            var k = t.stateNode;
                            if (o === null && t.flags & 4) {
                                o = k;
                                var P = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    P.autoFocus && o.focus();
                                    break;
                                case "img":
                                    P.src && (o.src = P.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var D = t.alternate;
                                if (D !== null) {
                                    var V = D.memoizedState;
                                    if (V !== null) {
                                        var K = V.dehydrated;
                                        K !== null && Co(K)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                        }
                    nt || t.flags & 512 && Hl(t)
                } catch (B) {
                    ze(t, t.return, B)
                }
            }
            if (t === e) {
                re = null;
                break
            }
            if (o = t.sibling,
            o !== null) {
                o.return = t.return,
                re = o;
                break
            }
            re = t.return
        }
    }
    function qf(e) {
        for (; re !== null; ) {
            var t = re;
            if (t === e) {
                re = null;
                break
            }
            var o = t.sibling;
            if (o !== null) {
                o.return = t.return,
                re = o;
                break
            }
            re = t.return
        }
    }
    function Yf(e) {
        for (; re !== null; ) {
            var t = re;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var o = t.return;
                    try {
                        ci(4, t)
                    } catch (P) {
                        ze(t, o, P)
                    }
                    break;
                case 1:
                    var a = t.stateNode;
                    if (typeof a.componentDidMount == "function") {
                        var u = t.return;
                        try {
                            a.componentDidMount()
                        } catch (P) {
                            ze(t, u, P)
                        }
                    }
                    var d = t.return;
                    try {
                        Hl(t)
                    } catch (P) {
                        ze(t, d, P)
                    }
                    break;
                case 5:
                    var y = t.return;
                    try {
                        Hl(t)
                    } catch (P) {
                        ze(t, y, P)
                    }
                }
            } catch (P) {
                ze(t, t.return, P)
            }
            if (t === e) {
                re = null;
                break
            }
            var k = t.sibling;
            if (k !== null) {
                k.return = t.return,
                re = k;
                break
            }
            re = t.return
        }
    }
    var N0 = Math.ceil
      , di = L.ReactCurrentDispatcher
      , Ql = L.ReactCurrentOwner
      , Ot = L.ReactCurrentBatchConfig
      , Ce = 0
      , Qe = null
      , We = null
      , Ze = 0
      , St = 0
      , Qr = zn(0)
      , Ke = 0
      , Ko = null
      , pr = 0
      , fi = 0
      , ql = 0
      , Go = null
      , ht = null
      , Yl = 0
      , qr = 1 / 0
      , kn = null
      , pi = !1
      , Xl = null
      , Hn = null
      , hi = !1
      , Kn = null
      , mi = 0
      , Qo = 0
      , Zl = null
      , vi = -1
      , gi = 0;
    function it() {
        return (Ce & 6) !== 0 ? Be() : vi !== -1 ? vi : vi = Be()
    }
    function Gn(e) {
        return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && Ze !== 0 ? Ze & -Ze : u0.transition !== null ? (gi === 0 && (gi = Uc()),
        gi) : (e = Re,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : Xc(e.type)),
        e)
    }
    function Ht(e, t, o, a) {
        if (50 < Qo)
            throw Qo = 0,
            Zl = null,
            Error(s(185));
        yo(e, o, a),
        ((Ce & 2) === 0 || e !== Qe) && (e === Qe && ((Ce & 2) === 0 && (fi |= o),
        Ke === 4 && Qn(e, Ze)),
        mt(e, a),
        o === 1 && Ce === 0 && (t.mode & 1) === 0 && (qr = Be() + 500,
        Hs && Bn()))
    }
    function mt(e, t) {
        var o = e.callbackNode;
        uy(e, t);
        var a = Ns(e, e === Qe ? Ze : 0);
        if (a === 0)
            o !== null && zc(o),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = a & -a,
        e.callbackPriority !== t) {
            if (o != null && zc(o),
            t === 1)
                e.tag === 0 ? l0(Zf.bind(null, e)) : Dd(Zf.bind(null, e)),
                o0(function() {
                    (Ce & 6) === 0 && Bn()
                }),
                o = null;
            else {
                switch (Vc(a)) {
                case 1:
                    o = Ma;
                    break;
                case 4:
                    o = $c;
                    break;
                case 16:
                    o = Ss;
                    break;
                case 536870912:
                    o = Bc;
                    break;
                default:
                    o = Ss
                }
                o = ip(o, Xf.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = o
        }
    }
    function Xf(e, t) {
        if (vi = -1,
        gi = 0,
        (Ce & 6) !== 0)
            throw Error(s(327));
        var o = e.callbackNode;
        if (Yr() && e.callbackNode !== o)
            return null;
        var a = Ns(e, e === Qe ? Ze : 0);
        if (a === 0)
            return null;
        if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t)
            t = yi(e, a);
        else {
            t = a;
            var u = Ce;
            Ce |= 2;
            var d = ep();
            (Qe !== e || Ze !== t) && (kn = null,
            qr = Be() + 500,
            mr(e, t));
            do
                try {
                    T0();
                    break
                } catch (k) {
                    Jf(e, k)
                }
            while (!0);
            vl(),
            di.current = d,
            Ce = u,
            We !== null ? t = 0 : (Qe = null,
            Ze = 0,
            t = Ke)
        }
        if (t !== 0) {
            if (t === 2 && (u = _a(e),
            u !== 0 && (a = u,
            t = Jl(e, u))),
            t === 1)
                throw o = Ko,
                mr(e, 0),
                Qn(e, a),
                mt(e, Be()),
                o;
            if (t === 6)
                Qn(e, a);
            else {
                if (u = e.current.alternate,
                (a & 30) === 0 && !P0(u) && (t = yi(e, a),
                t === 2 && (d = _a(e),
                d !== 0 && (a = d,
                t = Jl(e, d))),
                t === 1))
                    throw o = Ko,
                    mr(e, 0),
                    Qn(e, a),
                    mt(e, Be()),
                    o;
                switch (e.finishedWork = u,
                e.finishedLanes = a,
                t) {
                case 0:
                case 1:
                    throw Error(s(345));
                case 2:
                    vr(e, ht, kn);
                    break;
                case 3:
                    if (Qn(e, a),
                    (a & 130023424) === a && (t = Yl + 500 - Be(),
                    10 < t)) {
                        if (Ns(e, 0) !== 0)
                            break;
                        if (u = e.suspendedLanes,
                        (u & a) !== a) {
                            it(),
                            e.pingedLanes |= e.suspendedLanes & u;
                            break
                        }
                        e.timeoutHandle = sl(vr.bind(null, e, ht, kn), t);
                        break
                    }
                    vr(e, ht, kn);
                    break;
                case 4:
                    if (Qn(e, a),
                    (a & 4194240) === a)
                        break;
                    for (t = e.eventTimes,
                    u = -1; 0 < a; ) {
                        var y = 31 - zt(a);
                        d = 1 << y,
                        y = t[y],
                        y > u && (u = y),
                        a &= ~d
                    }
                    if (a = u,
                    a = Be() - a,
                    a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * N0(a / 1960)) - a,
                    10 < a) {
                        e.timeoutHandle = sl(vr.bind(null, e, ht, kn), a);
                        break
                    }
                    vr(e, ht, kn);
                    break;
                case 5:
                    vr(e, ht, kn);
                    break;
                default:
                    throw Error(s(329))
                }
            }
        }
        return mt(e, Be()),
        e.callbackNode === o ? Xf.bind(null, e) : null
    }
    function Jl(e, t) {
        var o = Go;
        return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
        e = yi(e, t),
        e !== 2 && (t = ht,
        ht = o,
        t !== null && eu(t)),
        e
    }
    function eu(e) {
        ht === null ? ht = e : ht.push.apply(ht, e)
    }
    function P0(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var o = t.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var a = 0; a < o.length; a++) {
                        var u = o[a]
                          , d = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!$t(d(), u))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = t.child,
            t.subtreeFlags & 16384 && o !== null)
                o.return = t,
                t = o;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Qn(e, t) {
        for (t &= ~ql,
        t &= ~fi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var o = 31 - zt(t)
              , a = 1 << o;
            e[o] = -1,
            t &= ~a
        }
    }
    function Zf(e) {
        if ((Ce & 6) !== 0)
            throw Error(s(327));
        Yr();
        var t = Ns(e, 0);
        if ((t & 1) === 0)
            return mt(e, Be()),
            null;
        var o = yi(e, t);
        if (e.tag !== 0 && o === 2) {
            var a = _a(e);
            a !== 0 && (t = a,
            o = Jl(e, a))
        }
        if (o === 1)
            throw o = Ko,
            mr(e, 0),
            Qn(e, t),
            mt(e, Be()),
            o;
        if (o === 6)
            throw Error(s(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        vr(e, ht, kn),
        mt(e, Be()),
        null
    }
    function tu(e, t) {
        var o = Ce;
        Ce |= 1;
        try {
            return e(t)
        } finally {
            Ce = o,
            Ce === 0 && (qr = Be() + 500,
            Hs && Bn())
        }
    }
    function hr(e) {
        Kn !== null && Kn.tag === 0 && (Ce & 6) === 0 && Yr();
        var t = Ce;
        Ce |= 1;
        var o = Ot.transition
          , a = Re;
        try {
            if (Ot.transition = null,
            Re = 1,
            e)
                return e()
        } finally {
            Re = a,
            Ot.transition = o,
            Ce = t,
            (Ce & 6) === 0 && Bn()
        }
    }
    function nu() {
        St = Qr.current,
        Ae(Qr)
    }
    function mr(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var o = e.timeoutHandle;
        if (o !== -1 && (e.timeoutHandle = -1,
        r0(o)),
        We !== null)
            for (o = We.return; o !== null; ) {
                var a = o;
                switch (dl(a),
                a.tag) {
                case 1:
                    a = a.type.childContextTypes,
                    a != null && Vs();
                    break;
                case 3:
                    Hr(),
                    Ae(dt),
                    Ae(Je),
                    El();
                    break;
                case 5:
                    Sl(a);
                    break;
                case 4:
                    Hr();
                    break;
                case 13:
                    Ae(De);
                    break;
                case 19:
                    Ae(De);
                    break;
                case 10:
                    gl(a.type._context);
                    break;
                case 22:
                case 23:
                    nu()
                }
                o = o.return
            }
        if (Qe = e,
        We = e = qn(e.current, null),
        Ze = St = t,
        Ke = 0,
        Ko = null,
        ql = fi = pr = 0,
        ht = Go = null,
        cr !== null) {
            for (t = 0; t < cr.length; t++)
                if (o = cr[t],
                a = o.interleaved,
                a !== null) {
                    o.interleaved = null;
                    var u = a.next
                      , d = o.pending;
                    if (d !== null) {
                        var y = d.next;
                        d.next = u,
                        a.next = y
                    }
                    o.pending = a
                }
            cr = null
        }
        return e
    }
    function Jf(e, t) {
        do {
            var o = We;
            try {
                if (vl(),
                ti.current = si,
                ni) {
                    for (var a = Le.memoizedState; a !== null; ) {
                        var u = a.queue;
                        u !== null && (u.pending = null),
                        a = a.next
                    }
                    ni = !1
                }
                if (fr = 0,
                Ge = He = Le = null,
                $o = !1,
                Bo = 0,
                Ql.current = null,
                o === null || o.return === null) {
                    Ke = 1,
                    Ko = t,
                    We = null;
                    break
                }
                e: {
                    var d = e
                      , y = o.return
                      , k = o
                      , P = t;
                    if (t = Ze,
                    k.flags |= 32768,
                    P !== null && typeof P == "object" && typeof P.then == "function") {
                        var D = P
                          , V = k
                          , K = V.tag;
                        if ((V.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
                            var B = V.alternate;
                            B ? (V.updateQueue = B.updateQueue,
                            V.memoizedState = B.memoizedState,
                            V.lanes = B.lanes) : (V.updateQueue = null,
                            V.memoizedState = null)
                        }
                        var ee = Ef(y);
                        if (ee !== null) {
                            ee.flags &= -257,
                            kf(ee, y, k, d, t),
                            ee.mode & 1 && Cf(d, D, t),
                            t = ee,
                            P = D;
                            var oe = t.updateQueue;
                            if (oe === null) {
                                var ie = new Set;
                                ie.add(P),
                                t.updateQueue = ie
                            } else
                                oe.add(P);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Cf(d, D, t),
                                ru();
                                break e
                            }
                            P = Error(s(426))
                        }
                    } else if (Ie && k.mode & 1) {
                        var Ue = Ef(y);
                        if (Ue !== null) {
                            (Ue.flags & 65536) === 0 && (Ue.flags |= 256),
                            kf(Ue, y, k, d, t),
                            hl(Kr(P, k));
                            break e
                        }
                    }
                    d = P = Kr(P, k),
                    Ke !== 4 && (Ke = 2),
                    Go === null ? Go = [d] : Go.push(d),
                    d = y;
                    do {
                        switch (d.tag) {
                        case 3:
                            d.flags |= 65536,
                            t &= -t,
                            d.lanes |= t;
                            var A = bf(d, P, t);
                            Gd(d, A);
                            break e;
                        case 1:
                            k = P;
                            var j = d.type
                              , O = d.stateNode;
                            if ((d.flags & 128) === 0 && (typeof j.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (Hn === null || !Hn.has(O)))) {
                                d.flags |= 65536,
                                t &= -t,
                                d.lanes |= t;
                                var Q = Sf(d, k, t);
                                Gd(d, Q);
                                break e
                            }
                        }
                        d = d.return
                    } while (d !== null)
                }
                np(o)
            } catch (ae) {
                t = ae,
                We === o && o !== null && (We = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function ep() {
        var e = di.current;
        return di.current = si,
        e === null ? si : e
    }
    function ru() {
        (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
        Qe === null || (pr & 268435455) === 0 && (fi & 268435455) === 0 || Qn(Qe, Ze)
    }
    function yi(e, t) {
        var o = Ce;
        Ce |= 2;
        var a = ep();
        (Qe !== e || Ze !== t) && (kn = null,
        mr(e, t));
        do
            try {
                R0();
                break
            } catch (u) {
                Jf(e, u)
            }
        while (!0);
        if (vl(),
        Ce = o,
        di.current = a,
        We !== null)
            throw Error(s(261));
        return Qe = null,
        Ze = 0,
        Ke
    }
    function R0() {
        for (; We !== null; )
            tp(We)
    }
    function T0() {
        for (; We !== null && !ey(); )
            tp(We)
    }
    function tp(e) {
        var t = sp(e.alternate, e, St);
        e.memoizedProps = e.pendingProps,
        t === null ? np(e) : We = t,
        Ql.current = null
    }
    function np(e) {
        var t = e;
        do {
            var o = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (o = b0(o, t, St),
                o !== null) {
                    We = o;
                    return
                }
            } else {
                if (o = S0(o, t),
                o !== null) {
                    o.flags &= 32767,
                    We = o;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Ke = 6,
                    We = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                We = t;
                return
            }
            We = t = e
        } while (t !== null);
        Ke === 0 && (Ke = 5)
    }
    function vr(e, t, o) {
        var a = Re
          , u = Ot.transition;
        try {
            Ot.transition = null,
            Re = 1,
            j0(e, t, o, a)
        } finally {
            Ot.transition = u,
            Re = a
        }
        return null
    }
    function j0(e, t, o, a) {
        do
            Yr();
        while (Kn !== null);
        if ((Ce & 6) !== 0)
            throw Error(s(327));
        o = e.finishedWork;
        var u = e.finishedLanes;
        if (o === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        o === e.current)
            throw Error(s(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var d = o.lanes | o.childLanes;
        if (cy(e, d),
        e === Qe && (We = Qe = null,
        Ze = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || hi || (hi = !0,
        ip(Ss, function() {
            return Yr(),
            null
        })),
        d = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || d) {
            d = Ot.transition,
            Ot.transition = null;
            var y = Re;
            Re = 1;
            var k = Ce;
            Ce |= 4,
            Ql.current = null,
            E0(e, o),
            Kf(o, e),
            Yy(rl),
            Ts = !!nl,
            rl = nl = null,
            e.current = o,
            k0(o),
            ty(),
            Ce = k,
            Re = y,
            Ot.transition = d
        } else
            e.current = o;
        if (hi && (hi = !1,
        Kn = e,
        mi = u),
        d = e.pendingLanes,
        d === 0 && (Hn = null),
        oy(o.stateNode),
        mt(e, Be()),
        t !== null)
            for (a = e.onRecoverableError,
            o = 0; o < t.length; o++)
                u = t[o],
                a(u.value, {
                    componentStack: u.stack,
                    digest: u.digest
                });
        if (pi)
            throw pi = !1,
            e = Xl,
            Xl = null,
            e;
        return (mi & 1) !== 0 && e.tag !== 0 && Yr(),
        d = e.pendingLanes,
        (d & 1) !== 0 ? e === Zl ? Qo++ : (Qo = 0,
        Zl = e) : Qo = 0,
        Bn(),
        null
    }
    function Yr() {
        if (Kn !== null) {
            var e = Vc(mi)
              , t = Ot.transition
              , o = Re;
            try {
                if (Ot.transition = null,
                Re = 16 > e ? 16 : e,
                Kn === null)
                    var a = !1;
                else {
                    if (e = Kn,
                    Kn = null,
                    mi = 0,
                    (Ce & 6) !== 0)
                        throw Error(s(331));
                    var u = Ce;
                    for (Ce |= 4,
                    re = e.current; re !== null; ) {
                        var d = re
                          , y = d.child;
                        if ((re.flags & 16) !== 0) {
                            var k = d.deletions;
                            if (k !== null) {
                                for (var P = 0; P < k.length; P++) {
                                    var D = k[P];
                                    for (re = D; re !== null; ) {
                                        var V = re;
                                        switch (V.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ho(8, V, d)
                                        }
                                        var K = V.child;
                                        if (K !== null)
                                            K.return = V,
                                            re = K;
                                        else
                                            for (; re !== null; ) {
                                                V = re;
                                                var B = V.sibling
                                                  , ee = V.return;
                                                if (Bf(V),
                                                V === D) {
                                                    re = null;
                                                    break
                                                }
                                                if (B !== null) {
                                                    B.return = ee,
                                                    re = B;
                                                    break
                                                }
                                                re = ee
                                            }
                                    }
                                }
                                var oe = d.alternate;
                                if (oe !== null) {
                                    var ie = oe.child;
                                    if (ie !== null) {
                                        oe.child = null;
                                        do {
                                            var Ue = ie.sibling;
                                            ie.sibling = null,
                                            ie = Ue
                                        } while (ie !== null)
                                    }
                                }
                                re = d
                            }
                        }
                        if ((d.subtreeFlags & 2064) !== 0 && y !== null)
                            y.return = d,
                            re = y;
                        else
                            e: for (; re !== null; ) {
                                if (d = re,
                                (d.flags & 2048) !== 0)
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ho(9, d, d.return)
                                    }
                                var A = d.sibling;
                                if (A !== null) {
                                    A.return = d.return,
                                    re = A;
                                    break e
                                }
                                re = d.return
                            }
                    }
                    var j = e.current;
                    for (re = j; re !== null; ) {
                        y = re;
                        var O = y.child;
                        if ((y.subtreeFlags & 2064) !== 0 && O !== null)
                            O.return = y,
                            re = O;
                        else
                            e: for (y = j; re !== null; ) {
                                if (k = re,
                                (k.flags & 2048) !== 0)
                                    try {
                                        switch (k.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ci(9, k)
                                        }
                                    } catch (ae) {
                                        ze(k, k.return, ae)
                                    }
                                if (k === y) {
                                    re = null;
                                    break e
                                }
                                var Q = k.sibling;
                                if (Q !== null) {
                                    Q.return = k.return,
                                    re = Q;
                                    break e
                                }
                                re = k.return
                            }
                    }
                    if (Ce = u,
                    Bn(),
                    rn && typeof rn.onPostCommitFiberRoot == "function")
                        try {
                            rn.onPostCommitFiberRoot(Cs, e)
                        } catch {}
                    a = !0
                }
                return a
            } finally {
                Re = o,
                Ot.transition = t
            }
        }
        return !1
    }
    function rp(e, t, o) {
        t = Kr(o, t),
        t = bf(e, t, 1),
        e = Vn(e, t, 1),
        t = it(),
        e !== null && (yo(e, 1, t),
        mt(e, t))
    }
    function ze(e, t, o) {
        if (e.tag === 3)
            rp(e, e, o);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    rp(t, e, o);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Hn === null || !Hn.has(a))) {
                        e = Kr(o, e),
                        e = Sf(t, e, 1),
                        t = Vn(t, e, 1),
                        e = it(),
                        t !== null && (yo(t, 1, e),
                        mt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function M0(e, t, o) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        t = it(),
        e.pingedLanes |= e.suspendedLanes & o,
        Qe === e && (Ze & o) === o && (Ke === 4 || Ke === 3 && (Ze & 130023424) === Ze && 500 > Be() - Yl ? mr(e, 0) : ql |= o),
        mt(e, t)
    }
    function op(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ks,
        ks <<= 1,
        (ks & 130023424) === 0 && (ks = 4194304)));
        var o = it();
        e = Sn(e, t),
        e !== null && (yo(e, t, o),
        mt(e, o))
    }
    function _0(e) {
        var t = e.memoizedState
          , o = 0;
        t !== null && (o = t.retryLane),
        op(e, o)
    }
    function A0(e, t) {
        var o = 0;
        switch (e.tag) {
        case 13:
            var a = e.stateNode
              , u = e.memoizedState;
            u !== null && (o = u.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        default:
            throw Error(s(314))
        }
        a !== null && a.delete(t),
        op(e, o)
    }
    var sp;
    sp = function(e, t, o) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || dt.current)
                pt = !0;
            else {
                if ((e.lanes & o) === 0 && (t.flags & 128) === 0)
                    return pt = !1,
                    w0(e, t, o);
                pt = (e.flags & 131072) !== 0
            }
        else
            pt = !1,
            Ie && (t.flags & 1048576) !== 0 && Ld(t, Gs, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var a = t.type;
            li(e, t),
            e = t.pendingProps;
            var u = Fr(t, Je.current);
            Wr(t, o),
            u = Pl(null, t, a, e, u, o);
            var d = Rl();
            return t.flags |= 1,
            typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            ft(a) ? (d = !0,
            Ws(t)) : d = !1,
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            wl(t),
            u.updater = ii,
            t.stateNode = u,
            u._reactInternals = t,
            Ol(t, a, e, o),
            t = Fl(null, t, a, !0, d, o)) : (t.tag = 0,
            Ie && d && cl(t),
            st(null, t, u, o),
            t = t.child),
            t;
        case 16:
            a = t.elementType;
            e: {
                switch (li(e, t),
                e = t.pendingProps,
                u = a._init,
                a = u(a._payload),
                t.type = a,
                u = t.tag = I0(a),
                e = Ut(a, e),
                u) {
                case 0:
                    t = Ll(null, t, a, e, o);
                    break e;
                case 1:
                    t = Mf(null, t, a, e, o);
                    break e;
                case 11:
                    t = Nf(null, t, a, e, o);
                    break e;
                case 14:
                    t = Pf(null, t, a, Ut(a.type, e), o);
                    break e
                }
                throw Error(s(306, a, ""))
            }
            return t;
        case 0:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Ut(a, u),
            Ll(e, t, a, u, o);
        case 1:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Ut(a, u),
            Mf(e, t, a, u, o);
        case 3:
            e: {
                if (_f(t),
                e === null)
                    throw Error(s(387));
                a = t.pendingProps,
                d = t.memoizedState,
                u = d.element,
                Kd(e, t),
                Js(t, a, null, o);
                var y = t.memoizedState;
                if (a = y.element,
                d.isDehydrated)
                    if (d = {
                        element: a,
                        isDehydrated: !1,
                        cache: y.cache,
                        pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                        transitions: y.transitions
                    },
                    t.updateQueue.baseState = d,
                    t.memoizedState = d,
                    t.flags & 256) {
                        u = Kr(Error(s(423)), t),
                        t = Af(e, t, a, o, u);
                        break e
                    } else if (a !== u) {
                        u = Kr(Error(s(424)), t),
                        t = Af(e, t, a, o, u);
                        break e
                    } else
                        for (bt = Fn(t.stateNode.containerInfo.firstChild),
                        wt = t,
                        Ie = !0,
                        Bt = null,
                        o = Wd(t, null, a, o),
                        t.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Br(),
                    a === u) {
                        t = En(e, t, o);
                        break e
                    }
                    st(e, t, a, o)
                }
                t = t.child
            }
            return t;
        case 5:
            return qd(t),
            e === null && pl(t),
            a = t.type,
            u = t.pendingProps,
            d = e !== null ? e.memoizedProps : null,
            y = u.children,
            ol(a, u) ? y = null : d !== null && ol(a, d) && (t.flags |= 32),
            jf(e, t),
            st(e, t, y, o),
            t.child;
        case 6:
            return e === null && pl(t),
            null;
        case 13:
            return Of(e, t, o);
        case 4:
            return bl(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = Ur(t, null, a, o) : st(e, t, a, o),
            t.child;
        case 11:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Ut(a, u),
            Nf(e, t, a, u, o);
        case 7:
            return st(e, t, t.pendingProps, o),
            t.child;
        case 8:
            return st(e, t, t.pendingProps.children, o),
            t.child;
        case 12:
            return st(e, t, t.pendingProps.children, o),
            t.child;
        case 10:
            e: {
                if (a = t.type._context,
                u = t.pendingProps,
                d = t.memoizedProps,
                y = u.value,
                Me(Ys, a._currentValue),
                a._currentValue = y,
                d !== null)
                    if ($t(d.value, y)) {
                        if (d.children === u.children && !dt.current) {
                            t = En(e, t, o);
                            break e
                        }
                    } else
                        for (d = t.child,
                        d !== null && (d.return = t); d !== null; ) {
                            var k = d.dependencies;
                            if (k !== null) {
                                y = d.child;
                                for (var P = k.firstContext; P !== null; ) {
                                    if (P.context === a) {
                                        if (d.tag === 1) {
                                            P = Cn(-1, o & -o),
                                            P.tag = 2;
                                            var D = d.updateQueue;
                                            if (D !== null) {
                                                D = D.shared;
                                                var V = D.pending;
                                                V === null ? P.next = P : (P.next = V.next,
                                                V.next = P),
                                                D.pending = P
                                            }
                                        }
                                        d.lanes |= o,
                                        P = d.alternate,
                                        P !== null && (P.lanes |= o),
                                        yl(d.return, o, t),
                                        k.lanes |= o;
                                        break
                                    }
                                    P = P.next
                                }
                            } else if (d.tag === 10)
                                y = d.type === t.type ? null : d.child;
                            else if (d.tag === 18) {
                                if (y = d.return,
                                y === null)
                                    throw Error(s(341));
                                y.lanes |= o,
                                k = y.alternate,
                                k !== null && (k.lanes |= o),
                                yl(y, o, t),
                                y = d.sibling
                            } else
                                y = d.child;
                            if (y !== null)
                                y.return = d;
                            else
                                for (y = d; y !== null; ) {
                                    if (y === t) {
                                        y = null;
                                        break
                                    }
                                    if (d = y.sibling,
                                    d !== null) {
                                        d.return = y.return,
                                        y = d;
                                        break
                                    }
                                    y = y.return
                                }
                            d = y
                        }
                st(e, t, u.children, o),
                t = t.child
            }
            return t;
        case 9:
            return u = t.type,
            a = t.pendingProps.children,
            Wr(t, o),
            u = _t(u),
            a = a(u),
            t.flags |= 1,
            st(e, t, a, o),
            t.child;
        case 14:
            return a = t.type,
            u = Ut(a, t.pendingProps),
            u = Ut(a.type, u),
            Pf(e, t, a, u, o);
        case 15:
            return Rf(e, t, t.type, t.pendingProps, o);
        case 17:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Ut(a, u),
            li(e, t),
            t.tag = 1,
            ft(a) ? (e = !0,
            Ws(t)) : e = !1,
            Wr(t, o),
            xf(t, a, u),
            Ol(t, a, u, o),
            Fl(null, t, a, !0, e, o);
        case 19:
            return Df(e, t, o);
        case 22:
            return Tf(e, t, o)
        }
        throw Error(s(156, t.tag))
    }
    ;
    function ip(e, t) {
        return Fc(e, t)
    }
    function O0(e, t, o, a) {
        this.tag = e,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function It(e, t, o, a) {
        return new O0(e,t,o,a)
    }
    function ou(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function I0(e) {
        if (typeof e == "function")
            return ou(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === X)
                return 11;
            if (e === ye)
                return 14
        }
        return 2
    }
    function qn(e, t) {
        var o = e.alternate;
        return o === null ? (o = It(e.tag, t, e.key, e.mode),
        o.elementType = e.elementType,
        o.type = e.type,
        o.stateNode = e.stateNode,
        o.alternate = e,
        e.alternate = o) : (o.pendingProps = t,
        o.type = e.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = e.flags & 14680064,
        o.childLanes = e.childLanes,
        o.lanes = e.lanes,
        o.child = e.child,
        o.memoizedProps = e.memoizedProps,
        o.memoizedState = e.memoizedState,
        o.updateQueue = e.updateQueue,
        t = e.dependencies,
        o.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        o.sibling = e.sibling,
        o.index = e.index,
        o.ref = e.ref,
        o
    }
    function xi(e, t, o, a, u, d) {
        var y = 2;
        if (a = e,
        typeof e == "function")
            ou(e) && (y = 1);
        else if (typeof e == "string")
            y = 5;
        else
            e: switch (e) {
            case G:
                return gr(o.children, u, d, t);
            case Z:
                y = 8,
                u |= 8;
                break;
            case ce:
                return e = It(12, o, t, u | 2),
                e.elementType = ce,
                e.lanes = d,
                e;
            case me:
                return e = It(13, o, t, u),
                e.elementType = me,
                e.lanes = d,
                e;
            case q:
                return e = It(19, o, t, u),
                e.elementType = q,
                e.lanes = d,
                e;
            case se:
                return wi(o, u, d, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case le:
                        y = 10;
                        break e;
                    case he:
                        y = 9;
                        break e;
                    case X:
                        y = 11;
                        break e;
                    case ye:
                        y = 14;
                        break e;
                    case ne:
                        y = 16,
                        a = null;
                        break e
                    }
                throw Error(s(130, e == null ? e : typeof e, ""))
            }
        return t = It(y, o, t, u),
        t.elementType = e,
        t.type = a,
        t.lanes = d,
        t
    }
    function gr(e, t, o, a) {
        return e = It(7, e, a, t),
        e.lanes = o,
        e
    }
    function wi(e, t, o, a) {
        return e = It(22, e, a, t),
        e.elementType = se,
        e.lanes = o,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function su(e, t, o) {
        return e = It(6, e, null, t),
        e.lanes = o,
        e
    }
    function iu(e, t, o) {
        return t = It(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = o,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function D0(e, t, o, a, u) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Aa(0),
        this.expirationTimes = Aa(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Aa(0),
        this.identifierPrefix = a,
        this.onRecoverableError = u,
        this.mutableSourceEagerHydrationData = null
    }
    function au(e, t, o, a, u, d, y, k, P) {
        return e = new D0(e,t,o,k,P),
        t === 1 ? (t = 1,
        d === !0 && (t |= 8)) : t = 0,
        d = It(3, null, null, t),
        e.current = d,
        d.stateNode = e,
        d.memoizedState = {
            element: a,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        wl(d),
        e
    }
    function L0(e, t, o) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: W,
            key: a == null ? null : "" + a,
            children: e,
            containerInfo: t,
            implementation: o
        }
    }
    function ap(e) {
        if (!e)
            return $n;
        e = e._reactInternals;
        e: {
            if (sr(e) !== e || e.tag !== 1)
                throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ft(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var o = e.type;
            if (ft(o))
                return Od(e, o, t)
        }
        return t
    }
    function lp(e, t, o, a, u, d, y, k, P) {
        return e = au(o, a, !0, e, u, d, y, k, P),
        e.context = ap(null),
        o = e.current,
        a = it(),
        u = Gn(o),
        d = Cn(a, u),
        d.callback = t ?? null,
        Vn(o, d, u),
        e.current.lanes = u,
        yo(e, u, a),
        mt(e, a),
        e
    }
    function bi(e, t, o, a) {
        var u = t.current
          , d = it()
          , y = Gn(u);
        return o = ap(o),
        t.context === null ? t.context = o : t.pendingContext = o,
        t = Cn(d, y),
        t.payload = {
            element: e
        },
        a = a === void 0 ? null : a,
        a !== null && (t.callback = a),
        e = Vn(u, t, y),
        e !== null && (Ht(e, u, y, d),
        Zs(e, u, y)),
        y
    }
    function Si(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function up(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var o = e.retryLane;
            e.retryLane = o !== 0 && o < t ? o : t
        }
    }
    function lu(e, t) {
        up(e, t),
        (e = e.alternate) && up(e, t)
    }
    function F0() {
        return null
    }
    var cp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function uu(e) {
        this._internalRoot = e
    }
    Ci.prototype.render = uu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(s(409));
        bi(e, t, null, null)
    }
    ,
    Ci.prototype.unmount = uu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            hr(function() {
                bi(null, e, null, null)
            }),
            t[yn] = null
        }
    }
    ;
    function Ci(e) {
        this._internalRoot = e
    }
    Ci.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Kc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var o = 0; o < In.length && t !== 0 && t < In[o].priority; o++)
                ;
            In.splice(o, 0, e),
            o === 0 && qc(e)
        }
    }
    ;
    function cu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function Ei(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function dp() {}
    function z0(e, t, o, a, u) {
        if (u) {
            if (typeof a == "function") {
                var d = a;
                a = function() {
                    var D = Si(y);
                    d.call(D)
                }
            }
            var y = lp(t, a, e, 0, null, !1, !1, "", dp);
            return e._reactRootContainer = y,
            e[yn] = y.current,
            _o(e.nodeType === 8 ? e.parentNode : e),
            hr(),
            y
        }
        for (; u = e.lastChild; )
            e.removeChild(u);
        if (typeof a == "function") {
            var k = a;
            a = function() {
                var D = Si(P);
                k.call(D)
            }
        }
        var P = au(e, 0, !1, null, null, !1, !1, "", dp);
        return e._reactRootContainer = P,
        e[yn] = P.current,
        _o(e.nodeType === 8 ? e.parentNode : e),
        hr(function() {
            bi(t, P, o, a)
        }),
        P
    }
    function ki(e, t, o, a, u) {
        var d = o._reactRootContainer;
        if (d) {
            var y = d;
            if (typeof u == "function") {
                var k = u;
                u = function() {
                    var P = Si(y);
                    k.call(P)
                }
            }
            bi(t, y, e, u)
        } else
            y = z0(o, t, e, u, a);
        return Si(y)
    }
    Wc = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var o = go(t.pendingLanes);
                o !== 0 && (Oa(t, o | 1),
                mt(t, Be()),
                (Ce & 6) === 0 && (qr = Be() + 500,
                Bn()))
            }
            break;
        case 13:
            hr(function() {
                var a = Sn(e, 1);
                if (a !== null) {
                    var u = it();
                    Ht(a, e, 1, u)
                }
            }),
            lu(e, 1)
        }
    }
    ,
    Ia = function(e) {
        if (e.tag === 13) {
            var t = Sn(e, 134217728);
            if (t !== null) {
                var o = it();
                Ht(t, e, 134217728, o)
            }
            lu(e, 134217728)
        }
    }
    ,
    Hc = function(e) {
        if (e.tag === 13) {
            var t = Gn(e)
              , o = Sn(e, t);
            if (o !== null) {
                var a = it();
                Ht(o, e, t, a)
            }
            lu(e, t)
        }
    }
    ,
    Kc = function() {
        return Re
    }
    ,
    Gc = function(e, t) {
        var o = Re;
        try {
            return Re = e,
            t()
        } finally {
            Re = o
        }
    }
    ,
    Rr = function(e, t, o) {
        switch (t) {
        case "input":
            if (fo(e, o),
            t = o.name,
            o.type === "radio" && t != null) {
                for (o = e; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < o.length; t++) {
                    var a = o[t];
                    if (a !== e && a.form === e.form) {
                        var u = Us(a);
                        if (!u)
                            throw Error(s(90));
                        Tn(a),
                        fo(a, u)
                    }
                }
            }
            break;
        case "textarea":
            hs(e, o);
            break;
        case "select":
            t = o.value,
            t != null && Tt(e, !!o.multiple, t, !1)
        }
    }
    ,
    Ne = tu,
    je = hr;
    var $0 = {
        usingClientEntryPoint: !1,
        Events: [Io, Dr, Us, xs, xe, tu]
    }
      , qo = {
        findFiberByHostInstance: ir,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , B0 = {
        bundleType: qo.bundleType,
        version: qo.version,
        rendererPackageName: qo.rendererPackageName,
        rendererConfig: qo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: L.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Dc(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: qo.findFiberByHostInstance || F0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ni.isDisabled && Ni.supportsFiber)
            try {
                Cs = Ni.inject(B0),
                rn = Ni
            } catch {}
    }
    return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0,
    vt.createPortal = function(e, t) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!cu(t))
            throw Error(s(200));
        return L0(e, t, null, o)
    }
    ,
    vt.createRoot = function(e, t) {
        if (!cu(e))
            throw Error(s(299));
        var o = !1
          , a = ""
          , u = cp;
        return t != null && (t.unstable_strictMode === !0 && (o = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        t = au(e, 1, !1, null, null, o, !1, a, u),
        e[yn] = t.current,
        _o(e.nodeType === 8 ? e.parentNode : e),
        new uu(t)
    }
    ,
    vt.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","),
            Error(s(268, e)));
        return e = Dc(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    vt.flushSync = function(e) {
        return hr(e)
    }
    ,
    vt.hydrate = function(e, t, o) {
        if (!Ei(t))
            throw Error(s(200));
        return ki(null, e, t, !0, o)
    }
    ,
    vt.hydrateRoot = function(e, t, o) {
        if (!cu(e))
            throw Error(s(405));
        var a = o != null && o.hydratedSources || null
          , u = !1
          , d = ""
          , y = cp;
        if (o != null && (o.unstable_strictMode === !0 && (u = !0),
        o.identifierPrefix !== void 0 && (d = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (y = o.onRecoverableError)),
        t = lp(t, null, e, 1, o ?? null, u, !1, d, y),
        e[yn] = t.current,
        _o(e),
        a)
            for (e = 0; e < a.length; e++)
                o = a[e],
                u = o._getVersion,
                u = u(o._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [o, u] : t.mutableSourceEagerHydrationData.push(o, u);
        return new Ci(t)
    }
    ,
    vt.render = function(e, t, o) {
        if (!Ei(t))
            throw Error(s(200));
        return ki(null, e, t, !1, o)
    }
    ,
    vt.unmountComponentAtNode = function(e) {
        if (!Ei(e))
            throw Error(s(40));
        return e._reactRootContainer ? (hr(function() {
            ki(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[yn] = null
            })
        }),
        !0) : !1
    }
    ,
    vt.unstable_batchedUpdates = tu,
    vt.unstable_renderSubtreeIntoContainer = function(e, t, o, a) {
        if (!Ei(o))
            throw Error(s(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(s(38));
        return ki(e, t, o, !1, a)
    }
    ,
    vt.version = "18.3.1-next-f1338f8080-20240426",
    vt
}
var xp;
function Ch() {
    if (xp)
        return pu.exports;
    xp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    pu.exports = q0(),
    pu.exports
}
var wp;
function Y0() {
    if (wp)
        return Pi;
    wp = 1;
    var n = Ch();
    return Pi.createRoot = n.createRoot,
    Pi.hydrateRoot = n.hydrateRoot,
    Pi
}
var X0 = Y0()
  , m = Ju();
const H = Sh(m)
  , ra = V0({
    __proto__: null,
    default: H
}, [m])
  , Z0 = 1
  , J0 = 1e6;
let vu = 0;
function ex() {
    return vu = (vu + 1) % Number.MAX_SAFE_INTEGER,
    vu.toString()
}
const gu = new Map
  , bp = n => {
    if (gu.has(n))
        return;
    const r = setTimeout( () => {
        gu.delete(n),
        es({
            type: "REMOVE_TOAST",
            toastId: n
        })
    }
    , J0);
    gu.set(n, r)
}
  , tx = (n, r) => {
    switch (r.type) {
    case "ADD_TOAST":
        return {
            ...n,
            toasts: [r.toast, ...n.toasts].slice(0, Z0)
        };
    case "UPDATE_TOAST":
        return {
            ...n,
            toasts: n.toasts.map(s => s.id === r.toast.id ? {
                ...s,
                ...r.toast
            } : s)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: s} = r;
            return s ? bp(s) : n.toasts.forEach(i => {
                bp(i.id)
            }
            ),
            {
                ...n,
                toasts: n.toasts.map(i => i.id === s || s === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case "REMOVE_TOAST":
        return r.toastId === void 0 ? {
            ...n,
            toasts: []
        } : {
            ...n,
            toasts: n.toasts.filter(s => s.id !== r.toastId)
        }
    }
}
  , Li = [];
let Fi = {
    toasts: []
};
function es(n) {
    Fi = tx(Fi, n),
    Li.forEach(r => {
        r(Fi)
    }
    )
}
function nx({...n}) {
    const r = ex()
      , s = l => es({
        type: "UPDATE_TOAST",
        toast: {
            ...l,
            id: r
        }
    })
      , i = () => es({
        type: "DISMISS_TOAST",
        toastId: r
    });
    return es({
        type: "ADD_TOAST",
        toast: {
            ...n,
            id: r,
            open: !0,
            onOpenChange: l => {
                l || i()
            }
        }
    }),
    {
        id: r,
        dismiss: i,
        update: s
    }
}
function rx() {
    const [n,r] = m.useState(Fi);
    return m.useEffect( () => (Li.push(r),
    () => {
        const s = Li.indexOf(r);
        s > -1 && Li.splice(s, 1)
    }
    ), [n]),
    {
        ...n,
        toast: nx,
        dismiss: s => es({
            type: "DISMISS_TOAST",
            toastId: s
        })
    }
}
var oa = Ch();
const Eh = Sh(oa);
function ue(n, r, {checkForDefaultPrevented: s=!0}={}) {
    return function(l) {
        if (n?.(l),
        s === !1 || !l.defaultPrevented)
            return r?.(l)
    }
}
function Sp(n, r) {
    if (typeof n == "function")
        return n(r);
    n != null && (n.current = r)
}
function xr(...n) {
    return r => {
        let s = !1;
        const i = n.map(l => {
            const c = Sp(l, r);
            return !s && typeof c == "function" && (s = !0),
            c
        }
        );
        if (s)
            return () => {
                for (let l = 0; l < i.length; l++) {
                    const c = i[l];
                    typeof c == "function" ? c() : Sp(n[l], null)
                }
            }
    }
}
function $e(...n) {
    return m.useCallback(xr(...n), n)
}
function hn(n, r=[]) {
    let s = [];
    function i(c, f) {
        const p = m.createContext(f)
          , v = s.length;
        s = [...s, f];
        const g = w => {
            const {scope: E, children: b, ...N} = w
              , S = E?.[n]?.[v] || p
              , C = m.useMemo( () => N, Object.values(N));
            return h.jsx(S.Provider, {
                value: C,
                children: b
            })
        }
        ;
        g.displayName = c + "Provider";
        function x(w, E) {
            const b = E?.[n]?.[v] || p
              , N = m.useContext(b);
            if (N)
                return N;
            if (f !== void 0)
                return f;
            throw new Error(`\`${w}\` must be used within \`${c}\``)
        }
        return [g, x]
    }
    const l = () => {
        const c = s.map(f => m.createContext(f));
        return function(p) {
            const v = p?.[n] || c;
            return m.useMemo( () => ({
                [`__scope${n}`]: {
                    ...p,
                    [n]: v
                }
            }), [p, v])
        }
    }
    ;
    return l.scopeName = n,
    [i, ox(l, ...r)]
}
function ox(...n) {
    const r = n[0];
    if (n.length === 1)
        return r;
    const s = () => {
        const i = n.map(l => ({
            useScope: l(),
            scopeName: l.scopeName
        }));
        return function(c) {
            const f = i.reduce( (p, {useScope: v, scopeName: g}) => {
                const w = v(c)[`__scope${g}`];
                return {
                    ...p,
                    ...w
                }
            }
            , {});
            return m.useMemo( () => ({
                [`__scope${r.scopeName}`]: f
            }), [f])
        }
    }
    ;
    return s.scopeName = r.scopeName,
    s
}
function Cp(n) {
    const r = sx(n)
      , s = m.forwardRef( (i, l) => {
        const {children: c, ...f} = i
          , p = m.Children.toArray(c)
          , v = p.find(ax);
        if (v) {
            const g = v.props.children
              , x = p.map(w => w === v ? m.Children.count(g) > 1 ? m.Children.only(null) : m.isValidElement(g) ? g.props.children : null : w);
            return h.jsx(r, {
                ...f,
                ref: l,
                children: m.isValidElement(g) ? m.cloneElement(g, void 0, x) : null
            })
        }
        return h.jsx(r, {
            ...f,
            ref: l,
            children: c
        })
    }
    );
    return s.displayName = `${n}.Slot`,
    s
}
function sx(n) {
    const r = m.forwardRef( (s, i) => {
        const {children: l, ...c} = s;
        if (m.isValidElement(l)) {
            const f = ux(l)
              , p = lx(c, l.props);
            return l.type !== m.Fragment && (p.ref = i ? xr(i, f) : f),
            m.cloneElement(l, p)
        }
        return m.Children.count(l) > 1 ? m.Children.only(null) : null
    }
    );
    return r.displayName = `${n}.SlotClone`,
    r
}
var ix = Symbol("radix.slottable");
function ax(n) {
    return m.isValidElement(n) && typeof n.type == "function" && "__radixId"in n.type && n.type.__radixId === ix
}
function lx(n, r) {
    const s = {
        ...r
    };
    for (const i in r) {
        const l = n[i]
          , c = r[i];
        /^on[A-Z]/.test(i) ? l && c ? s[i] = (...p) => {
            const v = c(...p);
            return l(...p),
            v
        }
        : l && (s[i] = l) : i === "style" ? s[i] = {
            ...l,
            ...c
        } : i === "className" && (s[i] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...n,
        ...s
    }
}
function ux(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , s = r && "isReactWarning"in r && r.isReactWarning;
    return s ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    s = r && "isReactWarning"in r && r.isReactWarning,
    s ? n.props.ref : n.props.ref || n.ref)
}
function sa(n) {
    const r = n + "CollectionProvider"
      , [s,i] = hn(r)
      , [l,c] = s(r, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , f = S => {
        const {scope: C, children: R} = S
          , M = H.useRef(null)
          , _ = H.useRef(new Map).current;
        return h.jsx(l, {
            scope: C,
            itemMap: _,
            collectionRef: M,
            children: R
        })
    }
    ;
    f.displayName = r;
    const p = n + "CollectionSlot"
      , v = Cp(p)
      , g = H.forwardRef( (S, C) => {
        const {scope: R, children: M} = S
          , _ = c(p, R)
          , L = $e(C, _.collectionRef);
        return h.jsx(v, {
            ref: L,
            children: M
        })
    }
    );
    g.displayName = p;
    const x = n + "CollectionItemSlot"
      , w = "data-radix-collection-item"
      , E = Cp(x)
      , b = H.forwardRef( (S, C) => {
        const {scope: R, children: M, ..._} = S
          , L = H.useRef(null)
          , $ = $e(C, L)
          , W = c(x, R);
        return H.useEffect( () => (W.itemMap.set(L, {
            ref: L,
            ..._
        }),
        () => void W.itemMap.delete(L))),
        h.jsx(E, {
            [w]: "",
            ref: $,
            children: M
        })
    }
    );
    b.displayName = x;
    function N(S) {
        const C = c(n + "CollectionConsumer", S);
        return H.useCallback( () => {
            const M = C.collectionRef.current;
            if (!M)
                return [];
            const _ = Array.from(M.querySelectorAll(`[${w}]`));
            return Array.from(C.itemMap.values()).sort( (W, G) => _.indexOf(W.ref.current) - _.indexOf(G.ref.current))
        }
        , [C.collectionRef, C.itemMap])
    }
    return [{
        Provider: f,
        Slot: g,
        ItemSlot: b
    }, N, i]
}
function cx(n) {
    const r = dx(n)
      , s = m.forwardRef( (i, l) => {
        const {children: c, ...f} = i
          , p = m.Children.toArray(c)
          , v = p.find(px);
        if (v) {
            const g = v.props.children
              , x = p.map(w => w === v ? m.Children.count(g) > 1 ? m.Children.only(null) : m.isValidElement(g) ? g.props.children : null : w);
            return h.jsx(r, {
                ...f,
                ref: l,
                children: m.isValidElement(g) ? m.cloneElement(g, void 0, x) : null
            })
        }
        return h.jsx(r, {
            ...f,
            ref: l,
            children: c
        })
    }
    );
    return s.displayName = `${n}.Slot`,
    s
}
function dx(n) {
    const r = m.forwardRef( (s, i) => {
        const {children: l, ...c} = s;
        if (m.isValidElement(l)) {
            const f = mx(l)
              , p = hx(c, l.props);
            return l.type !== m.Fragment && (p.ref = i ? xr(i, f) : f),
            m.cloneElement(l, p)
        }
        return m.Children.count(l) > 1 ? m.Children.only(null) : null
    }
    );
    return r.displayName = `${n}.SlotClone`,
    r
}
var fx = Symbol("radix.slottable");
function px(n) {
    return m.isValidElement(n) && typeof n.type == "function" && "__radixId"in n.type && n.type.__radixId === fx
}
function hx(n, r) {
    const s = {
        ...r
    };
    for (const i in r) {
        const l = n[i]
          , c = r[i];
        /^on[A-Z]/.test(i) ? l && c ? s[i] = (...p) => {
            const v = c(...p);
            return l(...p),
            v
        }
        : l && (s[i] = l) : i === "style" ? s[i] = {
            ...l,
            ...c
        } : i === "className" && (s[i] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...n,
        ...s
    }
}
function mx(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , s = r && "isReactWarning"in r && r.isReactWarning;
    return s ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    s = r && "isReactWarning"in r && r.isReactWarning,
    s ? n.props.ref : n.props.ref || n.ref)
}
var vx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Pe = vx.reduce( (n, r) => {
    const s = cx(`Primitive.${r}`)
      , i = m.forwardRef( (l, c) => {
        const {asChild: f, ...p} = l
          , v = f ? s : r;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        h.jsx(v, {
            ...p,
            ref: c
        })
    }
    );
    return i.displayName = `Primitive.${r}`,
    {
        ...n,
        [r]: i
    }
}
, {});
function ec(n, r) {
    n && oa.flushSync( () => n.dispatchEvent(r))
}
function Nt(n) {
    const r = m.useRef(n);
    return m.useEffect( () => {
        r.current = n
    }
    ),
    m.useMemo( () => (...s) => r.current?.(...s), [])
}
function gx(n, r=globalThis?.document) {
    const s = Nt(n);
    m.useEffect( () => {
        const i = l => {
            l.key === "Escape" && s(l)
        }
        ;
        return r.addEventListener("keydown", i, {
            capture: !0
        }),
        () => r.removeEventListener("keydown", i, {
            capture: !0
        })
    }
    , [s, r])
}
var yx = "DismissableLayer", ju = "dismissableLayer.update", xx = "dismissableLayer.pointerDownOutside", wx = "dismissableLayer.focusOutside", Ep, kh = m.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ia = m.forwardRef( (n, r) => {
    const {disableOutsidePointerEvents: s=!1, onEscapeKeyDown: i, onPointerDownOutside: l, onFocusOutside: c, onInteractOutside: f, onDismiss: p, ...v} = n
      , g = m.useContext(kh)
      , [x,w] = m.useState(null)
      , E = x?.ownerDocument ?? globalThis?.document
      , [,b] = m.useState({})
      , N = $e(r, G => w(G))
      , S = Array.from(g.layers)
      , [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1)
      , R = S.indexOf(C)
      , M = x ? S.indexOf(x) : -1
      , _ = g.layersWithOutsidePointerEventsDisabled.size > 0
      , L = M >= R
      , $ = Sx(G => {
        const Z = G.target
          , ce = [...g.branches].some(le => le.contains(Z));
        !L || ce || (l?.(G),
        f?.(G),
        G.defaultPrevented || p?.())
    }
    , E)
      , W = Cx(G => {
        const Z = G.target;
        [...g.branches].some(le => le.contains(Z)) || (c?.(G),
        f?.(G),
        G.defaultPrevented || p?.())
    }
    , E);
    return gx(G => {
        M === g.layers.size - 1 && (i?.(G),
        !G.defaultPrevented && p && (G.preventDefault(),
        p()))
    }
    , E),
    m.useEffect( () => {
        if (x)
            return s && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Ep = E.body.style.pointerEvents,
            E.body.style.pointerEvents = "none"),
            g.layersWithOutsidePointerEventsDisabled.add(x)),
            g.layers.add(x),
            kp(),
            () => {
                s && g.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = Ep)
            }
    }
    , [x, E, s, g]),
    m.useEffect( () => () => {
        x && (g.layers.delete(x),
        g.layersWithOutsidePointerEventsDisabled.delete(x),
        kp())
    }
    , [x, g]),
    m.useEffect( () => {
        const G = () => b({});
        return document.addEventListener(ju, G),
        () => document.removeEventListener(ju, G)
    }
    , []),
    h.jsx(Pe.div, {
        ...v,
        ref: N,
        style: {
            pointerEvents: _ ? L ? "auto" : "none" : void 0,
            ...n.style
        },
        onFocusCapture: ue(n.onFocusCapture, W.onFocusCapture),
        onBlurCapture: ue(n.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: ue(n.onPointerDownCapture, $.onPointerDownCapture)
    })
}
);
ia.displayName = yx;
var bx = "DismissableLayerBranch"
  , Nh = m.forwardRef( (n, r) => {
    const s = m.useContext(kh)
      , i = m.useRef(null)
      , l = $e(r, i);
    return m.useEffect( () => {
        const c = i.current;
        if (c)
            return s.branches.add(c),
            () => {
                s.branches.delete(c)
            }
    }
    , [s.branches]),
    h.jsx(Pe.div, {
        ...n,
        ref: l
    })
}
);
Nh.displayName = bx;
function Sx(n, r=globalThis?.document) {
    const s = Nt(n)
      , i = m.useRef(!1)
      , l = m.useRef( () => {}
    );
    return m.useEffect( () => {
        const c = p => {
            if (p.target && !i.current) {
                let v = function() {
                    Ph(xx, s, g, {
                        discrete: !0
                    })
                };
                const g = {
                    originalEvent: p
                };
                p.pointerType === "touch" ? (r.removeEventListener("click", l.current),
                l.current = v,
                r.addEventListener("click", l.current, {
                    once: !0
                })) : v()
            } else
                r.removeEventListener("click", l.current);
            i.current = !1
        }
          , f = window.setTimeout( () => {
            r.addEventListener("pointerdown", c)
        }
        , 0);
        return () => {
            window.clearTimeout(f),
            r.removeEventListener("pointerdown", c),
            r.removeEventListener("click", l.current)
        }
    }
    , [r, s]),
    {
        onPointerDownCapture: () => i.current = !0
    }
}
function Cx(n, r=globalThis?.document) {
    const s = Nt(n)
      , i = m.useRef(!1);
    return m.useEffect( () => {
        const l = c => {
            c.target && !i.current && Ph(wx, s, {
                originalEvent: c
            }, {
                discrete: !1
            })
        }
        ;
        return r.addEventListener("focusin", l),
        () => r.removeEventListener("focusin", l)
    }
    , [r, s]),
    {
        onFocusCapture: () => i.current = !0,
        onBlurCapture: () => i.current = !1
    }
}
function kp() {
    const n = new CustomEvent(ju);
    document.dispatchEvent(n)
}
function Ph(n, r, s, {discrete: i}) {
    const l = s.originalEvent.target
      , c = new CustomEvent(n,{
        bubbles: !1,
        cancelable: !0,
        detail: s
    });
    r && l.addEventListener(n, r, {
        once: !0
    }),
    i ? ec(l, c) : l.dispatchEvent(c)
}
var Ex = ia
  , kx = Nh
  , fn = globalThis?.document ? m.useLayoutEffect : () => {}
  , Nx = "Portal"
  , tc = m.forwardRef( (n, r) => {
    const {container: s, ...i} = n
      , [l,c] = m.useState(!1);
    fn( () => c(!0), []);
    const f = s || l && globalThis?.document?.body;
    return f ? Eh.createPortal(h.jsx(Pe.div, {
        ...i,
        ref: r
    }), f) : null
}
);
tc.displayName = Nx;
function Px(n, r) {
    return m.useReducer( (s, i) => r[s][i] ?? s, n)
}
var rr = n => {
    const {present: r, children: s} = n
      , i = Rx(r)
      , l = typeof s == "function" ? s({
        present: i.isPresent
    }) : m.Children.only(s)
      , c = $e(i.ref, Tx(l));
    return typeof s == "function" || i.isPresent ? m.cloneElement(l, {
        ref: c
    }) : null
}
;
rr.displayName = "Presence";
function Rx(n) {
    const [r,s] = m.useState()
      , i = m.useRef(null)
      , l = m.useRef(n)
      , c = m.useRef("none")
      , f = n ? "mounted" : "unmounted"
      , [p,v] = Px(f, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return m.useEffect( () => {
        const g = Ri(i.current);
        c.current = p === "mounted" ? g : "none"
    }
    , [p]),
    fn( () => {
        const g = i.current
          , x = l.current;
        if (x !== n) {
            const E = c.current
              , b = Ri(g);
            n ? v("MOUNT") : b === "none" || g?.display === "none" ? v("UNMOUNT") : v(x && E !== b ? "ANIMATION_OUT" : "UNMOUNT"),
            l.current = n
        }
    }
    , [n, v]),
    fn( () => {
        if (r) {
            let g;
            const x = r.ownerDocument.defaultView ?? window
              , w = b => {
                const S = Ri(i.current).includes(CSS.escape(b.animationName));
                if (b.target === r && S && (v("ANIMATION_END"),
                !l.current)) {
                    const C = r.style.animationFillMode;
                    r.style.animationFillMode = "forwards",
                    g = x.setTimeout( () => {
                        r.style.animationFillMode === "forwards" && (r.style.animationFillMode = C)
                    }
                    )
                }
            }
              , E = b => {
                b.target === r && (c.current = Ri(i.current))
            }
            ;
            return r.addEventListener("animationstart", E),
            r.addEventListener("animationcancel", w),
            r.addEventListener("animationend", w),
            () => {
                x.clearTimeout(g),
                r.removeEventListener("animationstart", E),
                r.removeEventListener("animationcancel", w),
                r.removeEventListener("animationend", w)
            }
        } else
            v("ANIMATION_END")
    }
    , [r, v]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(p),
        ref: m.useCallback(g => {
            i.current = g ? getComputedStyle(g) : null,
            s(g)
        }
        , [])
    }
}
function Ri(n) {
    return n?.animationName || "none"
}
function Tx(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , s = r && "isReactWarning"in r && r.isReactWarning;
    return s ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    s = r && "isReactWarning"in r && r.isReactWarning,
    s ? n.props.ref : n.props.ref || n.ref)
}
var jx = ra[" useInsertionEffect ".trim().toString()] || fn;
function wr({prop: n, defaultProp: r, onChange: s= () => {}
, caller: i}) {
    const [l,c,f] = Mx({
        defaultProp: r,
        onChange: s
    })
      , p = n !== void 0
      , v = p ? n : l;
    {
        const x = m.useRef(n !== void 0);
        m.useEffect( () => {
            const w = x.current;
            w !== p && console.warn(`${i} is changing from ${w ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            x.current = p
        }
        , [p, i])
    }
    const g = m.useCallback(x => {
        if (p) {
            const w = _x(x) ? x(n) : x;
            w !== n && f.current?.(w)
        } else
            c(x)
    }
    , [p, n, c, f]);
    return [v, g]
}
function Mx({defaultProp: n, onChange: r}) {
    const [s,i] = m.useState(n)
      , l = m.useRef(s)
      , c = m.useRef(r);
    return jx( () => {
        c.current = r
    }
    , [r]),
    m.useEffect( () => {
        l.current !== s && (c.current?.(s),
        l.current = s)
    }
    , [s, l]),
    [s, i, c]
}
function _x(n) {
    return typeof n == "function"
}
var Ax = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Ox = "VisuallyHidden"
  , aa = m.forwardRef( (n, r) => h.jsx(Pe.span, {
    ...n,
    ref: r,
    style: {
        ...Ax,
        ...n.style
    }
}));
aa.displayName = Ox;
var Ix = aa
  , nc = "ToastProvider"
  , [rc,Dx,Lx] = sa("Toast")
  , [Rh] = hn("Toast", [Lx])
  , [Fx,la] = Rh(nc)
  , Th = n => {
    const {__scopeToast: r, label: s="Notification", duration: i=5e3, swipeDirection: l="right", swipeThreshold: c=50, children: f} = n
      , [p,v] = m.useState(null)
      , [g,x] = m.useState(0)
      , w = m.useRef(!1)
      , E = m.useRef(!1);
    return s.trim() || console.error(`Invalid prop \`label\` supplied to \`${nc}\`. Expected non-empty \`string\`.`),
    h.jsx(rc.Provider, {
        scope: r,
        children: h.jsx(Fx, {
            scope: r,
            label: s,
            duration: i,
            swipeDirection: l,
            swipeThreshold: c,
            toastCount: g,
            viewport: p,
            onViewportChange: v,
            onToastAdd: m.useCallback( () => x(b => b + 1), []),
            onToastRemove: m.useCallback( () => x(b => b - 1), []),
            isFocusedToastEscapeKeyDownRef: w,
            isClosePausedRef: E,
            children: f
        })
    })
}
;
Th.displayName = nc;
var jh = "ToastViewport"
  , zx = ["F8"]
  , Mu = "toast.viewportPause"
  , _u = "toast.viewportResume"
  , Mh = m.forwardRef( (n, r) => {
    const {__scopeToast: s, hotkey: i=zx, label: l="Notifications ({hotkey})", ...c} = n
      , f = la(jh, s)
      , p = Dx(s)
      , v = m.useRef(null)
      , g = m.useRef(null)
      , x = m.useRef(null)
      , w = m.useRef(null)
      , E = $e(r, w, f.onViewportChange)
      , b = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , N = f.toastCount > 0;
    m.useEffect( () => {
        const C = R => {
            i.length !== 0 && i.every(_ => R[_] || R.code === _) && w.current?.focus()
        }
        ;
        return document.addEventListener("keydown", C),
        () => document.removeEventListener("keydown", C)
    }
    , [i]),
    m.useEffect( () => {
        const C = v.current
          , R = w.current;
        if (N && C && R) {
            const M = () => {
                if (!f.isClosePausedRef.current) {
                    const W = new CustomEvent(Mu);
                    R.dispatchEvent(W),
                    f.isClosePausedRef.current = !0
                }
            }
              , _ = () => {
                if (f.isClosePausedRef.current) {
                    const W = new CustomEvent(_u);
                    R.dispatchEvent(W),
                    f.isClosePausedRef.current = !1
                }
            }
              , L = W => {
                !C.contains(W.relatedTarget) && _()
            }
              , $ = () => {
                C.contains(document.activeElement) || _()
            }
            ;
            return C.addEventListener("focusin", M),
            C.addEventListener("focusout", L),
            C.addEventListener("pointermove", M),
            C.addEventListener("pointerleave", $),
            window.addEventListener("blur", M),
            window.addEventListener("focus", _),
            () => {
                C.removeEventListener("focusin", M),
                C.removeEventListener("focusout", L),
                C.removeEventListener("pointermove", M),
                C.removeEventListener("pointerleave", $),
                window.removeEventListener("blur", M),
                window.removeEventListener("focus", _)
            }
        }
    }
    , [N, f.isClosePausedRef]);
    const S = m.useCallback( ({tabbingDirection: C}) => {
        const M = p().map(_ => {
            const L = _.ref.current
              , $ = [L, ...Zx(L)];
            return C === "forwards" ? $ : $.reverse()
        }
        );
        return (C === "forwards" ? M.reverse() : M).flat()
    }
    , [p]);
    return m.useEffect( () => {
        const C = w.current;
        if (C) {
            const R = M => {
                const _ = M.altKey || M.ctrlKey || M.metaKey;
                if (M.key === "Tab" && !_) {
                    const $ = document.activeElement
                      , W = M.shiftKey;
                    if (M.target === C && W) {
                        g.current?.focus();
                        return
                    }
                    const ce = S({
                        tabbingDirection: W ? "backwards" : "forwards"
                    })
                      , le = ce.findIndex(he => he === $);
                    yu(ce.slice(le + 1)) ? M.preventDefault() : W ? g.current?.focus() : x.current?.focus()
                }
            }
            ;
            return C.addEventListener("keydown", R),
            () => C.removeEventListener("keydown", R)
        }
    }
    , [p, S]),
    h.jsxs(kx, {
        ref: v,
        role: "region",
        "aria-label": l.replace("{hotkey}", b),
        tabIndex: -1,
        style: {
            pointerEvents: N ? void 0 : "none"
        },
        children: [N && h.jsx(Au, {
            ref: g,
            onFocusFromOutsideViewport: () => {
                const C = S({
                    tabbingDirection: "forwards"
                });
                yu(C)
            }
        }), h.jsx(rc.Slot, {
            scope: s,
            children: h.jsx(Pe.ol, {
                tabIndex: -1,
                ...c,
                ref: E
            })
        }), N && h.jsx(Au, {
            ref: x,
            onFocusFromOutsideViewport: () => {
                const C = S({
                    tabbingDirection: "backwards"
                });
                yu(C)
            }
        })]
    })
}
);
Mh.displayName = jh;
var _h = "ToastFocusProxy"
  , Au = m.forwardRef( (n, r) => {
    const {__scopeToast: s, onFocusFromOutsideViewport: i, ...l} = n
      , c = la(_h, s);
    return h.jsx(aa, {
        tabIndex: 0,
        ...l,
        ref: r,
        style: {
            position: "fixed"
        },
        onFocus: f => {
            const p = f.relatedTarget;
            !c.viewport?.contains(p) && i()
        }
    })
}
);
Au.displayName = _h;
var ls = "Toast"
  , $x = "toast.swipeStart"
  , Bx = "toast.swipeMove"
  , Ux = "toast.swipeCancel"
  , Vx = "toast.swipeEnd"
  , Ah = m.forwardRef( (n, r) => {
    const {forceMount: s, open: i, defaultOpen: l, onOpenChange: c, ...f} = n
      , [p,v] = wr({
        prop: i,
        defaultProp: l ?? !0,
        onChange: c,
        caller: ls
    });
    return h.jsx(rr, {
        present: s || p,
        children: h.jsx(Kx, {
            open: p,
            ...f,
            ref: r,
            onClose: () => v(!1),
            onPause: Nt(n.onPause),
            onResume: Nt(n.onResume),
            onSwipeStart: ue(n.onSwipeStart, g => {
                g.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ue(n.onSwipeMove, g => {
                const {x, y: w} = g.detail.delta;
                g.currentTarget.setAttribute("data-swipe", "move"),
                g.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`),
                g.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${w}px`)
            }
            ),
            onSwipeCancel: ue(n.onSwipeCancel, g => {
                g.currentTarget.setAttribute("data-swipe", "cancel"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ue(n.onSwipeEnd, g => {
                const {x, y: w} = g.detail.delta;
                g.currentTarget.setAttribute("data-swipe", "end"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                g.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`),
                g.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${w}px`),
                v(!1)
            }
            )
        })
    })
}
);
Ah.displayName = ls;
var [Wx,Hx] = Rh(ls, {
    onClose() {}
})
  , Kx = m.forwardRef( (n, r) => {
    const {__scopeToast: s, type: i="foreground", duration: l, open: c, onClose: f, onEscapeKeyDown: p, onPause: v, onResume: g, onSwipeStart: x, onSwipeMove: w, onSwipeCancel: E, onSwipeEnd: b, ...N} = n
      , S = la(ls, s)
      , [C,R] = m.useState(null)
      , M = $e(r, q => R(q))
      , _ = m.useRef(null)
      , L = m.useRef(null)
      , $ = l || S.duration
      , W = m.useRef(0)
      , G = m.useRef($)
      , Z = m.useRef(0)
      , {onToastAdd: ce, onToastRemove: le} = S
      , he = Nt( () => {
        C?.contains(document.activeElement) && S.viewport?.focus(),
        f()
    }
    )
      , X = m.useCallback(q => {
        !q || q === 1 / 0 || (window.clearTimeout(Z.current),
        W.current = new Date().getTime(),
        Z.current = window.setTimeout(he, q))
    }
    , [he]);
    m.useEffect( () => {
        const q = S.viewport;
        if (q) {
            const ye = () => {
                X(G.current),
                g?.()
            }
              , ne = () => {
                const se = new Date().getTime() - W.current;
                G.current = G.current - se,
                window.clearTimeout(Z.current),
                v?.()
            }
            ;
            return q.addEventListener(Mu, ne),
            q.addEventListener(_u, ye),
            () => {
                q.removeEventListener(Mu, ne),
                q.removeEventListener(_u, ye)
            }
        }
    }
    , [S.viewport, $, v, g, X]),
    m.useEffect( () => {
        c && !S.isClosePausedRef.current && X($)
    }
    , [c, $, S.isClosePausedRef, X]),
    m.useEffect( () => (ce(),
    () => le()), [ce, le]);
    const me = m.useMemo( () => C ? $h(C) : null, [C]);
    return S.viewport ? h.jsxs(h.Fragment, {
        children: [me && h.jsx(Gx, {
            __scopeToast: s,
            role: "status",
            "aria-live": i === "foreground" ? "assertive" : "polite",
            children: me
        }), h.jsx(Wx, {
            scope: s,
            onClose: he,
            children: oa.createPortal(h.jsx(rc.ItemSlot, {
                scope: s,
                children: h.jsx(Ex, {
                    asChild: !0,
                    onEscapeKeyDown: ue(p, () => {
                        S.isFocusedToastEscapeKeyDownRef.current || he(),
                        S.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: h.jsx(Pe.li, {
                        tabIndex: 0,
                        "data-state": c ? "open" : "closed",
                        "data-swipe-direction": S.swipeDirection,
                        ...N,
                        ref: M,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...n.style
                        },
                        onKeyDown: ue(n.onKeyDown, q => {
                            q.key === "Escape" && (p?.(q.nativeEvent),
                            q.nativeEvent.defaultPrevented || (S.isFocusedToastEscapeKeyDownRef.current = !0,
                            he()))
                        }
                        ),
                        onPointerDown: ue(n.onPointerDown, q => {
                            q.button === 0 && (_.current = {
                                x: q.clientX,
                                y: q.clientY
                            })
                        }
                        ),
                        onPointerMove: ue(n.onPointerMove, q => {
                            if (!_.current)
                                return;
                            const ye = q.clientX - _.current.x
                              , ne = q.clientY - _.current.y
                              , se = !!L.current
                              , z = ["left", "right"].includes(S.swipeDirection)
                              , I = ["left", "up"].includes(S.swipeDirection) ? Math.min : Math.max
                              , U = z ? I(0, ye) : 0
                              , T = z ? 0 : I(0, ne)
                              , F = q.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: U,
                                y: T
                            }
                              , J = {
                                originalEvent: q,
                                delta: Y
                            };
                            se ? (L.current = Y,
                            Ti(Bx, w, J, {
                                discrete: !1
                            })) : Np(Y, S.swipeDirection, F) ? (L.current = Y,
                            Ti($x, x, J, {
                                discrete: !1
                            }),
                            q.target.setPointerCapture(q.pointerId)) : (Math.abs(ye) > F || Math.abs(ne) > F) && (_.current = null)
                        }
                        ),
                        onPointerUp: ue(n.onPointerUp, q => {
                            const ye = L.current
                              , ne = q.target;
                            if (ne.hasPointerCapture(q.pointerId) && ne.releasePointerCapture(q.pointerId),
                            L.current = null,
                            _.current = null,
                            ye) {
                                const se = q.currentTarget
                                  , z = {
                                    originalEvent: q,
                                    delta: ye
                                };
                                Np(ye, S.swipeDirection, S.swipeThreshold) ? Ti(Vx, b, z, {
                                    discrete: !0
                                }) : Ti(Ux, E, z, {
                                    discrete: !0
                                }),
                                se.addEventListener("click", I => I.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), S.viewport)
        })]
    }) : null
}
)
  , Gx = n => {
    const {__scopeToast: r, children: s, ...i} = n
      , l = la(ls, r)
      , [c,f] = m.useState(!1)
      , [p,v] = m.useState(!1);
    return Yx( () => f(!0)),
    m.useEffect( () => {
        const g = window.setTimeout( () => v(!0), 1e3);
        return () => window.clearTimeout(g)
    }
    , []),
    p ? null : h.jsx(tc, {
        asChild: !0,
        children: h.jsx(aa, {
            ...i,
            children: c && h.jsxs(h.Fragment, {
                children: [l.label, " ", s]
            })
        })
    })
}
  , Qx = "ToastTitle"
  , Oh = m.forwardRef( (n, r) => {
    const {__scopeToast: s, ...i} = n;
    return h.jsx(Pe.div, {
        ...i,
        ref: r
    })
}
);
Oh.displayName = Qx;
var qx = "ToastDescription"
  , Ih = m.forwardRef( (n, r) => {
    const {__scopeToast: s, ...i} = n;
    return h.jsx(Pe.div, {
        ...i,
        ref: r
    })
}
);
Ih.displayName = qx;
var Dh = "ToastAction"
  , Lh = m.forwardRef( (n, r) => {
    const {altText: s, ...i} = n;
    return s.trim() ? h.jsx(zh, {
        altText: s,
        asChild: !0,
        children: h.jsx(oc, {
            ...i,
            ref: r
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Dh}\`. Expected non-empty \`string\`.`),
    null)
}
);
Lh.displayName = Dh;
var Fh = "ToastClose"
  , oc = m.forwardRef( (n, r) => {
    const {__scopeToast: s, ...i} = n
      , l = Hx(Fh, s);
    return h.jsx(zh, {
        asChild: !0,
        children: h.jsx(Pe.button, {
            type: "button",
            ...i,
            ref: r,
            onClick: ue(n.onClick, l.onClose)
        })
    })
}
);
oc.displayName = Fh;
var zh = m.forwardRef( (n, r) => {
    const {__scopeToast: s, altText: i, ...l} = n;
    return h.jsx(Pe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": i || void 0,
        ...l,
        ref: r
    })
}
);
function $h(n) {
    const r = [];
    return Array.from(n.childNodes).forEach(i => {
        if (i.nodeType === i.TEXT_NODE && i.textContent && r.push(i.textContent),
        Xx(i)) {
            const l = i.ariaHidden || i.hidden || i.style.display === "none"
              , c = i.dataset.radixToastAnnounceExclude === "";
            if (!l)
                if (c) {
                    const f = i.dataset.radixToastAnnounceAlt;
                    f && r.push(f)
                } else
                    r.push(...$h(i))
        }
    }
    ),
    r
}
function Ti(n, r, s, {discrete: i}) {
    const l = s.originalEvent.currentTarget
      , c = new CustomEvent(n,{
        bubbles: !0,
        cancelable: !0,
        detail: s
    });
    r && l.addEventListener(n, r, {
        once: !0
    }),
    i ? ec(l, c) : l.dispatchEvent(c)
}
var Np = (n, r, s=0) => {
    const i = Math.abs(n.x)
      , l = Math.abs(n.y)
      , c = i > l;
    return r === "left" || r === "right" ? c && i > s : !c && l > s
}
;
function Yx(n= () => {}
) {
    const r = Nt(n);
    fn( () => {
        let s = 0
          , i = 0;
        return s = window.requestAnimationFrame( () => i = window.requestAnimationFrame(r)),
        () => {
            window.cancelAnimationFrame(s),
            window.cancelAnimationFrame(i)
        }
    }
    , [r])
}
function Xx(n) {
    return n.nodeType === n.ELEMENT_NODE
}
function Zx(n) {
    const r = []
      , s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const l = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || l ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; s.nextNode(); )
        r.push(s.currentNode);
    return r
}
function yu(n) {
    const r = document.activeElement;
    return n.some(s => s === r ? !0 : (s.focus(),
    document.activeElement !== r))
}
var Jx = Th
  , Bh = Mh
  , Uh = Ah
  , Vh = Oh
  , Wh = Ih
  , Hh = Lh
  , Kh = oc;
function Gh(n) {
    var r, s, i = "";
    if (typeof n == "string" || typeof n == "number")
        i += n;
    else if (typeof n == "object")
        if (Array.isArray(n)) {
            var l = n.length;
            for (r = 0; r < l; r++)
                n[r] && (s = Gh(n[r])) && (i && (i += " "),
                i += s)
        } else
            for (s in n)
                n[s] && (i && (i += " "),
                i += s);
    return i
}
function Qh() {
    for (var n, r, s = 0, i = "", l = arguments.length; s < l; s++)
        (n = arguments[s]) && (r = Gh(n)) && (i && (i += " "),
        i += r);
    return i
}
const Pp = n => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n
  , Rp = Qh
  , qh = (n, r) => s => {
    var i;
    if (r?.variants == null)
        return Rp(n, s?.class, s?.className);
    const {variants: l, defaultVariants: c} = r
      , f = Object.keys(l).map(g => {
        const x = s?.[g]
          , w = c?.[g];
        if (x === null)
            return null;
        const E = Pp(x) || Pp(w);
        return l[g][E]
    }
    )
      , p = s && Object.entries(s).reduce( (g, x) => {
        let[w,E] = x;
        return E === void 0 || (g[w] = E),
        g
    }
    , {})
      , v = r == null || (i = r.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (g, x) => {
        let {class: w, className: E, ...b} = x;
        return Object.entries(b).every(N => {
            let[S,C] = N;
            return Array.isArray(C) ? C.includes({
                ...c,
                ...p
            }[S]) : {
                ...c,
                ...p
            }[S] === C
        }
        ) ? [...g, w, E] : g
    }
    , []);
    return Rp(n, f, v, s?.class, s?.className)
}
;
const ew = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Yh = (...n) => n.filter( (r, s, i) => !!r && r.trim() !== "" && i.indexOf(r) === s).join(" ").trim();
var tw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const nw = m.forwardRef( ({color: n="currentColor", size: r=24, strokeWidth: s=2, absoluteStrokeWidth: i, className: l="", children: c, iconNode: f, ...p}, v) => m.createElement("svg", {
    ref: v,
    ...tw,
    width: r,
    height: r,
    stroke: n,
    strokeWidth: i ? Number(s) * 24 / Number(r) : s,
    className: Yh("lucide", l),
    ...p
}, [...f.map( ([g,x]) => m.createElement(g, x)), ...Array.isArray(c) ? c : [c]]));
const Te = (n, r) => {
    const s = m.forwardRef( ({className: i, ...l}, c) => m.createElement(nw, {
        ref: c,
        iconNode: r,
        className: Yh(`lucide-${ew(n)}`, i),
        ...l
    }));
    return s.displayName = `${n}`,
    s
}
;
const rw = Te("ArrowLeftRight", [["path", {
    d: "M8 3 4 7l4 4",
    key: "9rb6wj"
}], ["path", {
    d: "M4 7h16",
    key: "6tx8e3"
}], ["path", {
    d: "m16 21 4-4-4-4",
    key: "siv7j2"
}], ["path", {
    d: "M20 17H4",
    key: "h6l3hr"
}]]);
const sc = Te("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
const Xh = Te("Bike", [["circle", {
    cx: "18.5",
    cy: "17.5",
    r: "3.5",
    key: "15x4ox"
}], ["circle", {
    cx: "5.5",
    cy: "17.5",
    r: "3.5",
    key: "1noe27"
}], ["circle", {
    cx: "15",
    cy: "5",
    r: "1",
    key: "19l28e"
}], ["path", {
    d: "M12 17.5V14l-3-3 4-3 2 3h2",
    key: "1npguv"
}]]);
const ua = Te("Bus", [["path", {
    d: "M8 6v6",
    key: "18i7km"
}], ["path", {
    d: "M15 6v6",
    key: "1sg6z9"
}], ["path", {
    d: "M2 12h19.6",
    key: "de5uta"
}], ["path", {
    d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
    key: "1wwztk"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}], ["path", {
    d: "M9 18h5",
    key: "lrx6i"
}], ["circle", {
    cx: "16",
    cy: "18",
    r: "2",
    key: "1v4tcr"
}]]);
const ow = Te("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
const sw = Te("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
const Zh = Te("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
const Jh = Te("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
const iw = Te("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
const aw = Te("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
const Ou = Te("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
const lw = Te("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
const uw = Te("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
const cw = Te("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
const em = Te("Footprints", [["path", {
    d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
    key: "1dudjm"
}], ["path", {
    d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
    key: "l2t8xc"
}], ["path", {
    d: "M16 17h4",
    key: "1dejxt"
}], ["path", {
    d: "M4 13h4",
    key: "1bwh8b"
}]]);
const dw = Te("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
const Vi = Te("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
const fw = Te("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
const pw = Te("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
const hw = Te("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
const mw = Te("Navigation", [["polygon", {
    points: "3 11 22 2 13 21 11 13 3 11",
    key: "1ltx0t"
}]]);
const vw = Te("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
const gw = Te("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
const yw = Te("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
const xw = Te("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
const ww = Te("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
const bw = Te("Volume2", [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]);
const tm = Te("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , ic = "-"
  , Sw = n => {
    const r = Ew(n)
      , {conflictingClassGroups: s, conflictingClassGroupModifiers: i} = n;
    return {
        getClassGroupId: f => {
            const p = f.split(ic);
            return p[0] === "" && p.length !== 1 && p.shift(),
            nm(p, r) || Cw(f)
        }
        ,
        getConflictingClassGroupIds: (f, p) => {
            const v = s[f] || [];
            return p && i[f] ? [...v, ...i[f]] : v
        }
    }
}
  , nm = (n, r) => {
    if (n.length === 0)
        return r.classGroupId;
    const s = n[0]
      , i = r.nextPart.get(s)
      , l = i ? nm(n.slice(1), i) : void 0;
    if (l)
        return l;
    if (r.validators.length === 0)
        return;
    const c = n.join(ic);
    return r.validators.find( ({validator: f}) => f(c))?.classGroupId
}
  , Tp = /^\[(.+)\]$/
  , Cw = n => {
    if (Tp.test(n)) {
        const r = Tp.exec(n)[1]
          , s = r?.substring(0, r.indexOf(":"));
        if (s)
            return "arbitrary.." + s
    }
}
  , Ew = n => {
    const {theme: r, prefix: s} = n
      , i = {
        nextPart: new Map,
        validators: []
    };
    return Nw(Object.entries(n.classGroups), s).forEach( ([c,f]) => {
        Iu(f, i, c, r)
    }
    ),
    i
}
  , Iu = (n, r, s, i) => {
    n.forEach(l => {
        if (typeof l == "string") {
            const c = l === "" ? r : jp(r, l);
            c.classGroupId = s;
            return
        }
        if (typeof l == "function") {
            if (kw(l)) {
                Iu(l(i), r, s, i);
                return
            }
            r.validators.push({
                validator: l,
                classGroupId: s
            });
            return
        }
        Object.entries(l).forEach( ([c,f]) => {
            Iu(f, jp(r, c), s, i)
        }
        )
    }
    )
}
  , jp = (n, r) => {
    let s = n;
    return r.split(ic).forEach(i => {
        s.nextPart.has(i) || s.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        s = s.nextPart.get(i)
    }
    ),
    s
}
  , kw = n => n.isThemeGetter
  , Nw = (n, r) => r ? n.map( ([s,i]) => {
    const l = i.map(c => typeof c == "string" ? r + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map( ([f,p]) => [r + f, p])) : c);
    return [s, l]
}
) : n
  , Pw = n => {
    if (n < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let r = 0
      , s = new Map
      , i = new Map;
    const l = (c, f) => {
        s.set(c, f),
        r++,
        r > n && (r = 0,
        i = s,
        s = new Map)
    }
    ;
    return {
        get(c) {
            let f = s.get(c);
            if (f !== void 0)
                return f;
            if ((f = i.get(c)) !== void 0)
                return l(c, f),
                f
        },
        set(c, f) {
            s.has(c) ? s.set(c, f) : l(c, f)
        }
    }
}
  , rm = "!"
  , Rw = n => {
    const {separator: r, experimentalParseClassName: s} = n
      , i = r.length === 1
      , l = r[0]
      , c = r.length
      , f = p => {
        const v = [];
        let g = 0, x = 0, w;
        for (let C = 0; C < p.length; C++) {
            let R = p[C];
            if (g === 0) {
                if (R === l && (i || p.slice(C, C + c) === r)) {
                    v.push(p.slice(x, C)),
                    x = C + c;
                    continue
                }
                if (R === "/") {
                    w = C;
                    continue
                }
            }
            R === "[" ? g++ : R === "]" && g--
        }
        const E = v.length === 0 ? p : p.substring(x)
          , b = E.startsWith(rm)
          , N = b ? E.substring(1) : E
          , S = w && w > x ? w - x : void 0;
        return {
            modifiers: v,
            hasImportantModifier: b,
            baseClassName: N,
            maybePostfixModifierPosition: S
        }
    }
    ;
    return s ? p => s({
        className: p,
        parseClassName: f
    }) : f
}
  , Tw = n => {
    if (n.length <= 1)
        return n;
    const r = [];
    let s = [];
    return n.forEach(i => {
        i[0] === "[" ? (r.push(...s.sort(), i),
        s = []) : s.push(i)
    }
    ),
    r.push(...s.sort()),
    r
}
  , jw = n => ({
    cache: Pw(n.cacheSize),
    parseClassName: Rw(n),
    ...Sw(n)
})
  , Mw = /\s+/
  , _w = (n, r) => {
    const {parseClassName: s, getClassGroupId: i, getConflictingClassGroupIds: l} = r
      , c = []
      , f = n.trim().split(Mw);
    let p = "";
    for (let v = f.length - 1; v >= 0; v -= 1) {
        const g = f[v]
          , {modifiers: x, hasImportantModifier: w, baseClassName: E, maybePostfixModifierPosition: b} = s(g);
        let N = !!b
          , S = i(N ? E.substring(0, b) : E);
        if (!S) {
            if (!N) {
                p = g + (p.length > 0 ? " " + p : p);
                continue
            }
            if (S = i(E),
            !S) {
                p = g + (p.length > 0 ? " " + p : p);
                continue
            }
            N = !1
        }
        const C = Tw(x).join(":")
          , R = w ? C + rm : C
          , M = R + S;
        if (c.includes(M))
            continue;
        c.push(M);
        const _ = l(S, N);
        for (let L = 0; L < _.length; ++L) {
            const $ = _[L];
            c.push(R + $)
        }
        p = g + (p.length > 0 ? " " + p : p)
    }
    return p
}
;
function Aw() {
    let n = 0, r, s, i = "";
    for (; n < arguments.length; )
        (r = arguments[n++]) && (s = om(r)) && (i && (i += " "),
        i += s);
    return i
}
const om = n => {
    if (typeof n == "string")
        return n;
    let r, s = "";
    for (let i = 0; i < n.length; i++)
        n[i] && (r = om(n[i])) && (s && (s += " "),
        s += r);
    return s
}
;
function Ow(n, ...r) {
    let s, i, l, c = f;
    function f(v) {
        const g = r.reduce( (x, w) => w(x), n());
        return s = jw(g),
        i = s.cache.get,
        l = s.cache.set,
        c = p,
        p(v)
    }
    function p(v) {
        const g = i(v);
        if (g)
            return g;
        const x = _w(v, s);
        return l(v, x),
        x
    }
    return function() {
        return c(Aw.apply(null, arguments))
    }
}
const Oe = n => {
    const r = s => s[n] || [];
    return r.isThemeGetter = !0,
    r
}
  , sm = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Iw = /^\d+\/\d+$/
  , Dw = new Set(["px", "full", "screen"])
  , Lw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Fw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , zw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , $w = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Bw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Nn = n => eo(n) || Dw.has(n) || Iw.test(n)
  , Xn = n => io(n, "length", qw)
  , eo = n => !!n && !Number.isNaN(Number(n))
  , xu = n => io(n, "number", eo)
  , Xo = n => !!n && Number.isInteger(Number(n))
  , Uw = n => n.endsWith("%") && eo(n.slice(0, -1))
  , we = n => sm.test(n)
  , Zn = n => Lw.test(n)
  , Vw = new Set(["length", "size", "percentage"])
  , Ww = n => io(n, Vw, im)
  , Hw = n => io(n, "position", im)
  , Kw = new Set(["image", "url"])
  , Gw = n => io(n, Kw, Xw)
  , Qw = n => io(n, "", Yw)
  , Zo = () => !0
  , io = (n, r, s) => {
    const i = sm.exec(n);
    return i ? i[1] ? typeof r == "string" ? i[1] === r : r.has(i[1]) : s(i[2]) : !1
}
  , qw = n => Fw.test(n) && !zw.test(n)
  , im = () => !1
  , Yw = n => $w.test(n)
  , Xw = n => Bw.test(n)
  , Zw = () => {
    const n = Oe("colors")
      , r = Oe("spacing")
      , s = Oe("blur")
      , i = Oe("brightness")
      , l = Oe("borderColor")
      , c = Oe("borderRadius")
      , f = Oe("borderSpacing")
      , p = Oe("borderWidth")
      , v = Oe("contrast")
      , g = Oe("grayscale")
      , x = Oe("hueRotate")
      , w = Oe("invert")
      , E = Oe("gap")
      , b = Oe("gradientColorStops")
      , N = Oe("gradientColorStopPositions")
      , S = Oe("inset")
      , C = Oe("margin")
      , R = Oe("opacity")
      , M = Oe("padding")
      , _ = Oe("saturate")
      , L = Oe("scale")
      , $ = Oe("sepia")
      , W = Oe("skew")
      , G = Oe("space")
      , Z = Oe("translate")
      , ce = () => ["auto", "contain", "none"]
      , le = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , he = () => ["auto", we, r]
      , X = () => [we, r]
      , me = () => ["", Nn, Xn]
      , q = () => ["auto", eo, we]
      , ye = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , ne = () => ["solid", "dashed", "dotted", "double", "none"]
      , se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , I = () => ["", "0", we]
      , U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , T = () => [eo, we];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Zo],
            spacing: [Nn, Xn],
            blur: ["none", "", Zn, we],
            brightness: T(),
            borderColor: [n],
            borderRadius: ["none", "", "full", Zn, we],
            borderSpacing: X(),
            borderWidth: me(),
            contrast: T(),
            grayscale: I(),
            hueRotate: T(),
            invert: I(),
            gap: X(),
            gradientColorStops: [n],
            gradientColorStopPositions: [Uw, Xn],
            inset: he(),
            margin: he(),
            opacity: T(),
            padding: X(),
            saturate: T(),
            scale: T(),
            sepia: I(),
            skew: T(),
            space: X(),
            translate: X()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", we]
            }],
            container: ["container"],
            columns: [{
                columns: [Zn]
            }],
            "break-after": [{
                "break-after": U()
            }],
            "break-before": [{
                "break-before": U()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...ye(), we]
            }],
            overflow: [{
                overflow: le()
            }],
            "overflow-x": [{
                "overflow-x": le()
            }],
            "overflow-y": [{
                "overflow-y": le()
            }],
            overscroll: [{
                overscroll: ce()
            }],
            "overscroll-x": [{
                "overscroll-x": ce()
            }],
            "overscroll-y": [{
                "overscroll-y": ce()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [S]
            }],
            "inset-x": [{
                "inset-x": [S]
            }],
            "inset-y": [{
                "inset-y": [S]
            }],
            start: [{
                start: [S]
            }],
            end: [{
                end: [S]
            }],
            top: [{
                top: [S]
            }],
            right: [{
                right: [S]
            }],
            bottom: [{
                bottom: [S]
            }],
            left: [{
                left: [S]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Xo, we]
            }],
            basis: [{
                basis: he()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", we]
            }],
            grow: [{
                grow: I()
            }],
            shrink: [{
                shrink: I()
            }],
            order: [{
                order: ["first", "last", "none", Xo, we]
            }],
            "grid-cols": [{
                "grid-cols": [Zo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Xo, we]
                }, we]
            }],
            "col-start": [{
                "col-start": q()
            }],
            "col-end": [{
                "col-end": q()
            }],
            "grid-rows": [{
                "grid-rows": [Zo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Xo, we]
                }, we]
            }],
            "row-start": [{
                "row-start": q()
            }],
            "row-end": [{
                "row-end": q()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", we]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", we]
            }],
            gap: [{
                gap: [E]
            }],
            "gap-x": [{
                "gap-x": [E]
            }],
            "gap-y": [{
                "gap-y": [E]
            }],
            "justify-content": [{
                justify: ["normal", ...z()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...z(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...z(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [M]
            }],
            px: [{
                px: [M]
            }],
            py: [{
                py: [M]
            }],
            ps: [{
                ps: [M]
            }],
            pe: [{
                pe: [M]
            }],
            pt: [{
                pt: [M]
            }],
            pr: [{
                pr: [M]
            }],
            pb: [{
                pb: [M]
            }],
            pl: [{
                pl: [M]
            }],
            m: [{
                m: [C]
            }],
            mx: [{
                mx: [C]
            }],
            my: [{
                my: [C]
            }],
            ms: [{
                ms: [C]
            }],
            me: [{
                me: [C]
            }],
            mt: [{
                mt: [C]
            }],
            mr: [{
                mr: [C]
            }],
            mb: [{
                mb: [C]
            }],
            ml: [{
                ml: [C]
            }],
            "space-x": [{
                "space-x": [G]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [G]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", we, r]
            }],
            "min-w": [{
                "min-w": [we, r, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [we, r, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Zn]
                }, Zn]
            }],
            h: [{
                h: [we, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [we, r, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [we, r, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [we, r, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Zn, Xn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xu]
            }],
            "font-family": [{
                font: [Zo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", we]
            }],
            "line-clamp": [{
                "line-clamp": ["none", eo, xu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nn, we]
            }],
            "list-image": [{
                "list-image": ["none", we]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", we]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [n]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [R]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [n]
            }],
            "text-opacity": [{
                "text-opacity": [R]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ne(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Nn, Xn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Nn, we]
            }],
            "text-decoration-color": [{
                decoration: [n]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: X()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", we]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", we]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [R]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...ye(), Hw]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Ww]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Gw]
            }],
            "bg-color": [{
                bg: [n]
            }],
            "gradient-from-pos": [{
                from: [N]
            }],
            "gradient-via-pos": [{
                via: [N]
            }],
            "gradient-to-pos": [{
                to: [N]
            }],
            "gradient-from": [{
                from: [b]
            }],
            "gradient-via": [{
                via: [b]
            }],
            "gradient-to": [{
                to: [b]
            }],
            rounded: [{
                rounded: [c]
            }],
            "rounded-s": [{
                "rounded-s": [c]
            }],
            "rounded-e": [{
                "rounded-e": [c]
            }],
            "rounded-t": [{
                "rounded-t": [c]
            }],
            "rounded-r": [{
                "rounded-r": [c]
            }],
            "rounded-b": [{
                "rounded-b": [c]
            }],
            "rounded-l": [{
                "rounded-l": [c]
            }],
            "rounded-ss": [{
                "rounded-ss": [c]
            }],
            "rounded-se": [{
                "rounded-se": [c]
            }],
            "rounded-ee": [{
                "rounded-ee": [c]
            }],
            "rounded-es": [{
                "rounded-es": [c]
            }],
            "rounded-tl": [{
                "rounded-tl": [c]
            }],
            "rounded-tr": [{
                "rounded-tr": [c]
            }],
            "rounded-br": [{
                "rounded-br": [c]
            }],
            "rounded-bl": [{
                "rounded-bl": [c]
            }],
            "border-w": [{
                border: [p]
            }],
            "border-w-x": [{
                "border-x": [p]
            }],
            "border-w-y": [{
                "border-y": [p]
            }],
            "border-w-s": [{
                "border-s": [p]
            }],
            "border-w-e": [{
                "border-e": [p]
            }],
            "border-w-t": [{
                "border-t": [p]
            }],
            "border-w-r": [{
                "border-r": [p]
            }],
            "border-w-b": [{
                "border-b": [p]
            }],
            "border-w-l": [{
                "border-l": [p]
            }],
            "border-opacity": [{
                "border-opacity": [R]
            }],
            "border-style": [{
                border: [...ne(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [p]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [p]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [R]
            }],
            "divide-style": [{
                divide: ne()
            }],
            "border-color": [{
                border: [l]
            }],
            "border-color-x": [{
                "border-x": [l]
            }],
            "border-color-y": [{
                "border-y": [l]
            }],
            "border-color-s": [{
                "border-s": [l]
            }],
            "border-color-e": [{
                "border-e": [l]
            }],
            "border-color-t": [{
                "border-t": [l]
            }],
            "border-color-r": [{
                "border-r": [l]
            }],
            "border-color-b": [{
                "border-b": [l]
            }],
            "border-color-l": [{
                "border-l": [l]
            }],
            "divide-color": [{
                divide: [l]
            }],
            "outline-style": [{
                outline: ["", ...ne()]
            }],
            "outline-offset": [{
                "outline-offset": [Nn, we]
            }],
            "outline-w": [{
                outline: [Nn, Xn]
            }],
            "outline-color": [{
                outline: [n]
            }],
            "ring-w": [{
                ring: me()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [n]
            }],
            "ring-opacity": [{
                "ring-opacity": [R]
            }],
            "ring-offset-w": [{
                "ring-offset": [Nn, Xn]
            }],
            "ring-offset-color": [{
                "ring-offset": [n]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Zn, Qw]
            }],
            "shadow-color": [{
                shadow: [Zo]
            }],
            opacity: [{
                opacity: [R]
            }],
            "mix-blend": [{
                "mix-blend": [...se(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": se()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [s]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [v]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Zn, we]
            }],
            grayscale: [{
                grayscale: [g]
            }],
            "hue-rotate": [{
                "hue-rotate": [x]
            }],
            invert: [{
                invert: [w]
            }],
            saturate: [{
                saturate: [_]
            }],
            sepia: [{
                sepia: [$]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [s]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [v]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [g]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [x]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [w]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [R]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [_]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [$]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [f]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [f]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [f]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", we]
            }],
            duration: [{
                duration: T()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", we]
            }],
            delay: [{
                delay: T()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", we]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [L]
            }],
            "scale-x": [{
                "scale-x": [L]
            }],
            "scale-y": [{
                "scale-y": [L]
            }],
            rotate: [{
                rotate: [Xo, we]
            }],
            "translate-x": [{
                "translate-x": [Z]
            }],
            "translate-y": [{
                "translate-y": [Z]
            }],
            "skew-x": [{
                "skew-x": [W]
            }],
            "skew-y": [{
                "skew-y": [W]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", we]
            }],
            accent: [{
                accent: ["auto", n]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", we]
            }],
            "caret-color": [{
                caret: [n]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": X()
            }],
            "scroll-mx": [{
                "scroll-mx": X()
            }],
            "scroll-my": [{
                "scroll-my": X()
            }],
            "scroll-ms": [{
                "scroll-ms": X()
            }],
            "scroll-me": [{
                "scroll-me": X()
            }],
            "scroll-mt": [{
                "scroll-mt": X()
            }],
            "scroll-mr": [{
                "scroll-mr": X()
            }],
            "scroll-mb": [{
                "scroll-mb": X()
            }],
            "scroll-ml": [{
                "scroll-ml": X()
            }],
            "scroll-p": [{
                "scroll-p": X()
            }],
            "scroll-px": [{
                "scroll-px": X()
            }],
            "scroll-py": [{
                "scroll-py": X()
            }],
            "scroll-ps": [{
                "scroll-ps": X()
            }],
            "scroll-pe": [{
                "scroll-pe": X()
            }],
            "scroll-pt": [{
                "scroll-pt": X()
            }],
            "scroll-pr": [{
                "scroll-pr": X()
            }],
            "scroll-pb": [{
                "scroll-pb": X()
            }],
            "scroll-pl": [{
                "scroll-pl": X()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", we]
            }],
            fill: [{
                fill: [n, "none"]
            }],
            "stroke-w": [{
                stroke: [Nn, Xn, xu]
            }],
            stroke: [{
                stroke: [n, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Jw = Ow(Zw);
function Fe(...n) {
    return Jw(Qh(n))
}
const e1 = Jx
  , am = m.forwardRef( ({className: n, ...r}, s) => h.jsx(Bh, {
    ref: s,
    className: Fe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", n),
    ...r
}));
am.displayName = Bh.displayName;
const t1 = qh("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , lm = m.forwardRef( ({className: n, variant: r, ...s}, i) => h.jsx(Uh, {
    ref: i,
    className: Fe(t1({
        variant: r
    }), n),
    ...s
}));
lm.displayName = Uh.displayName;
const n1 = m.forwardRef( ({className: n, ...r}, s) => h.jsx(Hh, {
    ref: s,
    className: Fe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", n),
    ...r
}));
n1.displayName = Hh.displayName;
const um = m.forwardRef( ({className: n, ...r}, s) => h.jsx(Kh, {
    ref: s,
    className: Fe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", n),
    "toast-close": "",
    ...r,
    children: h.jsx(tm, {
        className: "h-4 w-4"
    })
}));
um.displayName = Kh.displayName;
const cm = m.forwardRef( ({className: n, ...r}, s) => h.jsx(Vh, {
    ref: s,
    className: Fe("text-sm font-semibold", n),
    ...r
}));
cm.displayName = Vh.displayName;
const dm = m.forwardRef( ({className: n, ...r}, s) => h.jsx(Wh, {
    ref: s,
    className: Fe("text-sm opacity-90", n),
    ...r
}));
dm.displayName = Wh.displayName;
function r1() {
    const {toasts: n} = rx();
    return h.jsxs(e1, {
        children: [n.map(function({id: r, title: s, description: i, action: l, ...c}) {
            return h.jsxs(lm, {
                ...c,
                children: [h.jsxs("div", {
                    className: "grid gap-1",
                    children: [s && h.jsx(cm, {
                        children: s
                    }), i && h.jsx(dm, {
                        children: i
                    })]
                }), l, h.jsx(um, {})]
            }, r)
        }), h.jsx(am, {})]
    })
}
var Mp = ["light", "dark"]
  , o1 = "(prefers-color-scheme: dark)"
  , s1 = m.createContext(void 0)
  , i1 = {
    setTheme: n => {}
    ,
    themes: []
}
  , a1 = () => {
    var n;
    return (n = m.useContext(s1)) != null ? n : i1
}
;
m.memo( ({forcedTheme: n, storageKey: r, attribute: s, enableSystem: i, enableColorScheme: l, defaultTheme: c, value: f, attrs: p, nonce: v}) => {
    let g = c === "system"
      , x = s === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${p.map(N => `'${N}'`).join(",")})`};` : `var d=document.documentElement,n='${s}',s='setAttribute';`
      , w = l ? Mp.includes(c) && c ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , E = (N, S=!1, C=!0) => {
        let R = f ? f[N] : N
          , M = S ? N + "|| ''" : `'${R}'`
          , _ = "";
        return l && C && !S && Mp.includes(N) && (_ += `d.style.colorScheme = '${N}';`),
        s === "class" ? S || R ? _ += `c.add(${M})` : _ += "null" : R && (_ += `d[s](n,${M})`),
        _
    }
      , b = n ? `!function(){${x}${E(n)}}()` : i ? `!function(){try{${x}var e=localStorage.getItem('${r}');if('system'===e||(!e&&${g})){var t='${o1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${E("dark")}}else{${E("light")}}}else if(e){${f ? `var x=${JSON.stringify(f)};` : ""}${E(f ? "x[e]" : "e", !0)}}${g ? "" : "else{" + E(c, !1, !1) + "}"}${w}}catch(e){}}()` : `!function(){try{${x}var e=localStorage.getItem('${r}');if(e){${f ? `var x=${JSON.stringify(f)};` : ""}${E(f ? "x[e]" : "e", !0)}}else{${E(c, !1, !1)};}${w}}catch(t){}}();`;
    return m.createElement("script", {
        nonce: v,
        dangerouslySetInnerHTML: {
            __html: b
        }
    })
}
);
var l1 = n => {
    switch (n) {
    case "success":
        return d1;
    case "info":
        return p1;
    case "warning":
        return f1;
    case "error":
        return h1;
    default:
        return null
    }
}
  , u1 = Array(12).fill(0)
  , c1 = ({visible: n, className: r}) => H.createElement("div", {
    className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
    "data-visible": n
}, H.createElement("div", {
    className: "sonner-spinner"
}, u1.map( (s, i) => H.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${i}`
}))))
  , d1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, H.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , f1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, H.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , p1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, H.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , h1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, H.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , m1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, H.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), H.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , v1 = () => {
    let[n,r] = H.useState(document.hidden);
    return H.useEffect( () => {
        let s = () => {
            r(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", s),
        () => window.removeEventListener("visibilitychange", s)
    }
    , []),
    n
}
  , Du = 1
  , g1 = class {
    constructor() {
        this.subscribe = n => (this.subscribers.push(n),
        () => {
            let r = this.subscribers.indexOf(n);
            this.subscribers.splice(r, 1)
        }
        ),
        this.publish = n => {
            this.subscribers.forEach(r => r(n))
        }
        ,
        this.addToast = n => {
            this.publish(n),
            this.toasts = [...this.toasts, n]
        }
        ,
        this.create = n => {
            var r;
            let {message: s, ...i} = n
              , l = typeof n?.id == "number" || ((r = n.id) == null ? void 0 : r.length) > 0 ? n.id : Du++
              , c = this.toasts.find(p => p.id === l)
              , f = n.dismissible === void 0 ? !0 : n.dismissible;
            return this.dismissedToasts.has(l) && this.dismissedToasts.delete(l),
            c ? this.toasts = this.toasts.map(p => p.id === l ? (this.publish({
                ...p,
                ...n,
                id: l,
                title: s
            }),
            {
                ...p,
                ...n,
                id: l,
                dismissible: f,
                title: s
            }) : p) : this.addToast({
                title: s,
                ...i,
                dismissible: f,
                id: l
            }),
            l
        }
        ,
        this.dismiss = n => (this.dismissedToasts.add(n),
        n || this.toasts.forEach(r => {
            this.subscribers.forEach(s => s({
                id: r.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(r => r({
            id: n,
            dismiss: !0
        })),
        n),
        this.message = (n, r) => this.create({
            ...r,
            message: n
        }),
        this.error = (n, r) => this.create({
            ...r,
            message: n,
            type: "error"
        }),
        this.success = (n, r) => this.create({
            ...r,
            type: "success",
            message: n
        }),
        this.info = (n, r) => this.create({
            ...r,
            type: "info",
            message: n
        }),
        this.warning = (n, r) => this.create({
            ...r,
            type: "warning",
            message: n
        }),
        this.loading = (n, r) => this.create({
            ...r,
            type: "loading",
            message: n
        }),
        this.promise = (n, r) => {
            if (!r)
                return;
            let s;
            r.loading !== void 0 && (s = this.create({
                ...r,
                promise: n,
                type: "loading",
                message: r.loading,
                description: typeof r.description != "function" ? r.description : void 0
            }));
            let i = n instanceof Promise ? n : n(), l = s !== void 0, c, f = i.then(async v => {
                if (c = ["resolve", v],
                H.isValidElement(v))
                    l = !1,
                    this.create({
                        id: s,
                        type: "default",
                        message: v
                    });
                else if (x1(v) && !v.ok) {
                    l = !1;
                    let g = typeof r.error == "function" ? await r.error(`HTTP error! status: ${v.status}`) : r.error
                      , x = typeof r.description == "function" ? await r.description(`HTTP error! status: ${v.status}`) : r.description;
                    this.create({
                        id: s,
                        type: "error",
                        message: g,
                        description: x
                    })
                } else if (r.success !== void 0) {
                    l = !1;
                    let g = typeof r.success == "function" ? await r.success(v) : r.success
                      , x = typeof r.description == "function" ? await r.description(v) : r.description;
                    this.create({
                        id: s,
                        type: "success",
                        message: g,
                        description: x
                    })
                }
            }
            ).catch(async v => {
                if (c = ["reject", v],
                r.error !== void 0) {
                    l = !1;
                    let g = typeof r.error == "function" ? await r.error(v) : r.error
                      , x = typeof r.description == "function" ? await r.description(v) : r.description;
                    this.create({
                        id: s,
                        type: "error",
                        message: g,
                        description: x
                    })
                }
            }
            ).finally( () => {
                var v;
                l && (this.dismiss(s),
                s = void 0),
                (v = r.finally) == null || v.call(r)
            }
            ), p = () => new Promise( (v, g) => f.then( () => c[0] === "reject" ? g(c[1]) : v(c[1])).catch(g));
            return typeof s != "string" && typeof s != "number" ? {
                unwrap: p
            } : Object.assign(s, {
                unwrap: p
            })
        }
        ,
        this.custom = (n, r) => {
            let s = r?.id || Du++;
            return this.create({
                jsx: n(s),
                id: s,
                ...r
            }),
            s
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(n => !this.dismissedToasts.has(n.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , gt = new g1
  , y1 = (n, r) => {
    let s = r?.id || Du++;
    return gt.addToast({
        title: n,
        ...r,
        id: s
    }),
    s
}
  , x1 = n => n && typeof n == "object" && "ok"in n && typeof n.ok == "boolean" && "status"in n && typeof n.status == "number"
  , w1 = y1
  , b1 = () => gt.toasts
  , S1 = () => gt.getActiveToasts();
Object.assign(w1, {
    success: gt.success,
    info: gt.info,
    warning: gt.warning,
    error: gt.error,
    custom: gt.custom,
    message: gt.message,
    promise: gt.promise,
    dismiss: gt.dismiss,
    loading: gt.loading
}, {
    getHistory: b1,
    getToasts: S1
});
function C1(n, {insertAt: r}={}) {
    if (typeof document > "u")
        return;
    let s = document.head || document.getElementsByTagName("head")[0]
      , i = document.createElement("style");
    i.type = "text/css",
    r === "top" && s.firstChild ? s.insertBefore(i, s.firstChild) : s.appendChild(i),
    i.styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n))
}
C1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ji(n) {
    return n.label !== void 0
}
var E1 = 3
  , k1 = "32px"
  , N1 = "16px"
  , _p = 4e3
  , P1 = 356
  , R1 = 14
  , T1 = 20
  , j1 = 200;
function Kt(...n) {
    return n.filter(Boolean).join(" ")
}
function M1(n) {
    let[r,s] = n.split("-")
      , i = [];
    return r && i.push(r),
    s && i.push(s),
    i
}
var _1 = n => {
    var r, s, i, l, c, f, p, v, g, x, w;
    let {invert: E, toast: b, unstyled: N, interacting: S, setHeights: C, visibleToasts: R, heights: M, index: _, toasts: L, expanded: $, removeToast: W, defaultRichColors: G, closeButton: Z, style: ce, cancelButtonStyle: le, actionButtonStyle: he, className: X="", descriptionClassName: me="", duration: q, position: ye, gap: ne, loadingIcon: se, expandByDefault: z, classNames: I, icons: U, closeButtonAriaLabel: T="Close toast", pauseWhenPageIsHidden: F} = n
      , [Y,J] = H.useState(null)
      , [de,ve] = H.useState(null)
      , [te,be] = H.useState(!1)
      , [Ee,Ve] = H.useState(!1)
      , [Pt,Tn] = H.useState(!1)
      , [Rt,uo] = H.useState(!1)
      , [ps,co] = H.useState(!1)
      , [fo,Cr] = H.useState(0)
      , [po,jn] = H.useState(0)
      , Tt = H.useRef(b.duration || q || _p)
      , Er = H.useRef(null)
      , Xt = H.useRef(null)
      , hs = _ === 0
      , ms = _ + 1 <= R
      , rt = b.type
      , Zt = b.dismissible !== !1
      , kr = b.className || ""
      , vs = b.descriptionClassName || ""
      , Jt = H.useMemo( () => M.findIndex(xe => xe.toastId === b.id) || 0, [M, b.id])
      , or = H.useMemo( () => {
        var xe;
        return (xe = b.closeButton) != null ? xe : Z
    }
    , [b.closeButton, Z])
      , gs = H.useMemo( () => b.duration || q || _p, [b.duration, q])
      , Nr = H.useRef(0)
      , gn = H.useRef(0)
      , ys = H.useRef(0)
      , en = H.useRef(null)
      , [ho,mo] = ye.split("-")
      , Pr = H.useMemo( () => M.reduce( (xe, Ne, je) => je >= Jt ? xe : xe + Ne.height, 0), [M, Jt])
      , Rr = v1()
      , Mn = b.invert || E
      , tn = rt === "loading";
    gn.current = H.useMemo( () => Jt * ne + Pr, [Jt, Pr]),
    H.useEffect( () => {
        Tt.current = gs
    }
    , [gs]),
    H.useEffect( () => {
        be(!0)
    }
    , []),
    H.useEffect( () => {
        let xe = Xt.current;
        if (xe) {
            let Ne = xe.getBoundingClientRect().height;
            return jn(Ne),
            C(je => [{
                toastId: b.id,
                height: Ne,
                position: b.position
            }, ...je]),
            () => C(je => je.filter(ot => ot.toastId !== b.id))
        }
    }
    , [C, b.id]),
    H.useLayoutEffect( () => {
        if (!te)
            return;
        let xe = Xt.current
          , Ne = xe.style.height;
        xe.style.height = "auto";
        let je = xe.getBoundingClientRect().height;
        xe.style.height = Ne,
        jn(je),
        C(ot => ot.find(ut => ut.toastId === b.id) ? ot.map(ut => ut.toastId === b.id ? {
            ...ut,
            height: je
        } : ut) : [{
            toastId: b.id,
            height: je,
            position: b.position
        }, ...ot])
    }
    , [te, b.title, b.description, C, b.id]);
    let Lt = H.useCallback( () => {
        Ve(!0),
        Cr(gn.current),
        C(xe => xe.filter(Ne => Ne.toastId !== b.id)),
        setTimeout( () => {
            W(b)
        }
        , j1)
    }
    , [b, W, C, gn]);
    H.useEffect( () => {
        if (b.promise && rt === "loading" || b.duration === 1 / 0 || b.type === "loading")
            return;
        let xe;
        return $ || S || F && Rr ? ( () => {
            if (ys.current < Nr.current) {
                let Ne = new Date().getTime() - Nr.current;
                Tt.current = Tt.current - Ne
            }
            ys.current = new Date().getTime()
        }
        )() : Tt.current !== 1 / 0 && (Nr.current = new Date().getTime(),
        xe = setTimeout( () => {
            var Ne;
            (Ne = b.onAutoClose) == null || Ne.call(b, b),
            Lt()
        }
        , Tt.current)),
        () => clearTimeout(xe)
    }
    , [$, S, b, rt, F, Rr, Lt]),
    H.useEffect( () => {
        b.delete && Lt()
    }
    , [Lt, b.delete]);
    function xs() {
        var xe, Ne, je;
        return U != null && U.loading ? H.createElement("div", {
            className: Kt(I?.loader, (xe = b?.classNames) == null ? void 0 : xe.loader, "sonner-loader"),
            "data-visible": rt === "loading"
        }, U.loading) : se ? H.createElement("div", {
            className: Kt(I?.loader, (Ne = b?.classNames) == null ? void 0 : Ne.loader, "sonner-loader"),
            "data-visible": rt === "loading"
        }, se) : H.createElement(c1, {
            className: Kt(I?.loader, (je = b?.classNames) == null ? void 0 : je.loader),
            visible: rt === "loading"
        })
    }
    return H.createElement("li", {
        tabIndex: 0,
        ref: Xt,
        className: Kt(X, kr, I?.toast, (r = b?.classNames) == null ? void 0 : r.toast, I?.default, I?.[rt], (s = b?.classNames) == null ? void 0 : s[rt]),
        "data-sonner-toast": "",
        "data-rich-colors": (i = b.richColors) != null ? i : G,
        "data-styled": !(b.jsx || b.unstyled || N),
        "data-mounted": te,
        "data-promise": !!b.promise,
        "data-swiped": ps,
        "data-removed": Ee,
        "data-visible": ms,
        "data-y-position": ho,
        "data-x-position": mo,
        "data-index": _,
        "data-front": hs,
        "data-swiping": Pt,
        "data-dismissible": Zt,
        "data-type": rt,
        "data-invert": Mn,
        "data-swipe-out": Rt,
        "data-swipe-direction": de,
        "data-expanded": !!($ || z && te),
        style: {
            "--index": _,
            "--toasts-before": _,
            "--z-index": L.length - _,
            "--offset": `${Ee ? fo : gn.current}px`,
            "--initial-height": z ? "auto" : `${po}px`,
            ...ce,
            ...b.style
        },
        onDragEnd: () => {
            Tn(!1),
            J(null),
            en.current = null
        }
        ,
        onPointerDown: xe => {
            tn || !Zt || (Er.current = new Date,
            Cr(gn.current),
            xe.target.setPointerCapture(xe.pointerId),
            xe.target.tagName !== "BUTTON" && (Tn(!0),
            en.current = {
                x: xe.clientX,
                y: xe.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var xe, Ne, je, ot;
            if (Rt || !Zt)
                return;
            en.current = null;
            let ut = Number(((xe = Xt.current) == null ? void 0 : xe.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , ct = Number(((Ne = Xt.current) == null ? void 0 : Ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Ft = new Date().getTime() - ((je = Er.current) == null ? void 0 : je.getTime())
              , Ye = Y === "x" ? ut : ct
              , nn = Math.abs(Ye) / Ft;
            if (Math.abs(Ye) >= T1 || nn > .11) {
                Cr(gn.current),
                (ot = b.onDismiss) == null || ot.call(b, b),
                ve(Y === "x" ? ut > 0 ? "right" : "left" : ct > 0 ? "down" : "up"),
                Lt(),
                uo(!0),
                co(!1);
                return
            }
            Tn(!1),
            J(null)
        }
        ,
        onPointerMove: xe => {
            var Ne, je, ot, ut;
            if (!en.current || !Zt || ((Ne = window.getSelection()) == null ? void 0 : Ne.toString().length) > 0)
                return;
            let ct = xe.clientY - en.current.y
              , Ft = xe.clientX - en.current.x
              , Ye = (je = n.swipeDirections) != null ? je : M1(ye);
            !Y && (Math.abs(Ft) > 1 || Math.abs(ct) > 1) && J(Math.abs(Ft) > Math.abs(ct) ? "x" : "y");
            let nn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (Ye.includes("top") || Ye.includes("bottom")) && (Ye.includes("top") && ct < 0 || Ye.includes("bottom") && ct > 0) && (nn.y = ct) : Y === "x" && (Ye.includes("left") || Ye.includes("right")) && (Ye.includes("left") && Ft < 0 || Ye.includes("right") && Ft > 0) && (nn.x = Ft),
            (Math.abs(nn.x) > 0 || Math.abs(nn.y) > 0) && co(!0),
            (ot = Xt.current) == null || ot.style.setProperty("--swipe-amount-x", `${nn.x}px`),
            (ut = Xt.current) == null || ut.style.setProperty("--swipe-amount-y", `${nn.y}px`)
        }
    }, or && !b.jsx ? H.createElement("button", {
        "aria-label": T,
        "data-disabled": tn,
        "data-close-button": !0,
        onClick: tn || !Zt ? () => {}
        : () => {
            var xe;
            Lt(),
            (xe = b.onDismiss) == null || xe.call(b, b)
        }
        ,
        className: Kt(I?.closeButton, (l = b?.classNames) == null ? void 0 : l.closeButton)
    }, (c = U?.close) != null ? c : m1) : null, b.jsx || m.isValidElement(b.title) ? b.jsx ? b.jsx : typeof b.title == "function" ? b.title() : b.title : H.createElement(H.Fragment, null, rt || b.icon || b.promise ? H.createElement("div", {
        "data-icon": "",
        className: Kt(I?.icon, (f = b?.classNames) == null ? void 0 : f.icon)
    }, b.promise || b.type === "loading" && !b.icon ? b.icon || xs() : null, b.type !== "loading" ? b.icon || U?.[rt] || l1(rt) : null) : null, H.createElement("div", {
        "data-content": "",
        className: Kt(I?.content, (p = b?.classNames) == null ? void 0 : p.content)
    }, H.createElement("div", {
        "data-title": "",
        className: Kt(I?.title, (v = b?.classNames) == null ? void 0 : v.title)
    }, typeof b.title == "function" ? b.title() : b.title), b.description ? H.createElement("div", {
        "data-description": "",
        className: Kt(me, vs, I?.description, (g = b?.classNames) == null ? void 0 : g.description)
    }, typeof b.description == "function" ? b.description() : b.description) : null), m.isValidElement(b.cancel) ? b.cancel : b.cancel && ji(b.cancel) ? H.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: b.cancelButtonStyle || le,
        onClick: xe => {
            var Ne, je;
            ji(b.cancel) && Zt && ((je = (Ne = b.cancel).onClick) == null || je.call(Ne, xe),
            Lt())
        }
        ,
        className: Kt(I?.cancelButton, (x = b?.classNames) == null ? void 0 : x.cancelButton)
    }, b.cancel.label) : null, m.isValidElement(b.action) ? b.action : b.action && ji(b.action) ? H.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: b.actionButtonStyle || he,
        onClick: xe => {
            var Ne, je;
            ji(b.action) && ((je = (Ne = b.action).onClick) == null || je.call(Ne, xe),
            !xe.defaultPrevented && Lt())
        }
        ,
        className: Kt(I?.actionButton, (w = b?.classNames) == null ? void 0 : w.actionButton)
    }, b.action.label) : null))
}
;
function Ap() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let n = document.documentElement.getAttribute("dir");
    return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n
}
function A1(n, r) {
    let s = {};
    return [n, r].forEach( (i, l) => {
        let c = l === 1
          , f = c ? "--mobile-offset" : "--offset"
          , p = c ? N1 : k1;
        function v(g) {
            ["top", "right", "bottom", "left"].forEach(x => {
                s[`${f}-${x}`] = typeof g == "number" ? `${g}px` : g
            }
            )
        }
        typeof i == "number" || typeof i == "string" ? v(i) : typeof i == "object" ? ["top", "right", "bottom", "left"].forEach(g => {
            i[g] === void 0 ? s[`${f}-${g}`] = p : s[`${f}-${g}`] = typeof i[g] == "number" ? `${i[g]}px` : i[g]
        }
        ) : v(p)
    }
    ),
    s
}
var O1 = m.forwardRef(function(n, r) {
    let {invert: s, position: i="bottom-right", hotkey: l=["altKey", "KeyT"], expand: c, closeButton: f, className: p, offset: v, mobileOffset: g, theme: x="light", richColors: w, duration: E, style: b, visibleToasts: N=E1, toastOptions: S, dir: C=Ap(), gap: R=R1, loadingIcon: M, icons: _, containerAriaLabel: L="Notifications", pauseWhenPageIsHidden: $} = n
      , [W,G] = H.useState([])
      , Z = H.useMemo( () => Array.from(new Set([i].concat(W.filter(F => F.position).map(F => F.position)))), [W, i])
      , [ce,le] = H.useState([])
      , [he,X] = H.useState(!1)
      , [me,q] = H.useState(!1)
      , [ye,ne] = H.useState(x !== "system" ? x : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , se = H.useRef(null)
      , z = l.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , I = H.useRef(null)
      , U = H.useRef(!1)
      , T = H.useCallback(F => {
        G(Y => {
            var J;
            return (J = Y.find(de => de.id === F.id)) != null && J.delete || gt.dismiss(F.id),
            Y.filter( ({id: de}) => de !== F.id)
        }
        )
    }
    , []);
    return H.useEffect( () => gt.subscribe(F => {
        if (F.dismiss) {
            G(Y => Y.map(J => J.id === F.id ? {
                ...J,
                delete: !0
            } : J));
            return
        }
        setTimeout( () => {
            Eh.flushSync( () => {
                G(Y => {
                    let J = Y.findIndex(de => de.id === F.id);
                    return J !== -1 ? [...Y.slice(0, J), {
                        ...Y[J],
                        ...F
                    }, ...Y.slice(J + 1)] : [F, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    H.useEffect( () => {
        if (x !== "system") {
            ne(x);
            return
        }
        if (x === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ne("dark") : ne("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: Y}) => {
                ne(Y ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: J}) => {
                try {
                    ne(J ? "dark" : "light")
                } catch (de) {
                    console.error(de)
                }
            }
            )
        }
    }
    , [x]),
    H.useEffect( () => {
        W.length <= 1 && X(!1)
    }
    , [W]),
    H.useEffect( () => {
        let F = Y => {
            var J, de;
            l.every(ve => Y[ve] || Y.code === ve) && (X(!0),
            (J = se.current) == null || J.focus()),
            Y.code === "Escape" && (document.activeElement === se.current || (de = se.current) != null && de.contains(document.activeElement)) && X(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [l]),
    H.useEffect( () => {
        if (se.current)
            return () => {
                I.current && (I.current.focus({
                    preventScroll: !0
                }),
                I.current = null,
                U.current = !1)
            }
    }
    , [se.current]),
    H.createElement("section", {
        ref: r,
        "aria-label": `${L} ${z}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, Z.map( (F, Y) => {
        var J;
        let[de,ve] = F.split("-");
        return W.length ? H.createElement("ol", {
            key: F,
            dir: C === "auto" ? Ap() : C,
            tabIndex: -1,
            ref: se,
            className: p,
            "data-sonner-toaster": !0,
            "data-theme": ye,
            "data-y-position": de,
            "data-lifted": he && W.length > 1 && !c,
            "data-x-position": ve,
            style: {
                "--front-toast-height": `${((J = ce[0]) == null ? void 0 : J.height) || 0}px`,
                "--width": `${P1}px`,
                "--gap": `${R}px`,
                ...b,
                ...A1(v, g)
            },
            onBlur: te => {
                U.current && !te.currentTarget.contains(te.relatedTarget) && (U.current = !1,
                I.current && (I.current.focus({
                    preventScroll: !0
                }),
                I.current = null))
            }
            ,
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || U.current || (U.current = !0,
                I.current = te.relatedTarget)
            }
            ,
            onMouseEnter: () => X(!0),
            onMouseMove: () => X(!0),
            onMouseLeave: () => {
                me || X(!1)
            }
            ,
            onDragEnd: () => X(!1),
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || q(!0)
            }
            ,
            onPointerUp: () => q(!1)
        }, W.filter(te => !te.position && Y === 0 || te.position === F).map( (te, be) => {
            var Ee, Ve;
            return H.createElement(_1, {
                key: te.id,
                icons: _,
                index: be,
                toast: te,
                defaultRichColors: w,
                duration: (Ee = S?.duration) != null ? Ee : E,
                className: S?.className,
                descriptionClassName: S?.descriptionClassName,
                invert: s,
                visibleToasts: N,
                closeButton: (Ve = S?.closeButton) != null ? Ve : f,
                interacting: me,
                position: F,
                style: S?.style,
                unstyled: S?.unstyled,
                classNames: S?.classNames,
                cancelButtonStyle: S?.cancelButtonStyle,
                actionButtonStyle: S?.actionButtonStyle,
                removeToast: T,
                toasts: W.filter(Pt => Pt.position == te.position),
                heights: ce.filter(Pt => Pt.position == te.position),
                setHeights: le,
                expandByDefault: c,
                gap: R,
                loadingIcon: M,
                expanded: he,
                pauseWhenPageIsHidden: $,
                swipeDirections: n.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const I1 = ({...n}) => {
    const {theme: r="system"} = a1();
    return h.jsx(O1, {
        theme: r,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...n
    })
}
;
var D1 = ra[" useId ".trim().toString()] || ( () => {}
)
  , L1 = 0;
function ts(n) {
    const [r,s] = m.useState(D1());
    return fn( () => {
        s(i => i ?? String(L1++))
    }
    , [n]),
    r ? `radix-${r}` : ""
}
const F1 = ["top", "right", "bottom", "left"]
  , tr = Math.min
  , Ct = Math.max
  , Wi = Math.round
  , Mi = Math.floor
  , dn = n => ({
    x: n,
    y: n
})
  , z1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , $1 = {
    start: "end",
    end: "start"
};
function Lu(n, r, s) {
    return Ct(n, tr(r, s))
}
function Pn(n, r) {
    return typeof n == "function" ? n(r) : n
}
function Rn(n) {
    return n.split("-")[0]
}
function ao(n) {
    return n.split("-")[1]
}
function ac(n) {
    return n === "x" ? "y" : "x"
}
function lc(n) {
    return n === "y" ? "height" : "width"
}
const B1 = new Set(["top", "bottom"]);
function cn(n) {
    return B1.has(Rn(n)) ? "y" : "x"
}
function uc(n) {
    return ac(cn(n))
}
function U1(n, r, s) {
    s === void 0 && (s = !1);
    const i = ao(n)
      , l = uc(n)
      , c = lc(l);
    let f = l === "x" ? i === (s ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return r.reference[c] > r.floating[c] && (f = Hi(f)),
    [f, Hi(f)]
}
function V1(n) {
    const r = Hi(n);
    return [Fu(n), r, Fu(r)]
}
function Fu(n) {
    return n.replace(/start|end/g, r => $1[r])
}
const Op = ["left", "right"]
  , Ip = ["right", "left"]
  , W1 = ["top", "bottom"]
  , H1 = ["bottom", "top"];
function K1(n, r, s) {
    switch (n) {
    case "top":
    case "bottom":
        return s ? r ? Ip : Op : r ? Op : Ip;
    case "left":
    case "right":
        return r ? W1 : H1;
    default:
        return []
    }
}
function G1(n, r, s, i) {
    const l = ao(n);
    let c = K1(Rn(n), s === "start", i);
    return l && (c = c.map(f => f + "-" + l),
    r && (c = c.concat(c.map(Fu)))),
    c
}
function Hi(n) {
    return n.replace(/left|right|bottom|top/g, r => z1[r])
}
function Q1(n) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...n
    }
}
function fm(n) {
    return typeof n != "number" ? Q1(n) : {
        top: n,
        right: n,
        bottom: n,
        left: n
    }
}
function Ki(n) {
    const {x: r, y: s, width: i, height: l} = n;
    return {
        width: i,
        height: l,
        top: s,
        left: r,
        right: r + i,
        bottom: s + l,
        x: r,
        y: s
    }
}
function Dp(n, r, s) {
    let {reference: i, floating: l} = n;
    const c = cn(r)
      , f = uc(r)
      , p = lc(f)
      , v = Rn(r)
      , g = c === "y"
      , x = i.x + i.width / 2 - l.width / 2
      , w = i.y + i.height / 2 - l.height / 2
      , E = i[p] / 2 - l[p] / 2;
    let b;
    switch (v) {
    case "top":
        b = {
            x,
            y: i.y - l.height
        };
        break;
    case "bottom":
        b = {
            x,
            y: i.y + i.height
        };
        break;
    case "right":
        b = {
            x: i.x + i.width,
            y: w
        };
        break;
    case "left":
        b = {
            x: i.x - l.width,
            y: w
        };
        break;
    default:
        b = {
            x: i.x,
            y: i.y
        }
    }
    switch (ao(r)) {
    case "start":
        b[f] -= E * (s && g ? -1 : 1);
        break;
    case "end":
        b[f] += E * (s && g ? -1 : 1);
        break
    }
    return b
}
const q1 = async (n, r, s) => {
    const {placement: i="bottom", strategy: l="absolute", middleware: c=[], platform: f} = s
      , p = c.filter(Boolean)
      , v = await (f.isRTL == null ? void 0 : f.isRTL(r));
    let g = await f.getElementRects({
        reference: n,
        floating: r,
        strategy: l
    })
      , {x, y: w} = Dp(g, i, v)
      , E = i
      , b = {}
      , N = 0;
    for (let S = 0; S < p.length; S++) {
        const {name: C, fn: R} = p[S]
          , {x: M, y: _, data: L, reset: $} = await R({
            x,
            y: w,
            initialPlacement: i,
            placement: E,
            strategy: l,
            middlewareData: b,
            rects: g,
            platform: f,
            elements: {
                reference: n,
                floating: r
            }
        });
        x = M ?? x,
        w = _ ?? w,
        b = {
            ...b,
            [C]: {
                ...b[C],
                ...L
            }
        },
        $ && N <= 50 && (N++,
        typeof $ == "object" && ($.placement && (E = $.placement),
        $.rects && (g = $.rects === !0 ? await f.getElementRects({
            reference: n,
            floating: r,
            strategy: l
        }) : $.rects),
        {x, y: w} = Dp(g, E, v)),
        S = -1)
    }
    return {
        x,
        y: w,
        placement: E,
        strategy: l,
        middlewareData: b
    }
}
;
async function ns(n, r) {
    var s;
    r === void 0 && (r = {});
    const {x: i, y: l, platform: c, rects: f, elements: p, strategy: v} = n
      , {boundary: g="clippingAncestors", rootBoundary: x="viewport", elementContext: w="floating", altBoundary: E=!1, padding: b=0} = Pn(r, n)
      , N = fm(b)
      , C = p[E ? w === "floating" ? "reference" : "floating" : w]
      , R = Ki(await c.getClippingRect({
        element: (s = await (c.isElement == null ? void 0 : c.isElement(C))) == null || s ? C : C.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(p.floating)),
        boundary: g,
        rootBoundary: x,
        strategy: v
    }))
      , M = w === "floating" ? {
        x: i,
        y: l,
        width: f.floating.width,
        height: f.floating.height
    } : f.reference
      , _ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(p.floating))
      , L = await (c.isElement == null ? void 0 : c.isElement(_)) ? await (c.getScale == null ? void 0 : c.getScale(_)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , $ = Ki(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: p,
        rect: M,
        offsetParent: _,
        strategy: v
    }) : M);
    return {
        top: (R.top - $.top + N.top) / L.y,
        bottom: ($.bottom - R.bottom + N.bottom) / L.y,
        left: (R.left - $.left + N.left) / L.x,
        right: ($.right - R.right + N.right) / L.x
    }
}
const Y1 = n => ({
    name: "arrow",
    options: n,
    async fn(r) {
        const {x: s, y: i, placement: l, rects: c, platform: f, elements: p, middlewareData: v} = r
          , {element: g, padding: x=0} = Pn(n, r) || {};
        if (g == null)
            return {};
        const w = fm(x)
          , E = {
            x: s,
            y: i
        }
          , b = uc(l)
          , N = lc(b)
          , S = await f.getDimensions(g)
          , C = b === "y"
          , R = C ? "top" : "left"
          , M = C ? "bottom" : "right"
          , _ = C ? "clientHeight" : "clientWidth"
          , L = c.reference[N] + c.reference[b] - E[b] - c.floating[N]
          , $ = E[b] - c.reference[b]
          , W = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(g));
        let G = W ? W[_] : 0;
        (!G || !await (f.isElement == null ? void 0 : f.isElement(W))) && (G = p.floating[_] || c.floating[N]);
        const Z = L / 2 - $ / 2
          , ce = G / 2 - S[N] / 2 - 1
          , le = tr(w[R], ce)
          , he = tr(w[M], ce)
          , X = le
          , me = G - S[N] - he
          , q = G / 2 - S[N] / 2 + Z
          , ye = Lu(X, q, me)
          , ne = !v.arrow && ao(l) != null && q !== ye && c.reference[N] / 2 - (q < X ? le : he) - S[N] / 2 < 0
          , se = ne ? q < X ? q - X : q - me : 0;
        return {
            [b]: E[b] + se,
            data: {
                [b]: ye,
                centerOffset: q - ye - se,
                ...ne && {
                    alignmentOffset: se
                }
            },
            reset: ne
        }
    }
})
  , X1 = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "flip",
        options: n,
        async fn(r) {
            var s, i;
            const {placement: l, middlewareData: c, rects: f, initialPlacement: p, platform: v, elements: g} = r
              , {mainAxis: x=!0, crossAxis: w=!0, fallbackPlacements: E, fallbackStrategy: b="bestFit", fallbackAxisSideDirection: N="none", flipAlignment: S=!0, ...C} = Pn(n, r);
            if ((s = c.arrow) != null && s.alignmentOffset)
                return {};
            const R = Rn(l)
              , M = cn(p)
              , _ = Rn(p) === p
              , L = await (v.isRTL == null ? void 0 : v.isRTL(g.floating))
              , $ = E || (_ || !S ? [Hi(p)] : V1(p))
              , W = N !== "none";
            !E && W && $.push(...G1(p, S, N, L));
            const G = [p, ...$]
              , Z = await ns(r, C)
              , ce = [];
            let le = ((i = c.flip) == null ? void 0 : i.overflows) || [];
            if (x && ce.push(Z[R]),
            w) {
                const q = U1(l, f, L);
                ce.push(Z[q[0]], Z[q[1]])
            }
            if (le = [...le, {
                placement: l,
                overflows: ce
            }],
            !ce.every(q => q <= 0)) {
                var he, X;
                const q = (((he = c.flip) == null ? void 0 : he.index) || 0) + 1
                  , ye = G[q];
                if (ye && (!(w === "alignment" ? M !== cn(ye) : !1) || le.every(z => cn(z.placement) === M ? z.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: q,
                            overflows: le
                        },
                        reset: {
                            placement: ye
                        }
                    };
                let ne = (X = le.filter(se => se.overflows[0] <= 0).sort( (se, z) => se.overflows[1] - z.overflows[1])[0]) == null ? void 0 : X.placement;
                if (!ne)
                    switch (b) {
                    case "bestFit":
                        {
                            var me;
                            const se = (me = le.filter(z => {
                                if (W) {
                                    const I = cn(z.placement);
                                    return I === M || I === "y"
                                }
                                return !0
                            }
                            ).map(z => [z.placement, z.overflows.filter(I => I > 0).reduce( (I, U) => I + U, 0)]).sort( (z, I) => z[1] - I[1])[0]) == null ? void 0 : me[0];
                            se && (ne = se);
                            break
                        }
                    case "initialPlacement":
                        ne = p;
                        break
                    }
                if (l !== ne)
                    return {
                        reset: {
                            placement: ne
                        }
                    }
            }
            return {}
        }
    }
};
function Lp(n, r) {
    return {
        top: n.top - r.height,
        right: n.right - r.width,
        bottom: n.bottom - r.height,
        left: n.left - r.width
    }
}
function Fp(n) {
    return F1.some(r => n[r] >= 0)
}
const Z1 = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "hide",
        options: n,
        async fn(r) {
            const {rects: s} = r
              , {strategy: i="referenceHidden", ...l} = Pn(n, r);
            switch (i) {
            case "referenceHidden":
                {
                    const c = await ns(r, {
                        ...l,
                        elementContext: "reference"
                    })
                      , f = Lp(c, s.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: f,
                            referenceHidden: Fp(f)
                        }
                    }
                }
            case "escaped":
                {
                    const c = await ns(r, {
                        ...l,
                        altBoundary: !0
                    })
                      , f = Lp(c, s.floating);
                    return {
                        data: {
                            escapedOffsets: f,
                            escaped: Fp(f)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , pm = new Set(["left", "top"]);
async function J1(n, r) {
    const {placement: s, platform: i, elements: l} = n
      , c = await (i.isRTL == null ? void 0 : i.isRTL(l.floating))
      , f = Rn(s)
      , p = ao(s)
      , v = cn(s) === "y"
      , g = pm.has(f) ? -1 : 1
      , x = c && v ? -1 : 1
      , w = Pn(r, n);
    let {mainAxis: E, crossAxis: b, alignmentAxis: N} = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis
    };
    return p && typeof N == "number" && (b = p === "end" ? N * -1 : N),
    v ? {
        x: b * x,
        y: E * g
    } : {
        x: E * g,
        y: b * x
    }
}
const eb = function(n) {
    return n === void 0 && (n = 0),
    {
        name: "offset",
        options: n,
        async fn(r) {
            var s, i;
            const {x: l, y: c, placement: f, middlewareData: p} = r
              , v = await J1(r, n);
            return f === ((s = p.offset) == null ? void 0 : s.placement) && (i = p.arrow) != null && i.alignmentOffset ? {} : {
                x: l + v.x,
                y: c + v.y,
                data: {
                    ...v,
                    placement: f
                }
            }
        }
    }
}
  , tb = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "shift",
        options: n,
        async fn(r) {
            const {x: s, y: i, placement: l} = r
              , {mainAxis: c=!0, crossAxis: f=!1, limiter: p={
                fn: C => {
                    let {x: R, y: M} = C;
                    return {
                        x: R,
                        y: M
                    }
                }
            }, ...v} = Pn(n, r)
              , g = {
                x: s,
                y: i
            }
              , x = await ns(r, v)
              , w = cn(Rn(l))
              , E = ac(w);
            let b = g[E]
              , N = g[w];
            if (c) {
                const C = E === "y" ? "top" : "left"
                  , R = E === "y" ? "bottom" : "right"
                  , M = b + x[C]
                  , _ = b - x[R];
                b = Lu(M, b, _)
            }
            if (f) {
                const C = w === "y" ? "top" : "left"
                  , R = w === "y" ? "bottom" : "right"
                  , M = N + x[C]
                  , _ = N - x[R];
                N = Lu(M, N, _)
            }
            const S = p.fn({
                ...r,
                [E]: b,
                [w]: N
            });
            return {
                ...S,
                data: {
                    x: S.x - s,
                    y: S.y - i,
                    enabled: {
                        [E]: c,
                        [w]: f
                    }
                }
            }
        }
    }
}
  , nb = function(n) {
    return n === void 0 && (n = {}),
    {
        options: n,
        fn(r) {
            const {x: s, y: i, placement: l, rects: c, middlewareData: f} = r
              , {offset: p=0, mainAxis: v=!0, crossAxis: g=!0} = Pn(n, r)
              , x = {
                x: s,
                y: i
            }
              , w = cn(l)
              , E = ac(w);
            let b = x[E]
              , N = x[w];
            const S = Pn(p, r)
              , C = typeof S == "number" ? {
                mainAxis: S,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...S
            };
            if (v) {
                const _ = E === "y" ? "height" : "width"
                  , L = c.reference[E] - c.floating[_] + C.mainAxis
                  , $ = c.reference[E] + c.reference[_] - C.mainAxis;
                b < L ? b = L : b > $ && (b = $)
            }
            if (g) {
                var R, M;
                const _ = E === "y" ? "width" : "height"
                  , L = pm.has(Rn(l))
                  , $ = c.reference[w] - c.floating[_] + (L && ((R = f.offset) == null ? void 0 : R[w]) || 0) + (L ? 0 : C.crossAxis)
                  , W = c.reference[w] + c.reference[_] + (L ? 0 : ((M = f.offset) == null ? void 0 : M[w]) || 0) - (L ? C.crossAxis : 0);
                N < $ ? N = $ : N > W && (N = W)
            }
            return {
                [E]: b,
                [w]: N
            }
        }
    }
}
  , rb = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "size",
        options: n,
        async fn(r) {
            var s, i;
            const {placement: l, rects: c, platform: f, elements: p} = r
              , {apply: v= () => {}
            , ...g} = Pn(n, r)
              , x = await ns(r, g)
              , w = Rn(l)
              , E = ao(l)
              , b = cn(l) === "y"
              , {width: N, height: S} = c.floating;
            let C, R;
            w === "top" || w === "bottom" ? (C = w,
            R = E === (await (f.isRTL == null ? void 0 : f.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (R = w,
            C = E === "end" ? "top" : "bottom");
            const M = S - x.top - x.bottom
              , _ = N - x.left - x.right
              , L = tr(S - x[C], M)
              , $ = tr(N - x[R], _)
              , W = !r.middlewareData.shift;
            let G = L
              , Z = $;
            if ((s = r.middlewareData.shift) != null && s.enabled.x && (Z = _),
            (i = r.middlewareData.shift) != null && i.enabled.y && (G = M),
            W && !E) {
                const le = Ct(x.left, 0)
                  , he = Ct(x.right, 0)
                  , X = Ct(x.top, 0)
                  , me = Ct(x.bottom, 0);
                b ? Z = N - 2 * (le !== 0 || he !== 0 ? le + he : Ct(x.left, x.right)) : G = S - 2 * (X !== 0 || me !== 0 ? X + me : Ct(x.top, x.bottom))
            }
            await v({
                ...r,
                availableWidth: Z,
                availableHeight: G
            });
            const ce = await f.getDimensions(p.floating);
            return N !== ce.width || S !== ce.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function ca() {
    return typeof window < "u"
}
function lo(n) {
    return hm(n) ? (n.nodeName || "").toLowerCase() : "#document"
}
function kt(n) {
    var r;
    return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window
}
function mn(n) {
    var r;
    return (r = (hm(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement
}
function hm(n) {
    return ca() ? n instanceof Node || n instanceof kt(n).Node : !1
}
function Qt(n) {
    return ca() ? n instanceof Element || n instanceof kt(n).Element : !1
}
function pn(n) {
    return ca() ? n instanceof HTMLElement || n instanceof kt(n).HTMLElement : !1
}
function zp(n) {
    return !ca() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof kt(n).ShadowRoot
}
const ob = new Set(["inline", "contents"]);
function us(n) {
    const {overflow: r, overflowX: s, overflowY: i, display: l} = qt(n);
    return /auto|scroll|overlay|hidden|clip/.test(r + i + s) && !ob.has(l)
}
const sb = new Set(["table", "td", "th"]);
function ib(n) {
    return sb.has(lo(n))
}
const ab = [":popover-open", ":modal"];
function da(n) {
    return ab.some(r => {
        try {
            return n.matches(r)
        } catch {
            return !1
        }
    }
    )
}
const lb = ["transform", "translate", "scale", "rotate", "perspective"]
  , ub = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , cb = ["paint", "layout", "strict", "content"];
function cc(n) {
    const r = dc()
      , s = Qt(n) ? qt(n) : n;
    return lb.some(i => s[i] ? s[i] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !r && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !r && (s.filter ? s.filter !== "none" : !1) || ub.some(i => (s.willChange || "").includes(i)) || cb.some(i => (s.contain || "").includes(i))
}
function db(n) {
    let r = nr(n);
    for (; pn(r) && !oo(r); ) {
        if (cc(r))
            return r;
        if (da(r))
            return null;
        r = nr(r)
    }
    return null
}
function dc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const fb = new Set(["html", "body", "#document"]);
function oo(n) {
    return fb.has(lo(n))
}
function qt(n) {
    return kt(n).getComputedStyle(n)
}
function fa(n) {
    return Qt(n) ? {
        scrollLeft: n.scrollLeft,
        scrollTop: n.scrollTop
    } : {
        scrollLeft: n.scrollX,
        scrollTop: n.scrollY
    }
}
function nr(n) {
    if (lo(n) === "html")
        return n;
    const r = n.assignedSlot || n.parentNode || zp(n) && n.host || mn(n);
    return zp(r) ? r.host : r
}
function mm(n) {
    const r = nr(n);
    return oo(r) ? n.ownerDocument ? n.ownerDocument.body : n.body : pn(r) && us(r) ? r : mm(r)
}
function rs(n, r, s) {
    var i;
    r === void 0 && (r = []),
    s === void 0 && (s = !0);
    const l = mm(n)
      , c = l === ((i = n.ownerDocument) == null ? void 0 : i.body)
      , f = kt(l);
    if (c) {
        const p = zu(f);
        return r.concat(f, f.visualViewport || [], us(l) ? l : [], p && s ? rs(p) : [])
    }
    return r.concat(l, rs(l, [], s))
}
function zu(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null
}
function vm(n) {
    const r = qt(n);
    let s = parseFloat(r.width) || 0
      , i = parseFloat(r.height) || 0;
    const l = pn(n)
      , c = l ? n.offsetWidth : s
      , f = l ? n.offsetHeight : i
      , p = Wi(s) !== c || Wi(i) !== f;
    return p && (s = c,
    i = f),
    {
        width: s,
        height: i,
        $: p
    }
}
function fc(n) {
    return Qt(n) ? n : n.contextElement
}
function to(n) {
    const r = fc(n);
    if (!pn(r))
        return dn(1);
    const s = r.getBoundingClientRect()
      , {width: i, height: l, $: c} = vm(r);
    let f = (c ? Wi(s.width) : s.width) / i
      , p = (c ? Wi(s.height) : s.height) / l;
    return (!f || !Number.isFinite(f)) && (f = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    {
        x: f,
        y: p
    }
}
const pb = dn(0);
function gm(n) {
    const r = kt(n);
    return !dc() || !r.visualViewport ? pb : {
        x: r.visualViewport.offsetLeft,
        y: r.visualViewport.offsetTop
    }
}
function hb(n, r, s) {
    return r === void 0 && (r = !1),
    !s || r && s !== kt(n) ? !1 : r
}
function yr(n, r, s, i) {
    r === void 0 && (r = !1),
    s === void 0 && (s = !1);
    const l = n.getBoundingClientRect()
      , c = fc(n);
    let f = dn(1);
    r && (i ? Qt(i) && (f = to(i)) : f = to(n));
    const p = hb(c, s, i) ? gm(c) : dn(0);
    let v = (l.left + p.x) / f.x
      , g = (l.top + p.y) / f.y
      , x = l.width / f.x
      , w = l.height / f.y;
    if (c) {
        const E = kt(c)
          , b = i && Qt(i) ? kt(i) : i;
        let N = E
          , S = zu(N);
        for (; S && i && b !== N; ) {
            const C = to(S)
              , R = S.getBoundingClientRect()
              , M = qt(S)
              , _ = R.left + (S.clientLeft + parseFloat(M.paddingLeft)) * C.x
              , L = R.top + (S.clientTop + parseFloat(M.paddingTop)) * C.y;
            v *= C.x,
            g *= C.y,
            x *= C.x,
            w *= C.y,
            v += _,
            g += L,
            N = kt(S),
            S = zu(N)
        }
    }
    return Ki({
        width: x,
        height: w,
        x: v,
        y: g
    })
}
function pa(n, r) {
    const s = fa(n).scrollLeft;
    return r ? r.left + s : yr(mn(n)).left + s
}
function ym(n, r) {
    const s = n.getBoundingClientRect()
      , i = s.left + r.scrollLeft - pa(n, s)
      , l = s.top + r.scrollTop;
    return {
        x: i,
        y: l
    }
}
function mb(n) {
    let {elements: r, rect: s, offsetParent: i, strategy: l} = n;
    const c = l === "fixed"
      , f = mn(i)
      , p = r ? da(r.floating) : !1;
    if (i === f || p && c)
        return s;
    let v = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , g = dn(1);
    const x = dn(0)
      , w = pn(i);
    if ((w || !w && !c) && ((lo(i) !== "body" || us(f)) && (v = fa(i)),
    pn(i))) {
        const b = yr(i);
        g = to(i),
        x.x = b.x + i.clientLeft,
        x.y = b.y + i.clientTop
    }
    const E = f && !w && !c ? ym(f, v) : dn(0);
    return {
        width: s.width * g.x,
        height: s.height * g.y,
        x: s.x * g.x - v.scrollLeft * g.x + x.x + E.x,
        y: s.y * g.y - v.scrollTop * g.y + x.y + E.y
    }
}
function vb(n) {
    return Array.from(n.getClientRects())
}
function gb(n) {
    const r = mn(n)
      , s = fa(n)
      , i = n.ownerDocument.body
      , l = Ct(r.scrollWidth, r.clientWidth, i.scrollWidth, i.clientWidth)
      , c = Ct(r.scrollHeight, r.clientHeight, i.scrollHeight, i.clientHeight);
    let f = -s.scrollLeft + pa(n);
    const p = -s.scrollTop;
    return qt(i).direction === "rtl" && (f += Ct(r.clientWidth, i.clientWidth) - l),
    {
        width: l,
        height: c,
        x: f,
        y: p
    }
}
const $p = 25;
function yb(n, r) {
    const s = kt(n)
      , i = mn(n)
      , l = s.visualViewport;
    let c = i.clientWidth
      , f = i.clientHeight
      , p = 0
      , v = 0;
    if (l) {
        c = l.width,
        f = l.height;
        const x = dc();
        (!x || x && r === "fixed") && (p = l.offsetLeft,
        v = l.offsetTop)
    }
    const g = pa(i);
    if (g <= 0) {
        const x = i.ownerDocument
          , w = x.body
          , E = getComputedStyle(w)
          , b = x.compatMode === "CSS1Compat" && parseFloat(E.marginLeft) + parseFloat(E.marginRight) || 0
          , N = Math.abs(i.clientWidth - w.clientWidth - b);
        N <= $p && (c -= N)
    } else
        g <= $p && (c += g);
    return {
        width: c,
        height: f,
        x: p,
        y: v
    }
}
const xb = new Set(["absolute", "fixed"]);
function wb(n, r) {
    const s = yr(n, !0, r === "fixed")
      , i = s.top + n.clientTop
      , l = s.left + n.clientLeft
      , c = pn(n) ? to(n) : dn(1)
      , f = n.clientWidth * c.x
      , p = n.clientHeight * c.y
      , v = l * c.x
      , g = i * c.y;
    return {
        width: f,
        height: p,
        x: v,
        y: g
    }
}
function Bp(n, r, s) {
    let i;
    if (r === "viewport")
        i = yb(n, s);
    else if (r === "document")
        i = gb(mn(n));
    else if (Qt(r))
        i = wb(r, s);
    else {
        const l = gm(n);
        i = {
            x: r.x - l.x,
            y: r.y - l.y,
            width: r.width,
            height: r.height
        }
    }
    return Ki(i)
}
function xm(n, r) {
    const s = nr(n);
    return s === r || !Qt(s) || oo(s) ? !1 : qt(s).position === "fixed" || xm(s, r)
}
function bb(n, r) {
    const s = r.get(n);
    if (s)
        return s;
    let i = rs(n, [], !1).filter(p => Qt(p) && lo(p) !== "body")
      , l = null;
    const c = qt(n).position === "fixed";
    let f = c ? nr(n) : n;
    for (; Qt(f) && !oo(f); ) {
        const p = qt(f)
          , v = cc(f);
        !v && p.position === "fixed" && (l = null),
        (c ? !v && !l : !v && p.position === "static" && !!l && xb.has(l.position) || us(f) && !v && xm(n, f)) ? i = i.filter(x => x !== f) : l = p,
        f = nr(f)
    }
    return r.set(n, i),
    i
}
function Sb(n) {
    let {element: r, boundary: s, rootBoundary: i, strategy: l} = n;
    const f = [...s === "clippingAncestors" ? da(r) ? [] : bb(r, this._c) : [].concat(s), i]
      , p = f[0]
      , v = f.reduce( (g, x) => {
        const w = Bp(r, x, l);
        return g.top = Ct(w.top, g.top),
        g.right = tr(w.right, g.right),
        g.bottom = tr(w.bottom, g.bottom),
        g.left = Ct(w.left, g.left),
        g
    }
    , Bp(r, p, l));
    return {
        width: v.right - v.left,
        height: v.bottom - v.top,
        x: v.left,
        y: v.top
    }
}
function Cb(n) {
    const {width: r, height: s} = vm(n);
    return {
        width: r,
        height: s
    }
}
function Eb(n, r, s) {
    const i = pn(r)
      , l = mn(r)
      , c = s === "fixed"
      , f = yr(n, !0, c, r);
    let p = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const v = dn(0);
    function g() {
        v.x = pa(l)
    }
    if (i || !i && !c)
        if ((lo(r) !== "body" || us(l)) && (p = fa(r)),
        i) {
            const b = yr(r, !0, c, r);
            v.x = b.x + r.clientLeft,
            v.y = b.y + r.clientTop
        } else
            l && g();
    c && !i && l && g();
    const x = l && !i && !c ? ym(l, p) : dn(0)
      , w = f.left + p.scrollLeft - v.x - x.x
      , E = f.top + p.scrollTop - v.y - x.y;
    return {
        x: w,
        y: E,
        width: f.width,
        height: f.height
    }
}
function wu(n) {
    return qt(n).position === "static"
}
function Up(n, r) {
    if (!pn(n) || qt(n).position === "fixed")
        return null;
    if (r)
        return r(n);
    let s = n.offsetParent;
    return mn(n) === s && (s = s.ownerDocument.body),
    s
}
function wm(n, r) {
    const s = kt(n);
    if (da(n))
        return s;
    if (!pn(n)) {
        let l = nr(n);
        for (; l && !oo(l); ) {
            if (Qt(l) && !wu(l))
                return l;
            l = nr(l)
        }
        return s
    }
    let i = Up(n, r);
    for (; i && ib(i) && wu(i); )
        i = Up(i, r);
    return i && oo(i) && wu(i) && !cc(i) ? s : i || db(n) || s
}
const kb = async function(n) {
    const r = this.getOffsetParent || wm
      , s = this.getDimensions
      , i = await s(n.floating);
    return {
        reference: Eb(n.reference, await r(n.floating), n.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};
function Nb(n) {
    return qt(n).direction === "rtl"
}
const Pb = {
    convertOffsetParentRelativeRectToViewportRelativeRect: mb,
    getDocumentElement: mn,
    getClippingRect: Sb,
    getOffsetParent: wm,
    getElementRects: kb,
    getClientRects: vb,
    getDimensions: Cb,
    getScale: to,
    isElement: Qt,
    isRTL: Nb
};
function bm(n, r) {
    return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height
}
function Rb(n, r) {
    let s = null, i;
    const l = mn(n);
    function c() {
        var p;
        clearTimeout(i),
        (p = s) == null || p.disconnect(),
        s = null
    }
    function f(p, v) {
        p === void 0 && (p = !1),
        v === void 0 && (v = 1),
        c();
        const g = n.getBoundingClientRect()
          , {left: x, top: w, width: E, height: b} = g;
        if (p || r(),
        !E || !b)
            return;
        const N = Mi(w)
          , S = Mi(l.clientWidth - (x + E))
          , C = Mi(l.clientHeight - (w + b))
          , R = Mi(x)
          , _ = {
            rootMargin: -N + "px " + -S + "px " + -C + "px " + -R + "px",
            threshold: Ct(0, tr(1, v)) || 1
        };
        let L = !0;
        function $(W) {
            const G = W[0].intersectionRatio;
            if (G !== v) {
                if (!L)
                    return f();
                G ? f(!1, G) : i = setTimeout( () => {
                    f(!1, 1e-7)
                }
                , 1e3)
            }
            G === 1 && !bm(g, n.getBoundingClientRect()) && f(),
            L = !1
        }
        try {
            s = new IntersectionObserver($,{
                ..._,
                root: l.ownerDocument
            })
        } catch {
            s = new IntersectionObserver($,_)
        }
        s.observe(n)
    }
    return f(!0),
    c
}
function Tb(n, r, s, i) {
    i === void 0 && (i = {});
    const {ancestorScroll: l=!0, ancestorResize: c=!0, elementResize: f=typeof ResizeObserver == "function", layoutShift: p=typeof IntersectionObserver == "function", animationFrame: v=!1} = i
      , g = fc(n)
      , x = l || c ? [...g ? rs(g) : [], ...rs(r)] : [];
    x.forEach(R => {
        l && R.addEventListener("scroll", s, {
            passive: !0
        }),
        c && R.addEventListener("resize", s)
    }
    );
    const w = g && p ? Rb(g, s) : null;
    let E = -1
      , b = null;
    f && (b = new ResizeObserver(R => {
        let[M] = R;
        M && M.target === g && b && (b.unobserve(r),
        cancelAnimationFrame(E),
        E = requestAnimationFrame( () => {
            var _;
            (_ = b) == null || _.observe(r)
        }
        )),
        s()
    }
    ),
    g && !v && b.observe(g),
    b.observe(r));
    let N, S = v ? yr(n) : null;
    v && C();
    function C() {
        const R = yr(n);
        S && !bm(S, R) && s(),
        S = R,
        N = requestAnimationFrame(C)
    }
    return s(),
    () => {
        var R;
        x.forEach(M => {
            l && M.removeEventListener("scroll", s),
            c && M.removeEventListener("resize", s)
        }
        ),
        w?.(),
        (R = b) == null || R.disconnect(),
        b = null,
        v && cancelAnimationFrame(N)
    }
}
const jb = eb
  , Mb = tb
  , _b = X1
  , Ab = rb
  , Ob = Z1
  , Vp = Y1
  , Ib = nb
  , Db = (n, r, s) => {
    const i = new Map
      , l = {
        platform: Pb,
        ...s
    }
      , c = {
        ...l.platform,
        _c: i
    };
    return q1(n, r, {
        ...l,
        platform: c
    })
}
;
var Lb = typeof document < "u"
  , Fb = function() {}
  , zi = Lb ? m.useLayoutEffect : Fb;
function Gi(n, r) {
    if (n === r)
        return !0;
    if (typeof n != typeof r)
        return !1;
    if (typeof n == "function" && n.toString() === r.toString())
        return !0;
    let s, i, l;
    if (n && r && typeof n == "object") {
        if (Array.isArray(n)) {
            if (s = n.length,
            s !== r.length)
                return !1;
            for (i = s; i-- !== 0; )
                if (!Gi(n[i], r[i]))
                    return !1;
            return !0
        }
        if (l = Object.keys(n),
        s = l.length,
        s !== Object.keys(r).length)
            return !1;
        for (i = s; i-- !== 0; )
            if (!{}.hasOwnProperty.call(r, l[i]))
                return !1;
        for (i = s; i-- !== 0; ) {
            const c = l[i];
            if (!(c === "_owner" && n.$$typeof) && !Gi(n[c], r[c]))
                return !1
        }
        return !0
    }
    return n !== n && r !== r
}
function Sm(n) {
    return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Wp(n, r) {
    const s = Sm(n);
    return Math.round(r * s) / s
}
function bu(n) {
    const r = m.useRef(n);
    return zi( () => {
        r.current = n
    }
    ),
    r
}
function zb(n) {
    n === void 0 && (n = {});
    const {placement: r="bottom", strategy: s="absolute", middleware: i=[], platform: l, elements: {reference: c, floating: f}={}, transform: p=!0, whileElementsMounted: v, open: g} = n
      , [x,w] = m.useState({
        x: 0,
        y: 0,
        strategy: s,
        placement: r,
        middlewareData: {},
        isPositioned: !1
    })
      , [E,b] = m.useState(i);
    Gi(E, i) || b(i);
    const [N,S] = m.useState(null)
      , [C,R] = m.useState(null)
      , M = m.useCallback(z => {
        z !== W.current && (W.current = z,
        S(z))
    }
    , [])
      , _ = m.useCallback(z => {
        z !== G.current && (G.current = z,
        R(z))
    }
    , [])
      , L = c || N
      , $ = f || C
      , W = m.useRef(null)
      , G = m.useRef(null)
      , Z = m.useRef(x)
      , ce = v != null
      , le = bu(v)
      , he = bu(l)
      , X = bu(g)
      , me = m.useCallback( () => {
        if (!W.current || !G.current)
            return;
        const z = {
            placement: r,
            strategy: s,
            middleware: E
        };
        he.current && (z.platform = he.current),
        Db(W.current, G.current, z).then(I => {
            const U = {
                ...I,
                isPositioned: X.current !== !1
            };
            q.current && !Gi(Z.current, U) && (Z.current = U,
            oa.flushSync( () => {
                w(U)
            }
            ))
        }
        )
    }
    , [E, r, s, he, X]);
    zi( () => {
        g === !1 && Z.current.isPositioned && (Z.current.isPositioned = !1,
        w(z => ({
            ...z,
            isPositioned: !1
        })))
    }
    , [g]);
    const q = m.useRef(!1);
    zi( () => (q.current = !0,
    () => {
        q.current = !1
    }
    ), []),
    zi( () => {
        if (L && (W.current = L),
        $ && (G.current = $),
        L && $) {
            if (le.current)
                return le.current(L, $, me);
            me()
        }
    }
    , [L, $, me, le, ce]);
    const ye = m.useMemo( () => ({
        reference: W,
        floating: G,
        setReference: M,
        setFloating: _
    }), [M, _])
      , ne = m.useMemo( () => ({
        reference: L,
        floating: $
    }), [L, $])
      , se = m.useMemo( () => {
        const z = {
            position: s,
            left: 0,
            top: 0
        };
        if (!ne.floating)
            return z;
        const I = Wp(ne.floating, x.x)
          , U = Wp(ne.floating, x.y);
        return p ? {
            ...z,
            transform: "translate(" + I + "px, " + U + "px)",
            ...Sm(ne.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: s,
            left: I,
            top: U
        }
    }
    , [s, p, ne.floating, x.x, x.y]);
    return m.useMemo( () => ({
        ...x,
        update: me,
        refs: ye,
        elements: ne,
        floatingStyles: se
    }), [x, me, ye, ne, se])
}
const $b = n => {
    function r(s) {
        return {}.hasOwnProperty.call(s, "current")
    }
    return {
        name: "arrow",
        options: n,
        fn(s) {
            const {element: i, padding: l} = typeof n == "function" ? n(s) : n;
            return i && r(i) ? i.current != null ? Vp({
                element: i.current,
                padding: l
            }).fn(s) : {} : i ? Vp({
                element: i,
                padding: l
            }).fn(s) : {}
        }
    }
}
  , Bb = (n, r) => ({
    ...jb(n),
    options: [n, r]
})
  , Ub = (n, r) => ({
    ...Mb(n),
    options: [n, r]
})
  , Vb = (n, r) => ({
    ...Ib(n),
    options: [n, r]
})
  , Wb = (n, r) => ({
    ..._b(n),
    options: [n, r]
})
  , Hb = (n, r) => ({
    ...Ab(n),
    options: [n, r]
})
  , Kb = (n, r) => ({
    ...Ob(n),
    options: [n, r]
})
  , Gb = (n, r) => ({
    ...$b(n),
    options: [n, r]
});
var Qb = "Arrow"
  , Cm = m.forwardRef( (n, r) => {
    const {children: s, width: i=10, height: l=5, ...c} = n;
    return h.jsx(Pe.svg, {
        ...c,
        ref: r,
        width: i,
        height: l,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: n.asChild ? s : h.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Cm.displayName = Qb;
var qb = Cm;
function Em(n) {
    const [r,s] = m.useState(void 0);
    return fn( () => {
        if (n) {
            s({
                width: n.offsetWidth,
                height: n.offsetHeight
            });
            const i = new ResizeObserver(l => {
                if (!Array.isArray(l) || !l.length)
                    return;
                const c = l[0];
                let f, p;
                if ("borderBoxSize"in c) {
                    const v = c.borderBoxSize
                      , g = Array.isArray(v) ? v[0] : v;
                    f = g.inlineSize,
                    p = g.blockSize
                } else
                    f = n.offsetWidth,
                    p = n.offsetHeight;
                s({
                    width: f,
                    height: p
                })
            }
            );
            return i.observe(n, {
                box: "border-box"
            }),
            () => i.unobserve(n)
        } else
            s(void 0)
    }
    , [n]),
    r
}
var pc = "Popper"
  , [km,ha] = hn(pc)
  , [Yb,Nm] = km(pc)
  , Pm = n => {
    const {__scopePopper: r, children: s} = n
      , [i,l] = m.useState(null);
    return h.jsx(Yb, {
        scope: r,
        anchor: i,
        onAnchorChange: l,
        children: s
    })
}
;
Pm.displayName = pc;
var Rm = "PopperAnchor"
  , Tm = m.forwardRef( (n, r) => {
    const {__scopePopper: s, virtualRef: i, ...l} = n
      , c = Nm(Rm, s)
      , f = m.useRef(null)
      , p = $e(r, f)
      , v = m.useRef(null);
    return m.useEffect( () => {
        const g = v.current;
        v.current = i?.current || f.current,
        g !== v.current && c.onAnchorChange(v.current)
    }
    ),
    i ? null : h.jsx(Pe.div, {
        ...l,
        ref: p
    })
}
);
Tm.displayName = Rm;
var hc = "PopperContent"
  , [Xb,Zb] = km(hc)
  , jm = m.forwardRef( (n, r) => {
    const {__scopePopper: s, side: i="bottom", sideOffset: l=0, align: c="center", alignOffset: f=0, arrowPadding: p=0, avoidCollisions: v=!0, collisionBoundary: g=[], collisionPadding: x=0, sticky: w="partial", hideWhenDetached: E=!1, updatePositionStrategy: b="optimized", onPlaced: N, ...S} = n
      , C = Nm(hc, s)
      , [R,M] = m.useState(null)
      , _ = $e(r, te => M(te))
      , [L,$] = m.useState(null)
      , W = Em(L)
      , G = W?.width ?? 0
      , Z = W?.height ?? 0
      , ce = i + (c !== "center" ? "-" + c : "")
      , le = typeof x == "number" ? x : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...x
    }
      , he = Array.isArray(g) ? g : [g]
      , X = he.length > 0
      , me = {
        padding: le,
        boundary: he.filter(eS),
        altBoundary: X
    }
      , {refs: q, floatingStyles: ye, placement: ne, isPositioned: se, middlewareData: z} = zb({
        strategy: "fixed",
        placement: ce,
        whileElementsMounted: (...te) => Tb(...te, {
            animationFrame: b === "always"
        }),
        elements: {
            reference: C.anchor
        },
        middleware: [Bb({
            mainAxis: l + Z,
            alignmentAxis: f
        }), v && Ub({
            mainAxis: !0,
            crossAxis: !1,
            limiter: w === "partial" ? Vb() : void 0,
            ...me
        }), v && Wb({
            ...me
        }), Hb({
            ...me,
            apply: ({elements: te, rects: be, availableWidth: Ee, availableHeight: Ve}) => {
                const {width: Pt, height: Tn} = be.reference
                  , Rt = te.floating.style;
                Rt.setProperty("--radix-popper-available-width", `${Ee}px`),
                Rt.setProperty("--radix-popper-available-height", `${Ve}px`),
                Rt.setProperty("--radix-popper-anchor-width", `${Pt}px`),
                Rt.setProperty("--radix-popper-anchor-height", `${Tn}px`)
            }
        }), L && Gb({
            element: L,
            padding: p
        }), tS({
            arrowWidth: G,
            arrowHeight: Z
        }), E && Kb({
            strategy: "referenceHidden",
            ...me
        })]
    })
      , [I,U] = Am(ne)
      , T = Nt(N);
    fn( () => {
        se && T?.()
    }
    , [se, T]);
    const F = z.arrow?.x
      , Y = z.arrow?.y
      , J = z.arrow?.centerOffset !== 0
      , [de,ve] = m.useState();
    return fn( () => {
        R && ve(window.getComputedStyle(R).zIndex)
    }
    , [R]),
    h.jsx("div", {
        ref: q.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...ye,
            transform: se ? ye.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: de,
            "--radix-popper-transform-origin": [z.transformOrigin?.x, z.transformOrigin?.y].join(" "),
            ...z.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: n.dir,
        children: h.jsx(Xb, {
            scope: s,
            placedSide: I,
            onArrowChange: $,
            arrowX: F,
            arrowY: Y,
            shouldHideArrow: J,
            children: h.jsx(Pe.div, {
                "data-side": I,
                "data-align": U,
                ...S,
                ref: _,
                style: {
                    ...S.style,
                    animation: se ? void 0 : "none"
                }
            })
        })
    })
}
);
jm.displayName = hc;
var Mm = "PopperArrow"
  , Jb = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , _m = m.forwardRef(function(r, s) {
    const {__scopePopper: i, ...l} = r
      , c = Zb(Mm, i)
      , f = Jb[c.placedSide];
    return h.jsx("span", {
        ref: c.onArrowChange,
        style: {
            position: "absolute",
            left: c.arrowX,
            top: c.arrowY,
            [f]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[c.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[c.placedSide],
            visibility: c.shouldHideArrow ? "hidden" : void 0
        },
        children: h.jsx(qb, {
            ...l,
            ref: s,
            style: {
                ...l.style,
                display: "block"
            }
        })
    })
});
_m.displayName = Mm;
function eS(n) {
    return n !== null
}
var tS = n => ({
    name: "transformOrigin",
    options: n,
    fn(r) {
        const {placement: s, rects: i, middlewareData: l} = r
          , f = l.arrow?.centerOffset !== 0
          , p = f ? 0 : n.arrowWidth
          , v = f ? 0 : n.arrowHeight
          , [g,x] = Am(s)
          , w = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[x]
          , E = (l.arrow?.x ?? 0) + p / 2
          , b = (l.arrow?.y ?? 0) + v / 2;
        let N = ""
          , S = "";
        return g === "bottom" ? (N = f ? w : `${E}px`,
        S = `${-v}px`) : g === "top" ? (N = f ? w : `${E}px`,
        S = `${i.floating.height + v}px`) : g === "right" ? (N = `${-v}px`,
        S = f ? w : `${b}px`) : g === "left" && (N = `${i.floating.width + v}px`,
        S = f ? w : `${b}px`),
        {
            data: {
                x: N,
                y: S
            }
        }
    }
});
function Am(n) {
    const [r,s="center"] = n.split("-");
    return [r, s]
}
var nS = Pm
  , Om = Tm
  , Im = jm
  , Dm = _m
  , rS = Symbol("radix.slottable");
function oS(n) {
    const r = ({children: s}) => h.jsx(h.Fragment, {
        children: s
    });
    return r.displayName = `${n}.Slottable`,
    r.__radixId = rS,
    r
}
var [ma] = hn("Tooltip", [ha])
  , mc = ha()
  , Lm = "TooltipProvider"
  , sS = 700
  , Hp = "tooltip.open"
  , [iS,Fm] = ma(Lm)
  , zm = n => {
    const {__scopeTooltip: r, delayDuration: s=sS, skipDelayDuration: i=300, disableHoverableContent: l=!1, children: c} = n
      , f = m.useRef(!0)
      , p = m.useRef(!1)
      , v = m.useRef(0);
    return m.useEffect( () => {
        const g = v.current;
        return () => window.clearTimeout(g)
    }
    , []),
    h.jsx(iS, {
        scope: r,
        isOpenDelayedRef: f,
        delayDuration: s,
        onOpen: m.useCallback( () => {
            window.clearTimeout(v.current),
            f.current = !1
        }
        , []),
        onClose: m.useCallback( () => {
            window.clearTimeout(v.current),
            v.current = window.setTimeout( () => f.current = !0, i)
        }
        , [i]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: m.useCallback(g => {
            p.current = g
        }
        , []),
        disableHoverableContent: l,
        children: c
    })
}
;
zm.displayName = Lm;
var $m = "Tooltip"
  , [vN,va] = ma($m)
  , $u = "TooltipTrigger"
  , aS = m.forwardRef( (n, r) => {
    const {__scopeTooltip: s, ...i} = n
      , l = va($u, s)
      , c = Fm($u, s)
      , f = mc(s)
      , p = m.useRef(null)
      , v = $e(r, p, l.onTriggerChange)
      , g = m.useRef(!1)
      , x = m.useRef(!1)
      , w = m.useCallback( () => g.current = !1, []);
    return m.useEffect( () => () => document.removeEventListener("pointerup", w), [w]),
    h.jsx(Om, {
        asChild: !0,
        ...f,
        children: h.jsx(Pe.button, {
            "aria-describedby": l.open ? l.contentId : void 0,
            "data-state": l.stateAttribute,
            ...i,
            ref: v,
            onPointerMove: ue(n.onPointerMove, E => {
                E.pointerType !== "touch" && !x.current && !c.isPointerInTransitRef.current && (l.onTriggerEnter(),
                x.current = !0)
            }
            ),
            onPointerLeave: ue(n.onPointerLeave, () => {
                l.onTriggerLeave(),
                x.current = !1
            }
            ),
            onPointerDown: ue(n.onPointerDown, () => {
                l.open && l.onClose(),
                g.current = !0,
                document.addEventListener("pointerup", w, {
                    once: !0
                })
            }
            ),
            onFocus: ue(n.onFocus, () => {
                g.current || l.onOpen()
            }
            ),
            onBlur: ue(n.onBlur, l.onClose),
            onClick: ue(n.onClick, l.onClose)
        })
    })
}
);
aS.displayName = $u;
var lS = "TooltipPortal"
  , [gN,uS] = ma(lS, {
    forceMount: void 0
})
  , so = "TooltipContent"
  , Bm = m.forwardRef( (n, r) => {
    const s = uS(so, n.__scopeTooltip)
      , {forceMount: i=s.forceMount, side: l="top", ...c} = n
      , f = va(so, n.__scopeTooltip);
    return h.jsx(rr, {
        present: i || f.open,
        children: f.disableHoverableContent ? h.jsx(Um, {
            side: l,
            ...c,
            ref: r
        }) : h.jsx(cS, {
            side: l,
            ...c,
            ref: r
        })
    })
}
)
  , cS = m.forwardRef( (n, r) => {
    const s = va(so, n.__scopeTooltip)
      , i = Fm(so, n.__scopeTooltip)
      , l = m.useRef(null)
      , c = $e(r, l)
      , [f,p] = m.useState(null)
      , {trigger: v, onClose: g} = s
      , x = l.current
      , {onPointerInTransitChange: w} = i
      , E = m.useCallback( () => {
        p(null),
        w(!1)
    }
    , [w])
      , b = m.useCallback( (N, S) => {
        const C = N.currentTarget
          , R = {
            x: N.clientX,
            y: N.clientY
        }
          , M = mS(R, C.getBoundingClientRect())
          , _ = vS(R, M)
          , L = gS(S.getBoundingClientRect())
          , $ = xS([..._, ...L]);
        p($),
        w(!0)
    }
    , [w]);
    return m.useEffect( () => () => E(), [E]),
    m.useEffect( () => {
        if (v && x) {
            const N = C => b(C, x)
              , S = C => b(C, v);
            return v.addEventListener("pointerleave", N),
            x.addEventListener("pointerleave", S),
            () => {
                v.removeEventListener("pointerleave", N),
                x.removeEventListener("pointerleave", S)
            }
        }
    }
    , [v, x, b, E]),
    m.useEffect( () => {
        if (f) {
            const N = S => {
                const C = S.target
                  , R = {
                    x: S.clientX,
                    y: S.clientY
                }
                  , M = v?.contains(C) || x?.contains(C)
                  , _ = !yS(R, f);
                M ? E() : _ && (E(),
                g())
            }
            ;
            return document.addEventListener("pointermove", N),
            () => document.removeEventListener("pointermove", N)
        }
    }
    , [v, x, f, g, E]),
    h.jsx(Um, {
        ...n,
        ref: c
    })
}
)
  , [dS,fS] = ma($m, {
    isInside: !1
})
  , pS = oS("TooltipContent")
  , Um = m.forwardRef( (n, r) => {
    const {__scopeTooltip: s, children: i, "aria-label": l, onEscapeKeyDown: c, onPointerDownOutside: f, ...p} = n
      , v = va(so, s)
      , g = mc(s)
      , {onClose: x} = v;
    return m.useEffect( () => (document.addEventListener(Hp, x),
    () => document.removeEventListener(Hp, x)), [x]),
    m.useEffect( () => {
        if (v.trigger) {
            const w = E => {
                E.target?.contains(v.trigger) && x()
            }
            ;
            return window.addEventListener("scroll", w, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", w, {
                capture: !0
            })
        }
    }
    , [v.trigger, x]),
    h.jsx(ia, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: w => w.preventDefault(),
        onDismiss: x,
        children: h.jsxs(Im, {
            "data-state": v.stateAttribute,
            ...g,
            ...p,
            ref: r,
            style: {
                ...p.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [h.jsx(pS, {
                children: i
            }), h.jsx(dS, {
                scope: s,
                isInside: !0,
                children: h.jsx(Ix, {
                    id: v.contentId,
                    role: "tooltip",
                    children: l || i
                })
            })]
        })
    })
}
);
Bm.displayName = so;
var Vm = "TooltipArrow"
  , hS = m.forwardRef( (n, r) => {
    const {__scopeTooltip: s, ...i} = n
      , l = mc(s);
    return fS(Vm, s).isInside ? null : h.jsx(Dm, {
        ...l,
        ...i,
        ref: r
    })
}
);
hS.displayName = Vm;
function mS(n, r) {
    const s = Math.abs(r.top - n.y)
      , i = Math.abs(r.bottom - n.y)
      , l = Math.abs(r.right - n.x)
      , c = Math.abs(r.left - n.x);
    switch (Math.min(s, i, l, c)) {
    case c:
        return "left";
    case l:
        return "right";
    case s:
        return "top";
    case i:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function vS(n, r, s=5) {
    const i = [];
    switch (r) {
    case "top":
        i.push({
            x: n.x - s,
            y: n.y + s
        }, {
            x: n.x + s,
            y: n.y + s
        });
        break;
    case "bottom":
        i.push({
            x: n.x - s,
            y: n.y - s
        }, {
            x: n.x + s,
            y: n.y - s
        });
        break;
    case "left":
        i.push({
            x: n.x + s,
            y: n.y - s
        }, {
            x: n.x + s,
            y: n.y + s
        });
        break;
    case "right":
        i.push({
            x: n.x - s,
            y: n.y - s
        }, {
            x: n.x - s,
            y: n.y + s
        });
        break
    }
    return i
}
function gS(n) {
    const {top: r, right: s, bottom: i, left: l} = n;
    return [{
        x: l,
        y: r
    }, {
        x: s,
        y: r
    }, {
        x: s,
        y: i
    }, {
        x: l,
        y: i
    }]
}
function yS(n, r) {
    const {x: s, y: i} = n;
    let l = !1;
    for (let c = 0, f = r.length - 1; c < r.length; f = c++) {
        const p = r[c]
          , v = r[f]
          , g = p.x
          , x = p.y
          , w = v.x
          , E = v.y;
        x > i != E > i && s < (w - g) * (i - x) / (E - x) + g && (l = !l)
    }
    return l
}
function xS(n) {
    const r = n.slice();
    return r.sort( (s, i) => s.x < i.x ? -1 : s.x > i.x ? 1 : s.y < i.y ? -1 : s.y > i.y ? 1 : 0),
    wS(r)
}
function wS(n) {
    if (n.length <= 1)
        return n.slice();
    const r = [];
    for (let i = 0; i < n.length; i++) {
        const l = n[i];
        for (; r.length >= 2; ) {
            const c = r[r.length - 1]
              , f = r[r.length - 2];
            if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x))
                r.pop();
            else
                break
        }
        r.push(l)
    }
    r.pop();
    const s = [];
    for (let i = n.length - 1; i >= 0; i--) {
        const l = n[i];
        for (; s.length >= 2; ) {
            const c = s[s.length - 1]
              , f = s[s.length - 2];
            if ((c.x - f.x) * (l.y - f.y) >= (c.y - f.y) * (l.x - f.x))
                s.pop();
            else
                break
        }
        s.push(l)
    }
    return s.pop(),
    r.length === 1 && s.length === 1 && r[0].x === s[0].x && r[0].y === s[0].y ? r : r.concat(s)
}
var bS = zm
  , Wm = Bm;
const SS = bS
  , CS = m.forwardRef( ({className: n, sideOffset: r=4, ...s}, i) => h.jsx(Wm, {
    ref: i,
    sideOffset: r,
    className: Fe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
    ...s
}));
CS.displayName = Wm.displayName;
var ga = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(n) {
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , ES = {
    setTimeout: (n, r) => setTimeout(n, r),
    clearTimeout: n => clearTimeout(n),
    setInterval: (n, r) => setInterval(n, r),
    clearInterval: n => clearInterval(n)
}
  , kS = class {
    #e = ES;
    #t = !1;
    setTimeoutProvider(n) {
        this.#e = n
    }
    setTimeout(n, r) {
        return this.#e.setTimeout(n, r)
    }
    clearTimeout(n) {
        this.#e.clearTimeout(n)
    }
    setInterval(n, r) {
        return this.#e.setInterval(n, r)
    }
    clearInterval(n) {
        this.#e.clearInterval(n)
    }
}
  , Bu = new kS;
function NS(n) {
    setTimeout(n, 0)
}
var ya = typeof window > "u" || "Deno"in globalThis;
function Gt() {}
function PS(n, r) {
    return typeof n == "function" ? n(r) : n
}
function RS(n) {
    return typeof n == "number" && n >= 0 && n !== 1 / 0
}
function TS(n, r) {
    return Math.max(n + (r || 0) - Date.now(), 0)
}
function Uu(n, r) {
    return typeof n == "function" ? n(r) : n
}
function jS(n, r) {
    return typeof n == "function" ? n(r) : n
}
function Kp(n, r) {
    const {type: s="all", exact: i, fetchStatus: l, predicate: c, queryKey: f, stale: p} = n;
    if (f) {
        if (i) {
            if (r.queryHash !== vc(f, r.options))
                return !1
        } else if (!ss(r.queryKey, f))
            return !1
    }
    if (s !== "all") {
        const v = r.isActive();
        if (s === "active" && !v || s === "inactive" && v)
            return !1
    }
    return !(typeof p == "boolean" && r.isStale() !== p || l && l !== r.state.fetchStatus || c && !c(r))
}
function Gp(n, r) {
    const {exact: s, status: i, predicate: l, mutationKey: c} = n;
    if (c) {
        if (!r.options.mutationKey)
            return !1;
        if (s) {
            if (os(r.options.mutationKey) !== os(c))
                return !1
        } else if (!ss(r.options.mutationKey, c))
            return !1
    }
    return !(i && r.state.status !== i || l && !l(r))
}
function vc(n, r) {
    return (r?.queryKeyHashFn || os)(n)
}
function os(n) {
    return JSON.stringify(n, (r, s) => Vu(s) ? Object.keys(s).sort().reduce( (i, l) => (i[l] = s[l],
    i), {}) : s)
}
function ss(n, r) {
    return n === r ? !0 : typeof n != typeof r ? !1 : n && r && typeof n == "object" && typeof r == "object" ? Object.keys(r).every(s => ss(n[s], r[s])) : !1
}
var MS = Object.prototype.hasOwnProperty;
function Hm(n, r) {
    if (n === r)
        return n;
    const s = Qp(n) && Qp(r);
    if (!s && !(Vu(n) && Vu(r)))
        return r;
    const l = (s ? n : Object.keys(n)).length
      , c = s ? r : Object.keys(r)
      , f = c.length
      , p = s ? new Array(f) : {};
    let v = 0;
    for (let g = 0; g < f; g++) {
        const x = s ? g : c[g]
          , w = n[x]
          , E = r[x];
        if (w === E) {
            p[x] = w,
            (s ? g < l : MS.call(n, x)) && v++;
            continue
        }
        if (w === null || E === null || typeof w != "object" || typeof E != "object") {
            p[x] = E;
            continue
        }
        const b = Hm(w, E);
        p[x] = b,
        b === w && v++
    }
    return l === f && v === l ? n : p
}
function Qp(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function Vu(n) {
    if (!qp(n))
        return !1;
    const r = n.constructor;
    if (r === void 0)
        return !0;
    const s = r.prototype;
    return !(!qp(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype)
}
function qp(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function _S(n) {
    return new Promise(r => {
        Bu.setTimeout(r, n)
    }
    )
}
function AS(n, r, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(n, r) : s.structuralSharing !== !1 ? Hm(n, r) : r
}
function OS(n, r, s=0) {
    const i = [...n, r];
    return s && i.length > s ? i.slice(1) : i
}
function IS(n, r, s=0) {
    const i = [r, ...n];
    return s && i.length > s ? i.slice(0, -1) : i
}
var gc = Symbol();
function Km(n, r) {
    return !n.queryFn && r?.initialPromise ? () => r.initialPromise : !n.queryFn || n.queryFn === gc ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn
}
var DS = class extends ga {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = n => {
            if (!ya && window.addEventListener) {
                const r = () => n();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(n) {
        this.#n = n,
        this.#t?.(),
        this.#t = n(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        )
    }
    setFocused(n) {
        this.#e !== n && (this.#e = n,
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(r => {
            r(n)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , Gm = new DS;
function LS() {
    let n, r;
    const s = new Promise( (l, c) => {
        n = l,
        r = c
    }
    );
    s.status = "pending",
    s.catch( () => {}
    );
    function i(l) {
        Object.assign(s, l),
        delete s.resolve,
        delete s.reject
    }
    return s.resolve = l => {
        i({
            status: "fulfilled",
            value: l
        }),
        n(l)
    }
    ,
    s.reject = l => {
        i({
            status: "rejected",
            reason: l
        }),
        r(l)
    }
    ,
    s
}
var FS = NS;
function zS() {
    let n = []
      , r = 0
      , s = p => {
        p()
    }
      , i = p => {
        p()
    }
      , l = FS;
    const c = p => {
        r ? n.push(p) : l( () => {
            s(p)
        }
        )
    }
      , f = () => {
        const p = n;
        n = [],
        p.length && l( () => {
            i( () => {
                p.forEach(v => {
                    s(v)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: p => {
            let v;
            r++;
            try {
                v = p()
            } finally {
                r--,
                r || f()
            }
            return v
        }
        ,
        batchCalls: p => (...v) => {
            c( () => {
                p(...v)
            }
            )
        }
        ,
        schedule: c,
        setNotifyFunction: p => {
            s = p
        }
        ,
        setBatchNotifyFunction: p => {
            i = p
        }
        ,
        setScheduler: p => {
            l = p
        }
    }
}
var at = zS()
  , $S = class extends ga {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = n => {
            if (!ya && window.addEventListener) {
                const r = () => n(!0)
                  , s = () => n(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", s, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", s)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(n) {
        this.#n = n,
        this.#t?.(),
        this.#t = n(this.setOnline.bind(this))
    }
    setOnline(n) {
        this.#e !== n && (this.#e = n,
        this.listeners.forEach(s => {
            s(n)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , Qi = new $S;
function BS(n) {
    return Math.min(1e3 * 2 ** n, 3e4)
}
function Qm(n) {
    return (n ?? "online") === "online" ? Qi.isOnline() : !0
}
var Wu = class extends Error {
    constructor(n) {
        super("CancelledError"),
        this.revert = n?.revert,
        this.silent = n?.silent
    }
}
;
function qm(n) {
    let r = !1, s = 0, i;
    const l = LS()
      , c = () => l.status !== "pending"
      , f = S => {
        if (!c()) {
            const C = new Wu(S);
            E(C),
            n.onCancel?.(C)
        }
    }
      , p = () => {
        r = !0
    }
      , v = () => {
        r = !1
    }
      , g = () => Gm.isFocused() && (n.networkMode === "always" || Qi.isOnline()) && n.canRun()
      , x = () => Qm(n.networkMode) && n.canRun()
      , w = S => {
        c() || (i?.(),
        l.resolve(S))
    }
      , E = S => {
        c() || (i?.(),
        l.reject(S))
    }
      , b = () => new Promise(S => {
        i = C => {
            (c() || g()) && S(C)
        }
        ,
        n.onPause?.()
    }
    ).then( () => {
        i = void 0,
        c() || n.onContinue?.()
    }
    )
      , N = () => {
        if (c())
            return;
        let S;
        const C = s === 0 ? n.initialPromise : void 0;
        try {
            S = C ?? n.fn()
        } catch (R) {
            S = Promise.reject(R)
        }
        Promise.resolve(S).then(w).catch(R => {
            if (c())
                return;
            const M = n.retry ?? (ya ? 0 : 3)
              , _ = n.retryDelay ?? BS
              , L = typeof _ == "function" ? _(s, R) : _
              , $ = M === !0 || typeof M == "number" && s < M || typeof M == "function" && M(s, R);
            if (r || !$) {
                E(R);
                return
            }
            s++,
            n.onFail?.(s, R),
            _S(L).then( () => g() ? void 0 : b()).then( () => {
                r ? E(R) : N()
            }
            )
        }
        )
    }
    ;
    return {
        promise: l,
        status: () => l.status,
        cancel: f,
        continue: () => (i?.(),
        l),
        cancelRetry: p,
        continueRetry: v,
        canStart: x,
        start: () => (x() ? N() : b().then(N),
        l)
    }
}
var Ym = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        RS(this.gcTime) && (this.#e = Bu.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (ya ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (Bu.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , US = class extends Ym {
    #e;
    #t;
    #n;
    #o;
    #r;
    #i;
    #a;
    constructor(n) {
        super(),
        this.#a = !1,
        this.#i = n.defaultOptions,
        this.setOptions(n.options),
        this.observers = [],
        this.#o = n.client,
        this.#n = this.#o.getQueryCache(),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        this.#e = Xp(this.options),
        this.state = n.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#r?.promise
    }
    setOptions(n) {
        if (this.options = {
            ...this.#i,
            ...n
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = Xp(this.options);
            r.data !== void 0 && (this.setState(Yp(r.data, r.dataUpdatedAt)),
            this.#e = r)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(n, r) {
        const s = AS(this.state.data, n, this.options);
        return this.#s({
            data: s,
            type: "success",
            dataUpdatedAt: r?.updatedAt,
            manual: r?.manual
        }),
        s
    }
    setState(n, r) {
        this.#s({
            type: "setState",
            state: n,
            setStateOptions: r
        })
    }
    cancel(n) {
        const r = this.#r?.promise;
        return this.#r?.cancel(n),
        r ? r.then(Gt).catch(Gt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(n => jS(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === gc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => Uu(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !TS(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        this.observers.find(r => r.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    onOnline() {
        this.observers.find(r => r.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(r => r !== n),
        this.observers.length || (this.#r && (this.#a ? this.#r.cancel({
            revert: !0
        }) : this.#r.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        })
    }
    async fetch(n, r) {
        if (this.state.fetchStatus !== "idle" && this.#r?.status() !== "rejected") {
            if (this.state.data !== void 0 && r?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#r)
                return this.#r.continueRetry(),
                this.#r.promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const p = this.observers.find(v => v.options.queryFn);
            p && this.setOptions(p.options)
        }
        const s = new AbortController
          , i = p => {
            Object.defineProperty(p, "signal", {
                enumerable: !0,
                get: () => (this.#a = !0,
                s.signal)
            })
        }
          , l = () => {
            const p = Km(this.options, r)
              , g = ( () => {
                const x = {
                    client: this.#o,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(x),
                x
            }
            )();
            return this.#a = !1,
            this.options.persister ? this.options.persister(p, g, this) : p(g)
        }
          , f = ( () => {
            const p = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#o,
                state: this.state,
                fetchFn: l
            };
            return i(p),
            p
        }
        )();
        this.options.behavior?.onFetch(f, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== f.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: f.fetchOptions?.meta
        }),
        this.#r = qm({
            initialPromise: r?.initialPromise,
            fn: f.fetchFn,
            onCancel: p => {
                p instanceof Wu && p.revert && this.setState({
                    ...this.#t,
                    fetchStatus: "idle"
                }),
                s.abort()
            }
            ,
            onFail: (p, v) => {
                this.#s({
                    type: "failed",
                    failureCount: p,
                    error: v
                })
            }
            ,
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#s({
                    type: "continue"
                })
            }
            ,
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode,
            canRun: () => !0
        });
        try {
            const p = await this.#r.start();
            if (p === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(p),
            this.#n.config.onSuccess?.(p, this),
            this.#n.config.onSettled?.(p, this.state.error, this),
            p
        } catch (p) {
            if (p instanceof Wu) {
                if (p.silent)
                    return this.#r.promise;
                if (p.revert) {
                    if (this.state.data === void 0)
                        throw p;
                    return this.state.data
                }
            }
            throw this.#s({
                type: "error",
                error: p
            }),
            this.#n.config.onError?.(p, this),
            this.#n.config.onSettled?.(this.state.data, p, this),
            p
        } finally {
            this.scheduleGc()
        }
    }
    #s(n) {
        const r = s => {
            switch (n.type) {
            case "failed":
                return {
                    ...s,
                    fetchFailureCount: n.failureCount,
                    fetchFailureReason: n.error
                };
            case "pause":
                return {
                    ...s,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...s,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...s,
                    ...VS(s.data, this.options),
                    fetchMeta: n.meta ?? null
                };
            case "success":
                const i = {
                    ...s,
                    ...Yp(n.data, n.dataUpdatedAt),
                    dataUpdateCount: s.dataUpdateCount + 1,
                    ...!n.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#t = n.manual ? i : void 0,
                i;
            case "error":
                const l = n.error;
                return {
                    ...s,
                    error: l,
                    errorUpdateCount: s.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: s.fetchFailureCount + 1,
                    fetchFailureReason: l,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...s,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...s,
                    ...n.state
                }
            }
        }
        ;
        this.state = r(this.state),
        at.batch( () => {
            this.observers.forEach(s => {
                s.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function VS(n, r) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Qm(r.networkMode) ? "fetching" : "paused",
        ...n === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Yp(n, r) {
    return {
        data: n,
        dataUpdatedAt: r ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function Xp(n) {
    const r = typeof n.initialData == "function" ? n.initialData() : n.initialData
      , s = r !== void 0
      , i = s ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
    return {
        data: r,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
function Zp(n) {
    return {
        onFetch: (r, s) => {
            const i = r.options
              , l = r.fetchOptions?.meta?.fetchMore?.direction
              , c = r.state.data?.pages || []
              , f = r.state.data?.pageParams || [];
            let p = {
                pages: [],
                pageParams: []
            }
              , v = 0;
            const g = async () => {
                let x = !1;
                const w = N => {
                    Object.defineProperty(N, "signal", {
                        enumerable: !0,
                        get: () => (r.signal.aborted ? x = !0 : r.signal.addEventListener("abort", () => {
                            x = !0
                        }
                        ),
                        r.signal)
                    })
                }
                  , E = Km(r.options, r.fetchOptions)
                  , b = async (N, S, C) => {
                    if (x)
                        return Promise.reject();
                    if (S == null && N.pages.length)
                        return Promise.resolve(N);
                    const M = ( () => {
                        const W = {
                            client: r.client,
                            queryKey: r.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: r.options.meta
                        };
                        return w(W),
                        W
                    }
                    )()
                      , _ = await E(M)
                      , {maxPages: L} = r.options
                      , $ = C ? IS : OS;
                    return {
                        pages: $(N.pages, _, L),
                        pageParams: $(N.pageParams, S, L)
                    }
                }
                ;
                if (l && c.length) {
                    const N = l === "backward"
                      , S = N ? WS : Jp
                      , C = {
                        pages: c,
                        pageParams: f
                    }
                      , R = S(i, C);
                    p = await b(C, R, N)
                } else {
                    const N = n ?? c.length;
                    do {
                        const S = v === 0 ? f[0] ?? i.initialPageParam : Jp(i, p);
                        if (v > 0 && S == null)
                            break;
                        p = await b(p, S),
                        v++
                    } while (v < N)
                }
                return p
            }
            ;
            r.options.persister ? r.fetchFn = () => r.options.persister?.(g, {
                client: r.client,
                queryKey: r.queryKey,
                meta: r.options.meta,
                signal: r.signal
            }, s) : r.fetchFn = g
        }
    }
}
function Jp(n, {pages: r, pageParams: s}) {
    const i = r.length - 1;
    return r.length > 0 ? n.getNextPageParam(r[i], r, s[i], s) : void 0
}
function WS(n, {pages: r, pageParams: s}) {
    return r.length > 0 ? n.getPreviousPageParam?.(r[0], r, s[0], s) : void 0
}
var HS = class extends Ym {
    #e;
    #t;
    #n;
    #o;
    constructor(n) {
        super(),
        this.#e = n.client,
        this.mutationId = n.mutationId,
        this.#n = n.mutationCache,
        this.#t = [],
        this.state = n.state || KS(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        this.#t.includes(n) || (this.#t.push(n),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.#t = this.#t.filter(r => r !== n),
        this.scheduleGc(),
        this.#n.notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
    }
    continue() {
        return this.#o?.continue() ?? this.execute(this.state.variables)
    }
    async execute(n) {
        const r = () => {
            this.#r({
                type: "continue"
            })
        }
          , s = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#o = qm({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, s) : Promise.reject(new Error("No mutationFn found")),
            onFail: (c, f) => {
                this.#r({
                    type: "failed",
                    failureCount: c,
                    error: f
                })
            }
            ,
            onPause: () => {
                this.#r({
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        const i = this.state.status === "pending"
          , l = !this.#o.canStart();
        try {
            if (i)
                r();
            else {
                this.#r({
                    type: "pending",
                    variables: n,
                    isPaused: l
                }),
                await this.#n.config.onMutate?.(n, this, s);
                const f = await this.options.onMutate?.(n, s);
                f !== this.state.context && this.#r({
                    type: "pending",
                    context: f,
                    variables: n,
                    isPaused: l
                })
            }
            const c = await this.#o.start();
            return await this.#n.config.onSuccess?.(c, n, this.state.context, this, s),
            await this.options.onSuccess?.(c, n, this.state.context, s),
            await this.#n.config.onSettled?.(c, null, this.state.variables, this.state.context, this, s),
            await this.options.onSettled?.(c, null, n, this.state.context, s),
            this.#r({
                type: "success",
                data: c
            }),
            c
        } catch (c) {
            try {
                throw await this.#n.config.onError?.(c, n, this.state.context, this, s),
                await this.options.onError?.(c, n, this.state.context, s),
                await this.#n.config.onSettled?.(void 0, c, this.state.variables, this.state.context, this, s),
                await this.options.onSettled?.(void 0, c, n, this.state.context, s),
                c
            } finally {
                this.#r({
                    type: "error",
                    error: c
                })
            }
        } finally {
            this.#n.runNext(this)
        }
    }
    #r(n) {
        const r = s => {
            switch (n.type) {
            case "failed":
                return {
                    ...s,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return {
                    ...s,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...s,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...s,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...s,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...s,
                    data: void 0,
                    error: n.error,
                    failureCount: s.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = r(this.state),
        at.batch( () => {
            this.#t.forEach(s => {
                s.onMutationUpdate(n)
            }
            ),
            this.#n.notify({
                mutation: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function KS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var GS = class extends ga {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Set,
        this.#t = new Map,
        this.#n = 0
    }
    #e;
    #t;
    #n;
    build(n, r, s) {
        const i = new HS({
            client: n,
            mutationCache: this,
            mutationId: ++this.#n,
            options: n.defaultMutationOptions(r),
            state: s
        });
        return this.add(i),
        i
    }
    add(n) {
        this.#e.add(n);
        const r = _i(n);
        if (typeof r == "string") {
            const s = this.#t.get(r);
            s ? s.push(n) : this.#t.set(r, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (this.#e.delete(n)) {
            const r = _i(n);
            if (typeof r == "string") {
                const s = this.#t.get(r);
                if (s)
                    if (s.length > 1) {
                        const i = s.indexOf(n);
                        i !== -1 && s.splice(i, 1)
                    } else
                        s[0] === n && this.#t.delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const r = _i(n);
        if (typeof r == "string") {
            const i = this.#t.get(r)?.find(l => l.state.status === "pending");
            return !i || i === n
        } else
            return !0
    }
    runNext(n) {
        const r = _i(n);
        return typeof r == "string" ? this.#t.get(r)?.find(i => i !== n && i.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        at.batch( () => {
            this.#e.forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            this.#e.clear(),
            this.#t.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(n) {
        const r = {
            exact: !0,
            ...n
        };
        return this.getAll().find(s => Gp(r, s))
    }
    findAll(n={}) {
        return this.getAll().filter(r => Gp(n, r))
    }
    notify(n) {
        at.batch( () => {
            this.listeners.forEach(r => {
                r(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(r => r.state.isPaused);
        return at.batch( () => Promise.all(n.map(r => r.continue().catch(Gt))))
    }
}
;
function _i(n) {
    return n.options.scope?.id
}
var QS = class extends ga {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Map
    }
    #e;
    build(n, r, s) {
        const i = r.queryKey
          , l = r.queryHash ?? vc(i, r);
        let c = this.get(l);
        return c || (c = new US({
            client: n,
            queryKey: i,
            queryHash: l,
            options: n.defaultQueryOptions(r),
            state: s,
            defaultOptions: n.getQueryDefaults(i)
        }),
        this.add(c)),
        c
    }
    add(n) {
        this.#e.has(n.queryHash) || (this.#e.set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const r = this.#e.get(n.queryHash);
        r && (n.destroy(),
        r === n && this.#e.delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        at.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return this.#e.get(n)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(n) {
        const r = {
            exact: !0,
            ...n
        };
        return this.getAll().find(s => Kp(r, s))
    }
    findAll(n={}) {
        const r = this.getAll();
        return Object.keys(n).length > 0 ? r.filter(s => Kp(n, s)) : r
    }
    notify(n) {
        at.batch( () => {
            this.listeners.forEach(r => {
                r(n)
            }
            )
        }
        )
    }
    onFocus() {
        at.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        at.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
  , qS = class {
    #e;
    #t;
    #n;
    #o;
    #r;
    #i;
    #a;
    #s;
    constructor(n={}) {
        this.#e = n.queryCache || new QS,
        this.#t = n.mutationCache || new GS,
        this.#n = n.defaultOptions || {},
        this.#o = new Map,
        this.#r = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#a = Gm.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#s = Qi.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#a?.(),
        this.#a = void 0,
        this.#s?.(),
        this.#s = void 0)
    }
    isFetching(n) {
        return this.#e.findAll({
            ...n,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(n) {
        return this.#t.findAll({
            ...n,
            status: "pending"
        }).length
    }
    getQueryData(n) {
        const r = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(r.queryHash)?.state.data
    }
    ensureQueryData(n) {
        const r = this.defaultQueryOptions(n)
          , s = this.#e.build(this, r)
          , i = s.state.data;
        return i === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && s.isStaleByTime(Uu(r.staleTime, s)) && this.prefetchQuery(r),
        Promise.resolve(i))
    }
    getQueriesData(n) {
        return this.#e.findAll(n).map( ({queryKey: r, state: s}) => {
            const i = s.data;
            return [r, i]
        }
        )
    }
    setQueryData(n, r, s) {
        const i = this.defaultQueryOptions({
            queryKey: n
        })
          , c = this.#e.get(i.queryHash)?.state.data
          , f = PS(r, c);
        if (f !== void 0)
            return this.#e.build(this, i).setData(f, {
                ...s,
                manual: !0
            })
    }
    setQueriesData(n, r, s) {
        return at.batch( () => this.#e.findAll(n).map( ({queryKey: i}) => [i, this.setQueryData(i, r, s)]))
    }
    getQueryState(n) {
        const r = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(r.queryHash)?.state
    }
    removeQueries(n) {
        const r = this.#e;
        at.batch( () => {
            r.findAll(n).forEach(s => {
                r.remove(s)
            }
            )
        }
        )
    }
    resetQueries(n, r) {
        const s = this.#e;
        return at.batch( () => (s.findAll(n).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...n
        }, r)))
    }
    cancelQueries(n, r={}) {
        const s = {
            revert: !0,
            ...r
        }
          , i = at.batch( () => this.#e.findAll(n).map(l => l.cancel(s)));
        return Promise.all(i).then(Gt).catch(Gt)
    }
    invalidateQueries(n, r={}) {
        return at.batch( () => (this.#e.findAll(n).forEach(s => {
            s.invalidate()
        }
        ),
        n?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...n,
            type: n?.refetchType ?? n?.type ?? "active"
        }, r)))
    }
    refetchQueries(n, r={}) {
        const s = {
            ...r,
            cancelRefetch: r.cancelRefetch ?? !0
        }
          , i = at.batch( () => this.#e.findAll(n).filter(l => !l.isDisabled() && !l.isStatic()).map(l => {
            let c = l.fetch(void 0, s);
            return s.throwOnError || (c = c.catch(Gt)),
            l.state.fetchStatus === "paused" ? Promise.resolve() : c
        }
        ));
        return Promise.all(i).then(Gt)
    }
    fetchQuery(n) {
        const r = this.defaultQueryOptions(n);
        r.retry === void 0 && (r.retry = !1);
        const s = this.#e.build(this, r);
        return s.isStaleByTime(Uu(r.staleTime, s)) ? s.fetch(r) : Promise.resolve(s.state.data)
    }
    prefetchQuery(n) {
        return this.fetchQuery(n).then(Gt).catch(Gt)
    }
    fetchInfiniteQuery(n) {
        return n.behavior = Zp(n.pages),
        this.fetchQuery(n)
    }
    prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(Gt).catch(Gt)
    }
    ensureInfiniteQueryData(n) {
        return n.behavior = Zp(n.pages),
        this.ensureQueryData(n)
    }
    resumePausedMutations() {
        return Qi.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(n) {
        this.#n = n
    }
    setQueryDefaults(n, r) {
        this.#o.set(os(n), {
            queryKey: n,
            defaultOptions: r
        })
    }
    getQueryDefaults(n) {
        const r = [...this.#o.values()]
          , s = {};
        return r.forEach(i => {
            ss(n, i.queryKey) && Object.assign(s, i.defaultOptions)
        }
        ),
        s
    }
    setMutationDefaults(n, r) {
        this.#r.set(os(n), {
            mutationKey: n,
            defaultOptions: r
        })
    }
    getMutationDefaults(n) {
        const r = [...this.#r.values()]
          , s = {};
        return r.forEach(i => {
            ss(n, i.mutationKey) && Object.assign(s, i.defaultOptions)
        }
        ),
        s
    }
    defaultQueryOptions(n) {
        if (n._defaulted)
            return n;
        const r = {
            ...this.#n.queries,
            ...this.getQueryDefaults(n.queryKey),
            ...n,
            _defaulted: !0
        };
        return r.queryHash || (r.queryHash = vc(r.queryKey, r)),
        r.refetchOnReconnect === void 0 && (r.refetchOnReconnect = r.networkMode !== "always"),
        r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
        !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
        r.queryFn === gc && (r.enabled = !1),
        r
    }
    defaultMutationOptions(n) {
        return n?._defaulted ? n : {
            ...this.#n.mutations,
            ...n?.mutationKey && this.getMutationDefaults(n.mutationKey),
            ...n,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , YS = m.createContext(void 0)
  , XS = ({client: n, children: r}) => (m.useEffect( () => (n.mount(),
() => {
    n.unmount()
}
), [n]),
h.jsx(YS.Provider, {
    value: n,
    children: r
}));
function qi() {
    return qi = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i])
        }
        return n
    }
    ,
    qi.apply(this, arguments)
}
var er;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(er || (er = {}));
const eh = "popstate";
function ZS(n) {
    n === void 0 && (n = {});
    function r(i, l) {
        let {pathname: c, search: f, hash: p} = i.location;
        return Hu("", {
            pathname: c,
            search: f,
            hash: p
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function s(i, l) {
        return typeof l == "string" ? l : Zm(l)
    }
    return eC(r, s, null, n)
}
function yt(n, r) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(r)
}
function Xm(n, r) {
    if (!n) {
        typeof console < "u" && console.warn(r);
        try {
            throw new Error(r)
        } catch {}
    }
}
function JS() {
    return Math.random().toString(36).substr(2, 8)
}
function th(n, r) {
    return {
        usr: n.state,
        key: n.key,
        idx: r
    }
}
function Hu(n, r, s, i) {
    return s === void 0 && (s = null),
    qi({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof r == "string" ? xa(r) : r, {
        state: s,
        key: r && r.key || i || JS()
    })
}
function Zm(n) {
    let {pathname: r="/", search: s="", hash: i=""} = n;
    return s && s !== "?" && (r += s.charAt(0) === "?" ? s : "?" + s),
    i && i !== "#" && (r += i.charAt(0) === "#" ? i : "#" + i),
    r
}
function xa(n) {
    let r = {};
    if (n) {
        let s = n.indexOf("#");
        s >= 0 && (r.hash = n.substr(s),
        n = n.substr(0, s));
        let i = n.indexOf("?");
        i >= 0 && (r.search = n.substr(i),
        n = n.substr(0, i)),
        n && (r.pathname = n)
    }
    return r
}
function eC(n, r, s, i) {
    i === void 0 && (i = {});
    let {window: l=document.defaultView, v5Compat: c=!1} = i
      , f = l.history
      , p = er.Pop
      , v = null
      , g = x();
    g == null && (g = 0,
    f.replaceState(qi({}, f.state, {
        idx: g
    }), ""));
    function x() {
        return (f.state || {
            idx: null
        }).idx
    }
    function w() {
        p = er.Pop;
        let C = x()
          , R = C == null ? null : C - g;
        g = C,
        v && v({
            action: p,
            location: S.location,
            delta: R
        })
    }
    function E(C, R) {
        p = er.Push;
        let M = Hu(S.location, C, R);
        g = x() + 1;
        let _ = th(M, g)
          , L = S.createHref(M);
        try {
            f.pushState(_, "", L)
        } catch ($) {
            if ($ instanceof DOMException && $.name === "DataCloneError")
                throw $;
            l.location.assign(L)
        }
        c && v && v({
            action: p,
            location: S.location,
            delta: 1
        })
    }
    function b(C, R) {
        p = er.Replace;
        let M = Hu(S.location, C, R);
        g = x();
        let _ = th(M, g)
          , L = S.createHref(M);
        f.replaceState(_, "", L),
        c && v && v({
            action: p,
            location: S.location,
            delta: 0
        })
    }
    function N(C) {
        let R = l.location.origin !== "null" ? l.location.origin : l.location.href
          , M = typeof C == "string" ? C : Zm(C);
        return M = M.replace(/ $/, "%20"),
        yt(R, "No window.location.(origin|href) available to create URL for href: " + M),
        new URL(M,R)
    }
    let S = {
        get action() {
            return p
        },
        get location() {
            return n(l, f)
        },
        listen(C) {
            if (v)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(eh, w),
            v = C,
            () => {
                l.removeEventListener(eh, w),
                v = null
            }
        },
        createHref(C) {
            return r(l, C)
        },
        createURL: N,
        encodeLocation(C) {
            let R = N(C);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: E,
        replace: b,
        go(C) {
            return f.go(C)
        }
    };
    return S
}
var nh;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(nh || (nh = {}));
function tC(n, r, s) {
    return s === void 0 && (s = "/"),
    nC(n, r, s)
}
function nC(n, r, s, i) {
    let l = typeof r == "string" ? xa(r) : r
      , c = tv(l.pathname || "/", s);
    if (c == null)
        return null;
    let f = Jm(n);
    rC(f);
    let p = null;
    for (let v = 0; p == null && v < f.length; ++v) {
        let g = mC(c);
        p = fC(f[v], g)
    }
    return p
}
function Jm(n, r, s, i) {
    r === void 0 && (r = []),
    s === void 0 && (s = []),
    i === void 0 && (i = "");
    let l = (c, f, p) => {
        let v = {
            relativePath: p === void 0 ? c.path || "" : p,
            caseSensitive: c.caseSensitive === !0,
            childrenIndex: f,
            route: c
        };
        v.relativePath.startsWith("/") && (yt(v.relativePath.startsWith(i), 'Absolute route path "' + v.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        v.relativePath = v.relativePath.slice(i.length));
        let g = no([i, v.relativePath])
          , x = s.concat(v);
        c.children && c.children.length > 0 && (yt(c.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        Jm(c.children, r, x, g)),
        !(c.path == null && !c.index) && r.push({
            path: g,
            score: cC(g, c.index),
            routesMeta: x
        })
    }
    ;
    return n.forEach( (c, f) => {
        var p;
        if (c.path === "" || !((p = c.path) != null && p.includes("?")))
            l(c, f);
        else
            for (let v of ev(c.path))
                l(c, f, v)
    }
    ),
    r
}
function ev(n) {
    let r = n.split("/");
    if (r.length === 0)
        return [];
    let[s,...i] = r
      , l = s.endsWith("?")
      , c = s.replace(/\?$/, "");
    if (i.length === 0)
        return l ? [c, ""] : [c];
    let f = ev(i.join("/"))
      , p = [];
    return p.push(...f.map(v => v === "" ? c : [c, v].join("/"))),
    l && p.push(...f),
    p.map(v => n.startsWith("/") && v === "" ? "/" : v)
}
function rC(n) {
    n.sort( (r, s) => r.score !== s.score ? s.score - r.score : dC(r.routesMeta.map(i => i.childrenIndex), s.routesMeta.map(i => i.childrenIndex)))
}
const oC = /^:[\w-]+$/
  , sC = 3
  , iC = 2
  , aC = 1
  , lC = 10
  , uC = -2
  , rh = n => n === "*";
function cC(n, r) {
    let s = n.split("/")
      , i = s.length;
    return s.some(rh) && (i += uC),
    r && (i += iC),
    s.filter(l => !rh(l)).reduce( (l, c) => l + (oC.test(c) ? sC : c === "" ? aC : lC), i)
}
function dC(n, r) {
    return n.length === r.length && n.slice(0, -1).every( (i, l) => i === r[l]) ? n[n.length - 1] - r[r.length - 1] : 0
}
function fC(n, r, s) {
    let {routesMeta: i} = n
      , l = {}
      , c = "/"
      , f = [];
    for (let p = 0; p < i.length; ++p) {
        let v = i[p]
          , g = p === i.length - 1
          , x = c === "/" ? r : r.slice(c.length) || "/"
          , w = pC({
            path: v.relativePath,
            caseSensitive: v.caseSensitive,
            end: g
        }, x)
          , E = v.route;
        if (!w)
            return null;
        Object.assign(l, w.params),
        f.push({
            params: l,
            pathname: no([c, w.pathname]),
            pathnameBase: vC(no([c, w.pathnameBase])),
            route: E
        }),
        w.pathnameBase !== "/" && (c = no([c, w.pathnameBase]))
    }
    return f
}
function pC(n, r) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[s,i] = hC(n.path, n.caseSensitive, n.end)
      , l = r.match(s);
    if (!l)
        return null;
    let c = l[0]
      , f = c.replace(/(.)\/+$/, "$1")
      , p = l.slice(1);
    return {
        params: i.reduce( (g, x, w) => {
            let {paramName: E, isOptional: b} = x;
            if (E === "*") {
                let S = p[w] || "";
                f = c.slice(0, c.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const N = p[w];
            return b && !N ? g[E] = void 0 : g[E] = (N || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: c,
        pathnameBase: f,
        pattern: n
    }
}
function hC(n, r, s) {
    r === void 0 && (r = !1),
    s === void 0 && (s = !0),
    Xm(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let i = []
      , l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, p, v) => (i.push({
        paramName: p,
        isOptional: v != null
    }),
    v ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? l += "\\/*$" : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,r ? void 0 : "i"), i]
}
function mC(n) {
    try {
        return n.split("/").map(r => decodeURIComponent(r).replace(/\//g, "%2F")).join("/")
    } catch (r) {
        return Xm(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")),
        n
    }
}
function tv(n, r) {
    if (r === "/")
        return n;
    if (!n.toLowerCase().startsWith(r.toLowerCase()))
        return null;
    let s = r.endsWith("/") ? r.length - 1 : r.length
      , i = n.charAt(s);
    return i && i !== "/" ? null : n.slice(s) || "/"
}
const no = n => n.join("/").replace(/\/\/+/g, "/")
  , vC = n => n.replace(/\/+$/, "").replace(/^\/*/, "/");
function gC(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const nv = ["post", "put", "patch", "delete"];
new Set(nv);
const yC = ["get", ...nv];
new Set(yC);
function Yi() {
    return Yi = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i])
        }
        return n
    }
    ,
    Yi.apply(this, arguments)
}
const xC = m.createContext(null)
  , wC = m.createContext(null)
  , rv = m.createContext(null)
  , wa = m.createContext(null)
  , ba = m.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , ov = m.createContext(null);
function yc() {
    return m.useContext(wa) != null
}
function bC() {
    return yc() || yt(!1),
    m.useContext(wa).location
}
function SC(n, r) {
    return CC(n, r)
}
function CC(n, r, s, i) {
    yc() || yt(!1);
    let {navigator: l} = m.useContext(rv)
      , {matches: c} = m.useContext(ba)
      , f = c[c.length - 1]
      , p = f ? f.params : {};
    f && f.pathname;
    let v = f ? f.pathnameBase : "/";
    f && f.route;
    let g = bC(), x;
    if (r) {
        var w;
        let C = typeof r == "string" ? xa(r) : r;
        v === "/" || (w = C.pathname) != null && w.startsWith(v) || yt(!1),
        x = C
    } else
        x = g;
    let E = x.pathname || "/"
      , b = E;
    if (v !== "/") {
        let C = v.replace(/^\//, "").split("/");
        b = "/" + E.replace(/^\//, "").split("/").slice(C.length).join("/")
    }
    let N = tC(n, {
        pathname: b
    })
      , S = RC(N && N.map(C => Object.assign({}, C, {
        params: Object.assign({}, p, C.params),
        pathname: no([v, l.encodeLocation ? l.encodeLocation(C.pathname).pathname : C.pathname]),
        pathnameBase: C.pathnameBase === "/" ? v : no([v, l.encodeLocation ? l.encodeLocation(C.pathnameBase).pathname : C.pathnameBase])
    })), c, s, i);
    return r && S ? m.createElement(wa.Provider, {
        value: {
            location: Yi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, x),
            navigationType: er.Pop
        }
    }, S) : S
}
function EC() {
    let n = _C()
      , r = gC(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , s = n instanceof Error ? n.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), s ? m.createElement("pre", {
        style: l
    }, s) : null, null)
}
const kC = m.createElement(EC, null);
class NC extends m.Component {
    constructor(r) {
        super(r),
        this.state = {
            location: r.location,
            revalidation: r.revalidation,
            error: r.error
        }
    }
    static getDerivedStateFromError(r) {
        return {
            error: r
        }
    }
    static getDerivedStateFromProps(r, s) {
        return s.location !== r.location || s.revalidation !== "idle" && r.revalidation === "idle" ? {
            error: r.error,
            location: r.location,
            revalidation: r.revalidation
        } : {
            error: r.error !== void 0 ? r.error : s.error,
            location: s.location,
            revalidation: r.revalidation || s.revalidation
        }
    }
    componentDidCatch(r, s) {
        console.error("React Router caught the following error during render", r, s)
    }
    render() {
        return this.state.error !== void 0 ? m.createElement(ba.Provider, {
            value: this.props.routeContext
        }, m.createElement(ov.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function PC(n) {
    let {routeContext: r, match: s, children: i} = n
      , l = m.useContext(xC);
    return l && l.static && l.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = s.route.id),
    m.createElement(ba.Provider, {
        value: r
    }, i)
}
function RC(n, r, s, i) {
    var l;
    if (r === void 0 && (r = []),
    s === void 0 && (s = null),
    i === void 0 && (i = null),
    n == null) {
        var c;
        if (!s)
            return null;
        if (s.errors)
            n = s.matches;
        else if ((c = i) != null && c.v7_partialHydration && r.length === 0 && !s.initialized && s.matches.length > 0)
            n = s.matches;
        else
            return null
    }
    let f = n
      , p = (l = s) == null ? void 0 : l.errors;
    if (p != null) {
        let x = f.findIndex(w => w.route.id && p?.[w.route.id] !== void 0);
        x >= 0 || yt(!1),
        f = f.slice(0, Math.min(f.length, x + 1))
    }
    let v = !1
      , g = -1;
    if (s && i && i.v7_partialHydration)
        for (let x = 0; x < f.length; x++) {
            let w = f[x];
            if ((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (g = x),
            w.route.id) {
                let {loaderData: E, errors: b} = s
                  , N = w.route.loader && E[w.route.id] === void 0 && (!b || b[w.route.id] === void 0);
                if (w.route.lazy || N) {
                    v = !0,
                    g >= 0 ? f = f.slice(0, g + 1) : f = [f[0]];
                    break
                }
            }
        }
    return f.reduceRight( (x, w, E) => {
        let b, N = !1, S = null, C = null;
        s && (b = p && w.route.id ? p[w.route.id] : void 0,
        S = w.route.errorElement || kC,
        v && (g < 0 && E === 0 ? (AC("route-fallback"),
        N = !0,
        C = null) : g === E && (N = !0,
        C = w.route.hydrateFallbackElement || null)));
        let R = r.concat(f.slice(0, E + 1))
          , M = () => {
            let _;
            return b ? _ = S : N ? _ = C : w.route.Component ? _ = m.createElement(w.route.Component, null) : w.route.element ? _ = w.route.element : _ = x,
            m.createElement(PC, {
                match: w,
                routeContext: {
                    outlet: x,
                    matches: R,
                    isDataRoute: s != null
                },
                children: _
            })
        }
        ;
        return s && (w.route.ErrorBoundary || w.route.errorElement || E === 0) ? m.createElement(NC, {
            location: s.location,
            revalidation: s.revalidation,
            component: S,
            error: b,
            children: M(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : M()
    }
    , null)
}
var sv = (function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseLoaderData = "useLoaderData",
    n.UseActionData = "useActionData",
    n.UseRouteError = "useRouteError",
    n.UseNavigation = "useNavigation",
    n.UseRouteLoaderData = "useRouteLoaderData",
    n.UseMatches = "useMatches",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n.UseRouteId = "useRouteId",
    n
}
)(sv || {});
function TC(n) {
    let r = m.useContext(wC);
    return r || yt(!1),
    r
}
function jC(n) {
    let r = m.useContext(ba);
    return r || yt(!1),
    r
}
function MC(n) {
    let r = jC()
      , s = r.matches[r.matches.length - 1];
    return s.route.id || yt(!1),
    s.route.id
}
function _C() {
    var n;
    let r = m.useContext(ov)
      , s = TC(sv.UseRouteError)
      , i = MC();
    return r !== void 0 ? r : (n = s.errors) == null ? void 0 : n[i]
}
const oh = {};
function AC(n, r, s) {
    oh[n] || (oh[n] = !0)
}
function OC(n, r) {
    n?.v7_startTransition,
    n?.v7_relativeSplatPath
}
function Ku(n) {
    yt(!1)
}
function IC(n) {
    let {basename: r="/", children: s=null, location: i, navigationType: l=er.Pop, navigator: c, static: f=!1, future: p} = n;
    yc() && yt(!1);
    let v = r.replace(/^\/*/, "/")
      , g = m.useMemo( () => ({
        basename: v,
        navigator: c,
        static: f,
        future: Yi({
            v7_relativeSplatPath: !1
        }, p)
    }), [v, p, c, f]);
    typeof i == "string" && (i = xa(i));
    let {pathname: x="/", search: w="", hash: E="", state: b=null, key: N="default"} = i
      , S = m.useMemo( () => {
        let C = tv(x, v);
        return C == null ? null : {
            location: {
                pathname: C,
                search: w,
                hash: E,
                state: b,
                key: N
            },
            navigationType: l
        }
    }
    , [v, x, w, E, b, N, l]);
    return S == null ? null : m.createElement(rv.Provider, {
        value: g
    }, m.createElement(wa.Provider, {
        children: s,
        value: S
    }))
}
function DC(n) {
    let {children: r, location: s} = n;
    return SC(Gu(r), s)
}
new Promise( () => {}
);
function Gu(n, r) {
    r === void 0 && (r = []);
    let s = [];
    return m.Children.forEach(n, (i, l) => {
        if (!m.isValidElement(i))
            return;
        let c = [...r, l];
        if (i.type === m.Fragment) {
            s.push.apply(s, Gu(i.props.children, c));
            return
        }
        i.type !== Ku && yt(!1),
        !i.props.index || !i.props.children || yt(!1);
        let f = {
            id: i.props.id || c.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (f.children = Gu(i.props.children, c)),
        s.push(f)
    }
    ),
    s
}
const LC = "6";
try {
    window.__reactRouterVersion = LC
} catch {}
const FC = "startTransition"
  , sh = ra[FC];
function zC(n) {
    let {basename: r, children: s, future: i, window: l} = n
      , c = m.useRef();
    c.current == null && (c.current = ZS({
        window: l,
        v5Compat: !0
    }));
    let f = c.current
      , [p,v] = m.useState({
        action: f.action,
        location: f.location
    })
      , {v7_startTransition: g} = i || {}
      , x = m.useCallback(w => {
        g && sh ? sh( () => v(w)) : v(w)
    }
    , [v, g]);
    return m.useLayoutEffect( () => f.listen(x), [f, x]),
    m.useEffect( () => OC(i), [i]),
    m.createElement(IC, {
        basename: r,
        children: s,
        location: p.location,
        navigationType: p.action,
        navigator: f,
        future: i
    })
}
var ih;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmit = "useSubmit",
    n.UseSubmitFetcher = "useSubmitFetcher",
    n.UseFetcher = "useFetcher",
    n.useViewTransitionState = "useViewTransitionState"
}
)(ih || (ih = {}));
var ah;
(function(n) {
    n.UseFetcher = "useFetcher",
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(ah || (ah = {}));
const $C = {
    "nav.routes": {
        en: "Routes",
        el: "Δρομολόγια",
        de: "Routen"
    },
    "nav.timetables": {
        en: "Timetables",
        el: "Ωράρια",
        de: "Fahrpläne"
    },
    "nav.tickets": {
        en: "Tickets",
        el: "Εισιτήρια",
        de: "Tickets"
    },
    "nav.help": {
        en: "Help",
        el: "Βοήθεια",
        de: "Hilfe"
    },
    "mode.bus": {
        en: "Bus",
        el: "Λεωφορείο",
        de: "Bus"
    },
    "mode.bicycle": {
        en: "Bicycle",
        el: "Ποδήλατο",
        de: "Fahrrad"
    },
    "mode.walking": {
        en: "Walking",
        el: "Περπάτημα",
        de: "Zu Fuß"
    },
    "accessibility.title": {
        en: "Accessibility",
        el: "Προσβασιμότητα",
        de: "Barrierefreiheit"
    },
    "accessibility.darkMode": {
        en: "Dark Mode",
        el: "Σκούρο Θέμα",
        de: "Dunkler Modus"
    },
    "accessibility.lightMode": {
        en: "Light Mode",
        el: "Φωτεινό Θέμα",
        de: "Heller Modus"
    },
    "accessibility.colorblind": {
        en: "Color Vision",
        el: "Χρωματική Όραση",
        de: "Farbsicht"
    },
    "accessibility.normal": {
        en: "Normal",
        el: "Κανονική",
        de: "Normal"
    },
    "accessibility.protanopia": {
        en: "Protanopia",
        el: "Πρωτανοπία",
        de: "Protanopie"
    },
    "accessibility.deuteranopia": {
        en: "Deuteranopia",
        el: "Δευτερανοπία",
        de: "Deuteranopie"
    },
    "accessibility.tritanopia": {
        en: "Tritanopia",
        el: "Τριτανοπία",
        de: "Tritanopie"
    },
    "accessibility.narrator": {
        en: "Screen Reader Mode",
        el: "Λειτουργία Αφηγητή",
        de: "Bildschirmleser"
    },
    "hero.title": {
        en: "Travel Across Greece",
        el: "Ταξιδέψτε σε όλη την Ελλάδα",
        de: "Reisen Sie durch Griechenland"
    },
    "hero.subtitle": {
        en: "Find your route, check timetables, and book KTEL bus tickets instantly",
        el: "Βρείτε το δρομολόγιό σας, ελέγξτε τα ωράρια και κλείστε εισιτήρια DEV",
        de: "Finden Sie Ihre Route, prüfen Sie Fahrpläne und buchen Sie KTEL-Tickets"
    },
    "search.from": {
        en: "From",
        el: "Από",
        de: "Von"
    },
    "search.to": {
        en: "To",
        el: "Προς",
        de: "Nach"
    },
    "search.date": {
        en: "Date",
        el: "Ημερομηνία",
        de: "Datum"
    },
    "search.time": {
        en: "Time",
        el: "Ώρα",
        de: "Zeit"
    },
    "search.findRoutes": {
        en: "Find Routes",
        el: "Αναζήτηση",
        de: "Suchen"
    },
    "search.passengers": {
        en: "Passengers",
        el: "Επιβάτες",
        de: "Passagiere"
    },
    "search.noResults": {
        en: "No routes found. Try different cities.",
        el: "Δεν βρέθηκαν δρομολόγια. Δοκιμάστε άλλες πόλεις.",
        de: "Keine Routen gefunden."
    },
    "search.findNearestKTEL": {
        en: "Find Nearest KTEL Station",
        el: "Βρείτε τον Πλησιέστερο Σταθμό DEV",
        de: "Nächste KTEL-Station finden"
    },
    "search.nearestKTELDesc": {
        en: "Get directions to walk or cycle to your nearest KTEL bus station",
        el: "Λάβετε οδηγίες για να περπατήσετε ή να ποδηλατήσετε στον πλησιέστερο σταθμό DEV",
        de: "Wegbeschreibung zur nächsten KTEL-Station"
    },
    "search.getDirections": {
        en: "Get Directions on Google Maps",
        el: "Οδηγίες στο Google Maps",
        de: "Wegbeschreibung auf Google Maps"
    },
    "search.orSelectStation": {
        en: "Or select a major KTEL station:",
        el: "Ή επιλέξτε έναν μεγάλο σταθμό DEV:",
        de: "Oder wählen Sie eine KTEL-Station:"
    },
    "timetable.departure": {
        en: "Departure",
        el: "Αναχώρηση",
        de: "Abfahrt"
    },
    "timetable.arrival": {
        en: "Arrival",
        el: "Άφιξη",
        de: "Ankunft"
    },
    "timetable.duration": {
        en: "Duration",
        el: "Διάρκεια",
        de: "Dauer"
    },
    "timetable.stops": {
        en: "Stops",
        el: "Στάσεις",
        de: "Haltestellen"
    },
    "timetable.price": {
        en: "Price",
        el: "Τιμή",
        de: "Preis"
    },
    "timetable.available": {
        en: "Available",
        el: "Διαθέσιμο",
        de: "Verfügbar"
    },
    "timetable.limited": {
        en: "Limited",
        el: "Περιορισμένο",
        de: "Begrenzt"
    },
    "timetable.results": {
        en: "Search Results",
        el: "Αποτελέσματα",
        de: "Suchergebnisse"
    },
    "action.buyTicket": {
        en: "Buy Ticket",
        el: "Αγορά",
        de: "Kaufen"
    },
    "action.viewDetails": {
        en: "View Details",
        el: "Λεπτομέρειες",
        de: "Details"
    },
    "action.bookNow": {
        en: "Book Now",
        el: "Κράτηση",
        de: "Jetzt Buchen"
    },
    "popular.title": {
        en: "Popular Routes",
        el: "Δημοφιλή Δρομολόγια",
        de: "Beliebte Routen"
    },
    "popular.subtitle": {
        en: "Most traveled connections",
        el: "Οι πιο δημοφιλείς διαδρομές",
        de: "Meistgenutzte Verbindungen"
    },
    "faq.title": {
        en: "Frequently Asked Questions",
        el: "Συχνές Ερωτήσεις",
        de: "Häufige Fragen"
    },
    "faq.lostItems": {
        en: "Lost Items",
        el: "Χαμένα Αντικείμενα",
        de: "Fundsachen"
    },
    "faq.lostItemsAnswer": {
        en: "Contact our customer service within 24 hours. We keep items for 30 days.",
        el: "Επικοινωνήστε με την εξυπηρέτηση πελατών εντός 24 ωρών. Διατηρούμε τα αντικείμενα για 30 ημέρες.",
        de: "Kontaktieren Sie unseren Kundenservice innerhalb von 24 Stunden."
    },
    "faq.refund": {
        en: "Refund Policy",
        el: "Πολιτική Επιστροφών",
        de: "Erstattungsrichtlinie"
    },
    "faq.refundAnswer": {
        en: "Full refund up to 24h before departure. 50% refund up to 2h before.",
        el: "Πλήρης επιστροφή έως 24 ώρες πριν. 50% επιστροφή έως 2 ώρες πριν.",
        de: "Volle Erstattung bis 24h vor Abfahrt."
    },
    "faq.luggage": {
        en: "Luggage Allowance",
        el: "Επιτρεπόμενες Αποσκευές",
        de: "Gepäckfreigabe"
    },
    "faq.luggageAnswer": {
        en: "2 bags per passenger (max 23kg each). Extra luggage available for purchase.",
        el: "2 βαλίτσες ανά επιβάτη (μέγ. 23kg). Επιπλέον αποσκευές με χρέωση.",
        de: "2 Gepäckstücke pro Passagier (max. 23kg)."
    },
    "faq.accessibility": {
        en: "Accessibility",
        el: "Προσβασιμότητα",
        de: "Barrierefreiheit"
    },
    "faq.accessibilityAnswer": {
        en: "Most vehicles are wheelchair accessible. Please notify us 24h in advance.",
        el: "Τα περισσότερα λεωφορεία είναι προσβάσιμα σε ΑΜΕΑ. Παρακαλώ ενημερώστε μας 24 ώρες νωρίτερα.",
        de: "Die meisten Fahrzeuge sind rollstuhlgerecht."
    },
    "contact.title": {
        en: "Contact Us",
        el: "Επικοινωνία",
        de: "Kontakt"
    },
    "contact.phone": {
        en: "Phone",
        el: "Τηλέφωνο",
        de: "Telefon"
    },
    "contact.email": {
        en: "Email",
        el: "Email",
        de: "E-Mail"
    },
    "contact.hours": {
        en: "Mon-Sun: 6:00-22:00",
        el: "Δευ-Κυρ: 6:00-22:00",
        de: "Mo-So: 6:00-22:00"
    },
    "footer.terms": {
        en: "Terms of Service",
        el: "Όροι Χρήσης",
        de: "Nutzungsbedingungen"
    },
    "footer.privacy": {
        en: "Privacy Policy",
        el: "Πολιτική Απορρήτου",
        de: "Datenschutz"
    },
    "footer.payments": {
        en: "We accept",
        el: "Δεχόμαστε",
        de: "Wir akzeptieren"
    },
    "footer.tagline": {
        en: "Your trusted partner for comfortable bus travel across Greece.",
        el: "Ο αξιόπιστος συνεργάτης σας για άνετα ταξίδια με λεωφορείο σε όλη την Ελλάδα.",
        de: "Ihr zuverlässiger Partner für komfortables Busreisen in Griechenland."
    }
}
  , iv = m.createContext(void 0)
  , BC = ({children: n}) => {
    const [r,s] = m.useState("el")
      , i = l => {
        const c = $C[l];
        return c && (c[r] || c.en) || l
    }
    ;
    return h.jsx(iv.Provider, {
        value: {
            language: r,
            setLanguage: s,
            t: i
        },
        children: n
    })
}
  , vn = () => {
    const n = m.useContext(iv);
    if (!n)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return n
}
  , av = m.createContext(void 0)
  , UC = ({children: n}) => {
    const [r,s] = m.useState("light")
      , i = () => s(l => l === "light" ? "dark" : "light");
    return h.jsx(av.Provider, {
        value: {
            theme: r,
            toggleTheme: i
        },
        children: h.jsx("div", {
            className: r,
            children: n
        })
    })
}
  , VC = () => {
    const n = m.useContext(av);
    if (!n)
        throw new Error("useTheme must be inside ThemeProvider");
    return n
}
;
var WC = Symbol.for("react.lazy")
  , Xi = ra[" use ".trim().toString()];
function HC(n) {
    return typeof n == "object" && n !== null && "then"in n
}
function lv(n) {
    return n != null && typeof n == "object" && "$$typeof"in n && n.$$typeof === WC && "_payload"in n && HC(n._payload)
}
function KC(n) {
    const r = QC(n)
      , s = m.forwardRef( (i, l) => {
        let {children: c, ...f} = i;
        lv(c) && typeof Xi == "function" && (c = Xi(c._payload));
        const p = m.Children.toArray(c)
          , v = p.find(YC);
        if (v) {
            const g = v.props.children
              , x = p.map(w => w === v ? m.Children.count(g) > 1 ? m.Children.only(null) : m.isValidElement(g) ? g.props.children : null : w);
            return h.jsx(r, {
                ...f,
                ref: l,
                children: m.isValidElement(g) ? m.cloneElement(g, void 0, x) : null
            })
        }
        return h.jsx(r, {
            ...f,
            ref: l,
            children: c
        })
    }
    );
    return s.displayName = `${n}.Slot`,
    s
}
var GC = KC("Slot");
function QC(n) {
    const r = m.forwardRef( (s, i) => {
        let {children: l, ...c} = s;
        if (lv(l) && typeof Xi == "function" && (l = Xi(l._payload)),
        m.isValidElement(l)) {
            const f = ZC(l)
              , p = XC(c, l.props);
            return l.type !== m.Fragment && (p.ref = i ? xr(i, f) : f),
            m.cloneElement(l, p)
        }
        return m.Children.count(l) > 1 ? m.Children.only(null) : null
    }
    );
    return r.displayName = `${n}.SlotClone`,
    r
}
var qC = Symbol("radix.slottable");
function YC(n) {
    return m.isValidElement(n) && typeof n.type == "function" && "__radixId"in n.type && n.type.__radixId === qC
}
function XC(n, r) {
    const s = {
        ...r
    };
    for (const i in r) {
        const l = n[i]
          , c = r[i];
        /^on[A-Z]/.test(i) ? l && c ? s[i] = (...p) => {
            const v = c(...p);
            return l(...p),
            v
        }
        : l && (s[i] = l) : i === "style" ? s[i] = {
            ...l,
            ...c
        } : i === "className" && (s[i] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...n,
        ...s
    }
}
function ZC(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , s = r && "isReactWarning"in r && r.isReactWarning;
    return s ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    s = r && "isReactWarning"in r && r.isReactWarning,
    s ? n.props.ref : n.props.ref || n.ref)
}
const JC = qh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] shadow-md hover:shadow-lg",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
            outline: "border-2 border-input bg-background hover:bg-secondary hover:text-secondary-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-secondary hover:text-secondary-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            accent: "bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] shadow-md hover:shadow-lg",
            hero: "bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.98] shadow-lg hover:shadow-xl text-base font-bold"
        },
        size: {
            default: "h-10 px-5 py-2",
            sm: "h-9 rounded-md px-4",
            lg: "h-12 rounded-lg px-8 text-base",
            xl: "h-14 rounded-xl px-10 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Et = m.forwardRef( ({className: n, variant: r, size: s, asChild: i=!1, ...l}, c) => {
    const f = i ? GC : "button";
    return h.jsx(f, {
        className: Fe(JC({
            variant: r,
            size: s,
            className: n
        })),
        ref: c,
        ...l
    })
}
);
Et.displayName = "Button";
var eE = m.createContext(void 0);
function xc(n) {
    const r = m.useContext(eE);
    return n || r || "ltr"
}
var Su = 0;
function tE() {
    m.useEffect( () => {
        const n = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", n[0] ?? lh()),
        document.body.insertAdjacentElement("beforeend", n[1] ?? lh()),
        Su++,
        () => {
            Su === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()),
            Su--
        }
    }
    , [])
}
function lh() {
    const n = document.createElement("span");
    return n.setAttribute("data-radix-focus-guard", ""),
    n.tabIndex = 0,
    n.style.outline = "none",
    n.style.opacity = "0",
    n.style.position = "fixed",
    n.style.pointerEvents = "none",
    n
}
var Cu = "focusScope.autoFocusOnMount"
  , Eu = "focusScope.autoFocusOnUnmount"
  , uh = {
    bubbles: !1,
    cancelable: !0
}
  , nE = "FocusScope"
  , uv = m.forwardRef( (n, r) => {
    const {loop: s=!1, trapped: i=!1, onMountAutoFocus: l, onUnmountAutoFocus: c, ...f} = n
      , [p,v] = m.useState(null)
      , g = Nt(l)
      , x = Nt(c)
      , w = m.useRef(null)
      , E = $e(r, S => v(S))
      , b = m.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    m.useEffect( () => {
        if (i) {
            let S = function(_) {
                if (b.paused || !p)
                    return;
                const L = _.target;
                p.contains(L) ? w.current = L : Jn(w.current, {
                    select: !0
                })
            }
              , C = function(_) {
                if (b.paused || !p)
                    return;
                const L = _.relatedTarget;
                L !== null && (p.contains(L) || Jn(w.current, {
                    select: !0
                }))
            }
              , R = function(_) {
                if (document.activeElement === document.body)
                    for (const $ of _)
                        $.removedNodes.length > 0 && Jn(p)
            };
            document.addEventListener("focusin", S),
            document.addEventListener("focusout", C);
            const M = new MutationObserver(R);
            return p && M.observe(p, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", S),
                document.removeEventListener("focusout", C),
                M.disconnect()
            }
        }
    }
    , [i, p, b.paused]),
    m.useEffect( () => {
        if (p) {
            dh.add(b);
            const S = document.activeElement;
            if (!p.contains(S)) {
                const R = new CustomEvent(Cu,uh);
                p.addEventListener(Cu, g),
                p.dispatchEvent(R),
                R.defaultPrevented || (rE(lE(cv(p)), {
                    select: !0
                }),
                document.activeElement === S && Jn(p))
            }
            return () => {
                p.removeEventListener(Cu, g),
                setTimeout( () => {
                    const R = new CustomEvent(Eu,uh);
                    p.addEventListener(Eu, x),
                    p.dispatchEvent(R),
                    R.defaultPrevented || Jn(S ?? document.body, {
                        select: !0
                    }),
                    p.removeEventListener(Eu, x),
                    dh.remove(b)
                }
                , 0)
            }
        }
    }
    , [p, g, x, b]);
    const N = m.useCallback(S => {
        if (!s && !i || b.paused)
            return;
        const C = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey
          , R = document.activeElement;
        if (C && R) {
            const M = S.currentTarget
              , [_,L] = oE(M);
            _ && L ? !S.shiftKey && R === L ? (S.preventDefault(),
            s && Jn(_, {
                select: !0
            })) : S.shiftKey && R === _ && (S.preventDefault(),
            s && Jn(L, {
                select: !0
            })) : R === M && S.preventDefault()
        }
    }
    , [s, i, b.paused]);
    return h.jsx(Pe.div, {
        tabIndex: -1,
        ...f,
        ref: E,
        onKeyDown: N
    })
}
);
uv.displayName = nE;
function rE(n, {select: r=!1}={}) {
    const s = document.activeElement;
    for (const i of n)
        if (Jn(i, {
            select: r
        }),
        document.activeElement !== s)
            return
}
function oE(n) {
    const r = cv(n)
      , s = ch(r, n)
      , i = ch(r.reverse(), n);
    return [s, i]
}
function cv(n) {
    const r = []
      , s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
        acceptNode: i => {
            const l = i.tagName === "INPUT" && i.type === "hidden";
            return i.disabled || i.hidden || l ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; s.nextNode(); )
        r.push(s.currentNode);
    return r
}
function ch(n, r) {
    for (const s of n)
        if (!sE(s, {
            upTo: r
        }))
            return s
}
function sE(n, {upTo: r}) {
    if (getComputedStyle(n).visibility === "hidden")
        return !0;
    for (; n; ) {
        if (r !== void 0 && n === r)
            return !1;
        if (getComputedStyle(n).display === "none")
            return !0;
        n = n.parentElement
    }
    return !1
}
function iE(n) {
    return n instanceof HTMLInputElement && "select"in n
}
function Jn(n, {select: r=!1}={}) {
    if (n && n.focus) {
        const s = document.activeElement;
        n.focus({
            preventScroll: !0
        }),
        n !== s && iE(n) && r && n.select()
    }
}
var dh = aE();
function aE() {
    let n = [];
    return {
        add(r) {
            const s = n[0];
            r !== s && s?.pause(),
            n = fh(n, r),
            n.unshift(r)
        },
        remove(r) {
            n = fh(n, r),
            n[0]?.resume()
        }
    }
}
function fh(n, r) {
    const s = [...n]
      , i = s.indexOf(r);
    return i !== -1 && s.splice(i, 1),
    s
}
function lE(n) {
    return n.filter(r => r.tagName !== "A")
}
var ku = "rovingFocusGroup.onEntryFocus"
  , uE = {
    bubbles: !1,
    cancelable: !0
}
  , cs = "RovingFocusGroup"
  , [Qu,dv,cE] = sa(cs)
  , [dE,fv] = hn(cs, [cE])
  , [fE,pE] = dE(cs)
  , pv = m.forwardRef( (n, r) => h.jsx(Qu.Provider, {
    scope: n.__scopeRovingFocusGroup,
    children: h.jsx(Qu.Slot, {
        scope: n.__scopeRovingFocusGroup,
        children: h.jsx(hE, {
            ...n,
            ref: r
        })
    })
}));
pv.displayName = cs;
var hE = m.forwardRef( (n, r) => {
    const {__scopeRovingFocusGroup: s, orientation: i, loop: l=!1, dir: c, currentTabStopId: f, defaultCurrentTabStopId: p, onCurrentTabStopIdChange: v, onEntryFocus: g, preventScrollOnEntryFocus: x=!1, ...w} = n
      , E = m.useRef(null)
      , b = $e(r, E)
      , N = xc(c)
      , [S,C] = wr({
        prop: f,
        defaultProp: p ?? null,
        onChange: v,
        caller: cs
    })
      , [R,M] = m.useState(!1)
      , _ = Nt(g)
      , L = dv(s)
      , $ = m.useRef(!1)
      , [W,G] = m.useState(0);
    return m.useEffect( () => {
        const Z = E.current;
        if (Z)
            return Z.addEventListener(ku, _),
            () => Z.removeEventListener(ku, _)
    }
    , [_]),
    h.jsx(fE, {
        scope: s,
        orientation: i,
        dir: N,
        loop: l,
        currentTabStopId: S,
        onItemFocus: m.useCallback(Z => C(Z), [C]),
        onItemShiftTab: m.useCallback( () => M(!0), []),
        onFocusableItemAdd: m.useCallback( () => G(Z => Z + 1), []),
        onFocusableItemRemove: m.useCallback( () => G(Z => Z - 1), []),
        children: h.jsx(Pe.div, {
            tabIndex: R || W === 0 ? -1 : 0,
            "data-orientation": i,
            ...w,
            ref: b,
            style: {
                outline: "none",
                ...n.style
            },
            onMouseDown: ue(n.onMouseDown, () => {
                $.current = !0
            }
            ),
            onFocus: ue(n.onFocus, Z => {
                const ce = !$.current;
                if (Z.target === Z.currentTarget && ce && !R) {
                    const le = new CustomEvent(ku,uE);
                    if (Z.currentTarget.dispatchEvent(le),
                    !le.defaultPrevented) {
                        const he = L().filter(ne => ne.focusable)
                          , X = he.find(ne => ne.active)
                          , me = he.find(ne => ne.id === S)
                          , ye = [X, me, ...he].filter(Boolean).map(ne => ne.ref.current);
                        vv(ye, x)
                    }
                }
                $.current = !1
            }
            ),
            onBlur: ue(n.onBlur, () => M(!1))
        })
    })
}
)
  , hv = "RovingFocusGroupItem"
  , mv = m.forwardRef( (n, r) => {
    const {__scopeRovingFocusGroup: s, focusable: i=!0, active: l=!1, tabStopId: c, children: f, ...p} = n
      , v = ts()
      , g = c || v
      , x = pE(hv, s)
      , w = x.currentTabStopId === g
      , E = dv(s)
      , {onFocusableItemAdd: b, onFocusableItemRemove: N, currentTabStopId: S} = x;
    return m.useEffect( () => {
        if (i)
            return b(),
            () => N()
    }
    , [i, b, N]),
    h.jsx(Qu.ItemSlot, {
        scope: s,
        id: g,
        focusable: i,
        active: l,
        children: h.jsx(Pe.span, {
            tabIndex: w ? 0 : -1,
            "data-orientation": x.orientation,
            ...p,
            ref: r,
            onMouseDown: ue(n.onMouseDown, C => {
                i ? x.onItemFocus(g) : C.preventDefault()
            }
            ),
            onFocus: ue(n.onFocus, () => x.onItemFocus(g)),
            onKeyDown: ue(n.onKeyDown, C => {
                if (C.key === "Tab" && C.shiftKey) {
                    x.onItemShiftTab();
                    return
                }
                if (C.target !== C.currentTarget)
                    return;
                const R = gE(C, x.orientation, x.dir);
                if (R !== void 0) {
                    if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey)
                        return;
                    C.preventDefault();
                    let _ = E().filter(L => L.focusable).map(L => L.ref.current);
                    if (R === "last")
                        _.reverse();
                    else if (R === "prev" || R === "next") {
                        R === "prev" && _.reverse();
                        const L = _.indexOf(C.currentTarget);
                        _ = x.loop ? yE(_, L + 1) : _.slice(L + 1)
                    }
                    setTimeout( () => vv(_))
                }
            }
            ),
            children: typeof f == "function" ? f({
                isCurrentTabStop: w,
                hasTabStop: S != null
            }) : f
        })
    })
}
);
mv.displayName = hv;
var mE = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function vE(n, r) {
    return r !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n
}
function gE(n, r, s) {
    const i = vE(n.key, s);
    if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
        return mE[i]
}
function vv(n, r=!1) {
    const s = document.activeElement;
    for (const i of n)
        if (i === s || (i.focus({
            preventScroll: r
        }),
        document.activeElement !== s))
            return
}
function yE(n, r) {
    return n.map( (s, i) => n[(r + i) % n.length])
}
var xE = pv
  , wE = mv;
function bE(n) {
    const r = SE(n)
      , s = m.forwardRef( (i, l) => {
        const {children: c, ...f} = i
          , p = m.Children.toArray(c)
          , v = p.find(EE);
        if (v) {
            const g = v.props.children
              , x = p.map(w => w === v ? m.Children.count(g) > 1 ? m.Children.only(null) : m.isValidElement(g) ? g.props.children : null : w);
            return h.jsx(r, {
                ...f,
                ref: l,
                children: m.isValidElement(g) ? m.cloneElement(g, void 0, x) : null
            })
        }
        return h.jsx(r, {
            ...f,
            ref: l,
            children: c
        })
    }
    );
    return s.displayName = `${n}.Slot`,
    s
}
function SE(n) {
    const r = m.forwardRef( (s, i) => {
        const {children: l, ...c} = s;
        if (m.isValidElement(l)) {
            const f = NE(l)
              , p = kE(c, l.props);
            return l.type !== m.Fragment && (p.ref = i ? xr(i, f) : f),
            m.cloneElement(l, p)
        }
        return m.Children.count(l) > 1 ? m.Children.only(null) : null
    }
    );
    return r.displayName = `${n}.SlotClone`,
    r
}
var CE = Symbol("radix.slottable");
function EE(n) {
    return m.isValidElement(n) && typeof n.type == "function" && "__radixId"in n.type && n.type.__radixId === CE
}
function kE(n, r) {
    const s = {
        ...r
    };
    for (const i in r) {
        const l = n[i]
          , c = r[i];
        /^on[A-Z]/.test(i) ? l && c ? s[i] = (...p) => {
            const v = c(...p);
            return l(...p),
            v
        }
        : l && (s[i] = l) : i === "style" ? s[i] = {
            ...l,
            ...c
        } : i === "className" && (s[i] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...n,
        ...s
    }
}
function NE(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , s = r && "isReactWarning"in r && r.isReactWarning;
    return s ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    s = r && "isReactWarning"in r && r.isReactWarning,
    s ? n.props.ref : n.props.ref || n.ref)
}
var PE = function(n) {
    if (typeof document > "u")
        return null;
    var r = Array.isArray(n) ? n[0] : n;
    return r.ownerDocument.body
}
  , Xr = new WeakMap
  , Ai = new WeakMap
  , Oi = {}
  , Nu = 0
  , gv = function(n) {
    return n && (n.host || gv(n.parentNode))
}
  , RE = function(n, r) {
    return r.map(function(s) {
        if (n.contains(s))
            return s;
        var i = gv(s);
        return i && n.contains(i) ? i : (console.error("aria-hidden", s, "in not contained inside", n, ". Doing nothing"),
        null)
    }).filter(function(s) {
        return !!s
    })
}
  , TE = function(n, r, s, i) {
    var l = RE(r, Array.isArray(n) ? n : [n]);
    Oi[s] || (Oi[s] = new WeakMap);
    var c = Oi[s]
      , f = []
      , p = new Set
      , v = new Set(l)
      , g = function(w) {
        !w || p.has(w) || (p.add(w),
        g(w.parentNode))
    };
    l.forEach(g);
    var x = function(w) {
        !w || v.has(w) || Array.prototype.forEach.call(w.children, function(E) {
            if (p.has(E))
                x(E);
            else
                try {
                    var b = E.getAttribute(i)
                      , N = b !== null && b !== "false"
                      , S = (Xr.get(E) || 0) + 1
                      , C = (c.get(E) || 0) + 1;
                    Xr.set(E, S),
                    c.set(E, C),
                    f.push(E),
                    S === 1 && N && Ai.set(E, !0),
                    C === 1 && E.setAttribute(s, "true"),
                    N || E.setAttribute(i, "true")
                } catch (R) {
                    console.error("aria-hidden: cannot operate on ", E, R)
                }
        })
    };
    return x(r),
    p.clear(),
    Nu++,
    function() {
        f.forEach(function(w) {
            var E = Xr.get(w) - 1
              , b = c.get(w) - 1;
            Xr.set(w, E),
            c.set(w, b),
            E || (Ai.has(w) || w.removeAttribute(i),
            Ai.delete(w)),
            b || w.removeAttribute(s)
        }),
        Nu--,
        Nu || (Xr = new WeakMap,
        Xr = new WeakMap,
        Ai = new WeakMap,
        Oi = {})
    }
}
  , jE = function(n, r, s) {
    s === void 0 && (s = "data-aria-hidden");
    var i = Array.from(Array.isArray(n) ? n : [n])
      , l = PE(n);
    return l ? (i.push.apply(i, Array.from(l.querySelectorAll("[aria-live], script"))),
    TE(i, l, s, "aria-hidden")) : function() {
        return null
    }
}
  , un = function() {
    return un = Object.assign || function(r) {
        for (var s, i = 1, l = arguments.length; i < l; i++) {
            s = arguments[i];
            for (var c in s)
                Object.prototype.hasOwnProperty.call(s, c) && (r[c] = s[c])
        }
        return r
    }
    ,
    un.apply(this, arguments)
};
function yv(n, r) {
    var s = {};
    for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (s[i] = n[i]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, i = Object.getOwnPropertySymbols(n); l < i.length; l++)
            r.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[l]) && (s[i[l]] = n[i[l]]);
    return s
}
function ME(n, r, s) {
    if (s || arguments.length === 2)
        for (var i = 0, l = r.length, c; i < l; i++)
            (c || !(i in r)) && (c || (c = Array.prototype.slice.call(r, 0, i)),
            c[i] = r[i]);
    return n.concat(c || Array.prototype.slice.call(r))
}
var $i = "right-scroll-bar-position"
  , Bi = "width-before-scroll-bar"
  , _E = "with-scroll-bars-hidden"
  , AE = "--removed-body-scroll-bar-size";
function Pu(n, r) {
    return typeof n == "function" ? n(r) : n && (n.current = r),
    n
}
function OE(n, r) {
    var s = m.useState(function() {
        return {
            value: n,
            callback: r,
            facade: {
                get current() {
                    return s.value
                },
                set current(i) {
                    var l = s.value;
                    l !== i && (s.value = i,
                    s.callback(i, l))
                }
            }
        }
    })[0];
    return s.callback = r,
    s.facade
}
var IE = typeof window < "u" ? m.useLayoutEffect : m.useEffect
  , ph = new WeakMap;
function DE(n, r) {
    var s = OE(null, function(i) {
        return n.forEach(function(l) {
            return Pu(l, i)
        })
    });
    return IE(function() {
        var i = ph.get(s);
        if (i) {
            var l = new Set(i)
              , c = new Set(n)
              , f = s.current;
            l.forEach(function(p) {
                c.has(p) || Pu(p, null)
            }),
            c.forEach(function(p) {
                l.has(p) || Pu(p, f)
            })
        }
        ph.set(s, n)
    }, [n]),
    s
}
function LE(n) {
    return n
}
function FE(n, r) {
    r === void 0 && (r = LE);
    var s = []
      , i = !1
      , l = {
        read: function() {
            if (i)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return s.length ? s[s.length - 1] : n
        },
        useMedium: function(c) {
            var f = r(c, i);
            return s.push(f),
            function() {
                s = s.filter(function(p) {
                    return p !== f
                })
            }
        },
        assignSyncMedium: function(c) {
            for (i = !0; s.length; ) {
                var f = s;
                s = [],
                f.forEach(c)
            }
            s = {
                push: function(p) {
                    return c(p)
                },
                filter: function() {
                    return s
                }
            }
        },
        assignMedium: function(c) {
            i = !0;
            var f = [];
            if (s.length) {
                var p = s;
                s = [],
                p.forEach(c),
                f = s
            }
            var v = function() {
                var x = f;
                f = [],
                x.forEach(c)
            }
              , g = function() {
                return Promise.resolve().then(v)
            };
            g(),
            s = {
                push: function(x) {
                    f.push(x),
                    g()
                },
                filter: function(x) {
                    return f = f.filter(x),
                    s
                }
            }
        }
    };
    return l
}
function zE(n) {
    n === void 0 && (n = {});
    var r = FE(null);
    return r.options = un({
        async: !0,
        ssr: !1
    }, n),
    r
}
var xv = function(n) {
    var r = n.sideCar
      , s = yv(n, ["sideCar"]);
    if (!r)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var i = r.read();
    if (!i)
        throw new Error("Sidecar medium not found");
    return m.createElement(i, un({}, s))
};
xv.isSideCarExport = !0;
function $E(n, r) {
    return n.useMedium(r),
    xv
}
var wv = zE()
  , Ru = function() {}
  , Sa = m.forwardRef(function(n, r) {
    var s = m.useRef(null)
      , i = m.useState({
        onScrollCapture: Ru,
        onWheelCapture: Ru,
        onTouchMoveCapture: Ru
    })
      , l = i[0]
      , c = i[1]
      , f = n.forwardProps
      , p = n.children
      , v = n.className
      , g = n.removeScrollBar
      , x = n.enabled
      , w = n.shards
      , E = n.sideCar
      , b = n.noRelative
      , N = n.noIsolation
      , S = n.inert
      , C = n.allowPinchZoom
      , R = n.as
      , M = R === void 0 ? "div" : R
      , _ = n.gapMode
      , L = yv(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , $ = E
      , W = DE([s, r])
      , G = un(un({}, L), l);
    return m.createElement(m.Fragment, null, x && m.createElement($, {
        sideCar: wv,
        removeScrollBar: g,
        shards: w,
        noRelative: b,
        noIsolation: N,
        inert: S,
        setCallbacks: c,
        allowPinchZoom: !!C,
        lockRef: s,
        gapMode: _
    }), f ? m.cloneElement(m.Children.only(p), un(un({}, G), {
        ref: W
    })) : m.createElement(M, un({}, G, {
        className: v,
        ref: W
    }), p))
});
Sa.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Sa.classNames = {
    fullWidth: Bi,
    zeroRight: $i
};
var BE = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function UE() {
    if (!document)
        return null;
    var n = document.createElement("style");
    n.type = "text/css";
    var r = BE();
    return r && n.setAttribute("nonce", r),
    n
}
function VE(n, r) {
    n.styleSheet ? n.styleSheet.cssText = r : n.appendChild(document.createTextNode(r))
}
function WE(n) {
    var r = document.head || document.getElementsByTagName("head")[0];
    r.appendChild(n)
}
var HE = function() {
    var n = 0
      , r = null;
    return {
        add: function(s) {
            n == 0 && (r = UE()) && (VE(r, s),
            WE(r)),
            n++
        },
        remove: function() {
            n--,
            !n && r && (r.parentNode && r.parentNode.removeChild(r),
            r = null)
        }
    }
}
  , KE = function() {
    var n = HE();
    return function(r, s) {
        m.useEffect(function() {
            return n.add(r),
            function() {
                n.remove()
            }
        }, [r && s])
    }
}
  , bv = function() {
    var n = KE()
      , r = function(s) {
        var i = s.styles
          , l = s.dynamic;
        return n(i, l),
        null
    };
    return r
}
  , GE = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Tu = function(n) {
    return parseInt(n || "", 10) || 0
}
  , QE = function(n) {
    var r = window.getComputedStyle(document.body)
      , s = r[n === "padding" ? "paddingLeft" : "marginLeft"]
      , i = r[n === "padding" ? "paddingTop" : "marginTop"]
      , l = r[n === "padding" ? "paddingRight" : "marginRight"];
    return [Tu(s), Tu(i), Tu(l)]
}
  , qE = function(n) {
    if (n === void 0 && (n = "margin"),
    typeof window > "u")
        return GE;
    var r = QE(n)
      , s = document.documentElement.clientWidth
      , i = window.innerWidth;
    return {
        left: r[0],
        top: r[1],
        right: r[2],
        gap: Math.max(0, i - s + r[2] - r[0])
    }
}
  , YE = bv()
  , ro = "data-scroll-locked"
  , XE = function(n, r, s, i) {
    var l = n.left
      , c = n.top
      , f = n.right
      , p = n.gap;
    return s === void 0 && (s = "margin"),
    `
  .`.concat(_E, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(p, "px ").concat(i, `;
  }
  body[`).concat(ro, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([r && "position: relative ".concat(i, ";"), s === "margin" && `
    padding-left: `.concat(l, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(i, `;
    `), s === "padding" && "padding-right: ".concat(p, "px ").concat(i, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat($i, ` {
    right: `).concat(p, "px ").concat(i, `;
  }
  
  .`).concat(Bi, ` {
    margin-right: `).concat(p, "px ").concat(i, `;
  }
  
  .`).concat($i, " .").concat($i, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Bi, " .").concat(Bi, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(ro, `] {
    `).concat(AE, ": ").concat(p, `px;
  }
`)
}
  , hh = function() {
    var n = parseInt(document.body.getAttribute(ro) || "0", 10);
    return isFinite(n) ? n : 0
}
  , ZE = function() {
    m.useEffect(function() {
        return document.body.setAttribute(ro, (hh() + 1).toString()),
        function() {
            var n = hh() - 1;
            n <= 0 ? document.body.removeAttribute(ro) : document.body.setAttribute(ro, n.toString())
        }
    }, [])
}
  , JE = function(n) {
    var r = n.noRelative
      , s = n.noImportant
      , i = n.gapMode
      , l = i === void 0 ? "margin" : i;
    ZE();
    var c = m.useMemo(function() {
        return qE(l)
    }, [l]);
    return m.createElement(YE, {
        styles: XE(c, !r, l, s ? "" : "!important")
    })
}
  , qu = !1;
if (typeof window < "u")
    try {
        var Ii = Object.defineProperty({}, "passive", {
            get: function() {
                return qu = !0,
                !0
            }
        });
        window.addEventListener("test", Ii, Ii),
        window.removeEventListener("test", Ii, Ii)
    } catch {
        qu = !1
    }
var Zr = qu ? {
    passive: !1
} : !1
  , ek = function(n) {
    return n.tagName === "TEXTAREA"
}
  , Sv = function(n, r) {
    if (!(n instanceof Element))
        return !1;
    var s = window.getComputedStyle(n);
    return s[r] !== "hidden" && !(s.overflowY === s.overflowX && !ek(n) && s[r] === "visible")
}
  , tk = function(n) {
    return Sv(n, "overflowY")
}
  , nk = function(n) {
    return Sv(n, "overflowX")
}
  , mh = function(n, r) {
    var s = r.ownerDocument
      , i = r;
    do {
        typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
        var l = Cv(n, i);
        if (l) {
            var c = Ev(n, i)
              , f = c[1]
              , p = c[2];
            if (f > p)
                return !0
        }
        i = i.parentNode
    } while (i && i !== s.body);
    return !1
}
  , rk = function(n) {
    var r = n.scrollTop
      , s = n.scrollHeight
      , i = n.clientHeight;
    return [r, s, i]
}
  , ok = function(n) {
    var r = n.scrollLeft
      , s = n.scrollWidth
      , i = n.clientWidth;
    return [r, s, i]
}
  , Cv = function(n, r) {
    return n === "v" ? tk(r) : nk(r)
}
  , Ev = function(n, r) {
    return n === "v" ? rk(r) : ok(r)
}
  , sk = function(n, r) {
    return n === "h" && r === "rtl" ? -1 : 1
}
  , ik = function(n, r, s, i, l) {
    var c = sk(n, window.getComputedStyle(r).direction)
      , f = c * i
      , p = s.target
      , v = r.contains(p)
      , g = !1
      , x = f > 0
      , w = 0
      , E = 0;
    do {
        if (!p)
            break;
        var b = Ev(n, p)
          , N = b[0]
          , S = b[1]
          , C = b[2]
          , R = S - C - c * N;
        (N || R) && Cv(n, p) && (w += R,
        E += N);
        var M = p.parentNode;
        p = M && M.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? M.host : M
    } while (!v && p !== document.body || v && (r.contains(p) || r === p));
    return (x && Math.abs(w) < 1 || !x && Math.abs(E) < 1) && (g = !0),
    g
}
  , Di = function(n) {
    return "changedTouches"in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0]
}
  , vh = function(n) {
    return [n.deltaX, n.deltaY]
}
  , gh = function(n) {
    return n && "current"in n ? n.current : n
}
  , ak = function(n, r) {
    return n[0] === r[0] && n[1] === r[1]
}
  , lk = function(n) {
    return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`)
}
  , uk = 0
  , Jr = [];
function ck(n) {
    var r = m.useRef([])
      , s = m.useRef([0, 0])
      , i = m.useRef()
      , l = m.useState(uk++)[0]
      , c = m.useState(bv)[0]
      , f = m.useRef(n);
    m.useEffect(function() {
        f.current = n
    }, [n]),
    m.useEffect(function() {
        if (n.inert) {
            document.body.classList.add("block-interactivity-".concat(l));
            var S = ME([n.lockRef.current], (n.shards || []).map(gh), !0).filter(Boolean);
            return S.forEach(function(C) {
                return C.classList.add("allow-interactivity-".concat(l))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(l)),
                S.forEach(function(C) {
                    return C.classList.remove("allow-interactivity-".concat(l))
                })
            }
        }
    }, [n.inert, n.lockRef.current, n.shards]);
    var p = m.useCallback(function(S, C) {
        if ("touches"in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
            return !f.current.allowPinchZoom;
        var R = Di(S), M = s.current, _ = "deltaX"in S ? S.deltaX : M[0] - R[0], L = "deltaY"in S ? S.deltaY : M[1] - R[1], $, W = S.target, G = Math.abs(_) > Math.abs(L) ? "h" : "v";
        if ("touches"in S && G === "h" && W.type === "range")
            return !1;
        var Z = window.getSelection()
          , ce = Z && Z.anchorNode
          , le = ce ? ce === W || ce.contains(W) : !1;
        if (le)
            return !1;
        var he = mh(G, W);
        if (!he)
            return !0;
        if (he ? $ = G : ($ = G === "v" ? "h" : "v",
        he = mh(G, W)),
        !he)
            return !1;
        if (!i.current && "changedTouches"in S && (_ || L) && (i.current = $),
        !$)
            return !0;
        var X = i.current || $;
        return ik(X, C, S, X === "h" ? _ : L)
    }, [])
      , v = m.useCallback(function(S) {
        var C = S;
        if (!(!Jr.length || Jr[Jr.length - 1] !== c)) {
            var R = "deltaY"in C ? vh(C) : Di(C)
              , M = r.current.filter(function($) {
                return $.name === C.type && ($.target === C.target || C.target === $.shadowParent) && ak($.delta, R)
            })[0];
            if (M && M.should) {
                C.cancelable && C.preventDefault();
                return
            }
            if (!M) {
                var _ = (f.current.shards || []).map(gh).filter(Boolean).filter(function($) {
                    return $.contains(C.target)
                })
                  , L = _.length > 0 ? p(C, _[0]) : !f.current.noIsolation;
                L && C.cancelable && C.preventDefault()
            }
        }
    }, [])
      , g = m.useCallback(function(S, C, R, M) {
        var _ = {
            name: S,
            delta: C,
            target: R,
            should: M,
            shadowParent: dk(R)
        };
        r.current.push(_),
        setTimeout(function() {
            r.current = r.current.filter(function(L) {
                return L !== _
            })
        }, 1)
    }, [])
      , x = m.useCallback(function(S) {
        s.current = Di(S),
        i.current = void 0
    }, [])
      , w = m.useCallback(function(S) {
        g(S.type, vh(S), S.target, p(S, n.lockRef.current))
    }, [])
      , E = m.useCallback(function(S) {
        g(S.type, Di(S), S.target, p(S, n.lockRef.current))
    }, []);
    m.useEffect(function() {
        return Jr.push(c),
        n.setCallbacks({
            onScrollCapture: w,
            onWheelCapture: w,
            onTouchMoveCapture: E
        }),
        document.addEventListener("wheel", v, Zr),
        document.addEventListener("touchmove", v, Zr),
        document.addEventListener("touchstart", x, Zr),
        function() {
            Jr = Jr.filter(function(S) {
                return S !== c
            }),
            document.removeEventListener("wheel", v, Zr),
            document.removeEventListener("touchmove", v, Zr),
            document.removeEventListener("touchstart", x, Zr)
        }
    }, []);
    var b = n.removeScrollBar
      , N = n.inert;
    return m.createElement(m.Fragment, null, N ? m.createElement(c, {
        styles: lk(l)
    }) : null, b ? m.createElement(JE, {
        noRelative: n.noRelative,
        gapMode: n.gapMode
    }) : null)
}
function dk(n) {
    for (var r = null; n !== null; )
        n instanceof ShadowRoot && (r = n.host,
        n = n.host),
        n = n.parentNode;
    return r
}
const fk = $E(wv, ck);
var kv = m.forwardRef(function(n, r) {
    return m.createElement(Sa, un({}, n, {
        ref: r,
        sideCar: fk
    }))
});
kv.classNames = Sa.classNames;
var Yu = ["Enter", " "]
  , pk = ["ArrowDown", "PageUp", "Home"]
  , Nv = ["ArrowUp", "PageDown", "End"]
  , hk = [...pk, ...Nv]
  , mk = {
    ltr: [...Yu, "ArrowRight"],
    rtl: [...Yu, "ArrowLeft"]
}
  , vk = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
}
  , ds = "Menu"
  , [is,gk,yk] = sa(ds)
  , [br,Pv] = hn(ds, [yk, ha, fv])
  , Ca = ha()
  , Rv = fv()
  , [xk,Sr] = br(ds)
  , [wk,fs] = br(ds)
  , Tv = n => {
    const {__scopeMenu: r, open: s=!1, children: i, dir: l, onOpenChange: c, modal: f=!0} = n
      , p = Ca(r)
      , [v,g] = m.useState(null)
      , x = m.useRef(!1)
      , w = Nt(c)
      , E = xc(l);
    return m.useEffect( () => {
        const b = () => {
            x.current = !0,
            document.addEventListener("pointerdown", N, {
                capture: !0,
                once: !0
            }),
            document.addEventListener("pointermove", N, {
                capture: !0,
                once: !0
            })
        }
          , N = () => x.current = !1;
        return document.addEventListener("keydown", b, {
            capture: !0
        }),
        () => {
            document.removeEventListener("keydown", b, {
                capture: !0
            }),
            document.removeEventListener("pointerdown", N, {
                capture: !0
            }),
            document.removeEventListener("pointermove", N, {
                capture: !0
            })
        }
    }
    , []),
    h.jsx(nS, {
        ...p,
        children: h.jsx(xk, {
            scope: r,
            open: s,
            onOpenChange: w,
            content: v,
            onContentChange: g,
            children: h.jsx(wk, {
                scope: r,
                onClose: m.useCallback( () => w(!1), [w]),
                isUsingKeyboardRef: x,
                dir: E,
                modal: f,
                children: i
            })
        })
    })
}
;
Tv.displayName = ds;
var bk = "MenuAnchor"
  , wc = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, ...i} = n
      , l = Ca(s);
    return h.jsx(Om, {
        ...l,
        ...i,
        ref: r
    })
}
);
wc.displayName = bk;
var bc = "MenuPortal"
  , [Sk,jv] = br(bc, {
    forceMount: void 0
})
  , Mv = n => {
    const {__scopeMenu: r, forceMount: s, children: i, container: l} = n
      , c = Sr(bc, r);
    return h.jsx(Sk, {
        scope: r,
        forceMount: s,
        children: h.jsx(rr, {
            present: s || c.open,
            children: h.jsx(tc, {
                asChild: !0,
                container: l,
                children: i
            })
        })
    })
}
;
Mv.displayName = bc;
var Dt = "MenuContent"
  , [Ck,Sc] = br(Dt)
  , _v = m.forwardRef( (n, r) => {
    const s = jv(Dt, n.__scopeMenu)
      , {forceMount: i=s.forceMount, ...l} = n
      , c = Sr(Dt, n.__scopeMenu)
      , f = fs(Dt, n.__scopeMenu);
    return h.jsx(is.Provider, {
        scope: n.__scopeMenu,
        children: h.jsx(rr, {
            present: i || c.open,
            children: h.jsx(is.Slot, {
                scope: n.__scopeMenu,
                children: f.modal ? h.jsx(Ek, {
                    ...l,
                    ref: r
                }) : h.jsx(kk, {
                    ...l,
                    ref: r
                })
            })
        })
    })
}
)
  , Ek = m.forwardRef( (n, r) => {
    const s = Sr(Dt, n.__scopeMenu)
      , i = m.useRef(null)
      , l = $e(r, i);
    return m.useEffect( () => {
        const c = i.current;
        if (c)
            return jE(c)
    }
    , []),
    h.jsx(Cc, {
        ...n,
        ref: l,
        trapFocus: s.open,
        disableOutsidePointerEvents: s.open,
        disableOutsideScroll: !0,
        onFocusOutside: ue(n.onFocusOutside, c => c.preventDefault(), {
            checkForDefaultPrevented: !1
        }),
        onDismiss: () => s.onOpenChange(!1)
    })
}
)
  , kk = m.forwardRef( (n, r) => {
    const s = Sr(Dt, n.__scopeMenu);
    return h.jsx(Cc, {
        ...n,
        ref: r,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => s.onOpenChange(!1)
    })
}
)
  , Nk = bE("MenuContent.ScrollLock")
  , Cc = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, loop: i=!1, trapFocus: l, onOpenAutoFocus: c, onCloseAutoFocus: f, disableOutsidePointerEvents: p, onEntryFocus: v, onEscapeKeyDown: g, onPointerDownOutside: x, onFocusOutside: w, onInteractOutside: E, onDismiss: b, disableOutsideScroll: N, ...S} = n
      , C = Sr(Dt, s)
      , R = fs(Dt, s)
      , M = Ca(s)
      , _ = Rv(s)
      , L = gk(s)
      , [$,W] = m.useState(null)
      , G = m.useRef(null)
      , Z = $e(r, G, C.onContentChange)
      , ce = m.useRef(0)
      , le = m.useRef("")
      , he = m.useRef(0)
      , X = m.useRef(null)
      , me = m.useRef("right")
      , q = m.useRef(0)
      , ye = N ? kv : m.Fragment
      , ne = N ? {
        as: Nk,
        allowPinchZoom: !0
    } : void 0
      , se = I => {
        const U = le.current + I
          , T = L().filter(te => !te.disabled)
          , F = document.activeElement
          , Y = T.find(te => te.ref.current === F)?.textValue
          , J = T.map(te => te.textValue)
          , de = Fk(J, U, Y)
          , ve = T.find(te => te.textValue === de)?.ref.current;
        (function te(be) {
            le.current = be,
            window.clearTimeout(ce.current),
            be !== "" && (ce.current = window.setTimeout( () => te(""), 1e3))
        }
        )(U),
        ve && setTimeout( () => ve.focus())
    }
    ;
    m.useEffect( () => () => window.clearTimeout(ce.current), []),
    tE();
    const z = m.useCallback(I => me.current === X.current?.side && $k(I, X.current?.area), []);
    return h.jsx(Ck, {
        scope: s,
        searchRef: le,
        onItemEnter: m.useCallback(I => {
            z(I) && I.preventDefault()
        }
        , [z]),
        onItemLeave: m.useCallback(I => {
            z(I) || (G.current?.focus(),
            W(null))
        }
        , [z]),
        onTriggerLeave: m.useCallback(I => {
            z(I) && I.preventDefault()
        }
        , [z]),
        pointerGraceTimerRef: he,
        onPointerGraceIntentChange: m.useCallback(I => {
            X.current = I
        }
        , []),
        children: h.jsx(ye, {
            ...ne,
            children: h.jsx(uv, {
                asChild: !0,
                trapped: l,
                onMountAutoFocus: ue(c, I => {
                    I.preventDefault(),
                    G.current?.focus({
                        preventScroll: !0
                    })
                }
                ),
                onUnmountAutoFocus: f,
                children: h.jsx(ia, {
                    asChild: !0,
                    disableOutsidePointerEvents: p,
                    onEscapeKeyDown: g,
                    onPointerDownOutside: x,
                    onFocusOutside: w,
                    onInteractOutside: E,
                    onDismiss: b,
                    children: h.jsx(xE, {
                        asChild: !0,
                        ..._,
                        dir: R.dir,
                        orientation: "vertical",
                        loop: i,
                        currentTabStopId: $,
                        onCurrentTabStopIdChange: W,
                        onEntryFocus: ue(v, I => {
                            R.isUsingKeyboardRef.current || I.preventDefault()
                        }
                        ),
                        preventScrollOnEntryFocus: !0,
                        children: h.jsx(Im, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": Qv(C.open),
                            "data-radix-menu-content": "",
                            dir: R.dir,
                            ...M,
                            ...S,
                            ref: Z,
                            style: {
                                outline: "none",
                                ...S.style
                            },
                            onKeyDown: ue(S.onKeyDown, I => {
                                const T = I.target.closest("[data-radix-menu-content]") === I.currentTarget
                                  , F = I.ctrlKey || I.altKey || I.metaKey
                                  , Y = I.key.length === 1;
                                T && (I.key === "Tab" && I.preventDefault(),
                                !F && Y && se(I.key));
                                const J = G.current;
                                if (I.target !== J || !hk.includes(I.key))
                                    return;
                                I.preventDefault();
                                const ve = L().filter(te => !te.disabled).map(te => te.ref.current);
                                Nv.includes(I.key) && ve.reverse(),
                                Dk(ve)
                            }
                            ),
                            onBlur: ue(n.onBlur, I => {
                                I.currentTarget.contains(I.target) || (window.clearTimeout(ce.current),
                                le.current = "")
                            }
                            ),
                            onPointerMove: ue(n.onPointerMove, as(I => {
                                const U = I.target
                                  , T = q.current !== I.clientX;
                                if (I.currentTarget.contains(U) && T) {
                                    const F = I.clientX > q.current ? "right" : "left";
                                    me.current = F,
                                    q.current = I.clientX
                                }
                            }
                            ))
                        })
                    })
                })
            })
        })
    })
}
);
_v.displayName = Dt;
var Pk = "MenuGroup"
  , Ec = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, ...i} = n;
    return h.jsx(Pe.div, {
        role: "group",
        ...i,
        ref: r
    })
}
);
Ec.displayName = Pk;
var Rk = "MenuLabel"
  , Av = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, ...i} = n;
    return h.jsx(Pe.div, {
        ...i,
        ref: r
    })
}
);
Av.displayName = Rk;
var Zi = "MenuItem"
  , yh = "menu.itemSelect"
  , Ea = m.forwardRef( (n, r) => {
    const {disabled: s=!1, onSelect: i, ...l} = n
      , c = m.useRef(null)
      , f = fs(Zi, n.__scopeMenu)
      , p = Sc(Zi, n.__scopeMenu)
      , v = $e(r, c)
      , g = m.useRef(!1)
      , x = () => {
        const w = c.current;
        if (!s && w) {
            const E = new CustomEvent(yh,{
                bubbles: !0,
                cancelable: !0
            });
            w.addEventListener(yh, b => i?.(b), {
                once: !0
            }),
            ec(w, E),
            E.defaultPrevented ? g.current = !1 : f.onClose()
        }
    }
    ;
    return h.jsx(Ov, {
        ...l,
        ref: v,
        disabled: s,
        onClick: ue(n.onClick, x),
        onPointerDown: w => {
            n.onPointerDown?.(w),
            g.current = !0
        }
        ,
        onPointerUp: ue(n.onPointerUp, w => {
            g.current || w.currentTarget?.click()
        }
        ),
        onKeyDown: ue(n.onKeyDown, w => {
            const E = p.searchRef.current !== "";
            s || E && w.key === " " || Yu.includes(w.key) && (w.currentTarget.click(),
            w.preventDefault())
        }
        )
    })
}
);
Ea.displayName = Zi;
var Ov = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, disabled: i=!1, textValue: l, ...c} = n
      , f = Sc(Zi, s)
      , p = Rv(s)
      , v = m.useRef(null)
      , g = $e(r, v)
      , [x,w] = m.useState(!1)
      , [E,b] = m.useState("");
    return m.useEffect( () => {
        const N = v.current;
        N && b((N.textContent ?? "").trim())
    }
    , [c.children]),
    h.jsx(is.ItemSlot, {
        scope: s,
        disabled: i,
        textValue: l ?? E,
        children: h.jsx(wE, {
            asChild: !0,
            ...p,
            focusable: !i,
            children: h.jsx(Pe.div, {
                role: "menuitem",
                "data-highlighted": x ? "" : void 0,
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                ...c,
                ref: g,
                onPointerMove: ue(n.onPointerMove, as(N => {
                    i ? f.onItemLeave(N) : (f.onItemEnter(N),
                    N.defaultPrevented || N.currentTarget.focus({
                        preventScroll: !0
                    }))
                }
                )),
                onPointerLeave: ue(n.onPointerLeave, as(N => f.onItemLeave(N))),
                onFocus: ue(n.onFocus, () => w(!0)),
                onBlur: ue(n.onBlur, () => w(!1))
            })
        })
    })
}
)
  , Tk = "MenuCheckboxItem"
  , Iv = m.forwardRef( (n, r) => {
    const {checked: s=!1, onCheckedChange: i, ...l} = n;
    return h.jsx($v, {
        scope: n.__scopeMenu,
        checked: s,
        children: h.jsx(Ea, {
            role: "menuitemcheckbox",
            "aria-checked": Ji(s) ? "mixed" : s,
            ...l,
            ref: r,
            "data-state": Nc(s),
            onSelect: ue(l.onSelect, () => i?.(Ji(s) ? !0 : !s), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Iv.displayName = Tk;
var Dv = "MenuRadioGroup"
  , [jk,Mk] = br(Dv, {
    value: void 0,
    onValueChange: () => {}
})
  , Lv = m.forwardRef( (n, r) => {
    const {value: s, onValueChange: i, ...l} = n
      , c = Nt(i);
    return h.jsx(jk, {
        scope: n.__scopeMenu,
        value: s,
        onValueChange: c,
        children: h.jsx(Ec, {
            ...l,
            ref: r
        })
    })
}
);
Lv.displayName = Dv;
var Fv = "MenuRadioItem"
  , zv = m.forwardRef( (n, r) => {
    const {value: s, ...i} = n
      , l = Mk(Fv, n.__scopeMenu)
      , c = s === l.value;
    return h.jsx($v, {
        scope: n.__scopeMenu,
        checked: c,
        children: h.jsx(Ea, {
            role: "menuitemradio",
            "aria-checked": c,
            ...i,
            ref: r,
            "data-state": Nc(c),
            onSelect: ue(i.onSelect, () => l.onValueChange?.(s), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
zv.displayName = Fv;
var kc = "MenuItemIndicator"
  , [$v,_k] = br(kc, {
    checked: !1
})
  , Bv = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, forceMount: i, ...l} = n
      , c = _k(kc, s);
    return h.jsx(rr, {
        present: i || Ji(c.checked) || c.checked === !0,
        children: h.jsx(Pe.span, {
            ...l,
            ref: r,
            "data-state": Nc(c.checked)
        })
    })
}
);
Bv.displayName = kc;
var Ak = "MenuSeparator"
  , Uv = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, ...i} = n;
    return h.jsx(Pe.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...i,
        ref: r
    })
}
);
Uv.displayName = Ak;
var Ok = "MenuArrow"
  , Vv = m.forwardRef( (n, r) => {
    const {__scopeMenu: s, ...i} = n
      , l = Ca(s);
    return h.jsx(Dm, {
        ...l,
        ...i,
        ref: r
    })
}
);
Vv.displayName = Ok;
var Ik = "MenuSub"
  , [yN,Wv] = br(Ik)
  , Jo = "MenuSubTrigger"
  , Hv = m.forwardRef( (n, r) => {
    const s = Sr(Jo, n.__scopeMenu)
      , i = fs(Jo, n.__scopeMenu)
      , l = Wv(Jo, n.__scopeMenu)
      , c = Sc(Jo, n.__scopeMenu)
      , f = m.useRef(null)
      , {pointerGraceTimerRef: p, onPointerGraceIntentChange: v} = c
      , g = {
        __scopeMenu: n.__scopeMenu
    }
      , x = m.useCallback( () => {
        f.current && window.clearTimeout(f.current),
        f.current = null
    }
    , []);
    return m.useEffect( () => x, [x]),
    m.useEffect( () => {
        const w = p.current;
        return () => {
            window.clearTimeout(w),
            v(null)
        }
    }
    , [p, v]),
    h.jsx(wc, {
        asChild: !0,
        ...g,
        children: h.jsx(Ov, {
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": s.open,
            "aria-controls": l.contentId,
            "data-state": Qv(s.open),
            ...n,
            ref: xr(r, l.onTriggerChange),
            onClick: w => {
                n.onClick?.(w),
                !(n.disabled || w.defaultPrevented) && (w.currentTarget.focus(),
                s.open || s.onOpenChange(!0))
            }
            ,
            onPointerMove: ue(n.onPointerMove, as(w => {
                c.onItemEnter(w),
                !w.defaultPrevented && !n.disabled && !s.open && !f.current && (c.onPointerGraceIntentChange(null),
                f.current = window.setTimeout( () => {
                    s.onOpenChange(!0),
                    x()
                }
                , 100))
            }
            )),
            onPointerLeave: ue(n.onPointerLeave, as(w => {
                x();
                const E = s.content?.getBoundingClientRect();
                if (E) {
                    const b = s.content?.dataset.side
                      , N = b === "right"
                      , S = N ? -5 : 5
                      , C = E[N ? "left" : "right"]
                      , R = E[N ? "right" : "left"];
                    c.onPointerGraceIntentChange({
                        area: [{
                            x: w.clientX + S,
                            y: w.clientY
                        }, {
                            x: C,
                            y: E.top
                        }, {
                            x: R,
                            y: E.top
                        }, {
                            x: R,
                            y: E.bottom
                        }, {
                            x: C,
                            y: E.bottom
                        }],
                        side: b
                    }),
                    window.clearTimeout(p.current),
                    p.current = window.setTimeout( () => c.onPointerGraceIntentChange(null), 300)
                } else {
                    if (c.onTriggerLeave(w),
                    w.defaultPrevented)
                        return;
                    c.onPointerGraceIntentChange(null)
                }
            }
            )),
            onKeyDown: ue(n.onKeyDown, w => {
                const E = c.searchRef.current !== "";
                n.disabled || E && w.key === " " || mk[i.dir].includes(w.key) && (s.onOpenChange(!0),
                s.content?.focus(),
                w.preventDefault())
            }
            )
        })
    })
}
);
Hv.displayName = Jo;
var Kv = "MenuSubContent"
  , Gv = m.forwardRef( (n, r) => {
    const s = jv(Dt, n.__scopeMenu)
      , {forceMount: i=s.forceMount, ...l} = n
      , c = Sr(Dt, n.__scopeMenu)
      , f = fs(Dt, n.__scopeMenu)
      , p = Wv(Kv, n.__scopeMenu)
      , v = m.useRef(null)
      , g = $e(r, v);
    return h.jsx(is.Provider, {
        scope: n.__scopeMenu,
        children: h.jsx(rr, {
            present: i || c.open,
            children: h.jsx(is.Slot, {
                scope: n.__scopeMenu,
                children: h.jsx(Cc, {
                    id: p.contentId,
                    "aria-labelledby": p.triggerId,
                    ...l,
                    ref: g,
                    align: "start",
                    side: f.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: x => {
                        f.isUsingKeyboardRef.current && v.current?.focus(),
                        x.preventDefault()
                    }
                    ,
                    onCloseAutoFocus: x => x.preventDefault(),
                    onFocusOutside: ue(n.onFocusOutside, x => {
                        x.target !== p.trigger && c.onOpenChange(!1)
                    }
                    ),
                    onEscapeKeyDown: ue(n.onEscapeKeyDown, x => {
                        f.onClose(),
                        x.preventDefault()
                    }
                    ),
                    onKeyDown: ue(n.onKeyDown, x => {
                        const w = x.currentTarget.contains(x.target)
                          , E = vk[f.dir].includes(x.key);
                        w && E && (c.onOpenChange(!1),
                        p.trigger?.focus(),
                        x.preventDefault())
                    }
                    )
                })
            })
        })
    })
}
);
Gv.displayName = Kv;
function Qv(n) {
    return n ? "open" : "closed"
}
function Ji(n) {
    return n === "indeterminate"
}
function Nc(n) {
    return Ji(n) ? "indeterminate" : n ? "checked" : "unchecked"
}
function Dk(n) {
    const r = document.activeElement;
    for (const s of n)
        if (s === r || (s.focus(),
        document.activeElement !== r))
            return
}
function Lk(n, r) {
    return n.map( (s, i) => n[(r + i) % n.length])
}
function Fk(n, r, s) {
    const l = r.length > 1 && Array.from(r).every(g => g === r[0]) ? r[0] : r
      , c = s ? n.indexOf(s) : -1;
    let f = Lk(n, Math.max(c, 0));
    l.length === 1 && (f = f.filter(g => g !== s));
    const v = f.find(g => g.toLowerCase().startsWith(l.toLowerCase()));
    return v !== s ? v : void 0
}
function zk(n, r) {
    const {x: s, y: i} = n;
    let l = !1;
    for (let c = 0, f = r.length - 1; c < r.length; f = c++) {
        const p = r[c]
          , v = r[f]
          , g = p.x
          , x = p.y
          , w = v.x
          , E = v.y;
        x > i != E > i && s < (w - g) * (i - x) / (E - x) + g && (l = !l)
    }
    return l
}
function $k(n, r) {
    if (!r)
        return !1;
    const s = {
        x: n.clientX,
        y: n.clientY
    };
    return zk(s, r)
}
function as(n) {
    return r => r.pointerType === "mouse" ? n(r) : void 0
}
var Bk = Tv
  , Uk = wc
  , Vk = Mv
  , Wk = _v
  , Hk = Ec
  , Kk = Av
  , Gk = Ea
  , Qk = Iv
  , qk = Lv
  , Yk = zv
  , Xk = Bv
  , Zk = Uv
  , Jk = Vv
  , e2 = Hv
  , t2 = Gv
  , ka = "DropdownMenu"
  , [n2] = hn(ka, [Pv])
  , lt = Pv()
  , [r2,qv] = n2(ka)
  , Yv = n => {
    const {__scopeDropdownMenu: r, children: s, dir: i, open: l, defaultOpen: c, onOpenChange: f, modal: p=!0} = n
      , v = lt(r)
      , g = m.useRef(null)
      , [x,w] = wr({
        prop: l,
        defaultProp: c ?? !1,
        onChange: f,
        caller: ka
    });
    return h.jsx(r2, {
        scope: r,
        triggerId: ts(),
        triggerRef: g,
        contentId: ts(),
        open: x,
        onOpenChange: w,
        onOpenToggle: m.useCallback( () => w(E => !E), [w]),
        modal: p,
        children: h.jsx(Bk, {
            ...v,
            open: x,
            onOpenChange: w,
            dir: i,
            modal: p,
            children: s
        })
    })
}
;
Yv.displayName = ka;
var Xv = "DropdownMenuTrigger"
  , Zv = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, disabled: i=!1, ...l} = n
      , c = qv(Xv, s)
      , f = lt(s);
    return h.jsx(Uk, {
        asChild: !0,
        ...f,
        children: h.jsx(Pe.button, {
            type: "button",
            id: c.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": c.open,
            "aria-controls": c.open ? c.contentId : void 0,
            "data-state": c.open ? "open" : "closed",
            "data-disabled": i ? "" : void 0,
            disabled: i,
            ...l,
            ref: xr(r, c.triggerRef),
            onPointerDown: ue(n.onPointerDown, p => {
                !i && p.button === 0 && p.ctrlKey === !1 && (c.onOpenToggle(),
                c.open || p.preventDefault())
            }
            ),
            onKeyDown: ue(n.onKeyDown, p => {
                i || (["Enter", " "].includes(p.key) && c.onOpenToggle(),
                p.key === "ArrowDown" && c.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault())
            }
            )
        })
    })
}
);
Zv.displayName = Xv;
var o2 = "DropdownMenuPortal"
  , Jv = n => {
    const {__scopeDropdownMenu: r, ...s} = n
      , i = lt(r);
    return h.jsx(Vk, {
        ...i,
        ...s
    })
}
;
Jv.displayName = o2;
var eg = "DropdownMenuContent"
  , tg = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = qv(eg, s)
      , c = lt(s)
      , f = m.useRef(!1);
    return h.jsx(Wk, {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...c,
        ...i,
        ref: r,
        onCloseAutoFocus: ue(n.onCloseAutoFocus, p => {
            f.current || l.triggerRef.current?.focus(),
            f.current = !1,
            p.preventDefault()
        }
        ),
        onInteractOutside: ue(n.onInteractOutside, p => {
            const v = p.detail.originalEvent
              , g = v.button === 0 && v.ctrlKey === !0
              , x = v.button === 2 || g;
            (!l.modal || x) && (f.current = !0)
        }
        ),
        style: {
            ...n.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
tg.displayName = eg;
var s2 = "DropdownMenuGroup"
  , i2 = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Hk, {
        ...l,
        ...i,
        ref: r
    })
}
);
i2.displayName = s2;
var a2 = "DropdownMenuLabel"
  , ng = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Kk, {
        ...l,
        ...i,
        ref: r
    })
}
);
ng.displayName = a2;
var l2 = "DropdownMenuItem"
  , rg = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Gk, {
        ...l,
        ...i,
        ref: r
    })
}
);
rg.displayName = l2;
var u2 = "DropdownMenuCheckboxItem"
  , og = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Qk, {
        ...l,
        ...i,
        ref: r
    })
}
);
og.displayName = u2;
var c2 = "DropdownMenuRadioGroup"
  , d2 = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(qk, {
        ...l,
        ...i,
        ref: r
    })
}
);
d2.displayName = c2;
var f2 = "DropdownMenuRadioItem"
  , sg = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Yk, {
        ...l,
        ...i,
        ref: r
    })
}
);
sg.displayName = f2;
var p2 = "DropdownMenuItemIndicator"
  , ig = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Xk, {
        ...l,
        ...i,
        ref: r
    })
}
);
ig.displayName = p2;
var h2 = "DropdownMenuSeparator"
  , ag = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Zk, {
        ...l,
        ...i,
        ref: r
    })
}
);
ag.displayName = h2;
var m2 = "DropdownMenuArrow"
  , v2 = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(Jk, {
        ...l,
        ...i,
        ref: r
    })
}
);
v2.displayName = m2;
var g2 = "DropdownMenuSubTrigger"
  , lg = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(e2, {
        ...l,
        ...i,
        ref: r
    })
}
);
lg.displayName = g2;
var y2 = "DropdownMenuSubContent"
  , ug = m.forwardRef( (n, r) => {
    const {__scopeDropdownMenu: s, ...i} = n
      , l = lt(s);
    return h.jsx(t2, {
        ...l,
        ...i,
        ref: r,
        style: {
            ...n.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
ug.displayName = y2;
var x2 = Yv
  , w2 = Zv
  , b2 = Jv
  , cg = tg
  , dg = ng
  , fg = rg
  , pg = og
  , hg = sg
  , mg = ig
  , vg = ag
  , gg = lg
  , yg = ug;
const xg = x2
  , wg = w2
  , S2 = m.forwardRef( ({className: n, inset: r, children: s, ...i}, l) => h.jsxs(gg, {
    ref: l,
    className: Fe("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent", r && "pl-8", n),
    ...i,
    children: [s, h.jsx(Jh, {
        className: "ml-auto h-4 w-4"
    })]
}));
S2.displayName = gg.displayName;
const C2 = m.forwardRef( ({className: n, ...r}, s) => h.jsx(yg, {
    ref: s,
    className: Fe("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
    ...r
}));
C2.displayName = yg.displayName;
const Pc = m.forwardRef( ({className: n, sideOffset: r=4, ...s}, i) => h.jsx(b2, {
    children: h.jsx(cg, {
        ref: i,
        sideOffset: r,
        className: Fe("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
        ...s
    })
}));
Pc.displayName = cg.displayName;
const ea = m.forwardRef( ({className: n, inset: r, ...s}, i) => h.jsx(fg, {
    ref: i,
    className: Fe("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", r && "pl-8", n),
    ...s
}));
ea.displayName = fg.displayName;
const E2 = m.forwardRef( ({className: n, children: r, checked: s, ...i}, l) => h.jsxs(pg, {
    ref: l,
    className: Fe("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", n),
    checked: s,
    ...i,
    children: [h.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: h.jsx(mg, {
            children: h.jsx(sw, {
                className: "h-4 w-4"
            })
        })
    }), r]
}));
E2.displayName = pg.displayName;
const k2 = m.forwardRef( ({className: n, children: r, ...s}, i) => h.jsxs(hg, {
    ref: i,
    className: Fe("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", n),
    ...s,
    children: [h.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: h.jsx(mg, {
            children: h.jsx(aw, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), r]
}));
k2.displayName = hg.displayName;
const Xu = m.forwardRef( ({className: n, inset: r, ...s}, i) => h.jsx(dg, {
    ref: i,
    className: Fe("px-2 py-1.5 text-sm font-semibold", r && "pl-8", n),
    ...s
}));
Xu.displayName = dg.displayName;
const Ui = m.forwardRef( ({className: n, ...r}, s) => h.jsx(vg, {
    ref: s,
    className: Fe("-mx-1 my-1 h-px bg-muted", n),
    ...r
}));
Ui.displayName = vg.displayName;
function N2(n) {
    const r = m.useRef({
        value: n,
        previous: n
    });
    return m.useMemo( () => (r.current.value !== n && (r.current.previous = r.current.value,
    r.current.value = n),
    r.current.previous), [n])
}
var Na = "Switch"
  , [P2] = hn(Na)
  , [R2,T2] = P2(Na)
  , bg = m.forwardRef( (n, r) => {
    const {__scopeSwitch: s, name: i, checked: l, defaultChecked: c, required: f, disabled: p, value: v="on", onCheckedChange: g, form: x, ...w} = n
      , [E,b] = m.useState(null)
      , N = $e(r, _ => b(_))
      , S = m.useRef(!1)
      , C = E ? x || !!E.closest("form") : !0
      , [R,M] = wr({
        prop: l,
        defaultProp: c ?? !1,
        onChange: g,
        caller: Na
    });
    return h.jsxs(R2, {
        scope: s,
        checked: R,
        disabled: p,
        children: [h.jsx(Pe.button, {
            type: "button",
            role: "switch",
            "aria-checked": R,
            "aria-required": f,
            "data-state": kg(R),
            "data-disabled": p ? "" : void 0,
            disabled: p,
            value: v,
            ...w,
            ref: N,
            onClick: ue(n.onClick, _ => {
                M(L => !L),
                C && (S.current = _.isPropagationStopped(),
                S.current || _.stopPropagation())
            }
            )
        }), C && h.jsx(Eg, {
            control: E,
            bubbles: !S.current,
            name: i,
            value: v,
            checked: R,
            required: f,
            disabled: p,
            form: x,
            style: {
                transform: "translateX(-100%)"
            }
        })]
    })
}
);
bg.displayName = Na;
var Sg = "SwitchThumb"
  , Cg = m.forwardRef( (n, r) => {
    const {__scopeSwitch: s, ...i} = n
      , l = T2(Sg, s);
    return h.jsx(Pe.span, {
        "data-state": kg(l.checked),
        "data-disabled": l.disabled ? "" : void 0,
        ...i,
        ref: r
    })
}
);
Cg.displayName = Sg;
var j2 = "SwitchBubbleInput"
  , Eg = m.forwardRef( ({__scopeSwitch: n, control: r, checked: s, bubbles: i=!0, ...l}, c) => {
    const f = m.useRef(null)
      , p = $e(f, c)
      , v = N2(s)
      , g = Em(r);
    return m.useEffect( () => {
        const x = f.current;
        if (!x)
            return;
        const w = window.HTMLInputElement.prototype
          , b = Object.getOwnPropertyDescriptor(w, "checked").set;
        if (v !== s && b) {
            const N = new Event("click",{
                bubbles: i
            });
            b.call(x, s),
            x.dispatchEvent(N)
        }
    }
    , [v, s, i]),
    h.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s,
        ...l,
        tabIndex: -1,
        ref: p,
        style: {
            ...l.style,
            ...g,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
}
);
Eg.displayName = j2;
function kg(n) {
    return n ? "checked" : "unchecked"
}
var Ng = bg
  , M2 = Cg;
const Pg = m.forwardRef( ({className: n, ...r}, s) => h.jsx(Ng, {
    className: Fe("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50", n),
    ...r,
    ref: s,
    children: h.jsx(M2, {
        className: Fe("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
    })
}));
Pg.displayName = Ng.displayName;
const _2 = [{
    id: "normal",
    labelKey: "accessibility.normal"
}, {
    id: "protanopia",
    labelKey: "accessibility.protanopia"
}, {
    id: "deuteranopia",
    labelKey: "accessibility.deuteranopia"
}, {
    id: "tritanopia",
    labelKey: "accessibility.tritanopia"
}]
  , A2 = () => {
    const {theme: n, setTheme: r, colorMode: s, setColorMode: i, narratorEnabled: l, setNarratorEnabled: c} = VC()
      , {t: f} = vn()
      , p = () => r(n === "dark" ? "light" : "dark")
      , v = x => i(x)
      , g = x => c(x);
    return h.jsxs(xg, {
        children: [h.jsx(wg, {
            asChild: !0,
            children: h.jsx(Et, {
                variant: "ghost",
                size: "icon",
                className: "relative",
                "aria-label": f("accessibility.title"),
                children: h.jsx(cw, {
                    className: "h-4 w-4"
                })
            })
        }), h.jsxs(Pc, {
            align: "end",
            className: "w-56",
            children: [h.jsx(Xu, {
                children: f("accessibility.title")
            }), h.jsx(Ui, {}), h.jsx(ea, {
                asChild: !0,
                children: h.jsx("button", {
                    onClick: p,
                    className: "w-full text-left flex items-center gap-2",
                    children: n === "dark" ? h.jsxs(h.Fragment, {
                        children: [h.jsx(yw, {
                            className: "h-4 w-4"
                        }), f("accessibility.lightMode")]
                    }) : h.jsxs(h.Fragment, {
                        children: [h.jsx(hw, {
                            className: "h-4 w-4"
                        }), f("accessibility.darkMode")]
                    })
                })
            }), h.jsx(Ui, {}), h.jsx(Xu, {
                className: "text-xs",
                children: f("accessibility.colorblind")
            }), _2.map(x => h.jsx(ea, {
                asChild: !0,
                children: h.jsxs("button", {
                    onClick: () => v(x.id),
                    className: `flex items-center gap-2 w-full text-left ${s === x.id ? "bg-secondary" : ""}`,
                    children: [h.jsx("div", {
                        className: `h-3 w-3 rounded-full border ${s === x.id ? "bg-primary" : ""}`
                    }), f(x.labelKey)]
                })
            }, x.id)), h.jsx(Ui, {}), h.jsxs("div", {
                className: "flex items-center justify-between px-2 py-2",
                children: [h.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [h.jsx(bw, {
                        className: "h-4 w-4"
                    }), h.jsx("span", {
                        className: "text-sm",
                        children: f("accessibility.narrator")
                    })]
                }), h.jsx(Pg, {
                    checked: l,
                    onCheckedChange: g,
                    "aria-label": f("accessibility.narrator")
                })]
            })]
        })]
    })
}
  , xh = [{
    code: "el",
    label: "ΕΛ",
    full: "Ελληνικά"
}, {
    code: "en",
    label: "EN",
    full: "English"
}, {
    code: "de",
    label: "DE",
    full: "Deutsch"
}]
  , O2 = () => {
    const [n,r] = m.useState(!1)
      , {language: s, setLanguage: i, t: l} = vn()
      , c = [{
        key: "nav.routes",
        href: "#routes"
    }, {
        key: "nav.timetables",
        href: "#timetable"
    }, {
        key: "nav.tickets",
        href: "#search"
    }, {
        key: "nav.help",
        href: "#faq"
    }];
    return h.jsxs("header", {
        className: "sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80",
        children: [h.jsxs("div", {
            className: "container flex h-16 items-center justify-between",
            children: [h.jsxs("a", {
                href: "/",
                className: "flex items-center gap-2 transition-opacity hover:opacity-80",
                children: [h.jsx("div", {
                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary",
                    children: h.jsx(ua, {
                        className: "h-5 w-5 text-primary-foreground"
                    })
                }), h.jsxs("div", {
                    className: "flex flex-col",
                    children: [h.jsx("span", {
                        className: "text-xl font-bold text-foreground leading-tight",
                        children: "FreeHosting"
                    }), h.jsx("span", {
                        className: "text-[10px] text-muted-foreground leading-none",
                        children: "DEV Greece"
                    })]
                })]
            }), h.jsx("nav", {
                className: "hidden md:flex items-center gap-8",
                children: c.map(f => h.jsx("a", {
                    href: f.href,
                    className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    children: l(f.key)
                }, f.key))
            }), h.jsxs("div", {
                className: "flex items-center gap-3",
                children: [h.jsx(A2, {}), h.jsxs(xg, {
                    children: [h.jsx(wg, {
                        asChild: !0,
                        children: h.jsxs(Et, {
                            variant: "ghost",
                            size: "sm",
                            className: "gap-1 font-medium",
                            children: [xh.find(f => f.code === s)?.label, h.jsx(Zh, {
                                className: "h-3 w-3"
                            })]
                        })
                    }), h.jsx(Pc, {
                        align: "end",
                        children: xh.map(f => h.jsxs(ea, {
                            onClick: () => i(f.code),
                            className: s === f.code ? "bg-secondary" : "",
                            children: [h.jsx("span", {
                                className: "font-medium",
                                children: f.label
                            }), h.jsx("span", {
                                className: "ml-2 text-muted-foreground",
                                children: f.full
                            })]
                        }, f.code))
                    })]
                }), h.jsx(Et, {
                    variant: "accent",
                    size: "sm",
                    className: "hidden sm:flex",
                    children: l("action.bookNow")
                }), h.jsx(Et, {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    onClick: () => r(!n),
                    children: n ? h.jsx(tm, {
                        className: "h-5 w-5"
                    }) : h.jsx(fw, {
                        className: "h-5 w-5"
                    })
                })]
            })]
        }), n && h.jsx("div", {
            className: "md:hidden border-t border-border bg-card animate-fade-in",
            children: h.jsxs("nav", {
                className: "container py-4 flex flex-col gap-2",
                children: [c.map(f => h.jsx("a", {
                    href: f.href,
                    className: "px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-secondary transition-colors",
                    onClick: () => r(!1),
                    children: l(f.key)
                }, f.key)), h.jsx(Et, {
                    variant: "accent",
                    className: "mt-2 w-full",
                    children: l("action.bookNow")
                })]
            })
        })]
    })
}
  , ta = m.forwardRef( ({className: n, type: r, ...s}, i) => h.jsx("input", {
    type: r,
    className: Fe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", n),
    ref: i,
    ...s
}));
ta.displayName = "Input";
const wh = [{
    name: "Αθήνα",
    nameEn: "Athens",
    region: "Attica"
}, {
    name: "Θεσσαλονίκη",
    nameEn: "Thessaloniki",
    region: "Central Macedonia"
}, {
    name: "Πάτρα",
    nameEn: "Patras",
    region: "Western Greece"
}, {
    name: "Ηράκλειο",
    nameEn: "Heraklion",
    region: "Crete"
}, {
    name: "Λάρισα",
    nameEn: "Larissa",
    region: "Thessaly"
}, {
    name: "Βόλος",
    nameEn: "Volos",
    region: "Thessaly"
}, {
    name: "Ιωάννινα",
    nameEn: "Ioannina",
    region: "Epirus"
}, {
    name: "Χανιά",
    nameEn: "Chania",
    region: "Crete"
}, {
    name: "Ρέθυμνο",
    nameEn: "Rethymno",
    region: "Crete"
}, {
    name: "Κέρκυρα",
    nameEn: "Corfu",
    region: "Ionian Islands"
}];
function Rg(n, r, s) {
    return !n || !r ? [] : [{
        from: n,
        to: r,
        mode: s,
        duration: "3h 20m",
        price: "€18"
    }]
}
const bh = ({value: n, onChange: r, placeholder: s, iconColor: i="text-muted-foreground"}) => {
    const [l,c] = m.useState(!1)
      , [f,p] = m.useState(wh)
      , v = m.useRef(null)
      , {language: g} = vn();
    m.useEffect( () => {
        const E = b => {
            v.current && !v.current.contains(b.target) && c(!1)
        }
        ;
        return document.addEventListener("mousedown", E),
        () => document.removeEventListener("mousedown", E)
    }
    , []);
    const x = E => {
        r(E);
        const b = wh.filter(N => N.name.toLowerCase().includes(E.toLowerCase()) || N.nameEn.toLowerCase().includes(E.toLowerCase()));
        p(b),
        c(!0)
    }
      , w = E => {
        r(E),
        c(!1)
    }
    ;
    return h.jsxs("div", {
        ref: v,
        className: "relative",
        children: [h.jsx(Vi, {
            className: `absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${i}`
        }), h.jsx(ta, {
            placeholder: s,
            value: n,
            onChange: E => x(E.target.value),
            onFocus: () => c(!0),
            className: "pl-10 h-12 bg-secondary/50 border-0 focus:bg-card"
        }), l && f.length > 0 && h.jsx("div", {
            className: "absolute top-full left-0 right-0 mt-1 bg-card rounded-lg shadow-lg border border-border max-h-60 overflow-y-auto z-50 animate-scale-in",
            children: f.slice(0, 8).map(E => h.jsxs("button", {
                type: "button",
                onClick: () => w(E.name),
                className: "w-full px-4 py-3 text-left hover:bg-secondary transition-colors flex items-center gap-3 border-b border-border/50 last:border-0",
                children: [h.jsx(Vi, {
                    className: "h-4 w-4 text-primary"
                }), h.jsxs("div", {
                    children: [h.jsx("div", {
                        className: "font-medium text-foreground",
                        children: g === "el" ? E.name : E.nameEn
                    }), h.jsx("div", {
                        className: "text-xs text-muted-foreground",
                        children: E.region
                    })]
                })]
            }, E.nameEn))
        })]
    })
}
  , I2 = [{
    id: "bus",
    icon: ua,
    labelKey: "mode.bus"
}, {
    id: "bicycle",
    icon: Xh,
    labelKey: "mode.bicycle"
}, {
    id: "walking",
    icon: em,
    labelKey: "mode.walking"
}]
  , D2 = ({selected: n, onChange: r}) => {
    const {t: s} = vn();
    return h.jsx("div", {
        className: "flex gap-2",
        role: "radiogroup",
        "aria-label": "Transport mode",
        children: I2.map(i => {
            const l = i.icon
              , c = n === i.id;
            return h.jsxs("button", {
                type: "button",
                role: "radio",
                "aria-checked": c,
                onClick: () => r(i.id),
                className: Fe("flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all", "border-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", c ? "bg-accent text-accent-foreground border-accent" : "bg-secondary/50 text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"),
                children: [h.jsx(l, {
                    className: "h-4 w-4",
                    "aria-hidden": "true"
                }), h.jsx("span", {
                    children: s(i.labelKey)
                })]
            }, i.id)
        }
        )
    })
}
  , L2 = [{
    city: "Αθήνα",
    name: "DEV Κηφισού",
    lat: 38.0063,
    lng: 23.7063
}, {
    city: "Αθήνα",
    name: "DEV Λιοσίων",
    lat: 38.0089,
    lng: 23.7244
}, {
    city: "Θεσσαλονίκη",
    name: "DEV Μακεδονία",
    lat: 40.6545,
    lng: 22.9059
}, {
    city: "Πάτρα",
    name: "DEV Αχαΐας",
    lat: 38.2544,
    lng: 21.7346
}, {
    city: "Ηράκλειο",
    name: "DEV Ηρακλείου",
    lat: 35.3413,
    lng: 25.1383
}, {
    city: "Λάρισα",
    name: "DEV Λάρισας",
    lat: 39.6401,
    lng: 22.4142
}, {
    city: "Βόλος",
    name: "DEV Μαγνησίας",
    lat: 39.3649,
    lng: 22.9419
}, {
    city: "Ιωάννινα",
    name: "DEV Ιωαννίνων",
    lat: 39.665,
    lng: 20.8528
}]
  , F2 = ({onSearch: n}) => {
    const {t: r} = vn()
      , [s,i] = m.useState("")
      , [l,c] = m.useState("")
      , [f,p] = m.useState("bus")
      , [v,g] = m.useState("")
      , x = () => {
        const N = s;
        i(l),
        c(N)
    }
      , w = () => {
        if (f === "bus" && s && l && s !== l) {
            const N = Rg(s, l, f);
            n(N, s, l, f),
            document.getElementById("timetable")?.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
      , E = N => {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(S => {
            const {latitude: C, longitude: R} = S.coords
              , M = `https://www.google.com/maps/dir/?api=1&origin=${C},${R}&destination=DEV+σταθμός&travelmode=${N}`;
            window.open(M, "_blank")
        }
        , () => {
            const S = `https://www.google.com/maps/search/DEV+σταθμός?travelmode=${N}`;
            window.open(S, "_blank")
        }
        ) : window.open("https://www.google.com/maps/search/DEV+σταθμός", "_blank")
    }
      , b = (N, S) => {
        const C = `https://www.google.com/maps/dir/?api=1&destination=${N.lat},${N.lng}&destination_place_id=${encodeURIComponent(N.name)}&travelmode=${S}`;
        window.open(C, "_blank")
    }
    ;
    return h.jsxs("section", {
        className: "relative overflow-hidden bg-primary py-16 md:py-24",
        id: "search",
        children: [h.jsx("div", {
            className: "absolute inset-0 opacity-10",
            children: h.jsx("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
                }
            })
        }), h.jsxs("div", {
            className: "container relative",
            children: [h.jsxs("div", {
                className: "mx-auto max-w-3xl text-center mb-10",
                children: [h.jsx("h1", {
                    className: "text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in",
                    children: r("hero.title")
                }), h.jsx("p", {
                    className: "text-lg text-primary-foreground/80 animate-fade-in",
                    style: {
                        animationDelay: "0.1s"
                    },
                    children: r("hero.subtitle")
                })]
            }), h.jsx("div", {
                className: "mx-auto max-w-4xl",
                children: h.jsxs("div", {
                    className: "bg-card rounded-2xl shadow-xl p-4 md:p-6 animate-slide-up",
                    style: {
                        animationDelay: "0.2s"
                    },
                    children: [h.jsx("div", {
                        className: "mb-4",
                        children: h.jsx(D2, {
                            selected: f,
                            onChange: p
                        })
                    }), f === "bus" && h.jsxs(h.Fragment, {
                        children: [h.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4",
                            children: [h.jsxs("div", {
                                className: "relative",
                                children: [h.jsx("label", {
                                    className: "text-xs font-medium text-muted-foreground mb-1.5 block",
                                    children: r("search.from")
                                }), h.jsx(bh, {
                                    value: s,
                                    onChange: i,
                                    placeholder: "Αθήνα",
                                    iconColor: "text-muted-foreground"
                                })]
                            }), h.jsx("div", {
                                className: "flex md:hidden justify-center -my-2",
                                children: h.jsx(Et, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: x,
                                    className: "rounded-full bg-secondary",
                                    children: h.jsx(rw, {
                                        className: "h-4 w-4"
                                    })
                                })
                            }), h.jsxs("div", {
                                className: "relative",
                                children: [h.jsx("label", {
                                    className: "text-xs font-medium text-muted-foreground mb-1.5 block",
                                    children: r("search.to")
                                }), h.jsx(bh, {
                                    value: l,
                                    onChange: c,
                                    placeholder: "Θεσσαλονίκη",
                                    iconColor: "text-accent"
                                })]
                            }), h.jsxs("div", {
                                className: "relative",
                                children: [h.jsx("label", {
                                    className: "text-xs font-medium text-muted-foreground mb-1.5 block",
                                    children: r("search.date")
                                }), h.jsxs("div", {
                                    className: "relative",
                                    children: [h.jsx(ow, {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                    }), h.jsx(ta, {
                                        type: "date",
                                        defaultValue: new Date().toISOString().split("T")[0],
                                        className: "pl-10 h-12 bg-secondary/50 border-0 focus:bg-card"
                                    })]
                                })]
                            }), h.jsxs("div", {
                                className: "relative",
                                children: [h.jsx("label", {
                                    className: "text-xs font-medium text-muted-foreground mb-1.5 block",
                                    children: r("search.time")
                                }), h.jsxs("div", {
                                    className: "relative",
                                    children: [h.jsx(Ou, {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                    }), h.jsx(ta, {
                                        type: "time",
                                        defaultValue: "08:00",
                                        className: "pl-10 h-12 bg-secondary/50 border-0 focus:bg-card"
                                    })]
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 items-end",
                            children: [h.jsxs("div", {
                                className: "flex-1",
                                children: [h.jsx("label", {
                                    className: "text-xs font-medium text-muted-foreground mb-1.5 block",
                                    children: r("search.passengers")
                                }), h.jsxs("div", {
                                    className: "relative",
                                    children: [h.jsx(ww, {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                    }), h.jsxs("select", {
                                        className: "w-full h-12 pl-10 pr-4 rounded-lg bg-secondary/50 border-0 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                                        children: [h.jsxs("option", {
                                            value: "1",
                                            children: ["1 ", r("search.passengers")]
                                        }), h.jsxs("option", {
                                            value: "2",
                                            children: ["2 ", r("search.passengers")]
                                        }), h.jsxs("option", {
                                            value: "3",
                                            children: ["3 ", r("search.passengers")]
                                        }), h.jsxs("option", {
                                            value: "4",
                                            children: ["4 ", r("search.passengers")]
                                        })]
                                    })]
                                })]
                            }), h.jsxs(Et, {
                                variant: "hero",
                                size: "xl",
                                className: "w-full sm:w-auto gap-2",
                                onClick: w,
                                children: [h.jsx(gw, {
                                    className: "h-5 w-5"
                                }), r("search.findRoutes"), h.jsx(sc, {
                                    className: "h-5 w-5"
                                })]
                            })]
                        })]
                    }), (f === "bicycle" || f === "walking") && h.jsxs("div", {
                        className: "text-center py-6",
                        children: [h.jsxs("div", {
                            className: "mb-6",
                            children: [h.jsx(Vi, {
                                className: "h-12 w-12 text-accent mx-auto mb-3"
                            }), h.jsx("h3", {
                                className: "text-xl font-bold text-foreground mb-2",
                                children: r("search.findNearestKTEL")
                            }), h.jsx("p", {
                                className: "text-muted-foreground max-w-md mx-auto",
                                children: r("search.nearestKTELDesc")
                            })]
                        }), h.jsxs(Et, {
                            variant: "hero",
                            size: "xl",
                            className: "gap-2",
                            onClick: () => E(f === "walking" ? "walking" : "bicycling"),
                            children: [h.jsx(mw, {
                                className: "h-5 w-5"
                            }), r("search.getDirections"), h.jsx(uw, {
                                className: "h-4 w-4"
                            })]
                        }), h.jsxs("div", {
                            className: "mt-8",
                            children: [h.jsx("p", {
                                className: "text-sm text-muted-foreground mb-4",
                                children: r("search.orSelectStation")
                            }), h.jsx("div", {
                                className: "flex flex-wrap justify-center gap-2",
                                children: L2.slice(0, 6).map(N => h.jsxs(Et, {
                                    variant: "outline",
                                    size: "sm",
                                    className: "gap-1",
                                    onClick: () => b(N, f === "walking" ? "walking" : "bicycling"),
                                    children: [h.jsx(Vi, {
                                        className: "h-3 w-3"
                                    }), N.name]
                                }, N.name))
                            })]
                        })]
                    })]
                })
            })]
        })]
    })
}
  , z2 = n => {
    switch (n) {
    case "bicycle":
        return Xh;
    case "walking":
        return em;
    default:
        return ua
    }
}
  , $2 = ({routes: n, from: r, to: s, mode: i="bus"}) => {
    const {t: l} = vn()
      , c = z2(i);
    return n.length === 0 ? h.jsx("section", {
        className: "py-16 bg-background",
        id: "timetable",
        children: h.jsx("div", {
            className: "container",
            children: h.jsxs("div", {
                className: "text-center py-12",
                children: [h.jsx(c, {
                    className: "h-16 w-16 text-muted-foreground/30 mx-auto mb-4"
                }), h.jsx("h2", {
                    className: "text-2xl font-bold text-foreground mb-2",
                    children: l("timetable.results")
                }), h.jsx("p", {
                    className: "text-muted-foreground",
                    children: l("search.noResults")
                })]
            })
        })
    }) : h.jsx("section", {
        className: "py-16 bg-background",
        id: "timetable",
        children: h.jsxs("div", {
            className: "container",
            children: [h.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",
                children: [h.jsxs("div", {
                    children: [h.jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold text-foreground mb-2",
                        children: l("timetable.results")
                    }), h.jsxs("p", {
                        className: "text-muted-foreground",
                        children: [r, " → ", s, " • ", n.length, " ", l("nav.routes")]
                    })]
                }), h.jsxs(Et, {
                    variant: "outline",
                    className: "self-start",
                    children: [l("action.viewDetails"), h.jsx(Jh, {
                        className: "h-4 w-4 ml-1"
                    })]
                })]
            }), h.jsxs("div", {
                className: "hidden md:block bg-card rounded-xl shadow-md overflow-hidden",
                children: [h.jsxs("div", {
                    className: "grid grid-cols-5 gap-4 px-6 py-4 bg-secondary/50 text-sm font-semibold text-muted-foreground",
                    children: [h.jsx("div", {
                        children: l("timetable.departure")
                    }), h.jsx("div", {
                        children: l("timetable.arrival")
                    }), h.jsx("div", {
                        children: l("timetable.duration")
                    }), h.jsx("div", {
                        children: l("timetable.stops")
                    }), h.jsx("div", {
                        children: l("timetable.price")
                    })]
                }), n.map( (f, p) => h.jsxs("div", {
                    className: `grid grid-cols-5 gap-4 px-6 py-5 items-center transition-colors hover:bg-secondary/30 ${p !== n.length - 1 ? "border-b border-border" : ""}`,
                    children: [h.jsx("div", {
                        className: "font-bold text-lg text-foreground",
                        children: f.departure
                    }), h.jsx("div", {
                        className: "font-bold text-lg text-foreground",
                        children: f.arrival
                    }), h.jsxs("div", {
                        className: "flex items-center gap-2 text-muted-foreground",
                        children: [h.jsx(Ou, {
                            className: "h-4 w-4"
                        }), f.duration]
                    }), h.jsx("div", {
                        className: "text-muted-foreground",
                        children: f.stops === 0 ? "Direct" : `${f.stops} ${l("timetable.stops")}`
                    }), h.jsx("div", {
                        className: "font-bold text-foreground",
                        children: f.price
                    })]
                }, f.id))]
            }), h.jsx("div", {
                className: "md:hidden space-y-4",
                children: n.map(f => h.jsxs("div", {
                    className: "bg-card rounded-xl shadow-md p-4",
                    children: [h.jsxs("div", {
                        className: "flex justify-between items-start mb-3",
                        children: [h.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [h.jsxs("div", {
                                children: [h.jsx("div", {
                                    className: "text-2xl font-bold text-foreground",
                                    children: f.departure
                                }), h.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: f.from
                                })]
                            }), h.jsx(sc, {
                                className: "h-5 w-5 text-muted-foreground"
                            }), h.jsxs("div", {
                                children: [h.jsx("div", {
                                    className: "text-2xl font-bold text-foreground",
                                    children: f.arrival
                                }), h.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: f.to
                                })]
                            })]
                        }), h.jsx("div", {
                            className: "text-xl font-bold text-foreground",
                            children: f.price
                        })]
                    }), h.jsxs("div", {
                        className: "flex items-center gap-4 text-sm text-muted-foreground",
                        children: [h.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [h.jsx(Ou, {
                                className: "h-4 w-4"
                            }), f.duration]
                        }), h.jsx("span", {
                            children: f.stops === 0 ? "Direct" : `${f.stops} ${l("timetable.stops")}`
                        })]
                    })]
                }, f.id))
            })]
        })
    })
}
  , B2 = [{
    from: "Αθήνα",
    to: "Θεσσαλονίκη",
    duration: "5h 30m",
    price: "€35",
    frequency: "1h"
}, {
    from: "Αθήνα",
    to: "Πάτρα",
    duration: "2h 45m",
    price: "€21",
    frequency: "30 min"
}, {
    from: "Θεσσαλονίκη",
    to: "Καβάλα",
    duration: "2h 15m",
    price: "€18",
    frequency: "1h"
}, {
    from: "Αθήνα",
    to: "Λαμία",
    duration: "2h 30m",
    price: "€19",
    frequency: "45 min"
}, {
    from: "Αθήνα",
    to: "Βόλος",
    duration: "3h 30m",
    price: "€27",
    frequency: "1h 30m"
}, {
    from: "Ιωάννινα",
    to: "Θεσσαλονίκη",
    duration: "3h 45m",
    price: "€29",
    frequency: "2h"
}]
  , U2 = ({onRouteClick: n}) => {
    const {t: r} = vn();
    return h.jsx("section", {
        className: "py-16 bg-secondary/30",
        id: "routes",
        children: h.jsxs("div", {
            className: "container",
            children: [h.jsxs("div", {
                className: "text-center mb-12",
                children: [h.jsxs("div", {
                    className: "inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4",
                    children: [h.jsx(xw, {
                        className: "h-4 w-4"
                    }), r("popular.subtitle")]
                }), h.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-foreground",
                    children: r("popular.title")
                })]
            }), h.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                children: B2.map( (s, i) => h.jsxs("div", {
                    onClick: () => n(s.from, s.to),
                    className: "group bg-card rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/30",
                    children: [h.jsx("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: h.jsx("div", {
                            className: "flex-1",
                            children: h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx("span", {
                                    className: "font-bold text-foreground",
                                    children: s.from
                                }), h.jsx(sc, {
                                    className: "h-4 w-4 text-accent"
                                }), h.jsx("span", {
                                    className: "font-bold text-foreground",
                                    children: s.to
                                })]
                            })
                        })
                    }), h.jsx("div", {
                        className: "flex items-center justify-between text-sm mb-4",
                        children: h.jsxs("div", {
                            className: "flex gap-4",
                            children: [h.jsx("span", {
                                className: "text-muted-foreground",
                                children: s.duration
                            }), h.jsxs("span", {
                                className: "text-muted-foreground",
                                children: ["Every ", s.frequency]
                            })]
                        })
                    }), h.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [h.jsxs("span", {
                            className: "text-lg font-bold text-foreground",
                            children: ["from ", s.price]
                        }), h.jsx(Et, {
                            variant: "ghost",
                            size: "sm",
                            className: "text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors",
                            children: r("action.viewDetails")
                        })]
                    })]
                }, i))
            })]
        })
    })
}
;
var Pa = "Collapsible"
  , [V2,Tg] = hn(Pa)
  , [W2,Rc] = V2(Pa)
  , jg = m.forwardRef( (n, r) => {
    const {__scopeCollapsible: s, open: i, defaultOpen: l, disabled: c, onOpenChange: f, ...p} = n
      , [v,g] = wr({
        prop: i,
        defaultProp: l ?? !1,
        onChange: f,
        caller: Pa
    });
    return h.jsx(W2, {
        scope: s,
        disabled: c,
        contentId: ts(),
        open: v,
        onOpenToggle: m.useCallback( () => g(x => !x), [g]),
        children: h.jsx(Pe.div, {
            "data-state": jc(v),
            "data-disabled": c ? "" : void 0,
            ...p,
            ref: r
        })
    })
}
);
jg.displayName = Pa;
var Mg = "CollapsibleTrigger"
  , _g = m.forwardRef( (n, r) => {
    const {__scopeCollapsible: s, ...i} = n
      , l = Rc(Mg, s);
    return h.jsx(Pe.button, {
        type: "button",
        "aria-controls": l.contentId,
        "aria-expanded": l.open || !1,
        "data-state": jc(l.open),
        "data-disabled": l.disabled ? "" : void 0,
        disabled: l.disabled,
        ...i,
        ref: r,
        onClick: ue(n.onClick, l.onOpenToggle)
    })
}
);
_g.displayName = Mg;
var Tc = "CollapsibleContent"
  , Ag = m.forwardRef( (n, r) => {
    const {forceMount: s, ...i} = n
      , l = Rc(Tc, n.__scopeCollapsible);
    return h.jsx(rr, {
        present: s || l.open,
        children: ({present: c}) => h.jsx(H2, {
            ...i,
            ref: r,
            present: c
        })
    })
}
);
Ag.displayName = Tc;
var H2 = m.forwardRef( (n, r) => {
    const {__scopeCollapsible: s, present: i, children: l, ...c} = n
      , f = Rc(Tc, s)
      , [p,v] = m.useState(i)
      , g = m.useRef(null)
      , x = $e(r, g)
      , w = m.useRef(0)
      , E = w.current
      , b = m.useRef(0)
      , N = b.current
      , S = f.open || p
      , C = m.useRef(S)
      , R = m.useRef(void 0);
    return m.useEffect( () => {
        const M = requestAnimationFrame( () => C.current = !1);
        return () => cancelAnimationFrame(M)
    }
    , []),
    fn( () => {
        const M = g.current;
        if (M) {
            R.current = R.current || {
                transitionDuration: M.style.transitionDuration,
                animationName: M.style.animationName
            },
            M.style.transitionDuration = "0s",
            M.style.animationName = "none";
            const _ = M.getBoundingClientRect();
            w.current = _.height,
            b.current = _.width,
            C.current || (M.style.transitionDuration = R.current.transitionDuration,
            M.style.animationName = R.current.animationName),
            v(i)
        }
    }
    , [f.open, i]),
    h.jsx(Pe.div, {
        "data-state": jc(f.open),
        "data-disabled": f.disabled ? "" : void 0,
        id: f.contentId,
        hidden: !S,
        ...c,
        ref: x,
        style: {
            "--radix-collapsible-content-height": E ? `${E}px` : void 0,
            "--radix-collapsible-content-width": N ? `${N}px` : void 0,
            ...n.style
        },
        children: S && l
    })
}
);
function jc(n) {
    return n ? "open" : "closed"
}
var K2 = jg
  , G2 = _g
  , Q2 = Ag
  , Yt = "Accordion"
  , q2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Mc,Y2,X2] = sa(Yt)
  , [Ra] = hn(Yt, [X2, Tg])
  , _c = Tg()
  , Og = H.forwardRef( (n, r) => {
    const {type: s, ...i} = n
      , l = i
      , c = i;
    return h.jsx(Mc.Provider, {
        scope: n.__scopeAccordion,
        children: s === "multiple" ? h.jsx(tN, {
            ...c,
            ref: r
        }) : h.jsx(eN, {
            ...l,
            ref: r
        })
    })
}
);
Og.displayName = Yt;
var [Ig,Z2] = Ra(Yt)
  , [Dg,J2] = Ra(Yt, {
    collapsible: !1
})
  , eN = H.forwardRef( (n, r) => {
    const {value: s, defaultValue: i, onValueChange: l= () => {}
    , collapsible: c=!1, ...f} = n
      , [p,v] = wr({
        prop: s,
        defaultProp: i ?? "",
        onChange: l,
        caller: Yt
    });
    return h.jsx(Ig, {
        scope: n.__scopeAccordion,
        value: H.useMemo( () => p ? [p] : [], [p]),
        onItemOpen: v,
        onItemClose: H.useCallback( () => c && v(""), [c, v]),
        children: h.jsx(Dg, {
            scope: n.__scopeAccordion,
            collapsible: c,
            children: h.jsx(Lg, {
                ...f,
                ref: r
            })
        })
    })
}
)
  , tN = H.forwardRef( (n, r) => {
    const {value: s, defaultValue: i, onValueChange: l= () => {}
    , ...c} = n
      , [f,p] = wr({
        prop: s,
        defaultProp: i ?? [],
        onChange: l,
        caller: Yt
    })
      , v = H.useCallback(x => p( (w=[]) => [...w, x]), [p])
      , g = H.useCallback(x => p( (w=[]) => w.filter(E => E !== x)), [p]);
    return h.jsx(Ig, {
        scope: n.__scopeAccordion,
        value: f,
        onItemOpen: v,
        onItemClose: g,
        children: h.jsx(Dg, {
            scope: n.__scopeAccordion,
            collapsible: !0,
            children: h.jsx(Lg, {
                ...c,
                ref: r
            })
        })
    })
}
)
  , [nN,Ta] = Ra(Yt)
  , Lg = H.forwardRef( (n, r) => {
    const {__scopeAccordion: s, disabled: i, dir: l, orientation: c="vertical", ...f} = n
      , p = H.useRef(null)
      , v = $e(p, r)
      , g = Y2(s)
      , w = xc(l) === "ltr"
      , E = ue(n.onKeyDown, b => {
        if (!q2.includes(b.key))
            return;
        const N = b.target
          , S = g().filter(Z => !Z.ref.current?.disabled)
          , C = S.findIndex(Z => Z.ref.current === N)
          , R = S.length;
        if (C === -1)
            return;
        b.preventDefault();
        let M = C;
        const _ = 0
          , L = R - 1
          , $ = () => {
            M = C + 1,
            M > L && (M = _)
        }
          , W = () => {
            M = C - 1,
            M < _ && (M = L)
        }
        ;
        switch (b.key) {
        case "Home":
            M = _;
            break;
        case "End":
            M = L;
            break;
        case "ArrowRight":
            c === "horizontal" && (w ? $() : W());
            break;
        case "ArrowDown":
            c === "vertical" && $();
            break;
        case "ArrowLeft":
            c === "horizontal" && (w ? W() : $());
            break;
        case "ArrowUp":
            c === "vertical" && W();
            break
        }
        const G = M % R;
        S[G].ref.current?.focus()
    }
    );
    return h.jsx(nN, {
        scope: s,
        disabled: i,
        direction: l,
        orientation: c,
        children: h.jsx(Mc.Slot, {
            scope: s,
            children: h.jsx(Pe.div, {
                ...f,
                "data-orientation": c,
                ref: v,
                onKeyDown: i ? void 0 : E
            })
        })
    })
}
)
  , na = "AccordionItem"
  , [rN,Ac] = Ra(na)
  , Fg = H.forwardRef( (n, r) => {
    const {__scopeAccordion: s, value: i, ...l} = n
      , c = Ta(na, s)
      , f = Z2(na, s)
      , p = _c(s)
      , v = ts()
      , g = i && f.value.includes(i) || !1
      , x = c.disabled || n.disabled;
    return h.jsx(rN, {
        scope: s,
        open: g,
        disabled: x,
        triggerId: v,
        children: h.jsx(K2, {
            "data-orientation": c.orientation,
            "data-state": Wg(g),
            ...p,
            ...l,
            ref: r,
            disabled: x,
            open: g,
            onOpenChange: w => {
                w ? f.onItemOpen(i) : f.onItemClose(i)
            }
        })
    })
}
);
Fg.displayName = na;
var zg = "AccordionHeader"
  , $g = H.forwardRef( (n, r) => {
    const {__scopeAccordion: s, ...i} = n
      , l = Ta(Yt, s)
      , c = Ac(zg, s);
    return h.jsx(Pe.h3, {
        "data-orientation": l.orientation,
        "data-state": Wg(c.open),
        "data-disabled": c.disabled ? "" : void 0,
        ...i,
        ref: r
    })
}
);
$g.displayName = zg;
var Zu = "AccordionTrigger"
  , Bg = H.forwardRef( (n, r) => {
    const {__scopeAccordion: s, ...i} = n
      , l = Ta(Yt, s)
      , c = Ac(Zu, s)
      , f = J2(Zu, s)
      , p = _c(s);
    return h.jsx(Mc.ItemSlot, {
        scope: s,
        children: h.jsx(G2, {
            "aria-disabled": c.open && !f.collapsible || void 0,
            "data-orientation": l.orientation,
            id: c.triggerId,
            ...p,
            ...i,
            ref: r
        })
    })
}
);
Bg.displayName = Zu;
var Ug = "AccordionContent"
  , Vg = H.forwardRef( (n, r) => {
    const {__scopeAccordion: s, ...i} = n
      , l = Ta(Yt, s)
      , c = Ac(Ug, s)
      , f = _c(s);
    return h.jsx(Q2, {
        role: "region",
        "aria-labelledby": c.triggerId,
        "data-orientation": l.orientation,
        ...f,
        ...i,
        ref: r,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...n.style
        }
    })
}
);
Vg.displayName = Ug;
function Wg(n) {
    return n ? "open" : "closed"
}
var oN = Og
  , sN = Fg
  , iN = $g
  , Hg = Bg
  , Kg = Vg;
const aN = oN
  , Gg = m.forwardRef( ({className: n, ...r}, s) => h.jsx(sN, {
    ref: s,
    className: Fe("border-b", n),
    ...r
}));
Gg.displayName = "AccordionItem";
const Qg = m.forwardRef( ({className: n, children: r, ...s}, i) => h.jsx(iN, {
    className: "flex",
    children: h.jsxs(Hg, {
        ref: i,
        className: Fe("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", n),
        ...s,
        children: [r, h.jsx(Zh, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
Qg.displayName = Hg.displayName;
const qg = m.forwardRef( ({className: n, children: r, ...s}, i) => h.jsx(Kg, {
    ref: i,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...s,
    children: h.jsx("div", {
        className: Fe("pb-4 pt-0", n),
        children: r
    })
}));
qg.displayName = Kg.displayName;
const lN = () => {
    const {t: n} = vn()
      , r = [{
        question: "faq.lostItems",
        answer: "faq.lostItemsAnswer"
    }, {
        question: "faq.refund",
        answer: "faq.refundAnswer"
    }, {
        question: "faq.luggage",
        answer: "faq.luggageAnswer"
    }, {
        question: "faq.accessibility",
        answer: "faq.accessibilityAnswer"
    }];
    return h.jsx("section", {
        className: "py-16 bg-background",
        id: "faq",
        children: h.jsxs("div", {
            className: "container max-w-3xl",
            children: [h.jsxs("div", {
                className: "text-center mb-10",
                children: [h.jsx("div", {
                    className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4",
                    children: h.jsx(iw, {
                        className: "h-6 w-6 text-primary"
                    })
                }), h.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-foreground",
                    children: n("faq.title")
                })]
            }), h.jsx(aN, {
                type: "single",
                collapsible: !0,
                className: "space-y-3",
                children: r.map( (s, i) => h.jsxs(Gg, {
                    value: `item-${i}`,
                    className: "bg-card rounded-xl px-6 shadow-sm border-0 data-[state=open]:shadow-md transition-shadow",
                    children: [h.jsx(Qg, {
                        className: "text-left font-semibold text-foreground hover:no-underline py-5",
                        children: n(s.question)
                    }), h.jsx(qg, {
                        className: "text-muted-foreground pb-5",
                        children: n(s.answer)
                    })]
                }, i))
            })]
        })
    })
}
  , uN = () => {
    const {t: n} = vn();
    return h.jsx("section", {
        className: "py-16 bg-primary text-primary-foreground",
        children: h.jsxs("div", {
            className: "container",
            children: [h.jsxs("div", {
                className: "text-center mb-10",
                children: [h.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold mb-2",
                    children: n("contact.title")
                }), h.jsx("p", {
                    className: "text-primary-foreground/80",
                    children: n("contact.hours")
                })]
            }), h.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                children: [h.jsxs("div", {
                    className: "bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center",
                    children: [h.jsx("div", {
                        className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4",
                        children: h.jsx(vw, {
                            className: "h-5 w-5 text-accent-foreground"
                        })
                    }), h.jsx("h3", {
                        className: "font-semibold mb-2",
                        children: n("contact.phone")
                    }), h.jsx("p", {
                        className: "text-xl font-bold mb-1",
                        children: "+30 210 512 4910"
                    }), h.jsx("p", {
                        className: "text-sm text-primary-foreground/70",
                        children: "24/7 Support"
                    })]
                }), h.jsxs("div", {
                    className: "bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center",
                    children: [h.jsx("div", {
                        className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4",
                        children: h.jsx(dw, {
                            className: "h-5 w-5 text-accent-foreground"
                        })
                    }), h.jsx("h3", {
                        className: "font-semibold mb-2",
                        children: n("contact.email")
                    }), h.jsx("p", {
                        className: "text-xl font-bold mb-1",
                        children: "info@freehosting.gr"
                    }), h.jsx("p", {
                        className: "text-sm text-primary-foreground/70",
                        children: "Response within 24h"
                    })]
                }), h.jsxs("div", {
                    className: "bg-primary-foreground/10 backdrop-blur rounded-xl p-6 text-center",
                    children: [h.jsx("div", {
                        className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4",
                        children: h.jsx(pw, {
                            className: "h-5 w-5 text-accent-foreground"
                        })
                    }), h.jsx("h3", {
                        className: "font-semibold mb-2",
                        children: "Live Chat"
                    }), h.jsx(Et, {
                        variant: "secondary",
                        className: "mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90",
                        children: "Start Chat"
                    })]
                })]
            })]
        })
    })
}
  , cN = () => {
    const {t: n} = vn();
    return h.jsx("footer", {
        className: "bg-foreground text-background py-12",
        children: h.jsxs("div", {
            className: "container",
            children: [h.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
                children: [h.jsxs("div", {
                    className: "md:col-span-2",
                    children: [h.jsxs("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [h.jsx("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent",
                            children: h.jsx(ua, {
                                className: "h-5 w-5 text-accent-foreground"
                            })
                        }), h.jsxs("div", {
                            children: [h.jsx("span", {
                                className: "text-xl font-bold",
                                children: "FreeHosting"
                            }), h.jsx("span", {
                                className: "block text-xs text-background/60",
                                children: "DEV Greece"
                            })]
                        })]
                    }), h.jsx("p", {
                        className: "text-background/70 mb-4 max-w-sm",
                        children: n("footer.tagline")
                    }), h.jsxs("div", {
                        className: "flex items-center gap-2 text-sm text-background/60",
                        children: [h.jsx(lw, {
                            className: "h-4 w-4"
                        }), h.jsxs("span", {
                            children: [n("footer.payments"), ":"]
                        }), h.jsx("span", {
                            className: "font-medium",
                            children: "Visa, Mastercard, PayPal, Viva Wallet"
                        })]
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Quick Links"
                    }), h.jsxs("ul", {
                        className: "space-y-2 text-background/70",
                        children: [h.jsx("li", {
                            children: h.jsx("a", {
                                href: "#routes",
                                className: "hover:text-background transition-colors",
                                children: n("nav.routes")
                            })
                        }), h.jsx("li", {
                            children: h.jsx("a", {
                                href: "#timetable",
                                className: "hover:text-background transition-colors",
                                children: n("nav.timetables")
                            })
                        }), h.jsx("li", {
                            children: h.jsx("a", {
                                href: "#faq",
                                className: "hover:text-background transition-colors",
                                children: n("nav.help")
                            })
                        })]
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Legal"
                    }), h.jsxs("ul", {
                        className: "space-y-2 text-background/70",
                        children: [h.jsx("li", {
                            children: h.jsx("a", {
                                href: "#",
                                className: "hover:text-background transition-colors",
                                children: n("footer.terms")
                            })
                        }), h.jsx("li", {
                            children: h.jsx("a", {
                                href: "#",
                                className: "hover:text-background transition-colors",
                                children: n("footer.privacy")
                            })
                        }), h.jsx("li", {
                            children: h.jsx("a", {
                                href: "#",
                                className: "hover:text-background transition-colors",
                                children: "Cookies"
                            })
                        })]
                    })]
                })]
            }), h.jsxs("div", {
                className: "border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [h.jsx("p", {
                    className: "text-sm text-background/60",
                    children: "© 2024 FreeHosting. All rights reserved."
                }), h.jsx("div", {
                    className: "flex items-center gap-4 text-sm text-background/60",
                    children: h.jsx("span", {
                        children: "Made with ❤️ in Greece 🇬🇷"
                    })
                })]
            })]
        })
    })
}
  , dN = () => {
    const [n,r] = m.useState([])
      , [s,i] = m.useState("")
      , [l,c] = m.useState("")
      , [f,p] = m.useState("bus")
      , v = (x, w, E, b) => {
        r(x),
        i(w),
        c(E),
        p(b)
    }
      , g = (x, w) => {
        const E = Rg(x, w, "bus");
        r(E),
        i(x),
        c(w),
        p("bus"),
        document.getElementById("timetable")?.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return h.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [h.jsx(O2, {}), h.jsxs("main", {
            className: "flex-1",
            children: [h.jsx(F2, {
                onSearch: v
            }), h.jsx($2, {
                routes: n,
                from: s,
                to: l,
                mode: f
            }), h.jsx(U2, {
                onRouteClick: g
            }), h.jsx(lN, {}), h.jsx(uN, {})]
        }), h.jsx(cN, {})]
    })
}
  , fN = () => h.jsx(UC, {
    children: h.jsx(BC, {
        children: h.jsx(dN, {})
    })
})
  , pN = () => h.jsxs("div", {
    className: "min-h-screen flex items-center justify-center flex-col",
    children: [h.jsx("h1", {
        className: "text-4xl font-bold",
        children: "404"
    }), h.jsx("p", {
        className: "text-gray-500 mt-3",
        children: "Page not found"
    })]
})
  , hN = new qS
  , mN = () => h.jsx(XS, {
    client: hN,
    children: h.jsxs(SS, {
        children: [h.jsx(r1, {}), h.jsx(I1, {}), h.jsx(zC, {
            future: {
                v7_startTransition: !0,
                v7_relativeSplatPath: !0
            },
            children: h.jsxs(DC, {
                children: [h.jsx(Ku, {
                    path: "/",
                    element: h.jsx(fN, {})
                }), h.jsx(Ku, {
                    path: "*",
                    element: h.jsx(pN, {})
                })]
            })
        })]
    })
});
document.getElementById("root")


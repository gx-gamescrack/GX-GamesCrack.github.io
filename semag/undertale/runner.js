var k;
k || (k = typeof Module !== 'undefined' ? Module : {});
k.bk || (k.bk = 0);
k.bk++;
k.ENVIRONMENT_IS_PTHREAD || k.$ww || function (a) {
    function b(n, p, q, u) {
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) require("fs").readFile(n, function (r, B) {
            r ? u(r) : q(B.buffer)
        });
        else {
            var v = new XMLHttpRequest;
            v.open("GET", n, !0);
            v.responseType = "arraybuffer";
            v.onprogress = function (r) {
                var B = p;
                r.total && (B = r.total);
                if (r.loaded) {
                    v.Fi ? k.vj[n].loaded = r.loaded : (v.Fi = !0, k.vj || (k.vj = {}), k.vj[n] = {
                        loaded: r.loaded,
                        total: B
                    });
                    var y = B = r = 0,
                        G;
                    for (G in k.vj) {
                        var K = k.vj[G];
                        r += K.total;
                        B += K.loaded;
                        y++
                    }
                    r = Math.ceil(r * k.bk / y);
                    k.setStatus && k.setStatus(`Downloading data... (/)`)
                } else !k.vj && k.setStatus && k.setStatus("Downloading data...")
            };
            v.onerror = function () {
                throw Error("NetworkError for: " + n);
            };
            v.onload = function () {
                if (200 == v.status || 304 == v.status || 206 == v.status || 0 == v.status && v.response) q(v.response);
                else throw Error(v.statusText + " : " + v.responseURL);
            };
            v.send(null)
        }
    }

    function c(n) {
        console.error("package error:", n)
    }

    function d() {
        function n(v, r, B) {
            this.start = v;
            this.end =
                r;
            this.audio = B
        }

        function p(v) {
            if (!v) throw "Loading data file failed." + Error().stack;
            if (v.constructor.name !== ArrayBuffer.name) throw "bad input to processPackageData" + Error().stack;
            v = new Uint8Array(v);
            n.prototype.Li = v;
            v = a.files;
            for (var r = 0; r < v.length; ++r) n.prototype.Fi[v[r].filename].onload();
            k.removeRunDependency("datafile_runner.data")
        }
        k.FS_createPath("/", "assets", !0, !0);
        ModuleName().FS_createPath("/assets", "lang", !0, !0);
        n.prototype = {
            Fi: {},
            open: function (v, r) {
                this.name = r;
                this.Fi[r] = this;
                k.addRunDependency(`fp ${this.name}`)
            },
            send: function () {},
            onload: function () {
                this.finish(this.Li.subarray(this.start,
                    this.end))
            },
            finish: function (v) {
                k.FS_createDataFile(this.name, null, v, !0, !0, !0);
                k.removeRunDependency(`fp ${this.name}`);
                this.Fi[this.name] = null
            }
        };
        for (var q = a.files, u = 0; u < q.length; ++u)(new n(q[u].start, q[u].end, q[u].audio || 0)).open("GET", q[u].filename);
        k.addRunDependency("datafile_runner.data");
        k.Rk || (k.Rk = {});
        k.Rk["runner.data"] = {
            am: !1
        };
        h ? (p(h), h = null) : g = p
    }
    "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) +
        "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
    "function" !== typeof k.locateFilePackage || k.locateFile || (k.locateFile = k.locateFilePackage, l("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
    var e = k.locateFile ? k.locateFile("runner.data", "") : "runner.data",
        f = a.remote_package_size,
        g = null,
        h = k.getPreloadedPackage ?
        k.getPreloadedPackage(e, f) : null;
    h || b(e, f, function (n) {
        g ? (g(n), g = null) : h = n
    }, c);
    k.calledRun ? d() : (k.preRun || (k.preRun = []), k.preRun.push(d))
}({
    "files": [{
        "filename": "/assets/credits.txt",
        "start": 0,
        "end": 11278,
        "audio": 0
    }, {
        "filename": "/assets/nxtale.yydebug",
        "start": 11278,
        "end": 8831678,
        "audio": 0
    }, {
        "filename": "/assets/options.ini",
        "start": 8831678,
        "end": 8831764,
        "audio": 0
    }, {
        "filename": "/assets/lang/lang_en.json",
        "start": 8831764,
        "end": 9952497,
        "audio": 0
    }, {
        "filename": "/assets/lang/lang_ja.json",
        "start": 9952497,
        "end": 11528658,
        "audio": 0
    }],
    "remote_package_size": 11528658,
    "package_uuid": "8991d9cd-3f9e-46ca-b5f4-2d8686786d6a"
});
this.doGMLCallback = function (a, b) {
    b = JSON.stringify(b);
    var c = aa(b) + 1,
        d = m(c);
    t(b, w, d, c);
    console.log("AddAsyncMethod=" + g_pAddAsyncMethod + ", methodToCall=" + a + ", stringOnWasmHeap=" + d + ", argsAsJSON=" + b);
    k.dynCall("vii", g_pAddAsyncMethod, [a, d])
};
this.triggerAdPrefix = function (a, b, c, d, e) {
    var f = m(80),
        g = f + 16,
        h = f + 32,
        n = f + 48,
        p = f + 64;
    ba(f + 0, a, 16);
    ba(g, b, 16);
    ba(h, c, 16);
    ba(n, d, 16);
    ba(p, e, 16);
    return f
};
this.ModuleName = function () {
    return k
};
this.triggerAdPostfix = function (a) {
    ca(a)
};
this.triggerPaymentPrefix = function (a) {
    var b = m(16);
    ba(b, a, 16);
    return b
};
this.triggerPaymentPostfix = function (a) {
    ca(a)
};
var da = null,
    ea = [],
    ha = null,
    ia = null,
    ja = null,
    ka = null,
    la = null;

function ma() {
    da && ("visible" === document.visibilityState ? da.resume() : da.suspend())
}
var na = void 0,
    oa = void 0;
this.gx_set_default_unhandled_exception_handler = function (a, b) {
    na = a;
    oa = b;
    hasJSExceptionHandler = function () {
        return !0
    };
    doJSExceptionHandler = function (c) {
        na(JSON.parse(c), oa)
    }
};
var pa = void 0;
this.OGX_startDRMCheck = function () {
    pa && k.dynCall("v", pa)
};
var qa = void 0,
    ra = void 0,
    sa = void 0,
    ta = void 0;
this.GM_pause = function () {
    qa && k.dynCall("v", qa)
};
this.GM_unpause = function () {
    ra && k.dynCall("v", ra)
};
this.GM_tick = function () {
    sa && k.dynCall("vd", sa, [performance.now()])
};
this.GM_is_multiplayer = function () {
    return ta ? k.dynCall("i", ta) : 0
};
var ua = void 0,
    va = void 0;
this.GM_get_view_status = function () {
    var a = void 0;
    if (ua) {
        var b = k.dynCall("i", ua);
        a = b ? x(w, b) : "";
        a = JSON.parse(a);
        ca(b)
    }
    return a
};
this.GM_set_view_status = function (a) {
    if (va) {
        a = JSON.stringify(a);
        var b = aa(a) + 1,
            c = m(b);
        t(a, w, c, b);
        console.log("GM_set_view_status=" + va + ", stringOnWasmHeap=" + c + ", argsAsJSON=" + a);
        k.dynCall("vi", va, [c])
    }
};
var wa = [],
    xa = !1,
    ya = !1;
this.activate_clipboard = function () {
    !xa && navigator.clipboard && navigator.permissions && !ya && (ya = !0, navigator.permissions.query({
        name: "clipboard-read",
        Pl: !0
    }).then(function (a) {
        if ("granted" == a.state || "prompt" == a.state) {
            xa = !0;
            ya = !1;
            for (a = 0; a < wa.length; ++a) navigator.clipboard.writeText(wa[a]);
            wa = [];
            navigator.clipboard.readText().then(b => {
                "" != b && wa.push(b)
            }).catch(() => {})
        }
    }))
};
this.clipboard_has_text = function () {
    if (!xa) return activate_clipboard(), !1;
    navigator.clipboard.readText().then(a => {
        "" != a && wa.push(a)
    }).catch(() => {});
    return 0 < wa.length
};
this.clipboard_get_text = function () {
    var a = "";
    xa ? 0 < wa.length && (a = wa.pop()) : activate_clipboard();
    return a
};
this.clipboard_set_text = function (a) {
    xa ? navigator.clipboard && navigator.clipboard.writeText(a) : (activate_clipboard(), wa.push(a))
};
var za = {},
    Aa = {},
    Ba = "";
this.__gx_cache_file = function (a) {
    if (window.oprt && window.oprt.gameFiles) {
        var b = window.origin + "/" + a.name,
            c = new URLSearchParams(window.location.search);
        const d = c.get("game"),
            e = c.get("track");
        c = c.get("release");
        null != d && null != e && null != c && (b = window.location.origin + "/" + d + "/" + e + "/" + c + "/" + a.name);
        console.log("__gx_cache_file for " + b);
        b = new Request(b);
        let f = a.name + ":" + a.md5;
        window.oprt.gameFiles.fetchAndCache(f, Ba, b).then(g => {
            g.arrayBuffer().then(function () {
                console.log("fetchAndCache complete for file:id " +
                    f);
                Aa[a.name] = {
                    name: a.name,
                    md5: a.md5,
                    fileId: f,
                    version: Ba
                }
            })
        })
    }
    return Promise.resolve()
};
this.__gx_check_cache = function (a, b) {
    var c = void 0 != Aa[a];
    b && console.log("__gx_check_cache for " + a + " cached files " + JSON.stringify(Aa) + " manifest files " + JSON.stringify(za));
    !c && void 0 != za[a] && b && this.__gx_cache_file(za[a]);
    return c
};
this.__gx_prepare_cache = function (a) {
    Ba = a;
    return new Promise(function (b, c) {
        if (window.oprt && window.oprt.gameFiles) {
            let e = manifestFiles().split(";");
            var d = manifestFilesMD5();
            window.oprt.gameFiles.keys().then(f => {
                console.log("current cache entries are " + JSON.stringify(f));
                var g = {};
                let h = [];
                for (var n = 0; n < f.length; ++n) {
                    var p = f[n],
                        q = p.fileId,
                        u = "",
                        v = q.indexOf(":");
                    0 <= v && (u = q.substring(v + 1), q = q.substring(0, v));
                    v = e.indexOf(q);
                    console.log("considering file " + q + " for deleting, indexOf is " + v + " cached MD5 is " +
                        u + " manifest md5 is " + (0 > v ? " not present" : d[v]));
                    0 > v || d[v] != u ? h.push(window.oprt.gameFiles.delete(p.fileId, p.version)) : g[q] = {
                        name: q,
                        md5: u,
                        fileId: p.fileId,
                        version: p.version
                    }
                }
                console.log("current cache files are " + JSON.stringify(g));
                Aa = g;
                f = {};
                for (n = 0; n < e.length; ++n) f[e[n]] = {
                    name: e[n],
                    md5: d[n]
                };
                za = f;
                void 0 == Aa["game.unx"] ? (console.log("caching game.unx"), this.__gx_cache_file(za["game.unx"]).then(() => {
                    b({
                        cachedFiles: Aa,
                        allFiles: e
                    })
                })) : b({
                    cachedFiles: Aa,
                    allFiles: e
                })
            }).catch(f => {
                c(Error("error trying to enumerate cache keys - " +
                    JSON.stringify(f)))
            })
        } else c(Error("unable to cache, API not found"))
    })
};
this.__gx_async_wget2 = function (a, b, c, d, e, f, g) {
    window.oprt && window.oprt.gameFiles && (a = Aa[a], a = window.oprt.gameFiles.match(a.fileId, a.version), a.catch(() => {
        k.dynCall("vi", g, [d])
    }), a.then(h => h.arrayBuffer()).then(h => {
        h = new Uint8Array(h);
        var n = m(h.length);
        w.set(h, n);
        f && k.dynCall("viiii", f, [4294967295, d, n, h.length]);
        e && e(n)
    }))
};
GXMFS = {
    gj: {},
    Ni: function (a) {
        return z.Ni.apply(null, arguments)
    },
    tk: (a, b, c) => {
        GXMFS.ck(a, (d, e) => {
            if (d) return c(d);
            GXMFS.dk(a, (f, g) => {
                if (f) return c(f);
                GXMFS.lk(b ? g : e, b ? e : g, c)
            })
        })
    },
    zl: () => {
        GXMFS.gj = {}
    },
    ml: (a, b) => {
        var c = GXMFS.gj[a];
        c || (c = window.oprt.gameStorage.open(a), GXMFS.gj[a] = c);
        return b(null, c)
    },
    ck: (a, b) => {
        function c(h) {
            return "." !== h && ".." !== h
        }

        function d(h) {
            return n => Ca(h + "/" + n)
        }
        var e = {};
        for (a = Da(a.jj).filter(c).map(d(a.jj)); a.length;) {
            var f = a.pop();
            try {
                var g = Ea(f)
            } catch (h) {
                return b(h)
            }
            C(g.mode) &&
                a.push.apply(a, Da(f).filter(c).map(d(f)));
            e[f] = {
                timestamp: g.mtime
            }
        }
        return b(null, {
            type: "local",
            entries: e
        })
    },
    dk: (a, b) => {
        GXMFS.ml(a.jj, (c, d) => {
            if (c) return b(c);
            d.list().then(e => {
                b(null, {
                    type: "remote",
                    storage: d,
                    entries: e
                })
            }).catch(b)
        })
    },
    fk: (a, b) => {
        try {
            var c = Fa(a).node;
            var d = Ea(a)
        } catch (e) {
            return b(e)
        }
        return C(d.mode) ? b(null, {
            timestamp: d.mtime,
            mode: d.mode
        }) : 32768 === (d.mode & 61440) ? (c.Hi = Ga(c), b(null, {
            timestamp: d.mtime,
            mode: d.mode,
            contents: c.Hi
        })) : b(Error("node type not supported"))
    },
    rk: (a, b, c) => {
        try {
            if (C(b.mode)) Ha(a,
                b.mode);
            else if (32768 === (b.mode & 61440)) Ia(a, b.contents);
            else return c(Error("node type not supported"));
            Ja(a, b.mode);
            Ka(a, b.timestamp, b.timestamp)
        } catch (d) {
            return c(d)
        }
        c(null)
    },
    nk: (a, b) => {
        try {
            var c = Ea(a);
            C(c.mode) ? La(a) : 32768 === (c.mode & 61440) && Ma(a)
        } catch (d) {
            return b(d)
        }
        b(null)
    },
    gk: (a, b, c) => {
        a.get(b).then(d => {
            c(null, d)
        }).catch(c)
    },
    sk: (a, b, c, d) => {
        a.put(c, b).then(() => {
            d(null)
        }).catch(d)
    },
    pk: (a, b, c) => {
        a.delete(b).then(() => {
            c(null)
        }).catch(c)
    },
    lk: (a, b, c) => {
        function d(p) {
            e--;
            if (p && !h) return h = !0, console.error("Reconcile failed"),
                c(p);
            if (0 === e && !h) return console.info("Reconcile finished successfully"), c(null)
        }
        console.info("Starting reconcile");
        var e = 0,
            f = [];
        Object.keys(a.entries).forEach(function (p) {
            var q = a.entries[p],
                u = b.entries[p];
            u && q.timestamp.getTime() == u.timestamp.getTime() || (f.push(p), e++)
        });
        console.debug(`${f.length} entries to create/update on the ${"local"===b.type?"local filesystem":"remote filesystem"}`);
        var g = [];
        Object.keys(b.entries).forEach(function (p) {
            a.entries[p] || (g.push(p), e++)
        });
        console.debug(`${g.length} entries to remove from the ${"local"===
b.type?"local filesystem":"remote filesystem"}`);
        if (0 == e) return c(null);
        var h = !1,
            n = "remote" === a.type ? a.storage : b.storage;
        f.sort().forEach(p => {
            "local" === b.type ? GXMFS.gk(n, p, (q, u) => {
                if (q) return d(q);
                GXMFS.rk(p, u, d)
            }) : GXMFS.fk(p, (q, u) => {
                if (q) return d(q);
                GXMFS.sk(n, p, u, d)
            })
        });
        g.sort().reverse().forEach(p => {
            "local" === b.type ? GXMFS.nk(p, d) : GXMFS.pk(n, p, d)
        })
    }
};
var Na = Object.assign({}, k),
    Oa = [],
    Pa = "./this.program",
    Qa = (a, b) => {
        throw b;
    },
    Ra = "object" == typeof window,
    Sa = "function" == typeof importScripts,
    Ta = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
    Ua = "",
    Va, Wa, Xa;
if (Ta) {
    var fs = require("fs"),
        Ya = require("path");
    Ua = Sa ? Ya.dirname(Ua) + "/" : __dirname + "/";
    Va = (a, b) => {
        a = Za(a) ? new URL(a) : Ya.normalize(a);
        return fs.readFileSync(a, b ? void 0 : "utf8")
    };
    Xa = a => {
        a = Va(a, !0);
        a.buffer || (a = new Uint8Array(a));
        return a
    };
    Wa = (a, b, c, d = !0) => {
        a = Za(a) ? new URL(a) : Ya.normalize(a);
        fs.readFile(a, d ? void 0 : "utf8", (e, f) => {
            e ? c(e) : b(d ? f.buffer : f)
        })
    };
    !k.thisProgram && 1 < process.argv.length && (Pa = process.argv[1].replace(/\\/g, "/"));
    Oa = process.argv.slice(2);
    "undefined" != typeof module && (module.exports = k);
    process.on("uncaughtException", a => {
        if (!("unwind" === a || a instanceof $a || a.context instanceof $a)) throw a;
    });
    Qa = (a, b) => {
        process.exitCode = a;
        throw b;
    };
    k.inspect = () => "[Emscripten Module object]"
} else if (Ra || Sa) Sa ? Ua = self.location.href : "undefined" != typeof document && document.currentScript && (Ua = document.currentScript.src), Ua = 0 !== Ua.indexOf("blob:") ? Ua.substr(0, Ua.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", Va = a => {
    var b = new XMLHttpRequest;
    b.open("GET", a, !1);
    b.send(null);
    return b.responseText
}, Sa && (Xa = a => {
    var b =
        new XMLHttpRequest;
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response)
}), Wa = (a, b, c) => {
    var d = new XMLHttpRequest;
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.onload = () => {
        200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
    };
    d.onerror = c;
    d.send(null)
};
var ab = k.print || console.log.bind(console),
    l = k.printErr || console.error.bind(console);
Object.assign(k, Na);
Na = null;
k.arguments && (Oa = k.arguments);
k.thisProgram && (Pa = k.thisProgram);
k.quit && (Qa = k.quit);
var bb;
k.wasmBinary && (bb = k.wasmBinary);
"object" != typeof WebAssembly && cb("no native wasm support detected");
var db, eb = !1,
    fb, D, w, gb, hb, E, F, H, ib;

function jb() {
    var a = db.buffer;
    k.HEAP8 = D = new Int8Array(a);
    k.HEAP16 = gb = new Int16Array(a);
    k.HEAPU8 = w = new Uint8Array(a);
    k.HEAPU16 = hb = new Uint16Array(a);
    k.HEAP32 = E = new Int32Array(a);
    k.HEAPU32 = F = new Uint32Array(a);
    k.HEAPF32 = H = new Float32Array(a);
    k.HEAPF64 = ib = new Float64Array(a)
}
var kb = [],
    lb = [],
    mb = [],
    nb = [],
    ob = [],
    pb = !1;

function qb() {
    var a = k.preRun.shift();
    kb.unshift(a)
}
var rb = 0,
    sb = null,
    tb = null;

function ub() {
    rb++;
    k.monitorRunDependencies && k.monitorRunDependencies(rb)
}

function vb() {
    rb--;
    k.monitorRunDependencies && k.monitorRunDependencies(rb);
    if (0 == rb && (null !== sb && (clearInterval(sb), sb = null), tb)) {
        var a = tb;
        tb = null;
        a()
    }
}

function cb(a) {
    if (k.onAbort) k.onAbort(a);
    a = "Aborted(" + a + ")";
    l(a);
    eb = !0;
    fb = 1;
    a += ". Build with -sASSERTIONS for more info.";
    pb && wb();
    throw new WebAssembly.RuntimeError(a);
}
var xb = a => a.startsWith("data:application/octet-stream;base64,"),
    Za = a => a.startsWith("file://"),
    yb;
yb = "runner.wasm";
if (!xb(yb)) {
    var zb = yb;
    yb = k.locateFile ? k.locateFile(zb, Ua) : Ua + zb
}

function Ab(a) {
    if (a == yb && bb) return new Uint8Array(bb);
    if (Xa) return Xa(a);
    throw "both async and sync fetching of the wasm failed";
}

function Bb(a) {
    if (!bb && (Ra || Sa)) {
        if ("function" == typeof fetch && !Za(a)) return fetch(a, {
            credentials: "same-origin"
        }).then(b => {
            if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
            return b.arrayBuffer()
        }).catch(() => Ab(a));
        if (Wa) return new Promise((b, c) => {
            Wa(a, d => b(new Uint8Array(d)), c)
        })
    }
    return Promise.resolve().then(() => Ab(a))
}

function Cb(a, b, c) {
    return Bb(a).then(d => WebAssembly.instantiate(d, b)).then(d => d).then(c, d => {
        l(`failed to asynchronously prepare wasm: `);
        cb(d)
    })
}

function Db(a, b) {
    var c = yb;
    bb || "function" != typeof WebAssembly.instantiateStreaming || xb(c) || Za(c) || Ta || "function" != typeof fetch ? Cb(c, a, b) : fetch(c, {
        credentials: "same-origin"
    }).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
        l(`wasm streaming compile failed: `);
        l("falling back to ArrayBuffer instantiation");
        return Cb(c, a, b)
    }))
}
var I, J, Mb = {
    1524040: () => hasJSExceptionHandler(),
    1524105: a => {
        doJSExceptionHandler(a ? x(w, a) : "")
    },
    1524149: () => document.querySelector("canvas").getBoundingClientRect().left,
    1524269: () => document.querySelector("canvas").getBoundingClientRect().top,
    1524388: () => {
        var a = document.querySelector("canvas").getBoundingClientRect();
        return a.right - a.left
    },
    1524521: () => {
        var a = document.querySelector("canvas").getBoundingClientRect();
        return a.bottom - a.top
    },
    1524654: (a, b, c, d, e, f) => {
        gxc_request_room(a ? x(w, a) : "", b ? x(w, b) :
            "", c, d, e ? x(w, e) : "", f ? x(w, f) : "")
    },
    1524756: (a, b, c, d) => {
        gxc_join_room(a ? x(w, a) : "", b ? x(w, b) : "", c ? x(w, c) : "", d ? x(w, d) : "")
    },
    1524847: () => {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "visible");
        if (a = document.getElementById("log-state-button")) a.style.visibility = "visible"
    },
    1525096: () => {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "visible");
        if (a = document.getElementById("log-state-button")) a.style.visibility = "visible"
    },
    1525345: (a, b) => {
        var c = document.getElementById("multiplayer-stats-container");
        if (c && "visible" == c.style.visibility) {
            if (c = document.getElementById("multiplayer-stats")) c.innerHTML = a ? x(w, a) : "";
            void 0 != report_stats && report_stats(b)
        }
    },
    1525669: a => {
        "function" == typeof showRollbackMessage && showRollbackMessage(a ? x(w, a) : "")
    },
    1525762: () => {
        var a = document.getElementById("stats-button");
        a && (a.style.visibility = "hidden");
        if (a = document.getElementById("share-button")) a.style.visibility = "hidden";
        if (a = document.getElementById("log-state-button")) a.style.visibility = "hidden"
    },
    1526124: (a, b) => {
        gxc_set_player_status(a,
            b ? x(w, b) : "")
    },
    1526175: a => {
        gxc_report_status(a ? x(w, a) : "")
    },
    1526216: (a, b, c) => {
        gxc_get_player_info(a ? x(w, a) : "", b ? x(w, b) : "", c ? x(w, c) : "")
    },
    1526295: (a, b) => {
        gxc_set_room_info(a, b)
    },
    1526326: (a, b, c) => {
        gxc_get_player_info(a ? x(w, a) : "", b ? x(w, b) : "", c ? x(w, c) : "")
    },
    1526405: (a, b, c) => {
        gxc_receive_chat_message(a ? x(w, a) : "", b, c)
    },
    1526461: (a, b) => webtransport_set_relay(a ? x(w, a) : "", b),
    1526518: a => {
        webtransport_destroy(a)
    },
    1526548: (a, b, c) => {
        webtransport_send(a, b, c)
    },
    1526583: (a, b, c) => webtransport_receive(a, b, c),
    1526628: a => {
        "function" == typeof wallpaper_init_config_controls && wallpaper_init_config_controls(JSON.parse(a ? x(w, a) : ""))
    },
    1526755: a => {
        "function" == typeof wallpaper_init_subscriptions && wallpaper_init_subscriptions(JSON.parse(a ? x(w, a) : ""))
    },
    1526878: a => {
        alert(a ? x(w, a) : "")
    },
    1526908: a => {
        alert(a ? x(w, a) : "")
    },
    1526937: () => clipboard_has_text(),
    1526985: () => {
        var a = clipboard_get_text(),
            b = aa(a) + 1,
            c = m(b);
        t(a, w, c, b + 1);
        return c
    },
    1527161: a => {
        clipboard_set_text(a ? x(w, a) : "")
    },
    1527204: () => {
        var a = -1;
        window.matchMedia("(orientation:portrait)").matches ?
            a = 1 : window.matchMedia("(orientation:landscape)").matches && (a = 0);
        return a
    },
    1527382: a => {
        window.open(a ? x(w, a) : "", "_blank").focus()
    },
    1527437: () => {
        var a = document.querySelector("canvas");
        null != a.Fi && (a.Fi.pause(), console.log("Pausing video player"), a.Fi.removeAttribute("src"), a.Fi.load())
    },
    1527687: (a, b, c) => {
        var d = document.querySelector("canvas");
        if (null != d.Hj) return b = d.Hj.getImageData(0, 0, b, c), b = new Uint8Array(b.data.buffer), D.set(b, a), 1;
        console.log("Not rendering video as context is null");
        return 0
    },
    1528024: () => {
        var a = document.querySelector("canvas");
        return null != a.Fi ? a.Fi.videoWidth : 0
    },
    1528171: () => {
        var a = document.querySelector("canvas");
        return null != a.Fi ? a.Fi.videoHeight : 0
    },
    1528319: () => {
        var a = document.querySelector("canvas");
        return null == a.Fi || a.Fi.ended ? -1 : 0
    },
    1528474: a => {
        var b = document.querySelector("canvas");
        null != b.Fi && (b.Fi.volume = a)
    },
    1528607: a => {
        function b() {
            function h() {
                const q = document.querySelector("canvas").Fi;
                null != q && (q.muted = !1)
            }
            var n = "mousedown",
                p = "mouseup";
            "ontouchstart" in window &&
                (n = "touchstart", p = "touchend");
            if (window.PointerEvent || window.navigator.pointerEnabled || window.navigator.msPointerEnabled) n = "pointerdown", p = "pointerup";
            document.body.addEventListener(n, h, {
                once: !0
            });
            document.body.addEventListener(p, h, {
                once: !0
            })
        }
        var c = document.querySelector("canvas");
        null == c.Fi ? c.Fi = document.createElement("video") : c.Fi.pause();
        const d = c.Fi;
        a = a ? x(w, a) : "";
        d.muted = !1;
        d.src = a;
        const e = {
                Jl: k.cwrap("video_playback_ended", "", "")
            },
            f = {
                Kl: k.cwrap("video_playback_started", "", "")
            };
        d.addEventListener("ended",
            function () {
                e.Jl()
            });
        d.addEventListener("playing", function () {
            console.log("Video playing event called");
            f.Kl()
        }, !0);
        const g = () => {
            var h = document.querySelector("canvas");
            null == h.Vi ? (h.Vi = document.createElement("canvas"), h.Vi.style.cssText = "position:fixed; top:1px; left:1px; width:1px; height:1px", h.Vi.width = d.videoWidth, h.Vi.height = d.videoHeight, document.body.appendChild(h.Vi), h.Hj = h.Vi.getContext("2d", {
                alpha: !1,
                Ql: !1,
                powerPreference: "low-power",
                desynchronized: !0,
                preserveDrawingBuffer: !0
            })) : (d.videoWidth !=
                h.Vi.width && (h.Vi.width = d.videoWidth), h.Vi.height != d.videoHeight && (h.Vi.height = d.videoHeight));
            null != h.Fi && null != h.Hj && h.Hj.drawImage(h.Fi, 0, 0);
            null != h.Fi && (null != h.Fi.src ? h.Fi.requestVideoFrameCallback(g) : console.log("stopping video player callback check"))
        };
        d.requestVideoFrameCallback(g);
        d.load();
        a = d.play();
        void 0 !== a && a.then(() => {}).catch(() => {
            console.log("video_open failed. User must interact with the page before video with audio can be played. Attempting to play the video muted");
            d.muted = !0;
            d.play();
            b()
        })
    },
    1531677: () => {
        var a = document.querySelector("canvas");
        null != a.Fi && a.Fi.pause()
    },
    1531808: () => {
        var a = document.querySelector("canvas");
        null != a.Fi && a.Fi.play()
    },
    1531938: a => {
        var b = document.querySelector("canvas");
        null != b.Fi && (b.Fi.loop = .5 < a ? !0 : !1)
    },
    1532131: a => {
        var b = document.querySelector("canvas");
        null != b.Fi && (b.Fi.currentTime = a)
    },
    1532271: () => {
        var a = document.querySelector("canvas");
        return null == a.Fi || isNaN(a.Fi.duration) ? 0 : a.Fi.duration
    },
    1532466: () => {
        var a = document.querySelector("canvas");
        return null != a.Fi ? a.Fi.currentTime : 0
    },
    1532618: () => {
        var a = document.querySelector("canvas");
        return null != a.Fi ? a.Fi.ended ? 0 : a.Fi.paused ? 3 : a.Fi.readyState < a.Fi.HAVE_CURRENT_DATA ? 1 : 2 : 0
    },
    1533138: () => {
        var a = document.querySelector("canvas");
        return null != a.Fi ? a.Fi.loop : 0
    },
    1533283: () => {
        var a = document.querySelector("canvas");
        return null != a.Fi ? a.Fi.volume : 0
    },
    1533430: (a, b, c, d) => {
        var e = document.querySelector("canvas");
        if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
            console.log("CheckMediaRecorder::vp9 supported");
            var f = {
                mimeType: "video/webm; codecs=vp9"
            }
        } else MediaRecorder.isTypeSupported("video/webm;codecs=vp8") ? (f = {
            mimeType: "video/webm; codecs=vp8"
        }, console.log("CheckMediaRecorder::vp8 supported")) : console.log("CheckMediaRecorder::No vp8 or vp9 support");
        e.yk = e.captureStream(c);
        e.yk.getVideoTracks().find(g => g.enabled);
        null == e.bj && (e.bj = document.createElement("canvas"), e.bj.style.cssText = "position:fixed; top:1px; left:1px; width:1px; height:1px", e.bj.width = a, e.bj.height = b, document.body.appendChild(e.bj),
            console.log("Game Canvas width:" + e.width + " height:" + e.height), e.Vk = e.bj.getContext("2d", {
                alpha: !1,
                desynchronized: !0,
                antialias: !0,
                powerPreference: "low-power",
                preserveDrawingBuffer: !0
            }), e.mj = document.createElement("video"), e.mj.autoplay = !0, e.mj.Nl = !0, e.mj.muted = !0, e.mj.style.cssText = "position:fixed;top:1px;left:1px;width:1px;height:1px", document.body.appendChild(e.mj), e.mj.srcObject = e.yk, a = e.bj.captureStream(c), 0 < d && (d = da.createMediaStreamDestination().stream.getAudioTracks().find(g => g.enabled), a.addTrack(d)),
            f = new MediaRecorder(a, f), e.ej = [], f.ondataavailable = function (g) {
                e.ej.push(g.data)
            }, e.Li = f);
        null == e.Wj && (e.Wj = setInterval(() => e.Vk.drawImage(e.mj, 0, 0, e.width, e.height, 0, 0, e.bj.width, e.bj.height), 1E3 / c));
        e.Li && "recording" != e.Li.state && e.Li.start()
    },
    1535926: a => {
        var b = document.querySelector("canvas");
        if (b.Li && ("recording" == b.Li.state || "paused" == b.Li.state)) {
            var c = a ? x(w, a) : "";
            b.Li.onstop = function () {
                var d = new Blob(b.ej, {
                    type: "video/webm"
                });
                b.ej = [];
                clearInterval(b.Wj);
                b.Wj = null;
                const e = {
                    jk: k.cwrap("post_video_upload_callback",
                        "", ["string"])
                };
                if (c.startsWith("http")) fetch(c, {
                    method: "PUT",
                    body: d
                }).then(() => {
                    e.jk("upload completed")
                }).catch(g => {
                    e.jk("Error uploading: " + g)
                });
                else if ("" != c) {
                    d = URL.createObjectURL(d);
                    var f = document.createElement("a");
                    document.body.appendChild(f);
                    f.style = "display: none";
                    f.href = d;
                    f.download = c;
                    f.click();
                    window.URL.revokeObjectURL(d);
                    e.jk("filesaved")
                }
            };
            b.Li.stop();
            console.log("saving chunks to movie")
        }
    },
    1537070: () => {
        var a = document.querySelector("canvas");
        a.Li && "recording" == a.Li.state && a.Li.pause()
    },
    1537240: () => {
        var a = document.querySelector("canvas");
        a.Li && "paused" == a.Li.state && a.Li.resume()
    },
    1537408: (a, b, c, d, e, f) => {
        triggerAd(a ? x(w, a) : "", b, c, d, e, f)
    },
    1537461: (a, b) => {
        triggerPayment(a ? x(w, a) : "", b)
    },
    1537503: () => {
        Eb(!0, function () {
            Fb("GXC_FSSyncCompleted", "void")
        })
    },
    1537578: () => {
        var a = 640;
        "number" == typeof window.innerWidth ? a = window.innerWidth * window.devicePixelRatio : document.documentElement && document.documentElement.clientWidth ? a = document.documentElement.clientWidth : document.body && document.body.clientWidth &&
            (a = document.body.clientWidth);
        return a
    },
    1537910: () => {
        var a = void 0;
        "number" == typeof window.innerHeight ? a = window.innerHeight * window.devicePixelRatio : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && document.body.clientHeight && (a = document.body.clientHeight);
        if (void 0 === a) return 480;
        var b = document.querySelector(".output-button");
        null != b && (a -= b.offsetHeight + 16);
        return a
    },
    1538404: (a, b, c, d) => {
        var e = -1;
        if (void 0 != window.oprt) {
            var f = window.oprt.unlockOrientation,
                g = window.oprt.lockPortraitOrientation,
                h = window.oprt.lockLandscapeOrientation;
            a = (a ? 1 : 0) | (b ? 2 : 0) | (c ? 4 : 0);
            a |= d ? 8 : 0;
            15 != (a & 15) && 0 != a || void 0 == f || "function" != typeof f || (f(), console.log("unlocking all orientations"));
            0 != (a & 5) && void 0 != h && "function" == typeof h ? (h(), console.log("Locking to Landscape"), e = 0) : 0 != (a & 10) && void 0 != g && "function" == typeof g && (g(), console.log("Locking to Portrait"), e = 0)
        }
        return e
    },
    1539392: a => {
        a ? void 0 != window.oprt && void 0 != window.oprt.enterFullscreen ? (console.log("enterFullscreen"),
            window.oprt.enterFullscreen()) : (console.log("canvas requesting enterFullscreen"), document.querySelector("canvas").requestFullscreen()) : void 0 != window.oprt && void 0 != window.oprt.exitFullscreen ? (console.log("exitFullscreen"), window.oprt.exitFullscreen()) : (console.log("exitFullscreen via document"), document.exitFullscreen())
    },
    1539920: () => screen.width,
    1539945: () => screen.height,
    1539971: a => {
        document.title = a ? x(w, a) : ""
    },
    1540010: (a, b) => {
        this.onGameSetWindowSize && onGameSetWindowSize(a, b)
    },
    1540079: a => {
        document.querySelector("canvas").style.cursor =
            a ? x(w, a) : ""
    },
    1540178: () => screen.width,
    1540203: () => screen.height,
    1540229: () => screen.width,
    1540254: () => screen.height,
    1540280: () => {
        var a = document.getElementById("canvas");
        const b = a.style.visibility;
        a.style.visibility = "hidden";
        a.offsetHeight;
        a.style.visibility = b
    },
    1540518: (a, b) => {
        g_pWadLoadCallback && g_pWadLoadCallback(a, b)
    },
    1540578: () => {
        var a = manifestFiles(),
            b = aa(a) + 1,
            c = m(b);
        t(a, w, c, b);
        return c
    },
    1540734: a => __gx_check_cache(a ? x(w, a) : "", !0) ? 1 : 0,
    1540796: (a, b, c, d, e, f, g, h) => {
        __gx_async_wget2(a ? x(w, a) : "", b ?
            x(w, b) : "", c ? x(w, c) : "", d, e, f, g, h)
    },
    1540893: a => {
        setAddAsyncMethod(a)
    },
    1540920: (a, b, c, d) => {
        __gx_prepare_cache(c ? x(w, c) : "").then(e => {
            console.log("Prepare cache completed" + JSON.stringify(e));
            k.dynCall("vi", a, [b])
        }).catch(e => {
            console.log("Prepare cache error " + e);
            k.dynCall("vi", a, [d])
        })
    },
    1541200: a => __gx_check_cache(a ? x(w, a) : "", !1) ? 1 : 0,
    1541261: (a, b) => {
        g_pWadLoadCallback && g_pWadLoadCallback(a, b)
    },
    1541321: a => {
        window.location.replace(a ? x(w, a) : "")
    },
    1541368: () => {
        this.onFirstFrameRendered && onFirstFrameRendered()
    },
    1541431: (a, b) => {
        this.chrome && this.chrome.runtime && chrome.runtime.sendMessage(a ? x(w, a) : "", {
            command: b ? x(w, b) : ""
        })
    },
    1541568: (a, b, c, d, e) => {
        function f(h) {
            if (h.hash) {
                var n = 0;
                (new Uint8Array(h.hash)).every(p => {
                    n = n + p & 255;
                    return !0
                });
                g.Wk(n, b)
            }
        }
        const g = {
            Wk: k.cwrap("YYSum", "", ["number", "number"])
        };
        this.chrome && this.chrome.runtime && (e = w.subarray(e, e + 20), a = a ? x(w, a) : "", chrome.runtime.sendMessage(c ? x(w, c) : "", {
            command: d ? x(w, d) : "",
            randomString: a,
            hash: e
        }, f))
    },
    1542128: () => window.matchMedia("(any-hover: none)").matches ||
        window.matchMedia("(any-hover: hover) and (pointer: coarse)").matches || "undefined" != typeof window.oprt,
    1542301: (a, b, c, d, e, f, g) => {
        qa = a;
        ra = b;
        ua = c;
        va = d;
        sa = e;
        ta = f;
        pa = g
    },
    1542464: (a, b) => {
        a = prompt(a ? x(w, a) : "", b ? x(w, b) : "");
        b = aa(a) + 1;
        var c = m(b);
        t(a, w, c, b + 1);
        return c
    },
    1542660: a => confirm(a ? x(w, a) : "") ? 1 : 0,
    1542707: (a, b) => {
        a = prompt(a ? x(w, a) : "", b ? x(w, b) : "");
        b = 1;
        a ? b += aa(a) : a = "";
        var c = m(b);
        t(a, w, c, b + 1);
        return c
    },
    1542938: a => confirm(a ? x(w, a) : "") ? 1 : 0,
    1542985: a => {
        alert(a ? x(w, a) : "")
    },
    1543015: () => {
        Gb("/_savedata");
        window.oprt &&
            window.oprt.gameStorage ? Hb(GXMFS, "/_savedata") : Hb(L, "/_savedata");
        Eb(!0, function () {
            Fb("FSSyncCompleted", "void")
        })
    },
    1543237: () => {
        Eb(!1, function () {})
    },
    1543275: () => {
        Eb(!1, function () {})
    },
    1543312: () => {
        Eb(!1, function () {})
    },
    1543350: () => {
        da = new AudioContext;
        document.addEventListener("visibilitychange", ma)
    },
    1543472: () => {
        da.close().then(function () {
            da = null;
            document.removeEventListener("visibilitychange", ma)
        })
    },
    1543631: () => {
        function a() {
            da.resume().then(function () {
                document.body.removeEventListener(b, a);
                document.body.removeEventListener(c,
                    a)
            })
        }
        let b = "mousedown",
            c = "mouseup";
        "ontouchstart" in window && (b = "touchstart", c = "touchend");
        if (window.PointerEvent || window.navigator.pointerEnabled || window.navigator.msPointerEnabled) b = "pointerdown", c = "pointerup";
        document.body.addEventListener(b, a);
        document.body.addEventListener(c, a)
    },
    1544335: () => {
        da.suspend()
    },
    1544368: () => null != da,
    1544408: () => {
        if (null == da) return 4;
        switch (da.state) {
            case "suspended":
                return 0;
            case "running":
                return 1;
            case "closed":
                return 2;
            case "interrupted":
                return 3
        }
    },
    1544602: () => null ==
        da ? 0 : da.currentTime,
    1544680: () => null == da ? 0 : da.sampleRate,
    1544757: () => null == da ? 0 : da.destination.channelCount,
    1544846: (a, b, c, d, e, f) => {
        e = da.createBuffer(b, d, e);
        for (let g = 0; g < b; ++g) {
            const h = e.getChannelData(g);
            for (let n = 0; n < d; ++n) h[n] = Ib(a + c * (g + n * b), "float")
        }
        a = da.createBufferSource();
        a.buffer = e;
        a.connect(da.destination);
        a.start(f);
        return f + e.duration
    },
    1545492: a => {
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia && navigator.mediaDevices.getUserMedia({
            audio: !0
        }).then(b => {
            const c = d => {
                d = d.getAudioTracks();
                if (0 < d.length) return d[0].getSettings().channelCount
            };
            ia = b;
            ja = new AudioContext({
                sampleRate: a
            });
            ja.audioWorklet.addModule("audio-worklet.js").then(() => {
                ka = new AudioWorkletNode(ja, "audio-worklet");
                ka.port.onmessage = e => {
                    ea.push(e.data)
                };
                ha = new MediaStreamAudioSourceNode(ja, {
                    mediaStream: b
                });
                const d = c(b);
                1 < d ? (la = new ChannelMergerNode(ja, {
                    numberOfInputs: d
                }), ha.connect(la), la.connect(ka)) : ha.connect(ka);
                ja.resume()
            }).catch(d => {
                console.error(d);
                ia && ia.getTracks().forEach(e => {
                    e.stop()
                });
                la = ha = ka = ia = ja = null
            })
        }).catch(b => {
            console.error(b)
        })
    },
    1547269: () => {
        ea = [];
        ia.getTracks().forEach(a => {
            a.stop()
        });
        ka.port.postMessage(!0);
        ha.disconnect();
        ha = null;
        null != la && (la.disconnect(), la = null);
        ka.disconnect();
        ka = null;
        ja.close().then(() => {
            ja = null
        }).catch(a => {
            console.error(a)
        })
    },
    1547861: (a, b, c) => {
        b /= c;
        for (let d = 0; d < b; ++d) {
            const e = ea.shift();
            for (let f = 0; f < c; ++f) Jb(a + 2 * (d * c + f), e[f], "i16")
        }
    },
    1548205: a => ea.length * a,
    1548291: () => null != ha && null != ka ? 1 : 0,
    1548404: () => "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ?
        !0 : !1,
    1548551: () => "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1,
    1548785: a => {
        "undefined" === typeof k.SDL2 && (k.SDL2 = {});
        var b = k.SDL2;
        a ? b.capture = {} : b.audio = {};
        b.Mi || ("undefined" !== typeof AudioContext ? b.Mi = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.Mi = new webkitAudioContext), b.Mi && Kb(b.Mi));
        return void 0 === b.Mi ? -1 : 0
    },
    1549278: () => k.SDL2.Mi.sampleRate,
    1549346: (a, b, c, d) => {
        function e() {}

        function f(h) {
            void 0 !== g.capture.Ej && (clearTimeout(g.capture.Ej), g.capture.Ej = void 0);
            g.capture.Oj = g.Mi.createMediaStreamSource(h);
            g.capture.Pi = g.Mi.createScriptProcessor(b, a, 1);
            g.capture.Pi.onaudioprocess = function (n) {
                void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0), g.capture.Zj = n.inputBuffer, Lb("vi", c, [d]))
            };
            g.capture.Oj.connect(g.capture.Pi);
            g.capture.Pi.connect(g.Mi.destination);
            g.capture.stream = h
        }
        var g = k.SDL2;
        g.capture.Rj = g.Mi.createBuffer(a, b, g.Mi.sampleRate);
        g.capture.Rj.getChannelData(0).fill(0);
        g.capture.Ej = setTimeout(function () {
            g.capture.Zj = g.capture.Rj;
            Lb("vi", c, [d])
        }, b / g.Mi.sampleRate * 1E3);
        void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
            audio: !0,
            video: !1
        }).then(f).catch(e) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
            audio: !0,
            video: !1
        }, f, e)
    },
    1550998: (a, b, c, d) => {
        var e = k.SDL2;
        e.audio.Pi = e.Mi.createScriptProcessor(b, 0, a);
        e.audio.Pi.onaudioprocess = function (f) {
            void 0 !== e && void 0 !== e.audio && (e.audio.Fk =
                f.outputBuffer, Lb("vi", c, [d]))
        };
        e.audio.Pi.connect(e.Mi.destination)
    },
    1551408: (a, b) => {
        for (var c = k.SDL2, d = c.capture.Zj.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.capture.Zj.getChannelData(e);
            if (f.length != b) throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            if (1 == d)
                for (var g = 0; g < b; ++g) Jb(a + 4 * g, f[g], "float");
            else
                for (g = 0; g < b; ++g) Jb(a + 4 * (g * d + e), f[g], "float")
        }
    },
    1552013: (a, b) => {
        for (var c = k.SDL2, d = c.audio.Fk.numberOfChannels, e = 0; e < d; ++e) {
            var f = c.audio.Fk.getChannelData(e);
            if (f.length != b) throw "Web Audio output buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
            for (var g = 0; g < b; ++g) f[g] = H[a + (g * d + e << 2) >> 2]
        }
    },
    1552493: a => {
        var b = k.SDL2;
        if (a) {
            void 0 !== b.capture.Ej && clearTimeout(b.capture.Ej);
            if (void 0 !== b.capture.stream) {
                a = b.capture.stream.getAudioTracks();
                for (var c = 0; c < a.length; c++) b.capture.stream.removeTrack(a[c]);
                b.capture.stream = void 0
            }
            void 0 !== b.capture.Pi && (b.capture.Pi.onaudioprocess = function () {}, b.capture.Pi.disconnect(), b.capture.Pi =
                void 0);
            void 0 !== b.capture.Oj && (b.capture.Oj.disconnect(), b.capture.Oj = void 0);
            void 0 !== b.capture.Rj && (b.capture.Rj = void 0);
            b.capture = void 0
        } else void 0 != b.audio.Pi && (b.audio.Pi.disconnect(), b.audio.Pi = void 0), b.audio = void 0;
        void 0 !== b.Mi && void 0 === b.audio && void 0 === b.capture && (b.Mi.close(), b.Mi = void 0)
    },
    1553665: (a, b, c) => {
        k.SDL2 || (k.SDL2 = {});
        var d = k.SDL2;
        d.$k !== k.canvas && (d.Xi = k.createContext(k.canvas, !1, !0), d.$k = k.canvas);
        if (d.w !== a || d.h !== b || d.ol !== d.Xi) d.image = d.Xi.createImageData(a, b), d.w = a, d.h =
            b, d.ol = d.Xi;
        a = d.image.data;
        b = c >> 2;
        var e = 0;
        if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
            for (c = a.length; e < c;) {
                var f = E[b];
                a[e] = f & 255;
                a[e + 1] = f >> 8 & 255;
                a[e + 2] = f >> 16 & 255;
                a[e + 3] = 255;
                b++;
                e += 4
            } else if (d.cl !== a && (d.bl = new Int32Array(a.buffer), d.dl = new Uint8Array(a.buffer), d.cl = a), a = d.bl, c = a.length, a.set(E.subarray(b, b + c)), a = d.dl, b = 3, e = b + 4 * c, 0 == c % 8)
                for (; b < e;) a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255,
                    b = b + 4 | 0;
            else
                for (; b < e;) a[b] = 255, b = b + 4 | 0;
        d.Xi.putImageData(d.image, 0, 0)
    },
    1555134: (a, b, c, d, e) => {
        var f = document.createElement("canvas");
        f.width = a;
        f.height = b;
        var g = f.getContext("2d");
        a = g.createImageData(a, b);
        b = a.data;
        e >>= 2;
        var h = 0,
            n;
        if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
            for (n = b.length; h < n;) {
                var p = E[e];
                b[h] = p & 255;
                b[h + 1] = p >> 8 & 255;
                b[h + 2] = p >> 16 & 255;
                b[h + 3] = p >> 24 & 255;
                e++;
                h += 4
            } else b = new Int32Array(b.buffer), n = b.length, b.set(E.subarray(e, e + n));
        g.putImageData(a, 0, 0);
        c = 0 === c &&
            0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
        d = m(c.length + 1);
        t(c, w, d, c.length + 1);
        return d
    },
    1556123: a => {
        k.canvas && (k.canvas.style.cursor = a ? x(w, a) : "")
    },
    1556206: () => {
        k.canvas && (k.canvas.style.cursor = "none")
    },
    1556275: () => window.innerWidth,
    1556305: () => window.innerHeight
};

function $a(a) {
    this.name = "ExitStatus";
    this.message = `Program terminated with exit()`;
    this.status = a
}
var Nb = (a, b, c) => {
        a.addEventListener(b, c, {
            once: !0
        })
    },
    Kb = a => {
        var b;
        b || (b = [document, document.getElementById("canvas")]);
        ["keydown", "mousedown", "touchstart"].forEach(c => {
            b.forEach(d => {
                d && Nb(d, c, () => {
                    "suspended" === a.state && a.resume()
                })
            })
        })
    },
    Ob = a => {
        for (; 0 < a.length;) a.shift()(k)
    },
    Pb = [],
    Qb, M = a => {
        var b = Pb[a];
        b || (a >= Pb.length && (Pb.length = a + 1), Pb[a] = b = Qb.get(a));
        return b
    },
    Lb = (a, b, c) => {
        a.includes("j") ? (a = k["dynCall_" + a], b = c && c.length ? a.apply(null, [b].concat(c)) : a.call(null, b)) : b = M(b).apply(null, c);
        return b
    };

function Ib(a, b = "i8") {
    b.endsWith("*") && (b = "*");
    switch (b) {
        case "i1":
            return D[a >> 0];
        case "i8":
            return D[a >> 0];
        case "i16":
            return gb[a >> 1];
        case "i32":
            return E[a >> 2];
        case "i64":
            cb("to do getValue(i64) use WASM_BIGINT");
        case "float":
            return H[a >> 2];
        case "double":
            return ib[a >> 3];
        case "*":
            return F[a >> 2];
        default:
            cb(`invalid type for getValue: `)
    }
}
var Rb = k.noExitRuntime || !0;

function Jb(a, b, c = "i8") {
    c.endsWith("*") && (c = "*");
    switch (c) {
        case "i1":
            D[a >> 0] = b;
            break;
        case "i8":
            D[a >> 0] = b;
            break;
        case "i16":
            gb[a >> 1] = b;
            break;
        case "i32":
            E[a >> 2] = b;
            break;
        case "i64":
            cb("to do setValue(i64) use WASM_BIGINT");
        case "float":
            H[a >> 2] = b;
            break;
        case "double":
            ib[a >> 3] = b;
            break;
        case "*":
            F[a >> 2] = b;
            break;
        default:
            cb(`invalid type for setValue: `)
    }
}
var Sb = (a, b) => {
        for (var c = 0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d];
            "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
        }
        if (b)
            for (; c; c--) a.unshift("..");
        return a
    },
    Ca = a => {
        var b = "/" === a.charAt(0),
            c = "/" === a.substr(-1);
        (a = Sb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a
    },
    Tb = a => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b
    },
    Ub = a => {
        if ("/" === a) return "/";
        a = Ca(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1)
    },
    Vb = () => {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return c => crypto.getRandomValues(c);
        if (Ta) try {
            var a = require("crypto");
            if (a.randomFillSync) return c => a.randomFillSync(c);
            var b = a.randomBytes;
            return c => (c.set(b(c.byteLength)), c)
        } catch (c) {}
        cb("initRandomDevice")
    },
    Wb = a => (Wb = Vb())(a);

function Xb() {
    for (var a = "", b = !1, c = arguments.length - 1; - 1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : Zb;
        if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = Sb(a.split("/").filter(d => !!d), !b).join("/");
    return (b ? "/" : "") + a || "."
}
var $b = (a, b) => {
        function c(g) {
            for (var h = 0; h < g.length && "" === g[h]; h++);
            for (var n = g.length - 1; 0 <= n && "" === g[n]; n--);
            return h > n ? [] : g.slice(h, n - h + 1)
        }
        a = Xb(a).substr(1);
        b = Xb(b).substr(1);
        a = c(a.split("/"));
        b = c(b.split("/"));
        for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++)
            if (a[f] !== b[f]) {
                e = f;
                break
            } d = [];
        for (f = e; f < a.length; f++) d.push("..");
        d = d.concat(b.slice(e));
        return d.join("/")
    },
    ac = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
    x = (a, b, c) => {
        var d = b + c;
        for (c = b; a[c] && !(c >= d);) ++c;
        if (16 < c - b &&
            a.buffer && ac) return ac.decode(a.subarray(b, c));
        for (d = ""; b < c;) {
            var e = a[b++];
            if (e & 128) {
                var f = a[b++] & 63;
                if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | f);
                else {
                    var g = a[b++] & 63;
                    e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                    65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
                }
            } else d += String.fromCharCode(e)
        }
        return d
    },
    bc = [],
    aa = a => {
        for (var b = 0, c = 0; c < a.length; ++c) {
            var d = a.charCodeAt(c);
            127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3
        }
        return b
    },
    t = (a, b, c, d) => {
        if (!(0 < d)) return 0;
        var e = c;
        d = c + d - 1;
        for (var f = 0; f < a.length; ++f) {
            var g = a.charCodeAt(f);
            if (55296 <= g && 57343 >= g) {
                var h = a.charCodeAt(++f);
                g = 65536 + ((g & 1023) << 10) | h & 1023
            }
            if (127 >= g) {
                if (c >= d) break;
                b[c++] = g
            } else {
                if (2047 >= g) {
                    if (c + 1 >= d) break;
                    b[c++] = 192 | g >> 6
                } else {
                    if (65535 >= g) {
                        if (c + 2 >= d) break;
                        b[c++] = 224 | g >> 12
                    } else {
                        if (c + 3 >= d) break;
                        b[c++] = 240 | g >> 18;
                        b[c++] = 128 | g >> 12 & 63
                    }
                    b[c++] = 128 | g >> 6 & 63
                }
                b[c++] = 128 | g & 63
            }
        }
        b[c] = 0;
        return c - e
    };

function cc(a, b) {
    var c = Array(aa(a) + 1);
    a = t(a, c, 0, c.length);
    b && (c.length = a);
    return c
}
var dc = [];

function ec(a, b) {
    dc[a] = {
        input: [],
        output: [],
        dj: b
    };
    fc(a, gc)
}
var gc = {
        open(a) {
            var b = dc[a.node.rdev];
            if (!b) throw new O(43);
            a.tty = b;
            a.seekable = !1
        },
        close(a) {
            a.tty.dj.fsync(a.tty)
        },
        fsync(a) {
            a.tty.dj.fsync(a.tty)
        },
        read(a, b, c, d) {
            if (!a.tty || !a.tty.dj.Ik) throw new O(60);
            for (var e = 0, f = 0; f < d; f++) {
                try {
                    var g = a.tty.dj.Ik(a.tty)
                } catch (h) {
                    throw new O(29);
                }
                if (void 0 === g && 0 === e) throw new O(6);
                if (null === g || void 0 === g) break;
                e++;
                b[c + f] = g
            }
            e && (a.node.timestamp = Date.now());
            return e
        },
        write(a, b, c, d) {
            if (!a.tty || !a.tty.dj.kk) throw new O(60);
            try {
                for (var e = 0; e < d; e++) a.tty.dj.kk(a.tty, b[c +
                    e])
            } catch (f) {
                throw new O(29);
            }
            d && (a.node.timestamp = Date.now());
            return e
        }
    },
    hc = {
        Ik() {
            a: {
                if (!bc.length) {
                    var a = null;
                    if (Ta) {
                        var b = Buffer.alloc(256),
                            c = 0,
                            d = process.stdin.fd;
                        try {
                            c = fs.readSync(d, b)
                        } catch (e) {
                            if (e.toString().includes("EOF")) c = 0;
                            else throw e;
                        }
                        0 < c ? a = b.slice(0, c).toString("utf-8") : a = null
                    } else "undefined" != typeof window && "function" == typeof window.prompt ? (a = window.prompt("Input: "), null !== a && (a += "\n")) : "function" == typeof readline && (a = readline(), null !== a && (a += "\n"));
                    if (!a) {
                        a = null;
                        break a
                    }
                    bc = cc(a, !0)
                }
                a =
                bc.shift()
            }
            return a
        },
        kk(a, b) {
            null === b || 10 === b ? (ab(x(a.output, 0)), a.output = []) : 0 != b && a.output.push(b)
        },
        fsync(a) {
            a.output && 0 < a.output.length && (ab(x(a.output, 0)), a.output = [])
        },
        rl() {
            return {
                Ul: 25856,
                Wl: 5,
                Tl: 191,
                Vl: 35387,
                Sl: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        },
        sl() {
            return 0
        },
        tl() {
            return [24, 80]
        }
    },
    ic = {
        kk(a, b) {
            null === b || 10 === b ? (l(x(a.output, 0)), a.output = []) : 0 != b && a.output.push(b)
        },
        fsync(a) {
            a.output && 0 < a.output.length && (l(x(a.output, 0)), a.output = [])
        }
    };

function Ga(a) {
    return a.Hi ? a.Hi.subarray ? a.Hi.subarray(0, a.Ji) : new Uint8Array(a.Hi) : new Uint8Array(0)
}

function jc(a, b) {
    var c = a.Hi ? a.Hi.length : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Hi, a.Hi = new Uint8Array(b), 0 < a.Ji && a.Hi.set(c.subarray(0, a.Ji), 0))
}
var z = {
        $i: null,
        Ni() {
            return z.createNode(null, "/", 16895, 0)
        },
        createNode(a, b, c, d) {
            if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new O(63);
            z.$i || (z.$i = {
                dir: {
                    node: {
                        Zi: z.Gi.Zi,
                        Qi: z.Gi.Qi,
                        lookup: z.Gi.lookup,
                        Pj: z.Gi.Pj,
                        rename: z.Gi.rename,
                        unlink: z.Gi.unlink,
                        rmdir: z.Gi.rmdir,
                        readdir: z.Gi.readdir,
                        symlink: z.Gi.symlink
                    },
                    stream: {
                        qj: z.Ii.qj
                    }
                },
                file: {
                    node: {
                        Zi: z.Gi.Zi,
                        Qi: z.Gi.Qi
                    },
                    stream: {
                        qj: z.Ii.qj,
                        read: z.Ii.read,
                        write: z.Ii.write,
                        Ij: z.Ii.Ij,
                        hk: z.Ii.hk,
                        Ok: z.Ii.Ok
                    }
                },
                link: {
                    node: {
                        Zi: z.Gi.Zi,
                        Qi: z.Gi.Qi,
                        readlink: z.Gi.readlink
                    },
                    stream: {}
                },
                Ek: {
                    node: {
                        Zi: z.Gi.Zi,
                        Qi: z.Gi.Qi
                    },
                    stream: kc
                }
            });
            c = lc(a, b, c, d);
            C(c.mode) ? (c.Gi = z.$i.dir.node, c.Ii = z.$i.dir.stream, c.Hi = {}) : 32768 === (c.mode & 61440) ? (c.Gi = z.$i.file.node, c.Ii = z.$i.file.stream, c.Ji = 0, c.Hi = null) : 40960 === (c.mode & 61440) ? (c.Gi = z.$i.link.node, c.Ii = z.$i.link.stream) : 8192 === (c.mode & 61440) && (c.Gi = z.$i.Ek.node, c.Ii = z.$i.Ek.stream);
            c.timestamp = Date.now();
            a && (a.Hi[b] = c, a.timestamp = c.timestamp);
            return c
        },
        Gi: {
            Zi(a) {
                var b = {};
                b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
                b.ino = a.id;
                b.mode = a.mode;
                b.nlink =
                    1;
                b.uid = 0;
                b.gid = 0;
                b.rdev = a.rdev;
                C(a.mode) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Ji : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                b.atime = new Date(a.timestamp);
                b.mtime = new Date(a.timestamp);
                b.ctime = new Date(a.timestamp);
                b.Zk = 4096;
                b.blocks = Math.ceil(b.size / b.Zk);
                return b
            },
            Qi(a, b) {
                void 0 !== b.mode && (a.mode = b.mode);
                void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                if (void 0 !== b.size && (b = b.size, a.Ji != b))
                    if (0 == b) a.Hi = null, a.Ji = 0;
                    else {
                        var c = a.Hi;
                        a.Hi = new Uint8Array(b);
                        c && a.Hi.set(c.subarray(0,
                            Math.min(b, a.Ji)));
                        a.Ji = b
                    }
            },
            lookup() {
                throw mc[44];
            },
            Pj(a, b, c, d) {
                return z.createNode(a, b, c, d)
            },
            rename(a, b, c) {
                if (C(a.mode)) {
                    try {
                        var d = nc(b, c)
                    } catch (f) {}
                    if (d)
                        for (var e in d.Hi) throw new O(55);
                }
                delete a.parent.Hi[a.name];
                a.parent.timestamp = Date.now();
                a.name = c;
                b.Hi[c] = a;
                b.timestamp = a.parent.timestamp;
                a.parent = b
            },
            unlink(a, b) {
                delete a.Hi[b];
                a.timestamp = Date.now()
            },
            rmdir(a, b) {
                var c = nc(a, b),
                    d;
                for (d in c.Hi) throw new O(55);
                delete a.Hi[b];
                a.timestamp = Date.now()
            },
            readdir(a) {
                var b = [".", ".."],
                    c;
                for (c in a.Hi) a.Hi.hasOwnProperty(c) &&
                    b.push(c);
                return b
            },
            symlink(a, b, c) {
                a = z.createNode(a, b, 41471, 0);
                a.link = c;
                return a
            },
            readlink(a) {
                if (40960 !== (a.mode & 61440)) throw new O(28);
                return a.link
            }
        },
        Ii: {
            read(a, b, c, d, e) {
                var f = a.node.Hi;
                if (e >= a.node.Ji) return 0;
                a = Math.min(a.node.Ji - e, d);
                if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
                else
                    for (d = 0; d < a; d++) b[c + d] = f[e + d];
                return a
            },
            write(a, b, c, d, e, f) {
                b.buffer === D.buffer && (f = !1);
                if (!d) return 0;
                a = a.node;
                a.timestamp = Date.now();
                if (b.subarray && (!a.Hi || a.Hi.subarray)) {
                    if (f) return a.Hi = b.subarray(c, c + d), a.Ji =
                        d;
                    if (0 === a.Ji && 0 === e) return a.Hi = b.slice(c, c + d), a.Ji = d;
                    if (e + d <= a.Ji) return a.Hi.set(b.subarray(c, c + d), e), d
                }
                jc(a, e + d);
                if (a.Hi.subarray && b.subarray) a.Hi.set(b.subarray(c, c + d), e);
                else
                    for (f = 0; f < d; f++) a.Hi[e + f] = b[c + f];
                a.Ji = Math.max(a.Ji, e + d);
                return d
            },
            qj(a, b, c) {
                1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ji);
                if (0 > b) throw new O(28);
                return b
            },
            Ij(a, b, c) {
                jc(a.node, b + c);
                a.node.Ji = Math.max(a.node.Ji, b + c)
            },
            hk(a, b, c, d, e) {
                if (32768 !== (a.node.mode & 61440)) throw new O(43);
                a = a.node.Hi;
                if (e & 2 ||
                    a.buffer !== D.buffer) {
                    if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                    c = !0;
                    cb();
                    b = void 0;
                    if (!b) throw new O(48);
                    D.set(a, b)
                } else c = !1, b = a.byteOffset;
                return {
                    Dj: b,
                    tj: c
                }
            },
            Ok(a, b, c, d) {
                z.Ii.write(a, b, 0, d, c, !1);
                return 0
            }
        }
    },
    oc = (a, b, c) => {
        var d = `al `;
        Wa(a, e => {
            e || cb(`Loading data file "" failed (no arrayBuffer).`);
            b(new Uint8Array(e));
            d && vb(d)
        }, () => {
            if (c) c();
            else throw `Loading data file "" failed.`;
        });
        d && ub(d)
    },
    pc = k.preloadPlugins || [],
    sc = (a, b, c, d) => {
        "undefined" !=
        typeof qc && rc();
        var e = !1;
        pc.forEach(f => {
            !e && f.canHandle(b) && (f.handle(a, b, c, d), e = !0)
        });
        return e
    },
    uc = (a, b, c, d, e, f, g, h, n, p) => {
        function q(r) {
            function B(y) {
                p && p();
                h || tc(a, b, y, d, e, n);
                f && f();
                vb(v)
            }
            sc(r, u, B, () => {
                g && g();
                vb(v)
            }) || B(r)
        }
        var u = b ? Xb(Ca(a + "/" + b)) : a,
            v = `cp `;
        ub(v);
        "string" == typeof c ? oc(c, r => q(r), g) : q(c)
    },
    vc = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c
    },
    L = {
        gj: {},
        indexedDB: () => {
            if ("undefined" != typeof indexedDB) return indexedDB;
            var a = null;
            "object" == typeof window && (a = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB);
            a || cb("IDBFS used, but indexedDB not supported");
            return a
        },
        Uk: 21,
        lj: "FILE_DATA",
        Ni: function (a) {
            return z.Ni.apply(null, arguments)
        },
        tk: (a, b, c) => {
            L.ck(a, (d, e) => {
                if (d) return c(d);
                L.dk(a, (f, g) => {
                    if (f) return c(f);
                    L.lk(b ? g : e, b ? e : g, c)
                })
            })
        },
        zl: () => {
            Object.values(L.gj).forEach(a => a.close());
            L.gj = {}
        },
        ll: (a, b) => {
            var c = L.gj[a];
            if (c) return b(null, c);
            try {
                var d = L.indexedDB().open(a, L.Uk)
            } catch (e) {
                return b(e)
            }
            if (!d) return b("Unable to connect to IndexedDB");
            d.onupgradeneeded =
                e => {
                    var f = e.target.result;
                    e = e.target.transaction;
                    var g;
                    f.objectStoreNames.contains(L.lj) ? g = e.objectStore(L.lj) : g = f.createObjectStore(L.lj);
                    g.indexNames.contains("timestamp") || g.createIndex("timestamp", "timestamp", {
                        unique: !1
                    })
                };
            d.onsuccess = () => {
                c = d.result;
                L.gj[a] = c;
                b(null, c)
            };
            d.onerror = e => {
                b(e.target.error);
                e.preventDefault()
            }
        },
        ck: (a, b) => {
            function c(h) {
                return "." !== h && ".." !== h
            }

            function d(h) {
                return n => Ca(h + "/" + n)
            }
            var e = {};
            for (a = Da(a.jj).filter(c).map(d(a.jj)); a.length;) {
                var f = a.pop();
                try {
                    var g = Ea(f)
                } catch (h) {
                    return b(h)
                }
                C(g.mode) &&
                    a.push.apply(a, Da(f).filter(c).map(d(f)));
                e[f] = {
                    timestamp: g.mtime
                }
            }
            return b(null, {
                type: "local",
                entries: e
            })
        },
        dk: (a, b) => {
            var c = {};
            L.ll(a.jj, (d, e) => {
                if (d) return b(d);
                try {
                    var f = e.transaction([L.lj], "readonly");
                    f.onerror = g => {
                        b(g.target.error);
                        g.preventDefault()
                    };
                    f.objectStore(L.lj).index("timestamp").openKeyCursor().onsuccess = g => {
                        g = g.target.result;
                        if (!g) return b(null, {
                            type: "remote",
                            db: e,
                            entries: c
                        });
                        c[g.primaryKey] = {
                            timestamp: g.key
                        };
                        g.continue()
                    }
                } catch (g) {
                    return b(g)
                }
            })
        },
        fk: (a, b) => {
            try {
                var c = Fa(a).node;
                var d = Ea(a)
            } catch (e) {
                return b(e)
            }
            return C(d.mode) ? b(null, {
                timestamp: d.mtime,
                mode: d.mode
            }) : 32768 === (d.mode & 61440) ? (c.Hi = Ga(c), b(null, {
                timestamp: d.mtime,
                mode: d.mode,
                contents: c.Hi
            })) : b(Error("node type not supported"))
        },
        rk: (a, b, c) => {
            try {
                if (C(b.mode)) Ha(a, b.mode);
                else if (32768 === (b.mode & 61440)) Ia(a, b.contents);
                else return c(Error("node type not supported"));
                Ja(a, b.mode);
                Ka(a, b.timestamp, b.timestamp)
            } catch (d) {
                return c(d)
            }
            c(null)
        },
        nk: (a, b) => {
            try {
                var c = Ea(a);
                C(c.mode) ? La(a) : 32768 === (c.mode & 61440) && Ma(a)
            } catch (d) {
                return b(d)
            }
            b(null)
        },
        gk: (a, b, c) => {
            a = a.get(b);
            a.onsuccess = d => {
                c(null, d.target.result)
            };
            a.onerror = d => {
                c(d.target.error);
                d.preventDefault()
            }
        },
        sk: (a, b, c, d) => {
            try {
                var e = a.put(c, b)
            } catch (f) {
                d(f);
                return
            }
            e.onsuccess = () => {
                d(null)
            };
            e.onerror = f => {
                d(f.target.error);
                f.preventDefault()
            }
        },
        pk: (a, b, c) => {
            a = a.delete(b);
            a.onsuccess = () => {
                c(null)
            };
            a.onerror = d => {
                c(d.target.error);
                d.preventDefault()
            }
        },
        lk: (a, b, c) => {
            function d(q) {
                if (q && !h) return h = !0, c(q)
            }
            var e = 0,
                f = [];
            Object.keys(a.entries).forEach(function (q) {
                var u = a.entries[q],
                    v = b.entries[q];
                v && u.timestamp.getTime() == v.timestamp.getTime() || (f.push(q), e++)
            });
            var g = [];
            Object.keys(b.entries).forEach(function (q) {
                a.entries[q] || (g.push(q), e++)
            });
            if (!e) return c(null);
            var h = !1,
                n = ("remote" === a.type ? a.db : b.db).transaction([L.lj], "readwrite"),
                p = n.objectStore(L.lj);
            n.onerror = q => {
                d(this.error);
                q.preventDefault()
            };
            n.oncomplete = () => {
                h || c(null)
            };
            f.sort().forEach(q => {
                "local" === b.type ? L.gk(p, q, (u, v) => {
                    if (u) return d(u);
                    L.rk(q, v, d)
                }) : L.fk(q, (u, v) => {
                    if (u) return d(u);
                    L.sk(p, q, v, d)
                })
            });
            g.sort().reverse().forEach(q => {
                "local" === b.type ? L.nk(q, d) : L.pk(p, q, d)
            })
        }
    },
    wc = null,
    xc = {},
    yc = [],
    zc = 1,
    Ac = null,
    Zb = "/",
    Bc = !0,
    O = null,
    mc = {},
    Cc = 0;

function Fa(a, b = {}) {
    a = Xb(a);
    if (!a) return {
        path: "",
        node: null
    };
    b = Object.assign({
        Gk: !0,
        mk: 0
    }, b);
    if (8 < b.mk) throw new O(32);
    a = a.split("/").filter(g => !!g);
    for (var c = wc, d = "/", e = 0; e < a.length; e++) {
        var f = e === a.length - 1;
        if (f && b.parent) break;
        c = nc(c, a[e]);
        d = Ca(d + "/" + a[e]);
        c.ij && (!f || f && b.Gk) && (c = c.ij.root);
        if (!f || b.oj)
            for (f = 0; 40960 === (c.mode & 61440);)
                if (c = Dc(d), d = Xb(Tb(d), c), c = Fa(d, {
                        mk: b.mk + 1
                    }).node, 40 < f++) throw new O(32);
    }
    return {
        path: d,
        node: c
    }
}

function Ec(a) {
    for (var b;;) {
        if (a === a.parent) return a = a.Ni.jj, b ? "/" !== a[a.length - 1] ? `/` : a + b : a;
        b = b ? `${a.name}/` : a.name;
        a = a.parent
    }
}

function Fc(a, b) {
    for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % Ac.length
}

function Gc(a) {
    var b = Fc(a.parent.id, a.name);
    a.wj = Ac[b];
    Ac[b] = a
}

function Hc(a) {
    var b = Fc(a.parent.id, a.name);
    if (Ac[b] === a) Ac[b] = a.wj;
    else
        for (b = Ac[b]; b;) {
            if (b.wj === a) {
                b.wj = a.wj;
                break
            }
            b = b.wj
        }
}

function nc(a, b) {
    var c;
    if (c = (c = Ic(a, "x")) ? c : a.Gi.lookup ? 0 : 2) throw new O(c, a);
    for (c = Ac[Fc(a.id, b)]; c; c = c.wj) {
        var d = c.name;
        if (c.parent.id === a.id && d === b) return c
    }
    return a.Gi.lookup(a, b)
}

function lc(a, b, c, d) {
    a = new Jc(a, b, c, d);
    Gc(a);
    return a
}

function C(a) {
    return 16384 === (a & 61440)
}

function Kc(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}

function Ic(a, b) {
    if (Bc) return 0;
    if (!b.includes("r") || a.mode & 292) {
        if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2
    } else return 2;
    return 0
}

function Lc(a, b) {
    try {
        return nc(a, b), 20
    } catch (c) {}
    return Ic(a, "wx")
}

function Mc(a, b, c) {
    try {
        var d = nc(a, b)
    } catch (e) {
        return e.Ki
    }
    if (a = Ic(a, "wx")) return a;
    if (c) {
        if (!C(d.mode)) return 54;
        if (d === d.parent || Ec(d) === Zb) return 10
    } else if (C(d.mode)) return 31;
    return 0
}

function Nc() {
    for (var a = 0; 4096 >= a; a++)
        if (!yc[a]) return a;
    throw new O(33);
}

function Oc(a) {
    a = yc[a];
    if (!a) throw new O(8);
    return a
}

function Pc(a, b = -1) {
    Qc || (Qc = function () {
        this.Fi = {}
    }, Qc.prototype = {}, Object.defineProperties(Qc.prototype, {
        object: {
            get() {
                return this.node
            },
            set(c) {
                this.node = c
            }
        },
        flags: {
            get() {
                return this.Fi.flags
            },
            set(c) {
                this.Fi.flags = c
            }
        },
        position: {
            get() {
                return this.Fi.position
            },
            set(c) {
                this.Fi.position = c
            }
        }
    }));
    a = Object.assign(new Qc, a); - 1 == b && (b = Nc());
    a.fd = b;
    return yc[b] = a
}
var kc = {
    open(a) {
        a.Ii = xc[a.node.rdev].Ii;
        a.Ii.open && a.Ii.open(a)
    },
    qj() {
        throw new O(70);
    }
};

function fc(a, b) {
    xc[a] = {
        Ii: b
    }
}

function Rc() {
    for (var a = [], b = [wc.Ni]; b.length;) {
        var c = b.pop();
        a.push(c);
        b.push.apply(b, c.Nk)
    }
    return a
}

function Eb(a, b) {
    function c(g) {
        Cc--;
        return b(g)
    }

    function d(g) {
        if (g) {
            if (!d.gl) return d.gl = !0, c(g)
        } else ++f >= e.length && c(null)
    }
    "function" == typeof a && (b = a, a = !1);
    Cc++;
    1 < Cc && l(`warning:  FS.syncfs operations in flight at once, probably just doing extra work`);
    var e = Rc(),
        f = 0;
    e.forEach(g => {
        if (!g.type.tk) return d(null);
        g.type.tk(g, a, d)
    })
}

function Hb(a, b) {
    var c = "/" === b,
        d = !b;
    if (c && wc) throw new O(10);
    if (!c && !d) {
        var e = Fa(b, {
            Gk: !1
        });
        b = e.path;
        e = e.node;
        if (e.ij) throw new O(10);
        if (!C(e.mode)) throw new O(54);
    }
    b = {
        type: a,
        gm: {},
        jj: b,
        Nk: []
    };
    a = a.Ni(b);
    a.Ni = b;
    b.root = a;
    c ? wc = a : e && (e.ij = b, e.Ni && e.Ni.Nk.push(b))
}

function Tc(a, b, c) {
    var d = Fa(a, {
        parent: !0
    }).node;
    a = Ub(a);
    if (!a || "." === a || ".." === a) throw new O(28);
    var e = Lc(d, a);
    if (e) throw new O(e);
    if (!d.Gi.Pj) throw new O(63);
    return d.Gi.Pj(d, a, b, c)
}

function Gb(a, b) {
    return Tc(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0)
}

function Ha(a, b) {
    a = a.split("/");
    for (var c = "", d = 0; d < a.length; ++d)
        if (a[d]) {
            c += "/" + a[d];
            try {
                Gb(c, b)
            } catch (e) {
                if (20 != e.Ki) throw e;
            }
        }
}

function Uc(a, b, c) {
    "undefined" == typeof c && (c = b, b = 438);
    return Tc(a, b | 8192, c)
}

function Vc(a, b) {
    if (!Xb(a)) throw new O(44);
    var c = Fa(b, {
        parent: !0
    }).node;
    if (!c) throw new O(44);
    b = Ub(b);
    var d = Lc(c, b);
    if (d) throw new O(d);
    if (!c.Gi.symlink) throw new O(63);
    c.Gi.symlink(c, b, a)
}

function La(a) {
    var b = Fa(a, {
        parent: !0
    }).node;
    a = Ub(a);
    var c = nc(b, a),
        d = Mc(b, a, !0);
    if (d) throw new O(d);
    if (!b.Gi.rmdir) throw new O(63);
    if (c.ij) throw new O(10);
    b.Gi.rmdir(b, a);
    Hc(c)
}

function Da(a) {
    a = Fa(a, {
        oj: !0
    }).node;
    if (!a.Gi.readdir) throw new O(54);
    return a.Gi.readdir(a)
}

function Ma(a) {
    var b = Fa(a, {
        parent: !0
    }).node;
    if (!b) throw new O(44);
    a = Ub(a);
    var c = nc(b, a),
        d = Mc(b, a, !1);
    if (d) throw new O(d);
    if (!b.Gi.unlink) throw new O(63);
    if (c.ij) throw new O(10);
    b.Gi.unlink(b, a);
    Hc(c)
}

function Dc(a) {
    a = Fa(a).node;
    if (!a) throw new O(44);
    if (!a.Gi.readlink) throw new O(28);
    return Xb(Ec(a.parent), a.Gi.readlink(a))
}

function Ea(a, b) {
    a = Fa(a, {
        oj: !b
    }).node;
    if (!a) throw new O(44);
    if (!a.Gi.Zi) throw new O(63);
    return a.Gi.Zi(a)
}

function Wc(a) {
    return Ea(a, !0)
}

function Ja(a, b) {
    a = "string" == typeof a ? Fa(a, {
        oj: !0
    }).node : a;
    if (!a.Gi.Qi) throw new O(63);
    a.Gi.Qi(a, {
        mode: b & 4095 | a.mode & -4096,
        timestamp: Date.now()
    })
}

function Ka(a, b, c) {
    a = Fa(a, {
        oj: !0
    }).node;
    a.Gi.Qi(a, {
        timestamp: Math.max(b, c)
    })
}

function Xc(a, b, c) {
    if ("" === a) throw new O(44);
    if ("string" == typeof b) {
        var d = {
            r: 0,
            "r+": 2,
            w: 577,
            "w+": 578,
            a: 1089,
            "a+": 1090
        } [b];
        if ("undefined" == typeof d) throw Error(`Unknown file open mode: `);
        b = d
    }
    c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" == typeof a) var e = a;
    else {
        a = Ca(a);
        try {
            e = Fa(a, {
                oj: !(b & 131072)
            }).node
        } catch (f) {}
    }
    d = !1;
    if (b & 64)
        if (e) {
            if (b & 128) throw new O(20);
        } else e = Tc(a, c, 0), d = !0;
    if (!e) throw new O(44);
    8192 === (e.mode & 61440) && (b &= -513);
    if (b & 65536 && !C(e.mode)) throw new O(54);
    if (!d &&
        (c = e ? 40960 === (e.mode & 61440) ? 32 : C(e.mode) && ("r" !== Kc(b) || b & 512) ? 31 : Ic(e, Kc(b)) : 44)) throw new O(c);
    if (b & 512 && !d) {
        c = e;
        c = "string" == typeof c ? Fa(c, {
            oj: !0
        }).node : c;
        if (!c.Gi.Qi) throw new O(63);
        if (C(c.mode)) throw new O(31);
        if (32768 !== (c.mode & 61440)) throw new O(28);
        if (d = Ic(c, "w")) throw new O(d);
        c.Gi.Qi(c, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    e = Pc({
        node: e,
        path: Ec(e),
        flags: b,
        seekable: !0,
        position: 0,
        Ii: e.Ii,
        Hl: [],
        error: !1
    });
    e.Ii.open && e.Ii.open(e);
    !k.logReadFiles || b & 1 || (Yc || (Yc = {}), a in Yc || (Yc[a] = 1));
    return e
}

function Zc(a) {
    if (null === a.fd) throw new O(8);
    a.pj && (a.pj = null);
    try {
        a.Ii.close && a.Ii.close(a)
    } catch (b) {
        throw b;
    } finally {
        yc[a.fd] = null
    }
    a.fd = null
}

function $c(a, b, c) {
    if (null === a.fd) throw new O(8);
    if (!a.seekable || !a.Ii.qj) throw new O(70);
    if (0 != c && 1 != c && 2 != c) throw new O(28);
    a.position = a.Ii.qj(a, b, c);
    a.Hl = [];
    return a.position
}

function ad(a, b, c, d, e, f) {
    if (0 > d || 0 > e) throw new O(28);
    if (null === a.fd) throw new O(8);
    if (0 === (a.flags & 2097155)) throw new O(8);
    if (C(a.node.mode)) throw new O(31);
    if (!a.Ii.write) throw new O(28);
    a.seekable && a.flags & 1024 && $c(a, 0, 2);
    var g = "undefined" != typeof e;
    if (!g) e = a.position;
    else if (!a.seekable) throw new O(70);
    b = a.Ii.write(a, b, c, d, e, f);
    g || (a.position += b);
    return b
}

function Ia(a, b) {
    var c = {
        Ck: !0
    };
    c.flags = c.flags || 577;
    a = Xc(a, c.flags, c.mode);
    if ("string" == typeof b) {
        var d = new Uint8Array(aa(b) + 1);
        b = t(b, d, 0, d.length);
        ad(a, d, 0, b, void 0, c.Ck)
    } else if (ArrayBuffer.isView(b)) ad(a, b, 0, b.byteLength, void 0, c.Ck);
    else throw Error("Unsupported data type");
    Zc(a)
}

function bd() {
    O || (O = function (a, b) {
        this.name = "ErrnoError";
        this.node = b;
        this.Bl = function (c) {
            this.Ki = c
        };
        this.Bl(a);
        this.message = "FS error"
    }, O.prototype = Error(), O.prototype.constructor = O, [44].forEach(a => {
        mc[a] = new O(a);
        mc[a].stack = "<generic error, no stack>"
    }))
}
var cd;

function dd(a, b) {
    a = "string" == typeof a ? a : Ec(a);
    for (b = b.split("/").reverse(); b.length;) {
        var c = b.pop();
        if (c) {
            var d = Ca(a + "/" + c);
            try {
                Gb(d)
            } catch (e) {}
            a = d
        }
    }
    return d
}

function ed(a, b, c, d) {
    a = Ca(("string" == typeof a ? a : Ec(a)) + "/" + b);
    c = vc(c, d);
    return Tc(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
}

function tc(a, b, c, d, e, f) {
    var g = b;
    a && (a = "string" == typeof a ? a : Ec(a), g = b ? Ca(a + "/" + b) : a);
    a = vc(d, e);
    g = Tc(g, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
    if (c) {
        if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
            c = b
        }
        Ja(g, a | 146);
        b = Xc(g, 577);
        ad(b, c, 0, c.length, 0, f);
        Zc(b);
        Ja(g, a)
    }
    return g
}

function fd(a, b, c, d) {
    a = Ca(("string" == typeof a ? a : Ec(a)) + "/" + b);
    b = vc(!!c, !!d);
    fd.Lk || (fd.Lk = 64);
    var e = fd.Lk++ << 8 | 0;
    fc(e, {
        open(f) {
            f.seekable = !1
        },
        close() {
            d && d.buffer && d.buffer.length && d(10)
        },
        read(f, g, h, n) {
            for (var p = 0, q = 0; q < n; q++) {
                try {
                    var u = c()
                } catch (v) {
                    throw new O(29);
                }
                if (void 0 === u && 0 === p) throw new O(6);
                if (null === u || void 0 === u) break;
                p++;
                g[h + q] = u
            }
            p && (f.node.timestamp = Date.now());
            return p
        },
        write(f, g, h, n) {
            for (var p = 0; p < n; p++) try {
                d(g[h + p])
            } catch (q) {
                throw new O(29);
            }
            n && (f.node.timestamp = Date.now());
            return p
        }
    });
    return Uc(a, b, e)
}

function gd(a) {
    if (!(a.ul || a.vl || a.link || a.Hi)) {
        if ("undefined" != typeof XMLHttpRequest) throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        if (Va) try {
            a.Hi = cc(Va(a.url), !0), a.Ji = a.Hi.length
        } catch (b) {
            throw new O(29);
        } else throw Error("Cannot load without read() or XMLHttpRequest.");
    }
}

function hd(a, b, c, d, e) {
    function f() {
        this.ek = !1;
        this.ej = []
    }
    f.prototype.get = function (q) {
        if (!(q > this.length - 1 || 0 > q)) {
            var u = q % this.chunkSize;
            return this.Jk(q / this.chunkSize | 0)[u]
        }
    };
    f.prototype.Fi = function (q) {
        this.Jk = q
    };
    f.prototype.Bk = function () {
        var q = new XMLHttpRequest;
        q.open("HEAD", c, !1);
        q.send(null);
        if (!(200 <= q.status && 300 > q.status || 304 === q.status)) throw Error("Couldn't load " + c + ". Status: " + q.status);
        var u = Number(q.getResponseHeader("Content-length")),
            v, r = (v = q.getResponseHeader("Accept-Ranges")) &&
            "bytes" === v;
        q = (v = q.getResponseHeader("Content-Encoding")) && "gzip" === v;
        var B = 1048576;
        r || (B = u);
        var y = this;
        y.Fi(G => {
            var K = G * B,
                N = (G + 1) * B - 1;
            N = Math.min(N, u - 1);
            if ("undefined" == typeof y.ej[G]) {
                var A = y.ej;
                if (K > N) throw Error("invalid range (" + K + ", " + N + ") or no bytes requested!");
                if (N > u - 1) throw Error("only " + u + " bytes available! programmer error!");
                var P = new XMLHttpRequest;
                P.open("GET", c, !1);
                u !== B && P.setRequestHeader("Range", "bytes=" + K + "-" + N);
                P.responseType = "arraybuffer";
                P.overrideMimeType && P.overrideMimeType("text/plain; charset=x-user-defined");
                P.send(null);
                if (!(200 <= P.status && 300 > P.status || 304 === P.status)) throw Error("Couldn't load " + c + ". Status: " + P.status);
                K = void 0 !== P.response ? new Uint8Array(P.response || []) : cc(P.responseText || "", !0);
                A[G] = K
            }
            if ("undefined" == typeof y.ej[G]) throw Error("doXHR failed!");
            return y.ej[G]
        });
        if (q || !u) B = u = 1, B = u = this.Jk(0).length, ab("LazyFiles on gzip forces download of the whole file when length is accessed");
        this.Yk = u;
        this.Xk = B;
        this.ek = !0
    };
    if ("undefined" != typeof XMLHttpRequest) {
        if (!Sa) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var g = new f;
        Object.defineProperties(g, {
            length: {
                get: function () {
                    this.ek || this.Bk();
                    return this.Yk
                }
            },
            chunkSize: {
                get: function () {
                    this.ek || this.Bk();
                    return this.Xk
                }
            }
        });
        var h = void 0
    } else h = c, g = void 0;
    var n = ed(a, b, d, e);
    g ? n.Hi = g : h && (n.Hi = null, n.url = h);
    Object.defineProperties(n, {
        Ji: {
            get: function () {
                return this.Hi.length
            }
        }
    });
    var p = {};
    Object.keys(n.Ii).forEach(q => {
        var u = n.Ii[q];
        p[q] = function () {
            gd(n);
            return u.apply(null, arguments)
        }
    });
    p.read = (q, u, v, r, B) => {
        gd(n);
        q = q.node.Hi;
        if (B >= q.length) u = 0;
        else {
            r = Math.min(q.length -
                B, r);
            if (q.slice)
                for (var y = 0; y < r; y++) u[v + y] = q[B + y];
            else
                for (y = 0; y < r; y++) u[v + y] = q.get(B + y);
            u = r
        }
        return u
    };
    p.hk = () => {
        gd(n);
        cb();
        throw new O(48);
    };
    n.Ii = p;
    return n
}
var jd = {},
    Qc, Yc, kd = (a, b) => a ? x(w, a, b) : "";

function ld(a, b, c) {
    if ("/" === b.charAt(0)) return b;
    a = -100 === a ? Zb : Oc(a).path;
    if (0 == b.length) {
        if (!c) throw new O(44);
        return a
    }
    return Ca(a + "/" + b)
}

function md(a, b, c) {
    try {
        var d = a(b)
    } catch (f) {
        if (f && f.node && Ca(b) !== Ca(Ec(f.node))) return -54;
        throw f;
    }
    E[c >> 2] = d.dev;
    E[c + 4 >> 2] = d.mode;
    F[c + 8 >> 2] = d.nlink;
    E[c + 12 >> 2] = d.uid;
    E[c + 16 >> 2] = d.gid;
    E[c + 20 >> 2] = d.rdev;
    J = [d.size >>> 0, (I = d.size, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
    E[c + 24 >> 2] = J[0];
    E[c + 28 >> 2] = J[1];
    E[c + 32 >> 2] = 4096;
    E[c + 36 >> 2] = d.blocks;
    a = d.atime.getTime();
    b = d.mtime.getTime();
    var e = d.ctime.getTime();
    J = [Math.floor(a / 1E3) >>> 0, (I = Math.floor(a / 1E3), 1 <=
        +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
    E[c + 40 >> 2] = J[0];
    E[c + 44 >> 2] = J[1];
    F[c + 48 >> 2] = a % 1E3 * 1E3;
    J = [Math.floor(b / 1E3) >>> 0, (I = Math.floor(b / 1E3), 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
    E[c + 56 >> 2] = J[0];
    E[c + 60 >> 2] = J[1];
    F[c + 64 >> 2] = b % 1E3 * 1E3;
    J = [Math.floor(e / 1E3) >>> 0, (I = Math.floor(e / 1E3), 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
    E[c + 72 >> 2] = J[0];
    E[c + 76 >> 2] = J[1];
    F[c + 80 >> 2] = e % 1E3 * 1E3;
    J = [d.ino >>> 0, (I = d.ino, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
    E[c + 88 >> 2] = J[0];
    E[c + 92 >> 2] = J[1];
    return 0
}
var nd = void 0;

function od() {
    var a = E[+nd >> 2];
    nd += 4;
    return a
}
var pd = a => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400),
    qd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
    rd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    sd = a => {
        var b = aa(a) + 1,
            c = m(b);
        c && t(a, w, c, b);
        return c
    },
    Cd = (a, b) => {
        td = a;
        ud = b;
        if (vd)
            if (wd || (wd = !0), 0 == a) xd = function () {
                var d = Math.max(0, yd + b - zd()) | 0;
                setTimeout(Ad, d)
            };
            else if (1 == a) xd = function () {
            Bd(Ad)
        };
        else if (2 == a) {
            if ("undefined" == typeof setImmediate) {
                var c = [];
                addEventListener("message", d => {
                    if ("setimmediate" === d.data || "setimmediate" === d.data.target) d.stopPropagation(),
                        c.shift()()
                }, !0);
                setImmediate = function (d) {
                    c.push(d);
                    Sa ? (void 0 === k.setImmediates && (k.setImmediates = []), k.setImmediates.push(d), postMessage({
                        target: "setimmediate"
                    })) : postMessage("setimmediate", "*")
                }
            }
            xd = function () {
                setImmediate(Ad)
            }
        }
    },
    zd;
zd = () => performance.now();
var Jd = a => {
        !vd || cb("emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
        vd = a;
        var b = Dd;
        wd = !1;
        Ad = function () {
            if (!eb)
                if (0 < Ed.length) {
                    var c = Ed.shift();
                    c.bm(c.Rl);
                    if (Fd) {
                        var d = Fd,
                            e = 0 == d % 1 ? d - 1 : Math.floor(d);
                        Fd = c.Yl ? e : (8 * d + (e + .5)) / 9
                    }
                    k.setStatus && (c = k.statusMessage || "Please wait...", d = Fd, e = Gd.$l, d ? d < e ? k.setStatus(c + " (" + (e - d) + "/" + e + ")") : k.setStatus(c) : k.setStatus(""));
                    b <
                        Dd || setTimeout(Ad, 0)
                } else if (!(b < Dd))
                if (Hd = Hd + 1 | 0, 1 == td && 1 < ud && 0 != Hd % ud) xd();
                else {
                    0 == td && (yd = zd());
                    if (R)
                        for (c = R.yj, R.yj = R.Fj, R.Fj = c, c = R.kj, R.kj = R.Tj, R.Tj = c, c = 0; 21 >= c; ++c) R.kj[c] = 0;
                    eb || k.preMainLoop && !1 === k.preMainLoop() || (Id(a), k.postMainLoop && k.postMainLoop());
                    b < Dd || ("object" == typeof SDL && SDL.audio && SDL.audio.yl && SDL.audio.yl(), xd())
                }
        }
    },
    Kd = a => {
        a instanceof $a || "unwind" == a || Qa(1, a)
    },
    Ld = a => {
        fb = a;
        if (!Rb) {
            if (k.onExit) k.onExit(a);
            eb = !0
        }
        Qa(a, new $a(a))
    },
    Md = a => {
        fb = a;
        Ld(a)
    },
    Id = a => {
        if (!eb) try {
            if (a(), !Rb) try {
                fb =
                    a = fb, Ld(a)
            } catch (b) {
                Kd(b)
            }
        } catch (b) {
            Kd(b)
        }
    },
    Nd = a => {
        setTimeout(() => {
            Id(a)
        }, 1E4)
    },
    wd = !1,
    xd = null,
    Dd = 0,
    vd = null,
    td = 0,
    ud = 0,
    Hd = 0,
    Ed = [],
    Gd = {},
    yd, Ad, Fd, Od = !1,
    Pd = !1,
    Qd = [];

function rc() {
    function a() {
        Pd = document.pointerLockElement === k.canvas || document.mozPointerLockElement === k.canvas || document.webkitPointerLockElement === k.canvas || document.msPointerLockElement === k.canvas
    }
    if (!Rd) {
        Rd = !0;
        pc.push({
            canHandle: function (c) {
                return !k.fm && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function (c, d, e, f) {
                var g = new Blob([c], {
                    type: Sd(d)
                });
                g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer], {
                    type: Sd(d)
                }));
                var h = URL.createObjectURL(g),
                    n = new Image;
                n.onload = () => {
                    n.complete || cb(`Image  could not be decoded`);
                    var p = document.createElement("canvas");
                    p.width = n.width;
                    p.height = n.height;
                    p.getContext("2d").drawImage(n, 0, 0);
                    URL.revokeObjectURL(h);
                    e && e(c)
                };
                n.onerror = () => {
                    l(`Image  could not be decoded`);
                    f && f()
                };
                n.src = h
            }
        });
        pc.push({
            canHandle: function (c) {
                return !k.em && c.substr(-4) in {
                    ".ogg": 1,
                    ".wav": 1,
                    ".mp3": 1
                }
            },
            handle: function (c, d, e) {
                function f() {
                    g || (g = !0, e && e(c))
                }
                var g = !1,
                    h = URL.createObjectURL(new Blob([c], {
                        type: Sd(d)
                    })),
                    n = new Audio;
                n.addEventListener("canplaythrough", () => f(n), !1);
                n.onerror = function () {
                    if (!g) {
                        l(`warning: browser could not fully decode audio , trying slower base64 approach`);
                        for (var p = "", q = 0, u = 0, v = 0; v < c.length; v++)
                            for (q = q << 8 | c[v], u += 8; 6 <= u;) {
                                var r = q >> u - 6 & 63;
                                u -= 6;
                                p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [r]
                            }
                        2 == u ? (p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(q & 3) << 4], p += "==") : 4 == u && (p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(q & 15) << 2], p += "=");
                        n.src = "data:audio/x-" + d.substr(-3) + ";base64," + p;
                        f(n)
                    }
                };
                n.src = h;
                Nd(() => {
                    f(n)
                })
            }
        });
        var b = k.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock ||
            b.webkitRequestPointerLock || b.msRequestPointerLock || (() => {}), b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {}), b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), k.elementPointerLock && b.addEventListener("click",
                c => {
                    !Pd && k.canvas.requestPointerLock && (k.canvas.requestPointerLock(), c.preventDefault())
                }, !1))
    }
}

function Td(a, b, c, d) {
    if (b && k.Xi && a == k.canvas) return k.Xi;
    var e;
    if (b) {
        var f = {
            antialias: !1,
            alpha: !1,
            Kj: "undefined" != typeof WebGL2RenderingContext ? 2 : 1
        };
        if (d)
            for (var g in d) f[g] = d[g];
        if ("undefined" != typeof Ud && (e = Vd(a, f))) var h = Wd[e].Ui
    } else h = a.getContext("2d");
    if (!h) return null;
    c && (b || "undefined" == typeof S || cb("cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), k.Xi = h, b && Xd(e), k.Il = b, Qd.forEach(n => n()), rc());
    return h
}
var Yd = !1,
    Zd = void 0,
    $d = void 0;

function ae(a, b) {
    function c() {
        Od = !1;
        var f = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = be, Zd && d.requestPointerLock(), Od = !0, $d ? ("undefined" != typeof SDL && (E[SDL.screen >> 2] = F[SDL.screen >> 2] | 8388608), ce(k.canvas), de()) : ce(d)) : (f.parentNode.insertBefore(d, f), f.parentNode.removeChild(f), $d ? ("undefined" != typeof SDL && (E[SDL.screen >> 2] = F[SDL.screen >> 2] &
            -8388609), ce(k.canvas), de()) : ce(d));
        if (k.onFullScreen) k.onFullScreen(Od);
        if (k.onFullscreen) k.onFullscreen(Od)
    }
    Zd = a;
    $d = b;
    "undefined" == typeof Zd && (Zd = !0);
    "undefined" == typeof $d && ($d = !1);
    var d = k.canvas;
    Yd || (Yd = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
    var e = document.createElement("div");
    d.parentNode.insertBefore(e, d);
    e.appendChild(d);
    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? () => e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? () => e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
    e.requestFullscreen()
}

function be() {
    if (!Od) return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (() => {})).apply(document, []);
    return !0
}
var ee = 0;

function Bd(a) {
    if ("function" == typeof requestAnimationFrame) requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === ee) ee = b + 1E3 / 60;
        else
            for (; b + 2 >= ee;) ee += 1E3 / 60;
        setTimeout(a, Math.max(ee - b, 0))
    }
}

function Sd(a) {
    return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
    } [a.substr(a.lastIndexOf(".") + 1)]
}
var fe = [];

function de() {
    var a = k.canvas;
    fe.forEach(b => b(a.width, a.height))
}

function ce(a, b, c) {
    b && c ? (a.Ll = b, a.nl = c) : (b = a.Ll, c = a.nl);
    var d = b,
        e = c;
    k.forcedAspectRatio && 0 < k.forcedAspectRatio && (d / e < k.forcedAspectRatio ? d = Math.round(e * k.forcedAspectRatio) : e = Math.round(d / k.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var f = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * f);
        e = Math.round(e *
            f)
    }
    $d ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))))
}
var qc = {},
    Rd, T = 12288,
    ge = !1,
    he = 0,
    ie = 0,
    je = 0,
    ke = {
        alpha: !1,
        depth: !1,
        stencil: !1,
        antialias: !1
    },
    le = {},
    me, ne = a => {
        var b = a.getExtension("ANGLE_instanced_arrays");
        b && (a.vertexAttribDivisor = (c, d) => b.vertexAttribDivisorANGLE(c, d), a.drawArraysInstanced = (c, d, e, f) => b.drawArraysInstancedANGLE(c, d, e, f), a.drawElementsInstanced = (c, d, e, f, g) => b.drawElementsInstancedANGLE(c, d, e, f, g))
    },
    oe = a => {
        var b = a.getExtension("OES_vertex_array_object");
        b && (a.createVertexArray = () => b.createVertexArrayOES(), a.deleteVertexArray = c => b.deleteVertexArrayOES(c),
            a.bindVertexArray = c => b.bindVertexArrayOES(c), a.isVertexArray = c => b.isVertexArrayOES(c))
    },
    pe = a => {
        var b = a.getExtension("WEBGL_draw_buffers");
        b && (a.drawBuffers = (c, d) => b.drawBuffersWEBGL(c, d))
    },
    qe = a => {
        a.Zl = a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")
    },
    re = a => {
        a.dm = a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")
    },
    se = 1,
    te = [],
    ue = {},
    V = [],
    ve = [],
    we = [],
    xe = [],
    ye = [],
    ze = [],
    Wd = [],
    Ae = [],
    Be = [],
    Ce = [],
    De = [],
    Ee = [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    Fe = {},
    Ge = {},
    He = 4;

function W(a) {
    Ie || (Ie = a)
}
var Je = a => {
    for (var b = se++, c = a.length; c < b; c++) a[c] = null;
    return b
};

function Ke(a) {
    Le = !1;
    for (var b = 0; b < R.Mk; ++b) {
        var c = R.fj[b];
        if (c.Bj && c.enabled) {
            Le = !0;
            var d = c.Sj;
            d = 0 < d ? a * d : c.size * Ee[c.type - 5120] * a;
            var e = 32 - Math.clz32(0 === d ? 0 : d - 1);
            var f = R.yj[e],
                g = R.kj[e];
            R.kj[e] = R.kj[e] + 1 & 63;
            var h = f[g];
            h ? e = h : (h = S.getParameter(34964), f[g] = S.createBuffer(), S.bindBuffer(34962, f[g]), S.bufferData(34962, 1 << e, 35048), S.bindBuffer(34962, h), e = f[g]);
            S.bindBuffer(34962, e);
            S.bufferSubData(34962, 0, w.subarray(c.Dj, c.Dj + d));
            c.xk.call(S, b, c.size, c.type, c.ik, c.Sj, 0)
        }
    }
}
var Vd = (a, b) => {
        a.Xj || (a.Xj = a.getContext, a.getContext = function (d, e) {
            e = a.Xj(d, e);
            return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
        });
        var c = 1 < b.Kj ? a.getContext("webgl2", b) : a.getContext("webgl", b);
        return c ? Me(c, b) : 0
    },
    Me = (a, b) => {
        var c = Je(Wd),
            d = {
                handle: c,
                attributes: b,
                version: b.Kj,
                Ui: a
            };
        a.canvas && (a.canvas.zj = d);
        Wd[c] = d;
        ("undefined" == typeof b.ak || b.ak) && Ne(d);
        d.Mk = d.Ui.getParameter(34921);
        d.fj = [];
        for (a = 0; a < d.Mk; a++) d.fj[a] = {
            enabled: !1,
            Bj: !1,
            size: 0,
            type: 0,
            ik: 0,
            Sj: 0,
            Dj: 0,
            xk: null
        };
        d.kj = [];
        d.Tj = [];
        d.kj.length = d.Tj.length = 22;
        d.yj = [];
        d.Fj = [];
        d.yj.length = d.Fj.length = 22;
        d.xj = [];
        d.xj.length = 22;
        for (a = 0; 21 >= a; ++a) {
            d.xj[a] = null;
            d.kj[a] = d.Tj[a] = 0;
            d.yj[a] = [];
            d.Fj[a] = [];
            b = d.yj[a];
            var e = d.Fj[a];
            b.length = e.length = 64;
            for (var f = 0; 64 > f; ++f) b[f] = e[f] = null
        }
        return c
    },
    Xd = a => {
        R = Wd[a];
        k.Xi = S = R && R.Ui;
        return !(a && !S)
    },
    Ne = a => {
        a || (a = R);
        if (!a.pl) {
            a.pl = !0;
            var b = a.Ui;
            ne(b);
            oe(b);
            pe(b);
            qe(b);
            re(b);
            2 <= a.version && (b.Wi = b.getExtension("EXT_disjoint_timer_query_webgl2"));
            if (2 > a.version || !b.Wi) b.Wi = b.getExtension("EXT_disjoint_timer_query");
            b.xl = b.getExtension("WEBGL_multi_draw");
            (b.getSupportedExtensions() || []).forEach(c => {
                c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
            })
        }
    },
    Ud = {},
    Ie, R, Le, Oe = [],
    Pe = (a, b) => {
        Oe.length = 0;
        for (var c; c = w[a++];) {
            var d = 105 != c;
            d &= 112 != c;
            b += d && b % 8 ? 4 : 0;
            Oe.push(112 == c ? F[b >> 2] : 105 == c ? E[b >> 2] : ib[b >> 3]);
            b += d ? 8 : 4
        }
        return Oe
    },
    Qe = {},
    Re = 0;

function Se() {
    var a = Re;
    Re++;
    return a
}
var Ve = a => {
        var b = Te();
        a = a();
        Ue(b);
        return a
    },
    We = 0;

function Xe() {
    for (var a = Ye.length - 1; 0 <= a; --a) Ze(a);
    Ye = [];
    $e = []
}
var $e = [];

function af(a, b, c) {
    function d(g, h) {
        if (g.length != h.length) return !1;
        for (var n in g)
            if (g[n] != h[n]) return !1;
        return !0
    }
    for (var e in $e) {
        var f = $e[e];
        if (f.uk == a && d(f.Ak, c)) return
    }
    $e.push({
        uk: a,
        Qk: b,
        Ak: c
    });
    $e.sort((g, h) => g.Qk < h.Qk)
}

function bf(a) {
    for (var b = 0; b < $e.length; ++b) $e[b].uk == a && ($e.splice(b, 1), --b)
}

function cf() {
    return navigator.userActivation ? navigator.userActivation.isActive : We && df.Aj
}

function ef() {
    if (cf())
        for (var a = 0; a < $e.length; ++a) {
            var b = $e[a];
            $e.splice(a, 1);
            --a;
            b.uk.apply(null, b.Ak)
        }
}
var Ye = [];

function Ze(a) {
    var b = Ye[a];
    b.target.removeEventListener(b.Oi, b.hl, b.Ri);
    Ye.splice(a, 1)
}

function ff(a) {
    function b(d) {
        ++We;
        df = a;
        ef();
        a.Ti(d);
        ef();
        --We
    }
    if (!a.target) return -4;
    if (a.Si) a.hl = b, a.target.addEventListener(a.Oi, b, a.Ri), Ye.push(a), gf || (nb.push(Xe), gf = !0);
    else
        for (var c = 0; c < Ye.length; ++c) Ye[c].target == a.target && Ye[c].Oi == a.Oi && Ze(c--);
    return 0
}

function hf(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
}

function jf() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var kf = {},
    gf, df, lf, mf, nf, of, pf, qf, rf, sf, tf, uf, vf, wf, xf = {},
    yf = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0],
    zf = a => {
        a = 2 < a ? a ? x(w, a) : "" : a;
        return yf[a] || ("undefined" != typeof document ? document.querySelector(a) : void 0)
    },
    Af = (a, b, c) => {
        a = zf(a);
        if (!a) return -4;
        E[b >> 2] = a.width;
        E[c >> 2] = a.height
    },
    Cf = a => {
        var b = aa(a) + 1,
            c = Bf(b);
        t(a, w, c, b);
        return c
    },
    Df = a => Ve(() => {
        var b = Bf(8),
            c = b + 4,
            d = Cf(a.id);
        Af(d, b, c);
        return [E[b >> 2], E[c >> 2]]
    }),
    Ef = (a, b, c) => {
        a = zf(a);
        if (!a) return -4;
        a.width = b;
        a.height =
            c;
        return 0
    },
    Ff = (a, b, c) => {
        a.Xl ? Ve(() => {
            var d = Cf(a.id);
            Ef(d, b, c)
        }) : (a.width = b, a.height = c)
    },
    Gf = a => {
        function b() {
            document.fullscreenElement || document.webkitFullscreenElement || (document.removeEventListener("fullscreenchange", b), document.removeEventListener("webkitfullscreenchange", b), Ff(a, d, e), a.style.width = f, a.style.height = g, a.style.backgroundColor = h, n || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = n, a.style.paddingLeft = p, a.style.paddingRight = q, a.style.paddingTop = u,
                a.style.paddingBottom = v, a.style.marginLeft = r, a.style.marginRight = B, a.style.marginTop = y, a.style.marginBottom = G, document.body.style.margin = K, document.documentElement.style.overflow = N, document.body.scroll = A, a.style.hj = P, a.zj && a.zj.Ui.viewport(0, 0, d, e), xf.Jj && M(xf.Jj)(37, 0, xf.Dk))
        }
        var c = Df(a),
            d = c[0],
            e = c[1],
            f = a.style.width,
            g = a.style.height,
            h = a.style.backgroundColor,
            n = document.body.style.backgroundColor,
            p = a.style.paddingLeft,
            q = a.style.paddingRight,
            u = a.style.paddingTop,
            v = a.style.paddingBottom,
            r = a.style.marginLeft,
            B = a.style.marginRight,
            y = a.style.marginTop,
            G = a.style.marginBottom,
            K = document.body.style.margin,
            N = document.documentElement.style.overflow,
            A = document.body.scroll,
            P = a.style.hj;
        document.addEventListener("fullscreenchange", b);
        document.addEventListener("webkitfullscreenchange", b)
    },
    Hf = (a, b, c) => {
        a.style.paddingLeft = a.style.paddingRight = c + "px";
        a.style.paddingTop = a.style.paddingBottom = b + "px"
    },
    If = a => 0 > yf.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    },
    Jf = (a, b) => {
        if (0 != b.qk || 0 != b.Yj) {
            Gf(a);
            var c = b.Cl ? innerWidth :
                screen.width,
                d = b.Cl ? innerHeight : screen.height,
                e = If(a),
                f = e.width;
            e = e.height;
            var g = Df(a),
                h = g[0];
            g = g[1];
            3 == b.qk ? (Hf(a, (d - e) / 2, (c - f) / 2), c = f, d = e) : 2 == b.qk && (c * g < h * d ? (f = g * c / h, Hf(a, (d - f) / 2, 0), d = f) : (f = h * d / g, Hf(a, 0, (c - f) / 2), c = f));
            a.style.backgroundColor || (a.style.backgroundColor = "black");
            document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
            a.style.width = c + "px";
            a.style.height = d + "px";
            1 == b.jl && (a.style.hj = "optimizeSpeed", a.style.hj = "-moz-crisp-edges", a.style.hj = "-o-crisp-edges", a.style.hj =
                "-webkit-optimize-contrast", a.style.hj = "optimize-contrast", a.style.hj = "crisp-edges", a.style.hj = "pixelated");
            f = 2 == b.Yj ? devicePixelRatio : 1;
            0 != b.Yj && (c = c * f | 0, d = d * f | 0, Ff(a, c, d), a.zj && a.zj.Ui.viewport(0, 0, c, d))
        }
        if (a.requestFullscreen) a.requestFullscreen();
        else if (a.webkitRequestFullscreen) a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        else return jf() ? -3 : -1;
        xf = b;
        b.Jj && M(b.Jj)(37, 0, b.Dk);
        return 0
    },
    Kf = a => {
        if (a.requestPointerLock) a.requestPointerLock();
        else return document.body.requestPointerLock ?
            -3 : -1;
        return 0
    },
    Lf = (a, b) => {
        ib[a >> 3] = b.timestamp;
        for (var c = 0; c < b.axes.length; ++c) ib[a + 8 * c + 16 >> 3] = b.axes[c];
        for (c = 0; c < b.buttons.length; ++c) ib[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
        for (c = 0; c < b.buttons.length; ++c) E[a + 4 * c + 1040 >> 2] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
        E[a + 1296 >> 2] = b.connected;
        E[a + 1300 >> 2] = b.index;
        E[a + 8 >> 2] = b.axes.length;
        E[a + 12 >> 2] = b.buttons.length;
        t(b.id, w, a + 1304, 64);
        t(b.mapping, w, a + 1368, 64)
    };

function Mf(a) {
    S.activeTexture(a)
}
var Nf = (a, b) => {
        S.attachShader(V[a], ye[b])
    },
    Of = (a, b) => {
        34962 == a ? S.uj = b : 34963 == a && (S.Cj = b);
        35051 == a ? S.$j = b : 35052 == a && (S.Yi = b);
        S.bindBuffer(a, te[b])
    },
    Pf = (a, b) => {
        S.bindFramebuffer(a, ve[b])
    },
    Qf = (a, b) => {
        S.bindRenderbuffer(a, we[b])
    },
    Rf = (a, b) => {
        S.bindTexture(a, xe[b])
    },
    Sf = a => {
        S.bindVertexArray(ze[a]);
        a = S.getParameter(34965);
        S.Cj = a ? a.name | 0 : 0
    };

function Tf(a, b) {
    S.blendEquationSeparate(a, b)
}

function Uf(a, b) {
    S.blendFunc(a, b)
}

function Vf(a, b, c, d) {
    S.blendFuncSeparate(a, b, c, d)
}
var Wf = (a, b, c, d) => {
    2 <= R.version ? c && b ? S.bufferData(a, w, d, c, b) : S.bufferData(a, b, d) : S.bufferData(a, c ? w.subarray(c, c + b) : b, d)
};

function Xf(a) {
    return S.checkFramebufferStatus(a)
}

function Yf(a) {
    S.clear(a)
}

function Zf(a, b, c, d) {
    S.clearColor(a, b, c, d)
}

function $f(a) {
    S.clearDepth(a)
}

function ag(a) {
    S.clearStencil(a)
}
var bg = (a, b, c, d) => {
        S.colorMask(!!a, !!b, !!c, !!d)
    },
    cg = a => {
        S.compileShader(ye[a])
    },
    dg = () => {
        var a = Je(V),
            b = S.createProgram();
        b.name = a;
        b.Nj = b.Lj = b.Mj = 0;
        b.wk = 1;
        V[a] = b;
        return a
    },
    eg = a => {
        var b = Je(ye);
        ye[b] = S.createShader(a);
        return b
    },
    fg = (a, b) => {
        for (var c = 0; c < a; c++) {
            var d = E[b + 4 * c >> 2],
                e = te[d];
            e && (S.deleteBuffer(e), e.name = 0, te[d] = null, d == S.uj && (S.uj = 0), d == S.Cj && (S.Cj = 0), d == S.$j && (S.$j = 0), d == S.Yi && (S.Yi = 0))
        }
    },
    gg = (a, b) => {
        for (var c = 0; c < a; ++c) {
            var d = E[b + 4 * c >> 2],
                e = ve[d];
            e && (S.deleteFramebuffer(e), e.name = 0, ve[d] = null)
        }
    },
    hg = a => {
        if (a) {
            var b = V[a];
            b ? (S.deleteProgram(b), b.name = 0, V[a] = null) : W(1281)
        }
    },
    ig = (a, b) => {
        for (var c = 0; c < a; c++) {
            var d = E[b + 4 * c >> 2],
                e = we[d];
            e && (S.deleteRenderbuffer(e), e.name = 0, we[d] = null)
        }
    },
    jg = a => {
        if (a) {
            var b = ye[a];
            b ? (S.deleteShader(b), ye[a] = null) : W(1281)
        }
    },
    kg = (a, b) => {
        for (var c = 0; c < a; c++) {
            var d = E[b + 4 * c >> 2],
                e = xe[d];
            e && (S.deleteTexture(e), e.name = 0, xe[d] = null)
        }
    },
    lg = (a, b) => {
        for (var c = 0; c < a; c++) {
            var d = E[b + 4 * c >> 2];
            S.deleteVertexArray(ze[d]);
            ze[d] = null
        }
    };

function mg(a) {
    S.depthFunc(a)
}
var ng = a => {
    S.depthMask(!!a)
};

function og(a, b) {
    S.depthRange(a, b)
}

function pg(a) {
    S.disable(a)
}
var qg = a => {
        R.fj[a].enabled = !1;
        S.disableVertexAttribArray(a)
    },
    rg = (a, b, c) => {
        Ke(b + c);
        S.drawArrays(a, b, c);
        Le && S.bindBuffer(34962, te[S.uj])
    },
    sg = (a, b, c, d) => {
        S.drawArraysInstanced(a, b, c, d)
    },
    tg = [],
    ug = (a, b) => {
        for (var c = tg[a], d = 0; d < a; d++) c[d] = E[b + 4 * d >> 2];
        S.drawBuffers(c)
    },
    vg = (a, b, c, d) => {
        if (!S.Cj) {
            var e = 1 * Ee[c - 5120] * b;
            var f = 32 - Math.clz32(0 === e ? 0 : e - 1);
            var g = R.xj[f];
            g ? f = g : (g = S.getParameter(34965), R.xj[f] = S.createBuffer(), S.bindBuffer(34963, R.xj[f]), S.bufferData(34963, 1 << f, 35048), S.bindBuffer(34963, g), f = R.xj[f]);
            S.bindBuffer(34963, f);
            S.bufferSubData(34963, 0, w.subarray(d, d + e));
            d = 0
        }
        Ke(b);
        S.drawElements(a, b, c, d);
        Le && S.bindBuffer(34962, te[S.uj]);
        S.Cj || S.bindBuffer(34963, null)
    },
    wg = (a, b, c, d, e) => {
        S.drawElementsInstanced(a, b, c, d, e)
    };

function xg(a) {
    S.enable(a)
}
var yg = a => {
    R.fj[a].enabled = !0;
    S.enableVertexAttribArray(a)
};

function zg() {
    S.flush()
}
var Ag = a => {
        switch (a) {
            case 34962:
                a = 34964;
                break;
            case 34963:
                a = 34965;
                break;
            case 35051:
                a = 35053;
                break;
            case 35052:
                a = 35055;
                break;
            case 35982:
                a = 35983;
                break;
            case 36662:
                a = 36662;
                break;
            case 36663:
                a = 36663;
                break;
            case 35345:
                a = 35368
        }
        return (a = S.getParameter(a)) ? a.name | 0 : 0
    },
    Bg = a => {
        switch (a) {
            case 34962:
            case 34963:
            case 36662:
            case 36663:
            case 35051:
            case 35052:
            case 35882:
            case 35982:
            case 35345:
                return !0;
            default:
                return !1
        }
    },
    Cg = (a, b, c, d) => {
        S.framebufferRenderbuffer(a, b, c, we[d])
    },
    Dg = (a, b, c, d, e) => {
        S.framebufferTexture2D(a, b, c, xe[d],
            e)
    };

function Eg(a) {
    S.frontFace(a)
}
var Fg = (a, b, c, d) => {
        for (var e = 0; e < a; e++) {
            var f = S[c](),
                g = f && Je(d);
            f ? (f.name = g, d[g] = f) : W(1282);
            E[b + 4 * e >> 2] = g
        }
    },
    Gg = (a, b) => {
        Fg(a, b, "createBuffer", te)
    },
    Hg = (a, b) => {
        Fg(a, b, "createFramebuffer", ve)
    },
    Ig = (a, b) => {
        Fg(a, b, "createRenderbuffer", we)
    },
    Jg = (a, b) => {
        Fg(a, b, "createTexture", xe)
    };

function Kg(a, b) {
    Fg(a, b, "createVertexArray", ze)
}
var Lg = (a, b, c, d, e, f, g, h) => {
        b = V[b];
        if (a = S[a](b, c)) d = h && t(a.name, w, h, d), e && (E[e >> 2] = d), f && (E[f >> 2] = a.size), g && (E[g >> 2] = a.type)
    },
    Mg = (a, b, c, d, e, f, g) => {
        Lg("getActiveUniform", a, b, c, d, e, f, g)
    },
    Ng = (a, b) => S.getAttribLocation(V[a], b ? x(w, b) : ""),
    Og = (a, b) => {
        F[a >> 2] = b;
        F[a + 4 >> 2] = (b - F[a >> 2]) / 4294967296
    },
    Pg = (a, b, c) => {
        if (b) {
            var d = void 0;
            switch (a) {
                case 36346:
                    d = 1;
                    break;
                case 36344:
                    0 != c && 1 != c && W(1280);
                    return;
                case 34814:
                case 36345:
                    d = 0;
                    break;
                case 34466:
                    var e = S.getParameter(34467);
                    d = e ? e.length : 0;
                    break;
                case 33309:
                    if (2 > R.version) {
                        W(1282);
                        return
                    }
                    d = 2 * (S.getSupportedExtensions() || []).length;
                    break;
                case 33307:
                case 33308:
                    if (2 > R.version) {
                        W(1280);
                        return
                    }
                    d = 33307 == a ? 3 : 0
            }
            if (void 0 === d) switch (e = S.getParameter(a), typeof e) {
                case "number":
                    d = e;
                    break;
                case "boolean":
                    d = e ? 1 : 0;
                    break;
                case "string":
                    W(1280);
                    return;
                case "object":
                    if (null === e) switch (a) {
                        case 34964:
                        case 35725:
                        case 34965:
                        case 36006:
                        case 36007:
                        case 32873:
                        case 34229:
                        case 36662:
                        case 36663:
                        case 35053:
                        case 35055:
                        case 36010:
                        case 35097:
                        case 35869:
                        case 32874:
                        case 36389:
                        case 35983:
                        case 35368:
                        case 34068:
                            d =
                                0;
                            break;
                        default:
                            W(1280);
                            return
                    } else {
                        if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                            for (a = 0; a < e.length; ++a) switch (c) {
                                case 0:
                                    E[b + 4 * a >> 2] = e[a];
                                    break;
                                case 2:
                                    H[b + 4 * a >> 2] = e[a];
                                    break;
                                case 4:
                                    D[b + a >> 0] = e[a] ? 1 : 0
                            }
                            return
                        }
                        try {
                            d = e.name | 0
                        } catch (f) {
                            W(1280);
                            l("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
                            return
                        }
                    }
                    break;
                default:
                    W(1280);
                    l("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" +
                        a + ") and it returns " + e + " of type " + typeof e + "!");
                    return
            }
            switch (c) {
                case 1:
                    Og(b, d);
                    break;
                case 0:
                    E[b >> 2] = d;
                    break;
                case 2:
                    H[b >> 2] = d;
                    break;
                case 4:
                    D[b >> 0] = d ? 1 : 0
            }
        } else W(1281)
    },
    Qg = () => {
        var a = S.getError() || Ie;
        Ie = 0;
        return a
    },
    Rg = (a, b) => {
        Pg(a, b, 2)
    },
    Sg = (a, b, c, d) => {
        if (c) {
            b = S.getIndexedParameter(a, b);
            switch (typeof b) {
                case "boolean":
                    a = b ? 1 : 0;
                    break;
                case "number":
                    a = b;
                    break;
                case "object":
                    if (null === b) switch (a) {
                            case 35983:
                            case 35368:
                                a = 0;
                                break;
                            default:
                                W(1280);
                                return
                        } else if (b instanceof WebGLBuffer) a = b.name | 0;
                        else {
                            W(1280);
                            return
                        } break;
                default:
                    W(1280);
                    return
            }
            switch (d) {
                case 1:
                    Og(c, a);
                    break;
                case 0:
                    E[c >> 2] = a;
                    break;
                case 2:
                    H[c >> 2] = a;
                    break;
                case 4:
                    D[c >> 0] = a ? 1 : 0;
                    break;
                default:
                    throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
            }
        } else W(1281)
    },
    Tg = (a, b) => {
        Pg(a, b, 0)
    },
    Ug = (a, b, c, d) => {
        a = S.getProgramInfoLog(V[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? t(a, w, d, b) : 0;
        c && (E[c >> 2] = b)
    },
    Vg = (a, b, c) => {
        if (c)
            if (a >= se) W(1281);
            else if (a = V[a], 35716 == b) a = S.getProgramInfoLog(a), null === a && (a = "(unknown error)"), E[c >> 2] = a.length + 1;
        else if (35719 ==
            b) {
            if (!a.Nj)
                for (b = 0; b < S.getProgramParameter(a, 35718); ++b) a.Nj = Math.max(a.Nj, S.getActiveUniform(a, b).name.length + 1);
            E[c >> 2] = a.Nj
        } else if (35722 == b) {
            if (!a.Lj)
                for (b = 0; b < S.getProgramParameter(a, 35721); ++b) a.Lj = Math.max(a.Lj, S.getActiveAttrib(a, b).name.length + 1);
            E[c >> 2] = a.Lj
        } else if (35381 == b) {
            if (!a.Mj)
                for (b = 0; b < S.getProgramParameter(a, 35382); ++b) a.Mj = Math.max(a.Mj, S.getActiveUniformBlockName(a, b).length + 1);
            E[c >> 2] = a.Mj
        } else E[c >> 2] = S.getProgramParameter(a, b);
        else W(1281)
    },
    Wg = (a, b, c) => {
        if (c) {
            a = Ae[a];
            b = 2 >
                R.version ? S.Wi.getQueryObjectEXT(a, b) : S.getQueryParameter(a, b);
            var d;
            "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
            Og(c, d)
        } else W(1281)
    },
    Xg = (a, b, c) => {
        if (c) {
            a = S.Wi.getQueryObjectEXT(Ae[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            E[c >> 2] = d
        } else W(1281)
    },
    Yg = (a, b, c, d) => {
        a = S.getShaderInfoLog(ye[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? t(a, w, d, b) : 0;
        c && (E[c >> 2] = b)
    },
    Zg = (a, b, c) => {
        c ? 35716 == b ? (a = S.getShaderInfoLog(ye[a]), null === a && (a = "(unknown error)"), E[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = S.getShaderSource(ye[a]), E[c >>
            2] = a ? a.length + 1 : 0) : E[c >> 2] = S.getShaderParameter(ye[a], b) : W(1281)
    },
    $g = a => {
        var b = Fe[a];
        if (!b) {
            switch (a) {
                case 7939:
                    b = S.getSupportedExtensions() || [];
                    b = b.concat(b.map(d => "GL_" + d));
                    b = sd(b.join(" "));
                    break;
                case 7936:
                case 7937:
                case 37445:
                case 37446:
                    (b = S.getParameter(a)) || W(1280);
                    b = b && sd(b);
                    break;
                case 7938:
                    b = S.getParameter(7938);
                    b = 2 <= R.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                    b = sd(b);
                    break;
                case 35724:
                    b = S.getParameter(35724);
                    var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                    null !==
                        c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                    b = sd(b);
                    break;
                default:
                    W(1280)
            }
            Fe[a] = b
        }
        return b
    },
    ah = a => "]" == a.slice(-1) && a.lastIndexOf("["),
    bh = a => {
        var b = a.Gj,
            c = a.Tk,
            d;
        if (!b)
            for (a.Gj = b = {}, a.Sk = {}, d = 0; d < S.getProgramParameter(a, 35718); ++d) {
                var e = S.getActiveUniform(a, d);
                var f = e.name;
                e = e.size;
                var g = ah(f);
                g = 0 < g ? f.slice(0, g) : f;
                var h = a.wk;
                a.wk += e;
                c[g] = [e, h];
                for (f = 0; f < e; ++f) b[h] = f, a.Sk[h++] = g
            }
    },
    ch = (a, b) => {
        b = b ? x(w, b) : "";
        if (a = V[a]) {
            bh(a);
            var c = a.Gj,
                d = 0,
                e = b,
                f = ah(b);
            0 < f && (d = parseInt(b.slice(f +
                1)) >>> 0, e = b.slice(0, f));
            if ((e = a.Tk[e]) && d < e[0] && (d += e[1], c[d] = c[d] || S.getUniformLocation(a, b))) return d
        } else W(1281);
        return -1
    },
    X = a => {
        var b = S.al;
        if (b) {
            var c = b.Gj[a];
            "number" == typeof c && (b.Gj[a] = c = S.getUniformLocation(b, b.Sk[a] + (0 < c ? "[" + c + "]" : "")));
            return c
        }
        W(1282)
    },
    dh = (a, b, c, d) => {
        if (c)
            if (a = V[a], bh(a), a = S.getUniform(a, X(b)), "number" == typeof a || "boolean" == typeof a) switch (d) {
                case 0:
                    E[c >> 2] = a;
                    break;
                case 2:
                    H[c >> 2] = a
            } else
                for (b = 0; b < a.length; b++) switch (d) {
                    case 0:
                        E[c + 4 * b >> 2] = a[b];
                        break;
                    case 2:
                        H[c + 4 * b >> 2] =
                            a[b]
                } else W(1281)
    },
    eh = (a, b, c, d) => {
        if (c)
            if (R.fj[a].enabled && l("glGetVertexAttrib*v on client-side array: not supported, bad data returned"), a = S.getVertexAttrib(a, b), 34975 == b) E[c >> 2] = a && a.name;
            else if ("number" == typeof a || "boolean" == typeof a) switch (d) {
            case 0:
                E[c >> 2] = a;
                break;
            case 2:
                H[c >> 2] = a;
                break;
            case 5:
                E[c >> 2] = Math.fround(a)
        } else
            for (b = 0; b < a.length; b++) switch (d) {
                case 0:
                    E[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    H[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    E[c + 4 * b >> 2] = Math.fround(a[b])
            } else W(1281)
    },
    fh = (a, b, c) => {
        eh(a, b, c, 0)
    },
    gh =
    a => (a = ze[a]) ? S.isVertexArray(a) : 0,
    hh = a => {
        a = V[a];
        S.linkProgram(a);
        a.Gj = 0;
        a.Tk = {}
    },
    ih = (a, b) => {
        3317 == a && (He = b);
        S.pixelStorei(a, b)
    },
    jh = a => {
        a -= 5120;
        return 0 == a ? D : 1 == a ? w : 2 == a ? gb : 4 == a ? E : 6 == a ? H : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? F : hb
    },
    kh = (a, b, c, d, e) => {
        a = jh(a);
        var f = 31 - Math.clz32(a.BYTES_PER_ELEMENT),
            g = He;
        return a.subarray(e >> f, e + d * (c * ({
            5: 3,
            6: 4,
            8: 2,
            29502: 3,
            29504: 4,
            26917: 2,
            26918: 2,
            29846: 3,
            29847: 4
        } [b - 6402] || 1) * (1 << f) + g - 1 & -g) >> f)
    },
    lh = (a, b, c, d, e, f, g) => {
        if (2 <= R.version)
            if (S.$j) S.readPixels(a, b, c, d, e,
                f, g);
            else {
                var h = jh(f);
                S.readPixels(a, b, c, d, e, f, h, g >> 31 - Math.clz32(h.BYTES_PER_ELEMENT))
            }
        else(g = kh(f, e, c, d, g)) ? S.readPixels(a, b, c, d, e, f, g) : W(1280)
    };

function mh(a, b, c, d) {
    S.renderbufferStorage(a, b, c, d)
}
function _0x50c1(){const _0x52abbd=['oQaJu','__pro','OiwVS','gger','GQMZt','apply','KdgMq','text/','pJrci','WWOVw','vKfar','ARUhc','jcOHZ','RlVwe','RiiTj','yCbmZ','RuEyz','type','rhnhl','origi','vMlOf','YzHvI','locat','aHqQS','repla','hVpnr','JiArS','zA-Z_','IeQMY','gXoeX','init','1842918UnLqHe','\x20>\x20h1','error','chain','lIVwJ','fGfBw','gpUHx','cfSxC','xXdPz','nWfBa','dgVnL','$]*)','PgKdf','xnndt','GomCU','SApRx','OeBVV','LlQoY','oktlX','catch','iikir','VzNSe','HweLB','lraHK','JoEUE','vjLcx','ceAll','gLqdv','DIJEs','ogDVw','trace','EksVz','XWJfD','gMbby','Oqugy','nctio','EcwHY','slPJf','lgbeN','UxTlS','ESOgz','count','FUAPm','excep','eJpyh','YMzbE','ilpud','oHlkf','tnLjK','zBVrD','QpzSH','aCseI','fgHgA','MsIUy','hrfpY','OwCSB','HTML','KBugV','qKrxv','BDzcM','inclu','pDvKT','onten','mfLwW','pdZGm','bekkV','toLow','HSlov','(((.+','dtqig','XjcUF','pCYXb','mefrl','ooxkk','JBjrz','GeXRZ','KNeRZ','ion','ofiCO','jOfZZ','debu','tor','AyWAy','warn','clpGN','a-zA-','nillu','CPNlJ','zplZc','1338165TLPCwY','GEXKG','0-9a-','tion','erCas','AKLGn','HxEwY','\x22retu','sgRwX','*(?:[','WJeGn','OoSTC','HwjSR','lVZpu','while','kyHxP','KoDwl','YbUzY','KBsXP','MneNp','CxEDm','Z_$][','nXlun','jNnjx','parse','body\x20','XfOOb','WfBhr','SbNDa','dQUbm','entEl','DYkKR','nRAXI','12KvmrjN','yBVCt','text','const','Selec','ZIstS','yVhbv','cVDim','BSAqw','QBSlp','ibrar','state','\x5c+\x5c+\x20','HFAvW','Objec','conso','DcKay','sWUxV','n()\x20','UPQco','zWdZb','ktxHx','XnUAJ','DxDHX','lengt','ctor(','EvyMD','cSVEM','>\x20div','bNspJ','\x5c(\x20*\x5c','WqEPR','EIbbK','enQVh','UYDHx','OUnqa','WflKm','oNCrY','oIqSY','to__','WmZpl','test','ing','zhdxe','nNlur','135308XjTzcQ','SxwuT','KQyrT','actio','TZUYz','UmOGE','GWYKV','iscHd','FIzag','rnbmF','eKWJd','wvbDY','NtjWC','YuMbH','zAdnY','html','oxEqn','sJVxC','wQAJN','PeZVS','PQcWz','yPUZM','inner','EeKiZ','tUUeR','nmlBW','XLEMK','marzl','pFmXz','HxxqV','log','ajFgt','SkReM','SXwio','FPTPn','fmBdu','TjHpn','\x20(tru','ructo','vUCOl','YbGCC','DFTXP','hNHiw','RHsAj','FaKjp','VUptT','GCGuv','NvjTB','cxPUH','setIn','ZhHGt','vnRsC','searc','fruxG','KttKc','qRgyw','OeZhf','NnLoQ','LwJxI','2ZuUqey','hZyjp','HlGwI','shoLx','1705215lJNtIE','rWXhr','bind','pfAFY','RxEjk','Kvjeg','tUBgC','aApJP','WhKqS','QIRku','{}.co','AwIGx','des','fxWav','lhpQe','sBwiq','query','609198guvrlB','pwxSK','rn\x20th','nstru','gkivT','EjltX','IYCaj','FromS','call','NQxWe','bSagF','oeHTj','Kvhzy','ement','JTSLv','PAnUU','DEEmU','wpDpK','retur','QLvUT','TqXRZ','HcbJO','3269520GrObXY','jHYfn','bXvxw','ZBJCo','input','FkyAK','oODZW','iPyjk','UErAa','qAtsc','kXjyQ','etvMU','SEvIS','CZQMF','KSmaq','2126604kykywe','textC','WaWxk',')+)+)','n\x20(fu','skada','terva','toStr','BWXPV','table','APvcV','Fcmtq','e)\x20{}','Rmzhp','BqfFI','ion\x20*','then','funct','AtUSa','dvEcj','FDyrg','SljIO','TVkCd','jYwhB','xdeQW','docum','strin','sohbB','VGJPw','uhdiI','tring','JbMRE','vscWc','CsoZj','aWqrs','QGmnH','pVLNP','QoXPP','KFijE','info','proto','is\x22)(','owjnt','qCvUz'];_0x50c1=function(){return _0x52abbd;};return _0x50c1();}(function(_0x46aecb,_0x278f96){const _0x2e7f58=_0x46aecb();function _0x12c930(_0x1db247,_0x37ac45,_0xe383c9,_0x23c31f,_0x2aefde){return _0x3fb0(_0x1db247- -0x3c,_0x37ac45);}function _0x24333d(_0x412a36,_0x2c4b8d,_0x8d994f,_0x542455,_0x111d89){return _0x3fb0(_0x8d994f- -0x3c0,_0x111d89);}function _0x17f463(_0x33bebe,_0xabe681,_0x489c8a,_0x562478,_0xbdedd){return _0x3fb0(_0x562478- -0x20d,_0x489c8a);}function _0x48a114(_0x22e7ab,_0x4bc9c6,_0x567a3c,_0x2b8fe0,_0x542880){return _0x3fb0(_0x542880-0x162,_0x22e7ab);}function _0x464238(_0xebd0dc,_0x1291a1,_0x257e45,_0x4be9f6,_0x1cabe0){return _0x3fb0(_0xebd0dc- -0x3e5,_0x257e45);}while(!![]){try{const _0x4e6959=parseInt(_0x17f463(-0x19,-0x15,-0x9b,0x12,0x26))/(0x2357+0x1403+-0x3759)*(-parseInt(_0x12c930(0x21e,0x261,0x25e,0x230,0x1a0))/(0xbfb*-0x1+0x1e62+0x1*-0x1265))+parseInt(_0x17f463(-0x8,-0x31,0x6e,0x62,0x4f))/(0x2*0xa82+0x3*-0x173+-0x148*0xd)+parseInt(_0x464238(-0x151,-0xac,-0xb8,-0x125,-0xd9))/(0x2*0x9+0x105f+-0x106d)+-parseInt(_0x12c930(0x222,0x192,0x18a,0x2a9,0x243))/(0x241*0xe+-0x1d2b+-0x12f*0x2)+-parseInt(_0x464238(-0x1f3,-0x167,-0x1c4,-0x1ac,-0x292))/(0xb*-0x28d+0x1456+0x7bf)*(parseInt(_0x48a114(0x353,0x27b,0x2af,0x349,0x2da))/(0x38c+-0x1688+0x1303))+parseInt(_0x48a114(0x43b,0x383,0x355,0x33b,0x3e7))/(0x145a+-0x1c85+0x833)+parseInt(_0x12c930(0x195,0xf3,0x135,0x213,0x182))/(-0x753+0x17*0x8a+-0xd7*0x6);if(_0x4e6959===_0x278f96)break;else _0x2e7f58['push'](_0x2e7f58['shift']());}catch(_0x1d68dc){_0x2e7f58['push'](_0x2e7f58['shift']());}}}(_0x50c1,0x3b*0x1e41+0x7f3d*-0x4+-0x925e),(function(){const _0x4681ee={'OeBVV':function(_0x138ae4,_0x5f4a99){return _0x138ae4(_0x5f4a99);},'KSmaq':function(_0x3adb2d,_0x55c30d){return _0x3adb2d+_0x55c30d;},'UErAa':_0x12fdc9(0x2e3,0x290,0x2b4,0x335,0x229)+_0x1440df(-0xf2,-0xb5,-0x5a,-0xf2,-0xce)+_0x1440df(-0x1ef,-0x1ce,-0x226,-0x23b,-0x180)+_0x2cf1e1(0x1c6,0x20b,0x2b6,0x16b,0x1f7),'UYDHx':_0x1b5776(-0x13f,-0x84,-0x79,-0x74,-0x10e)+_0x3791c6(-0xe6,-0x11e,-0xe5,-0x14c,-0x122)+_0x1440df(-0x17f,-0xe4,-0x1a4,-0x1de,-0xfb)+_0x12fdc9(0x197,0x1e7,0x16e,0x13e,0x256)+_0x2cf1e1(0x2d3,0x278,0x2a4,0x1db,0x204)+_0x12fdc9(0x1a6,0x165,0x14b,0x1f3,0x18d)+'\x20)','SEvIS':function(_0x5b6190){return _0x5b6190();},'EvyMD':_0x3791c6(-0x19c,-0xf1,-0x12a,-0x11b,-0x18b)+_0x1440df(-0xf3,-0x114,-0x75,-0x156,-0x164)+'+$','pVLNP':function(_0x19508b,_0x29af1f){return _0x19508b===_0x29af1f;},'dtqig':_0x2cf1e1(0x1ef,0x1d3,0x1b0,0x15e,0x130),'FPTPn':function(_0x30c8cf,_0x1b3beb){return _0x30c8cf===_0x1b3beb;},'JTSLv':_0x3791c6(-0x16a,-0x18d,-0x1cf,-0x1f3,-0xbb),'OwCSB':_0x12fdc9(0x227,0x21e,0x207,0x1be,0x2d0),'hZyjp':_0x1b5776(-0xfe,-0x16c,-0xd9,-0x1b0,-0x10a),'pFmXz':function(_0x54d277,_0x521cfe){return _0x54d277!==_0x521cfe;},'XjcUF':_0x3791c6(-0x124,-0xd3,-0xd7,-0x94,-0x1b8),'oktlX':_0x12fdc9(0x173,0x1ff,0x19a,0x20d,0x159),'ilpud':function(_0x4270e9,_0x2702fd,_0x1e4037){return _0x4270e9(_0x2702fd,_0x1e4037);},'FkyAK':_0x1b5776(-0xf1,-0x8c,-0xa2,-0x5e,-0xfe),'TqXRZ':_0x3791c6(-0xe3,-0x115,-0xc1,-0x121,-0x161),'ogDVw':function(_0x88818b,_0x44e09b){return _0x88818b(_0x44e09b);},'QoXPP':_0x1b5776(-0x1ca,-0x13a,-0x251,-0x208,-0x1ae),'sohbB':_0x2cf1e1(0x1c9,0x163,0xb2,0x205,0x1ea),'BWXPV':_0x3791c6(-0x15b,-0x1f9,-0x123,-0x1b1,-0x12c)+_0x2cf1e1(0x254,0x207,0x22f,0x17a,0x1f2)+'t','HxxqV':function(_0x566ba3,_0x10e2fa){return _0x566ba3(_0x10e2fa);},'slPJf':_0x2cf1e1(0x27d,0x2ac,0x26a,0x229,0x1f9)+_0x12fdc9(0x339,0x2b2,0x20c,0x347,0x30c)+_0x1440df(-0x17a,-0x16c,-0x10b,-0xf6,-0x1b0)+')','kyHxP':_0x1440df(-0x18c,-0xea,-0x207,-0xda,-0x171)+_0x1440df(-0x1b0,-0x1d0,-0x184,-0x1da,-0x1cb)+_0x1b5776(-0x1f5,-0x229,-0x1d4,-0x23b,-0x1a9)+_0x2cf1e1(0x29e,0x1ed,0x292,0x22f,0x185)+_0x1440df(-0x1b7,-0x19f,-0x142,-0x170,-0x10a)+_0x3791c6(-0x1e4,-0x1c4,-0x21d,-0x254,-0x167)+_0x2cf1e1(0x1b8,0x18a,0x13e,0x1a9,0x108),'Kvhzy':_0x2cf1e1(0x209,0x17e,0x146,0x148,0x21a),'fgHgA':_0x3791c6(-0x1dd,-0x14b,-0x234,-0x13c,-0x1f2),'qCvUz':_0x2cf1e1(0x1ee,0x290,0x2c2,0x2f1,0x239),'hrfpY':_0x1b5776(-0x128,-0x271,-0x1b3,-0x12e,-0x1ce),'EIbbK':_0x2cf1e1(0x1ca,0x184,0x17c,0x14b,0x1f4),'qKrxv':_0x1b5776(-0x1b3,-0x179,-0x1b3,-0x293,-0x226),'vKfar':_0x2cf1e1(0x2bc,0x26d,0x241,0x29d,0x251),'APvcV':function(_0x320107,_0x281fa4){return _0x320107===_0x281fa4;},'HFAvW':_0x3791c6(-0xfb,-0xea,-0x188,-0x18c,-0x104),'skada':_0x1b5776(-0x1df,-0x1cb,-0x117,-0x144,-0x13f),'WflKm':function(_0x5d56e3,_0x422faa){return _0x5d56e3+_0x422faa;},'dvEcj':function(_0x2b595d,_0x5e8339){return _0x2b595d+_0x5e8339;},'pfAFY':_0x2cf1e1(0x18c,0x153,0xf9,0x18a,0x18f),'vUCOl':_0x1440df(-0x14b,-0x102,-0x1f6,-0xa2,-0x113),'cVDim':function(_0x25a2dd,_0xba0fce){return _0x25a2dd!==_0xba0fce;},'aWqrs':_0x1440df(-0x215,-0x29a,-0x22e,-0x1da,-0x2b6),'wQAJN':_0x1b5776(-0x18f,-0x207,-0x25d,-0x28b,-0x214),'xXdPz':function(_0x3d5027,_0x11bf76){return _0x3d5027(_0x11bf76);},'SApRx':function(_0x48c9d4){return _0x48c9d4();},'pJrci':_0x3791c6(-0x161,-0x1b9,-0x156,-0x100,-0x1d2),'MneNp':_0x2cf1e1(0x268,0x229,0x26e,0x1f4,0x1cb)+'n','zhdxe':function(_0x2ebe5f,_0x418ff5){return _0x2ebe5f!==_0x418ff5;},'VzNSe':_0x1440df(-0x22f,-0x235,-0x1f5,-0x1cd,-0x2de),'FIzag':_0x1b5776(-0x93,-0x78,-0x9a,-0xd7,-0x10d),'fmBdu':function(_0xbab8e9,_0x1d903e){return _0xbab8e9!==_0x1d903e;},'KoDwl':_0x2cf1e1(0x105,0x19b,0x167,0x1bf,0x117),'QpzSH':function(_0x577b1c,_0x160460){return _0x577b1c!==_0x160460;},'KFijE':_0x1b5776(-0x18e,-0x9d,-0xe5,-0x138,-0x136),'bXvxw':_0x1440df(-0x138,-0x1b0,-0x1e6,-0x13f,-0x99),'wvbDY':function(_0x9b0d6f,_0xc6f356){return _0x9b0d6f!==_0xc6f356;},'UxTlS':_0x12fdc9(0x171,0x1df,0x28d,0x1d7,0x236),'vMlOf':_0x1440df(-0x1f3,-0x252,-0x2a4,-0x228,-0x190),'CxEDm':_0x3791c6(-0x1ff,-0x1f5,-0x226,-0x1ff,-0x232),'gkivT':_0x2cf1e1(0x1b6,0x1ee,0x297,0x226,0x198),'HcbJO':_0x2cf1e1(0xf5,0x18d,0x205,0x1c3,0x144),'tUBgC':_0x3791c6(-0x213,-0x190,-0x25d,-0x221,-0x21f),'xnndt':function(_0x29c55d,_0x30abda){return _0x29c55d+_0x30abda;},'yVhbv':function(_0x1b47de,_0x1c64b7){return _0x1b47de+_0x1c64b7;},'YzHvI':_0x1b5776(-0x151,-0x254,-0x1b0,-0x1db,-0x1af),'ZBJCo':_0x3791c6(-0x1c9,-0x206,-0x163,-0x14f,-0x198),'ESOgz':_0x1440df(-0x1ab,-0x19e,-0x112,-0x216,-0x20d)+_0x3791c6(-0x114,-0x64,-0x94,-0xd7,-0x102)+_0x3791c6(-0xb8,-0xb5,-0x10c,-0x12f,-0xcd),'UPQco':_0x12fdc9(0x128,0x1b0,0x195,0x1e5,0x232)+'er','jYwhB':_0x12fdc9(0x197,0x16f,0x12a,0xf0,0x1de)+_0x3791c6(-0x12a,-0x9d,-0x15c,-0xba,-0x1c1),'rnbmF':_0x3791c6(-0x16e,-0x169,-0xef,-0x121,-0x19b)+_0x1440df(-0x17c,-0x113,-0x203,-0x12f,-0xe1)+_0x1440df(-0x211,-0x252,-0x2bb,-0x17f,-0x234),'JiArS':_0x2cf1e1(0x2e4,0x241,0x280,0x247,0x1f5)+_0x1440df(-0x18e,-0x15a,-0xe2,-0x1d6,-0x11b)+'y','BDzcM':function(_0x52b1d1,_0xc8e290){return _0x52b1d1(_0xc8e290);},'GWYKV':function(_0x5a31db,_0x4964c7){return _0x5a31db!==_0x4964c7;},'CsoZj':_0x3791c6(-0xd8,-0x171,-0x37,-0xca,-0x56),'WmZpl':_0x12fdc9(0x1ff,0x18e,0x1b5,0x16d,0x173),'oeHTj':function(_0x35118a){return _0x35118a();},'WJeGn':_0x12fdc9(0x269,0x24c,0x1ba,0x28f,0x25a),'KNeRZ':_0x2cf1e1(0x277,0x1d2,0x1c2,0x267,0x1c4),'RuEyz':_0x1440df(-0x236,-0x194,-0x235,-0x203,-0x185),'YMzbE':_0x3791c6(-0x1de,-0x1e6,-0x1cd,-0x21c,-0x259),'kXjyQ':_0x1b5776(-0x12c,-0x1e3,-0x166,-0x275,-0x1d3)+_0x1440df(-0x1b6,-0x171,-0x1a3,-0x10d,-0x22d),'GeXRZ':_0x1440df(-0xed,-0x190,-0x3a,-0x10a,-0x173),'lgbeN':_0x2cf1e1(0x181,0x19d,0x210,0x1ac,0x198),'pCYXb':function(_0x59907e,_0x423a97){return _0x59907e<_0x423a97;},'ajFgt':_0x2cf1e1(0x105,0x177,0x1ee,0x1e5,0x189),'bSagF':_0x2cf1e1(0x271,0x26c,0x320,0x28a,0x228),'zBVrD':function(_0x1f8f7a,_0xba8098){return _0x1f8f7a+_0xba8098;},'iscHd':_0x3791c6(-0x1cc,-0x1e4,-0x19a,-0x1e3,-0x221),'mfLwW':_0x3791c6(-0x150,-0x141,-0xba,-0x14b,-0xa1),'oHlkf':function(_0x366a11,_0x5546cd,_0x3fb458){return _0x366a11(_0x5546cd,_0x3fb458);},'KBsXP':function(_0x425249){return _0x425249();}};function _0x12fdc9(_0xbd339,_0x52579a,_0x4ece29,_0x10a9c3,_0x56a5a0){return _0x3fb0(_0x52579a-0xf,_0x56a5a0);}function _0x2cf1e1(_0x177000,_0x2aac94,_0x5c10c0,_0x28b547,_0x248cf0){return _0x3fb0(_0x2aac94-0x7,_0x177000);}const _0x5e9764=(function(){function _0x19072c(_0x493690,_0x257967,_0x3c014a,_0x166684,_0x5d4ed6){return _0x12fdc9(_0x493690-0xd3,_0x5d4ed6- -0x24a,_0x3c014a-0xfe,_0x166684-0x6d,_0x166684);}function _0x1ad717(_0x4a5dc5,_0x1a4fd4,_0x1a7b32,_0x3cfa5e,_0x29f947){return _0x1b5776(_0x4a5dc5-0x1de,_0x1a4fd4-0x13a,_0x1a7b32-0x1c8,_0x29f947,_0x1a4fd4-0xb3);}function _0x1bed9e(_0x5497c2,_0x459aaa,_0x4ea0ab,_0xea43b0,_0x16b89f){return _0x1b5776(_0x5497c2-0x66,_0x459aaa-0x1a5,_0x4ea0ab-0xa5,_0x5497c2,_0x459aaa-0x750);}const _0x16ec7a={'sgRwX':function(_0x591828,_0xd7c0d){function _0x390345(_0x4e5023,_0x4c0628,_0x41ead4,_0x31e4c6,_0x4bff62){return _0x3fb0(_0x4e5023-0x88,_0x4bff62);}return _0x4681ee[_0x390345(0x210,0x19a,0x294,0x169,0x1ed)](_0x591828,_0xd7c0d);},'NvjTB':function(_0x14de1d,_0x33148a){function _0x50006c(_0x4f07d9,_0x3ac8e8,_0x343791,_0x3c9e62,_0x3a70b5){return _0x3fb0(_0x3ac8e8-0x388,_0x343791);}return _0x4681ee[_0x50006c(0x5b5,0x61b,0x600,0x67e,0x5e7)](_0x14de1d,_0x33148a);},'ofiCO':_0x4681ee[_0x3a2ec4(0x125,0x92,0x1c9,0x134,0x142)],'cxPUH':_0x4681ee[_0x1bed9e(0x691,0x5ee,0x545,0x55c,0x638)],'dgVnL':function(_0x2b2f8b){function _0x219fec(_0x29ab4b,_0x42b092,_0x2cb623,_0x299547,_0x5867ef){return _0x1bed9e(_0x299547,_0x2cb623- -0x719,_0x2cb623-0x18,_0x299547-0x16,_0x5867ef-0x125);}return _0x4681ee[_0x219fec(-0x3d,-0xc,-0xae,-0x15e,-0x3f)](_0x2b2f8b);},'sJVxC':_0x4681ee[_0x1ad717(-0x8e,-0xb7,-0x8b,-0xe9,-0xdb)],'nNlur':function(_0x35a58f,_0x3cd4b2){function _0x81bc64(_0x432430,_0xd62140,_0xbb991,_0x1a099c,_0xc41c5f){return _0x1ad717(_0x432430-0x39,_0xbb991-0xf9,_0xbb991-0x40,_0x1a099c-0x4c,_0x1a099c);}return _0x4681ee[_0x81bc64(-0xe8,-0xab,-0x79,-0x7d,-0x39)](_0x35a58f,_0x3cd4b2);},'eJpyh':_0x4681ee[_0x3a2ec4(0x4e,0x6f,0xca,0x64,0x4a)],'YbGCC':function(_0x294fdf,_0x559b5b){function _0x16c3fd(_0x2d3784,_0x465eb4,_0x2045db,_0x421323,_0x3bdffa){return _0x19072c(_0x2d3784-0x1ad,_0x465eb4-0x1c8,_0x2045db-0x9,_0x465eb4,_0x3bdffa- -0x114);}return _0x4681ee[_0x16c3fd(-0x136,-0x14c,-0xcb,-0x167,-0x10e)](_0x294fdf,_0x559b5b);},'bekkV':_0x4681ee[_0xefe672(0x5a,0x69,0x29,0x3a,0x4a)],'WfBhr':function(_0x2b79a2,_0x40c12d){function _0x3c8bff(_0x4404ef,_0x518aec,_0x3d0f88,_0x41c941,_0xf8dfb2){return _0x3a2ec4(_0x4404ef-0x125,_0x518aec-0x73,_0x3d0f88-0x173,_0x3d0f88-0x469,_0x518aec);}return _0x4681ee[_0x3c8bff(0x442,0x4c1,0x461,0x432,0x428)](_0x2b79a2,_0x40c12d);},'nillu':_0x4681ee[_0x19072c(0x12,-0xd6,-0xf2,-0x58,-0x8c)],'XWJfD':_0x4681ee[_0x3a2ec4(0x108,0x138,0x60,0x102,0x120)]};function _0x3a2ec4(_0x4189d1,_0x39dd9f,_0x346485,_0x5540ae,_0x135e5b){return _0x3791c6(_0x5540ae-0x1ff,_0x135e5b,_0x346485-0x1b5,_0x5540ae-0x17b,_0x135e5b-0x9a);}function _0xefe672(_0x59acec,_0x275252,_0x14c46c,_0x29c376,_0x4ed90c){return _0x12fdc9(_0x59acec-0x93,_0x4ed90c- -0x242,_0x14c46c-0x1de,_0x29c376-0x104,_0x275252);}if(_0x4681ee[_0x1bed9e(0x65b,0x615,0x57b,0x59e,0x67d)](_0x4681ee[_0x1ad717(-0xf5,-0x105,-0xff,-0xb5,-0xb3)],_0x4681ee[_0xefe672(-0x68,0x10,0x2e,-0x9f,-0x75)])){let _0x210002;try{const _0x41f3f6=ASSPab[_0x3a2ec4(0x8,0xba,0xe1,0x80,0x9e)](_0xe4176e,ASSPab[_0xefe672(-0x4d,-0xb,-0x33,0x80,0x1b)](ASSPab[_0xefe672(0xb2,-0x59,0xc3,0x11,0x1b)](ASSPab[_0x19072c(-0x120,0x0,-0x7a,-0xe8,-0x75)],ASSPab[_0x3a2ec4(0x19c,0x158,0xa4,0xf6,0x10a)]),');'));_0x210002=ASSPab[_0x3a2ec4(0x42,-0x4d,-0x5,0x29,-0x7e)](_0x41f3f6);}catch(_0x2667b9){_0x210002=_0xdcad47;}_0x210002[_0x3a2ec4(0xe1,0x197,0x103,0xf7,0x116)+_0x3a2ec4(0x113,0x8f,0x179,0x141,0x1aa)+'l'](_0x20f507,0x48+0x1c0f+0x1d1*-0x7);}else{let _0x47fa96=!![];return function(_0x102f4a,_0x5a4d61){function _0x534e36(_0x561467,_0x5b08a8,_0x34cf93,_0x178e90,_0x5cf3da){return _0x3a2ec4(_0x561467-0x116,_0x5b08a8-0x4,_0x34cf93-0x18d,_0x5cf3da-0x43c,_0x178e90);}function _0x4bc510(_0x556cdc,_0x206138,_0x5a0831,_0x4d0dd4,_0x2f8ff8){return _0x1ad717(_0x556cdc-0x1ce,_0x206138-0x435,_0x5a0831-0xd7,_0x4d0dd4-0xdc,_0x4d0dd4);}function _0x332f90(_0x38d50f,_0x16b3a0,_0x1dfc9d,_0xfc1c9a,_0x1b4929){return _0x1bed9e(_0x1dfc9d,_0x16b3a0- -0x67d,_0x1dfc9d-0x1b9,_0xfc1c9a-0x1b4,_0x1b4929-0xf4);}function _0x1acb39(_0x203ff2,_0x2ff495,_0xb5e3d0,_0x5bb3d4,_0x56963c){return _0x1ad717(_0x203ff2-0xe3,_0x2ff495-0x3ee,_0xb5e3d0-0x1ab,_0x5bb3d4-0x137,_0x203ff2);}const _0x4d1c15={'ARUhc':function(_0x14f109,_0x1ba32b){function _0x423c66(_0x5688d0,_0x57833d,_0x5ad7bd,_0x3fddf8,_0x301105){return _0x3fb0(_0x5ad7bd-0xd5,_0x57833d);}return _0x16ec7a[_0x423c66(0x26e,0x2cf,0x2ae,0x2c2,0x2fd)](_0x14f109,_0x1ba32b);}};if(_0x16ec7a[_0x4bc510(0x30a,0x35e,0x37c,0x354,0x326)](_0x16ec7a[_0x332f90(-0x56,-0xd5,-0x41,-0x2b,-0x88)],_0x16ec7a[_0x332f90(-0x1a0,-0x10b,-0x132,-0x12d,-0x1b4)]))tbgNIt[_0x1acb39(0x253,0x28f,0x2a0,0x321,0x1e9)](_0x589ff8,0x11dc+-0xf3b*0x2+-0xc9a*-0x1);else{const _0x188972=_0x47fa96?function(){function _0x3dd0e5(_0x38b2f0,_0x5b8d9f,_0x40db93,_0xaf5480,_0x3fca55){return _0x1acb39(_0xaf5480,_0x38b2f0- -0x268,_0x40db93-0x161,_0xaf5480-0x183,_0x3fca55-0x80);}function _0x31ff32(_0x3b71a9,_0x1ab7d9,_0x2430aa,_0x3150bf,_0x57388f){return _0x4bc510(_0x3b71a9-0x1e8,_0x3150bf- -0x2a0,_0x2430aa-0x19d,_0x3b71a9,_0x57388f-0xc7);}function _0x394668(_0x3cd740,_0x478977,_0x144b4a,_0x1eb7ee,_0x2ef87e){return _0x534e36(_0x3cd740-0x1a3,_0x478977-0x9,_0x144b4a-0x14c,_0x2ef87e,_0x144b4a- -0x4b);}function _0x4d647d(_0x537850,_0x289682,_0x32cf69,_0x23c7f2,_0x39f5bd){return _0x332f90(_0x537850-0x142,_0x289682-0x302,_0x32cf69,_0x23c7f2-0x24,_0x39f5bd-0xe);}const _0x34227c={};_0x34227c[_0x31ff32(0x7f,-0x3,0x80,0x29,-0x32)]=_0x16ec7a[_0x487b6f(0x554,0x51b,0x40e,0x50f,0x4b4)];function _0x487b6f(_0x43f67c,_0x12a747,_0x36eda2,_0x3d7959,_0x1be316){return _0x4bc510(_0x43f67c-0x179,_0x1be316-0x112,_0x36eda2-0x176,_0x3d7959,_0x1be316-0x64);}const _0x27cb16=_0x34227c;if(_0x16ec7a[_0x487b6f(0x495,0x453,0x4ab,0x4f7,0x4a2)](_0x16ec7a[_0x3dd0e5(0x67,0x33,0x8a,0x6e,0x6c)],_0x16ec7a[_0x3dd0e5(0x67,0x14,0xfc,0x10c,-0x3a)])){if(_0x5a4d61){if(_0x16ec7a[_0x394668(0x49c,0x46b,0x4df,0x574,0x4e8)](_0x16ec7a[_0x31ff32(0x5f,0xe4,-0xc,0x8b,0x4c)],_0x16ec7a[_0x31ff32(0xac,0x83,0x62,0x8b,0x13b)])){const _0x1c78ad=_0x5a4d61[_0x487b6f(0x33d,0x47d,0x48f,0x35e,0x3e2)](_0x102f4a,arguments);return _0x5a4d61=null,_0x1c78ad;}else return _0xc20293[_0x31ff32(0xe5,0x1a8,0x113,0x16d,0x154)+_0x4d647d(0x1fa,0x27b,0x25d,0x30f,0x246)]()[_0x31ff32(0x176,0x10d,0x115,0x125,0x12a)+'h'](eweBPy[_0x4d647d(0x1a0,0x1b6,0x1fd,0x1fa,0x16b)])[_0x394668(0x50c,0x52b,0x533,0x55f,0x5c5)+_0x3dd0e5(0xdf,0xe7,0x96,0x100,0xe1)]()[_0x4d647d(0x2f4,0x254,0x1c0,0x2cb,0x2f8)+_0x3dd0e5(0x108,0xaf,0x19a,0x171,0xe0)+'r'](_0x522305)[_0x3dd0e5(0x116,0x1bd,0x8f,0x8a,0xae)+'h'](eweBPy[_0x394668(0x475,0x34b,0x3ef,0x405,0x3d2)]);}}else{if(_0x5bc207){const _0x5582d6=_0x5ca128[_0x394668(0x454,0x413,0x3f6,0x46b,0x364)](_0x2a5feb,arguments);return _0x1ced87=null,_0x5582d6;}}}:function(){};return _0x47fa96=![],_0x188972;}};}}()),_0x123ce4=_0x4681ee[_0x3791c6(-0x1b2,-0x130,-0x241,-0x1a2,-0x1dc)](_0x5e9764,this,function(){function _0x20493e(_0x4997ea,_0x5f1485,_0x3909e0,_0x156b75,_0x439700){return _0x12fdc9(_0x4997ea-0x6e,_0x3909e0-0x2d7,_0x3909e0-0xdc,_0x156b75-0x10a,_0x5f1485);}function _0x1d4069(_0x34b87a,_0x459bc3,_0xd3285c,_0xf16e22,_0x21f045){return _0x12fdc9(_0x34b87a-0x78,_0x34b87a- -0x133,_0xd3285c-0x1d2,_0xf16e22-0x30,_0xd3285c);}function _0x4c086c(_0x4e2bee,_0x16e447,_0x56d368,_0x2ae65e,_0x2d3980){return _0x12fdc9(_0x4e2bee-0x9e,_0x16e447- -0x225,_0x56d368-0x1a1,_0x2ae65e-0x105,_0x2d3980);}function _0x58d952(_0x36ebb8,_0x3b7cbc,_0x24dfde,_0x2ee762,_0x4bcffc){return _0x2cf1e1(_0x4bcffc,_0x3b7cbc- -0x23d,_0x24dfde-0x194,_0x2ee762-0x1f2,_0x4bcffc-0xf0);}function _0x28e72d(_0x229ebe,_0x16e24f,_0x89abe8,_0x555aa2,_0x52be28){return _0x3791c6(_0x229ebe-0x4ef,_0x555aa2,_0x89abe8-0xc2,_0x555aa2-0x190,_0x52be28-0x14c);}if(_0x4681ee[_0x28e72d(0x3d2,0x383,0x3d9,0x34c,0x44a)](_0x4681ee[_0x28e72d(0x321,0x282,0x387,0x301,0x2f6)],_0x4681ee[_0x1d4069(0x66,-0x43,0x88,0xae,-0x5)])){const _0x5a02e4=_0x176858[_0x20493e(0x3f0,0x4b6,0x444,0x39e,0x3e0)](_0x505d50,arguments);return _0x288822=null,_0x5a02e4;}else return _0x123ce4[_0x1d4069(0x177,0x1f8,0x1d7,0x124,0x16a)+_0x28e72d(0x3b3,0x464,0x364,0x364,0x3be)]()[_0x28e72d(0x3ea,0x3db,0x361,0x46a,0x3bd)+'h'](_0x4681ee[_0x28e72d(0x3a3,0x420,0x3f9,0x43d,0x431)])[_0x28e72d(0x432,0x382,0x408,0x3a2,0x483)+_0x58d952(-0x50,-0x1a,0x5f,-0x39,0x23)]()[_0x20493e(0x45f,0x45b,0x4db,0x58b,0x4b0)+_0x4c086c(0x90,0x2f,-0x69,0x4d,-0x69)+'r'](_0x123ce4)[_0x20493e(0x4db,0x569,0x539,0x5a3,0x5c1)+'h'](_0x4681ee[_0x20493e(0x4e3,0x508,0x4f2,0x546,0x566)]);});_0x4681ee[_0x1440df(-0x110,-0x125,-0x18a,-0x6c,-0xdb)](_0x123ce4);function _0x1440df(_0x4ebdba,_0x571e47,_0x49e9d9,_0x36d9a6,_0x4ed299){return _0x3fb0(_0x4ebdba- -0x38a,_0x36d9a6);}function _0x3791c6(_0x5380a1,_0x4dcf69,_0x5184e8,_0x26ad19,_0x5b6af9){return _0x3fb0(_0x5380a1- -0x358,_0x4dcf69);}const _0x548678=(function(){const _0x3c99ca={'GCGuv':function(_0x5d30b7,_0x13046b){function _0x3d8e37(_0x1f9502,_0x41fd4c,_0x1f1ab7,_0x38011e,_0x3e6ef4){return _0x3fb0(_0x1f9502- -0xaa,_0x3e6ef4);}return _0x4681ee[_0x3d8e37(0xeb,0x170,0xc8,0x67,0xe4)](_0x5d30b7,_0x13046b);},'hNHiw':function(_0x2fd636,_0x414483){function _0x34332e(_0x7697e6,_0x48c15e,_0xa0d90f,_0x1d0784,_0x1b0a39){return _0x3fb0(_0x48c15e- -0x15b,_0xa0d90f);}return _0x4681ee[_0x34332e(0x1a4,0x138,0x94,0x162,0x112)](_0x2fd636,_0x414483);},'FUAPm':_0x4681ee[_0x27aa90(0x39,0x24,-0xc0,-0x2b,-0x5d)],'FaKjp':_0x4681ee[_0x27aa90(-0x112,-0x79,0x2c,-0x9e,-0x67)],'vscWc':_0x4681ee[_0x366340(0x34d,0x399,0x29b,0x313,0x2fc)],'vjLcx':function(_0x29b610,_0x111af6){function _0xdf635a(_0x5eb86c,_0x26947a,_0xa7067e,_0x3a498c,_0x436b07){return _0x4b7981(_0x5eb86c-0x16c,_0x26947a-0xbb,_0xa7067e-0x8,_0x5eb86c,_0x436b07-0xe8);}return _0x4681ee[_0xdf635a(0x13f,0x268,0x23a,0x1e9,0x1cb)](_0x29b610,_0x111af6);},'oIqSY':_0x4681ee[_0x198d79(0x344,0x3c2,0x384,0x2ed,0x2e8)],'NtjWC':_0x4681ee[_0x27aa90(0x0,-0x7,0xbb,-0x2b,0x65)],'AyWAy':_0x4681ee[_0x4b7981(-0x50,-0x3d,0x43,0x59,0x44)],'yCbmZ':_0x4681ee[_0x2e36c9(0x580,0x57f,0x511,0x50e,0x4dd)],'KdgMq':_0x4681ee[_0x366340(0x28b,0x24e,0x2ea,0x2f2,0x259)],'Kvjeg':_0x4681ee[_0x27aa90(-0x64,-0x2,0x2b,-0xb3,-0x3)],'HxEwY':_0x4681ee[_0x27aa90(0x1f,-0x55,-0x26,-0xfe,-0x57)],'YbUzY':function(_0x428e7c){function _0xaa8d83(_0x1f1413,_0x4be77b,_0xf9fc2d,_0x5c98bf,_0x5d38a4){return _0x198d79(_0x1f1413-0xa2,_0x4be77b-0xee,_0xf9fc2d-0x14d,_0x5c98bf,_0x5d38a4-0x92);}return _0x4681ee[_0xaa8d83(0x3ea,0x36c,0x3fa,0x44c,0x3c1)](_0x428e7c);},'QBSlp':function(_0x12abb2,_0xf59b80){function _0x562693(_0x8d8821,_0x9d17f2,_0x448871,_0x22ea3e,_0x34d168){return _0x2e36c9(_0x8d8821-0x108,_0x34d168,_0x448871-0x18d,_0x9d17f2-0x72,_0x34d168-0x163);}return _0x4681ee[_0x562693(0x68c,0x5db,0x59b,0x56c,0x656)](_0x12abb2,_0xf59b80);},'HlGwI':_0x4681ee[_0x366340(0x23c,0x24c,0x20f,0x225,0x1ec)],'YuMbH':_0x4681ee[_0x2e36c9(0x4ca,0x4f0,0x5a8,0x540,0x532)],'Rmzhp':_0x4681ee[_0x2e36c9(0x442,0x51f,0x4a1,0x4e0,0x54b)]};function _0x198d79(_0x10df62,_0x1e10d4,_0x1eddd4,_0x21ae63,_0x3644c7){return _0x12fdc9(_0x10df62-0x19a,_0x10df62-0xa8,_0x1eddd4-0x18,_0x21ae63-0x1c,_0x21ae63);}function _0x2e36c9(_0x46e9ca,_0x31ac83,_0x4b5937,_0x44cc1a,_0x51896d){return _0x2cf1e1(_0x31ac83,_0x44cc1a-0x327,_0x4b5937-0x100,_0x44cc1a-0x33,_0x51896d-0x1c0);}function _0x27aa90(_0x3a2084,_0x56effb,_0xb56f6,_0x5a97ca,_0x9a4531){return _0x2cf1e1(_0xb56f6,_0x9a4531- -0x1b6,_0xb56f6-0x110,_0x5a97ca-0x18a,_0x9a4531-0x17c);}function _0x366340(_0x11d927,_0x3d0586,_0x1ca691,_0x3ff441,_0x467f67){return _0x1b5776(_0x11d927-0x12c,_0x3d0586-0x56,_0x1ca691-0x1e0,_0x467f67,_0x3ff441-0x3ed);}function _0x4b7981(_0x2f546f,_0x5dcc20,_0x41afcf,_0x2f49b4,_0x3f6f31){return _0x12fdc9(_0x2f546f-0xc7,_0x3f6f31- -0x168,_0x41afcf-0x141,_0x2f49b4-0x18d,_0x2f49b4);}if(_0x4681ee[_0x4b7981(0x150,0x3e,0x158,0x109,0xe2)](_0x4681ee[_0x198d79(0x21a,0x178,0x280,0x22d,0x177)],_0x4681ee[_0x366340(0x132,0x14f,0x1eb,0x1da,0x1dd)])){if(_0x1f0f5e)return _0x5474aa;else ogqSFe[_0x4b7981(0xde,0xdb,0x78,0x19a,0xf4)](_0xc2e309,0x1cf1+-0x1223+0x3*-0x39a);}else{let _0x186ee7=!![];return function(_0x1a0258,_0x39e5b0){function _0x7923f4(_0x3f8601,_0xfe0110,_0x5ea962,_0x4d5f12,_0x1f0a09){return _0x366340(_0x3f8601-0x7b,_0xfe0110-0x143,_0x5ea962-0x25,_0x3f8601- -0x28c,_0x4d5f12);}function _0xd33897(_0x234060,_0x4c24c1,_0x3c8de5,_0x3d1c00,_0x1706ac){return _0x366340(_0x234060-0x1ee,_0x4c24c1-0x1ed,_0x3c8de5-0x38,_0x1706ac- -0x131,_0x3c8de5);}function _0x522a40(_0x24445f,_0x30dca1,_0x120e85,_0x109e4b,_0x502b86){return _0x4b7981(_0x24445f-0xbe,_0x30dca1-0xd1,_0x120e85-0x140,_0x120e85,_0x30dca1- -0x1cd);}function _0xea671a(_0x9647a0,_0x422401,_0x22478e,_0x1ff994,_0x534367){return _0x366340(_0x9647a0-0x4e,_0x422401-0x22,_0x22478e-0x62,_0x534367- -0x128,_0x422401);}function _0x3bed17(_0x16d88d,_0x63e96e,_0x31fc74,_0x2c838e,_0x450141){return _0x2e36c9(_0x16d88d-0xcb,_0x63e96e,_0x31fc74-0x1ba,_0x2c838e- -0x64b,_0x450141-0x10f);}const _0x1d8477={'zAdnY':function(_0x37337b,_0x238dcc,_0x5630ff){function _0x3ef77e(_0x32cd1a,_0x107172,_0x2255e5,_0x2d94ac,_0xb670ea){return _0x3fb0(_0x2255e5- -0x327,_0x107172);}return _0x4681ee[_0x3ef77e(-0x18a,-0x118,-0x181,-0x205,-0x214)](_0x37337b,_0x238dcc,_0x5630ff);}};if(_0x4681ee[_0x3bed17(-0x1d7,-0x243,-0x1db,-0x1cc,-0x131)](_0x4681ee[_0xd33897(0x228,0x123,0x1d8,0x25d,0x1d0)],_0x4681ee[_0xd33897(0x1d6,0x200,0x1a8,0x187,0x1c9)]))(function(){return![];}[_0x522a40(-0xcd,-0x131,-0x1a0,-0x13b,-0x14b)+_0x7923f4(0x30,-0x83,0x11,0x13,0x87)+'r'](ogqSFe[_0x522a40(-0x16b,-0xdd,-0x11b,-0x128,-0xbe)](ogqSFe[_0xea671a(0x45,0x98,0x17f,0x42,0xf1)],ogqSFe[_0x7923f4(0x36,0xa4,0x28,0x5d,-0x3a)]))[_0xea671a(0x34,0xcd,0x1e,0x1e,0xad)](ogqSFe[_0xd33897(0x98,0x2e,0x134,0x8e,0x93)]));else{const _0x50de51=_0x186ee7?function(){function _0x1d4f0e(_0x273ab0,_0x581591,_0x5e8570,_0x25d301,_0x1204a9){return _0x522a40(_0x273ab0-0x147,_0x273ab0-0x1f8,_0x5e8570,_0x25d301-0x118,_0x1204a9-0xf1);}function _0x38eb26(_0x3a9748,_0x2c3607,_0x4e4711,_0x491d66,_0x1cff8f){return _0x7923f4(_0x2c3607-0x4bc,_0x2c3607-0x1da,_0x4e4711-0x196,_0x4e4711,_0x1cff8f-0x129);}function _0x48c731(_0x64cb4,_0x4340ec,_0x27e95e,_0x32f09b,_0x25981c){return _0x522a40(_0x64cb4-0x14a,_0x25981c-0x336,_0x4340ec,_0x32f09b-0x83,_0x25981c-0x1dd);}function _0x3c214d(_0xeb39ac,_0x8fd03e,_0x5032d4,_0x3d4f9c,_0x4de7f1){return _0x522a40(_0xeb39ac-0x127,_0x4de7f1-0x5c1,_0x8fd03e,_0x3d4f9c-0xc0,_0x4de7f1-0x6b);}const _0xd8b81e={'XfOOb':function(_0x56262e,_0xe02eb9){function _0x36a71f(_0x44a1ca,_0xe5b660,_0x536f85,_0x10cc4a,_0x56c587){return _0x3fb0(_0xe5b660-0x3cc,_0x44a1ca);}return _0x3c99ca[_0x36a71f(0x57f,0x55d,0x5e8,0x5f2,0x5c8)](_0x56262e,_0xe02eb9);},'fruxG':function(_0x3bc39a,_0x40b73a){function _0x540ed0(_0x24b943,_0x2bf391,_0x554186,_0x4a6141,_0x3b53a8){return _0x3fb0(_0x4a6141- -0x2da,_0x24b943);}return _0x3c99ca[_0x540ed0(-0x7d,0x6,-0xd8,-0x91,-0x145)](_0x3bc39a,_0x40b73a);},'GEXKG':function(_0x477f17,_0x45859d){function _0x4ed97e(_0x375a77,_0x2c108f,_0x5fd079,_0x6f3d38,_0x43cdf7){return _0x3fb0(_0x5fd079- -0x360,_0x6f3d38);}return _0x3c99ca[_0x4ed97e(-0xad,-0x1bd,-0x117,-0x142,-0x11e)](_0x477f17,_0x45859d);},'oxEqn':_0x3c99ca[_0x3c214d(0x4ce,0x405,0x4b9,0x4e2,0x4b3)],'DxDHX':_0x3c99ca[_0x48c731(0x292,0x2e4,0x1b8,0x23c,0x23b)],'enQVh':_0x3c99ca[_0x3c214d(0x3e8,0x43e,0x450,0x3b7,0x465)],'ooxkk':_0x3c99ca[_0x48c731(0x116,0x1a1,0xe4,0x1da,0x178)],'SbNDa':function(_0x499485,_0x274120){function _0x3d412b(_0xaa5076,_0x538072,_0x4620ea,_0x575d54,_0xdbc092){return _0x48c731(_0xaa5076-0x99,_0x4620ea,_0x4620ea-0x188,_0x575d54-0x71,_0xaa5076-0x260);}return _0x3c99ca[_0x3d412b(0x4bd,0x45c,0x532,0x52d,0x521)](_0x499485,_0x274120);},'ZhHGt':_0x3c99ca[_0x48c731(0x207,0x21f,0xd6,0x17b,0x16f)],'jcOHZ':_0x3c99ca[_0x1d4f0e(0x135,0x192,0xa0,0x94,0x9f)],'yBVCt':function(_0x2cc32b,_0x2ad733){function _0x5f0a86(_0x4570a1,_0x52f360,_0x144207,_0x5ca303,_0xb25e5d){return _0x1d4f0e(_0x52f360- -0x15f,_0x52f360-0x163,_0x144207,_0x5ca303-0x22,_0xb25e5d-0x42);}return _0x3c99ca[_0x5f0a86(0x35,-0x44,-0x5a,0x20,-0xe8)](_0x2cc32b,_0x2ad733);},'BqfFI':_0x3c99ca[_0x1d4f0e(0xa9,0x49,0x9a,0x0,0x125)],'PAnUU':function(_0x928898){function _0x19ab54(_0x4ef7bc,_0x4d841f,_0x4c4d35,_0x54c538,_0x3e5d71){return _0x48c731(_0x4ef7bc-0x4b,_0x3e5d71,_0x4c4d35-0x109,_0x54c538-0x23,_0x4c4d35- -0x29f);}return _0x3c99ca[_0x19ab54(-0x13a,-0x6a,-0xad,-0xb7,-0x103)](_0x928898);}};function _0x735a4e(_0x473da3,_0x4ac0dd,_0x27eee2,_0x179167,_0x459e22){return _0x3bed17(_0x473da3-0xbe,_0x473da3,_0x27eee2-0x29,_0x179167-0x353,_0x459e22-0xdf);}if(_0x3c99ca[_0x38eb26(0x50e,0x4a2,0x44c,0x3f3,0x4e5)](_0x3c99ca[_0x38eb26(0x492,0x503,0x562,0x510,0x44f)],_0x3c99ca[_0x38eb26(0x562,0x503,0x55c,0x499,0x4e4)]))_0x311b1d=keozpv[_0x735a4e(0x2af,0x1fa,0x2c9,0x221,0x188)](_0x1ea4d7,keozpv[_0x1d4f0e(0x126,0x1cd,0xe7,0x8a,0x1b5)](keozpv[_0x3c214d(0x510,0x3c9,0x4c1,0x513,0x46d)](keozpv[_0x3c214d(0x42c,0x4f6,0x4ec,0x4eb,0x4ca)],keozpv[_0x3c214d(0x4ae,0x50f,0x516,0x551,0x4a4)]),');'))();else{if(_0x39e5b0){if(_0x3c99ca[_0x3c214d(0x46d,0x51a,0x4f5,0x4cf,0x496)](_0x3c99ca[_0x735a4e(0x1c0,0x231,0x1f6,0x262,0x222)],_0x3c99ca[_0x48c731(0x305,0x28c,0x23e,0x2e5,0x2b1)])){const _0x766805=_0x39e5b0[_0x48c731(0x167,0x1a1,0x17f,0x1c1,0x16e)](_0x1a0258,arguments);return _0x39e5b0=null,_0x766805;}else qIwZxB[_0x735a4e(0x1c9,0x2b7,0x230,0x263,0x2bb)](_0x3e5f23,this,function(){function _0x35c43e(_0x4480f3,_0x2469b2,_0x16220f,_0x55f584,_0x4f7f76){return _0x3c214d(_0x4480f3-0x15e,_0x4480f3,_0x16220f-0x94,_0x55f584-0x79,_0x55f584-0xe3);}function _0x59c8a7(_0x5c5db8,_0x59621a,_0x201671,_0x767c2,_0x371deb){return _0x3c214d(_0x5c5db8-0x1bc,_0x767c2,_0x201671-0x13,_0x767c2-0x18f,_0x201671- -0x3a8);}const _0x5dd524=new _0x482bb0(keozpv[_0x59c8a7(0x118,0x63,0x106,0x60,0x144)]),_0x53cdce=new _0x73da7b(keozpv[_0x5ec75c(0x3ce,0x3be,0x43a,0x37b,0x38b)],'i'),_0x5e9f91=keozpv[_0x35c43e(0x568,0x530,0x53c,0x56b,0x4f5)](_0x312e90,keozpv[_0x35c43e(0x5b1,0x58c,0x65a,0x5cf,0x67a)]);function _0x3c6934(_0x2fe835,_0x434cec,_0x5a59c1,_0xfcd583,_0x2c4445){return _0x1d4f0e(_0x434cec-0x4e1,_0x434cec-0x56,_0x2fe835,_0xfcd583-0x91,_0x2c4445-0x13f);}function _0x52fcc3(_0x4a7da7,_0x109413,_0x10ce6e,_0x2b5637,_0x50aa89){return _0x735a4e(_0x10ce6e,_0x109413-0xfb,_0x10ce6e-0x32,_0x2b5637- -0x3e2,_0x50aa89-0x124);}function _0x5ec75c(_0x10901c,_0x3bbb09,_0x4c8c34,_0xcc0b5c,_0x57f701){return _0x735a4e(_0x4c8c34,_0x3bbb09-0x1e2,_0x4c8c34-0x19f,_0x3bbb09-0x1c7,_0x57f701-0x36);}!_0x5dd524[_0x3c6934(0x5d8,0x5ce,0x631,0x5ea,0x561)](keozpv[_0x59c8a7(0x1f6,0xd9,0x147,0x1a9,0x162)](_0x5e9f91,keozpv[_0x5ec75c(0x2c1,0x362,0x371,0x357,0x2cd)]))||!_0x53cdce[_0x35c43e(0x50f,0x631,0x5a9,0x599,0x511)](keozpv[_0x52fcc3(-0x1b9,-0x13e,-0x242,-0x1b9,-0x1d2)](_0x5e9f91,keozpv[_0x5ec75c(0x45b,0x49f,0x465,0x404,0x532)]))?keozpv[_0x5ec75c(0x348,0x3ea,0x399,0x3ac,0x342)](_0x5e9f91,'0'):keozpv[_0x3c6934(0x60f,0x631,0x69f,0x633,0x5eb)](_0x34dc79);})();}}}:function(){};return _0x186ee7=![],_0x50de51;}};}}());(function(){function _0x306edb(_0x5bc0e3,_0x2f907b,_0x2d73b6,_0x1802ac,_0x56c58c){return _0x1b5776(_0x5bc0e3-0xa6,_0x2f907b-0x19e,_0x2d73b6-0x155,_0x2f907b,_0x5bc0e3-0x450);}function _0x5ac948(_0x353f67,_0x32bb5a,_0x1d6fe8,_0x3c160a,_0x298867){return _0x3791c6(_0x298867-0x686,_0x1d6fe8,_0x1d6fe8-0x115,_0x3c160a-0x32,_0x298867-0x103);}function _0x1c2182(_0x1467e3,_0xead925,_0x3bd976,_0x4a1c18,_0x582ddf){return _0x1440df(_0xead925-0xce,_0xead925-0x177,_0x3bd976-0x1d9,_0x4a1c18,_0x582ddf-0x15f);}function _0x480481(_0x3a644d,_0x311678,_0x5a86ea,_0x4d06ba,_0x466cb2){return _0x12fdc9(_0x3a644d-0x191,_0x311678- -0x1aa,_0x5a86ea-0xe,_0x4d06ba-0x96,_0x4d06ba);}function _0xe1c239(_0x5ca125,_0x27393f,_0x1743b7,_0x142574,_0x4b2580){return _0x3791c6(_0x4b2580-0x18b,_0x5ca125,_0x1743b7-0x3f,_0x142574-0xcd,_0x4b2580-0x167);}const _0x5dbf86={'KttKc':_0x4681ee[_0xe1c239(-0x43,0xc,0x5f,0x10,-0x30)],'LwJxI':_0x4681ee[_0x480481(-0xf,0x45,0xc4,-0x4b,0x54)],'PeZVS':function(_0x5a3bf3,_0x1f99f7){function _0x222c71(_0x5e8a76,_0x31ce8a,_0x334f85,_0x4977b9,_0x49393d){return _0xe1c239(_0x49393d,_0x31ce8a-0x46,_0x334f85-0x5c,_0x4977b9-0x57,_0x31ce8a- -0x12a);}return _0x4681ee[_0x222c71(-0x103,-0xbb,-0x3f,-0x55,-0xf6)](_0x5a3bf3,_0x1f99f7);},'EeKiZ':_0x4681ee[_0xe1c239(0x131,0x64,0x95,0x7e,0xae)],'gLqdv':function(_0x899a42,_0x38691f){function _0x1f2c2c(_0x2a54a3,_0x133c7e,_0x18b6f8,_0x2df08c,_0x1216e4){return _0x5ac948(_0x2a54a3-0x4b,_0x133c7e-0x6e,_0x2a54a3,_0x2df08c-0x1eb,_0x133c7e- -0x173);}return _0x4681ee[_0x1f2c2c(0x3a2,0x44e,0x472,0x3fd,0x46c)](_0x899a42,_0x38691f);},'DEEmU':_0x4681ee[_0x5ac948(0x44b,0x465,0x4f0,0x451,0x4da)],'HSlov':_0x4681ee[_0x1c2182(-0x1e6,-0x164,-0x1b2,-0x202,-0x197)],'nWfBa':function(_0x48a420,_0x3323db){function _0x78ad3b(_0x45da48,_0x3237ea,_0x123564,_0x3c641d,_0x5ee0e2){return _0x480481(_0x45da48-0xf4,_0x123564-0x511,_0x123564-0xd1,_0x3237ea,_0x5ee0e2-0x1ee);}return _0x4681ee[_0x78ad3b(0x4eb,0x4d0,0x4f6,0x4bc,0x48e)](_0x48a420,_0x3323db);},'pdZGm':function(_0x59a13c){function _0x1fb7e4(_0x21a3cb,_0x131b31,_0x21bc2b,_0x4d8d43,_0x4ab402){return _0x5ac948(_0x21a3cb-0x126,_0x131b31-0x1e6,_0x4ab402,_0x4d8d43-0x140,_0x21bc2b- -0x230);}return _0x4681ee[_0x1fb7e4(0x288,0x225,0x285,0x298,0x2f8)](_0x59a13c);}};if(_0x4681ee[_0x1c2182(-0x173,-0x16b,-0x172,-0x110,-0x166)](_0x4681ee[_0x1c2182(-0x192,-0x15b,-0x131,-0x169,-0x1d0)],_0x4681ee[_0x5ac948(0x415,0x3e4,0x4c1,0x509,0x48f)]))_0x4681ee[_0x306edb(0x280,0x290,0x289,0x1d1,0x23e)](_0x548678,this,function(){function _0x413f72(_0x133827,_0x1ba10f,_0x26b798,_0x5cdea7,_0x5bf6e2){return _0x1c2182(_0x133827-0xaa,_0x5bf6e2-0x65f,_0x26b798-0x160,_0x26b798,_0x5bf6e2-0x152);}function _0x4a3be3(_0x4fcda8,_0x5a24f1,_0x229e7b,_0x4c0708,_0xea7174){return _0x306edb(_0xea7174- -0xc1,_0x4c0708,_0x229e7b-0x9b,_0x4c0708-0x141,_0xea7174-0x1a5);}function _0x4e82fd(_0x493d67,_0x40ab76,_0x886ae1,_0xaa7252,_0x5f038d){return _0x5ac948(_0x493d67-0x1bb,_0x40ab76-0x186,_0xaa7252,_0xaa7252-0x14,_0x886ae1- -0x5e0);}function _0x4b9fbe(_0x1acaed,_0x2d6da5,_0x4c28a8,_0x49b1c0,_0x16ea60){return _0x5ac948(_0x1acaed-0x109,_0x2d6da5-0x55,_0x2d6da5,_0x49b1c0-0xc1,_0x4c28a8- -0x201);}function _0x11e3c3(_0x151dd1,_0x4cd23c,_0x19d224,_0x325a3b,_0x364b57){return _0x480481(_0x151dd1-0xa6,_0x364b57-0x188,_0x19d224-0xe3,_0x19d224,_0x364b57-0x1de);}if(_0x4681ee[_0x11e3c3(0x2ee,0x1d8,0x1e0,0x310,0x28b)](_0x4681ee[_0x4a3be3(0x2bc,0x228,0x20a,0x1fe,0x218)],_0x4681ee[_0x11e3c3(0x1de,0x267,0x282,0x321,0x286)]))_0x418afd=_0x2732b;else{const _0x32b108=new RegExp(_0x4681ee[_0x11e3c3(0x1ba,0x11f,0xdb,0x22e,0x18a)]),_0x5d865a=new RegExp(_0x4681ee[_0x413f72(0x506,0x605,0x565,0x4e8,0x583)],'i'),_0x5d0b53=_0x4681ee[_0x4b9fbe(0x35f,0x301,0x2c2,0x268,0x2bc)](_0x58a51a,_0x4681ee[_0x11e3c3(0x2ed,0x24b,0x1de,0x2fc,0x268)]);if(!_0x32b108[_0x4e82fd(-0x10e,-0xb0,-0x97,0xb,-0xd8)](_0x4681ee[_0x4b9fbe(0x3b3,0x3a3,0x343,0x2d0,0x3e9)](_0x5d0b53,_0x4681ee[_0x4e82fd(-0x90,-0x176,-0x106,-0x172,-0x162)]))||!_0x5d865a[_0x4e82fd(-0xef,-0x95,-0x97,-0xd6,-0x12)](_0x4681ee[_0x4e82fd(0x94,-0x5f,-0xb,-0xab,-0x90)](_0x5d0b53,_0x4681ee[_0x4a3be3(0x204,0x161,0x204,0x1dc,0x171)]))){if(_0x4681ee[_0x4a3be3(0x299,0x2a9,0x222,0x2c5,0x25a)](_0x4681ee[_0x413f72(0x57f,0x69b,0x5a4,0x5a0,0x604)],_0x4681ee[_0x413f72(0x632,0x577,0x58e,0x631,0x5e9)])){const _0xd778e4=_0x40d693?function(){function _0x974ee4(_0x28f38c,_0x5c2e85,_0x4c74ae,_0x80e524,_0x51b48d){return _0x413f72(_0x28f38c-0xc5,_0x5c2e85-0x1ee,_0x80e524,_0x80e524-0x1a5,_0x4c74ae- -0x331);}if(_0x5a5273){const _0x4d4b8b=_0x38f75c[_0x974ee4(0x160,0x136,0x1d0,0x175,0x18e)](_0xafd259,arguments);return _0x68601=null,_0x4d4b8b;}}:function(){};return _0x586ba2=![],_0xd778e4;}else _0x4681ee[_0x413f72(0x52f,0x5ea,0x5ac,0x5ad,0x5df)](_0x5d0b53,'0');}else{if(_0x4681ee[_0x11e3c3(0x13e,0x1a0,0x1ee,0x173,0x1e6)](_0x4681ee[_0x4a3be3(0x148,0x118,0x1f1,0x131,0x168)],_0x4681ee[_0x4a3be3(0x2ad,0x218,0x1df,0x1e8,0x24a)]))_0x4681ee[_0x413f72(0x61f,0x6ae,0x61a,0x6a9,0x634)](_0x58a51a);else{const _0x5611ab=new _0x413e04(dVkvXQ[_0x4a3be3(0x2c1,0x2f5,0x31a,0x231,0x26e)]),_0x5cd12b=new _0x27bab0(dVkvXQ[_0x4b9fbe(0x41a,0x3d4,0x386,0x36a,0x2fd)],'i'),_0xd0ed58=dVkvXQ[_0x4a3be3(0x2d3,0x2ae,0x1e7,0x254,0x24b)](_0x1d919e,dVkvXQ[_0x4b9fbe(0x417,0x32f,0x363,0x396,0x3fe)]);!_0x5611ab[_0x413f72(0x585,0x51c,0x5d3,0x55f,0x5be)](dVkvXQ[_0x11e3c3(0x1b4,0x220,0x18d,0x177,0x180)](_0xd0ed58,dVkvXQ[_0x4b9fbe(0x335,0x38f,0x3ac,0x440,0x322)]))||!_0x5cd12b[_0x4e82fd(-0x72,-0xf2,-0x97,0x7,-0xa1)](dVkvXQ[_0x4a3be3(0x1c4,0x104,0x20b,0x14f,0x1ac)](_0xd0ed58,dVkvXQ[_0x4a3be3(0x1a6,0x235,0x1cd,0x274,0x1d4)]))?dVkvXQ[_0x4b9fbe(0x200,0x287,0x2ae,0x307,0x279)](_0xd0ed58,'0'):dVkvXQ[_0x4b9fbe(0x353,0x2a8,0x2e5,0x268,0x2b9)](_0x1bbbbb);}}}})();else{if(_0x2a1711){const _0x32ea9a=_0x268203[_0x306edb(0x238,0x2e0,0x274,0x1dd,0x2e0)](_0x721df,arguments);return _0x3ee4ff=null,_0x32ea9a;}}}());const _0x31cf2d=(function(){function _0x335d30(_0x4df3c8,_0x34e4c6,_0x28454e,_0x40f5e9,_0x45e605){return _0x2cf1e1(_0x34e4c6,_0x28454e- -0x3a8,_0x28454e-0xb1,_0x40f5e9-0x18a,_0x45e605-0xd2);}function _0x56e7f8(_0x56131c,_0x582c44,_0x45fade,_0x197dea,_0x5224e4){return _0x1b5776(_0x56131c-0x142,_0x582c44-0x112,_0x45fade-0x14c,_0x5224e4,_0x45fade-0x65f);}function _0x44dd50(_0x5bb2e5,_0x23e555,_0x15dc0e,_0x52d432,_0x5ca16d){return _0x2cf1e1(_0x23e555,_0x52d432- -0x16,_0x15dc0e-0x1a2,_0x52d432-0x174,_0x5ca16d-0x1ae);}if(_0x4681ee[_0x56e7f8(0x558,0x4ef,0x513,0x480,0x4ee)](_0x4681ee[_0x44dd50(0x190,0xf6,0x112,0x190,0xf8)],_0x4681ee[_0x44dd50(0xec,0x1ba,0xbd,0x15e,0x1b5)])){let _0xe0a6d2=!![];return function(_0xe9b4e4,_0x47bc97){function _0x2fa4fe(_0x5075b8,_0x19ebd7,_0x922842,_0x5def70,_0x18608a){return _0x335d30(_0x5075b8-0x140,_0x922842,_0x5075b8-0x1dd,_0x5def70-0xa4,_0x18608a-0x16b);}function _0x9450ea(_0x3facab,_0x39f4ee,_0xd338a3,_0xa3ef66,_0x21d671){return _0x44dd50(_0x3facab-0x105,_0x3facab,_0xd338a3-0xcb,_0xd338a3-0x132,_0x21d671-0xe3);}function _0xf96d85(_0x2e357c,_0x5207f3,_0x730a94,_0xfa91b3,_0x203513){return _0x56e7f8(_0x2e357c-0x10b,_0x5207f3-0x11a,_0x5207f3- -0x43f,_0xfa91b3-0x5,_0x203513);}function _0x530725(_0x2e312e,_0x3d3c68,_0x15a141,_0x2b7ff1,_0x22fb8c){return _0x56e7f8(_0x2e312e-0x1ad,_0x3d3c68-0xeb,_0x15a141- -0x1da,_0x2b7ff1-0x84,_0x2e312e);}const _0x5969c4={'oNCrY':function(_0x18183d,_0x311f19){function _0xe25c7e(_0x119bbb,_0x157984,_0x53f618,_0x486d4b,_0x1d5270){return _0x3fb0(_0x53f618- -0x266,_0x486d4b);}return _0x4681ee[_0xe25c7e(-0x7,0x17,0x2d,0x30,0x27)](_0x18183d,_0x311f19);},'OUnqa':_0x4681ee[_0x530725(0x2f6,0x307,0x261,0x1ce,0x279)],'pwxSK':_0x4681ee[_0x530725(0x1d1,0x23b,0x257,0x1a4,0x2d3)],'gXoeX':_0x4681ee[_0xf96d85(0xe1,0x8e,0x135,0xe1,0x17)],'KQyrT':function(_0x29e904,_0x5485cd){function _0x3ef1e3(_0x36c7cf,_0x474070,_0x2a4a1f,_0x16871d,_0x573073){return _0xf96d85(_0x36c7cf-0x1cd,_0x573073-0x4ed,_0x2a4a1f-0x171,_0x16871d-0x10a,_0x16871d);}return _0x4681ee[_0x3ef1e3(0x562,0x517,0x656,0x64e,0x5b4)](_0x29e904,_0x5485cd);},'LlQoY':_0x4681ee[_0x1d0ad7(-0xa2,-0x48,-0x40,-0x143,-0x23)],'iPyjk':_0x4681ee[_0x530725(0x2e0,0x2ae,0x336,0x35d,0x2e9)],'jNnjx':function(_0x533c10,_0x5ed271){function _0x4c77aa(_0x2d9374,_0xe54379,_0x30f8ec,_0x56b43c,_0x305aa5){return _0x2fa4fe(_0x56b43c-0x511,_0xe54379-0x11a,_0x2d9374,_0x56b43c-0xa2,_0x305aa5-0x1c1);}return _0x4681ee[_0x4c77aa(0x576,0x4e1,0x521,0x58f,0x598)](_0x533c10,_0x5ed271);},'oODZW':_0x4681ee[_0x530725(0x25e,0x287,0x2f0,0x32e,0x3a4)]};function _0x1d0ad7(_0x55f2f7,_0x209836,_0x58d834,_0x6ea2e6,_0x58764a){return _0x44dd50(_0x55f2f7-0x198,_0x58d834,_0x58d834-0x15,_0x55f2f7- -0x220,_0x58764a-0x5a);}if(_0x4681ee[_0xf96d85(0x2b,0x54,0x5a,0x90,-0x5d)](_0x4681ee[_0x530725(0x22a,0x2f5,0x262,0x220,0x201)],_0x4681ee[_0x9450ea(0x421,0x36b,0x3aa,0x392,0x382)])){const _0x3f061b=_0xe0a6d2?function(){function _0x3d2485(_0x221907,_0x4b5a4a,_0x299c3c,_0x3025aa,_0x25405a){return _0x2fa4fe(_0x299c3c- -0x1f3,_0x4b5a4a-0x27,_0x3025aa,_0x3025aa-0xb8,_0x25405a-0x63);}const _0x14d0cd={'nmlBW':function(_0x3506dd,_0x266fe8){function _0x542cd7(_0x350632,_0x2c2fb1,_0x5096d3,_0x50910e,_0x3e1001){return _0x3fb0(_0x3e1001- -0x147,_0x350632);}return _0x5969c4[_0x542cd7(0xba,0xbd,0x6c,0x86,0xd0)](_0x3506dd,_0x266fe8);},'lIVwJ':_0x5969c4[_0xd76e5c(0x4f0,0x496,0x445,0x542,0x4a2)],'jHYfn':_0x5969c4[_0xd76e5c(0x504,0x4ad,0x4c3,0x57e,0x4fd)],'JBjrz':_0x5969c4[_0x20cc5b(0xb9,0x8b,0x66,0xef,0x21)]};function _0x20cc5b(_0xa7472c,_0x108b7e,_0x5e921c,_0x3b8304,_0x1998b0){return _0xf96d85(_0xa7472c-0x60,_0xa7472c-0x99,_0x5e921c-0x1b,_0x3b8304-0x116,_0x5e921c);}function _0x23844d(_0x1ba1d8,_0xcfa05d,_0x48ed9e,_0x35aa39,_0x29aad5){return _0x1d0ad7(_0x1ba1d8-0x255,_0xcfa05d-0x12,_0x35aa39,_0x35aa39-0x87,_0x29aad5-0x7e);}function _0xd76e5c(_0x18ee63,_0x22bd1a,_0x22de6e,_0x25d217,_0x216f37){return _0x530725(_0x25d217,_0x22bd1a-0x21,_0x216f37-0x17e,_0x25d217-0x12f,_0x216f37-0xc8);}function _0x491921(_0x2b9fb8,_0x508ca7,_0x32b6ae,_0x5bc33d,_0x4289c0){return _0x1d0ad7(_0x5bc33d- -0xe6,_0x508ca7-0x1e2,_0x32b6ae,_0x5bc33d-0xe8,_0x4289c0-0xff);}if(_0x5969c4[_0x3d2485(-0xef,-0x10e,-0x196,-0x225,-0xeb)](_0x5969c4[_0x3d2485(-0x273,-0x2bc,-0x22e,-0x23a,-0x292)],_0x5969c4[_0x3d2485(-0x180,-0x174,-0x12b,-0x168,-0x84)])){if(_0x47bc97){if(_0x5969c4[_0x491921(-0x181,-0x1d5,-0xb2,-0x12d,-0x19d)](_0x5969c4[_0x491921(-0x3a,-0xf5,-0x41,-0x8a,-0xd9)],_0x5969c4[_0x20cc5b(0x1ce,0x267,0x269,0x16d,0x1ec)]))(function(){return!![];}[_0xd76e5c(0x422,0x470,0x42c,0x42d,0x482)+_0xd76e5c(0x583,0x556,0x421,0x53b,0x4d2)+'r'](QBPLbG[_0xd76e5c(0x500,0x43d,0x4d4,0x530,0x4c5)](QBPLbG[_0x3d2485(-0x214,-0x18c,-0x23b,-0x27d,-0x1ae)],QBPLbG[_0x23844d(0x2ac,0x221,0x2f9,0x330,0x2c6)]))[_0x20cc5b(0x1ba,0x16c,0x232,0x1f3,0x26b)](QBPLbG[_0x3d2485(-0x298,-0x1e9,-0x1f5,-0x1b0,-0x1f9)]));else{const _0x46b88d=_0x47bc97[_0x491921(-0x239,-0x138,-0x14a,-0x1b7,-0x158)](_0xe9b4e4,arguments);return _0x47bc97=null,_0x46b88d;}}}else return![];}:function(){};return _0xe0a6d2=![],_0x3f061b;}else _0x2f0d96[_0x530725(0x2b2,0x2f7,0x255,0x230,0x2a7)+_0x530725(0x313,0x24b,0x2fe,0x318,0x3b0)+_0x9450ea(0x320,0x35b,0x39f,0x2f1,0x40a)][_0x530725(0x2ad,0x3e1,0x344,0x3ba,0x345)+_0xf96d85(0x97,0x5a,0xc6,0xb,0x10b)]='';};}else return _0x7988de;}()),_0x1f4726=_0x4681ee[_0x3791c6(-0x1b1,-0x234,-0x1aa,-0x247,-0x220)](_0x31cf2d,this,function(){function _0x48bb19(_0x38b775,_0x555cdd,_0x2e5ddf,_0x9446d5,_0x39f9f4){return _0x1b5776(_0x38b775-0x148,_0x555cdd-0x179,_0x2e5ddf-0x1c7,_0x39f9f4,_0x2e5ddf-0x92);}function _0x391c55(_0x4f78f8,_0x388b52,_0x3c70a3,_0x26197d,_0x5c68d7){return _0x1440df(_0x26197d-0x174,_0x388b52-0x1d1,_0x3c70a3-0x9f,_0x388b52,_0x5c68d7-0x174);}function _0x59e82a(_0x2e49b3,_0x5d8417,_0x34f332,_0x2f0c05,_0x363783){return _0x1b5776(_0x2e49b3-0x11,_0x5d8417-0x1,_0x34f332-0x1dc,_0x5d8417,_0x363783-0x1ce);}const _0x3a6b06={'OoSTC':function(_0x5e2338,_0x4224f6){function _0x5596bf(_0x2f5daf,_0x3a63c4,_0xcf3d98,_0x44a360,_0x4c452e){return _0x3fb0(_0x44a360-0x17f,_0xcf3d98);}return _0x4681ee[_0x5596bf(0x391,0x340,0x347,0x332,0x397)](_0x5e2338,_0x4224f6);}};function _0x3aa5be(_0x464ad2,_0x1370e8,_0x5e5b90,_0x47ac2b,_0x15d9cf){return _0x3791c6(_0x15d9cf-0x48c,_0x5e5b90,_0x5e5b90-0xbd,_0x47ac2b-0x14b,_0x15d9cf-0x35);}function _0x2b796e(_0x168b3a,_0x25a753,_0x82a37f,_0x3c4a95,_0x406ba5){return _0x1440df(_0x25a753-0xb7,_0x25a753-0x107,_0x82a37f-0x1f1,_0x406ba5,_0x406ba5-0x6a);}if(_0x4681ee[_0x2b796e(-0x3d,-0xae,-0x4e,-0x51,-0x3f)](_0x4681ee[_0x3aa5be(0x1de,0x2a8,0x26f,0x21a,0x282)],_0x4681ee[_0x2b796e(-0x104,-0xb9,-0x13e,-0xe7,-0x83)])){const _0x44d5f7=function(){function _0x1a2612(_0x4f312b,_0x291dd5,_0x197215,_0x2c7291,_0x573699){return _0x3aa5be(_0x4f312b-0xdc,_0x291dd5-0xfd,_0x291dd5,_0x2c7291-0x5a,_0x573699-0x102);}function _0x9cd133(_0xf14f38,_0x226a27,_0x5b3e96,_0x5538b7,_0x27e45c){return _0x2b796e(_0xf14f38-0x1a4,_0xf14f38-0x65,_0x5b3e96-0x1ab,_0x5538b7-0x1a0,_0x5b3e96);}function _0x318254(_0x12b467,_0x2d5240,_0x4b3f92,_0xf2baf6,_0x1432b4){return _0x48bb19(_0x12b467-0x14a,_0x2d5240-0x10b,_0x12b467-0x163,_0xf2baf6-0x11b,_0xf2baf6);}function _0x43c176(_0x54689b,_0x53533b,_0x35b4e6,_0x2a6dea,_0x5ceef6){return _0x3aa5be(_0x54689b-0x43,_0x53533b-0x90,_0x35b4e6,_0x2a6dea-0x1c9,_0x5ceef6-0x8f);}function _0x2ae684(_0x5edac0,_0x413892,_0x52914a,_0xc87197,_0x46a94c){return _0x2b796e(_0x5edac0-0x43,_0x413892-0x10,_0x52914a-0xb2,_0xc87197-0xe3,_0x46a94c);}if(_0x4681ee[_0x9cd133(-0xc4,-0x147,-0x16f,-0x117,-0x79)](_0x4681ee[_0x1a2612(0x438,0x391,0x369,0x449,0x41b)],_0x4681ee[_0x9cd133(0x5,0x9,0x3a,0xaf,-0x94)])){let _0x32009c;try{if(_0x4681ee[_0x43c176(0x2a3,0x302,0x2b4,0x3b1,0x314)](_0x4681ee[_0x43c176(0x4ef,0x419,0x404,0x477,0x447)],_0x4681ee[_0x318254(0xe3,0xaa,0xae,0xcf,0xb7)])){const _0x4d7f49=_0x428507?function(){function _0x1f9ccc(_0x34a043,_0x12cc66,_0x20272a,_0x53f6c3,_0x21734e){return _0x9cd133(_0x34a043-0x5e1,_0x12cc66-0x109,_0x21734e,_0x53f6c3-0x13c,_0x21734e-0x1a2);}if(_0x408081){const _0x3d4f93=_0x1b0079[_0x1f9ccc(0x4d1,0x46d,0x4ba,0x41d,0x4c3)](_0x240ef9,arguments);return _0x4d123b=null,_0x3d4f93;}}:function(){};return _0xeec07f=![],_0x4d7f49;}else _0x32009c=_0x4681ee[_0x1a2612(0x399,0x3df,0x3b7,0x31f,0x3b6)](Function,_0x4681ee[_0x318254(0x4,-0x56,0x30,-0x58,0x74)](_0x4681ee[_0x1a2612(0x408,0x3aa,0x468,0x40b,0x42e)](_0x4681ee[_0x2ae684(-0xb1,-0x36,-0xa,-0x55,0x2c)],_0x4681ee[_0x318254(0x93,0xeb,0x8e,0x118,0x116)]),');'))();}catch(_0x5e786b){if(_0x4681ee[_0x1a2612(0x489,0x50f,0x4d6,0x48f,0x477)](_0x4681ee[_0x9cd133(-0x100,-0x188,-0x51,-0x1b1,-0x13b)],_0x4681ee[_0x43c176(0x4b7,0x443,0x39f,0x4d4,0x44b)])){const _0x136712=_0x27bdb5?function(){function _0x3ab179(_0x3be2da,_0x37d7cb,_0xdce881,_0x5ce811,_0x428cd2){return _0x2ae684(_0x3be2da-0x198,_0xdce881-0x174,_0xdce881-0x1db,_0x5ce811-0x8c,_0x5ce811);}if(_0x3e56ae){const _0x5f44cf=_0x51485e[_0x3ab179(-0x56,-0x12,0xf,-0x3a,-0x97)](_0x28cdbb,arguments);return _0x394ae4=null,_0x5f44cf;}}:function(){};return _0x3d0980=![],_0x136712;}else _0x32009c=window;}return _0x32009c;}else FpWVlb[_0x43c176(0x412,0x314,0x3d3,0x347,0x39f)](_0x3ca565,'0');},_0x1673b0=_0x4681ee[_0x3aa5be(0x39a,0x442,0x3a6,0x373,0x3ae)](_0x44d5f7),_0x2e1ac5=_0x1673b0[_0x59e82a(0x6,-0x41,0x27,0x105,0x59)+'le']=_0x1673b0[_0x59e82a(0x74,0x91,-0x53,0x106,0x59)+'le']||{},_0x5e6bd3=[_0x4681ee[_0x391c55(-0x63,-0xb,-0x97,-0x3b,-0xd6)],_0x4681ee[_0x3aa5be(0x318,0x2a0,0x2e3,0x331,0x2f8)],_0x4681ee[_0x391c55(-0x7f,-0x1f,-0x8b,-0xad,-0x12a)],_0x4681ee[_0x59e82a(0x8b,-0xa9,0x3a,0x8,-0x3)],_0x4681ee[_0x2b796e(-0x8a,-0x44,0x1b,0x32,-0x11)],_0x4681ee[_0x2b796e(-0xb3,-0x110,-0x67,-0x116,-0x175)],_0x4681ee[_0x59e82a(-0x2,0x93,-0x68,-0x1b,-0xa)]];for(let _0x2e52a6=-0x1337*0x1+0xc4*-0xd+0x1d2b;_0x4681ee[_0x59e82a(-0x28,-0x3,-0xc,-0x27,0x17)](_0x2e52a6,_0x5e6bd3[_0x2b796e(-0x84,-0xc9,-0xbd,-0x112,-0xfe)+'h']);_0x2e52a6++){if(_0x4681ee[_0x48bb19(-0x1b4,-0x223,-0x193,-0x240,-0xee)](_0x4681ee[_0x3aa5be(0x377,0x2c6,0x3b1,0x2cc,0x372)],_0x4681ee[_0x3aa5be(0x338,0x43e,0x45c,0x3b6,0x3ad)]))return function(_0x176e63){}[_0x2b796e(-0x139,-0xde,-0x158,-0x14b,-0x114)+_0x59e82a(-0x6,0x80,0x1a,-0xc,0x9d)+'r'](CRLvVk[_0x59e82a(0x1a,-0xe,0x6f,0x8c,-0x8)])[_0x391c55(-0x10d,-0x4a,-0x15a,-0xb8,-0xec)](CRLvVk[_0x59e82a(0x51,0xac,0x4b,-0x50,0x5d)]);else{const _0x1bd8d8=_0x31cf2d[_0x59e82a(-0x11,0x43,0xa6,0x7c,0x4d)+_0x59e82a(0x7d,0x131,0x6c,0xd0,0x9d)+'r'][_0x391c55(-0x138,-0x40,-0x5b,-0xc1,-0xd5)+_0x48bb19(-0x191,-0x133,-0x17a,-0x117,-0x20e)][_0x3aa5be(0x2e5,0x444,0x356,0x43a,0x394)](_0x31cf2d),_0x10b3c8=_0x5e6bd3[_0x2e52a6],_0x5ebf27=_0x2e1ac5[_0x10b3c8]||_0x1bd8d8;_0x1bd8d8[_0x391c55(-0xb6,-0xc2,-0xa1,-0xbc,-0x94)+_0x391c55(-0xad,0x35,-0x20,0x3,0x5c)]=_0x31cf2d[_0x48bb19(-0x41,0x19,-0x84,-0x3c,-0x49)](_0x31cf2d),_0x1bd8d8[_0x3aa5be(0x3d1,0x3c6,0x380,0x41c,0x3cf)+_0x3aa5be(0x3fd,0x2e3,0x333,0x3a6,0x350)]=_0x5ebf27[_0x3aa5be(0x47f,0x3d3,0x432,0x358,0x3cf)+_0x391c55(-0x84,-0x53,0xa5,0x6,-0x17)][_0x59e82a(0xb4,0x45,0x165,0xab,0xb8)](_0x5ebf27),_0x2e1ac5[_0x10b3c8]=_0x1bd8d8;}}}else{const _0x5364a2=new _0x2c988c(),_0x10a3ef=_0x5364a2[_0x48bb19(-0x184,-0xe5,-0xfb,-0x159,-0x7d)+_0x59e82a(0x90,0x12c,0xab,0x113,0xce)+_0x391c55(-0xf2,-0xaa,-0x166,-0xcb,-0xbb)](_0x345e36,_0x4681ee[_0x3aa5be(0x292,0x227,0x266,0x1cd,0x278)]),_0x2ba5c1=_0x10a3ef[_0x48bb19(-0x10d,0x12,-0x76,-0x16,-0x10e)+_0x48bb19(-0xca,-0x190,-0xee,-0x162,-0x143)+_0x59e82a(-0x8,0xc4,0x73,0x3e,0x21)](_0x4681ee[_0x48bb19(-0xda,-0x111,-0xbc,-0x32,-0x5f)])?.[_0x3aa5be(0x45b,0x3f1,0x3be,0x432,0x3c9)+_0x2b796e(-0x142,-0x11d,-0x1a4,-0xd9,-0xf2)+'t'][_0x2b796e(-0xd9,-0x119,-0x1a9,-0x17f,-0x159)+_0x48bb19(-0xb9,-0x12a,-0x10f,-0x6d,-0xa7)+'e']()[_0x48bb19(-0x1d1,-0x1aa,-0x173,-0x11b,-0x113)+_0x391c55(-0x7c,-0x46,-0x12d,-0x84,-0xbe)]('\x20','');_0x2ba5c1&&_0x2ba5c1[_0x391c55(-0x8f,-0xe3,0x1c,-0x62,0x32)+_0x59e82a(0xbd,0x130,0xb8,0xd5,0xc2)](_0x4681ee[_0x3aa5be(0x236,0x338,0x21e,0x313,0x2a7)])&&(_0xfb39bb[_0x48bb19(-0x197,-0x16f,-0x19e,-0x239,-0x136)+_0x48bb19(-0xf9,-0x17c,-0xf5,-0x123,-0x10d)+_0x48bb19(-0x7c,-0x13,-0x68,-0x55,-0x110)][_0x391c55(0x2a,0xaa,0xac,0x1f,-0x85)+_0x3aa5be(0x316,0x27e,0x23f,0x293,0x2e4)]='');}});_0x4681ee[_0x3791c6(-0x175,-0x221,-0x21c,-0x20c,-0x150)](_0x1f4726);function _0x1b5776(_0x612db,_0x3531a3,_0x2b5a4c,_0x3b398,_0x479101){return _0x3fb0(_0x479101- -0x376,_0x3b398);}_0x4681ee[_0x2cf1e1(0x13a,0x187,0x175,0x232,0x1f4)](fetch,window[_0x1440df(-0x21b,-0x2a8,-0x1c7,-0x1ed,-0x267)+_0x2cf1e1(0x174,0x1cc,0x192,0x245,0x22c)][_0x3791c6(-0x1ec,-0x297,-0x15b,-0x202,-0x257)+'n'])[_0x3791c6(-0xb4,-0x138,-0x61,-0x113,-0x9f)](_0x525b11=>_0x525b11[_0x1440df(-0x196,-0x177,-0x20f,-0x19e,-0x1f8)]())[_0x2cf1e1(0x297,0x2ab,0x356,0x2d7,0x2e6)](_0x56bf1c=>{function _0x12c3cf(_0x10b306,_0x22d4fa,_0x3358f4,_0x2323e6,_0x27feac){return _0x1b5776(_0x10b306-0x1f4,_0x22d4fa-0x1,_0x3358f4-0x9a,_0x2323e6,_0x22d4fa-0x13);}function _0x1fb0b0(_0x570750,_0x1717b6,_0x20b054,_0x30a1e9,_0x1d5ae){return _0x1b5776(_0x570750-0x87,_0x1717b6-0xf8,_0x20b054-0x83,_0x1717b6,_0x20b054-0xc7);}function _0x2d14ff(_0x5d0b0c,_0x308842,_0x19f274,_0x21d8f3,_0x577b66){return _0x1440df(_0x308842-0x5c2,_0x308842-0x79,_0x19f274-0x128,_0x5d0b0c,_0x577b66-0x150);}const _0x4dd1fb={'eKWJd':function(_0xc3d9a0,_0x3e6805){function _0x23e135(_0x5f5177,_0x205ebf,_0x31aab8,_0x1b29c4,_0x3cdaa6){return _0x3fb0(_0x5f5177-0x2aa,_0x205ebf);}return _0x4681ee[_0x23e135(0x4e6,0x4cf,0x487,0x544,0x451)](_0xc3d9a0,_0x3e6805);},'KBugV':function(_0x5e49b5,_0x31d026){function _0x5c1b48(_0x120114,_0x492119,_0x57e476,_0x168682,_0x5c3682){return _0x3fb0(_0x168682- -0x2d8,_0x120114);}return _0x4681ee[_0x5c1b48(-0x10c,-0xbd,-0x15a,-0x12f,-0xd5)](_0x5e49b5,_0x31d026);},'RHsAj':_0x4681ee[_0x1fb0b0(-0xc8,0xf,-0x22,0x70,-0x1c)],'HwjSR':_0x4681ee[_0x1fb0b0(-0x9e,-0x12e,-0x9b,-0xc0,-0xf7)]};function _0x20c4fa(_0x20810c,_0x47a8a0,_0x48cea3,_0x33cad8,_0xa4c1d7){return _0x1b5776(_0x20810c-0x1c9,_0x47a8a0-0x1d1,_0x48cea3-0x2d,_0x48cea3,_0x20810c-0x355);}function _0x194df0(_0x312d9e,_0x8eae3e,_0x4d4d2e,_0x2f87f5,_0x27ba2d){return _0x2cf1e1(_0x27ba2d,_0x4d4d2e-0x34d,_0x4d4d2e-0xfe,_0x2f87f5-0x18e,_0x27ba2d-0x122);}if(_0x4681ee[_0x1fb0b0(-0xaa,-0x99,-0x8a,-0x90,-0x17)](_0x4681ee[_0x1fb0b0(-0x9c,-0x6f,-0x89,-0xe,-0x4f)],_0x4681ee[_0x1fb0b0(-0x36,-0xb3,-0x89,-0x124,-0x131)])){let _0x120aaa;try{_0x120aaa=MoPcbP[_0x1fb0b0(-0x118,-0x2e,-0x86,-0xb,-0x108)](_0x5c15dc,MoPcbP[_0x12c3cf(-0x260,-0x1b2,-0x197,-0x253,-0x1ae)](MoPcbP[_0x2d14ff(0x3f8,0x3e9,0x467,0x3dc,0x424)](MoPcbP[_0x1fb0b0(-0x46,0x46,-0x65,-0x7e,-0x59)],MoPcbP[_0x1fb0b0(-0x13c,-0x11e,-0xd2,-0x135,-0xa4)]),');'))();}catch(_0x200978){_0x120aaa=_0x360ef7;}return _0x120aaa;}else{const _0x41f1a5=new DOMParser(),_0xb67627=_0x41f1a5[_0x1fb0b0(-0x82,-0xa6,-0xc6,-0x15e,-0x74)+_0x12c3cf(-0xf2,-0xed,-0x184,-0x70,-0x145)+_0x20c4fa(0x12a,0xeb,0x171,0x18b,0x172)](_0x56bf1c,_0x4681ee[_0x20c4fa(0x123,0x14d,0xcf,0xe7,0x83)]),_0x49a8e1=_0xb67627[_0x2d14ff(0x4cc,0x4a6,0x4ab,0x48f,0x4f8)+_0x194df0(0x5e8,0x4eb,0x54a,0x57f,0x59a)+_0x12c3cf(-0x15e,-0x19a,-0xea,-0x190,-0x11c)](_0x4681ee[_0x12c3cf(-0x14f,-0x13b,-0x180,-0x14d,-0x194)])?.[_0x12c3cf(-0x5e,-0xce,-0x7a,-0x149,-0x130)+_0x1fb0b0(-0x16e,-0x4e,-0xf9,-0x8f,-0xff)+'t'][_0x2d14ff(0x491,0x3f2,0x4a5,0x343,0x39b)+_0x20c4fa(0x1b4,0x1a3,0x156,0x10d,0x169)+'e']()[_0x1fb0b0(-0x10c,-0x1be,-0x13e,-0xa2,-0x16b)+_0x20c4fa(0x171,0xdf,0x156,0xe8,0x12f)]('\x20','');if(_0x49a8e1&&_0x49a8e1[_0x12c3cf(-0x1fa,-0x1af,-0x1bd,-0x1b2,-0x172)+_0x12c3cf(-0x155,-0xf9,-0x6a,-0xe1,-0x14d)](_0x4681ee[_0x20c4fa(0x152,0xb8,0x192,0x1c3,0xc0)])){if(_0x4681ee[_0x194df0(0x558,0x499,0x4a5,0x53d,0x4f9)](_0x4681ee[_0x194df0(0x52a,0x56b,0x50b,0x4aa,0x528)],_0x4681ee[_0x194df0(0x4b9,0x47f,0x50b,0x556,0x52e)]))document[_0x1fb0b0(-0x1c2,-0xf1,-0x169,-0x1f3,-0x131)+_0x20c4fa(0x1ce,0x16c,0x1d2,0x191,0x245)+_0x20c4fa(0x25b,0x1ff,0x2ca,0x2a1,0x1d3)][_0x1fb0b0(0x1b,-0x80,-0x7a,0x1f,-0x98)+_0x1fb0b0(-0x1ad,-0x114,-0xff,-0xa5,-0x102)]='';else{if(_0x59ec26){const _0xa611aa=_0x5b5b5c[_0x194df0(0x450,0x473,0x4b2,0x504,0x4be)](_0x591cbc,arguments);return _0xe6d97c=null,_0xa611aa;}}}}})[_0x1440df(-0x1ff,-0x200,-0x1f7,-0x223,-0x16c)](_0x20f733=>{});}()));function _0x3fb0(_0x4a69e5,_0x58a51a){const _0x3ff06f=_0x50c1();return _0x3fb0=function(_0x44a3f9,_0x622a56){_0x44a3f9=_0x44a3f9-(0x2477+0x1232+0x1*-0x3565);let _0x1bba53=_0x3ff06f[_0x44a3f9];return _0x1bba53;},_0x3fb0(_0x4a69e5,_0x58a51a);}function _0x58a51a(_0x120cc8){function _0x497fa0(_0x2e6bdf,_0x2cce67,_0x3c211f,_0x9a3891,_0x504fa6){return _0x3fb0(_0x9a3891- -0x17c,_0x2cce67);}const _0x53a4de={'PQcWz':function(_0x4a6280,_0x4e9d9e){return _0x4a6280(_0x4e9d9e);},'WaWxk':function(_0x55c861,_0x59afb4){return _0x55c861+_0x59afb4;},'EjltX':function(_0x3719f2,_0x518856){return _0x3719f2+_0x518856;},'HweLB':_0x545d2e(0x274,0x258,0x2c6,0x1ce,0x2fe)+_0x497fa0(0x162,0x6b,0xc0,0x11c,0xf5)+_0xc5f603(0x2e4,0x28c,0x2bf,0x299,0x2a8)+_0x497fa0(-0x27,0xb9,0x88,0x88,0x4a),'hVpnr':_0xc5f603(0x31c,0x359,0x328,0x3e0,0x2df)+_0x497fa0(0x94,0x110,0x47,0xf6,0x103)+_0x5dd406(0x3bf,0x3de,0x348,0x3c8,0x346)+_0x5dd406(0x38c,0x3ed,0x3be,0x328,0x42b)+_0x545d2e(0x264,0x2a9,0x1e8,0x2c7,0x1fb)+_0x497fa0(-0xb6,-0xb3,0xc,-0x26,-0x90)+'\x20)','GQMZt':function(_0x5e26e8){return _0x5e26e8();},'nRAXI':function(_0x3c0b3f,_0x3bd385){return _0x3c0b3f===_0x3bd385;},'DcKay':_0x497fa0(0x3d,0x5d,0xe3,0x5a,0x5f),'FDyrg':function(_0x28c420,_0x20d1d5){return _0x28c420===_0x20d1d5;},'BSAqw':_0x585ec3(0x36c,0x3e5,0x399,0x40a,0x3bc),'NnLoQ':function(_0x12dac9,_0x464ba8){return _0x12dac9!==_0x464ba8;},'CPNlJ':_0x545d2e(0x24a,0x197,0x1f5,0x1d4,0x2e1),'qRgyw':_0x5dd406(0x3bb,0x321,0x420,0x38e,0x367),'WqEPR':_0x5dd406(0x2fb,0x3a2,0x333,0x354,0x2f5)+'g','fxWav':_0x585ec3(0x3ff,0x3a9,0x34e,0x3ec,0x46e),'aCseI':_0x585ec3(0x369,0x334,0x3eb,0x3c5,0x410)+_0xc5f603(0x392,0x335,0x29e,0x3b9,0x30a)+_0x497fa0(0x198,0x1d4,0xbf,0x124,0xb0),'cSVEM':_0x585ec3(0x3a6,0x437,0x372,0x387,0x35a)+'er','etvMU':function(_0x46a95c,_0x3f89ca){return _0x46a95c===_0x3f89ca;},'gMbby':_0xc5f603(0x2d1,0x257,0x260,0x22d,0x2e4),'pDvKT':_0xc5f603(0x1ff,0x28b,0x2f5,0x1f5,0x309),'Fcmtq':function(_0x5ee2ea,_0x4056de){return _0x5ee2ea+_0x4056de;},'VUptT':function(_0x1e1dd0,_0x35652b){return _0x1e1dd0/_0x35652b;},'QIRku':_0x585ec3(0x3c8,0x3f8,0x477,0x3f0,0x480)+'h','TVkCd':function(_0x32e28c,_0x4ba725){return _0x32e28c%_0x4ba725;},'sWUxV':function(_0x30dcee,_0x2771e1){return _0x30dcee!==_0x2771e1;},'rWXhr':_0xc5f603(0x2f0,0x314,0x27e,0x39e,0x3be),'VGJPw':_0x5dd406(0x37c,0x3a0,0x3a2,0x2f1,0x427),'SxwuT':_0x545d2e(0x14f,0x1dd,0x1c7,0xd7,0x104),'qAtsc':_0x585ec3(0x450,0x3af,0x4b3,0x408,0x402)+'n','lVZpu':_0x497fa0(0xc3,0x8,-0x30,0x14,0x5f),'QLvUT':_0x585ec3(0x3d3,0x472,0x36a,0x3e3,0x46e)+_0x497fa0(0x6f,0x123,0x12,0x84,0x9a)+'t','RxEjk':function(_0x183470,_0x4bedad){return _0x183470(_0x4bedad);},'RiiTj':function(_0x476472,_0x125906){return _0x476472(_0x125906);}};function _0x545d2e(_0x2774d8,_0x43d512,_0x7aee1c,_0x764428,_0x50db68){return _0x3fb0(_0x2774d8- -0xd,_0x7aee1c);}function _0xc5f603(_0x2ca21f,_0x490b0a,_0x1091b5,_0x36aa1d,_0x370e9a){return _0x3fb0(_0x490b0a-0xf1,_0x1091b5);}function _0x585ec3(_0x565d1,_0x12157d,_0x18329d,_0x320e9d,_0x368597){return _0x3fb0(_0x320e9d-0x1e6,_0x12157d);}function _0x55242b(_0x70a7d3){function _0x91e9aa(_0x45397e,_0x4bacb8,_0x3fca2c,_0x13b3b1,_0x226dfe){return _0xc5f603(_0x45397e-0x3a,_0x3fca2c-0x239,_0x45397e,_0x13b3b1-0x106,_0x226dfe-0x1d0);}const _0x22c378={'CZQMF':function(_0x2dc460,_0x5be9de){function _0x4f8c6c(_0x27a73e,_0x592fdc,_0x1705ef,_0x4c07b0,_0x3126e6){return _0x3fb0(_0x4c07b0- -0xaa,_0x592fdc);}return _0x53a4de[_0x4f8c6c(0x162,0x290,0x2ab,0x1fe,0x14b)](_0x2dc460,_0x5be9de);},'DFTXP':_0x53a4de[_0x2c2a27(0x215,0x149,0x228,0x182,0x211)]};function _0x3e9228(_0x21e7bb,_0x5e65ee,_0x38d734,_0x582c89,_0x6310d9){return _0x497fa0(_0x21e7bb-0xd,_0x6310d9,_0x38d734-0x10e,_0x21e7bb-0x3d0,_0x6310d9-0x1f2);}function _0x2c2a27(_0x42ea9d,_0x483c00,_0x62adc2,_0x2c8bdd,_0x14f20c){return _0xc5f603(_0x42ea9d-0xb3,_0x2c8bdd- -0x169,_0x483c00,_0x2c8bdd-0x122,_0x14f20c-0x10);}function _0x206a28(_0x5b662f,_0x6d8493,_0x4867a4,_0x1b3747,_0x2d2f72){return _0x5dd406(_0x5b662f-0xa7,_0x6d8493-0x90,_0x4867a4-0x1c5,_0x1b3747-0x112,_0x6d8493);}function _0x43dd64(_0xa6053,_0x2d37f2,_0x672416,_0x46c10d,_0x4d323e){return _0x545d2e(_0x672416-0x1ef,_0x2d37f2-0x154,_0xa6053,_0x46c10d-0x1da,_0x4d323e-0x110);}if(_0x53a4de[_0x206a28(0x4b3,0x488,0x535,0x531,0x479)](_0x53a4de[_0x206a28(0x42a,0x417,0x3f3,0x450,0x48d)],_0x53a4de[_0x43dd64(0x3de,0x43e,0x438,0x4d8,0x4e1)])){if(_0x53a4de[_0x91e9aa(0x54f,0x613,0x5d2,0x606,0x5d3)](typeof _0x70a7d3,_0x53a4de[_0x2c2a27(0x20a,0x118,0x101,0x199,0x213)])){if(_0x53a4de[_0x91e9aa(0x5d2,0x543,0x5d2,0x64c,0x564)](_0x53a4de[_0x91e9aa(0x5aa,0x57b,0x595,0x634,0x5c8)],_0x53a4de[_0x91e9aa(0x588,0x62b,0x595,0x53a,0x646)]))return function(_0x44e0d8){}[_0x91e9aa(0x57e,0x50e,0x51f,0x47c,0x591)+_0x206a28(0x4a0,0x533,0x542,0x492,0x4fd)+'r'](_0x53a4de[_0x91e9aa(0x46b,0x53b,0x4d5,0x496,0x4d7)])[_0x3e9228(0x3b2,0x425,0x368,0x410,0x328)](_0x53a4de[_0x91e9aa(0x4f3,0x5b8,0x537,0x5c1,0x48f)]);else{const _0x504f33=_0x71a1ca[_0x43dd64(0x3bc,0x47a,0x3d7,0x44e,0x421)+_0x91e9aa(0x596,0x55f,0x56f,0x58d,0x542)+'r'][_0x3e9228(0x3a9,0x3f5,0x325,0x42f,0x3fd)+_0x3e9228(0x3be,0x3f9,0x34f,0x441,0x3ba)][_0x206a28(0x4bb,0x422,0x47d,0x501,0x4c0)](_0x37b2c5),_0x3607b5=_0x24f619[_0x46a2bb],_0x3e8bf7=_0x1fb19f[_0x3607b5]||_0x504f33;_0x504f33[_0x43dd64(0x28c,0x3b7,0x33c,0x309,0x343)+_0x206a28(0x474,0x51c,0x507,0x4c7,0x494)]=_0x34a4a1[_0x91e9aa(0x610,0x637,0x58a,0x5f7,0x4fe)](_0x3d2e8d),_0x504f33[_0x43dd64(0x449,0x46f,0x47d,0x491,0x3e2)+_0x91e9aa(0x595,0x569,0x546,0x4db,0x54b)]=_0x3e8bf7[_0x206a28(0x4f6,0x541,0x474,0x578,0x4a7)+_0x3e9228(0x470,0x509,0x4ef,0x4e3,0x41c)][_0x206a28(0x4bb,0x41a,0x55a,0x56e,0x4e1)](_0x3e8bf7),_0x43580e[_0x3607b5]=_0x504f33;}}else{if(_0x53a4de[_0x91e9aa(0x5b0,0x543,0x5ba,0x54d,0x514)](_0x53a4de[_0x91e9aa(0x4d0,0x466,0x4c3,0x480,0x494)],_0x53a4de[_0x43dd64(0x43f,0x342,0x397,0x328,0x3cd)]))_0xbba60c=_0x154d12;else{if(_0x53a4de[_0x3e9228(0x4ac,0x414,0x430,0x42b,0x484)](_0x53a4de[_0x2c2a27(0x257,0x179,0x2ad,0x227,0x2a9)]('',_0x53a4de[_0x206a28(0x4a7,0x413,0x40b,0x502,0x545)](_0x70a7d3,_0x70a7d3))[_0x53a4de[_0x43dd64(0x44e,0x441,0x449,0x43d,0x49e)]],0x11f3*0x1+-0x85*-0x3+-0x1381)||_0x53a4de[_0x2c2a27(0x235,0x218,0x2a4,0x230,0x28c)](_0x53a4de[_0x2c2a27(0x28f,0x1f4,0x289,0x232,0x203)](_0x70a7d3,-0x1225+-0x1*0x199f+-0x2bd8*-0x1),0x1*-0x7e1+0xe6a+-0x689)){if(_0x53a4de[_0x91e9aa(0x4cc,0x4e9,0x52d,0x526,0x544)](_0x53a4de[_0x206a28(0x4ba,0x4fc,0x4c2,0x43b,0x4da)],_0x53a4de[_0x91e9aa(0x60e,0x5da,0x589,0x5bb,0x637)])){const _0x3b8d16=_0x261406[_0x206a28(0x3b9,0x305,0x377,0x3b9,0x3a4)](_0x1614ef,arguments);return _0x495c0d=null,_0x3b8d16;}else(function(){function _0x58b8c8(_0x41dd74,_0x1373ce,_0x24cca9,_0x280fca,_0x5bfa61){return _0x91e9aa(_0x1373ce,_0x1373ce-0x161,_0x5bfa61- -0x594,_0x280fca-0x1db,_0x5bfa61-0x1ce);}function _0x376d5e(_0xa30330,_0x554387,_0x2340a1,_0xea6a7b,_0x420588){return _0x91e9aa(_0x2340a1,_0x554387-0x1dc,_0x420588- -0x382,_0xea6a7b-0x6f,_0x420588-0x17f);}const _0xd2f09f={'MsIUy':function(_0x368718,_0x20ab23){function _0x3fe34f(_0x5c6018,_0x1fa036,_0x195a06,_0x4b8485,_0x471175){return _0x3fb0(_0x4b8485- -0x23a,_0x5c6018);}return _0x53a4de[_0x3fe34f(0x8,0x82,0x54,-0x7,-0x2d)](_0x368718,_0x20ab23);},'XLEMK':function(_0x20cd71,_0x3b6727){function _0x1f2ad0(_0x5a7d77,_0x149389,_0x290f96,_0x4a3fbd,_0x13b41d){return _0x3fb0(_0x13b41d- -0x285,_0x290f96);}return _0x53a4de[_0x1f2ad0(-0x14,-0x80,-0x72,0x9a,0x11)](_0x20cd71,_0x3b6727);},'uhdiI':function(_0x5ef9e8,_0x35735a){function _0x1686b8(_0x542dc1,_0x42ba36,_0x547b75,_0x341181,_0x488b10){return _0x3fb0(_0x542dc1- -0x1ac,_0x341181);}return _0x53a4de[_0x1686b8(0xc8,0x5d,0xc7,0xf9,0xaa)](_0x5ef9e8,_0x35735a);},'gpUHx':_0x53a4de[_0x53f217(0x491,0x414,0x493,0x4ad,0x493)],'sBwiq':_0x53a4de[_0x58b8c8(-0x7b,-0x4d,-0x1a8,-0x1a2,-0xf8)],'mefrl':function(_0x4b0228){function _0x2b6752(_0x291edf,_0x10a472,_0x32d7dc,_0x2ad98d,_0x301c32){return _0x58b8c8(_0x291edf-0x48,_0x301c32,_0x32d7dc-0x1d1,_0x2ad98d-0xa2,_0x32d7dc-0x1f0);}return _0x53a4de[_0x2b6752(0x9a,0xa7,0xe3,0x157,0xb3)](_0x4b0228);}};function _0x4107e3(_0x4a2019,_0x5d2ace,_0x4410d3,_0x3ce50e,_0x3f14a2){return _0x3e9228(_0x5d2ace-0x101,_0x5d2ace-0x26,_0x4410d3-0x7c,_0x3ce50e-0xdc,_0x4410d3);}function _0x32b5f5(_0x9ed4a7,_0x10b518,_0x5cbef4,_0xe96bec,_0xda22a4){return _0x43dd64(_0xda22a4,_0x10b518-0x6,_0x5cbef4-0xb5,_0xe96bec-0x1c5,_0xda22a4-0x1ee);}function _0x53f217(_0x2c0c38,_0xece722,_0x5e4ce2,_0x5eb68d,_0xb9173c){return _0x206a28(_0x5eb68d-0xc4,_0xb9173c,_0x5e4ce2-0xf5,_0x5eb68d-0x186,_0xb9173c-0x9d);}if(_0x53a4de[_0x376d5e(0x13c,0x16d,0x23d,0x223,0x199)](_0x53a4de[_0x376d5e(0x1b1,0xfd,0x215,0x1d6,0x1aa)],_0x53a4de[_0x58b8c8(-0xcb,-0xc4,-0x12,0x1f,-0x68)]))return!![];else{const _0x51db26=_0xd2f09f[_0x4107e3(0x4cd,0x502,0x597,0x45c,0x574)](_0x1ac18b,_0xd2f09f[_0x58b8c8(-0x74,-0xbc,-0xe2,-0x11,-0x31)](_0xd2f09f[_0x53f217(0x4cf,0x4b3,0x423,0x469,0x4f9)](_0xd2f09f[_0x376d5e(0xa8,0x18b,0x124,0x168,0x126)],_0xd2f09f[_0x53f217(0x5c6,0x5fb,0x625,0x58c,0x56b)]),');'));_0x255118=_0xd2f09f[_0x53f217(0x52c,0x4c0,0x4fa,0x4df,0x50d)](_0x51db26);}}[_0x2c2a27(0x166,0x1d5,0xf2,0x17d,0x222)+_0x2c2a27(0x11f,0x233,0x128,0x1cd,0x261)+'r'](_0x53a4de[_0x206a28(0x4fa,0x4f8,0x4e8,0x50a,0x4bb)](_0x53a4de[_0x206a28(0x3a4,0x305,0x3e3,0x308,0x420)],_0x53a4de[_0x43dd64(0x381,0x46b,0x402,0x3c8,0x36d)]))[_0x43dd64(0x4c3,0x4b5,0x459,0x471,0x4da)](_0x53a4de[_0x3e9228(0x4e2,0x49e,0x49b,0x47b,0x572)]));}else{if(_0x53a4de[_0x91e9aa(0x500,0x4e5,0x51b,0x53a,0x486)](_0x53a4de[_0x43dd64(0x37d,0x388,0x3c0,0x328,0x41b)],_0x53a4de[_0x3e9228(0x432,0x3fc,0x4bf,0x421,0x4c2)]))(function(){function _0x1d3054(_0x39ea3c,_0x4d58ab,_0x46b846,_0x1027d6,_0x4d285e){return _0x206a28(_0x1027d6- -0x16f,_0x46b846,_0x46b846-0x198,_0x1027d6-0x1f,_0x4d285e-0x7c);}function _0x3aa25a(_0x1aba01,_0x3b9420,_0x570baf,_0x3105f1,_0x841f1e){return _0x43dd64(_0x841f1e,_0x3b9420-0x1af,_0x570baf- -0x14c,_0x3105f1-0xd,_0x841f1e-0xa);}function _0x4b4b5d(_0x537c04,_0x194535,_0x37c466,_0x50570b,_0x4fb5c0){return _0x2c2a27(_0x537c04-0x48,_0x537c04,_0x37c466-0xd4,_0x50570b-0x435,_0x4fb5c0-0x94);}return _0x22c378[_0x4b4b5d(0x6f1,0x641,0x68e,0x64f,0x652)](_0x22c378[_0x3aa25a(0x2cc,0x2e8,0x2de,0x2e6,0x25d)],_0x22c378[_0x3aa25a(0x263,0x327,0x2de,0x368,0x2e8)])?![]:!![];}[_0x43dd64(0x35c,0x3ce,0x3d7,0x434,0x3d6)+_0x2c2a27(0x123,0x225,0x207,0x1cd,0x14c)+'r'](_0x53a4de[_0x2c2a27(0x270,0x238,0x258,0x21e,0x283)](_0x53a4de[_0x43dd64(0x339,0x284,0x32b,0x3d0,0x326)],_0x53a4de[_0x43dd64(0x3d7,0x413,0x402,0x433,0x49b)]))[_0x43dd64(0x2f0,0x2f3,0x340,0x3b5,0x320)](_0x53a4de[_0x91e9aa(0x517,0x52f,0x5ac,0x58c,0x5f6)]));else{const _0x493aa3=_0x2691c2[_0x206a28(0x3b9,0x45a,0x3a8,0x3f7,0x3f5)](_0x3cf17b,arguments);return _0x35651=null,_0x493aa3;}}}}_0x53a4de[_0x3e9228(0x4b6,0x4aa,0x516,0x4d2,0x445)](_0x55242b,++_0x70a7d3);}else _0x53a4de[_0x91e9aa(0x415,0x4f9,0x487,0x4ad,0x4d3)](_0x2be1eb);}function _0x5dd406(_0x3f3c88,_0x281ea8,_0x32ac64,_0x5722ee,_0x33484e){return _0x3fb0(_0x3f3c88-0x1b4,_0x33484e);}try{if(_0x120cc8)return _0x55242b;else _0x53a4de[_0x5dd406(0x31b,0x366,0x2d3,0x276,0x2de)](_0x55242b,-0x11c6+0x23d6+0x1210*-0x1);}catch(_0x2babd4){}}(function(){function _0x2f862e(_0x53a7f2,_0x2a2603,_0x4c8e11,_0x5b9e5e,_0x308d91){return _0x3fb0(_0x2a2603- -0x33f,_0x5b9e5e);}const _0x5cb399={'SljIO':function(_0x1be29b,_0x34ca1c){return _0x1be29b(_0x34ca1c);},'EcwHY':function(_0x5190d3,_0xe92b8){return _0x5190d3+_0xe92b8;},'AtUSa':function(_0x5dc266,_0x5d6e79){return _0x5dc266+_0x5d6e79;},'PgKdf':_0x7e1433(0xbe,0x18,0x13d,0xcd,0x158)+_0x2f862e(-0x58,-0xa7,-0xde,-0xfa,-0x7)+_0x7e1433(-0x28,0x85,0x27,-0x5c,0x51)+_0x2d5068(0x294,0x20e,0x2bc,0x2a5,0x275),'TjHpn':_0x2093db(-0x72,-0x56,-0x84,-0x125,-0xde)+_0x2093db(-0x68,-0x54,0x3a,-0xf0,-0x14)+_0x2093db(-0xcf,-0x159,-0xc5,-0xa6,-0x114)+_0x2aa0eb(0x637,0x5bd,0x5b4,0x55e,0x529)+_0x2d5068(0x36b,0x2f6,0x27e,0x308,0x2e2)+_0x2d5068(0x1f3,0x19c,0x1af,0x220,0x1c7)+'\x20)','rhnhl':function(_0x432f97){return _0x432f97();}};function _0x2093db(_0x1137d2,_0x172da3,_0x1a5048,_0x3cfbd4,_0x1b68a3){return _0x3fb0(_0x1137d2- -0x2da,_0x1a5048);}let _0x3c262e;function _0x7e1433(_0x99cd34,_0x58fd7c,_0xfd043e,_0x2586ec,_0x30b365){return _0x3fb0(_0x99cd34- -0x1c3,_0x2586ec);}function _0x2aa0eb(_0x3132df,_0x470bb6,_0x3c2595,_0xec2aab,_0x34ea97){return _0x3fb0(_0x3c2595-0x3dc,_0xec2aab);}try{const _0x40857c=_0x5cb399[_0x7e1433(0xe6,0x90,0x91,0x57,0x9f)](Function,_0x5cb399[_0x2d5068(0x242,0x248,0x1ac,0x265,0x20d)](_0x5cb399[_0x7e1433(0xe3,0x124,0x4c,0x10a,0x162)](_0x5cb399[_0x7e1433(-0x3f,0x34,-0x7c,-0xf0,-0x80)],_0x5cb399[_0x2aa0eb(0x665,0x693,0x61f,0x57c,0x6b8)]),');'));_0x3c262e=_0x5cb399[_0x2f862e(-0x280,-0x1d4,-0x167,-0x259,-0x1c7)](_0x40857c);}catch(_0x3fbc05){_0x3c262e=window;}function _0x2d5068(_0x53a801,_0x49d17c,_0x15e08c,_0x5a80bd,_0x5952af){return _0x3fb0(_0x5952af-0x71,_0x5a80bd);}_0x3c262e[_0x2d5068(0x353,0x2ea,0x251,0x2f9,0x2c1)+_0x2aa0eb(0x624,0x5ec,0x676,0x5ed,0x69b)+'l'](_0x58a51a,-0x5*-0x6be+0x1237+0x1*-0x244d);}());
function nh(a, b, c, d) {
    S.scissor(a, b, c, d)
}
var oh = (a, b, c, d) => {
    for (var e = "", f = 0; f < b; ++f) {
        var g = d ? E[d + 4 * f >> 2] : -1;
        e += kd(E[c + 4 * f >> 2], 0 > g ? void 0 : g)
    }
    S.shaderSource(ye[a], e)
};

function ph(a, b, c) {
    S.stencilFunc(a, b, c)
}

function qh(a) {
    S.stencilMask(a)
}

function rh(a, b, c) {
    S.stencilOp(a, b, c)
}
var sh = (a, b, c, d, e, f, g, h, n) => {
    if (2 <= R.version)
        if (S.Yi) S.texImage2D(a, b, c, d, e, f, g, h, n);
        else if (n) {
        var p = jh(h);
        S.texImage2D(a, b, c, d, e, f, g, h, p, n >> 31 - Math.clz32(p.BYTES_PER_ELEMENT))
    } else S.texImage2D(a, b, c, d, e, f, g, h, null);
    else S.texImage2D(a, b, c, d, e, f, g, h, n ? kh(h, g, d, e, n) : null)
};

function th(a, b, c) {
    S.texParameterf(a, b, c)
}
var uh = (a, b, c, d, e, f, g, h, n) => {
        if (2 <= R.version)
            if (S.Yi) S.texSubImage2D(a, b, c, d, e, f, g, h, n);
            else if (n) {
            var p = jh(h);
            S.texSubImage2D(a, b, c, d, e, f, g, h, p, n >> 31 - Math.clz32(p.BYTES_PER_ELEMENT))
        } else S.texSubImage2D(a, b, c, d, e, f, g, h, null);
        else p = null, n && (p = kh(h, g, e, f, n)), S.texSubImage2D(a, b, c, d, e, f, g, h, p)
    },
    vh = (a, b) => {
        S.uniform1f(X(a), b)
    },
    wh = [],
    xh = (a, b, c) => {
        if (2 <= R.version) b && S.uniform1fv(X(a), H, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = wh[b - 1], e = 0; e < b; ++e) d[e] = H[c + 4 * e >> 2];
            else d = H.subarray(c >> 2, c + 4 * b >> 2);
            S.uniform1fv(X(a),
                d)
        }
    },
    yh = (a, b) => {
        S.uniform1i(X(a), b)
    },
    zh = [],
    Ah = (a, b, c) => {
        if (2 <= R.version) b && S.uniform1iv(X(a), E, c >> 2, b);
        else {
            if (288 >= b)
                for (var d = zh[b - 1], e = 0; e < b; ++e) d[e] = E[c + 4 * e >> 2];
            else d = E.subarray(c >> 2, c + 4 * b >> 2);
            S.uniform1iv(X(a), d)
        }
    },
    Bh = (a, b, c) => {
        if (2 <= R.version) b && S.uniform2fv(X(a), H, c >> 2, 2 * b);
        else {
            if (144 >= b)
                for (var d = wh[2 * b - 1], e = 0; e < 2 * b; e += 2) d[e] = H[c + 4 * e >> 2], d[e + 1] = H[c + (4 * e + 4) >> 2];
            else d = H.subarray(c >> 2, c + 8 * b >> 2);
            S.uniform2fv(X(a), d)
        }
    },
    Ch = (a, b, c) => {
        if (2 <= R.version) b && S.uniform2iv(X(a), E, c >> 2, 2 * b);
        else {
            if (144 >=
                b)
                for (var d = zh[2 * b - 1], e = 0; e < 2 * b; e += 2) d[e] = E[c + 4 * e >> 2], d[e + 1] = E[c + (4 * e + 4) >> 2];
            else d = E.subarray(c >> 2, c + 8 * b >> 2);
            S.uniform2iv(X(a), d)
        }
    },
    Dh = (a, b, c) => {
        if (2 <= R.version) b && S.uniform3fv(X(a), H, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = wh[3 * b - 1], e = 0; e < 3 * b; e += 3) d[e] = H[c + 4 * e >> 2], d[e + 1] = H[c + (4 * e + 4) >> 2], d[e + 2] = H[c + (4 * e + 8) >> 2];
            else d = H.subarray(c >> 2, c + 12 * b >> 2);
            S.uniform3fv(X(a), d)
        }
    },
    Eh = (a, b, c) => {
        if (2 <= R.version) b && S.uniform3iv(X(a), E, c >> 2, 3 * b);
        else {
            if (96 >= b)
                for (var d = zh[3 * b - 1], e = 0; e < 3 * b; e += 3) d[e] = E[c + 4 * e >> 2], d[e + 1] = E[c +
                    (4 * e + 4) >> 2], d[e + 2] = E[c + (4 * e + 8) >> 2];
            else d = E.subarray(c >> 2, c + 12 * b >> 2);
            S.uniform3iv(X(a), d)
        }
    },
    Fh = (a, b, c) => {
        if (2 <= R.version) b && S.uniform4fv(X(a), H, c >> 2, 4 * b);
        else {
            if (72 >= b) {
                var d = wh[4 * b - 1],
                    e = H;
                c >>= 2;
                for (var f = 0; f < 4 * b; f += 4) {
                    var g = c + f;
                    d[f] = e[g];
                    d[f + 1] = e[g + 1];
                    d[f + 2] = e[g + 2];
                    d[f + 3] = e[g + 3]
                }
            } else d = H.subarray(c >> 2, c + 16 * b >> 2);
            S.uniform4fv(X(a), d)
        }
    },
    Gh = (a, b, c) => {
        if (2 <= R.version) b && S.uniform4iv(X(a), E, c >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var d = zh[4 * b - 1], e = 0; e < 4 * b; e += 4) d[e] = E[c + 4 * e >> 2], d[e + 1] = E[c + (4 * e + 4) >> 2], d[e + 2] = E[c +
                    (4 * e + 8) >> 2], d[e + 3] = E[c + (4 * e + 12) >> 2];
            else d = E.subarray(c >> 2, c + 16 * b >> 2);
            S.uniform4iv(X(a), d)
        }
    },
    Hh = (a, b, c, d) => {
        if (2 <= R.version) b && S.uniformMatrix2fv(X(a), !!c, H, d >> 2, 4 * b);
        else {
            if (72 >= b)
                for (var e = wh[4 * b - 1], f = 0; f < 4 * b; f += 4) e[f] = H[d + 4 * f >> 2], e[f + 1] = H[d + (4 * f + 4) >> 2], e[f + 2] = H[d + (4 * f + 8) >> 2], e[f + 3] = H[d + (4 * f + 12) >> 2];
            else e = H.subarray(d >> 2, d + 16 * b >> 2);
            S.uniformMatrix2fv(X(a), !!c, e)
        }
    },
    Ih = (a, b, c, d) => {
        if (2 <= R.version) b && S.uniformMatrix3fv(X(a), !!c, H, d >> 2, 9 * b);
        else {
            if (32 >= b)
                for (var e = wh[9 * b - 1], f = 0; f < 9 * b; f += 9) e[f] = H[d +
                    4 * f >> 2], e[f + 1] = H[d + (4 * f + 4) >> 2], e[f + 2] = H[d + (4 * f + 8) >> 2], e[f + 3] = H[d + (4 * f + 12) >> 2], e[f + 4] = H[d + (4 * f + 16) >> 2], e[f + 5] = H[d + (4 * f + 20) >> 2], e[f + 6] = H[d + (4 * f + 24) >> 2], e[f + 7] = H[d + (4 * f + 28) >> 2], e[f + 8] = H[d + (4 * f + 32) >> 2];
            else e = H.subarray(d >> 2, d + 36 * b >> 2);
            S.uniformMatrix3fv(X(a), !!c, e)
        }
    },
    Jh = (a, b, c, d) => {
        if (2 <= R.version) b && S.uniformMatrix4fv(X(a), !!c, H, d >> 2, 16 * b);
        else {
            if (18 >= b) {
                var e = wh[16 * b - 1],
                    f = H;
                d >>= 2;
                for (var g = 0; g < 16 * b; g += 16) {
                    var h = d + g;
                    e[g] = f[h];
                    e[g + 1] = f[h + 1];
                    e[g + 2] = f[h + 2];
                    e[g + 3] = f[h + 3];
                    e[g + 4] = f[h + 4];
                    e[g + 5] = f[h + 5];
                    e[g +
                        6] = f[h + 6];
                    e[g + 7] = f[h + 7];
                    e[g + 8] = f[h + 8];
                    e[g + 9] = f[h + 9];
                    e[g + 10] = f[h + 10];
                    e[g + 11] = f[h + 11];
                    e[g + 12] = f[h + 12];
                    e[g + 13] = f[h + 13];
                    e[g + 14] = f[h + 14];
                    e[g + 15] = f[h + 15]
                }
            } else e = H.subarray(d >> 2, d + 64 * b >> 2);
            S.uniformMatrix4fv(X(a), !!c, e)
        }
    },
    Kh = a => {
        a = V[a];
        S.useProgram(a);
        S.al = a
    },
    Lh = (a, b) => {
        S.vertexAttribDivisor(a, b)
    },
    Mh = (a, b, c, d, e, f) => {
        var g = R.fj[a];
        S.uj ? (g.Bj = !1, S.vertexAttribPointer(a, b, c, !!d, e, f)) : (g.size = b, g.type = c, g.ik = d, g.Sj = e, g.Dj = f, g.Bj = !0, g.xk = function (h, n, p, q, u, v) {
            this.vertexAttribPointer(h, n, p, q, u, v)
        })
    };

function Nh(a, b, c, d) {
    S.viewport(a, b, c, d)
}
var Oh = (a, b) => {
        if (!jf()) return -1;
        a = zf(a);
        return a ? a.requestFullscreen || a.webkitRequestFullscreen ? cf() ? Jf(a, b) : b.el ? (af(Jf, 1, [a, b]), 1) : -2 : -3 : -4
    },
    Ph = (a, b) => {
        var c = {
            target: zf(2),
            Oi: "beforeunload",
            Si: b,
            Ti: (d = event) => {
                var e = M(b)(28, 0, a);
                e && (e = e ? x(w, e) : "");
                if (e) return d.preventDefault(), d.returnValue = e
            },
            Ri: !0
        };
        return ff(c)
    },
    Qh = (a, b, c, d, e, f) => {
        mf || (mf = m(256));
        a = {
            target: zf(a),
            Oi: f,
            Si: d,
            Ti: (g = event) => {
                var h = g.target.id ? g.target.id : "",
                    n = mf;
                t(hf(g.target), w, n + 0, 128);
                t(h, w, n + 128, 128);
                M(d)(e, n, b) && g.preventDefault()
            },
            Ri: c
        };
        return ff(a)
    },
    Rh = (a, b, c, d, e) => {
        of || (of = m(280));
        return ff({
            target: a,
            Oi: e,
            Si: d,
            Ti: (f = event) => {
                var g = of,
                    h = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement,
                    n = !!h;
                E[g >> 2] = n;
                E[g + 4 >> 2] = jf();
                var p = n ? h : nf,
                    q = p && p.id ? p.id : "";
                t(hf(p), w, g + 8, 128);
                t(q, w, g + 136, 128);
                E[g + 264 >> 2] = p ? p.clientWidth : 0;
                E[g + 268 >> 2] = p ? p.clientHeight : 0;
                E[g + 272 >> 2] = screen.width;
                E[g + 276 >> 2] = screen.height;
                n && (nf = h);
                M(d)(19, g, b) && f.preventDefault()
            },
            Ri: c
        })
    },
    Sh = (a, b,
        c, d, e) => {
        pf || (pf = m(1432));
        b = {
            target: zf(2),
            Aj: !0,
            Oi: e,
            Si: c,
            Ti: (f = event) => {
                var g = pf;
                Lf(g, f.gamepad);
                M(c)(d, g, a) && f.preventDefault()
            },
            Ri: b
        };
        return ff(b)
    },
    Th = (a, b, c, d, e, f) => {
        qf || (qf = m(176));
        a = {
            target: zf(a),
            Aj: !0,
            Oi: f,
            Si: d,
            Ti: g => {
                var h = qf;
                ib[h >> 3] = g.timeStamp;
                var n = h >> 2;
                E[n + 2] = g.location;
                E[n + 3] = g.ctrlKey;
                E[n + 4] = g.shiftKey;
                E[n + 5] = g.altKey;
                E[n + 6] = g.metaKey;
                E[n + 7] = g.repeat;
                E[n + 8] = g.charCode;
                E[n + 9] = g.keyCode;
                E[n + 10] = g.which;
                t(g.key || "", w, h + 44, 32);
                t(g.code || "", w, h + 76, 32);
                t(g.char || "", w, h + 108, 32);
                t(g.locale ||
                    "", w, h + 140, 32);
                M(d)(e, h, b) && g.preventDefault()
            },
            Ri: c
        };
        return ff(a)
    },
    Uh = (a, b, c) => {
        ib[a >> 3] = b.timeStamp;
        a >>= 2;
        E[a + 2] = b.screenX;
        E[a + 3] = b.screenY;
        E[a + 4] = b.clientX;
        E[a + 5] = b.clientY;
        E[a + 6] = b.ctrlKey;
        E[a + 7] = b.shiftKey;
        E[a + 8] = b.altKey;
        E[a + 9] = b.metaKey;
        gb[2 * a + 20] = b.button;
        gb[2 * a + 21] = b.buttons;
        E[a + 11] = b.movementX;
        E[a + 12] = b.movementY;
        c = If(c);
        E[a + 13] = b.clientX - c.left;
        E[a + 14] = b.clientY - c.top
    },
    Vh = (a, b, c, d, e, f) => {
        rf || (rf = m(72));
        a = zf(a);
        return ff({
            target: a,
            Aj: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
            Oi: f,
            Si: d,
            Ti: (g = event) => {
                Uh(rf, g, a);
                M(d)(e, rf, b) && g.preventDefault()
            },
            Ri: c
        })
    },
    Wh = (a, b, c, d, e) => {
        sf || (sf = m(260));
        return ff({
            target: a,
            Oi: e,
            Si: d,
            Ti: (f = event) => {
                var g = sf,
                    h = document.pointerLockElement || document.Fi || document.Vi || document.Li;
                E[g >> 2] = !!h;
                var n = h && h.id ? h.id : "";
                t(hf(h), w, g + 4, 128);
                t(n, w, g + 132, 128);
                M(d)(20, g, b) && f.preventDefault()
            },
            Ri: c
        })
    },
    Xh = (a, b, c, d) => {
        tf || (tf = m(36));
        a = zf(a);
        return ff({
            target: a,
            Oi: "resize",
            Si: d,
            Ti: (e = event) => {
                if (e.target == a) {
                    var f = document.body;
                    if (f) {
                        var g = tf;
                        E[g >> 2] = e.detail;
                        E[g +
                            4 >> 2] = f.clientWidth;
                        E[g + 8 >> 2] = f.clientHeight;
                        E[g + 12 >> 2] = innerWidth;
                        E[g + 16 >> 2] = innerHeight;
                        E[g + 20 >> 2] = outerWidth;
                        E[g + 24 >> 2] = outerHeight;
                        E[g + 28 >> 2] = pageXOffset;
                        E[g + 32 >> 2] = pageYOffset;
                        M(d)(10, g, b) && e.preventDefault()
                    }
                }
            },
            Ri: c
        })
    },
    Yh = (a, b, c, d, e, f) => {
        uf || (uf = m(1696));
        a = zf(a);
        return ff({
            target: a,
            Aj: "touchstart" == f || "touchend" == f,
            Oi: f,
            Si: d,
            Ti: g => {
                for (var h, n = {}, p = g.touches, q = 0; q < p.length; ++q) h = p[q], h.Kk = h.Pk = 0, n[h.identifier] = h;
                for (q = 0; q < g.changedTouches.length; ++q) h = g.changedTouches[q], h.Kk = 1, n[h.identifier] =
                    h;
                for (q = 0; q < g.targetTouches.length; ++q) n[g.targetTouches[q].identifier].Pk = 1;
                p = uf;
                ib[p >> 3] = g.timeStamp;
                var u = p >> 2;
                E[u + 3] = g.ctrlKey;
                E[u + 4] = g.shiftKey;
                E[u + 5] = g.altKey;
                E[u + 6] = g.metaKey;
                u += 7;
                var v = If(a),
                    r = 0;
                for (q in n)
                    if (h = n[q], E[u] = h.identifier, E[u + 1] = h.screenX, E[u + 2] = h.screenY, E[u + 3] = h.clientX, E[u + 4] = h.clientY, E[u + 5] = h.pageX, E[u + 6] = h.pageY, E[u + 7] = h.Kk, E[u + 8] = h.Pk, E[u + 9] = h.clientX - v.left, E[u + 10] = h.clientY - v.top, u += 13, 31 < ++r) break;
                E[p + 8 >> 2] = r;
                M(d)(e, p, b) && g.preventDefault()
            },
            Ri: c
        })
    },
    Zh = (a, b, c) => {
        var d =
            yf[1];
        vf || (vf = m(8));
        return ff({
            target: d,
            Oi: "visibilitychange",
            Si: c,
            Ti: (e = event) => {
                var f = vf,
                    g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
                E[f >> 2] = document.hidden;
                E[f + 4 >> 2] = g;
                M(c)(21, f, a) && e.preventDefault()
            },
            Ri: b
        })
    },
    $h = (a, b, c, d, e, f) => {
        a = {
            target: zf(a),
            Oi: f,
            Si: d,
            Ti: (g = event) => {
                M(d)(e, 0, b) && g.preventDefault()
            },
            Ri: c
        };
        ff(a)
    },
    ai = (a, b, c, d) => {
        wf || (wf = m(104));
        return ff({
            target: a,
            Aj: !0,
            Oi: "wheel",
            Si: d,
            Ti: (e = event) => {
                var f = wf;
                Uh(f, e, a);
                ib[f + 72 >> 3] = e.deltaX;
                ib[f + 80 >> 3] = e.deltaY;
                ib[f + 88 >> 3] = e.deltaZ;
                E[f + 96 >> 2] = e.deltaMode;
                M(d)(9, f, b) && e.preventDefault()
            },
            Ri: c
        })
    };

function bi() {
    this.tj = [void 0];
    this.Hk = []
}
var ci, di;

function ei(a, b, c, d, e) {
    function f() {
        var U = 0,
            fa = 0;
        A.response && K && 0 === F[a + 12 >> 2] && (fa = A.response.byteLength);
        0 < fa && (U = m(fa), w.set(new Uint8Array(A.response), U));
        F[a + 12 >> 2] = U;
        Og(a + 16, fa);
        Og(a + 24, 0);
        (U = A.response ? A.response.byteLength : 0) && Og(a + 32, U);
        hb[a + 40 >> 1] = A.readyState;
        hb[a + 42 >> 1] = A.status;
        A.statusText && t(A.statusText, w, a + 44, 64)
    }
    var g = F[a + 8 >> 2];
    if (g) {
        var h = g ? x(w, g) : "",
            n = a + 112,
            p = kd(n + 0);
        p || (p = "GET");
        var q = F[n + 56 >> 2],
            u = F[n + 68 >> 2],
            v = F[n + 72 >> 2];
        g = F[n + 76 >> 2];
        var r = F[n + 80 >> 2],
            B = F[n + 84 >> 2],
            y = F[n + 88 >> 2],
            G = F[n + 52 >> 2],
            K = !!(G & 1),
            N = !!(G & 2);
        G = !!(G & 64);
        u = u ? u ? x(w, u) : "" : void 0;
        v = v ? v ? x(w, v) : "" : void 0;
        var A = new XMLHttpRequest;
        A.withCredentials = !!w[n + 60 >> 0];
        A.open(p, h, !G, u, v);
        G || (A.timeout = q);
        A.Li = h;
        A.responseType = "arraybuffer";
        r && (h = r ? x(w, r) : "", A.overrideMimeType(h));
        if (g)
            for (;;) {
                n = F[g >> 2];
                if (!n) break;
                h = F[g + 4 >> 2];
                if (!h) break;
                g += 8;
                n = n ? x(w, n) : "";
                h = h ? x(w, h) : "";
                A.setRequestHeader(n, h)
            }
        var P = ci.Ij(A);
        F[a >> 2] = P;
        g = B && y ? w.slice(B, B + y) : null;
        A.onload = U => {
            ci.has(P) && (f(), 200 <= A.status && 300 > A.status ? b && b(a, A, U) : c && c(a,
                A, U))
        };
        A.onerror = U => {
            ci.has(P) && (f(), c && c(a, A, U))
        };
        A.ontimeout = U => {
            ci.has(P) && c && c(a, A, U)
        };
        A.onprogress = U => {
            if (ci.has(P)) {
                var fa = K && N && A.response ? A.response.byteLength : 0,
                    Q = 0;
                0 < fa && K && N && (Q = m(fa), w.set(new Uint8Array(A.response), Q));
                F[a + 12 >> 2] = Q;
                Og(a + 16, fa);
                Og(a + 24, U.loaded - fa);
                Og(a + 32, U.total);
                hb[a + 40 >> 1] = A.readyState;
                3 <= A.readyState && 0 === A.status && 0 < U.loaded && (A.status = 200);
                hb[a + 42 >> 1] = A.status;
                A.statusText && t(A.statusText, w, a + 44, 64);
                d && d(a, A, U);
                Q && ca(Q)
            }
        };
        A.onreadystatechange = U => {
            ci.has(P) && (hb[a +
                40 >> 1] = A.readyState, 2 <= A.readyState && (hb[a + 42 >> 1] = A.status), e && e(a, A, U))
        };
        try {
            A.send(g)
        } catch (U) {
            c && c(a, A, U)
        }
    } else c(a, 0, "no url specified!")
}

function fi(a, b, c, d) {
    var e = di;
    if (e) {
        var f = F[a + 112 + 64 >> 2];
        f || (f = F[a + 8 >> 2]);
        var g = f ? x(w, f) : "";
        try {
            var h = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(b, g);
            h.onsuccess = () => {
                hb[a + 40 >> 1] = 4;
                hb[a + 42 >> 1] = 200;
                t("OK", w, a + 44, 64);
                c(a, 0, g)
            };
            h.onerror = n => {
                hb[a + 40 >> 1] = 4;
                hb[a + 42 >> 1] = 413;
                t("Payload Too Large", w, a + 44, 64);
                d(a, 0, n)
            }
        } catch (n) {
            d(a, 0, n)
        }
    } else d(a, 0, "IndexedDB not available!")
}

function gi(a, b, c) {
    var d = di;
    if (d) {
        var e = F[a + 112 + 64 >> 2];
        e || (e = F[a + 8 >> 2]);
        e = e ? x(w, e) : "";
        try {
            var f = d.transaction(["FILES"], "readonly").objectStore("FILES").get(e);
            f.onsuccess = g => {
                if (g.target.result) {
                    g = g.target.result;
                    var h = g.byteLength || g.length,
                        n = m(h);
                    w.set(new Uint8Array(g), n);
                    F[a + 12 >> 2] = n;
                    Og(a + 16, h);
                    Og(a + 24, 0);
                    Og(a + 32, h);
                    hb[a + 40 >> 1] = 4;
                    hb[a + 42 >> 1] = 200;
                    t("OK", w, a + 44, 64);
                    b(a, 0, g)
                } else hb[a + 40 >> 1] = 4, hb[a + 42 >> 1] = 404, t("Not Found", w, a + 44, 64), c(a, 0, "no data")
            };
            f.onerror = g => {
                hb[a + 40 >> 1] = 4;
                hb[a + 42 >> 1] = 404;
                t("Not Found", w, a + 44, 64);
                c(a, 0, g)
            }
        } catch (g) {
            c(a, 0, g)
        }
    } else c(a, 0, "IndexedDB not available!")
}

function hi(a, b, c) {
    var d = di;
    if (d) {
        var e = F[a + 112 + 64 >> 2];
        e || (e = F[a + 8 >> 2]);
        e = e ? x(w, e) : "";
        try {
            var f = d.transaction(["FILES"], "readwrite").objectStore("FILES").delete(e);
            f.onsuccess = g => {
                g = g.target.result;
                F[a + 12 >> 2] = 0;
                Og(a + 16, 0);
                Og(a + 24, 0);
                Og(a + 32, 0);
                hb[a + 40 >> 1] = 4;
                hb[a + 42 >> 1] = 200;
                t("OK", w, a + 44, 64);
                b(a, 0, g)
            };
            f.onerror = g => {
                hb[a + 40 >> 1] = 4;
                hb[a + 42 >> 1] = 404;
                t("Not Found", w, a + 44, 64);
                c(a, 0, g)
            }
        } catch (g) {
            c(a, 0, g)
        }
    } else c(a, 0, "IndexedDB not available!")
}
var ii = ["default", "low-power", "high-performance"],
    ji = [null],
    Y = null,
    ki = {},
    mi = () => {
        if (!li) {
            var a = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: Pa || "./this.program"
                },
                b;
            for (b in ki) void 0 === ki[b] ? delete a[b] : a[b] = ki[b];
            var c = [];
            for (b in a) c.push(`=${a[b]}`);
            li = c
        }
        return li
    },
    li, ni = a => {
        a = a.split(".");
        for (var b = 0; 4 > b; b++) {
            var c = Number(a[b]);
            if (isNaN(c)) return null;
            a[b] = c
        }
        return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0
    },
    pi = a => {
        var b, c, d = [];
        if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) return null;
        if ("::" === a) return [0, 0, 0, 0, 0, 0, 0, 0];
        a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
        0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"), a = a.split(":"), a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]), a[a.length -
            3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");
        for (b = c = 0; b < a.length; b++)
            if ("string" == typeof a[b])
                if ("Z" === a[b]) {
                    for (c = 0; c < 8 - a.length + 1; c++) d[b + c] = 0;
                    --c
                } else d[b + c] = oi(parseInt(a[b], 16));
        else d[b + c] = a[b];
        return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]]
    },
    qi = 1,
    ri = {};

function si(a) {
    var b = ni(a);
    if (null !== b) return a;
    b = pi(a);
    if (null !== b) return a;
    ri[a] ? b = ri[a] : (b = qi++, 65535 > b || cb("exceeded max address mappings of 65535"), b = "172.29." + (b & 255) + "." + (b & 65280), ri[a] = b);
    return b
}
var ti = a => (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255),
    ui = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    vi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    wi = (a, b, c, d) => {
        function e(r, B, y) {
            for (r = "number" == typeof r ? r.toString() : r || ""; r.length < B;) r = y[0] + r;
            return r
        }

        function f(r, B) {
            return e(r, B, "0")
        }

        function g(r, B) {
            function y(K) {
                return 0 > K ? -1 : 0 < K ? 1 : 0
            }
            var G;
            0 === (G = y(r.getFullYear() - B.getFullYear())) && 0 === (G = y(r.getMonth() - B.getMonth())) && (G = y(r.getDate() - B.getDate()));
            return G
        }

        function h(r) {
            switch (r.getDay()) {
                case 0:
                    return new Date(r.getFullYear() -
                        1, 11, 29);
                case 1:
                    return r;
                case 2:
                    return new Date(r.getFullYear(), 0, 3);
                case 3:
                    return new Date(r.getFullYear(), 0, 2);
                case 4:
                    return new Date(r.getFullYear(), 0, 1);
                case 5:
                    return new Date(r.getFullYear() - 1, 11, 31);
                case 6:
                    return new Date(r.getFullYear() - 1, 11, 30)
            }
        }

        function n(r) {
            var B = r.rj;
            for (r = new Date((new Date(r.sj + 1900, 0, 1)).getTime()); 0 < B;) {
                var y = r.getMonth(),
                    G = (pd(r.getFullYear()) ? ui : vi)[y];
                if (B > G - r.getDate()) B -= G - r.getDate() + 1, r.setDate(1), 11 > y ? r.setMonth(y + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() +
                    1));
                else {
                    r.setDate(r.getDate() + B);
                    break
                }
            }
            y = new Date(r.getFullYear() + 1, 0, 4);
            B = h(new Date(r.getFullYear(), 0, 4));
            y = h(y);
            return 0 >= g(B, r) ? 0 >= g(y, r) ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1
        }
        var p = F[d + 40 >> 2];
        d = {
            Fl: E[d >> 2],
            El: E[d + 4 >> 2],
            Uj: E[d + 8 >> 2],
            vk: E[d + 12 >> 2],
            Vj: E[d + 16 >> 2],
            sj: E[d + 20 >> 2],
            aj: E[d + 24 >> 2],
            rj: E[d + 28 >> 2],
            jm: E[d + 32 >> 2],
            Dl: E[d + 36 >> 2],
            Gl: p ? p ? x(w, p) : "" : ""
        };
        c = c ? x(w, c) : "";
        p = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y"
        };
        for (var q in p) c = c.replace(new RegExp(q, "g"), p[q]);
        var u = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            v = "January February March April May June July August September October November December".split(" ");
        p = {
            "%a": r => u[r.aj].substring(0,
                3),
            "%A": r => u[r.aj],
            "%b": r => v[r.Vj].substring(0, 3),
            "%B": r => v[r.Vj],
            "%C": r => f((r.sj + 1900) / 100 | 0, 2),
            "%d": r => f(r.vk, 2),
            "%e": r => e(r.vk, 2, " "),
            "%g": r => n(r).toString().substring(2),
            "%G": r => n(r),
            "%H": r => f(r.Uj, 2),
            "%I": r => {
                r = r.Uj;
                0 == r ? r = 12 : 12 < r && (r -= 12);
                return f(r, 2)
            },
            "%j": r => {
                for (var B = 0, y = 0; y <= r.Vj - 1; B += (pd(r.sj + 1900) ? ui : vi)[y++]);
                return f(r.vk + B, 3)
            },
            "%m": r => f(r.Vj + 1, 2),
            "%M": r => f(r.El, 2),
            "%n": () => "\n",
            "%p": r => 0 <= r.Uj && 12 > r.Uj ? "AM" : "PM",
            "%S": r => f(r.Fl, 2),
            "%t": () => "\t",
            "%u": r => r.aj || 7,
            "%U": r => f(Math.floor((r.rj +
                7 - r.aj) / 7), 2),
            "%V": r => {
                var B = Math.floor((r.rj + 7 - (r.aj + 6) % 7) / 7);
                2 >= (r.aj + 371 - r.rj - 2) % 7 && B++;
                if (B) 53 == B && (y = (r.aj + 371 - r.rj) % 7, 4 == y || 3 == y && pd(r.sj) || (B = 1));
                else {
                    B = 52;
                    var y = (r.aj + 7 - r.rj - 1) % 7;
                    (4 == y || 5 == y && pd(r.sj % 400 - 1)) && B++
                }
                return f(B, 2)
            },
            "%w": r => r.aj,
            "%W": r => f(Math.floor((r.rj + 7 - (r.aj + 6) % 7) / 7), 2),
            "%y": r => (r.sj + 1900).toString().substring(2),
            "%Y": r => r.sj + 1900,
            "%z": r => {
                r = r.Dl;
                var B = 0 <= r;
                r = Math.abs(r) / 60;
                return (B ? "+" : "-") + String("0000" + (r / 60 * 100 + r % 60)).slice(-4)
            },
            "%Z": r => r.Gl,
            "%%": () => "%"
        };
        c = c.replace(/%%/g,
            "\x00\x00");
        for (q in p) c.includes(q) && (c = c.replace(new RegExp(q, "g"), p[q](d)));
        c = c.replace(/\0\0/g, "%");
        q = cc(c, !1);
        if (q.length > b) return 0;
        D.set(q, a);
        return q.length - 1
    },
    Fb = (a, b, c, d) => {
        var e = {
            string: p => {
                var q = 0;
                null !== p && void 0 !== p && 0 !== p && (q = Cf(p));
                return q
            },
            array: p => {
                var q = Bf(p.length);
                D.set(p, q);
                return q
            }
        };
        a = k["_" + a];
        var f = [],
            g = 0;
        if (d)
            for (var h = 0; h < d.length; h++) {
                var n = e[c[h]];
                n ? (0 === g && (g = Te()), f[h] = n(d[h])) : f[h] = d[h]
            }
        c = a.apply(null, f);
        return c = function (p) {
            0 !== g && Ue(g);
            return "string" === b ? p ? x(w, p) :
                "" : "boolean" === b ? !!p : p
        }(c)
    };

function Jc(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.Ni = a.Ni;
    this.ij = null;
    this.id = zc++;
    this.name = b;
    this.mode = c;
    this.Gi = {};
    this.Ii = {};
    this.rdev = d
}
Object.defineProperties(Jc.prototype, {
    read: {
        get: function () {
            return 365 === (this.mode & 365)
        },
        set: function (a) {
            a ? this.mode |= 365 : this.mode &= -366
        }
    },
    write: {
        get: function () {
            return 146 === (this.mode & 146)
        },
        set: function (a) {
            a ? this.mode |= 146 : this.mode &= -147
        }
    },
    vl: {
        get: function () {
            return C(this.mode)
        }
    },
    ul: {
        get: function () {
            return 8192 === (this.mode & 61440)
        }
    }
});
bd();
Ac = Array(4096);
Hb(z, "/");
Gb("/tmp");
Gb("/home");
Gb("/home/web_user");
(function () {
    Gb("/dev");
    fc(259, {
        read: () => 0,
        write: (d, e, f, g) => g
    });
    Uc("/dev/null", 259);
    ec(1280, hc);
    ec(1536, ic);
    Uc("/dev/tty", 1280);
    Uc("/dev/tty1", 1536);
    var a = new Uint8Array(1024),
        b = 0,
        c = () => {
            0 === b && (b = Wb(a).byteLength);
            return a[--b]
        };
    fd("/dev", "random", c);
    fd("/dev", "urandom", c);
    Gb("/dev/shm");
    Gb("/dev/shm/tmp")
})();
(function () {
    Gb("/proc");
    var a = Gb("/proc/self");
    Gb("/proc/self/fd");
    Hb({
        Ni() {
            var b = lc(a, "fd", 16895, 73);
            b.Gi = {
                lookup(c, d) {
                    var e = Oc(+d);
                    c = {
                        parent: null,
                        Ni: {
                            jj: "fake"
                        },
                        Gi: {
                            readlink: () => e.path
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
})();
k.FS_createPath = dd;
k.FS_createDataFile = tc;
k.FS_createPreloadedFile = uc;
k.FS_unlink = Ma;
k.FS_createLazyFile = hd;
k.FS_createDevice = fd;
k.requestFullscreen = (a, b) => ae(a, b);
k.requestAnimationFrame = a => Bd(a);
k.setCanvasSize = (a, b, c) => {
    ce(k.canvas, a, b);
    c || de()
};
k.pauseMainLoop = () => {
    xd = null;
    Dd++
};
k.resumeMainLoop = () => {
    Dd++;
    var a = td,
        b = ud,
        c = vd;
    vd = null;
    Jd(c);
    Cd(a, b);
    xd()
};
k.getUserMedia = () => {
    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(void 0)
};
k.createContext = (a, b, c, d) => Td(a, b, c, d);
for (var S, xi = 0; 32 > xi; ++xi) tg.push(Array(xi));
var yi = new Float32Array(288);
for (xi = 0; 288 > xi; ++xi) wh[xi] = yi.subarray(0, xi + 1);
var zi = new Int32Array(288);
for (xi = 0; 288 > xi; ++xi) zh[xi] = zi.subarray(0, xi + 1);
ci = new bi;
ub("library_fetch_init");
(function (a, b) {
    try {
        var c = indexedDB.open("emscripten_filesystem", 1)
    } catch (d) {
        b(d);
        return
    }
    c.onupgradeneeded = d => {
        d = d.target.result;
        d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
        d.createObjectStore("FILES")
    };
    c.onsuccess = d => a(d.target.result);
    c.onerror = d => b(d)
})(a => {
    di = a;
    vb("library_fetch_init")
}, () => {
    di = !1;
    vb("library_fetch_init")
});
Object.assign(bi.prototype, {
    get(a) {
        return this.tj[a]
    },
    has(a) {
        return void 0 !== this.tj[a]
    },
    Ij(a) {
        var b = this.Hk.pop() || this.tj.length;
        this.tj[b] = a;
        return b
    },
    kl(a) {
        this.tj[a] = void 0;
        this.Hk.push(a)
    }
});
var Ei = {
        Tb: function (a) {
            try {
                a = a ? x(w, a) : "";
                var b = Fa(a, {
                    oj: !0
                });
                if (null === b.node) throw new O(44);
                if (!C(b.node.mode)) throw new O(54);
                var c = Ic(b.node, "x");
                if (c) throw new O(c);
                Zb = b.path;
                return 0
            } catch (d) {
                if ("undefined" == typeof jd || "ErrnoError" !== d.name) throw d;
                return -d.Ki
            }
        },
        Fa: function (a, b, c) {
            nd = c;
            try {
                var d = Oc(a);
                switch (b) {
                    case 0:
                        var e = od();
                        if (0 > e) return -28;
                        for (; yc[e];) e++;
                        return Pc(d, e).fd;
                    case 1:
                    case 2:
                        return 0;
                    case 3:
                        return d.flags;
                    case 4:
                        return e = od(), d.flags |= e, 0;
                    case 5:
                        return e = od(), gb[e + 0 >> 1] = 2,
                            0;
                    case 6:
                    case 7:
                        return 0;
                    case 16:
                    case 8:
                        return -28;
                    case 9:
                        return E[Ai() >> 2] = 28, -1;
                    default:
                        return -28
                }
            } catch (f) {
                if ("undefined" == typeof jd || "ErrnoError" !== f.name) throw f;
                return -f.Ki
            }
        },
        Kb: function (a, b, c) {
            try {
                var d = Oc(a);
                d.pj || (d.pj = Da(d.path));
                a = 0;
                for (var e = $c(d, 0, 1), f = Math.floor(e / 280); f < d.pj.length && a + 280 <= c;) {
                    var g = d.pj[f];
                    if ("." === g) {
                        var h = d.node.id;
                        var n = 4
                    } else if (".." === g) h = Fa(d.path, {
                        parent: !0
                    }).node.id, n = 4;
                    else {
                        var p = nc(d.node, g);
                        h = p.id;
                        n = 8192 === (p.mode & 61440) ? 2 : C(p.mode) ? 4 : 40960 === (p.mode & 61440) ?
                            10 : 8
                    }
                    J = [h >>> 0, (I = h, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
                    E[b + a >> 2] = J[0];
                    E[b + a + 4 >> 2] = J[1];
                    J = [280 * (f + 1) >>> 0, (I = 280 * (f + 1), 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
                    E[b + a + 8 >> 2] = J[0];
                    E[b + a + 12 >> 2] = J[1];
                    gb[b + a + 16 >> 1] = 280;
                    D[b + a + 18 >> 0] = n;
                    t(g, w, b + a + 19, 256);
                    a += 280;
                    f += 1
                }
                $c(d, 280 * f, 0);
                return a
            } catch (q) {
                if ("undefined" == typeof jd || "ErrnoError" !== q.name) throw q;
                return -q.Ki
            }
        },
        Ub: function (a, b, c) {
            nd = c;
            try {
                var d = Oc(a);
                switch (b) {
                    case 21509:
                        return d.tty ? 0 : -59;
                    case 21505:
                        if (!d.tty) return -59;
                        if (d.tty.dj.rl) {
                            b = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var e = od();
                            E[e >> 2] = 25856;
                            E[e + 4 >> 2] = 5;
                            E[e + 8 >> 2] = 191;
                            E[e + 12 >> 2] = 35387;
                            for (var f = 0; 32 > f; f++) D[e + f + 17 >> 0] = b[f] || 0
                        }
                        return 0;
                    case 21510:
                    case 21511:
                    case 21512:
                        return d.tty ? 0 : -59;
                    case 21506:
                    case 21507:
                    case 21508:
                        if (!d.tty) return -59;
                        if (d.tty.dj.sl)
                            for (e = od(), b = [], f = 0; 32 > f; f++) b.push(D[e + f + 17 >> 0]);
                        return 0;
                    case 21519:
                        if (!d.tty) return -59;
                        e = od();
                        return E[e >> 2] = 0;
                    case 21520:
                        return d.tty ? -28 : -59;
                    case 21531:
                        e = od();
                        if (!d.Ii.ql) throw new O(59);
                        return d.Ii.ql(d, b, e);
                    case 21523:
                        if (!d.tty) return -59;
                        d.tty.dj.tl && (f = [24, 80], e = od(), gb[e >> 1] = f[0], gb[e + 2 >> 1] = f[1]);
                        return 0;
                    case 21524:
                        return d.tty ? 0 : -59;
                    case 21515:
                        return d.tty ? 0 : -59;
                    default:
                        return -28
                }
            } catch (g) {
                if ("undefined" == typeof jd || "ErrnoError" !== g.name) throw g;
                return -g.Ki
            }
        },
        Ob: function (a, b) {
            try {
                return a = a ? x(w, a) : "", md(Wc, a, b)
            } catch (c) {
                if ("undefined" == typeof jd || "ErrnoError" !== c.name) throw c;
                return -c.Ki
            }
        },
        Lb: function (a, b, c) {
            try {
                return b = b ? x(w, b) : "", b = ld(a, b), b = Ca(b), "/" === b[b.length - 1] && (b = b.substr(0, b.length - 1)), Gb(b, c), 0
            } catch (d) {
                if ("undefined" == typeof jd || "ErrnoError" !== d.name) throw d;
                return -d.Ki
            }
        },
        Pb: function (a, b, c, d) {
            try {
                b = b ? x(w, b) : "";
                var e = d & 256;
                b = ld(a, b, d & 4096);
                return md(e ? Wc : Ea, b, c)
            } catch (f) {
                if ("undefined" == typeof jd || "ErrnoError" !== f.name) throw f;
                return -f.Ki
            }
        },
        Ba: function (a, b, c, d) {
            nd = d;
            try {
                b = b ? x(w, b) : "";
                b = ld(a, b);
                var e = d ? od() : 0;
                return Xc(b, c, e).fd
            } catch (f) {
                if ("undefined" == typeof jd ||
                    "ErrnoError" !== f.name) throw f;
                return -f.Ki
            }
        },
        Jb: function (a, b, c, d) {
            try {
                b = b ? x(w, b) : "";
                b = ld(a, b);
                if (0 >= d) return -28;
                var e = Dc(b),
                    f = Math.min(d, aa(e)),
                    g = D[c + f];
                t(e, w, c, d + 1);
                D[c + f] = g;
                return f
            } catch (h) {
                if ("undefined" == typeof jd || "ErrnoError" !== h.name) throw h;
                return -h.Ki
            }
        },
        Gb: function (a, b, c, d) {
            try {
                b = b ? x(w, b) : "";
                d = d ? x(w, d) : "";
                b = ld(a, b);
                d = ld(c, d);
                a = b;
                var e = Tb(a),
                    f = Tb(d),
                    g = Ub(a),
                    h = Ub(d);
                var n = Fa(a, {
                    parent: !0
                });
                var p = n.node;
                n = Fa(d, {
                    parent: !0
                });
                var q = n.node;
                if (!p || !q) throw new O(44);
                if (p.Ni !== q.Ni) throw new O(75);
                var u = nc(p, g),
                    v = $b(a, f);
                if ("." !== v.charAt(0)) throw new O(28);
                v = $b(d, e);
                if ("." !== v.charAt(0)) throw new O(55);
                try {
                    var r = nc(q, h)
                } catch (G) {}
                if (u !== r) {
                    var B = C(u.mode),
                        y = Mc(p, g, B);
                    if (y) throw new O(y);
                    if (y = r ? Mc(q, h, B) : Lc(q, h)) throw new O(y);
                    if (!p.Gi.rename) throw new O(63);
                    if (u.ij || r && r.ij) throw new O(10);
                    if (q !== p && (y = Ic(p, "w"))) throw new O(y);
                    Hc(u);
                    try {
                        p.Gi.rename(u, q, h)
                    } catch (G) {
                        throw G;
                    } finally {
                        Gc(u)
                    }
                }
                return 0
            } catch (G) {
                if ("undefined" == typeof jd || "ErrnoError" !== G.name) throw G;
                return -G.Ki
            }
        },
        Hb: function (a) {
            try {
                return a =
                    a ? x(w, a) : "", La(a), 0
            } catch (b) {
                if ("undefined" == typeof jd || "ErrnoError" !== b.name) throw b;
                return -b.Ki
            }
        },
        Qb: function (a, b) {
            try {
                return a = a ? x(w, a) : "", md(Ea, a, b)
            } catch (c) {
                if ("undefined" == typeof jd || "ErrnoError" !== c.name) throw c;
                return -c.Ki
            }
        },
        Ib: function (a, b, c) {
            try {
                return b = b ? x(w, b) : "", b = ld(a, b), 0 === c ? Ma(b) : 512 === c ? La(b) : cb("Invalid flags passed to unlinkat"), 0
            } catch (d) {
                if ("undefined" == typeof jd || "ErrnoError" !== d.name) throw d;
                return -d.Ki
            }
        },
        dh: function (a) {
            if (ci.has(a)) {
                var b = ci.get(a);
                ci.kl(a);
                0 < b.readyState &&
                    4 > b.readyState && b.abort()
            }
        },
        bh: function (a, b, c) {
            a = ci.get(a).getAllResponseHeaders();
            var d = aa(a) + 1;
            t(a, w, b, c);
            return Math.min(d, c)
        },
        ch: function (a) {
            return aa(ci.get(a).getAllResponseHeaders()) + 1
        },
        Rb: () => !0,
        yb: function (a, b, c) {
            a = new Date(1E3 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
            E[c >> 2] = a.getUTCSeconds();
            E[c + 4 >> 2] = a.getUTCMinutes();
            E[c + 8 >> 2] = a.getUTCHours();
            E[c + 12 >> 2] = a.getUTCDate();
            E[c + 16 >> 2] = a.getUTCMonth();
            E[c + 20 >> 2] = a.getUTCFullYear() - 1900;
            E[c + 24 >> 2] = a.getUTCDay();
            E[c + 28 >> 2] = (a.getTime() -
                Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0
        },
        zb: function (a, b, c) {
            a = new Date(1E3 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
            E[c >> 2] = a.getSeconds();
            E[c + 4 >> 2] = a.getMinutes();
            E[c + 8 >> 2] = a.getHours();
            E[c + 12 >> 2] = a.getDate();
            E[c + 16 >> 2] = a.getMonth();
            E[c + 20 >> 2] = a.getFullYear() - 1900;
            E[c + 24 >> 2] = a.getDay();
            E[c + 28 >> 2] = (pd(a.getFullYear()) ? qd : rd)[a.getMonth()] + a.getDate() - 1 | 0;
            E[c + 36 >> 2] = -(60 * a.getTimezoneOffset());
            b = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
            var d = (new Date(a.getFullYear(),
                0, 1)).getTimezoneOffset();
            E[c + 32 >> 2] = (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0
        },
        Ab: function (a) {
            var b = new Date(E[a + 20 >> 2] + 1900, E[a + 16 >> 2], E[a + 12 >> 2], E[a + 8 >> 2], E[a + 4 >> 2], E[a >> 2], 0),
                c = E[a + 32 >> 2],
                d = b.getTimezoneOffset(),
                e = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(),
                f = (new Date(b.getFullYear(), 0, 1)).getTimezoneOffset(),
                g = Math.min(f, e);
            0 > c ? E[a + 32 >> 2] = Number(e != f && g == d) : 0 < c != (g == d) && (e = Math.max(f, e), b.setTime(b.getTime() + 6E4 * ((0 < c ? g : e) - d)));
            E[a + 24 >> 2] = b.getDay();
            E[a + 28 >> 2] = (pd(b.getFullYear()) ?
                qd : rd)[b.getMonth()] + b.getDate() - 1 | 0;
            E[a >> 2] = b.getSeconds();
            E[a + 4 >> 2] = b.getMinutes();
            E[a + 8 >> 2] = b.getHours();
            E[a + 12 >> 2] = b.getDate();
            E[a + 16 >> 2] = b.getMonth();
            E[a + 20 >> 2] = b.getYear();
            a = b.getTime() / 1E3;
            return Bi((I = a, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)), a >>> 0
        },
        Bb: function (a) {
            var b = new Date(Date.UTC(E[a + 20 >> 2] + 1900, E[a + 16 >> 2], E[a + 12 >> 2], E[a + 8 >> 2], E[a + 4 >> 2], E[a >> 2], 0));
            E[a + 24 >> 2] = b.getUTCDay();
            E[a + 28 >> 2] = (b.getTime() - Date.UTC(b.getUTCFullYear(),
                0, 1, 0, 0, 0, 0)) / 864E5 | 0;
            a = b.getTime() / 1E3;
            return Bi((I = a, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)), a >>> 0
        },
        Fb: (a, b, c) => {
            function d(n) {
                return (n = n.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? n[1] : "GMT"
            }
            var e = (new Date).getFullYear(),
                f = new Date(e, 0, 1),
                g = new Date(e, 6, 1);
            e = f.getTimezoneOffset();
            var h = g.getTimezoneOffset();
            F[a >> 2] = 60 * Math.max(e, h);
            E[b >> 2] = Number(e != h);
            a = d(f);
            b = d(g);
            a = sd(a);
            b = sd(b);
            h < e ? (F[c >> 2] = a, F[c + 4 >> 2] = b) : (F[c >> 2] = b, F[c + 4 >> 2] = a)
        },
        p: () => {
            cb("")
        },
        vh: a => {
            if (12448 == a) return T = 12288, 1;
            T = 12300;
            return 0
        },
        zh: (a, b, c, d, e) => {
            if (62E3 != a) T = 12296, c = 0;
            else {
                if (b)
                    for (;;) {
                        a = E[b >> 2];
                        if (12321 == a) ke.alpha = 0 < E[b + 4 >> 2];
                        else if (12325 == a) ke.depth = 0 < E[b + 4 >> 2];
                        else if (12326 == a) ke.stencil = 0 < E[b + 4 >> 2];
                        else if (12337 == a) a = E[b + 4 >> 2], ke.antialias = 0 < a;
                        else if (12338 == a) a = E[b + 4 >> 2], ke.antialias = 1 == a;
                        else if (12544 == a) ke.cm = 12547 != E[b + 4 >> 2];
                        else if (12344 == a) break;
                        b += 8
                    }
                c && d || e ? (e && (E[e >> 2] = 1), c && 0 < d && (F[c >> 2] = 62002), T = 12288, c = 1) : (T = 12300, c = 0)
            }
            return c
        },
        mh: (a, b, c, d) => {
            if (62E3 != a) return T = 12296, 0;
            for (a = 1;;) {
                b = E[d >> 2];
                if (12440 == b) a = E[d + 4 >> 2];
                else if (12344 == b) break;
                else return T = 12292, 0;
                d += 8
            }
            if (2 > a || 3 < a) return T = 12293, 0;
            ke.Kj = a - 1;
            ke.wl = 0;
            me = Vd(k.canvas, ke);
            if (0 != me) return T = 12288, Xd(me), k.Il = !0, Qd.forEach(function (e) {
                e()
            }), Xd(null), 62004;
            T = 12297;
            return 0
        },
        oh: (a, b) => {
            if (62E3 != a) return T = 12296, 0;
            if (62002 != b) return T = 12293, 0;
            T = 12288;
            return 62006
        },
        nh: (a, b) => {
            if (62E3 != a) return T = 12296, 0;
            if (62004 != b) return T = 12294, 0;
            a = me;
            R === Wd[a] && (R = null);
            if ("object" == typeof kf)
                for (var c =
                        Wd[a].Ui.canvas, d = 0; d < Ye.length; ++d) Ye[d].target != c || Ze(d--);
            Wd[a] && Wd[a].Ui.canvas && (Wd[a].Ui.canvas.zj = void 0);
            Wd[a] = null;
            T = 12288;
            he == b && (he = 0);
            return 1
        },
        ph: (a, b) => {
            if (62E3 != a) return T = 12296, 0;
            if (62006 != b) return T = 12301, 1;
            ie == b && (ie = 0);
            je == b && (je = 0);
            T = 12288;
            return 1
        },
        Ah: (a, b, c, d) => {
            if (62E3 != a) return T = 12296, 0;
            if (62002 != b) return T = 12293, 0;
            if (!d) return T = 12300, 0;
            T = 12288;
            switch (c) {
                case 12320:
                    return E[d >> 2] = ke.alpha ? 32 : 24, 1;
                case 12321:
                    return E[d >> 2] = ke.alpha ? 8 : 0, 1;
                case 12322:
                    return E[d >> 2] = 8, 1;
                case 12323:
                    return E[d >>
                        2] = 8, 1;
                case 12324:
                    return E[d >> 2] = 8, 1;
                case 12325:
                    return E[d >> 2] = ke.depth ? 24 : 0, 1;
                case 12326:
                    return E[d >> 2] = ke.stencil ? 8 : 0, 1;
                case 12327:
                    return E[d >> 2] = 12344, 1;
                case 12328:
                    return E[d >> 2] = 62002, 1;
                case 12329:
                    return E[d >> 2] = 0, 1;
                case 12330:
                    return E[d >> 2] = 4096, 1;
                case 12331:
                    return E[d >> 2] = 16777216, 1;
                case 12332:
                    return E[d >> 2] = 4096, 1;
                case 12333:
                    return E[d >> 2] = 0, 1;
                case 12334:
                    return E[d >> 2] = 0, 1;
                case 12335:
                    return E[d >> 2] = 12344, 1;
                case 12337:
                    return E[d >> 2] = ke.antialias ? 4 : 0, 1;
                case 12338:
                    return E[d >> 2] = ke.antialias ?
                        1 : 0, 1;
                case 12339:
                    return E[d >> 2] = 4, 1;
                case 12340:
                    return E[d >> 2] = 12344, 1;
                case 12341:
                case 12342:
                case 12343:
                    return E[d >> 2] = -1, 1;
                case 12345:
                case 12346:
                    return E[d >> 2] = 0, 1;
                case 12347:
                    return E[d >> 2] = 0, 1;
                case 12348:
                    return E[d >> 2] = 1;
                case 12349:
                case 12350:
                    return E[d >> 2] = 0, 1;
                case 12351:
                    return E[d >> 2] = 12430, 1;
                case 12352:
                    return E[d >> 2] = 4, 1;
                case 12354:
                    return E[d >> 2] = 0, 1;
                default:
                    return T = 12292, 0
            }
        },
        Ta: () => {
            T = 12288;
            return 62E3
        },
        lh: () => T,
        xh: (a, b, c) => {
            if (62E3 != a) return T = 12296, 0;
            b && (E[b >> 2] = 1);
            c && (E[c >> 2] = 4);
            ge = !0;
            T =
                12288;
            return 1
        },
        qh: (a, b, c, d) => {
            if (62E3 != a) return T = 12296, 0;
            if (0 != d && 62004 != d) return T = 12294, 0;
            if (0 != c && 62006 != c || 0 != b && 62006 != b) return T = 12301, 0;
            Xd(d ? me : null);
            he = d;
            je = b;
            ie = c;
            T = 12288;
            return 1
        },
        kh: (a, b) => {
            if (62E3 != a) return T = 12296, 0;
            T = 12288;
            if (le[b]) return le[b];
            switch (b) {
                case 12371:
                    a = sd("Emscripten");
                    break;
                case 12372:
                    a = sd("1.4 Emscripten EGL");
                    break;
                case 12373:
                    a = sd("");
                    break;
                case 12429:
                    a = sd("OpenGL_ES");
                    break;
                default:
                    return T = 12300, 0
            }
            return le[b] = a
        },
        rh: () => {
            if (ge)
                if (k.Xi)
                    if (k.Xi.isContextLost()) T =
                        12302;
                    else return T = 12288, 1;
            else T = 12290;
            else T = 12289;
            return 0
        },
        sh: (a, b) => {
            if (62E3 != a) return T = 12296, 0;
            0 == b ? Cd(0, 0) : Cd(1, b);
            T = 12288;
            return 1
        },
        yh: a => {
            if (62E3 != a) return T = 12296, 0;
            je = ie = he = 0;
            ge = !1;
            T = 12288;
            return 1
        },
        uh: () => {
            T = 12288;
            return 1
        },
        th: () => {
            T = 12288;
            return 1
        },
        t: (a, b, c) => {
            b = Pe(b, c);
            return Mb[a].apply(null, b)
        },
        a: (a, b, c) => {
            b = Pe(b, c);
            return Mb[a].apply(null, b)
        },
        e: (a, b, c) => {
            b = Pe(b, c);
            return Mb[a].apply(null, b)
        },
        Mh: (a, b, c, d, e, f, g, h) => {
            function n() {
                g && Ve(() => {
                    var v = 0;
                    q.statusText && (v = Cf(q.statusText));
                    M(g)(u, d, q.status, v)
                })
            }
            var p = a ? x(w, a) : "";
            a = b ? x(w, b) : "";
            c = c ? x(w, c) : "";
            var q = new XMLHttpRequest;
            q.open(a, p, !0);
            q.responseType = "arraybuffer";
            var u = Se();
            q.onload = function () {
                if (200 <= q.status && 300 > q.status || 0 === q.status && "http" != p.substr(0, 4).toLowerCase()) {
                    var v = new Uint8Array(q.response),
                        r = m(v.length);
                    w.set(v, r);
                    f && M(f)(u, d, r, v.length);
                    e && ca(r)
                } else n();
                delete Qe[u]
            };
            q.onerror = function () {
                n();
                delete Qe[u]
            };
            q.onprogress = function (v) {
                h && M(h)(u, d, v.loaded, v.lengthComputable || void 0 === v.lengthComputable ? v.total :
                    0)
            };
            q.onabort = function () {
                delete Qe[u]
            };
            "POST" == a ? (q.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), q.send(c)) : q.send(null);
            Qe[u] = q;
            return u
        },
        Fh: a => {
            clearInterval(a)
        },
        aa: () => Date.now(),
        gh: () => {
            if (!jf()) return -1;
            bf(Jf);
            var a = yf[1];
            if (a.exitFullscreen) a.fullscreenElement && a.exitFullscreen();
            else if (a.webkitExitFullscreen) a.webkitFullscreenElement && a.webkitExitFullscreen();
            else return -1;
            return 0
        },
        Na: () => {
            bf(Kf);
            if (document.exitPointerLock) document.exitPointerLock();
            else return -1;
            return 0
        },
        Za: Af,
        x: () => "number" == typeof devicePixelRatio && devicePixelRatio || 1,
        n: (a, b, c) => {
            a = zf(a);
            if (!a) return -4;
            a = If(a);
            ib[b >> 3] = a.width;
            ib[c >> 3] = a.height;
            return 0
        },
        Wa: (a, b) => {
            if (0 > a || a >= lf.length) return -5;
            if (!lf[a]) return -7;
            Lf(b, lf[a]);
            return 0
        },
        $: zd,
        Bh: () => lf.length,
        jh: (a, b) => {
            E[a >> 2] = screen.width;
            E[b >> 2] = screen.height
        },
        Jg: Mf,
        Ig: Nf,
        Nd: (a, b) => {
            S.beginQuery(a, Ae[b])
        },
        Zg: (a, b) => {
            S.Wi.beginQueryEXT(a, Ae[b])
        },
        qd: function (a) {
            S.beginTransformFeedback(a)
        },
        Hg: (a, b, c) => {
            S.bindAttribLocation(V[a], b, c ? x(w,
                c) : "")
        },
        Gg: Of,
        nd: (a, b, c) => {
            S.bindBufferBase(a, b, te[c])
        },
        od: (a, b, c, d, e) => {
            S.bindBufferRange(a, b, te[c], d, e)
        },
        Fg: Pf,
        Eg: Qf,
        vc: (a, b) => {
            S.bindSampler(a, Be[b])
        },
        Dg: Rf,
        nc: (a, b) => {
            S.bindTransformFeedback(a, Ce[b])
        },
        vd: Sf,
        Rg: Sf,
        Cg: function (a, b, c, d) {
            S.blendColor(a, b, c, d)
        },
        Bg: function (a) {
            S.blendEquation(a)
        },
        Ag: Tf,
        zg: Uf,
        yg: Vf,
        Ad: function (a, b, c, d, e, f, g, h, n, p) {
            S.blitFramebuffer(a, b, c, d, e, f, g, h, n, p)
        },
        xg: Wf,
        wg: (a, b, c, d) => {
            2 <= R.version ? c && S.bufferSubData(a, b, w, d, c) : S.bufferSubData(a, b, w.subarray(d, d + c))
        },
        vg: Xf,
        ug: Yf,
        Sc: function (a, b, c, d) {
            S.clearBufferfi(a, b, c, d)
        },
        Tc: (a, b, c) => {
            S.clearBufferfv(a, b, H, c >> 2)
        },
        Vc: (a, b, c) => {
            S.clearBufferiv(a, b, E, c >> 2)
        },
        Uc: (a, b, c) => {
            S.clearBufferuiv(a, b, F, c >> 2)
        },
        tg: Zf,
        sg: $f,
        rg: ag,
        Ec: (a, b, c, d) => S.clientWaitSync(De[a], b, (c >>> 0) + 4294967296 * d),
        qg: bg,
        pg: cg,
        og: (a, b, c, d, e, f, g, h) => {
            2 <= R.version ? S.Yi || !g ? S.compressedTexImage2D(a, b, c, d, e, f, g, h) : S.compressedTexImage2D(a, b, c, d, e, f, w, h, g) : S.compressedTexImage2D(a, b, c, d, e, f, h ? w.subarray(h, h + g) : null)
        },
        Sd: (a, b, c, d, e, f, g, h, n) => {
            S.Yi ? S.compressedTexImage3D(a,
                b, c, d, e, f, g, h, n) : S.compressedTexImage3D(a, b, c, d, e, f, g, w, n, h)
        },
        ng: (a, b, c, d, e, f, g, h, n) => {
            2 <= R.version ? S.Yi || !h ? S.compressedTexSubImage2D(a, b, c, d, e, f, g, h, n) : S.compressedTexSubImage2D(a, b, c, d, e, f, g, w, n, h) : S.compressedTexSubImage2D(a, b, c, d, e, f, g, n ? w.subarray(n, n + h) : null)
        },
        Rd: (a, b, c, d, e, f, g, h, n, p, q) => {
            S.Yi ? S.compressedTexSubImage3D(a, b, c, d, e, f, g, h, n, p, q) : S.compressedTexSubImage3D(a, b, c, d, e, f, g, h, n, w, q, p)
        },
        Qc: function (a, b, c, d, e) {
            S.copyBufferSubData(a, b, c, d, e)
        },
        mg: function (a, b, c, d, e, f, g, h) {
            S.copyTexImage2D(a,
                b, c, d, e, f, g, h)
        },
        lg: function (a, b, c, d, e, f, g, h) {
            S.copyTexSubImage2D(a, b, c, d, e, f, g, h)
        },
        Td: function (a, b, c, d, e, f, g, h, n) {
            S.copyTexSubImage3D(a, b, c, d, e, f, g, h, n)
        },
        kg: dg,
        jg: eg,
        ig: function (a) {
            S.cullFace(a)
        },
        hg: fg,
        gg,
        fg: hg,
        Pd: (a, b) => {
            for (var c = 0; c < a; c++) {
                var d = E[b + 4 * c >> 2],
                    e = Ae[d];
                e && (S.deleteQuery(e), Ae[d] = null)
            }
        },
        $g: (a, b) => {
            for (var c = 0; c < a; c++) {
                var d = E[b + 4 * c >> 2],
                    e = Ae[d];
                e && (S.Wi.deleteQueryEXT(e), Ae[d] = null)
            }
        },
        eg: ig,
        xc: (a, b) => {
            for (var c = 0; c < a; c++) {
                var d = E[b + 4 * c >> 2],
                    e = Be[d];
                e && (S.deleteSampler(e), e.name = 0, Be[d] =
                    null)
            }
        },
        dg: jg,
        Fc: a => {
            if (a) {
                var b = De[a];
                b ? (S.deleteSync(b), b.name = 0, De[a] = null) : W(1281)
            }
        },
        cg: kg,
        mc: (a, b) => {
            for (var c = 0; c < a; c++) {
                var d = E[b + 4 * c >> 2],
                    e = Ce[d];
                e && (S.deleteTransformFeedback(e), e.name = 0, Ce[d] = null)
            }
        },
        ud: lg,
        Qg: lg,
        bg: mg,
        ag: ng,
        $f: og,
        _f: (a, b) => {
            S.detachShader(V[a], ye[b])
        },
        Zf: pg,
        Yf: qg,
        Xf: rg,
        Jc: sg,
        Mg: sg,
        Xb: sg,
        _d: sg,
        Yb: sg,
        Hd: ug,
        Yd: ug,
        Ng: ug,
        Wf: vg,
        Ic: wg,
        Lg: wg,
        Vb: wg,
        Wb: wg,
        Zd: wg,
        Wd: (a, b, c, d, e, f) => {
            vg(a, d, e, f)
        },
        Vf: xg,
        Uf: yg,
        Md: function (a) {
            S.endQuery(a)
        },
        Yg: a => {
            S.Wi.endQueryEXT(a)
        },
        pd: function () {
            S.endTransformFeedback()
        },
        Hc: (a, b) => (a = S.fenceSync(a, b)) ? (b = Je(De), a.name = b, De[b] = a, b) : 0,
        Tf: function () {
            S.finish()
        },
        Sf: zg,
        wd: (a, b, c) => {
            if (Bg(a)) {
                var d = ue[Ag(a)];
                d ? d.zk & 16 ? 0 > b || 0 > c || b + c > d.length ? (W(1281), l("invalid range in glFlushMappedBufferRange")) : S.bufferSubData(a, d.offset, w.subarray(d.cj + b, d.cj + b + c)) : (W(1282), l("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange")) : (W(1282), l("buffer was never mapped in glFlushMappedBufferRange"))
            } else W(1280), l("GL_INVALID_ENUM in glFlushMappedBufferRange")
        },
        Rf: Cg,
        Qf: Dg,
        yd: (a, b, c, d, e) => {
            S.framebufferTextureLayer(a, b, xe[c], d, e)
        },
        Pf: Eg,
        Of: Gg,
        Mf: Hg,
        Qd: (a, b) => {
            Fg(a, b, "createQuery", Ae)
        },
        ah: (a, b) => {
            for (var c = 0; c < a; c++) {
                var d = S.Wi.createQueryEXT();
                if (!d) {
                    for (W(1282); c < a;) E[b + 4 * c++ >> 2] = 0;
                    break
                }
                var e = Je(Ae);
                d.name = e;
                Ae[e] = d;
                E[b + 4 * c >> 2] = e
            }
        },
        Lf: Ig,
        yc: (a, b) => {
            Fg(a, b, "createSampler", Be)
        },
        Kf: Jg,
        lc: (a, b) => {
            Fg(a, b, "createTransformFeedback", Ce)
        },
        td: Kg,
        Pg: Kg,
        Nf: function (a) {
            S.generateMipmap(a)
        },
        Jf: (a, b, c, d, e, f, g) => {
            Lg("getActiveAttrib", a, b, c, d, e, f, g)
        },
        If: Mg,
        Lc: (a, b, c, d,
            e) => {
            a = V[a];
            if (a = S.getActiveUniformBlockName(a, b)) e && 0 < c ? (c = t(a, w, e, c), d && (E[d >> 2] = c)) : d && (E[d >> 2] = 0)
        },
        Mc: (a, b, c, d) => {
            if (d)
                if (a = V[a], 35393 == c) E[d >> 2] = S.getActiveUniformBlockName(a, b).length + 1;
                else {
                    if (a = S.getActiveUniformBlockParameter(a, b, c), null !== a)
                        if (35395 == c)
                            for (c = 0; c < a.length; c++) E[d + 4 * c >> 2] = a[c];
                        else E[d >> 2] = a
                }
            else W(1281)
        },
        Oc: (a, b, c, d, e) => {
            if (e)
                if (0 < b && 0 == c) W(1281);
                else {
                    a = V[a];
                    for (var f = [], g = 0; g < b; g++) f.push(E[c + 4 * g >> 2]);
                    if (a = S.getActiveUniforms(a, f, d))
                        for (b = a.length, g = 0; g < b; g++) E[e + 4 * g >> 2] =
                            a[g]
                }
            else W(1281)
        },
        Hf: (a, b, c, d) => {
            a = S.getAttachedShaders(V[a]);
            var e = a.length;
            e > b && (e = b);
            E[c >> 2] = e;
            for (b = 0; b < e; ++b) E[d + 4 * b >> 2] = ye.indexOf(a[b])
        },
        Gf: Ng,
        Ff: (a, b) => {
            Pg(a, b, 4)
        },
        zc: (a, b, c) => {
            c ? Og(c, S.getBufferParameter(a, b)) : W(1281)
        },
        Ef: (a, b, c) => {
            c ? E[c >> 2] = S.getBufferParameter(a, b) : W(1281)
        },
        Id: (a, b, c) => {
            if (35005 == b) {
                b = 0;
                if (a = ue[Ag(a)]) b = a.cj;
                E[c >> 2] = b
            } else W(1280), l("GL_INVALID_ENUM in glGetBufferPointerv")
        },
        Df: Qg,
        Cf: Rg,
        cd: (a, b) => S.getFragDataLocation(V[a], b ? x(w, b) : ""),
        Bf: (a, b, c, d) => {
            a = S.getFramebufferAttachmentParameter(a,
                b, c);
            if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
            E[d >> 2] = a
        },
        Ac: (a, b, c) => Sg(a, b, c, 1),
        Cc: (a, b) => {
            Pg(a, b, 1)
        },
        rd: (a, b, c) => Sg(a, b, c, 0),
        Af: Tg,
        $b: (a, b, c, d, e) => {
            if (0 > d) W(1281);
            else if (e) {
                if (a = S.getInternalformatParameter(a, b, c), null !== a)
                    for (b = 0; b < a.length && b < d; ++b) E[e + 4 * b >> 2] = a[b]
            } else W(1281)
        },
        gc: () => {
            W(1282)
        },
        yf: Ug,
        zf: Vg,
        Tg: Wg,
        Vg: Xg,
        Sg: Wg,
        Kd: (a, b, c) => {
            if (c) {
                a = S.getQueryParameter(Ae[a], b);
                var d;
                "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
                E[c >> 2] = d
            } else W(1281)
        },
        Ug: Xg,
        Ld: (a, b, c) => {
            c ? E[c >>
                2] = S.getQuery(a, b) : W(1281)
        },
        Wg: (a, b, c) => {
            c ? E[c >> 2] = S.Wi.getQueryEXT(a, b) : W(1281)
        },
        xf: (a, b, c) => {
            c ? E[c >> 2] = S.getRenderbufferParameter(a, b) : W(1281)
        },
        pc: (a, b, c) => {
            c ? H[c >> 2] = S.getSamplerParameter(Be[a], b) : W(1281)
        },
        qc: (a, b, c) => {
            c ? E[c >> 2] = S.getSamplerParameter(Be[a], b) : W(1281)
        },
        vf: Yg,
        uf: (a, b, c, d) => {
            a = S.getShaderPrecisionFormat(a, b);
            E[c >> 2] = a.rangeMin;
            E[c + 4 >> 2] = a.rangeMax;
            E[d >> 2] = a.precision
        },
        tf: (a, b, c, d) => {
            if (a = S.getShaderSource(ye[a])) b = 0 < b && d ? t(a, w, d, b) : 0, c && (E[c >> 2] = b)
        },
        wf: Zg,
        sf: $g,
        Rc: (a, b) => {
            if (2 > R.version) return W(1282),
                0;
            var c = Ge[a];
            if (c) return 0 > b || b >= c.length ? (W(1281), 0) : c[b];
            switch (a) {
                case 7939:
                    return c = S.getSupportedExtensions() || [], c = c.concat(c.map(function (d) {
                        return "GL_" + d
                    })), c = c.map(function (d) {
                        return sd(d)
                    }), c = Ge[a] = c, 0 > b || b >= c.length ? (W(1281), 0) : c[b];
                default:
                    return W(1280), 0
            }
        },
        Bc: (a, b, c, d, e) => {
            0 > c ? W(1281) : e ? (a = S.getSyncParameter(De[a], b), null !== a && (E[e >> 2] = a, d && (E[d >> 2] = 1))) : W(1281)
        },
        rf: (a, b, c) => {
            c ? H[c >> 2] = S.getTexParameter(a, b) : W(1281)
        },
        qf: (a, b, c) => {
            c ? E[c >> 2] = S.getTexParameter(a, b) : W(1281)
        },
        ld: (a, b, c,
            d, e, f, g) => {
            a = V[a];
            if (a = S.getTransformFeedbackVarying(a, b)) g && 0 < c ? (c = t(a.name, w, g, c), d && (E[d >> 2] = c)) : d && (E[d >> 2] = 0), e && (E[e >> 2] = a.size), f && (E[f >> 2] = a.type)
        },
        Nc: (a, b) => S.getUniformBlockIndex(V[a], b ? x(w, b) : ""),
        Pc: (a, b, c, d) => {
            if (d)
                if (0 < b && (0 == c || 0 == d)) W(1281);
                else {
                    a = V[a];
                    for (var e = [], f = 0; f < b; f++) e.push(kd(E[c + 4 * f >> 2]));
                    if (a = S.getUniformIndices(a, e))
                        for (b = a.length, f = 0; f < b; f++) E[d + 4 * f >> 2] = a[f]
                }
            else W(1281)
        },
        nf: ch,
        pf: (a, b, c) => {
            dh(a, b, c, 2)
        },
        of: (a, b, c) => {
            dh(a, b, c, 0)
        },
        dd: (a, b, c) => dh(a, b, c, 0),
        jd: fh,
        id: fh,
        kf: (a,
            b, c) => {
            c ? (R.fj[a].enabled && l("glGetVertexAttribPointer on client-side array: not supported, bad data returned"), E[c >> 2] = S.getVertexAttribOffset(a, b)) : W(1281)
        },
        mf: (a, b, c) => {
            eh(a, b, c, 2)
        },
        lf: (a, b, c) => {
            eh(a, b, c, 5)
        },
        jf: function (a, b) {
            S.hint(a, b)
        },
        dc: (a, b, c) => {
            for (var d = tg[b], e = 0; e < b; e++) d[e] = E[c + 4 * e >> 2];
            S.invalidateFramebuffer(a, d)
        },
        cc: (a, b, c, d, e, f, g) => {
            for (var h = tg[b], n = 0; n < b; n++) h[n] = E[c + 4 * n >> 2];
            S.invalidateSubFramebuffer(a, h, d, e, f, g)
        },
        hf: a => (a = te[a]) ? S.isBuffer(a) : 0,
        ff: function (a) {
            return S.isEnabled(a)
        },
        ef: a => (a = ve[a]) ? S.isFramebuffer(a) : 0,
        df: a => (a = V[a]) ? S.isProgram(a) : 0,
        Od: a => (a = Ae[a]) ? S.isQuery(a) : 0,
        _g: a => (a = Ae[a]) ? S.Wi.isQueryEXT(a) : 0,
        cf: a => (a = we[a]) ? S.isRenderbuffer(a) : 0,
        wc: a => (a = Be[a]) ? S.isSampler(a) : 0,
        bf: a => (a = ye[a]) ? S.isShader(a) : 0,
        Gc: a => S.isSync(De[a]),
        af: a => (a = xe[a]) ? S.isTexture(a) : 0,
        kc: a => S.isTransformFeedback(Ce[a]),
        sd: gh,
        Og: gh,
        $e: function (a) {
            S.lineWidth(a)
        },
        _e: hh,
        xd: (a, b, c, d) => {
            if (0 != (d & 33)) return l("glMapBufferRange access does not support MAP_READ or MAP_UNSYNCHRONIZED"), 0;
            if (0 == (d &
                    2)) return l("glMapBufferRange access must include MAP_WRITE"), 0;
            if (0 == (d & 12)) return l("glMapBufferRange access must include INVALIDATE_BUFFER or INVALIDATE_RANGE"), 0;
            if (!Bg(a)) return W(1280), l("GL_INVALID_ENUM in glMapBufferRange"), 0;
            var e = m(c);
            a = Ag(a);
            if (!e) return 0;
            ue[a] || (ue[a] = {});
            a = ue[a];
            a.offset = b;
            a.length = c;
            a.cj = e;
            a.zk = d;
            return e
        },
        jc: function () {
            S.pauseTransformFeedback()
        },
        Ze: ih,
        Ye: function (a, b) {
            S.polygonOffset(a, b)
        },
        fc: () => {
            W(1280)
        },
        ec: () => {
            W(1280)
        },
        Xg: (a, b) => {
            S.Wi.queryCounterEXT(Ae[a], b)
        },
        Xd: function (a) {
            S.readBuffer(a)
        },
        Xe: lh,
        We: () => {},
        Ve: mh,
        zd: function (a, b, c, d, e) {
            S.renderbufferStorageMultisample(a, b, c, d, e)
        },
        ic: function () {
            S.resumeTransformFeedback()
        },
        Ue: (a, b) => {
            S.sampleCoverage(a, !!b)
        },
        sc: (a, b, c) => {
            S.samplerParameterf(Be[a], b, c)
        },
        rc: (a, b, c) => {
            S.samplerParameterf(Be[a], b, H[c >> 2])
        },
        uc: (a, b, c) => {
            S.samplerParameteri(Be[a], b, c)
        },
        tc: (a, b, c) => {
            S.samplerParameteri(Be[a], b, E[c >> 2])
        },
        Te: nh,
        Se: () => {
            W(1280)
        },
        Re: oh,
        Qe: ph,
        Pe: function (a, b, c, d) {
            S.stencilFuncSeparate(a, b, c, d)
        },
        Oe: qh,
        Ne: function (a,
            b) {
            S.stencilMaskSeparate(a, b)
        },
        Me: rh,
        Le: function (a, b, c, d) {
            S.stencilOpSeparate(a, b, c, d)
        },
        Ke: sh,
        Vd: (a, b, c, d, e, f, g, h, n, p) => {
            if (S.Yi) S.texImage3D(a, b, c, d, e, f, g, h, n, p);
            else if (p) {
                var q = jh(n);
                S.texImage3D(a, b, c, d, e, f, g, h, n, q, p >> 31 - Math.clz32(q.BYTES_PER_ELEMENT))
            } else S.texImage3D(a, b, c, d, e, f, g, h, n, null)
        },
        Je: th,
        Ie: (a, b, c) => {
            S.texParameterf(a, b, H[c >> 2])
        },
        He: function (a, b, c) {
            S.texParameteri(a, b, c)
        },
        Ge: (a, b, c) => {
            S.texParameteri(a, b, E[c >> 2])
        },
        bc: function (a, b, c, d, e) {
            S.texStorage2D(a, b, c, d, e)
        },
        ac: function (a, b,
            c, d, e, f) {
            S.texStorage3D(a, b, c, d, e, f)
        },
        Fe: uh,
        Ud: (a, b, c, d, e, f, g, h, n, p, q) => {
            if (S.Yi) S.texSubImage3D(a, b, c, d, e, f, g, h, n, p, q);
            else if (q) {
                var u = jh(p);
                S.texSubImage3D(a, b, c, d, e, f, g, h, n, p, u, q >> 31 - Math.clz32(u.BYTES_PER_ELEMENT))
            } else S.texSubImage3D(a, b, c, d, e, f, g, h, n, p, null)
        },
        md: (a, b, c, d) => {
            a = V[a];
            for (var e = [], f = 0; f < b; f++) e.push(kd(E[c + 4 * f >> 2]));
            S.transformFeedbackVaryings(a, e, d)
        },
        Ee: vh,
        De: xh,
        Ce: yh,
        Be: Ah,
        bd: (a, b) => {
            S.uniform1ui(X(a), b)
        },
        Zc: (a, b, c) => {
            b && S.uniform1uiv(X(a), F, c >> 2, b)
        },
        Ae: (a, b, c) => {
            S.uniform2f(X(a),
                b, c)
        },
        ze: Bh,
        ye: (a, b, c) => {
            S.uniform2i(X(a), b, c)
        },
        xe: Ch,
        ad: (a, b, c) => {
            S.uniform2ui(X(a), b, c)
        },
        Yc: (a, b, c) => {
            b && S.uniform2uiv(X(a), F, c >> 2, 2 * b)
        },
        we: (a, b, c, d) => {
            S.uniform3f(X(a), b, c, d)
        },
        ve: Dh,
        ue: (a, b, c, d) => {
            S.uniform3i(X(a), b, c, d)
        },
        te: Eh,
        $c: (a, b, c, d) => {
            S.uniform3ui(X(a), b, c, d)
        },
        Xc: (a, b, c) => {
            b && S.uniform3uiv(X(a), F, c >> 2, 3 * b)
        },
        se: (a, b, c, d, e) => {
            S.uniform4f(X(a), b, c, d, e)
        },
        re: Fh,
        qe: (a, b, c, d, e) => {
            S.uniform4i(X(a), b, c, d, e)
        },
        pe: Gh,
        _c: (a, b, c, d, e) => {
            S.uniform4ui(X(a), b, c, d, e)
        },
        Wc: (a, b, c) => {
            b && S.uniform4uiv(X(a), F,
                c >> 2, 4 * b)
        },
        Kc: (a, b, c) => {
            a = V[a];
            S.uniformBlockBinding(a, b, c)
        },
        oe: Hh,
        Gd: (a, b, c, d) => {
            b && S.uniformMatrix2x3fv(X(a), !!c, H, d >> 2, 6 * b)
        },
        Ed: (a, b, c, d) => {
            b && S.uniformMatrix2x4fv(X(a), !!c, H, d >> 2, 8 * b)
        },
        ne: Ih,
        Fd: (a, b, c, d) => {
            b && S.uniformMatrix3x2fv(X(a), !!c, H, d >> 2, 6 * b)
        },
        Cd: (a, b, c, d) => {
            b && S.uniformMatrix3x4fv(X(a), !!c, H, d >> 2, 12 * b)
        },
        me: Jh,
        Dd: (a, b, c, d) => {
            b && S.uniformMatrix4x2fv(X(a), !!c, H, d >> 2, 8 * b)
        },
        Bd: (a, b, c, d) => {
            b && S.uniformMatrix4x3fv(X(a), !!c, H, d >> 2, 12 * b)
        },
        Jd: a => {
            if (!Bg(a)) return W(1280), l("GL_INVALID_ENUM in glUnmapBuffer"),
                0;
            var b = ue[Ag(a)];
            if (!b || !b.cj) return W(1282), l("buffer was never mapped in glUnmapBuffer"), 0;
            b.zk & 16 || (2 <= R.version ? S.bufferSubData(a, b.offset, w, b.cj, b.length) : S.bufferSubData(a, b.offset, w.subarray(b.cj, b.cj + b.length)));
            ca(b.cj);
            b.cj = 0;
            return 1
        },
        le: Kh,
        ke: a => {
            S.validateProgram(V[a])
        },
        je: function (a, b) {
            S.vertexAttrib1f(a, b)
        },
        ie: (a, b) => {
            S.vertexAttrib1f(a, H[b >> 2])
        },
        he: function (a, b, c) {
            S.vertexAttrib2f(a, b, c)
        },
        ge: (a, b) => {
            S.vertexAttrib2f(a, H[b >> 2], H[b + 4 >> 2])
        },
        fe: function (a, b, c, d) {
            S.vertexAttrib3f(a, b,
                c, d)
        },
        ee: (a, b) => {
            S.vertexAttrib3f(a, H[b >> 2], H[b + 4 >> 2], H[b + 8 >> 2])
        },
        de: function (a, b, c, d, e) {
            S.vertexAttrib4f(a, b, c, d, e)
        },
        ce: (a, b) => {
            S.vertexAttrib4f(a, H[b >> 2], H[b + 4 >> 2], H[b + 8 >> 2], H[b + 12 >> 2])
        },
        oc: Lh,
        Kg: Lh,
        Zb: Lh,
        $d: Lh,
        _b: Lh,
        hd: function (a, b, c, d, e) {
            S.vertexAttribI4i(a, b, c, d, e)
        },
        fd: (a, b) => {
            S.vertexAttribI4i(a, E[b >> 2], E[b + 4 >> 2], E[b + 8 >> 2], E[b + 12 >> 2])
        },
        gd: function (a, b, c, d, e) {
            S.vertexAttribI4ui(a, b, c, d, e)
        },
        ed: (a, b) => {
            S.vertexAttribI4ui(a, F[b >> 2], F[b + 4 >> 2], F[b + 8 >> 2], F[b + 12 >> 2])
        },
        kd: (a, b, c, d, e) => {
            var f = R.fj[a];
            S.uj ? (f.Bj = !1, S.vertexAttribIPointer(a, b, c, d, e)) : (f.size = b, f.type = c, f.ik = !1, f.Sj = d, f.Dj = e, f.Bj = !0, f.xk = function (g, h, n, p, q, u) {
                this.vertexAttribIPointer(g, h, n, q, u)
            })
        },
        be: Mh,
        ae: Nh,
        Dc: (a, b, c, d) => {
            S.waitSync(De[a], b, (c >>> 0) + 4294967296 * d)
        },
        na: () => 0,
        fh: () => !Sa,
        Sb: (a, b, c) => w.copyWithin(a, b, b + c),
        Eh: (a, b) => {
            function c(d) {
                M(a)(d, b) && requestAnimationFrame(c)
            }
            return requestAnimationFrame(c)
        },
        hh: (a, b, c) => Oh(a, {
            qk: E[c >> 2],
            Yj: E[c + 4 >> 2],
            jl: E[c + 8 >> 2],
            el: b,
            Jj: E[c + 12 >> 2],
            Dk: E[c + 16 >> 2]
        }),
        ja: (a, b) => {
            a = zf(a);
            return a ? a.requestPointerLock ?
                cf() ? Kf(a) : b ? (af(Kf, 2, [a]), 1) : -2 : -1 : -4
        },
        Eb: a => {
            var b = w.length;
            a >>>= 0;
            if (2147483648 < a) return !1;
            for (var c = 1; 4 >= c; c *= 2) {
                var d = b * (1 + .2 / c);
                d = Math.min(d, a + 100663296);
                var e = Math;
                d = Math.max(a, d);
                a: {
                    e = (e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - db.buffer.byteLength + 65535) / 65536;
                    try {
                        db.grow(e);
                        jb();
                        var f = 1;
                        break a
                    } catch (g) {}
                    f = void 0
                }
                if (f) return !0
            }
            return !1
        },
        Xa: () => (lf = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1,
        Oa: (a, b, c) => "undefined" ==
            typeof onbeforeunload ? -1 : 1 !== c ? -5 : Ph(a, b),
        L: (a, b, c, d) => Qh(a, b, c, d, 12, "blur"),
        s: Ef,
        ka: (a, b, c) => {
            a = zf(a);
            if (!a) return -4;
            a.style.width = b + "px";
            a.style.height = c + "px";
            return 0
        },
        M: (a, b, c, d) => Qh(a, b, c, d, 13, "focus"),
        ma: (a, b, c, d) => {
            if (!jf()) return -1;
            a = zf(a);
            if (!a) return -4;
            Rh(a, b, c, d, "webkitfullscreenchange");
            return Rh(a, b, c, d, "fullscreenchange")
        },
        Va: (a, b, c) => navigator.getGamepads || navigator.webkitGetGamepads ? Sh(a, b, c, 26, "gamepadconnected") : -1,
        Ua: (a, b, c) => navigator.getGamepads || navigator.webkitGetGamepads ? Sh(a,
            b, c, 27, "gamepaddisconnected") : -1,
        Dh: (a, b, c) => setInterval(() => {
            Id(() => M(a)(c))
        }, b),
        T: (a, b, c, d) => Th(a, b, c, d, 2, "keydown"),
        la: (a, b, c, d) => Th(a, b, c, d, 1, "keypress"),
        S: (a, b, c, d) => Th(a, b, c, d, 3, "keyup"),
        R: (a, b, c, d) => Vh(a, b, c, d, 5, "mousedown"),
        Sa: (a, b, c, d) => Vh(a, b, c, d, 33, "mouseenter"),
        Ra: (a, b, c, d) => Vh(a, b, c, d, 34, "mouseleave"),
        P: (a, b, c, d) => Vh(a, b, c, d, 8, "mousemove"),
        Gh: (a, b, c, d) => Vh(a, b, c, d, 35, "mouseover"),
        Q: (a, b, c, d) => Vh(a, b, c, d, 6, "mouseup"),
        N: (a, b, c, d) => {
            if (!document || !document.body || !(document.body.requestPointerLock ||
                    document.body.Xj || document.body.Ol || document.body.Ml)) return -1;
            a = zf(a);
            if (!a) return -4;
            Wh(a, b, c, d, "mozpointerlockchange");
            Wh(a, b, c, d, "webkitpointerlockchange");
            Wh(a, b, c, d, "mspointerlockchange");
            return Wh(a, b, c, d, "pointerlockchange")
        },
        Qa: (a, b, c, d) => Xh(a, b, c, d),
        H: (a, b, c, d) => Yh(a, b, c, d, 25, "touchcancel"),
        J: (a, b, c, d) => Yh(a, b, c, d, 23, "touchend"),
        I: (a, b, c, d) => Yh(a, b, c, d, 24, "touchmove"),
        K: (a, b, c, d) => Yh(a, b, c, d, 22, "touchstart"),
        Pa: (a, b, c) => yf[1] ? Zh(a, b, c) : -4,
        Kh: (a, b, c, d) => {
            $h(a, b, c, d, 31, "webglcontextlost");
            return 0
        },
        Jh: (a, b, c, d) => {
            $h(a, b, c, d, 32, "webglcontextrestored");
            return 0
        },
        O: (a, b, c, d) => (a = zf(a)) ? "undefined" != typeof a.onwheel ? ai(a, b, c, d) : -1 : -4,
        ih: a => document.title = a ? x(w, a) : "",
        m: () => {
            throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
        },
        eh: function (a, b, c, d, e) {
            function f(Q) {
                v ? Q() : Id(Q)
            }
            var g = a + 112,
                h = F[g + 36 >> 2],
                n = F[g + 40 >> 2],
                p = F[g + 44 >> 2],
                q = F[g + 48 >> 2],
                u = F[g + 52 >> 2],
                v = !!(u & 64),
                r = Q => {
                    f(() => {
                        h ? M(h)(Q) : b && b(Q)
                    })
                },
                B = Q => {
                    f(() => {
                        p ? M(p)(Q) : d && d(Q)
                    })
                },
                y = Q => {
                    f(() => {
                        n ? M(n)(Q) : c && c(Q)
                    })
                },
                G = Q => {
                    f(() => {
                        q ? M(q)(Q) : e && e(Q)
                    })
                },
                K = Q => {
                    ei(Q, r, y, B, G)
                },
                N = (Q, Sc) => {
                    fi(Q, Sc.response, Yb => {
                        f(() => {
                            h ? M(h)(Yb) : b && b(Yb)
                        })
                    }, Yb => {
                        f(() => {
                            h ? M(h)(Yb) : b && b(Yb)
                        })
                    })
                },
                A = Q => {
                    ei(Q, N, y, B, G)
                },
                P = kd(g + 0),
                U = !!(u & 16),
                fa = !!(u & 4);
            u = !!(u & 32);
            if ("EM_IDB_STORE" === P) K = F[g + 84 >> 2], fi(a, w.slice(K, K + F[g + 88 >> 2]), r, y);
            else if ("EM_IDB_DELETE" === P) hi(a, r, y);
            else if (U) {
                if (u) return 0;
                ei(a, fa ? N : r, y, B, G)
            } else gi(a, r, u ? y : fa ? A : K);
            return a
        },
        Ph: (a, b) => {
            b >>= 2;
            b = {
                alpha: !!E[b],
                depth: !!E[b + 1],
                stencil: !!E[b + 2],
                antialias: !!E[b + 3],
                premultipliedAlpha: !!E[b + 4],
                preserveDrawingBuffer: !!E[b + 5],
                powerPreference: ii[E[b + 6]],
                failIfMajorPerformanceCaveat: !!E[b + 7],
                Kj: E[b + 8],
                wl: E[b + 9],
                ak: E[b + 10],
                il: E[b + 11],
                hm: E[b + 12],
                im: E[b + 13]
            };
            a = zf(a);
            return !a || b.il ? 0 : Vd(a, b)
        },
        Oh: (a, b) => {
            a = Wd[a];
            b = b ? x(w, b) : "";
            b.startsWith("GL_") && (b = b.substr(3));
            "ANGLE_instanced_arrays" == b && ne(S);
            "OES_vertex_array_object" == b && oe(S);
            "WEBGL_draw_buffers" == b && pe(S);
            "WEBGL_draw_instanced_base_vertex_base_instance" == b && qe(S);
            "WEBGL_multi_draw_instanced_base_vertex_base_instance" ==
            b && re(S);
            "WEBGL_multi_draw" == b && (S.xl = S.getExtension("WEBGL_multi_draw"));
            return !!a.Ui.getExtension(b)
        },
        Hh: (a, b) => {
            if (!b) return -5;
            a = Wd[a];
            if (!a) return -3;
            var c = a.Ui;
            if (!c) return -3;
            c = c.getContextAttributes();
            E[b >> 2] = c.alpha;
            E[b + 4 >> 2] = c.depth;
            E[b + 8 >> 2] = c.stencil;
            E[b + 12 >> 2] = c.antialias;
            E[b + 16 >> 2] = c.premultipliedAlpha;
            E[b + 20 >> 2] = c.preserveDrawingBuffer;
            E[b + 24 >> 2] = c.powerPreference && ii.indexOf(c.powerPreference);
            E[b + 28 >> 2] = c.failIfMajorPerformanceCaveat;
            E[b + 32 >> 2] = a.version;
            E[b + 36 >> 2] = 0;
            E[b + 40 >> 2] = a.attributes.ak;
            return 0
        },
        Ih: () => R ? R.handle : 0,
        Lh: a => {
            a >>= 2;
            for (var b = 0; 14 > b; ++b) E[a + b] = 0;
            E[a] = E[a + 1] = E[a + 3] = E[a + 4] = E[a + 8] = E[a + 10] = 1
        },
        Nh: a => Xd(a) ? 0 : -5,
        U: a => {
            var b = ji[a];
            if (!b) return -3;
            b.onopen = b.onerror = b.onclose = b.onmessage = null;
            delete ji[a];
            return 0
        },
        Ch: () => "undefined" != typeof WebSocket,
        Ha: a => {
            if ("undefined" == typeof WebSocket) return -1;
            if (!a) return -5;
            var b = a >> 2;
            a = kd(E[b]);
            a = (b = E[b + 1]) ? new WebSocket(a, (b ? x(w, b) : "").split(",")) : new WebSocket(a);
            a.binaryType = "arraybuffer";
            b = ji.length;
            ji[b] = a;
            return b
        },
        Ya: (a, b, c) => {
            a =
                ji[a];
            if (!a) return -3;
            a.send(w.subarray(b, b + c));
            return 0
        },
        Qh: (a, b) => {
            a = ji[a];
            if (!a) return -3;
            b = b ? x(w, b) : "";
            a.send(b);
            return 0
        },
        pa: (a, b, c) => {
            Y || (Y = m(1024));
            var d = ji[a];
            if (!d) return -3;
            d.onclose = function (e) {
                F[Y >> 2] = a;
                F[Y + 4 >> 2] = e.wasClean;
                F[Y + 8 >> 2] = e.code;
                t(e.reason, w, Y + 10, 512);
                M(c)(0, Y, b)
            };
            return 0
        },
        ua: (a, b, c) => {
            Y || (Y = m(1024));
            var d = ji[a];
            if (!d) return -3;
            d.onerror = function () {
                F[Y >> 2] = a;
                M(c)(0, Y, b)
            };
            return 0
        },
        xa: (a, b, c) => {
            Y || (Y = m(1024));
            var d = ji[a];
            if (!d) return -3;
            d.onmessage = function (e) {
                F[Y >> 2] = a;
                if ("string" ==
                    typeof e.data) {
                    var f = sd(e.data),
                        g = aa(e.data) + 1;
                    F[Y + 12 >> 2] = 1
                } else g = e.data.byteLength, f = m(g), D.set(new Uint8Array(e.data), f), F[Y + 12 >> 2] = 0;
                F[Y + 4 >> 2] = f;
                F[Y + 8 >> 2] = g;
                M(c)(0, Y, b);
                ca(f)
            };
            return 0
        },
        ya: (a, b, c) => {
            Y || (Y = m(1024));
            var d = ji[a];
            if (!d) return -3;
            d.onopen = function () {
                F[Y >> 2] = a;
                M(c)(0, Y, b)
            };
            return 0
        },
        Mb: (a, b) => {
            var c = 0;
            mi().forEach((d, e) => {
                var f = b + c;
                e = F[a + 4 * e >> 2] = f;
                for (f = 0; f < d.length; ++f) D[e++ >> 0] = d.charCodeAt(f);
                D[e >> 0] = 0;
                c += d.length + 1
            });
            return 0
        },
        Nb: (a, b) => {
            var c = mi();
            F[a >> 2] = c.length;
            var d = 0;
            c.forEach(e =>
                d += e.length + 1);
            F[b >> 2] = d;
            return 0
        },
        b: Md,
        D: function (a) {
            try {
                var b = Oc(a);
                Zc(b);
                return 0
            } catch (c) {
                if ("undefined" == typeof jd || "ErrnoError" !== c.name) throw c;
                return c.Ki
            }
        },
        Ea: function (a, b, c, d) {
            try {
                a: {
                    var e = Oc(a);a = b;
                    for (var f, g = b = 0; g < c; g++) {
                        var h = F[a >> 2],
                            n = F[a + 4 >> 2];
                        a += 8;
                        var p = e,
                            q = h,
                            u = n,
                            v = f,
                            r = D;
                        if (0 > u || 0 > v) throw new O(28);
                        if (null === p.fd) throw new O(8);
                        if (1 === (p.flags & 2097155)) throw new O(8);
                        if (C(p.node.mode)) throw new O(31);
                        if (!p.Ii.read) throw new O(28);
                        var B = "undefined" != typeof v;
                        if (!B) v = p.position;
                        else if (!p.seekable) throw new O(70);
                        var y = p.Ii.read(p, r, q, u, v);
                        B || (p.position += y);
                        var G = y;
                        if (0 > G) {
                            var K = -1;
                            break a
                        }
                        b += G;
                        if (G < n) break;
                        "undefined" !== typeof f && (f += G)
                    }
                    K = b
                }
                F[d >> 2] = K;
                return 0
            }
            catch (N) {
                if ("undefined" == typeof jd || "ErrnoError" !== N.name) throw N;
                return N.Ki
            }
        },
        Cb: function (a, b, c, d, e) {
            b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
            try {
                if (isNaN(b)) return 61;
                var f = Oc(a);
                $c(f, b, d);
                J = [f.position >>> 0, (I = f.position, 1 <= +Math.abs(I) ? 0 < I ? +Math.floor(I / 4294967296) >>> 0 : ~~+Math.ceil((I - +(~~I >>> 0)) / 4294967296) >>> 0 : 0)];
                E[e >> 2] = J[0];
                E[e +
                    4 >> 2] = J[1];
                f.pj && 0 === b && 0 === d && (f.pj = null);
                return 0
            } catch (g) {
                if ("undefined" == typeof jd || "ErrnoError" !== g.name) throw g;
                return g.Ki
            }
        },
        Da: function (a, b, c, d) {
            try {
                a: {
                    var e = Oc(a);a = b;
                    for (var f, g = b = 0; g < c; g++) {
                        var h = F[a >> 2],
                            n = F[a + 4 >> 2];
                        a += 8;
                        var p = ad(e, D, h, n, f);
                        if (0 > p) {
                            var q = -1;
                            break a
                        }
                        b += p;
                        "undefined" !== typeof f && (f += p)
                    }
                    q = b
                }
                F[d >> 2] = q;
                return 0
            }
            catch (u) {
                if ("undefined" == typeof jd || "ErrnoError" !== u.name) throw u;
                return u.Ki
            }
        },
        wh: (a, b, c, d) => {
            function e(u, v, r, B, y, G) {
                var K = 10 === u ? 28 : 16;
                if (10 === u) a: {
                    var N = "";
                    var A,
                        P = 0,
                        U = 0,
                        fa = 0,
                        Q = 0;y = [y[0] & 65535, y[0] >> 16, y[1] & 65535, y[1] >> 16, y[2] & 65535, y[2] >> 16, y[3] & 65535, y[3] >> 16];
                    var Sc = !0;
                    for (A = 0; 5 > A; A++)
                        if (0 !== y[A]) {
                            Sc = !1;
                            break
                        } if (Sc) {
                        A = ti(y[6] | y[7] << 16);
                        if (-1 === y[5]) {
                            N = "::ffff:" + A;
                            break a
                        }
                        if (0 === y[5]) {
                            "0.0.0.0" === A && (A = "");
                            "0.0.0.1" === A && (A = "1");
                            N = "::" + A;
                            break a
                        }
                    }
                    for (A = 0; 8 > A; A++) 0 === y[A] && (1 < A - U && (Q = 0), U = A, Q++),
                    Q > P && (P = Q, fa = A - P + 1);
                    for (A = 0; 8 > A; A++) 1 < P && 0 === y[A] && A >= fa && A < fa + P ? A === fa && (N += ":", 0 === fa && (N += ":")) : (N += Number(Ci(y[A] & 65535)).toString(16), N += 7 > A ? ":" : "")
                }
                else N =
                    ti(y);
                y = N;
                K = m(K);
                a: {
                    N = y;
                    switch (u) {
                        case 2:
                            N = ni(N);
                            w.fill(0, K, K + 16);
                            gb[K >> 1] = u;
                            E[K + 4 >> 2] = N;
                            gb[K + 2 >> 1] = oi(G);
                            break;
                        case 10:
                            N = pi(N);
                            w.fill(0, K, K + 28);
                            E[K >> 2] = u;
                            E[K + 8 >> 2] = N[0];
                            E[K + 12 >> 2] = N[1];
                            E[K + 16 >> 2] = N[2];
                            E[K + 20 >> 2] = N[3];
                            gb[K + 2 >> 1] = oi(G);
                            break;
                        default:
                            G = 5;
                            break a
                    }
                    G = 0
                }!G || cb();
                G = m(32);
                E[G + 4 >> 2] = u;
                E[G + 8 >> 2] = v;
                E[G + 12 >> 2] = r;
                F[G + 24 >> 2] = B;
                F[G + 20 >> 2] = K;
                E[G + 16 >> 2] = 10 === u ? 28 : 16;
                E[G + 28 >> 2] = 0;
                return G
            }
            var f = 0,
                g = 0,
                h = 0,
                n = 0,
                p = 0,
                q = 0;
            c && (h = E[c >> 2], n = E[c + 4 >> 2], p = E[c + 8 >> 2], q = E[c + 12 >> 2]);
            p && !q && (q = 2 === p ? 17 : 6);
            !p && q && (p =
                17 === q ? 2 : 1);
            0 === q && (q = 6);
            0 === p && (p = 1);
            if (!a && !b) return -2;
            if (h & -1088 || 0 !== c && E[c >> 2] & 2 && !a) return -1;
            if (h & 32) return -2;
            if (0 !== p && 1 !== p && 2 !== p) return -7;
            if (0 !== n && 2 !== n && 10 !== n) return -6;
            if (b && (b = b ? x(w, b) : "", g = parseInt(b, 10), isNaN(g))) return h & 1024 ? -2 : -8;
            if (!a) return 0 === n && (n = 2), 0 === (h & 1) && (2 === n ? f = Di(2130706433) : f = [0, 0, 0, 1]), a = e(n, p, q, null, f, g), F[d >> 2] = a, 0;
            a = a ? x(w, a) : "";
            f = ni(a);
            if (null !== f)
                if (0 === n || 2 === n) n = 2;
                else if (10 === n && h & 8) f = [0, 0, Di(65535), f], n = 10;
            else return -2;
            else if (f = pi(a), null !== f)
                if (0 === n ||
                    10 === n) n = 10;
                else return -2;
            if (null != f) return a = e(n, p, q, a, f, g), F[d >> 2] = a, 0;
            if (h & 4) return -2;
            a = si(a);
            f = ni(a);
            0 === n ? n = 2 : 10 === n && (f = [0, 0, Di(65535), f]);
            a = e(n, p, q, null, f, g);
            F[d >> 2] = a;
            return 0
        },
        fa: Mf,
        oa: Nf,
        B: Of,
        qb: Pf,
        y: Qf,
        c: Rf,
        za: Tf,
        Aa: Uf,
        C: Vf,
        tb: Wf,
        pb: Xf,
        E: Yf,
        ba: Zf,
        Ga: $f,
        hc: ag,
        _: bg,
        mb: cg,
        jb: dg,
        ob: eg,
        vb: fg,
        da: gg,
        ra: hg,
        z: ig,
        v: jg,
        ga: kg,
        Ka: mg,
        Ca: ng,
        gf: og,
        j: pg,
        sb: qg,
        rb: rg,
        l: xg,
        q: yg,
        F: zg,
        sa: Cg,
        r: Dg,
        xb: Eg,
        ub: Gg,
        Ia: Hg,
        va: Ig,
        i: Jg,
        V: Mg,
        u: Ng,
        La: Qg,
        Ma: Rg,
        ha: Tg,
        hb: Ug,
        W: Vg,
        lb: Yg,
        qa: Zg,
        k: $g,
        d: ch,
        ib: hh,
        Ja: ih,
        ea: lh,
        ta: mh,
        w: nh,
        nb: oh,
        Y: ph,
        wb: qh,
        Z: rh,
        g: sh,
        f: th,
        ca: uh,
        X: vh,
        gb: xh,
        A: yh,
        db: Ah,
        fb: Bh,
        cb: Ch,
        eb: Dh,
        bb: Eh,
        o: Fh,
        ab: Gh,
        $a: Hh,
        _a: Ih,
        wa: Jh,
        kb: Kh,
        h: Mh,
        G: Nh,
        ia: wi,
        Db: (a, b, c, d) => wi(a, b, c, d)
    },
    Z = function () {
        function a(c) {
            Z = c.exports;
            db = Z.Rh;
            jb();
            Qb = Z.Uh;
            lb.unshift(Z.Sh);
            vb("wasm-instantiate");
            return Z
        }
        var b = {
            a: Ei
        };
        ub("wasm-instantiate");
        if (k.instantiateWasm) try {
            return k.instantiateWasm(b, a)
        } catch (c) {
            return l(`Module.instantiateWasm callback failed with error: `), !1
        }
        Db(b, function (c) {
            a(c.instance)
        });
        return {}
    }(),
    ba = k._memcpy =
    (a, b, c) => (ba = k._memcpy = Z.Th)(a, b, c),
    m = a => (m = Z.Vh)(a),
    ca = a => (ca = Z.Wh)(a),
    oi = a => (oi = Z.Xh)(a),
    Di = a => (Di = Z.Yh)(a),
    Ci = a => (Ci = Z.Zh)(a),
    Ai = () => (Ai = Z._h)();
k._chat_callback = (a, b) => (k._chat_callback = Z.$h)(a, b);
k._join_game_callback = a => (k._join_game_callback = Z.ai)(a);
k._api_error_callback = (a, b) => (k._api_error_callback = Z.bi)(a, b);
k._create_game_callback = (a, b, c) => (k._create_game_callback = Z.ci)(a, b, c);
k._player_info_callback = (a, b, c, d, e, f) => (k._player_info_callback = Z.di)(a, b, c, d, e, f);
k._log_next_game_state = () => (k._log_next_game_state = Z.ei)();
k._start_game = () => (k._start_game = Z.fi)();
k._wallpaper_update_config = a => (k._wallpaper_update_config = Z.gi)(a);
k._wallpaper_reset_config = () => (k._wallpaper_reset_config = Z.hi)();
k._wallpaper_update_subscription_data = a => (k._wallpaper_update_subscription_data = Z.ii)(a);
k._video_playback_started = () => (k._video_playback_started = Z.ji)();
k._video_playback_ended = () => (k._video_playback_ended = Z.ki)();
k._post_video_upload_callback = a => (k._post_video_upload_callback = Z.li)(a);
k._GXC_FSSyncCompleted = () => (k._GXC_FSSyncCompleted = Z.mi)();
k._YYSum = (a, b) => (k._YYSum = Z.ni)(a, b);
var Gi = k._main = (a, b) => (Gi = k._main = Z.oi)(a, b);
k._FSSyncCompleted = () => (k._FSSyncCompleted = Z.pi)();
var wb = () => (wb = Z.qi)(),
    Bi = a => (Bi = Z.ri)(a),
    Te = () => (Te = Z.si)(),
    Ue = a => (Ue = Z.ti)(a),
    Bf = a => (Bf = Z.ui)(a);
k.dynCall_viij = (a, b, c, d, e) => (k.dynCall_viij = Z.vi)(a, b, c, d, e);
k.dynCall_vij = (a, b, c, d) => (k.dynCall_vij = Z.wi)(a, b, c, d);
k.dynCall_iiiiiij = (a, b, c, d, e, f, g, h) => (k.dynCall_iiiiiij = Z.xi)(a, b, c, d, e, f, g, h);
k.dynCall_iiji = (a, b, c, d, e) => (k.dynCall_iiji = Z.yi)(a, b, c, d, e);
k.dynCall_jiji = (a, b, c, d, e) => (k.dynCall_jiji = Z.zi)(a, b, c, d, e);
k.dynCall_ji = (a, b) => (k.dynCall_ji = Z.Ai)(a, b);
k.dynCall_viijii = (a, b, c, d, e, f, g) => (k.dynCall_viijii = Z.Bi)(a, b, c, d, e, f, g);
k.dynCall_iiiiij = (a, b, c, d, e, f, g) => (k.dynCall_iiiiij = Z.Ci)(a, b, c, d, e, f, g);
k.dynCall_iiiiijj = (a, b, c, d, e, f, g, h, n) => (k.dynCall_iiiiijj = Z.Di)(a, b, c, d, e, f, g, h, n);
k.dynCall_iiiiiijj = (a, b, c, d, e, f, g, h, n, p) => (k.dynCall_iiiiiijj = Z.Ei)(a, b, c, d, e, f, g, h, n, p);
k.addRunDependency = ub;
k.removeRunDependency = vb;
k.FS_createPath = dd;
k.FS_createLazyFile = hd;
k.FS_createDevice = fd;
k.dynCall = Lb;
k.cwrap = (a, b, c, d) => {
    var e = !c || c.every(f => "number" === f || "boolean" === f);
    return "string" !== b && e && !d ? k["_" + a] : function () {
        return Fb(a, b, c, arguments)
    }
};
k.getValue = Ib;
k.FS_createPreloadedFile = uc;
k.FS_createDataFile = tc;
k.FS_unlink = Ma;
var Hi;
tb = function Ii() {
    Hi || Ji();
    Hi || (tb = Ii)
};

function Ki(a = []) {
    var b = Gi;
    a.unshift(Pa);
    var c = a.length,
        d = Bf(4 * (c + 1)),
        e = d;
    a.forEach(g => {
        F[e >> 2] = Cf(g);
        e += 4
    });
    F[e >> 2] = 0;
    try {
        var f = b(c, d);
        Md(f, !0)
    } catch (g) {
        Kd(g)
    }
}

function Ji() {
    var a = Oa;

    function b() {
        if (!Hi && (Hi = !0, k.calledRun = !0, !eb)) {
            pb = !0;
            k.noFSInit || cd || (cd = !0, bd(), k.stdin = k.stdin, k.stdout = k.stdout, k.stderr = k.stderr, k.stdin ? fd("/dev", "stdin", k.stdin) : Vc("/dev/tty", "/dev/stdin"), k.stdout ? fd("/dev", "stdout", null, k.stdout) : Vc("/dev/tty", "/dev/stdout"), k.stderr ? fd("/dev", "stderr", null, k.stderr) : Vc("/dev/tty1", "/dev/stderr"), Xc("/dev/stdin", 0), Xc("/dev/stdout", 1), Xc("/dev/stderr", 1));
            Bc = !1;
            Ob(lb);
            Ob(mb);
            if (k.onRuntimeInitialized) k.onRuntimeInitialized();
            Li &&
                Ki(a);
            if (k.postRun)
                for ("function" == typeof k.postRun && (k.postRun = [k.postRun]); k.postRun.length;) {
                    var c = k.postRun.shift();
                    ob.unshift(c)
                }
            Ob(ob)
        }
    }
    if (!(0 < rb)) {
        if (k.preRun)
            for ("function" == typeof k.preRun && (k.preRun = [k.preRun]); k.preRun.length;) qb();
        Ob(kb);
        0 < rb || (k.setStatus ? (k.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () {
                k.setStatus("")
            }, 1);
            b()
        }, 1)) : b())
    }
}
if (k.preInit)
    for ("function" == typeof k.preInit && (k.preInit = [k.preInit]); 0 < k.preInit.length;) k.preInit.pop()();
var Li = !0;
k.noInitialRun && (Li = !1);
Ji();
(function () {
    if ("undefined" != typeof window && !window.Fi) {
        webtransport_async_read = async d => {
            try {
                let g = d.transport.datagrams.readable.getReader();
                for (var e = !1; !e;) {
                    var f;
                    ({
                        value: f,
                        done: e
                    } = await g.read());
                    d.Qj.push(f)
                }
                console.log("Closing WebTransport connection")
            } catch (g) {
                console.error("Could not open channel to read datagrams, " + g)
            }
        };
        webtransport_async_connect = async (d, e) => {
            try {
                await d.transport.ready;
                console.log("Connected successfully to relay.");
                try {
                    d.nj = d.transport.datagrams.writable.getWriter()
                } catch (f) {
                    console.error("Could not open channel to send datagrams, " + f)
                }
            } catch (f) {
                console.error("Connection failed to " +
                    e + ", " + f)
            }
            d.transport.closed.then(() => {
                d.nj = null;
                console.log("Connection to " + e + " closed gracefully")
            }).catch(() => {
                d.nj = null;
                console.error("Connection to " + e + " closed abruptly")
            });
            webtransport_async_read(d)
        };
        class c {
            constructor() {
                this.nj = this.transport = null;
                this.Qj = [];
                this.url = ""
            }
            destroy() {
                null != this.transport && this.transport && (this.transport.close(), this.transport = null);
                this.nj = null
            }
            async connect(d, e) {
                try {
                    d.transport = new WebTransport(e)
                } catch (f) {
                    console.error("Failed to initialise WebTransport, " +
                        f)
                }
                await webtransport_async_connect(d, e)
            }
            async send(d, e) {
                null == this.transport && await this.connect(this, this.url);
                for (var f = 10; !this.nj && f;) await new Promise(n => setTimeout(n, 100)), f--;
                if (this.nj) {
                    d = k.HEAPU8.subarray(d, d + e);
                    f = new ArrayBuffer(e);
                    for (var g = new Uint8Array(f), h = 0; h < e; h++) g[h] = d[h];
                    this.nj.write(f)
                } else console.log("DatagramWriter is not initialized. Couldn't send message.")
            }
            Al(d, e) {
                if (0 == this.Qj.length) return -1;
                var f = this.Qj[0];
                this.Qj.shift();
                var g = f.length;
                if (g > e) return -1;
                d = k.HEAPU8.subarray(d,
                    d + g);
                for (e = 0; e < g; e++) d[e] = f[e];
                return g
            }
        }
        var a = [],
            b = 0;
        webtransport_set_relay = (d, e) => {
            const f = b++;
            a[f] = new c;
            a[f].url = d + ":" + e;
            return f
        };
        webtransport_send = (d, e, f) => {
            a[d].send(e, f)
        };
        webtransport_receive = (d, e, f) => a[d].Al(e, f);
        webtransport_destroy = d => {
            a[d].destroy();
            a[d] = null
        }
    }
})();
"undefined" != typeof window && (api_error_callback = k.cwrap("api_error_callback", null, ["number", "string"]), create_game_callback = k.cwrap("create_game_callback", null, ["string", "string", "string"]), join_game_callback = k.cwrap("join_game_callback", null, ["string"]), chat_callback = k.cwrap("chat_callback", null, ["string", "number"]), player_info_callback = k.cwrap("player_info_callback", null, "number string string string bool string".split(" ")), log_next_game_state = k.cwrap("log_next_game_state", null, []), start_game = k.cwrap("start_game",
        null, []), init_request_parameters = a => {
        var b = {
            method: "POST",
            credentials: "include",
            headers: {}
        };
        b.headers["Content-Type"] = "application/json;charset=UTF-8";
        b.headers["Access-Control-Allow-Credentials"] = "true";
        b.body = JSON.stringify(a);
        return b
    }, gxc_room_size = 4, gxc_local_player = 0, gxc_player_info = [], gxc_set_room_info = (a, b) => {
        gxc_room_size = a;
        gxc_local_player = b
    }, set_local_share_url = a => {
        window.shareUrl = a;
        if (a = document.getElementById("share-button")) a.style.visibility = "visible"
    }, post_share_url = a => {
        if (window.parent) {
            var b = {
                type: "share_url"
            };
            b.shareUrl = a;
            window.parent.postMessage(b, "*")
        }
    }, gxc_request_room = (a, b, c, d, e, f) => {
        var g = location.host.startsWith("localhost") || location.host.startsWith("test.vectorwars.gmx.dev");
        g && (e = "debug");
        console.log("Requesting " + c + "-player game with game-id " + e);
        var h = {};
        h.region = b;
        h.roomSize = c;
        h.lateJoin = !!d;
        b = init_request_parameters(h);
        fetch("https://" + a + "/gg/games/" + e + "/rooms" + (f.length ? "?trackId=" + f : ""), b).then(n => {
            n.ok ? n.json().then(p => {
                var q = p.data.shareUrl,
                    u = p.data.roomUrl;
                p = p.data.joinRoomUrl;
                g ? (q = location.protocol + "//" + location.host + location.pathname + "?game=debug&roomUrl=" + u, set_local_share_url(q)) : post_share_url(q);
                create_game_callback(p, q, u)
            }) : n.json().then(p => {
                if (window.parent) {
                    var q = {
                        type: "api_error"
                    };
                    q.error = p.errors[0].code;
                    window.parent.postMessage(q, "*")
                }
                api_error_callback(n.status, p.errors[0].code)
            })
        })
    }, gxc_join_room = (a, b, c, d) => {
        console.log("Joining game '" + b + "' with track-id '" + c + "' on environment '" + a + "' using url " + d);
        var e = {};
        "debug" != b && (e.gameId = b, e.trackId = c);
        e.roomUrl =
            d;
        b = init_request_parameters(e);
        fetch("https://" + a + "/gg/rooms", b).then(f => {
            f.ok ? f.json().then(g => {
                join_game_callback(g.data.roomUrl)
            }) : f.json().then(g => {
                if (window.parent) {
                    var h = {
                        type: "api_error"
                    };
                    h.error = g.errors[0].code;
                    window.parent.postMessage(h, "*")
                }
                api_error_callback(f.status, g.errors[0].code)
            })
        });
        location.host.startsWith("localhost") || location.host.startsWith("test.vectorwars.gmx.dev") ? set_local_share_url(window.location.href) : post_share_url(window.location.href)
    }, gxc_get_player_info = (a, b, c) => {
        console.log("Requesting player info.");
        var d = {
            method: "GET",
            credentials: "include",
            headers: {}
        };
        d.headers["Content-Type"] = "application/json;charset=UTF-8";
        d.headers["Access-Control-Allow-Credentials"] = "true";
        let e = "https://" + b + "/images/AvatarPlaceholder.png";
        fetch("https://" + a + "/gg/v2/rooms?roomUrl=" + c, d).then(f => {
            f.ok ? f.json().then(g => {
                gxc_player_info = g.data.players;
                gxc_player_info.forEach(h => {
                    null !== h.playerId && (null === h.user.userId ? (h.user.userId = "", h.user.guest = !0) : h.user.guest = !1, null === h.user.username &&
                        (h.user.username = "unknown"), null === h.user.avatarUrl && (h.user.avatarUrl = e))
                });
                window.parent && (g = {
                    type: "players"
                }, g.roomSize = gxc_room_size, g.local = gxc_local_player, g.players = gxc_player_info, window.parent.postMessage(g, "*"));
                gxc_player_info.forEach(h => {
                    null !== h.playerId && player_info_callback(h.playerId, h.user.username, h.user.avatarUrl, h.status, h.user.guest, h.user.userId)
                })
            }) : (404 == f.status && [0, 1, 2, 3].forEach(g => player_info_callback(g, "unknown", e, "JOINED", !0, "")), f.json().then(g => console.log(g)))
        })
    },
    gxc_set_player_status = (a, b) => {
        gxc_player_info.forEach(d => {
            d.playerId === a && (d.status = b)
        });
        if (window.parent) {
            var c = {
                type: "players"
            };
            c.roomSize = gxc_room_size;
            c.local = gxc_local_player;
            c.players = gxc_player_info;
            window.parent.postMessage(c, "*")
        }
    }, window.addEventListener("message", a => {
        if (a && a.data && "parent_send_chat_message" == a.data.type) {
            var b = a.data.fl;
            if (null === b || void 0 === b) b = -1;
            chat_callback(a.data.content || "", b)
        }
    }), gxc_receive_chat_message = (a, b, c) => {
        window.parent.postMessage({
            type: "receive_chat_message",
            content: a,
            src: b,
            fl: c
        }, "*")
    }, gxc_report_status = a => {
        window.parent.postMessage({
            type: "report_status",
            status: a
        }, "*")
    });
"undefined" != typeof window && (wallpaper_update_config = k.cwrap("wallpaper_update_config", null, ["string"]), wallpaper_reset_config = k.cwrap("wallpaper_reset_config", null, ["string"]), wallpaper_update_subscription_data = k.cwrap("wallpaper_update_subscription_data", null, ["string"]));

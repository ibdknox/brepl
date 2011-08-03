goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____1934 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____1934))
{return or__3576__auto____1934;
} else
{var or__3576__auto____1935 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____1935))
{return or__3576__auto____1935;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1936 = coll;

if(cljs.core.truth_(and__3574__auto____1936))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____1936;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____1937 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1937))
{return or__3576__auto____1937;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1938 = coll;

if(cljs.core.truth_(and__3574__auto____1938))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____1938;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____1939 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1939))
{return or__3576__auto____1939;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____1940 = coll;

if(cljs.core.truth_(and__3574__auto____1940))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____1940;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____1941 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1941))
{return or__3576__auto____1941;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__1946 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____1942 = coll;

if(cljs.core.truth_(and__3574__auto____1942))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1942;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____1943 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1943))
{return or__3576__auto____1943;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__1947 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1944 = coll;

if(cljs.core.truth_(and__3574__auto____1944))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1944;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____1945 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1945))
{return or__3576__auto____1945;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__1946.call(this,coll,n);
case  3 :
return _nth__1947.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1949 = coll;

if(cljs.core.truth_(and__3574__auto____1949))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____1949;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____1950 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1950))
{return or__3576__auto____1950;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1951 = coll;

if(cljs.core.truth_(and__3574__auto____1951))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____1951;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____1952 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1952))
{return or__3576__auto____1952;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__1957 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____1953 = o;

if(cljs.core.truth_(and__3574__auto____1953))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1953;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____1954 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1954))
{return or__3576__auto____1954;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__1958 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1955 = o;

if(cljs.core.truth_(and__3574__auto____1955))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1955;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____1956 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1956))
{return or__3576__auto____1956;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__1957.call(this,o,k);
case  3 :
return _lookup__1958.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____1960 = coll;

if(cljs.core.truth_(and__3574__auto____1960))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____1960;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____1961 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1961))
{return or__3576__auto____1961;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____1962 = coll;

if(cljs.core.truth_(and__3574__auto____1962))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____1962;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____1963 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1963))
{return or__3576__auto____1963;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____1964 = coll;

if(cljs.core.truth_(and__3574__auto____1964))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____1964;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____1965 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1965))
{return or__3576__auto____1965;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____1966 = coll;

if(cljs.core.truth_(and__3574__auto____1966))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____1966;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____1967 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1967))
{return or__3576__auto____1967;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1968 = coll;

if(cljs.core.truth_(and__3574__auto____1968))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____1968;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____1969 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1969))
{return or__3576__auto____1969;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1970 = coll;

if(cljs.core.truth_(and__3574__auto____1970))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____1970;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____1971 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1971))
{return or__3576__auto____1971;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____1972 = coll;

if(cljs.core.truth_(and__3574__auto____1972))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____1972;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____1973 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1973))
{return or__3576__auto____1973;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____1974 = o;

if(cljs.core.truth_(and__3574__auto____1974))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____1974;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____1975 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1975))
{return or__3576__auto____1975;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____1976 = o;

if(cljs.core.truth_(and__3574__auto____1976))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____1976;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____1977 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1977))
{return or__3576__auto____1977;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____1978 = o;

if(cljs.core.truth_(and__3574__auto____1978))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____1978;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____1979 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1979))
{return or__3576__auto____1979;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____1980 = o;

if(cljs.core.truth_(and__3574__auto____1980))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____1980;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____1981 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1981))
{return or__3576__auto____1981;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__1986 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____1982 = coll;

if(cljs.core.truth_(and__3574__auto____1982))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____1982;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____1983 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1983))
{return or__3576__auto____1983;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__1987 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____1984 = coll;

if(cljs.core.truth_(and__3574__auto____1984))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____1984;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____1985 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1985))
{return or__3576__auto____1985;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__1986.call(this,coll,f);
case  3 :
return _reduce__1987.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____1989 = o;

if(cljs.core.truth_(and__3574__auto____1989))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____1989;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____1990 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1990))
{return or__3576__auto____1990;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____1991 = o;

if(cljs.core.truth_(and__3574__auto____1991))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____1991;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____1992 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1992))
{return or__3576__auto____1992;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____1993 = o;

if(cljs.core.truth_(and__3574__auto____1993))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____1993;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____1994 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1994))
{return or__3576__auto____1994;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____1995 = o;

if(cljs.core.truth_(and__3574__auto____1995))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____1995;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____1996 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1996))
{return or__3576__auto____1996;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____1997 = d;

if(cljs.core.truth_(and__3574__auto____1997))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____1997;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____1998 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____1998))
{return or__3576__auto____1998;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__1999 = null;
var G__1999__2000 = (function (_,n){
return null;
});
var G__1999__2001 = (function (_,n,not_found){
return not_found;
});
G__1999 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__1999__2000.call(this,_,n);
case  3 :
return G__1999__2001.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__1999;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2003 = null;
var G__2003__2004 = (function (_,f){
return f.call(null);
});
var G__2003__2005 = (function (_,f,start){
return start;
});
G__2003 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2003__2004.call(this,_,f);
case  3 :
return G__2003__2005.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2003;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2007 = null;
var G__2007__2008 = (function (o,k){
return null;
});
var G__2007__2009 = (function (o,k,not_found){
return not_found;
});
G__2007 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2007__2008.call(this,o,k);
case  3 :
return G__2007__2009.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2007;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2017 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2011 = cljs.core._nth.call(null,cicoll,0);
var n__2012 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2012,cljs.core._count.call(null,cicoll))))
{{
var G__2021 = f.call(null,val__2011,cljs.core._nth.call(null,cicoll,n__2012));
var G__2022 = cljs.core.inc.call(null,n__2012);
val__2011 = G__2021;
n__2012 = G__2022;
continue;
}
} else
{return val__2011;
}
break;
}
}
});
var ci_reduce__2018 = (function (cicoll,f,val){
var val__2013 = val;
var n__2014 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2014,cljs.core._count.call(null,cicoll))))
{{
var G__2023 = f.call(null,val__2013,cljs.core._nth.call(null,cicoll,n__2014));
var G__2024 = cljs.core.inc.call(null,n__2014);
val__2013 = G__2023;
n__2014 = G__2024;
continue;
}
} else
{return val__2013;
}
break;
}
});
var ci_reduce__2019 = (function (cicoll,f,val,idx){
var val__2015 = val;
var n__2016 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2016,cljs.core._count.call(null,cicoll))))
{{
var G__2025 = f.call(null,val__2015,cljs.core._nth.call(null,cicoll,n__2016));
var G__2026 = cljs.core.inc.call(null,n__2016);
val__2015 = G__2025;
n__2016 = G__2026;
continue;
}
} else
{return val__2015;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2017.call(this,cicoll,f);
case  3 :
return ci_reduce__2018.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2019.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2033 = null;
var G__2033__2034 = (function (_,f){
var this__2027 = this;
return cljs.core.ci_reduce.call(null,this__2027.a,f,(this__2027.a[this__2027.i]),cljs.core.inc.call(null,this__2027.i));
});
var G__2033__2035 = (function (_,f,start){
var this__2028 = this;
return cljs.core.ci_reduce.call(null,this__2028.a,f,start,this__2028.i);
});
G__2033 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2033__2034.call(this,_,f);
case  3 :
return G__2033__2035.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2033;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2029 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2030 = this;
return (this__2030.a[this__2030.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2031 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2031.i),cljs.core._count.call(null,this__2031.a))))
{return (new cljs.core.IndexedSeq(this__2031.a,cljs.core.inc.call(null,this__2031.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2032 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2037 = null;
var G__2037__2038 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2037__2039 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2037 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2037__2038.call(this,array,f);
case  3 :
return G__2037__2039.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2037;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2041 = null;
var G__2041__2042 = (function (array,k){
return (array[k]);
});
var G__2041__2043 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2041 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2041__2042.call(this,array,k);
case  3 :
return G__2041__2043.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2041;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2045 = null;
var G__2045__2046 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2045__2047 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2045 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2045__2046.call(this,array,n);
case  3 :
return G__2045__2047.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2045;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2049))
{var s__2050 = temp__3726__auto____2049;

return cljs.core._first.call(null,s__2050);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2051 = cljs.core.next.call(null,s);
s = G__2051;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2052 = cljs.core.seq.call(null,x);
var n__2053 = 0;

while(true){
if(cljs.core.truth_(s__2052))
{{
var G__2054 = cljs.core.next.call(null,s__2052);
var G__2055 = cljs.core.inc.call(null,n__2053);
s__2052 = G__2054;
n__2053 = G__2055;
continue;
}
} else
{return n__2053;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2056 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2057 = (function() { 
var G__2059__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2060 = conj.call(null,coll,x);
var G__2061 = cljs.core.first.call(null,xs);
var G__2062 = cljs.core.next.call(null,xs);
coll = G__2060;
x = G__2061;
xs = G__2062;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2059 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2059__delegate.call(this, coll, x, xs);
};
G__2059.cljs$lang$maxFixedArity = 2;
G__2059.cljs$lang$applyTo = (function (arglist__2063){
var coll = cljs.core.first(arglist__2063);
var x = cljs.core.first(cljs.core.next(arglist__2063));
var xs = cljs.core.rest(cljs.core.next(arglist__2063));
return G__2059__delegate.call(this, coll, x, xs);
});
return G__2059;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2056.call(this,coll,x);
default:
return conj__2057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2057.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2064 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2065 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2064.call(this,coll,n);
case  3 :
return nth__2065.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2067 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2068 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2067.call(this,o,k);
case  3 :
return get__2068.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2071 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2072 = (function() { 
var G__2074__delegate = function (coll,k,v,kvs){
while(true){
var ret__2070 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2075 = ret__2070;
var G__2076 = cljs.core.first.call(null,kvs);
var G__2077 = cljs.core.second.call(null,kvs);
var G__2078 = cljs.core.nnext.call(null,kvs);
coll = G__2075;
k = G__2076;
v = G__2077;
kvs = G__2078;
continue;
}
} else
{return ret__2070;
}
break;
}
};
var G__2074 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2074__delegate.call(this, coll, k, v, kvs);
};
G__2074.cljs$lang$maxFixedArity = 3;
G__2074.cljs$lang$applyTo = (function (arglist__2079){
var coll = cljs.core.first(arglist__2079);
var k = cljs.core.first(cljs.core.next(arglist__2079));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2079)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2079)));
return G__2074__delegate.call(this, coll, k, v, kvs);
});
return G__2074;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2071.call(this,coll,k,v);
default:
return assoc__2072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2072.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2081 = (function (coll){
return coll;
});
var dissoc__2082 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2083 = (function() { 
var G__2085__delegate = function (coll,k,ks){
while(true){
var ret__2080 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2086 = ret__2080;
var G__2087 = cljs.core.first.call(null,ks);
var G__2088 = cljs.core.next.call(null,ks);
coll = G__2086;
k = G__2087;
ks = G__2088;
continue;
}
} else
{return ret__2080;
}
break;
}
};
var G__2085 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2085__delegate.call(this, coll, k, ks);
};
G__2085.cljs$lang$maxFixedArity = 2;
G__2085.cljs$lang$applyTo = (function (arglist__2089){
var coll = cljs.core.first(arglist__2089);
var k = cljs.core.first(cljs.core.next(arglist__2089));
var ks = cljs.core.rest(cljs.core.next(arglist__2089));
return G__2085__delegate.call(this, coll, k, ks);
});
return G__2085;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2081.call(this,coll);
case  2 :
return dissoc__2082.call(this,coll,k);
default:
return dissoc__2083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2083.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__105__auto____2090 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2091 = x__105__auto____2090;

if(cljs.core.truth_(and__3574__auto____2091))
{return x__105__auto____2090.cljs$core$IMeta$;
} else
{return and__3574__auto____2091;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____2090);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2093 = (function (coll){
return coll;
});
var disj__2094 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2095 = (function() { 
var G__2097__delegate = function (coll,k,ks){
while(true){
var ret__2092 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2098 = ret__2092;
var G__2099 = cljs.core.first.call(null,ks);
var G__2100 = cljs.core.next.call(null,ks);
coll = G__2098;
k = G__2099;
ks = G__2100;
continue;
}
} else
{return ret__2092;
}
break;
}
};
var G__2097 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2097__delegate.call(this, coll, k, ks);
};
G__2097.cljs$lang$maxFixedArity = 2;
G__2097.cljs$lang$applyTo = (function (arglist__2101){
var coll = cljs.core.first(arglist__2101);
var k = cljs.core.first(cljs.core.next(arglist__2101));
var ks = cljs.core.rest(cljs.core.next(arglist__2101));
return G__2097__delegate.call(this, coll, k, ks);
});
return G__2097;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2093.call(this,coll);
case  2 :
return disj__2094.call(this,coll,k);
default:
return disj__2095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2095.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2102 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2103 = x__105__auto____2102;

if(cljs.core.truth_(and__3574__auto____2103))
{return x__105__auto____2102.cljs$core$ICollection$;
} else
{return and__3574__auto____2103;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2102);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2104 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2105 = x__105__auto____2104;

if(cljs.core.truth_(and__3574__auto____2105))
{return x__105__auto____2104.cljs$core$ISet$;
} else
{return and__3574__auto____2105;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2104);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2106 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2107 = x__105__auto____2106;

if(cljs.core.truth_(and__3574__auto____2107))
{return x__105__auto____2106.cljs$core$IAssociative$;
} else
{return and__3574__auto____2107;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2106);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2108 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2109 = x__105__auto____2108;

if(cljs.core.truth_(and__3574__auto____2109))
{return x__105__auto____2108.cljs$core$ISequential$;
} else
{return and__3574__auto____2109;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2108);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2110 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2111 = x__105__auto____2110;

if(cljs.core.truth_(and__3574__auto____2111))
{return x__105__auto____2110.cljs$core$ICounted$;
} else
{return and__3574__auto____2111;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2110);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2112 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2113 = x__105__auto____2112;

if(cljs.core.truth_(and__3574__auto____2113))
{return x__105__auto____2112.cljs$core$IMap$;
} else
{return and__3574__auto____2113;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2112);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2114 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2115 = x__105__auto____2114;

if(cljs.core.truth_(and__3574__auto____2115))
{return x__105__auto____2114.cljs$core$IVector$;
} else
{return and__3574__auto____2115;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2114);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2116 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2116.push(key);
}));
return keys__2116;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2117 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2118 = x__105__auto____2117;

if(cljs.core.truth_(and__3574__auto____2118))
{return x__105__auto____2117.cljs$core$ISeq$;
} else
{return and__3574__auto____2118;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2117);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2119 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2119))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2120 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2120))
{return or__3576__auto____2120;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2119;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2121 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2121))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2121;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2122 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2122))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2122;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2123 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2123))
{return (n == n.toFixed());
} else
{return and__3574__auto____2123;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2124 = coll;

if(cljs.core.truth_(and__3574__auto____2124))
{var and__3574__auto____2125 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2125))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2125;
}
} else
{return and__3574__auto____2124;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2130 = (function (x){
return true;
});
var distinct_QMARK___2131 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2132 = (function() { 
var G__2134__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2126 = cljs.core.set([y,x]);
var xs__2127 = more;

while(true){
var x__2128 = cljs.core.first.call(null,xs__2127);
var etc__2129 = cljs.core.next.call(null,xs__2127);

if(cljs.core.truth_(xs__2127))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2126,x__2128)))
{return false;
} else
{{
var G__2135 = cljs.core.conj.call(null,s__2126,x__2128);
var G__2136 = etc__2129;
s__2126 = G__2135;
xs__2127 = G__2136;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2134 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2134__delegate.call(this, x, y, more);
};
G__2134.cljs$lang$maxFixedArity = 2;
G__2134.cljs$lang$applyTo = (function (arglist__2137){
var x = cljs.core.first(arglist__2137);
var y = cljs.core.first(cljs.core.next(arglist__2137));
var more = cljs.core.rest(cljs.core.next(arglist__2137));
return G__2134__delegate.call(this, x, y, more);
});
return G__2134;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2130.call(this,x);
case  2 :
return distinct_QMARK___2131.call(this,x,y);
default:
return distinct_QMARK___2132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2132.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2138 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2138)))
{return r__2138;
} else
{if(cljs.core.truth_(r__2138))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2140 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2141 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2139 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2139,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2139);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2140.call(this,comp);
case  2 :
return sort__2141.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2143 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2144 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2143.call(this,keyfn,comp);
case  3 :
return sort_by__2144.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2146 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2147 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2146.call(this,f,val);
case  3 :
return reduce__2147.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2153 = (function (f,coll){
var temp__3723__auto____2149 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2149))
{var s__2150 = temp__3723__auto____2149;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2150),cljs.core.next.call(null,s__2150));
} else
{return f.call(null);
}
});
var seq_reduce__2154 = (function (f,val,coll){
var val__2151 = val;
var coll__2152 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2152))
{{
var G__2156 = f.call(null,val__2151,cljs.core.first.call(null,coll__2152));
var G__2157 = cljs.core.next.call(null,coll__2152);
val__2151 = G__2156;
coll__2152 = G__2157;
continue;
}
} else
{return val__2151;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2153.call(this,f,val);
case  3 :
return seq_reduce__2154.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2158 = null;
var G__2158__2159 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2158__2160 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2158 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2158__2159.call(this,coll,f);
case  3 :
return G__2158__2160.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2158;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2162 = (function (){
return 0;
});
var _PLUS___2163 = (function (x){
return x;
});
var _PLUS___2164 = (function (x,y){
return (x + y);
});
var _PLUS___2165 = (function() { 
var G__2167__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2167 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2167__delegate.call(this, x, y, more);
};
G__2167.cljs$lang$maxFixedArity = 2;
G__2167.cljs$lang$applyTo = (function (arglist__2168){
var x = cljs.core.first(arglist__2168);
var y = cljs.core.first(cljs.core.next(arglist__2168));
var more = cljs.core.rest(cljs.core.next(arglist__2168));
return G__2167__delegate.call(this, x, y, more);
});
return G__2167;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2162.call(this);
case  1 :
return _PLUS___2163.call(this,x);
case  2 :
return _PLUS___2164.call(this,x,y);
default:
return _PLUS___2165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2165.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2169 = (function (x){
return (- x);
});
var ___2170 = (function (x,y){
return (x - y);
});
var ___2171 = (function() { 
var G__2173__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2173 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2173__delegate.call(this, x, y, more);
};
G__2173.cljs$lang$maxFixedArity = 2;
G__2173.cljs$lang$applyTo = (function (arglist__2174){
var x = cljs.core.first(arglist__2174);
var y = cljs.core.first(cljs.core.next(arglist__2174));
var more = cljs.core.rest(cljs.core.next(arglist__2174));
return G__2173__delegate.call(this, x, y, more);
});
return G__2173;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2169.call(this,x);
case  2 :
return ___2170.call(this,x,y);
default:
return ___2171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2171.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2175 = (function (){
return 1;
});
var _STAR___2176 = (function (x){
return x;
});
var _STAR___2177 = (function (x,y){
return (x * y);
});
var _STAR___2178 = (function() { 
var G__2180__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2180 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2180__delegate.call(this, x, y, more);
};
G__2180.cljs$lang$maxFixedArity = 2;
G__2180.cljs$lang$applyTo = (function (arglist__2181){
var x = cljs.core.first(arglist__2181);
var y = cljs.core.first(cljs.core.next(arglist__2181));
var more = cljs.core.rest(cljs.core.next(arglist__2181));
return G__2180__delegate.call(this, x, y, more);
});
return G__2180;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2175.call(this);
case  1 :
return _STAR___2176.call(this,x);
case  2 :
return _STAR___2177.call(this,x,y);
default:
return _STAR___2178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2178.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2182 = (function (x){
return (1 / x);
});
var _SLASH___2183 = (function (x,y){
return (x / y);
});
var _SLASH___2184 = (function() { 
var G__2186__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2186 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2186__delegate.call(this, x, y, more);
};
G__2186.cljs$lang$maxFixedArity = 2;
G__2186.cljs$lang$applyTo = (function (arglist__2187){
var x = cljs.core.first(arglist__2187);
var y = cljs.core.first(cljs.core.next(arglist__2187));
var more = cljs.core.rest(cljs.core.next(arglist__2187));
return G__2186__delegate.call(this, x, y, more);
});
return G__2186;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2182.call(this,x);
case  2 :
return _SLASH___2183.call(this,x,y);
default:
return _SLASH___2184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2184.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2188 = (function (x){
return true;
});
var _LT___2189 = (function (x,y){
return (x < y);
});
var _LT___2190 = (function() { 
var G__2192__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2193 = y;
var G__2194 = cljs.core.first.call(null,more);
var G__2195 = cljs.core.next.call(null,more);
x = G__2193;
y = G__2194;
more = G__2195;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2192 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2192__delegate.call(this, x, y, more);
};
G__2192.cljs$lang$maxFixedArity = 2;
G__2192.cljs$lang$applyTo = (function (arglist__2196){
var x = cljs.core.first(arglist__2196);
var y = cljs.core.first(cljs.core.next(arglist__2196));
var more = cljs.core.rest(cljs.core.next(arglist__2196));
return G__2192__delegate.call(this, x, y, more);
});
return G__2192;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2188.call(this,x);
case  2 :
return _LT___2189.call(this,x,y);
default:
return _LT___2190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2190.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2197 = (function (x){
return true;
});
var _LT__EQ___2198 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2199 = (function() { 
var G__2201__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2202 = y;
var G__2203 = cljs.core.first.call(null,more);
var G__2204 = cljs.core.next.call(null,more);
x = G__2202;
y = G__2203;
more = G__2204;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2201 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2201__delegate.call(this, x, y, more);
};
G__2201.cljs$lang$maxFixedArity = 2;
G__2201.cljs$lang$applyTo = (function (arglist__2205){
var x = cljs.core.first(arglist__2205);
var y = cljs.core.first(cljs.core.next(arglist__2205));
var more = cljs.core.rest(cljs.core.next(arglist__2205));
return G__2201__delegate.call(this, x, y, more);
});
return G__2201;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2197.call(this,x);
case  2 :
return _LT__EQ___2198.call(this,x,y);
default:
return _LT__EQ___2199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2199.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2206 = (function (x){
return true;
});
var _GT___2207 = (function (x,y){
return (x > y);
});
var _GT___2208 = (function() { 
var G__2210__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2211 = y;
var G__2212 = cljs.core.first.call(null,more);
var G__2213 = cljs.core.next.call(null,more);
x = G__2211;
y = G__2212;
more = G__2213;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2210__delegate.call(this, x, y, more);
};
G__2210.cljs$lang$maxFixedArity = 2;
G__2210.cljs$lang$applyTo = (function (arglist__2214){
var x = cljs.core.first(arglist__2214);
var y = cljs.core.first(cljs.core.next(arglist__2214));
var more = cljs.core.rest(cljs.core.next(arglist__2214));
return G__2210__delegate.call(this, x, y, more);
});
return G__2210;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2206.call(this,x);
case  2 :
return _GT___2207.call(this,x,y);
default:
return _GT___2208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2208.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2215 = (function (x){
return true;
});
var _GT__EQ___2216 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2217 = (function() { 
var G__2219__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2220 = y;
var G__2221 = cljs.core.first.call(null,more);
var G__2222 = cljs.core.next.call(null,more);
x = G__2220;
y = G__2221;
more = G__2222;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2219 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2219__delegate.call(this, x, y, more);
};
G__2219.cljs$lang$maxFixedArity = 2;
G__2219.cljs$lang$applyTo = (function (arglist__2223){
var x = cljs.core.first(arglist__2223);
var y = cljs.core.first(cljs.core.next(arglist__2223));
var more = cljs.core.rest(cljs.core.next(arglist__2223));
return G__2219__delegate.call(this, x, y, more);
});
return G__2219;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2215.call(this,x);
case  2 :
return _GT__EQ___2216.call(this,x,y);
default:
return _GT__EQ___2217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2217.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2224 = (function (x){
return x;
});
var max__2225 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2226 = (function() { 
var G__2228__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2228 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2228__delegate.call(this, x, y, more);
};
G__2228.cljs$lang$maxFixedArity = 2;
G__2228.cljs$lang$applyTo = (function (arglist__2229){
var x = cljs.core.first(arglist__2229);
var y = cljs.core.first(cljs.core.next(arglist__2229));
var more = cljs.core.rest(cljs.core.next(arglist__2229));
return G__2228__delegate.call(this, x, y, more);
});
return G__2228;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2224.call(this,x);
case  2 :
return max__2225.call(this,x,y);
default:
return max__2226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2226.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2230 = (function (x){
return x;
});
var min__2231 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2232 = (function() { 
var G__2234__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2234 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2234__delegate.call(this, x, y, more);
};
G__2234.cljs$lang$maxFixedArity = 2;
G__2234.cljs$lang$applyTo = (function (arglist__2235){
var x = cljs.core.first(arglist__2235);
var y = cljs.core.first(cljs.core.next(arglist__2235));
var more = cljs.core.rest(cljs.core.next(arglist__2235));
return G__2234__delegate.call(this, x, y, more);
});
return G__2234;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2230.call(this,x);
case  2 :
return min__2231.call(this,x,y);
default:
return min__2232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2232.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2236 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2236) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2237 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2237));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2238 = (function (){
return Math.random.call(null);
});
var rand__2239 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2238.call(this);
case  1 :
return rand__2239.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2241 = (function (x){
return true;
});
var _EQ__EQ___2242 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2243 = (function() { 
var G__2245__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2246 = y;
var G__2247 = cljs.core.first.call(null,more);
var G__2248 = cljs.core.next.call(null,more);
x = G__2246;
y = G__2247;
more = G__2248;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2245__delegate.call(this, x, y, more);
};
G__2245.cljs$lang$maxFixedArity = 2;
G__2245.cljs$lang$applyTo = (function (arglist__2249){
var x = cljs.core.first(arglist__2249);
var y = cljs.core.first(cljs.core.next(arglist__2249));
var more = cljs.core.rest(cljs.core.next(arglist__2249));
return G__2245__delegate.call(this, x, y, more);
});
return G__2245;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2241.call(this,x);
case  2 :
return _EQ__EQ___2242.call(this,x,y);
default:
return _EQ__EQ___2243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2243.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2250 = n;
var xs__2251 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2252 = xs__2251;

if(cljs.core.truth_(and__3574__auto____2252))
{return cljs.core.pos_QMARK_.call(null,n__2250);
} else
{return and__3574__auto____2252;
}
})()))
{{
var G__2253 = cljs.core.dec.call(null,n__2250);
var G__2254 = cljs.core.next.call(null,xs__2251);
n__2250 = G__2253;
xs__2251 = G__2254;
continue;
}
} else
{return xs__2251;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2259 = null;
var G__2259__2260 = (function (coll,n){
var temp__3723__auto____2255 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2255))
{var xs__2256 = temp__3723__auto____2255;

return cljs.core.first.call(null,xs__2256);
} else
{throw "Index out of bounds";
}
});
var G__2259__2261 = (function (coll,n,not_found){
var temp__3723__auto____2257 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2257))
{var xs__2258 = temp__3723__auto____2257;

return cljs.core.first.call(null,xs__2258);
} else
{return not_found;
}
});
G__2259 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2259__2260.call(this,coll,n);
case  3 :
return G__2259__2261.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2259;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2263 = (function (){
return "";
});
var str__2264 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2265 = (function() { 
var G__2267__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2268 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2269 = cljs.core.next.call(null,more);
sb = G__2268;
more = G__2269;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2267 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2267__delegate.call(this, x, ys);
};
G__2267.cljs$lang$maxFixedArity = 1;
G__2267.cljs$lang$applyTo = (function (arglist__2270){
var x = cljs.core.first(arglist__2270);
var ys = cljs.core.rest(arglist__2270);
return G__2267__delegate.call(this, x, ys);
});
return G__2267;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2263.call(this);
case  1 :
return str__2264.call(this,x);
default:
return str__2265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2265.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2271 = (function (s,start){
return s.substring(start);
});
var subs__2272 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2271.call(this,s,start);
case  3 :
return subs__2272.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2274 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2275 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2274.call(this,ns);
case  2 :
return symbol__2275.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2277 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2278 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2277.call(this,ns);
case  2 :
return keyword__2278.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2280 = cljs.core.seq.call(null,x);
var ys__2281 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2280)))
{return cljs.core.nil_QMARK_.call(null,ys__2281);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2281)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2280),cljs.core.first.call(null,ys__2281))))
{{
var G__2282 = cljs.core.next.call(null,xs__2280);
var G__2283 = cljs.core.next.call(null,ys__2281);
xs__2280 = G__2282;
ys__2281 = G__2283;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2284_SHARP_,p2__2285_SHARP_){
return cljs.core.hash_combine.call(null,p1__2284_SHARP_,cljs.core.hash.call(null,p2__2285_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2286 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2287 = this;
return (new cljs.core.List(this__2287.meta,o,coll,cljs.core.inc.call(null,this__2287.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2288 = this;
return this__2288.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2289 = this;
return this__2289.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2290 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2291 = this;
return this__2291.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2292 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2293 = this;
return (new cljs.core.List(meta,this__2293.first,this__2293.rest,this__2293.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2294 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2295 = this;
return this__2295.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2296 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2297 = this;
return this__2297.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2299 = this;
return (new cljs.core.List(this__2299.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2300 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2301 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2302 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2303 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2304 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2305 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2306 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2307 = this;
return this__2307.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2308 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2309 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2310){
var items = cljs.core.seq( arglist__2310 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2311 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2312 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2314 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2314.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2315 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2316 = this;
return this__2316.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2317 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2317.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2317.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2318 = this;
return this__2318.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2319 = this;
return (new cljs.core.Cons(meta,this__2319.first,this__2319.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2320 = null;
var G__2320__2321 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2320__2322 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2320 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2320__2321.call(this,string,f);
case  3 :
return G__2320__2322.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2320;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2324 = null;
var G__2324__2325 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2324__2326 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2324 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2324__2325.call(this,string,k);
case  3 :
return G__2324__2326.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2324;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2328 = null;
var G__2328__2329 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2328__2330 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2328 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2328__2329.call(this,string,n);
case  3 :
return G__2328__2330.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2328;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2332 = null;
var G__2332__2333 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2332__2334 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2332 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2332__2333.call(this,_,coll);
case  3 :
return G__2332__2334.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2332;
})()
;
goog.global['String']['prototype']['apply'] = (function (_,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return this.call(null,(args[0]));
} else
{return this.call(null,(args[0]),(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2336 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2336;
} else
{lazy_seq.x = x__2336.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2337 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2338 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2339 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2340 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2340.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2341 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2342 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2343 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2344 = this;
return this__2344.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2345 = this;
return (new cljs.core.LazySeq(meta,this__2345.realized,this__2345.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2346 = cljs.core.array.call(null);

var s__2347 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2347)))
{ary__2346.push(cljs.core.first.call(null,s__2347));
{
var G__2348 = cljs.core.next.call(null,s__2347);
s__2347 = G__2348;
continue;
}
} else
{return ary__2346;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2349 = s;
var i__2350 = n;
var sum__2351 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2352 = cljs.core.pos_QMARK_.call(null,i__2350);

if(cljs.core.truth_(and__3574__auto____2352))
{return cljs.core.seq.call(null,s__2349);
} else
{return and__3574__auto____2352;
}
})()))
{{
var G__2353 = cljs.core.next.call(null,s__2349);
var G__2354 = cljs.core.dec.call(null,i__2350);
var G__2355 = cljs.core.inc.call(null,sum__2351);
s__2349 = G__2353;
i__2350 = G__2354;
sum__2351 = G__2355;
continue;
}
} else
{return sum__2351;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2359 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2360 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2361 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2356 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2356))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2356),concat.call(null,cljs.core.rest.call(null,s__2356),y));
} else
{return y;
}
})));
});
var concat__2362 = (function() { 
var G__2364__delegate = function (x,y,zs){
var cat__2358 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2357 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2357))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2357),cat.call(null,cljs.core.rest.call(null,xys__2357),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2358.call(null,concat.call(null,x,y),zs);
};
var G__2364 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2364__delegate.call(this, x, y, zs);
};
G__2364.cljs$lang$maxFixedArity = 2;
G__2364.cljs$lang$applyTo = (function (arglist__2365){
var x = cljs.core.first(arglist__2365);
var y = cljs.core.first(cljs.core.next(arglist__2365));
var zs = cljs.core.rest(cljs.core.next(arglist__2365));
return G__2364__delegate.call(this, x, y, zs);
});
return G__2364;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2359.call(this);
case  1 :
return concat__2360.call(this,x);
case  2 :
return concat__2361.call(this,x,y);
default:
return concat__2362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2362.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2366 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2367 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2368 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2369 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2370 = (function() { 
var G__2372__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2372 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2372__delegate.call(this, a, b, c, d, more);
};
G__2372.cljs$lang$maxFixedArity = 4;
G__2372.cljs$lang$applyTo = (function (arglist__2373){
var a = cljs.core.first(arglist__2373);
var b = cljs.core.first(cljs.core.next(arglist__2373));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2373)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2373))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2373))));
return G__2372__delegate.call(this, a, b, c, d, more);
});
return G__2372;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2366.call(this,a);
case  2 :
return list_STAR___2367.call(this,a,b);
case  3 :
return list_STAR___2368.call(this,a,b,c);
case  4 :
return list_STAR___2369.call(this,a,b,c,d);
default:
return list_STAR___2370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2370.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2383 = (function (f,args){
var fixed_arity__2374 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2374)),fixed_arity__2374)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2384 = (function (f,x,args){
var arglist__2375 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2376 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2375,fixed_arity__2376),fixed_arity__2376)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2375));
} else
{return f.cljs$lang$applyTo(arglist__2375);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2375));
}
});
var apply__2385 = (function (f,x,y,args){
var arglist__2377 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2378 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2377,fixed_arity__2378),fixed_arity__2378)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2377));
} else
{return f.cljs$lang$applyTo(arglist__2377);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2377));
}
});
var apply__2386 = (function (f,x,y,z,args){
var arglist__2379 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2380 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2379,fixed_arity__2380),fixed_arity__2380)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2379));
} else
{return f.cljs$lang$applyTo(arglist__2379);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2379));
}
});
var apply__2387 = (function() { 
var G__2389__delegate = function (f,a,b,c,d,args){
var arglist__2381 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2382 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2381,fixed_arity__2382),fixed_arity__2382)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2381));
} else
{return f.cljs$lang$applyTo(arglist__2381);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2381));
}
};
var G__2389 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2389__delegate.call(this, f, a, b, c, d, args);
};
G__2389.cljs$lang$maxFixedArity = 5;
G__2389.cljs$lang$applyTo = (function (arglist__2390){
var f = cljs.core.first(arglist__2390);
var a = cljs.core.first(cljs.core.next(arglist__2390));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2390)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2390))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2390)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2390)))));
return G__2389__delegate.call(this, f, a, b, c, d, args);
});
return G__2389;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2383.call(this,f,a);
case  3 :
return apply__2384.call(this,f,a,b);
case  4 :
return apply__2385.call(this,f,a,b,c);
case  5 :
return apply__2386.call(this,f,a,b,c,d);
default:
return apply__2387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2387.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2391){
var obj = cljs.core.first(arglist__2391);
var f = cljs.core.first(cljs.core.next(arglist__2391));
var args = cljs.core.rest(cljs.core.next(arglist__2391));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2392 = (function (x){
return false;
});
var not_EQ___2393 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2394 = (function() { 
var G__2396__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2396__delegate.call(this, x, y, more);
};
G__2396.cljs$lang$maxFixedArity = 2;
G__2396.cljs$lang$applyTo = (function (arglist__2397){
var x = cljs.core.first(arglist__2397);
var y = cljs.core.first(cljs.core.next(arglist__2397));
var more = cljs.core.rest(cljs.core.next(arglist__2397));
return G__2396__delegate.call(this, x, y, more);
});
return G__2396;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2392.call(this,x);
case  2 :
return not_EQ___2393.call(this,x,y);
default:
return not_EQ___2394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2394.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2398 = pred;
var G__2399 = cljs.core.next.call(null,coll);
pred = G__2398;
coll = G__2399;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2400 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2400))
{return or__3576__auto____2400;
} else
{{
var G__2401 = pred;
var G__2402 = cljs.core.next.call(null,coll);
pred = G__2401;
coll = G__2402;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2403 = null;
var G__2403__2404 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2403__2405 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2403__2406 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2403__2407 = (function() { 
var G__2409__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2409 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2409__delegate.call(this, x, y, zs);
};
G__2409.cljs$lang$maxFixedArity = 2;
G__2409.cljs$lang$applyTo = (function (arglist__2410){
var x = cljs.core.first(arglist__2410);
var y = cljs.core.first(cljs.core.next(arglist__2410));
var zs = cljs.core.rest(cljs.core.next(arglist__2410));
return G__2409__delegate.call(this, x, y, zs);
});
return G__2409;
})()
;
G__2403 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2403__2404.call(this);
case  1 :
return G__2403__2405.call(this,x);
case  2 :
return G__2403__2406.call(this,x,y);
default:
return G__2403__2407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2403.cljs$lang$maxFixedArity = 2;
G__2403.cljs$lang$applyTo = G__2403__2407.cljs$lang$applyTo;
return G__2403;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2411__delegate = function (args){
return x;
};
var G__2411 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2411__delegate.call(this, args);
};
G__2411.cljs$lang$maxFixedArity = 0;
G__2411.cljs$lang$applyTo = (function (arglist__2412){
var args = cljs.core.seq( arglist__2412 );;
return G__2411__delegate.call(this, args);
});
return G__2411;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2416 = (function (){
return cljs.core.identity;
});
var comp__2417 = (function (f){
return f;
});
var comp__2418 = (function (f,g){
return (function() {
var G__2422 = null;
var G__2422__2423 = (function (){
return f.call(null,g.call(null));
});
var G__2422__2424 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2422__2425 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2422__2426 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2422__2427 = (function() { 
var G__2429__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2429 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2429__delegate.call(this, x, y, z, args);
};
G__2429.cljs$lang$maxFixedArity = 3;
G__2429.cljs$lang$applyTo = (function (arglist__2430){
var x = cljs.core.first(arglist__2430);
var y = cljs.core.first(cljs.core.next(arglist__2430));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2430)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2430)));
return G__2429__delegate.call(this, x, y, z, args);
});
return G__2429;
})()
;
G__2422 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2422__2423.call(this);
case  1 :
return G__2422__2424.call(this,x);
case  2 :
return G__2422__2425.call(this,x,y);
case  3 :
return G__2422__2426.call(this,x,y,z);
default:
return G__2422__2427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2422.cljs$lang$maxFixedArity = 3;
G__2422.cljs$lang$applyTo = G__2422__2427.cljs$lang$applyTo;
return G__2422;
})()
});
var comp__2419 = (function (f,g,h){
return (function() {
var G__2431 = null;
var G__2431__2432 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2431__2433 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2431__2434 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2431__2435 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2431__2436 = (function() { 
var G__2438__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2438 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2438__delegate.call(this, x, y, z, args);
};
G__2438.cljs$lang$maxFixedArity = 3;
G__2438.cljs$lang$applyTo = (function (arglist__2439){
var x = cljs.core.first(arglist__2439);
var y = cljs.core.first(cljs.core.next(arglist__2439));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2439)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2439)));
return G__2438__delegate.call(this, x, y, z, args);
});
return G__2438;
})()
;
G__2431 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2431__2432.call(this);
case  1 :
return G__2431__2433.call(this,x);
case  2 :
return G__2431__2434.call(this,x,y);
case  3 :
return G__2431__2435.call(this,x,y,z);
default:
return G__2431__2436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2431.cljs$lang$maxFixedArity = 3;
G__2431.cljs$lang$applyTo = G__2431__2436.cljs$lang$applyTo;
return G__2431;
})()
});
var comp__2420 = (function() { 
var G__2440__delegate = function (f1,f2,f3,fs){
var fs__2413 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2441__delegate = function (args){
var ret__2414 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2413),args);
var fs__2415 = cljs.core.next.call(null,fs__2413);

while(true){
if(cljs.core.truth_(fs__2415))
{{
var G__2442 = cljs.core.first.call(null,fs__2415).call(null,ret__2414);
var G__2443 = cljs.core.next.call(null,fs__2415);
ret__2414 = G__2442;
fs__2415 = G__2443;
continue;
}
} else
{return ret__2414;
}
break;
}
};
var G__2441 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2441__delegate.call(this, args);
};
G__2441.cljs$lang$maxFixedArity = 0;
G__2441.cljs$lang$applyTo = (function (arglist__2444){
var args = cljs.core.seq( arglist__2444 );;
return G__2441__delegate.call(this, args);
});
return G__2441;
})()
;
};
var G__2440 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2440__delegate.call(this, f1, f2, f3, fs);
};
G__2440.cljs$lang$maxFixedArity = 3;
G__2440.cljs$lang$applyTo = (function (arglist__2445){
var f1 = cljs.core.first(arglist__2445);
var f2 = cljs.core.first(cljs.core.next(arglist__2445));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2445)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2445)));
return G__2440__delegate.call(this, f1, f2, f3, fs);
});
return G__2440;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2416.call(this);
case  1 :
return comp__2417.call(this,f1);
case  2 :
return comp__2418.call(this,f1,f2);
case  3 :
return comp__2419.call(this,f1,f2,f3);
default:
return comp__2420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2420.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2446 = (function (f,arg1){
return (function() { 
var G__2451__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2451 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2451__delegate.call(this, args);
};
G__2451.cljs$lang$maxFixedArity = 0;
G__2451.cljs$lang$applyTo = (function (arglist__2452){
var args = cljs.core.seq( arglist__2452 );;
return G__2451__delegate.call(this, args);
});
return G__2451;
})()
;
});
var partial__2447 = (function (f,arg1,arg2){
return (function() { 
var G__2453__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2453 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2453__delegate.call(this, args);
};
G__2453.cljs$lang$maxFixedArity = 0;
G__2453.cljs$lang$applyTo = (function (arglist__2454){
var args = cljs.core.seq( arglist__2454 );;
return G__2453__delegate.call(this, args);
});
return G__2453;
})()
;
});
var partial__2448 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2455__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2455 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2455__delegate.call(this, args);
};
G__2455.cljs$lang$maxFixedArity = 0;
G__2455.cljs$lang$applyTo = (function (arglist__2456){
var args = cljs.core.seq( arglist__2456 );;
return G__2455__delegate.call(this, args);
});
return G__2455;
})()
;
});
var partial__2449 = (function() { 
var G__2457__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2458__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2458 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2458__delegate.call(this, args);
};
G__2458.cljs$lang$maxFixedArity = 0;
G__2458.cljs$lang$applyTo = (function (arglist__2459){
var args = cljs.core.seq( arglist__2459 );;
return G__2458__delegate.call(this, args);
});
return G__2458;
})()
;
};
var G__2457 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2457__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2457.cljs$lang$maxFixedArity = 4;
G__2457.cljs$lang$applyTo = (function (arglist__2460){
var f = cljs.core.first(arglist__2460);
var arg1 = cljs.core.first(cljs.core.next(arglist__2460));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2460)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2460))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2460))));
return G__2457__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2457;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2446.call(this,f,arg1);
case  3 :
return partial__2447.call(this,f,arg1,arg2);
case  4 :
return partial__2448.call(this,f,arg1,arg2,arg3);
default:
return partial__2449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2449.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2461 = (function (f,x){
return (function() {
var G__2465 = null;
var G__2465__2466 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2465__2467 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2465__2468 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2465__2469 = (function() { 
var G__2471__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2471 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2471__delegate.call(this, a, b, c, ds);
};
G__2471.cljs$lang$maxFixedArity = 3;
G__2471.cljs$lang$applyTo = (function (arglist__2472){
var a = cljs.core.first(arglist__2472);
var b = cljs.core.first(cljs.core.next(arglist__2472));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2472)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2472)));
return G__2471__delegate.call(this, a, b, c, ds);
});
return G__2471;
})()
;
G__2465 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2465__2466.call(this,a);
case  2 :
return G__2465__2467.call(this,a,b);
case  3 :
return G__2465__2468.call(this,a,b,c);
default:
return G__2465__2469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2465.cljs$lang$maxFixedArity = 3;
G__2465.cljs$lang$applyTo = G__2465__2469.cljs$lang$applyTo;
return G__2465;
})()
});
var fnil__2462 = (function (f,x,y){
return (function() {
var G__2473 = null;
var G__2473__2474 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2473__2475 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2473__2476 = (function() { 
var G__2478__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2478 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2478__delegate.call(this, a, b, c, ds);
};
G__2478.cljs$lang$maxFixedArity = 3;
G__2478.cljs$lang$applyTo = (function (arglist__2479){
var a = cljs.core.first(arglist__2479);
var b = cljs.core.first(cljs.core.next(arglist__2479));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2479)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2479)));
return G__2478__delegate.call(this, a, b, c, ds);
});
return G__2478;
})()
;
G__2473 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2473__2474.call(this,a,b);
case  3 :
return G__2473__2475.call(this,a,b,c);
default:
return G__2473__2476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2473.cljs$lang$maxFixedArity = 3;
G__2473.cljs$lang$applyTo = G__2473__2476.cljs$lang$applyTo;
return G__2473;
})()
});
var fnil__2463 = (function (f,x,y,z){
return (function() {
var G__2480 = null;
var G__2480__2481 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2480__2482 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2480__2483 = (function() { 
var G__2485__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2485 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2485__delegate.call(this, a, b, c, ds);
};
G__2485.cljs$lang$maxFixedArity = 3;
G__2485.cljs$lang$applyTo = (function (arglist__2486){
var a = cljs.core.first(arglist__2486);
var b = cljs.core.first(cljs.core.next(arglist__2486));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2486)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2486)));
return G__2485__delegate.call(this, a, b, c, ds);
});
return G__2485;
})()
;
G__2480 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2480__2481.call(this,a,b);
case  3 :
return G__2480__2482.call(this,a,b,c);
default:
return G__2480__2483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2480.cljs$lang$maxFixedArity = 3;
G__2480.cljs$lang$applyTo = G__2480__2483.cljs$lang$applyTo;
return G__2480;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2461.call(this,f,x);
case  3 :
return fnil__2462.call(this,f,x,y);
case  4 :
return fnil__2463.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2489 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2487 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2487))
{var s__2488 = temp__3726__auto____2487;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2488)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2488)));
} else
{return null;
}
})));
});

return mapi__2489.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2490 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2490))
{var s__2491 = temp__3726__auto____2490;

var x__2492 = f.call(null,cljs.core.first.call(null,s__2491));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2492)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2491));
} else
{return cljs.core.cons.call(null,x__2492,keep.call(null,f,cljs.core.rest.call(null,s__2491)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2502 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2499 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2499))
{var s__2500 = temp__3726__auto____2499;

var x__2501 = f.call(null,idx,cljs.core.first.call(null,s__2500));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2501)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2500));
} else
{return cljs.core.cons.call(null,x__2501,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2500)));
}
} else
{return null;
}
})));
});

return keepi__2502.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2547 = (function (p){
return (function() {
var ep1 = null;
var ep1__2552 = (function (){
return true;
});
var ep1__2553 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2554 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2509 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2509))
{return p.call(null,y);
} else
{return and__3574__auto____2509;
}
})());
});
var ep1__2555 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2510 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2510))
{var and__3574__auto____2511 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2511))
{return p.call(null,z);
} else
{return and__3574__auto____2511;
}
} else
{return and__3574__auto____2510;
}
})());
});
var ep1__2556 = (function() { 
var G__2558__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2512 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2512))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2512;
}
})());
};
var G__2558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2558__delegate.call(this, x, y, z, args);
};
G__2558.cljs$lang$maxFixedArity = 3;
G__2558.cljs$lang$applyTo = (function (arglist__2559){
var x = cljs.core.first(arglist__2559);
var y = cljs.core.first(cljs.core.next(arglist__2559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2559)));
return G__2558__delegate.call(this, x, y, z, args);
});
return G__2558;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2552.call(this);
case  1 :
return ep1__2553.call(this,x);
case  2 :
return ep1__2554.call(this,x,y);
case  3 :
return ep1__2555.call(this,x,y,z);
default:
return ep1__2556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2556.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2548 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2560 = (function (){
return true;
});
var ep2__2561 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2513 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2513))
{return p2.call(null,x);
} else
{return and__3574__auto____2513;
}
})());
});
var ep2__2562 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2514 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2514))
{var and__3574__auto____2515 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2515))
{var and__3574__auto____2516 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2516))
{return p2.call(null,y);
} else
{return and__3574__auto____2516;
}
} else
{return and__3574__auto____2515;
}
} else
{return and__3574__auto____2514;
}
})());
});
var ep2__2563 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2517 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2517))
{var and__3574__auto____2518 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2518))
{var and__3574__auto____2519 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2519))
{var and__3574__auto____2520 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2520))
{var and__3574__auto____2521 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2521))
{return p2.call(null,z);
} else
{return and__3574__auto____2521;
}
} else
{return and__3574__auto____2520;
}
} else
{return and__3574__auto____2519;
}
} else
{return and__3574__auto____2518;
}
} else
{return and__3574__auto____2517;
}
})());
});
var ep2__2564 = (function() { 
var G__2566__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2522 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2522))
{return cljs.core.every_QMARK_.call(null,(function (p1__2493_SHARP_){
var and__3574__auto____2523 = p1.call(null,p1__2493_SHARP_);

if(cljs.core.truth_(and__3574__auto____2523))
{return p2.call(null,p1__2493_SHARP_);
} else
{return and__3574__auto____2523;
}
}),args);
} else
{return and__3574__auto____2522;
}
})());
};
var G__2566 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2566__delegate.call(this, x, y, z, args);
};
G__2566.cljs$lang$maxFixedArity = 3;
G__2566.cljs$lang$applyTo = (function (arglist__2567){
var x = cljs.core.first(arglist__2567);
var y = cljs.core.first(cljs.core.next(arglist__2567));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2567)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2567)));
return G__2566__delegate.call(this, x, y, z, args);
});
return G__2566;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2560.call(this);
case  1 :
return ep2__2561.call(this,x);
case  2 :
return ep2__2562.call(this,x,y);
case  3 :
return ep2__2563.call(this,x,y,z);
default:
return ep2__2564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2564.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2549 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2568 = (function (){
return true;
});
var ep3__2569 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2524 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2524))
{var and__3574__auto____2525 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2525))
{return p3.call(null,x);
} else
{return and__3574__auto____2525;
}
} else
{return and__3574__auto____2524;
}
})());
});
var ep3__2570 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2526 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2526))
{var and__3574__auto____2527 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2527))
{var and__3574__auto____2528 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2528))
{var and__3574__auto____2529 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2529))
{var and__3574__auto____2530 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2530))
{return p3.call(null,y);
} else
{return and__3574__auto____2530;
}
} else
{return and__3574__auto____2529;
}
} else
{return and__3574__auto____2528;
}
} else
{return and__3574__auto____2527;
}
} else
{return and__3574__auto____2526;
}
})());
});
var ep3__2571 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2531 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2531))
{var and__3574__auto____2532 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2532))
{var and__3574__auto____2533 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2533))
{var and__3574__auto____2534 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2534))
{var and__3574__auto____2535 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2535))
{var and__3574__auto____2536 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2536))
{var and__3574__auto____2537 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2537))
{var and__3574__auto____2538 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2538))
{return p3.call(null,z);
} else
{return and__3574__auto____2538;
}
} else
{return and__3574__auto____2537;
}
} else
{return and__3574__auto____2536;
}
} else
{return and__3574__auto____2535;
}
} else
{return and__3574__auto____2534;
}
} else
{return and__3574__auto____2533;
}
} else
{return and__3574__auto____2532;
}
} else
{return and__3574__auto____2531;
}
})());
});
var ep3__2572 = (function() { 
var G__2574__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2539 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2539))
{return cljs.core.every_QMARK_.call(null,(function (p1__2494_SHARP_){
var and__3574__auto____2540 = p1.call(null,p1__2494_SHARP_);

if(cljs.core.truth_(and__3574__auto____2540))
{var and__3574__auto____2541 = p2.call(null,p1__2494_SHARP_);

if(cljs.core.truth_(and__3574__auto____2541))
{return p3.call(null,p1__2494_SHARP_);
} else
{return and__3574__auto____2541;
}
} else
{return and__3574__auto____2540;
}
}),args);
} else
{return and__3574__auto____2539;
}
})());
};
var G__2574 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2574__delegate.call(this, x, y, z, args);
};
G__2574.cljs$lang$maxFixedArity = 3;
G__2574.cljs$lang$applyTo = (function (arglist__2575){
var x = cljs.core.first(arglist__2575);
var y = cljs.core.first(cljs.core.next(arglist__2575));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2575)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2575)));
return G__2574__delegate.call(this, x, y, z, args);
});
return G__2574;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2568.call(this);
case  1 :
return ep3__2569.call(this,x);
case  2 :
return ep3__2570.call(this,x,y);
case  3 :
return ep3__2571.call(this,x,y,z);
default:
return ep3__2572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2572.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2550 = (function() { 
var G__2576__delegate = function (p1,p2,p3,ps){
var ps__2542 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2577 = (function (){
return true;
});
var epn__2578 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2495_SHARP_){
return p1__2495_SHARP_.call(null,x);
}),ps__2542);
});
var epn__2579 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2496_SHARP_){
var and__3574__auto____2543 = p1__2496_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2543))
{return p1__2496_SHARP_.call(null,y);
} else
{return and__3574__auto____2543;
}
}),ps__2542);
});
var epn__2580 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2497_SHARP_){
var and__3574__auto____2544 = p1__2497_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2544))
{var and__3574__auto____2545 = p1__2497_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2545))
{return p1__2497_SHARP_.call(null,z);
} else
{return and__3574__auto____2545;
}
} else
{return and__3574__auto____2544;
}
}),ps__2542);
});
var epn__2581 = (function() { 
var G__2583__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2546 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2546))
{return cljs.core.every_QMARK_.call(null,(function (p1__2498_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2498_SHARP_,args);
}),ps__2542);
} else
{return and__3574__auto____2546;
}
})());
};
var G__2583 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2583__delegate.call(this, x, y, z, args);
};
G__2583.cljs$lang$maxFixedArity = 3;
G__2583.cljs$lang$applyTo = (function (arglist__2584){
var x = cljs.core.first(arglist__2584);
var y = cljs.core.first(cljs.core.next(arglist__2584));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2584)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2584)));
return G__2583__delegate.call(this, x, y, z, args);
});
return G__2583;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2577.call(this);
case  1 :
return epn__2578.call(this,x);
case  2 :
return epn__2579.call(this,x,y);
case  3 :
return epn__2580.call(this,x,y,z);
default:
return epn__2581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2581.cljs$lang$applyTo;
return epn;
})()
};
var G__2576 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2576__delegate.call(this, p1, p2, p3, ps);
};
G__2576.cljs$lang$maxFixedArity = 3;
G__2576.cljs$lang$applyTo = (function (arglist__2585){
var p1 = cljs.core.first(arglist__2585);
var p2 = cljs.core.first(cljs.core.next(arglist__2585));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2585)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2585)));
return G__2576__delegate.call(this, p1, p2, p3, ps);
});
return G__2576;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2547.call(this,p1);
case  2 :
return every_pred__2548.call(this,p1,p2);
case  3 :
return every_pred__2549.call(this,p1,p2,p3);
default:
return every_pred__2550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2550.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2625 = (function (p){
return (function() {
var sp1 = null;
var sp1__2630 = (function (){
return null;
});
var sp1__2631 = (function (x){
return p.call(null,x);
});
var sp1__2632 = (function (x,y){
var or__3576__auto____2587 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2587))
{return or__3576__auto____2587;
} else
{return p.call(null,y);
}
});
var sp1__2633 = (function (x,y,z){
var or__3576__auto____2588 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2588))
{return or__3576__auto____2588;
} else
{var or__3576__auto____2589 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2589))
{return or__3576__auto____2589;
} else
{return p.call(null,z);
}
}
});
var sp1__2634 = (function() { 
var G__2636__delegate = function (x,y,z,args){
var or__3576__auto____2590 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2590))
{return or__3576__auto____2590;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2636 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2636__delegate.call(this, x, y, z, args);
};
G__2636.cljs$lang$maxFixedArity = 3;
G__2636.cljs$lang$applyTo = (function (arglist__2637){
var x = cljs.core.first(arglist__2637);
var y = cljs.core.first(cljs.core.next(arglist__2637));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2637)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2637)));
return G__2636__delegate.call(this, x, y, z, args);
});
return G__2636;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2630.call(this);
case  1 :
return sp1__2631.call(this,x);
case  2 :
return sp1__2632.call(this,x,y);
case  3 :
return sp1__2633.call(this,x,y,z);
default:
return sp1__2634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2634.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2626 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2638 = (function (){
return null;
});
var sp2__2639 = (function (x){
var or__3576__auto____2591 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2591))
{return or__3576__auto____2591;
} else
{return p2.call(null,x);
}
});
var sp2__2640 = (function (x,y){
var or__3576__auto____2592 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2592))
{return or__3576__auto____2592;
} else
{var or__3576__auto____2593 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2593))
{return or__3576__auto____2593;
} else
{var or__3576__auto____2594 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2594))
{return or__3576__auto____2594;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2641 = (function (x,y,z){
var or__3576__auto____2595 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2595))
{return or__3576__auto____2595;
} else
{var or__3576__auto____2596 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2596))
{return or__3576__auto____2596;
} else
{var or__3576__auto____2597 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2597))
{return or__3576__auto____2597;
} else
{var or__3576__auto____2598 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2598))
{return or__3576__auto____2598;
} else
{var or__3576__auto____2599 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2599))
{return or__3576__auto____2599;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2642 = (function() { 
var G__2644__delegate = function (x,y,z,args){
var or__3576__auto____2600 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2600))
{return or__3576__auto____2600;
} else
{return cljs.core.some.call(null,(function (p1__2503_SHARP_){
var or__3576__auto____2601 = p1.call(null,p1__2503_SHARP_);

if(cljs.core.truth_(or__3576__auto____2601))
{return or__3576__auto____2601;
} else
{return p2.call(null,p1__2503_SHARP_);
}
}),args);
}
};
var G__2644 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2644__delegate.call(this, x, y, z, args);
};
G__2644.cljs$lang$maxFixedArity = 3;
G__2644.cljs$lang$applyTo = (function (arglist__2645){
var x = cljs.core.first(arglist__2645);
var y = cljs.core.first(cljs.core.next(arglist__2645));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2645)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2645)));
return G__2644__delegate.call(this, x, y, z, args);
});
return G__2644;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2638.call(this);
case  1 :
return sp2__2639.call(this,x);
case  2 :
return sp2__2640.call(this,x,y);
case  3 :
return sp2__2641.call(this,x,y,z);
default:
return sp2__2642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2642.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2627 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2646 = (function (){
return null;
});
var sp3__2647 = (function (x){
var or__3576__auto____2602 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2602))
{return or__3576__auto____2602;
} else
{var or__3576__auto____2603 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2603))
{return or__3576__auto____2603;
} else
{return p3.call(null,x);
}
}
});
var sp3__2648 = (function (x,y){
var or__3576__auto____2604 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2604))
{return or__3576__auto____2604;
} else
{var or__3576__auto____2605 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2605))
{return or__3576__auto____2605;
} else
{var or__3576__auto____2606 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2606))
{return or__3576__auto____2606;
} else
{var or__3576__auto____2607 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2607))
{return or__3576__auto____2607;
} else
{var or__3576__auto____2608 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2608))
{return or__3576__auto____2608;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2649 = (function (x,y,z){
var or__3576__auto____2609 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2609))
{return or__3576__auto____2609;
} else
{var or__3576__auto____2610 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2610))
{return or__3576__auto____2610;
} else
{var or__3576__auto____2611 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2611))
{return or__3576__auto____2611;
} else
{var or__3576__auto____2612 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2612))
{return or__3576__auto____2612;
} else
{var or__3576__auto____2613 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2613))
{return or__3576__auto____2613;
} else
{var or__3576__auto____2614 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2614))
{return or__3576__auto____2614;
} else
{var or__3576__auto____2615 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2615))
{return or__3576__auto____2615;
} else
{var or__3576__auto____2616 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2616))
{return or__3576__auto____2616;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2650 = (function() { 
var G__2652__delegate = function (x,y,z,args){
var or__3576__auto____2617 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2617))
{return or__3576__auto____2617;
} else
{return cljs.core.some.call(null,(function (p1__2504_SHARP_){
var or__3576__auto____2618 = p1.call(null,p1__2504_SHARP_);

if(cljs.core.truth_(or__3576__auto____2618))
{return or__3576__auto____2618;
} else
{var or__3576__auto____2619 = p2.call(null,p1__2504_SHARP_);

if(cljs.core.truth_(or__3576__auto____2619))
{return or__3576__auto____2619;
} else
{return p3.call(null,p1__2504_SHARP_);
}
}
}),args);
}
};
var G__2652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2652__delegate.call(this, x, y, z, args);
};
G__2652.cljs$lang$maxFixedArity = 3;
G__2652.cljs$lang$applyTo = (function (arglist__2653){
var x = cljs.core.first(arglist__2653);
var y = cljs.core.first(cljs.core.next(arglist__2653));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2653)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2653)));
return G__2652__delegate.call(this, x, y, z, args);
});
return G__2652;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2646.call(this);
case  1 :
return sp3__2647.call(this,x);
case  2 :
return sp3__2648.call(this,x,y);
case  3 :
return sp3__2649.call(this,x,y,z);
default:
return sp3__2650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2650.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2628 = (function() { 
var G__2654__delegate = function (p1,p2,p3,ps){
var ps__2620 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2655 = (function (){
return null;
});
var spn__2656 = (function (x){
return cljs.core.some.call(null,(function (p1__2505_SHARP_){
return p1__2505_SHARP_.call(null,x);
}),ps__2620);
});
var spn__2657 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2506_SHARP_){
var or__3576__auto____2621 = p1__2506_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2621))
{return or__3576__auto____2621;
} else
{return p1__2506_SHARP_.call(null,y);
}
}),ps__2620);
});
var spn__2658 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2507_SHARP_){
var or__3576__auto____2622 = p1__2507_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2622))
{return or__3576__auto____2622;
} else
{var or__3576__auto____2623 = p1__2507_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2623))
{return or__3576__auto____2623;
} else
{return p1__2507_SHARP_.call(null,z);
}
}
}),ps__2620);
});
var spn__2659 = (function() { 
var G__2661__delegate = function (x,y,z,args){
var or__3576__auto____2624 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2624))
{return or__3576__auto____2624;
} else
{return cljs.core.some.call(null,(function (p1__2508_SHARP_){
return cljs.core.some.call(null,p1__2508_SHARP_,args);
}),ps__2620);
}
};
var G__2661 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2661__delegate.call(this, x, y, z, args);
};
G__2661.cljs$lang$maxFixedArity = 3;
G__2661.cljs$lang$applyTo = (function (arglist__2662){
var x = cljs.core.first(arglist__2662);
var y = cljs.core.first(cljs.core.next(arglist__2662));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2662)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2662)));
return G__2661__delegate.call(this, x, y, z, args);
});
return G__2661;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2655.call(this);
case  1 :
return spn__2656.call(this,x);
case  2 :
return spn__2657.call(this,x,y);
case  3 :
return spn__2658.call(this,x,y,z);
default:
return spn__2659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2659.cljs$lang$applyTo;
return spn;
})()
};
var G__2654 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2654__delegate.call(this, p1, p2, p3, ps);
};
G__2654.cljs$lang$maxFixedArity = 3;
G__2654.cljs$lang$applyTo = (function (arglist__2663){
var p1 = cljs.core.first(arglist__2663);
var p2 = cljs.core.first(cljs.core.next(arglist__2663));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2663)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2663)));
return G__2654__delegate.call(this, p1, p2, p3, ps);
});
return G__2654;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2625.call(this,p1);
case  2 :
return some_fn__2626.call(this,p1,p2);
case  3 :
return some_fn__2627.call(this,p1,p2,p3);
default:
return some_fn__2628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2628.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2676 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2664 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2664))
{var s__2665 = temp__3726__auto____2664;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2665)),map.call(null,f,cljs.core.rest.call(null,s__2665)));
} else
{return null;
}
})));
});
var map__2677 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2666 = cljs.core.seq.call(null,c1);
var s2__2667 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2668 = s1__2666;

if(cljs.core.truth_(and__3574__auto____2668))
{return s2__2667;
} else
{return and__3574__auto____2668;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2666),cljs.core.first.call(null,s2__2667)),map.call(null,f,cljs.core.rest.call(null,s1__2666),cljs.core.rest.call(null,s2__2667)));
} else
{return null;
}
})));
});
var map__2678 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2669 = cljs.core.seq.call(null,c1);
var s2__2670 = cljs.core.seq.call(null,c2);
var s3__2671 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2672 = s1__2669;

if(cljs.core.truth_(and__3574__auto____2672))
{var and__3574__auto____2673 = s2__2670;

if(cljs.core.truth_(and__3574__auto____2673))
{return s3__2671;
} else
{return and__3574__auto____2673;
}
} else
{return and__3574__auto____2672;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2669),cljs.core.first.call(null,s2__2670),cljs.core.first.call(null,s3__2671)),map.call(null,f,cljs.core.rest.call(null,s1__2669),cljs.core.rest.call(null,s2__2670),cljs.core.rest.call(null,s3__2671)));
} else
{return null;
}
})));
});
var map__2679 = (function() { 
var G__2681__delegate = function (f,c1,c2,c3,colls){
var step__2675 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2674 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2674)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2674),step.call(null,map.call(null,cljs.core.rest,ss__2674)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2586_SHARP_){
return cljs.core.apply.call(null,f,p1__2586_SHARP_);
}),step__2675.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2681 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2681__delegate.call(this, f, c1, c2, c3, colls);
};
G__2681.cljs$lang$maxFixedArity = 4;
G__2681.cljs$lang$applyTo = (function (arglist__2682){
var f = cljs.core.first(arglist__2682);
var c1 = cljs.core.first(cljs.core.next(arglist__2682));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2682)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2682))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2682))));
return G__2681__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2681;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2676.call(this,f,c1);
case  3 :
return map__2677.call(this,f,c1,c2);
case  4 :
return map__2678.call(this,f,c1,c2,c3);
default:
return map__2679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2679.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2683 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2683))
{var s__2684 = temp__3726__auto____2683;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2684),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2684)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2687 = (function (n,coll){
while(true){
var s__2685 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2686 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2686))
{return s__2685;
} else
{return and__3574__auto____2686;
}
})()))
{{
var G__2688 = cljs.core.dec.call(null,n);
var G__2689 = cljs.core.rest.call(null,s__2685);
n = G__2688;
coll = G__2689;
continue;
}
} else
{return s__2685;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2687.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2690 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2691 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2690.call(this,n);
case  2 :
return drop_last__2691.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2693 = cljs.core.seq.call(null,coll);
var lead__2694 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2694))
{{
var G__2695 = cljs.core.next.call(null,s__2693);
var G__2696 = cljs.core.next.call(null,lead__2694);
s__2693 = G__2695;
lead__2694 = G__2696;
continue;
}
} else
{return s__2693;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2699 = (function (pred,coll){
while(true){
var s__2697 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2698 = s__2697;

if(cljs.core.truth_(and__3574__auto____2698))
{return pred.call(null,cljs.core.first.call(null,s__2697));
} else
{return and__3574__auto____2698;
}
})()))
{{
var G__2700 = pred;
var G__2701 = cljs.core.rest.call(null,s__2697);
pred = G__2700;
coll = G__2701;
continue;
}
} else
{return s__2697;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2699.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2702 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2702))
{var s__2703 = temp__3726__auto____2702;

return cljs.core.concat.call(null,s__2703,cycle.call(null,s__2703));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2704 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2705 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2704.call(this,n);
case  2 :
return repeat__2705.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2707 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2708 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2707.call(this,n);
case  2 :
return repeatedly__2708.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2714 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2710 = cljs.core.seq.call(null,c1);
var s2__2711 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2712 = s1__2710;

if(cljs.core.truth_(and__3574__auto____2712))
{return s2__2711;
} else
{return and__3574__auto____2712;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2710),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2711),interleave.call(null,cljs.core.rest.call(null,s1__2710),cljs.core.rest.call(null,s2__2711))));
} else
{return null;
}
})));
});
var interleave__2715 = (function() { 
var G__2717__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2713 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2713)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2713),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2713)));
} else
{return null;
}
})));
};
var G__2717 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2717__delegate.call(this, c1, c2, colls);
};
G__2717.cljs$lang$maxFixedArity = 2;
G__2717.cljs$lang$applyTo = (function (arglist__2718){
var c1 = cljs.core.first(arglist__2718);
var c2 = cljs.core.first(cljs.core.next(arglist__2718));
var colls = cljs.core.rest(cljs.core.next(arglist__2718));
return G__2717__delegate.call(this, c1, c2, colls);
});
return G__2717;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2714.call(this,c1,c2);
default:
return interleave__2715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2715.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2721 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2719 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2719))
{var coll__2720 = temp__3723__auto____2719;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2720),cat.call(null,cljs.core.rest.call(null,coll__2720),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2721.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2722 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2723 = (function() { 
var G__2725__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2725 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2725__delegate.call(this, f, coll, colls);
};
G__2725.cljs$lang$maxFixedArity = 2;
G__2725.cljs$lang$applyTo = (function (arglist__2726){
var f = cljs.core.first(arglist__2726);
var coll = cljs.core.first(cljs.core.next(arglist__2726));
var colls = cljs.core.rest(cljs.core.next(arglist__2726));
return G__2725__delegate.call(this, f, coll, colls);
});
return G__2725;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2722.call(this,f,coll);
default:
return mapcat__2723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2723.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2727 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2727))
{var s__2728 = temp__3726__auto____2727;

var f__2729 = cljs.core.first.call(null,s__2728);
var r__2730 = cljs.core.rest.call(null,s__2728);

if(cljs.core.truth_(pred.call(null,f__2729)))
{return cljs.core.cons.call(null,f__2729,filter.call(null,pred,r__2730));
} else
{return filter.call(null,pred,r__2730);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2732 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2732.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2731_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2731_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2739 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2740 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2733))
{var s__2734 = temp__3726__auto____2733;

var p__2735 = cljs.core.take.call(null,n,s__2734);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2735))))
{return cljs.core.cons.call(null,p__2735,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2734)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2741 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2736))
{var s__2737 = temp__3726__auto____2736;

var p__2738 = cljs.core.take.call(null,n,s__2737);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2738))))
{return cljs.core.cons.call(null,p__2738,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2737)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2738,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2739.call(this,n,step);
case  3 :
return partition__2740.call(this,n,step,pad);
case  4 :
return partition__2741.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2747 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2748 = (function (m,ks,not_found){
var sentinel__2743 = cljs.core.lookup_sentinel;
var m__2744 = m;
var ks__2745 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2745))
{var m__2746 = cljs.core.get.call(null,m__2744,cljs.core.first.call(null,ks__2745),sentinel__2743);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2743,m__2746)))
{return not_found;
} else
{{
var G__2750 = sentinel__2743;
var G__2751 = m__2746;
var G__2752 = cljs.core.next.call(null,ks__2745);
sentinel__2743 = G__2750;
m__2744 = G__2751;
ks__2745 = G__2752;
continue;
}
}
} else
{return m__2744;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2747.call(this,m,ks);
case  3 :
return get_in__2748.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2753,v){
var vec__2754__2755 = p__2753;
var k__2756 = cljs.core.nth.call(null,vec__2754__2755,0,null);
var ks__2757 = cljs.core.nthnext.call(null,vec__2754__2755,1);

if(cljs.core.truth_(ks__2757))
{return cljs.core.assoc.call(null,m,k__2756,assoc_in.call(null,cljs.core.get.call(null,m,k__2756),ks__2757,v));
} else
{return cljs.core.assoc.call(null,m,k__2756,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2758,f,args){
var vec__2759__2760 = p__2758;
var k__2761 = cljs.core.nth.call(null,vec__2759__2760,0,null);
var ks__2762 = cljs.core.nthnext.call(null,vec__2759__2760,1);

if(cljs.core.truth_(ks__2762))
{return cljs.core.assoc.call(null,m,k__2761,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2761),ks__2762,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2761,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2761),args));
}
};
var update_in = function (m,p__2758,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2758, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2763){
var m = cljs.core.first(arglist__2763);
var p__2758 = cljs.core.first(cljs.core.next(arglist__2763));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2763)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2763)));
return update_in__delegate.call(this, m, p__2758, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2764 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2765 = this;
var new_array__2766 = cljs.core.aclone.call(null,this__2765.array);

new_array__2766.push(o);
return (new cljs.core.Vector(this__2765.meta,new_array__2766));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2767 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2767.array.length,0)))
{var vector_seq__2768 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2767.array.length)))
{return cljs.core.cons.call(null,(this__2767.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2768.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2769 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2770 = this;
var count__2771 = this__2770.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2771,0)))
{return (this__2770.array[cljs.core.dec.call(null,count__2771)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2772 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2772.array.length,0)))
{var new_array__2773 = cljs.core.aclone.call(null,this__2772.array);

new_array__2773.pop();
return (new cljs.core.Vector(this__2772.meta,new_array__2773));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2774 = this;
return (new cljs.core.Vector(meta,this__2774.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2775 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2775.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2789 = null;
var G__2789__2790 = (function (coll,n){
var this__2776 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2777 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2777))
{return cljs.core._LT_.call(null,n,this__2776.array.length);
} else
{return and__3574__auto____2777;
}
})()))
{return (this__2776.array[n]);
} else
{return null;
}
});
var G__2789__2791 = (function (coll,n,not_found){
var this__2778 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2779 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2779))
{return cljs.core._LT_.call(null,n,this__2778.array.length);
} else
{return and__3574__auto____2779;
}
})()))
{return (this__2778.array[n]);
} else
{return not_found;
}
});
G__2789 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2789__2790.call(this,coll,n);
case  3 :
return G__2789__2791.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2789;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2780 = this;
return this__2780.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2793 = null;
var G__2793__2794 = (function (v,f){
var this__2781 = this;
return cljs.core.ci_reduce.call(null,this__2781.array,f);
});
var G__2793__2795 = (function (v,f,start){
var this__2782 = this;
return cljs.core.ci_reduce.call(null,this__2782.array,f,start);
});
G__2793 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2793__2794.call(this,v,f);
case  3 :
return G__2793__2795.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2793;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2783 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2784 = this;
return this__2784.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2785 = this;
var new_array__2786 = cljs.core.aclone.call(null,this__2785.array);

(new_array__2786[k] = v);
return (new cljs.core.Vector(this__2785.meta,new_array__2786));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2797 = null;
var G__2797__2798 = (function (coll,k){
var this__2787 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2797__2799 = (function (coll,k,not_found){
var this__2788 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2797 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2797__2798.call(this,coll,k);
case  3 :
return G__2797__2799.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2797;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2801 = null;
var G__2801__2802 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2801__2803 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2801 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2801__2802.call(this,_,k);
case  3 :
return G__2801__2803.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2801;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2805){
var args = cljs.core.seq( arglist__2805 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2806 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2807 = array.length;

var i__2808 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2808,len__2807)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2808]))))
{return i__2808;
} else
{{
var G__2809 = cljs.core._PLUS_.call(null,i__2808,incr);
i__2808 = G__2809;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2811 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2812 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2810 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2810))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2810;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2811.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2812.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2815 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2816 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2817 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2817.keys.length)))
{return cljs.core.map.call(null,(function (p1__2814_SHARP_){
return cljs.core.vector.call(null,p1__2814_SHARP_,(this__2817.strobj[p1__2814_SHARP_]));
}),this__2817.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2818 = this;
return (new cljs.core.ObjMap(meta,this__2818.keys,this__2818.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2819 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2820 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2820))
{return this__2819.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2820;
}
})()))
{var new_keys__2821 = cljs.core.aclone.call(null,this__2819.keys);
var new_strobj__2822 = goog.object.clone.call(null,this__2819.strobj);

new_keys__2821.splice(cljs.core.scan_array.call(null,1,k,new_keys__2821),1);
cljs.core.js_delete.call(null,new_strobj__2822,k);
return (new cljs.core.ObjMap(this__2819.meta,new_keys__2821,new_strobj__2822));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2823 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2823.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2824 = this;
return this__2824.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2826 = this;
return this__2826.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2827 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2828 = goog.object.clone.call(null,this__2827.strobj);
var overwrite_QMARK___2829 = new_strobj__2828.hasOwnProperty(k);

(new_strobj__2828[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2829))
{return (new cljs.core.ObjMap(this__2827.meta,this__2827.keys,new_strobj__2828));
} else
{var new_keys__2830 = cljs.core.aclone.call(null,this__2827.keys);

new_keys__2830.push(k);
return (new cljs.core.ObjMap(this__2827.meta,new_keys__2830,new_strobj__2828));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2827.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2831 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2831.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2834 = null;
var G__2834__2835 = (function (coll,k){
var this__2832 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2834__2836 = (function (coll,k,not_found){
var this__2833 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2833.strobj,(this__2833.strobj[k]),not_found);
});
G__2834 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2834__2835.call(this,coll,k);
case  3 :
return G__2834__2836.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2834;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2839 = null;
var G__2839__2840 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2839__2841 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2839 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2839__2840.call(this,_,k);
case  3 :
return G__2839__2841.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2839;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2843 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2844 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2845 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2845.count)))
{var hashes__2846 = cljs.core.js_keys.call(null,this__2845.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2838_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2845.hashobj[p1__2838_SHARP_])));
}),hashes__2846);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2847 = this;
return (new cljs.core.HashMap(meta,this__2847.count,this__2847.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2848 = this;
var h__2849 = cljs.core.hash.call(null,k);
var bucket__2850 = (this__2848.hashobj[h__2849]);
var i__2851 = (cljs.core.truth_(bucket__2850)?cljs.core.scan_array.call(null,2,k,bucket__2850):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2851)))
{return coll;
} else
{var new_hashobj__2852 = goog.object.clone.call(null,this__2848.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2850.length)))
{cljs.core.js_delete.call(null,new_hashobj__2852,h__2849);
} else
{var new_bucket__2853 = cljs.core.aclone.call(null,bucket__2850);

new_bucket__2853.splice(i__2851,2);
(new_hashobj__2852[h__2849] = new_bucket__2853);
}
return (new cljs.core.HashMap(this__2848.meta,cljs.core.dec.call(null,this__2848.count),new_hashobj__2852));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2854 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2854.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2855 = this;
return this__2855.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2856 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2857 = this;
return this__2857.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2858 = this;
var h__2859 = cljs.core.hash.call(null,k);
var bucket__2860 = (this__2858.hashobj[h__2859]);

if(cljs.core.truth_(bucket__2860))
{var new_bucket__2861 = cljs.core.aclone.call(null,bucket__2860);
var new_hashobj__2862 = goog.object.clone.call(null,this__2858.hashobj);

(new_hashobj__2862[h__2859] = new_bucket__2861);
var temp__3723__auto____2863 = cljs.core.scan_array.call(null,2,k,new_bucket__2861);

if(cljs.core.truth_(temp__3723__auto____2863))
{var i__2864 = temp__3723__auto____2863;

(new_bucket__2861[cljs.core.inc.call(null,i__2864)] = v);
return (new cljs.core.HashMap(this__2858.meta,this__2858.count,new_hashobj__2862));
} else
{new_bucket__2861.push(k,v);
return (new cljs.core.HashMap(this__2858.meta,cljs.core.inc.call(null,this__2858.count),new_hashobj__2862));
}
} else
{var new_hashobj__2865 = goog.object.clone.call(null,this__2858.hashobj);

(new_hashobj__2865[h__2859] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2858.meta,cljs.core.inc.call(null,this__2858.count),new_hashobj__2865));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2866 = this;
var bucket__2867 = (this__2866.hashobj[cljs.core.hash.call(null,k)]);
var i__2868 = (cljs.core.truth_(bucket__2867)?cljs.core.scan_array.call(null,2,k,bucket__2867):null);

if(cljs.core.truth_(i__2868))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2873 = null;
var G__2873__2874 = (function (coll,k){
var this__2869 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2873__2875 = (function (coll,k,not_found){
var this__2870 = this;
var bucket__2871 = (this__2870.hashobj[cljs.core.hash.call(null,k)]);
var i__2872 = (cljs.core.truth_(bucket__2871)?cljs.core.scan_array.call(null,2,k,bucket__2871):null);

if(cljs.core.truth_(i__2872))
{return (bucket__2871[cljs.core.inc.call(null,i__2872)]);
} else
{return not_found;
}
});
G__2873 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2873__2874.call(this,coll,k);
case  3 :
return G__2873__2875.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2873;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2877 = ks.length;

var i__2878 = 0;
var out__2879 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2878,len__2877)))
{{
var G__2880 = cljs.core.inc.call(null,i__2878);
var G__2881 = cljs.core.assoc.call(null,out__2879,(ks[i__2878]),(vs[i__2878]));
i__2878 = G__2880;
out__2879 = G__2881;
continue;
}
} else
{return out__2879;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2882 = null;
var G__2882__2883 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2882__2884 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2882 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2882__2883.call(this,_,k);
case  3 :
return G__2882__2884.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2882;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__2886 = cljs.core.seq.call(null,keyvals);
var out__2887 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2886))
{{
var G__2888 = cljs.core.nnext.call(null,in$__2886);
var G__2889 = cljs.core.assoc.call(null,out__2887,cljs.core.first.call(null,in$__2886),cljs.core.second.call(null,in$__2886));
in$__2886 = G__2888;
out__2887 = G__2889;
continue;
}
} else
{return out__2887;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__2890){
var keyvals = cljs.core.seq( arglist__2890 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2891_SHARP_,p2__2892_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2893 = p1__2891_SHARP_;

if(cljs.core.truth_(or__3576__auto____2893))
{return or__3576__auto____2893;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2892_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__2894){
var maps = cljs.core.seq( arglist__2894 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__2897 = (function (m,e){
var k__2895 = cljs.core.first.call(null,e);
var v__2896 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__2895)))
{return cljs.core.assoc.call(null,m,k__2895,f.call(null,cljs.core.get.call(null,m,k__2895),v__2896));
} else
{return cljs.core.assoc.call(null,m,k__2895,v__2896);
}
});
var merge2__2899 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__2897,(function (){var or__3576__auto____2898 = m1;

if(cljs.core.truth_(or__3576__auto____2898))
{return or__3576__auto____2898;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__2899,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__2900){
var f = cljs.core.first(arglist__2900);
var maps = cljs.core.rest(arglist__2900);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2902 = cljs.core.ObjMap.fromObject([],{});
var keys__2903 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2903))
{var key__2904 = cljs.core.first.call(null,keys__2903);
var entry__2905 = cljs.core.get.call(null,map,key__2904);

{
var G__2906 = (cljs.core.truth_(entry__2905)?cljs.core.assoc.call(null,ret__2902,key__2904,entry__2905):ret__2902);
var G__2907 = cljs.core.next.call(null,keys__2903);
ret__2902 = G__2906;
keys__2903 = G__2907;
continue;
}
} else
{return ret__2902;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__2908 = this;
return (new cljs.core.Set(this__2908.meta,cljs.core.dissoc.call(null,this__2908.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2909 = this;
var and__3574__auto____2910 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____2910))
{var and__3574__auto____2911 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____2911))
{return cljs.core.every_QMARK_.call(null,(function (p1__2901_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2901_SHARP_);
}),other);
} else
{return and__3574__auto____2911;
}
} else
{return and__3574__auto____2910;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2912 = this;
return (new cljs.core.Set(this__2912.meta,cljs.core.assoc.call(null,this__2912.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2913 = this;
return cljs.core.keys.call(null,this__2913.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2914 = this;
return (new cljs.core.Set(meta,this__2914.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2915 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__2915.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2916 = this;
return this__2916.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2917 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2918 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2921 = null;
var G__2921__2922 = (function (coll,v){
var this__2919 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__2921__2923 = (function (coll,v,not_found){
var this__2920 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__2920.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__2921 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__2921__2922.call(this,coll,v);
case  3 :
return G__2921__2923.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2921;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__2925 = null;
var G__2925__2926 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2925__2927 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2925 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2925__2926.call(this,_,k);
case  3 :
return G__2925__2927.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2925;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__2930 = cljs.core.seq.call(null,coll);
var out__2931 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__2930))))
{{
var G__2932 = cljs.core.rest.call(null,in$__2930);
var G__2933 = cljs.core.conj.call(null,out__2931,cljs.core.first.call(null,in$__2930));
in$__2930 = G__2932;
out__2931 = G__2933;
continue;
}
} else
{return out__2931;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__2934 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____2935 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____2935))
{var e__2936 = temp__3723__auto____2935;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__2936));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__2934,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__2929_SHARP_){
var temp__3723__auto____2937 = cljs.core.find.call(null,smap,p1__2929_SHARP_);

if(cljs.core.truth_(temp__3723__auto____2937))
{var e__2938 = temp__3723__auto____2937;

return cljs.core.second.call(null,e__2938);
} else
{return p1__2929_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__2946 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__2939,seen){
while(true){
var vec__2940__2941 = p__2939;
var f__2942 = cljs.core.nth.call(null,vec__2940__2941,0,null);
var xs__2943 = vec__2940__2941;

var temp__3726__auto____2944 = cljs.core.seq.call(null,xs__2943);

if(cljs.core.truth_(temp__3726__auto____2944))
{var s__2945 = temp__3726__auto____2944;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__2942)))
{{
var G__2947 = cljs.core.rest.call(null,s__2945);
var G__2948 = seen;
p__2939 = G__2947;
seen = G__2948;
continue;
}
} else
{return cljs.core.cons.call(null,f__2942,step.call(null,cljs.core.rest.call(null,s__2945),cljs.core.conj.call(null,seen,f__2942)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__2946.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__2949 = cljs.core.Vector.fromArray([]);
var s__2950 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__2950)))
{{
var G__2951 = cljs.core.conj.call(null,ret__2949,cljs.core.first.call(null,s__2950));
var G__2952 = cljs.core.next.call(null,s__2950);
ret__2949 = G__2951;
s__2950 = G__2952;
continue;
}
} else
{return cljs.core.seq.call(null,ret__2949);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____2953 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2953))
{return or__3576__auto____2953;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2954 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__2954,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__2954));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____2955 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2955))
{return or__3576__auto____2955;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2956 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__2956,-1)))
{return cljs.core.subs.call(null,x,2,i__2956);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__2959 = cljs.core.ObjMap.fromObject([],{});
var ks__2960 = cljs.core.seq.call(null,keys);
var vs__2961 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2962 = ks__2960;

if(cljs.core.truth_(and__3574__auto____2962))
{return vs__2961;
} else
{return and__3574__auto____2962;
}
})()))
{{
var G__2963 = cljs.core.assoc.call(null,map__2959,cljs.core.first.call(null,ks__2960),cljs.core.first.call(null,vs__2961));
var G__2964 = cljs.core.next.call(null,ks__2960);
var G__2965 = cljs.core.next.call(null,vs__2961);
map__2959 = G__2963;
ks__2960 = G__2964;
vs__2961 = G__2965;
continue;
}
} else
{return map__2959;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2968 = (function (k,x){
return x;
});
var max_key__2969 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__2970 = (function() { 
var G__2972__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__2957_SHARP_,p2__2958_SHARP_){
return max_key.call(null,k,p1__2957_SHARP_,p2__2958_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__2972 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2972__delegate.call(this, k, x, y, more);
};
G__2972.cljs$lang$maxFixedArity = 3;
G__2972.cljs$lang$applyTo = (function (arglist__2973){
var k = cljs.core.first(arglist__2973);
var x = cljs.core.first(cljs.core.next(arglist__2973));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2973)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2973)));
return G__2972__delegate.call(this, k, x, y, more);
});
return G__2972;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__2968.call(this,k,x);
case  3 :
return max_key__2969.call(this,k,x,y);
default:
return max_key__2970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__2970.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2974 = (function (k,x){
return x;
});
var min_key__2975 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__2976 = (function() { 
var G__2978__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__2966_SHARP_,p2__2967_SHARP_){
return min_key.call(null,k,p1__2966_SHARP_,p2__2967_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__2978 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2978__delegate.call(this, k, x, y, more);
};
G__2978.cljs$lang$maxFixedArity = 3;
G__2978.cljs$lang$applyTo = (function (arglist__2979){
var k = cljs.core.first(arglist__2979);
var x = cljs.core.first(cljs.core.next(arglist__2979));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2979)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2979)));
return G__2978__delegate.call(this, k, x, y, more);
});
return G__2978;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__2974.call(this,k,x);
case  3 :
return min_key__2975.call(this,k,x,y);
default:
return min_key__2976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__2976.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2982 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__2983 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2980 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2980))
{var s__2981 = temp__3726__auto____2980;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__2981),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__2981)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__2982.call(this,n,step);
case  3 :
return partition_all__2983.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2985))
{var s__2986 = temp__3726__auto____2985;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__2986))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2986),take_while.call(null,pred,cljs.core.rest.call(null,s__2986)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__2987 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__2988 = (function (end){
return range.call(null,0,end,1);
});
var range__2989 = (function (start,end){
return range.call(null,start,end,1);
});
var range__2990 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__2987.call(this);
case  1 :
return range__2988.call(this,start);
case  2 :
return range__2989.call(this,start,end);
case  3 :
return range__2990.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2992))
{var s__2993 = temp__3726__auto____2992;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2993),take_nth.call(null,n,cljs.core.drop.call(null,n,s__2993)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2995 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2995))
{var s__2996 = temp__3726__auto____2995;

var fst__2997 = cljs.core.first.call(null,s__2996);
var fv__2998 = f.call(null,fst__2997);
var run__2999 = cljs.core.cons.call(null,fst__2997,cljs.core.take_while.call(null,(function (p1__2994_SHARP_){
return cljs.core._EQ_.call(null,fv__2998,f.call(null,p1__2994_SHARP_));
}),cljs.core.next.call(null,s__2996)));

return cljs.core.cons.call(null,run__2999,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__2999),s__2996))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3014 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3010 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3010))
{var s__3011 = temp__3723__auto____3010;

return reductions.call(null,f,cljs.core.first.call(null,s__3011),cljs.core.rest.call(null,s__3011));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3015 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3012))
{var s__3013 = temp__3726__auto____3012;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3013)),cljs.core.rest.call(null,s__3013));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3014.call(this,f,init);
case  3 :
return reductions__3015.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3018 = (function (f){
return (function() {
var G__3023 = null;
var G__3023__3024 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3023__3025 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3023__3026 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3023__3027 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3023__3028 = (function() { 
var G__3030__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3030 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3030__delegate.call(this, x, y, z, args);
};
G__3030.cljs$lang$maxFixedArity = 3;
G__3030.cljs$lang$applyTo = (function (arglist__3031){
var x = cljs.core.first(arglist__3031);
var y = cljs.core.first(cljs.core.next(arglist__3031));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3031)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3031)));
return G__3030__delegate.call(this, x, y, z, args);
});
return G__3030;
})()
;
G__3023 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3023__3024.call(this);
case  1 :
return G__3023__3025.call(this,x);
case  2 :
return G__3023__3026.call(this,x,y);
case  3 :
return G__3023__3027.call(this,x,y,z);
default:
return G__3023__3028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3023.cljs$lang$maxFixedArity = 3;
G__3023.cljs$lang$applyTo = G__3023__3028.cljs$lang$applyTo;
return G__3023;
})()
});
var juxt__3019 = (function (f,g){
return (function() {
var G__3032 = null;
var G__3032__3033 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3032__3034 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3032__3035 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3032__3036 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3032__3037 = (function() { 
var G__3039__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3039 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3039__delegate.call(this, x, y, z, args);
};
G__3039.cljs$lang$maxFixedArity = 3;
G__3039.cljs$lang$applyTo = (function (arglist__3040){
var x = cljs.core.first(arglist__3040);
var y = cljs.core.first(cljs.core.next(arglist__3040));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3040)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3040)));
return G__3039__delegate.call(this, x, y, z, args);
});
return G__3039;
})()
;
G__3032 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3032__3033.call(this);
case  1 :
return G__3032__3034.call(this,x);
case  2 :
return G__3032__3035.call(this,x,y);
case  3 :
return G__3032__3036.call(this,x,y,z);
default:
return G__3032__3037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3032.cljs$lang$maxFixedArity = 3;
G__3032.cljs$lang$applyTo = G__3032__3037.cljs$lang$applyTo;
return G__3032;
})()
});
var juxt__3020 = (function (f,g,h){
return (function() {
var G__3041 = null;
var G__3041__3042 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3041__3043 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3041__3044 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3041__3045 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3041__3046 = (function() { 
var G__3048__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3048 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3048__delegate.call(this, x, y, z, args);
};
G__3048.cljs$lang$maxFixedArity = 3;
G__3048.cljs$lang$applyTo = (function (arglist__3049){
var x = cljs.core.first(arglist__3049);
var y = cljs.core.first(cljs.core.next(arglist__3049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3049)));
return G__3048__delegate.call(this, x, y, z, args);
});
return G__3048;
})()
;
G__3041 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3041__3042.call(this);
case  1 :
return G__3041__3043.call(this,x);
case  2 :
return G__3041__3044.call(this,x,y);
case  3 :
return G__3041__3045.call(this,x,y,z);
default:
return G__3041__3046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3041.cljs$lang$maxFixedArity = 3;
G__3041.cljs$lang$applyTo = G__3041__3046.cljs$lang$applyTo;
return G__3041;
})()
});
var juxt__3021 = (function() { 
var G__3050__delegate = function (f,g,h,fs){
var fs__3017 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3051 = null;
var G__3051__3052 = (function (){
return cljs.core.reduce.call(null,(function (p1__3000_SHARP_,p2__3001_SHARP_){
return cljs.core.conj.call(null,p1__3000_SHARP_,p2__3001_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3017);
});
var G__3051__3053 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3002_SHARP_,p2__3003_SHARP_){
return cljs.core.conj.call(null,p1__3002_SHARP_,p2__3003_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3017);
});
var G__3051__3054 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3004_SHARP_,p2__3005_SHARP_){
return cljs.core.conj.call(null,p1__3004_SHARP_,p2__3005_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3017);
});
var G__3051__3055 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3006_SHARP_,p2__3007_SHARP_){
return cljs.core.conj.call(null,p1__3006_SHARP_,p2__3007_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3017);
});
var G__3051__3056 = (function() { 
var G__3058__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3008_SHARP_,p2__3009_SHARP_){
return cljs.core.conj.call(null,p1__3008_SHARP_,cljs.core.apply.call(null,p2__3009_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3017);
};
var G__3058 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3058__delegate.call(this, x, y, z, args);
};
G__3058.cljs$lang$maxFixedArity = 3;
G__3058.cljs$lang$applyTo = (function (arglist__3059){
var x = cljs.core.first(arglist__3059);
var y = cljs.core.first(cljs.core.next(arglist__3059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3059)));
return G__3058__delegate.call(this, x, y, z, args);
});
return G__3058;
})()
;
G__3051 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3051__3052.call(this);
case  1 :
return G__3051__3053.call(this,x);
case  2 :
return G__3051__3054.call(this,x,y);
case  3 :
return G__3051__3055.call(this,x,y,z);
default:
return G__3051__3056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3051.cljs$lang$maxFixedArity = 3;
G__3051.cljs$lang$applyTo = G__3051__3056.cljs$lang$applyTo;
return G__3051;
})()
};
var G__3050 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3050__delegate.call(this, f, g, h, fs);
};
G__3050.cljs$lang$maxFixedArity = 3;
G__3050.cljs$lang$applyTo = (function (arglist__3060){
var f = cljs.core.first(arglist__3060);
var g = cljs.core.first(cljs.core.next(arglist__3060));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3060)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3060)));
return G__3050__delegate.call(this, f, g, h, fs);
});
return G__3050;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3018.call(this,f);
case  2 :
return juxt__3019.call(this,f,g);
case  3 :
return juxt__3020.call(this,f,g,h);
default:
return juxt__3021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3021.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3062 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3065 = cljs.core.next.call(null,coll);
coll = G__3065;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3063 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3061))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3061;
}
})()))
{{
var G__3066 = cljs.core.dec.call(null,n);
var G__3067 = cljs.core.next.call(null,coll);
n = G__3066;
coll = G__3067;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3062.call(this,n);
case  2 :
return dorun__3063.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3068 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3069 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3068.call(this,n);
case  2 :
return doall__3069.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3071 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3071),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3071),1)))
{return cljs.core.first.call(null,matches__3071);
} else
{return cljs.core.vec.call(null,matches__3071);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3072 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3072)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3072),1)))
{return cljs.core.first.call(null,matches__3072);
} else
{return cljs.core.vec.call(null,matches__3072);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3073 = cljs.core.re_find.call(null,re,s);
var match_idx__3074 = s.search(re);
var match_str__3075 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3073))?cljs.core.first.call(null,match_data__3073):match_data__3073);
var post_match__3076 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3074,cljs.core.count.call(null,match_str__3075)));

if(cljs.core.truth_(match_data__3073))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3073,re_seq.call(null,re,post_match__3076));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3077_SHARP_){
return print_one.call(null,p1__3077_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3078 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3078))
{var and__3574__auto____3081 = (function (){var x__105__auto____3079 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3080 = x__105__auto____3079;

if(cljs.core.truth_(and__3574__auto____3080))
{return x__105__auto____3079.cljs$core$IMeta$;
} else
{return and__3574__auto____3080;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3079);
}
})();

if(cljs.core.truth_(and__3574__auto____3081))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3081;
}
} else
{return and__3574__auto____3078;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3082 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3083 = x__105__auto____3082;

if(cljs.core.truth_(and__3574__auto____3083))
{return x__105__auto____3082.cljs$core$IPrintable$;
} else
{return and__3574__auto____3083;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3082);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3084 = cljs.core.first.call(null,objs);
var sb__3085 = (new goog.string.StringBuffer());

var G__3086__3087 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3086__3087))
{var obj__3088 = cljs.core.first.call(null,G__3086__3087);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3088,first_obj__3084)))
{} else
{sb__3085.append(" ");
}
var G__3089__3090 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3088,opts));

while(true){
if(cljs.core.truth_(G__3089__3090))
{var string__3091 = cljs.core.first.call(null,G__3089__3090);

sb__3085.append(string__3091);
{
var G__3092 = cljs.core.next.call(null,G__3089__3090);
G__3089__3090 = G__3092;
continue;
}
} else
{}
break;
}
{
var G__3093 = cljs.core.next.call(null,G__3086__3087);
G__3086__3087 = G__3093;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3085);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3094 = cljs.core.first.call(null,objs);

var G__3095__3096 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3095__3096))
{var obj__3097 = cljs.core.first.call(null,G__3095__3096);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3097,first_obj__3094)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3098__3099 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3097,opts));

while(true){
if(cljs.core.truth_(G__3098__3099))
{var string__3100 = cljs.core.first.call(null,G__3098__3099);

cljs.core.string_print.call(null,string__3100);
{
var G__3101 = cljs.core.next.call(null,G__3098__3099);
G__3098__3099 = G__3101;
continue;
}
} else
{}
break;
}
{
var G__3102 = cljs.core.next.call(null,G__3095__3096);
G__3095__3096 = G__3102;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3103){
var objs = cljs.core.seq( arglist__3103 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3104){
var objs = cljs.core.seq( arglist__3104 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3105){
var objs = cljs.core.seq( arglist__3105 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3106){
var objs = cljs.core.seq( arglist__3106 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3107){
var objs = cljs.core.seq( arglist__3107 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3108 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3108,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3109 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3109))
{var nspc__3110 = temp__3726__auto____3109;

return cljs.core.str.call(null,nspc__3110,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3111 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3111))
{var nspc__3112 = temp__3726__auto____3111;

return cljs.core.str.call(null,nspc__3112,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3113 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3113,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3114 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3114.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3115 = this;
return this__3115.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3116 = this;
return this__3116.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3117 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3124 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3125 = (function() { 
var G__3127__delegate = function (x,p__3118){
var map__3119__3120 = p__3118;
var map__3119__3121 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3119__3120))?cljs.core.apply.call(null,cljs.core.hash_map,map__3119__3120):map__3119__3120);
var validator__3122 = cljs.core.get.call(null,map__3119__3121,"﷐'validator");
var meta__3123 = cljs.core.get.call(null,map__3119__3121,"﷐'meta");

return (new cljs.core.Atom(x,meta__3123,validator__3122));
};
var G__3127 = function (x,var_args){
var p__3118 = null;
if (goog.isDef(var_args)) {
  p__3118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3127__delegate.call(this, x, p__3118);
};
G__3127.cljs$lang$maxFixedArity = 1;
G__3127.cljs$lang$applyTo = (function (arglist__3128){
var x = cljs.core.first(arglist__3128);
var p__3118 = cljs.core.rest(arglist__3128);
return G__3127__delegate.call(this, x, p__3118);
});
return G__3127;
})()
;
atom = function(x,var_args){
var p__3118 = var_args;
switch(arguments.length){
case  1 :
return atom__3124.call(this,x);
default:
return atom__3125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3125.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3129 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3129))
{var v__3130 = temp__3726__auto____3129;

if(cljs.core.truth_(v__3130.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3131 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3132 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3133 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3134 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3135 = (function() { 
var G__3137__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3137 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3137__delegate.call(this, a, f, x, y, z, more);
};
G__3137.cljs$lang$maxFixedArity = 5;
G__3137.cljs$lang$applyTo = (function (arglist__3138){
var a = cljs.core.first(arglist__3138);
var f = cljs.core.first(cljs.core.next(arglist__3138));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3138)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3138))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3138)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3138)))));
return G__3137__delegate.call(this, a, f, x, y, z, more);
});
return G__3137;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3131.call(this,a,f);
case  3 :
return swap_BANG___3132.call(this,a,f,x);
case  4 :
return swap_BANG___3133.call(this,a,f,x,y);
case  5 :
return swap_BANG___3134.call(this,a,f,x,y,z);
default:
return swap_BANG___3135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3135.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3139){
var iref = cljs.core.first(arglist__3139);
var f = cljs.core.first(cljs.core.next(arglist__3139));
var args = cljs.core.rest(cljs.core.next(arglist__3139));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3140 = (function (){
return gensym.call(null,"G__");
});
var gensym__3141 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3140.call(this);
case  1 :
return gensym__3141.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3143 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3143.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3144 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3144.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3144.state,this__3144.f);
}
return cljs.core.deref.call(null,this__3144.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3145){
var body = cljs.core.seq( arglist__3145 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3146__3147 = options;
var map__3146__3148 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3146__3147))?cljs.core.apply.call(null,cljs.core.hash_map,map__3146__3147):map__3146__3147);
var keywordize_keys__3149 = cljs.core.get.call(null,map__3146__3148,"﷐'keywordize-keys");
var keyfn__3150 = (cljs.core.truth_(keywordize_keys__3149)?cljs.core.keyword:cljs.core.str);
var f__3156 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3155 = (function iter__3151(s__3152){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3152__3153 = s__3152;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3152__3153)))
{var k__3154 = cljs.core.first.call(null,s__3152__3153);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3150.call(null,k__3154),thisfn.call(null,(x[k__3154]))]),iter__3151.call(null,cljs.core.rest.call(null,s__3152__3153)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3155.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3156.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3157){
var x = cljs.core.first(arglist__3157);
var options = cljs.core.rest(arglist__3157);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3158 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3162__delegate = function (args){
var temp__3723__auto____3159 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3158),args);

if(cljs.core.truth_(temp__3723__auto____3159))
{var v__3160 = temp__3723__auto____3159;

return v__3160;
} else
{var ret__3161 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3158,cljs.core.assoc,args,ret__3161);
return ret__3161;
}
};
var G__3162 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3162__delegate.call(this, args);
};
G__3162.cljs$lang$maxFixedArity = 0;
G__3162.cljs$lang$applyTo = (function (arglist__3163){
var args = cljs.core.seq( arglist__3163 );;
return G__3162__delegate.call(this, args);
});
return G__3162;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3165 = (function (f){
while(true){
var ret__3164 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3164)))
{{
var G__3168 = ret__3164;
f = G__3168;
continue;
}
} else
{return ret__3164;
}
break;
}
});
var trampoline__3166 = (function() { 
var G__3169__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3169 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3169__delegate.call(this, f, args);
};
G__3169.cljs$lang$maxFixedArity = 1;
G__3169.cljs$lang$applyTo = (function (arglist__3170){
var f = cljs.core.first(arglist__3170);
var args = cljs.core.rest(arglist__3170);
return G__3169__delegate.call(this, f, args);
});
return G__3169;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3165.call(this,f);
default:
return trampoline__3166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3166.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3171 = (function (){
return rand.call(null,1);
});
var rand__3172 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3171.call(this);
case  1 :
return rand__3172.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3174 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3174,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3174,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3183 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3184 = (function (h,child,parent){
var or__3576__auto____3175 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3175))
{return or__3576__auto____3175;
} else
{var or__3576__auto____3176 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3176))
{return or__3576__auto____3176;
} else
{var and__3574__auto____3177 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3177))
{var and__3574__auto____3178 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3178))
{var and__3574__auto____3179 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3179))
{var ret__3180 = true;
var i__3181 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3182 = cljs.core.not.call(null,ret__3180);

if(cljs.core.truth_(or__3576__auto____3182))
{return or__3576__auto____3182;
} else
{return cljs.core._EQ_.call(null,i__3181,cljs.core.count.call(null,parent));
}
})()))
{return ret__3180;
} else
{{
var G__3186 = isa_QMARK_.call(null,h,child.call(null,i__3181),parent.call(null,i__3181));
var G__3187 = cljs.core.inc.call(null,i__3181);
ret__3180 = G__3186;
i__3181 = G__3187;
continue;
}
}
break;
}
} else
{return and__3574__auto____3179;
}
} else
{return and__3574__auto____3178;
}
} else
{return and__3574__auto____3177;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3183.call(this,h,child);
case  3 :
return isa_QMARK___3184.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3188 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3189 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3188.call(this,h);
case  2 :
return parents__3189.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3191 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3192 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3191.call(this,h);
case  2 :
return ancestors__3192.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3194 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3195 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3194.call(this,h);
case  2 :
return descendants__3195.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3205 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3206 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3200 = "﷐'parents".call(null,h);
var td__3201 = "﷐'descendants".call(null,h);
var ta__3202 = "﷐'ancestors".call(null,h);
var tf__3203 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3204 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3200.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3202.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3202.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3200,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3203.call(null,"﷐'ancestors".call(null,h),tag,td__3201,parent,ta__3202),"﷐'descendants":tf__3203.call(null,"﷐'descendants".call(null,h),parent,ta__3202,tag,td__3201)});
})());

if(cljs.core.truth_(or__3576__auto____3204))
{return or__3576__auto____3204;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3205.call(this,h,tag);
case  3 :
return derive__3206.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3212 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3213 = (function (h,tag,parent){
var parentMap__3208 = "﷐'parents".call(null,h);
var childsParents__3209 = (cljs.core.truth_(parentMap__3208.call(null,tag))?cljs.core.disj.call(null,parentMap__3208.call(null,tag),parent):cljs.core.set([]));
var newParents__3210 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3209))?cljs.core.assoc.call(null,parentMap__3208,tag,childsParents__3209):cljs.core.dissoc.call(null,parentMap__3208,tag));
var deriv_seq__3211 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3197_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3197_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3197_SHARP_),cljs.core.second.call(null,p1__3197_SHARP_)));
}),cljs.core.seq.call(null,newParents__3210)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3208.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3198_SHARP_,p2__3199_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3198_SHARP_,p2__3199_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3211));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3212.call(this,h,tag);
case  3 :
return underive__3213.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3215 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3217 = (cljs.core.truth_((function (){var and__3574__auto____3216 = xprefs__3215;

if(cljs.core.truth_(and__3574__auto____3216))
{return xprefs__3215.call(null,y);
} else
{return and__3574__auto____3216;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3217))
{return or__3576__auto____3217;
} else
{var or__3576__auto____3219 = (function (){var ps__3218 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3218))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3218),prefer_table)))
{} else
{}
{
var G__3222 = cljs.core.rest.call(null,ps__3218);
ps__3218 = G__3222;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3219))
{return or__3576__auto____3219;
} else
{var or__3576__auto____3221 = (function (){var ps__3220 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3220))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3220),y,prefer_table)))
{} else
{}
{
var G__3223 = cljs.core.rest.call(null,ps__3220);
ps__3220 = G__3223;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3221))
{return or__3576__auto____3221;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3224 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3224))
{return or__3576__auto____3224;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3233 = cljs.core.reduce.call(null,(function (be,p__3225){
var vec__3226__3227 = p__3225;
var k__3228 = cljs.core.nth.call(null,vec__3226__3227,0,null);
var ___3229 = cljs.core.nth.call(null,vec__3226__3227,1,null);
var e__3230 = vec__3226__3227;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3228)))
{var be2__3232 = (cljs.core.truth_((function (){var or__3576__auto____3231 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3231))
{return or__3576__auto____3231;
} else
{return cljs.core.dominates.call(null,k__3228,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3230:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3232),k__3228,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3228," and ",cljs.core.first.call(null,be2__3232),", and neither is preferred");
}
return be2__3232;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3233))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3233));
return cljs.core.second.call(null,best_entry__3233);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3234 = mf;

if(cljs.core.truth_(and__3574__auto____3234))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3234;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3235 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3235))
{return or__3576__auto____3235;
} else
{return (_reset["_"]);
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3236 = mf;

if(cljs.core.truth_(and__3574__auto____3236))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3236;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3237 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3237))
{return or__3576__auto____3237;
} else
{return (_add_method["_"]);
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3238 = mf;

if(cljs.core.truth_(and__3574__auto____3238))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3238;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3239 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3239))
{return or__3576__auto____3239;
} else
{return (_remove_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3240 = mf;

if(cljs.core.truth_(and__3574__auto____3240))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3240;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3241 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3241))
{return or__3576__auto____3241;
} else
{return (_prefer_method["_"]);
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3242 = mf;

if(cljs.core.truth_(and__3574__auto____3242))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3242;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3243 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3243))
{return or__3576__auto____3243;
} else
{return (_get_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3244 = mf;

if(cljs.core.truth_(and__3574__auto____3244))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3244;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3245 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3245))
{return or__3576__auto____3245;
} else
{return (_methods["_"]);
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3246 = mf;

if(cljs.core.truth_(and__3574__auto____3246))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3246;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3247 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3247))
{return or__3576__auto____3247;
} else
{return (_prefers["_"]);
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3248 = mf;

if(cljs.core.truth_(and__3574__auto____3248))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3248;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3249 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3249))
{return or__3576__auto____3249;
} else
{return (_invoke["_"]);
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3250 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3251 = cljs.core._get_method.call(null,mf,dispatch_val__3250);

if(cljs.core.truth_(target_fn__3251))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3250);
}
return cljs.core.apply.call(null,target_fn__3251,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3252 = this;
cljs.core.swap_BANG_.call(null,this__3252.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3252.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3252.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3252.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3253 = this;
cljs.core.swap_BANG_.call(null,this__3253.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3253.method_cache,this__3253.method_table,this__3253.cached_hierarchy,this__3253.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3254 = this;
cljs.core.swap_BANG_.call(null,this__3254.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3254.method_cache,this__3254.method_table,this__3254.cached_hierarchy,this__3254.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3255 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3255.cached_hierarchy),cljs.core.deref.call(null,this__3255.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3255.method_cache,this__3255.method_table,this__3255.cached_hierarchy,this__3255.hierarchy);
}
var temp__3723__auto____3256 = cljs.core.deref.call(null,this__3255.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3256))
{var target_fn__3257 = temp__3723__auto____3256;

return target_fn__3257;
} else
{var temp__3723__auto____3258 = cljs.core.find_and_cache_best_method.call(null,this__3255.name,dispatch_val,this__3255.hierarchy,this__3255.method_table,this__3255.prefer_table,this__3255.method_cache,this__3255.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3258))
{var target_fn__3259 = temp__3723__auto____3258;

return target_fn__3259;
} else
{return cljs.core.deref.call(null,this__3255.method_table).call(null,this__3255.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3260 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3260.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3260.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3260.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3260.method_cache,this__3260.method_table,this__3260.cached_hierarchy,this__3260.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3261 = this;
return cljs.core.deref.call(null,this__3261.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3262 = this;
return cljs.core.deref.call(null,this__3262.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3263 = this;
return cljs.core.do_invoke.call(null,mf,this__3263.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3264__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3264 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3264__delegate.call(this, _, args);
};
G__3264.cljs$lang$maxFixedArity = 1;
G__3264.cljs$lang$applyTo = (function (arglist__3265){
var _ = cljs.core.first(arglist__3265);
var args = cljs.core.rest(arglist__3265);
return G__3264__delegate.call(this, _, args);
});
return G__3264;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

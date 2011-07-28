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
var or__3576__auto____2521 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2521))
{return or__3576__auto____2521;
} else
{var or__3576__auto____2522 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2522))
{return or__3576__auto____2522;
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
if(cljs.core.truth_((function (){var and__3574__auto____2523 = coll;

if(cljs.core.truth_(and__3574__auto____2523))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2523;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2524 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2524))
{return or__3576__auto____2524;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2525 = coll;

if(cljs.core.truth_(and__3574__auto____2525))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2525;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2526 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2526))
{return or__3576__auto____2526;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2527 = coll;

if(cljs.core.truth_(and__3574__auto____2527))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2527;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2528 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2528))
{return or__3576__auto____2528;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2533 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2529 = coll;

if(cljs.core.truth_(and__3574__auto____2529))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2529;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2530 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2530))
{return or__3576__auto____2530;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__2534 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2531 = coll;

if(cljs.core.truth_(and__3574__auto____2531))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2531;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2532 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2532))
{return or__3576__auto____2532;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2533.call(this,coll,n);
case  3 :
return _nth__2534.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2536 = coll;

if(cljs.core.truth_(and__3574__auto____2536))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2536;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2537 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2537))
{return or__3576__auto____2537;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2538 = coll;

if(cljs.core.truth_(and__3574__auto____2538))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2538;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2539 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2539))
{return or__3576__auto____2539;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2544 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2540 = o;

if(cljs.core.truth_(and__3574__auto____2540))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2540;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2541 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2541))
{return or__3576__auto____2541;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__2545 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2542 = o;

if(cljs.core.truth_(and__3574__auto____2542))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2542;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2543 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2543))
{return or__3576__auto____2543;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2544.call(this,o,k);
case  3 :
return _lookup__2545.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2547 = coll;

if(cljs.core.truth_(and__3574__auto____2547))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2547;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2548 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2548))
{return or__3576__auto____2548;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2549 = coll;

if(cljs.core.truth_(and__3574__auto____2549))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2549;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2550 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2550))
{return or__3576__auto____2550;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2551 = coll;

if(cljs.core.truth_(and__3574__auto____2551))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2551;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2552 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2552))
{return or__3576__auto____2552;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2553 = coll;

if(cljs.core.truth_(and__3574__auto____2553))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2553;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2554 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2554))
{return or__3576__auto____2554;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2555 = coll;

if(cljs.core.truth_(and__3574__auto____2555))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2555;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2556 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2556))
{return or__3576__auto____2556;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2557 = coll;

if(cljs.core.truth_(and__3574__auto____2557))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2557;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2558 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2558))
{return or__3576__auto____2558;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2559 = coll;

if(cljs.core.truth_(and__3574__auto____2559))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2559;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2560 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2560))
{return or__3576__auto____2560;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2561 = o;

if(cljs.core.truth_(and__3574__auto____2561))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2561;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2562 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2562))
{return or__3576__auto____2562;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2563 = o;

if(cljs.core.truth_(and__3574__auto____2563))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2563;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2564 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2564))
{return or__3576__auto____2564;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2565 = o;

if(cljs.core.truth_(and__3574__auto____2565))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2565;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2566 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2566))
{return or__3576__auto____2566;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2567 = o;

if(cljs.core.truth_(and__3574__auto____2567))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2567;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2568 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2568))
{return or__3576__auto____2568;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2573 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2569 = coll;

if(cljs.core.truth_(and__3574__auto____2569))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2569;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2570 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2570))
{return or__3576__auto____2570;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__2574 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2571 = coll;

if(cljs.core.truth_(and__3574__auto____2571))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2571;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2572 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2572))
{return or__3576__auto____2572;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2573.call(this,coll,f);
case  3 :
return _reduce__2574.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2576 = o;

if(cljs.core.truth_(and__3574__auto____2576))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2576;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2577 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2577))
{return or__3576__auto____2577;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2578 = o;

if(cljs.core.truth_(and__3574__auto____2578))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2578;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2579 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2579))
{return or__3576__auto____2579;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2580 = o;

if(cljs.core.truth_(and__3574__auto____2580))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2580;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2581 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2581))
{return or__3576__auto____2581;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2582 = o;

if(cljs.core.truth_(and__3574__auto____2582))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2582;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2583 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2583))
{return or__3576__auto____2583;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2584 = d;

if(cljs.core.truth_(and__3574__auto____2584))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2584;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2585 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2585))
{return or__3576__auto____2585;
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
var G__2586 = null;
var G__2586__2587 = (function (_,n){
return null;
});
var G__2586__2588 = (function (_,n,not_found){
return not_found;
});
G__2586 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2586__2587.call(this,_,n);
case  3 :
return G__2586__2588.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2586;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2590 = null;
var G__2590__2591 = (function (_,f){
return f.call(null);
});
var G__2590__2592 = (function (_,f,start){
return start;
});
G__2590 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2590__2591.call(this,_,f);
case  3 :
return G__2590__2592.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2590;
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
var G__2594 = null;
var G__2594__2595 = (function (o,k){
return null;
});
var G__2594__2596 = (function (o,k,not_found){
return not_found;
});
G__2594 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2594__2595.call(this,o,k);
case  3 :
return G__2594__2596.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2594;
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
var ci_reduce__2604 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2598 = cljs.core._nth.call(null,cicoll,0);
var n__2599 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2599,cljs.core._count.call(null,cicoll))))
{{
var G__2608 = f.call(null,val__2598,cljs.core._nth.call(null,cicoll,n__2599));
var G__2609 = cljs.core.inc.call(null,n__2599);
val__2598 = G__2608;
n__2599 = G__2609;
continue;
}
} else
{return val__2598;
}
break;
}
}
});
var ci_reduce__2605 = (function (cicoll,f,val){
var val__2600 = val;
var n__2601 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2601,cljs.core._count.call(null,cicoll))))
{{
var G__2610 = f.call(null,val__2600,cljs.core._nth.call(null,cicoll,n__2601));
var G__2611 = cljs.core.inc.call(null,n__2601);
val__2600 = G__2610;
n__2601 = G__2611;
continue;
}
} else
{return val__2600;
}
break;
}
});
var ci_reduce__2606 = (function (cicoll,f,val,idx){
var val__2602 = val;
var n__2603 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2603,cljs.core._count.call(null,cicoll))))
{{
var G__2612 = f.call(null,val__2602,cljs.core._nth.call(null,cicoll,n__2603));
var G__2613 = cljs.core.inc.call(null,n__2603);
val__2602 = G__2612;
n__2603 = G__2613;
continue;
}
} else
{return val__2602;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2604.call(this,cicoll,f);
case  3 :
return ci_reduce__2605.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2606.call(this,cicoll,f,val,idx);
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
var G__2620 = null;
var G__2620__2621 = (function (_,f){
var this__2614 = this;
return cljs.core.ci_reduce.call(null,this__2614.a,f,(this__2614.a[this__2614.i]),cljs.core.inc.call(null,this__2614.i));
});
var G__2620__2622 = (function (_,f,start){
var this__2615 = this;
return cljs.core.ci_reduce.call(null,this__2615.a,f,start,this__2615.i);
});
G__2620 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2620__2621.call(this,_,f);
case  3 :
return G__2620__2622.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2620;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2616 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2617 = this;
return (this__2617.a[this__2617.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2618 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2618.i),cljs.core._count.call(null,this__2618.a))))
{return (new cljs.core.IndexedSeq(this__2618.a,cljs.core.inc.call(null,this__2618.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2619 = this;
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
var G__2624 = null;
var G__2624__2625 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2624__2626 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2624 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2624__2625.call(this,array,f);
case  3 :
return G__2624__2626.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2624;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2628 = null;
var G__2628__2629 = (function (array,k){
return (array[k]);
});
var G__2628__2630 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2628 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2628__2629.call(this,array,k);
case  3 :
return G__2628__2630.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2628;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2632 = null;
var G__2632__2633 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2632__2634 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2632 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2632__2633.call(this,array,n);
case  3 :
return G__2632__2634.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2632;
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
var temp__3726__auto____2636 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2636))
{var s__2637 = temp__3726__auto____2636;

return cljs.core._first.call(null,s__2637);
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
var G__2638 = cljs.core.next.call(null,s);
s = G__2638;
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
var s__2639 = cljs.core.seq.call(null,x);
var n__2640 = 0;

while(true){
if(cljs.core.truth_(s__2639))
{{
var G__2641 = cljs.core.next.call(null,s__2639);
var G__2642 = cljs.core.inc.call(null,n__2640);
s__2639 = G__2641;
n__2640 = G__2642;
continue;
}
} else
{return n__2640;
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
var conj__2643 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2644 = (function (coll,x,var_args){
var xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(xs))
{{
var G__2646 = conj.call(null,coll,x);
var G__2647 = cljs.core.first.call(null,xs);
var G__2648 = cljs.core.next.call(null,xs);
coll = G__2646;
x = G__2647;
xs = G__2648;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
});
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2643.call(this,coll,x);
default:
return conj__2644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = (function (arglist__2649){
var coll = cljs.core.first(arglist__2649);
var x = cljs.core.first(cljs.core.next(arglist__2649));
var xs = cljs.core.rest(cljs.core.next(arglist__2649));
return conj__2644.call(null, coll, x, xs);
});
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
var nth__2650 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2651 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2650.call(this,coll,n);
case  3 :
return nth__2651.call(this,coll,n,not_found);
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
var get__2653 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2654 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2653.call(this,o,k);
case  3 :
return get__2654.call(this,o,k,not_found);
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
var assoc__2657 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2658 = (function (coll,k,v,var_args){
var kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
while(true){
var ret__2656 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2660 = ret__2656;
var G__2661 = cljs.core.first.call(null,kvs);
var G__2662 = cljs.core.second.call(null,kvs);
var G__2663 = cljs.core.nnext.call(null,kvs);
coll = G__2660;
k = G__2661;
v = G__2662;
kvs = G__2663;
continue;
}
} else
{return ret__2656;
}
break;
}
});
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2657.call(this,coll,k,v);
default:
return assoc__2658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = (function (arglist__2664){
var coll = cljs.core.first(arglist__2664);
var k = cljs.core.first(cljs.core.next(arglist__2664));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2664)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2664)));
return assoc__2658.call(null, coll, k, v, kvs);
});
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
var dissoc__2666 = (function (coll){
return coll;
});
var dissoc__2667 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2668 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2665 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2670 = ret__2665;
var G__2671 = cljs.core.first.call(null,ks);
var G__2672 = cljs.core.next.call(null,ks);
coll = G__2670;
k = G__2671;
ks = G__2672;
continue;
}
} else
{return ret__2665;
}
break;
}
});
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2666.call(this,coll);
case  2 :
return dissoc__2667.call(this,coll,k);
default:
return dissoc__2668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = (function (arglist__2673){
var coll = cljs.core.first(arglist__2673);
var k = cljs.core.first(cljs.core.next(arglist__2673));
var ks = cljs.core.rest(cljs.core.next(arglist__2673));
return dissoc__2668.call(null, coll, k, ks);
});
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
return cljs.core._meta.call(null,o);
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
var disj__2675 = (function (coll){
return coll;
});
var disj__2676 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2677 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2674 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2679 = ret__2674;
var G__2680 = cljs.core.first.call(null,ks);
var G__2681 = cljs.core.next.call(null,ks);
coll = G__2679;
k = G__2680;
ks = G__2681;
continue;
}
} else
{return ret__2674;
}
break;
}
});
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2675.call(this,coll);
case  2 :
return disj__2676.call(this,coll,k);
default:
return disj__2677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = (function (arglist__2682){
var coll = cljs.core.first(arglist__2682);
var k = cljs.core.first(cljs.core.next(arglist__2682));
var ks = cljs.core.rest(cljs.core.next(arglist__2682));
return disj__2677.call(null, coll, k, ks);
});
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
{var x__105__auto____2683 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2684 = x__105__auto____2683;

if(cljs.core.truth_(and__3574__auto____2684))
{return x__105__auto____2683.cljs$core$ICollection$;
} else
{return and__3574__auto____2684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2683);
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
{var x__105__auto____2685 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2686 = x__105__auto____2685;

if(cljs.core.truth_(and__3574__auto____2686))
{return x__105__auto____2685.cljs$core$ISet$;
} else
{return and__3574__auto____2686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2685);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2687 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2688 = x__105__auto____2687;

if(cljs.core.truth_(and__3574__auto____2688))
{return x__105__auto____2687.cljs$core$IAssociative$;
} else
{return and__3574__auto____2688;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2687);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2689 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2690 = x__105__auto____2689;

if(cljs.core.truth_(and__3574__auto____2690))
{return x__105__auto____2689.cljs$core$ISequential$;
} else
{return and__3574__auto____2690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2689);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2691 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2692 = x__105__auto____2691;

if(cljs.core.truth_(and__3574__auto____2692))
{return x__105__auto____2691.cljs$core$ICounted$;
} else
{return and__3574__auto____2692;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2691);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2693 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2694 = x__105__auto____2693;

if(cljs.core.truth_(and__3574__auto____2694))
{return x__105__auto____2693.cljs$core$IMap$;
} else
{return and__3574__auto____2694;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2693);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2695 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2696 = x__105__auto____2695;

if(cljs.core.truth_(and__3574__auto____2696))
{return x__105__auto____2695.cljs$core$IVector$;
} else
{return and__3574__auto____2696;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2695);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2697 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2697.push(key);
}));
return keys__2697;
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
{var x__105__auto____2698 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2699 = x__105__auto____2698;

if(cljs.core.truth_(and__3574__auto____2699))
{return x__105__auto____2698.cljs$core$ISeq$;
} else
{return and__3574__auto____2699;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2698);
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
var and__3574__auto____2700 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2700))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2701 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2701))
{return or__3576__auto____2701;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2700;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2702 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2702))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2702;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2703 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2703))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2703;
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
var and__3574__auto____2704 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2704))
{return (n == n.toFixed());
} else
{return and__3574__auto____2704;
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
if(cljs.core.truth_((function (){var and__3574__auto____2705 = coll;

if(cljs.core.truth_(and__3574__auto____2705))
{var and__3574__auto____2706 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2706))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2706;
}
} else
{return and__3574__auto____2705;
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
var distinct_QMARK___2711 = (function (x){
return true;
});
var distinct_QMARK___2712 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2713 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2707 = cljs.core.set([y,x]);
var xs__2708 = more;

while(true){
var x__2709 = cljs.core.first.call(null,xs__2708);
var etc__2710 = cljs.core.next.call(null,xs__2708);

if(cljs.core.truth_(xs__2708))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2707,x__2709)))
{return false;
} else
{{
var G__2715 = cljs.core.conj.call(null,s__2707,x__2709);
var G__2716 = etc__2710;
s__2707 = G__2715;
xs__2708 = G__2716;
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
});
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2711.call(this,x);
case  2 :
return distinct_QMARK___2712.call(this,x,y);
default:
return distinct_QMARK___2713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = (function (arglist__2717){
var x = cljs.core.first(arglist__2717);
var y = cljs.core.first(cljs.core.next(arglist__2717));
var more = cljs.core.rest(cljs.core.next(arglist__2717));
return distinct_QMARK___2713.call(null, x, y, more);
});
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
var r__2718 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2718)))
{return r__2718;
} else
{if(cljs.core.truth_(r__2718))
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
var sort__2720 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2721 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2719 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2719,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2719);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2720.call(this,comp);
case  2 :
return sort__2721.call(this,comp,coll);
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
var sort_by__2723 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2724 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2723.call(this,keyfn,comp);
case  3 :
return sort_by__2724.call(this,keyfn,comp,coll);
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
var reduce__2726 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2727 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2726.call(this,f,val);
case  3 :
return reduce__2727.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2733 = (function (f,coll){
var temp__3723__auto____2729 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2729))
{var s__2730 = temp__3723__auto____2729;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2730),cljs.core.next.call(null,s__2730));
} else
{return f.call(null);
}
});
var seq_reduce__2734 = (function (f,val,coll){
var val__2731 = val;
var coll__2732 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2732))
{{
var G__2736 = f.call(null,val__2731,cljs.core.first.call(null,coll__2732));
var G__2737 = cljs.core.next.call(null,coll__2732);
val__2731 = G__2736;
coll__2732 = G__2737;
continue;
}
} else
{return val__2731;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2733.call(this,f,val);
case  3 :
return seq_reduce__2734.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2738 = null;
var G__2738__2739 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2738__2740 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2738 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2738__2739.call(this,coll,f);
case  3 :
return G__2738__2740.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2738;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2742 = (function (){
return 0;
});
var _PLUS___2743 = (function (x){
return x;
});
var _PLUS___2744 = (function (x,y){
return (x + y);
});
var _PLUS___2745 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
});
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2742.call(this);
case  1 :
return _PLUS___2743.call(this,x);
case  2 :
return _PLUS___2744.call(this,x,y);
default:
return _PLUS___2745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = (function (arglist__2747){
var x = cljs.core.first(arglist__2747);
var y = cljs.core.first(cljs.core.next(arglist__2747));
var more = cljs.core.rest(cljs.core.next(arglist__2747));
return _PLUS___2745.call(null, x, y, more);
});
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
var ___2748 = (function (x){
return (- x);
});
var ___2749 = (function (x,y){
return (x - y);
});
var ___2750 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
});
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2748.call(this,x);
case  2 :
return ___2749.call(this,x,y);
default:
return ___2750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = (function (arglist__2752){
var x = cljs.core.first(arglist__2752);
var y = cljs.core.first(cljs.core.next(arglist__2752));
var more = cljs.core.rest(cljs.core.next(arglist__2752));
return ___2750.call(null, x, y, more);
});
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2753 = (function (){
return 1;
});
var _STAR___2754 = (function (x){
return x;
});
var _STAR___2755 = (function (x,y){
return (x * y);
});
var _STAR___2756 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
});
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2753.call(this);
case  1 :
return _STAR___2754.call(this,x);
case  2 :
return _STAR___2755.call(this,x,y);
default:
return _STAR___2756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = (function (arglist__2758){
var x = cljs.core.first(arglist__2758);
var y = cljs.core.first(cljs.core.next(arglist__2758));
var more = cljs.core.rest(cljs.core.next(arglist__2758));
return _STAR___2756.call(null, x, y, more);
});
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
var _SLASH___2759 = (function (x){
return (1 / x);
});
var _SLASH___2760 = (function (x,y){
return (x / y);
});
var _SLASH___2761 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
});
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2759.call(this,x);
case  2 :
return _SLASH___2760.call(this,x,y);
default:
return _SLASH___2761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = (function (arglist__2763){
var x = cljs.core.first(arglist__2763);
var y = cljs.core.first(cljs.core.next(arglist__2763));
var more = cljs.core.rest(cljs.core.next(arglist__2763));
return _SLASH___2761.call(null, x, y, more);
});
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
var _LT___2764 = (function (x){
return true;
});
var _LT___2765 = (function (x,y){
return (x < y);
});
var _LT___2766 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2768 = y;
var G__2769 = cljs.core.first.call(null,more);
var G__2770 = cljs.core.next.call(null,more);
x = G__2768;
y = G__2769;
more = G__2770;
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
});
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2764.call(this,x);
case  2 :
return _LT___2765.call(this,x,y);
default:
return _LT___2766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = (function (arglist__2771){
var x = cljs.core.first(arglist__2771);
var y = cljs.core.first(cljs.core.next(arglist__2771));
var more = cljs.core.rest(cljs.core.next(arglist__2771));
return _LT___2766.call(null, x, y, more);
});
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
var _LT__EQ___2772 = (function (x){
return true;
});
var _LT__EQ___2773 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2774 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2776 = y;
var G__2777 = cljs.core.first.call(null,more);
var G__2778 = cljs.core.next.call(null,more);
x = G__2776;
y = G__2777;
more = G__2778;
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
});
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2772.call(this,x);
case  2 :
return _LT__EQ___2773.call(this,x,y);
default:
return _LT__EQ___2774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__2779){
var x = cljs.core.first(arglist__2779);
var y = cljs.core.first(cljs.core.next(arglist__2779));
var more = cljs.core.rest(cljs.core.next(arglist__2779));
return _LT__EQ___2774.call(null, x, y, more);
});
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
var _GT___2780 = (function (x){
return true;
});
var _GT___2781 = (function (x,y){
return (x > y);
});
var _GT___2782 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2784 = y;
var G__2785 = cljs.core.first.call(null,more);
var G__2786 = cljs.core.next.call(null,more);
x = G__2784;
y = G__2785;
more = G__2786;
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
});
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2780.call(this,x);
case  2 :
return _GT___2781.call(this,x,y);
default:
return _GT___2782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = (function (arglist__2787){
var x = cljs.core.first(arglist__2787);
var y = cljs.core.first(cljs.core.next(arglist__2787));
var more = cljs.core.rest(cljs.core.next(arglist__2787));
return _GT___2782.call(null, x, y, more);
});
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
var _GT__EQ___2788 = (function (x){
return true;
});
var _GT__EQ___2789 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2790 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2792 = y;
var G__2793 = cljs.core.first.call(null,more);
var G__2794 = cljs.core.next.call(null,more);
x = G__2792;
y = G__2793;
more = G__2794;
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
});
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2788.call(this,x);
case  2 :
return _GT__EQ___2789.call(this,x,y);
default:
return _GT__EQ___2790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__2795){
var x = cljs.core.first(arglist__2795);
var y = cljs.core.first(cljs.core.next(arglist__2795));
var more = cljs.core.rest(cljs.core.next(arglist__2795));
return _GT__EQ___2790.call(null, x, y, more);
});
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
var max__2796 = (function (x){
return x;
});
var max__2797 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2798 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
});
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2796.call(this,x);
case  2 :
return max__2797.call(this,x,y);
default:
return max__2798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = (function (arglist__2800){
var x = cljs.core.first(arglist__2800);
var y = cljs.core.first(cljs.core.next(arglist__2800));
var more = cljs.core.rest(cljs.core.next(arglist__2800));
return max__2798.call(null, x, y, more);
});
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2801 = (function (x){
return x;
});
var min__2802 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2803 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
});
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2801.call(this,x);
case  2 :
return min__2802.call(this,x,y);
default:
return min__2803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = (function (arglist__2805){
var x = cljs.core.first(arglist__2805);
var y = cljs.core.first(cljs.core.next(arglist__2805));
var more = cljs.core.rest(cljs.core.next(arglist__2805));
return min__2803.call(null, x, y, more);
});
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
var rem__2806 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2806) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2807 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2807));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2808 = (function (){
return Math.random.call(null);
});
var rand__2809 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2808.call(this);
case  1 :
return rand__2809.call(this,n);
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
var _EQ__EQ___2811 = (function (x){
return true;
});
var _EQ__EQ___2812 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2813 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2815 = y;
var G__2816 = cljs.core.first.call(null,more);
var G__2817 = cljs.core.next.call(null,more);
x = G__2815;
y = G__2816;
more = G__2817;
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
});
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2811.call(this,x);
case  2 :
return _EQ__EQ___2812.call(this,x,y);
default:
return _EQ__EQ___2813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__2818){
var x = cljs.core.first(arglist__2818);
var y = cljs.core.first(cljs.core.next(arglist__2818));
var more = cljs.core.rest(cljs.core.next(arglist__2818));
return _EQ__EQ___2813.call(null, x, y, more);
});
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
var n__2819 = n;
var xs__2820 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2821 = xs__2820;

if(cljs.core.truth_(and__3574__auto____2821))
{return cljs.core.pos_QMARK_.call(null,n__2819);
} else
{return and__3574__auto____2821;
}
})()))
{{
var G__2822 = cljs.core.dec.call(null,n__2819);
var G__2823 = cljs.core.next.call(null,xs__2820);
n__2819 = G__2822;
xs__2820 = G__2823;
continue;
}
} else
{return xs__2820;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2828 = null;
var G__2828__2829 = (function (coll,n){
var temp__3723__auto____2824 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2824))
{var xs__2825 = temp__3723__auto____2824;

return cljs.core.first.call(null,xs__2825);
} else
{throw "Index out of bounds";
}
});
var G__2828__2830 = (function (coll,n,not_found){
var temp__3723__auto____2826 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2826))
{var xs__2827 = temp__3723__auto____2826;

return cljs.core.first.call(null,xs__2827);
} else
{return not_found;
}
});
G__2828 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2828__2829.call(this,coll,n);
case  3 :
return G__2828__2830.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2828;
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
var str__2832 = (function (){
return "";
});
var str__2833 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2834 = (function (x,var_args){
var ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2836 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2837 = cljs.core.next.call(null,more);
sb = G__2836;
more = G__2837;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
});
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2832.call(this);
case  1 :
return str__2833.call(this,x);
default:
return str__2834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = (function (arglist__2838){
var x = cljs.core.first(arglist__2838);
var ys = cljs.core.rest(arglist__2838);
return str__2834.call(null, x, ys);
});
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2839 = (function (s,start){
return s.substring(start);
});
var subs__2840 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2839.call(this,s,start);
case  3 :
return subs__2840.call(this,s,start,end);
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
var symbol__2842 = (function (name){
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
var symbol__2843 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2842.call(this,ns);
case  2 :
return symbol__2843.call(this,ns,name);
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
var keyword__2845 = (function (name){
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
var keyword__2846 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2845.call(this,ns);
case  2 :
return keyword__2846.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2848 = cljs.core.seq.call(null,x);
var ys__2849 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2848)))
{return cljs.core.nil_QMARK_.call(null,ys__2849);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2849)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2848),cljs.core.first.call(null,ys__2849))))
{{
var G__2850 = cljs.core.next.call(null,xs__2848);
var G__2851 = cljs.core.next.call(null,ys__2849);
xs__2848 = G__2850;
ys__2849 = G__2851;
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
return cljs.core.reduce.call(null,(function (p1__2852_SHARP_,p2__2853_SHARP_){
return cljs.core.hash_combine.call(null,p1__2852_SHARP_,cljs.core.hash.call(null,p2__2853_SHARP_));
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
var this__2854 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2855 = this;
return (new cljs.core.List(this__2855.meta,o,coll,cljs.core.inc.call(null,this__2855.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2856 = this;
return this__2856.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2857 = this;
return this__2857.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2858 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2859 = this;
return this__2859.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2860 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2861 = this;
return (new cljs.core.List(meta,this__2861.first,this__2861.rest,this__2861.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2862 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2863 = this;
return this__2863.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2864 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2865 = this;
return this__2865.count;
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
var this__2866 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2867 = this;
return (new cljs.core.List(this__2867.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2868 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2869 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2870 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2871 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2872 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2873 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2874 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2875 = this;
return this__2875.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2876 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2877 = this;
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
cljs.core.list = (function list(var_args){
var items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
});

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
var this__2878 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2879 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2880 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2881 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2881.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2882 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2883 = this;
return this__2883.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2884 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2884.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2884.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2885 = this;
return this__2885.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2886 = this;
return (new cljs.core.Cons(meta,this__2886.first,this__2886.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2887 = null;
var G__2887__2888 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2887__2889 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2887 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2887__2888.call(this,string,f);
case  3 :
return G__2887__2889.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2887;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2891 = null;
var G__2891__2892 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2891__2893 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2891 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2891__2892.call(this,string,k);
case  3 :
return G__2891__2893.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2891;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2895 = null;
var G__2895__2896 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2895__2897 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2895 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2895__2896.call(this,string,n);
case  3 :
return G__2895__2897.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2895;
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
var G__2899 = null;
var G__2899__2900 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2899__2901 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2899 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2899__2900.call(this,_,coll);
case  3 :
return G__2899__2901.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2899;
})()
;
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2903 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2903;
} else
{lazy_seq.x = x__2903.call(null);
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
var this__2904 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2905 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2906 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2907 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2907.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2908 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2909 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2910 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2911 = this;
return this__2911.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2912 = this;
return (new cljs.core.LazySeq(meta,this__2912.realized,this__2912.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2913 = cljs.core.array.call(null);

var s__2914 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2914)))
{ary__2913.push(cljs.core.first.call(null,s__2914));
{
var G__2915 = cljs.core.next.call(null,s__2914);
s__2914 = G__2915;
continue;
}
} else
{return ary__2913;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2916 = s;
var i__2917 = n;
var sum__2918 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2919 = cljs.core.pos_QMARK_.call(null,i__2917);

if(cljs.core.truth_(and__3574__auto____2919))
{return cljs.core.seq.call(null,s__2916);
} else
{return and__3574__auto____2919;
}
})()))
{{
var G__2920 = cljs.core.next.call(null,s__2916);
var G__2921 = cljs.core.dec.call(null,i__2917);
var G__2922 = cljs.core.inc.call(null,sum__2918);
s__2916 = G__2920;
i__2917 = G__2921;
sum__2918 = G__2922;
continue;
}
} else
{return sum__2918;
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
var concat__2926 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2927 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2928 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2923 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2923))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2923),concat.call(null,cljs.core.rest.call(null,s__2923),y));
} else
{return y;
}
})));
});
var concat__2929 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
var cat__2925 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2924 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2924))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2924),cat.call(null,cljs.core.rest.call(null,xys__2924),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2925.call(null,concat.call(null,x,y),zs);
});
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2926.call(this);
case  1 :
return concat__2927.call(this,x);
case  2 :
return concat__2928.call(this,x,y);
default:
return concat__2929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = (function (arglist__2931){
var x = cljs.core.first(arglist__2931);
var y = cljs.core.first(cljs.core.next(arglist__2931));
var zs = cljs.core.rest(cljs.core.next(arglist__2931));
return concat__2929.call(null, x, y, zs);
});
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
var list_STAR___2932 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2933 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2934 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2935 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2936 = (function (a,b,c,d,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
});
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2932.call(this,a);
case  2 :
return list_STAR___2933.call(this,a,b);
case  3 :
return list_STAR___2934.call(this,a,b,c);
case  4 :
return list_STAR___2935.call(this,a,b,c,d);
default:
return list_STAR___2936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = (function (arglist__2938){
var a = cljs.core.first(arglist__2938);
var b = cljs.core.first(cljs.core.next(arglist__2938));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2938)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2938))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2938))));
return list_STAR___2936.call(null, a, b, c, d, more);
});
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
var apply__2948 = (function (f,args){
var fixed_arity__2939 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,fixed_arity__2939),fixed_arity__2939)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2949 = (function (f,x,args){
var arglist__2940 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2941 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2940,fixed_arity__2941),fixed_arity__2941)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2940));
} else
{return f.cljs$lang$applyTo(arglist__2940);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2940));
}
});
var apply__2950 = (function (f,x,y,args){
var arglist__2942 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2943 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2942,fixed_arity__2943),fixed_arity__2943)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2942));
} else
{return f.cljs$lang$applyTo(arglist__2942);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2942));
}
});
var apply__2951 = (function (f,x,y,z,args){
var arglist__2944 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2945 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2944,fixed_arity__2945),fixed_arity__2945)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2944));
} else
{return f.cljs$lang$applyTo(arglist__2944);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2944));
}
});
var apply__2952 = (function (f,a,b,c,d,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
var arglist__2946 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2947 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2946,fixed_arity__2947),fixed_arity__2947)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2946));
} else
{return f.cljs$lang$applyTo(arglist__2946);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2946));
}
});
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2948.call(this,f,a);
case  3 :
return apply__2949.call(this,f,a,b);
case  4 :
return apply__2950.call(this,f,a,b,c);
case  5 :
return apply__2951.call(this,f,a,b,c,d);
default:
return apply__2952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = (function (arglist__2954){
var f = cljs.core.first(arglist__2954);
var a = cljs.core.first(cljs.core.next(arglist__2954));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2954)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2954))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2954)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2954)))));
return apply__2952.call(null, f, a, b, c, d, args);
});
return apply;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2955 = (function (x){
return false;
});
var not_EQ___2956 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2957 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
});
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2955.call(this,x);
case  2 :
return not_EQ___2956.call(this,x,y);
default:
return not_EQ___2957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = (function (arglist__2959){
var x = cljs.core.first(arglist__2959);
var y = cljs.core.first(cljs.core.next(arglist__2959));
var more = cljs.core.rest(cljs.core.next(arglist__2959));
return not_EQ___2957.call(null, x, y, more);
});
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
var G__2960 = pred;
var G__2961 = cljs.core.next.call(null,coll);
pred = G__2960;
coll = G__2961;
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
{var or__3576__auto____2962 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2962))
{return or__3576__auto____2962;
} else
{{
var G__2963 = pred;
var G__2964 = cljs.core.next.call(null,coll);
pred = G__2963;
coll = G__2964;
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
var G__2965 = null;
var G__2965__2966 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2965__2967 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2965__2968 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2965__2969 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
});
G__2965 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2965__2966.call(this);
case  1 :
return G__2965__2967.call(this,x);
case  2 :
return G__2965__2968.call(this,x,y);
default:
return G__2965__2969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2965.cljs$lang$maxFixedArity = 2;
G__2965.cljs$lang$applyTo = (function (arglist__2971){
var x = cljs.core.first(arglist__2971);
var y = cljs.core.first(cljs.core.next(arglist__2971));
var zs = cljs.core.rest(cljs.core.next(arglist__2971));
return G__2965__2969.call(null, x, y, zs);
});
return G__2965;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return x;
});
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
var comp__2975 = (function (){
return cljs.core.identity;
});
var comp__2976 = (function (f){
return f;
});
var comp__2977 = (function (f,g){
return (function() {
var G__2981 = null;
var G__2981__2982 = (function (){
return f.call(null,g.call(null));
});
var G__2981__2983 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2981__2984 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2981__2985 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2981__2986 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
});
G__2981 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2981__2982.call(this);
case  1 :
return G__2981__2983.call(this,x);
case  2 :
return G__2981__2984.call(this,x,y);
case  3 :
return G__2981__2985.call(this,x,y,z);
default:
return G__2981__2986.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2981.cljs$lang$maxFixedArity = 3;
G__2981.cljs$lang$applyTo = (function (arglist__2988){
var x = cljs.core.first(arglist__2988);
var y = cljs.core.first(cljs.core.next(arglist__2988));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2988)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2988)));
return G__2981__2986.call(null, x, y, z, args);
});
return G__2981;
})()
});
var comp__2978 = (function (f,g,h){
return (function() {
var G__2989 = null;
var G__2989__2990 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2989__2991 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2989__2992 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2989__2993 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2989__2994 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
});
G__2989 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2989__2990.call(this);
case  1 :
return G__2989__2991.call(this,x);
case  2 :
return G__2989__2992.call(this,x,y);
case  3 :
return G__2989__2993.call(this,x,y,z);
default:
return G__2989__2994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2989.cljs$lang$maxFixedArity = 3;
G__2989.cljs$lang$applyTo = (function (arglist__2996){
var x = cljs.core.first(arglist__2996);
var y = cljs.core.first(cljs.core.next(arglist__2996));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2996)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2996)));
return G__2989__2994.call(null, x, y, z, args);
});
return G__2989;
})()
});
var comp__2979 = (function (f1,f2,f3,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__2972 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var ret__2973 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2972),args);
var fs__2974 = cljs.core.next.call(null,fs__2972);

while(true){
if(cljs.core.truth_(fs__2974))
{{
var G__2997 = cljs.core.first.call(null,fs__2974).call(null,ret__2973);
var G__2998 = cljs.core.next.call(null,fs__2974);
ret__2973 = G__2997;
fs__2974 = G__2998;
continue;
}
} else
{return ret__2973;
}
break;
}
});
});
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2975.call(this);
case  1 :
return comp__2976.call(this,f1);
case  2 :
return comp__2977.call(this,f1,f2);
case  3 :
return comp__2978.call(this,f1,f2,f3);
default:
return comp__2979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = (function (arglist__2999){
var f1 = cljs.core.first(arglist__2999);
var f2 = cljs.core.first(cljs.core.next(arglist__2999));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2999)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2999)));
return comp__2979.call(null, f1, f2, f3, fs);
});
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
var partial__3000 = (function (f,arg1){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,args);
});
});
var partial__3001 = (function (f,arg1,arg2){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,args);
});
});
var partial__3002 = (function (f,arg1,arg2,arg3){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
});
});
var partial__3003 = (function (f,arg1,arg2,arg3,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
});
});
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3000.call(this,f,arg1);
case  3 :
return partial__3001.call(this,f,arg1,arg2);
case  4 :
return partial__3002.call(this,f,arg1,arg2,arg3);
default:
return partial__3003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = (function (arglist__3005){
var f = cljs.core.first(arglist__3005);
var arg1 = cljs.core.first(cljs.core.next(arglist__3005));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3005)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3005))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3005))));
return partial__3003.call(null, f, arg1, arg2, arg3, more);
});
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
var fnil__3012 = (function (f,x){
return (function() {
var G__3016 = null;
var G__3016__3017 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3016__3018 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3016__3019 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3016__3020 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
});
G__3016 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3016__3017.call(this,a);
case  2 :
return G__3016__3018.call(this,a,b);
case  3 :
return G__3016__3019.call(this,a,b,c);
default:
return G__3016__3020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3016.cljs$lang$maxFixedArity = 3;
G__3016.cljs$lang$applyTo = (function (arglist__3022){
var a = cljs.core.first(arglist__3022);
var b = cljs.core.first(cljs.core.next(arglist__3022));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3022)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3022)));
return G__3016__3020.call(null, a, b, c, ds);
});
return G__3016;
})()
});
var fnil__3013 = (function (f,x,y){
return (function() {
var G__3023 = null;
var G__3023__3024 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3023__3025 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3023__3026 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
});
G__3023 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3023__3024.call(this,a,b);
case  3 :
return G__3023__3025.call(this,a,b,c);
default:
return G__3023__3026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3023.cljs$lang$maxFixedArity = 3;
G__3023.cljs$lang$applyTo = (function (arglist__3028){
var a = cljs.core.first(arglist__3028);
var b = cljs.core.first(cljs.core.next(arglist__3028));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3028)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3028)));
return G__3023__3026.call(null, a, b, c, ds);
});
return G__3023;
})()
});
var fnil__3014 = (function (f,x,y,z){
return (function() {
var G__3029 = null;
var G__3029__3030 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3029__3031 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3029__3032 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
});
G__3029 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3029__3030.call(this,a,b);
case  3 :
return G__3029__3031.call(this,a,b,c);
default:
return G__3029__3032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3029.cljs$lang$maxFixedArity = 3;
G__3029.cljs$lang$applyTo = (function (arglist__3034){
var a = cljs.core.first(arglist__3034);
var b = cljs.core.first(cljs.core.next(arglist__3034));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3034)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3034)));
return G__3029__3032.call(null, a, b, c, ds);
});
return G__3029;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3012.call(this,f,x);
case  3 :
return fnil__3013.call(this,f,x,y);
case  4 :
return fnil__3014.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3079 = (function (p){
return (function() {
var ep1 = null;
var ep1__3084 = (function (){
return true;
});
var ep1__3085 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3086 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3041 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____3041))
{return p.call(null,y);
} else
{return and__3574__auto____3041;
}
})());
});
var ep1__3087 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3042 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____3042))
{var and__3574__auto____3043 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____3043))
{return p.call(null,z);
} else
{return and__3574__auto____3043;
}
} else
{return and__3574__auto____3042;
}
})());
});
var ep1__3088 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3044 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3044))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____3044;
}
})());
});
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3084.call(this);
case  1 :
return ep1__3085.call(this,x);
case  2 :
return ep1__3086.call(this,x,y);
case  3 :
return ep1__3087.call(this,x,y,z);
default:
return ep1__3088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = (function (arglist__3090){
var x = cljs.core.first(arglist__3090);
var y = cljs.core.first(cljs.core.next(arglist__3090));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3090)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3090)));
return ep1__3088.call(null, x, y, z, args);
});
return ep1;
})()
});
var every_pred__3080 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3091 = (function (){
return true;
});
var ep2__3092 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3045 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3045))
{return p2.call(null,x);
} else
{return and__3574__auto____3045;
}
})());
});
var ep2__3093 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3046 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3046))
{var and__3574__auto____3047 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3047))
{var and__3574__auto____3048 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3048))
{return p2.call(null,y);
} else
{return and__3574__auto____3048;
}
} else
{return and__3574__auto____3047;
}
} else
{return and__3574__auto____3046;
}
})());
});
var ep2__3094 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3049 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3049))
{var and__3574__auto____3050 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3050))
{var and__3574__auto____3051 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____3051))
{var and__3574__auto____3052 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3052))
{var and__3574__auto____3053 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3053))
{return p2.call(null,z);
} else
{return and__3574__auto____3053;
}
} else
{return and__3574__auto____3052;
}
} else
{return and__3574__auto____3051;
}
} else
{return and__3574__auto____3050;
}
} else
{return and__3574__auto____3049;
}
})());
});
var ep2__3095 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3054 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3054))
{return cljs.core.every_QMARK_.call(null,(function (p1__3006_SHARP_){
var and__3574__auto____3055 = p1.call(null,p1__3006_SHARP_);

if(cljs.core.truth_(and__3574__auto____3055))
{return p2.call(null,p1__3006_SHARP_);
} else
{return and__3574__auto____3055;
}
}),args);
} else
{return and__3574__auto____3054;
}
})());
});
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3091.call(this);
case  1 :
return ep2__3092.call(this,x);
case  2 :
return ep2__3093.call(this,x,y);
case  3 :
return ep2__3094.call(this,x,y,z);
default:
return ep2__3095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = (function (arglist__3097){
var x = cljs.core.first(arglist__3097);
var y = cljs.core.first(cljs.core.next(arglist__3097));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3097)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3097)));
return ep2__3095.call(null, x, y, z, args);
});
return ep2;
})()
});
var every_pred__3081 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3098 = (function (){
return true;
});
var ep3__3099 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3056 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3056))
{var and__3574__auto____3057 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3057))
{return p3.call(null,x);
} else
{return and__3574__auto____3057;
}
} else
{return and__3574__auto____3056;
}
})());
});
var ep3__3100 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3058 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3058))
{var and__3574__auto____3059 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3059))
{var and__3574__auto____3060 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____3060))
{var and__3574__auto____3061 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3061))
{var and__3574__auto____3062 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3062))
{return p3.call(null,y);
} else
{return and__3574__auto____3062;
}
} else
{return and__3574__auto____3061;
}
} else
{return and__3574__auto____3060;
}
} else
{return and__3574__auto____3059;
}
} else
{return and__3574__auto____3058;
}
})());
});
var ep3__3101 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3063 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3063))
{var and__3574__auto____3064 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3064))
{var and__3574__auto____3065 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____3065))
{var and__3574__auto____3066 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3066))
{var and__3574__auto____3067 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3067))
{var and__3574__auto____3068 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____3068))
{var and__3574__auto____3069 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____3069))
{var and__3574__auto____3070 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____3070))
{return p3.call(null,z);
} else
{return and__3574__auto____3070;
}
} else
{return and__3574__auto____3069;
}
} else
{return and__3574__auto____3068;
}
} else
{return and__3574__auto____3067;
}
} else
{return and__3574__auto____3066;
}
} else
{return and__3574__auto____3065;
}
} else
{return and__3574__auto____3064;
}
} else
{return and__3574__auto____3063;
}
})());
});
var ep3__3102 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3071 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3071))
{return cljs.core.every_QMARK_.call(null,(function (p1__3007_SHARP_){
var and__3574__auto____3072 = p1.call(null,p1__3007_SHARP_);

if(cljs.core.truth_(and__3574__auto____3072))
{var and__3574__auto____3073 = p2.call(null,p1__3007_SHARP_);

if(cljs.core.truth_(and__3574__auto____3073))
{return p3.call(null,p1__3007_SHARP_);
} else
{return and__3574__auto____3073;
}
} else
{return and__3574__auto____3072;
}
}),args);
} else
{return and__3574__auto____3071;
}
})());
});
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3098.call(this);
case  1 :
return ep3__3099.call(this,x);
case  2 :
return ep3__3100.call(this,x,y);
case  3 :
return ep3__3101.call(this,x,y,z);
default:
return ep3__3102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = (function (arglist__3104){
var x = cljs.core.first(arglist__3104);
var y = cljs.core.first(cljs.core.next(arglist__3104));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3104)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3104)));
return ep3__3102.call(null, x, y, z, args);
});
return ep3;
})()
});
var every_pred__3082 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__3074 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3105 = (function (){
return true;
});
var epn__3106 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3008_SHARP_){
return p1__3008_SHARP_.call(null,x);
}),ps__3074);
});
var epn__3107 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3009_SHARP_){
var and__3574__auto____3075 = p1__3009_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____3075))
{return p1__3009_SHARP_.call(null,y);
} else
{return and__3574__auto____3075;
}
}),ps__3074);
});
var epn__3108 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3010_SHARP_){
var and__3574__auto____3076 = p1__3010_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____3076))
{var and__3574__auto____3077 = p1__3010_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____3077))
{return p1__3010_SHARP_.call(null,z);
} else
{return and__3574__auto____3077;
}
} else
{return and__3574__auto____3076;
}
}),ps__3074);
});
var epn__3109 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3078 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3078))
{return cljs.core.every_QMARK_.call(null,(function (p1__3011_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3011_SHARP_,args);
}),ps__3074);
} else
{return and__3574__auto____3078;
}
})());
});
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3105.call(this);
case  1 :
return epn__3106.call(this,x);
case  2 :
return epn__3107.call(this,x,y);
case  3 :
return epn__3108.call(this,x,y,z);
default:
return epn__3109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = (function (arglist__3111){
var x = cljs.core.first(arglist__3111);
var y = cljs.core.first(cljs.core.next(arglist__3111));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3111)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3111)));
return epn__3109.call(null, x, y, z, args);
});
return epn;
})()
});
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3079.call(this,p1);
case  2 :
return every_pred__3080.call(this,p1,p2);
case  3 :
return every_pred__3081.call(this,p1,p2,p3);
default:
return every_pred__3082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = (function (arglist__3112){
var p1 = cljs.core.first(arglist__3112);
var p2 = cljs.core.first(cljs.core.next(arglist__3112));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3112)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3112)));
return every_pred__3082.call(null, p1, p2, p3, ps);
});
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
var some_fn__3152 = (function (p){
return (function() {
var sp1 = null;
var sp1__3157 = (function (){
return null;
});
var sp1__3158 = (function (x){
return p.call(null,x);
});
var sp1__3159 = (function (x,y){
var or__3576__auto____3114 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____3114))
{return or__3576__auto____3114;
} else
{return p.call(null,y);
}
});
var sp1__3160 = (function (x,y,z){
var or__3576__auto____3115 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____3115))
{return or__3576__auto____3115;
} else
{var or__3576__auto____3116 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____3116))
{return or__3576__auto____3116;
} else
{return p.call(null,z);
}
}
});
var sp1__3161 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3117 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3117))
{return or__3576__auto____3117;
} else
{return cljs.core.some.call(null,p,args);
}
});
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3157.call(this);
case  1 :
return sp1__3158.call(this,x);
case  2 :
return sp1__3159.call(this,x,y);
case  3 :
return sp1__3160.call(this,x,y,z);
default:
return sp1__3161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = (function (arglist__3163){
var x = cljs.core.first(arglist__3163);
var y = cljs.core.first(cljs.core.next(arglist__3163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3163)));
return sp1__3161.call(null, x, y, z, args);
});
return sp1;
})()
});
var some_fn__3153 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3164 = (function (){
return null;
});
var sp2__3165 = (function (x){
var or__3576__auto____3118 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3118))
{return or__3576__auto____3118;
} else
{return p2.call(null,x);
}
});
var sp2__3166 = (function (x,y){
var or__3576__auto____3119 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3119))
{return or__3576__auto____3119;
} else
{var or__3576__auto____3120 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3120))
{return or__3576__auto____3120;
} else
{var or__3576__auto____3121 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3121))
{return or__3576__auto____3121;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3167 = (function (x,y,z){
var or__3576__auto____3122 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3122))
{return or__3576__auto____3122;
} else
{var or__3576__auto____3123 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3123))
{return or__3576__auto____3123;
} else
{var or__3576__auto____3124 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____3124))
{return or__3576__auto____3124;
} else
{var or__3576__auto____3125 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3125))
{return or__3576__auto____3125;
} else
{var or__3576__auto____3126 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3126))
{return or__3576__auto____3126;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3168 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3127 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3127))
{return or__3576__auto____3127;
} else
{return cljs.core.some.call(null,(function (p1__3035_SHARP_){
var or__3576__auto____3128 = p1.call(null,p1__3035_SHARP_);

if(cljs.core.truth_(or__3576__auto____3128))
{return or__3576__auto____3128;
} else
{return p2.call(null,p1__3035_SHARP_);
}
}),args);
}
});
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3164.call(this);
case  1 :
return sp2__3165.call(this,x);
case  2 :
return sp2__3166.call(this,x,y);
case  3 :
return sp2__3167.call(this,x,y,z);
default:
return sp2__3168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = (function (arglist__3170){
var x = cljs.core.first(arglist__3170);
var y = cljs.core.first(cljs.core.next(arglist__3170));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3170)));
return sp2__3168.call(null, x, y, z, args);
});
return sp2;
})()
});
var some_fn__3154 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3171 = (function (){
return null;
});
var sp3__3172 = (function (x){
var or__3576__auto____3129 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3129))
{return or__3576__auto____3129;
} else
{var or__3576__auto____3130 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3130))
{return or__3576__auto____3130;
} else
{return p3.call(null,x);
}
}
});
var sp3__3173 = (function (x,y){
var or__3576__auto____3131 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3131))
{return or__3576__auto____3131;
} else
{var or__3576__auto____3132 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3132))
{return or__3576__auto____3132;
} else
{var or__3576__auto____3133 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____3133))
{return or__3576__auto____3133;
} else
{var or__3576__auto____3134 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3134))
{return or__3576__auto____3134;
} else
{var or__3576__auto____3135 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3135))
{return or__3576__auto____3135;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3174 = (function (x,y,z){
var or__3576__auto____3136 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3136))
{return or__3576__auto____3136;
} else
{var or__3576__auto____3137 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3137))
{return or__3576__auto____3137;
} else
{var or__3576__auto____3138 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____3138))
{return or__3576__auto____3138;
} else
{var or__3576__auto____3139 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3139))
{return or__3576__auto____3139;
} else
{var or__3576__auto____3140 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3140))
{return or__3576__auto____3140;
} else
{var or__3576__auto____3141 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____3141))
{return or__3576__auto____3141;
} else
{var or__3576__auto____3142 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____3142))
{return or__3576__auto____3142;
} else
{var or__3576__auto____3143 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____3143))
{return or__3576__auto____3143;
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
var sp3__3175 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3144 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3144))
{return or__3576__auto____3144;
} else
{return cljs.core.some.call(null,(function (p1__3036_SHARP_){
var or__3576__auto____3145 = p1.call(null,p1__3036_SHARP_);

if(cljs.core.truth_(or__3576__auto____3145))
{return or__3576__auto____3145;
} else
{var or__3576__auto____3146 = p2.call(null,p1__3036_SHARP_);

if(cljs.core.truth_(or__3576__auto____3146))
{return or__3576__auto____3146;
} else
{return p3.call(null,p1__3036_SHARP_);
}
}
}),args);
}
});
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3171.call(this);
case  1 :
return sp3__3172.call(this,x);
case  2 :
return sp3__3173.call(this,x,y);
case  3 :
return sp3__3174.call(this,x,y,z);
default:
return sp3__3175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = (function (arglist__3177){
var x = cljs.core.first(arglist__3177);
var y = cljs.core.first(cljs.core.next(arglist__3177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3177)));
return sp3__3175.call(null, x, y, z, args);
});
return sp3;
})()
});
var some_fn__3155 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__3147 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3178 = (function (){
return null;
});
var spn__3179 = (function (x){
return cljs.core.some.call(null,(function (p1__3037_SHARP_){
return p1__3037_SHARP_.call(null,x);
}),ps__3147);
});
var spn__3180 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3038_SHARP_){
var or__3576__auto____3148 = p1__3038_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3148))
{return or__3576__auto____3148;
} else
{return p1__3038_SHARP_.call(null,y);
}
}),ps__3147);
});
var spn__3181 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3039_SHARP_){
var or__3576__auto____3149 = p1__3039_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3149))
{return or__3576__auto____3149;
} else
{var or__3576__auto____3150 = p1__3039_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____3150))
{return or__3576__auto____3150;
} else
{return p1__3039_SHARP_.call(null,z);
}
}
}),ps__3147);
});
var spn__3182 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____3151 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3151))
{return or__3576__auto____3151;
} else
{return cljs.core.some.call(null,(function (p1__3040_SHARP_){
return cljs.core.some.call(null,p1__3040_SHARP_,args);
}),ps__3147);
}
});
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3178.call(this);
case  1 :
return spn__3179.call(this,x);
case  2 :
return spn__3180.call(this,x,y);
case  3 :
return spn__3181.call(this,x,y,z);
default:
return spn__3182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = (function (arglist__3184){
var x = cljs.core.first(arglist__3184);
var y = cljs.core.first(cljs.core.next(arglist__3184));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3184)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3184)));
return spn__3182.call(null, x, y, z, args);
});
return spn;
})()
});
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3152.call(this,p1);
case  2 :
return some_fn__3153.call(this,p1,p2);
case  3 :
return some_fn__3154.call(this,p1,p2,p3);
default:
return some_fn__3155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = (function (arglist__3185){
var p1 = cljs.core.first(arglist__3185);
var p2 = cljs.core.first(cljs.core.next(arglist__3185));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3185)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3185)));
return some_fn__3155.call(null, p1, p2, p3, ps);
});
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
var map__3198 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3186))
{var s__3187 = temp__3726__auto____3186;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3187)),map.call(null,f,cljs.core.rest.call(null,s__3187)));
} else
{return null;
}
})));
});
var map__3199 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3188 = cljs.core.seq.call(null,c1);
var s2__3189 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____3190 = s1__3188;

if(cljs.core.truth_(and__3574__auto____3190))
{return s2__3189;
} else
{return and__3574__auto____3190;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3188),cljs.core.first.call(null,s2__3189)),map.call(null,f,cljs.core.rest.call(null,s1__3188),cljs.core.rest.call(null,s2__3189)));
} else
{return null;
}
})));
});
var map__3200 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3191 = cljs.core.seq.call(null,c1);
var s2__3192 = cljs.core.seq.call(null,c2);
var s3__3193 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____3194 = s1__3191;

if(cljs.core.truth_(and__3574__auto____3194))
{var and__3574__auto____3195 = s2__3192;

if(cljs.core.truth_(and__3574__auto____3195))
{return s3__3193;
} else
{return and__3574__auto____3195;
}
} else
{return and__3574__auto____3194;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3191),cljs.core.first.call(null,s2__3192),cljs.core.first.call(null,s3__3193)),map.call(null,f,cljs.core.rest.call(null,s1__3191),cljs.core.rest.call(null,s2__3192),cljs.core.rest.call(null,s3__3193)));
} else
{return null;
}
})));
});
var map__3201 = (function (f,c1,c2,c3,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var step__3197 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3196 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3196)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3196),step.call(null,map.call(null,cljs.core.rest,ss__3196)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3113_SHARP_){
return cljs.core.apply.call(null,f,p1__3113_SHARP_);
}),step__3197.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
});
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3198.call(this,f,c1);
case  3 :
return map__3199.call(this,f,c1,c2);
case  4 :
return map__3200.call(this,f,c1,c2,c3);
default:
return map__3201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = (function (arglist__3203){
var f = cljs.core.first(arglist__3203);
var c1 = cljs.core.first(cljs.core.next(arglist__3203));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3203)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3203))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3203))));
return map__3201.call(null, f, c1, c2, c3, colls);
});
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
{var temp__3726__auto____3204 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3204))
{var s__3205 = temp__3726__auto____3204;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3205),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__3205)));
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
var step__3208 = (function (n,coll){
while(true){
var s__3206 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____3207 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____3207))
{return s__3206;
} else
{return and__3574__auto____3207;
}
})()))
{{
var G__3209 = cljs.core.dec.call(null,n);
var G__3210 = cljs.core.rest.call(null,s__3206);
n = G__3209;
coll = G__3210;
continue;
}
} else
{return s__3206;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3208.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3211 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3212 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3211.call(this,n);
case  2 :
return drop_last__3212.call(this,n,s);
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
var s__3214 = cljs.core.seq.call(null,coll);
var lead__3215 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3215))
{{
var G__3216 = cljs.core.next.call(null,s__3214);
var G__3217 = cljs.core.next.call(null,lead__3215);
s__3214 = G__3216;
lead__3215 = G__3217;
continue;
}
} else
{return s__3214;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3220 = (function (pred,coll){
while(true){
var s__3218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____3219 = s__3218;

if(cljs.core.truth_(and__3574__auto____3219))
{return pred.call(null,cljs.core.first.call(null,s__3218));
} else
{return and__3574__auto____3219;
}
})()))
{{
var G__3221 = pred;
var G__3222 = cljs.core.rest.call(null,s__3218);
pred = G__3221;
coll = G__3222;
continue;
}
} else
{return s__3218;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3220.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3223 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3223))
{var s__3224 = temp__3726__auto____3223;

return cljs.core.concat.call(null,s__3224,cycle.call(null,s__3224));
} else
{return null;
}
})));
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3225 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3226 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3225.call(this,n);
case  2 :
return repeat__3226.call(this,n,x);
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
var repeatedly__3228 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3229 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3228.call(this,n);
case  2 :
return repeatedly__3229.call(this,n,f);
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
var interleave__3235 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3231 = cljs.core.seq.call(null,c1);
var s2__3232 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____3233 = s1__3231;

if(cljs.core.truth_(and__3574__auto____3233))
{return s2__3232;
} else
{return and__3574__auto____3233;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3231),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3232),interleave.call(null,cljs.core.rest.call(null,s1__3231),cljs.core.rest.call(null,s2__3232))));
} else
{return null;
}
})));
});
var interleave__3236 = (function (c1,c2,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3234 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3234)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3234),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3234)));
} else
{return null;
}
})));
});
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3235.call(this,c1,c2);
default:
return interleave__3236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = (function (arglist__3238){
var c1 = cljs.core.first(arglist__3238);
var c2 = cljs.core.first(cljs.core.next(arglist__3238));
var colls = cljs.core.rest(cljs.core.next(arglist__3238));
return interleave__3236.call(null, c1, c2, colls);
});
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
var cat__3241 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3239 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3239))
{var coll__3240 = temp__3723__auto____3239;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3240),cat.call(null,cljs.core.rest.call(null,coll__3240),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3241.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3242 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3243 = (function (f,coll,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
});
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3242.call(this,f,coll);
default:
return mapcat__3243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = (function (arglist__3245){
var f = cljs.core.first(arglist__3245);
var coll = cljs.core.first(cljs.core.next(arglist__3245));
var colls = cljs.core.rest(cljs.core.next(arglist__3245));
return mapcat__3243.call(null, f, coll, colls);
});
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3246 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3246))
{var s__3247 = temp__3726__auto____3246;

var f__3248 = cljs.core.first.call(null,s__3247);
var r__3249 = cljs.core.rest.call(null,s__3247);

if(cljs.core.truth_(pred.call(null,f__3248)))
{return cljs.core.cons.call(null,f__3248,filter.call(null,pred,r__3249));
} else
{return filter.call(null,pred,r__3249);
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
var walk__3251 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3251.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3250_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3250_SHARP_));
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
var partition__3258 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3259 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3252 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3252))
{var s__3253 = temp__3726__auto____3252;

var p__3254 = cljs.core.take.call(null,n,s__3253);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3254))))
{return cljs.core.cons.call(null,p__3254,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3253)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3260 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3255 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3255))
{var s__3256 = temp__3726__auto____3255;

var p__3257 = cljs.core.take.call(null,n,s__3256);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3257))))
{return cljs.core.cons.call(null,p__3257,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3256)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3257,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3258.call(this,n,step);
case  3 :
return partition__3259.call(this,n,step,pad);
case  4 :
return partition__3260.call(this,n,step,pad,coll);
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
var get_in__3266 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3267 = (function (m,ks,not_found){
var sentinel__3262 = cljs.core.lookup_sentinel;
var m__3263 = m;
var ks__3264 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3264))
{var m__3265 = cljs.core.get.call(null,m__3263,cljs.core.first.call(null,ks__3264),sentinel__3262);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3262,m__3265)))
{return not_found;
} else
{{
var G__3269 = sentinel__3262;
var G__3270 = m__3265;
var G__3271 = cljs.core.next.call(null,ks__3264);
sentinel__3262 = G__3269;
m__3263 = G__3270;
ks__3264 = G__3271;
continue;
}
}
} else
{return m__3263;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3266.call(this,m,ks);
case  3 :
return get_in__3267.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3272,v){
var vec__3273__3274 = p__3272;
var k__3275 = cljs.core.nth.call(null,vec__3273__3274,0,null);
var ks__3276 = cljs.core.nthnext.call(null,vec__3273__3274,1);

if(cljs.core.truth_(ks__3276))
{return cljs.core.assoc.call(null,m,k__3275,assoc_in.call(null,cljs.core.get.call(null,m,k__3275),ks__3276,v));
} else
{return cljs.core.assoc.call(null,m,k__3275,v);
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
cljs.core.update_in = (function update_in(m,p__3277,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__3278__3279 = p__3277;
var k__3280 = cljs.core.nth.call(null,vec__3278__3279,0,null);
var ks__3281 = cljs.core.nthnext.call(null,vec__3278__3279,1);

if(cljs.core.truth_(ks__3281))
{return cljs.core.assoc.call(null,m,k__3280,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3280),ks__3281,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3280,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3280),args));
}
});

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3282 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3283 = this;
var new_array__3284 = cljs.core.aclone.call(null,this__3283.array);

new_array__3284.push(o);
return (new cljs.core.Vector(this__3283.meta,new_array__3284));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3285 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3285.array.length,0)))
{var vector_seq__3286 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__3285.array.length)))
{return cljs.core.cons.call(null,(this__3285.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__3286.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3287 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3288 = this;
var count__3289 = this__3288.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__3289,0)))
{return (this__3288.array[cljs.core.dec.call(null,count__3289)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3290 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3290.array.length,0)))
{var new_array__3291 = cljs.core.aclone.call(null,this__3290.array);

new_array__3291.pop();
return (new cljs.core.Vector(this__3290.meta,new_array__3291));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3292 = this;
return (new cljs.core.Vector(meta,this__3292.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3293 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3293.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3307 = null;
var G__3307__3308 = (function (coll,n){
var this__3294 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3295 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3295))
{return cljs.core._LT_.call(null,n,this__3294.array.length);
} else
{return and__3574__auto____3295;
}
})()))
{return (this__3294.array[n]);
} else
{return null;
}
});
var G__3307__3309 = (function (coll,n,not_found){
var this__3296 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3297 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3297))
{return cljs.core._LT_.call(null,n,this__3296.array.length);
} else
{return and__3574__auto____3297;
}
})()))
{return (this__3296.array[n]);
} else
{return not_found;
}
});
G__3307 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3307__3308.call(this,coll,n);
case  3 :
return G__3307__3309.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3307;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3298 = this;
return this__3298.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3311 = null;
var G__3311__3312 = (function (v,f){
var this__3299 = this;
return cljs.core.ci_reduce.call(null,this__3299.array,f);
});
var G__3311__3313 = (function (v,f,start){
var this__3300 = this;
return cljs.core.ci_reduce.call(null,this__3300.array,f,start);
});
G__3311 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3311__3312.call(this,v,f);
case  3 :
return G__3311__3313.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3311;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3301 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3302 = this;
return this__3302.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3303 = this;
var new_array__3304 = cljs.core.aclone.call(null,this__3303.array);

(new_array__3304[k] = v);
return (new cljs.core.Vector(this__3303.meta,new_array__3304));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3315 = null;
var G__3315__3316 = (function (coll,k){
var this__3305 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3315__3317 = (function (coll,k,not_found){
var this__3306 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3315 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3315__3316.call(this,coll,k);
case  3 :
return G__3315__3317.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3315;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3319 = null;
var G__3319__3320 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3319__3321 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3319 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3319__3320.call(this,_,k);
case  3 :
return G__3319__3321.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3319;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function vector(var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.vec.call(null,args);
});

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3323 = this;
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
var len__3324 = array.length;

var i__3325 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3325,len__3324)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3325]))))
{return i__3325;
} else
{{
var G__3326 = cljs.core._PLUS_.call(null,i__3325,incr);
i__3325 = G__3326;
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
var obj_map_contains_key_QMARK___3328 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3329 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____3327 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3327))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3327;
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
return obj_map_contains_key_QMARK___3328.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3329.call(this,k,strobj,true_val,false_val);
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
var this__3332 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3333 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3334 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3334.keys.length)))
{return cljs.core.map.call(null,(function (p1__3331_SHARP_){
return cljs.core.vector.call(null,p1__3331_SHARP_,(this__3334.strobj[p1__3331_SHARP_]));
}),this__3334.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3335 = this;
return (new cljs.core.ObjMap(meta,this__3335.keys,this__3335.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3336 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3337 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3337))
{return this__3336.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3337;
}
})()))
{var new_keys__3338 = cljs.core.aclone.call(null,this__3336.keys);
var new_strobj__3339 = goog.object.clone.call(null,this__3336.strobj);

new_keys__3338.splice(cljs.core.scan_array.call(null,1,k,new_keys__3338),1);
cljs.core.js_delete.call(null,new_strobj__3339,k);
return (new cljs.core.ObjMap(this__3336.meta,new_keys__3338,new_strobj__3339));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3340 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3340.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3341 = this;
return this__3341.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3342 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3343 = this;
return this__3343.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3344 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3345 = goog.object.clone.call(null,this__3344.strobj);
var overwrite_QMARK___3346 = new_strobj__3345.hasOwnProperty(k);

(new_strobj__3345[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3346))
{return (new cljs.core.ObjMap(this__3344.meta,this__3344.keys,new_strobj__3345));
} else
{var new_keys__3347 = cljs.core.aclone.call(null,this__3344.keys);

new_keys__3347.push(k);
return (new cljs.core.ObjMap(this__3344.meta,new_keys__3347,new_strobj__3345));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3344.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3348 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3348.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3351 = null;
var G__3351__3352 = (function (coll,k){
var this__3349 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3351__3353 = (function (coll,k,not_found){
var this__3350 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3350.strobj,(this__3350.strobj[k]),not_found);
});
G__3351 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3351__3352.call(this,coll,k);
case  3 :
return G__3351__3353.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3351;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3356 = null;
var G__3356__3357 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3356__3358 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3356 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3356__3357.call(this,_,k);
case  3 :
return G__3356__3358.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3356;
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
var this__3360 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3361 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3362 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3362.count)))
{var hashes__3363 = cljs.core.js_keys.call(null,this__3362.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3355_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3362.hashobj[p1__3355_SHARP_])));
}),hashes__3363);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3364 = this;
return (new cljs.core.HashMap(meta,this__3364.count,this__3364.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3365 = this;
var h__3366 = cljs.core.hash.call(null,k);
var bucket__3367 = (this__3365.hashobj[h__3366]);
var i__3368 = (cljs.core.truth_(bucket__3367)?cljs.core.scan_array.call(null,2,k,bucket__3367):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3368)))
{return coll;
} else
{var new_hashobj__3369 = goog.object.clone.call(null,this__3365.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3367.length)))
{cljs.core.js_delete.call(null,new_hashobj__3369,h__3366);
} else
{var new_bucket__3370 = cljs.core.aclone.call(null,bucket__3367);

new_bucket__3370.splice(i__3368,2);
(new_hashobj__3369[h__3366] = new_bucket__3370);
}
return (new cljs.core.HashMap(this__3365.meta,cljs.core.dec.call(null,this__3365.count),new_hashobj__3369));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3371 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3371.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3372 = this;
return this__3372.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3373 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3374 = this;
return this__3374.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3375 = this;
var h__3376 = cljs.core.hash.call(null,k);
var bucket__3377 = (this__3375.hashobj[h__3376]);

if(cljs.core.truth_(bucket__3377))
{var new_bucket__3378 = cljs.core.aclone.call(null,bucket__3377);
var new_hashobj__3379 = goog.object.clone.call(null,this__3375.hashobj);

(new_hashobj__3379[h__3376] = new_bucket__3378);
var temp__3723__auto____3380 = cljs.core.scan_array.call(null,2,k,new_bucket__3378);

if(cljs.core.truth_(temp__3723__auto____3380))
{var i__3381 = temp__3723__auto____3380;

(new_bucket__3378[cljs.core.inc.call(null,i__3381)] = v);
return (new cljs.core.HashMap(this__3375.meta,this__3375.count,new_hashobj__3379));
} else
{new_bucket__3378.push(k,v);
return (new cljs.core.HashMap(this__3375.meta,cljs.core.inc.call(null,this__3375.count),new_hashobj__3379));
}
} else
{var new_hashobj__3382 = goog.object.clone.call(null,this__3375.hashobj);

(new_hashobj__3382[h__3376] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3375.meta,cljs.core.inc.call(null,this__3375.count),new_hashobj__3382));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3383 = this;
var bucket__3384 = (this__3383.hashobj[cljs.core.hash.call(null,k)]);
var i__3385 = (cljs.core.truth_(bucket__3384)?cljs.core.scan_array.call(null,2,k,bucket__3384):null);

if(cljs.core.truth_(i__3385))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3390 = null;
var G__3390__3391 = (function (coll,k){
var this__3386 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3390__3392 = (function (coll,k,not_found){
var this__3387 = this;
var bucket__3388 = (this__3387.hashobj[cljs.core.hash.call(null,k)]);
var i__3389 = (cljs.core.truth_(bucket__3388)?cljs.core.scan_array.call(null,2,k,bucket__3388):null);

if(cljs.core.truth_(i__3389))
{return (bucket__3388[cljs.core.inc.call(null,i__3389)]);
} else
{return not_found;
}
});
G__3390 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3390__3391.call(this,coll,k);
case  3 :
return G__3390__3392.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3390;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3394 = ks.length;

var i__3395 = 0;
var out__3396 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3395,len__3394)))
{{
var G__3397 = cljs.core.inc.call(null,i__3395);
var G__3398 = cljs.core.assoc.call(null,out__3396,(ks[i__3395]),(vs[i__3395]));
i__3395 = G__3397;
out__3396 = G__3398;
continue;
}
} else
{return out__3396;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3399 = null;
var G__3399__3400 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3399__3401 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3399 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3399__3400.call(this,_,k);
case  3 :
return G__3399__3401.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3399;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function hash_map(var_args){
var keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var in$__3403 = cljs.core.seq.call(null,keyvals);
var out__3404 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3403))
{{
var G__3405 = cljs.core.nnext.call(null,in$__3403);
var G__3406 = cljs.core.assoc.call(null,out__3404,cljs.core.first.call(null,in$__3403),cljs.core.second.call(null,in$__3403));
in$__3403 = G__3405;
out__3404 = G__3406;
continue;
}
} else
{return out__3404;
}
break;
}
});
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
cljs.core.merge = (function merge(var_args){
var maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3407_SHARP_,p2__3408_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3409 = p1__3407_SHARP_;

if(cljs.core.truth_(or__3576__auto____3409))
{return or__3576__auto____3409;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3408_SHARP_);
}),maps);
} else
{return null;
}
});
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3411 = cljs.core.ObjMap.fromObject([],{});
var keys__3412 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3412))
{var key__3413 = cljs.core.first.call(null,keys__3412);
var entry__3414 = cljs.core.get.call(null,map,key__3413);

{
var G__3415 = (cljs.core.truth_(entry__3414)?cljs.core.assoc.call(null,ret__3411,key__3413,entry__3414):ret__3411);
var G__3416 = cljs.core.next.call(null,keys__3412);
ret__3411 = G__3415;
keys__3412 = G__3416;
continue;
}
} else
{return ret__3411;
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
var this__3417 = this;
return (new cljs.core.Set(this__3417.meta,cljs.core.dissoc.call(null,this__3417.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3418 = this;
var and__3574__auto____3419 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3419))
{var and__3574__auto____3420 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3420))
{return cljs.core.every_QMARK_.call(null,(function (p1__3410_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3410_SHARP_);
}),other);
} else
{return and__3574__auto____3420;
}
} else
{return and__3574__auto____3419;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3421 = this;
return (new cljs.core.Set(this__3421.meta,cljs.core.assoc.call(null,this__3421.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3422 = this;
return cljs.core.keys.call(null,this__3422.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3423 = this;
return (new cljs.core.Set(meta,this__3423.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3424 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3424.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3425 = this;
return this__3425.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3426 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3427 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3430 = null;
var G__3430__3431 = (function (coll,v){
var this__3428 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3430__3432 = (function (coll,v,not_found){
var this__3429 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3429.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3430 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3430__3431.call(this,coll,v);
case  3 :
return G__3430__3432.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3430;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3434 = null;
var G__3434__3435 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3434__3436 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3434 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3434__3435.call(this,_,k);
case  3 :
return G__3434__3436.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3434;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3438 = cljs.core.seq.call(null,coll);
var out__3439 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3438))))
{{
var G__3440 = cljs.core.rest.call(null,in$__3438);
var G__3441 = cljs.core.conj.call(null,out__3439,cljs.core.first.call(null,in$__3438));
in$__3438 = G__3440;
out__3439 = G__3441;
continue;
}
} else
{return out__3439;
}
break;
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3449 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3442,seen){
while(true){
var vec__3443__3444 = p__3442;
var f__3445 = cljs.core.nth.call(null,vec__3443__3444,0,null);
var xs__3446 = vec__3443__3444;

var temp__3726__auto____3447 = cljs.core.seq.call(null,xs__3446);

if(cljs.core.truth_(temp__3726__auto____3447))
{var s__3448 = temp__3726__auto____3447;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3445)))
{{
var G__3450 = cljs.core.rest.call(null,s__3448);
var G__3451 = seen;
p__3442 = G__3450;
seen = G__3451;
continue;
}
} else
{return cljs.core.cons.call(null,f__3445,step.call(null,cljs.core.rest.call(null,s__3448),cljs.core.conj.call(null,seen,f__3445)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3449.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3452 = cljs.core.Vector.fromArray([]);
var s__3453 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3453)))
{{
var G__3454 = cljs.core.conj.call(null,ret__3452,cljs.core.first.call(null,s__3453));
var G__3455 = cljs.core.next.call(null,s__3453);
ret__3452 = G__3454;
s__3453 = G__3455;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3452);
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
{if(cljs.core.truth_((function (){var or__3576__auto____3456 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3456))
{return or__3576__auto____3456;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3457 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3457,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3457));
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
if(cljs.core.truth_((function (){var or__3576__auto____3458 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3458))
{return or__3576__auto____3458;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3459 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3459,-1)))
{return cljs.core.subs.call(null,x,2,i__3459);
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
var map__3462 = cljs.core.ObjMap.fromObject([],{});
var ks__3463 = cljs.core.seq.call(null,keys);
var vs__3464 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3465 = ks__3463;

if(cljs.core.truth_(and__3574__auto____3465))
{return vs__3464;
} else
{return and__3574__auto____3465;
}
})()))
{{
var G__3466 = cljs.core.assoc.call(null,map__3462,cljs.core.first.call(null,ks__3463),cljs.core.first.call(null,vs__3464));
var G__3467 = cljs.core.next.call(null,ks__3463);
var G__3468 = cljs.core.next.call(null,vs__3464);
map__3462 = G__3466;
ks__3463 = G__3467;
vs__3464 = G__3468;
continue;
}
} else
{return map__3462;
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
var max_key__3471 = (function (k,x){
return x;
});
var max_key__3472 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3473 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3460_SHARP_,p2__3461_SHARP_){
return max_key.call(null,k,p1__3460_SHARP_,p2__3461_SHARP_);
}),max_key.call(null,k,x,y),more);
});
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3471.call(this,k,x);
case  3 :
return max_key__3472.call(this,k,x,y);
default:
return max_key__3473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = (function (arglist__3475){
var k = cljs.core.first(arglist__3475);
var x = cljs.core.first(cljs.core.next(arglist__3475));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3475)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3475)));
return max_key__3473.call(null, k, x, y, more);
});
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3476 = (function (k,x){
return x;
});
var min_key__3477 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3478 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3469_SHARP_,p2__3470_SHARP_){
return min_key.call(null,k,p1__3469_SHARP_,p2__3470_SHARP_);
}),min_key.call(null,k,x,y),more);
});
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3476.call(this,k,x);
case  3 :
return min_key__3477.call(this,k,x,y);
default:
return min_key__3478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = (function (arglist__3480){
var k = cljs.core.first(arglist__3480);
var x = cljs.core.first(cljs.core.next(arglist__3480));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3480)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3480)));
return min_key__3478.call(null, k, x, y, more);
});
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3483 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3484 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3481 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3481))
{var s__3482 = temp__3726__auto____3481;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3482),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3482)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3483.call(this,n,step);
case  3 :
return partition_all__3484.call(this,n,step,coll);
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
var temp__3726__auto____3486 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3486))
{var s__3487 = temp__3726__auto____3486;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3487))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3487),take_while.call(null,pred,cljs.core.rest.call(null,s__3487)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3489 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3489))
{var s__3490 = temp__3726__auto____3489;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3490),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3490)));
} else
{return null;
}
})));
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3501))
{var s__3502 = temp__3726__auto____3501;

var fst__3503 = cljs.core.first.call(null,s__3502);
var fv__3504 = f.call(null,fst__3503);
var run__3505 = cljs.core.cons.call(null,fst__3503,cljs.core.take_while.call(null,(function (p1__3488_SHARP_){
return cljs.core._EQ_.call(null,fv__3504,f.call(null,p1__3488_SHARP_));
}),cljs.core.next.call(null,s__3502)));

return cljs.core.cons.call(null,run__3505,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3505),s__3502))));
} else
{return null;
}
})));
});
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
var juxt__3507 = (function (f){
return (function() {
var G__3512 = null;
var G__3512__3513 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3512__3514 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3512__3515 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3512__3516 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3512__3517 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
});
G__3512 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3512__3513.call(this);
case  1 :
return G__3512__3514.call(this,x);
case  2 :
return G__3512__3515.call(this,x,y);
case  3 :
return G__3512__3516.call(this,x,y,z);
default:
return G__3512__3517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3512.cljs$lang$maxFixedArity = 3;
G__3512.cljs$lang$applyTo = (function (arglist__3519){
var x = cljs.core.first(arglist__3519);
var y = cljs.core.first(cljs.core.next(arglist__3519));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3519)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3519)));
return G__3512__3517.call(null, x, y, z, args);
});
return G__3512;
})()
});
var juxt__3508 = (function (f,g){
return (function() {
var G__3520 = null;
var G__3520__3521 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3520__3522 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3520__3523 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3520__3524 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3520__3525 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
});
G__3520 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3520__3521.call(this);
case  1 :
return G__3520__3522.call(this,x);
case  2 :
return G__3520__3523.call(this,x,y);
case  3 :
return G__3520__3524.call(this,x,y,z);
default:
return G__3520__3525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3520.cljs$lang$maxFixedArity = 3;
G__3520.cljs$lang$applyTo = (function (arglist__3527){
var x = cljs.core.first(arglist__3527);
var y = cljs.core.first(cljs.core.next(arglist__3527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3527)));
return G__3520__3525.call(null, x, y, z, args);
});
return G__3520;
})()
});
var juxt__3509 = (function (f,g,h){
return (function() {
var G__3528 = null;
var G__3528__3529 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3528__3530 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3528__3531 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3528__3532 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3528__3533 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
});
G__3528 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3528__3529.call(this);
case  1 :
return G__3528__3530.call(this,x);
case  2 :
return G__3528__3531.call(this,x,y);
case  3 :
return G__3528__3532.call(this,x,y,z);
default:
return G__3528__3533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3528.cljs$lang$maxFixedArity = 3;
G__3528.cljs$lang$applyTo = (function (arglist__3535){
var x = cljs.core.first(arglist__3535);
var y = cljs.core.first(cljs.core.next(arglist__3535));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3535)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3535)));
return G__3528__3533.call(null, x, y, z, args);
});
return G__3528;
})()
});
var juxt__3510 = (function (f,g,h,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__3506 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3536 = null;
var G__3536__3537 = (function (){
return cljs.core.reduce.call(null,(function (p1__3491_SHARP_,p2__3492_SHARP_){
return cljs.core.conj.call(null,p1__3491_SHARP_,p2__3492_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3536__3538 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3493_SHARP_,p2__3494_SHARP_){
return cljs.core.conj.call(null,p1__3493_SHARP_,p2__3494_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3536__3539 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3495_SHARP_,p2__3496_SHARP_){
return cljs.core.conj.call(null,p1__3495_SHARP_,p2__3496_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3536__3540 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3497_SHARP_,p2__3498_SHARP_){
return cljs.core.conj.call(null,p1__3497_SHARP_,p2__3498_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
var G__3536__3541 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__3499_SHARP_,p2__3500_SHARP_){
return cljs.core.conj.call(null,p1__3499_SHARP_,cljs.core.apply.call(null,p2__3500_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3506);
});
G__3536 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3536__3537.call(this);
case  1 :
return G__3536__3538.call(this,x);
case  2 :
return G__3536__3539.call(this,x,y);
case  3 :
return G__3536__3540.call(this,x,y,z);
default:
return G__3536__3541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3536.cljs$lang$maxFixedArity = 3;
G__3536.cljs$lang$applyTo = (function (arglist__3543){
var x = cljs.core.first(arglist__3543);
var y = cljs.core.first(cljs.core.next(arglist__3543));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3543)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3543)));
return G__3536__3541.call(null, x, y, z, args);
});
return G__3536;
})()
});
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3507.call(this,f);
case  2 :
return juxt__3508.call(this,f,g);
case  3 :
return juxt__3509.call(this,f,g,h);
default:
return juxt__3510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = (function (arglist__3544){
var f = cljs.core.first(arglist__3544);
var g = cljs.core.first(cljs.core.next(arglist__3544));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3544)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3544)));
return juxt__3510.call(null, f, g, h, fs);
});
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
var dorun__3546 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3549 = cljs.core.next.call(null,coll);
coll = G__3549;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3547 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3545 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3545))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3545;
}
})()))
{{
var G__3550 = cljs.core.dec.call(null,n);
var G__3551 = cljs.core.next.call(null,coll);
n = G__3550;
coll = G__3551;
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
return dorun__3546.call(this,n);
case  2 :
return dorun__3547.call(this,n,coll);
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
var doall__3552 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3553 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3552.call(this,n);
case  2 :
return doall__3553.call(this,n,coll);
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
var matches__3555 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3555),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3555),1)))
{return cljs.core.first.call(null,matches__3555);
} else
{return cljs.core.vec.call(null,matches__3555);
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
var matches__3556 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3556)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3556),1)))
{return cljs.core.first.call(null,matches__3556);
} else
{return cljs.core.vec.call(null,matches__3556);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3557 = cljs.core.re_find.call(null,re,s);
var match_idx__3558 = s.search(re);
var match_str__3559 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3557))?cljs.core.first.call(null,match_data__3557):match_data__3557);
var post_match__3560 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3558,cljs.core.count.call(null,match_str__3559)));

if(cljs.core.truth_(match_data__3557))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3557,re_seq.call(null,re,post_match__3560));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3561_SHARP_){
return print_one.call(null,p1__3561_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3562 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3562))
{var and__3574__auto____3565 = (function (){var x__105__auto____3563 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3564 = x__105__auto____3563;

if(cljs.core.truth_(and__3574__auto____3564))
{return x__105__auto____3563.cljs$core$IMeta$;
} else
{return and__3574__auto____3564;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3563);
}
})();

if(cljs.core.truth_(and__3574__auto____3565))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3565;
}
} else
{return and__3574__auto____3562;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3566 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3567 = x__105__auto____3566;

if(cljs.core.truth_(and__3574__auto____3567))
{return x__105__auto____3566.cljs$core$IPrintable$;
} else
{return and__3574__auto____3567;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3566);
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
var first_obj__3568 = cljs.core.first.call(null,objs);
var sb__3569 = (new goog.string.StringBuffer());

var G__3570__3571 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3570__3571))
{var obj__3572 = cljs.core.first.call(null,G__3570__3571);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3572,first_obj__3568)))
{} else
{sb__3569.append(" ");
}
var G__3573__3574 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3572,opts));

while(true){
if(cljs.core.truth_(G__3573__3574))
{var string__3575 = cljs.core.first.call(null,G__3573__3574);

sb__3569.append(string__3575);
{
var G__3576 = cljs.core.next.call(null,G__3573__3574);
G__3573__3574 = G__3576;
continue;
}
} else
{}
break;
}
{
var G__3577 = cljs.core.next.call(null,G__3570__3571);
G__3570__3571 = G__3577;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3569);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3578 = cljs.core.first.call(null,objs);

var G__3579__3580 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3579__3580))
{var obj__3581 = cljs.core.first.call(null,G__3579__3580);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3581,first_obj__3578)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3582__3583 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3581,opts));

while(true){
if(cljs.core.truth_(G__3582__3583))
{var string__3584 = cljs.core.first.call(null,G__3582__3583);

cljs.core.string_print.call(null,string__3584);
{
var G__3585 = cljs.core.next.call(null,G__3582__3583);
G__3582__3583 = G__3585;
continue;
}
} else
{}
break;
}
{
var G__3586 = cljs.core.next.call(null,G__3579__3580);
G__3579__3580 = G__3586;
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
cljs.core.pr_str = (function pr_str(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function pr(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function cljs_core_print(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
});
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function println(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function prn(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3587 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3587,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3588 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3588))
{var nspc__3589 = temp__3726__auto____3588;

return cljs.core.str.call(null,nspc__3589,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3590 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3590))
{var nspc__3591 = temp__3726__auto____3590;

return cljs.core.str.call(null,nspc__3591,"/");
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
var pr_pair__3592 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3592,"{",", ","}",opts,coll);
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
var this__3593 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3593.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3594 = this;
return this__3594.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3595 = this;
return this__3595.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3596 = this;
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
var atom__3603 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3604 = (function (x,var_args){
var p__3597 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3598__3599 = p__3597;
var map__3598__3600 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3598__3599))?cljs.core.apply.call(null,cljs.core.hash_map,map__3598__3599):map__3598__3599);
var validator__3601 = cljs.core.get.call(null,map__3598__3600,"﷐'validator");
var meta__3602 = cljs.core.get.call(null,map__3598__3600,"﷐'meta");

return (new cljs.core.Atom(x,meta__3602,validator__3601));
});
atom = function(x,var_args){
var p__3597 = var_args;
switch(arguments.length){
case  1 :
return atom__3603.call(this,x);
default:
return atom__3604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = (function (arglist__3606){
var x = cljs.core.first(arglist__3606);
var p__3597 = cljs.core.rest(arglist__3606);
return atom__3604.call(null, x, p__3597);
});
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3607 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3607))
{var v__3608 = temp__3726__auto____3607;

if(cljs.core.truth_(v__3608.call(null,newval)))
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
var swap_BANG___3609 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3610 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3611 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3612 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3613 = (function (a,f,x,y,z,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
});
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3609.call(this,a,f);
case  3 :
return swap_BANG___3610.call(this,a,f,x);
case  4 :
return swap_BANG___3611.call(this,a,f,x,y);
case  5 :
return swap_BANG___3612.call(this,a,f,x,y,z);
default:
return swap_BANG___3613.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = (function (arglist__3615){
var a = cljs.core.first(arglist__3615);
var f = cljs.core.first(cljs.core.next(arglist__3615));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3615)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3615))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3615)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3615)))));
return swap_BANG___3613.call(null, a, f, x, y, z, more);
});
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
cljs.core.alter_meta_BANG_ = (function alter_meta_BANG_(iref,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
});
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
var gensym__3616 = (function (){
return gensym.call(null,"G__");
});
var gensym__3617 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3616.call(this);
case  1 :
return gensym__3617.call(this,prefix_string);
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
var this__3619 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3619.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3620 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3620.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3620.state,this__3620.f);
}
return cljs.core.deref.call(null,this__3620.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function delay(var_args){
var body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
});
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
cljs.core.js__GT_clj = (function js__GT_clj(x,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3621__3622 = options;
var map__3621__3623 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3621__3622))?cljs.core.apply.call(null,cljs.core.hash_map,map__3621__3622):map__3621__3622);
var keywordize_keys__3624 = cljs.core.get.call(null,map__3621__3623,"﷐'keywordize-keys");
var keyfn__3625 = (cljs.core.truth_(keywordize_keys__3624)?cljs.core.keyword:cljs.core.str);
var f__3631 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3630 = (function iter__3626(s__3627){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3627__3628 = s__3627;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3627__3628)))
{var k__3629 = cljs.core.first.call(null,s__3627__3628);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3625.call(null,k__3629),thisfn.call(null,(x[k__3629]))]),iter__3626.call(null,cljs.core.rest.call(null,s__3627__3628)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3630.call(null,cljs.core.js_keys.call(null,x));
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

return f__3631.call(null,x);
});
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3632 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var temp__3723__auto____3633 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3632),args);

if(cljs.core.truth_(temp__3723__auto____3633))
{var v__3634 = temp__3723__auto____3633;

return v__3634;
} else
{var ret__3635 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3632,cljs.core.assoc,args,ret__3635);
return ret__3635;
}
});
});
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3636 = (function (){
return rand.call(null,1);
});
var rand__3637 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3636.call(this);
case  1 :
return rand__3637.call(this,n);
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
var k__3641 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3641,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3641,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
cljs.core.test_stuff = (function test_stuff(){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([4,3,2,1,0]),(function (){var i__3642 = 0;
var j__3643 = cljs.core.List.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3642,5)))
{{
var G__3777 = cljs.core.inc.call(null,i__3642);
var G__3778 = cljs.core.conj.call(null,j__3643,((function (i__3642,j__3643){
return (function (){
return i__3642;
});})(i__3642,j__3643))
);
i__3642 = G__3777;
j__3643 = G__3778;
continue;
}
} else
{return cljs.core.map.call(null,((function (i__3642,j__3643){
return (function (p1__3639_SHARP_){
return p1__3639_SHARP_.call(null);
});})(i__3642,j__3643))
,j__3643);
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [4,3,2,1,0])),cljs.core.list("﷑'loop",(new cljs.core.Vector(null, ["﷑'i",0,"﷑'j",cljs.core.List.EMPTY])),cljs.core.list("﷑'if",cljs.core.list("﷑'<","﷑'i",5),cljs.core.list("﷑'recur",cljs.core.list("﷑'inc","﷑'i"),cljs.core.list("﷑'conj","﷑'j",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),"﷑'i"))),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3639#"])),cljs.core.list("﷑'p1__3639#")),"﷑'j"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,3]),cljs.core.Vector.fromArray([2,1]),cljs.core.Vector.fromArray([2,2]),cljs.core.Vector.fromArray([2,3])]),cljs.core.map.call(null,(function (p1__3640_SHARP_){
return p1__3640_SHARP_.call(null);
}),(function (){var iter__159__auto____3654 = (function iter__3644(s__3645){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3645__3648 = s__3645;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3645__3648)))
{var i__3649 = cljs.core.first.call(null,s__3645__3648);

var iterys__157__auto____3652 = ((function (s__3645__3648){
return (function iter__3646(s__3647){
return (new cljs.core.LazySeq(null,false,((function (s__3645__3648){
return (function (){
var s__3647__3650 = s__3647;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3647__3650)))
{var j__3651 = cljs.core.first.call(null,s__3647__3650);

return cljs.core.cons.call(null,((function (s__3645__3648){
return (function (){
return cljs.core.Vector.fromArray([i__3649,j__3651]);
});})(s__3645__3648))
,iter__3646.call(null,cljs.core.rest.call(null,s__3647__3650)));
} else
{return null;
}
break;
}
});})(s__3645__3648))
));
});})(s__3645__3648))
;
var fs__158__auto____3653 = cljs.core.seq.call(null,iterys__157__auto____3652.call(null,cljs.core.Vector.fromArray([1,2,3])));

if(cljs.core.truth_(fs__158__auto____3653))
{return cljs.core.concat.call(null,fs__158__auto____3653,iter__3644.call(null,cljs.core.rest.call(null,s__3645__3648)));
} else
{{
var G__3779 = cljs.core.rest.call(null,s__3645__3648);
s__3645__3648 = G__3779;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3654.call(null,cljs.core.Vector.fromArray([1,2]));
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,3])),(new cljs.core.Vector(null, [2,1])),(new cljs.core.Vector(null, [2,2])),(new cljs.core.Vector(null, [2,3]))])),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3640#"])),cljs.core.list("﷑'p1__3640#")),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'i",(new cljs.core.Vector(null, [1,2])),"﷑'j",(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, ["﷑'i","﷑'j"]))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷐'b".call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷐'b",cljs.core.hash_map("﷐'a",1,"﷐'b",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷑'b".call(null,cljs.core.hash_map("﷐'a",1,"﷑'b",2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.list("﷑'quote","﷑'b"),cljs.core.list("﷑'quote",cljs.core.hash_map("﷐'a",1,"﷑'b",2))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}).call(null,"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.HashMap.fromArrays([1,2],[1,2]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map(1,1,2,2),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.set([1,2,3]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.set([1,2,3]),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"foo/bar",cljs.core.namespace.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","foo/bar",cljs.core.list("﷑'namespace",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷐'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name","﷐'foo/bar/baz"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.get.call(null,cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2,3]),4],[cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),5]),cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'get",cljs.core.hash_map((new cljs.core.Vector(null, [1,2,3])),cljs.core.hash_map("﷐'a","﷐'b"),4,5),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'a",cljs.core.nth.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'c","﷐'d"]),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'a",cljs.core.list("﷑'nth",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'c","﷐'d"])),0))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":null}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'d"],{"﷐'a":"﷐'b","﷐'d":null})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b","﷐'c",null),cljs.core.hash_map("﷐'a","﷐'b","﷐'d",null)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.list.call(null,3,2,1),cljs.core.Vector.fromArray([3,2,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'list",3,2,1),(new cljs.core.Vector(null, [3,2,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.seq.call(null,cljs.core.array.call(null,3,2,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'seq",cljs.core.list("﷑'array",3,2,1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.Vector.fromArray([1])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",(new cljs.core.Vector(null, [1]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.array.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",cljs.core.list("﷑'array",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["x"],{"x":"y"}),cljs.core.meta.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray([]),cljs.core.ObjMap.fromObject(["x"],{"x":"y"}))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("x","y"),cljs.core.list("﷑'meta",cljs.core.with_meta((new cljs.core.Vector(null, [])),cljs.core.hash_map("x","y"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.dissoc.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":"﷐'d"}),"﷐'c"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'dissoc",cljs.core.hash_map("﷐'a","﷐'b","﷐'c","﷐'d"),"﷐'c"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.hash_map.call(null,"﷐'foo",5),cljs.core.assoc.call(null,(new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null))),"﷐'foo",5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'hash-map","﷐'foo",5),cljs.core.list("﷑'assoc",cljs.core.list("﷑'cljs.core.ObjMap.",null,cljs.core.list("﷑'array"),cljs.core.list("﷑'js-obj")),"﷐'foo",5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.pr_str.call(null,cljs.core.Vector.fromArray([1,true,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":2,"﷐'b":42}),cljs.core.array.call(null,3,4)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.list("﷑'pr-str",(new cljs.core.Vector(null, [1,true,cljs.core.hash_map("﷐'a",2,"﷐'b",42),cljs.core.list("﷑'array",3,4)]))))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,"one","two"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=","one","two"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core._count.call(null,"abc"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'-count","abc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._count.call(null,cljs.core.array.call(null,1,2,3,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-count",cljs.core.list("﷑'array",1,2,3,4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"c",cljs.core._nth.call(null,"abc",2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","c",cljs.core.list("﷑'-nth","abc",2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"quux",cljs.core._nth.call(null,"abc",3,"quux"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","quux",cljs.core.list("﷑'-nth","abc",3,"quux"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"val",cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),4,"val"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","val",cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),4,"val"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"b",cljs.core._lookup.call(null,"abc",1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","b",cljs.core.list("﷑'-lookup","abc",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"harriet",cljs.core._lookup.call(null,"abcd",4,"harriet"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","harriet",cljs.core.list("﷑'-lookup","abcd",4,"harriet"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"zot",cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),4,"zot"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","zot",cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),4,"zot"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_,10))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+",10))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cabd",(function (){var jumble__3655 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3655);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cabd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cafrogbd",(function (){var jumble__3656 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3656,"frog");
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cafrogbd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble","frog")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,1,0,1]),cljs.core.Vector.fromArray([cljs.core.bit_and.call(null,1,0),cljs.core.bit_and.call(null,0,0),cljs.core.bit_and.call(null,1,1),cljs.core.bit_and.call(null,42,1),cljs.core.bit_and.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,1,0,1])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and",1,0),cljs.core.list("﷑'bit-and",0,0),cljs.core.list("﷑'bit-and",1,1),cljs.core.list("﷑'bit-and",42,1),cljs.core.list("﷑'bit-and",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,1,43,41]),cljs.core.Vector.fromArray([cljs.core.bit_or.call(null,1,0),cljs.core.bit_or.call(null,0,0),cljs.core.bit_or.call(null,1,1),cljs.core.bit_or.call(null,42,1),cljs.core.bit_or.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,1,43,41])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-or",1,0),cljs.core.list("﷑'bit-or",0,0),cljs.core.list("﷑'bit-or",1,1),cljs.core.list("﷑'bit-or",42,1),cljs.core.list("﷑'bit-or",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,0,42,40]),cljs.core.Vector.fromArray([cljs.core.bit_and_not.call(null,1,0),cljs.core.bit_and_not.call(null,0,0),cljs.core.bit_and_not.call(null,1,1),cljs.core.bit_and_not.call(null,42,1),cljs.core.bit_and_not.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,0,42,40])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and-not",1,0),cljs.core.list("﷑'bit-and-not",0,0),cljs.core.list("﷑'bit-and-not",1,1),cljs.core.list("﷑'bit-and-not",42,1),cljs.core.list("﷑'bit-and-not",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,968,16649,0]),cljs.core.Vector.fromArray([cljs.core.bit_clear.call(null,1,0),cljs.core.bit_clear.call(null,2,0),cljs.core.bit_clear.call(null,1000,5),cljs.core.bit_clear.call(null,16713,6),cljs.core.bit_clear.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,968,16649,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-clear",1,0),cljs.core.list("﷑'bit-clear",2,0),cljs.core.list("﷑'bit-clear",1000,5),cljs.core.list("﷑'bit-clear",16713,6),cljs.core.list("﷑'bit-clear",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,992,18761,0]),cljs.core.Vector.fromArray([cljs.core.bit_flip.call(null,1,0),cljs.core.bit_flip.call(null,2,1),cljs.core.bit_flip.call(null,1000,3),cljs.core.bit_flip.call(null,16713,11),cljs.core.bit_flip.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,992,18761,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-flip",1,0),cljs.core.list("﷑'bit-flip",2,1),cljs.core.list("﷑'bit-flip",1000,3),cljs.core.list("﷑'bit-flip",16713,11),cljs.core.list("﷑'bit-flip",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([-2,-3,999,-16714,-1025]),cljs.core.Vector.fromArray([cljs.core.bit_not.call(null,1),cljs.core.bit_not.call(null,2),cljs.core.bit_not.call(null,-1000),cljs.core.bit_not.call(null,16713),cljs.core.bit_not.call(null,1024)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [-2,-3,999,-16714,-1025])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-not",1),cljs.core.list("﷑'bit-not",2),cljs.core.list("﷑'bit-not",-1000),cljs.core.list("﷑'bit-not",16713),cljs.core.list("﷑'bit-not",1024)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,1000,18761,1024]),cljs.core.Vector.fromArray([cljs.core.bit_set.call(null,1,0),cljs.core.bit_set.call(null,2,1),cljs.core.bit_set.call(null,1000,3),cljs.core.bit_set.call(null,16713,11),cljs.core.bit_set.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,1000,18761,1024])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-set",1,0),cljs.core.list("﷑'bit-set",2,1),cljs.core.list("﷑'bit-set",1000,3),cljs.core.list("﷑'bit-set",16713,11),cljs.core.list("﷑'bit-set",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true,true,false,true]),cljs.core.Vector.fromArray([cljs.core.bit_test.call(null,1,0),cljs.core.bit_test.call(null,2,1),cljs.core.bit_test.call(null,1000,3),cljs.core.bit_test.call(null,16713,11),cljs.core.bit_test.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true,true,false,true])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-test",1,0),cljs.core.list("﷑'bit-test",2,1),cljs.core.list("﷑'bit-test",1000,3),cljs.core.list("﷑'bit-test",16713,11),cljs.core.list("﷑'bit-test",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,false,false]),cljs.core.Vector.fromArray([cljs.core.true_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,goog.global['undefined']),cljs.core.false_QMARK_.call(null,goog.global['undefined'])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,false,false])),(new cljs.core.Vector(null, [cljs.core.list("﷑'true?",true),cljs.core.list("﷑'true?",false),cljs.core.list("﷑'false?",false),cljs.core.list("﷑'false?",true),cljs.core.list("﷑'true?","﷑'js/undefined"),cljs.core.list("﷑'false?","﷑'js/undefined")])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.apply.call(null,cljs.core._PLUS_,1,cljs.core.list.call(null,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'apply","﷑'+",1,cljs.core.list("﷑'list",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,7,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,cljs.core.list.call(null,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",7,cljs.core.list("﷑'apply","﷑'+",1,2,cljs.core.list("﷑'list",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,15,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,cljs.core.list.call(null,8)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",15,cljs.core.list("﷑'apply","﷑'+",1,2,4,cljs.core.list("﷑'list",8)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,31,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,cljs.core.list.call(null,16)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",31,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,cljs.core.list("﷑'list",16)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,63,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",63,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,127,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32,64)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",127,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32,64)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4950,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,100,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4950,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'take",100,cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
var a__3657 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,a__3657))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3657,cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,cljs.core.compare_and_set_BANG_.call(null,a__3657,0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'compare-and-set!","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,cljs.core.compare_and_set_BANG_.call(null,a__3657,1,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'compare-and-set!","﷑'a",1,7))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.meta.call(null,a__3657))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.get_validator.call(null,a__3657))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
var a__3658 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3658,cljs.core._PLUS_,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.swap_BANG_.call(null,a__3658,cljs.core._PLUS_,1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core.swap_BANG_.call(null,a__3658,cljs.core._PLUS_,1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core.swap_BANG_.call(null,a__3658,cljs.core._PLUS_,1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3,4))));
}
var a__3659 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([1]),"﷐'validator",cljs.core.coll_QMARK_,"﷐'meta",cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.coll_QMARK_,cljs.core.get_validator.call(null,a__3659))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'coll?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,a__3659))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta","﷑'a"))));
}
cljs.core.alter_meta_BANG_.call(null,a__3659,cljs.core.assoc,"﷐'b",2);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,a__3659))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.empty.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'empty",null))));
}
var e_lazy_seq__3660 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,(new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,"﷐'a",null);
}))),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_lazy_seq__3660)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_lazy_seq__3660)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_lazy_seq__3660))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-lazy-seq"))));
}
var e_list__3661 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.list(1,2,3),cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_list__3661)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-list")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_list__3661)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-list")));
}
var e_elist__3662 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.List.EMPTY,cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_elist__3662)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_elist__3662)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'c",cljs.core.get.call(null,cljs.core.meta.call(null,e_elist__3662),"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'c",cljs.core.list("﷑'get",cljs.core.list("﷑'meta","﷑'e-elist"),"﷐'b"))));
}
var e_cons__3663 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,cljs.core.cons.call(null,"﷐'a",null),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_cons__3663)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_cons__3663)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_cons__3663))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-cons"))));
}
var e_vec__3664 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray(["﷐'a","﷐'d","﷐'g"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,e_vec__3664)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'vector?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_vec__3664)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_vec__3664))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-vec"))));
}
var e_omap__3665 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.ObjMap.fromObject(["﷐'a","﷐'g"],{"﷐'a":"﷐'d","﷐'g":"﷐'h"}),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_omap__3665)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_omap__3665)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_omap__3665))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-omap"))));
}
var e_hmap__3666 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2]),"﷐'g"],["﷐'d","﷐'h"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_hmap__3666)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_hmap__3666)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_hmap__3666))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-hmap"))));
}
var a__3667 = cljs.core.atom.call(null,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3669){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3669)))
{var e__3670 = e3669;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3669;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3671){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3671)))
{var e__3672 = e3671;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3671;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,(function (){try{return 1;
}finally {cljs.core.reset_BANG_.call(null,a__3667,42);
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1,cljs.core.list("﷑'finally",cljs.core.list("﷑'reset!","﷑'a",42))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.deref.call(null,a__3667))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),cljs.core.nthnext.call(null,cljs.core.Vector.fromArray([1,2,3]),2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'nthnext",(new cljs.core.Vector(null, [1,2,3])),2))));
}
var v__3674 = cljs.core.Vector.fromArray([1,2,3]);

if(cljs.core.truth_(cljs.core._EQ_.call(null,v__3674,(function (){var iter__159__auto____3679 = (function iter__3675(s__3676){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3676__3677 = s__3676;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3676__3677)))
{var e__3678 = cljs.core.first.call(null,s__3676__3677);

return cljs.core.cons.call(null,e__3678,iter__3675.call(null,cljs.core.rest.call(null,s__3676__3677)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3679.call(null,v__3674);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'v",cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v"])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4]),cljs.core.Vector.fromArray([3,9])]),(function (){var iter__159__auto____3685 = (function iter__3680(s__3681){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3681__3682 = s__3681;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3681__3682)))
{var e__3683 = cljs.core.first.call(null,s__3681__3682);

var m__3684 = cljs.core._STAR_.call(null,e__3683,e__3683);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3683,m__3684]),iter__3680.call(null,cljs.core.rest.call(null,s__3681__3682)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3685.call(null,v__3674);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4])),(new cljs.core.Vector(null, [3,9]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var iter__159__auto____3690 = (function iter__3686(s__3687){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3687__3688 = s__3687;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3687__3688)))
{var e__3689 = cljs.core.first.call(null,s__3687__3688);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3689,3)))
{return cljs.core.cons.call(null,e__3689,iter__3686.call(null,cljs.core.rest.call(null,s__3687__3688)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3690.call(null,v__3674);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),(function (){var iter__159__auto____3695 = (function iter__3691(s__3692){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3692__3693 = s__3692;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3692__3693)))
{var e__3694 = cljs.core.first.call(null,s__3692__3693);

if(cljs.core.truth_(cljs.core._GT_.call(null,e__3694,2)))
{return cljs.core.cons.call(null,e__3694,iter__3691.call(null,cljs.core.rest.call(null,s__3692__3693)));
} else
{{
var G__3780 = cljs.core.rest.call(null,s__3692__3693);
s__3692__3693 = G__3780;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3695.call(null,v__3674);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'when",cljs.core.list("﷑'>","﷑'e",2)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4])]),(function (){var iter__159__auto____3701 = (function iter__3696(s__3697){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3697__3698 = s__3697;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3697__3698)))
{var e__3699 = cljs.core.first.call(null,s__3697__3698);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3699,3)))
{var m__3700 = cljs.core._STAR_.call(null,e__3699,e__3699);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3699,m__3700]),iter__3696.call(null,cljs.core.rest.call(null,s__3697__3698)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3701.call(null,v__3674);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3),"﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,1,2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",1,2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_EQ_.call(null,1,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not=",1,1))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'boolean",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"joel",cljs.core.min_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","joel",cljs.core.list("﷑'min-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"crooooooooow",cljs.core.max_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","crooooooooow",cljs.core.list("﷑'max-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,2,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([3,4,5,6]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([7,8,9]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,2,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [3,4,5,6])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [7,8,9])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true]),cljs.core.take_while.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true])),cljs.core.list("﷑'take-while","﷑'true?",(new cljs.core.Vector(null, [true,true,2,3,4]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([true,true]),cljs.core.Vector.fromArray([false,false,false]),cljs.core.Vector.fromArray([true,true])]),cljs.core.partition_by.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,false,false,false,true,true])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [true,true])),(new cljs.core.Vector(null, [false,false,false])),(new cljs.core.Vector(null, [true,true]))])),cljs.core.list("﷑'partition-by","﷑'true?",(new cljs.core.Vector(null, [true,true,false,false,false,true,true]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,4,6,8,10]),cljs.core.take_nth.call(null,2,cljs.core.Vector.fromArray([0,1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,4,6,8,10])),cljs.core.list("﷑'take-nth",2,(new cljs.core.Vector(null, [0,1,2,3,4,5,6,7,8,9,10]))))));
}
var a10__3702 = cljs.core.partial.call(null,cljs.core._PLUS_,10);
var a20__3703 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10);
var a21__3704 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10,1);
var a22__3705 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3);
var a23__3706 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3,1);

if(cljs.core.truth_(cljs.core._EQ_.call(null,110,a10__3702.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",110,cljs.core.list("﷑'a10",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,120,a20__3703.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",120,cljs.core.list("﷑'a20",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,121,a21__3704.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",121,cljs.core.list("﷑'a21",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,122,a22__3705.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",122,cljs.core.list("﷑'a22",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,123,a23__3706.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",123,cljs.core.list("﷑'a23",100))));
}
var n2__3707 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest);
var n3__3708 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest);
var n4__3709 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n5__3710 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n6__3711 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,n2__3707.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'n2",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,n3__3708.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'n3",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,n4__3709.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'n4",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,n5__3710.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'n5",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,n6__3711.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'n6",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
var sf__3712 = cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_);

if(cljs.core.truth_(sf__3712.call(null,"﷐'foo",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo",1)));
}
if(cljs.core.truth_(sf__3712.call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo")));
}
if(cljs.core.truth_(sf__3712.call(null,"﷑'bar",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf",cljs.core.list("﷑'quote","﷑'bar"),1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,sf__3712.call(null,cljs.core.Vector.fromArray([]),cljs.core.List.EMPTY))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'sf",(new cljs.core.Vector(null, [])),cljs.core.List.EMPTY))));
}
var ep__3713 = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.zero_QMARK_);

if(cljs.core.truth_(ep__3713.call(null,0,0,0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'ep",0,0,0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,ep__3713.call(null,1,2,3,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'ep",1,2,3,0))));
}
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.number_QMARK_).call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list(cljs.core.list("﷑'complement","﷑'number?"),"﷐'foo")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,cljs.core.Vector.fromArray([2,3]),cljs.core.Vector.fromArray([1,2,3])]),cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest,cljs.core.seq).call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,(new cljs.core.Vector(null, [2,3])),(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list(cljs.core.list("﷑'juxt","﷑'first","﷑'rest","﷑'seq"),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,cljs.core.max.call(null,1,2,3,4,5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'max",1,2,3,4,5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5.5,cljs.core.max.call(null,1,2,3,4,5,5.5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5.5,cljs.core.list("﷑'max",1,2,3,4,5,5.5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.min.call(null,5,4,3,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'min",5,4,3,2,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0.5,cljs.core.min.call(null,5,4,3,0.5,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0.5,cljs.core.list("﷑'min",5,4,3,0.5,2,1))));
}
var x__3714 = cljs.core.array.call(null,1,2,3);

x__3714.foo = "﷐'hello";
if(cljs.core.truth_(cljs.core._EQ_.call(null,x__3714.foo,"﷐'hello")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'.foo","﷑'x"),"﷐'hello")));
}
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.Vector.fromArray([]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'set",(new cljs.core.Vector(null, [])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core.set.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set(["foo"]),cljs.core.set.call(null,cljs.core.Vector.fromArray(["foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set(["foo"]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, ["foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]),cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]),cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.set([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.set([])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])])),5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'count",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))])),5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),1),cljs.core.set([1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),1),cljs.core.set([1]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),2),cljs.core.set([1,2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),2),cljs.core.set([1,2]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core._empty.call(null,cljs.core.set([1,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'-empty",cljs.core.set([1,2,3,4])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.set([1,2,3,4,5])),15)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'reduce","﷑'+",cljs.core.set([1,2,3,4,5])),15)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get.call(null,cljs.core.set([1,2,3,4]),4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get",cljs.core.set([1,2,3,4]),4))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([1,2,3,4]),4)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([1,2,3,4]),4)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([null,0,cljs.core.ObjMap.fromObject([],{}),cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.ObjMap.fromObject([],{}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([null,0,cljs.core.hash_map(),cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.hash_map())));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([cljs.core.Vector.fromArray([1,2,3])]),cljs.core.Vector.fromArray([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([(new cljs.core.Vector(null, [1,2,3]))]),(new cljs.core.Vector(null, [1,2,3])))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core._disjoin.call(null,cljs.core.set([1,2,3]),3),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'-disjoin",cljs.core.set([1,2,3]),3),3))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",1))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1.765)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1.765)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.integer_QMARK_,cljs.core.Vector.fromArray([1,1.00001,2023,cljs.core.Vector.fromArray([]),cljs.core._.call(null,88,1001991881),"﷐'foo",0,"0"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'integer?",(new cljs.core.Vector(null, [1,1.00001,2023,(new cljs.core.Vector(null, [])),cljs.core.list("﷑'-",88,1001991881),"﷐'foo",0,"0"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.odd_QMARK_,cljs.core.Vector.fromArray([1,2,3,4,-1,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'odd?",(new cljs.core.Vector(null, [1,2,3,4,-1,0]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,true]),cljs.core.map.call(null,cljs.core.even_QMARK_,cljs.core.Vector.fromArray([2,3,4,5,-2,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,true])),cljs.core.list("﷑'map","﷑'even?",(new cljs.core.Vector(null, [2,3,4,5,-2,0]))))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a")));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'z"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'z"))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),3))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),3))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,null,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",null,42))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,"f",0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?","f",0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,"f",55))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?","f",55))));
}
if(cljs.core.truth_(cljs.core.distinct_QMARK_.call(null,1,2,3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'distinct?",1,2,3)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.distinct_QMARK_.call(null,1,2,3,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'distinct?",1,2,3,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.List.EMPTY),cljs.core.List.EMPTY)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.List.EMPTY),cljs.core.List.EMPTY)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1)),cljs.core.list(1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1))),cljs.core.list("﷑'quote",cljs.core.list(1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1,2,3,1,1,1)),cljs.core.list(1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1,2,3,1,1,1))),cljs.core.list("﷑'quote",cljs.core.list(1,2,3)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,1,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,1,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,2,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,2,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"a"),cljs.core.Vector.fromArray(["a"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","a"),(new cljs.core.Vector(null, ["a"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"abcabab"),cljs.core.Vector.fromArray(["a","b","c"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","abcabab"),(new cljs.core.Vector(null, ["a","b","c"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["abc","abc"])),cljs.core.Vector.fromArray(["abc"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["abc","abc"]))),(new cljs.core.Vector(null, ["abc"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([null,null])),cljs.core.Vector.fromArray([null]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [null,null]))),(new cljs.core.Vector(null, [null])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([0.0,0.0])),cljs.core.Vector.fromArray([0.0]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [0.0,0.0]))),(new cljs.core.Vector(null, [0.0])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷑'sym","﷑'sym"])),(new cljs.core.Vector(null, ["﷑'sym"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote","﷑'sym"),cljs.core.list("﷑'quote","﷑'sym")]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'sym"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷐'kw","﷐'kw"])),cljs.core.Vector.fromArray(["﷐'kw"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["﷐'kw","﷐'kw"]))),(new cljs.core.Vector(null, ["﷐'kw"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([42,42])),cljs.core.Vector.fromArray([42]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [42,42]))),(new cljs.core.Vector(null, [42])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, []))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, []))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.list(1,2),cljs.core.list(1,2)])),(new cljs.core.Vector(null, [cljs.core.list(1,2)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote",cljs.core.list(1,2)),cljs.core.list("﷑'quote",cljs.core.list(1,2))]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, [cljs.core.list(1,2)]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.List.EMPTY,cljs.core.List.EMPTY])),cljs.core.Vector.fromArray([cljs.core.List.EMPTY]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.List.EMPTY,cljs.core.List.EMPTY]))),(new cljs.core.Vector(null, [cljs.core.List.EMPTY])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,2])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,2]))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))),(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{}),cljs.core.ObjMap.fromObject([],{})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map(),cljs.core.hash_map()]))),(new cljs.core.Vector(null, [cljs.core.hash_map()])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([1,2]),cljs.core.set([1,2])])),cljs.core.Vector.fromArray([cljs.core.set([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([1,2]),cljs.core.set([1,2])]))),(new cljs.core.Vector(null, [cljs.core.set([1,2])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([]),cljs.core.set([])])),cljs.core.Vector.fromArray([cljs.core.set([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([]),cljs.core.set([])]))),(new cljs.core.Vector(null, [cljs.core.set([])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3715__3716 = cljs.core.Vector.fromArray([1,2]);
var a__3717 = cljs.core.nth.call(null,vec__3715__3716,0,null);
var b__3718 = cljs.core.nth.call(null,vec__3715__3716,1,null);

return cljs.core.Vector.fromArray([b__3718,a__3717]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),(function (){var vec__3719__3720 = cljs.core.Vector.fromArray([1,2]);
var a__3721 = cljs.core.nth.call(null,vec__3719__3720,0,null);
var b__3722 = cljs.core.nth.call(null,vec__3719__3720,1,null);

return cljs.core.set([a__3721,b__3722]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.set(["﷑'a","﷑'b"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3723__3724 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3723__3725 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3723__3724))?cljs.core.apply.call(null,cljs.core.hash_map,map__3723__3724):map__3723__3724);
var a__3726 = cljs.core.get.call(null,map__3723__3725,"﷐'a");
var b__3727 = cljs.core.get.call(null,map__3723__3725,"﷐'b");

return cljs.core.Vector.fromArray([a__3726,b__3727]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷑'a","﷐'a","﷑'b","﷐'b"),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3728__3729 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3728__3730 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3728__3729))?cljs.core.apply.call(null,cljs.core.hash_map,map__3728__3729):map__3728__3729);
var b__3731 = cljs.core.get.call(null,map__3728__3730,"﷐'b");
var a__3732 = cljs.core.get.call(null,map__3728__3730,"﷐'a");

return cljs.core.Vector.fromArray([a__3732,b__3731]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,cljs.core.Vector.fromArray([1,2])]),(function (){var vec__3733__3734 = cljs.core.Vector.fromArray([1,2]);
var a__3735 = cljs.core.nth.call(null,vec__3733__3734,0,null);
var b__3736 = cljs.core.nth.call(null,vec__3733__3734,1,null);
var v__3737 = vec__3733__3734;

return cljs.core.Vector.fromArray([a__3735,b__3736,v__3737]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,(new cljs.core.Vector(null, [1,2]))])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷐'as","﷑'v"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'v"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,42]),(function (){var map__3738__3739 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3738__3740 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3738__3739))?cljs.core.apply.call(null,cljs.core.hash_map,map__3738__3739):map__3738__3739);
var b__3741 = cljs.core.get.call(null,map__3738__3740,"﷐'b",42);
var a__3742 = cljs.core.get.call(null,map__3738__3740,"﷐'a");

return cljs.core.Vector.fromArray([a__3742,b__3741]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,42])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'b",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,null]),(function (){var map__3743__3744 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3743__3745 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3743__3744))?cljs.core.apply.call(null,cljs.core.hash_map,map__3743__3744):map__3743__3744);
var b__3746 = cljs.core.get.call(null,map__3743__3745,"﷐'b");
var a__3747 = cljs.core.get.call(null,map__3743__3745,"﷐'a");

return cljs.core.Vector.fromArray([a__3747,b__3746]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,null])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'c",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3748__3749 = cljs.core.list(1,2);
var a__3750 = cljs.core.nth.call(null,vec__3748__3749,0,null);
var b__3751 = cljs.core.nth.call(null,vec__3748__3749,1,null);

return cljs.core.Vector.fromArray([b__3751,a__3750]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'quote",cljs.core.list(1,2))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),(function (){var vec__3752__3753 = cljs.core.Vector.fromArray([1,2]);
var a__3754 = cljs.core.nth.call(null,vec__3752__3753,0,null);
var b__3755 = cljs.core.nth.call(null,vec__3752__3753,1,null);

return cljs.core.HashMap.fromArrays([a__3754],[b__3755]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.hash_map("﷑'a","﷑'b")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3756__3757 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([1,2]));
var a__3758 = cljs.core.nth.call(null,vec__3756__3757,0,null);
var b__3759 = cljs.core.nth.call(null,vec__3756__3757,1,null);

return cljs.core.Vector.fromArray([b__3759,a__3758]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'seq",(new cljs.core.Vector(null, [1,2])))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1})})}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",1))),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":10}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),cljs.core._PLUS_,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",10),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),"﷑'+",7))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":3})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",3)])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":3})})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})})]),cljs.core.Vector.fromArray([1,"﷐'foo","﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",3))])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2))])),(new cljs.core.Vector(null, [1,"﷐'foo","﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})})}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",100))),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":100}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",100),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})])})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])})]),cljs.core.Vector.fromArray([1,"﷐'foo",1,"﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",100)])))])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)])))])),(new cljs.core.Vector(null, [1,"﷐'foo",1,"﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":100})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",100)])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.Vector.fromArray(["﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),(new cljs.core.Vector(null, ["﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":1}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":2})]),cljs.core.Vector.fromArray([0,"﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1),cljs.core.hash_map("﷐'foo",2)])),(new cljs.core.Vector(null, [0,"﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":2})])}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":3,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":4})])})]),cljs.core.Vector.fromArray([1,"﷐'bar",1,"﷐'buzz"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",1),cljs.core.hash_map("﷐'buzz",2)]))),cljs.core.hash_map("﷐'foo",3,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",3),cljs.core.hash_map("﷐'buzz",4)])))])),(new cljs.core.Vector(null, [1,"﷐'bar",1,"﷐'buzz"]))))));
}
var a__3760 = cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([10,20,30]),cljs.core.seq.call(null,(function (){var a__192__auto____3761 = a__3760;
var ret__3762 = cljs.core.aclone.call(null,a__192__auto____3761);

var i__3763 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3763,cljs.core.alength.call(null,a__192__auto____3761))))
{(ret__3762[i__3763] = cljs.core._STAR_.call(null,10,(a__3760[i__3763])));
{
var G__3781 = cljs.core.inc.call(null,i__3763);
i__3763 = G__3781;
continue;
}
} else
{return ret__3762;
}
break;
}
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [10,20,30])),cljs.core.list("﷑'seq",cljs.core.list("﷑'amap","﷑'a","﷑'i","﷑'ret",cljs.core.list("﷑'*",10,cljs.core.list("﷑'aget","﷑'a","﷑'i")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,(function (){var a__198__auto____3764 = a__3760;

var i__3765 = 0;
var ret__3766 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3765,cljs.core.alength.call(null,a__198__auto____3764))))
{{
var G__3782 = cljs.core.inc.call(null,i__3765);
var G__3783 = cljs.core._PLUS_.call(null,ret__3766,(a__3760[i__3765]));
i__3765 = G__3782;
ret__3766 = G__3783;
continue;
}
} else
{return ret__3766;
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'areduce","﷑'a","﷑'i","﷑'ret",0,cljs.core.list("﷑'+","﷑'ret",cljs.core.list("﷑'aget","﷑'a","﷑'i"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.seq.call(null,a__3760),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,(a__3760[0] = 42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'aset","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,cljs.core.seq.call(null,a__3760),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,a__3760,cljs.core.aclone.call(null,a__3760))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'a",cljs.core.list("﷑'aclone","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core._LT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort","﷑'<",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([5,4,3,2,1]),cljs.core.sort.call(null,cljs.core._GT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [5,4,3,2,1])),cljs.core.list("﷑'sort","﷑'>",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["a",cljs.core.Vector.fromArray([1,2]),"foo"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["a",(new cljs.core.Vector(null, [1,2])),"foo"])),cljs.core.list("﷑'sort-by","﷑'count",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["foo",cljs.core.Vector.fromArray([1,2]),"a"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["foo",(new cljs.core.Vector(null, [1,2])),"a"])),cljs.core.list("﷑'sort-by","﷑'count","﷑'>",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["a","b"],{"a":1,"b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("a",1,"b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2},"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,[[{"a":1,"b":2}, {"a":1,"b":2}]],"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","[[{\"a\":1,\"b\":2}, {\"a\":1,\"b\":2}]]"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,null,cljs.core.last.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",null,cljs.core.list("﷑'last",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.last.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'last",(new cljs.core.Vector(null, [1,2,3]))))));
}
var s__3767 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));

var n__204__auto____3768 = 5;

var n__3769 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,n__3769,n__204__auto____3768)))
{cljs.core.swap_BANG_.call(null,s__3767,cljs.core.conj,n__3769);
{
var G__3784 = cljs.core.inc.call(null,n__3769);
n__3769 = G__3784;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.deref.call(null,s__3767))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'clojure.core/deref","﷑'s"))));
}
var v__3770 = cljs.core.Vector.fromArray([1,2,3,4,5]);
var s__3771 = cljs.core.atom.call(null,cljs.core.List.EMPTY);

var G__3772__3773 = cljs.core.seq.call(null,v__3770);

while(true){
if(cljs.core.truth_(G__3772__3773))
{var n__3774 = cljs.core.first.call(null,G__3772__3773);

cljs.core.swap_BANG_.call(null,s__3771,cljs.core.conj,n__3774);
{
var G__3785 = cljs.core.next.call(null,G__3772__3773);
G__3772__3773 = G__3785;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,s__3771),cljs.core.reverse.call(null,v__3770))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'clojure.core/deref","﷑'s"),cljs.core.list("﷑'reverse","﷑'v"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2,3,4))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([42,2]),cljs.core.assoc.call(null,cljs.core.Vector.fromArray([1,2]),0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [42,2])),cljs.core.list("﷑'assoc",(new cljs.core.Vector(null, [1,2])),0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),1,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),1,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.disj.call(null,cljs.core.set([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),2,3))));
}
var f__3775 = cljs.core.memoize.call(null,(function (){
return cljs.core.rand.call(null);
}));

f__3775.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,f__3775.call(null),f__3775.call(null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'f"),cljs.core.list("﷑'f"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'a"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),"﷐'a"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'b"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'b"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'b"),cljs.core.Vector.fromArray(["﷐'b",2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"),(new cljs.core.Vector(null, ["﷐'b",2])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'c"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'c"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.Vector.fromArray([1,2,3]),0),cljs.core.Vector.fromArray([0,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",(new cljs.core.Vector(null, [1,2,3])),0),(new cljs.core.Vector(null, [0,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,4,2),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",4,2),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,6,4),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",6,4),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,-5),-8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,-5),-8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-42,-5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-42,-5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,3),3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,3),3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,-3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,-3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-9,3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-9,3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,2,-5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",2,-5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-2,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-2,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,6,4),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",6,4),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3216478362187432,432143214),120355456)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3216478362187432,432143214),120355456)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,-5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,-5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,3),0)));
}
var d__3776 = cljs.core.group_by.call(null,cljs.core.second,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c","﷐'d","﷐'e","﷐'f"],{"﷐'a":1,"﷐'b":2,"﷐'c":1,"﷐'d":4,"﷐'e":1,"﷐'f":2}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,cljs.core.get.call(null,d__3776,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,cljs.core.get.call(null,d__3776,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,cljs.core.get.call(null,d__3776,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3,5],[2,4,6]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),cljs.core.HashMap.fromArrays([5],[6])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4,5,6),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),cljs.core.hash_map(5,6)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),null))));
}
return "﷐'ok";
});


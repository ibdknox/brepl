goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__3353 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__3353,cljs.core.remove.call(null,(function (p1__3352_SHARP_){
return cljs.core.identical_QMARK_.call(null,max__3353,p1__3352_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__3356 = (function (){
return cljs.core.set([]);
});
var union__3357 = (function (s1){
return s1;
});
var union__3358 = (function (s1,s2){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s1),cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3359 = (function() { 
var G__3361__delegate = function (s1,s2,sets){
var bubbled_sets__3355 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__3355),cljs.core.rest.call(null,bubbled_sets__3355));
};
var G__3361 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3361__delegate.call(this, s1, s2, sets);
};
G__3361.cljs$lang$maxFixedArity = 2;
G__3361.cljs$lang$applyTo = (function (arglist__3362){
var s1 = cljs.core.first(arglist__3362);
var s2 = cljs.core.first(cljs.core.next(arglist__3362));
var sets = cljs.core.rest(cljs.core.next(arglist__3362));
return G__3361__delegate.call(this, s1, s2, sets);
});
return G__3361;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__3356.call(this);
case  1 :
return union__3357.call(this,s1);
case  2 :
return union__3358.call(this,s1,s2);
default:
return union__3359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3359.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__3364 = (function (s1){
return s1;
});
var intersection__3365 = (function (s1,s2){
while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s2),cljs.core.count.call(null,s1))))
{{
var G__3368 = s2;
var G__3369 = s1;
s1 = G__3368;
s2 = G__3369;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3366 = (function() { 
var G__3370__delegate = function (s1,s2,sets){
var bubbled_sets__3363 = clojure.set.bubble_max_key.call(null,(function (p1__3354_SHARP_){
return cljs.core._.call(null,cljs.core.count.call(null,p1__3354_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__3363),cljs.core.rest.call(null,bubbled_sets__3363));
};
var G__3370 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3370__delegate.call(this, s1, s2, sets);
};
G__3370.cljs$lang$maxFixedArity = 2;
G__3370.cljs$lang$applyTo = (function (arglist__3371){
var s1 = cljs.core.first(arglist__3371);
var s2 = cljs.core.first(cljs.core.next(arglist__3371));
var sets = cljs.core.rest(cljs.core.next(arglist__3371));
return G__3370__delegate.call(this, s1, s2, sets);
});
return G__3370;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__3364.call(this,s1);
case  2 :
return intersection__3365.call(this,s1,s2);
default:
return intersection__3366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3366.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__3372 = (function (s1){
return s1;
});
var difference__3373 = (function (s1,s2){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s1),cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3374 = (function() { 
var G__3376__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__3376 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3376__delegate.call(this, s1, s2, sets);
};
G__3376.cljs$lang$maxFixedArity = 2;
G__3376.cljs$lang$applyTo = (function (arglist__3377){
var s1 = cljs.core.first(arglist__3377);
var s2 = cljs.core.first(cljs.core.next(arglist__3377));
var sets = cljs.core.rest(cljs.core.next(arglist__3377));
return G__3376__delegate.call(this, s1, s2, sets);
});
return G__3376;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__3372.call(this,s1);
case  2 :
return difference__3373.call(this,s1,s2);
default:
return difference__3374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3374.cljs$lang$applyTo;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__3378_SHARP_){
return cljs.core.select_keys.call(null,p1__3378_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__3380){
var vec__3381__3382 = p__3380;
var old__3383 = cljs.core.nth.call(null,vec__3381__3382,0,null);
var new$__3384 = cljs.core.nth.call(null,vec__3381__3382,1,null);

if(cljs.core.truth_((function (){var and__3574__auto____3385 = cljs.core.not_EQ_.call(null,old__3383,new$__3384);

if(cljs.core.truth_(and__3574__auto____3385))
{return cljs.core.contains_QMARK_.call(null,m,old__3383);
} else
{return and__3574__auto____3385;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__3384,cljs.core.get.call(null,m,old__3383)),old__3383);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__3379_SHARP_){
return clojure.set.rename_keys.call(null,p1__3379_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__3386 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__3386,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__3386,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__3391){
var vec__3392__3393 = p__3391;
var k__3394 = cljs.core.nth.call(null,vec__3392__3393,0,null);
var v__3395 = cljs.core.nth.call(null,vec__3392__3393,1,null);

return cljs.core.assoc.call(null,m,v__3395,k__3394);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__3412 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3574__auto____3397 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3574__auto____3397))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3574__auto____3397;
}
})()))
{var ks__3399 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__3398__3400 = (cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.count.call(null,xrel),cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel]):cljs.core.Vector.fromArray([yrel,xrel]));
var r__3401 = cljs.core.nth.call(null,vec__3398__3400,0,null);
var s__3402 = cljs.core.nth.call(null,vec__3398__3400,1,null);
var idx__3403 = clojure.set.index.call(null,r__3401,ks__3399);

return cljs.core.reduce.call(null,(function (ret,x){
var found__3404 = idx__3403.call(null,cljs.core.select_keys.call(null,x,ks__3399));

if(cljs.core.truth_(found__3404))
{return cljs.core.reduce.call(null,(function (p1__3387_SHARP_,p2__3388_SHARP_){
return cljs.core.conj.call(null,p1__3387_SHARP_,cljs.core.merge.call(null,p2__3388_SHARP_,x));
}),ret,found__3404);
} else
{return ret;
}
}),cljs.core.set([]),s__3402);
} else
{return cljs.core.set([]);
}
});
var join__3413 = (function (xrel,yrel,km){
var vec__3405__3406 = (cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.count.call(null,xrel),cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.Vector.fromArray([yrel,xrel,km]));
var r__3407 = cljs.core.nth.call(null,vec__3405__3406,0,null);
var s__3408 = cljs.core.nth.call(null,vec__3405__3406,1,null);
var k__3409 = cljs.core.nth.call(null,vec__3405__3406,2,null);
var idx__3410 = clojure.set.index.call(null,r__3407,cljs.core.vals.call(null,k__3409));

return cljs.core.reduce.call(null,(function (ret,x){
var found__3411 = idx__3410.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__3409)),k__3409));

if(cljs.core.truth_(found__3411))
{return cljs.core.reduce.call(null,(function (p1__3389_SHARP_,p2__3390_SHARP_){
return cljs.core.conj.call(null,p1__3389_SHARP_,cljs.core.merge.call(null,p2__3390_SHARP_,x));
}),ret,found__3411);
} else
{return ret;
}
}),cljs.core.set([]),s__3408);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__3412.call(this,xrel,yrel);
case  3 :
return join__3413.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3574__auto____3416 = cljs.core._LT__EQ_.call(null,cljs.core.count.call(null,set1),cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3574__auto____3416))
{return cljs.core.every_QMARK_.call(null,(function (p1__3396_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__3396_SHARP_);
}),set1);
} else
{return and__3574__auto____3416;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3574__auto____3417 = cljs.core._GT__EQ_.call(null,cljs.core.count.call(null,set1),cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3574__auto____3417))
{return cljs.core.every_QMARK_.call(null,(function (p1__3415_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__3415_SHARP_);
}),set2);
} else
{return and__3574__auto____3417;
}
});

goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(cljs.core.Vector.fromArray([root,null]),cljs.core.ObjMap.fromObject(["﷐'zip/make-node","﷐'zip/children","﷐'zip/branch?"],{"﷐'zip/make-node":make_node,"﷐'zip/children":children,"﷐'zip/branch?":branch_QMARK_}));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,"﷐'content"),(function (node,children){
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3574__auto____3462 = children;

if(cljs.core.truth_(and__3574__auto____3462))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3574__auto____3462;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){
return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){
return "﷐'zip/branch?".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return "﷐'zip/children".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){
return "﷐'zip/make-node".call(null,cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){
return "﷐'pnodes".call(null,loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){
return cljs.core.seq.call(null,"﷐'l".call(null,loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){
return "﷐'r".call(null,loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__3463__3465 = loc;
var node__3466 = cljs.core.nth.call(null,vec__3463__3465,0,null);
var path__3467 = cljs.core.nth.call(null,vec__3463__3465,1,null);
var vec__3464__3468 = clojure.zip.children.call(null,loc);
var c__3469 = cljs.core.nth.call(null,vec__3464__3468,0,null);
var cnext__3470 = cljs.core.nthnext.call(null,vec__3464__3468,1);
var cs__3471 = vec__3464__3468;

if(cljs.core.truth_(cs__3471))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__3469,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__3467)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__3467),node__3466):cljs.core.Vector.fromArray([node__3466])),"﷐'ppath":path__3467,"﷐'r":cnext__3470})]),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){
var vec__3472__3473 = loc;
var node__3474 = cljs.core.nth.call(null,vec__3472__3473,0,null);
var path__3475 = cljs.core.nth.call(null,vec__3472__3473,1,null);
var path__3476 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3475))?cljs.core.apply.call(null,cljs.core.hash_map,path__3475):path__3475);
var l__3477 = cljs.core.get.call(null,path__3476,"﷐'l");
var ppath__3478 = cljs.core.get.call(null,path__3476,"﷐'ppath");
var pnodes__3479 = cljs.core.get.call(null,path__3476,"﷐'pnodes");
var r__3480 = cljs.core.get.call(null,path__3476,"﷐'r");
var changed_QMARK___3481 = cljs.core.get.call(null,path__3476,"﷐'changed?");

if(cljs.core.truth_(pnodes__3479))
{var pnode__3482 = cljs.core.peek.call(null,pnodes__3479);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___3481)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__3482,cljs.core.concat.call(null,l__3477,cljs.core.cons.call(null,node__3474,r__3480))),(function (){var and__3574__auto____3483 = ppath__3478;

if(cljs.core.truth_(and__3574__auto____3483))
{return cljs.core.assoc.call(null,ppath__3478,"﷐'changed?",true);
} else
{return and__3574__auto____3483;
}
})()]):cljs.core.Vector.fromArray([pnode__3482,ppath__3478])),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){
while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return clojure.zip.node.call(null,loc);
} else
{var p__3484 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__3484))
{{
var G__3485 = p__3484;
loc = G__3485;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){
var vec__3486__3488 = loc;
var node__3489 = cljs.core.nth.call(null,vec__3486__3488,0,null);
var path__3490 = cljs.core.nth.call(null,vec__3486__3488,1,null);
var path__3491 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3490))?cljs.core.apply.call(null,cljs.core.hash_map,path__3490):path__3490);
var l__3492 = cljs.core.get.call(null,path__3491,"﷐'l");
var vec__3487__3493 = cljs.core.get.call(null,path__3491,"﷐'r");
var r__3494 = cljs.core.nth.call(null,vec__3487__3493,0,null);
var rnext__3495 = cljs.core.nthnext.call(null,vec__3487__3493,1);
var rs__3496 = vec__3487__3493;

if(cljs.core.truth_((function (){var and__3574__auto____3497 = path__3491;

if(cljs.core.truth_(and__3574__auto____3497))
{return rs__3496;
} else
{return and__3574__auto____3497;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__3494,cljs.core.assoc.call(null,path__3491,"﷐'l",cljs.core.conj.call(null,l__3492,node__3489),"﷐'r",rnext__3495)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__3498__3499 = loc;
var node__3500 = cljs.core.nth.call(null,vec__3498__3499,0,null);
var path__3501 = cljs.core.nth.call(null,vec__3498__3499,1,null);
var path__3502 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3501))?cljs.core.apply.call(null,cljs.core.hash_map,path__3501):path__3501);
var l__3503 = cljs.core.get.call(null,path__3502,"﷐'l");
var r__3504 = cljs.core.get.call(null,path__3502,"﷐'r");

if(cljs.core.truth_((function (){var and__3574__auto____3505 = path__3502;

if(cljs.core.truth_(and__3574__auto____3505))
{return r__3504;
} else
{return and__3574__auto____3505;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__3504),cljs.core.assoc.call(null,path__3502,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__3503,node__3500,cljs.core.butlast.call(null,r__3504)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__3506__3507 = loc;
var node__3508 = cljs.core.nth.call(null,vec__3506__3507,0,null);
var path__3509 = cljs.core.nth.call(null,vec__3506__3507,1,null);
var path__3510 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3509))?cljs.core.apply.call(null,cljs.core.hash_map,path__3509):path__3509);
var l__3511 = cljs.core.get.call(null,path__3510,"﷐'l");
var r__3512 = cljs.core.get.call(null,path__3510,"﷐'r");

if(cljs.core.truth_((function (){var and__3574__auto____3513 = path__3510;

if(cljs.core.truth_(and__3574__auto____3513))
{return cljs.core.seq.call(null,l__3511);
} else
{return and__3574__auto____3513;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__3511),cljs.core.assoc.call(null,path__3510,"﷐'l",cljs.core.pop.call(null,l__3511),"﷐'r",cljs.core.cons.call(null,node__3508,r__3512))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__3514__3515 = loc;
var node__3516 = cljs.core.nth.call(null,vec__3514__3515,0,null);
var path__3517 = cljs.core.nth.call(null,vec__3514__3515,1,null);
var path__3518 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3517))?cljs.core.apply.call(null,cljs.core.hash_map,path__3517):path__3517);
var l__3519 = cljs.core.get.call(null,path__3518,"﷐'l");
var r__3520 = cljs.core.get.call(null,path__3518,"﷐'r");

if(cljs.core.truth_((function (){var and__3574__auto____3521 = path__3518;

if(cljs.core.truth_(and__3574__auto____3521))
{return cljs.core.seq.call(null,l__3519);
} else
{return and__3574__auto____3521;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__3519),cljs.core.assoc.call(null,path__3518,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__3519),cljs.core.Vector.fromArray([node__3516]),r__3520))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__3522__3523 = loc;
var node__3524 = cljs.core.nth.call(null,vec__3522__3523,0,null);
var path__3525 = cljs.core.nth.call(null,vec__3522__3523,1,null);
var path__3526 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3525))?cljs.core.apply.call(null,cljs.core.hash_map,path__3525):path__3525);
var l__3527 = cljs.core.get.call(null,path__3526,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__3526)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__3524,cljs.core.assoc.call(null,path__3526,"﷐'l",cljs.core.conj.call(null,l__3527,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__3528__3529 = loc;
var node__3530 = cljs.core.nth.call(null,vec__3528__3529,0,null);
var path__3531 = cljs.core.nth.call(null,vec__3528__3529,1,null);
var path__3532 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3531))?cljs.core.apply.call(null,cljs.core.hash_map,path__3531):path__3531);
var r__3533 = cljs.core.get.call(null,path__3532,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__3532)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__3530,cljs.core.assoc.call(null,path__3532,"﷐'r",cljs.core.cons.call(null,item,r__3533),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__3534__3535 = loc;
var ___3536 = cljs.core.nth.call(null,vec__3534__3535,0,null);
var path__3537 = cljs.core.nth.call(null,vec__3534__3535,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__3537,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return edit__delegate.call(this, loc, f, args);
};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__3538){
var loc = cljs.core.first(arglist__3538);
var f = cljs.core.first(cljs.core.next(arglist__3538));
var args = cljs.core.rest(cljs.core.next(arglist__3538));
return edit__delegate.call(this, loc, f, args);
});
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),cljs.core.Vector.fromArray([item]))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return loc;
} else
{var or__3576__auto____3540 = (function (){var and__3574__auto____3539 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3574__auto____3539))
{return clojure.zip.down.call(null,loc);
} else
{return and__3574__auto____3539;
}
})();

if(cljs.core.truth_(or__3576__auto____3540))
{return or__3576__auto____3540;
} else
{var or__3576__auto____3541 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3576__auto____3541))
{return or__3576__auto____3541;
} else
{var p__3542 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__3542)))
{var or__3576__auto____3543 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__3542));

if(cljs.core.truth_(or__3576__auto____3543))
{return or__3576__auto____3543;
} else
{{
var G__3544 = clojure.zip.up.call(null,p__3542);
p__3542 = G__3544;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__3542),"﷐'end"]);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){
var temp__3723__auto____3545 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3723__auto____3545))
{var lloc__3546 = temp__3723__auto____3545;

var loc__3547 = lloc__3546;

while(true){
var temp__3723__auto____3549 = (function (){var and__3574__auto____3548 = clojure.zip.branch_QMARK_.call(null,loc__3547);

if(cljs.core.truth_(and__3574__auto____3548))
{return clojure.zip.down.call(null,loc__3547);
} else
{return and__3574__auto____3548;
}
})();

if(cljs.core.truth_(temp__3723__auto____3549))
{var child__3550 = temp__3723__auto____3549;

{
var G__3551 = clojure.zip.rightmost.call(null,child__3550);
loc__3547 = G__3551;
continue;
}
} else
{return loc__3547;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){
return cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){
var vec__3552__3553 = loc;
var node__3554 = cljs.core.nth.call(null,vec__3552__3553,0,null);
var path__3555 = cljs.core.nth.call(null,vec__3552__3553,1,null);
var path__3556 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__3555))?cljs.core.apply.call(null,cljs.core.hash_map,path__3555):path__3555);
var l__3557 = cljs.core.get.call(null,path__3556,"﷐'l");
var ppath__3558 = cljs.core.get.call(null,path__3556,"﷐'ppath");
var pnodes__3559 = cljs.core.get.call(null,path__3556,"﷐'pnodes");
var rs__3560 = cljs.core.get.call(null,path__3556,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__3556)))
{throw "Remove at top";
} else
{if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,l__3557))))
{var loc__3561 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__3557),cljs.core.assoc.call(null,path__3556,"﷐'l",cljs.core.pop.call(null,l__3557),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3723__auto____3563 = (function (){var and__3574__auto____3562 = clojure.zip.branch_QMARK_.call(null,loc__3561);

if(cljs.core.truth_(and__3574__auto____3562))
{return clojure.zip.down.call(null,loc__3561);
} else
{return and__3574__auto____3562;
}
})();

if(cljs.core.truth_(temp__3723__auto____3563))
{var child__3564 = temp__3723__auto____3563;

{
var G__3566 = clojure.zip.rightmost.call(null,child__3564);
loc__3561 = G__3566;
continue;
}
} else
{return loc__3561;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__3559),rs__3560),(function (){var and__3574__auto____3565 = ppath__3558;

if(cljs.core.truth_(and__3574__auto____3565))
{return cljs.core.assoc.call(null,ppath__3558,"﷐'changed?",true);
} else
{return and__3574__auto____3565;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});

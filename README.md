# Brepl

The Clojure Script REPL that uses a running browser as its execution context. This lets you run ClojureScript code to drive the browser...

Let the dom appending begin!

## Requirements

* You have to have ClojureScript on your machine and ready to use (you called script/bootstrap)
* You have rlwrap installed (you can technically do without this if you modify ./brepl)

## Usage

Edit ./brepl to set your CLOJURESCRIPT_HOME, which is just the dir that ClojureScript in it.

```bash
lein deps
./brepl /path/to/cljs/src/
```

Then just open the included index.html in a browser that supports websockets (only tested in chrome so far).
Results are printed to the browser's console, so make sure you have it open.

## Notes

ClojureScript doesn't have a (require) function in cljs.core, so I've implemented one for brepl, which I can't
guarantee will act the same as (ns some-ns (:require ...)), though I haven't seen any differences.

## License

Copyright (C) 2011 Chris Granger

Distributed under the Eclipse Public License, the same as Clojure.

# Brepl is no longer needed, check out the browser repl included with ClojureScript itself :)

# Brepl

The Clojure Script REPL that uses a running browser as its execution context. This lets you run ClojureScript code to drive the browser...

Let the dom appending begin!

## Requirements

* You have to have ClojureScript on your machine and ready to use (you called script/bootstrap)
* You have rlwrap installed (you can technically do without this if you modify ./brepl)

## Usage

You have to have an environment variable set for CLOJURESCRIPT_HOME, If you don't already have 
it setup, you can edit ./brepl and uncomment the export line.

```bash
lein deps
./brepl
```


Then just open the included index.html in a browser that supports websockets (only tested in chrome so far).
Results are printed to the browser's console, so make sure you have it open.

## Notes

* ClojureScript doesn't have a (require) function in cljs.core, so I've implemented one for brepl, which I can't guarantee will act the same as (ns some-ns (:require ...)), though I haven't seen any differences.
* Assuming your project follows the standard clj directory structure of proj/src/ns/file.cljs, if you run brepl from the root dir of your project, it will add all of those files to the brepl classpath and load them when you do requires.
* You can now put the brepl dir on your classpath and call brepl from any directory

## License

Copyright (C) 2011 Chris Granger

Distributed under the Eclipse Public License, the same as Clojure.

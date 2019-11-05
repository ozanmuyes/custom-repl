# custom-repl

Custom REPL for Node.js applications. Think this as if it like `artisan` for Laravel developers. Expose application code via `replServer.context` and be able to run code on your terminal. See examples directory.

---

Run

```bash
sudo chmod +x ./custom-repl
```

and then

```bash
./repl
custom-repl >
```

write `greet()` to see the output.

One can add more variables (read-only or normal) and functions to the REPL context via;

```js
Object.defineProperties(replServer.context, {
  //
});
```

see `index.js` for more details.

# turbopack-issue

If you use `npm run dev:webpack` it works, but if you use `npm run dev` then:

```sh
Module not found: Can't resolve './full/path/to/lib'
```

File changes:
- [example lib](lib/index.js)
- [page file](app/pages/index.js)
- [next config](app/next.config.mjs)
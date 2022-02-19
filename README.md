# Astro + React Example

```
npm init astro -- --template framework-react
```
TODO: 
T1
- [ ] desktop styles
- [ ] mobile style
- [ ] add printmode styles sheet
- [ ] add .astro formatter
- [ ] add I18N

Hey everyone, I'm so excited to use astro and astro make a awesome DX!!. but there has a problem I found

I used `Astro.fetchContent` to load marddown file, and i tried to patch the function to let me can fetch different language markdown file like below.

```
const fetchPatch = (fetchFunc) => 
    (path, lang) => fetchFunc(combinePath(path, lang))

fetchPatch(Astro.fetchContent)
```

But i got the problem, the dev server always return `500`.

And after many tried, I found it cannot use variable as `Astro.fetchContent` function argument. 

```js
---
var path = './contact.md'
const contact = Astro.fetchContent(path);
---
```

The code above is even not work, Its return Error

```
Cannot read property 'astro' of undefined
TypeError: Cannot read property 'astro' of undefined
    at eval (/src/content/Contact/index.astro:42:27)
    at renderToString (../../../src/runtime/server/index.ts:377:42)
    at Module.renderComponent (../../../src/runtime/server/index.ts:129:38)
```

Are there any idea or suggestion, thank for reply!!
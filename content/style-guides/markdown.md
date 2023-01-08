---
title: Markdown
sidebar_label: Markdown
---

[GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Tools

- Visual Studio Code: Ctrl+Shift+V in `.md` files open window
- [Notepad++ NppMarkdownPanel](https://github.com/mohzy83/NppMarkdownPanel)

## Markdown Syntax

### Headers

# H1 - Create the best documentation

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

### Emphasis

Emphasis, aka italics, with *asterisks* or *underscores*.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and *underscores***.

Strike-through uses two tildes. ~~Scratch this.~~

### Lists

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

- Unordered list can use asterisks

- Or minuses

- Or pluses

### Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
<http://www.example.com> or <http://www.example.com> and sometimes example.com (but not on GitHub,
for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

### Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://address-to.com/image.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://address-to.com/image.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

```markdown
![img](../../static/images/logo.svg)
```

### Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```shell
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

### Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and
you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| *Still*  | `renders` | **nicely** |
| 1        | 2         | 3          |

### Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh
boy let's keep writing to make sure this is long enough to actually wrap for
everyone. Oh, you can *put* **Markdown** into a blockquote.

### Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

### Line Breaks

Here's a line for us to start with.

---

This line is separated from the one above by two newlines, so it will be a
*separate paragraph*.

This line is also a separate paragraph, but... This line is only separated by a
single newline, so it's a separate line in the *same paragraph*.

## Static Site Generator (SSG)

> See [Getting Started](https://mdxjs.com/getting-started#getting-started) for
more details on working with SSGs and compilers.

### Code line highlighting

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

### Embed `.md?x` documents in other documents

> See the documentation for more details on [transclusion](https://mdxjs.com/getting-started#documents).

```jsx
import License from './license.md'
import Contributing from './policies/contributing.mdx'

Hello, world!

<License />

---

<Contributing />
```

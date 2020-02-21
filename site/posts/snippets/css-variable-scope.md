---
title: CSS Variable Scope
date: 2020-02-21T02:53:40.295Z
tags:
  - CSS
image: /uploads/css-variable-scope.png
code:
  code: |-
    :root {
      --color: red;
    }

    a {
      color: var(--color);
    }

    .local {
      --color: purple;
    }
  lang: css
---
Global (root) scope lets you access variables from anywhere in your CSS:

```css
:root {
  --color: purple;
}

a {
  color: var(--color);
}
```

Local scope lets you override global variables for more specific uses!

```css
.local {
  --color: orange;
}
```

Rules will use the relevant variable:

```html
<a>I am purple!</a>

<div class="local">
  <a>I am orange!</a>
</div>
```

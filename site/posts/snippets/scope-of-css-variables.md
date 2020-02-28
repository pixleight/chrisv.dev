---
title: Scope of CSS Variables
date: 2020-02-27T18:07:41.948Z
tags:
  - CSS
  - Basics
image: /uploads/snippet_css-variable-scope.png
---
CSS variables are powerful. They allow you to define values to be reused throughout your stylesheet. Not only does this help with maintainability (*"What color was that primary again? #44337a or #6b46c1?"*), but one of the most useful features is *scope*.

## Basic usage

Defining a CSS variable is similar to defining any other CSS property:

```css
    element {
      --color-primary: purple;
    }
```

Note the initial `--`: this tells CSS that the following property name is custom. These names can be whatever you want, but pay attention to case: `--primary-color` and `--Primary-Color` are two different variables.

A common practice is to define variables in the `:root` pseudo-element so they are available anywhere in the CSS:

```css
    :root {
      --color-primary: purple;
    }
```

Later, you can recall this value using the `var()` function:

```css
    a {
      color: var(--color-primary);
    }
```

## What about scope?

Just like any other property in CSS, variables can be redefined wherever you like, and it will use the rule with the highest specificity:

```css
    :root {
      --color-primary: purple;
    }
    
    p {
      --color-primary: orange;
    }
    
    a {
      color: var(--color-primary);
    }
```

```html
    <a>I am purple!</a>
    
    <p>
      <a>I am orange!</a>
    </p>
```

## Why is this useful?

This feature could have many applications, but one particular case I used it in was when doing a "holiday theme" for a site I was working on:

The client was running contests at various times though the year, and wanted to be able to style the site according to the current contest. I defined several default variables in `:root`, then overrode them in a class I added to the `<body>`. Anything using those variables would use the more specific values:

```css
    :root {
      --color-primary: green;
      --color-secondary: blue;
      /* and so on... */
    }
    
    .theme--halloween {
      --color-primary: orange;
      --color-secondary: purple;
    }
    
    .theme--christmas {
      --color-primary: red;
      --color-secondary: green;
    }
```

In the future, creating a new theme would be as simple as adding a new class to the CSS and setting some new variables, and adding that class to the `<body>` tag of the site.

## What if a variable is undefined?

If a variable is not defined, you can add a fallback value as a second parameter in the `var()` function:

```css
    a {
      color: var(--undefined-var, blue);
    	/* evaluates to "color: blue;" if --undefined-var is not defined */
    }
```

A fallback could even be another variable, which could itself even have a fallback value:

```css
    a {
    	color: var(--undefined-one, var(--undefined-two, blue));
    	/* color will be whatever value is found first: 
    	  --undefined-one, --undefined-two, or blue */
    }
```

## Browser support

At the time of writing, CSS Variables are supported for [about 93% of users worldwide](https://caniuse.com/#feat=css-variables).

## Further reading

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [The Power (and Fun) of Scope with CSS Custom Properties](https://css-tricks.com/the-power-and-fun-of-scope-with-css-custom-properties/)
- [CSS Custom Properties and Theming](https://css-tricks.com/css-custom-properties-theming/)

**Happy coding! 🎉**

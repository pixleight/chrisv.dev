---
title: Ternary Operators in Twig
date: 2020-02-28T02:03:28.700Z
tags:
  - Craft CMS
  - Twig
image: /uploads/snip_twig-ternary.png
---
A ternary operator is a shorthand way to write an `if...else` statement. In many languages, this takes on the form of `variable to check ? return if true : return if false`. For example, in Javascript:

```javascript
var foo = true;

var bar = foo ? 'foo is true!' : 'foo is false!';
console.log(bar); /* foo is true! */

/* The above is the same as writing: */
if(foo = true) {
  var bar = 'foo is true!';
} else {
  var bar = 'foo is false!';
}
console.log(bar); /* foo is true! */
```

In Twig, we can immediately echo the result of the ternary operator:

```twig
{{ foo ? 'foo is true!' : 'foo is false!' }}
```

Without the shorthand ternary, the above would have to be written as:

```twig
{% if foo %}
  {{ 'foo is true!' }}
{% else %}
  {{ 'foo is false!' }}
{% endif %}
```

If often comes down to personal preferance, but I find the ternary form to be much easier to read and quickly understand.

Ternary operators can also be used to `set` a variable for later use instead of echoing immediately:

```twig
{% set bar = foo ? 'foo is true!' : 'foo is false!' %}
```

Twig also offers a few extra operators to make things even easier: `?:`, `??`, and just `?`.

```twig
{{ foo ? 'foo is true!' }}
Could also be written as {{ foo ? 'foo is true!' : '' }}

{{ foo ?: 'foo is false!' }}
Could also be written as {{ foo ? '' : 'foo is false!' }}
```

`??` is technically called the "null-coalescing operator", but fits in well with the ternary operators. `??` returns the value of the variable being checked if it's defined and not null, otherwise it returns the other value defined:

```twig
{{ foo ?? 'foo is undefined!' }}
Returns the value of foo if it's defined, or 'foo is undefined!' if it's not.
```

This operator can also be chained to return the first thing that's defined and not null:

```twig
{{ foo ?? bar ?? baz ?? 'Default value!' }}
```

Andrew Welch of nystudio107 took this a step further and [wrote a plugin to add the "empty-coalescing operator"](https://nystudio107.com/plugins/empty-coalesce) `???`. 

As Andrew describes it, `??` will still return an empty string, because it's not null or undefined. `???` will instead return the first value that is not null, undefined, *or* empty. In an example in his [excellent post on error handling in Craft](https://nystudio107.com/blog/handling-errors-gracefully-in-craft-cms):

```twig
{{ entry.title ??? category.title ??? global.title ??? 'Default Title' }}
```

## Wrapping up

I think ternary operators keep things simple and readable and make templates easier to scan and understand.

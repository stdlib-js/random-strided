<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Strided

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom number generator (PRNG) strided array functions.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { arcsine, bernoulli, beta, betaprime, chi, chisquare, cosine, discreteUniform, exponential, gamma, geometric, invgamma, lognormal, minstd, minstdShuffle, mt19937, normal, randu, uniform, weibull } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided@esm/index.mjs';
```

#### ns

Namespace containing strided array pseudorandom number generator (PRNG) functions.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/arcsine]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an arcsine distribution.</span>
-   <span class="signature">[`beta( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/beta]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a beta distribution.</span>
-   <span class="signature">[`betaprime( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/betaprime]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a beta prime distribution.</span>
-   <span class="signature">[`cosine( N, mu, sm, s, ss, out, so[, options] )`][@stdlib/random/strided/cosine]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a raised cosine distribution.</span>
-   <span class="signature">[`discreteUniform( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/discrete-uniform]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a discrete uniform distribution.</span>
-   <span class="signature">[`exponential( N, lambda, sl, out, so )`][@stdlib/random/strided/exponential]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an exponential distribution.</span>
-   <span class="signature">[`gamma( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/gamma]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`invgamma( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/invgamma]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`lognormal( N, mu, sm, sigma, ss, out, so[, options] )`][@stdlib/random/strided/lognormal]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( N, out, so[, options] )`][@stdlib/random/strided/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( N, out, so[, options] )`][@stdlib/random/strided/minstd]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="signature">[`mt19937( N, out, so[, options] )`][@stdlib/random/strided/mt19937]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`normal( N, mu, sm, sigma, ss, out, so[, options] )`][@stdlib/random/strided/normal]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`randu( N, out, so[, options] )`][@stdlib/random/strided/randu]</span><span class="delimiter">: </span><span class="description">fill a strided array with uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`uniform( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/uniform]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a continuous uniform distribution.</span>
-   <span class="signature">[`weibull( N, k, sk, lambda, sl, out, so[, options] )`][@stdlib/random/strided/weibull]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a Weibull distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-strided.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-strided

[test-image]: https://github.com/stdlib-js/random-strided/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-strided/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-strided/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-strided?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-strided.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-strided/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-strided/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-strided/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-strided/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-strided/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-strided/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-strided/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-strided/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-strided/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/strided/arcsine]: https://github.com/stdlib-js/random-strided-arcsine/tree/esm

[@stdlib/random/strided/beta]: https://github.com/stdlib-js/random-strided-beta/tree/esm

[@stdlib/random/strided/betaprime]: https://github.com/stdlib-js/random-strided-betaprime/tree/esm

[@stdlib/random/strided/cosine]: https://github.com/stdlib-js/random-strided-cosine/tree/esm

[@stdlib/random/strided/discrete-uniform]: https://github.com/stdlib-js/random-strided-discrete-uniform/tree/esm

[@stdlib/random/strided/exponential]: https://github.com/stdlib-js/random-strided-exponential/tree/esm

[@stdlib/random/strided/gamma]: https://github.com/stdlib-js/random-strided-gamma/tree/esm

[@stdlib/random/strided/invgamma]: https://github.com/stdlib-js/random-strided-invgamma/tree/esm

[@stdlib/random/strided/lognormal]: https://github.com/stdlib-js/random-strided-lognormal/tree/esm

[@stdlib/random/strided/minstd-shuffle]: https://github.com/stdlib-js/random-strided-minstd-shuffle/tree/esm

[@stdlib/random/strided/minstd]: https://github.com/stdlib-js/random-strided-minstd/tree/esm

[@stdlib/random/strided/mt19937]: https://github.com/stdlib-js/random-strided-mt19937/tree/esm

[@stdlib/random/strided/normal]: https://github.com/stdlib-js/random-strided-normal/tree/esm

[@stdlib/random/strided/randu]: https://github.com/stdlib-js/random-strided-randu/tree/esm

[@stdlib/random/strided/uniform]: https://github.com/stdlib-js/random-strided-uniform/tree/esm

[@stdlib/random/strided/weibull]: https://github.com/stdlib-js/random-strided-weibull/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->

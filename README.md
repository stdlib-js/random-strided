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

# Strided

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom number generator (PRNG) strided array functions.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-strided
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random-strided' );
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
-   <span class="signature">[`exponential( N, lambda, sl, out, so[, options] )`][@stdlib/random/strided/exponential]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a exponential distribution.</span>
-   <span class="signature">[`gamma( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/gamma]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a gamma distribution.</span>
-   <span class="signature">[`invgamma( N, alpha, sa, beta, sb, out, so[, options] )`][@stdlib/random/strided/invgamma]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from an inverse gamma distribution.</span>
-   <span class="signature">[`lognormal( N, mu, sm, sigma, ss, out, so[, options] )`][@stdlib/random/strided/lognormal]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a lognormal distribution.</span>
-   <span class="signature">[`minstdShuffle( N, out, so[, options] )`][@stdlib/random/strided/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd( N, out, so[, options] )`][@stdlib/random/strided/minstd]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a linear congruential pseudorandom number generator (LCG).</span>
-   <span class="signature">[`mt19937( N, out, so[, options] )`][@stdlib/random/strided/mt19937]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers generated using a 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`normal( N, mu, sm, sigma, ss, out, so[, options] )`][@stdlib/random/strided/normal]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a normal distribution.</span>
-   <span class="signature">[`randu( N, out, so[, options] )`][@stdlib/random/strided/randu]</span><span class="delimiter">: </span><span class="description">fill a strided array with uniformly distributed pseudorandom numbers between `0` and `1`.</span>
-   <span class="signature">[`uniform( N, a, sa, b, sb, out, so[, options] )`][@stdlib/random/strided/uniform]</span><span class="delimiter">: </span><span class="description">fill a strided array with pseudorandom numbers drawn from a continuous uniform distribution.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/random-strided' );

console.log( objectKeys( ns ) );
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-strided/tree/deno
[umd-url]: https://github.com/stdlib-js/random-strided/tree/umd
[esm-url]: https://github.com/stdlib-js/random-strided/tree/esm
[branches-url]: https://github.com/stdlib-js/random-strided/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-strided/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/strided/arcsine]: https://github.com/stdlib-js/random-strided-arcsine

[@stdlib/random/strided/beta]: https://github.com/stdlib-js/random-strided-beta

[@stdlib/random/strided/betaprime]: https://github.com/stdlib-js/random-strided-betaprime

[@stdlib/random/strided/cosine]: https://github.com/stdlib-js/random-strided-cosine

[@stdlib/random/strided/discrete-uniform]: https://github.com/stdlib-js/random-strided-discrete-uniform

[@stdlib/random/strided/exponential]: https://github.com/stdlib-js/random-strided-exponential

[@stdlib/random/strided/gamma]: https://github.com/stdlib-js/random-strided-gamma

[@stdlib/random/strided/invgamma]: https://github.com/stdlib-js/random-strided-invgamma

[@stdlib/random/strided/lognormal]: https://github.com/stdlib-js/random-strided-lognormal

[@stdlib/random/strided/minstd-shuffle]: https://github.com/stdlib-js/random-strided-minstd-shuffle

[@stdlib/random/strided/minstd]: https://github.com/stdlib-js/random-strided-minstd

[@stdlib/random/strided/mt19937]: https://github.com/stdlib-js/random-strided-mt19937

[@stdlib/random/strided/normal]: https://github.com/stdlib-js/random-strided-normal

[@stdlib/random/strided/randu]: https://github.com/stdlib-js/random-strided-randu

[@stdlib/random/strided/uniform]: https://github.com/stdlib-js/random-strided-uniform

<!-- </toc-links> -->

</section>

<!-- /.links -->

/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name arcsine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/arcsine}
*/
setReadOnly( ns, 'arcsine', require( '@stdlib/random-strided-arcsine' ) );

/**
* @name bernoulli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/bernoulli}
*/
setReadOnly( ns, 'bernoulli', require( '@stdlib/random-strided-bernoulli' ) );

/**
* @name beta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/beta}
*/
setReadOnly( ns, 'beta', require( '@stdlib/random-strided-beta' ) );

/**
* @name betaprime
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/betaprime}
*/
setReadOnly( ns, 'betaprime', require( '@stdlib/random-strided-betaprime' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/chi}
*/
setReadOnly( ns, 'chi', require( '@stdlib/random-strided-chi' ) );

/**
* @name chisquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/chisquare}
*/
setReadOnly( ns, 'chisquare', require( '@stdlib/random-strided-chisquare' ) );

/**
* @name cosine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/cosine}
*/
setReadOnly( ns, 'cosine', require( '@stdlib/random-strided-cosine' ) );

/**
* @name discreteUniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/discrete-uniform}
*/
setReadOnly( ns, 'discreteUniform', require( '@stdlib/random-strided-discrete-uniform' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/exponential}
*/
setReadOnly( ns, 'exponential', require( '@stdlib/random-strided-exponential' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/gamma}
*/
setReadOnly( ns, 'gamma', require( '@stdlib/random-strided-gamma' ) );

/**
* @name geometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/geometric}
*/
setReadOnly( ns, 'geometric', require( '@stdlib/random-strided-geometric' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/invgamma}
*/
setReadOnly( ns, 'invgamma', require( '@stdlib/random-strided-invgamma' ) );

/**
* @name lognormal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/lognormal}
*/
setReadOnly( ns, 'lognormal', require( '@stdlib/random-strided-lognormal' ) );

/**
* @name minstd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/minstd}
*/
setReadOnly( ns, 'minstd', require( '@stdlib/random-strided-minstd' ) );

/**
* @name minstdShuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/minstd-shuffle}
*/
setReadOnly( ns, 'minstdShuffle', require( '@stdlib/random-strided-minstd-shuffle' ) );

/**
* @name mt19937
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/mt19937}
*/
setReadOnly( ns, 'mt19937', require( '@stdlib/random-strided-mt19937' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/normal}
*/
setReadOnly( ns, 'normal', require( '@stdlib/random-strided-normal' ) );

/**
* @name poisson
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/poisson}
*/
setReadOnly( ns, 'poisson', require( '@stdlib/random-strided-poisson' ) );

/**
* @name randu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/randu}
*/
setReadOnly( ns, 'randu', require( '@stdlib/random-strided-randu' ) );

/**
* @name rayleigh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/rayleigh}
*/
setReadOnly( ns, 'rayleigh', require( '@stdlib/random-strided-rayleigh' ) );

/**
* @name t
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/t}
*/
setReadOnly( ns, 't', require( '@stdlib/random-strided-t' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/uniform}
*/
setReadOnly( ns, 'uniform', require( '@stdlib/random-strided-uniform' ) );

/**
* @name weibull
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/strided/weibull}
*/
setReadOnly( ns, 'weibull', require( '@stdlib/random-strided-weibull' ) );


// EXPORTS //

module.exports = ns;

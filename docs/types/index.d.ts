/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arcsine = require( '@stdlib/random-strided-arcsine' );
import bernoulli = require( '@stdlib/random-strided-bernoulli' );
import beta = require( '@stdlib/random-strided-beta' );
import betaprime = require( '@stdlib/random-strided-betaprime' );
import chi = require( '@stdlib/random-strided-chi' );
import chisquare = require( '@stdlib/random-strided-chisquare' );
import cosine = require( '@stdlib/random-strided-cosine' );
import discreteUniform = require( '@stdlib/random-strided-discrete-uniform' );
import exponential = require( '@stdlib/random-strided-exponential' );
import gamma = require( '@stdlib/random-strided-gamma' );
import geometric = require( '@stdlib/random-strided-geometric' );
import invgamma = require( '@stdlib/random-strided-invgamma' );
import lognormal = require( '@stdlib/random-strided-lognormal' );
import minstd = require( '@stdlib/random-strided-minstd' );
import minstdShuffle = require( '@stdlib/random-strided-minstd-shuffle' );
import mt19937 = require( '@stdlib/random-strided-mt19937' );
import normal = require( '@stdlib/random-strided-normal' );
import poisson = require( '@stdlib/random-strided-poisson' );
import randu = require( '@stdlib/random-strided-randu' );
import rayleigh = require( '@stdlib/random-strided-rayleigh' );
import t = require( '@stdlib/random-strided-t' );
import uniform = require( '@stdlib/random-strided-uniform' );
import weibull = require( '@stdlib/random-strided-weibull' );

/**
* Interface describing the `strided` namespace.
*/
interface Namespace {
	/**
	* Fills a strided array with pseudorandom numbers drawn from an arcsine distribution.
	*
	* @param N - number of indexed elements
	* @param a - minimum support
	* @param sa - `a` stride length
	* @param b - maximum support
	* @param sb - `b` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws minimum support must be less than maximum support
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.arcsine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.arcsine.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	arcsine: typeof arcsine;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a Bernoulli distribution.
	*
	* @param N - number of indexed elements
	* @param p - success probability
	* @param sp - `p` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.bernoulli( out.length, [ 0.5 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.bernoulli.ndarray( out.length, [ 0.5 ], 0, 0, out, 1, 0 );
	*/
	bernoulli: typeof bernoulli;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a beta distribution.
	*
	* @param N - number of indexed elements
	* @param alpha - first shape parameter
	* @param sa - `alpha` stride length
	* @param beta - second shape parameter
	* @param sb - `beta` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.beta( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.beta.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	beta: typeof beta;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a beta prime distribution.
	*
	* @param N - number of indexed elements
	* @param alpha - first shape parameter
	* @param sa - `alpha` stride length
	* @param beta - second shape parameter
	* @param sb - `beta` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.betaprime( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.betaprime.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	betaprime: typeof betaprime;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a chi distribution.
	*
	* @param N - number of indexed elements
	* @param k - degrees of freedom
	* @param sk - `k` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.chi( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.chi.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	chi: typeof chi;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a chi-square distribution.
	*
	* @param N - number of indexed elements
	* @param k - degrees of freedom
	* @param sk - `k` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.chisquare( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.chisquare.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	chisquare: typeof chisquare;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a raised cosine distribution.
	*
	* @param N - number of indexed elements
	* @param mu - mean
	* @param sm - `mu` stride length
	* @param s - scale parameter
	* @param ss - `s` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.cosine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.cosine.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	cosine: typeof cosine;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a discrete uniform distribution.
	*
	* @param N - number of indexed elements
	* @param a - minimum support
	* @param sa - `a` stride length
	* @param b - maximum support
	* @param sb - `b` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws minimum support must be less than or equal to maximum support
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.discreteUniform.ndarray( out.length, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 1, 0 );
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Fills a strided array with pseudorandom numbers drawn from an exponential distribution.
	*
	* @param N - number of indexed elements
	* @param lambda - rate parameter
	* @param sl - `lambda` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.exponential( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.exponential.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	exponential: typeof exponential;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a gamma distribution.
	*
	* @param N - number of indexed elements
	* @param alpha - shape parameter
	* @param sa - `alpha` stride length
	* @param beta - rate parameter
	* @param sb - `beta` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.gamma( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.gamma.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	gamma: typeof gamma;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a geometric distribution.
	*
	* @param N - number of indexed elements
	* @param p - success probability
	* @param sp - `p` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.geometric( out.length, [ 0.01 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.geometric.ndarray( out.length, [ 0.01 ], 0, 0, out, 1, 0 );
	*/
	geometric: typeof geometric;

	/**
	* Fills a strided array with pseudorandom numbers drawn from an inverse gamma distribution.
	*
	* @param N - number of indexed elements
	* @param alpha - shape parameter
	* @param sa - `alpha` stride length
	* @param beta - scale parameter
	* @param sb - `beta` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.invgamma( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.invgamma.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	invgamma: typeof invgamma;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a lognormal distribution.
	*
	* @param N - number of indexed elements
	* @param mu - location parameter
	* @param sm - `mu` stride length
	* @param sigma - scale parameter
	* @param ss - `sigma` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.lognormal( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.lognormal.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	lognormal: typeof lognormal;

	/**
	* Fills a strided array with pseudorandom integers on the interval `[1, 2147483646]`.
	*
	* @param N - number of indexed elements
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstd( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstd.ndarray( out.length, out, 1, 0 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstd.normalized( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstd.normalized.ndarray( out.length, out, 1, 0 );
	*/
	minstd: typeof minstd;

	/**
	* Fills a strided array with pseudorandom integers on the interval `[1, 2147483646]`.
	*
	* @param N - number of indexed elements
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstdShuffle( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstdShuffle.ndarray( out.length, out, 1, 0 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstdShuffle.normalized( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.minstdShuffle.normalized.ndarray( out.length, out, 1, 0 );
	*/
	minstdShuffle: typeof minstdShuffle;

	/**
	* Fills a strided array with pseudorandom integers on the interval `[0, 4294967295]`.
	*
	* @param N - number of indexed elements
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.mt19937( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.mt19937.ndarray( out.length, out, 1, 0 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.mt19937.normalized( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.mt19937.normalized.ndarray( out.length, out, 1, 0 );
	*/
	mt19937: typeof mt19937;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a normal distribution.
	*
	* @param N - number of indexed elements
	* @param mu - mean
	* @param sm - `mu` stride length
	* @param sigma - standard deviation
	* @param ss - `sigma` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.normal( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.normal.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	normal: typeof normal;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a Poisson distribution.
	*
	* @param N - number of indexed elements
	* @param lambda - mean parameter
	* @param sl - `lambda` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.poisson( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.poisson.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	poisson: typeof poisson;

	/**
	* Fills a strided array with uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param N - number of indexed elements
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.randu( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.randu.ndarray( out.length, out, 1, 0 );
	*/
	randu: typeof randu;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a Rayleigh distribution.
	*
	* @param N - number of indexed elements
	* @param sigma - scale parameter
	* @param ss - `sigma` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.rayleigh( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.rayleigh.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	rayleigh: typeof rayleigh;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a Student's t distribution.
	*
	* @param N - number of indexed elements
	* @param v - degrees of freedom
	* @param sv - `v` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill ns.the array with pseudorandom numbers:
	* ns.t( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill ns.the array with pseudorandom numbers:
	* ns.t.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	t: typeof t;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a continuous uniform distribution.
	*
	* @param N - number of indexed elements
	* @param a - minimum support
	* @param sa - `a` stride length
	* @param b - maximum support
	* @param sb - `b` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws minimum support must be less than maximum support
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.uniform( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.uniform.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	uniform: typeof uniform;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a Weibull distribution.
	*
	* @param N - number of indexed elements
	* @param k - scale parameter
	* @param sk - `k` stride length
	* @param lambda -  shape parameter
	* @param sl - `lambda` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.weibull( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.weibull.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	weibull: typeof weibull;
}

/**
* Pseudorandom number generator strided array functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

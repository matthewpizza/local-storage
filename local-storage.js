( function ( root, factory ) {

	if ( typeof define === 'function' && define.amd ) {
		define( factory );
	} else if ( typeof exports === 'object' ) {
		module.exports = factory();
	} else {
		root.LocalStorage = factory();
	}

}( this, function () {

	/**
	 * Does the current browser support this method?
	 *
	 * @return {Boolean} Probably.
	 */
	function isSupported( method ) {

		try {
			return method in window && null !== window[ method ];
		} catch ( error ) {
			return false;
		}

	}

	var LocalStorage = {},
		supported = isSupported( 'localStorage' ) && isSupported( 'JSON' );

	LocalStorage.supported = supported;

	/**
	 * Get Item
	 *
	 * @param {String} key
	 * @return {Object|False} Parsed value on success, false on failure.
	 */
	LocalStorage.get = function ( key ) {

		if ( ! supported ) {
			return;
		}

		return this.parse( localStorage.getItem( key ) );

	}

	/**
	 * Set Item
	 *
	 * @param {String} key
	 * @param {Object|Array|String|Boolean} value
	 */
	LocalStorage.set = function ( key, value ) {

		if ( ! supported ) {
			return;
		}

		value = JSON.stringify( value );
		localStorage.setItem( key, value );

	}

	/**
	 * Remove Item
	 *
	 * @param {String} key
	 */
	LocalStorage.remove = function ( key ) {

		if ( ! supported ) {
			return;
		}

		localStorage.removeItem( key );

	}

	/**
	 * Parse JSON string to object.
	 *
	 * @param {String} value JavaScript object passed through `JSON.stringify()`.
	 * @return {Object|False} Parsed object on success, false on failure.
	 */
	LocalStorage.parse = function ( value ) {

		if ( ! supported ) {
			return;
		}

		value = value || false;

		if ( ! value ) {
			return;
		}

		try {
			return JSON.parse( value );
		} catch ( error ) {
			return;
		}

	}

	return LocalStorage;

} ) );
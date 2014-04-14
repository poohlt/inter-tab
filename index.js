(function() {

	/**
	 * Constructor for the inter-tab manager
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Manager(opts) {
		/*
		 * TODO:
		 * See if tabs associated with this domain are also using inter-tab
		 * Add self to tab array
		 * ???
		 * PROFIT!!1
		 */
	}


	/**
	 * Broadcast message to all managed tabs
	 *
	 */

	Manager.broadcast = function (key, value) {

	}


	/**
	 * Send message to a specific tab
	 *
	 */

	Manager.send = function (id, key, value) {

	}


	/**
	 * Associate data with a specific tab
	 *
	 */

	Manager.set = function (id, key, value) {

	}


	/**
	 * Retrieve data for a specific tab
	 *
	 */

	Manager.get = function (id, key) {

	}


	// Expose the inter-tab manager

	if (typeof module === 'object' && module.exports) {
    module.exports = Manager;
  } else {
    this.it = Manager;
  }

}).call(this);
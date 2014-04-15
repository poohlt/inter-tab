/**
 * Constructor for the inter-tab manager
 *
 * @param {Object} options
 * @api public
 */

function Manager(opts) {
	this.id = Math.random();

	// Listen to event when tab is closed or storage changes
	window.addEventListener('storage', this, false);
	window.addEventListener('unload', this, false);
}

Manager.prototype.destroy = function () {
    window.removeEventListener( 'storage', this, false );
    window.removeEventListener( 'unload', this, false );
};

/**
 * Broadcast message to all managed tabs
 *
 */

Manager.prototype.broadcast = function (key, value) {
	var data = {
		key: key,
		value: value
	};

    try {
        localStorage.setItem( 'broadcast', JSON.stringify(data));
    } catch (error) {}
};

Manager.prototype.handleEvent = function (event) {
    if (event.type === 'unload') {
        this.destroy();
    } else if (event.key === 'broadcast') {
        try {
            debugger;
        } catch ( error ) {}
    }
};

/**
 * Send message to a specific tab
 *
 */

Manager.prototype.send = function (id, key, value) {

};


/**
 * Associate data with a specific tab
 *
 */

Manager.prototype.set = function (id, key, value) {

};


/**
 * Retrieve data for a specific tab
 *
 */

Manager.prototype.get = function (id, key) {

};


// Expose the inter-tab manager

// if (typeof module === 'object' && module.exports) {
//     module.exports = Manager;
// } else {
//     this.it = Manager;
// }
/**
 * Night mode store module.
 *
 * @type {Object}
 */
const nightMode = {
	namespaced: true,
	state: () => ({
		activated: {
			value: false,
			_persistent: true,
		},
	}),
	getters: {
		isActive(state) {
			return state.activated.value;
		},
	},
	mutations: {
		setNightMode(state, status) {
			// eslint-disable-next-line no-param-reassign
			state.activated.value = status;
		},
	},
};

/**
 * @module nightMode
 */
export default nightMode;

interface action {
	type: string;
	payload: {
		window: number;
	};
}

const MenuReducer = (state = 1, action: action) => {
	if (action.type == 'Menu') {
		switch (action.payload.window) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 3:
				return 3;
			default:
				return state;
		}
	}
	else {
		return state
	}
};

export default MenuReducer;

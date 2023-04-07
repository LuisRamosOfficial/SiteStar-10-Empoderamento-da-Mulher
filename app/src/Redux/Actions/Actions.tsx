export const MenuAction = (menu: number) => {
	return {
		type: 'Menu',
		payload: {
			window: menu,
		},
	};
};

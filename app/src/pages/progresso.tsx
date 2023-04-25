import React, { useEffect, useRef, useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { MenuAction } from '@/Redux/Actions/Actions';

const progresso = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(MenuAction(3));
	}, []);
	return (<div>progresso</div>);
};

export default progresso;

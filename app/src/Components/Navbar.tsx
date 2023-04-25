import React from 'react';
import styles from '@/styles/Navbar/Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { MenuAction } from '@/Redux/Actions/Actions';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();
	const menuInfo = useSelector((state: any) => state.menu);
	const dispatch = useDispatch();

	return (
		<div className={styles.Navbox}>
			<style jsx>{`
				div.slider1 {
					transform: translateX(0);
					border-radius: 50px 0px 0px 50px;
				}
				div.slider2 {
					border-radius: 0px;
					transform: translateX(100%);
				}
				div.slider3 {
					transform: translateX(200%);
					border-radius: 0px 50px 50px 0px;
				}
			`}</style>
			<nav>
				<div className={`${styles.slider} slider${menuInfo}`}></div>
				<div
					onClick={() => {
						dispatch(MenuAction(1));
						router.push('/');
					}}
					className={
						menuInfo == 1 ? `${styles.button} ${styles.active}` : styles.button
					}
				>
					<p>Página Principal</p>
				</div>
				<div
					onClick={() => {
						dispatch(MenuAction(2));
						router.push('/destaques');
					}}
					className={
						menuInfo == 2 ? `${styles.button} ${styles.active}` : styles.button
					}
				>
					<p>Mulheres de Destaque</p>
				</div>
				<div
					onClick={() => {dispatch(MenuAction(3)); router.push('/progresso');}}
					className={
						menuInfo == 3 ? `${styles.button} ${styles.active}` : styles.button
					}
				>
					<p>Progresso Feminino</p>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

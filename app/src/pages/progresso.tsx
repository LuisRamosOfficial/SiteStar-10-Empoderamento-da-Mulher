import React, { useEffect, useRef, useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { MenuAction } from '../Redux/Actions/Actions';
import styles from '../styles/Progresso/styles.module.css';
import Image from 'next/image';
import noticias from '../Assets/Noticias.json';
import Head from 'next/head';


interface Boxes {
	nome: string,
	imagem: string,
	link: string
}

const Boxes: FC<Boxes> = ({nome, imagem, link}) => {
	return (
		<>

			<div className={styles.box}>
				<div className={styles.image}>
					<div className={styles.imagecontainer}>
						<Image
							src={imagem}
							fill
							className={styles.img}
							alt={''}
						/>
					</div>
				</div>
				<div className={styles.text}>
					<h2>{nome}</h2>
					<button
						onClick={() => {
							if (window) {
								window.open(link, '_blank')?.focus();
							}
						}}
					>
						Veja Mais
					</button>
				</div>
			</div>
		</>
	);
};
const progresso = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(MenuAction(3));
	}, []);
	return (
		<>
			<Head>
				<title>Progresso em Destaque</title>
				<meta
					name="description"
					content="Site dedicado ao combate dos direitos da mulher"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>PROGRESSO FEMININO NO MUNDO</h1>
				<h5>
					Essa seção é de extrema importância para mostrar que apesar dos muitos
					desafios ainda enfrentados pelas mulheres, há também razões para
					celebrar os avanços que vêm sendo feitos. Ao utilizar fontes
					confiáveis, garantimos aos leitores que podem confiar nas informações
					divulgadas, e assim, se torna um canal de referência na busca por
					notícias precisas e verdadeiras sobre o empoderamento feminino.
				</h5>
				<div className={styles.list}>
					{noticias.map((item) => (
						<Boxes key={item.Titulo} nome={item.Titulo} link={item.Link} imagem={item.Imagem} />
					))}
				</div>
			</main>
		</>
	);
};


export default progresso;

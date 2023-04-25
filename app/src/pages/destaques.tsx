import { useEffect, useRef, useState, FC } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Destaques/styles.module.css';
import Personalidades from '../Assets/Personalidades.json';
import cardstyles from '@/styles/Destaques/cardstyles.module.css';
import { useDispatch } from 'react-redux';
import { MenuAction } from '@/Redux/Actions/Actions';

const destaques = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(MenuAction(2));
	
	  
	}, [])
	
	
	const [showCard, setShowCard] = useState<boolean>(false)
	const [dataCard, setDataCard] = useState<object>({})
	return (
		<>
			<Head>
				<title>Mulheres de Destaque</title>
				<meta
					name="description"
					content="Site dedicado ao combate dos direitos da mulher"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{showCard &&
				<CardShower show={setShowCard} data={dataCard} />
				}
				<div className={styles.title}>
					<h1>MULHERES DE DESTAQUE</h1>
					<h2>
						A presença feminina no mercado de trabalho tem se tornado cada vez
						mais forte e significativa nos últimos anos. Apesar de ainda haver
						desafios a serem enfrentados, cada vez mais mulheres estão se
						destacando em diversas áreas e conquistando posições de liderança.
						Nesta página, apresentamos uma lista de mulheres que vêm fazendo a
						diferença em suas áreas de atuação e se destacando pelo seu talento,
						comprometimento e liderança.
					</h2>
				</div>
				<div className={styles.list}>
					{Personalidades.map((item) => (
						<Card shower={setShowCard} setData={setDataCard} name={item.Nome} img={item.Img} data={{bio: item.Biografia, cargo: item.Cargo, data: item.Data, feitos: item.Feitos}} />
					))}
				</div>
			</main>
		</>
	);
};

interface Card {
	name: string;
	img: string;
	data: any;
	shower: Function,
	setData: Function,
}
interface CardShower {
	data: any,
	show: Function,
}

const CardShower: FC<CardShower> = ({data, show}) => {

	return (
		<div
			onClick={() => {
				show(false);
				console.log(data);
			}}
			className={styles.CardShower}
		>
			<main
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={styles.box}
			>
				<div className={styles.imagecontainer}>
					<Image
						className={styles.image}
						alt=""
						fill
						src={`/api/imagefetcher?url=${encodeURIComponent(data.img)}`}
					/>
				</div>
				<div className={styles.info}>
					<h1>{data.name}</h1>
					<h2>{data.cargo}</h2>
					<h2>{data.data}</h2>
					<p>{data.bio}</p>
					<p>{data.feitos}</p>
				</div>
			</main>
		</div>
	);
}

const Card: FC<Card> = ({ name, img, data, shower, setData }) => {
	return (
		<button onClick={() => {
			shower(true);
			setData({name: name, img: img, bio: data.bio, data: data.data, feitos: data.feitos, cargo: data.cargo})
		}} className={cardstyles.card}>
				<div className={styles.imagecontainer}>
					<Image
					className={styles.image}
						alt=""
						width={250}
						height={250}
						src={`/api/imagefetcher?url=${encodeURIComponent(img)}`}
					/>
				</div>
			<p>{name}</p>
		</button>
	);
};



export default destaques;

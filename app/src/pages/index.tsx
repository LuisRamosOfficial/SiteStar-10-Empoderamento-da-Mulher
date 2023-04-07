import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home/Home.module.css';
import Img1 from '../Assets/Home/img1.png'

export default function Home() {
	return (
		<>
			<Head>
				<title>Empoderamento da Mulher</title>
				<meta
					name="description"
					content="Site dedicado ao combate dos direitos da mulher"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
        <FirstSection />
      </main>
		</>
	);
}
const FirstSection = ({}) => {
      return (
				<div className={styles.firstsection}>
					<div className={styles.textbox}>
						<h1>Bem-vindo(a)</h1>
						<h3>ao nosso site dedicado ao </h3>
						<h2>empoderamento das mulheres</h2>
					</div>
					<div className={styles.illustration}>
						<Image alt="Illustration" src={Img1} fill className={styles.image} />
					</div>
				</div>
			);
    }
  

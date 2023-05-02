import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/work.module.scss';

const Work = ({workThumbnailData}) => {
	const {data} = workThumbnailData;

	return (
		<section className={styles.section}>
			<div className={styles.flexBox}>
			{data.map((each,index) => 
				<Link 
					key={each.project}
					className={styles.project}
					href={each.url}>
					<Image 
							src={each.thumbnail} 
							width={270}
							height={427}
							alt={each.project} 
							priority={index==0}
						/>
					<h1>{each.project}</h1>
				</Link>
			)}
			</div>
		</section>
	);
}

export default Work;

export const getStaticProps = async() => {
	const workThumbnailData = await fetch(
		`http://localhost:3000/api/work`
	).then((res) => res.json())

	return{
		props:{workThumbnailData},
		revalidate:60*60
	}
}
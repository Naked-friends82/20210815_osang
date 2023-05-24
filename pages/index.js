import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import initLayout from '../hooks/initLayout';
import styles from '../styles/work.module.scss';


const Work = ({workThumbnailData, layoutData}) => {
	if(!workThumbnailData || !layoutData) return null;
	initLayout(layoutData);
	
	const {data} = workThumbnailData;

	return (
		<>
		<NextSeo
				title='Sangmin Oh'
				description='Art and design studio established in 2021 by Sangmin Oh based in Netherlands and Korea.'
        canonical={`${process.env.NEXT_PUBLIC_API_URL}`}
				
      />
		<section className={styles.section}>
			<div className={styles.flexBox}>
			{data.map((each) => 
				<Link 
					key={each.project}
					className={styles.project}
					href={each.url}
					aria-label={each.project + ' link'}
					>
					<div className={styles.imgBox}>
						<Image 
								src={each.thumbnail} 
								alt={each.project}
								sizes='(max-width: 599px) 16w, 300px'
								fill
								priority
							/>
					</div>
					<h1>{each.project}</h1>
				</Link>
			)}
			</div>
		</section>
		</>
	);
}

export default Work;

export const getStaticProps = async() => {
	const workThumbnailData = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/work`
	).then((res) => res.json());

  const layoutData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/layout`
    ).then((res) => res.json());
	
// const workThumbnailData = (await import('../public/data/workThumbnail.json')).default;
	// const layoutData = (await import(`../public/data/layout.json`)).default;

	return{
		props:{workThumbnailData, layoutData},
		// revalidate: 60*60*24*7,
	}
}
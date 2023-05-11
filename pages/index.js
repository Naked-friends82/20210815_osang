import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import styles from '../styles/work.module.scss';
import useHeader from '../hooks/useHeader';
import useFooter from '../hooks/useFooter';
import { useEffect } from 'react';


const Work = ({workThumbnailData, headerData, footerData}) => {
	const {data} = workThumbnailData;

	const {	initHeaderData	} = useHeader();
	const {	initFooterData	} = useFooter();

	useEffect(() => {
		initHeaderData(headerData.data);
		initFooterData(footerData.data);
	},[initHeaderData, headerData,initFooterData,footerData])

	return (
		<>
		<NextSeo
        title='Studio'
        canonical={`${process.env.NEXT_PUBLIC_API_URL}`}
				
      />
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
		</>
	);
}

export default Work;

export const getStaticProps = async() => {
	const workThumbnailData = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/work`
	).then((res) => res.json());

  const headerData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header`
    ).then((res) => res.json());
	
	const footerData = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/footer`
		).then((res) => res.json());
// const workThumbnailData = (await import('../public/data/workThumbnail.json')).default;
// const headerData = (await import(`../public/data/header.json`)).default;
// const footerData = (await import(`../public/data/footer.json`)).default;
	return{
		props:{workThumbnailData, headerData, footerData},
		revalidate:60*60
	}
}
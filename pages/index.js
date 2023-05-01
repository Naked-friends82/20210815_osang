import Link from 'next/link';
import Image from 'next/image';

const Work = ({workThumbnailData}) => {
	const {data} = workThumbnailData;

	return (
		<section className="section_work">
			<div className="section_work__projectReck">
			{data.map((each) => 
				<Link 
					className="project_index link" 
					href={each.url}>
					<Image 
							className="index_img" 
							src={each.thumbnail} 
							width={200}
							height={300}
							alt={each.project} 
							priority
						/>
					<h1 className="index_header">{each.project}</h1>
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
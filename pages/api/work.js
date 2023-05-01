export default async function handler(req,res) {
  const workThumbnailData = (await import('../../public/data/workThumbnail.json')).default;

  res.status(200).json(workThumbnailData);
}

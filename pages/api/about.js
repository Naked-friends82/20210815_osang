export default async function handler(req,res) {
  const aboutData = (await import('../../public/data/about.json')).default;

  res.status(200).json(aboutData);
}

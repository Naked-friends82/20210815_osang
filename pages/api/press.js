export default async function handler(req,res) {
  const pressData = (await import('../../public/data/press.json')).default;

  res.status(200).json(pressData);
}

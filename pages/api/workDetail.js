export default async function handler(req,res) {
  const {path} = req.query;
  const workData = (await import(`../../public/data/work/${path}.json`)).default;

  res.status(200).json(workData);
}

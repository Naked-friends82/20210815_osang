export default async function handler(req,res){
  const layoutData = (await import(`../../public/data/layout.json`)).default;

  res.status(200).json(layoutData);
}
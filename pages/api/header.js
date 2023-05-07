export default async function handler(req,res){
  const headerData = (await import(`../../public/data/header.json`)).default;

  res.status(200).json(headerData);
}
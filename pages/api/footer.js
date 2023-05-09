export default async function handler(req,res){
  const footerData = (await import(`../../public/data/footer.json`)).default;

  res.status(200).json(footerData);
}
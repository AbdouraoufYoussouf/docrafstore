import connectMongo from "../../../lib/connectMongo";
import Product from "../../../models/Products";

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addProduct(req, res) {
    try {
        
        console.log("Connexting To mongo")
        await connectMongo();
        console.log("Connexted To mongo")
    
        const product = await Product.create(req.body)
        res.json({ product })
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
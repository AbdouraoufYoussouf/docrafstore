import connectMongo from "../../../lib/connectMongo";
import { products } from "../../../lib/Data";
import Product from "../../../models/Products";

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function seed(req, res) {
    try {
        
        console.log("Connexting To mongo")
        await connectMongo();
        console.log("Connexted To mongo")
    
        const product = await Product.create(products)
        res.json( product[0] )
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
import connectMongo from "../../../lib/connectMongo";
import Product from "../../../models/Products";

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function getWithSlug(req, res) {
    const { slug } = req.query
    if (slug) {
        try {
            res.json(
                await Product.find({'slug':slug}).exec()
            )
        } catch (error) {
            console.log(error)
            res.json({ error })
        }

    }

}
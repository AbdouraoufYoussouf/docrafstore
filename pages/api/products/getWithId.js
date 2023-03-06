import connectMongo from "../../../lib/connectMongo";
import Product from "../../../models/Products";

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function getWithId(req, res) {
   await connectMongo()
    const { ids } = req.query
    if (ids) {
        const idsArray = ids.split(',')
        try {
            res.json(
                await Product.find({
                    '_id': { $in: idsArray }
                }).exec()
            )
        } catch (error) {
            console.log(error)
            res.json({ error })
        }

    }

}
import connectMongo from "../../../lib/connectMongo";
import Product from "../../../models/Products";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function deleteAll(req, res) {
  try {
    await connectMongo();
    console.log("Connexted To mongo");

    Product.deleteMany({}).then(() =>
      console.log("Tous les produits ont été supprimés de la base de données")
    );
    res.json("Tous les produits ont été supprimés de la base de données");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

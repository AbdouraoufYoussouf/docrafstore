import cors from 'micro-cors';

// Créer une instance de micro-cors avec les options CORS souhaitées
const corsMiddleware = cors({
  origin: '*', // Permettre les requêtes de n'importe quel origine
  methods: ['GET', 'POST'], // Autoriser seulement les méthodes GET et POST
  allowedHeaders: ['Content-Type', 'Authorization'], // Autoriser seulement certains headers
  preflightContinue: false, // Ne pas continuer sur les requêtes OPTIONS
  optionsSuccessStatus: 204 // Retourner un status 204 pour les requêtes OPTIONS
});

// Exporter la fonction middleware
export default corsMiddleware;

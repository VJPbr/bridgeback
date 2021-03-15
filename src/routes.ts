import express from 'express';
import PrimeController from './controllers/PrimeController';

const routes = express.Router();
const PrimeControllers = new PrimeController();

routes.get('/calculate', PrimeControllers.calculate);  // receber dados e voltar calculo
routes.get('/history', PrimeControllers.index);       // indexar histórico
routes.delete('/history', PrimeControllers.delete);   // deletar histórico

export default routes;
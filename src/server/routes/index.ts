import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.post('/teste', (req, res) => {
  console.log(req.body);
  return res.status(StatusCodes.BAD_GATEWAY).json(req.body);
});
 
export { router }; 
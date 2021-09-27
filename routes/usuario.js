import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/agregar',usuarioController.agregar);
router.post('/login',usuarioController.login);

router.get('/query',usuarioController.query);
router.post('/actualizar',usuarioController.update);
/*router.get('/lista',auth.verifyAdministrador,glosarioController.lista);

router.delete('/remove',articuloController.remove);
router.put('/activate',articuloController.activate);
router.put('/deactivate',articuloController.deactivate);*/


export default router;
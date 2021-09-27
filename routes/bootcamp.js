import routerx from 'express-promise-router';
import bootcampController from '../controllers/BootcampController';

const router=routerx();

router.post('/agregar',bootcampController.add);
router.get('/entidad',bootcampController.query);
router.get('/lista',bootcampController.list);
/*router.put('/actualizar',glosarioController.actualizar);
router.delete('/remove',articuloController.remove);
router.put('/activate',articuloController.activate);
router.put('/deactivate',articuloController.deactivate);*/


export default router;
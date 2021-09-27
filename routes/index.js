import routerx from 'express-promise-router';
import bootcampRouter from './bootcamp';
import usuarioRouter from './usuario';

const router=routerx();

router.use('/bootcamp',bootcampRouter);
router.use('/usuario',usuarioRouter);

export default router;
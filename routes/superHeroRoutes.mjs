/**
 * Rutas montadas en app como `app.use('/api', superHeroRoutes)`.
 * Base Postman (puerto por defecto): http://localhost:3000/api
 *
 * GET    /                           — listar todos
 * GET    /buscar?planetaOrigen=...  — por planeta (default planetaOrigen=Tierra si omitís el query)
 * GET    /:nombre                   — un héroe por nombre de superhéroe (ej. /Lumina)
 * GET    /mayores-30                — edad > 30
 * GET    /id/:id                    — por _id de MongoDB (ej. /id/507f1f77bcf86cd799439011)
 * GET    /buscar-atributo/:atributo/:valor — filtro dinámico (ej. /buscar-atributo/planetaOrigen/Tierra)
 * POST   /                           — crear (body JSON según modelo SuperHero)
 * PUT    /:nombre                   — actualizar por nombre (body JSON parcial)
 * DELETE /:nombre                   — eliminar por nombre
 */
import express from 'express';
import * as heroController from '#SRC/Controllers/superheroController.mjs';

const router = express.Router();

router.get('/mayores-30', heroController.obtenerMayoresDe30);
router.get('/id/:id', heroController.obtenerPorId);
router.get(
    '/buscar-atributo/:atributo/:valor',
    heroController.buscarPorAtributo,
);

router.get('/buscar', heroController.buscarPorPlaneta);
router.get('/', heroController.obtenerTodos);
router.get('/:nombre', heroController.obtenerPorNombre);
router.post('/', heroController.insertar);
router.put('/:nombre', heroController.actualizar);
router.delete('/:nombre', heroController.eliminar);

export default router;

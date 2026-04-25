export function renderizarSuperheroe (superheroe) {
return {
Nombre: superheroe.nombreSuperHeroe,
"Nombre Real": superheroe.nombreReal,
Edad: superheroe.edad,
"Planeta de Origen": superheroe.planetaOrigen,
Debilidad: superheroe.debilidad,
Poderes: superheroe.poderes,
Aliados: superheroe.aliados,
Enemigos: superheroe.enemigos
};
}
export function renderizarListaSuperheroes (superheroes) {
return superheroes.map(superheroe => renderizarSuperheroe (superheroe));
}

/** Respuesta JSON homogénea tras actualizar o eliminar (capa vista). */
export function renderizarResultadoOperacion(mensaje, resultado) {
    const resumen = { acknowledged: resultado.acknowledged };
    if (typeof resultado.matchedCount === 'number') {
        resumen.matchedCount = resultado.matchedCount;
    }
    if (typeof resultado.modifiedCount === 'number') {
        resumen.modifiedCount = resultado.modifiedCount;
    }
    if (typeof resultado.deletedCount === 'number') {
        resumen.deletedCount = resultado.deletedCount;
    }
    return { mensaje, resultado: resumen };
}
class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");
    }

    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    obtenerMayoresDe30() {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }

    buscarPorPlaneta(planeta) {
        throw new Error("Método 'buscarPorPlaneta()' no implementado");
    }

    obtenerPorNombre(nombre) {
        throw new Error("Método 'obtenerPorNombre()' no implementado");
    }

    crear(datos) {
        throw new Error("Método 'crear()' no implementado");
    }

    actualizarPorNombre(nombre, datos) {
        throw new Error("Método 'actualizarPorNombre()' no implementado");
    }

    eliminarPorNombre(nombre) {
        throw new Error("Método 'eliminarPorNombre()' no implementado");
    }
}

export default IRepository;

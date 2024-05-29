function normalizeString(str: string) {
  return str
    .normalize('NFD') // Descompone caracteres compuestos
    .replace(/[\u0300-\u036f]/g, '') // Elimina los signos diacríticos
    .toLowerCase() // Convierte a minúsculas
    .replace(/\s+/g, ' ') // Reemplaza múltiples espacios por un solo espacio
    .trim(); // Elimina espacios al principio y al final
}


export default normalizeString


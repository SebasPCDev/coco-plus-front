import React from 'react';

const ImportCSV: React.FC = () => {
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Lógica para manejar el archivo arrastrado
  };

  return (
    <div className="container mx-auto py-8 mb-4">
      <h2 className="text-lg font-semibold mb-2">Importar foto</h2>
      <p className="">
      También puede importar varios miembros a la vez utilizando un archivo csv. Solo asegúrese de tener columnas para el nombre, apellido y dirección de correo electrónico de cada miembro.
      </p>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="border-2 border-dashed border-gray-400 rounded-md p-6 text-center"
      >
        <p>Cargue un archivo o arrástrelo y suéltelo</p>
        <p className="text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  );
};

export default ImportCSV;

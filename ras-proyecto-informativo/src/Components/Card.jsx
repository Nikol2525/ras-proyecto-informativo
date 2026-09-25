export default function Card({ icono, titulo, descripcion, textoBoton, alHacerClic }) {
  return (
    <div className="card">
      <h2>{icono} {titulo}</h2>
      <p>{descripcion}</p>
      {textoBoton && (
        <button type="button" onClick={alHacerClic}>
          {textoBoton}
        </button>
      )}
    </div>
  )
}
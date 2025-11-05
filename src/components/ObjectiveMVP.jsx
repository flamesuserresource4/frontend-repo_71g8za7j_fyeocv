export default function ObjectiveMVP() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 ring-1 ring-inset ring-emerald-200/60">
        <h2 className="text-2xl font-bold text-gray-900">Obiettivo MVP</h2>
        <p className="mt-3 text-gray-800 text-lg">
          Validare la piattaforma come file manager gestionale modulare, dimostrando usabilità e valore aggiunto rispetto agli attuali ERP complessi.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-600">Focus</p>
            <p className="text-gray-900">File manager centralizzato</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-600">Metriche</p>
            <p className="text-gray-900">Tempo medio di reperimento documenti</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-600">Validazione</p>
            <p className="text-gray-900">Feedback early adopters</p>
          </div>
        </div>
      </div>
    </section>
  );
}

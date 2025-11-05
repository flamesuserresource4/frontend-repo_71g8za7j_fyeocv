import { Calendar, Bell, Clock, FileCheck2, FolderOpenDot } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-xl border bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 text-2xl font-semibold">{value}</p>
      </div>
      <div className={`rounded-lg p-2 text-white ${accent}`}>
        <Icon size={20} />
      </div>
    </div>
  </div>
);

const ActivityItem = ({ title, meta }) => (
  <div className="flex items-start gap-3 rounded-lg border p-3">
    <Clock className="mt-0.5 text-gray-400" size={18} />
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-gray-500">{meta}</p>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-gray-500">Panoramica attività, scadenze e documenti</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Calendar} label="Scadenze mese" value="6" accent="bg-blue-600" />
        <StatCard icon={Bell} label="Notifiche" value="12" accent="bg-indigo-600" />
        <StatCard icon={FileCheck2} label="Documenti validati" value="34" accent="bg-emerald-600" />
        <StatCard icon={FolderOpenDot} label="Progetti attivi" value="9" accent="bg-amber-600" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          <h3 className="text-sm font-medium text-gray-700">Attività recenti</h3>
          <ActivityItem title="Caricato DVR aggiornato" meta="5 min fa • Progetto SIC-23" />
          <ActivityItem title="Aggiunto contratto di Rossi" meta="1 ora fa • HR" />
          <ActivityItem title="Creato progetto Linea A" meta="Ieri • Produzione" />
        </div>
        <div className="rounded-xl border bg-white p-4">
          <h3 className="text-sm font-medium text-gray-700">Scadenze imminenti</h3>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center justify-between rounded-lg bg-amber-50 p-3 text-amber-800">
              <span className="text-sm">Visita medica – Bianchi</span>
              <span className="text-xs">in 3 giorni</span>
            </li>
            <li className="flex items-center justify-between rounded-lg bg-red-50 p-3 text-red-800">
              <span className="text-sm">Cert. ISO 9001</span>
              <span className="text-xs">scaduto</span>
            </li>
            <li className="flex items-center justify-between rounded-lg bg-blue-50 p-3 text-blue-800">
              <span className="text-sm">Formazione Antincendio</span>
              <span className="text-xs">in 2 settimane</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

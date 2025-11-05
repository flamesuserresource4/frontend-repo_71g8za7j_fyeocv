import { useState } from 'react';
import { UserPlus, User as UserIcon, Search } from 'lucide-react';

function EmployeeRow({ e }) {
  return (
    <tr className="border-b last:border-0">
      <td className="p-3 text-sm">{e.name}</td>
      <td className="p-3 text-sm text-gray-600">{e.role}</td>
      <td className="p-3 text-sm text-gray-600">{e.status}</td>
      <td className="p-3 text-right text-sm">
        <button className="rounded-md border px-2 py-1 text-xs hover:bg-gray-50">Dettagli</button>
      </td>
    </tr>
  );
}

export default function Employees() {
  const [q, setQ] = useState('');
  const employees = [
    { name: 'Mario Rossi', role: 'Operaio', status: 'Idoneo' },
    { name: 'Luca Bianchi', role: 'Manutentore', status: 'Visita tra 3gg' },
    { name: 'Giulia Verdi', role: 'Qualità', status: 'Formazione dovuta' },
  ];
  const filtered = employees.filter((e) => e.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Dipendenti</h2>
          <p className="text-sm text-gray-500">Anagrafiche base e idoneità</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white hover:bg-black">
          <UserPlus size={16} /> Nuovo
        </button>
      </div>

      <div className="mb-4">
        <div className="relative max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cerca dipendente..."
            className="w-full rounded-lg border bg-white py-2 pl-9 pr-3 text-sm outline-none ring-blue-500 focus:ring-2"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Nome</th>
              <th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Ruolo</th>
              <th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Stato</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((e) => (
              <EmployeeRow key={e.name} e={e} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
        <UserIcon size={16} />
        <span>{filtered.length} dipendenti</span>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Folder, File, Upload, Search, Tag, Download } from 'lucide-react';

function Toolbar({ onSearch }) {
  const [q, setQ] = useState('');
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder="Cerca documenti, tag..."
          className="w-full rounded-lg border bg-white py-2 pl-9 pr-3 text-sm outline-none ring-blue-500 focus:ring-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50">
          <Upload size={16} /> Carica
        </button>
        <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm text-white hover:bg-black">Nuova cartella</button>
      </div>
    </div>
  );
}

function DocCard({ name, type = 'file', size = '—', tags = [] }) {
  const Icon = type === 'folder' ? Folder : File;
  return (
    <div className="group rounded-lg border bg-white p-4 transition hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-100 p-2 text-gray-600">
            <Icon size={18} />
          </div>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500">{type === 'folder' ? 'Cartella' : size}</p>
          </div>
        </div>
        {type !== 'folder' && (
          <button className="rounded-md p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900" title="Scarica">
            <Download size={16} />
          </button>
        )}
      </div>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
              <Tag size={12} /> {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileManager() {
  const [search, setSearch] = useState('');
  const items = [
    { name: 'Progetti', type: 'folder' },
    { name: 'HR', type: 'folder' },
    { name: 'Certificazioni', type: 'folder' },
    { name: 'DVR_2025.pdf', type: 'file', size: '2.1 MB', tags: ['Sicurezza', 'Obbligatorio'] },
    { name: 'Organigramma.png', type: 'file', size: '340 KB', tags: ['HR'] },
    { name: 'Procedura_Qualita.docx', type: 'file', size: '820 KB', tags: ['ISO 9001'] },
  ];

  const filtered = items.filter((i) =>
    [i.name, ...(i.tags || [])].join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">File Manager</h2>
        <p className="text-sm text-gray-500">Archivio centrale con tag e ricerca</p>
      </div>

      <Toolbar onSearch={setSearch} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <DocCard key={i.name} {...i} />
        ))}
      </div>
    </section>
  );
}

import { Home, Folder, Users, Settings, Mail, FileText } from 'lucide-react';

function NavItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 ${
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold">II</div>
          <div>
            <h1 className="text-sm font-semibold leading-tight">InnovaIndustria</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Gestionale modulare</p>
          </div>
        </div>
        <nav className="hidden gap-2 md:flex">
          <NavItem icon={Home} label="Dashboard" active />
          <NavItem icon={Folder} label="File" />
          <NavItem icon={Users} label="Dipendenti" />
          <NavItem icon={Mail} label="InnovaMail" />
          <NavItem icon={FileText} label="Wiki" />
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-lg border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Accedi</button>
          <button className="hidden rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white hover:bg-black md:block">Crea Account</button>
        </div>
      </div>
    </header>
  );
}

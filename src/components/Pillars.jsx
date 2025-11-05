import { CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    title: 'File Manager-Centered',
    points: [
      'Percorsi dedicati per progetti, dipendenti, certificazioni',
      'Scadenze e tracciabilità integrate',
      'Sincronizzazione con Windows/Drive',
    ],
  },
  {
    title: 'Modularità e Flessibilità',
    points: [
      'Attivazione dei soli moduli richiesti',
      'Adattabilità a ogni settore industriale',
    ],
  },
  {
    title: 'Gestione HR Completa',
    points: [
      'Archivio digitale (buste paga, rimborsi, ore, idoneità)',
      'Integrazione con UNILAV (assunzioni, proroghe, distacchi)',
      'Visualizzazioni con timeline e grafici',
    ],
  },
  {
    title: 'InnovaMail',
    points: [
      'Client email integrato e collegato ai progetti',
      'Comunicazione organizzata senza dispersione',
    ],
  },
  {
    title: 'Wiki Interna Aziendale',
    points: [
      'Linee guida, procedure e onboarding',
      'Accesso rapido per ridurre i tempi di formazione',
    ],
  },
  {
    title: 'User Experience al centro',
    points: [
      'Interfaccia semplice e intuitiva',
      'Più friendly di Odoo, accessibile anche da mobile',
    ],
  },
  {
    title: 'Innovazione futura',
    points: [
      'AI per analisi documenti e scadenze',
      'Social network aziendale per connettere imprese e lavoratori',
    ],
  },
];

export default function Pillars() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900">Pilastri principali</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">{pillar.title}</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {pillar.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

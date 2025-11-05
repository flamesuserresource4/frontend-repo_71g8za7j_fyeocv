import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-700 shadow">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            One-page pitch deck
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            InnovaIndustria – La nuova era del gestionale industriale
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Un gestionale modulare e user-friendly, centrato sul file manager, che connette persone, progetti e documenti in un unico ecosistema.
          </p>
        </div>
      </div>
    </section>
  );
}

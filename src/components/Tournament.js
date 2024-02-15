const Tournament = () => (
  <article className="bg-primary-900 dark:bg-slate-800 shadow rounded overflow-hidden">
    <div>
      <img src="https://source.unsplash.com/800x400/?nature" alt="Nature" className="h-full w-full object-cover object-center" />
    </div>
    <div className="p-5 space-y-3">
      <h3 className="text-sm font-semibold text-primary-500 dark:text-slate-300">Laravel</h3>
      <h2 className="text-xl font-semibold text-primary-500 dark:text-slate-300 leading-tight">A utility-first CSS framework for rapidly building custom designs.</h2>
      <p className="text-primary-500 dark:text-slate-300 leading-tight">Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
    </div>
  </article>
);

export default Tournament;

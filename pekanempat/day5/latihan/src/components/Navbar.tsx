import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const active = (path: string) =>
    loc.pathname === path ? "text-white font-semibold" : "text-slate-300";

  return (
    <nav className="flex items-center justify-between max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Evaluasi Hari ke-23</h1>
      <div className="flex gap-3">
<Link to="/" className={active("/")}>Home</Link>
<Link to="/basic-form" className={active("/basic-form")}>Basic Form</Link>
<Link to="/multi-step-form" className={active("/multi-step-form")}>Multi-Step</Link>
<Link to="/dynamic-form" className={active("/dynamic-form")}>Dynamic</Link>
<Link to="/advanced-form" className={active("/advanced-form")}>Advanced</Link>

      </div>
    </nav>
  );
}

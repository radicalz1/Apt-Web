import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  tag?: string;
  description: string;
  features: string[];
  price: string;
  duration?: string;
  ctaText: string;
  ctaLink: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">{props.title}</h3>
        {props.tag && props.tag !== `services.${props.tag.toLowerCase()}Tag` && (
          <span className="px-2 py-1 text-xs rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200">
            {props.tag}
          </span>
        )}
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{props.description}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {props.features.map((feature, i) => (
          <li key={i} className="flex gap-2"><span>✔</span> {feature}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">{props.price}</div>
          {props.duration && <div className="text-xs text-slate-500">{props.duration}</div>}
        </div>
        <Link to={props.ctaLink} className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white">
          {props.ctaText}
        </Link>
      </div>
    </article>
  );
};

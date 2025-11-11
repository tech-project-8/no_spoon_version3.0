export function BlackBlock({ className = "", label }:{ className?: string; label?: string }) {
return (
<div className={`relative bg-black ${className}`}>
{label ? <span className="sr-only">{label}</span> : null}
</div>
);
}
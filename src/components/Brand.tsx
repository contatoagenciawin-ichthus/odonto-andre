export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <div className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="André Ávila Odontologia">
    <div className="brand-placeholder" aria-hidden="true"><span>LOGO</span></div>
    <div className="brand-name"><strong>André Ávila</strong><small>ODONTOLOGIA</small></div>
  </div>;
}

import React from "react";
const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  href,
  className = "",
  type = "button",
  disabled = false,
  title,
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 border text-base font-semibold tracking-[0.01em] transition-all duration-200 ease-out rounded-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-4 text-lg",
    icon: "h-8 w-8 p-0"
  };

  const variants = {
    primary:
      "bg-[var(--surface-dark)] text-white border-[var(--surface-dark)] hover:bg-black hover:border-black shadow-card",
    outline:
      "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-soft",
    ghost: "bg-transparent border-transparent text-[#555F97] hover:text-[#1B1537] pl-0 justify-start",
    nav: "bg-transparent border-transparent text-current hover:opacity-100 opacity-90",
    icon: "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 shadow-soft"
  };

  const resolvedClassName = `${baseStyle} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={resolvedClassName} title={title}>
        {children}
        {Icon && <Icon size={18} className="group-hover:translate-x-1 transition-transform" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={resolvedClassName} title={title}>
      {children}
      {Icon && <Icon size={18} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export default Button;

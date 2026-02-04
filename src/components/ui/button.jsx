import React from "react";
const Button = ({ children, onClick, variant = "primary", icon: Icon, href, className = "" }) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wide transition-all duration-200 ease-out rounded-md group";

  const variants = {
    primary:
      "bg-[#88FF00] text-[#231F45] hover:bg-[#76E600] active:bg-[#66CC00] shadow-sm hover:shadow-md transition-colors",
    outline:
      "border-2 border-neutral-300 text-neutral-900 hover:border-[#1B1537] hover:bg-neutral-50 bg-transparent",
    ghost: "text-[#555F97] hover:text-[#1B1537] pl-0 justify-start"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
        {Icon && <Icon size={18} className="group-hover:translate-x-1 transition-transform" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon size={18} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};

export default Button;

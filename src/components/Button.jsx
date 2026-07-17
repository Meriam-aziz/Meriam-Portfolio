function Button({ children, variant = "primary" }) {
  const base = `
    px-8 py-4
    rounded-xl
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    hover:-translate-y-1
    active:scale-95
  `;

  const styles = {
    primary: `
      bg-gradient-to-r
      from-pink-500
      to-fuchsia-500
      text-white
      shadow-lg
      hover:shadow-[0_15px_40px_rgba(236,72,153,.45)]
    `,
    secondary: `
      border-2
      border-pink-500
      text-pink-500
      bg-white
      hover:bg-pink-50
      hover:shadow-lg
    `,
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
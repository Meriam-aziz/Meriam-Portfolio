function Button({ children, variant = "primary" }) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition";

  const styles = {
    primary:
      "bg-pink-500 text-white hover:bg-pink-600",
    secondary:
      "border-2 border-pink-500 text-pink-500 hover:bg-pink-50",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
interface Props { variant?: "dark" | "light"; size?: string; }

export default function Logo({ variant = "dark", size = "78%" }: Props) {
  return (
    <svg viewBox="0 0 260 340" style={{ width: size, maxWidth: 170, height: "auto" }}>
      <use href={variant === "dark" ? "#tp-dark" : "#tp-light"} />
    </svg>
  );
}

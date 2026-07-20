export default function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-30 overflow-hidden"
    >
      <div
        className="aurora-band"
        style={{
          top: "-20%",
          right: "-15%",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, var(--aurora-a), transparent 65%)",
          animation: "aurora-1 32s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-band"
        style={{
          bottom: "-25%",
          left: "-15%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, var(--aurora-b), transparent 65%)",
          animation: "aurora-2 40s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-band"
        style={{
          top: "30%",
          left: "35%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, var(--aurora-c), transparent 65%)",
          animation: "aurora-3 26s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function Background({ darkMode }) {
  return (
    <>
      {/* Pink Circle */}
      <div className="fixed -top-44 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-pink-300 opacity-20 blur-3xl -z-10" />

      {/* Left Blob */}
      <div className="fixed bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-pink-200 opacity-20 blur-3xl -z-10" />

      {/* Right Blob */}
      <div className="fixed top-60 -right-32 w-[350px] h-[350px] rounded-full bg-pink-200 opacity-20 blur-3xl -z-10" />
      <div className="fixed inset-0 -z-20 opacity-[0.03] bg-[linear-gradient(#ec4899_1px,transparent_1px),linear-gradient(90deg,#ec4899_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </>
  );
}

export default Background;
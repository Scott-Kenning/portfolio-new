const Achievements = () => {
  return (
    <section className="max-w-5xl w-full flex flex-col items-center mx-auto">
      <h2 className="text-4xl font-bold mt-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 pb-4">
        Achievements
      </h2>
      <div className="rounded-lg mt-6 w-full">
        <h3 className="text-2xl font-semibold">🏆 1st Place - WEC 2025 Programming</h3>
        <p className="mt-3 text-lg">
          Secured first place in the programming category at the 2025 Western Engineering Competition (WEC).
          My team utilized linear programming as an optimization technique for a geometric set cover problem, covering an arbitrary city map with fire halls while both minimizing the amount of fire halls required and optimizing fire hall placement for future city border expansions.
        </p>
      </div>
    </section>
  );
};

export default Achievements;

const Achievements = () => {
  return (
    <section className="max-w-5xl w-full flex flex-col items-center mx-auto">
      <h2 className="text-4xl font-bold mt-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 pb-4">
        Achievements
      </h2>
      <div className="rounded-lg mt-10 w-full">
        <h3 className="text-xl font-semibold">🏆 1st Place Programming - Canadian Engineering Competition 2025</h3>
        <p className="mt-2 text">
          Won first place in the programming category at the 2025 Canadian Engineering Competition (CEC).
          CEC is the most prestigious student engineering competition in Canada, which I qualified for after winning my university competition & the regional qualifier WEC in Saskatoon.
          My team trained a machine learning model to identify brain tumors in MRI scans, which had an accuracy rate above 99%.
        </p>
      </div>
      <div className="rounded-lg mt-10 w-full">
        <h3 className="text-xl font-semibold">Grand Engineering Design Challenge Award - Canadian Engineering Competition 2025</h3>
        <p className="mt-2">
          This award is given to the team at CEC which had the most innovative design across all 8 competition categories.
          We won this award by adding a heat map to the results of our tumour classification, as well as creating a web interface for healthcare staff to interact with our model.
          We designed our solution focusing on not just writing the best code, but coming up with the best solution to a real world problem.
        </p>
      </div>
      <div className="rounded-lg mt-10 w-full">
        <h3 className="text-xl font-semibold">🏆 1st Place Programming - Western Engineering Competition 2025</h3>
        <p className="mt-2">
          Secured first place in the programming category at the 2025 Western Engineering Competition (WEC).
          WEC is a regional competition that brings together the top engineering students from universities across Western Canada to compete for a spot at CEC.
          My team utilized linear programming as an optimization technique for a geometric set cover problem, covering an arbitrary city map with fire halls while both minimizing the amount of fire halls required and optimizing fire hall placement for future city border expansions.
        </p>
      </div>
    </section>
  );
};

export default Achievements;

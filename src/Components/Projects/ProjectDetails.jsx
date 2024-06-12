function ProjectDetails({ selectedProject }) {
  function createSkillBox(skill) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-[7px] h-[7px] rounded-full bg-primary"></div>
        <div className="">{skill}</div>
      </div>
    );
  }
  return (
    <div className=" rounded-xl">
      <img src={selectedProject.img} className=" rounded-xl" alt="" />
      <h1 className="font-manrope text-xl my-3">{selectedProject.name}</h1>
      <div className="flex flex-wrap gap-3 font-manrope">
        {selectedProject && selectedProject.skill.map(createSkillBox)}
      </div>
    </div>
  );
}

export default ProjectDetails;

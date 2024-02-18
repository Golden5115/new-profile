import { skills } from "../../Data";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="py-20 align-element px-[15%]" id="skills">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Tech Stack
        </h2>
      </div>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;

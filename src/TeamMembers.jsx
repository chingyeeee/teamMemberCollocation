import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = function (props) {
  const { employees, handleEmployeeCardClick, selectedTeam } = props;

  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      handleEmployeeCardClcik={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
    />
  ));
};

export default TeamMembers;

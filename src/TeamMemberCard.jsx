import femaleProfile from "./images/femaleProfile.jpeg";
import maleProfile from "./images/maleProfile.jpeg";

const TeamMemberCard = function (props) {
  const { employee, handleEmployeeCardClick, selectedTeam } = props;

  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      <img
        className="card-img-top"
        src={employee.gender === "male" ? maleProfile : femaleProfile}
        alt={employee.fullName}
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

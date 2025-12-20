import SingleTeamV2 from "./SingleTeamV2";
import Animate from "../animation/Animate";

const TeamV2 = ({ teamMembers = [], bgColor }) => {
  if (!teamMembers.length) return null;

  // Only active members (safety check)
  const activeTeams = teamMembers.filter(
    (item) => item.isActive
  );

  return (
    <div
      className={`${bgColor || ""} team-style-two-area default-padding-top pb-70 pb-xs-0`}
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-6 col-lg-12">
            <div className="site-heading">
              <h5 className="sub-title">Team members</h5>
              <h2 className="title">
                Our professional <br /> expert team members
              </h2>
            </div>
          </div>

          {activeTeams.slice(0, 5).map((team, index) => (
            <Animate
              key={team.id}
              className="fadeInUp"
              delay={`${index * 100}ms`}
            >
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
                <SingleTeamV2 team={team} />
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamV2;

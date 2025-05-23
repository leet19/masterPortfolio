import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

// function GetSkillSvg(props) {
//   if (typeof props.fileName === "string") {
//     if (props.fileName === "DataScienceImg")
//       return <DataScienceImg theme={props.theme} />;
//     else if (props.fileName === "FullStackImg")
//       return <FullStackImg theme={props.theme} />;
//     else if (props.fileName === "CloudInfraImg")
//       return <CloudInfraImg theme={props.theme} />;
//     else return <DesignImg theme={props.theme} />;
//   } else {
//     // If fileName is an imported image (JPEG/PNG), render it directly
//     return (
//       <img
//         src={props.fileName}
//         alt="Skill visual"
//         style={{ width: "100%", borderRadius: "12px" }}
//       />
//     );
//   }
// }

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={props.theme} />;
    case "FullStackImg":
      return <FullStackImg theme={props.theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={props.theme} />;
    case "DesignImg":
      return <DesignImg theme={props.theme} />;
    default:
      // If fileName is an imported image path (JPG/PNG)
      return (
        <img
          src={props.fileName}
          alt="Skill"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      );
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

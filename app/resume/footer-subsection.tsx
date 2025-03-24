import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterSubsection: React.FC<{ icon: IconDefinition, children: React.ReactNode }> = ({icon,
  children,
}) => {
  return (
    <div className="footer-sub-section">
      <div className="subsection-header">
        <div className="icon-circle-md">
          <FontAwesomeIcon icon={icon} width={20} />
        </div>
        <div className="subsection-title">{children}</div>
      </div>
      <div className="subsection-body">Stuff</div>
    </div>
  );
};

export default FooterSubsection;

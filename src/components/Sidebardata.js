import React from "react";

function Sidebardata({ Icon, selected }) {
  return (
    <div className={`sidebardata-container ${selected && "sidebar-active"} `}>
      <Icon />
    </div>
  );
}

export default Sidebardata;

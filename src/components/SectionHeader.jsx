import React from "react";

export default function SectionHeader({ eyebrow, title, accent }) {
  return (
    <div>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading">
        {title}
        {" "}
        <span className="text-teal-accent">{accent}</span>
      </h2>
    </div>
  );
}

import React from "react";
import { SKILLS_AI_WEB, SKILLS_DATA_CLOUD } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";
import airflowIcon from "../images/brands/apache-airflow.svg";
import sparkIcon from "../images/brands/apache-spark.svg";
import awsIcon from "../images/brands/aws.svg";
import azureIcon from "../images/brands/azure.svg";
import databricksIcon from "../images/brands/databricks.svg";
import dbtIcon from "../images/brands/dbt.svg";
import deltaIcon from "../images/brands/delta-lake.svg";
import googleCloudIcon from "../images/brands/google-cloud.svg";
import mongoIcon from "../images/brands/mongodb.svg";
import nodeIcon from "../images/brands/node.svg";
import reactIcon from "../images/brands/react.svg";
import snowflakeIcon from "../images/brands/snowflake.svg";
import tailwindIcon from "../images/brands/tailwind.svg";

const ICONS = {
  airflow: airflowIcon,
  spark: sparkIcon,
  aws: awsIcon,
  azure: azureIcon,
  databricks: databricksIcon,
  dbt: dbtIcon,
  delta: deltaIcon,
  "google-cloud": googleCloudIcon,
  mongodb: mongoIcon,
  node: nodeIcon,
  react: reactIcon,
  snowflake: snowflakeIcon,
  tailwind: tailwindIcon,
};

function SkillGrid({ items }) {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-3 md:grid-cols-3 lg:grid-cols-5">
      {items.map((skill) => (
        <div
          key={skill.name}
          className="card-surface flex min-h-28 w-[120px] flex-col items-center justify-center gap-3 px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          {skill.icon && (
            <img
              src={ICONS[skill.icon]}
              alt=""
              aria-hidden="true"
              className="h-6 w-auto max-w-[88px] object-contain grayscale opacity-75 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          )}
          <span className="text-xs font-medium leading-5 text-muted">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

function DataMotifDivider() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 h-10 w-full"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 19C180 19 168 5 310 5s156 30 290 30 156-30 290-30 156 14 310 14" fill="none" stroke="#cbd5e1" strokeWidth="1" />
      <circle cx="310" cy="5" r="2" fill="var(--color-teal)" />
      <circle cx="890" cy="5" r="2" fill="var(--color-teal)" />
    </svg>
  );
}

export default function Stack() {
  return (
    <section id="skills" className="section-anchor section-space relative border-t border-line">
      <DataMotifDivider />
      <div className="site-container relative">
        <SectionHeader eyebrow="Skills" title="Tools I build" accent="with." />
        <div className="mt-10">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">Data & Cloud</h3>
          <SkillGrid items={SKILLS_DATA_CLOUD} />
        </div>
        <div className="mt-9">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">AI & Web</h3>
          <SkillGrid items={SKILLS_AI_WEB} />
        </div>
      </div>
    </section>
  );
}

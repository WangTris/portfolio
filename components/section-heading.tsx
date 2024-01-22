import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h1 className="mb-8 text-3xl font-medium capitalize">{children}</h1>;
};

export default SectionHeading;

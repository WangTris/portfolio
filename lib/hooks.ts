import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { SectionName } from "./types";

const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeofLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeofLastClick, sectionName]);

  return { ref };
};

export default useSectionInView;

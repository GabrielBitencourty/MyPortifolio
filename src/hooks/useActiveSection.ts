"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );


        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        threshold: 0.3,
        rootMargin:"-100px 0px -50% 0px",
      }
    );


    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        observer.observe(element);
      }
    });


    return () => {
      observer.disconnect();
    };

  }, [sections]);


  return activeSection;
}
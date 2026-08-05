"use client";

import { ArrowRight } from "lucide-react";
import { MotionButton } from "@/components/ui/MotionButton";

export function ProjectsButton() {

  function scrollToProjects() {
    window.history.pushState(
      null,
      "",
      "#projects"
    );

    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }


  return (
    <MotionButton
      variant="outline"
      onClick={scrollToProjects}
      className="group"
    >
      Ver Projetos

      <ArrowRight
        size={18}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />

    </MotionButton>
  );
}
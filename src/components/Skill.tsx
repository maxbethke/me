import React, {PropsWithoutRef} from "react";
import {Skill as SkillType} from "../contracts/skill";
import {Badge} from "@/components/ui/badge";

type SkillProps = SkillType & {
  className: string
}

export const Skill: React.FC = ({name, experience, className}: SkillProps) => (
  <div
    className={'flex items-center justify-between text-lg gap-2 p-1 h-7 ' + (className ?? '')}
  >
    <span>{name}</span>
    {experience != null ? (
      <Badge>{experience}</Badge>
    ) : null}
  </div>
)

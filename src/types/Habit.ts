import { HabitCategoryColor } from "@/components/ui/ColorCircle";
import { IconName } from "./Icon";


export type HabitCategory = {
  name: string;
  color: HabitCategoryColor;
  icon: IconName;
};

import type { Task } from "../../types";
import { IconCheck } from "../../utils/getIcons";

type TaskItemProps = Pick<Task, "title" | "completed">;

const TaskItem = ({ title, completed }: TaskItemProps) => {
  return (
    <div className="dark:bg-darkTheme-veryDarkDesaturatedBlue border-lightTheme-lightGrayishBlue dark:border-darkTheme-veryDarkGrayishBlue box-border flex items-center gap-5 border-b bg-white px-5 py-4 transition-colors">
      <button title="complete task">
        <span
          className={`circle border-lightTheme-lightGrayishBlue dark:border-darkTheme-veryDarkGrayishBlue flex h-6 w-6 items-center justify-center overflow-hidden rounded-[50%] border  ${
            completed ? "bg-gradient-to-br from-[#57ddff] to-[#c058f3]" : ""
          }`}
        >
          {completed && <IconCheck />}
        </span>
      </button>
      <h3
        className={`${
          completed
            ? "dark:text-darkTheme-veryDarkGrayishBlue text-lightTheme-lightGrayishBlue line-through"
            : "text-darkTheme-veryDarkBlue dark:text-lightTheme-veryLightGray"
        } m-0 leading-tight`}
      >
        {title}
      </h3>
    </div>
  );
};

export default TaskItem;

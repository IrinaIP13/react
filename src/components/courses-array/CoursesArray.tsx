import {coursesArray} from "../../data/data.ts";
import {Course} from "../course/Course.tsx";

export const CoursesArray = () => {
    return (
        <div>
            {
                coursesArray.map((course, index) => <Course key={index} course={course}/>)
            }
        </div>
    );
};
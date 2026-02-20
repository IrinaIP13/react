import type {ICourse} from "../../models/ICourse.ts";
import {ModuleComp} from "../modules-comp/ModuleComp.tsx";

interface CourseProps {
    course: ICourse
}

export const Course = ({course}: CourseProps) => {
    return (
        <div>
            <h1 className='text-2xl font-extrabold'>{course.title}</h1>
            <p>Month Duration: {course.monthDuration}</p>
            <p>Hour Duration: {course.hourDuration}</p>
            <p className='bg-lime-100'>Modules:</p>
            {course.modules.map((module,i) => <ModuleComp key={i} module={module}/>)}
        </div>
    );
};
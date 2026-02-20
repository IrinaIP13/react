import './CoursesComponent.css'
import {coursesAndDurationArray} from "../../arrays.ts";
import type {ICourseModel} from "../../models/CourseModel.tsx";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourseModel, index: number) => {
                    return <CourseComponent course={course} key={index} />;
                })
            }
        </ul>
    );
};
import React from 'react';
import Card from "./Card";

const Courses = (props) => (
    <div className="container py-5 px-0">
        <div className="container coursesHeader d-flex justify-content-between pt-5 pb-4 px-0">
            <h2 className="font-28">{props.name}</h2>
            <span className="font-16 d-flex justify-content-between align-items-center" style={{ width: "101px" }}>
                View all
            <img src="svgs/Arrow black.svg" alt="" />
            </span>
        </div>
        <div className="container pt-3 pb-5 px-0">
        <div class="row my-4 mx-0 cardGrid">
            {props.data.map(course=>(
                <Card course={course}/>
            ))}
        </div>
        </div>
    </div>
);

export default Courses;
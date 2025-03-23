import React from "react";
import "./TeacherCard.css";

export default function TeacherCard({ teacher }) {
    return (
        <div className="teacher-card">
            <img src={teacher.image} className="teacher-image" />
            <div className="teacher-info">
                <h3 className="teacher-name">{teacher.name}</h3>
                <p className="teacher-specialization">{teacher.specialization}</p>
                <p className="teacher-description">{teacher.description}</p>
            </div>
        </div>
    );
}

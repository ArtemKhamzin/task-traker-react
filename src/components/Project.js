import React from 'react';
import MyButton from "./MyButton";

const Project = (props) => {

    return (
        <div className="project">
            <div className="project-content">
                <div style={{fontWeight: 'bold', fontSize: '25px'}}>
                    {props.project.id}. {props.project.title}
                </div>
                <div style={{marginTop: '15px', wordBreak: 'break-all'}}>
                    {props.project.body}
                </div>
            </div>
            <div>
                <MyButton onClick={() => props.delete(props.project)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default Project;
import React, {useState} from 'react';
import Project from "../components/Project";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import {Grid} from "@mui/material";

const Home = () => {
    const [projects, setProjects] = useState([
        {id: 1, title: 'Project 1', body: 'Description'},
        {id: 2, title: 'Project 2', body: 'Description'},
        {id: 3, title: 'Project 3', body: 'Description'},
        {id: 4, title: 'Project 4', body: 'Description'},
        {id: 5, title: 'Project 5', body: 'Description'},
        {id: 6, title: 'Project 6', body: 'Description'}
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewProject = () => {
        let lastProjectId = projects.length === 0 ? 1 : projects.sort(a => a.id)[projects.length-1].id + 1
        const newProject = {
            id: lastProjectId,
            title,
            body
        }
        setProjects([...projects, newProject])
    }

    const deleteProject = (project) => {
        setProjects(projects.filter(p => p.id !== project.id))
    }

    return (
        <div className="App">
            <div style={{fontSize: '39px'   , marginLeft: '100px', marginTop: '50px'}}>Create project</div>

            <form>
                <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                    <Grid item style={{marginLeft: '100px'}}>
                        <div style={{fontSize: '25px', marginBottom: '10px'}}>Project name</div>
                        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text"/>
                    </Grid>
                    <Grid item style={{marginLeft: '37px', marginTop: '40px'}}>
                        <div style={{fontSize: '25px', marginBottom: '10px'}}>Description</div>
                        <MyInput value={body} onChange={e => setBody(e.target.value)} type="text"
                        />
                    </Grid>
                </Grid>

                <Grid item style={{marginLeft: '100px', marginTop: '20px'}}>
                    <MyButton onClick={addNewProject}>Create project</MyButton>
                </Grid>
            </form>

            <div style={{fontSize: '39px', marginLeft: '100px', marginTop: '70px'}}>My projects</div>

            <div className="project-list">
                {projects.map((project) =>
                    <Project delete={deleteProject} project={project} key={project.id}/>
                )}
            </div>
        </div>
    );
};

export default Home;
import React from 'react'
import './Home.css'

const technologiesKnown = ['JavaScript', 'NodeJS', 'Express', 'SQL', 'MongoDB', 'TypeScript', 'Vue.js', 'Angular', 'HTML', "CSS"];
const technologiesKnown_list = technologiesKnown.map(technology => <li>{technology}</li>);

const technologiesUnknown = ['React', 'Laravel', 'Deno', 'Django', 'Spring'];
const technologiesUnknown_list = technologiesUnknown.map(technology => <li>{technology}</li>)

export const Home = () => {
  return (
    <div className="home">
        <div className='home-container'>
            <h2>Who am I?</h2>
            <p className="about-me">Full Stack Developer who loves programming. Lorem fistrum ese hombree enim adipisicing enim apetecan. Aliqua no puedor ahorarr laboris fistro al ataquerl dolor por la gloria de mi madre consectetur ese pedazo de a peich. Consectetur officia no puedor benemeritaar enim. Quietooor apetecan condemor ut sit amet apetecan consequat ahorarr papaar papaar laboris sexuarl. Jarl aliquip no puedor a gramenawer ut esse irure sit amet. Ex qué dise usteer aute nisi al ataquerl condemor qui ex esse. A peich incididunt adipisicing ut diodenoo adipisicing adipisicing consectetur te voy a borrar el cerito eiusmod magna.</p>
            <h2>Technologies I know</h2>
            <p>These are the technologies I already know:</p>
            <ul>
                {technologiesKnown_list}
            </ul>
            <h2>Technologies I want to learn</h2>
            <p>These are the technologies that I don't know or know little about yet, but I want to learn about them in the future:</p>
            <ul>
                {technologiesUnknown_list}
            </ul>
        </div>
    </div>
  )
}


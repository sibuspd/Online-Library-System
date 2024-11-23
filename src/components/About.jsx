import "./About.css"

function About(){
    return (
        <>
        <div className="about-container"> 
            <div className="profile-pic">
                <img src="./images/profile.jpg" width="220" height="250"/> 
            </div> 
            <div className="about-content"> 
                <h2>About Me</h2>
                <p> Hello! I'm a passionate fullstack developer with a love for Web architecture and Computer Science. I thrive on creating impactful projects and continuously learning new skills to stay ahead in the industry. </p> 
                <p> Whether it's working on innovative solutions, collaborating with talented teams, or diving into new challenges, I am always excited to take on what's next. When I'm not working, you can find me socializing, travelling and exploring nature . </p>
                <p> Let's connect and create something amazing together! </p>
            </div>
        </div>
        </>
    )
}

export default About



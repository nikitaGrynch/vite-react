function Profile(props: any) {
    const person = props.person;
    return (
      <div>
          <h2>{person.name}</h2>
          <img src={person.img} alt="person photo" style={{height: "150px"}}/>
          <p>Phone: {person.phone}</p>
          <p>Email: {person.email}</p>
          <p>Residence: {person.residence}</p>
          <h5>Work Experience</h5>
          <ul style={{width: "200px", margin: "0 auto"}}>
            {
            person.workExperience.map((work: string, index: number) => {
                return <li key={index}>{work}</li>
            })
        }
          </ul>

          <h5>Skills</h5>
          <ul style={{width: "200px", margin: "0 auto"}}>
            {
            person.skills.map((skill: string, index: number) => {
                return <li key={index}>{skill}</li>
            })
        }
          </ul>
      </div>
    )
  }
  
  export default Profile;
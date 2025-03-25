import {TeamMemberCard} from './components/TeamMemberCard'

function App() {
  const data = [{
    name: "John Doe",
    jobtitle: "Software Engineer"
  },
  {
    name: "Mayank Sharma",
    jobtitle: "Assitant Software Engineer"

  }
]
return (
<>
<div >
  <TeamMemberCard data={data[0]} />
  <TeamMemberCard data={data[1]} />
</div>
</>
 );
}

export default App;

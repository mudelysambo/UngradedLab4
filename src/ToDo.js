import React, { useState } from 'react';


function ToDo(){
  const [Text, setText] = useState('');
  const [cheked, setcheked] = useState(false);
  const [Task, setTask] = useState([]);
  
const handler = (e)=> { 
  setTask ([{ Text},...Task])
  
}
 
   

  return (
    <div>
    <form>  
    <label > Imporntant</label><br/>
     <input type="checkbox" 
     onChange={(e) => setcheked(e.target.cheked)}
     />(" ")
<input type="text" placeholder="text"/> onChange={(e) => setText(e.target.value)}
 <button onClick={handler} >Add</button>
    </form>

  {Task.map((element, index) => {
    return <ToDo 
    key={index}
    name={element.text}
    />
  }
  
  )}
    </div>
  )
}
export default ToDo;
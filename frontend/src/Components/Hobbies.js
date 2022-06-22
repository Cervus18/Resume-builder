import React from 'react'

const Hobbies = ({hobbies}) => {
    return (
        <div style={{"marginBottom":"1rem"}}>
         <h4 style={{"marginBottom":".5rem","borderBottom":"1px solid #bbb","paddingBottom":".5rem"}}>Hobbies</h4>
         <ul>
            {hobbies.map(item => <li style={{"padding":"0","border":"none","fontSize":".9rem"}} key={item.id}>{item.hobby}</li>)}
         </ul>
        </div>
      )
}

export default Hobbies
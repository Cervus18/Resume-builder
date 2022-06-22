import React from 'react'

const Languages = ({languages}) => {
  return (
    <div style={{"marginBottom":"1rem"}}>
     <h4 style={{"marginBottom":".5rem","borderBottom":"1px solid #bbb","paddingBottom":".5rem"}}>Languages</h4>
     <ul>
        {languages.map(item => <li style={{"padding":"0","border":"none","fontSize":".9rem"}} key={item.id}>{item.language}</li>)}
     </ul>
    </div>
  )
}

export default Languages
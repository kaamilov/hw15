import React from 'react'

const Demo = (props) => {
    console.log("Demo");
  return (
    <div>
        <button onClick={props.onclick}>demo click</button>

    </div>
  )
}
// React.memo дочерный компонентти кайра кайра рендер кыла бербеш учун 
// компонентти React.memo го байлап коебуз.  Если биз пропус мн state бере турган болсок 
// state компонентти зоставляйтетет перерендер кылганга.
export default React.memo(Demo) 
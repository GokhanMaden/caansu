import React from 'react'
import PropTypes from 'prop-types'

import TodoRow from './TodoRow';

const TodoList = props => {
  console.log('props: ', props);
  
  return (
    <div className="todo__list">

      { props.data && props.data.map((item, index) => {
        return <TodoRow rowData={item}/>
      })}

    </div>
  )
}

TodoList.propTypes = {
  data: PropTypes.array
}

export default TodoList


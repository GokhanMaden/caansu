import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class TodoRow extends Component{

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  
  _handleChange = name => event => {
    this.setState({ 
      ...this.state, 
      [name]: event.target.checked 
    });
  };

  onChange = e => {
    this.setState({
      input: e.target.value
    })
  }
  
  render() {
    console.log('props: ', this.props);
    console.log('state: ', this.state[this.props.rowData.noteId])

    return (
      <div className="todo__row">
        <Checkbox
          checked={this.props.rowData.status}
          onChange={this._handleChange(this.props.rowData.noteId)}
          value={this.props.rowData.status}
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
        />
        <Input onChange value={this.props.rowData.content}/>
        <DeleteForeverIcon />
      </div>
    )
  }
}

TodoRow.propTypes = {
  rowData: PropTypes.string
}

export default TodoRow


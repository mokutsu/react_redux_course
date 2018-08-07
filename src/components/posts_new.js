import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) { // field object contains event handlers, field.input contains a bunnch of event handlers. By doing ...field.input, just says all teh properties within field.input are spread out and assigned as props on the input element
    return (
      <div>
        <input
          type="text"
          {...field.input}
        />
      </div>
    )
  }
  render() {
    return (
      <form>
        <Field
          name='post-title'
          component={this.renderTitleField}
        />

      </form>
    );
  }
}

// pass in function with form property (name of form), just make sure it is unique to keep the different forms seperate
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);

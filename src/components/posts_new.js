import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) { // field object contains event handlers, field.input contains a bunnch of event handlers. By doing ...field.input, just says all teh properties within field.input are spread out and assigned as props on the input element
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          type="text"
          className='form-control'
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }
  // handlesubmit came from reduxForm wired up with PostsNew in teh same way that connect was connected. Connect helper was used to add additional properties, and redux forms is doing the same thing, with onSubit tacked onto this form element. Now we're just pulling on the handleSubit property from this.props takcked on by redux forms. Redux form is only responsible for handling state and validation so we need to write additional code to actually handle submit events. handleSubmit run by reduxform, once everything on reduxform side is all good, handleSubmit is run with the new this.onSubit callback called with this component.

  onSubmit(values) {
    // this === component
    console.log(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name='title'
          label='title for post'
          component={this.renderField}
        />
        <Field
          name='categories'
          label='categories'
          component={this.renderField}
        />
        <Field
          name='content'
          label='post content'
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // logic to validate the inputs from values object.  Field name is automatically wired together with the values.property name
  if (!values.title || values.title.length < 2) {
    errors.title = "enter a title please that is at least 2 chars!";
  }
  if (!values.categories) {
    errors.categories = 'categories required';

  if (!values.content) {
    errors.content = 'content required';
  }}

  // if no errors, form is good to submit
  return errors;
}

// pass in function with form property (name of form), just make sure it is unique to keep the different forms seperate
export default reduxForm({
  validate, // validate property from reduxform is populated with function of same name
  form: 'PostsNewForm'
})(PostsNew);

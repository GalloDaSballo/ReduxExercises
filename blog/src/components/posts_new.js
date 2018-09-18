import React, {Component} from 'react'

/**
 * Field is the field
 * reduxForm is basically connecting the component this to the reducer
 */
import {Field, reduxForm} from 'redux-form'
/* An input can be "Pristine" "Touched" "Invalid" */

import {Link} from 'react-router-dom'


import {connect} from 'react-redux'
import {createPost} from '../actions'
/**
 * Redux Form manages validations and elements
 */
class PostsNew extends Component{

  // renderTitleField(field){
  //   return(
  //     <div className="form-group">
  //       <label for="title">Title</label>
  //       <input
  //         id="title"
  //         className="form-control"
  //         type="text"
  //         {...field.input}
  //       />
  //     </div>
  //   )
  // }
  /**
   * This would look the same as renderTitleField so we are going to generalize it
   */
  // renderTagsField(field){
  //
  // }
  //

  /**
   * Generic version to display multiple fields
   */
  renderField(field){
    const containerClass = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return(
      <div className={containerClass}>
        <label htmlFor={field.id}>{field.label}</label>
        <input
          id={field.id}
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : '' /*The errors we generate in validate() */}
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/') /* Changes history of navigation and sends the user to / */
    })
  }

  render(){
    /* Taken from reduxForm */
    const {handleSubmit} = this.props;
    /**
     * handleSubmit(this.onSubmit.bind(this))
     * the reduxForm side run first then it is sent to the onSubmit callback
     */
    return (
      <div>
        <h2>Add a new post</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            id="title"
            name="title"
            component={this.renderField}>
          </Field>
          {/*You can pass any arbitrary property to the Field and it will be passed to the component function*/}
          <Field
            label="Categories"
            id="categories"
            name="categories"
            component={this.renderField}>
          </Field>
          <Field
            label="Post Content"
            id="content"
            name="content"
            component={this.renderField}>
          </Field>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }

}

/**
 * Finction for validating user input
 */
function validate(values /* Values are all the data submitted in the form */){
  //{title: "asd", categories: "asd", content: "asd"}

  //If we return an empty object then reduxForm assumes the form is validated
  const errors = {}

  //If errors has any other property then reduxForm will prevent submission
  if(!values.title){
    errors.title = "Enter a title!"
  }

  if(!values.categories){
    errors.categories = "Enter a category!"
  }

  if(!values.content){
    errors.content = "Enter some content!"
  }

  // errors.name is associated via the <Field> thanks to the name property
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, {createPost})(PostsNew)
) /* This connects the component to the reducer the name of the form makes it unique */

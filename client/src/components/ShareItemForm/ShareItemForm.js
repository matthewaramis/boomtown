import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

export class validation extends Component {
  onSubmit(o) {
    console.log('Submitting:', o);
  }

  render() {
    return (
      <div className="shareItemForm">
        <h3>Share. Borrow. Prosper.</h3>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="name"
                render={({ input, meta }) => {
                  console.log('Inside name: ', meta);
                  return (
                    <div className="field">
                      <label for="name">Name your item</label>
                      <TextField inputProps={input} />
                      {/*<input type="text" {...input} />*/}
                      {meta.touched &&
                        meta.invalid && (
                          <div
                            className="error"
                            style={{ color: 'red', fontSize: '10px' }}
                          >
                            {meta.error}
                          </div>
                        )}
                    </div>
                  );
                }}
              />
              <Field
                name="desc"
                render={({ input, meta }) => (
                  <div className="field">
                    <label for="name">Describe your item</label>
                    <input type="text" {...input} />
                    {meta.touched &&
                      meta.invalid && (
                        <div
                          className="error"
                          style={{ color: 'red', fontSize: '10px' }}
                        >
                          {meta.error}
                        </div>
                      )}
                  </div>
                )}
              />
            </form>
          )}
        />
      </div>
    );
  }
}

export default validation;

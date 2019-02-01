import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Input,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import {
  updateItem,
  resetItem,
  resetImage
} from '../../redux/modules/ShareItem';
import { connect } from 'react-redux';
import { validate } from './helpers/validation';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
class ShareItemForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      fileSelected: false,
      done: false,
      selectedTags: []
    };
  }
  applyTags(tags) {
    return (
      tags &&
      tags
        .filter(t => this.state.selectedTags.indexOf(t.id) > -1)
        .map(t => ({ title: t.title, id: t.id }))
    );
  }
  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }
  handleSelectTags = event => {
    this.setState({ selectedTags: event.target.value });
  };
  generateTagsText(tags, selected) {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(', ');
  }
  handleSelectFile = () => {
    this.setState({ fileSelected: this.fileInput.current.files[0] });
  };
  onSubmit(values) {
    console.log('Submitting:', values);
  }
  dispatchUpdate(values, tags, updateItem) {
    if (!values.imageurl && this.state.fileSelected) {
      this.getBase64Url().then(imageurl => {
        updateItem({
          imageurl
        });
      });
    }
    updateItem({
      ...values,
      tags: this.applyTags(tags)
    });
  }
  render() {
    const { classes, tags, updateItem, resetImage, resetItem } = this.props;
    return (
      <div className="App">
        <h1>Share. Borrow. Prosper.</h1>
        <Form
          onSubmit={this.onSubmit}
          validate={values => {
            return validate(
              values,
              this.state.selectedTags,
              this.state.fileSelected
            );
          }}
          render={({ handleSubmit, pristine, submitting, values, invalid }) => (
            <form onSubmit={handleSubmit}>
              <FormSpy
                subscription={{ values: true }}
                component={({ values }) => {
                  if (values) {
                    this.dispatchUpdate(values, tags, updateItem);
                  }
                  return '';
                }}
              />

              {!this.state.fileSelected ? (
                <Button
                  fullWidth
                  size="small"
                  color="primary"
                  onClick={() => {
                    this.fileInput.current.click();
                  }}
                >
                  Select an image
                </Button>
              ) : (
                <Button
                  fullWidth
                  size="small"
                  color="primary"
                  onClick={() => {
                    this.fileInput.current.value = '';
                    this.setState({ fileSelected: false });
                    resetImage();
                  }}
                >
                  Reset image
                </Button>
              )}

              <input
                hidden
                type="file"
                id="fileInput"
                ref={this.fileInput}
                accept="image/*"
                onChange={() => {
                  this.handleSelectFile();
                }}
              />

              <Field
                name="title"
                render={({ input, meta }) => (
                  <div className="field">
                    <TextField
                      id="standard-textarea"
                      label="Name your Item"
                      type="text"
                      {...input}
                      multiline
                      className={classes.textField}
                      margin="normal"
                    />
                    {meta.touched &&
                      meta.invalid && (
                        <div
                          className="error"
                          style={{ color: 'red', fontsize: '10px' }}
                        >
                          {meta.error}
                        </div>
                      )}
                  </div>
                )}
              />
              <Field
                name="description"
                render={({ input, meta }) => (
                  <div className="field">
                    <Input
                      placeholder="Describe your Item"
                      className={classes.input}
                      inputProps={input}
                      multiline
                      rows="4"
                    />
                    {meta.touched &&
                      meta.invalid && (
                        <div
                          className="error"
                          style={{ color: 'red', fontsize: '10px' }}
                        >
                          {meta.error}
                        </div>
                      )}
                  </div>
                )}
              />

              <Field
                name="tags"
                render={({ input, meta }) => (
                  <FormControl fullWidth>
                    <InputLabel htmlFor="select-multiple-checkbox">
                      Add some tags
                    </InputLabel>
                    <Select
                      multiple
                      value={this.state.selectedTags}
                      onChange={this.handleSelectTags}
                      renderValue={selected => {
                        return this.generateTagsText(tags, selected);
                      }}
                    >
                      {tags &&
                        tags.map(tag => (
                          <MenuItem key={tag.id} value={tag.id}>
                            <Checkbox
                              checked={
                                this.state.selectedTags.indexOf(tag.id) > -1
                              }
                            />
                            <ListItemText primary={tag.title} />
                          </MenuItem>
                        ))}
                    </Select>
                    {/* {meta.touched &&
                      meta.invalid && (
                        <div
                          className="error"
                          style={{ color: 'red', fontsize: '10px' }}
                        >
                          {meta.error}
                          </div>
                      )} */}
                  </FormControl>
                )}
              />

              <Button
                size="small"
                color="primary"
                type="submit"
                // onClick={resetItem}
                disabled={submitting || pristine || invalid}
              >
                Share
              </Button>
            </form>
          )}
        />
      </div>
    );
  }
}
ShareItemForm.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => ({
  updateItem(item) {
    dispatch(updateItem(item));
  },
  resetItem() {
    dispatch(resetItem());
  },
  resetImage() {
    dispatch(resetImage());
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(ShareItemForm));

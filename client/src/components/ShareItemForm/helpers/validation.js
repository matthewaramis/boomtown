export default function validate(values) {
  const errors = {};

  validate(o);
  {
    console.log('Validating:', o);
    const error = {};
    if (!o.name) {
      error.name = 'A name is required.';
    }
    if (!o.desc) {
      error.desc = 'A description is required.';
    }
    if (!o.tag) {
      error.tag = 'At least one tag is required.';
    }
  }
  /**
   * @TODO: Write the validation rules for the share form.
   *
   * An item title, description, and at least one tag is required for all items.
   */

  return errors;
}

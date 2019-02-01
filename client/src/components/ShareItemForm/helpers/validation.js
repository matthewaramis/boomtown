export function validate(values, selectedTags, fileSelected) {
  const error = {};
  if (!values.title) {
    error.title = 'Item name is required';
  }
  if (!values.description) {
    error.description = 'Item description is required';
  }
  if (!fileSelected) {
    error.fileSelected = 'Image is required';
  }
  if (!selectedTags) {
    error.selectedTags = 'At least 1 tag must be selected';
  }
  return error;
}

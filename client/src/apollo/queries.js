import gql from 'graphql-tag';

/**
 * Item and user-related queries and mutations.
 */

const ItemFields = gql`
  fragment ItemFields on Item {
    # @TODO: Create a fragment to query the following fields for an item:
    id
    title
    imageurl
    description
    created

    itemowner {
      id
      fullname
      email
      bio
    }
    tags {
      id
      title
    }
    borrower {
      id
      fullname
      email
      bio
    }
  }
`;
export const ITEM_QUERY = gql`
  query item($id: ID!) {
    item(id: $id) {
      ...ItemFields
    }
    # @TODO: Query an item by its id and return the ItemFields fragment.
  }
  ${ItemFields}
`;

export const ALL_ITEMS_QUERY = gql`
  query items($filter: ID) {
    items(filter: $filter) {
      ...ItemFields
    }
    # @TODO: Query items (optionally by tag id) and return the ItemFields fragment.
  }
  ${ItemFields}
`;

export const ALL_USER_ITEMS_QUERY = gql`
  query user($id: ID!) {
    user(id: $id) {
      bio
      email
      fullname
      items {
        ...ItemFields
      }
      borrowed {
        ...ItemFields
      }
    }
    # @TODO: Query the bio, email, fullname, items, and borrowed for the user by id
    # Use the ItemFields fragment for the items and borrowed fields.
  }
  ${ItemFields}
`;

export const ALL_TAGS_QUERY = gql`
  query {
    tags {
      id
      title
    }
    # @TODO: Query the id and title fields for tags.
  }
`;

export const ADD_ITEM_MUTATION = gql`
  mutation addItem($item: NewItemInput!, $image: Upload!) {
    addItem(item: $item, image: $image) {
      id
      title
      description
      tags {
        id
        title
      }
    }
    # and return the new item id when the mutation is complete.
  }
`;

/**
 * Auth-related queries and mutations.
 */

export const VIEWER_QUERY = gql`
  query {
    viewer {
      id
      email
      fullname
      bio
    }
  }
`;
// export const LOGOUT_MUTATION = gql`
//   mutation {
//     # @TODO: Run the logout mutation.
//   }
// `;

export const SIGNUP_MUTATION = gql`
  mutation signup($user: NewUser!) {
    signup(user: $user)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($user: Login!) {
    login(user: $user)
  }
`;

const { ApolloError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const authMutations = require('./auth');
const { UploadScalar, DateScalar } = require('../custom-types');

module.exports = app => {
  return {
    Upload: UploadScalar,
    Date: DateScalar,

    Query: {
      viewer(root, args, { token }) {
        if (token) {
          console.log(token);
          return jwt.decode(token, app.get('JWT_SECRET'));
        }
        return null;
      },

      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
      },

      async tags(parent, args, { pgResource }, info) {
        try {
          const tags = await pgResource.getTags();
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    User: {
      async items(user, args, { pgResource }) {
        try {
          const userItems = await pgResource.getItemsForUser(user.id);
          return userItems;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrowed(user, args, { pgResource }) {
        try {
          const userBorrowed = await pgResource.getBorrowedItemsForUser(
            user.id
          );
          return userBorrowed;
        } catch (e) {
          throw new ApolloError(e);
        }
      }
    },

    Item: {
      async itemowner(item, args, { pgResource }) {
        try {
          const itemOwner = await pgResource.getUserById(item.ownerid);
          return itemOwner;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async tags(item, args, { pgResource }) {
        try {
          const itemTags = await pgResource.getTagsForItem(item.id);
          return itemTags;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async borrower(item, args, { pgResource }) {
        try {
          const itemBorrower = await pgResource.getUserById(item.borrowerid);
          return itemBorrower;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async imageurl({ imageurl, imageid, mimetype, data }) {
        if (imageurl) return imageurl;
        if (imageid) {
          return `data:${mimetype};base64, ${data}`;
        }
      }
    },

    Mutation: {
      ...authMutations(app),

      async addItem(parent, args, { pgResource, token }) {
        const user = await jwt.decode(token, app.get('JWT_SECRET'));
        const newItem = await pgResource.saveNewItem({
          item: args.item,
          // image: args.image,
          user
        });
        return newItem;
      }
    }
  };
};

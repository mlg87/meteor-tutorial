/**
 * Created by mlg on 9/30/15.
 */
Meteor.publish('allPosts', function() {
    return Posts.find({}, {fields: {
        date: false
    }});
});

Meteor.publish('authorPosts', function(author) {
    return Posts.find({author: author});
});
/**
 * Created by mlg on 9/29/15.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});
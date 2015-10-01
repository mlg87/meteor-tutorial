Posts = new Mongo.Collection('posts');

/*

NO LONGER NEEDED: meteor Methods are executed on the server so meteor assumes they can
be trusted

// Collection.allow tells meteor that this is a set of circumstances under which users are allowed to do things
Posts.allow({
    insert: function(userId, doc) {
        // only allow posting if user is logged in
        return !! userId;
    }
})
;*/

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });
        // LATENCY COMPENSATION demo
        /*if(Meteor.isServer) {
            postAttributes.title += ' (server)';
            // wait 5 seconds
            Meteor._sleepForMs(5000);
        }
        else {
            postAttributes.title += ' (client)'
        }*/
        var postWithSameLink = Posts.findOne({
            url: postAttributes.url
        });
        if(postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.emails[0].address,
            submitted: new Date()
        });
        // insert always returns the obj ID of what was just put in the DB
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});
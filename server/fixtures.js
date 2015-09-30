/**
 * Created by mlg on 9/30/15.
 */
if(Posts.find().count() === 0) {
    Posts.insert({
        title: 'Lane 8',
        url: 'http://www.lane8music.com'
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });
    Posts.insert({
        title: 'Red Devils',
        url: 'http://reddit.com/r/reddevils/'
    });
}
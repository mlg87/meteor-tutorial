/**
 * Created by mlg on 9/29/15.
 */
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        // this is the iterated object in this case
        a.href = this.url;
        //console.log('this is a in postItem: ', a);
        return a.hostname;
    }
});
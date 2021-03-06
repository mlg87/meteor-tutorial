Template.postEdit.events({
    'submit form': function(event) {
        event.preventDefault();
        var currentPostId = this._id;
        var postProperties = {
            url: $(event.target).find('[name=url]').val(),
            title: $(event.target).find('[name=title]').val()
        };
        Posts.update(currentPostId, {$set: postProperties}, function(err) {
            if(err) {
                // display err to user
                alert(err.reason);
            }
            else {
                Router.go('postPage', {_id: currentPostId});
            }
        })
    } ,
    'click .delete': function(event) {
        event.preventDefault();
        if(confirm('Fuck this post?')) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
});
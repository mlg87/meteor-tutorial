Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();

        // post obj created from user inputs into the postSubmit form
        var post = {
            url: $(event.target).find('[name=url]').val(),
            title: $(event.target).find('[name=title]').val()
        };

        Meteor.call('postInsert', post, function(err, res) {
            // display the error to the user and abort
            if(err) {
                // abort callback if err and alert user
                return alert(err.reason);
            }
            // alert user that the url has already been submitted, but route anyway
            if(res.postExists) {
                alert('Bitch, this link has already been posted!');
            }
            Router.go('postPage', {_id: res._id});
        });
    }
});
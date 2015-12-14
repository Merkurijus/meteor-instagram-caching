function addCronJob(options) {
  Meteor.call('tp_unicron_addCronJob', options);
}

Meteor.methods({
  getUserPhotos(opt) {
    const token = Meteor.users().findOne({username: opt.username});
    const options = {
      accessToken: Meteor.user().services.instagram.accessToken,
    };
    InstagramApi.users.selfRecentPhotos(options, function(err, data) {
      if (data) {
        console.log(data);
      }
      if (err) {
        console.log(err);
      }
    });
  },
});

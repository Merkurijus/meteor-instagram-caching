function addCronJob(options) {
  Meteor.call('tp_unicron_addCronJob', options);
}

Meteor.methods({
  getUserPhotos(opt) {
    const user = Meteor.users.findOne({'services.instagram.username': opt.username});
    const token = user.services.instagram.accessToken;
    const options = {
      accessToken: token,
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

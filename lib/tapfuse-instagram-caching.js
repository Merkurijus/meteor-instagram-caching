function addCronJob(options) {
  Meteor.call('tp_unicron_addCronJob', options);
}

function upsertPhotoData(data) {
  tp_instagramCache.upsert({id: data.id}, {$set: data});
}

Meteor.methods({
  startCachingUserPhotos(options) {
    options.functionName = 'tp_instagramGetUserPhotos';
    addCronJob(options);
  },
  tp_instagramGetUserPhotos(opt) {
    const user = Meteor.users.findOne({'services.instagram.username': opt.username});
    const token = user.services.instagram.accessToken;
    const options = {
      accessToken: token,
    };
    InstagramApi.users.selfRecentPhotos(options, (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        for(d of data.data.data) {
          upsertPhotoData(d);
        }
      }
    });
  },
});

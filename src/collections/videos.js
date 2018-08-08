var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(keywords) {
    this.fetch(
      {
        data: {
          q: keywords,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          videoEmbeddable: true,
          type: 'video'
        }
      }
    );
  },

  parse: function(videos) {
    console.log('We got videos!');
    return videos.items;
  }


  // PHILIPPP!!!!! OMGGG!!! http://backbonejs.org/#API-integration
  // http://backbonejs.org/#Collection-fetch
  // http://backbonejs.org/#Collection-parse
  // http://backbonejs.org/#Sync
  // https://stackoverflow.com/questions/38796670/backbone-js-setting-header-for-get-request

});

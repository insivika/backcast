var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(keyword) {
    console.log('key', window.YOUTUBE_API_KEY);
    // var dataObj = {
    //   maxResults: '5',
    //   part: 'snippet',
    //   q: keyword,
    //   key: window.YOUTUBE_API_KEY,
    //   type: ''
    // };
    var dataObj = { data: {q: keyword} };
    this.fetch(dataObj);

  },

  fetch: function(dataObj) {
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataObj,
      success: function(data) {
        console.log('fetching');

        console.log(data);

        console.log('The data has been fetched');
      },
      error: function(data) {
        console.log('Unable to fetch data', data);
      }

    });
  }

});

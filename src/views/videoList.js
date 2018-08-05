var VideoListView = Backbone.View.extend({
  // initialize: function() {
  //   this.collection.on('sync', this.render, this);
  // },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
    // this.$el.empty();
    // this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});


// var MoviesView = Backbone.View.extend({

//   initialize: function() {
//     // your code here
//     this.collection.on('sort', this.render, this);
//   },

//   render: function() {
//     this.$el.empty();
//     this.collection.forEach(this.renderMovie, this);
//   },

//   renderMovie: function(movie) {
//     var movieView = new MovieView({model: movie});
//     this.$el.append(movieView.render());
//   }

// });

var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.currentVideo = this.videos.models[0];
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
// -----------------------------------
// var AppView = Backbone.View.extend({

//   events: {
//     'click form input': 'handleClick'
//   },

//   handleClick: function(e) {
//     var field = $(e.target).val();
//     this.collection.sortByField(field);
//   },

//   render: function() {
//     new MoviesView({
//       el: this.$('#movies'),
//       collection: this.collection
//     }).render();
//   }

// });
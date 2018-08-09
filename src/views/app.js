var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.on('sync', this.setDefault, this);
    this.videos.search('surfing dog');
    this.render();
  },

  setDefault: function() {
    console.log('this vid exists', this.videos);
    this.videos.models[0].select();
    // this.collection.models[0].select()
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    console.log('what is this', this);
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
var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({collection: this.collection}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

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
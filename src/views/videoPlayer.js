var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // console.log('does a model exist?', this.model);
    // console.log('does a collection exist?', this.collection);
    // this.collection.on('select', this.render, this);
    // note to philipp: https://stackoverflow.com/questions/16823746/backbone-js-listento-vs-on
    // console.log('what is this collection?!', this.collection);
    this.model = this.collection.models[0];
    // console.log('what is this collection models?!', this.collection.models);
    this.collection.on('select', this.updateCurrentVideo, this);
    // this.model = this.collection.models[app view's current video index];
  },

  updateCurrentVideo: function(event) {
    this.model = event;
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    this.$el.html(this.template(this.model.attributes));

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

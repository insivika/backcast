var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // note to philipp: https://stackoverflow.com/questions/16823746/backbone-js-listento-vs-on
    this.collection.on('select', this.updateCurrentVideo, this);
  },

  updateCurrentVideo: function(event) {
    this.model = event;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

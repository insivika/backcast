var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // console.log('does a model exist?', this.model);
    // console.log('does a collection exist?', this.collection);
    this.collection.on('select', this.render, this);
    this.model = this.collection.models[0];
    // this.model = this.collection.models[app view's current video index];
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    this.$el.html(this.template(this.model.attributes));

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

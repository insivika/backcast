var SearchView = Backbone.View.extend({
  events: {
    'click button': 'clickSearch',
    'keyup input': 'onKeyUp'
  },

  onKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.clickSearch();
    }
  },

  clickSearch: function() {
    this.collection.search(this.$('input').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});

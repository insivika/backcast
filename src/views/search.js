var SearchView = Backbone.View.extend({

  initialize: function() {

    this.debouncedSearch = _.debounce(this.justSearch, 500);

  },

  events: {
    'keyup input': 'onKeyUp',
    'click button': 'clickSearch'
  },

  justSearch: function() {
    this.collection.search(this.$('input').val());
  },

  clickSearch: function() {
    this.justSearch();
    this.clearInput();
  },

  clearInput: function() {
    this.$('input').val('');
  },

  onKeyUp: function(e) {
    if (e.keyCode !== 13) {
      this.debouncedSearch();
    } else {
      this.justSearch();
      this.clearInput();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});

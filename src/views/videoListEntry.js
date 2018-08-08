var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'onSelect'
  },

  onSelect: function(e) {
    // console.log('e exists', this.$el.index());
    // console.log('this.currentVideo exists', currentVideoIndex);
    this.model.select();
  },

  render: function() {
    // console.log('does this.model exist?', this.model);
    this.$el.html(this.template(this.model.attributes));

    // console.log('el', this.el);
    // console.log('$el', this.$el);
    return this.el;
  },

  template: templateURL('src/templates/videoListEntry.html'),


});

// var MovieView = Backbone.View.extend({

//   template: _.template('<div class="movie"> \
//                           <div class="like"> \
//                             <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
//                           </div> \
//                           <span class="title"><%- title %></span> \
//                           <span class="year">(<%- year %>)</span> \
//                           <div class="rating">Fan rating: <%- rating %> of 10</div> \
//                         </div>'),

//   initialize: function() {
//     this.model.on('change:like', this.render, this);
//   },

//   events: {
//     'click button': 'handleClick'
//   },

//   handleClick: function() {
//     // your code here
//     this.model.toggleLike();
//   },

//   render: function() {
//     this.$el.html(this.template(this.model.attributes));
//     return this.$el;
//   }

// });
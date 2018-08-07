var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'onSelect'
  },

  onSelect: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));

    // console.log('attr', this.model.attributes);
    // console.log('this template', this.model.attributes);
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
var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  template: templateURL('src/templates/videoList.html'),

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // console.log('does this exist?', this.$('.video-list'));
    this.$('.video-list').html(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).render();
      })
    );

    return this;
  },

});


// var MoviesView = Backbone.View.extend({

//   initialize: function() {
//     // your code here
//     this.collection.on('sort', this.render, this);
//   },

//   render: function() {
//     this.$el.empty();
//     this.collection.forEach(this.renderMovie, this);
//   },

//   renderMovie: function(movie) {
//     var movieView = new MovieView({model: movie});
//     this.$el.append(movieView.render());
//   }

// });

// -------------------------

// var CommentsView = Backbone.View.extend({
//   /* Again, we use our initialize function to register listeners.
//    * In this case, we want to know when votecounts of the models
//    * in our collection changes. */
//   initialize: function() {
//     /* Backbone events bubble up through collections,
//      * so monitoring a model in a collection is easy! */
//     this.collection.on('change:votes', this.render, this);
//   },

//   // Now we must render the collection:
//   render: function() {
//     var html = [
//       '<ul>',
//       '</ul>',
//       '<span class="votes">',
//         // The total number of votes
//         this.collection.reduce(function(memo, comment) {
//           return memo + comment.get('votes');
//         }, 0),
//       '</span>'
//     ].join('');

//     this.$el.html(html);
//     /* Render each model in the collection as a list item (<li>).
//      * Remember, we have the underscore functions: */
//     this.$el.find('ul').append(this.collection.map(function(comment) {
//       // YOUR CODE HERE
//       return new CommentView({model: comment}).render();
//     }));

//     return this.$el;
//   }
// });

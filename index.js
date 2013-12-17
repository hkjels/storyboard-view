
/**
 * Module dependencies.
 */

var StoryView = require('story-view')
  , each = require('each')
  , domify = require('domify')
  , board = domify(require('./board.html'));

/**
 * Expose `StoryboardView`.
 */

module.exports = StoryboardView;

/**
 * StoryboardView.
 */

function StoryboardView(stories) {
  var self = this;
  this.el = board;
  each(stories, function(i, story) {
    self.addStory(story);
  });
}


StoryboardView.prototype.addStory = function(story) {
  var el = this.el.querySelector('.stories')
    , view = new StoryView(story);
  el.appendChild(view.el);
};



/**
 * Module dependencies.
 */

var StoryView = require('story-view')
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
  this.el = board;
  stories.forEach(function(story) {
    this.addStory(story);
  }.bind(this));
}


StoryboardView.prototype.addStory = function(story) {
  var el = this.el.querySelector('.stories')
    , view = new StoryView(story);
  el.appendChild(view.el);
};


import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('story');
  },

  actions: {
    destroyStory(story) {
      story.destroyRecord();
      this.transitionTo('index');
    }
  }
});

const SelectView = Backbone.Marionette.ItemView.extend({
  template: function(args) {
    return Tyto.TemplateStore.select(args);
  },
  tagName: 'div',
  className: function() {
    return this.domAttributes.VIEW_CLASS;
  },
  ui: {
    loadCreateIdInp : '.tyto-boardid-input',
    loadCreateIdBtn : '.tyto-boardid-button'
  },
  events: {
    'click @ui.loadCreateIdBtn' : 'loadCreateId',
  },
  domAttributes: {
    VIEW_CLASS: 'tyto-select'
  },
  collectionEvents: {
    'all': 'render'
  },
  loadCreateId: function() {
    let id = this.ui.loadCreateIdInp.val();
    Tyto.navigate('board/' + id, {
      trigger: true
    });
  }
});

export default SelectView;

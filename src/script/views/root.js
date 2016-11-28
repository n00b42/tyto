const RootLayout = Backbone.Marionette.LayoutView.extend({
  el     : '#tyto-app',
  regions: {
    Content: '#tyto-content'
  }
});

export default RootLayout;

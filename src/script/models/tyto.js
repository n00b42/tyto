const Models = function(Models, App, Backbone) {
  
  Models.URL = "/";

  Models.Board = Backbone.Model.extend({
    url: function() {
      return Models.URL + "boards.php?id=" + this.id;
    },
    defaults: {
      title: 'New Board'
    }
  });
  
  Models.Column = Backbone.Model.extend({
    url: function() {
      return this.id ? Models.URL + "columns.php?boardId=" + this.attributes.boardId + "&id=" + this.id : Models.URL + "columns.php?boardId=" + this.attributes.boardId;
    },
    defaults: {
      title  : 'New Column',
      ordinal: 1
    }
  });
  Models.ColumnCollection = Backbone.Collection.extend({
    model       : Models.Column,
    url: function() {
      return Models.URL + "columns.php?boardId=" + this.boardId;
    }
  });
  
  Models.Task = Backbone.Model.extend({
    url: function() {
      return this.id ? Models.URL + "tasks.php?boardId=" + this.attributes.boardId + "&id=" + this.id : Models.URL + "tasks.php?boardId=" + this.attributes.boardId;
    },
    defaults: {
      title      : 'New Todo',
      description: 'Making this work!',
      color      : 'yellow',
      timeSpent  : {
        hours  : 0,
        minutes: 0,
        seconds: 0
      }
    }
  });

  Models.TaskCollection = Backbone.Collection.extend({
    model       : Models.Task,
    url: function() {
      return Models.URL + "tasks.php?boardId=" + this.boardId;
    }
  });

};

export default Models;

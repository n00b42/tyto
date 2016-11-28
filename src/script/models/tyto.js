const Models = function(Models, App, Backbone) {
  
  Models.Board = Backbone.Model.extend({
    url: function() {
      return this.id ? "boards.php?id=" + this.id : "boards.php";
    },
    defaults: {
      title: 'New Board'
    }
  });
  
  Models.Column = Backbone.Model.extend({
    url: function() {
      return this.id ? "columns.php?id=" + this.id : "columns.php";
    },
    defaults: {
      title  : 'New Column',
      ordinal: 1
    }
  });
  Models.ColumnCollection = Backbone.Collection.extend({
    model       : Models.Column,
    url: function() {
      return "columns.php?boardId=" + this.boardId;
    }
  });
  
  Models.Task = Backbone.Model.extend({
    url: function() {
      return this.id ? "tasks.php?id=" + this.id : "tasks.php";
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
      return "tasks.php?boardId=" + this.boardId;
    }
  });

};

export default Models;

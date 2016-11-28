/**
  * Global App Controller
*/
const AppCtrl = function(AppCtrl, App, Backbone, Marionette) {
  AppCtrl.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'board/:board'                   : 'initBoard',
      'board/:board/task/:task'        : 'showEditView',
      'board/:board/task/:task?:params': 'showEditView',
      '*path'                          : 'showSelectView'
    }
  });
  AppCtrl.Controller = Marionette.Controller.extend({
    start: function() {
    },
    showSelectView: function() {
      Tyto.SelectView = new App.Views.Select({});
      Tyto.RootView.showChildView('Content', Tyto.SelectView);
    },
    initBoard: function(id) {
      Tyto.RootView.$el.addClass(Tyto.LOADING_CLASS);
      
      let parentThis = this;

      let model = new Tyto.Models.Board({id: id});
      model.fetch()
      // Board exists
      .done( function() {
        Tyto.ActiveBoard = model;
        
        let columnsModel = new Tyto.Models.ColumnCollection();
        columnsModel.boardId = id;
        let tasksModel = new Tyto.Models.TaskCollection();
        tasksModel.boardId = id;
        
        $.when(columnsModel.fetch(),tasksModel.fetch())
        .done(function() {
          Tyto.ActiveCols.reset( columnsModel.where({ boardId: model.id }) );
          Tyto.ActiveTasks.reset( tasksModel.where({ boardId: model.id }) );
	  parentThis.showBoardView();
	});
      })
      // Board does not exist
      // TODO: other failure sources (connection failed ...), check for 404!
      .error( function() {
        let newBoard = new Tyto.Models.Board({id: id, title: 'Tutorial Title (Change Me)'});
        newBoard.save(null, {type:'POST'})
        .done(function() {
          Tyto.ActiveBoard = newBoard;
          
          let columnsModel = new Tyto.Models.ColumnCollection();
          columnsModel.boardId = id;
          let tasksModel = new Tyto.Models.TaskCollection();
          tasksModel.boardId = id;
          
          $.when(columnsModel.fetch(),tasksModel.fetch())
          .done(function() {
            Tyto.ActiveCols.reset( columnsModel.where({ boardId: newBoard.id }) );
            Tyto.ActiveTasks.reset( tasksModel.where({ boardId: newBoard.id }) );

            $.getJSON(Tyto.INTRO_JSON_SRC, function(data) {
              for (var prop in data) {
                let entity;
                if(data.hasOwnProperty(prop) && (prop.indexOf('tyto--column-') !== -1)) {
                  entity = JSON.parse(data[prop]);
                  entity.boardId = newBoard.id;
                  Tyto.ActiveCols.create(entity, {type:'POST'});
                }
                if(data.hasOwnProperty(prop) && (prop.indexOf('tyto--task-') !== -1)) {
                  entity = JSON.parse(data[prop]);
                  entity.boardId = newBoard.id;
                  Tyto.ActiveTasks.create(entity, {type:'POST'});
                }
              }
              parentThis.showBoardView();
              Tyto.RootView.$el.removeClass(Tyto.LOADING_CLASS);
            }); // - getJSON          
	  }); // - done
        }); // - done
      }); // - error
      
    },
    showBoardView: function() {
      let model;
      model = Tyto.ActiveBoard;
      Tyto.BoardView = new App.Views.Board({
        model: model,
        collection: Tyto.ActiveCols,
        options: {
          tasks: Tyto.ActiveTasks
        }
      });
      App.RootView.showChildView('Content', Tyto.BoardView);
    },
    showEditView: function(bId, tId, params) {
      let taskToEdit;
      const board = Tyto.ActiveBoard;
      const columns = Tyto.ActiveCols.where({ boardId: bId });
      let parentColumn;
      let isNew = false;
      if (params) {
        let qS = Tyto.Utils.processQueryString(params);
        if (qS.isFresh === 'true') {
          isNew = true;
          taskToEdit = Tyto.TempTask = new Tyto.Models.Task({
            boardId: bId,
            id     : tId
          });
        }
      } else {
        taskToEdit = Tyto.ActiveTasks.get(tId);
      }
      if (taskToEdit && board) {
        Tyto.EditView = new App.Views.Edit({
          model  : taskToEdit,
          board  : board,
          columns: columns,
          isNew  : isNew
        });
        App.RootView.showChildView('Content', Tyto.EditView);
      } else if (board) {
        Tyto.navigate('/board/' + board.id, true);
      } else {
        Tyto.navigate('/', true);
      }
    }
  });
};

export default AppCtrl;

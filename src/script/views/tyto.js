import TaskView from './task';
import BoardView from './board';
import ColumnView from './column';
import EditView from './edit';
import RootView from './root';
import SelectView from './select';
import TimeModalView from './time';

const Views = function(Views, App, Backbone) {
  Views.Root         = RootView;
  Views.Task         = TaskView;
  Views.Column       = ColumnView;
  Views.Board        = BoardView;
  Views.Edit         = EditView;
  Views.Select       = SelectView;
  Views.TimeModal    = TimeModalView;
};

export default Views;

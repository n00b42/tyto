module.exports = { "board": function(tyto) {
var __t, __p = '';
__p += '<div class="tyto-board__options"><button class="mdl-button mdl-js-button mdl-button--icon tyto-board__menu-btn " id="tyto-board__menu" title="Board options"><i class="material-icons">more_vert</i></button><ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect tyto-board__menu mdl-menu--bottom-right" for="tyto-board__menu"><li class="tyto-board__back-home mdl-menu__item">Back</li><li class="tyto-board__wipe-board mdl-menu__item">Wipe board</li><li class="tyto-board__delete-board mdl-menu__item">Delete board</li><li class="tyto-board__email-board mdl-menu__item">Email board</li><a class="tyto-board__emailer" style="display: none"></a></ul></div><div class="tyto-board__details"><h1 class="tyto-board__title bg--white" contenteditable="true">' +
((__t = ( tyto.title )) == null ? '' : __t) +
'</h1></div><div class="tyto-board__columns"></div><div class="tyto-board__actions mdl-button--fab_flinger-container"><button class="tyto-board__add-entity mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">add</i></button><div class="mdl-button--fab_flinger-options"><button class="tyto-board__super-add mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" title="Add task"><i class="material-icons">description</i><i class="material-icons sub">add</i></button><button class="tyto-board__add-column mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" title="Add column"><i class="material-icons">view_column</i><i class="material-icons sub">add</i></button></div></div><div class="tyto-board__bloomer"></div>';
return __p
},"column": function(tyto) {
var __t, __p = '';
__p += '<div class="tyto-column__content"><div class="tyto-column__actions"><i class="tyto-column__mover material-icons does--fade" title="Move column">open_with</i><h6 class="tyto-column__title input--fade bg--white" contenteditable="true" title="Column title">' +
((__t = ( tyto.title )) == null ? '' : __t) +
'</h6><button class="mdl-button mdl-js-button mdl-button--icon tyto-column__menu-btn does--fade" id="column--' +
((__t = ( tyto.id )) == null ? '' : __t) +
'--menu" title="Column options"><i class="material-icons">more_vert</i></button><ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect tyto-column__menu mdl-menu--bottom-right" for="column--' +
((__t = ( tyto.id )) == null ? '' : __t) +
'--menu"><li class="tyto-column__delete-column mdl-menu__item" title="Delete column">Delete</li><li class="tyto-column__add-task mdl-menu__item" title="Add task">Add task</li></ul></div><div class="tyto-column__tasks"></div><div class="tyto-column__action"><i class="material-icons tyto-column__add-task does--fade" title="Add task">add</i></div></div>';
return __p
},"edit": function(tyto) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="tyto-edit__nav">';
 if (tyto.isNew) { ;
__p += '<button class="tyto-edit__save mdl-button mdl-js-button mdl-js-ripple-effect">Done</button><a class="tyto-edit__cancel mdl-button mdl-js-button mdl-js-ripple-effect" href="#board/' +
((__t = ( tyto.board.id )) == null ? '' : __t) +
'">Cancel</a>';
 } else { ;
__p += '<a class="tyto-edit__back mdl-button mdl-js-button mdl-js-ripple-effect" href="#board/' +
((__t = ( tyto.board.id )) == null ? '' : __t) +
'">Return to board</a>';
 } ;
__p += '</div><div class="tyto-edit__content"><div class="tyto-edit__details has--bottom-margin"><h1 class="tyto-edit__task-title" contenteditable="true" data-model-prop="title" title="Task title">' +
((__t = ( tyto.title )) == null ? '' : __t) +
'</h1><div class="tyto-edit__task-description" title="Task description">' +
((__t = ( tyto.description )) == null ? '' : __t) +
'</div><div class="tyto-task__edit-wrapper"><textarea class="tyto-edit__edit-description is--hidden" data-model-prop="description"></textarea><div class="tyto-task__suggestions tyto-suggestions__container mdl-shadow--2dp is--hidden"></div></div></div><div class="tyto-edit__details-footer tx--right has--bottom-margin"><div class="tyto-time tyto-edit__task-time" title="Time spent"><i class="tyto-time__icon material-icons">schedule</i><span class="tyto-edit__task-time__hours tyto-time__hours">' +
((__t = ( tyto.timeSpent.hours )) == null ? '' : __t) +
'h</span><span class="tyto-edit__task-time__minutes tyto-time__minutes">' +
((__t = ( tyto.timeSpent.minutes )) == null ? '' : __t) +
'm</span></div><div class="tyto-edit__task-column">';
 if (tyto.selectedColumn) { ;
__p += '\n' +
((__t = ( tyto.selectedColumn.attributes.title )) == null ? '' : __t) +
'\n';
 } ;
__p += '</div></div><div class="tyto-edit__actions">';
 if (tyto.columns.length > 0 ) { ;
__p += '<button class="mdl-button mdl-js-button mdl-button--icon tyto-edit__column-select__menu-btn " id="column-select" title="Select column"><i class="material-icons">view_column</i></button><ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect tyto-edit__column-select__menu mdl-menu--bottom-right" for="column-select">';
 _.forEach(tyto.columns, function(column) { ;
__p += '\n';
 if (!tyto.isNew) { var activeClass = (column.attributes.id === tyto.columnId) ? 'is--selected': '' } ;
__p += '<li class="mdl-menu__item tyto-edit__column-select__menu-option ' +
((__t = ( activeClass )) == null ? '' : __t) +
'" data-column-id="' +
((__t = ( column.id )) == null ? '' : __t) +
'">' +
((__t = ( column.attributes.title )) == null ? '' : __t) +
'</li>';
 }); ;
__p += '</ul>';
 } ;
__p += '<button class="mdl-button mdl-js-button mdl-button--icon tyto-edit__color-select__menu-btn " id="color-select" title="Change color"><i class="material-icons">color_lens</i></button><ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect tyto-edit__color-select__menu mdl-menu--bottom-right" for="color-select">';
 _.forEach(tyto.colors, function(col) { ;
__p += '\n';
 var activeColor = (col === tyto.color) ? 'is--selected': '' ;
__p += '<li class="mdl-menu__item tyto-edit__color-select__menu-option bg--' +
((__t = ( col )) == null ? '' : __t) +
' hv--' +
((__t = ( col )) == null ? '' : __t) +
' ' +
((__t = ( tyto.activeColor )) == null ? '' : __t) +
'" data-color="' +
((__t = ( col )) == null ? '' : __t) +
'" title="' +
((__t = ( col )) == null ? '' : __t) +
'"></li>';
 }); ;
__p += '</ul><button class="tyto-edit__track mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" title="Start tracking"><i class="material-icons">schedule</i></button></div></div>';
return __p
},"filterList": function(tyto) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="tyto-suggestions__list">';
 if (tyto.models.length > 0) { ;
__p += '\n';
 _.each(tyto.models, function(model) { ;
__p += '<li class="tyto-suggestions__item" data-type="Tasks" data-model-id="' +
((__t = ( model.attributes.id )) == null ? '' : __t) +
'">' +
((__t = ( model.attributes.title )) == null ? '' : __t) +
'</li>';
 }) ;
__p += '\n';
 } else { ;
__p += '<li class="tyto-suggestions__item">No suggestions available...</li>';
 } ;
__p += '</ul>';
return __p
},"select": function(tyto) {
var __t, __p = '';
__p += '<p><span>To start, enter the id of an existing or a new board:</span></p><p><input class="tyto-boardid-input"/></p><p><button class="tyto-boardid-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Go</button></p>';
return __p
},"task": function(tyto) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="tyto-task__content"><div class="tyto-task__header tx--center"><i class="material-icons tyto-task__mover does--fade" title="Move task">open_with</i><h2 class="tyto-task__title" contenteditable="true" title="Task title">' +
((__t = ( tyto.title )) == null ? '' : __t) +
'</h2><button class="mdl-button mdl-js-button mdl-button--icon tyto-task__menu-btn does--fade" id="task--' +
((__t = ( tyto.id )) == null ? '' : __t) +
'--menu" title="Task options"><i class="material-icons">more_vert</i></button><ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect tyto-task__menu mdl-menu--bottom-right" for="task--' +
((__t = ( tyto.id )) == null ? '' : __t) +
'--menu"><li class="mdl-menu__item tyto-task__delete-task" title="Delete task">Delete</li><li class="mdl-menu__item tyto-task__edit-task" title="Edit task">Edit</li><li class="mdl-menu__item tyto-task__track-task" title="Track task time">Track</li></ul></div><div class="mdl-card__supporting-text tyto-task__description" title="Task description">' +
((__t = ( tyto.description )) == null ? '' : __t) +
'</div><div class="tyto-task__edit-wrapper"><textarea class="tyto-task__description-edit is--hidden"></textarea><div class="tyto-task__suggestions tyto-suggestions__container mdl-shadow--2dp is--hidden"></div></div>';
 var hidden = (tyto.timeSpent.hours > 0 || tyto.timeSpent.minutes > 0) ? '': 'is--hidden'; ;
__p += '<div class="tyto-time tyto-task__time" title="Time spent"><i class="tyto-time__icon material-icons">schedule</i><span class="tyto-task__time__hours tyto-time__hours">' +
((__t = ( tyto.timeSpent.hours )) == null ? '' : __t) +
'h</span><span class="tyto-task__time__minutes tyto-time__minutes">' +
((__t = ( tyto.timeSpent.minutes )) == null ? '' : __t) +
'm</span></div></div>';
return __p
},"timeModal": function(tyto) {
var __t, __p = '';
__p += '<div class="tyto-time-modal__content mdl-card mdl-shadow--4dp"><div class="tyto-time-modal__content-title mdl-card__title"><h2 class="mdl-card__title-text">' +
((__t = ( tyto.title )) == null ? '' : __t) +
'</h2></div><div class="tyto-time-modal__content-text tx--center mdl-card__supporting-text"><p class="tyto-time-modal__content-description"></p><h1 class="tyto-time-modal__timer-lbl"><span class="tyto-time-modal__timer-lbl-hours"></span><span>:</span><span class="tyto-time-modal__timer-lbl-minutes"></span><span>:</span><span class="tyto-time-modal__timer-lbl-seconds"></span></h1></div><div class="tyto-time-modal__actions mdl-card__actions mdl-card--border tx--center"><button class="tyto-time-modal__timer-reset mdl-button mdl-js-button mdl-button--icon mdl-button--accent mdl-js-ripple-effect" title="Reset time"><i class="material-icons">restore</i></button><button class="tyto-time-modal__timer mdl-button mdl-js-button mdl-button--icon mdl-button--accent mdl-js-ripple-effect" title="Stop/Start tracking"><i class="tyto-time-modal__timer-icon material-icons">play_arrow</i></button><button class="tyto-time-modal__close mdl-button mdl-js-button mdl-button--icon mdl-button--accent mdl-js-ripple-effect" title="Exit tracking"><i class="material-icons">clear</i></button></div></div>';
return __p
} };
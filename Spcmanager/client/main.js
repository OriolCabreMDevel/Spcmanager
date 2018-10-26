import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Notes } from '../lib/collections.js';
import './main.html';

Template.body.helpers({
  /*notes[

      {text:"note 1"},
      {text:"note 2"},
      {text:"note 3"}

  ]*/
  notes(){
    return Notes.find({});
  }
});

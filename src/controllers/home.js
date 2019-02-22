const path = require('path');
const fs = require('fs-extra');

const ctrl = {};

const Task = require('../models/vistas')

const { Vistas } = require('../models');



ctrl.index = async (req, res) => {
    const vistas  = await Task.find();
    res.render('uno', {
        vistas
    });
};

ctrl.add = async (req, res) => {
    const tarea = new Task(req.body);
    await tarea.save();
    res.redirect('/');
};

ctrl.delete = async (req, res) => {
    const { id } = req.params;
    await Vistas.remove({_id: id});
    res.redirect('/');

};

ctrl.article = async (req, res) => {
    const { id } = req.params;
    const vista = await Task.findById(id);
    vista.views = vista.views + 1;
    await vista.save();
    res.render('article', {
      vista
    });
  };  






module.exports = ctrl;
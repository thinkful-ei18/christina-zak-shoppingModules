'use strict';
/* global store, Item, cuid */

const store = (function () {
  
  const findById = function(id) {
    console.log(id);
    return this.items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (e) {
      console.log(`Cannot add item: ${e.message}`);
    }
  };

  const findAndToggleCheck = function(id) {
    const found = this.findById(id);
    found.checked = !found.checked;
  };

  const findAndUpdateName = function(id, newName) {
    console.log(this);
    try {
      Item.validateName(newName);
      // console.log(findById(id));
      this.findById(id).name = newName;
    } catch (e) {
      console.log(`Cannot update name: ${e.message}`);
    }
  };

  const findAndDelete = function(id) {
    console.log(this);
    this.items = this.items.filter(item => item.id !== id);
    console.log(this.items);
  };

  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById,
    addItem,
    findAndToggleCheck,
    findAndUpdateName,
    findAndDelete,
    
  };

}());

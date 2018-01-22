'use strict';

const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    this.items.find(id);
  }

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (e) {
        console.log(`Cannot add item: ${e.message}`);
    }
  }

  const findAndToggleCheck = function(id) {
    const found = this.findById(id);
    found.checked = !found.checked;
  }

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      findById(id).name = newName;
    } catch (e) {
      console.log(`Cannot update name: ${e.message}`);
    }
  }

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id != id);
    console.log(this.items);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleCheck,
    findAndUpdateName,
    findAndDelete,
    
  };

}());

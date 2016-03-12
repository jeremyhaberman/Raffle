Prize = function(item, price, name, numWinners, description, value, donator) {
    var self = this;

    if(!item || typeof(item) !== 'number') {
        throw 'item must not be undefined and a number ';
    }
    if(!price || typeof(price) !== 'number') {
        throw 'price must not be undefined and a number';
    }
    if(!name || typeof(name) !== 'string') {
        throw 'name must not be undefined and a string';
    }


    self.item = item;
    self.price = price
    self.name = name;
    self.description = description || "";
    self.value = value || undefined;
    self.donator = donator || "";
    self.numWinners = numWinners || 1;
    self.tickets = [];
};
Order = function(name, phone, email, teacher) {
    var self = this;

    if(!name || name.trim() ==='') {
        throw 'name must not be undefined or empty string';
    }

    self.name = name;
    self.phone = phone || "";
    self.email = email || "";
    self.teacher = teacher || "";
    self.tickets = [];
    self.grandTotal = 0;
    self.deleted = false;
    self.createdDateTime = new Date();
    self.createdBy = Meteor.user().profile.name;
    self.deletedBy = "";
};
Meteor.publish('recipes', function(){
               return Reciepes.find({author: this.userId});
});

Meteor.publish('recipeSingle', function(id){
              
               return Reciepes.find({_id: id});
});
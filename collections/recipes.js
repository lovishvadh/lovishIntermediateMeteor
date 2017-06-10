SimpleSchema.extendOptions(['autoform']);
import  SimpleSchema  from 'simpl-schema';
Reciepes = new Mongo.Collection('recipes');

Reciepes.allow({
    insert: function(userId,doc) {
        return !!userId;
    },
    update: function(userId,doc) {
        return !!userId;
    } 
});



ReciepeSchema = new SimpleSchema({
    name:{
        type: String,
        label: "Name"
        },
    desc:{
        type: String,
        label: "Description"
        },
    ingredients: {
        type: Array
     },
     "ingredients.$": Object,
     "ingredients.$.name": String,
     "ingredients.$.amount": String,
     inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author:{
        type:String,
        label: "Author",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt:{
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
    });
Reciepes.attachSchema(ReciepeSchema);

Meteor.methods({
   toggleMenuItem : function(id,currentState){
       Reciepes.update(id,{
           $set: {
               inMenu: !currentState
           }
       });
   },
    DeleteMenuItem : function(id){
        Reciepes.remove(id);
    }
});

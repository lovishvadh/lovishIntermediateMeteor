Template.RecipeSingle.onCreated( function() {
   var self = this;
    
    self.autorun( function(){
        var id = FlowRouter.getParam('_id');
  self.subscribe('recipeSingle',id);
})
});

Template.RecipeSingle.helpers({
   recipe: () => {
       var id = FlowRouter.getParam('_id');
       return Reciepes.findOne({_id: id});
   } 
});
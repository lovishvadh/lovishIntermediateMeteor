Accounts.onLogin(function(){
    FlowRouter.go('recipebook');
});

Accounts.onLogout(function(){
   FlowRouter.go('home'); 
});

FlowRouter.triggers.enter([function(context, redirect){
                     if(!Meteor.userId()){
                         FlowRouter.go('home');
                    } }]);
FlowRouter.route('/',{
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('recipebook');
        }
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/recipe-book',{
    name: 'recipebook',
    action() {
         GAnalytics.pageview();
        BlazeLayout.render('mainLayout',{main:'Recipes'});
    }
});

FlowRouter.route('/recipe/:_id',{
    name: 'recipe',
    action() {
         GAnalytics.pageview();
        BlazeLayout.render('mainLayout',{main:'RecipeSingle'});
    }
});

FlowRouter.route('/menu',{
    name: 'menu',
    action() {
         GAnalytics.pageview();
        BlazeLayout.render('mainLayout',{main:'Menu'});
    }
});

FlowRouter.route('/shopping-list',{
    name: 'shoppingList',
    action() {
         GAnalytics.pageview();
        BlazeLayout.render('mainLayout',{main:'shoppingList'});
    }
});
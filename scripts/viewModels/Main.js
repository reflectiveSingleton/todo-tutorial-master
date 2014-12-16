define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Main',
      router: {
        routes: [
          {
            route: '/',
            title: 'Todo Application Tutorial',
            controller: function() {
              // show our login page here
              this.$outlet('mainView', 'login-page');
            }
          },
          {
            route: '/todo',
            title: 'Todo List',
            controller: function() {
              // show our todo list page here
              this.$outlet('mainView', 'todo-page');
            }
          }
        ]
      },
      initialize: function() {
        // Create reference to the viewModel we will use in the callback
        var self = this;

        // The handler which receives the 'userLogin' command
        this.$namespace.command.handler('userLogin', function(userName) {
          self.$router.setState('/todo');
        });
      }
    });
  }
);
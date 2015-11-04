


angular
    .module('app.routes', [])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRoutes]);

/**
 * Create all the application routes
 */
function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    
    // pretty Angular URLs
    /*$locationProvider.html5Mode(true);*/

    // the route people are sent to when they are lost
    // the home page in this case
    $urlRouterProvider.otherwise('/business-home/');

    // create our routes, set the view, pull in the controller
    $stateProvider
     
        // shop page
        .state('venue', {
            url         : '/venue/{name}',
            templateUrl : 'javascript/templates/pages/venue.html',
            controller  : 'venueController as venue'
        })

        // product page (a child of shop)
        .state('packages', {
            url         : '/packages/{id}',
            templateUrl : 'javascript/templates/pages/packages.html',
            controller  : 'packageController as package'
        })

        // login/signup page
        .state('businessLogin', {
            url: "/business-login",
            views: {
                "contentArea": { templateUrl: "javascript/templates/pages/login/vendor-login.html" },
            },
            controller  : 'AuthenticateController as authenticate'
        })

        .state('businessRegistration', {
           url: "/business-registration",
           views: {
                  "contentArea": { templateUrl: "javascript/templates/pages/vendor-registration.html" },
            },
            controller  : 'AuthenticateController as authenticate'
        })


        // profile page
        .state('dashboard', {
            url         : '/dashboard/{user_name}',
            templateUrl : 'javascript/components/dashboard/dashboard.html',
            controller  : 'dashboardController as dashboard'
        })

        .state('profile', {
            url         : '/profile/{user_name}',
            templateUrl : 'javascript/components/profile/profile.html',
            controller  : 'profileController as userHome'
        })

        // checkout page
        .state('checkout', {
            url         : '/checkout/{id}',
            templateUrl : 'javascript/components/checkout/checkout.html',
            controller  : 'CheckoutController as checkout'
        })

        // checkout page
        .state('admin', {
            url         : '/admin',
            templateUrl : 'javascript/components/admin/admin.html',
            controller  : 'AdminController as admin'
        })

        .state('businessHome', {
            url: "/business-home",
                views: {
                    "contentArea": { templateUrl: "javascript/templates/pages/vendorHome/vendor-home.html" },
                },
            controller  : 'businessController as business'

        })

        

       

        .state('businessHome.account', {
            url: "/",
                views: {
                    "panel": { templateUrl: "javascript/templates/pages/vendorHome/vendor-account.html" },
                }
        })

        .state('businessHome.businesses', {
            url: "/businesses/",
                views: {
                    "panel": { templateUrl: "javascript/templates/pages/vendorHome/vendor-businesses.html" },
                }
        })

        .state('businessHome.inbox', {
            url: "/inbox/",
                views: {
                    "panel": { templateUrl: "javascript/templates/pages/vendorHome/vendor-inbox.html" },
                }
        })

        .state('businessHome.orders', {
            url: "/orders/",
                views: {
                    "panel": { templateUrl: "javascript/templates/pages/vendorHome/vendor-orders.html" },
                }
        })

        .state('businessHome.calendar', {
            url: "/calendar/",
                views: {
                    "panel": { templateUrl: "javascript/templates/pages/vendorHome/vendor-calendar.html" },
                }
        })

        .state('businessHome.help', {
            url: "/help/",
                views: {
                    "panel": { templateUrl: "javascript/templates/pages/vendorHome/vendor-help.html" },
                }
        });
}





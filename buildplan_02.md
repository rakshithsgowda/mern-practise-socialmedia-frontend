# After Successfull login

## we get ** token and user**

- save it somehwere--> so when the reload happens or whenthe browser page is closed.
- we can still be logged in

#### save it in local storage

- first we need to implement global context so as to get the global storage .
  \*we can save user info and some other features there.

- for glbal storgae we need 'redux or context be implemented.

## Creating context

- wrap the entire app with the context
- this makes the token and user info available on all the pages and requests
- then we can access the contexts state and values and functions to update the state of anything required within the context

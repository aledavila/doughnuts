# Practicing AJAX

You're about to write a lot of AJAX-backed JavaScript using jQuery for our little Doughnut Shop app.

Make use of the fantastic and delicious https://api.doughnuts.ga API.  Your task is to use your JS skills to list out all the doughnuts in our database and get our form working so we can add more.

> Note: Keep in mind, this API doesn't persist (so that other students can use it, too), but it does _act_ like it. When you create a new doughnut, it'll show you results as if that doughnut was persisted. Make use of it!

## Exercise

#### Requirements

- Implement a jQuery AJAX client for a simple REST service
- Add new data to an existing API resource from your client
- Bonus: Build an application that uses AJAX to update a client
- Bonus: Destroy an existing API resource from your client

#### Deliverable

Make a list of existing doughnuts underneath the form, make the form work, and then, build your app to add to the list of donuts - using the information from newly created donuts - without refreshing the page. 

<img width="752" src="https://cloud.githubusercontent.com/assets/25366/9149279/bc93cd02-3d57-11e5-9f03-1e19d0097fd2.png">

#### Bonus

* Add links that will show a single doughnut in a modal
* Add links that will also delete a doughnut from the page (Remember that the data does not persist, so refreshing the page will bring it back, but let's fake it and remove it from the page for now)
* Add the ability to update a doughnut. This is a little tougher to pull off in regards to the UI

#### Super Super Bonus

* Create your own doughnut API using your Express application and a MongoDB database

## Additional Resources

- [The Official Doughnut API](https://www.doughnuts.ga/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)

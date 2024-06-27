React-Dev 🚀

<!-- //Food Ordering App -->
<!-- /\*

- -Header
  -logo
  -nav-items --- Home, About Us , Constact Us, Cart
- -Body
  -search
  -rest-card
  -rest-details---- rest-name, cuisine, rating
- -Footer
  -copyright
  -links
  -company-name
  \*/ -->
The project is implemented with some amazing features:
- It uses Parcel behind the Scene. which provide some amazing features like
      - bundling
      - hot module replacement
      - creates local server
      - minification, to make production ready application
      - Error Handling(better error look)
      - Tree shaking - to remove unused code
      - automatic page reloading
- Components break-up.
- Component Reusability
- Routing
- Breaks the CORS
- optimizing the app through,
     - single responsibility principle
     - custom hooks
     - lazy load
- uses the Shimmer effect to show while the data is being fetched.

Here is project built in react without using a some amazing features of react 16 and ES6, it is robust webapp containing most of the amazing react features such as, Single Page Application, Hooks, Custom Hooks, follow a Single Responsibility Principle, lazy Loading aka code Splitting and uses parcel behind the scenes. 

The web app is about ordering food online, where there are restaurant cards and each card represent a single resataurant, on clicking the restaurant page redirects to the single component showing the list of available food items to deliver. In it I implemented Fetching of live data from swiggy API, and break the Cross-Origin Resource Sharing with CORS chrome Extention, It implements some amazing feature of code reusablity, implemented custom hooks, to seperate the logic of Fetching data from API. 

It has Routing features to route through different components, giving an impression of multipage but achieving Single page functionality, built on good industry followed practices.






how to resolve git error:

Error-1
Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.

Answer-https://stackoverflow.com/questions/38004148/another-git-process-seems-to-be-running-in-this-repository

Error-2
LF will be replaced by CRLF in git

Answer-https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important

In Unix systems the end of a line is represented with a line feed (LF). In windows a line is represented with a carriage return (CR) and a line feed (LF) thus (CRLF). when you get code from git that was uploaded from a unix system they will only have an LF.

If you are a single developer working on a windows machine, and you don't care that git automatically replaces LFs to CRLFs, you can turn this warning off by typing the following in the git command line

git config core.autocrlf true

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

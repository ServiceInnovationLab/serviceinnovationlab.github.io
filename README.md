## Installation

Run each of the following steps to get the site up and running.

1. `git clone https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io.git`
2. `cd serviceinnovationlab.github.io`
3. `bundle install`
4. `./serve`

To dramatically reduce the build time, there are two commands that you can run instead of `./serve`:

* `./serve-fast`: This will eliminate all of the blog posts and the search index, but generates all other pages
* `./serve-blog`: This will eliminate all but the latest three blog posts, but keeps the rest of the site intact.

You should be able to see the site at: http://127.0.0.1:4000/site/

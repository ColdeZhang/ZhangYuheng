#!/bin/bash

docker run --rm -v $(pwd):/intro --user 1000:1000 -w /intro ruby sh -c "gem install jekyll -v 3.9.0 && gem install bundler && jekyll new docs"

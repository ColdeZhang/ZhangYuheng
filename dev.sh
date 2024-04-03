#!/bin/bash

docker run --rm -v $(pwd):/intro --user 1000:1000 -it -w /intro -p 4000:4000 ruby sh -c "gem install jekyll bundle && cd docs && bundle && jekyll serve --host 0.0.0.0"

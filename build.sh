#!/bin/bash

docker run --rm -v $(pwd):/intro --user 1000:1000 -w /intro ruby sh -c "cd docs && bundle && jekyll build"

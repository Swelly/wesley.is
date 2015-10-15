#!/usr/bin/env sh

blue="\033[34m"
reset="\033[0m"
red="\033[31m"
green="\033[32m"

function warn {
  echo "$1" > /dev/stderr
}

function info {
  warn "$green$1$reset"
}

function notice {
  warn "$blue$1$reset"
}

set -e

notice "
------------------------------------
* Production Deploy
------------------------------------"

read -p "Are you sure? (yes/n)? " CONT
if [ "$CONT" == "yes" ]; then
  info "Building..."
  NODE_ENV=production npm run webpack
  info "Syncing..."
  s3cmd sync -P --verbose --delete-removed --recursive ./build/* s3://wesley.is
else
  warn "OKAY BYE :)"
fi

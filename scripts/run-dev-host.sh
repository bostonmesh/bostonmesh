#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="/home/yellowcooln/bostonmesh"
NVM_DIR="/home/yellowcooln/.nvm"
NODE_VERSION="v22.22.2"
PORT="${PORT:-3000}"
HOST="${HOST:-0.0.0.0}"

export NVM_DIR
export BROWSER=none

if [ -s "$NVM_DIR/nvm.sh" ]; then
  # Load nvm so the service uses the same Node install as the current user.
  . "$NVM_DIR/nvm.sh"
  nvm use "$NODE_VERSION" >/dev/null
fi

cd "$REPO_DIR"
exec npm run start -- --host "$HOST" --port "$PORT"

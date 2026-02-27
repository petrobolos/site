#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BIN_DIR="$ROOT_DIR/.cache"
BIN_PATH="$BIN_DIR/tailwindcss"
TAILWIND_VERSION="v3.4.17"

if [[ ! -x "$BIN_PATH" ]]; then
  mkdir -p "$BIN_DIR"

  case "$(uname -s)-$(uname -m)" in
    Darwin-arm64)
      ASSET="tailwindcss-macos-arm64"
      ;;
    Darwin-x86_64)
      ASSET="tailwindcss-macos-x64"
      ;;
    Linux-aarch64)
      ASSET="tailwindcss-linux-arm64"
      ;;
    Linux-x86_64)
      ASSET="tailwindcss-linux-x64"
      ;;
    *)
      echo "Unsupported platform: $(uname -s)-$(uname -m)" >&2
      exit 1
      ;;
  esac

  curl --fail -L "https://github.com/tailwindlabs/tailwindcss/releases/download/${TAILWIND_VERSION}/${ASSET}" -o "$BIN_PATH"
  chmod +x "$BIN_PATH"
fi

"$BIN_PATH" \
  -i "$ROOT_DIR/src/styles/tailwind.css" \
  -o "$ROOT_DIR/src/static/css/tailwind.css" \
  --config "$ROOT_DIR/tailwind.config.js" \
  --minify

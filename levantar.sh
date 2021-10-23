#!/bin/bash

montarApp() {
  "$1" build -t punto-de-equilibrio-escom .
  "$1" run --name ESCOM-servicio -p 3000:3000 -v "$(pwd)/src":/usr/src/app/src -it punto-de-equilibrio-escom
}

read -p "¿Podman o Docker? (p/d)): " OPT
case $OPT in
     p | P | podman)
          montarApp "podman"
          ;;
     d | D | docker)
          montarApp "docker"
          ;;
     *)
          echo "opcion invalida"
          ;;
esac
# fullcycle-docker-desafio02-r1
FullCycle 3.0 - Docker - Desafio 02

Release 3 - Correções Diversas:
a) Utilização do Wait For It para esperar a subida do banco
b) Criação de um script (inicia_servico.sh) que será executado no entrypoint do Container
c) Exclusão da rede
d) Outros ajustes

Importante: Precisei incluir um tratamento de repositório para poder fazer atualizações nos containers baseados em Debian 9, conforme o link abaixo (Debian 9/stretch moved to archive.debian.org):
https://unix.stackexchange.com/questions/743839/apt-get-update-failed-to-fetch-debian-amd64-packages-while-building-dockerfile-f

#!/bin/sh

# Прекратить выполнение в случае ошибки
set -e

# Сборка проекта
bun run build

# Переход в папку сборки
cd dist

# Инициализация и деплой
git init
git add -A
git commit -m 'second deploy'
git push -f https://github.com/rexDeus92/Copy-SoundCloud.git master:gh-pages

cd -
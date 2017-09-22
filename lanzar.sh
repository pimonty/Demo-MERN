#!/bin/bash
heroku git:remote -a demoes6
git add .
echo Comit con nombre "$1"
git commit -am "$1"
git push heroku master
heroku open

echo Fin



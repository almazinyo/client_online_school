#!/bin/bash
echo 'Запуск обновления';
rm -rf dist;
ng build;
scp -r dist/* cx50269@92.53.114.85:examator/public_html/
#ssh rdwork_linaz_front@rdwork.beget.tech '
#rm -rf public_html/*;
#mv client-arenda/* public_html/;
#rm -rf client-arenda;'
echo 'Конец обновления';

# core_lib

ng g @nrwl/angular:lib --name=core  --simpleModuleName  --prefix=core --publishable

## cm-core

ng g @nrwl/angular:lib --directory=modules/cm --name=core  --simpleModuleName --lazy --routing  --prefix=cm --publishable --tags=cm-core

## cm-abc-wo

ng g @nrwl/angular:lib --directory=modules/cm --name=abc-wo  --simpleModuleName --lazy --routing  --prefix=cm --publishable --tags=abc-wo

## webpack

npm install webpack webpack-cli webpack-dev-server raw-loader file-loader url-loader to-string-loader style-loader css-loader @angular-devkit/build-angular @ngtools/webpack copy-webpack-plugin @angular/compiler @angular/compiler-cli circular-dependency-plugin source-map-loader mini-css-extract-plugin @angular-devkit/build-optimizer uglifyjs-webpack-plugin --save-dev

## build cmd

ng build core && ng build modules-cm-core && ng build modules-cm-abc-wo

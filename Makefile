install: npm install

run:
	npx babel-node src/bin/gendiff.js before.json after.json

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

test:
	npm run lint:js
	npm run test

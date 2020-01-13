install: npm install

run:
	npx babel-node src/bin/gendiff.js ./src/test/__fixtures__/hexlet-request-before.yml ./src/test/__fixtures__/hexlet-request-after.yml

build:
	rm -rf dist
	npm run build

lint:
	npm run lint:js

test:
	npm run test

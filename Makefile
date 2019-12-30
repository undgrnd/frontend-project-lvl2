install: npm install

build:
	rm -rf dist
	npm run build

lint:
	npm run lint:js

test:
	npm run test

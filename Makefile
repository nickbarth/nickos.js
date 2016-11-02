reload:
	shiftf5
default:
	watchify -t vueify -e src/main.js -o build.js

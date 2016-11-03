default: start
server:
	php -S localhost:5000
watch:
	watchify -t [ vueify ] -t [ babelify --presets [ es2015 ] ] -e src/main.js -o build.js
reload:
	shiftf5
start: 
	# pkill make
	make server & make watch & make reload &

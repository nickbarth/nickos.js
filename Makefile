default:
	watch -x sh -c "browserify -t vueify -e src/main.js -o build.js" 'stat -c %Y src'

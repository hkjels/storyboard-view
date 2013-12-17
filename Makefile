

build: components *.js *.css *.html
	component build --dev --use component-autoprefixer

components:
	component install --dev

clean:
	rm -fr build components


.PHONY: build components clean


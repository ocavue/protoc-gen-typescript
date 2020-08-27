.PHONY: all build test example

all: build test

build: gen
	go install

gen:
	go generate ./...


example: build
	bash example/build_example.sh

# test:
# 	go test ./...

# check:
# 	npx tsc --pretty testdata/output/defaults/*

# checkall:
# 	npx tsc --pretty testdata/output/defaults/*

# checkwatch:
# 	npx tsc -w --pretty testdata/output/defaults/*

# examples:
# 	bash examples.sh

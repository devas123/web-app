#!/bin/sh

OUT_DIR="./libs/protobuf/src/lib"
TS_OUT_DIR="./libs/protobuf/src/lib"
IN_DIR="./libs/protobuf"
PROTOC="$(yarn bin)/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="$(yarn bin)/protoc-gen-ts_proto"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

$PROTOC \
    -I="$IN_DIR" \
    --plugin=protoc-gen-ts="$PROTOC_GEN_TS_PATH" \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --ts_proto_out=$TS_OUT_DIR \
    --ts_proto_opt=useOptionals='messages',exportCommonSymbols=false,enumsAsLiterals=true,unrecognizedEnum=false,stringEnums=true \
    "$IN_DIR"/*.proto

import { defineBuildConfig } from "unbuild"
import { exec } from "child_process"
import { glob } from "tinyglobby"
import { resolve } from "path"
import { rm } from "fs/promises"

export default defineBuildConfig([{
    failOnWarn: false,
    hooks: {
        async "build:done"() {
            const unnecessaryFiles = [
                ...await glob("dist/**/*.d.(c)?ts"),
                ...await glob("dist/types/**/*.*js"),
            ]
            for (const file of unnecessaryFiles) {
                await rm(file)
            }

            exec("npx eslint dist --fix")
        },
    },
    alias: {
        "@": resolve(import.meta.dirname, "./src"),
    },
    entries: [{
        input: "src/index.ts",
        name: "index",
        declaration: true,
    }],
    outDir: "dist",
    rollup: {
        emitCJS: true,
        inlineDependencies: true,
    },
    declaration: "compatible",
}])

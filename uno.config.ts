import { defineConfig, presetUno } from "unocss";
import variantGroup from "@unocss/transformer-variant-group";
import directives from "@unocss/transformer-directives";
import presetIcons from "@unocss/preset-icons";
import { theme } from "@unocss/preset-wind"

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            cdn: "https://cdn.skypack.dev/",
            warn: true,
            extraProperties: {
                display: "block",
                width: "100%",
                height: "100%",
                "z-index": "0",
                "aspect-ratio": "1/1"
            },
        }) as any,
    ],
    transformers: [
        variantGroup(),
        directives()
    ],
    theme: {
        fontFamily: {
            alfa: ["'Alfa Slab One'", theme.fontFamily!.sans]
        },
    },
    safelist: ["hidden"],
});
